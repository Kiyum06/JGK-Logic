export const getCart = (req, res) => {
    const cart = req.session.cart || [];

    res.status(200).json({
        success: true,
        count: cart.length,
        data: cart
    });
};

export const addItemToCart = (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({
            success: false,
            message: "Product Id is required"
        });
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    req.session.cart.push({ productId });

    res.status(201).json({
        success: true,
        count: req.session.cart.length,
        data: req.session.cart
    });
};