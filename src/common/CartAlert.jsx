export default function CartAlert_common({
  titleAlert = "",
  classNameAlert = "w-auto",
}) {
  return (
    <div
      id="alertBox"
      className={` fixed z-50 top-0 mt-4 left-0 w-full flex justify-center items-center font-ms-gothic`}
    >
      <div
        className={`animate__animated animate__fadeInDown animate__faster ${classNameAlert} flex flex-col justify-center items-end bg-white py-3 rounded`}
      >
        <h2 className="w-full text-center pl-4">{titleAlert}</h2>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
}
