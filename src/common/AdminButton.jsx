import Button from "./Button";

export default function AdminButton({ icon, text, className }) {
  return (
    <div>
      <Button
        className={`flex flex-col items-center justify-center rounded-xl p-[5%] w-[236px] h-[224px] 
        md:w-[165.2px] md:h-[156.8px]
        lg:w-[224.2px] lg:h-[212.8px]
        xl:w-[236px] xl:h-[224px] 
        xl:p-[1%] ${className || ""}`}
      >
        <div
          className="flex items-center justify-center 
        md:w-[4.2rem] md:h-[4.2rem]
        lg:w-[5.6rem] lg:h-[5.6rem]"
        >
          {icon}
        </div>
        <p
          className="font-ms-gothic text-center  text-[1.6rem] 
        md:text-[1.1rem] 
        lg:text-[1.6rem] 
        xl:text-[1.6rem]"
        >
          {text}
        </p>
      </Button>
    </div>
  );
}
