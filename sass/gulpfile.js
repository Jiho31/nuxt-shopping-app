const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("shinobi/**/*.scss")
    .pipe(sass()) // sass 컴파일러를 통해 scss 파일을 css로 컴파일
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(dest("css")); // 컴파일된 css 파일이 출력되는 경로
}

// sass 파일이 변경되면 자동으로 buildStyle이 실행되면서 css 파일에 내용이 반영됨
function watchTask() {
  watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
