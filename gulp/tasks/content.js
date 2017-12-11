const gulp = require('gulp');

gulp.task('content', () => {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./build/'));
});
