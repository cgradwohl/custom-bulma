const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require("gulp-rename");
const package = require('./package.json');

gulp.task('styles', () => {
  return gulp.src('./styles/main.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(postcss([ autoprefixer() ]))
    // Minify the file
    .pipe(csso())
    // rename swag
    .pipe(rename(`${package.APP_NAME}.min.css`))
    // Output
    .pipe(gulp.dest('./dist'))
});

gulp.task('clean', () => del(['dist']));