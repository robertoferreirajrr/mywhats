//
// https://expressjs.com/pt-br/advanced/best-practice-security.html
// Configuração dos módulos
const express = require('express');
const bodyParser = require('body-parser')
const sistema = express();
const cors = require('cors');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 9090;
sistema.use(cors());
sistema.use(express.json());
//
// Configuração
// Body Parser
sistema.use(bodyParser.json());
sistema.use(bodyParser.urlencoded({
    extended: true
}));
//
//http
sistema.listen(port, hostname, () => {
    console.log("Monitor rodando na porta:" + port);
});
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