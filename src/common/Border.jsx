export default function Border({ children, className }) {
  return (
    <div className={`border-solid  ${className || ""}`}>
      {children}
    </div>
  );
}