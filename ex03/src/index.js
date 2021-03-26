// Only change code below this line

function* myGenerator() {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}

var iterator = myGenerator(6, 7, 8);
var generatorArray = [];

for (el of iterator) {
  generatorArray.push(el);
}

console.log(generatorArray);

// Only change code above this line

module.exports = { generatorArray, myGenerator };
