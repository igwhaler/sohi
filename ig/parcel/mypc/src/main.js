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

    if (winScrollHeight - p8Top > -64) {
      $p8.addClass('p8-animate')
    }
  };
  p8Animate();



  function  handlePage() {
    var _elList = [
      [$("#section1"), $("#section1").height() + $("#section2").height(), $("#itemP1")],
      [$("#section2"), $("#section1").height() + $("#section2").height(), $("#itemP1")],

      [$("#section3"), $("#section3").height(), $("#itemP2")],

      [$("#section4"), $("#section4").height() + $("#section5").height() + $("#section6").height(), $("#itemP3")],
      [$("#section5"), $("#section4").height() + $("#section5").height() + $("#section6").height(), $("#itemP3")],
      [$("#section6"), $("#section4").height() + $("#section5").height() + $("#section6").height(), $("#itemP3")],

      [$("#section7"), $("#section7").height() + $("#section8").height() + $("#section9").height(), $("#itemP4")],
      [$("#section8"), $("#section7").height() + $("#section8").height() + $("#section9").height(), $("#itemP4")],
      [$("#section9"), $("#section7").height() + $("#section8").height() + $("#section9").height(), $("#itemP4")],

      [$("#section10"), $("#section10").height() + $("#section11").height(), $("#itemP5")],
      [$("#section11"), $("#section10").height() + $("#section11").height(), $("#itemP5")],

      [$("#section12"), $("#section12").height() + $("#section13").height() + $("#section14").height() + $("#section15").height(), $("#itemP6")],
      [$("#section13"), $("#section12").height() + $("#section13").height() + $("#section14").height() + $("#section15").height(), $("#itemP6")],
      [$("#section14"), $("#section12").height() + $("#section13").height() + $("#section14").height() + $("#section15").height(), $("#itemP6")],
      [$("#section15"), $("#section12").height() + $("#section13").height() + $("#section14").height() + $("#section15").height(), $("#itemP6")],
    ]

    return function () {
      _elList.forEach(function(item) {
        var winScrollHeight = $win.scrollTop();
        var elTop = item[0].offset().top;

        if (winScrollHeight - elTop >= -200 && winScrollHeight - elTop <= item[1]) {
          if (item[2].hasClass('active')) {
            return
          }
          item[2].addClass('active').siblings().removeClass('active')
        }
      })
    }
  }
  var _handelPage  = handlePage()

  $win.on('scroll', function (e) {
    p8Animate();
    _handelPage()
  }, false)


})