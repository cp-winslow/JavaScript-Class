// Create an array consisting of [Chinese zodiac] elements. Ask a user to enter a year. Display the sign that is assigned to the year and also a few subsequent years of that sign. Use switch statement.

let zodiacSigns = ["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"];

function zodiacSwitch(inputYear) {
  function zodiacLookUp(str1) {
    echo("The Chinese Zodiac for " + inputYear + " is " + zodiacSigns[str1]);
    echo("Years that are also " + zodiacSigns[str1] + " after entered year:");
    let otherYear = inputYear + 12;
    echo(otherYear);
    otherYear = otherYear + 12;
    echo(otherYear);
  }

  switch (inputYear % 12) {
    case 0:
      zodiacLookUp(0);
      break;
    case 1:
      zodiacLookUp(1);
      break;
    case 2:
      zodiacLookUp(2);
      break;
    case 3:
      zodiacLookUp(3);
      break;
    case 4:
      zodiacLookUp(4);
      break;
    case 5:
      zodiacLookUp(5);
      break;
    case 6:
      zodiacLookUp(6);
      break;
    case 7:
      zodiacLookUp(7);
      break;
    case 8:
      zodiacLookUp(8);
      break;
    case 9:
      zodiacLookUp(9);
      break;
    case 10:
      zodiacLookUp(10);
      break;
    case 11:
      zodiacLookUp(11);
      break;
    default:
      echo("Invalid input");
      break;
  }
}

zodiacSwitch(Number(prompt("Enter a year")));

let currentDate = new Date();
zodiacSwitch(currentDate.getFullYear());
