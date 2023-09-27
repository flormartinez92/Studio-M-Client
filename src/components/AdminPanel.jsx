import AdminButton from "@/common/AdminButton";
import { DashIcons, MenuBook, Percent, User } from "@/common/Icons";

export default function AdminPanel() {
  return (
    <div
      className="flex flex-col gap-12 items-center justify-center my-[70px]
    md:flex-row md:py-[8%] md:gap-5 md:my-[150px]
    lg:flex-row lg:py-[6%] lg:gap-6
    xl:flex-row xl:py-[4%] xl:gap-12"
    >
      <AdminButton
        icon={<MenuBook width={"5.62rem"} height={"5.62rem"} />}
        text={"10 proyectos para corregir"}
        className={"bg-pink "}
      />
      <AdminButton
        icon={<User width={"5.62rem"} height={"5.62rem"} />}
        text={"Usuarios activos"}
        className={"bg-blue"}
      />
      <AdminButton
        icon={<DashIcons width={"5.62rem"} height={"5.62rem"} />}
        text={"Cursos activos"}
        className={"bg-darkGreen"}
      />
      <AdminButton
        icon={<Percent width={"5.62rem"} height={"5.62rem"} />}
        text={"Cupones de descuento activos"}
        className={"bg-purple"}
      />
    </div>
  );
}
