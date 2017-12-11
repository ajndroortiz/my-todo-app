const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssNano = require('cssnano');
const prefix = require('autoprefixer');

gulp.task('styles', () => {
  return gulp.src('./style.scss')
    .pipe(sass())
    .pipe(postcss([prefix, cssNano]))
    .pipe(gulp.dest('./build/'));
});
