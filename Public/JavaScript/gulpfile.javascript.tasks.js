/*
 * JAVASCRIPT TASK
 *
 * Task will:
 * - Import and require all files into one
 * - Transform ES2015 javascript into browser
 *   understandable ES5 javascript
 * - Adding source maps referring to
 *   original javascript files
 */



// DEPENDENCIES
const gulp = require('gulp');
const named = require('vinyl-named');
const gulpWebpack = require('webpack-stream');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



// TASK
const JavaScriptDevelopment = () => {
    return gulp
        .src('./JavaScript/src/*.js')
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader?cacheDirectory=true',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            mode: 'development',
            devtool: 'cheap-module-source-map'
        }))
        .pipe(gulp.dest('./JavaScript'));
};
const JavaScriptProduction = () => {
    return gulp
        .src('./JavaScript/src/*.js')
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            optimization: {
                minimizer: [
                    new UglifyJsPlugin({
                        sourceMap: true,
                        uglifyOptions: {
                            output: {
                                comments: false
                            }
                        }
                    })
                ]
            },
            mode: 'production',
            devtool: 'source-map'
        }))
        .pipe(gulp.dest('./JavaScript'));
};



// EXPORT
module.exports = {
    dev: JavaScriptDevelopment,
    prod: JavaScriptProduction
};