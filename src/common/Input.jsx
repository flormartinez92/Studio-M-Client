import { ClosedEye, Eye } from "./Icons";

export default function Input({
  name,
  label,
  type,
  placeholder,
  className,
  classNameLabel,
  classNameInput,
  isPasswordVisible,
  togglePasswordVisibility,
  ...inputProps
}) {
  return (
    <div className={`flex flex-col my-2 ${className || ""}`}>
      <label
        htmlFor={name}
        className={`font-mystery-mixed mb-1 ${classNameLabel || ""}`}
      >
        {label ? label : null}
      </label>
      <div className="relative">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          id={name}
          name={name}
          className={`p-2 pl-3 font-ms-gothic outline-none ${
            classNameInput || ""
          }`}
          {...inputProps}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <ClosedEye /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );
}
