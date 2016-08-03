var gulp = require("gulp");


/*编译less、重命名css、压缩css*/
var less = require("gulp-less"), //编译less
    rename = require("gulp-rename"), //重命名
    mincss = require("gulp-minify-css"); //压缩css


gulp.task("less", function() {
    gulp.src("css/main/*.less")
        .pipe(less())
        .pipe(rename({ suffix: ".min" }))
        .pipe(mincss())
        .pipe(gulp.dest("css/min/"))
});

/*自动合成雪碧图*/
var spriter = require("gulp.spritesmith");
gulp.task('sprite', function() {
    gulp.src('images/slice_2/*.png') //需要合并的图片地址
        .pipe(spriter({
            imgName: 'images/sprite_2/happy_sprite.png', //保存合并后图片的地址
            cssName: 'css/sprite/happy_icon.less', //保存合并后对于css样式的地址
            padding: 10, //合并时两个图片的间距
            //algorithm: 'binary-tree', //注释1
            //cssTemplate: "css/min/handlebarsStr.css" //注释2
        }))
        .pipe(gulp.dest(""));
});

/*监听文件修改，自动编译*/
var watch = require("gulp-watch");
gulp.task("watch", function() {
    gulp.watch('images/slice_2/*', function() {
        gulp.run('sprite');
    });
    gulp.watch('css/main/*.less', function() {
        gulp.run('less');
    });
});
