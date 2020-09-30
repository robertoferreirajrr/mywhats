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
router.get("/sendTextGrupo", async (req, res) => {
    res.render("pages/sendTextGrupo");
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
router.get("/sendImgGrupo", async (req, res) => {
    res.render("pages/sendImgGrupo");
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;