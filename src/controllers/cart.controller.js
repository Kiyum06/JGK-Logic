
import { fetchProductById } from "../services/default.service.js";

export const getCart = (req, res) => {
    const cart = req.session.cart || [];

    res.status(200).json({
        success: true,
        count: cart.reduce((sum, item) => sum + item.quantity, 0),
        data: cart
    });
};

export const addItemToCart = async (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({
            success: false,
            message: "Product ID is required"
        });
    }

    const product = await fetchProductById(productId);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const existingItem = req.session.cart.find(
        item => item.id === Number(productId)
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        req.session.cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            image_path: product.image_path,
            quantity: 1
        });
    }

    res.status(201).json({
        success: true,
        count: req.session.cart.reduce((sum, item) => sum + item.quantity, 0),
        data: req.session.cart
    });
};

export const removeItemFromCart = (req, res) => {
    const { productId } = req.params;

    req.session.cart = (req.session.cart || []).filter(
        item => item.id !== Number(productId)
    );

    res.status(200).json({
        success: true,
        count: req.session.cart.reduce((sum, item) => sum + item.quantity, 0),
        data: req.session.cart
    });
};

export const clearCart = (req, res) => {
    req.session.cart = [];

    res.status(200).json({
        success: true,
        count: 0,
        data: []
    });
};