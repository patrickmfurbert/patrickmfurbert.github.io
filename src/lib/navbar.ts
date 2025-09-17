// Direct navbar manipulation script
// This is a simple, standalone script for navbar hide/show functionality

export function setupNavbar() {
  // Wait for DOM to be loaded
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
  });
  
  // Also try to init immediately in case DOM is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initNavbar, 1);
  }
  
  function initNavbar() {
    const navbar = document.querySelector('.nav-container') as HTMLElement;
    if (!navbar) {
      return;
    }
    
    // Set initial state
    navbar.style.transform = 'translateY(0)';
    let isHidden = false;
    let isScrolling = false;
    
    // Prevent showing navbar during active scrolling
    let scrollTimeout: number | null = null;
    
    // Add click handlers to all nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default to take full control
        
        // 1. First hide the navbar immediately
        navbar.style.transform = 'translateY(-100%)';
        isHidden = true;
        
        // 2. Get the target element
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        // 3. Set a flag that scrolling is in progress
        isScrolling = true;
        
        // 4. Clear any existing scroll timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // 5. Scroll to target after a small delay to ensure navbar is hidden
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // 6. Set a timeout to indicate scrolling is complete
          scrollTimeout = window.setTimeout(() => {
            isScrolling = false;
            scrollTimeout = null;
          }, 1000) as unknown as number;
        }, 50);
      });
    });
    
    // Show navbar on scroll only if not actively scrolling to a target
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      // Don't show navbar during programmatic scrolling
      if (isScrolling) return;
      
      if (isHidden && Math.abs(window.scrollY - lastScrollY) > 5) {
        navbar.style.transform = 'translateY(0)';
        isHidden = false;
      }
      lastScrollY = window.scrollY;
    });
  }
}