const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const ctrl = require("../controllers/cart.controller");

router.post("/add", auth, ctrl.addToCart);
router.post("/", auth, ctrl.viewCart);
router.get("/", auth, ctrl.viewCart);
router.get("/add", auth, ctrl.addToCart);
module.exports = router;
