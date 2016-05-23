var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//var Message = require('./js/message.js').Message;

//browserify --------------------------------
gulp.task('jsBrowserify', ["concatBrowser"], function() {
  return browserify({ entries: ['./js/browser.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

//concat-----------------------------------
gulp.task('concatBrowser', function() {
  return gulp.src(['./js/browser.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//clean tasks
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

//build tasks
var buildProduction = utilities.env.production;
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});


//minification
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

// //gulp task test
// gulp.task('messageTest', function() {
//   var ourEmail = new Message("Subject", "Obama", "Me", "Thanks!");
//   console.log(ourEmail.read());
// });
