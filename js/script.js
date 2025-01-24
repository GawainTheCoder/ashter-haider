document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  // Function to close mobile menu
  const closeMobileMenu = () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-50');
    mobileMenuOverlay.classList.add('opacity-0', 'invisible');
    menuTrigger.setAttribute('aria-expanded', 'false');
  };

  // Toggle mobile menu open/close
  menuTrigger.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.classList.contains('translate-x-0');
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.remove('-translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
      mobileMenuOverlay.classList.add('opacity-50');
      menuTrigger.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu when clicking the overlay
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // Add navigation functionality to mobile menu links
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMobileMenu();

      // If it's an external link (like Twitter), let it proceed normally
      if (link.getAttribute('href').startsWith('http')) {
        return;
      }

      // Prevent default and navigate to the page
      e.preventDefault();
      window.location.href = link.getAttribute('href');
    });
  });
});