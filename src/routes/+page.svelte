<script>
  import { onMount } from 'svelte';
  import { setupSmoothScroll, setupScrollAnimations, setupThemeToggle } from '$lib/animations';

  // Try to import your profile photo if it exists
  // Note: You'll need to manually add your profile photo to the assets folder
  let profilePhoto;
  try {
    profilePhoto = '/patrick-photo.jpg';
  } catch (e) {
    // If photo doesn't exist, use initials as fallback
    profilePhoto = null;
  }
  
  onMount(() => {
    setupSmoothScroll();
    setupScrollAnimations();
    setupThemeToggle();
  });
</script>

<div class="nav-container">
  <nav class="nav-links">
    <a href="#summary">Summary</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#community">Community</a>
    <a href="#publications">Publications</a>
  </nav>
</div>

<div class="container fade-in">
  <div class="accent-circle accent-circle-1"></div>
  <div class="accent-circle accent-circle-2"></div>
  <header class="header animate-on-scroll">
    <div class="accent-dot-grid">
      {#each Array(16) as _, i}
        <div class="dot"></div>
      {/each}
    </div>
    
    {#if profilePhoto}
      <img src={profilePhoto} alt="Patrick Furbert" class="profile-img floating" />
    {:else}
      <div class="profile-initials floating">PF</div>
    {/if}
    <h1>Patrick Furbert</h1>
    <p>Software Engineer</p>
    
    <div class="contact-info">

      <p><a href="tel:+15853487505">(585) 348-7505</a> | <a href="mailto:patrickmfurbert@gmail.com">patrickmfurbert@gmail.com</a></p>
    </div>
    
    <div class="social-links">
      <a href="https://linkedin.com/in/furbert" class="social-link" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/patrickmfurbert" class="social-link" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </header>

  <section id="summary" class="animate-on-scroll">
    <h2>Professional Summary</h2>
    <p>
      Results-driven Software Engineer with 3+ years of experience developing and deploying applications in OpenShift environments. 
      Combines strong technical expertise in Java, Spring Boot, Python, and full-stack development with exceptional leadership and 
      problem-solving skills gained through healthcare management roles. Proven track record of mentoring teams, resolving complex 
      technical issues, and collaborating effectively with cross-functional stakeholders. Published author with a commitment to 
      continuous learning and community engagement through FIRST Robotics mentorship.
    </p>
  </section>

  <div class="section-divider"></div>
  
  <section id="experience" class="animate-on-scroll">
    <h2>Professional Experience</h2>
    
    <div class="experience-item">
      <div class="job-title">
        <span>Software Engineer II</span>
        <span>February 2022 - Present</span>
      </div>
      <div class="company">Paychex - Rochester, NY</div>
      <ul>
        <li>Collaborate in an Agile team of 10 developers to update, test, and deploy applications/starter libraries in OpenShift environment</li>
        <li>Analyze and resolve defects/incidents while providing timely feedback to internal customers</li>
        <li>Conduct research spikes on new libraries for Solution Lead to evaluate for integration</li>
        <li>Worked with team triangle for planning out work for team for multiple increments</li>
        <li>Collaborated with Solution Lead and Senior Developer on application designs</li>
        <li>Participate in biweekly department standards meetings</li>
      </ul>
    </div>
    
    <div class="experience-item">
      <div class="job-title">
        <span>Inpatient Dialysis RN</span>
        <span>April 2020 - February 2022</span>
      </div>
      <div class="company">URMC Strong Memorial Hospital - Rochester, NY</div>
      <ul>
        <li>Provided initiation, monitoring, and documentation of hemodialysis treatments for acute and chronic dialysis patients</li>
        <li>Assessed patient response to HD treatment therapy and intradialytic infusions, adjusting treatment plans as indicated by Nephrology Provider</li>
      </ul>
    </div>
    
    <div class="experience-item">
      <div class="job-title">
        <span>Operating Room RN III</span>
        <span>April 2013 - March 2020</span>
      </div>
      <div class="company">URMC Strong Memorial Hospital - Rochester, NY</div>
      <ul>
        <li>Served in multiple roles: Staff RN, Primary Service Nurse, and POD Coordinator</li>
        <li>Completed daily OR nursing staffing assignments for surgical subspecialties</li>
        <li>Collaborated with Sterile Processing/Supply Chain to minimize supply and instrument delays</li>
        <li>Provided professional guidance, supervision, and leadership to 15+ Pod Members</li>
      </ul>
    </div>
  </section>

  <div class="section-divider"></div>
  
  <section id="education" class="animate-on-scroll">
    <h2>Education</h2>
    
    <div class="education-item">
      <div class="degree">
        <span>Bachelor of Science, Computer Science</span>
        <span>December 2021</span>
      </div>
      <div class="school">Oregon State University, Corvallis, OR</div>
      <p>GPA: 3.7/4.0</p>
    </div>
    
    <div class="education-item">
      <div class="degree">
        <span>Bachelor of Science, Nursing</span>
        <span>December 2015</span>
      </div>
      <div class="school">University of Rochester, Rochester, NY</div>
    </div>
    
    <div class="education-item">
      <div class="degree">
        <span>Bachelor of Science, Microbiology</span>
        <span>June 2008</span>
      </div>
      <div class="school">University of Rochester, Rochester, NY</div>
    </div>
  </section>

  <div class="section-divider"></div>
  
  <section id="skills" class="animate-on-scroll">
    <h2>Technical Skills</h2>
    
    <div class="skills-container">
      <div class="skills-category">
        <h3>Languages & Frameworks (Proficient)</h3>
        <div class="skills-list">
          <span class="skill-tag primary-skill">Java</span>
          <span class="skill-tag primary-skill">Spring Boot</span>
          <span class="skill-tag primary-skill">Gradle</span>
          <span class="skill-tag primary-skill">Python</span>
          <span class="skill-tag primary-skill">JavaScript</span>
          <span class="skill-tag primary-skill">HTML/CSS</span>
          <span class="skill-tag primary-skill">React</span>
          <span class="skill-tag primary-skill">Node.js</span>
          <span class="skill-tag primary-skill">SQL (Oracle)</span>
          <span class="skill-tag primary-skill">MongoDB</span>
          <span class="skill-tag primary-skill">Docker</span>
          <span class="skill-tag primary-skill">Gauge</span>
          <span class="skill-tag primary-skill">AssertjDB</span>
          <span class="skill-tag primary-skill">QueryDSL</span>
          <span class="skill-tag primary-skill">Dapr</span>
        </div>
      </div>
      
      <div class="skills-category">
        <h3>Languages & Frameworks (Familiar)</h3>
        <div class="skills-list">
          <span class="skill-tag secondary-skill">C</span>
          <span class="skill-tag secondary-skill">C#</span>
          <span class="skill-tag secondary-skill">Dart</span>
          <span class="skill-tag secondary-skill">Flutter</span>
          <span class="skill-tag secondary-skill">Rust</span>
        </div>
      </div>
      
      <div class="skills-category">
        <h3>Technologies & Tools</h3>
        <div class="skills-list">
          <span class="skill-tag tool-skill">Agile</span>
          <span class="skill-tag tool-skill">CI/CD</span>
          <span class="skill-tag tool-skill">Jira</span>
          <span class="skill-tag tool-skill">Bitbucket/Git</span>
          <span class="skill-tag tool-skill">Jenkins</span>
          <span class="skill-tag tool-skill">Splunk</span>
          <span class="skill-tag tool-skill">REST APIs</span>
          <span class="skill-tag tool-skill">Postman</span>
          <span class="skill-tag tool-skill">OpenShift</span>
          <span class="skill-tag tool-skill">IntelliJ/VSCode</span>
          <span class="skill-tag tool-skill">Linux</span>
          <span class="skill-tag tool-skill">Kafka</span>
        </div>
      </div>
    </div>
  </section>
  
  <div class="section-divider"></div>
  
  <section id="community" class="animate-on-scroll">

    <h2>Community Service</h2>
    <div class="experience-item">
      <div class="job-title">
        <span>First Robotics Mentor</span>
        <span>2025</span>
      </div>
      <div class="company">Hilton High School - Hilton, NY</div>
      <p>Java Programming Mentor for Robotic Cadets Club</p>
    </div>
  </section>
  
  <div class="section-divider"></div>
  
  <section id="publications" class="animate-on-scroll">

    <h2>Publications</h2>
    <p>
      Furbert, P., Lu, C., Winograd, N., & DeLouise, L. (2008). Label-free optical detection of peptide synthesis on a porous silicon scaffold/sensor. 
      <em>Langmuir</em>, 24(6), 2908-2915. doi: 10.1021/la703053h
    </p>
  </section>
  
  <button id="theme-toggle" aria-label="Toggle dark/light mode">🌙</button>
</div>
