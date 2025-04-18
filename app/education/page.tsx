// "use client";

// type EducationItem = {
//   degree: string;
//   institution: string;
//   period: string;
//   details?: string;
// };

// const education: EducationItem[] = [
//   {
//     degree: "Bachelor of Engineering in Computer Science",
//     institution: "Siddaganga Institute Of Technology",
//     period: "2021 - 2025",
//     details: "9.16 CGPA",
//   },
//   {
//     degree: "Pre-University Course",
//     institution: "Sri Sapthagiri PU College",
//     period: "2019 - 2021",
//     details: "98.50 %",
//   }
// ];

// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="py-16 px-4 max-w-5xl mx-auto"
//     >
//       <h2 className="text-3xl font-bold mb-12 text-center text-primary">
//         Education
//       </h2>
//       <div className="space-y-8">
//         {education.map((edu, idx) => (
//           <div
//             key={idx}
//             className="bg-base-200 border border-base-300 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
//             <p className="text-sm text-base-content">
//               {edu.institution} — <span>{edu.period}</span>
//             </p>
//             {edu.details && <p className="mt-2 text-base-content">{edu.details}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Siddaganga Institute Of Technology",
    period: "2021 - 2025",
    details: "9.16 CGPA",
  },
  {
    degree: "Pre-University Course",
    institution: "Sri Sapthagiri PU College",
    period: "2019 - 2021",
    details: "98.50 %",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-16 px-4 max-w-5xl mx-auto bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-base-200 border border-primary/30 hover:border-primary transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
            <p className="text-sm mt-1">
              <span className="font-medium text-base-content">{edu.institution}</span> —{" "}
              <span className="text-base-content/80">{edu.period}</span>
            </p>
            {edu.details && (
              <p className="mt-2 text-base-content">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
