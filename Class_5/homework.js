//Define a function charCount that takes a string as an argument and returns an object containing character count of letters.

function charCount(string) {
  this.str = string;
  this.char = function () {

  };

};

const result = charCount("Pack my box with five dozen liquor jugs.");
const aCount = result.a;
const spaceCount = result[' '];
console.log(aCount); // Should output 1
console.log(spaceCount); // Should output 7
