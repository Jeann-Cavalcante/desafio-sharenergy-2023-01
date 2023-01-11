import { Router, Request, Response } from "express";
import * as createUser from "./controllers/CreateController";
import * as createClient from "./controllers/ClientController";
import * as login from "./controllers/AuthController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import * as  meController from "./controllers/MeController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

router.get("/hello", createUser.hello);

router.post("/auth", login.auth);

router.post("/create", createUser.createPost);

router.get("/me", isAuthenticated, meController.me);

router.post("/client", isAuthenticated, createClient.createClient);

router.get("/client", isAuthenticated, createClient.getClient);

router.post("/client/:id", isAuthenticated, createClient.getClientById);

router.put("/client/:id", isAuthenticated, createClient.updateClient);

router.delete("/client/:id", isAuthenticated, createClient.deleteClient);

export { router };