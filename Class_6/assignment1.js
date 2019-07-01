//Write a function that returns maximum of the passed two arguments. Use ternary operator.

function isMax(int1, int2) {
  const max = (int1 >= int2) ? int1 : int2;
  alert(max);
}

const sign1 = prompt("Fisrt Number");
const sign2 = prompt("Second Number");

isMax(sign1, sign2);
