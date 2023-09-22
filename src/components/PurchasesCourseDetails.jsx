import Border from "@/common/Border";
import Button from "@/common/Button";

export default function PurchasesCourseDetails() {
  return (
    <div className="text-center font-ms-gothic">
      <h2 className="text-[20px]">
        Modulo 1: Fundamentos Avanzados de UX Research
      </h2>

      <div className="text-start p-[14px]">
        <h3>Tema 1: Roadmaps Estratégicos de Investigación</h3>
        <ol className=" list-decimal p-[20px]">
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

      <div>
        <h3>Tema 2: Lean UX Canvas y Journey Maps</h3>
        <ol className=" list-decimal ">
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

      <div>
        <h3>Tema 3: Matriz de Necesidades y Tree Testing</h3>
        <ol className=" list-decimal">
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

      <h2>
        Modulo 2: Optimización de la Experiencia del Usuario a través de Datos y
        Pruebas
      </h2>

      <div>
        <h3>Tema 1: Análisis de Comportamiento del Usuario</h3>
        <ol className=" list-decimal">
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

      <div>
        <h3>
          Tema 2: Matriz FVD (Frecuencia, Valor, Dificultad) y Evaluación de
          Riesgos
        </h3>
        <ol className=" list-decimal">
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

      <div>
        <h3>Tema 3: Diseño y Análisis de Experimentos</h3>
        <ol className=" list-decimal">
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
      <h2 className="font-mystery-mixed text-[20px] ">
        Proyecto final: Propùesta de rediseño basado en insights de ux research
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        voluptatem ut dolorum nesciunt, animi blanditiis itaque ex cupiditate,
        quis commodi quos deleniti cum laborum debitis repellendus porro unde
        quo laudantium.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        culpa sint exercitationem eligendi. Repudiandae nostrum ut doloremque
        officiis aut animi! Sint ratione sed soluta aliquid sapiente quibusdam,
        voluptatibus esse corporis!
      </p>
      <div className="flex items-center justify-center mb-[70px] mt-[50px]">
        <Border className={"flex items-center justify-center w-auto h-auto"}>
          <Button className={"p-[30px] font-mystery-mixed leading-3"}>
            Entregar proyecto
          </Button>
        </Border>
      </div>
    </div>
  );
}
