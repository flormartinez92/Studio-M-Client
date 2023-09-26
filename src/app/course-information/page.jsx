import CourseInfo from "@/components/CourseInfo";
import React from "react";

export default function page() {
  return (
    <CourseInfo
      courseTitle={"Ux research"}
      imgUrl={"/img/indonesia.png"}
      resumeTitle={"Profundizando en tecnologías y prácticas avanzadas"}
      resume={
        "Esta especialización en UX Research está diseñada para aquellos que desean profundizar en las metodologías y prácticas avanzadas de investigación de experiencia de usuario. A lo largo de esta especialización, te sumergirás en una serie de temas clave que te permitirán convertirte en un experto en la investigación de usuarios y en la creación de soluciones basadas en insights sólidos."
      }
      titleModule1={"Fundamentos Avanzados de UX Research"}
      theme1={"Roadmaps Estratégicos de Investigación"}
      theme2={"Lean UX Canvas y Journey Maps"}
      theme3={"Matriz de Necesidades y Tree Testing"}
      titleModule2={
        "Optimización de la Experiencia del Usuario a través de Datos y Pruebas"
      }
      theme2_1={"Análisis de Comportamiento del Usuario"}
      theme2_2={
        "Matriz FVD (Frecuencia, Valor, Dificultad) y Evaluación de Riesgos"
      }
      theme2_3={"Diseño y Análisis de Experimentos"}
      projectTitle={
        "Proyecto Final: Propuesta de Rediseño Basado en Insights de UX Research"
      }
      projectResume={
        "Al completar esta especialización, estarás preparado para abordar desafíos complejos de UX Research, tomar decisiones de diseño informadas y contribuir significativamente al desarrollo de productos digitales centrados en el usuario."
      }
      levelCourse={"Intermedio"}
      hoursCourse={"30"}
      priceCourse={"10000"}
    />
  );
}
