export default function Alert_common({
  out = false,
  handleAlert,
  titleAlert = "",
  classNameAlert = "w-auto",
}) {
  return (
    <div
      id="alertBox"
      className={`${
        out && "animate__animated animate__fadeOut"
      } fixed z-50 top-0 mt-4 left-0  w-full flex justify-center items-center font-ms-gothic`}
    >
      <div
        className={`animate__animated animate__fadeInDown animate__faster ${classNameAlert} flex flex-col justify-center items-end bg-white py-3 rounded`}
      >
        <h2 className="w-full text-start pl-2">{titleAlert}</h2>
        <button
          onClick={handleAlert}
          className="bg-page p-2 leading-3 mt-2 mr-2 font-bold rounded hover:p-[.6rem] h-[2rem]"
        >
          aceptar
        </button>
      </div>
    </div>
  );
}
