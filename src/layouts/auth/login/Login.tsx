import { LoginForm } from "@/components/ui/login-form";

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted/40 p-4 md:p-10">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
