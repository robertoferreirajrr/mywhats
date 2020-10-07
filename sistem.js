//
// https://expressjs.com/pt-br/advanced/best-practice-security.html
// Configuração dos módulos
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const sistem = express();
const cors = require('cors');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 9000;
const Sessions = require("./sessions.js");
sistem.use(cors());
sistem.use(express.json());
//
// Configuração
// Body Parser
sistem.use(bodyParser.json());
sistem.use(bodyParser.urlencoded({
    extended: true
}));
//
//
//http
sistem.listen(port, hostname, () => {
    console.log("Sistema rodando na porta:" + port);
});
// End the server sistema
//
sistem.get("/", async (req, res, next) => {
    console.log("- Rota");
    const response = await fetch("http://localhost:8000/sistem/sendText", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: "c825267a-a9f2-48b5-8bcf-d62318a78d11",
            numero: "+55(67)9678-7854",
            msg: "Hello World"
        })
    });
    const content = await response.json();

    console.log(content);
    next();
});
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
//do something when sistema is closing
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