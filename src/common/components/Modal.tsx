import * as React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface ModalProps {
  hideModal: () => void;
}

export default function Modal({ hideModal }: ModalProps) {
  const [formType, setFormType] = React.useState<"login" | "register">("login");

  const changeFormType = () => {
    setFormType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[2px] flex items-center justify-center">
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
