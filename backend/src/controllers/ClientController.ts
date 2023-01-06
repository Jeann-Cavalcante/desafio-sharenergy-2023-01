import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function createClient(req: Request, res: Response) {
  try{
  const { name, email, phone, address, cpf } = req.body;

  const client =  await prisma.userclient.create({
    data: {
      name,
      email,
      phone,
      address,
      cpf,
    },
  });

  return res.json(client);
}catch(err){
  res.json({error: err}).status(500)
  console.log(err)
}
  
}

async function getClient(req: Request, res: Response) {
  const client = await prisma.userclient.findMany();
  return res.json(client);
}

async function getClientById(req: Request, res: Response) {
  try{
  const { id } = req.params;
  const client = await prisma.userclient.findUnique({
    where: {
      id: id,
    },
  });
  return res.json(client);
}catch(err){
  res.json({error: err}).status(500)
  console.log(err)
}
}

async function updateClient(req: Request, res: Response) {
  try{
  const { id } = req.params;
  const { name, email, phone, address, cpf } = req.body;

  const client = await prisma.userclient.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      phone,
      address,
      cpf,
    },
  });

  return res.json(client);
}catch(err){
  res.json({error: err}).status(500)
  console.log(err)
}
}

async function deleteClient(req: Request, res: Response) {
  try{
  const { id } = req.params;

  const client = await prisma.userclient.delete({
    where: {
      id: id
    },
  });

  return res.json(client);
}catch(err){
  res.json({error: err}).status(500)
  console.log(err)
}
}

export { createClient, getClient, getClientById, updateClient, deleteClient };