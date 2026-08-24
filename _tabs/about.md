---
# the default layout is 'page'
icon: fas fa-user
order: 5
---

<link rel="stylesheet" href="/assets/css/style_about_tab.css">
<script src="/assets/js/about_tab.js"></script>





Hello! I'm Chencheng Liang, a Ph.D. in Computer Science based in Sweden.

My work focuses on applying AI to real-world problems. With a research background in machine learning, graph neural networks, and automated reasoning, I build AI-driven systems and workflows that connect advanced models with practical applications in automation, data processing, and digital business.

Information on this site is compiled into my [cv](/assets/cv/resume.pdf).

<button class="education-section-toggle" onclick="toggleEducationSection()">
  <span id="education-toggle-text">🎓 Education</span>
  <span id="education-toggle-icon">+</span>
</button>

<div class="education-timeline" id="education-timeline" style="display: none;">
  <div class="education-entry">
    <div class="education-header">
      <h3>PhD in Computer Science <span class="year">2025</span></h3>
      <p class="institution"><em>Uppsala University</em> | Sweden</p>
    </div>
    <div class="education-details">
      <ul>
        <li>Thesis title: "Learning to Guide Automated Reasoning: A GNN-Based Framework"</li>
        <li>Advisors: <a href="https://www.philipp.ruemmer.org/" target="_blank">Philipp Rümmer</a>, <a href="https://user.it.uu.se/~wangyi/" target="_blank">Yi Wang</a>, <a href="https://www.linkedin.com/in/marc-brockschmidt-995866b0/?originalSubdomain=uk" target="_blank">Marc Brockschmidt</a></li>
        <li>Opponent: <a href="https://www.dhbw-stuttgart.de/studium/bachelor-studienangebot/technik/informatik/ansprechpersonen/prof-dr-rer-nat-stephan-schulz/" target="_blank">Stephan Schulz</a></li>
        <li>Committee: <a href="https://www.irif.fr/~sighirea/" target="_blank">Mihaela Sighireanu</a>, <a href="https://korovin.gitlab.io/" target="_blank">Konstantin Korovin</a>, <a href="https://www.uu.se/en/contact-and-organisation/staff?query=N3-454" target="_blank">Christian Rohner</a>, <a href="https://wrigstad.com/" target="_blank">Tobias Wrigstad</a></li>
        <li>Chair: <a href="https://user.it.uu.se/~bengt/" target="_blank">Bengt Jonsson</a></li>
      </ul>
    </div>
  </div>

  <div class="education-entry">
    <div class="education-header">
      <h3>Master Degree in Computer Science <span class="year">2018</span></h3>
      <p class="institution"><em>University of Göttingen
</em> | Germany</p>
    </div>
    <div class="education-details">
      <ul>
        <li>Thesis title: "Topology Control Using Fuzzy Game Theory in Mobile Underwater Sensor Networks"</li>
        <li>Grade: 1.0 (Sehr gut, highest distinction)</li>
      </ul>
    </div>
  </div>

  <div class="education-entry">
    <div class="education-header">
      <h3>Bachelor in Software Engineering <span class="year">2014</span></h3>
      <p class="institution"><em>Chengdu University</em> | China</p>
    </div>
    <div class="education-details">
      <ul>
        <li>Having a wide range of computer science courses, including programming, computer networks, algorithms and architectures</li>
        <li>Graduated 1st in class</li>
      </ul>
    </div>
  </div>
</div>

<button class="research-interests-toggle" onclick="toggleResearchInterests()">
  <span id="research-toggle-text">🔬 Research Interests</span>
  <span id="research-toggle-icon">+</span>
</button>

<div class="research-interests-content" id="research-interests-content" style="display: none;">
  <ul>
    <li>Neural network training and deep learning fundamentals</li>
    <li>Machine learning and Large Language Models (LLMs)</li>
    <li>Symbolic reasoning and formal logic</li>
    <li>AI workflow automation and practical applications</li>
    <li>Integration of symbolic reasoning with Graph Neural Networks (GNNs)</li>
    <li>Enhancing AI system effectiveness and trustworthiness</li>
    <li>Rigorous reasoning in real-world automation solutions</li>
  </ul>
</div>

<button class="skills-section-toggle" onclick="toggleSkillsSection()">
  <span id="skills-toggle-text">🛠️ Skills</span>
  <span id="skills-toggle-icon">+</span>
</button>

<div class="skills-content" id="skills-content" style="display: none;">
  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('programming')">
      <h4>Programming & Development <span class="skill-toggle-icon" id="programming-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="programming-details" style="display: none;">
      <ul>
<li>Python, Scala, Java, C/C++, JavaScript, HTML/CSS</li>
<li>PyTorch, TensorFlow, PyG, Deep Learning, GNNs, Transformers, LLM workflows</li>
<li>Git, Linux/Unix, Docker, Bash scripting, Slurm</li>
<li>AWS, Cloudflare, Docker-based deployment, DNS/CDN configuration</li>
<li>Web scraping, data pipelines, structured outputs, workflow automation</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('data-ai')">
      <h4>Data Science & AI <span class="skill-toggle-icon" id="data-ai-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="data-ai-details" style="display: none;">
      <ul>
        <li>Deep Learning (CNN, RNN, GNN, Transformers)</li>
        <li>Reinforcement Learning (Value-based and policy gradient methods)</li>
        <li>Natural Language Processing (LLMs, text mining)</li>
        <li>Classical ML Algorithms: SVM, clustering methods, Bayesian networks</li>
        <li>Swarm & Evolutionary Computation (GA, PSO, ACO)</li>
        <li>Automated model training on computing clusters (SLURM, HPC environments) </li>
        <li>Big data preprocessing, feature engineering, visualization (Matplotlib, Pandas)</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('research')">
      <h4>Research & Analysis <span class="skill-toggle-icon" id="research-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="research-details" style="display: none;">
      <ul>
        <li>Formal verification, constraint solving</li>
        <li>Algorithm design & complexity analysis</li>
        <li>Academic writing & peer-reviewed publishing</li>
        <li>LaTeX, Markdown</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('tools')">
      <h4>Tools & Platforms <span class="skill-toggle-icon" id="tools-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="tools-details" style="display: none;">
      <ul>
        <li>VMware, VirtualBox, SSH & remote computing</li>
        <li>Cloud platforms (AWS, Alibaba cloud)</li>
        <li>VS Code, IntelliJ, Cursor, Jupyter</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('languages')">
      <h4>Languages <span class="skill-toggle-icon" id="languages-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="languages-details" style="display: none;">
      <ul>
        <li>Chinese (Native), English (Fluent), Japanses (Basic)</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('creative')">
      <h4>Creative & Media <span class="skill-toggle-icon" id="creative-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="creative-details" style="display: none;">
      <ul>
        <li>AI-generated art (e.g., Stable Diffusion, MidJourney)</li>
        <li>Digital art curation & customization</li>
        <li>Social media content creation & personal branding</li>
      </ul>
    </div>
  </div>

  <div class="skill-category">
    <div class="skill-category-header" onclick="toggleSkillCategory('business')">
      <h4>Business & Consulting <span class="skill-toggle-icon" id="business-icon">+</span></h4>
    </div>
    <div class="skill-category-details" id="business-details" style="display: none;">
      <ul>
        <li>International trade consulting (import/export workflow)</li>
        <li>Project management & team collaboration (Agile, GitHub Projects)</li>
        <li>Entrepreneurship & startup studio experience</li>
      </ul>
    </div>
  </div>
</div>



<!-- ## Contact

- Email: <u>chencheng.liang2077[at]gmail.com</u>
- GitHub: [ChenchengLiang](https://github.com/ChenchengLiang) -->

> **Contact:** You can reach me reliably by email: chencheng.liang2077[at]gmail.com
{: .prompt-tip }
