const ObjectId = require('mongodb').ObjectId;

class Room {
    constructor(dealer, player) {
        this._id = new ObjectId();
        dealer.addRoomID(this.id);
        player.addRoomID(this.id);
        this.dealer = dealer;
        this.players = [player];
    }

    addPlayer(player) {
        if (this.players.length == 7) {
            throw new Error("Can't add more players to this room");
        }
        else {
            this.players.push(player);
        }
    }

    removePlayer(player) {
        if (this.players.length == 2) {
            throw new Error("Can't remove more players from this room");
            // At this point we should delete this room and put the other
            // player into another
        }
        else {
            this.players.remove(player);
        }
    }

    hit() {
        return this.dealer.from_deck();
    }
}

module.exports.Room = Room;
