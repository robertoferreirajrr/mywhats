const express = require("express");
const router = express.Router();
const Sessions = require("../cliVenom.js");
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/", async (req, res) => {
    res.render("app/index");
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/start/:SessionName", async (req, res, next) => {
    //
    var session = await Sessions.start(req.params.SessionName);
    if (["CONNECTED"].includes(session.state)) {
        res.status(200).json({ result: 'success', state: session.state, message: "Sistema iniciado" });
    } else if (["STARTING"].includes(session.state)) {
        res.status(200).json({ result: 'info', state: session.state, message: "Sistema iniciando" });
    } else if (["QRCODE"].includes(session.state)) {
        res.status(200).json({ result: 'warning', state: session.state, message: "Sistema aguardando leitura do QR-Code" });
    } else {
        res.status(200).json({ result: 'error', message: session.state,  message: "Sistema Off-line" });
    }
    next();
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/QRCode/:SessionName/:View", async (req, res, next) => {
    //
    var session = Sessions.getSession(req.params.SessionName);
    if (session != false) {
        if (session.status != 'isLogged') {
            if (req.params.View == 'True' || req.params.View == 'true') {
                session.qrcode = session.qrcode.replace('data:image/png;base64,', '');
                const imageBuffer = Buffer.from(session.qrcode, 'base64');
                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': imageBuffer.length
                });
                res.end(imageBuffer);
            } else {
                res.status(200).json({
                    result: "success",
                    message: session.state,
                    qrcode: session.qrcode
                });
            }
        } else {
            res.status(200).json({
                result: "error",
                message: session.state
            });
        }
    } else {
        res.status(200).json({
            result: "error",
            message: "NOTFOUND"
        });
    }
    next();
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;