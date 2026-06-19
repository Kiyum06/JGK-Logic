import { Router } from "express";
import { requireAuthApi } from "../utility/default.util.js";
import { getCart, addItemToCart, removeItemFromCart } from "../controllers/cart.controller.js"; 

const router = Router();

router.get("/api/cart", requireAuthApi, getCart);
router.post("/api/cart/items", requireAuthApi, addItemToCart);
router.delete("/api/cart/items/:productId", requireAuthApi, removeItemFromCart);

export default router;