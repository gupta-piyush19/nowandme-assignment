import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

interface AuthFormProps {
  variant: "login" | "register";
  children: React.ReactNode;
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

export default function AuthForm({ variant, children }: AuthFormProps) {
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
    router.push("/home");
  };

  return (
    <div className="bg-gradient-border text-primary-color max-w-[467px] mx-auto p-[2px] rounded-[8px] flex-1">
      <div className="py-10 px-6 bg-modal-bg-color rounded-[8px]">
        <form>
          <h1 className="text-sm font-medium uppercase text-center text-tertiary-color mb-2 tracking-[0.03em] leading-[16.94px]">
            {heading}
          </h1>
          <p className="text-lg text-white text-center font-semibold leading-[21.78px]">
            {subHeading}
          </p>
          <div className="mt-11 mb-5">{children}</div>
          <Button text={formButtonText} onClick={handleSubmit} />
          <p className="text-sm text-secondary-color mt-3">
            {footerText}
            <Link
              href={footerLink}
              className="text-primary-color font-semibold ml-1"
              tabIndex={0}
            >
              {footerLinkText} &rarr;
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
