import { useState } from "react";
import Image from "next/image";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showForgotPassword?: boolean;
}

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  showForgotPassword,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="text-sm font-medium text-primary-color mb-[10px] leading-4 flex items-center justify-between"
      >
        <span>{label}</span>
        {showForgotPassword && (
          <span className="text-xs cursor-pointer">Forgot Password?</span>
        )}
      </label>
      {showPassword}
      <div className="relative">
        <input
          type={type !== "password" || showPassword ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className="w-full p-3 rounded border-[1.5px] text-primary-color bg-modal-bg-color focus:outline-none border-border-primary placeholder:text-secondary-color leading-[19.36px] focus:border-primary-color"
        />
        {type === "password" && (
          <Image
            src="/icons/eye.svg"
            alt="eye"
            width={20}
            height={20}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default FormField;
