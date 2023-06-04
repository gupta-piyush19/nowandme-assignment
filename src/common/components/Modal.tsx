import * as React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface ModalProps {
  show?: boolean;
  hideModal: () => void;
}

export default function Modal({ show = false, hideModal }: ModalProps) {
  const [formType, setFormType] = React.useState<"login" | "register">("login");

  const changeFormType = () => {
    setFormType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 ease-in-out"
      style={{ visibility: show ? "visible" : "hidden", opacity: show ? 1 : 0 }}
    >
      {formType === "login" ? (
        <LoginForm
          isModal
          hideModal={hideModal}
          changeFormType={changeFormType}
        />
      ) : (
        <RegisterForm
          isModal
          hideModal={hideModal}
          changeFormType={changeFormType}
        />
      )}
    </div>
  );
}
