interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  error?: string;
}

const Input = ({ setValue, label, error, ...rest }: IInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev: object) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      {label && (
        <label className="text-sm" htmlFor={rest.name}>
          {label}
        </label>
      )}
      <input
        className="bg-primary-gray p-2 rounded-md w-full outline-none focus:outline-primary-blue mt-1"
        type={rest.type}
        placeholder={rest.placeholder}
        onChange={onChange}
        name={rest.name}
      />
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
