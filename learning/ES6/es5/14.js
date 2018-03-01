"use strict";

/* function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function show(val, ms) {
    // await timeout(ms)
    await 4
    console.log(val)
    return 3
}

show(1, 2000).then((val) => {
    console.log(val, 2)
})
 */

var show = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function show() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

show().then(function (val) {
    console.log(val);
}).catch(function (err) {
    console.log(err);
});