const Actions = {
    "doEmitMessage": (socket, msg) => {
        socket.emit("message", msg);
    }
};

module.exports = Actions;