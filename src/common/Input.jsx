export default function Input({
  name,
  label,
  type,
  placeholder,
  className,
  classNameLabel,
  ...inputProps
}) {
  return (
    <div className={`flex flex-col my-2 ${className || ""}`}>
      <label htmlFor={name} className={`font-mystery-mixed mb-1 ${classNameLabel || ""}`}>
        {label ? label : null}
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
