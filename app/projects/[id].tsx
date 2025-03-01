"use client"; // Ensure this is a client-side component

import { useRouter } from "next/navigation";

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
];

// Find the project by ID
const getProjectById = (id: string) => {
  return projects.find((project) => project.id === parseInt(id));
};

const ProjectDetails = ({ params }) => {
  const { id } = params; // Extract the project ID from the URL params
  const project = getProjectById(id); // Get project data based on ID

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <button
          onClick={handleBackClick}
          className="text-blue-500 hover:underline"
        >
          &larr; Back to Projects
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center mb-6">{project.title}</h2>
      <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
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
        <a href={project.link} className="text-blue-500 hover:underline">
          View Full Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
