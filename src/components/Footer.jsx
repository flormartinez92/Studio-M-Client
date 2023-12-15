import Link from "next/link";

export const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center w-full h-full text-center
      lg:h-[50rem]
      xl:h-[49rem]"
    >
      <div
        className="relative grid grid-cols-1 max-w-[80rem] place-content-center mx-auto
        sm:py-[50px]
        md:grid-cols-2 md:py-[80px]
        lg:py-[130px]"
      >
        <h2
          className="font-mystery-mixed text-white mt-[90px] text-[45px] 
          sm:text-[65px]
          md:text-[70px] md:text-left md:ml-[110px] md:flex md:flex-col md:items-start md:justify-center md:mt-0 md:mb-0 md:leading-none
          lg:text-[80px]
          xl:text-[100px]"
        >
          Studio by M
        </h2>
        <p
          className="font-ms-gothic text-white text-[16px] text-left leading-[20px] mt-6 mx-[40px]
        sm:text-[20px] 
        md:text-[24px] md:leading-10 md:ml-[110px] md:tracking-[-2.9px] md:w-[85%] md:col-start-1 md:row-start-2 md:mt-[90px] 
        lg:text-[28px]
        xl:text-[34px]"
        >
          Soy Macarena Bernal. Me defino como una apasionada docente,
          desarrolladora Fullstack y diseñadora UX/UI. Mi camino en el mundo de
          la tecnología me ha permitido fusionar mi amor por la enseñanza con la
          creación de experiencias digitales accesibles y atractivas.
        </p>

        <h2
          className="font-mystery-mixed text-white text-[35px] mt-[45px] mb-[17px] 
        sm:text-[55px]
        md:text-[70px] md:flex md:flex-col md:col-start-2 md:row-start-1 md:items-center md:justify-center md:mt-0 md:mb-0 md:leading-none 
        xl:text-[80px]"
        >
          Contacto
        </h2>
        <div
          className="w-full max-w-[250px] h-auto mx-auto grid place-items-center grid-cols-2 mb-[30px] 
          md:mt-0 md:col-start-2 md:row-start-2
          lg:h-[200px]"
        >
          <Link
            href="https://www.behance.net/macarenbernal"
            target="_blank"
            className="bg-[url('/behance.png')] bg-no-repeat bg-contain w-[99px] h-[108px] -mr-[1px]
            md:w-[90px] md:h-[100px] md:ml-[50px] md:mt-[50px]
            lg:w-[100px] lg:h-[110px] lg:ml-[50px] lg:mt-[50px]
            xl:w-[137px] xl:h-[149px] xl:ml-0 xl:mt-0"
          ></Link>
          <Link
            href="https://www.instagram.com/studio.bym/"
            target="_blank"
            className="  bg-[url('/instagram.png')] bg-no-repeat bg-contain w-[122px] h-[118px] mt-[17px] ml-[10px]
            md:w-[90px] md:h-[100px] md:ml-[50px] md:mt-[80px] md:mr-[50px]
            lg:w-[100px] lg:h-[110px] lg:ml-[60px]
            xl:w-[149px] xl:h-[143px] xl:ml-[50px] xl:mt-[50px] xl:mr-0"
          ></Link>
          <Link
            href="https://github.com/Mcsand22"
            target="_blank"
            className="bg-[url('/github.png')] bg-no-repeat bg-contain w-[113px] h-[108px] mr-[12px]
          md:w-[100px] md:h-[105px] md:ml-[53px] md:mb-[53px]
          lg:w-[110px] lg:h-[125px]
          xl:w-[135px] xl:h-[130px] xl:ml-0 xl:mb-0"
          ></Link>
          <Link
            href="https://wa.me/qr/D4K4N3P4NR4CL1"
            target="_blank"
            className="bg-[url('/wpp.png')] bg-no-repeat bg-contain w-[127px] h-[119px] mt-[40px] ml-[20px]
            md:w-[100px] md:h-[108px] md:-translate-y-[40px] md:translate-x-[3px]
            lg:w-[110px] lg:h-[118px] lg:translate-x-[10px]
            xl:w-[127px] xl:h-[119px] xl:ml-[65px] xl:-translate-y-0 xl:translate-x-0"
          ></Link>
          <Link
            href="https://www.tiktok.com/@studio.bym"
            target="_blank"
            className="bg-[url('/tiktok.png')] bg-no-repeat w-[115px] h-[124px] bg-contain row-start-auto col-[1/3] mt-[15px] mr-[25px]
            md:w-[100px] md:h-[107px] md:mr-0 md:-translate-y-[60px]
            lg:w-[110px] lg:h-[116px] lg:translate-x-[2px]
            xl:w-[115px] xl:h-[124px] xl:mr-0 xl:ml-[10px] xl:-translate-y-0 xl:translate-x-0"
          ></Link>
        </div>
        {/* ICON SOL */}
        <div
          className="absolute bg-[url(../../public/img/Star_blue_1.png)] bg-no-repeat bg-contain w-[67px] h-[64px] -top-[32.1px] right-[10px]
          md:w-[113px] md:h-[106px] md:-top-[55.1px] md:right-[45px]
          lg:w-[180px] lg:h-[187px] lg:-top-[89.5px] lg:right-[40px]
          xl:w-[206px] xl:h-[197px] xl:-top-[102px] xl:right-[70px]"
        ></div>
      </div>
    </div>
  );
};
