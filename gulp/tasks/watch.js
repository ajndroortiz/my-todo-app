const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './build/'
    }
  });

  gulp.watch('./*.html', () => {
    gulp.start('contentMove');
  });

  gulp.watch('./scripts/**/*.js', () => {
    gulp.start('jsInject');
  });

  gulp.watch('./**/*.scss', () => {
    gulp.start('styleInject');
  });
});

gulp.task('contentMove', ['content'], () => {
  browserSync.reload();
});

gulp.task('styleInject', ['styles'], () => {
  return gulp.src('./build/style.css')
    .pipe(browserSync.stream());
});

gulp.task('jsInject', ['scripts'], () => {
  browserSync.reload();
});
