export const Message = ({ item_num, text, className}) => {
  return (
    <div className={`bg-[url('/img/FondoCursos.png')] font-mystery-mixed max-w-max h-auto text-center mx-auto grid place-items-center ${className}`}>
      <div>
        <p>{item_num}.</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
