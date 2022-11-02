
class Room {
    constructor(players) {
        if (players.length < 2) {
            throw new Error('Too few players');
        }
        else if (players.length > 7) {
            throw new Error('Too many players');
        }
        else {
            this.players = players;
        }
    }

    addPlayer(player) {
        if (this.players.length == 7) {
            throw new Error('Can't add more players to this room');
        }
        else {
            this.players.push(player);
        }
    }

    removePlayer(player) {
        if (this.players.length == 2) {
            throw new Error('Can't remove more players from this room');
            // At this point we should delete this room and put the other
            // player into another
        }
        else {
            this.players.remove(player);
        }
    }
}

model.exports.Room = Room;
