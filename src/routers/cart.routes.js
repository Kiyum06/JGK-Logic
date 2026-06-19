import { Router } from "express";
import { requireAuthApi } from "../utility/default.util.js";
import { getCart, addItemToCart } from "../controllers/cart.controller.js"; 

const router = Router();

router.get("/api/cart", requireAuthApi, getCart);
router.post("/api/cart/items", requireAuthApi, addItemToCart);


export default router;