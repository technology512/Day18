// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

const arrKey = [];
const arrValue = [];
for (let key of shoppingList.keys()) {
  console.log(`groceries: \t ${key}`);
  arrKey.push(key);
}

for (let value of shoppingList.values()) {
  console.log(`amount: \t ${value}`);
  arrValue.push(value);
}

for (let entry of shoppingList.entries()) {
  console.log(entry);
}

// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
