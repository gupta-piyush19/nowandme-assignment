interface ButtonProps {
  type?: "button" | "submit";
  text: string;
}

export default function Button({ type = "button", text }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-primary text-white font-medium text-base leading-5 w-full py-3 rounded hover:bg-primary-hover transition-colors duration-200"
    >
      {text}
    </button>
  );
}
