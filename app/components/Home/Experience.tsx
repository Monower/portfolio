import Link from "next/link";
import JobCard from "../JobCard";

const Experience = () => {
  return (
    <>
      <section className="container mx-auto px-[2vw] lg:px-[3vw] flex justify-between  min-h-[100vh]">
        <h3 className="text-black-900 text-24 font-bold text-center w-[30%]">
          Experience
        </h3>
        <div className="w-[70%] h-[80vh] overflow-auto">
          <JobCard />
        </div>
      </section>
    </>
  );
};

export default Experience;
