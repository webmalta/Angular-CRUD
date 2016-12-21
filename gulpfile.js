var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

var js = [
	'./node_modules/angular/angular.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './node_modules/jquery/dist/jquery.min.js',
	'./node_modules/bootstrap/dist/js/bootstrap.min.js'
];

gulp.task('server',function(){
	browserSync.init({
		files: [
            "./css/**",
            "./js/**",
            "*.html",
        ],
        server: {
            baseDir: './',
            index: './index.html'
        }
    	});
});


gulp.task('default', function(){
	gulp.src(js)
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('./dist/'));
});