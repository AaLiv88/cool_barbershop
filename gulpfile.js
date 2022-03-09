const { src, dest, parallel, series, watch } = require("gulp");

//плагины
const less = require("gulp-less");
const includeHtml = require("gulp-file-include");
const browserSync = require("browser-sync").create();


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
}


function getCss() {
  return src("#src/less/style.less")
    .pipe(less())
    .pipe(dest("dist"))
    .pipe(browserSync.reload({ stream: true}));
};


function html() {
  return src("#src/**/*.html")
    .pipe(includeHtml())
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
