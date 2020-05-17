const cardDeck = require("./cardDeck");

// assembles a full deck in deck[] from the buildSuit() callback function:
const buildDeck = () => {
  const deck = [];
  const spades = buildSuit("spades");
  const hearts = buildSuit("hearts");
  const clubs = buildSuit("clubs");
  const diamonds = buildSuit("diamonds");
  
  for (let spade of spades) {
    deck.push(spade);
  };
  for (let heart of hearts) {
    deck.push(heart);
  }
  for (let club of clubs) {
    deck.push(club);
  }
  for (let diamond of diamonds) {
    deck.push(diamond);
  }
  
  return deck;
};

// performs same function as buildDeck(), but adds two joker cards:
const buildDeckWJokers = () => {
  const deck = [];
  const starterDeck = buildDeck();
  const joker1 = new cardDeck.PlayingCard("joker");
  const joker2 = new cardDeck.PlayingCard("joker");

  joker1.name = "joker one";
  joker2.name = "joker two";
  joker2.sequentialValue = 54;

  for (const card of starterDeck) {
    deck.push(card);
  };
  deck.push(joker1);
  deck.push(joker2);

  return deck;
};

// iterates through all numerical values in a suit and build each card:
const buildSuit = suit => {
  const deck = [];
  for (let i = 1; i < 14; ++i) {
    deck[(i - 1)] = new cardDeck.PlayingCard(i, suit);
  }
  return deck;
};

// shuffles the contents of arrays analogous to physically shuffling cards:
const shuffle = (feedArr, numTimes = 1, console = false) => {
  // copies array of cards passed in so as not to mutate the original:
  let manipulableArr = Array.from(feedArr);

  for (let i = 0; i < numTimes; ++i) {
    const shuffleMech = manipulableArr => {
      // divides the deck in two to be shuffled analogous to real-life shuffling:
      const halvingFactor = Math.floor(manipulableArr.length / 2);
      const split = array => { 
        return array.splice(0, halvingFactor)
      };

      // resultant halves of deck splitting:
      const leftHalf = split(manipulableArr);
      const rightHalf = manipulableArr;
      
      // accounts for minor variation in manual shuffling (sometimes one to three cards fall from one side before the other side falls):
      const randomizer = () => {
        return Math.ceil(Math.random() * (28 / 11));
      };
      
      // array filled with random selections, the "shuffled deck":
      let fillArr = [];
      let filteredArr = [];
      
      // mimics the falling or "drawing" of cards from one hand, creating a new  card sequence:
      const pullFromSide = side => {
        for (let i = 0; i < randomizer(); ++i) {
          fillArr.push(side[0]);
          side.splice(0, 1);
          // kicks out undefined pushes (this must happen AFTER the randomizer(), otherwise the randomization and drawing from alternating right and left hands will be negated):
          filteredArr = fillArr.filter(valid => {
            valid !== undefined;
          });
          return filteredArr;
        }
      };

      // cards fall in alternating, randomized sequence from one hand to the other until all draw cards are exhausted (total number of fillArr === feedArr):
      while (fillArr.length < feedArr.length) {
        pullFromSide(leftHalf);
        pullFromSide(rightHalf);
      };

      return fillArr;
    };

    manipulableArr = shuffleMech(manipulableArr);

    // OPTIONAL: if the user provides a console parameter, a log of all shuffle iterations will be printed to the console:
    if (console) {
      console.log(`Shuffle #${i + 1} is: ${manipulableArr.join(" ")}.`);
    };
  };

  return manipulableArr;
};

module.exports = {
  buildDeck: buildDeck,
  buildDeckWJokers: buildDeckWJokers,
  buildSuit: buildSuit,
  shuffle: shuffle
};