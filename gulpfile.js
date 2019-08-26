const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: './scss/**/*.scss',
    dest: 'css/'
  },
  scripts: {
    src: './js/**/*.js',
    dest: 'js/'
  }
};

// --- Default
function style() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
exports.style = style;
