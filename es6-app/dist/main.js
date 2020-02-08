"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(generator);

var name = "Nadeeshani";
var template = "<h1> ".concat(name, " </h1>");
document.getElementById("h1").innerHTML = template;

var defaultParamTEsting = function defaultParamTEsting() {
  var $text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hello world";
  console.log($text);
};

defaultParamTEsting();

var add = function add(a, b) {
  console.log(a + b);
};

add(1, 2); // promises

var myPromise = Promise.resolve("Hello");
myPromise.then(function (res) {
  return console.log(res);
});
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(4);
  }, 3000);
});
promise.then(function (res, rej) {
  console.log(res + 5);
}); //yield

function generator(x) {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(Math.pow(x, 2));
          _context.next = 3;
          return '1 ran';

        case 3:
          console.log(Math.pow(x, 2));
          _context.next = 6;
          return '2 ran';

        case 6:
          console.log(Math.pow(x, 2));
          _context.next = 9;
          return '3 ran';

        case 9:
          return _context.abrupt("return", true);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
var g1 = generator(2);
console.log(g1.next(2));
console.log(g1.next(2));
console.log(g1.next(2));
console.log(g1.next(2));