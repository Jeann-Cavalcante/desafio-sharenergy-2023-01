import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

async function auth(req: Request, res: Response) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.json({ message: "User incomplete" });
    }

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return res.json({ message: "User not found" });
    }

    const token = sign(
      {
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return res.json({
      id: user.id,
      username: user.username,
      token: token,
    });

  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error" });
  }

  
}

export { auth };