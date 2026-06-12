import { Router } from "express";
import { requireAuth, requireAuthApi } from "../utility/default.util.js";

import {
    getHome,
    getProducts,
    getProductsApi,
    getProductDetail
} from "../controllers/default.controller.js";

const router = Router();

router.get("/", getHome);
router.get("/products", requireAuth, getProducts);
router.get("/products/:id", requireAuth, getProductDetail);
router.get("/api/products", requireAuthApi, getProductsApi);
export default router;