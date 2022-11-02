
class Player {
    constructor(hand, name) {
        this.hand = hand;
        this.second_hand = []; // Used when to player splits
        this.chips = 5000;
        this.name = name;
        this.stand = false;
        this.bet = 0;
    }

    addCard(card, second_hand = false) {
        if (second_hand) {
            this.second_hand += card;
        }
        else {
            this.hand += card;
        }
    }

    addChips(chips) {
        this.chips += chips;
    }

    removeChips(chips) {
        this.chips -+ chips;
        if (this.chips <= 0) {
            throw new Error('Your chips are gone');
        }
    }

    hit(deck) {
        if (!this.stand) {
            second_hand = this.second_hand > 0 ? true : false;
            this.addCard(deck[0], second_hand);
            deck.push(deck.shift());
        }
        else {
            throw new Error('The don't want new card');
        }
    }

    stand() {
        this.stand = true;
    }

    double() {
        // TODO: Check if there is a second hand
        if (this.hand.length >= 2) {
            this.bet *= 2;
        }
        else {
            throw new Error('To double your bet you should have at least 2 cards in your hand');
        }
    }

    split() {
        // TODO: Implement split
        // When the player have pair in his hand he can't split these cards
        // into two hands.
        return undefined;
    }

    insurance() {
        // TODO: Implement insurance
        return undefined;
    }

    surrender() {
        this.hand = [];
        this.second_hand = [];
        this.addChips(Math.ceil(this.bet / 2));
    }

    sumOfHand() {
        // TODO: Return the sum of the player hand
        // TODO: Check second hand
        return undefined;
    }

    bust() {
        this.hand = []
        this.bet = 0;
        this.stand = false;
    }

    push() {
        return undefined;
    }

    blackjack(prize) {
        this.hand = [];
        this.second_hand = [];
        this.bet = 0;
        this.addChips(prize);
    }
}

module.exports.Player = Player;
