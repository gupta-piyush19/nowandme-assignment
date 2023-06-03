import AuthForm from "./AuthForm";
import FormField from "./FormField";

export default function LoginForm() {
  return (
    <AuthForm variant="login">
      <FormField
        label="Email or Username"
        placeholder="Enter your email or username"
        type="text"
        name="email"
      />
    </AuthForm>
  );
}
