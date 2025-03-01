const Skills = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-black-900 text-2xl md:text-3xl font-bold">Skills</h3>
        <p className="text-gray-600 text-lg">I have skills in the following areas</p>
      </div>

      {/* Right Skills Section */}
      <div className="w-full md:w-1/2">
        {[
          { title: "Languages", skills: ["JavaScript", "TypeScript", "PHP"] },
          { title: "Frontend", skills: ["ReactJS", "Redux", "NextJS", "TailwindCSS", "HTML", "CSS"] },
          { title: "Backend", skills: ["NodeJS", "ExpressJS", "PHP"] },
          { title: "Databases", skills: ["MySQL"] },
          { title: "Cloud", skills: ["Firebase"] }
        ].map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-black-900 text-xl font-bold">{category.title}</h3>
            <div className="flex flex-wrap">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm m-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
