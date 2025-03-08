import dynamic from "next/dynamic";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeroAnimation = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconConfig = {
    size: 24,
    color: "#1f2937",
  }

  const socialSites = [
    {
      name: "Email",
      link: "mailto:monowersadaf@gmail.com",
      icon: <IoMdMail {...iconConfig} />,
    },
    {
      name: "Github",
      link: "https://github.com/Monower",
      icon: <FaGithub {...iconConfig} />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/monwer-sadaf-39166b1b6/",
      icon: <FaLinkedin {...iconConfig} />,
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 lg:px-12 h-[85vh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-gray-800 font-bold text-3xl sm:text-4xl dark:text-white">
              Monwer Sadaf.
            </h3>
            <h3 className="text-gray-600 text-lg sm:text-xl pb-5">
              Experienced Software Engineer.
            </h3>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-gray-800 text-white px-5 py-2 rounded-md border border-gray-800 hover:bg-gray-700 transition">
                Get Started
              </button>
              <button className="text-gray-800 border border-gray-800 px-5 py-2 rounded-md hover:bg-gray-200 transition">
                Learn More
              </button>
            </div>
            {/* Social Links */}

            <div className="flex justify-center md:justify-start space-x-4 pt-5">
              {socialSites.map((site, index) => (
                <a
                  key={index}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.icon}
                </a>
              ))}
            </div>
            {/* <div className="flex justify-center md:justify-start space-x-4 pt-5">
              {["#", "#", "#"].map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="fill-gray-800 w-6 h-6 hover:fill-gray-600 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </a>
              ))}
            </div> */}
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* See More Button */}
      <div className="w-full flex justify-center mt-6">
        <button className="flex flex-col items-center">
          <span className="text-gray-600">See More</span>
          <svg
            className="w-5 h-5 animate-bounce duration-1000 fill-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Hero;
