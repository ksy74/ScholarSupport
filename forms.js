document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('involveForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.textContent = 'This form is not connected yet. Please email hello@scholarsupport.org or call 732-986-3508 instead.';
      status.className = 'form-status error';
      return;
    }

    submitBtn.disabled = true;
    status.textContent = 'Sending…';
    status.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Thanks! We\'ll be in touch soon.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please email hello@scholarsupport.org or call 732-986-3508 instead.';
      status.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
    }
  });
});
