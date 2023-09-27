import Border from "@/common/Border";
import Button from "@/common/Button";
import { BurgerDots } from "@/common/Icons";

export default function PurchasedCourseDetails({
  module1,
  topic1_1,
  subtopic1_1,
  subtopic2_1,
  subtopic3_1,
  topic2_1,
  subtopic1_2,
  subtopic2_2,
  subtopic3_2,
  topic3_1,
  subtopic1_3,
  subtopic2_3,
  subtopic3_3,
  module2,
  topic1_2,
  subtopic1_1_2,
  subtopic2_1_2,
  subtopic3_1_2,
  topic2_2,
  subtopic1_2_2,
  subtopic2_2_2,
  subtopic3_2_2,
  topic3_2,
  subtopic1_3_2,
  subtopic2_3_2,
  subtopic3_3_2,
  finalProjectTitle,
  finalProjectDescription,
  finalProjectDescription2,
}) {
  return (
    <div
      className="text-center font-ms-gothic h-auto py-[30px] 
    md:px-[20px]"
    >
      <div
        className="flex flex-col w-[24px] h-[24px] 
      md:pl-[40px]
      xl:w-[40px] xl:h-[40px]"
      >
        <BurgerDots />
        <h2
          className="text-[16px] absolute left-12
        md:text-[20px] md:left-[100px] md:top-[26px]
        xl:text-[27px] xl:left-[110px] xl:top-[29px]"
        >
          Secciones del curso
        </h2>
      </div>
      <h2 className="text-[20px] pt-[30px] md:pt-[60px] px-[50px] pb-[35px] md:text-[25px] md:font-mystery-mixed md:text-start  xl:text-[35px]">
        {module1}
      </h2>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic1_1}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_1}</li>
          <li>{subtopic2_1}</li>
          <li>{subtopic3_1}</li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic2_1}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_2}</li>
          <li>{subtopic2_2}</li>
          <li>{subtopic3_2}</li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic3_1}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_3}</li>
          <li>{subtopic2_3}</li>
          <li>{subtopic3_3}</li>
        </ol>
      </div>

      <h2 className="text-[20px] px-[50px] pb-[35px] md:text-[25px] md:font-mystery-mixed md:text-start md:pl-[60px] xl:text-[35px]">
        {module2}
      </h2>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic1_2}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_1_2}</li>
          <li>{subtopic2_1_2}</li>
          <li>{subtopic3_1_2}</li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic2_2}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_2_2}</li>
          <li>{subtopic2_2_2}</li>
          <li>{subtopic3_2_2}</li>
        </ol>
      </div>

      <div className="text-start px-[14px] pb-[35px] md:pl-[60px]">
        <h3 className="text-[18px] md:text-[22.5px] xl:text-[30px]">
          {topic3_2}
        </h3>
        <ol className="list-decimal py-[20px] pl-[25px] pr-[15px] text-[16px] md:text-[20px] xl:text-[27px] md:pl-[35px]">
          <li>{subtopic1_3_2}</li>
          <li>{subtopic2_3_2}</li>
          <li>{subtopic3_3_2}</li>
        </ol>
      </div>
      <h2 className="font-mystery-mixed text-[20px] mx-auto px-[35px] pb-[25px] md:text-[25px] xl:text-[35px]">
        {finalProjectTitle}
      </h2>
      <p className="px-[50px] pb-[30px] text-[16px] leading-tight md:text-[20px] xl:text-[27px] md:w-[90%] md:m-auto">
        {finalProjectDescription}
      </p>
      <p className="text-[18px] px-[50px] pb-[30px] mt-[30px] leading-tight md:text-[22.5px] xl:text-[30px] md:w-[70%] md:m-auto md:leading-normal">
        {finalProjectDescription2}
      </p>
      <div className="flex items-center justify-center mb-[70px] mt-[10px] py-[40px]">
        <Border className="flex w-auto h-auto border-[3px] border-pink shadow-xl">
          <Button className="p-[20px] font-mystery-mixed text-[23px] m-[10px] md:text-[30px] md:py-[10px] md:px-[30px]">
            Entregar proyecto
          </Button>
        </Border>
      </div>
    </div>
  );
}
