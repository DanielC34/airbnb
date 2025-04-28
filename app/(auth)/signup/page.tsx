"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void; // Add this prop
}

export default function RegisterModal({ isOpen, onClose, onLoginClick }: RegisterModalProps) {

    const handleLoginClick = () => {
      onClose(); // Close register modal
      onLoginClick(); // Open login modal
    };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
        <Button className="w-full text-white p-2 rounded-md hover:bg-rose-700 transition">
          Continue
        </Button>
        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={handleLoginClick}
            className="text-rose-600 hover:text-rose-700 underline font-medium"
          >
            Log in
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
