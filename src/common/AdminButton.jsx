import Button from "./Button";

export default function AdminButton({ icon, text, className }) {
  return (
    <Button
      className={`flex flex-col items-center justify-center rounded-xl w-60 h-60 gap-4 ${
        className || ""
      }`}
    >
      {icon}
      <p className="font-ms-gothic">{text}</p>
    </Button>
  );
}
