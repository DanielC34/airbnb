"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import GoogleSignInButton from "@/components/GoogleSignInButton/GoogleSignInButton";
import GithubSignInButton from "@/components/GithubSignInButton/GithubSignInButton";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onRegisterClick,
}: LoginModalProps) {
  const router = useRouter(); // Initialize the router for navigation
  // Initialize the form using react-hook-form and zod for validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Add this function to handle modal closing
  const handleClose = () => {
    form.reset(); //Reset form state
    onClose(); //Close the modal
  };

  //When someone tries to login
  const onSubmit = async (data: LoginFormValues) => {
    try {
      // Show loading toast while processing
      const loadingToast = toast.loading("Logging in...");

      // Try to log in using NextAuth
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, //Prevent automatic redirect
      });

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // If something went wrong
      if (result?.error) {
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      // If login worked!
      // toast.success("Welcome back!");
      // form.reset();
      // onClose();

      // // Simulate API call (replace with your actual login logic)
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // Successful login toast
      toast.success("Logged in successfully!");
      router.refresh();
      form.reset();
      onClose();
    } catch (error) {
      // Error toast
      toast.error("Something went wrong");
      console.error("Login error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold">
            Login to your account
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Logging in..." : "Continue"}
            </Button>
          </form>
        </Form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
        <GoogleSignInButton />
        <GithubSignInButton />
          <div className="mt-4 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Button
              onClick={() => {
                onClose();
                onRegisterClick();
              }}
              variant="link"
              className="text-rose-600 hover:text-rose-700 p-0"
            >
              Register here
            </Button>
          </div>
      </DialogContent>
    </Dialog>
  );
}
