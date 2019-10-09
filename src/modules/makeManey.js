"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var makeManey = function makeManey() {
  var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
  };
  var cash = sponsors.cash,
      eu = sponsors.eu,
      rus = sponsors.rus;

  function calcCash(_ref) {
    var _ref$allCash = _ref.allCash,
        allCash = _ref$allCash === void 0 ? [] : _ref$allCash,
        _ref$own = _ref.own,
        own = _ref$own === void 0 ? 0 : _ref$own;
    var total = own;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = allCash[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        total += +item;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return total;
  }

  var money = calcCash({
    allCash: cash
  });
  return [money, eu, rus];
};

var _default = makeManey;
exports.default = _default;