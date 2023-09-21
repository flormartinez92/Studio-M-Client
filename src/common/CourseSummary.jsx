import Border from "./Border";
import IconButton from "./IconButton";
import { Clock, Signal, Heart, CartShopPlus } from "./Icons";

export default function CourseSummary({ level, hours, price }) {
  return (
    <Border className="p-5 flex flex-col justify-center items-center gap-2">
      <div className="flex justify-center items-center">
        <Signal />
        <h6>{level}</h6>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Clock />
        <p>{hours}hs.</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <p>Mi lista</p>
        <IconButton>
          <Heart />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-6 font-medium">
        <h5>${price} ARS</h5>
        <div className="bg-black p-2 rounded-full">
          <IconButton>
            <CartShopPlus />
          </IconButton>
        </div>
      </div>
    </Border>
  );
}
