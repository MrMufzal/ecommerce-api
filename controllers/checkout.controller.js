const Order = require("../models/Order");

exports.checkout = async (req, res) => {
    const cart = req.session.cart || [];

    const total = cart.reduce((sum, i) => sum + i.quantity * 100, 0);

    await Order.create({
        userId: req.user.id,
        items: cart,
        totalAmount: total
    });

    req.session.cart = [];

    res.json({ msg: "Checkout complete", total });
};
