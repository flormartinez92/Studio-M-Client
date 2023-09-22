export const Message = ({ item_num, text }) => {
  return (
    <div className="font-mystery-mixed max-w-max h-auto text-center mx-auto grid place-items-center">
      <div>
        <p>{item_num}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
