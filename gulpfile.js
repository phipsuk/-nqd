// Include all required gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
	  minifyHTML = require('gulp-minify-html'),
    fileInclude = require('gulp-file-include');


// Compile sass files, add prefixes and minify
gulp.task('styles', function() {
    return sass('src/scss/style.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});


// Compile and minify html files
gulp.task('html', function () {
  return gulp.src(['src/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src/partials/'
    }))
    .pipe(minifyHTML({
      empty: true,
	    spare: true
		}))
		.pipe(gulp.dest('build'))
});


gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['styles']);
});
