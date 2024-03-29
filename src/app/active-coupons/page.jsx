"use client";

import React from "react";
import Button from "@/common/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";

import {
  Trash,
  Pencil,
  ArrowReload,
  UilArrow1,
  UilArrow2,
} from "@/common/Icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NotFound from "@/common/NotFound";

export default function ActiveCoupons() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [coupons, setCoupons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const couponsPerPage = 10;
  const totalPages = Math.ceil(coupons.length / couponsPerPage);
  const startIndex = (currentPage - 1) * couponsPerPage;
  const endIndex = startIndex + couponsPerPage;

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/allCoupons`)
      .then((res) => {
        const coupons = res.data;
        setCoupons(coupons);
      })
      .catch((error) => {
        console.error("Error getting coupons:", error);
      });
  }, []);

  const toggleStatus = async (couponId, couponStatus) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/enable-disable/${couponId}`,
        { status: couponStatus }
      );
      const coupons = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/allCoupons`
      );
      setCoupons(coupons.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusToggle = async (couponId) => {
    try {
      const oneCoupon = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/allCoupons/${couponId}`
      );
      if (oneCoupon.data.status) {
        toggleStatus(couponId, false);
      } else {
        toggleStatus(couponId, true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {user && user.isAdmin ? (
        <section className="my-20 mb-60">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-10 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
            Cupones activos
          </h2>
          <div className="flex justify-center px-4 font-ms-gothic md:ml-10 xl:ml-10 md:mr-10 xl:mr-10 ">
            <table className="w-full xl:table-fixed">
              <thead className="max-sm:hidden">
                <tr className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey  md:border-r-[0.5px] rounded-t-lg text-[#757575] border-t-[0.05px]">
                  <td className="p-4">Cupón</td>
                  <td className="sm:pr-10 md:pr-10">Descuento %</td>
                  <td className="sm:pr-10 md:pr-10">Editar</td>
                  <td className="sm:pr-10 md:pr-10">Bloquear/Habilitar</td>
                </tr>
              </thead>
              <tbody>
                {coupons?.slice(startIndex, endIndex).map((coupon) => (
                  <tr
                    key={coupon._id}
                    className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
                  >
                    <td className="p-4">{coupon.couponCode}</td>
                    <td className="p-4">{coupon.discountCoupon}</td>
                    <td className="p-2">
                      <Link href={`/add-coupon/${coupon._id}`}>
                        <button>
                          <Pencil color="#1BBEE2" />
                        </button>
                      </Link>
                    </td>
                    <td className="p-4">
                      <button onClick={() => handleStatusToggle(coupon._id)}>
                        {coupon.status ? (
                          <Trash color="#A31616" />
                        ) : (
                          <ArrowReload color="#E21B7B" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="w-full md:w-[740px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px] rounded-b-lg">
                <tr>
                  <td>&nbsp;</td>
                  <td></td>
                  <td>Filas por página</td>
                  <td className="flex justify-between mt-3 mr-3">
                    &nbsp; {currentPage} de {totalPages}
                    <div className="flex xl:gap-12 md:gap-10">
                      <button
                        onClick={() =>
                          setCurrentPage((prevPage) =>
                            Math.max(prevPage - 1, 1)
                          )
                        }
                        disabled={currentPage === 1}
                      >
                        <UilArrow1
                          color={currentPage === 1 ? "lightGrey" : "black"}
                        />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prevPage) =>
                            Math.min(prevPage + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        <UilArrow2
                          color={
                            currentPage === totalPages ? "lightGrey" : "black"
                          }
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex justify-center mt-8 md:justify-end md:mr-20">
            <Link href="/add-coupon">
              <Button className="flex justify-center items-center w-[120px] h-[40px] bg-darkGreen rounded-md md:w-[140px]">
                <span>Crear cupón</span>
              </Button>
            </Link>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
}
