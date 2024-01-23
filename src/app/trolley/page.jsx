"use client";

import React, { useEffect, useState } from "react";
import Button from "@/common/Button";
import { CartShopSimple } from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardsDesktop from "@/components/CardsDesktop";
import Loading_common from "@/common/Loading_common";
import CardsMobile from "@/components/CardsMobile";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/state/features/cartSlice";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";

export default function Trolley() {
  const [cartCourses, setCartCourses] = useState(null);
  // const [user, setUser] = useState({});
  const [deletingId, setDeletingId] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const user = await fetchUser();
      dispatch(setCredentials(user));
      if (!user) {
        router.push("/login");
        return;
      }
      const responseCourses = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${user?._id}`
      );
      setCartCourses(responseCourses.data);
    } catch (error) {
      console.log("ERROR", error);
      if (error.response.data === "Cart not found") {
        setCartCourses([]);
      }
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClickHeart = async (status, idCourse) => {
    try {
      if (status) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/remove/${idCourse}/${user?._id}`
        );
        const responseCourses = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${user?._id}`
        );
        setCartCourses(responseCourses.data);
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/add/${idCourse}/${user?._id}`
        );
        const responseCourses = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${user?._id}`
        );
        setCartCourses(responseCourses.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleremoveCart = async () => {
    try {
      const responseDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${user?._id}`
      );
      dispatch(addToCart(0));
      setCartCourses([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (courseId, index) => {
    setDeletingId(courseId);
    try {
      const responseDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${courseId}/${user?._id}`
      );
      dispatch(addToCart(responseDelete.data.courseId.length));
      setCartCourses(cartCourses.filter((course) => course._id !== courseId));
      setDeletingId(null);
    } catch (err) {
      console.error(err);
    }
  };
  const handleClickCreateOrder = async (user) => {
    try {
      // console.log(user._id);

      const responseOrder = await axios.get(
        `http://localhost:8081/api/purchaseOrder/${user._id}`
      );
      // console.log(responseOrder);

      if (responseOrder.data) return router.push("/trolley/trolley-details");

      const { data } = await axios.get(
        `http://localhost:8081/api/cart/courses/total/${user._id}`
      );

      const createOrder = await axios.post(
        "http://localhost:8081/api/purchaseOrder/add",
        { userId: data.userId, totalAmmount: data.totalAmount }
      );
      router.push("/trolley/trolley-details");
      //console.log(createOrder);
    } catch (error) {
      console.log(error);
    }
    //router.push("/trolley/trolley-details");
  };

  return (
    <div
      className={`flex flex-col items-center w-full min-h-[calc(100vh-500px)] `}
    >
      {!cartCourses && (
        <div className=" w-full h-[500px] flex justify-center items-center">
          <Loading_common />
        </div>
      )}

      {cartCourses &&
        (cartCourses.length !== 0 ? (
          <div className="flex w-full flex-col gap-y-6 justify-center items-center my-10 mb-[10rem]">
            {cartCourses?.map((idem, i) => {
              return (
                <div key={i} className="flex justify-center items-center">
                  <div className="md:hidden mt-4">
                    <CardsMobile
                      img={idem.courseImg_url}
                      title={idem.courseShortTitle}
                      price={idem.coursePrice}
                      handleClickDelete={() => handleRemove(idem._id)}
                    />
                  </div>

                  <div
                    className={`hidden md:block select-none w-full
                    h-auto`}
                  >
                    <div className="flex flex-col justify-center items-center mt-8">
                      <div
                        className={`flex flex-col items-center justify-center w-[90%] gap-y-12 max-w-6xl`}
                      >
                        <CardsDesktop
                          courseDescription={idem.courseDescription}
                          courseImg_url={idem.courseImg_url}
                          courseLongTitle={idem.courseLongTitle}
                          courseLevel={idem.courseLevel}
                          courseSubtitle={idem.courseSubtitle}
                          courseDuration={idem.courseDuration}
                          coursePrice={idem.coursePrice}
                          key={i}
                          notjustPrice={true}
                          isFavorite={idem.status_favorite}
                          subtitleFull={true}
                          iconDelete={true}
                          handleDelteCourse={() => handleRemove(idem._id, i)}
                          handleFavoriteClick={() =>
                            handleClickHeart(idem.status_favorite, idem._id)
                          }
                          isDeleting={deletingId === idem._id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex w-full justify-center items-center">
              <div className="w-[90%] select-none max-w-[855px]">
                <div className="flex flex-col gap-y-5 justify-center mt-8 md:mt-0 items-center md:justify-end md:flex-row md:gap-x-4">
                  <Button
                    onClick={handleremoveCart}
                    className="bg-buttonBlack w-[270px] md:w-[130px] h-10 p-6 md:h-8 md:p-0  rounded-[10px] flex justify-center items-center gap-x-1"
                  >
                    <h2 className="text-[1.5rem] md:text-[1rem]">
                      Vaciar carrito
                    </h2>
                    <div className="md:hidden">
                      <CartShopSimple height={24} width={24} />
                    </div>
                  </Button>
                  <Button
                    onClick={() => handleClickCreateOrder(user)}
                    className="bg-buttonBlack w-[270px] md:w-[130px] h-10 p-6 md:h-8 md:p-0  rounded-[10px] flex justify-center items-center gap-x-1"
                  >
                    <h2 className="text-[1.5rem] md:text-[1rem]">Comprar</h2>
                    <div className="md:hidden">
                      <CartShopSimple height={24} width={24} />
                    </div>
                    <div className="hidden md:block">
                      <CartShopSimple height={20} width={20} />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[600px] w-full bg-white flex justify-center items-center ">
            <h2 className="font-mystery-mixed text-[1.6rem] sm:text-[2.6rem] md:text-[3.6rem] lg:text-[4.6rem] animate__animated animate__flipInX">
              No hay cursos en tu carrito
            </h2>
          </div>
        ))}
    </div>
  );
}
