const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io');
const GAME_PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/public/html/index.html")
});

http.listen(GAME_PORT, () => {
    console.log('listening on port ' + GAME_PORT);
});