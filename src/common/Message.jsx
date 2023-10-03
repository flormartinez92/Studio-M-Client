export const Message = ({ item_num, text, className}) => {
  return (
    <div className={`bg-[url('/img/FondoCursos.png')] font-mystery-mixed w-[90%] h-auto text-center mx-auto grid place-items-center ${className}`}>
      <div className="flex flex-col items-center">
        <p>{item_num}.</p>
        <p className="max-w-[80%] text-center">{text}</p>
      </div>
    </div>
  );
};