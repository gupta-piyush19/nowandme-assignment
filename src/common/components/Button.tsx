interface ButtonProps {
  type?: "button" | "submit";
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  type = "button",
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white font-medium text-base leading-5 w-full py-3 rounded hover:bg-primary-hover transition-colors duration-200"
    >
      {text}
    </button>
  );
}
