var Youpin = function () {
  // 接口host
  this.host = 'http://tj1-mijia-test20.kscn'
  this.goodListHost = 'http://10.38.11.178'
  this.goodDEtailHost = 'https://youpin.mi.com'

  // 一些工具函数
  this.setCookie = function (name, value, Hours, domain) {
    var d = new Date()
    var offset = 8
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
    var nd = utc + (3600000 * offset)
    var exp = new Date(nd)

    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000)

    document.cookie = [name + '=' + escape(value), 'path=/', 'expires=' + exp.toGMTString(), 'domain=' + (domain || '.admin.youpin.mi.com')].join(';')
  }

  this.getCookie = function (name) {
    var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))

    if (arr != null) {
      return unescape(arr[2])
    } else {
      return null
    }
  }

  this.removeCookie = function (name) {
    this.setCookie(name, '', -1)
  }

  this.clearCookie = function () {
    var that = this
    var keys = document.cookie.match(/[^\s?=;]+(?==)/g)

    if (keys) {
      for (var i = keys.length; i--;) {
        that.removeCookie(keys[i])
      }
    }
  }

  this.getQuery = function (name, url) {
    // var search = location.search.slice(1)
    var _url = url || location.href
    var search = _url.split('?')[1]

    if (search) {
      search = search.replace(/#\/$/, '')
    } else {
      search = ''
    }

    var arr = search.split('&')
    var obj = {}

    arr.forEach(function (str) {
      var group = str.split('=')
      var key = group[0]
      var value = group[1]

      if (key) {
        obj[key] = value ? decodeURIComponent(value) : ''
      }
    })

    if (typeof (name) !== 'undefined' && name) {
      return obj[name] ? decodeURIComponent(obj[name]) : ''
    } else {
      return obj
    }
  }

  // dom 样式操作
  this.hasClass = function (ele, cls) {
    var ret = ele.className.match(new RegExp('(^|\\s)' + cls + '(\\s|$)'))

    return ret ? !!ret[0] : false
  }
  this.addClass = function (ele, cls) {
    if (!this.hasClass(ele, cls)) {
      ele.className += ' ' + cls
    }
  }
  this.removeClass = function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      var reg = new RegExp('(^|\\s)' + cls + '(\\s|$)')

      ele.className = ele.className.replace(reg, ' ')
    }
  }
  this.parents = function (el, selector) {
    var ps = []

    while (el.tagName !== 'BODY') {
      if ((/^\./g).test(selector)) {
        if (el.className.indexOf(selector.slice(1)) !== -1) {
          ps.push(el)
        }
      } else if ((/^#/g).test(selector)) {
        if (el.id === selector.slice(1)) {
          ps.push(el)
        }
      } else {
        if (el.tagName.toLowerCase() === selector.toLowerCase()) {
          ps.push(el)
        }
      }

      el = el.parentNode
    }

    return ps
  }
  this.parent = function (el, selector) {
    var p = null
    var ps = this.parents(el, selector)

    if (ps.length) {
      p = ps[0]
    }

    return p
  }

  this.keys = function (obj) {
    var keys = []

    for (var pro in obj) {
      keys.push(pro)
    }
    return keys
  }

  this.values = function (obj) {
    var values = []

    for (var pro in obj) {
      values.push(obj[pro])
    }

    return values
  }

  // 日期格式化
  this.date = function (stamp, sept) {
    if (String(stamp).length !== 13 || !/^\d{13}$/.test(String(stamp))) {
      return stamp
    }

    var d = new Date(stamp)
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var date = d.getDate()

    month = month >= 10 ? month : '0' + month
    date = date >= 10 ? date : '0' + date

    return [year, month, date].join(sept || '/')
  }
  this.dateTime = function (stamp, sept) {
    if (String(stamp).length !== 13 || !/^\d{13}$/.test(String(stamp))) {
      return stamp
    }

    var d = new Date(stamp)
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()

    month = month >= 10 ? month : '0' + month
    date = date >= 10 ? date : '0' + date
    hours = hours >= 10 ? hours : '0' + hours
    minutes = minutes >= 10 ? minutes : '0' + minutes
    seconds = seconds >= 10 ? seconds : '0' + seconds

    return [[year, month, date].join(sept || '/'), [hours, minutes, seconds].join(':')].join(' ')
  }

  this.getDuration = function (date1, date2) {
    var str1 = this.dateTime(date1.getTime())
    var str2 = this.dateTime(new Date(date2.getTime() - 24 * 60 * 60 * 1000).getTime()).slice(0, -9) + ' 24:00:00'

    return [str1, str2]
  }
  // 获取上个周期的结束时间
  this.getLastMonth = function (str) { // 2016/10
    if (!str) {
      var n = new Date()
      var y = n.getFullYear()
      var m = n.getMonth() + 1

      str = [y, m].join('/')
    }

    var arr = str.split('/')
    var year = +arr[0]
    var month = +arr[1]

    if (month - 1 == 0) {
      year -= 1
      month = 12
    } else {
      month -= 1
    }

    if (month < 10) {
      month = '0' + month
    }

    return [year, month].join('/')
  }
  // 获取下个周期的结束时间
  this.getNextMonth = function (str) { // 2016/10
    if (!str) {
      var n = new Date()
      var y = n.getFullYear()
      var m = n.getMonth() + 1

      str = [y, m].join('/')
    }

    var arr = str.split('/')
    var year = +arr[0]
    var month = +arr[1]

    if (month == 12) {
      year += 1
      month = 1
    } else {
      month += 1
    }

    if (month < 10) {
      month = '0' + month
    }

    return [year, month].join('/')
  }

  this.isNumber = function (p) {
    return toString.call(p) === '[object Number]'
  }
  this.isString = function (p) {
    return toString.call(p) === '[object String]'
  }
  this.isObject = function (p) {
    return toString.call(p) === '[object Object]'
  }
  this.isArray = function (p) {
    return toString.call(p) === '[object Array]'
  }
  this.isFunction = function (p) {
    return toString.call(p) === '[object Function]'
  }
  this.isBoolean = function (p) {
    return toString.call(p) === '[object Boolean]'
  }

  this.extend = function (target, source) {
    if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
        'use strict'
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object')
        }

        target = Object(target)
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index]
          if (source != null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
        }
        return target
      }
    }

    return Object.assign(target, source)
  }

  this.checkLogin = function (callback) {
    var that = this
    var serviceToken = that.getCookie('serviceToken')

    if (!serviceToken && location.hostname.indexOf('admin.youpin.mi.com') !== -1) {
      location.href = 'https://admin.youpin.mi.com/app/shop/login?followup=' + encodeURIComponent(location.href)
    }
  }
}

export default new Youpin()
