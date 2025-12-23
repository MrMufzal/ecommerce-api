exports.addToCart = (req, res) => {
    const { productId, quantity } = req.body;

    if (!req.session.cart) req.session.cart = [];

    const item = req.session.cart.find(i => i.productId === productId);
    if (item) {
        item.quantity += quantity;
    } else {
        req.session.cart.push({ productId, quantity });
    }

    res.json({ msg: "Added to cart", cart: req.session.cart });
};

exports.viewCart = (req, res) => {
    res.json(req.session.cart || []);
};
