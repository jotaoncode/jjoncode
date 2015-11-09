var gulp = require('gulp');

gulp.task('production', ['minify-css', 'uglify'], function () {
    gulp.start('replace');
});
