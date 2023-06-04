import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface ModalProps {
  hideModal: () => void;
}

export default function Modal({ hideModal }: ModalProps) {
  const [formType, setFormType] = useState<"login" | "register">("login");

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[2px] flex items-center justify-center">
      {formType === "login" ? (
        <LoginForm isModal hideModal={hideModal} />
      ) : (
        <RegisterForm isModal hideModal={hideModal} />
      )}
    </div>
  );
}
