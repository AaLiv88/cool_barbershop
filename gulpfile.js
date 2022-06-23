const { src, dest, parallel, series, watch } = require("gulp");

//плагины
const less = require("gulp-less");
const minify = require("gulp-csso");
const autoPref = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");

const concat = require("gulp-concat");

const includeHtml = require("gulp-file-include");
const minhtml = require("gulp-htmlmin");

// const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const rename = require("gulp-rename");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();


function clean() {
  return del("dist");
}

function server() {
	browserSync.init({
		server: { 
      baseDir: "dist"
    }, 

    port: 3000,
		notify: false,
		online: true
	});
};


function watcher() {
  watch("#src/less/**/*.less", getCss);
  watch("#src/**/*.html", html);
  watch("#src/img/**/*.*", img);
  watch("#src/js/**/*.js", scripts);
  watch("#src/img/**/*.*", getWebp);
}


function getCss() {
  return src("#src/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(autoPref("last 5 versions"))
    .pipe(dest("dist"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true}));
};


function html() {
  return src("#src/**/*.html")
    .pipe(includeHtml())
    .pipe(minhtml({ collapseWhitespace: true }))
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true}));
}

function scripts() {
  return src("#src/js/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
}

function img() {
  return src("#src/img/**/*.*")
    .pipe(dest("dist/img"))
    .pipe(browserSync.reload({ stream: true }));
}

function getWebp() {
  return src("#src/img/**/*.*")
    .pipe(webp({
      qualiti: 90
    }))
    .pipe(dest("dist/img"))
    .pipe(browserSync.reload({ stream: true }));
}

function fonts() {
  return src("#src/fonts/**/*.*")
    .pipe(dest("dist/fonts"))
}

exports.getCss = getCss;
exports.html = html;
exports.img = img;
exports.getWebp = getWebp;
exports.scripts = scripts;
exports.fonts = fonts;

exports.clean = clean;

exports.watch = watcher;
exports.server = server;

exports.dev = series(
  clean, html, getCss, scripts, img, getWebp, fonts,
  parallel(server, watcher)
);
