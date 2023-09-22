export default function IconButton({
  children,
  className,
  ...iconButtonProps
}) {
  return (
    <button
      className={`flex items-center justify-center ${className || ""}`}
      {...iconButtonProps}
    >
      {children}
    </button>
  );
}
