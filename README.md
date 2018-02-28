![ERWIN Starter Kit](/preview.png)

# ERWIN Starter Kit

**ERWIN SK** is a set of SCSS and JS code snippets that helps to start any web-project quickly and easily.

## Installation

> Make sure you have installed the latest LTS or Current version of [Node.js](https://nodejs.org/)

Run it in terminal in the root folder

```bash
npm install
```

Change the `ROOT` constant in `gulpfile.js` to path where you want to keep your `.scss` and `.css` files. Default is `./`

## How to use it

**`npm start`**

Runs the app in development mode. CSS files include source-maps which help to debug SCSS in browser.

**`npm run build`**

Compiles SCSS to CSS for production to the `css` folder. Styles are autoprefixed.

---

### SCSS mixin

To use mixins just type in `@include mixin-name();`.

Mixin may contain comma separated arguments. Some of them contains default value which will be used if no one was specified, other arguments are **required** and should be passed when mixin is called.

> :warning: If you want to pass only second or third argument, you have to pass the first one too. Otherwise, it won't work. E.g. to pass duration as a second argument you can use `@include tr(all, 0.4);`.

1. Transitions **`@include tr();`**

    - `$property` - default `all`
    - `$duration` - default: `0.2`
    - `$timing-function` - default: `ease-in-out`

        > The rest values are specified by separate rules.

2. Inputs placeholder style **`@include placeholder();`**

    - `$color` - default: `default`
    - `$font-size` - default: `16` (px converted to em)
    - `$font-weight` - default: `regular`

        > This mixin contains 4 prefixes for old browser supporting.

3. Equal block size **`@include size();`** or **`@include size-max();`**

    - `$width` - **required**
    - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)
    - `$max-width` - default: `auto` (this argument available only for `size-max` mixin)

      > You need specify one value witch will be set to both sides (width and height).

4. 16:9 ratio block size **`@include ratio-sn-land();`** or **`@include ratio-sn-port();`**

    - `$width` - **required**
    - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

      > You need specify width value and mixin will calculate height.

      > `ratio-sn-land` mixin give you landscape block.

      > `ratio-sn-port` make portrait block.

5. 99:70 ratio (A4) block size **`@include ratio-a4-land();`** or **`@include ratio-a4-port();`**

    - `$width` - **required**
    - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

      > You need specify width value and mixin will calculate height.

      > `ratio-a4-land` mixin give you landscape block.

      >`ratio-a4-port` make portrait block.

6. Font properties **`@include font-prop();`**

    - `$weight` - **required**
    - `$size` - default: `16` (px converted to em)

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

7. Clear float elements **`@include clearfix;`**

    Including this mixin to any selector will add pseudo-element `::after` with css-property `clear: both` (and couple of others).

      > :warning: Note, that if parent selector has `display: flex`, pseudo-element `::after` will take all of his physical space.

8. Remove placeholder on action **`@include placeholder-remove;`**

9. Remove input autofill color **`@include input-autofill;`**

---

### SCSS functions

To use functions just type `css-property: function-name()`. Usually functions have only one argument which is **required**. Some functions have `optional` arguments. If you don't pass them, default values will be used.

1. Convert PX to EM or REM **`px-to-em()`** or **`px-to-rem()`**

    - `$pixels` - **required**
    - `$context` - default `16` (can be change to set different base point value)

      > You need to specify a value (without units). You will get the value with `EM` or `REM` units.

2. Calculate block width (part from 100%) **`calc-width()`**

    Pass integer as an argument. It simply calculates `100% / $number`.

3. Pick color from palette **`color()`**

    Pass color name as an argument to get desired color.

    ```scss
    $colors: (
      // --- Main
      default: #545454,
      primary: #828282,
      secondary: #b2b2b2,

      // --- Additional
      white: #ffffff,
      black: #000000,
      gray: #808080,

      // --- Alerts
      success: #b1d845,
      warning: #ffeaa7,
      error: #e41c1c
    );
    ```

4. Set `font-weight` property **`weight()`**

    Pass weight name as an argument to set `font-weight`.

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

5. Set `z-index` property **`z()`**

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

      > This argument can be used in different variations, for example `z-index: z(default) + 10`.

6. Set responsive breakpoint

    Pass `breakpoint` name from the list above as an argument. Number value will converted from px to em.

    ```scss
    $breakpoints: (
      zero: 0,
      extra-small: 480,
      extra-small-max: 767,
      small: 768,
      small-max: 991,
      medium: 992,
      medium-max: 1199,
      large: 1200,
      large-max: 1599,
      extra-large: 1600,
      extra-large: 1999,
      huge: 2000
    );
    ```

    > Base `min-width` markup ```@media screen and (min-width: #{  } ) { code }```

    > Base `min-width` and `max-width` markup ```@media screen and (min-width: #{  } ) and (max-width: #{  } ) { code }```

    > Responsive powered by [mq() SASS mixin](https://github.com/sass-mq/sass-mq)

---

### HTML markup and JS code snippets

> Default HTML markup.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Title</title>

    <!-- Favicon -->
    <link rel="icon" href="icons/favicon.png" type="images/x-icon" />
    <!-- Fonts -->
    <!-- Main -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>


    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>
  </body>
</html>
```

1. Back to top button

    > Add this snippet after `footer` section before scripts links. `back-to-top.js` file **required**.

    ```html
    <button type="button" class="back-to-top">
      <svg>
        <use xlink:href="#svg-arrow-top"></use>
      </svg>
    </button>
    ```

2. Dropdown list

    > `dropdown.js` file **required**.

    ```html
    <div class="default-dropdown">
      <div class="js-dropdown">
        <input type="hidden" name="Dropdown" id="Dropdown" class="js-dropdown_input">
        <span class="js-dropdown_current">Dropdown</span>
        <ul>
          <li class="js-dropdown_item" data-dropdown-value="Value-1">Value-1</li>
          <li class="js-dropdown_item" data-dropdown-value="Value-2">Value-2</li>
        </ul>
      </div><!-- .js-dropdown - END -->
    </div><!-- .default-dropdown - END -->
    ```

3. Item counter

    > `item-counter.js` file **required**.

    ```html
    <div class="items-counter">
      <button type="button" class="minus">
        <svg>
          <use xlink:href="#svg-minus"></use>
        </svg>
      </button><!-- .minus - END -->

      <input type="text" name="quantity" value="1" class="quantity"><!-- .quantity - END -->

      <button type="button" class="plus">
        <svg>
          <use xlink:href="#svg-plus"></use>
        </svg>
      </button><!-- .plus - END -->
    </div><!-- .items-counter - END -->
    ```

4. Modal

    > `remodal.min.css` and `remodal-default-theme.min.css` files **required**.

    > `remodal.min.js` file **required**.

    ```html
    <div class="remodal" data-remodal-id="remodal" data-remodal-options="hashTracking: false">
      <button data-remodal-action="close" class="remodal-close">
        <img src="icons/close.svg" alt="Icon" />
      </button>
    </div><!-- .remodal - END -->
    ```

---

#### Other stuff

1. Robots.txt

    > Include this `robots.txt` to prevent indexing by search robots.

    ```html
    User-agent: *
    Disallow: /
    ```
