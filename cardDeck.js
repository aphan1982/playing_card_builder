class PlayingCard {
  name;
  suit;
  color;
  value;
  sequentialValue;

  constructor(name, suit) {
    this.name = name;
    this.suit = suit;
    
    // NAME AND VALUE CONDITIONALS:
    // determines name and value if number passed in as name:
    switch (typeof(name)) {
      case "number":
        switch (name) {
          case 1:
          case 14:
            this.name = `the ace of ${this.suit}`;
            this.value = 1;
            break;
          case 2:
            this.name = `the two of ${this.suit}`;
            this.value = name;
            break;
          case 3:
            this.name = `the three of ${this.suit}`;
            this.value = name;
            break;
          case 4:
            this.name = `the four of ${this.suit}`;
            this.value = name;
            break;
          case 5:
            this.name = `the five of ${this.suit}`;
            this.value = name;
            break;
          case 6:
            this.name = `the six of ${this.suit}`;
            this.value = name;
            break;
          case 7:
            this.name = `the seven of ${this.suit}`;
            this.value = name;
            break;
          case 8:
            this.name = `the eight of ${this.suit}`;
            this.value = name;
            break;
          case 9:
            this.name = `the nine of ${this.suit}`;
            this.value = name;
            break;
          case 10:
            this.name = `the ten of ${this.suit}`;
            this.value = name;
            break;
          case 11:
            this.name = `the jack of ${this.suit}`;
            this.value = name;
            break;
          case 12:
            this.name = `the queen of ${this.suit}`;
            this.value = name;
            break;
          case 13:
            this.name = `the king of ${this.suit}`;
            this.value = name;
            break;
          default:
            console.log(`invalid card value`);
        }
        break;

      case "string":
        switch (name.toLowerCase()) {
          case "ace":
          case "fourteen":
          case "one":
            this.name = `the ace of ${this.suit}`;
            this.value = 1;
            break;
          case "deuce":
          case "two":
            this.name = `the two of ${this.suit}`;
            this.value = 2;
            break;
          case "three":
            this.name = `the three of ${this.suit}`;
            this.value = 3;
            break;
          case "four":
            this.name = `the four of ${this.suit}`;
            this.value = 4;
            break;
          case "five":
            this.name = `the five of ${this.suit}`;
            this.value = 5;
            break;
          case "six":
            this.name = `the six of ${this.suit}`;
            this.value = 6;
            break;
          case "seven":
            this.name = `the seven of ${this.suit}`;
            this.value = 7;
            break;
          case "eight":
            this.name = `the eight of ${this.suit}`;
            this.value = 8;
            break;
          case "nine":
            this.name = `the nine of ${this.suit}`;
            this.value = 9;
            break;
          case "ten":
            this.name = `the ten of ${this.suit}`;
            this.value = 10;
            break;
          case "eleven":
          case "jack":
            this.name = `the jack of ${this.suit}`;
            this.value = 11;
            break;
          case "twelve":
          case "queen":
            this.name = `the queen of ${this.suit}`;
            this.value = 12;
            break;
          case "king":
          case "thirteen":
            this.name = `the king of ${this.suit}`;
            this.value = 13;
            break;
          case "joker":
          case "*":
            this.name = "joker";
            this.suit = null;
            this.color = null;
            this.value = 15;
            this.sequentialValue = 53;
            break;
          default:
            console.log(`invalid card value`);
        } 
      break;
      default:
        console.log(`invalid card value`);
    }
    
    // SUIT AND COLOR CONDITIONALS:
    // // determines sequential value based on suit:
    if (this.name === "joker") {
      return;
    } else {
      switch (suit.toLowerCase()) {
        case "spades":
          this.color = "black";
          this.sequentialValue = this.value;
          break;
        case "hearts":
          this.color = "red";
          this.sequentialValue = (this.value + 13);
          break;
        case "clubs":
          this.color = "black";
          this.sequentialValue = (this.value + 26);
          break;
        case "diamonds":
          this.color = "red";
          this.sequentialValue = (this.value + 39);
          break;
        default:
          console.log(`invalid suit value`);
      }
    }
  }

  // GETTERS:
  get name() {
    return this.name;
  }
  get suit() {
    return this.suit;
  }
  get value() {
    return this._value;
  }
};

module.exports = {
  PlayingCard: PlayingCard
};