# TYPO3 Public Directory Template

## Whats the template for
The template makes it easier for you to create/generate the public directory of a [TYPO3](https://typo3.org/) extension. It optimizes the public files you place in the respective `src` directories with several [Gulp](https://gulpjs.org/) tasks.

## [Benefits](#benefits)
- ***CSS***
    - Compile [SASS](https://sass-lang.com/) to CSS
    - [PostCSS Import](https://github.com/postcss/postcss-import)
    - [PostCss Discard Comments](https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-comments)
    - [PostCss Autoprefixer](https://github.com/postcss/autoprefixer)
    - [PostCSS cssnano](https://github.com/cssnano/cssnano)
    - External source map

- ***JavaScript***
    - Bundle JS with [webpack](https://webpack.js.org/)
    - Compile [ES2015](https://babeljs.io/docs/en/learn/)+ to browser understandable ES5 JS with [babel](https://babeljs.io/)
    - Compress JS with [UglifyJsPlugin](https://webpack.js.org/plugins/internal-plugins/#uglifyjsplugin)
    - External source map

- ***Images & Icons***
    - Image optimization with [GraphicsMagick](http://www.graphicsmagick.org/)
    - SVG optimization with [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin)

## [How to use](#how-to-use)
### Hierarchy
```
Public/
  BackendSkin/
  Css/
    src/
  Fonts/
  Icons/
    src/
  Images/
    src/
  JavaScript/
    src/
```

### Usage
#### CSS
All .scss files (e.g. app.scss) which are placed directly in the `src` directory will be compiled to CSS. The files and their inclusions will go through the procedure as described in the [Benefits](#benefits) > Css section.

A possible `Css` directory structure could look like this:
```
Css/
  src/
    components/
      _form.scss
      _button.scss
    app.scss -> Inclusions with @import
```

#### JavaScript
All .js files (e.g. app.js) which are placed directly in the `src` directory will be compiled via webpack. The files and their inclusions will go through the procedure as described in the [Benefits](#benefits) > JavaScript section.

A possible `JavaScript` directory structure could look like this:
```
JavaScript/
  src/
    components/
      _menu.js
      _lightbox.js
    app.js -> Inclusions with import ""; or require();
```

#### Images & Icons

### Gulp tasks

## [Customize](#customize)
