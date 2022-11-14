const Deck = require("./deck.js").Deck;
const Room = require("./room.js").Room;
const Player = require("./player.js").Player;
const Dealer = require("./player.js").Dealer;

const express = require('express');
const app = express();
const port = 3000;

// TODO: Create a db where we can store rooms and users (MongoDB)
const ROOMS = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Create a new room
app.post('/newRoom', (req, res) => {
    let deck = new Deck();
    deck.shuffle();
    let dealer = new Dealer(deck)
    // TODO: Get the username from the player
    let player = new Player('test_user');
    let room = new Room(dealer, player);
    ROOMS.push(room)
});

// Join into a room
app.get('/room', (req, res) => {
    // Get a random room index
    let idx = Math.floor(Math.random() * idx.length);
    let player = new Player('test_user');
    ROOMS[idx].addPlayer(player);
});

// Hit - request a card
// '/hit?user=userID'
app.get('/hit', (req, res) => {
    // Give a card to the defined user
    return;
});

app.get('/double', (req, res) => {
    return;
});

app.get('/split', (req, res) => {
    return;
});

app.get('/insurance', (req, res) => {
    return;
});

app.get('/surrender', (req, res) => {
    return;
});

app.get('/bust', (req, res) => {
    return;
});

app.get('/push', (req, res) => {
    return;
});

app.get('/blackjack', (req, res) => {
    return;
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
