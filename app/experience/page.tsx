// type ExperienceItem = {
//   role: string;
//   company: string;
//   period: string;
//   description: string;
// };

// const experiences: ExperienceItem[] = [
//   {
//     role: "Fullstack AI Developer Intern",
//     company: "StackLane",
//     period: "Mar 2025 - Present",
//     description:
//       "Working on fullstack projects using React, Vite, Tailwind CSS, Hono, Prisma. Built REST APIs, deployed on Azure using GitHub Actions.",
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="bg-base-100 text-base-content py-8 px-4 max-w-5xl mx-auto"
//     >
//       <h2 className="text-3xl font-bold mb-12 text-center text-primary">
//         Work Experience
//       </h2>
//       <div className="relative border-l-2 border-neutral pl-6 space-y-12">
//         {experiences.map((exp, idx) => (
//           <div key={idx} className="relative">
//             <div className="absolute -left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-md" />
//             <h3 className="text-xl font-semibold">{exp.role}</h3>
//             <p className="text-sm text-neutral-content mb-2">
//               {exp.company} &mdash; <span>{exp.period}</span>
//             </p>
//             <p className="text-base-content">{exp.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


'use client';

import { motion } from 'framer-motion';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Fullstack AI Developer Intern",
    company: "StackLane",
    period: "Mar 2025 - Present",
    description:
      "Working on fullstack projects using React, Vite, Tailwind CSS, Hono, Prisma. Built REST APIs, deployed on Azure using GitHub Actions.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-base-100 text-base-content py-16 px-4 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Work Experience
      </motion.h2>

      <div className="relative border-l-2 border-primary/40 pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2 }}
          >
            {/* Stylish Bullet */}
            <span className="absolute -left-[10px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-base-100 shadow-sm" />

            {/* Added padding-left to avoid overlap */}
            <div className="pl-2">
              <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
              <p className="text-sm text-neutral-content mb-2">
                {exp.company} &mdash; <span>{exp.period}</span>
              </p>
              <p className="text-base-content">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;