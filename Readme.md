[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/banner-obama-scotus?style=flat-square)](/LICENSE.txt)
# Obama and SCOTUS Nominees

Interactive gallery of Barack Obama's history with Supreme Court nominees.

## Project Screen Shots

![screen shot of project](/screenshots/obama-scotus-screenshot1.jpg)

![screen shot of project](/screenshots/obama-scotus-screenshot2.jpg)

![screen shot of project](/screenshots/obama-scotus-screenshot3.jpg)

![screen shot of project](/screenshots/obama-scotus-screenshot4.jpg)

## Installation and Setup Instructions

(1) This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions. (2) Images in this repo are slightly larger in size than needed. They can be scaled to optimize loading.

## Reflection

I wanted to build a component that lets users view a brief, visually appealing, gallery of Barack Obama's history with Supreme Court nominees. Before coding, I needed to gather information, write accurate descriptions, and find photographs that I could legally use. I initially planned on using a lot of CSS animation. I wanted to fade text in and out, have it scale bigger/smaller, and float over images on the screen. This did not work very well. The transformations often looked tacky. Also, on smaller screens, there was little room to roam and the text obscured most of the photo. After experimenting, I decided "less was more" and used only a tiny bit of animation to slowly fade icons into view. Other challenges were keeping the "scenes" in the gallery a uniform height as some had more text to display than others. I solved this using various flexbox combinations and vh (viewport height) units. Lastly, I had a lot of text. I wanted to store it in objects and retrieve it when needed. But I also wanted to adhere to JSLint's 80 character line limit. To do this, I broke the text into multiple lines and used the join() method to bring them together. 


## Acknowledgments

* Supreme Court history from [Wikipedia](https://www.wikipedia.org).
* Photos from numerous sources. Details in [Notes](https://github.com/seankelliher/obama-scotus/blob/master/notes.txt).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends). Icons from Material Design as well.
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).