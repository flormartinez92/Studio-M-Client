export default function AdminButton({ icon, title }) {
  return (
    <button className="w-236 h-224 bg-[#E21B7B]">
      <icon>{icon}</icon>
      <h1 className="text-[25px]">{title}</h1>
    </button>
  );
}
