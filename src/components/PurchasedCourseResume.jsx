import Image from "next/image";
import Button from "../common/Button";

export default function PurchasedCourseResume({
  courseName,
  courseSubtitle,
  courseDescription,
  handleClick,
}) {
  return (
    <div className="flex  flex-col justify-center items-center my-14">
      <h3 className=" font-mystery-mixed text-[32px] tracking-wider text-h2Black -rotate-3">
        ¡Gracias por tu compra!
      </h3>
      <div className="flex flex-row space-x-8 my-4">
        <h3 className=" font-mystery-mixed text-[32px] tracking-wider text-h2Black -rotate-3 m-auto">
          {courseName}
          Ux research
        </h3>
        <Image
          src={"/images/Group29.png"}
          width={99}
          height={101.16}
          alt="Group29"
        />
      </div>
      <div className="mx-12 mb-20">
        <h4 className="font-ms-gothic text-center text-[20px] text-h3Black my-4 px-5">
          {courseSubtitle}
          Profundizando en tecnologías y prácticas avanzadas
        </h4>
        <p className="font-ms-gothic text-center text-[16px] text-darkGray leading-5 px-4">
          {courseDescription}
          Esta especialización en UX Research está diseñada para aquellos que
          desean profundizar en las metodologías y prácticas avanzadas de
          investigación de experiencia de usuario. A lo largo de esta
          especialización, te sumergirás en una serie de temas clave que te
          permitirán convertirte en un experto en la investigación de usuarios y
          en la creación de soluciones basadas en insights sólidos.
        </p>
      </div>
      <Button
        handleClick={handleClick}
        type="rounder"
        className="font-ms-gothic px-14 py-[8px] p-4 text-xl bg-black"
      >
        Iniciar curso
      </Button>
    </div>
  );
}

// /* Group 17 */

// position: absolute;
// width: 1063px;
// height: 314px;
// left: 224px;
// top: 416px;

// /* Rectangle 11 */

// position: absolute;
// left: 30.95%;
// right: 14.88%;
// top: 24.4%;
// bottom: 63.79%;

// background: #D9D9D9;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 0px 0px 10px 0px;

// /* ux-indonesia-1V5zGGTYXVc-unsplash 1 */

// position: absolute;
// left: 14.81%;
// right: 69.05%;
// top: 24.4%;
// bottom: 63.79%;

// background: url(ux-indonesia-1V5zGGTYXVc-unsplash.jpg);
// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// border-radius: 0px 0px 0px 10px;

// /* Rectangle 10 */

// position: absolute;
// left: 14.81%;
// right: 14.88%;
// top: 20.63%;
// bottom: 75.6%;

// background: #1E1E1E;
// border-radius: 10px 10px 0px 0px;

// /* Curso avanzado de Ux Research */

// position: absolute;
// left: 34.79%;
// right: 36.18%;
// top: 21.97%;
// bottom: 76.93%;

// font-family: 'Mystery Mixed';
// font-style: normal;
// font-weight: 400;
// font-size: 33px;
// line-height: 27px;

// color: #FFFFFF;

// /* Profundizando en tecnologías y prácticas avanzadas */

// position: absolute;
// left: 32.74%;
// right: 25.4%;
// top: 24.95%;
// bottom: 73.61%;

// font-family: 'MS PGothic';
// font-style: normal;
// font-weight: 400;
// font-size: 29px;
// line-height: 29px;
// /* identical to box height */

// color: #151515;

// /* Esta especialización en UX Research está diseñada para aquellos que desean profundizar en las metodologías y prácticas avanzadas de investigación de experiencia de usuario. A lo largo de esta especialización, te sumergirás en una serie de temas clave que te permitirán convertirte en un experto en la investigación de usuarios y en la creación de soluciones basadas en insights sólidos. */

// position: absolute;
// left: 32.74%;
// right: 16.14%;
// top: 28.12%;
// bottom: 64.93%;

// font-family: 'MS PGothic';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 20px;

// color: #5C5A5A;
