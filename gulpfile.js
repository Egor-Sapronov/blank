var gulp = require('gulp'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    gulpif = require('gulp-if'),
    jshint = require('gulp-jshint'),
    del = require('del'),
    paths = {
        src: './src/',
        dist: './dist/',
        vendor: './vendor/',
        assets: './src/assets/'
    };


gulp.task('clean', function () {
    del([paths.dist + '**']);
});

gulp.task('jade', function () {
    return gulp.src(paths.assets + 'templates/**/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(paths.dist + 'assets/templates'));
});
