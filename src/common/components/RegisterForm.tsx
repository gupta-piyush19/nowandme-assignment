import AuthForm from "./AuthForm";
import FormField from "./FormField";

interface RegisterFormProps {
  isModal?: boolean;
  hideModal?: () => void;
}

export default function RegisterForm({
  isModal = false,
  hideModal,
}: RegisterFormProps) {
  return (
    <AuthForm variant="register" isModal={isModal} hideModal={hideModal}>
      <FormField
        key={"email"}
        label="Email"
        placeholder="Enter your email"
        type="text"
        name="email"
      />
      <FormField
        key={"username"}
        label="Username"
        placeholder="Choose a preferred username"
        type="text"
        name="username"
      />
      <FormField
        key={"password"}
        label="Password"
        placeholder="Choose a strong password"
        type="password"
        name="password"
      />
    </AuthForm>
  );
}
