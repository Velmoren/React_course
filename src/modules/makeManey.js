"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

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
    key: "makeDestruct",
    value: function makeDestruct() {}
  }, {
    key: "calcCash",
    value: function calcCash(allCash) {
      var own = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
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
  }, {
    key: "resultMoney",
    value: function resultMoney() {
      return this.calcCash(this.cash);
    }
  }, {
    key: "returnResult",
    value: function returnResult() {
      return [this.resultMoney(), this.eu, this.rus];
    }
  }]);

  return MakeManey;
}();

var _default = MakeManey;
exports.default = _default;