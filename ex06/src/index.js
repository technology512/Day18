// Only change code below this line

let rockStar = new Map([
  ["artist", "The Rolling Stones"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["singer", "Mick Jagger"],
]);

newRock = new Map(
  [...rockStar].filter(function (entree) {
    return entree[0].slice(0, 1) > "a";
  })
);

console.log(newRock);

// Only change code above this line

module.exports = { rockStar, newRock };
