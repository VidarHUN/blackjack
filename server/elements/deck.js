const SUITS = ["S", "C", "H", "D"];
const VALUES = ["A", "2", "3", "4",
                "5", "6", "7", "8",
                "9", "10", "J", "Q", "K"];

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    // Fisher-Yates algorithm to shuffle deck
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    get_card() {
        let card = this.cards.shift();
        this.cards.push(card);
        return card;
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.name = this.value + this.suit;
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

module.exports.Deck = Deck;
