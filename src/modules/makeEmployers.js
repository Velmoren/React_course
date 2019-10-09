"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var makeEmployers = function makeEmployers() {
  var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
  return employers.filter(function (name) {
    return name !== "";
  }).map(function (name) {
    return name.toLowerCase().trim();
  });
};

var _default = makeEmployers;
exports.default = _default;