import Image from "next/image";

const About = () => {

  return (
    <section
      id="about"
      className="relative h-screen min-h-custom overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20">
        <h1 className="text-5xl font-bold py-1 sm:text-5xl whitespace-nowrap">S K Dental</h1>
        <h2 className="text-3xl font-bold py-1 sm:text-3xl">Crowns & Bridges...</h2>
        <h2 className="text-2xl font-bold italic py-1 sm:text-3xl whitespace-nowrap">
          Add Image in Back
        </h2>
        <p className="text-md max-w-2xl mx-auto sm:text-md">
          About us... S K Dental... We do.... etc etc etc etc Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>
    </section>
  );
};

export default About;
// add bg image later