import { Router, Request, Response } from "express";
import * as createUser from "./controllers/CreateController";
import * as login from "./controllers/AuthController";

const router = Router();

router.get("/", ( res: Response) => {
  return res.json({ message: "Hello World" });
});

router.get("/hello", createUser.hello);

router.post("/create", createUser.createPost);

router.post("/auth", login.auth);

export { router };