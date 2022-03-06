// let project_folder = "dist";
// let source_folder = "#scr";

// let path = {
//   build: {
//     html: project_folder + "/",
//     css: project_folder + "/css/",
//     js: project_folder + "/js/",
//     img: project_folder + "/img/",
//     fonts: project_folder + "/fonts/",
//   },

//   src: {
//     html: source_folder + "/",
//     css: source_folder + "/less/style",
//     js: source_folder + "/js/script",
//     img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
//     fonts: source_folder + "/fonts/*.ttf",
//   },

//   watch: {
//     html: source_folder + "/**/*.html",
//     css: source_folder + "/less/**/*.less",
//     js: source_folder + "/js/**/*.js",
//     img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
//   },
  
//   clean: "./" + project_folder + "/"
// }

// let { src, dest } = require('gulp').
//   gulp = require('gulp'),
//   browosersync = require("browser-sync").create();

// function browoserSync(params) {
//   browosersync.init({
//     server: {
//       baseDir: "./" + project_folder + "/"
//     },

//     port: 3000,
//     notify: false,
//   })
// }

// let watch = gulp.parallel(browoserSync);

// exports.watch = watch;
// exports.default = watch;

var gulp = require('gulp');
const { src, dest, watch, series, parallel } = require("gulp");
const browoserSync = require("browser-sync").create();

//Плагины
const fileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");

const html = () => {
  return src(["./#src/html/*.html"])
    .pipe(fileInclude())
    .pipe(size())
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(size())
    .pipe(dest("./pablic"))
    .pipe(browoserSync.stream());
}

//сервер
const server = () => {
  browoserSync.init({
    server: {
      baseDir: "./pablic"
    }
  });
}

//наблюдение
// const watcher = () => {
//   watch("./#scr/html/**/*.html", gulp.parallel("html"));
// }
gulp.task('watch', function() {
  gulp.watch('#src/html/**/*.html', gulp.series('html'));
});

//задачи
exports.html = html;
// exports.watch = watcher;

//сборка
// exports.dev = series(
//   html,
//   parallel(watcher, server)
// );