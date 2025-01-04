import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen sm:min-h-custom h-auto overflow-hidden"
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <h1 className="text-5xl font-bold py-2">S K Dental Ceramic Studio</h1>
        <h2 className="text-3xl font-bold italic py-1">
          Cosmetic Dental Laboratory
        </h2>
        <p className="text-md max-w-lg min-w-[250px] py-1 mx-auto">
          At S K Dental Ceramic Studio, we specialize in crafting high-quality cosmetic dental appliances with over 30 
          years of expertise. Our services include E-max, zirconia, porcelain, and metal crowns and bridges, implant 
          restorations, and custom night guards. Using advanced digital design, we deliver precision and excellence 
          to help create confident, radiant smiles.
        </p>
      </div>
    </section>
  );
};

export default About;
