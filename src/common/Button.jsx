export default function Button({ children, className, type }) {
  return (
    <button
      className={`bg-black text-white ${
        type === "rounder" ? "rounded-[10px]" : null
      } ${className || ""}`}
    >
      {children}
    </button>
  );
}
