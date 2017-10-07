"use strict";
/*
Now there is a lot of repetition here since I included two Gulpfiles into one
Normally I would ship this into separate projects, but do not want to send two separate repos.
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
    //For Express.js v.
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

// ====== End Express.js . ======
