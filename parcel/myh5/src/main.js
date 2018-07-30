import './styles/index.less'
import $ from 'webpack-zepto'

$(function () {
  var $win = $(window);
  var $wrap = $("#wrapPage");
  var $p8 = $("#section8");
  var $p1 = $("#section1");
  var $menu = $("#zyMenu");

  var winHeight = $win.height();
  var winWidth = $win.width();

  function init () {
    if (winWidth > 750) {
      window.location.href = '/pc/'
      return
    }
    $wrap.css({display: "block"})
  };
  init()


  function p8Animate() {
    var winScrollHeight = $win.scrollTop();
    var p8Top = $p8.offset().top;

    if (winScrollHeight - p8Top > -64) {
      $p8.addClass('p8-animate')
    }
  };
  p8Animate();

  function showMenu() {
    var winScrollHeight = $win.scrollTop();
    var p1Top = $p1.offset().top;

    console.log(winScrollHeight - p1Top)

    if (winScrollHeight - p1Top > -100) {
      $menu.show()
    } else {
      $menu.hide()
    }
  }
  showMenu()

  $win.on('scroll', function (e) {
    p8Animate();
    showMenu();
  }, false)


})