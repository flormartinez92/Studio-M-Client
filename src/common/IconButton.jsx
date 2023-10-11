export default function IconButton({
  children,
  className,
  onClick,
  ...iconButtonProps
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${className || ""}`}
      {...iconButtonProps}
    >
      {children}
    </button>
  );
}
