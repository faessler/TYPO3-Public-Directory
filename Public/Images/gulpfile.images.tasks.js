/*
 * IMAGES TASKS
 *
 * Tasks will:
 * - Set max width and height to 4096 PX (4K resolution)
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
        .src('./Images/src/**/*.{jpg,jpeg,png,gif}')
        .pipe(gm(function (gmfile) {
            return gmfile
                .geometry(4096, 4096, '>')
                .quality(80)
                .interlace('line');
        }, {
            imageMagick: true
        }))
        .pipe(gulp.dest('./Images'));
};

const svg = () => {
    return gulp
        .src('./Images/src/**/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('./Images'));
};



// EXPORT
module.exports = gulp.parallel(common, svg);