export default function Button({ children, className, type, ...buttonProps }) {
  return (
    <button
      className={`bg-black text-white ${
        type === "rounder" ? "rounded-[10px]" : null
      } ${className || ""}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
