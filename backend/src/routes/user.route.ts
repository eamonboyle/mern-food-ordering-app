import { Router } from "express";
import userController from "../controllers/user.controller";
import { jwtCheck } from "../middleware/auth";

const router = Router();

router.get("/", userController.getUser);
router.post("/", jwtCheck, userController.createUser);

export default router;
