import AdminButton from "@/common/AdminButton";
import IconButton from "@/common/IconButton";
import { DashIcons, MenuBook, Percent, User } from "@/common/Icons";

export default function AdminPanel() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center my-10">
      <AdminButton
        icon={
          <IconButton>
            <MenuBook width={90} height={90} />
          </IconButton>
        }
        text={"10 proyectos para corregir"}
        className={"bg-pink"}
      />
      <AdminButton
        icon={
          <IconButton>
            <User width={90} height={90} />
          </IconButton>
        }
        text={"Usuarios activos"}
        className={"bg-blue"}
      />
      <AdminButton
        icon={
          <IconButton>
            <DashIcons width={90} height={90} />
          </IconButton>
        }
        text={"Cursos activos"}
        className={"bg-darkGreen"}
      />
      <AdminButton
        icon={
          <IconButton>
            <Percent width={90} height={90} />
          </IconButton>
        }
        text={"Cupones de descuento activos"}
        className={"bg-purple"}
      />
    </div>
  );
}
