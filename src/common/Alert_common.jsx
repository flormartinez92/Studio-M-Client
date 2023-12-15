export default function Alert_common({
  out = false,
  handleAlert,
  handleCancel,
  titleAlert = "",
  classNameAlert = "w-auto",
  cancelText,
}) {
  return (
    <div
      id="alertBox"
      className={`${
        out && "animate__animated animate__fadeOut"
      } fixed z-50 top-0 mt-4 left-0 w-full flex justify-center items-center font-ms-gothic`}
    >
      <div
        className={`animate__animated animate__fadeInDown animate__faster ${classNameAlert} flex flex-col justify-center items-end bg-white py-3 rounded`}
      >
        <h2 className="w-full text-start pl-2">{titleAlert}</h2>
        <div className="flex justify-between">
          <button
            onClick={handleAlert}
            className="bg-page p-2 leading-3 mt-2 mr-2 font-bold rounded hover:p-[.6rem] h-[2rem]"
          >
            Aceptar
          </button>
          {cancelText && (
            <button
              onClick={() => {
                handleCancel();
              }}
              className="bg-gray-300 p-2 leading-3 mt-2 mr-2 font-bold rounded hover:p-[.6rem] h-[2rem]"
            >
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
