var gulp = require("gulp");

/*合成雪碧图*/
var spritesmith = require("gulp.spritesmith");
gulp.task('spritesmith', function() {
    // 首页雪碧图
    gulp.src('src/assets/icons/index/*.png') //需要合并的图片地址
        .pipe(spritesmith(
                {
                    imgName: 'src/assets/sprites/index.png', //保存合并后图片的地址
                    cssName: 'src/styles/sprites/index.less', //保存合并后对于css样式的地址
                    cssFormat: "less",
                    padding: 10 //合并时两个图片的间距
                }
            ))
        .pipe(gulp.dest(""));
});


/*监听文件修改，自动编译*/
var watch = require("gulp-watch");
gulp.task("watch", function() {
    gulp.watch('src/assets/icons/*/*.png', function() {
        gulp.run('spritesmith');
    });

    gulp.watch('src/styles/*', function() {
        gulp.run('px2rem');
    });
});