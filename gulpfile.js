"use strict";
/*
This Gulp will have tasks suited only for the Vanilla version, due to the fact that
I will use the resulting minified scripts/styles as a
source files for the Express.js version, therefore there is no need for separate gulp files.

For clarity purposes I am not going to minify Express.js .pug templates since it is not a huge project
and there is no JS (yet).
 */

const gulp          = require('gulp'),
    uglify          = require('gulp-uglify'),
    useref          = require('gulp-useref'),
    gulpIf          = require('gulp-if'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    csso            = require('gulp-csso'),
    inlineSource    = require('gulp-inline-source');

const options = {
    src: 'src',
    dist: 'dist',
    //For future Express.js v.
    srcE: 'srcE',
    distE: 'distE',
};

// ====== For Vanilla v. ======

gulp.task('inlineSource',["useref"],function(){
    return gulp.src(options.dist+'/index.html')
        .pipe(inlineSource())
        .pipe(gulp.dest(options.dist));
});

//Images task, compression and moving
gulp.task('images',[], function() {
    return gulp.src(options.src + '/img/**/*+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest(options.dist + '/img'))
});
// For cleaning the dist folder
gulp.task('clean', function() {
    del([options.dist, options.src+'/css/styles.min.css',options.src+'/js/main.min.js',]);
});

// Useref task + minifying CSS and JS
gulp.task('useref',["images"], function(){
    return gulp.src(options.src +'/*.html')
        .pipe(useref())
        // Minifies only if it's a JS file
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', csso()))
        .pipe(gulp.dest(options.dist));
});

gulp.task("build", ['inlineSource'], function() {
    return gulp.src([],{ base: './'}).
    pipe(gulp.dest(options.dist));
});

gulp.task("default", ["clean"], ()=>{
    gulp.start('build');
});

// ====== End Vanilla v. ======

// ====== For Express.js v. ======
// To be continued.
// ====== End Express.js . ======
