// JavaScript functions for About Tab

function toggleResearchInterests() {
  const content = document.getElementById('research-interests-content');
  const toggleText = document.getElementById('research-toggle-text');
  const toggleIcon = document.getElementById('research-toggle-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleText.textContent = '🔬 Research Interests';
    toggleIcon.textContent = '−';
  } else {
    content.style.display = 'none';
    toggleText.textContent = '🔬 Research Interests';
    toggleIcon.textContent = '+';
  }
}

function toggleSkillsSection() {
  const content = document.getElementById('skills-content');
  const toggleText = document.getElementById('skills-toggle-text');
  const toggleIcon = document.getElementById('skills-toggle-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleText.textContent = '🛠️ Skills';
    toggleIcon.textContent = '−';
  } else {
    content.style.display = 'none';
    toggleText.textContent = '🛠️ Skills';
    toggleIcon.textContent = '+';
  }
}

function toggleSkillCategory(category) {
  const details = document.getElementById(category + '-details');
  const icon = document.getElementById(category + '-icon');
  
  if (details.style.display === 'none') {
    details.style.display = 'block';
    icon.textContent = '−';
  } else {
    details.style.display = 'none';
    icon.textContent = '+';
  }
}

function toggleEducationSection() {
  const timeline = document.getElementById('education-timeline');
  const toggleText = document.getElementById('education-toggle-text');
  const toggleIcon = document.getElementById('education-toggle-icon');
  
  if (timeline.style.display === 'none') {
    timeline.style.display = 'block';
    toggleText.textContent = '🎓 Education';
    toggleIcon.textContent = '−';
  } else {
    timeline.style.display = 'none';
    toggleText.textContent = '🎓 Education';
    toggleIcon.textContent = '+';
  }
}
