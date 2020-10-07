const express = require("express");
const request = require('request');
const fetch = require('node-fetch');
const multer = require('multer');
//const upload = multer({ dest: 'public/uploads/' });
const upload = multer({})
const router = express.Router();
//
//
//
function apenasNumeros(str) {
    str = typeof str.toString();
    return str.replace(/\D+/g, "");
}
//
function soNumeros(string) {
    var numsStr = string.replace(/\D+/g, "");
    return parseInt(numsStr);
}
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.post("/Start", async (req, res, next) => {
    //
    const response = await fetch("http://localhost:9000/sistem/Start", {
        method: 'POST',
        //body: form,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: req.body.SessionName
        })
    });
    const content = await response.json();
    console.log(content);
    res.json(content);
    next();
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.post("/QRCode", async (req, res, next) => {
    //
    const response = await fetch("http://localhost:9000/sistem/QRCode", {
        method: 'POST',
        //body: form,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: req.body.SessionName,
            View: req.body.View
        })
    });
    const content = await response.json();
    res.json(content);
    next();
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.post("/sendText", async (req, res, next) => {
    const response = await fetch("http://localhost:9000/sistem/sendText", {
        method: 'POST',
        //body: form,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: req.body.SessionName,
            phonefull: apenasNumeros(req.body.phonefull),
            msg: req.body.msg
        })
    });
    const content = await response.json();
    res.json(content);
    next();
});
//
//
//
router.post("/sendTextMult", upload.single('sendTextMassaContato'), async (req, res, next) => {
    //

    //
}); //sendText
//
router.post("/sendTextGrupo", async (req, res, next) => {
    //

    //
}); //sendText
//
//
// ------------------------------------------------------------------------------------------------//
//
//
var cpUpload = upload.fields([{
    name: 'sendImageMassaContato',
    maxCount: 1
}, {
    name: 'FileImageMassa',
    maxCount: 1
}]);
router.post("/sendImage", upload.single('fileimg'), async (req, res, next) => {
    //

    //
}); //sendImage
//
router.post("/sendImageMult", cpUpload, async (req, res, next) => {
    //

    //
    res.json(result);
}); //sendImage
//
router.post("/sendImageGrupo", upload.single('FileImageGrupo'), async (req, res, next) => {
    //

    //
    res.json(result);
}); //sendImage
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/sendFile", async (req, res, next) => {
    //

    //
    res.json(result);
}); //sendFile
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getBlockList", async (req, res, next) => {
    var result = await Sessions.getBlockList(req.params.SessionName);
    res.json(result);
}); //getBlockList
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getAllContacts", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getAllContacts
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/loadAndGetAllMessagesInChat", async (req, res, next) => {
    //

    //
    res.json(result);
}); //loadAndGetAllMessagesInChat
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getStatus", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getStatus
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getNumberProfile", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getNumberProfile
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getAllUnreadMessages", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getAllUnreadMessages
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getAllChats", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getAllChats
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getAllGroups/:SessionName", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getAllGroups
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getProfilePicFromServer", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getProfilePicFromServer
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/getChat", async (req, res, next) => {
    //

    //
    res.json(result);
}); //getChat
//
// ------------------------------------------------------------------------------------------------//
//
//
router.post("/checkNumberStatus", async (req, res, next) => {
    //

    //
    res.json(result);
}); //checkNumberStatus
//
router.post("/checkNumberStatusMult", upload.single('checkNumberStatusMassaContato'), async (req, res, next) => {
    //

    //
    res.json(result);
}); //sendText
//
//
// ------------------------------------------------------------------------------------------------//
//
//
router.get("/close/:SessionName", async (req, res, next) => {
    //

    //
    res.json(result);
}); //close
//
// ------------------------------------------------------------------------------------------------//
//
//
module.exports = router;