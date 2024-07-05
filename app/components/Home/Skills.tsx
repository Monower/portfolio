const Skills = () => {
  return (
    <>
      <section className="container mx-auto px-[2vw] lg:px-[3vw]  min-h-[100vh] flex justify-center items-center">
        <div className="w-[50%]">
          <h3 className="text-black-900 text-24 font-bold">Skills</h3>
          <p>I have skills in the following areas</p>
        </div>
        <div className="w-[50%]">
          <div>
            <h3 className="text-black-900 text-24 font-bold">Languages</h3>
            <div className="flex flex-wrap">
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                JavaScript
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                Typescript
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                PHP
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black-900 text-24 font-bold">Frontend</h3>
            <div className="flex flex-wrap">
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                ReactJS
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                Redux
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                NextJS
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                TailwindCSS
              </span>
              {/* <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">Styled Components</span> */}
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                JavaScript
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                Typescript
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                HTML
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                CSS
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black-900 text-24 font-bold">Backend</h3>
            <div className="flex flex-wrap">
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                NodeJS
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                ExpressJS
              </span>
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                PHP
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black-900 text-24 font-bold">Databases</h3>
            <div className="flex flex-wrap">
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                MySQL
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black-900 text-24 font-bold">Cloud</h3>
            <div className="flex flex-wrap">
              <span className="bg-black-100 py-1 px-2 rounded-full text-black-600 m-1">
                Firebase
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
