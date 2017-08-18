var gulp = require("gulp");


/*编译less、重命名css、压缩css*/
var less = require("gulp-less"), //编译less
    rename = require("gulp-rename"), //重命名
    mincss = require("gulp-minify-css"); //压缩css

gulp.task("less", function() {
    gulp.src(["src/less/**/*.less", "src/less/*.less", "!src/less/**/*-sprite.less"])
        .pipe(less())
        .pipe(rename({ suffix: ".min" }))
        .pipe(mincss())
        .pipe(gulp.dest("build/css/"))
});

/*自动合成雪碧图*/
var spriter = require("gulp.spritesmith");
gulp.task('sprite', function() {
    gulp.src('src/images/happy/*.png') //需要合并的图片地址
        .pipe(spriter(
                {
                    imgName: 'build/images/happy/happy.png', //保存合并后图片的地址
                    cssName: 'src/less/happy/happy-sprite.less', //保存合并后对于css样式的地址
                    cssFormat: "less",
                    padding: 10 //合并时两个图片的间距
                }
            ))
        .pipe(gulp.dest(""));
});

/*检查js语法，压缩js*/
var uglify = require("gulp-uglify");
gulp.task("uglify", function () {
  gulp.src("src/js/**/*.js")
  .pipe(uglify())
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest("build/js/"))
});

/*监听文件修改，自动编译*/
var watch = require("gulp-watch");
gulp.task("watch", function() {
    gulp.watch('src/images/**/*', function() {
        gulp.run('sprite');
    });
    gulp.watch('src/less/**/*.less', function() {
        gulp.run('less');
    });
    gulp.watch('src/js/**/*.js', function () {
        gulp.run('uglify');
    });
});
