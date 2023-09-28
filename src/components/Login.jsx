import Button from "@/common/Button";
import Input from "@/common/Input";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[115px]">
      <h2 className="font-mystery-mixed text-[35px] min-[320px]:text-[45px] sm:text-[55px] leading-3">
        Iniciar sesión
      </h2>
      <form
        className="
            mt-[50px] 
            w-[80%] 
            min-[450px]:max-w-[350px]
            sm:max-w-[450px] 
            "
      >
        <div
          className="
        mb-4 
        w-[100%] 
        sm:px-3
        flex
        justify-center
        items-center"
        >
          <Input
            label={"Mail"}
            name={"mail"}
            classNameLabel={"block text-[23px]"}
            type={"email"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
            placeholder={"ingresa tu mail"}
          />
        </div>
        <div
          className="
        mb-4 
        w-[100%] 
        sm:px-3
        flex
        justify-center
        items-center"
        >
          <Input
            label={"Contraseña"}
            name={"password"}
            classNameLabel={"text-[23px]"}
            type={"password"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
            placeholder={"ingresa tu contraseña"}
          />
        </div>

        <div
          className="
        flex 
        justify-center 
        items-center 
        mt-[60px]"
        >
          <Button
            children={"Confirmar"}
            className={`bg-black 
          text-white 
          py-[16px] 
          px-[55px] 
          rounded-[5px] 
          leading-3 
          text-[19px]
          block
          sm:w-[13rem]
          md:w-[14rem]`}
          />
        </div>
        <div
          className="
        flex 
        text-black 
        gap-x-3 
        justify-center 
        items-center 
        mt-3 
        flex-col
        sm:text-[17px] 
        sm:flex-row"
        >
          <p>¿No tenés cuenta?</p>
          <a href="#" className="underline">
            Registrate
          </a>
        </div>
      </form>
    </div>
  );
}
