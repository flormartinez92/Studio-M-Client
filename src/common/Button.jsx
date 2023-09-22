export default function Button({ children, className, type }) {
  return (
    <button
      className={`bg-black text-white text-xl p-2 ${
        type === "rounder" ? "rounded-2xl px-14 py-3" : null
      } ${className || ""}`}
    >
      {children}
    </button>
  );
}
