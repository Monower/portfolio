"use client"; // Add this directive to use client-side hooks like useRouter

import { useRouter } from "next/navigation";

const AllProjects = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Goes back to the previous page
    };
    

    const projects = [
      {
        id: 1,
        title: "Project One",
        description: "A short description of project one.",
        techStack: ["Next.js", "Tailwind CSS", "Firebase"],
        link: "/project-one",
      },
      {
        id: 2,
        title: "Project Two",
        description: "A short description of project two.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "/project-two",
      },
      {
        id: 3,
        title: "Project Three",
        description: "A short description of project three.",
        techStack: ["Vue.js", "Express", "PostgreSQL"],
        link: "/project-three",
      },
      {
        id: 4,
        title: "Project Four",
        description: "A short description of project four.",
        techStack: ["Angular", "Firebase", "Node.js"],
        link: "/project-four",
      },
      {
        id: 5,
        title: "Project Five",
        description: "A short description of project five.",
        techStack: ["React", "Tailwind CSS", "GraphQL"],
        link: "/project-five",
      },
      {
        id: 6,
        title: "Project Six",
        description: "A short description of project six.",
        techStack: ["Next.js", "MongoDB", "Express"],
        link: "/project-six",
      },
      {
        id: 7,
        title: "Project Seven",
        description: "A short description of project seven.",
        techStack: ["Vue.js", "Node.js", "MySQL"],
        link: "/project-seven",
      },
      {
        id: 8,
        title: "Project Eight",
        description: "A short description of project eight.",
        techStack: ["Svelte", "Tailwind CSS", "Firebase"],
        link: "/project-eight",
      },
      // Add more projects as needed
    ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`/projects/${project.id}`} // Link to the project details page
              className="text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
