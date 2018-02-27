![/preview.png]()


# ERWIN Starter Kit
**ERWIN SK** is a set of SCSS and JS code snippets that helps to start any web-project quickly and easily.


## Installation
1. First of all you need install the latest version of [node.js](https://nodejs.org/uk/)
2. Now you need to install all packages from dependencies list. Open command line and type **`npm install`**
3. Default path for CSS output locate in root folder. You can change this in **`gulpfile.js`** in line **`16`** - **`const path = './'`**


## How to use it
:warning: Notice! Run task only in folder, witch contain **`gulpfile.js`** otherwise you will get error.

1. Now you can run one of too task:
  - task **```gulp```** will run dev mode
  - task **```gulp build```** will run production mode witch compile your SCSS to minify CSS and add browser prefixes
2. You can stop any task via press **```Ctrl + C```**


## SCSS mixin
To use mixin, you need type in style block **```@include mixin-name();```**. Mixin may contain arguments (coma separated). Some of them contain default value (if not specify when mixin call, argument will take default value), other **`required`** and should be specify when mixin called.

:warning: If you wanna change some properties that starting from second one (for example duration from **`0.2`** to **`0.4`**), you need specify other arguments that came before current argument. 

**1. Transitions ```@include tr();```**
  - `$property` - default `all`
  - `$duration` - default: `0.2`
  - `$timing-function` - default: `ease-in-out`

**2. Font properties ```@include font-prop();```**
  - `$weight` - required*
  - `$size` - default: `16` (px converted to em)

*You need specify one of weight property from the list below (name, not number value):

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
**3. Equal block size ```@include size();``` or ```@include size-max();```**
  - `$width` - required*
  - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)
  - `$max-width` - default: `auto` (this argument available only for `size-max` mixin)
   
*You need specify one value witch will be set to both sides (width and height). 

**4. 16:9 ratio block size ```@include ratio-sn-land();``` or ```@include ratio-sn-port();```**
  - `$width` - required*
  - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

*You need specify width value and mixin will calculate height.
   
  `ratio-sn-land` mixin give you landscape block.
  `ratio-sn-port` make portrait block.

**5. 99:70 ratio (A4) block size ```@include ratio-a4-land();``` or ```@include ratio-a4-port();```**
  - `$width` - required*
  - `$unit` - default `px` (can be change to `vw`, `vh`, `%` or other)

*You need specify width value and mixin will calculate height.

  `ratio-a4-land` mixin give you landscape block.
  `ratio-a4-port` make portrait block.

**6. Clear float elements ```@include clear-fix();```**

Including this mixin to any selector will add pseudo-element `::after` with css-property `clear: both` (and couple others).

:warning: Note, that if parent selector has `display: flex`, pseudo-element `::after` will take his physic place. 

## SCSS functions
To use mixin, you need type in style block **`css-property: function-name();`**. Usually function have one `required` argument, witch must be specify when you call this function. Some functions have `optional` arguments, witch take default value if they not specify in function call (arguments are coma separated).

**1. Convert PX to EM or REM ```css-property: px-to-em();``` or ```css-property: px-to-rem();```**
  - `$pixels` - required*
  - `$context` - default `16` (can be change to set different base point value)

*You need specify number value (without unit) in brackets. In output you will get final value with `EM` or `REM` unit.

**2. Calculate block width (part from 100%) ```css-property: calc-width();```**
Set whole number as argument; in output you will get `100% / $number`

**3. Pick color from palette ```css-property: color();```**
Set color name as argument to get specific color. 

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

**4. Set `font-weight` property ```css-property: weight();```**
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

**5. Set `z-index` property ```css-property: z();```**
Set `z-index` name from the list above as argument. 
    
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
This argument can be use in different variation, for example `z-index: z(default) + 10`
