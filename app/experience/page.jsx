'use client'


// Importing the necessary hook from 'next/navigation'
import { useRouter } from "next/navigation";
import JobCard from "../components/JobCard";

// Sample job data
const jobData = [
  {
    id: 1,
    date: "2023 - present",
    title: "Junior Software Engineer",
    company: "Mysoftheaven BD Ltd",
    description:
      "As a Junior Software Engineer, I contribute to building scalable web applications with cutting-edge technologies. I work on backend systems, frontend development, and integrating third-party services.",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Software Engineer Intern",
    company: "TechCompany Inc.",
    description:
      "Worked on developing internal tools, improving frontend performance, and contributing to backend development under the guidance of senior engineers.",
    url: "https://www.example.com/",
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Frontend Developer Intern",
    company: "Web Solutions Ltd.",
    description:
      "Assisted in designing and implementing user interfaces for client projects. Focused on React and Vue.js, and collaborated closely with design teams to improve user experiences.",
    url: "https://www.example2.com/",
  },
  {
    id: 4,
    date: "2020 - 2021",
    title: "Junior Web Developer",
    company: "StartupX",
    description:
      "Contributed to the development of full-stack applications, using technologies like JavaScript, Node.js, and MongoDB.",
    url: "https://www.example3.com/",
  },
];

const Home = () => {
  const router = useRouter(); // Using the correct hook for App Router

  return (
    <section className="container mx-auto px-6 lg:px-12 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()} // Navigates back to the previous page
        className="mb-8 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
      >
        Back
      </button>

      <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
        Full Experience
      </h3>

      {/* Job Cards Section */}
      <div className="w-full">
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Home;
