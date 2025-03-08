"use client";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["JavaScript", "TypeScript", "PHP"] },
    {
      title: "Frontend",
      skills: ["ReactJS", "Redux", "NextJS", "TailwindCSS", "HTML", "CSS"],
    },
    { title: "Backend", skills: ["NodeJS", "ExpressJS", "PHP"] },
    { title: "Databases", skills: ["MySQL"] },
    { title: "Cloud", skills: ["Firebase"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="container mx-auto px-6 py-12 min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-white">
      {/* Heading Section */}
      <motion.h3
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h3>
      <motion.p
        className="text-lg text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        A showcase of my technical skills and expertise
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition duration-300"
            variants={cardVariants}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center md:text-left">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
