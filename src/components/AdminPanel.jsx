import AdminButton from "@/common/AdminButton";
import { DashIcons, MenuBook, Percent, User } from "@/common/Icons";

export default function AdminPanel() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center my-10">
      {}
      <AdminButton
        icon={<MenuBook width={90} height={90} />}
        text={"10 proyectos para corregir"}
        className={"bg-pink"}
      />
      <AdminButton
        icon={<User width={90} height={90} />}
        text={"Usuarios activos"}
        className={"bg-blue"}
      />
      <AdminButton
        icon={<DashIcons width={90} height={90} />}
        text={"Cursos activos"}
        className={"bg-darkGreen"}
      />
      <AdminButton
        icon={<Percent width={90} height={90} />}
        text={"Cupones de descuento activos"}
        className={"bg-purple"}
      />
    </div>
  );
}
