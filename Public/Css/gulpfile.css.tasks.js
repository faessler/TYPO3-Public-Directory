/*
 * CSS TASKS
 *
 * Task will:
 * - Compile scss into css files
 * - Import css files
 * - Prefixing css for older browsers
 * - Adding source maps referring to
 *   original scss files
 */



// DEPENDENCIES
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss'),
      atImport = require('postcss-import'),
      discardComments = require('postcss-discard-comments'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano');



// TASK
const CssDevelopment = () => {
    return gulp
        .src('./Css/src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
                includePaths: 'node_modules'
        }).on('error', sass.logError))
        .pipe(postcss([
            atImport(),
            autoprefixer({
                grid: true,
                browsers: ['last 1 version', 'not dead', '> 0.1%']
            })
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./Css'));
};
const CssProduction = () => {
    return gulp
        .src('./Css/src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: 'node_modules'
        }).on('error', sass.logError))
        .pipe(postcss([
            atImport(),
            discardComments({removeAll: true}),
            autoprefixer({
                grid: true,
                browsers: ['last 1 version', 'not dead', '> 0.1%']
            }),
            cssnano()
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./Css'));
};



// EXPORT
module.exports = {
    dev: CssDevelopment,
    prod: CssProduction
};