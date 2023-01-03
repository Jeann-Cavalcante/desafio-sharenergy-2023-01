import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function createPost(req: Request, res: Response) {
  
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.json({ message: "Username and password are required" });
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      return res.json({ message: "User already exists" });
    }

    const passwordHash = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: passwordHash,
      },
    });

   return res.json(user);

  } catch (error) {
    return res.json({ message: error });
  }
}


function hello(req: Request, res: Response) {
  return res.json({ message: "Hello World" });
}

export { createPost, hello };