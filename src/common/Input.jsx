export default function Input({ label }) {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <label className="font-mystery-mixed text-2xl mb-8">{label}</label>
      <input
        type="text"
        className="bg-[#D9D9D9] text-base w-64 h-8 pl-3 mb-7"
      />
    </div>
  );
}

// Falta poner la fuente del input que seria MS PGothic, no la encontre.
