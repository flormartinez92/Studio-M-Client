export default function Border({ children, className }) {
  return (
    <div className={`p-3 border-2 border-solid border-pink ${className || ""}`}>
      {children}
    </div>
  );
}
