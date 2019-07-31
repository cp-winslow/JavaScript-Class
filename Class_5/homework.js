/*Define a function charCount that takes a string as an argument
and returns an object containing character count of letters.*/

(function () {

  function charCount(string) {
    const charCountLen = string.length;
    const charCountObject = {};
    for (let i = 0; i < charCountLen; i++) {
      let current = string.charAt(i);
      if (charCountObject[current]) {
        charCountObject[current] = charCountObject[current] + 1;
      } else {
        charCountObject[current] = 1;
      }
    }
    return charCountObject;
  }

  const result = charCount("Pack my box with five dozen liquor jugs.");
  const aCount = result.a;
  const spaceCount = result[' '];
  console.log(aCount); // Should output 1
  console.log(spaceCount); // Should output 7

}) ();
