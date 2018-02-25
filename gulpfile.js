const gulp = require ('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

//Task Sass
gulp.task('sass',()=>{
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/sass/*.scss'
    ])
    .pipe(sass({outputStyle:'compresed'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

gulp.task('js',()=>{
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/popper.min.js'
    ])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

gulp.task('serve',['sass'],()=>{
    browserSync.init({
        server:'./src'
    })
    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/sass/*.scss'
    ],['sass'])
    gulp.watch('src/*.html').on('change',browserSync.reload)
})

gulp.task('fa',()=>{
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'))
})

gulp.task('fonts', () => {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'))
})

gulp.task('default',['js','serve','fa','fonts'])