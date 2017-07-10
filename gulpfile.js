var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	uncss = require('gulp-uncss');

// Scripts Task
// Uglifies
/*gulp.task('scripts', function(){
});*/

// Styles Task
// Uglifies
gulp.task('styles', function(){
	gulp.src('assets/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('assets/css/'));
});

// CSS Minify Task
gulp.task('minify-css', function() {
	gulp.src('assets/css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('assets/css'))
})

//Removing unused CSS Task
// gulp.task('uncss-remove', function () {
// 	gulp.src('assets/css/*.css')
// 		.pipe(uncss({
// 			html: ['index.html'],
// 			ignore: ['.dropdown-menu']
// 		}))
// 		.pipe(gulp.dest('assets/dist'));
// });

gulp.task('default', ['styles', 'watch', 'minify-css']);

// Watch Task
// Watching SCSS and jScripts
gulp.task('watch', function(){
	gulp.watch('assets/css/*.css', ['minify-css']);
	//gulp.watch('assets/css/*.css', ['uncss-remove']);
	gulp.watch('assets/scss/**/*.scss', ['styles']);
});
