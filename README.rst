=======================
Tutorial
=======================


安装
-----

#. 安装node.js
	
	packages/node-v0.10.29-x64.msi

#. 安装cordova和ionic

	$ npm install -g cordova ionic

#. 新建项目

	$ ionic start myApp tabs

#. 安装gulp

	cd myApp

	npm install -g gulp

	npm install

	gulp

#. web服务器，并且配置自动刷新livereload

	npm install gulp-connect

#. 修改gulpfile.js文件::

	var gulp = require('gulp');
	var concat = require('gulp-concat');
	var sass = require('gulp-sass');
	var minifyCss = require('gulp-minify-css');
	var rename = require('gulp-rename');
	var connect = require('gulp-connect');
	  
	var paths = {
	  sass: ['./scss/**/*.scss']
	};
	  
	gulp.task('sass', function(done) {
	  gulp.src('./scss/ionic.app.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('./www/css/'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('./www/css/'))
	    .on('end', done);
	});
	  
	gulp.task('watch', function() {
	  gulp.watch(paths.sass, ['sass']);
	  gulp.watch(['./www/*.html'], ['html']);
	});
	  
	gulp.task('connect', function() {
	  connect.server({
	    root: 'www',
	    livereload: true
	  });
	});
	 
	gulp.task('html', function () {
	  gulp.src('./www/*.html')
	    .pipe(connect.reload());
	});
	 
	gulp.task('default', ['connect','sass','watch']);

#. 命令行输入：gulp，在浏览器中http://localhost:8080/www/观看效果

#. 安装jdk，并配置环境变量，JAVA_HOME

#. 下载android sdk，ANDROID_HOME, PATH=platform-tools;tools

#. 下载ant，并配置环境变量, ANT_HOME, PATH=%ANT_HOME%\bin