/*
Create a function that sets display property to "block" for the modal in index.html. Add the function to the button as a click event listener using [addEventListener()]

[addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
*/
(function () {
  const bigButton = document.querySelector(".btn.btn-lg.btn-success");

  function addBlock() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  bigButton.addEventListener("click", addBlock);
})();
/*
Add an event listener to the modal close buttons
to close it when clicked (Set modal display property to none).
*/
(function () {
  const bigButton = document.querySelector(".btn.btn-secondary");

  function addBlock() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  };

  bigButton.addEventListener("click", addBlock);
})();
/*
Add an event listener to activate the dropdown.
The function needs to toggle class "show" for the nav item
with class "nav-item dropdown" and
menu item with class "dropdown-menu".
*/
(function () {
  const dropDownMenu = document.querySelector(".nav-link.dropdown-toggle");
  const dropDownItem = document.querySelector(".dropdown-menu");

  dropDownMenu.addEventListener("click", (e) => {
    e.preventDefault();
    dropDownMenu.classList.toggle("show");
    dropDownItem.classList.toggle("show");
  });
})();
