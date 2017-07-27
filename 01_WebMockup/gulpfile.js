// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
    gulp.src('./assets/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
});
