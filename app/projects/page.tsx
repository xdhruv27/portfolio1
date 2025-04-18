"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "HackerNews DevOps",
    description:
      "CI/CD pipeline for HackerNews using GitHub Actions and Azure Container Apps. Includes Docker setup, ACR, and environment-based deployment.",
    techStack: ["Docker", "Azure", "GitHub Actions", "Hono", "CI/CD"],
    link: "https://github.com/xdhruv27/hackernews-server",
  },
  {
    title: "Patient Condition Classification",
    description:
      "A deep learning model using LSTM and BERT to classify patient health conditions from clinical text. Trained using Keras and evaluated on benchmark datasets.",
    techStack: ["Python", "Keras", "TensorFlow", "LSTM", "BERT"],
    link: "https://github.com/xdhruv27/Patient_Condition_Classification",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-base-100 text-base-content py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-base-200 border border-primary/10 hover:border-primary/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {project.title}
            </h3>
            <p className="text-base-content/80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-base-300 text-sm px-3 py-1 rounded-full text-base-content shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
