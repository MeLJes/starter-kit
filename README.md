# ERWIN Starter Kit

![ERWIN Starter Kit](/preview.png)

`ERWIN Starter Kit` is a set of SCSS and JS code snippets that helps to start any web-project quickly and easily.

## Installation

> Make sure you have installed the latest LTS or Current version of [Node.js](https://nodejs.org/)

```bash
npm install
```

Change the `ROOT` constant in `gulpfile.js` to path where you want to keep your `.scss` and `.css` files. Default is `./`

## How to use it

### `npm start`

Runs the app in development mode. CSS files includes source-maps which help to debug SCSS in browser.

### `npm run build`

Compiles SCSS to CSS for production to the `css` folder. Styles are autoprefixed.

---

### SCSS mixin

To use mixins just type in `@include mixin-name()`.

Mixin may contain comma separated arguments. Some of them contains default value which will be used if no one was specified, other arguments are **required** and should be specify when mixin is called.

> :warning: If you want to pass only second or third argument, you have to pass the first one too. Otherwise it won't work. E.g. to pass duration as a second argument you can use `@include tr(all, 0.4)`.

1. Transitions `@include tr()`
    * `$property` - default `all`
    * `$duration` - default: `0.2`
    * `$timing-function` - default: `ease-in-out`

2. Font properties `@include font-prop()`
    * `$weight` - **required**
    * `$size` - default: `16` (`px` converted to `em`)

    > You need to specify one of weight property from the list below (name, not number value):

    ```scss
    $weights: (
      light: 300,
      regular: normal,
      medium: 500,
      semi-bold: 600,
      bold: 700,
      extra-bold: 800,
      black: 900
    );
    ```
3. Equal block size `@include size()` or `@include size-max()`
    * `$width` - **required**
    * `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)
    * `$max-width` - default: `auto` (this argument available only for `size-max` mixin)
   > You need to specify one value which will be set to both sides (width and height).

4. 16:9 ratio block size `@include ratio-sn-land()` or `@include ratio-sn-port()`
    * `$width` - **required**
    * `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

    > You need to specify width value and mixin will calculate height.

    `ratio-sn-land` mixin give you landscape block.

    `ratio-sn-port` make portrait block.

5. 99:70 ratio (A4) block size `@include ratio-a4-land()` or `@include ratio-a4-port()`
    * `$width` - **required**
    * `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

    > You need specify width value and mixin will calculate height.

    `ratio-a4-land` mixin give you landscape block.
    `ratio-a4-port` make portrait block.

6. Clear float elements `@include clear-fix()`
    Including this mixin to any selector will add pseudo-element `::after` with css-property `clear: both` (and couple others).

    > :warning: Note, that if parent selector has `display: flex`, pseudo-element `::after` will take all of his physical space.

### SCSS functions

To use functions just type `css-property: function-name()`. Usually functions have only one argument which is **required**. Some functions have `optional` arguments. If you don't pass them, default values will be used.

1. Convert PX to EM or REM `css-property: px-to-em()` or `css-property: px-to-rem()`
    * `$pixels` - **required**
    * `$context` - default `16`

    > You need to specify a value (without units). You will get the value with `EM` or `REM` unit.

2. Calculate block width (part from 100%) `css-property: calc-width()`
    Pass integer as an argument. It simply calculates `100% / $number`.

3. Pick color from palette `css-property: color()`
    Pass color name as argument to get desired color.

    ```scss
    $colors: (
      // --- Main
      default: #FA6ACC,
      primary: #F02A52,
      secondary: #09A6E4,

      // --- Additional
      white: #ffffff,
      black: #000000,
      gray: #dedede,

      // --- Alerts
      success: #b1d845,
      warning: #ffeaa7,
      error: #e41c1c
    );
    ```
4. Set `font-weight` property `css-property: weight()`
    Set weight name as argument to set `font-weight`.

    ```scss
    $weights: (
      light: 300,
      regular: normal,
      medium: 500,
      semi-bold: 600,
      bold: 700,
      extra-bold: 800,
      black: 900
    );
    ```
5. Set `z-index` property `css-property: z()`
    Pass `z-index` name from the list above as an argument.

    ```scss
    $z-layers: (
      // --- Main
      back: -1,
      base: 0,
      default: 1,

      // --- Additional
      overlay: 999,
      extended: 9999
    );
    ```
    This argument can be used in different variation, for example `z-index: z(default) + 10`
