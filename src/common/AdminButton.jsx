import Button from "./Button";

export default function AdminButton({ icon, text, className }) {
  return (
    <div>
      <Button
        className={`flex flex-col justify-center items-center rounded-xl p-[5%] w-[236px] h-[224px] 
        md:w-[165.2px] md:h-[156.8px]
        lg:w-[224.2px] lg:h-[212.8px]
        xl:w-[236px] xl:h-[224px] 
        xl:p-[1%] ${className || ""}`}
      >
        <div className="flex justify-center items-center">{icon}</div>
        <p
          className="font-ms-gothic text-center text-2xl m-2
        md:text-lg md:m-1
        lg:text-2xl"
        >
          {text}
        </p>
      </Button>
    </div>
  );
}
