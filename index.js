//
// https://expressjs.com/pt-br/advanced/best-practice-security.html
// Configuração dos módulos
const fs = require('fs');
const mime = require('mime-types');
const http = require('http');
const https = require('https');
const express = require('express');
var helmet = require('helmet');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const handlebars = require('express-handlebars');
const os = require('os');
//const internalIp = require('internal-ip');
const path = require('path');
const venom = require('venom-bot');
const {
    json
} = require('express');
const {
    Session
} = require('inspector');
const {
    promisify
} = require('util');
const {
    exec
} = require("child_process");
const unlink = promisify(fs.unlink);
const multer = require('multer');
//const upload = multer({ dest: 'public/uploads/' });
const upload = multer({})
const app = express();
const cors = require('cors');
const {
    async
} = require('rxjs');
const admin = require("./routes/admin");
const pages = require("./routes/pages");
const sistem = require("./routes/sistem");
const ssl = process.env.HTTPS || false;
const hostname = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8081;
const ssl_key = process.env.KEY || './sslcert/server.key';
const ssl_cert = process.env.CERT || './sslcert/server.crt';
const Sessions = require("./cliVenom.js");
require('dotenv').config();
app.use(cors());
app.use(express.json());
//
/*
(async () => {
    const IPv6 = await internalIp.v6();
    //=> 'fe80::1'
    const IPv4 = await internalIp.v4();
    //=> '10.0.0.79'
})();
*/
//
// Configuração
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//
// Handlebars
app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultView: 'index',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');
//
// Public
app.use(express.static(path.join(__dirname, "public")));
//
// Rotas
app.use("/admin", admin);
app.use("/pages", pages);
app.use("/sistem", sistem);
//
//
// ------------------------------------------------------------------------------------------------//
//
//
// Start the server web
if (ssl === true) { //with ssl
    https.createServer({
            key: fs.readFileSync(ssl_key, 'utf8'),
            cert: fs.readFileSync(ssl_cert, 'utf8')
        },
        app).listen(port, hostname, () => {
        console.log("Sistema rodando na porta :" + port);
    });
} else { //http
    app.listen(port, hostname, () => {
        console.log("Sistema rodando na porta:" + port);
    });
} // End the server web
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
function apenasNumeros(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}
//
app.get("/", async (req, res) => {
    res.render("pages/home");
});
//
//
app.get("/home", async (req, res) => {
    res.render("pages/home");
});
app.post("/", async (req, res, next) => {
    //
    var SessionName = req.body.SessionName;
    var phonefull = apenasNumeros(req.body.phonefull);
    var msg = req.body.msg;
    var sendTexto = req.body.sendTexto;
    //
    var dados = {
        "SessionName": SessionName,
        "phonefull": phonefull,
        "msg": msg,
        "sendTexto": sendTexto
    };
    console.log(dados);
});
//
//
app.post('/file_upload', upload.single('file'), (req, res, next) => {
    // encoded has the base64 of your file
    res.status(200).json({
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        destination: req.file.destination,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        base64Data: req.file.buffer.toString('base64')
    });
});
//
//
// ------------------------------------------------------------------------------------------------//
//
//
//
process.stdin.resume(); //so the program will not close instantly
//
async function exitHandler(options, exitCode) {
    if (options.cleanup) {
        console.log("- Cleanup");
        await Sessions.getSessions().forEach(async session => {
            await Sessions.closeSession(session.sessionName);
        });
    }
    if (exitCode || exitCode === 0) {
        console.log(exitCode);
    }
    //
    if (options.exit) {
        process.exit();
    }
} //exitHandler 
//
//do something when app is closing
process.on('exit', exitHandler.bind(null, {
    cleanup: true
}));
//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {
    exit: true
}));
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {
    exit: true
}));
process.on('SIGUSR2', exitHandler.bind(null, {
    exit: true
}));
//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {
    exit: true
}));
//
// ------------------------------------------------------------------------------------------------//
//
//