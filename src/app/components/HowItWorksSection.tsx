export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Crea tu cuenta",
      description: "Regístrate como niño, tutor o docente. El sistema asigna tu rol automáticamente y personaliza tu experiencia."
    },
    {
      number: "2",
      title: "Elige tu actividad",
      description: "Accede al Juego de Letras o a los Desafíos de Ortografía y prepárate para descubrir un mundo lleno de letras y diversión."
    },
    {
      number: "3",
      title: "Gana medallas y logros",
      description: "Cada letra dominada y ejercicio completado suma puntos, medallas y avanza tu nivel de desempeño."
    },
    {
      number: "4",
      title: "Consulta tu progreso",
      description: "Padres y tutores pueden revisar el avance detallado desde el Panel de Progreso en cualquier momento."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-[#FAF7F0]">
      <h2 className="font-['Fredoka_One',cursive] text-[1.5rem] md:text-[2rem] text-center text-[#3B0764] mb-8 md:mb-12">
        🦕 ¿Cómo funciona? 🦕
      </h2>

      <div className="max-w-[900px] mx-auto mt-8 md:mt-12 flex flex-col gap-5 md:gap-8 relative before:content-[''] before:absolute before:left-[38px] md:before:left-[50px] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#6B21A8] before:to-[#16A34A] before:rounded">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 md:gap-6 bg-white rounded-[20px] p-5 md:p-6 shadow-[0_2px_12px_rgba(107,33,168,0.07)] relative z-10"
          >
            <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-[#6B21A8] text-white rounded-full font-['Fredoka_One',cursive] text-[1.2rem] md:text-[1.6rem] flex items-center justify-center shadow-[0_4px_12px_rgba(107,33,168,0.3)]">
              {step.number}
            </div>
            <div>
              <h3 className="font-['Fredoka_One',cursive] text-[1rem] md:text-[1.15rem] text-[#3B0764] mb-1">
                {step.title}
              </h3>
              <p className="text-[0.8rem] md:text-[0.93rem] text-gray-600 font-semibold leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}