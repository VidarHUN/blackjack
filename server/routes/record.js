const Deck = require("../elements/deck.js").Deck;
const Room = require("../elements/room.js").Room;
const Player = require("../elements/player.js").Player;
const Dealer = require("../elements/player.js").Dealer;
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// TODO: Create the records

// Create a new room
recordRoutes.route('/newRoom').post(function (req, res)  {
    const username = req.body.username;
    let deck = new Deck();
    deck.shuffle();
    console.log("New deck created and shuffled");
    let dealer = new Dealer(deck)
    console.log("New Dealer created!");
    // TODO: Get the username from the player
    let player = new Player(username);
    console.log("New Player added!");
    let room = new Room(dealer, player);
    console.log("New room created!");

    const dbConnect = dbo.getDb();
    dbConnect
        .collection('rooms')
        .insertOne(room, function (err, result) {
            if (err) {
                res.status(400).send('Error inserting rooms!');
                return;
            } else {
                console.log(`Added a new room with id ${result.insertedId}`);
            }
    });
    dbConnect
        .collection('players')
        .insertMany([player, dealer], function (err, result) {
            if (err) {
                res.status(400).send('Error inserting players!');
                return;
            } else {
                console.log(`Added a new player(s) with id ${result.insertedIds}`);
            }
    });

    res.json({player: player._id,
              room: room._id});
    res.status(200).send();
    
});

// Join into a room
//TODO return room object or room object id
recordRoutes.route('/room').post(function (req, res)  {
    const username = req.body.username;
    let player = new Player(username);
    console.log("New Player added!");
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('players')
        .insertOne(player, function (err, result) {
            if (err) {
                res.status(400).send('Error inserting players!');
                return;
            } else {
                console.log(`Added a new player with id ${result.insertedId}`);
            }
    });

    let room = dbConnect
    //Suppose to return one record randomly from db where number_of_players less then 7
        .collection('rooms').aggregate([
            { $match: { number_of_players: {$lt: 7 } }},
            { $sample: { size: 1 } }
        ])
    console.log(room)
    //res.json({player: player._id,
    //    room: room._id});
    res.json(room);
    res.status(200).send();
    
});
// app.get('/room', (req, res) => {
//     // Get a random room index
//     let idx = Math.floor(Math.random() * idx.length);
//     let player = new Player('test_user');
//     ROOMS[idx].addPlayer(player);
// });

// Hit - request a card
// '/hit?user=userID'
recordRoutes.route('/hit').get(async function (_req, res) {
        
});

recordRoutes.route('/double').post(function (req, res)  {

});

recordRoutes.route('/split').post(function (req, res)  {

});

recordRoutes.route('/insurance').post(function (req, res)  {

});

recordRoutes.route('/surrender').post(function (req, res)  {

});

recordRoutes.route('/bust').post(function (req, res)  {

});

recordRoutes.route('/push').post(function (req, res)  {

});

recordRoutes.route('/blackjack').post(function (req, res)  {

});

module.exports = recordRoutes;