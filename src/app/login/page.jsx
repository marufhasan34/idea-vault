"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {Icon} from "@iconify/react";
import Link from "next/link";

const LoginPage = () => {
    const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
  

    if (data) {
      router.push("/");
    }

    if (error) {
      toast.error("Login Failed please try again later!");
    }
  };

  const handleGoogleLogin = async() => {
    await authClient.signIn.social({
      provider: 'google'
    })
  }

  return (
    <div className="w-96 card card-body shadow-2xl mx-auto my-20">
      <Form
        onSubmit={onSubmit}
        className="flex  flex-col gap-4 "
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <Button className="w-full " type="submit">
          Login
        </Button>
      </Form>
       <p className="text-center text-gray-500">Do not have an account <Link className="text-blue-500" href={'/register'}>Register</Link> </p>
      <div className="flex justify-center items-center">
        <Separator />
        <div className="whitespace-nowrap text-gray-500">Or Sign In with</div>
        <Separator />
      </div>

      <Button onClick={handleGoogleLogin} className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginPage;
