const express = require("express");
const request = require('request');
const router = express.Router();
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
//
router.get("/start/:SessionName", async (req, res, next) => {
    request.get("http://localhost:9000/sistem/start/" + req.params.SessionName, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
router.get("/QRCode/:SessionName/:View", async (req, res, next) => {
    request.get("http://localhost:9000/sistem/QRCode/" + req.params.SessionName + "/" + req.params.View, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
router.get("/close/:SessionName", async (req, res) => {
    request.get("http://localhost:9000/sistem/close/" + req.params.SessionName, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;