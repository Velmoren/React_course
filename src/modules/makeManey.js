"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var makeManey = function makeManey() {
  var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
  };
  var cash = sponsors.cash,
      eu = sponsors.eu,
      rus = sponsors.rus;

  var calcCash = function calcCash() {
    var allCash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return allCash.reduce(function (a, b) {
      return a + b;
    });
  };

  return [calcCash(cash), eu, rus];
};

var _default = makeManey;
exports.default = _default;