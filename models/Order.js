const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    items: Array,
    totalAmount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
