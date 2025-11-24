import banner from "@/assets/Banner.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden mt-20">
      <img
        src={banner}
        alt="Banner Principal"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Hero;
