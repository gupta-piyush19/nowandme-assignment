import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";

interface AuthFormProps {
  isModal?: boolean;
  hideModal?: () => void;
  variant: "login" | "register";
  children: React.ReactNode;
  changeFormType?: () => void;
}

const data = {
  login: {
    heading: "welcome back",
    subHeading: "Log into your account",
    formButtonText: "Login now",
    footerText: "Not registered yet?",
    footerLink: "/register",
    footerLinkText: "Register",
  },
  register: {
    heading: "sign up",
    subHeading: "Create an account to continue",
    formButtonText: "Continue",
    footerText: "Already have an account?",
    footerLink: "/login",
    footerLinkText: "Login",
  },
};

export default function AuthForm({
  isModal,
  hideModal,
  variant,
  children,
  changeFormType,
}: AuthFormProps) {
  const {
    heading,
    subHeading,
    formButtonText,
    footerText,
    footerLink,
    footerLinkText,
  } = data[variant];

  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    isModal ? hideModal?.() : router.push("/home");
  };

  const routeHandler = () => {
    isModal ? changeFormType?.() : router.push(footerLink);
  };

  return (
    <div className="bg-gradient-border text-primary-color max-w-[467px] mx-auto p-[2px] rounded-[8px] flex-1">
      <div className="py-10 px-6 bg-modal-bg-color rounded-[8px] relative">
        <form>
          <h1 className="text-sm font-medium uppercase text-center text-tertiary-color mb-2 tracking-[0.03em] leading-[16.94px]">
            {heading}
          </h1>
          <p className="text-lg text-white text-center font-semibold leading-[21.78px]">
            {subHeading}
          </p>
          <div className="mt-11 mb-5">{children}</div>
          <Button text={formButtonText} onClick={handleSubmit} />
          <p className="text-sm text-secondary-color mt-3 flex">
            <span>{footerText}</span>
            <span
              className="text-primary-color font-semibold ml-1 cursor-pointer"
              onClick={routeHandler}
            >
              {footerLinkText} &rarr;
            </span>
          </p>
        </form>
        {isModal && (
          <div
            className="absolute top-4 right-4 cursor-pointer h-[32px] w-[32px] flex items-center justify-center rounded-full bg-close-btn-bg-color"
            onClick={hideModal}
          >
            <Image src="/icons/x.svg" width={10} height={10} alt="close" />
          </div>
        )}
      </div>
    </div>
  );
}
