[![Build Status](https://secure.travis-ci.org/suisho/bespoke-printable-bullets.png?branch=master)](https://travis-ci.org/suisho/bespoke-printable-bullets)

# bespoke-printable-bullets

Clone section which use bullete

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/suisho/bespoke-printable-bullets/master/dist/bespoke-printable-bullets.min.js
[max]: https://raw.github.com/suisho/bespoke-printable-bullets/master/dist/bespoke-printable-bullets.js

## Usage

First, include both `bespoke.js` and `bespoke-printable-bullets.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.from('article', {
  printableBullets: true
});
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
