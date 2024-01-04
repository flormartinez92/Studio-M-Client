"use client";
import Border from "@/common/Border";
import Button from "@/common/Button";
// import IconButton from "@/common/IconButton";
// import { CartShopSimple, Close, Signal } from "@/common/Icons";
import Input from "@/common/Input";
import Loading_common from "@/common/Loading_common";
import Cards from "@/components/Cards";
import CardsDesktop from "@/components/CardsDesktop";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect, useRef, useState } from "react";
import { PayPalButton, PaypalButton } from "@/components/PaypalButton";
import { useDispatch, useSelector } from "react-redux";
import MpButton from "@/components/mpButton";

export default function trolleyDetails() {
  const [{ isPending }] = usePayPalScriptReducer();
  const [cartCourses, setCartCourses] = useState([]);
  const [cartAmount, setCartAmount] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [trolley, setTrolley] = useState(null);
  const [messageAlertError, setMessageAlertError] = useState(null);
  const [messageAlertOk, setMessageAlertOk] = useState(null);
  const [priceDiscount, setPriceDiscount] = useState(null);
  const [order, setOrder] = useState({});

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const modalRef = useRef();
  const router = useRouter();

  const handleCheck = async () => {
    console.log(user);
    try {
      const responseCart = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/confirmBuy/${user._id}`
      );

      localStorage.setItem("purchase", JSON.stringify(cartCourses));
      router.push("/trolley/purchase-completed");
    } catch (err) {
      console.error(err);
    }
  };
  const handleAddCoupon = async () => {
    if (!coupon) return;
    try {
      const responseCoupon = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/addDiscount`,
        { couponCode: coupon, mail: user.mail }
      );
      const responseTotalAmount = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/total/${user._id}`
      );
      setMessageAlertOk("Descuento Aplicado!");
      setTimeout(() => {
        setMessageAlertOk(null);
        setIsOpen(false);
      }, 1400);
      setCartAmount(responseTotalAmount.data);
      setPriceDiscount(responseCoupon.data.totalAmount);
      setTrolley(responseCoupon.data.totalDiscount);
    } catch (err) {
      if (err.response.data === "Coupon not found") {
        setMessageAlertError("Coupon not found");
        setTimeout(() => {
          setMessageAlertError(null);
        }, 1400);
      }
      console.error(err);
    }
  };
  const onChangeCoupon = (e) => {
    e.preventDefault();
    setCoupon(e.target.value);
  };
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Bloquea el scroll del body
      document.body.querySelector("nav").style.opacity = "0.9";
      document.body.querySelector("#Footer").style.opacity = "0.9";
      document.body.querySelector("#details").style.opacity = "0.7";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick); // fugas de memoria mejor eliminar
      document.body.style.overflow = "auto"; // Habilita el scroll del body
      document.body.querySelector("nav").style.opacity = "1";
      setCoupon("");
      document.body.querySelector("#Footer").style.opacity = "1";
      document.body.querySelector("#details") &&
        (document.body.querySelector("#details").style.opacity = "1");
    }
  }, [isOpen]);

  const handleCoupon = (status) => {
    if (!status) {
      setIsOpen(true);
    }
  };

  const getUser = async () => {
    try {
      const user = await fetchUser();
      if (!user) return;
      
      dispatch(setCredentials(user));

      const responseCourses = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${user?._id}`
      );

      const responseTotalAmount = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/total/${user?._id}`
      );
      const responseOrder = await axios.get(
        `http://localhost:8081/api/purchaseOrder/${user._id}`
      );

      setOrder(responseOrder.data);
      setCartAmount(responseTotalAmount.data);
      setCartCourses(responseCourses.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative">
      {cartCourses.length === 0 ? (
        <div className="w-full h-[600px]  flex justify-center items-center">
          <Loading_common />
        </div>
      ) : (
        <>
          <div
            id="details"
            className="flex w-full flex-col justify-center items-center relative"
          >
            <div className="mt-12 mb-6 md:mb-10">
              <h3 className="text-h2Black font-mystery-mixed text-[29px] min-[320px]:text-[38px] transform -rotate-2 md:rotate-0 md:text-5xl">
                Detalle de la orden
              </h3>
            </div>
            {cartCourses?.map((course) => (
              //Contenido para dispositivos móviles
              <Cards
                key={course._id}
                title={course.courseShortTitle}
                className="pb-10 w-[66%] min-h-[15rem] min-w-[14rem] max-w-[14rem] min-[400px]:max-w-[15rem] md:hidden select-none"
                img={course.courseImg_url}
                classNameImg=" h-[12.625rem] rounded-bl-[10px] rounded-br-[10px]"
                classNameBorder="h-[52px] flex-row justify-between items-center w-[170px] top-[182px]"
                classNameButton="text-xl tracking-wider w-[120px] pl-[14px] pr-[14px] h-[90%] items-center"
                buttonTitle={`$ ${Number(course.coursePrice)
                  .toLocaleString()
                  .replace(",", ".")}`}
              />
            ))}
            {cartCourses?.map((course) => {
              return (
                <div
                  className="hidden md:block select-none w-full h-auto mb-8"
                  key={course._id}
                >
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center w-[90%] gap-y-12 max-w-6xl">
                      <CardsDesktop
                        courseDescription={course.courseDescription}
                        courseImg_url={course.courseImg_url}
                        courseLongTitle={course.courseLongTitle}
                        courseLevel={course.courseLevel}
                        courseSubtitle={course.courseSubtitle}
                        courseDuration={course.courseDuration}
                        coursePrice={course.coursePrice}
                        isFavorite={course.status_favorite}
                        subtitleFull={true}
                        handleFavoriteClick={() =>
                          handleClickHeart(course.status_favorite, course._id)
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className="mt-3 cursor-pointer select-none flex justify-center items-center relative"
              onClick={() => handleCoupon(isOpen)}
            >
              <h3 className="text-h2Black font-ms-gothic text-[16px] md:text-lg">
                Tengo un cupón de descuento
              </h3>
            </div>
            <div className=" flex items-center justify-center text-h2Black font-mystery-mixed text-2xl min-[320px]:text-3xl w-[70%] mt-6 md:justify-center md:text-5xl">
              <h2 className="mx-8">Total:</h2>
              <div className="relative">
                {priceDiscount && (
                  <p className="absolute -top-5 md:-top-5 left-1/2 -translate-x-1/2 text-[15px] md:text-[25px] -rotate-2 line-through font-ms-gothic">
                    {Number(priceDiscount).toLocaleString().replace(",", ".")}
                  </p>
                )}
                <h2 className="mx-8">
                  {!trolley
                    ? Number(cartAmount.totalAmount)
                        .toLocaleString()
                        .replace(",", ".")
                    : Number(trolley).toLocaleString().replace(",", ".")}
                </h2>
              </div>
            </div>

            <div
              className={`font-ms-gothic text-[28px] w-[60%] max-w-[270px] mt-4 py-1  mb-[5rem] sm:mb-[8rem] sm:max-w-[270px]`}
            >
              <MpButton
                cartCourses={cartCourses}
                orderId={order._id}
              />
              <PayPalButton
                orderId={order._id}
                amount={20}
                userId={user._id}
                cartCourses={cartCourses}
              />
            </div>
          </div>

          {/*  {cartCourses?.map((course) => (
        //Contenido para dispositivos móviles
        <Cards
          key={course._id}
          title={course.courseTitle}
          buttonTitle="$ 10.000"
          img={course.courseImg_url}
          className="w-[50%] mt-8 text-1xl md:hidden"
          classNameImg=""
        />
      ))} */}
          <div
            className={` w-full  flex items-center justify-center fixed inset-0 z-50 animate__animated  ${
              isOpen ? "block animate__zoomIn" : "hidden animate__zoomOut"
            }`}
          >
            <div
              ref={modalRef}
              className="  w-full max-w-[1100px] h-[350px] min-[500px]:h-[400px] min-[600px]:h-[500px] min-[700px]:h-[600px] min-[800px]:h-[720px]  bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center mx-4 sm:m-20"
            >
              <div className="flex h-[240px] min-[500px]:h-[350px] min-[600px]:h-[550px] w-full flex-col gap-y-10 justify-between min-[500px]:justify-around items-center">
                <h2 className="font-mystery-mixed text-[2rem] min-[500px]:text-[3rem] min-[600px]:text-[3.5rem] min-[700px]:text-[4rem] md:text-[4.5rem] text-letterWhite">
                  Ingresá tu cupón
                </h2>

                <Input
                  className={
                    "w-[83%] max-w-[420px] min-[500px]:max-w-[620px] min-[600px]:max-w-[820px]"
                  }
                  classNameInput={
                    "h-[2.7rem] min-[500px]:h-[3.1rem] min-[600px]:h-[3.5rem] text-[2rem] min-[500px]:text-[3rem] w-full"
                  }
                  onChange={onChangeCoupon}
                  value={coupon}
                />

                <div className="relative flex justify-center items-center">
                  {messageAlertError && (
                    <p className=" absolute -top-10 text-red font-ms-gothic h-10 md:text-[1.5rem]">
                      {messageAlertError}
                    </p>
                  )}
                  {messageAlertOk && (
                    <p className="absolute -top-10 text-darkGreen font-ms-gothic h-10 md:text-[1.5rem]">
                      {messageAlertOk}
                    </p>
                  )}

                  <Border
                    className={`flex gap-0.5 border-pink border-[1px] p-1 ${""}`}
                  >
                    <Button
                      className={`font-mystery-mixed p-3 whitespace-nowrap flex items-center text-[1.5rem] min-[500px]:text-[2.5rem] min-[500px]:p-5  leading-3 min-[500px]:leading-5 `}
                      onClick={handleAddCoupon}
                    >
                      {"Aplicar descuento"}
                    </Button>
                  </Border>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
