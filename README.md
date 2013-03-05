# Whitman

Whitman is a simple HTML5 Markdown editor. It was designed to be easy to use and provide a live preview. As you input markdown, Whitman will immediately output HTML.

Built using:
   * [node.js](http://nodejs.org/)
   * [express.js](http://expressjs.com/)
   * [backbone.js](http://backbonejs.org/)
   * [marked.js](https://github.com/chjj/marked)

## Notes
The active markdown docment is saved to the user's session. You can easily introduce more permanent storage by fleshing out the `GET` and `POST` handlers for the /document route.

The current stylesheet uses the CSS flexible box layout (flexbox). The [flexbox spec](http://dev.w3.org/csswg/css3-flexbox/) is not complete and is continuously changing. Whitman will only display correctly in the latest versions of Chrome and Safari.

Marked.js defaults to [Github Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) with line-breaks turned on. The options are set in the document output view.

## License

The MIT License (MIT)

Copyright (c) 2013 Memo Sanchez &lt;memo.sanchez@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.