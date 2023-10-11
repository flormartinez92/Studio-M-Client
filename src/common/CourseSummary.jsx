"use client";

import Border from "./Border";
import IconButton from "./IconButton";
import { Clock, Signal, Heart, CartShopPlus } from "./Icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/features/cartSlice";
import axios from "axios";

export default function CourseSummary({
  level,
  hours,
  price,
  className,
  courseId,
}) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const handleAddToCart = async () => {
    try {
      await axios.post(
        `http://localhost:8081/api/cart/add/${courseId}/${userId}`
      );

      dispatch(addToCart(courseId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Border
      className={`p-5 border-[3px] border-pink flex flex-col justify-center items-center gap-2 ${
        className || ""
      }`}
    >
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
          <IconButton onClick={handleAddToCart}>
            <CartShopPlus />
          </IconButton>
        </div>
      </div>
    </Border>
  );
}

// const handleAddToCart = () => {
//   if (isOnCart(book.id)) {
//     removeFromCart(book.id);
//   } else {
//     addToCart(book.id);
//   }
// };

// const removeFromCart = (id) => {
//   axios
//     .delete(`http://localhost:4000/cart/remove/${id}/${state.user.id}`)
//     .then((user) => {
//       setCarrito();
//       message.info("Eliminado del carrito");
//       const userId = user.data.id;
//       axios
//         .get(`http://localhost:4000/admin/users/${userId}`)
//         .then((user) => {
//           setState((s) => ({ ...s, user: user.data }));
//         });
//     });
// };

// const isOnCart = (bookId) => {
//   const arrayOfBooksId = state.carrito.books
//     ? state.carrito.books.map((m) => m.bookId)
//     : [];

//   // console.log(arrayOfBooksId.includes(bookId));
//   return arrayOfBooksId.includes(bookId); //booleano
// };