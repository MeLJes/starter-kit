![ERWIN Starter Kit](/preview.png)

# ERWIN Starter Kit

**ERWIN SK** is a set of SCSS and JS code snippets that helps to start any web-project quickly and easily.

## Installation

> Make sure you have installed the latest LTS or Current version of [Node.js](https://nodejs.org/)

Run it in terminal in the root folder

```bash
npm install
```

## How to use it

**`gulp`**

Runs the app in development mode. CSS files include source-maps which help to debug SCSS in browser. BrowserSync on.

**`gulp build`**

Compiles SCSS to CSS for production to the `css` folder. Styles are autoprefixed. Concat and minify all JS files.

---

### SCSS mixins

**`@include font(size, weight, gradient);`** — set font size & weight. Pass third parameter as 'gradient' to add CSS rules for gradient support.

**`include flex(display, justify-content, align-items, direction, wrap);`** — set element flex properties.

**`@include touch(property);`** — set pointer-events and user-select CSS properties.

**`@include position(index, position, top, right, bottom, left, unit);`** — set element z-index and position.

**`@include padding(top, right, bottom, left, unit);`** — set element paddings.

**`@include centering-flex;`** — centering element with flex properties.

**`@include centering-position(index);`** — centering element with position and transform properties.

**`@include tr(property, duration, timing-function);`** — transitions.

**`@include width(width, unit, max-width, unit);`** — set element width and max-width.

**`@include square(width, unit);`** — set equal width & height.

**`@include square-max(width, max-width, unit);`** — set equal width, height, max-width & max-height.

**`@include ratio-sn-land(width, unit);`** — set 16:9 ratio (Landscape).

**`@include ratio-sn-port(width, unit);`** — set 16:9 ratio (Portrait).

**`@include ratio-a4-land(width, unit);`** — set 99:70 ratio (A4, Landscape).

**`@include ratio-a4-port(width, unit);`** — set 99:70 ratio (A4, Portrait).

**`@include scrollbar(scroll, panel);`** — change scroll bar colors.

**`@include placeholder(color, size, weight);`** — change input placeholder style.

**`@include placeholder-remove(color);`** — remove placeholder on click.

**`@include input-autofill;`** — change autofill color.

**`@include clearfix;`** — add clearfix for floating elements.

---

### SCSS functions

**`px-to-rem() | px-to-em()`** — convert PX to EM or REM.

**`color()`** — pick color from palette.

**`weight()`** — set `font-weight` property.

**`z()`** — set `z-index` property.

**`breakpoint()`** — set `breakpoint` name from the list below as an argument. Number value will converted to REM.

> `@media screen and (min-width: breakpoint(point)) { code }`

> `@media screen and (min-width: breakpoint(point)) and (max-width: breakpoint(point)) { code }`

> Responsive library [mq() SASS mixin](https://github.com/sass-mq/sass-mq)
