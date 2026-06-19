export const getCart = (req, res) => {
    const cart = req.session.cart || [];

    res.status(200).json({
        success: true,
        count: cart.length,
        data: cart
    });
};

 