//place controller functions here...
import { fetchAllProducts, fetchFilteredProducts, fetchProductById } from "../services/default.service.js";
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
        title: "Register",
        subtitle: '',
        error: null
    });
};

// awaitng and fetching data...
export const getProducts = async (req, res) => {
    const products = await fetchAllProducts();
    res.render("products", {
        title: "Products",
        subtitle:"",
        products
    });
};

export const getProductsApi = async (req, res) => {
    try {
        const {category, minPrice } = req.query;

        const products = await fetchFilteredProducts(category, minPrice);

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to load products"

        });
    }
}

export const getProductDetail = async (req, res) => {
    try {
        const product = await fetchProductById(req.params.id);

        if (!product) {
            return res.status(404).render("product-detail", {
                title: "Product Not Found",
                subtitle: "",
                product: null
            });
        }

        res.render("product-detail", {
            title: product.name,
            subtitle: "Product Details",
            product
        });

    } catch (error) {
        res.status(500).send("Something went wrong loading this product.");
    }
};