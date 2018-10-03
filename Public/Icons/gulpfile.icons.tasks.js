/*
 * ICONS TASKS
 *
 * Tasks will:
 * - Set width and height of common formats
 *   (e.g. jpg, png, ...) to 64px
 * - Lower quality to 80%
 * - Set interlacing scheme to interlaced/progressive
 * - Minify and optimize the svg files
 */



// DEPENDENCIES
const gulp = require('gulp');
const gm = require('gulp-gm');
const svgmin = require('gulp-svgmin');



// TASKS
const common = () => {
    return gulp
        .src('./Icons/src/**/*.{jpg,jpeg,png,gif}')
        .pipe(gm(function (gmfile) {
            return gmfile
                .geometry(64, 64, '!')
                .quality(80)
                .interlace('line');
        }, {
            imageMagick: true
        }))
        .pipe(gulp.dest('./Icons'));
};

const svg = () => {
    return gulp
        .src('./Icons/src/**/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('./Icons'));
};



// EXPORT
module.exports = gulp.parallel(common, svg);