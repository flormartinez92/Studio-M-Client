export default function Button({ text, className }) {
  return (
    <button
      className={`bg-[#1E1E1E] text-[#FFFFFF] font-mystery-mixed text-2xl p-4 w-220 h-81 ${
        className || ""
      }`}
    >
      {text}
    </button>
  );
}
