import AuthForm from "./AuthForm";
import FormField from "./FormField";

interface LoginFormProps {
  hideModal?: () => void;
  isModal?: boolean;
}

export default function LoginForm({
  isModal = false,
  hideModal,
}: LoginFormProps) {
  return (
    <AuthForm variant="login" isModal={isModal} hideModal={hideModal}>
      <FormField
        key={"email"}
        label="Email or Username"
        placeholder="Enter your email or username"
        type="text"
        name="email"
      />
      <FormField
        key={"password"}
        label="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        showForgotPassword
      />
    </AuthForm>
  );
}
