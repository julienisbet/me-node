var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');

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

gulp.task('build', function(callback){
    runSequence('clean', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);