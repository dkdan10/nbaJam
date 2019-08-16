const express = require('express')
const app = express()
const server = require("http").Server(app)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});
app.use('/client', express.static(__dirname + "/client"))

const port = process.env.PORT || 8080
server.listen(port)
console.log("server started")

const SOCKET_LIST = {}
const PLAYER_QUEUE = []
const GAMES = {}

const io = require("socket.io")(server, {})
io.sockets.on("connection", function(socket) {
    socket.number = "" + (100 * Math.random())

    SOCKET_LIST[socket.id] = socket
    // socket.emit('transmitSocketInfo', {
    //     id: 10000 * Math.Ra
    // })
    socket.on('disconnect', function() {
        delete SOCKET_LIST[socket.id]
        const playerQindex = PLAYER_QUEUE.indexOf(socket.id);
        if (playerQindex > -1) {
            PLAYER_QUEUE.splice(playerQindex, 1);
        }
    })

    socket.on('playerAddedToQueue', function() {
        PLAYER_QUEUE.push(socket.id)
    })

    socket.on('charChanged', function(data) {
        const game = GAMES[data.gameId]
        SOCKET_LIST[game.leftPlayerId].emit("updatedSelectedChars", data)
        SOCKET_LIST[game.rightPlayerId].emit("updatedSelectedChars", data)
    })

    console.log("socket connection")
})



setInterval(() => {
    if (PLAYER_QUEUE.length > 1) {
        const gameObj = {
            id: new Date().getTime(),
            leftPlayerId: PLAYER_QUEUE[0],
            rightPlayerId: PLAYER_QUEUE[1]
        }
        GAMES[gameObj.id] = gameObj
        for (let i = 0; i < 2; i++) {
            SOCKET_LIST[PLAYER_QUEUE[i]].emit('matchFound', {
                leftPlayerId: PLAYER_QUEUE[0],
                rightPlayerId: PLAYER_QUEUE[1],
                gameId: gameObj.id
            })
        }
        PLAYER_QUEUE.splice(0,2)
    }
}, 1000 / 60);