var gulp = require('gulp')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename');
var uglify = require('gulp-uglify')

gulp.task('build-js', function() {
  return gulp.src("./javascript/diff_match_patch_uncompressed.js")
    .pipe(plumber())
    .pipe(uglify().on('error', console.log))
    .pipe(rename('diff_match_patch.js'))
    .pipe(gulp.dest("./javascript/"))
})

gulp.task('build', ['build-js'], function() {})
