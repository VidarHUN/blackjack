const ObjectId = require('mongodb').ObjectId;
const Room = require('./room.js').Room;
class Player {
    constructor(name) {
        this._id = new ObjectId();
        this.hand = [];
        this.second_hand = []; // Used when to player splits
        this.chips = 5000;
        this.name = name;
        this.stand = false;
        this.bet = 0;
        this.bet_second_hand = 0;
    }

    addRoomID(id) {
        this.room_id = id;
    }

    addCard(card, second_hand = false) {
        if (second_hand) {
            this.second_hand.push(card);
        }
        else {
            this.hand.push(card);
        }
    }

    addChips(chips) {
        this.chips += chips;
    }

    removeChips(chips) {
        this.chips -= chips;
        if (this.chips <= 0) {
            throw new Error('Your chips are gone');
        }
    }

    add_bet(chips, second_hand) {
        if (second_hand) {
            this.removeChips(chips);
            this.bet_second_hand += chips;
        }
        else {
            this.removeChips(chips);
            this.bet += chips;
        }
    }

    hit(room, second_hand) {
        if (!this.stand) {
            if (second_hand) {
                let card = room.hit();
                this.addCard(card, second_hand);
            }
            else {
                let card = room.hit();
                this.addCard(card);
            }
        }
        else {
            throw new Error("The don't want new card");
        }
    }

    set_stand() {
        this.stand = true;
    }

    double(second_hand) {
        if (second_hand) {
            if (this.hand.length == 2) {
                this.removeChips(this.bet_second_hand);
                this.bet_second_hand *= 2;
            }
        }
        else if (this.hand.length == 2) {
            this.removeChips(this.bet);
            this.bet *= 2;
        }
        else {
            throw new Error('To double your bet you should have at least 2 cards in your hand');
        }
    }

    split() {
        if (this.hand.length == 2) {
            if (this.hand[0].value == this.hand[1].value){
                let card = this.hand.shift();
                this.second_hand.push(card);
            }
        }
        else {
            throw new Error('Can not split');
        }
    }

    insurance() {
        // TODO: Implement insurance
        return undefined;
    }

    surrender() {
        this.hand = [];
        this.addChips(Math.ceil(this.bet / 2));
    }

    sumOfHand() {
        // TODO: Return the sum of the player hand
        // TODO: Check second hand
        return undefined;
    }

    bust() {
        this.hand = [];
        this.bet = 0;
        this.stand = false;
    }

    push() {
        this.hand = [];
        this.addChips(Math.ceil(this.bet / 2));
        this.bet = 0;
        this.stand = false;
    }

    blackjack(prize) {
        this.hand = [];
        this.second_hand = [];
        this.bet = 0;
        this.addChips(prize);
    }
}

class Dealer extends Player {
    constructor(deck, name = "Dealer") {
        super(name);
        this.deck = deck;
    }

    from_deck () {
        return this.deck.get_card();
    }
}

module.exports.Player = Player;
module.exports.Dealer = Dealer;