/*Write a function that takes an array as an argument
and returns the array that has only a single item from the sequential duplicates.*/

function clearDups(inpArray) {
  for (let i = 0; i < inpArray.length; i++) {
    let undupArray = [];
  }
  return undupArray;
}

// Assuming the function is defined above:
const inpArray = [1, 2, 2, 3, 4, 2, 2, 4];
const undupArray = clearDups(inpArray);
console.log(undupArray); // Should output Array [1, 2, 3, 4, 2, 4]
