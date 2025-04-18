
// const AboutPage = () => {
//   return (
//     <section className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
//         About Me
//       </h1>

//       <p className="max-w-2xl text-lg md:text-xl text-base-content leading-relaxed">
//         I&apos;m{" "}
//         <span className="font-semibold text-primary">Kethan Gowda</span>, a
//         passionate Fullstack AI Developer Intern currently working at{" "}
//         <a
//           href="https://stacklane.co/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline hover:text-secondary"
//         >
//           StackLane
//         </a>
//         . I specialize in building robust web applications using technologies
//         like <span className="font-semibold text-base-content">React</span>,{" "}
//         <span className="font-semibold text-base-content">Tailwind CSS</span>,{" "}
//         <span className="font-semibold text-base-content">Prisma</span>, and{" "}
//         <span className="font-semibold text-base-content">Hono</span>.
//       </p>

//       <p className="max-w-2xl text-lg md:text-xl text-base-content leading-relaxed mt-6">
//         My journey involves developing REST APIs and deploying scalable
//         applications using <span className="font-semibold text-base-content">Azure</span> and{" "}
//         <span className="font-semibold text-base-content">GitHub Actions</span>. I&apos;m constantly
//         learning and exploring new technologies to build innovative solutions.
//       </p>
//     </section>
//   );
// };

// export default AboutPage;



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
        <span className="font-semibold text-primary">Kethan Gowda</span>, a
        passionate Fullstack AI Developer Intern currently working at{" "}
        <a
          href="https://stacklane.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-secondary transition-colors"
        >
          StackLane
        </a>
        . I specialize in building robust web applications using technologies
        like <span className="font-semibold text-base-content">React</span>,{" "}
        <span className="font-semibold text-base-content">Tailwind CSS</span>,{" "}
        <span className="font-semibold text-base-content">Prisma</span>, and{" "}
        <span className="font-semibold text-base-content">Hono</span>.
      </motion.p>

      <motion.p
        className="max-w-2xl text-lg md:text-xl leading-relaxed text-base-content mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        My journey involves developing REST APIs and deploying scalable
        applications using{" "}
        <span className="font-semibold text-base-content">Azure</span> and{" "}
        <span className="font-semibold text-base-content">GitHub Actions</span>. I&apos;m
        constantly learning and exploring new technologies to build innovative
        solutions.
      </motion.p>
    </motion.section>
  );
};

export default AboutPage;