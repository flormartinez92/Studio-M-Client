import Border from "@/common/Border";
import Button from "@/common/Button";

export default function PurchasedCourseDetails() {
  return (
    <div className="text-center font-ms-gothic h-auto py-[30px]">
      <h2 className="text-[20px] px-[50px] pb-[35px]">
        Modulo 1: Fundamentos Avanzados de UX Research
      </h2>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">
          Tema 1: Roadmaps Estratégicos de Investigación
        </h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Planificación y diseño de roadmaps de investigación efectivos.
          </li>
          <li>
            Priorización de areas clave de investigación para optimizar
            recursos.
          </li>
          <li>
            Integración de roadmaps en la estrategia general del producto.
          </li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">Tema 2: Lean UX Canvas y Journey Maps</h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Creación de Lean UX Canvases para definir objetivos e hipótesis.
          </li>
          <li>
            Diseño de journey maps para visualizar y analizar el viaje del
            usuario.
          </li>
          <li>
            Aplicación de Lean UX y journey maps en la toma de decisiones de
            diseño.
          </li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">
          Tema 3: Matriz de Necesidades y Tree Testing
        </h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Desarrollo de matrices de necesidades para identificar puntos
            problemáticos.
          </li>
          <li>
            Implementación de tree testing para evaluar la navegación y la
            estructura de la información.
          </li>
          <li>
            Utilización de resultados para ajustar la arquitectura de la
            información y el diseño.
          </li>
        </ol>
      </div>

      <h2 className="text-[20px] px-[50px] pb-[35px]">
        Modulo 2: Optimización de la Experiencia del Usuario a través de Datos y
        Pruebas
      </h2>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">
          Tema 1: Análisis de Comportamiento del Usuario
        </h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Seguimiento y análisis de datos para comprender el comportamiento
            del usuario.
          </li>
          <li>
            Extracción de insights valiosos a través de análisis cualitativos y
            cuantitativos.
          </li>
          <li>
            Aplicación de datos para informar la toma de decisiones de diseño.
          </li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">
          Tema 2: Matriz FVD (Frecuencia, Valor, Dificultad) y Evaluación de
          Riesgos
        </h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Creación y uso de la matrix FVD para priorizar características y
            mejoras.
          </li>
          <li>
            Evaluación de riesgos para identificar posibles obstáculos en la
            experiencia del usuario.
          </li>
          <li>
            Integración de la matriz FVD y la evaluación de riesgos en la
            estrategia de diseño.
          </li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px]">
        <h3 className="text-[18px]">
          Tema 3: Diseño y Análisis de Experimentos
        </h3>
        <ol className=" list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px]">
          <li>
            Diseño y ejecución de experimentos para validar hipótesis de diseño.
          </li>
          <li>
            Análisis de resultados experimentales y ajuste de soluciones de
            diseño.
          </li>
          <li>
            Utilización de insights de experimentos para optimizar la
            experiencia del usuario.
          </li>
        </ol>
      </div>
      <h2 className="font-mystery-mixed text-[20px] mx-auto px-[35px] pb-[25px] ">
        Proyecto final: Propùesta de rediseño basado en insights de UX Research
      </h2>
      <p className="px-[50px] pb-[30px] text-[16px] leading-tight">
        El proyecto final de esta especialización será una propuesta integral de
        rediseño de un producto o servicio digital. Utilizarás las metodologías
        y técnicas avanzadas de investigación aprendidas a lo largo del curso
        para identificar áreas de mejora, priorizar cambios y diseñar soluciones
        basadas en insights sólidos de UX Research. Este proyecto te permitirá
        demostrar tu capacidad para aplicar estrategias de investigación de
        usuarios en la creación de experiencias excepcionales y eficaces.
      </p>
      <p className="text-[18px] px-[50px] pb-[30px] leading-tight">
        Al completar esta especialización, estarás preparado para abordar
        desafíos complejos de UX Research, tomar decisiones de diseño informadas
        y contribuir significativamente al desarrollo de productos digitales
        centrados en el usuario.
      </p>
      <div className="flex items-center justify-center mb-[70px] mt-[10px] py-[40px]">
        <Border className={"w-auto h-auto border-3 border-pink shadow-xl "}>
          <Button className={"p-[20px] font-mystery-mixed text-[23px]"}>
            Entregar proyecto
          </Button>
        </Border>
      </div>
    </div>
  );
}
