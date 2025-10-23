reCAPTCHA setup for local and production

- The contact form uses Google reCAPTCHA v2 (checkbox).
- For local testing the component falls back to Google's test site key (public) which always returns a valid token for testing: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`.

To use your own key:
1. Register your site at https://www.google.com/recaptcha/admin and get a site key and secret.
2. Create a `.env` file at the project root and add:

VITE_RECAPTCHA_SITE_KEY=your_site_key_here

3. Restart the dev server.

Security:
- Always verify the `g-recaptcha-response` token server-side with your secret key before trusting the result. Formspree may offer built-in verification if you configure it on their dashboard; otherwise forward the token to your server and call Google's verification API.
