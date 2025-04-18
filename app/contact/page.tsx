'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    toast.success('Message sent successfully!');
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/133d8bc61b6157db08b8359eb48bf732"
        method="POST"
        className="w-full max-w-lg bg-base-200 shadow-xl rounded-2xl p-8 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Hidden inputs for FormSubmit options */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting me! I'll reply to you as soon as possible."
        />

        <div>
          <label htmlFor="name" className="label text-base-content">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-base-100 text-base-content px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="label text-base-content">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-base-100 text-base-content px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="label text-base-content">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-base-100 text-base-content px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </motion.section>
  );
}