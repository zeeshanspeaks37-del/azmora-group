/**
 * AZMORA GROUP - Main Corporate Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initServicesDropdown();
  initLucideIcons();
  initFooterYear();
  highlightActiveLink();
});

// Initialize Lucide SVG Icons
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('nav-scrolled', 'py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.remove('nav-scrolled', 'py-3');
      navbar.classList.add('py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// Mobile Slide-Out Menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (!mobileMenuBtn || !mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    if (mobileOverlay) {
      mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
      mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add('translate-x-full');
    if (mobileOverlay) {
      mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
  };

  mobileMenuBtn.addEventListener('click', openDrawer);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // Close when clicking mobile links
  const mobileLinks = mobileDrawer.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// Services Dropdown Menu for Desktop
function initServicesDropdown() {
  const dropdownToggle = document.getElementById('services-dropdown-toggle');
  const dropdownMenu = document.getElementById('services-dropdown-menu');

  if (!dropdownToggle || !dropdownMenu) return;

  let timeoutId = null;

  const showDropdown = () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
    dropdownMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
    const chevron = dropdownToggle.querySelector('[data-lucide="chevron-down"]');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  };

  const hideDropdown = () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
      dropdownMenu.classList.add('opacity-0', 'invisible', 'translate-y-2');
      const chevron = dropdownToggle.querySelector('[data-lucide="chevron-down"]');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    }, 150);
  };

  dropdownToggle.parentElement.addEventListener('mouseenter', showDropdown);
  dropdownToggle.parentElement.addEventListener('mouseleave', hideDropdown);
  dropdownMenu.addEventListener('mouseenter', showDropdown);
  dropdownMenu.addEventListener('mouseleave', hideDropdown);
}

// Highlight Current Active Page in Navigation
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check if path matches current pathname or file name
    if (
      (currentPath.endsWith('/') && (href === '/' || href === 'index.html')) ||
      (currentPath.includes(href) && href !== '/' && href !== 'index.html')
    ) {
      link.classList.add('text-gold-radiant', 'font-semibold');
      link.classList.remove('text-slate-300');
    }
  });
}

// Dynamic Footer Year
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
