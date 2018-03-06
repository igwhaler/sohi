import 'amfe-flexible'

import $ from 'jquery'
import './libs/jquery.fullPage.js'

import '../styles/index.less'

$(function() {
  var _fullpage = $('#fullpage')

  _fullpage.show().fullpage({
    sectionsColor: ['tan', '#4BBFC3', '#7BAABE', 'yellow'],
    scrollingSpeed: 600,
    easing: 'ease-in',
  });
});