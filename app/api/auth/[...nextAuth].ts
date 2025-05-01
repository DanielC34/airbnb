import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import prisma from "@/app/libs/prismaDB";

// Main authentication configuration
export const authOptions: AuthOptions = {
  // Use Prisma adapter for database integration
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth providers
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ||
        (() => {
          throw new Error("GOOGLE_CLIENT_ID is not defined");
        })(),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        (() => {
          throw new Error("GOOGLE_CLIENT_SECRET is not defined");
        })(),
    }),
    GithubProvider({
      clientId:
        process.env.GITHUB_ID ||
        (() => {
          throw new Error("GITHUB_ID is not defined");
        })(),
      clientSecret:
        process.env.GITHUB_SECRET ||
        (() => {
          throw new Error("GITHUB_SECRET is not defined");
        })(),
    }),
    // Email & Password authentication
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate credentials presence
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // Find user by email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Verify user exists and has password set
        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        // Verify password match
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  // Custom pages configuration
  pages: {
    signIn: "/", // Use home page for sign in modal
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt", // Use JWT for session handling
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Initialize NextAuth with config
export default NextAuth(authOptions);
