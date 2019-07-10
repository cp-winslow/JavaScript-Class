/*Define a function charCount that takes a string as an argument
and returns an object containing character count of letters.*/

(function () {

  function charCount(string) {
    this.string = string;
    this.result = function (result) {
      this.array = this.string.split("");
    };
    this.ltrCount = ;
    this.splCount = ;
  };

  const result = charCount("Pack my box with five dozen liquor jugs.");
  console.log(charCount.string);
  const aCount = result.a;
  const spaceCount = result[' '];
  console.log(aCount); // Should output 1
  console.log(spaceCount); // Should output 7

}) ();
