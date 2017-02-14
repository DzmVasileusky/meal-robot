'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec;

// scripts
gulp.task('scripts', function() {
  return gulp.src(['assets/js/src/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('assets/js'));
});

// styles
gulp.task('styles', function() {
  return gulp.src('assets/css/src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'Android 3', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
      cascade: false
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(csso())
    .pipe(sourcemaps.write('/'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css/'));
});

// default task
gulp.task('watch', function() {
  gulp.watch(['assets/js/src/*.js'], ['scripts']);
  gulp.watch(['assets/css/src/*.scss', 'assets/css/src/**/*.scss', 'assets/css/src/**/**/*.scss'], ['styles']);
  exec('node app.js');
});

gulp.task('default', [ 'styles', 'scripts' ]);