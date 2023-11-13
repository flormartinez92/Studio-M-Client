import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Pencil, Save } from "@/common/Icons";
import IconButton from "@/common/IconButton";
import Input from "@/common/Input";

const MyData = ({ decodedToken }) => {
  //Estados para cambio de password y datos de usuario.
  const [changePassword, setChangePassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    mail: "",
    dni: "",
  });

  //Pedido al back para los datos de usuario (el token tambien los trae).
  useEffect(() => {
    if (decodedToken._id) {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${decodedToken._id}`)
          .then((res) => setUserData(res.data));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  //Pedido al back para cambiar la contraseña
  const handlePassword = ({ firstPassword, secondPassword}) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/user/updateUserPassword/${decodedToken._id}`, {firstPassword, secondPassword})
      // .then((res)=> )
  }
  //Pedido al back para cambiar la imagen
  const handleEditImg = ({img}) => {
    axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/api/user/updateImg`, {img})
    //.then((res) => res.data);
    // userData.profileImg = data.img;
  }

  //Manejador de cambio para los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //Manejador de click
  const handleClickEdit = () => setChangePassword(!changePassword);

  return (
    //Contenedor
    <div className="mt-7 relative flex flex-col items-center md:h-80 md:flex-row md:justify-around md:items-start md:mt-12">
      {/*Imagen e Icono*/}
      <div className="flex flex-row justify-between md:mt-3">
        <Image
          src={"/img/usuario.png"}
          width={100}
          height={100}
          alt="Profile Image"
          className="rounded-full w-[85px] h-[85px] md:w-[170px] md:h-[170px]"
        />
        <div className="relative md:mb-[6.5%] md:mr-[7.5%]">
          <IconButton
            className="absolute bottom-0 right-0 bg-[#1E1E1E] items-center justify-center rounded-full w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
            style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
          >
            <Pencil color="white" width="12" height="10" />
          </IconButton>
        </div>
      </div>
      {/*Inputs*/}
      <div className="w-[60%] mb-11 md:flex md:flex-wrap md:gap-x-6">
        <Input
          name="name"
          type="text"
          value={userData.name}
          onChange={handleInputChange}
          className="w-full md:w-[45%]"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Nombre"
        />
        <Input
          name="lastName"
          type="text"
          value={userData.lastname}
          onChange={handleInputChange}
          className="w-full md:w-[45%]"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Apellido"
        />
        <Input
          name="email"
          type="text"
          value={userData.mail}
          onChange={handleInputChange}
          className="w-full md:w-[45%]"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Email"
        />
        <Input
          name="document"
          type="INT"
          value={userData.dni}
          onChange={handleInputChange}
          className="w-full md:w-[45%]"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="DNI"
        />
        {/*Inputs cambio de contraseña*/}
        {changePassword && (
          <>
            <Input
              name="NewPassword"
              type="password"
              placeholder="********"
              className="w-full md:w-[45%]"
              classNameInput="p-[5.5px]"
              classNameLabel="text-[20px]"
              label="Nueva contraseña"
            />
            <Input
              name="ConfirmPassword"
              type="password"
              placeholder="********"
              className="w-full md:w-[45%]"
              classNameInput="p-[5.5px]"
              classNameLabel="text-[20px]"
              label="Confirmar contraseña"
            />
          </>
        )}
      </div>
      {/* Icono cambio de contraseña */}
      <div
        className={
          "absolute bottom-0 right-0 mr-[5%] mb-[4.5%] md:mr-[4%] md:mb-[3.5%]"
        }
      >
        <IconButton
          className="bg-[#1E1E1E] rounded-full w-6 h-6"
          style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
          onClick={handleClickEdit}
        >
          {changePassword ? (
            <Save color="white" width="14" height="14" />
          ) : (
            <Pencil color="white" width="14" height="15" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default MyData;

// if (title === "Mis datos") {
//   try {
//     await axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}`)
//       .then((res) => setUserData(res.data));
//     setCurrentTitle(title);
//   } catch (error) {
//     console.error(error);
//   }
// } else {
//   setCurrentTitle(title);
// }
