import Border from "./Border";
import { Clock, Signal, Heart, CartShopPlusBgBlack, LineHeart } from "./Icons";
import { useMediaQuery } from "@react-hook/media-query";

export default function CourseSummary({
  level,
  hours,
  price,
  className,
  isFavorite = false,
  handleFavoriteClick,
  handleCartClick,
}) {
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");

  return (
    <Border
      className={`p-4 border-[3px] border-pink flex flex-col justify-center items-center ${
        className || ""
      }`}
    >
      <div className=" md:flex md:gap-4 md:justify-around md:w-[560px] lg:w-[820px]">
        <div className="flex justify-center items-center gap-3 py-1 md:gap-1 ">
          <Signal
            width={isLgBreakpoint ? "45px" : "25px"}
            height={isLgBreakpoint ? "45px" : "25px"}
          />
          <h6 className="text-lg lg:text-2xl">{level}</h6>
        </div>
        <div className="flex justify-center items-center gap-5 py-1 md:gap-1 lg:gap-2">
          <Clock
            width={isLgBreakpoint ? "25px" : "16px"}
            height={isLgBreakpoint ? "25px" : "16px"}
          />
          <p className="text-lg lg:text-2xl">{hours}.</p>
        </div>
        <div className="flex justify-center items-center py-1 gap-5 md:gap-2">
          <p className="md:hidden text-lg">Mi lista</p>
          <p className="hidden md:flex md:text-lg lg:text-2xl">
            Agregar a lista de deseos
          </p>
          <div className="cursor-pointer" onClick={handleFavoriteClick}>
            {isFavorite ? (
              <Heart
                width={isLgBreakpoint ? "25px" : "16px"}
                height={isLgBreakpoint ? "25px" : "16px"}
                color={"#A21616"}
              />
            ) : (
              <LineHeart
                width={isLgBreakpoint ? "25px" : "16px"}
                height={isLgBreakpoint ? "25px" : "16px"}
                color={"#A21616"}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 py-1 font-medium">
          <h5 className="md:hidden text-lg">
            ${Number(price).toLocaleString().replace(",", ".")} USD
          </h5>
          <div className="cursor-pointer">
            <CartShopPlusBgBlack
              width={isLgBreakpoint ? "57px" : "45px"}
              height={isLgBreakpoint ? "57px" : "45px"}
              onClick={handleCartClick}
            />
          </div>
        </div>
      </div>
    </Border>
  );
}
