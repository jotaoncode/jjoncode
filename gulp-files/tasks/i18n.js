var changed    = require('gulp-changed'),
    gulp       = require('gulp'),
    config     = require('../config').i18n;

gulp.task('i18n', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
