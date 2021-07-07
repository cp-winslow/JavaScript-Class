/*
Write a function that takes an array as an argument
and returns the array that has only a single item from the sequential duplicates.
*/

function clearDups(inpArray) {
  let clearedDupsArray = [];
  const inpArrayLen = inpArray.length;
  for (let i = 0; i < inpArrayLen - 1; i++) {
    if (inpArray[i] !== inpArray[i + 1]) {
      clearedDupsArray.push(inpArray[i]);
    }
  }
  if (clearedDupsArray[clearedDupsArray.length - 1] !== inpArray[inpArrayLen - 1]) {
    clearedDupsArray.push(inpArray[inpArrayLen - 1]);
  }
  return clearedDupsArray;
}

// Assuming the function is defined above:
const inpArray = [1, 2, 2, 3, 4, 2, 2, 4];
const undupArray = clearDups(inpArray);
console.log(undupArray); // Should output Array [1, 2, 3, 4, 2, 4]
