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
  },
  html: {
    src: './*.html',
    dest: './'
  }
};

// --- Default
function style() {
  return gulp.src(paths.styles.src, {sourcemaps: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// --- Watch
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
  gulp.watch(paths.scripts.src).on('change', browserSync.reload);
}

// --- Runs
exports.style = style;
exports.watch = watch;
