const express = require("express");
const router = express.Router();
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/home", async (req, res) => {
    res.render("pages/home");
});
//
//
router.get("/sendText", async (req, res) => {
    res.render("pages/sendText");
});
//
router.get("/sendTextMult", async (req, res) => {
    res.render("pages/sendTextMult");
});
//
//
router.get("/sendImage", async (req, res) => {
    res.render("pages/sendImage");
});
//
router.get("/sendImageMult", async (req, res) => {
    res.render("pages/sendImageMult");
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;