#!/usr/bin/env bash
rm -r _site/*

docker run --rm -p 4000:4000 -p 35729:35729 \
  -v "$PWD":/site -w /site ruby:3.2-bookworm bash -lc \
  "apt-get update && apt-get install -y build-essential >/dev/null && \
   gem install bundler >/dev/null && bundle config set path vendor/bundle && \
   bundle install && bundle exec jekyll serve --livereload --incremental --host 0.0.0.0"
