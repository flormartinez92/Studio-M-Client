export default function Border({ children, className }) {
  return (
    <div className={`p-2 border-2 border-solid border-pink ${className || ""}`}>
      {children}
    </div>
  );
}
