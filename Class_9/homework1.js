/*
[Create] [figcaption] element for each image in gallery.html with text content matching the image alt text.

[Create](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
*/

(function () {

  const currentDiv = document.querySelectorAll("figure");

  for (let i = 0; i < currentDiv.length; i++) {
    const altText = currentDiv[i].firstElementChild.alt;
    const newFigCaption = document.createElement("figcaption");
    const newFigText = document.createTextNode(altText);
    newFigCaption.appendChild(newFigText);
  }

}) ();

/*Add a script to gallery.html that [sets]
(https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
title attribute for each image with the value matching its alt text.
*/
  (function () {
    const imgs = document.querySelectorAll("img");

    for (let photo of imgs) {
      photo.title = photo.alt;
    }

    for (let i = 0; i < imgs.length; i++) {
      const altText = imgs[i].alt;
      imgs[i].setAttribute("style", "border: solid red 5px");
    }
  })();
