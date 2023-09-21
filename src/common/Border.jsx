export default function Border({ children, className }) {
  return (
    <div className={`p-1.5 px-1 border-[1px] border-solid border-pink ${className || ""}`}>
      {children}
    </div>
  );
}
