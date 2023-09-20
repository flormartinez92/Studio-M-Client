export default function Button({ label }) {
  return (
    <div className="p-4 border-4 border-solid border-[#E21B7B] inline-block bg-transparent">
      <button className="bg-[#1E1E1E] text-[#FFFFFF] font-mystery-mixed text-2xl p-4 w-220 h-81">
        {label}
      </button>
    </div>
  );
}
