//Add a script that sets the current date for the date in gallery.html

(function () {

  const currentDate = new Date();

  const arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentWeekday = arrDay[currentDate.getDay()];

  const arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = arrMonth[currentDate.getMonth()];

  const currentDay = currentDate.getDate();

  const currentYear = currentDate.getFullYear();

  const currentDateFormat = currentWeekday + ", " + currentMonth + " " + currentDay + ", " + currentYear;

  const pElement = document.querySelector("p");

  pElement.innerHTML = "<em>Number of images</em>: 14<br><em>Generated on</em>: " + currentDateFormat;

}) ();
