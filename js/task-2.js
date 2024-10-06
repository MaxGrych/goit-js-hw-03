// Менторе, я не знав що буде правильно використовувати під 
// час цього завдання тому вирішив зробити варіант з циклом та з операторами if else

function makeArray(firstArray, secondArray, maxLength) {
  const arrJoined = firstArray.concat(secondArray);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrJoined[i]);
  }
  return result;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

function makeArrayTwo(firstArray, secondArray, maxLength) {
  const arrJoined = firstArray.concat(secondArray);

  if (arrJoined <= maxLength) {
    return arrJoined;
  }

  return arrJoined.slice(0, maxLength);
}

console.log(makeArrayTwo(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArrayTwo(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArrayTwo(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArrayTwo(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArrayTwo(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(
  makeArrayTwo(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)
); // []
