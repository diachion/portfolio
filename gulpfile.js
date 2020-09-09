const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. Where is my scss?
    return gulp.src('./scss/global.scss')
    // 2. Compile CSS and minify it
    .pipe(sass({outputStyle: 'compressed'}))
    // 3. Choose Destination
    .pipe(gulp.dest('./css'))
    // 4. Update Browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        proxy: "http://portfolio.local/"
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
