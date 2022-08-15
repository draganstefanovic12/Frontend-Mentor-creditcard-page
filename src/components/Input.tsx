import { InputProps } from "../types";

export const Input = ({
  dispatch,
  name,
  type,
  placeholder,
  className,
  id,
  minLength,
  maxLength,
}: InputProps) => {
  return (
    <>
      <label>{name}</label>
      <input
        onChange={(e) => dispatch({ type: type, action: e.target.value })}
        placeholder={placeholder}
        className={`${className}`}
        id={id}
        minLength={minLength ? minLength : 0}
        maxLength={maxLength ? maxLength : 120}
        required
      />
    </>
  );
};
