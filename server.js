require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const checkoutRoutes = require("./routes/checkout.routes");

const app = express();

/*  Connect DB */
connectDB();

/*  Global middleware FIRST */
app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI
        })
    })
);

/*  Routes */
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

/*  Test route */
app.get("/", (req, res) => {
    res.send("API is running");
});

/*  404 handler LAST */
app.use((req, res) => {
    console.log("HIT:", req.method, req.url);
    res.status(404).json({ msg: "Route not found" });
});

/*  Start server */
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
