import React, { forwardRef } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setValue: React.Dispatch<React.SetStateAction<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
  label?: string;
  error?: string;
  value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  hasBorder: boolean;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ value, setValue, label, error, hasBorder, ...rest }, ref) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof value === "object") {
        setValue((prev: object) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      } else if (typeof value === "string") {
        setValue(e.target.value);
      }
    };
    return (
      <div>
        {label && (
          <div>
            <label className="text-sm" htmlFor={rest.name}>
              {label}
            </label>
          </div>
        )}
        <input
          ref={ref}
          className={`bg-primary-gray p-2 rounded-md w-full outline-none ${
            hasBorder && "focus:outline-primary-blue"
          }`}
          type={rest.type}
          placeholder={rest.placeholder}
          onChange={onChange}
          name={rest.name}
        />
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </div>
    );
  }
);

export default Input;
