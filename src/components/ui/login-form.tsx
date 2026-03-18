import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useAuth } from "@/api/features/hooks/useAuth";

import {
  loginSchema,
  type LoginFormData,
} from "@/shared/validators/auth.validator";
import { FormErrors } from "@/shared/types/auth.types";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const { login } = useAuth();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof LoginFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    login.mutate({ email, password });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-lg">
        <CardHeader>
          <div>
            <CardTitle className="text-2xl">Hisobga kirish</CardTitle>
            <CardDescription className="mt-1">
              Email va parolingizni kiriting
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {login.isError && (
                <div className="rounded-md bg-destructive/10 px-3 py-2">
                  <p className="text-sm text-destructive">
                    {login.error?.message || "Xatolik yuz berdi"}
                  </p>
                </div>
              )}

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // if (errors.email)
                    //   setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  disabled={login.isPending}
                  className="h-10"
                />
                <FieldError className="text-left">{errors.email}</FieldError>
              </Field>

              <Field data-invalid={!!errors.password}>
                <FieldLabel htmlFor="password">Parol</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      // if (errors.password)
                      //   setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    disabled={login.isPending}
                    className="h-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    disabled={login.isPending}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    {showPassword ?
                      <EyeOffIcon className="size-5" />
                    : <EyeIcon className="size-5" />}
                  </button>
                </div>
                <FieldError className="text-left">{errors.password}</FieldError>
              </Field>

              <Button
                type="submit"
                className="w-full h-10 mt-1"
                disabled={login.isPending}>
                {login.isPending ? "Kirish..." : "Kirish"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
