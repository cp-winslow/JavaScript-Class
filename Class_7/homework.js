/*
With the separate prompts ask user to enter:

  1) name,
  2) email,
  3) birth day
  4) and then password twice.

Do simple validation for email and prompt again unless input contains @ symbol.

If passwords do not match, ask again until they do.

If user age is less than 13 years, display "To register one must be 13 years or older".

Otherwise, using constructor function create an object with user details.

Display "Successfully created account for " and show entered account information.
*/

(function myFunction() {

  const userName = prompt("Please enter your name.");
  let userEmail = prompt("Please enter your email address.");
  const userBirthday = prompt ("Please enter your date of birth. Please use MM/DD/YYYY format.");
  let userPassword1 = prompt("Please enter your password.");
  let userPassword2 = prompt("Please enter your password again.");

  if (userEmail.include("@") != true) {
    userEmail = prompt("Invalid email address. Please enter a valid email address.");
  }

  if (userPassword1 !== userPassword2) {
    alert("Passwords do not match. Please enter your password again.");
    let userPassword1 = prompt("Please enter your password.");
    let userPassword2 = prompt("Please enter your password again.");
  }

  const birthDay = new Date(userBirthday);
  const currentDay = new Date();
  const birthYear = birthDay.FullYear();
  const currentYear = currentDay.FullYear();

  const userAge = currentYear - birthYear;

  if (userAge < 13) {
    alert("To register one must be 13 years or older");
  }

  function userDetails(name, email, birthday, age) {
    this.userName = name;
    this.userEmail = email;
    this.userBirthday = birthday;
    this.userAge = age;
  }

  alert("Successfully created account for " + userName);
  echo(userDetails());

}) ();
