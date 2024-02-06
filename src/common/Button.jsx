export default function Button({
  children,
  className,
  type,
  onClick,
  ...propButton
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-buttonBlack text-white ${
        type === "rounder" ? "rounded-[10px]" : null
      } ${className || ""}`}
      {...propButton}
    >
      <div>{children}</div>
    </button>
  );
}
