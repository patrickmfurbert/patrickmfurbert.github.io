// Animation functions for the portfolio page

// Smooth scroll to section when clicking on navigation links
export function setupSmoothScroll(): void {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
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

// New function specifically for navbar hide/show behavior
export function setupNavbarBehavior(): void {
  if (typeof window === 'undefined') return;
  
  // Get the navbar element
  const navbar = document.querySelector('.nav-container') as HTMLElement;
  if (!navbar) {
    return;
  }
  
  // Track if navbar is hidden
  let isHidden = false;
  let lastScrollY = window.scrollY;
  
  // Add click handlers to navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      // Don't preventDefault here as we still want the smooth scroll to work
      
      // Hide the navbar
      navbar.style.transform = 'translateY(-100%)';
      isHidden = true;
    });
  });
  
  // Show navbar on scroll
  window.addEventListener('scroll', () => {
    // If navbar is hidden and user has scrolled, show it
    if (isHidden && Math.abs(window.scrollY - lastScrollY) > 10) {
      navbar.style.transform = 'translateY(0)';
      isHidden = false;
    }
    
    lastScrollY = window.scrollY;
  });
}

// Fade in elements as they scroll into view
export function setupScrollAnimations(): void {
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
export function setupThemeToggle(): void {
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