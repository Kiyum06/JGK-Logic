import { Router } from "express";

import {
    getHome,
    getLogin,
    getRegister,
    getProducts,
    getProductsApi
} from "../controllers/default.controller.js";

const router = Router();

router.get("/", getHome);
router.get("/login", getLogin);
router.get("/register", getRegister);
router.get("/products", getProducts);
router.get("/api/products",getProductsApi);

export default router;