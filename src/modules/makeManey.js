"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeManey =
/*#__PURE__*/
function () {
  function MakeManey(cash, eu, rus) {
    _classCallCheck(this, MakeManey);

    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }

  _createClass(MakeManey, [{
    key: "calcCash",
    value: function calcCash(allCash) {
      return allCash.reduce(function (a, b) {
        return a + b;
      });
    }
  }, {
    key: "returnResult",
    value: function returnResult() {
      return [this.calcCash(this.cash), this.eu, this.rus];
    }
  }]);

  return MakeManey;
}();

var _default = MakeManey;
exports.default = _default;