import gulp from "gulp";
import pug from "gulp-pug";
import del from "del";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso"
import ts from "gulp-typescript";
import concat from "gulp-concat";
import stripImportExport from "gulp-strip-import-export";
const tsProject = ts.createProject("tsconfig.json");
const sass = require("gulp-sass")(require("node-sass"));

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build",
    watch: "src/**/*.pug"
  },
  scss: {
    src: "src/scss/*.scss",
    dest: "build",
    watch: "src/scss/*.scss"
  },
  typescript: {
    src: "src/typescript/*.ts",
    dest: "build",
    watch: "src/typescript/*.ts"
  }
};

const Pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(routes.pug.dest));

const Scss = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const Typescript = () =>
  gulp
    .src(routes.typescript.src)
    .pipe(tsProject())
    .pipe(stripImportExport())
    .pipe(concat("main.js"))
    .pipe(gulp.dest(routes.typescript.dest))

const Clean = () => del(["build"]);

const Watch = () => {
  gulp.watch(routes.pug.watch, Pug);
  gulp.watch(routes.scss.watch, Scss);
  gulp.watch(routes.typescript.watch, Typescript);
}

const prepare = gulp.series([Clean]);
const assets = gulp.series([Pug, Scss, Typescript]);
const postDev = gulp.series([Watch]);

export const dev = gulp.series([prepare, assets, postDev]);