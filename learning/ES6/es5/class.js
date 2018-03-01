'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  _createClass(Person, null, [{
    key: 'handleShow',
    value: function handleShow() {
      console.log(123);
    }
  }]);

  function Person(name, age) {
    _classCallCheck(this, Person);

    this.hehe = 123;

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('My name is' + this.age);
    }
  }, {
    key: 'show',
    value: function show(a) {
      handleTrip.call(this, a);
    }
  }, {
    key: 'prop',
    get: function get() {
      return '123';
    },
    set: function set(newV) {
      console.log(newV);
    }
  }]);

  return Person;
}();

function handleTrip(a) {
  this.type = a;
}

var p1 = new Person('haha', 2);

Person.handleShow();

console.log(Person, Object.getOwnPropertyDescriptors(Person.prototype));