import { Router } from "express";
import { requireAuthApi } from "../utility/default.util.js";
import { getCart,} from "../controllers/cart.controller.js";
 

const router = Router();

router.get("/api/cart", requireAuthApi, getCart);


export default router;