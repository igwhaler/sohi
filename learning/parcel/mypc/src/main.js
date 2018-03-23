import './styles/index.less'
import $ from 'webpack-zepto'

$(function () {
  var $win = $(window);
  var $wrap = $("#wrapPage");
  var $p8 = $("#section8");

  var winHeight = $win.height();
  var winWidth = $win.width();

  function init () {
    if (winWidth <= 750) {
      window.location.href = '/h5/'
      return
    }
    $wrap.css({display: "block"})

    $('.header .menu').on('click', '.item', function(e) {
      $(this).addClass('active').siblings().removeClass('active')
    })
  };
  init()


  function p8Animate() {
    var winScrollHeight = $win.scrollTop();
    var p8Top = $p8.offset().top;

    console.log(winScrollHeight - p8Top)

    if (winScrollHeight - p8Top > -64) {
      $p8.addClass('p8-animate')
    }
  };
  p8Animate();


  $win.on('scroll', function (e) {
    p8Animate();
  }, false)
})