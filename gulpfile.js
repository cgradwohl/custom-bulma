const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('styles', () => {
  return gulp.src('./public/styles/main.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(postcss([ autoprefixer() ]))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist'))
});

gulp.task('clean', () => del(['dist']));