"use client"

import Border from "./Border";
import IconButton from "./IconButton";
import { Clock, Signal, Heart, CartShopPlus } from "./Icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/features/cartSlice";
import axios from "axios";

export default function CourseSummary({ level, hours, price, className, courseId }) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const handleAddToCart = async () => {
    try {
      // await axios.get("http://localhost8081/user/courses")
      await axios.post(`http://localhost:8081/cart/add/${courseId}/${userId}`)

      dispatch(addToCart(courseId)); // courseId pendiente
    } catch (error) {
      console.error(error)
    }
  };

  // const getAllBooks = () => {
  //   axios
  //     //.get("http://localhost:4000/admin/books")
  //     .get("http://localhost:4000/user/products")
  //     .then((res) => {
  //       const customBooks = res.data.map((book) => {
  //         return {
  //           // bookId: book.bookId ? book.bookId : book.id,
  //           bookId: book.bookId ?? book.id,
  //           title: book.title,
  //           description: book.description,
  //           img: book.img ?? "",
  //           rating: book.rating ?? 1,
  //           price: book.price ?? 0,
  //           date: book.date ?? "",
  //           categories: book.categories ?? [],
  //         };
  //       });
  //       // console.log(customBooks);
  //       setState((s) => ({ ...s, books: customBooks }));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

// const handleAddToCart = () => {
//   if (isOnCart(book.id)) {
//     removeFromCart(book.id);
//   } else {
//     addToCart(book.id);
//   }
// };

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
          <IconButton onClick={handleAddToCart}>
            <CartShopPlus />
          </IconButton>
        </div>
      </div>
    </Border>
  );
}



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