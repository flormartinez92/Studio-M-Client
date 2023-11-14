import Link from "next/link";
import AdminButton from "../../common/AdminButton";
import { DashIcons, MenuBook, Percent, User } from "@/common/Icons";

export default function AdminPanel() {
  return (
    <div
      className="flex flex-col gap-12 items-center justify-center my-16
    md:flex-row md:py-[8%] md:gap-5 
    lg:flex-row lg:gap-6
    xl:flex-row xl:gap-16 xl:pb-[17%]"
    >
      <AdminButton
        icon={<MenuBook width={"5.62rem"} height={"5.62rem"} />}
        text={"10 proyectos para corregir"}
        className={"bg-pink"}
      />
      <Link href="/active-users">
        <AdminButton
          icon={<User width={"5.62rem"} height={"5.62rem"} />}
          text={"Usuarios activos"}
          className={"bg-blue"}
        />
      </Link>
      <Link href="/active-courses">
        <AdminButton
          icon={<DashIcons width={"5.62rem"} height={"5.62rem"} />}
          text={"Cursos activos"}
          className={"bg-darkGreen"}
        />
      </Link>
      <Link href="/active-coupons">
        <AdminButton
          icon={<Percent width={"5.62rem"} height={"5.62rem"} />}
          text={"Cupones de descuento activos"}
          className={"bg-purple"}
        />
      </Link>
    </div>
  );
}
