//
// https://expressjs.com/pt-br/advanced/best-practice-security.html
// Configuração dos módulos
const express = require('express');
const request = require('request');
const fetch = require("node-fetch");
const bodyParser = require('body-parser')
const monitor = express();
const cors = require('cors');
const {
    async
} = require('rxjs');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 9090;
monitor.use(cors());
monitor.use(express.json());
//
// Configuração
// Body Parser
monitor.use(bodyParser.json());
monitor.use(bodyParser.urlencoded({
    extended: true
}));
//
//http
monitor.listen(port, hostname, () => {
    console.log("Monitor rodando na porta:" + port);
});
//
monitor.get("/", async (req, res, next) => {

    const response = await fetch('http://localhost:9000/sistem/sendText', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SessionName: "22d278e8-a192-45b7-ad43-70bb0e101ccd",
            number: '556796787854',
            text: "Hello\nWorld"
        })
    });
    console.log(response);
    res.send(response);
});
//
//
// End the server sistema
//
process.stdin.resume(); //so the program will not close instantly
//
async function exitHandler(options, exitCode) {
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