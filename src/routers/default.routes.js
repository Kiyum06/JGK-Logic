import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "JGK FITNESS",
        subtitle: "Your one stop shop for your professional gymnastics equipment!"
    });
});

// route for login
router.get("/login", (req,res) => {
    res.render("login")
})

// route for products
router.get("/products", (req,res) => {
    res.render("products")
})

// route for registers
router.get("/register", (req,res) => {
    res.render("registar")
})
export default router;