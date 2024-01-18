import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import IconButton from "@/common/IconButton";
import { BurgerMenu, CartShopSimple, Close } from "@/common/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import { addToCart } from "@/state/features/cartSlice";

export default function Cover() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { itemCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  const cartUser = async () => {
    try {
      const userData = await fetchUser();
      if (!userData) {
        return;
      }

      const responseCart = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${userData._id}`
      );
      const cartLength = responseCart.data.length;
      dispatch(addToCart(cartLength));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cartUser();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (title) => {
    setTitle(title);
    setMenuOpen(false);
  };

  return (
    <section className="bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center">
      {menuOpen ? (
        <div className="h-screen bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center animate-navbar">
          <div className="flex items-center justify-end">
            <IconButton
              className="cursor-pointer mx-10 mt-6"
              onClick={toggleMenu}
            >
              <Close width="30" height="30" color="white" />
            </IconButton>
          </div>
          <div className="flex flex-col items-center justify-center z-10 absolute w-full left-0 py-7 pl-7">
            <ul className="text-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 ">
              <li className="">
                <Link
                  href="/"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Inicio
                </Link>
              </li>
              {!user?.isAdmin ? (
                <li className="">
                  <Link
                    href="/courses"
                    className="text-[50px] text-white font-mystery-mixed"
                    onClick={handleClick}
                  >
                    Cursos
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link
                    href="/admin-panel"
                    className="text-[50px] text-white font-mystery-mixed"
                    onClick={handleClick}
                  >
                    Mi Panel
                  </Link>
                </li>
              )}
              <li className="">
                <Link
                  href="/my-account"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Mi cuenta
                </Link>
              </li>
              <li className="mx-[6rem]">
                <Link
                  href="/trolley"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  <IconButton className={"relative"}>
                    {itemCount >= 1 ? (
                      <>
                        <p className="absolute bottom-5 left-11 text-2xl">
                          {itemCount}
                        </p>
                        <CartShopSimple width="43" height="40" />
                      </>
                    ) : (
                      <CartShopSimple width="43" height="40" />
                    )}
                  </IconButton>
                </Link>
              </li>
            </ul>

            <div className=" mx-auto  mb-[60px] mt-[4rem] relative">
              <Image
                src="/img/pink-square.png"
                width={55}
                height={55}
                alt="pinkSquare"
                className="m-auto absolute left-[-1rem] -top-2 "
              />
              <Image
                src="/img/green-square.png"
                width={59}
                height={59}
                alt="greenSquare"
                className="m-auto absolute right-[-1rem] -bottom-3.5 "
              />
              <Image
                src="/img/Maca.png"
                width={130}
                height={154}
                alt="MacaLogo"
                className="m-auto relative"
              />
            </div>
          </div>
        </div>
      ) : (
        <nav className=" p-10 md:p-5 text-white font-mystery-mixed md:flex md:items-center md:justify-end">
          <div className="flex justify-between items-center">
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden md:hidden"
            />
            <label
              htmlFor="menu-toggle"
              className="absolute right-0 mr-[8%] md:hidden"
            >
              <IconButton className="cursor-pointer" onClick={toggleMenu}>
                <BurgerMenu width="24" height="24" />
              </IconButton>
            </label>
            <div className="hidden md:block">
              <ul className="md:w-full md:flex md:flex-row md:items-center">
                <li className="mx-4">
                  <Link
                    href="/"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="mx-4">
                  {!user?.isAdmin ? (
                    <Link
                      href="/courses"
                      className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                    >
                      Cursos
                    </Link>
                  ) : (
                    <Link
                      href="/admin-panel"
                      className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                    >
                      Mi Panel
                    </Link>
                  )}
                </li>
                <li className="mx-4">
                  <Link
                    href={user ? "my-account" : "/login"}
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Mi cuenta
                  </Link>
                </li>
                <li className="mx-4">
                  <Link href="/trolley">
                    <IconButton className="hover:underline hover:decoration-pink relative">
                      {itemCount >= 1 ? (
                        <>
                          <p className="absolute bottom-6 left-11 text-3xl">
                            {itemCount}
                          </p>
                          <CartShopSimple width="43" height="40" />
                        </>
                      ) : (
                        <CartShopSimple width="43" height="40" />
                      )}
                    </IconButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {!menuOpen && (
        <div
          className="h-1/2 flex flex-col
      md:h-screen md:px-7 md:flex-row md:pb-24"
        >
          <div
            className="mx-auto mt-5 flex flex-col justify-center items-center
        md:px-10 "
          >
            <h1
              className="text-white font-mystery-mixed text-5xl tracking-wide
          md:text-6xl md:pb-10 lg:text-8xl
          xl:text-9xl"
            >
              Studio by M
            </h1>
            {/* Este div se ve en modo desktop */}
            <div
              className="hidden md:block md:pt-8 relative md:w-40 md:h-20 
          xl:w-64 xl:h-36"
            >
              <Image
                src="/img/paper-desktop-cover.png"
                width={270}
                height={140}
                alt="paperDesktopCover"
                className="absolute"
              />
              <Image
                src="/img/star.gif"
                width={279}
                height={279}
                alt="starGIF"
                className="relative md:-top-[5.125rem] md:-right-[3.94rem] 
              xl:-top-[8.125rem] xl:-right-[6.25rem]"
              />
              <Link href={"/courses"}>
                <h3
                  className="text-[#000000] font-mystery-mixed text-3xl relative -rotate-6
              md:-top-[8.75rem] md:-right-[0.625rem]
              xl:text-5xl xl:-top-[13.125rem] xl:-right-[0.875rem] "
                >
                  Ver cursos
                </h3>
              </Link>
            </div>
          </div>

          <div
            className="mx-auto mb-14 mt-5 relative 
        md:m-auto md:w-auto md:h-auto"
          >
            <Image
              src="/img/pink-square.png"
              width={55}
              height={55}
              alt="pinkSquare"
              className="m-auto absolute -left-3 -top-2 
            md:-top-3 md:-left-6 md:w-[110.4px] md:h-[110.4px]
            xl:-top-5 xl:-left-9 xl:w-[165.6px] xl:h-[165.6px]"
            />
            <Image
              src="/img/green-square.png"
              width={59}
              height={59}
              alt="greenSquare"
              className="m-auto absolute -right-0 -bottom-3.5 
            md:-bottom-[27px] md:right-1 md:w-[118.2px] md:h-[118.2px]
            xl:-bottom-[38px] xl:-right-0 xl:w-[177.3px] xl:h-[177.3px]"
            />
            <Image
              src="/img/Maca.png"
              width={130}
              height={154}
              alt="MacaLogo"
              className="m-auto relative 
            md:w-[261.6px] md:h-[309px] 
            xl:w-[392.4px] xl:h-[463.5px] "
            />
          </div>
        </div>
      )}
    </section>
  );
}
