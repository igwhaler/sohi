import './styles/index.less'

// import 'amfe-flexible'
import 'lib-flexible'
import $ from 'jquery'

window.jQuery = $
require('./js/libs/jquery.fullPage.js')

$(function() {
  var _fullpage = $('#fullpage')

  _fullpage.show().fullpage({
    // sectionsColor: [],
    verticalCentered: false,
    scrollingSpeed: 600,
    easing: 'ease-in',
  });
});