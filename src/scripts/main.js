/**
 * NEXVIX Innovations - Core Interactive Scripts
 */

function initAll() {
  initNavbar();
  initAnimatedCounters();
  initContactForm();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* ==========================================================================
   NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.site-navbar');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.navbar-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky shadow effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  toggleBtn?.addEventListener('click', () => {
    const isOpen = navMenu?.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
      toggleBtn?.classList.remove('active');
      toggleBtn?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   ANIMATED COUNTERS (About Section)
   ========================================================================== */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-target') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeOut = 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeOut * targetValue);
          el.textContent = currentCount + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = targetValue + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  statNumbers.forEach(el => observer.observe(el));
}

/* ==========================================================================
   CONTACT FORM VALIDATION & HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBanner = document.getElementById('formSuccessBanner');
  if (!form) return;

  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    service: document.getElementById('service'),
    message: document.getElementById('message')
  };

  // Helper validation functions
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(field, testFn, errorId) {
    const errorEl = document.getElementById(errorId);
    if (!testFn(field.value.trim())) {
      field.classList.add('error');
      if (errorEl) errorEl.classList.add('visible');
      return false;
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  }

  // Real-time input listener
  fields.name?.addEventListener('input', () => {
    validateField(fields.name, val => val.length >= 2, 'nameError');
  });

  fields.email?.addEventListener('input', () => {
    validateField(fields.email, validateEmail, 'emailError');
  });

  fields.message?.addEventListener('input', () => {
    validateField(fields.message, val => val.length >= 10, 'messageError');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(fields.name, val => val.length >= 2, 'nameError');
    const isEmailValid = validateField(fields.email, validateEmail, 'emailError');
    const isMessageValid = validateField(fields.message, val => val.length >= 10, 'messageError');

    if (isNameValid && isEmailValid && isMessageValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const errorBanner = document.getElementById('formErrorBanner');
      const errorMessage = document.getElementById('formErrorMessage');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"></path>
          </svg>
          Sending Request...
        `;
      }

      if (errorBanner) errorBanner.classList.remove('active');

      const payload = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone ? fields.phone.value.trim() : '',
        service: fields.service ? fields.service.value : 'Website Development',
        message: fields.message.value.trim(),
        honeypot: document.getElementById('hp_company_website')?.value || '',
      };

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          const data = await response.json().catch(() => ({}));
          if (response.ok && data.success) {
            form.reset();
            if (successBanner) {
              successBanner.classList.add('visible');
              successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
              setTimeout(() => {
                successBanner.classList.remove('visible');
              }, 8000);
            }
          } else {
            if (errorBanner) {
              if (errorMessage) errorMessage.textContent = data.error || 'Unable to submit your request. Please try again.';
              errorBanner.classList.add('active');
            }
          }
        })
        .catch(() => {
          if (errorBanner) {
            if (errorMessage) errorMessage.textContent = 'A network error occurred. Please try again or reach out on WhatsApp.';
            errorBanner.classList.add('active');
          }
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
        });
    }
  });
}

/* ==========================================================================
   SMOOTH SCROLL NAVIGATION
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navbarHeight = document.querySelector('.site-navbar')?.offsetHeight || 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
