var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('clean', function(){
    return del('public/dist')
});

var jsNPMDependencies = [
    'core-js/client/shim.min.js',
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js'
];

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    // var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
    //     .pipe(gulp.dest('public/dist/libs'))
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('index.html')
        .pipe(gulp.dest('public/dist'))
	
	var copyTemplates = gulp.src('app/templates/*')
        .pipe(gulp.dest('public/dist/app/templates'))


    return [copyIndex, copyTemplates];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src(['app/*.ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('public/dist/app'))
});

gulp.task('build:less', function () {
  return gulp.src('./app/less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/less/app.less', ['build']);
    gulp.watch('./app/*.ts', ['build']);
});

gulp.task('build', function(callback){
    runSequence('clean', 'build:index', 'build:app', 'build:less', callback);
});

gulp.task('default', ['build', 'watch']);