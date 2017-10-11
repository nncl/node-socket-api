const express = require("express")
    , app = express()
    , port = 3000
    , server = require("http").Server(app)
    , io = require("socket.io")(server)
    , Actions = require("./actions/index");

io.on('connection', (socket) => {
    console.log('connected');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.io = io;
    next();
});

app.get("/", (req, res) => {
    const msg = req.query.message ? req.query.message : "Hello World";
    Actions.doEmitMessage(res.io, msg);
    res.send("Ok");
});

server.listen(port, () => {
    console.log('Running on', port);
});