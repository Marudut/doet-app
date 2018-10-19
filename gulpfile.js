var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    // content
    gulp.src('scss/styleguide.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
      .pipe(gulp.dest('css/'));
});

gulp.task('default', function() {
    // content
    gulp.watch('scss/styleguide.scss', ['sass']);
});