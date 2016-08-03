var gulp = require("gulp");


/*编译less、重命名css、压缩css*/
var less = require("gulp-less"),             //编译less
    rename = require("gulp-rename"),         //重命名
    mincss = require("gulp-minify-css");     //压缩css


gulp.task("less", function () {
  gulp.src("css/less/*.less")
      .pipe(less())
      .pipe(rename({suffix: ".min"}))
      .pipe(mincss())
      .pipe(gulp.dest("css/min/"))
});

/*自动合成雪碧图*/
var spriter = require("gulp-spriter");
gulp.task("sprite", function () {
  gulp.src("css/min/happy.min.css")
  .pipe(spriter({
    sprite: "one.png",
    slice: "images/slice/",
    outpath: "images/sprite/"
  }))
  .pipe(gulp.dest("css/min/"));
});

/*监听文件修改，自动编译*/
var watch = require("gulp-watch");
gulp.task("watch", function () {
  gulp.watch('css/less/*.less', function(){
    gulp.run('less');
  });
});


