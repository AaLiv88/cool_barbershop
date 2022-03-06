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


const { src, dest } = require("gulp")

const html = (cb) => {
  return src("./#src/html/index.html")
  .pipe(dest("./pablic"))
}

exports.html = html;