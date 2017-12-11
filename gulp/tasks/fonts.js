const gulp = require('gulp');

gulp.task('fonts', () => {
  return gulp.src('./fonts/**/*')
    .pipe(gulp.dest('./build/fonts/'));
});
