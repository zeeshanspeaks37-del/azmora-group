/**
 * AZMORA GROUP - Luxury Animation Engine (GSAP + ScrollTrigger + Lenis)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    console.log('Azmora Group: Reduced motion requested by system.');
    return;
  }

  initLenisSmoothScroll();
  initGsapAnimations();
  initCardTiltEffect();
});

// 1. Lenis Smooth Inertial Scrolling
function initLenisSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger if present
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }
}

// 2. GSAP ScrollTrigger Animations
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero Section Cinematic Reveal
  const heroBadge = document.querySelector('.hero-badge');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroActions = document.querySelector('.hero-actions');
  const heroStats = document.querySelector('.hero-stats');

  if (heroTitle) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroBadge) {
      heroTl.fromTo(heroBadge, 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
    }

    heroTl.fromTo(heroTitle, 
      { opacity: 0, y: 35 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      '-=0.5'
    );

    if (heroSubtitle) {
      heroTl.fromTo(heroSubtitle, 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.6'
      );
    }

    if (heroActions) {
      heroTl.fromTo(heroActions, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.5'
      );
    }

    if (heroStats) {
      heroTl.fromTo(heroStats, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.4'
      );
    }
  }

  // Scroll Reveal: Fade & Slide Up (.reveal-up)
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Scroll Reveal: Staggered Cards (.reveal-stagger-group)
  const staggerGroups = document.querySelectorAll('.reveal-stagger-group');
  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll('.reveal-stagger-item');
    if (items.length > 0) {
      gsap.fromTo(items,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  });

  // Animated Numbers / Counters (.counter-number)
  const counters = document.querySelectorAll('.counter-number');
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target') || '0', 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    if (target > 0) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          counter.textContent = Math.floor(obj.val).toLocaleString() + suffix;
        }
      });
    }
  });

  // Parallax on Hero Image (.hero-parallax)
  const parallaxImg = document.querySelector('.hero-parallax');
  if (parallaxImg && typeof ScrollTrigger !== 'undefined') {
    gsap.to(parallaxImg, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: parallaxImg.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }
}

// 3. Subtle 3D Card Hover Perspective Sheen
function initCardTiltEffect() {
  const cards = document.querySelectorAll('.luxury-tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}
