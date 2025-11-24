import novidades from "@/assets/novidades.png";

const NovidadesSection = () => {
  return (
    <section id="novidades" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">NOVIDADES PARA VOCÊ</h2>
        
        <div className="relative h-[30vh] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={novidades}
            alt="Novidades"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
