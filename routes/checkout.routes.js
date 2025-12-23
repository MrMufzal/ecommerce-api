const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const ctrl = require("../controllers/checkout.controller");

router.post("/", auth, ctrl.checkout);
router.get("/", auth, ctrl.checkout);

module.exports = router;
