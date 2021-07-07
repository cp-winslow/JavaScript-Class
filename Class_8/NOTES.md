# Class 8

## Assignments

1. (3 pts) Open sample.html in a browser and from DOM panel, find h1 path. Using full path assign different value to its [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property.

2. (5 pts) Using [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) get h1 content and set it to be uppercase.

## Homework

1. (11 pts) Create an object that models sample.html (i.e. the object should contain all the details about the html, tags, attributes, content and etc.).

## Notes

const someRandomObj = {
  name: "I am Object",
  nestedObj: {
    key: 5;
    tag: "x";
  };
}

someRandomObj["name"];
someRandomObj.nestedObj.key;

Typing window into Browser Console shows all object on an HTML page.

<div class="xy"></div>

const myDiv = document.querySelector(".xy");

document.querySelectorAll("");

myDiv.textContent = "Hello World!";
