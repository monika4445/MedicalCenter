const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main_controller");

router.get("/contactus", mainController.contactGet);
router.post("/contactus", mainController.contactPost);

module.exports= router;

