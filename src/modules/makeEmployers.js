"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var makeEmployers = function makeEmployers() {
  var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']; // применяем filter и map

  var employersNames = employers.filter(function (name) {
    return name.length > 0 && name !== "";
  });
  employersNames = employersNames.map(function (name) {
    return " ".concat(name.toLowerCase());
  });
  return employersNames;
};

var _default = makeEmployers;
exports.default = _default;