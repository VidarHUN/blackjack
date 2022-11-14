const Deck = require("./deck.js").Deck;

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // deck = new Deck();
    // deck.shuffle();
    // res.send(deck.cards);
});

// Create a new room
app.post('/newRoom', (req, res) => {
    // TODO: Create a new room
    // TODO: Create a new dealer
    // TODO: Put the user into the room
    
    
    return;
});

// Join into a room
// example '/room?user=userID'
app.get('/room', (req, res) => {
    // TODO: Find a random not full room
    // TODO: Put the user into the room
    console.log("room oldal")
    return;
});

// Add chips
// '/addChips?room=roomID&user=userID&chips=amountOfChips'
app.post('/addChips', (req, res) => {
    // TODO: Check if this room exists and the user is in there
    // TODO: Increase the user's chips
    return;
});

// Subsctract chips
// '/subChips?room=roomID&user=userID&chips=amountOfChips'
app.post('/subChips', (req, res) => {
    // TODO: Check if this room exists and the user is in there
    // TODO: Decrease the user's chips
    return;
});

// Hit - request a card
// '/hit?room=roomID&user=userID'
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
