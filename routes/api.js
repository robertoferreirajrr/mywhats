const express = require("express");
const fetch = require('node-fetch');
const multer = require('multer');
//const upload = multer({ dest: 'public/uploads/' });
const upload = multer({})
const router = express.Router();
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
//
router.post("/start/:SessionName", async (req, res, next) => {
    //
    var session = await Sessions.start(req.params.SessionName);
    if (["CONNECTED"].includes(session.state)) {
        res.status(200).json({
            result: 'success',
            state: session.state,
            message: "Sistema iniciado"
        });
    } else if (["STARTING"].includes(session.state)) {
        res.status(200).json({
            result: 'info',
            state: session.state,
            message: "Sistema iniciando"
        });
    } else if (["QRCODE"].includes(session.state)) {
        res.status(200).json({
            result: 'warning',
            state: session.state,
            message: "Sistema aguardando leitura do QR-Code"
        });
    } else {
        res.status(200).json({
            result: 'error',
            message: session.state,
            message: "Sistema Off-line"
        });
    }
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.post("/QRCode/:SessionName/:View", async (req, res, next) => {
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
                    result: "warning",
                    state: session.state,
                    qrcode: session.qrcode,
                    message: "Sistema aguardando leitura do QR-Code"
                });
            }
        } else {
            if (["CONNECTED"].includes(session.state)) {
                res.status(200).json({
                    result: 'success',
                    state: session.state,
                    message: "Sistema iniciado"
                });
            } else if (["STARTING"].includes(session.state)) {
                res.status(200).json({
                    result: 'info',
                    state: session.state,
                    message: "Sistema iniciando"
                });
            }
        }
    } else {
        res.status(200).json({
            result: 'error',
            state: "NOTFOUND",
            message: "Sistema Off-line"
        });
    }
    //
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/sendText", async (req, res, next) => {
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