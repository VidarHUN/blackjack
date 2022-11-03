const Deck = require("./deck.js").Deck;

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // deck = new Deck();
    // deck.shuffle();
    // res.send(deck.cards);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
