interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="text-sm font-medium text-primary-color mb-3 block leading-4"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="w-full p-3 rounded border-[1px] text-primary-color bg-bg-color focus:outline-none border-border-primary placeholder:text-secondary-color"
      />
    </div>
  );
};

export default FormField;
