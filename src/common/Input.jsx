export default function Input({
  name,
  label,
  type,
  placeholder,
  className,
  ...inputProps
}) {
  return (
    <div className={`flex flex-col my-2 ${className || ""}`}>
      <label htmlFor={name} className="font-mystery-mixed text-3xl mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        className="p-2 pl-3 font-ms-gothic outline-none"
        {...inputProps}
      />
    </div>
  );
}
