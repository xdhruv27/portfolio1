'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-center bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg md:text-xl leading-relaxed text-base-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I&apos;m{" "}
        <span className="font-semibold text-primary">Dhruv Sinha</span>, a
        dedicated Deep Learning and Generative AI enthusiast currently working on
        real-world AI solutions such as{" "}
        <span className="font-semibold text-base-content">Flight Delay Prediction</span> and{" "}
        <span className="font-semibold text-base-content">Vehicle Speed Tracking</span> systems.
      </motion.p>

      <motion.p
        className="max-w-2xl text-lg md:text-xl leading-relaxed text-base-content mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I leverage frameworks like <span className="font-semibold text-base-content">Keras</span>,{" "}
        <span className="font-semibold text-base-content">YOLO</span>, and{" "}
        <span className="font-semibold text-base-content">Hono</span>, and deploy solutions using{" "}
        <span className="font-semibold text-base-content">Azure</span> and{" "}
        <span className="font-semibold text-base-content">GitHub Actions</span>. I'm driven by curiosity, continuous learning,
        and the goal to create intelligent systems that solve real-world problems.
      </motion.p>
    </motion.section>
  );
};

export default AboutPage;
