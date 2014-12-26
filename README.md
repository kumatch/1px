1px
===========

A 1 pixel transparent image.

[![Build Status](https://travis-ci.org/kumatch/1px.png?branch=master)](https://travis-ci.org/kumatch/1px)


Install
--------

    $ npm install 1px


Example
--------

```javascript
var px = require("1px");

console.log( px.gif );   // "data:image/gif;base64,R0lGODlhAQABAI..."
console.log( px.png );   // "data:image/png;base64,iVBORw0KGgoAAA..."
console.log( "1px data is %s", px );   // return 1 pixel transparent gif
```

for JSX.

```javascript
<img src={px} />
```


License
--------

Licensed under the MIT License.

Copyright (c) 2014 Yosuke Kumakura

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
