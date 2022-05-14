'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer =  require('gulp-autoprefixer');

 // Define tasks after requiring dependencies
function styleTask() {
  return (
      gulp
        .src(['node_modules/bootstrap/scss/bootstrap.scss','assets/sass/**/*.scss'])
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .on("error", sass.logError)
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false
      }))
        .pipe(gulp.dest("assets/css"))

  );
}

function jsTask(){
  return (
    gulp
      .src(["assets/scripts/*.js",])
      .pipe(uglify())
      .pipe(gulp.dest("assets/js"))
  );
}

function watch() {
  gulp.watch('assets/sass/**/*.scss', styleTask);
  gulp.watch('assets/scripts/**/*.js',jsTask);
}

exports.style = styleTask;
exports.jsTask = jsTask;
exports.watch = watch;

