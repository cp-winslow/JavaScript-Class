/*Create an object that models sample.html
(i.e. the object should contain all the details
about the html, tags, attributes, content and etc.).*/

const htmlDom = {
  childNodes: {
    0: {
      childNodes: {
        0: { charSet: "UTF-8", tagName: "meta", },
        1: { tagName: "title", textContent: "A sample page" }
      },
      tagName: "head",
    },
    1: {
      childNodes: {
        0: {
          childNodes: {
            0: {
              className: "headline",
              style: {
                textTransform: "uppercase",
              },
              tagName: "h1",
              textContent: "Lorem ipsum"
            },
            1: {
              tagName: "p",
              textContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          },
          tagName: "div",
        },
        1: { tagName: "script" }
      },
      tagName: "body",
    }
  },
  lang: "en-US",
  tagName: "html",
};
