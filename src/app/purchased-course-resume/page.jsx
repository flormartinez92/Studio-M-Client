import Button from "@/common/Button";
import Image from "next/image";
import prubea from "../../../public/img/Group29.png";
import prubea2 from "../../../public/img/ux-indonesia-unsplash.png";

export default function PurchasedCourseResume() {
  const courseResumeFake = [
    {
      name: "UX RESEARCH",
      subtitle: "Profundizando en tecnologias y practicas avanzadas",
      description:
        "Esta especialización en UX Research está diseñada para aquellos que desean profundizar en las metodologías y prácticas avanzadas de investigación de experiencia de usuario. A lo largo de esta especialización, te sumergirás en una serie de temas clave que te permitirán convertirte en un experto en la investigación de usuarios y en la creación de soluciones basadas en insights sólidos.",
      imgMobile: prubea,
      imgDesktop: prubea2,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center my-11">
      <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-3 lg:text-5xl lg:rotate-0">
        ¡Gracias por tu compra!
      </h3>

      {/* Este div se va a mostrar en modo mobile */}
      {courseResumeFake.map((course) => (
        <>
          <div className="lg:hidden my-10">
            <div className="flex flex-row items-center justify-center gap-4">
              <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-2">
                {course.name}
              </h3>
              <Image
                src={course.imgMobile}
                width={99}
                height={101.16}
                alt="Imagen Curso"
              />
            </div>
            <div className="px-5 mt-3 flex flex-col justify-center items-center gap-5">
              <h4 className="font-ms-gothic text-xl leading-5 text-center">
                {course.subtitle}
              </h4>
              <p className="font-ms-gothic text-center text-lg text-darkGray leading-5">
                {course.description}
              </p>
            </div>
          </div>

          {/* Este div se va a mostrar en modo desktop */}
          <div className="hidden lg:block w-[85%] my-11 drop-shadow-lg rounded-xl">
            <div className="bg-black flex justify-center items-center rounded-t-xl">
              <h3 className="font-mystery-mixed text-4xl py-3 tracking-wider text-white">
                {course.name}
              </h3>
            </div>

            <div className="flex">
              <Image
                width={220}
                height={290}
                src={course.imgDesktop}
                alt="Imagen Curso"
                className="rounded-bl-lg"
              />
              <div className="bg-lightGrey rounded-br-lg p-6">
                <h4 className="font-ms-gothic text-3xl">{course.subtitle}</h4>
                <p className="font-ms-gothic text-xl text-darkGray leading-6 mt-4">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}

      <Button
        type="rounder"
        className="font-ms-gothic px-14 py-2 text-xl lg:text-3xl lg:py-3"
      >
        Iniciar curso
      </Button>
    </section>
  );
}
