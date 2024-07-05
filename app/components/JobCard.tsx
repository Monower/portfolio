import Link from "next/link";

const JobCard = () => {
  return (
    <Link
      href="https://www.google.com/"
      target="_blank"
      className="group flex space-x-4 p-4 rounded cursor-pointer hover:bg-gray-300 transition-all duration-700"
    >
      <span className="text-black-900 text-[14px]">2023 - present</span>
      <span>
        <div>
          <div>
            <div className="text-black-900">
              <span>Junior Software Engineer . </span>
              <span>
                Mysoftheaven BD Ltd
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 inline-block transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <h3 className="text-black-500">Software Engineer Intern</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo, magni ex illum vel assumenda, quas quisquam eius
              labore, placeat magnam obcaecati nesciunt? Deleniti, repellendus
              dolorem a perspiciatis tenetur numquam non!
            </p>
            {/* <div className="flex flex-wrap justify-between items-center">
                    <a
                      href="https://newportal.land.gov.bd/"
                      className="text-black-700 hover:text-orange-500 flex items-center space-x-1 m-2 transition-all duration-700"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>Project 1</span>
                    </a>
                  </div> */}
          </div>
        </div>
      </span>
    </Link>
  );
};

export default JobCard;
