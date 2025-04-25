import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="mt-8 mx-auto max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Create an Account</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Choose a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-rose-600 hover:text-rose-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
