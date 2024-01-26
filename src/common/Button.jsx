export default function Button({
  children,
  className,
  type,
  onClick,
  cartCount,
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
      <div>
        <div className=" absolute top-2 right-3">
          {cartCount && <p className=" text-sm font-mystery-mixed">1</p>}
        </div>
        <div>{children}</div>
      </div>
    </button>
  );
}
