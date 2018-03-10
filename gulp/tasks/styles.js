const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const postcss = require( 'gulp-postcss' );
const prefix = require( 'autoprefixer' );

gulp.task( 'styles', () => {
    return gulp.src( './style.scss' )
        .pipe( sass() )
        .pipe( postcss( [prefix] ) )
        .pipe( gulp.dest( './build/' ) );
} );
