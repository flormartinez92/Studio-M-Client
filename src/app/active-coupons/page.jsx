"use client";
import React, { useState } from "react";
import Button from "@/common/Button";

import { Trash, Pencil, Plus, UilArrow1, UilArrow2 } from "@/common/Icons";
import IconButton from "@/common/IconButton";
import AddCoupon from "./AddCoupon";

export default function ActiveCoupons() {
  const [coupons, setCoupons] = useState(null);
  const [showCouponForm, setShowCouponForm] = useState(false);

  const openForm = () => {
    setShowCouponForm(true);
  };

  const handleAddCoupon = (newCoupon) => {
    console.log(newCoupon);
    setCoupons(newCoupon);
  };

  // const handleDeleteCoupon = () => {};

  // const handleEditCoupon = (editCoupon) => {
  //   const updateCoupon = coupons.filter((coupon) => {
  //     coupon.id === editCoupon.id ? editCoupon : coupon;
  //   });
  //   setCoupons(updateCoupon);
  // };

  return (
    <section className="my-60">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-20 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
        Cupones Activos
      </h2>
      <div className="px-4 font-ms-gothic text-xl md:ml-10 xl:ml-20 md:mr-10 xl:mr-20">
        <table className="w-full xl:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[768px] xl:w-[1211px] h-[48px] border-b-[0.5px] border-lightGrey md:border-t-[0.5px] md:border-l-[0.5px] md:border-r-[0.5px]">
              <td className="p-4">Cupon</td>
              <td></td>
              <td></td>
              <td>Activar</td>
              <td>Editar</td>
              <td>Desactivar/Eliminar</td>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full md:w-[768px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey border-t-[0.5px] md:border-r-[0.5px]">
              <td className="p-4">123CDF</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <IconButton>
                  <Plus color="#4FE21B" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Pencil color="#1BBEE2" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Trash color="#A31616" />
                </IconButton>
              </td>
            </tr>
            <tr className="w-full md:w-[768px] xl:w-[1211px] h-[48px] border-b-[0.5px] border-lightGrey md:border-l-[0.5px] md:border-r-[0.5px] ">
              <td className="p-4">1234AB</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <IconButton>
                  <Plus color="#4FE21B" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Pencil color="#1BBEE2" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Trash color="#A31616" />
                </IconButton>
              </td>
            </tr>
            <tr className="w-full md:w-[768px] xl:w-[1211px] h-[48px] max-sm:shadow-xl  border-lightGrey md:border-l-[0.5px] md:border-r-[0.5px]">
              <td className="p-4">546MSN</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <IconButton>
                  <Plus color="#4FE21B" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Pencil color="#1BBEE2" />
                </IconButton>
              </td>
              <td>
                <IconButton>
                  <Trash color="#A31616" />
                </IconButton>
              </td>
            </tr>
          </tbody>
          <tfoot className="w-full md:w-[768px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px] shadow-xl-left">
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td></td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                1 de 3
                <UilArrow1 color="lightGrey" />
                <UilArrow2 color="lightGrey" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center mt-10 md:justify-end md:mr-24">
        <Button
          className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md p-2 md:p-3 md:w-[130px]"
          onClick={openForm}
        >
          <Plus className="text-whiter" width="15" />
          <span className="text-white items-center flex justify-between">
            Crear cupon
          </span>
        </Button>
      </div>

      {showCouponForm && <AddCoupon onCouponAdd={handleAddCoupon} />}
    </section>
  );
}
