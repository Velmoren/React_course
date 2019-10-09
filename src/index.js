"use strict";

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _makeEmployers = _interopRequireDefault(require("./modules/makeEmployers"));

var _makeManey = _interopRequireDefault(require("./modules/makeManey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var makeEmployers = new _makeEmployers.default(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
var employersNames = makeEmployers.filterNames();
var makeManey = new _makeManey.default([40000, 5000, 30400, 12000], ['SRL', 'PLO', 'J&K'], ['RusAuto', 'SBO']);

var _makeManey$returnResu = makeManey.returnResult(),
    _makeManey$returnResu2 = _slicedToArray(_makeManey$returnResu, 3),
    money = _makeManey$returnResu2[0],
    eu = _makeManey$returnResu2[1],
    rus = _makeManey$returnResu2[2];

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$owner = _ref.owner,
        owner = _ref$owner === void 0 ? 'default' : _ref$owner,
        _ref$cash = _ref.cash,
        cash = _ref$cash === void 0 ? 0 : _ref$cash,
        _ref$emp = _ref.emp,
        emp = _ref$emp === void 0 ? [] : _ref$emp,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Victor' : _ref$director;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.args = args;
  }

  _createClass(MakeBusiness, [{
    key: "makeFirstEuNames",
    value: function makeFirstEuNames() {
      var _this$args = _slicedToArray(this.args, 1),
          _this$args$ = _slicedToArray(_this$args[0], 1),
          firstEu = _this$args$[0];

      return firstEu;
    }
  }, {
    key: "makeLog",
    value: function makeLog() {
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers:").concat(this.emp));
      console.log("And we have a sponsors:");
      console.log("".concat(eu.join(' '), " ").concat(rus.join(' '), " 'unexpected sponsor'"));
      console.log("Note. Be careful with ".concat(this.makeFirstEuNames(), ". It's a huge risk"));
    }
  }]);

  return MakeBusiness;
}();

;
var makeBusiness = new MakeBusiness({
  owner: 'Sam',
  cash: money,
  emp: employersNames
}, eu);
makeBusiness.makeLog();