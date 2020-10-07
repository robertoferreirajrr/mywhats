const express = require("express");
const fetch = require('node-fetch');
const router = express.Router();
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
//
sistem.get("/sendText", async (req, res, next) => {
    const response = await fetch("http://localhost:9000/sistem/sendText", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: "629b2aba-0e9f-493b-b4cd-95a0d9dc8990",
            phonefull: "",
            msg: "Hello World"
        })
    });
    const content = await response.json();
    console.log(content);
    res.json(content);
    next();
});
//
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;