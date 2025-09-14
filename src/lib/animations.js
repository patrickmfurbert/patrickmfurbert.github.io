// Animation functions for the portfolio page

// Smooth scroll to section when clicking on navigation links
export function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Fade in elements as they scroll into view
export function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
}

// Set up dark/light mode toggle
export function setupThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  
  if (toggleButton) {
    // Check for saved theme preference or respect OS preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the right theme on page load
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    } else {
      toggleButton.textContent = '🌙';
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️';
      } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙';
      }
    });
  }
}