import { PrismaClient } from '@prisma/client'
import { hash } from "bcrypt";
const prisma = new PrismaClient()

async function main() {
 const passwordHash = await hash("sh@r3n3rgy", 10);

  await prisma.user.create({
    data: {
      username: "desafiosharenergy",
      password: passwordHash,
    },
  });
}

main(); 