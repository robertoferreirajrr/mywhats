//
// https://expressjs.com/pt-br/advanced/best-practice-security.html
// Teste: fa855c898f4905ac0264752b314ae5eda4423da7
// Configuração dos módulos
const express = require('express');
const bodyParser = require('body-parser')
const sis = express();
const cors = require('cors');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 9000;
const sistem = require("./routes/sistem");
const Sessions = require("./sessions.js");
sis.use(cors());
sis.use(express.json());
//
// Configuração
// Body Parser
sis.use(bodyParser.json());
sis.use(bodyParser.urlencoded({
    extended: true
}));
//
sis.use("/sistem", sistem);
//
//http
sis.listen(port, hostname, () => {
    console.log("Sistema rodando em : http://" + hostname + ":" + port);
});
// End the server sistema
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