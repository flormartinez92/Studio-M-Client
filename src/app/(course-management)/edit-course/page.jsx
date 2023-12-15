import EditCourse from "@/components/editCourse";

export default function EditCourseAdmin() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed w-full h-auto text-[2.3rem] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3 text-center">
        Agregar Curso
      </h2>
      <EditCourse />
    </div>
  );
}
