import Border from "./Border";
import IconButton from "./IconButton";
import { Clock, Signal, Heart, CartShopPlus } from "./Icons";

export default function CourseSummary({ level, hours, price, className }) {
  return (
    <Border className={`p-5 border-[3px] border-pink flex flex-col justify-center items-center gap-2 ${className || "" }`}>
      <div className="flex justify-center items-center">
        <Signal />
        <h6>{level}</h6>
      </div>
      <div className="flex justify-center items-center gap-3 md:gap-1">
        <Clock />
        <p>{hours}hs.</p>
      </div>
      <div className="flex justify-center items-center gap-5 md:gap-2">
        <p className="md:hidden">Mi lista</p>
        <p className="hidden md:flex">Agregar a lista de deseos</p>
        <IconButton>
          <Heart />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-6 font-medium">
        <h5 className="md:hidden">${price} ARS</h5>
        <div className="bg-[#000] p-2 rounded-full">
          <IconButton>
            <CartShopPlus />
          </IconButton>
        </div>
      </div>
    </Border>
  );
}
