import Button from "./Button";

export default function AdminButton({ icon, text, className }) {
  return (
    <div>
      <Button
        className={`flex flex-col items-center justify-center rounded-xl gap-4 w-[236px] h-[224px] ${
          className || ""
        }`}
      >
        {icon}
        <p className="font-ms-gothic text-center p-2 text-2xl">{text}</p>
      </Button>
    </div>
  );
}
