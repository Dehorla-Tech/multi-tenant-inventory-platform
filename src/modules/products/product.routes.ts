import { Router } from "express";
import { ProductController } from "./product.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);

export default router;
