# Class C

## Assignments

1. (11 pts) Fork [node-js-demo](https://github.com/Kilavagora/node-js-demo). Add a script to index.html that uses [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to get the weather data from weather.json and then displays it. Push to your node-js-demo fork. Deploy your application to heroku to test it. Once it is working, copy index.html and push as index-xhr.html to your assigments branch for this class.

## Homework

1. (5 pts) Repeat the assignment, but use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead. Once it is working, copy index.html and push as index-fetch.html to yout homework branch for this class.

## Notes
### Intro to AJAX

Two main ways to retrieve data:

#### Method 1

const xhr = new XMLHttpRequest();

xhr.onload = function(e) {
  if(this.status === 200) {
    console.log(this.responseText);
  }
};

xhr.open("GET", "/api/weather");
xhr.send();

#### Method 2

fetch("/endpoint").
  .then(res => {
    return res.text;
  })
  .then(data => {
    console.log(data);
  });
