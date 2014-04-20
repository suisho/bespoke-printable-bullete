[![Build Status](https://secure.travis-ci.org/suisho/bespoke-printable-bullets.png?branch=master)](https://travis-ci.org/suisho/bespoke-printable-bullets)

# bespoke-printable-bullets

Clone section which use bullete.

## Why this plugin?
If you must output pdf, but want use bespoke and bullets slide, this plugin is very helpful

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/suisho/bespoke-printable-bullets/master/dist/bespoke-printable-bullets.min.js
[max]: https://raw.github.com/suisho/bespoke-printable-bullets/master/dist/bespoke-printable-bullets.js

## Usage

First, include both `bespoke.js` and `bespoke-printable-bullets.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespokeBullets('article',"ul li", function(s,b){
  bespoke.from(s, {
    keys: true,
    touch: true,
  });
})
```

## Package managers

### Bower

```bash
$ bower install bespoke-printable-bullets
```

### npm

```bash
$ npm install bespoke-printable-bullets
```

The bespoke-printable-bullets npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-printable-bullets');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

Plugin run with before hook events.

Hello.
I tried to create plugin that modify sections before bespoke start hook event.
But currently cannot that.

Out of necessity, I implement this function as outside plugin. But that so dirty. :(

```js
beforeBespke('article', function(from){
  bespoke.from(from, {
    keys: true,
    touch: true,
  });
})
var beforeBespke = function(from, callback){
  // emulate bespoke from
  var parent = selectorOrElement.nodeType === 1 ? selectorOrElement : document.querySelector(selectorOrElement)
  var slides = [].filter.call(parent.children, function(el) { return el.nodeName !== 'SCRIPT'; })
  var deck = {
    slides : slides
  }

  //  :
  // do something modification to slide.
  // (This is a point want to plugin)
  //  :

  callback(from)
}
```

Please tell me if you have more good idea
