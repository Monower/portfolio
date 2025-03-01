import Link from "next/link";

const JobCard = ({ job }: { job: { date: string; title: string; company: string; description: string; url: string } }) => {
  return (
    <Link
      href={job.url}
      target="_blank"
      className="group flex flex-col md:flex-row items-start bg-white shadow-lg hover:shadow-xl rounded-lg p-6 mb-6 hover:bg-gray-50 transition-all duration-300"
    >
      {/* Time */}
      <div className="text-sm md:text-base text-gray-500 mb-4 md:mb-0">
        {job.date}
      </div>

      {/* Job Info */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="text-gray-900">
          <h4 className="text-lg font-semibold">
            {job.title} .{" "}
            <span className="text-gray-600 font-medium">{job.company}</span>
          </h4>
          <p className="text-gray-700 mt-2">{job.description}</p>
        </div>

        {/* Arrow Icon for hover effect */}
        <div className="ml-4 mt-2 md:mt-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-gray-500 group-hover:translate-x-2 transition-all duration-300"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
