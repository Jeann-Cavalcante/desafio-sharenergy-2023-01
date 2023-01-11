import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function me(req: Request, res: Response) {
  try {
    const user_id = req.user_id;
    const user = await prisma.user.findFirst({
          where: {
            id: user_id,
          },
          //Select dos dados que virão do banco
          select: {
            id: true,
            username: true,
          },
        });
        return res.json(user);
    
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" }).status(500);
  }

  }

  export {me}