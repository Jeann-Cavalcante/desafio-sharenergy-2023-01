import { Router, Request, Response } from "express";
import * as createUser from "./controllers/CreateController";
import * as createClient from "./controllers/ClientController";
import * as login from "./controllers/AuthController";

const router = Router();

router.get("/", ( res: Response) => {
  return res.json({ message: "Hello World" });
});

router.get("/hello", createUser.hello);

router.post("/auth", login.auth);

router.post("/create", createUser.createPost);

router.post("/client", createClient.createClient);

router.get("/client", createClient.getClient);

router.post("/client/:id", createClient.getClientById);

router.put("/client/:id", createClient.updateClient);

router.delete("/client/:id", createClient.deleteClient);

export { router };