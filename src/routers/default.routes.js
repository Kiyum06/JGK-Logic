import { Router } from "express";

import {
    getHome,
    getProducts,
    getProductsApi,
    getProductDetail
} from "../controllers/default.controller.js";

const router = Router();

router.get("/", getHome);
router.get("/products", getProducts);
router.get("/products/:id", getProductDetail);
router.get("/api/products",getProductsApi);

export default router;