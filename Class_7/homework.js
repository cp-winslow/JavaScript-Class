/*
With the separate prompts ask user to enter:

  1) name,
  2) email,
  3) birth day
  4) and then password twice.
*/
(function() {

  const userName = prompt("Please enter your username");

  let email = prompt("Please enter your email address");
  //Do simple validation for email and prompt again unless input contains @ symbol.
  function emailCheck(email) {
    let count = 0;
    for (let i = 0; i < email.length; i++) {
      if (email.charAt(i) === "@") {
        count = count + 1;
      }
    }
    return count;
  }
  while (emailCheck(email) != 1) {
    email = prompt("Please enter a valid email ID");
  }

  let dateOfBirth = prompt(
  "Please enter your Date of Birth",
  "Please use the following format: MM/DD/YYYY"
  );
  //If user age is less than 13 years, display "To register one must be 13 years or older".
  let dateFormatOfDateOfBirth = new Date(dateOfBirth + " 00:00");
  const date = dateFormatOfDateOfBirth.getDate();
  const month = dateFormatOfDateOfBirth.getMonth();
  const year = dateFormatOfDateOfBirth.getFullYear();
  function ageChecker(date, month, year) {
    return new Date(year + 13, month, date) <= new Date();
  }
  while (dateFormatOfDateOfBirth == "Invalid Date") {
    dateOfBirth = prompt(
      "Invalid Date of Birth. Please enter a valid date",
      "MM-DD-YYYY"
    );
    dateFormatOfDateOfBirth = new Date(dateOfBirth + " 00:00");
  }


  let password = prompt("Please enter your password");
  let passwordConfirm = prompt("Please enter your password again");
  //If passwords do not match, ask again until they do.
  while (passwordConfirm !== password) {
    passwordConfirm = prompt(
      "Password didn't match. Please enter confirm password again",
      "Confirm password should match with entered password"
    );
  }

  //Otherwise, using constructor function create an object with user details.
  function userProfile(userName) {
    this.username = userName;
    this.password = "";
    this.email = "";
    this.birthday = "";
  }

  //Display "Successfully created account for " and show entered account information.
  //If user age is less than 13 years, display "To register one must be 13 years or older".
  if (ageChecker(date, month, year)) {
    echo("Successfully created account for " + userName);
    const userAccount = new userProfile(userName);
    userAccount.password = password;
    userAccount.email = email;
    userAccount.birthday = dateOfBirth;
    echo("User Name: " + userAccount.username);
    echo("Email: " + userAccount.email);
    echo("Date of Birth: " + userAccount.birthday);
  } else {
    echo("To register one must be 13 years or older.");
  }
})();
