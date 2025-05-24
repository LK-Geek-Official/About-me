import emailjs from '@emailjs/browser';

// Initialize EmailJS
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
emailjs.init(PUBLIC_KEY); 