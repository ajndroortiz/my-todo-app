const gulp    = require( 'gulp' );
const cssNano = require( 'cssnano' );
const sass    = require( 'gulp-sass' );
const postcss = require( 'gulp-postcss' );
const prefix  = require( 'autoprefixer' );
const uglify  = require( 'gulp-uglify' );

gulp.task( 'uglify', () => {
    return gulp.src( './build/js/app.bundle.js' )
        .pipe( uglify() )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'cssMin', () => {
    return gulp.src( './style.scss' )
        .pipe( sass() )
        .pipe( postcss( [prefix, cssNano] ) )
        .pipe( gulp.dest( './dist/' ) );
} );

gulp.task( 'fontMove', () => {
    return gulp.src( './build/fonts/**/*' )
        .pipe( gulp.dest( './dist/fonts/' ) );
} );

gulp.task( 'contentMove', () => {
    return gulp.src( './build/**/*.html' )
        .pipe( gulp.dest( './dist/' ) );
} );

gulp.task( 'build', ['uglify', 'cssMin', 'fontMove', 'contentMove'] );
