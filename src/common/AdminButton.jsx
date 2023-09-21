// import Image from "next/image";

export default function AdminButton({ icon, title, className }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <button className="p-[25px] mx-12 my-4 w-236 h-224 bg-[#E21B7B] rounded-[10px] ">
        <div className="flex flex-col items-center justify-center">
          {/* <Image
            src={"/svg/sharp-menu-book.svg"}
            width={100}
            height={100}
            className="justify-center items-center py-[19px]"
          /> */}
          <icon className={`${className}`}>{icon}</icon>
          <p className={`text-[25px] text-white ${className}`}>{title}</p>
        </div>
      </button>
    </div>
  );
}
