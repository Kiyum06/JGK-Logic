import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "JGK FITNESS",
        subtitle: "Your one stop shop for your professional gymnastics equipment!"
    });
});

export default router;