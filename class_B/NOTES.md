# Class B

## Assignments

1. (5 pts) Using [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) display the modal from index.html after 7 seconds of page load.

(function () {
  setTimeout (() => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  }, 7000);
})();

2. (11 pts) Define a function next, that activates next slide and slide indicator when called (i.e. function should remove active class from the items and add it to the next ones). If the last slide is active when function is called, it should activate the first slide. The function should work for any number of slides.

(function () {
  function next() {
    const slides = document.querySelectorAll(".carousel-item");

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("active")) {
        slides[i].classList.remove("active");
        slides[(i + 1) % slides.length].classList.add("active");
        break;
      };
    }

    const indicator = document.querySelectorAll("[data-target='#carouselExample']")

    for (let i = 0; i < indicator.length; i++) {
      if (indicator[i].classList.contains("active")) {
        indicator[i].classList.remove("active");
        indicator[(i + 1) % indicator.length].classList.add("active");
        break;
      };
    }
  }
}) ();

3. (5 pts) Using [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) call the function defined above with 5 second intervals.

(function () {
  function next() {
    const slides = document.querySelectorAll(".carousel-item");

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("active")) {
        slides[i].classList.remove("active");
        slides[(i + 1) % slides.length].classList.add("active");
        break;
      };
    }

    const indicator = document.querySelectorAll("[data-target='#carouselExample']")

    for (let i = 0; i < indicator.length; i++) {
      if (indicator[i].classList.contains("active")) {
        indicator[i].classList.remove("active");
        indicator[(i + 1) % indicator.length].classList.add("active");
        break;
      };
    }
  }

  const interval = setInterval(() => {
    next();
  }, 5000);
}) ();

## Homework

1. (7 pts) Assign return value from setInterval above to a variable. Add click event listener to the button that deactivates slideshow using [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval).
2. (19 pts) Complete the carousel functionality. Previous arrow should activate the previous slide, next should activate the next. Slide indicators should activate corresponding slides. Make sure interval is also reset when any of the slide controls is clicked.

P.S. Create the separate files for assignments and homework. Create two branches, one for assignments and one for homework. Push your changes to the corresponding Github branches. Create pull requests to your master.

## Notes

### Events and event listeners

  const button = document.querySelector("#btn");
  button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("I have been clicked");
    });

### Timers

  setTimeout(() => {
    alert("5 secs passed");
    }, 5000);

  const interval = setInterval (() => {
    console.log("5 more secs passed");
    }, 5000);

  clearInterval(interval);
