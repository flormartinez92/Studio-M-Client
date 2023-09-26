import Image from "next/image";
import Button from "../common/Button";

export default function PurchasedCourseResume({
  courseName,
  courseSubtitle,
  courseDescription,
  handleClick,
  imgMobile,
  imgDesktop,
}) {
  return (
    <div className="flex  flex-col justify-center items-center my-8 pt-4 lg:my-6">
      <h3 className="font-mystery-mixed text-[32px] tracking-wider text-h2Black -rotate-3 lg:text-[60px] lg:rotate-0">
        ¡Gracias por tu compra!
      </h3>

      {/* Este div se va a mostrar en modo mobile */}
      <div className="lg:hidden pt-4">
        <div className="flex flex-row items-center justify-center space-x-6 m-auto">
          <h3 className=" font-mystery-mixed text-[32px] tracking-wider text-h2Black -rotate-2 pt-3">
            {courseName}
          </h3>
          <Image
            src={imgMobile ? imgMobile : "/img/Group29dsfdsf.png"}
            width={99}
            height={101.16}
            alt="Group29"
          />
        </div>
        <div className="mx-12 pb-10 pt-2">
          <h4 className="font-ms-gothic text-center text-[20px] leading-5 text-h3Black my-4 px-5">
            {courseSubtitle}
          </h4>
          <p className="font-ms-gothic text-center text-[16px] text-darkGray leading-4 px-4">
            {courseDescription}
          </p>
        </div>
      </div>

      {/* Este div se va a mostrar en modo desktop */}
      <div className="hidden lg:block grid-cols-4  w-[66.44rem] px-8 pt-[30px] pb-[70px] drop-shadow-lg">
        <div className="bg-[#1E1E1E]  h-[4.75rem] flex justify-center items-center col-start-1 col-end-5 rounded-t-[10px]">
          <h3 className="font-mystery-mixed text-[33px] tracking-wider text-white m-auto">
            {courseName}
          </h3>
        </div>

        <div className="col-start-1 col-end-2 col-span-1  flex flex-row h-[15.25rem] ">
          <Image
            src={
              imgDesktop ? imgDesktop : "/img/ux-indonesia-unsplashdsadsad.png"
            }
            width={244}
            height={238}
            alt="UXIndonesia"
            className=" col-start-1 col-end-2 rounded-bl-[10px]"
          />

          <div className=" bg-lightGrey col-end-5 col-span-3 rounded-br-[10px]">
            <h4 className="font-ms-gothic text-[29px] text-h3Black my-4 px-5">
              {courseSubtitle}
            </h4>
            <p className="font-ms-gothic text-[20px] text-darkGray leading-5 px-4">
              {courseDescription}
            </p>
          </div>
        </div>
      </div>
      <Button
        handleClick={handleClick}
        type="rounder"
        className="font-ms-gothic px-14 py-[8px] p-4 text-xl bg-black lg:text-[30px] lg:px-[80px] lg:py-[15px]"
      >
        Iniciar curso
      </Button>
    </div>
  );
}
