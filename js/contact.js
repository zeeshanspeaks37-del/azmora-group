/**
 * AZMORA GROUP - Contact Enquiry Form & Interactive Validation Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('azmora-enquiry-form');
  if (!contactForm) return;

  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email-address');
  const phoneInput = document.getElementById('phone-number');
  const serviceInput = document.getElementById('service-division');
  const messageInput = document.getElementById('message-content');
  const submitBtn = document.getElementById('submit-enquiry-btn');
  const formStatus = document.getElementById('form-status-alert');
  const successModal = document.getElementById('enquiry-success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  // Input sanitization & real-time error clearing
  [fullNameInput, emailInput, phoneInput, serviceInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        clearFieldError(input);
        if (formStatus) formStatus.classList.add('hidden');
      });
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 2) {
      showFieldError(fullNameInput, 'Please provide your full corporate or personal name.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, 'Please provide a valid corporate email address.');
      isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if (!phoneRegex.test(phoneInput.value.trim().replace(/\s+/g, ''))) {
      showFieldError(phoneInput, 'Please provide a valid contact phone number with country code.');
      isValid = false;
    }

    // Validate Service Division
    if (!serviceInput.value) {
      showFieldError(serviceInput, 'Please select a business division for your enquiry.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      showFieldError(messageInput, 'Please provide detailed enquiry requirements (minimum 15 characters).');
      isValid = false;
    }

    if (!isValid) {
      if (formStatus) {
        formStatus.textContent = 'Please review the highlighted fields above before submitting.';
        formStatus.className = 'p-4 rounded-xl text-sm font-medium bg-red-950/60 border border-red-500/40 text-red-200 block mb-6 animate-pulse';
        formStatus.classList.remove('hidden');
      }
      return;
    }

    // Form is valid: show loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing Dispatch...
    `;

    // Simulate reliable corporate transmission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Generate reference ID
      const refId = 'AZM-' + Math.floor(100000 + Math.random() * 900000);
      const refEl = document.getElementById('enquiry-reference-id');
      if (refEl) refEl.textContent = refId;

      // Display luxury success modal
      if (successModal) {
        successModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      // Reset form
      contactForm.reset();
      if (window.lucide) window.lucide.createIcons();
    }, 1200);
  });

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  function showFieldError(input, message) {
    input.classList.add('border-red-500', 'bg-red-950/20');
    input.classList.remove('border-gold-500/30');

    let errorEl = input.parentElement.querySelector('.field-error-msg');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error-msg text-xs text-red-400 mt-1 block font-medium';
      input.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }

  function clearFieldError(input) {
    input.classList.remove('border-red-500', 'bg-red-950/20');
    input.classList.add('border-gold-500/30');

    const errorEl = input.parentElement.querySelector('.field-error-msg');
    if (errorEl) {
      errorEl.remove();
    }
  }
});
