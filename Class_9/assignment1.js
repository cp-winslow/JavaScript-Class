/*Add a script to gallery.html that [sets]
(https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
title attribute for each image with the value matching its alt text.
*/

(function () {

  const imgs = document.querySelectorAll("img");

  for (let photo of imgs) {
    photo.title = photo.alt;
  }

  for (var i = 0; i < imgs.length; i++) {
    const altText = imgs[i].alt;
    imgs[i].setAttribute("style", "border: solid red 5px");
  }

}) ();
