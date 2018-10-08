/*
 * IMPORT
 *
 * Get dependencies gulp & browserSync
 * and gulp files with tasks of their area.
 */

// Gulp
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Files with tasks
const Css = require('./Css/gulpfile.css.tasks');
const JavaScript = require('./JavaScript/gulpfile.javascript.tasks');
const Images = require('./Images/gulpfile.images.tasks');
const Icons = require('./Icons/gulpfile.icons.tasks');



/*
 * TASKS
 *
 * Define gulp tasks which can be executed via
 * the command prompt, e.g. '$ gulp css'.
 */

// Watcher
gulp.task('watcher', () => {
    gulp.watch('./Css/src/**/*.scss', Css.dev);
    gulp.watch('./JavaScript/src/**/*.js', JavaScript.dev);
    gulp.watch('./Images/src/**/*.{jpg,jpeg,png,gif,svg}', Images);
    gulp.watch('./Icons/src/**/*.{jpg,jpeg,png,gif,svg}', Icons);
});

// Additional
gulp.task('css', Css.prod);
gulp.task('js', JavaScript.prod);
gulp.task('img', Images);
gulp.task('icon', Icons);

// Browser Sync
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "fooBar.lo",
        files: [
            "Css/frontend.css",
            "JavaScript/frontend.js"
        ],
        open: false,
        notify: false,
        localOnly: true
    });
});

// Development Server
gulp.task('server',
    gulp.series(
        gulp.parallel(Css.dev, JavaScript.dev, Images, Icons),
        gulp.parallel('watcher', 'browser-sync')
    )
);

// Development
gulp.task('default',
    gulp.series(
        gulp.parallel(Css.dev, JavaScript.dev, Images, Icons),
        'watcher'
    )
);

// Production
gulp.task('build', gulp.parallel(Css.prod, JavaScript.prod, Images, Icons));