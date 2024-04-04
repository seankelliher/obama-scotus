[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/banner-obama-scotus?style=flat-square)](/LICENSE.txt)
# Obama and Supreme Court Nominees

Gallery of Senator and President Barack Obama's history with Supreme Court nominees, built with Vue.js. [View working component](https://sean-kelliher-obama-scotus.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shots

* President Obama and Justices (default view)
![screen shot of project](/screenshots/obama-scotus-screenshot1.png?s=600)

* Justice Roberts
![screen shot of project](/screenshots/obama-scotus-screenshot2.png?s=600)

* Justice Sotomayor
![screen shot of project](/screenshots/obama-scotus-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

I set out to build a component that lets users learn about Barack Obama's history with Supreme Court nominees. Before designing and coding, I needed to gather information, write accurate descriptions, and find photographs that I could legally use. Once building, technical challenges included deciding how much animation to use; keeping images stationary when the amount of accompanying text differed with each scene; and passing WACG accessibility requirements where controls needed to function without a mouse. With animation, a few fades worked well; more animation looked excessive. For keeping images stationary, applying heights to specific elements worked well. Meeting WACG standards took numerous rounds of testing with Firefox's Developer Tools. Using tags such as button over figure and relying on a browser's native functionality proved a better route than manually adding attributes like "tabindex=0" and "keyup.enter."

## Acknowledgments

* Supreme Court history from [Wikipedia](https://www.wikipedia.org).
* Photos from numerous sources. Details in [NOTES.txt](https://github.com/seankelliher/obama-scotus/blob/master/NOTES.txt).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance and icons from Google's [Material Design](https://material.io/design).
* WACG guidance from [Firefox's Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/#).
* Shields from [Shields](https://shields.io).