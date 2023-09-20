export default function Border({ children, className }) {
  return (
    <div
      className={`p-4 border-4 border-solid border-[#E21B7B] bg-transparent  ${
        className || ""
      } `}
    >
      {children}
    </div>
  );
}
