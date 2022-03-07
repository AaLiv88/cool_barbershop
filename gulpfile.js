// const gulp = require('gulp');

// const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync');
// const { notify } = require('browser-sync');


// //Плагины
// const fileInclude = require("gulp-file-include");
// const htmlMin = require("gulp-htmlmin");
// const size = require("gulp-size");



// gulp.task("sass", function() {
//   return gulp.src("#src/sass/**/*.sass")
//     .pipe(sass())
//     .pipe(gulp.dest("pablic/css"))
//     .pipe(browserSync.reload({ stream: true }));
// });


// gulp.task("html", function() {
//   return gulp.src(["#src/*.html"]) 
//     .pipe(gulp.dest("pablic/"))
//     .pipe(browserSync.reload({ stream: true }));
// });


// gulp.task("watch", function() {
//   gulp.watch("#src/sass/**/*.*", gulp.parallel("sass"));
//   gulp.watch("#scr/index.html", gulp.parallel("html"));
// });


// gulp.task("browser-sync", function() {
//   browserSync({
//     server: {
//       baseDir: "#src"
//     },
//     notify: false
//   });
// });


// gulp.task('default', gulp.parallel('sass', "html", 'browser-sync', 'watch'));


const { src, dest, parallel, series, watch } = require("gulp");

const less = require("gulp-less");
const browserSync = require("browser-sync").create();

function server() {
	browserSync.init({ // Инициализация Browsersync
		server: { 
      baseDir: "dist"
    }, 
		notify: false,
		online: true
	});
};


function watcher() {
  watch("#src/**/*.*", getCss);
}

function getCss() {
  return src("#src/less/**/*.less")
    .pipe(less())
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true}));
};

function html() {
  return src("#src/*.html")
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true}));
}

exports.getCss = getCss;
exports.html = html;

exports.watch = watcher;
exports.server = server;

exports.dev = series(
  html, getCss,
  parallel(server, watcher)
);
