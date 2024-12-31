import Image from "next/image";

const About = () => {

  return (
    <section
      id="about"
      className="relative h-screen min-h-custom overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/about/about.png"
          alt="Model"
          layout="fill"
          objectFit="cover"
          className="opacity-30 bg-[var(--about-background)]"
        />
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20">
        <h1 className="text-5xl font-bold py-1 sm:text-5xl whitespace-nowrap">S K Dental Ceramic Studio</h1>
        <h2 className="text-3xl font-bold py-1 sm:text-3xl"></h2>
        <h2 className="text-2xl font-bold italic py-1 sm:text-3xl whitespace-nowrap">
          Cosmetic Dental Laboratory
        </h2>
        <p className="text-md max-w-2xl mx-auto sm:text-md">
        At SK Dental Ceramic Studio, we specialize in crafting high-quality cosmetic dental appliances with over 30 years of expertise. Our services include E-max, zirconia, porcelain, and metal crowns and bridges, implant restorations, and custom night guards. Using advanced digital design, we deliver precision and excellence to help create confident, radiant smiles.
        </p>
      </div>
    </section>
  );
};

export default About;
// add bg image later