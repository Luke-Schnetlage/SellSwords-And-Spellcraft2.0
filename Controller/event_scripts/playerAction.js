const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors")

//cors prevents connection errors
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

//event listener for a client to make a connection
//A socket represents an individual client
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("get_player_board_push", (playerID, gameID) => {
        socket.emit("get_player_board_pull",  getPlayerBoard(playerID,gameID));
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
})

function getPlayerBoard(playerID,gameID) {

    ajaxRequest = buildAjax();
    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            //getPlayerBoard.php echoes a json object PlayerBoard
            var playerBoard = ajaxRequest.responseText;
            return playerBoard;
        }
    }
    var queryString = "?playerID=" + playerID + "?gameID=" + gameID;
    ajaxRequest.open("GET", "getPlayerBoard.php" + queryString, true);
    ajaxRequest.send(null);
}

function buildAjax() {
    var ajaxRequest;
    try {
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer Browsers
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    return ajaxRequest;
}
