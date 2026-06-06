//place controller functions here...
import { fetchAllProducts } from "../services/default.service.js";
export const getHome = (req, res) => {
    res.render("default", {
        title: "JGK Fitness",
        subtitle: "Professional gymnastics equipment for athletes, gyms, and training centers."
    });
};

export const getLogin = (req, res) => {
    res.render("login", {
        title: "Login"
    });
};

export const getRegister = (req, res) => {
    res.render("register", {
        title: "Register"
    });
};

// awaitng and fetching data...
export const getProducts = async (req, res) => {
    const products = await fetchAllProducts();
    res.render("products", {
        title: "Products",
        products
    });
};