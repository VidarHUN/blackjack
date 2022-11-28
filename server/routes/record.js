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

let ROOMS = [];

// TODO: Create the records

// Create a new room
recordRoutes.route('/newRoom').post(function (req, res)  {
    const username = req.body.username;
    console.log(req.body);
    let deck = new Deck();
    deck.shuffle();
    let dealer = new Dealer(deck)
    let player = new Player(username);
    let room = new Room(dealer, player);
    ROOMS.push(room);
    res.json(room);
    res.status(200).send();
});

// Join into a room
//TODO return room object or room object id
recordRoutes.route('/room').post(function (req, res)  {
    const username = req.body.username;
    let player = new Player(username);
    console.log("New Player added!");
    let roomIndex = ROOMS.findIndex(element => element.players.length < 6);
    ROOMS[roomIndex].addPlayer(player);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/getRoom').post(function (req, res)  {
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/newRound').post(function (req, res) {
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    ROOMS[roomIndex].dealer.hit(ROOMS[roomIndex], false);
    ROOMS[roomIndex].dealer.hit(ROOMS[roomIndex], false);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/bet').post(function (req, res) {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    const bet = req.body.bet;
    const second_hand = req.body.second_hand;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].add_bet(bet, second_hand);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});


recordRoutes.route('/hit').post(function (req, res) {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    const second_hand = req.body.second_hand;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].hit(ROOMS[roomIndex], second_hand);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/double').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    const second_hand = req.body.second_hand;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].double(second_hand);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/split').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].split();
    ROOMS[roomIndex].players[playerIndex].hit(ROOMS[roomIndex]);
    ROOMS[roomIndex].players[playerIndex].hit(ROOMS[roomIndex], true);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/insurance').post(function (req, res)  {

});

recordRoutes.route('/surrender').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].surrender();
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/bust').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].bust();
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/push').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].push();
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

recordRoutes.route('/blackjack').post(function (req, res)  {
    const playerId = req.body.playerId;
    const roomId = req.body.roomId;
    const prize = req.body.prize;
    let roomIndex = ROOMS.findIndex(element => element._id == roomId);
    let playerIndex = ROOMS[roomIndex].players.findIndex(element => element._id == playerId);
    ROOMS[roomIndex].players[playerIndex].blackjack(prize);
    res.json(ROOMS[roomIndex]);
    res.status(200).send();
});

module.exports = recordRoutes;