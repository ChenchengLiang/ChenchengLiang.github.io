[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

function Find-Executable {
  param(
    [Parameter(Mandatory)]
    [string]$CommandName,

    [Parameter(Mandatory)]
    [string[]]$FallbackPaths
  )

  $command = Get-Command $CommandName -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  foreach ($path in $FallbackPaths) {
    if (Test-Path -LiteralPath $path) {
      return $path
    }
  }

  return $null
}

function Test-DockerEngine {
  param(
    [Parameter(Mandatory)]
    [string]$DockerExe
  )

  try {
    $null = & $DockerExe info --format '{{.ServerVersion}}' 2>$null
    return $LASTEXITCODE -eq 0
  }
  catch {
    return $false
  }
}

$projectRoot = $PSScriptRoot
$dockerExe = Find-Executable -CommandName 'docker.exe' -FallbackPaths @(
  (Join-Path $env:LOCALAPPDATA 'Programs\DockerDesktop\resources\bin\docker.exe'),
  (Join-Path $env:ProgramFiles 'Docker\Docker\resources\bin\docker.exe')
)

if (-not $dockerExe) {
  throw 'Docker CLI was not found. Install Docker Desktop, then open a new PowerShell window.'
}

if (-not (Test-DockerEngine -DockerExe $dockerExe)) {
  $dockerDesktopExe = Find-Executable -CommandName 'Docker Desktop.exe' -FallbackPaths @(
    (Join-Path $env:LOCALAPPDATA 'Programs\DockerDesktop\Docker Desktop.exe'),
    (Join-Path $env:ProgramFiles 'Docker\Docker\Docker Desktop.exe')
  )

  if (-not $dockerDesktopExe) {
    throw 'Docker Desktop was not found.'
  }

  Write-Host 'Docker engine is not running. Starting Docker Desktop...'
  Start-Process -FilePath $dockerDesktopExe

  $deadline = (Get-Date).AddMinutes(2)
  while ((Get-Date) -lt $deadline) {
    Start-Sleep -Seconds 2
    if (Test-DockerEngine -DockerExe $dockerExe) {
      break
    }
  }

  if (-not (Test-DockerEngine -DockerExe $dockerExe)) {
    throw 'Docker Desktop did not become ready within two minutes. Open Docker Desktop and check its status.'
  }
}

foreach ($port in 4000, 35729) {
  $listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
  if ($listener) {
    $ownerPid = ($listener | Select-Object -First 1).OwningProcess
    throw "Port $port is already in use by process $ownerPid. Stop that process, then run this script again."
  }
}

$containerCommand = @'
set -e
apt-get update >/dev/null
apt-get install -y build-essential >/dev/null
gem install bundler -v 2.3.25 --no-document >/dev/null
bundle config set path vendor/bundle
bundle install
jekyll_entry=$(bundle show jekyll)/exe/jekyll
sed -i 's/\r$//' $jekyll_entry
bundle exec ruby $jekyll_entry clean
bundle exec ruby $jekyll_entry serve --livereload --incremental --force_polling --host 0.0.0.0
'@
$containerCommand = $containerCommand.Replace("`r`n", "`n")

Write-Host 'Starting Jekyll at http://localhost:4000'
Write-Host 'Press Ctrl+C to stop the server.'

& $dockerExe run --rm --init `
  --publish '127.0.0.1:4000:4000' `
  --publish '127.0.0.1:35729:35729' `
  --mount "type=bind,source=$projectRoot,target=/site" `
  --workdir /site `
  ruby:3.2-bookworm `
  bash -lc $containerCommand

if ($LASTEXITCODE -notin 0, 130) {
  throw "Jekyll container exited with code $LASTEXITCODE."
}

Write-Host 'Jekyll server stopped.'
