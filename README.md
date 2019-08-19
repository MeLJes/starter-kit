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

### SCSS mixins

**`@include font(size, weight, gradient);`**

Set font size & weight. Pass third parameter as 'gradient' to add CSS rules for gradient support.

**`include flex(display, justify-content, align-items, direction, wrap);`**

Set element flex properties.

**`@include touch(property);`**

Set pointer-events and user-select CSS properties.

**`@include position(index, position, top, right, bottom, left, unit);`**

Set element z-index and position.

**`@include padding(top, right, bottom, left, unit);`**

Set element paddings.

**`@include centering-flex;`**

Centering element with flex properties.

**`@include centering-position(index);`**

Centering element with position and transform properties.

**`@include tr(property, duration, timing-function);`**

Transitions.

**`@include width(width, unit, max-width, unit);`**

Set element width and max-width.

**`@include square(width, unit);`**

Set equal width & height.

**`@include square-max(width, max-width, unit);`**

Set equal width, height, max-width & max-height.

**`@include ratio-sn-land(width, unit);`**

Set 16:9 ratio (Landscape).

**`@include ratio-sn-port(width, unit);`**

Set 16:9 ratio (Portrait).

**`@include ratio-a4-land(width, unit);`**

Set 99:70 ratio (A4, Landscape).

**`@include ratio-a4-port(width, unit);`**

Set 99:70 ratio (A4, Portrait).

**`@include scrollbar(scroll, panel);`**

Change scroll bar colors.

**`@include placeholder(color, size, weight);`**

Change input placeholder style.

**`@include placeholder-remove(color);`**

Remove placeholder on click.

**`@include input-autofill;`**

Change autofill color.

**`@include clearfix;`**

Add clearfix for floating elements.

---

### SCSS functions

**`px-to-rem() | px-to-em()`** — convert PX to EM or REM.

**`color()`** — pick color from palette.

**`weight()`** — set `font-weight` property.

**`z()`** — set `z-index` property.

**`breakpoint()`** — set `breakpoint` name from the list below as an argument. Number value will converted to rem.

> `@media screen and (min-width: breakpoint(point)) { code }`

> `@media screen and (min-width: breakpoint(point)) and (max-width: breakpoint(point)) { code }`

> Responsive library [mq() SASS mixin](https://github.com/sass-mq/sass-mq)

---

### HTML markup and JS code snippets

> Default HTML markup

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Title</title>

    <link rel="icon" href="icons/favicon.png" type="images/x-icon" />
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>
  </body>
</html>
```

1. Back to top button

    > Add this snippet after `footer` section before scripts links

    ```html
    <button type="button" class="back-to-top">
      <svg>
        <use xlink:href="#svg-arrow-top"></use>
      </svg>
    </button>
    ```

    ```javascript
    function backToTop() {
      var offset = 300,
          offset_opacity = 1200,
          scroll_top_duration = 700,
          $back_to_top = $('.back-to-top');

      $(window).scroll(function(){
        $(this).scrollTop() > offset
          ? $back_to_top.addClass('btt-is-visible')
          : $back_to_top.removeClass('btt-is-visible btt-fade-out');

        if( $(this).scrollTop() > offset_opacity ) {
          $back_to_top.addClass('btt-fade-out');
        }
      });

      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, scroll_top_duration);
      });
    }
    ```

2. Dropdown list

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

    ```javascript
    function dropdown() {
      if ($('.js-dropdown').length) {
        var $html = $('html');

        $html.on('click.ui.dropdown', '.js-dropdown', function (e) {
          e.preventDefault();
          $('.js-dropdown').not($(this)).each(function () {
            $(this).removeClass('is-open');
          });
          $(this).toggleClass('is-open');
        });

        $html.on('click.ui.dropdown', '.js-dropdown_item', function (e) {
          e.preventDefault();
          console.log('--');
          setTimeout(function () {
            $('.js-dropdown').each(function () {
              $(this).removeClass('is-open');
            });
          }, 100);
        });

        $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function (e) {
          e.preventDefault();
          var $item = $(this);
          var $dropdown = $item.parents('.js-dropdown');
          $dropdown.find('.js-dropdown_input').val($item.data('dropdown-value'));
          $dropdown.find('.js-dropdown_current').html($item.html());
        });

        $html.on('click.ui.dropdown', function (e) {
          var $target = $(e.target);
          if (!$target.parents().hasClass('js-dropdown')) {
            $('.js-dropdown').removeClass('is-open');
          }
        });
      }
    }
    ```

3. Item counter

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

    ```javascript
    function itemCounter(elem, minus, plus) {
      if ( $(elem).length ) {
        $(minus).click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });

        $(plus).click(function() {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
      }
    }
    ```

4. Modal

    > `remodal.min.css` and `remodal-default-theme.min.css` files **required**

    > `remodal.min.js` file **required**

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

    > Include this `robots.txt` to prevent indexing by search robots

    ```html
    User-agent: *
    Disallow: /
    ```
