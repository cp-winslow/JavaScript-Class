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

    currentDiv[i].insertAdjacentElement("beforeEnd", newFigCaption);
  }
}) ();
