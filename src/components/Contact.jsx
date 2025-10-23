
import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [verified, setVerified] = useState(false);
  const formRef = useRef(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' });
  // prefer site key from environment (Vite) but fall back to Google's test key for local/dev
  const siteKey = import.meta?.env?.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  // Load the Google reCAPTCHA script dynamically (v2 checkbox)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let mounted = true;
    if (window.grecaptcha) {
      if (mounted) setRecaptchaReady(true);
      return () => { mounted = false; };
    }

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    const onLoad = () => {
      if (mounted) setRecaptchaReady(true);
    };
    script.addEventListener('load', onLoad);
    document.head.appendChild(script);

    return () => {
      mounted = false;
      script.removeEventListener('load', onLoad);
      // leave the script in place (may be reused); clean global callback
      try { if (typeof window !== 'undefined') delete window.__recaptchaCallback; } catch (err) { console.debug('recaptcha cleanup ignored', err); }
    };
  }, []);

  // Global callback invoked by reCAPTCHA when user completes the widget
  useEffect(() => {
    // attach a global callback name that the widget will call
    if (typeof window === 'undefined') return;
    window.__recaptchaCallback = (token) => {
      // token is also added to the hidden g-recaptcha-response input by grecaptcha
      try {
        // set hidden input value so Formspree receives it
        const form = formRef.current;
        if (form) {
          const hid = form.querySelector("input[name='g-recaptcha-response']");
          if (hid) hid.value = token || '';
        }
      } catch {
        // ignore DOM errors
      }
      setVerified(!!token);
    };
    return () => {
      try { delete window.__recaptchaCallback; } catch (err) { console.debug('recaptcha cleanup ignored', err); }
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // If grecaptcha isn't ready or not verified, prevent submission
    if (!recaptchaReady || !verified) {
        showNotification('Please complete the CAPTCHA to verify you are human.', 'error');
      return;
    }

    const form = formRef.current;
    if (!form) return;

    // Read field values and POST JSON to the backend reviews API.
    const name = form.querySelector("input[name='name']")?.value || '';
    const email = form.querySelector("input[name='email']")?.value || '';
    const comment = form.querySelector("textarea[name='review']")?.value || '';
    const productId = form.querySelector("input[name='productId']")?.value || '';
    const rating = form.querySelector("input[name='rating']")?.value || undefined;

    // backend endpoint (use Vite env if set, otherwise default to localhost)
    const endpoint = import.meta?.env?.VITE_REVIEWS_API || 'http://localhost:5001/api/reviews';

    const payload = {
      productId,
      name,
      email,
      rating: rating ? Number(rating) : undefined,
      comment
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.status === 201 || res.ok) {
          showNotification('Your review is submitted. Thank you!', 'success');
        form.reset();
        try {
          if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.reset) {
            window.grecaptcha.reset();
          }
        } catch (err) {
          console.debug('grecaptcha reset failed', err);
        }
        setVerified(false);
      } else {
        let msg = `Submission failed (status ${res.status})`;
        try { const json = await res.json(); if (json && json.error) msg = json.error; } catch (err) { console.debug('parse error', err); }
          showNotification(msg, 'error');
      }
    } catch (err) {
      console.error('Submit error', err);
        showNotification('Failed to submit review. Please ensure the backend is running at ' + endpoint, 'error');
    }
  }

    function showNotification(message, type = 'info', duration = 4000) {
      setNotification({ show: true, message, type });
      // auto hide
      setTimeout(() => setNotification((s) => ({ ...s, show: false })), duration);
    }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Leave a Review or Comment</h2>
        {/* Note: replace the form action with your Formspree endpoint */}
        <form
          ref={formRef}
          action="https://formspree.io/f/YOUR_UNIQUE_ID"
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email (optional)" />
          </div>
          <div className="form-group">
            <textarea name="review" placeholder="Share your experience, feedback, or a comment..." required></textarea>
          </div>

          {/* reCAPTCHA widget (v2 checkbox). Replace YOUR_RECAPTCHA_SITE_KEY with your site key. */}
          <div className="form-group">
            <div
              className="g-recaptcha"
              data-sitekey={siteKey}
              data-callback="__recaptchaCallback"
            />
          </div>

          {/* Hidden input (grecaptcha will populate a field named 'g-recaptcha-response' automatically)
              keeping this input ensures the token is submitted to Formspree */}
          <input type="hidden" name="g-recaptcha-response" />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!recaptchaReady || !verified}
            aria-disabled={!recaptchaReady || !verified}
          >
            {(!recaptchaReady) ? 'Loading...' : (!verified ? 'Complete CAPTCHA' : 'Submit Review')}
          </button>
        </form>
      </div>
      {notification.show && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9999
        }}>
          <div style={{
            width: 520,
            maxWidth: '92%',
            background: '#fff',
            color: '#111827',
            borderRadius: 6,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            textAlign: 'center',
            pointerEvents: 'auto',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.06)'
          }}>
            {/* top border accent */}
            <div style={{ height: 8, background: (notification.type === 'success' ? '#753B18' : '#b91c1c') }} />
            <div style={{ padding: 28 }}>
              {notification.type === 'success' ? (
                <div>
                  <div style={{ width: 72, height: 72, borderRadius: 72, background: '#e6f4ea', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#753B18" />
                      <path d="M17 8L10 15L7 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 20, letterSpacing: 1, color: '#111827' }}>THANK YOU</h3>
                  <p style={{ marginTop: 10, color: '#4b5563' }}>{notification.message}</p>
                </div>
              ) : (
                <div>
                  <div style={{ width: 56, height: 56, borderRadius: 56, background: '#fee2e2', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#b91c1c" />
                      <path d="M15 9L9 15M9 9l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 18, color: '#b91c1c' }}>Submission Failed</h3>
                  <p style={{ marginTop: 8, color: '#4b5563' }}>{notification.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;