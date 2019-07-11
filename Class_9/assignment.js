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
