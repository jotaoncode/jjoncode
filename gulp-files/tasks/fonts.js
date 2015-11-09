var  changed    = require('gulp-changed'),
     gulp       = require('gulp'),
     config     = require('../config').fonts;

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
