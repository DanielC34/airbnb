//Handles hot reloading of Prisma Client in development mode
// and prevents multiple instances of Prisma Client in production mode
import { PrismaClient } from "@prisma/client";

// Prevent multiple instances of Prisma Client in development
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Create new PrismaClient if one doesn't exist
const prismadb = globalThis.prisma || new PrismaClient();

// In development, attach client to global to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismadb;
}

// Export for use in other files
export default prismadb;
