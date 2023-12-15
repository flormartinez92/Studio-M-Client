import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Pencil, Save } from "@/common/Icons";
import IconButton from "@/common/IconButton";
import Input from "@/common/Input";
import useInput from "@/hooks/useInput";
import { fetchUser } from "@/helpers/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";

const MyData = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [changePassword, setChangePassword] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlertOk, setMessageAlertOk] = useState("");

  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
    isPasswordVisible: isPasswordVisible,
    setIsPasswordVisible: setIsPasswordVisible,
  } = useInput("password");
  const {
    OnChange: OnChangePassword2,
    value: valuePassword2,
    blur: BlurPassword2,
    focus: FocusPassword2,
    message: MessagePassword2,
    isPasswordVisible: isPasswordVisible2,
    setIsPasswordVisible: setIsPasswordVisible2,
  } = useInput("password");

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  const handleEditMode = () => {
    setChangePassword(!changePassword);
  };

  // Pedido al back para cambiar la imagen
  // const handleImage = async () => {
  //   try {
  //     await axios
  //       .put(`${process.env.NEXT_PUBLIC_API_URL}/api/user/updateImg`, {
  //         mail: userData.mail,
  //       })
  //       .then((res) => setUserData({ ...userData, profileImg: res.data.img }))
  //       .catch((error) => console.error(error));
  //     // userData.profileImg = data.img;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //Manejador de click de contraseña
  const handleClickEdit = async (e) => {
    if (valuePassword.trim() == "" || valuePassword2.trim() == "") {
      setMessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setMessageAlert("");
      }, 1300);
    } else {
      if (MessagePassword || MessagePassword2) {
        setMessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setMessageAlert("");
        }, 1300);
      } else {
        try {
          await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/updateUserPassword/${user._id}`,
            {
              firstpassword: valuePassword,
              secondpassword: valuePassword2,
            }
          );
          setMessageAlert("");
          setMessageAlertOk("¡Cambio de contraseña exitoso!");
          setTimeout(() => {
            setChangePassword(false);
          }, 2000);
        } catch (error) {
          console.error(error);
          const { data } = error.response;
          if (data == "Invalid Password") {
            setMessageAlert("*Las contraseñas deben coincidir");
            setTimeout(() => {
              setMessageAlert("");
            }, 2000);
          }
        }
      }
    }
  };

  return (
    //Contenedor
    <div className="mt-7 relative flex flex-col items-center md:mt-10 md:h-80 md:flex-row md:items-start">
      {/*Imagen e Icono*/}
      <div className="md:basis-[27.5%] flex justify-center items-center">
        <div className="flex flex-row justify-between md:absolute md:top-1 md:left-5">
          <Image
            src={"/img/perfilDefault.png"}
            width={100}
            height={100}
            alt="Profile Image"
            className="rounded-full w-[85px] h-[85px] md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px]"
          />
          <div className="relative md:mb-[6.5%] md:mr-[7.5%]">
            <IconButton
              className="absolute bottom-0 right-0 bg-[#1E1E1E] items-center justify-center rounded-full w-[18px] h-[18px] md:w-[24px] md:h-[24px]
              lg:bottom-1 lg:right-1"
              style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
              // onClick={handleImage}
            >
              <Pencil color="white" width="12" height="10" />
            </IconButton>
          </div>
        </div>
      </div>
      {/*Inputs*/}
      <div className="md:basis-[62.5%] items-start">
        <div className="mb-11 md:grid md:grid-cols-2">
          <Input
            name="name"
            type="text"
            value={user?.name}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Nombre"
          />
          <Input
            name="lastName"
            type="text"
            value={user?.lastname}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Apellido"
          />

          <Input
            name="email"
            type="text"
            value={user?.mail}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Email"
          />
          <Input
            name="document"
            type="int"
            value={Number(user?.dni).toLocaleString().replace(/,/g, ".")}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="DNI"
          />
          {/*Inputs cambio de contraseña*/}
          {changePassword && (
            <>
              <Input
                name="firstpassword"
                type="password"
                value={valuePassword}
                onChange={OnChangePassword}
                placeholder="********"
                className="md:w-[190px] w-[210px] lg:w-[90%]"
                classNameInput="p-[5.5px] w-full"
                classNameLabel="text-[20px]"
                label="Nueva contraseña"
                onFocus={FocusPassword}
                onBlur={BlurPassword}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
              />
              <Input
                name="secondpassword"
                type="password"
                value={valuePassword2}
                onChange={OnChangePassword2}
                placeholder="********"
                className="md:w-[190px] w-[210px] lg:w-[90%]"
                classNameInput="p-[5.5px] w-full"
                classNameLabel="text-[20px]"
                label="Confirmar contraseña"
                onFocus={FocusPassword2}
                onBlur={BlurPassword2}
                isPasswordVisible={isPasswordVisible2}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible2(!isPasswordVisible2)
                }
              />
              <div className="h-[.5rem] pb-6">
                {(MessagePassword || MessagePassword2) && (
                  <p className="text-red text-[.8rem] leading-3">
                    {MessagePassword || MessagePassword2}
                  </p>
                )}
              </div>

              <div className="h-[.5rem] w-full">
                {messageAlert != "" ? (
                  <p className="text-red text-[1rem] leading-3">
                    {messageAlert}
                  </p>
                ) : (
                  <p className="text-darkGreen text-[1rem] leading-3">
                    {messageAlertOk}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="md:basis-[10%]">
        {/* Icono cambio de contraseña */}
        <div
          className={
            "absolute bottom-0 right-0 mr-[5%] mb-[4.5%] md:mr-[4%] md:mb-[3.5%]"
          }
        >
          <IconButton
            className="bg-[#1E1E1E] rounded-full w-6 h-6"
            style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
            onClick={() =>
              changePassword ? handleClickEdit() : handleEditMode()
            }
          >
            {changePassword ? (
              <Save color="white" width="14" height="14" />
            ) : (
              <Pencil color="white" width="14" height="15" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MyData;
