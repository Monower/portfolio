import Link from "next/link";
import JobCard from "../JobCard";

// Sample data for jobs
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

const Experience = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between gap-8 min-h-screen">
      {/* Title Section */}
      <div className="text-center md:text-left w-full md:w-1/3">
        <h3 className="text-3xl font-semibold text-gray-900">Experience</h3>
        <p className="mt-2 text-gray-600">The journey of my professional growth</p>
      </div>

      {/* Job Cards Section */}
      <div className="w-full md:w-2/3">
        {jobData.slice(0, 3).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        
        {/* "View All" button if there are more than 3 jobs */}
        {jobData.length > 3 && (
          <Link href="/experience" passHref>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
              View All Experience
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Experience;
