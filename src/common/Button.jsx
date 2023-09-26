export default function Button({ children, className, type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-black text-white ${
        type === "rounder" ? "rounded-[10px]" : null
      } ${className || ""}`}
    >
      {children}
    </button>
  );
}
