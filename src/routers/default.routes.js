import { Router } from "express";

import {
    getHome,
    getLogin,
    getRegister,
    getProducts
} from "../controllers/default.controller.js";

const router = Router();

router.get("/", getHome);
router.get("/login", getLogin);
router.get("/register", getRegister);
router.get("/products", getProducts);

export default router;