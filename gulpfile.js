var gulp = require('gulp'),
    connect = require('gulp-connect'),
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    imagemin = require('gulp-imagemin'),
    karma = require('gulp-karma');

var tsProject = ts.createProject('tsconfig.json');


/****************************************************************************
 * Server connection
 * */
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});


/****************************************************************************
 * Copy index html to dist/app
 * */
gulp.task('copy-html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-html2', function () {
    return gulp.src('src/app/*.html')
        .pipe(gulp.dest('dist/app'));
});


/****************************************************************************
    Compile ts files into tmp/scripts and concat them into dist/scripts
*/
gulp.task('tsToJs', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('tmp/scripts'));
});

// gulp.task('ngAnnotate', ['tsToJs'], function() {
//     return gulp.src('tmp/scripts/*.js')
//         .pipe(ngAnnotate())
//         .pipe(gulp.dest('tmp/scripts'));
// })

gulp.task('concat-scripts', ['tsToJs'], function () {
    return gulp.src([
        'tmp/scripts/src/app/app.js',
        'tmp/scripts/src/app/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/app'));
});


/****************************************************************************
 * Copy vendor libs into tmp/libs and concat them into dist/libs
 * */
gulp.task('copy-vendor', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/lodash/lodash.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js'

    ])
        //.pipe(uglify())
        .pipe(gulp.dest('tmp/libs'));
});

gulp.task('concat-vendor', ['copy-vendor'], function () {
    return gulp.src([
        'tmp/libs/jquery.js',
        'tmp/libs/bootstrap.js',
        'tmp/libs/lodash.js',
        'tmp/libs/angular.js',
        'tmp/libs/*.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/libs'));
});


/****************************************************************************
 * Transform .scss files into .css and minify them
 * */
gulp.task('sass', function () {
    return gulp.src('src/content/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('tmp/css'));
});

gulp.task('min-css', ['sass'], function () {
    return gulp.src('tmp/css/*.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});


/****************************************************************************
 * Move css files into dist/css folder
 * */
gulp.task('copy-css', function () {
    return (gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css']))
        .pipe(gulp.dest('dist/css'))
})

/****************************************************************************
 * Watch over files
 * */
gulp.task('watch-ts', function () {
    gulp.watch('src/**/*.ts', ['concat-scripts'])
});

gulp.task('watch-html', function () {
    gulp.watch('src/**/*.html', ['copy-html', 'copy-html2'])
});

gulp.task('watch-scss', function () {
    gulp.watch('src/content/scss/*.scss', ['min-css']);
});

/****************************************************************************
 *Copy img
 * */
gulp.task('img', function () {
    return gulp.src('src/content/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


/****************************************************************************
 * The default task
 * */
gulp.task('default', [
    'connect',
    'watch-html',
    'concat-vendor',
    'watch-ts',
    'watch-scss',
    'copy-css',
    'min-css',
    'copy-html',
    'copy-html2',
    'concat-scripts',
    'img'
]);