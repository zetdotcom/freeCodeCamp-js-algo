// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({9:[function(require,module,exports) {
function convertToRoman(num) {

  var str = num.toString();
  var splitArr = str.split("");
  var roman = void 0;
  var romanArr = [];
  function units(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "I";
        break;
      case "2":
        roman = "II";
        break;
      case "3":
        roman = "III";
        break;
      case "4":
        roman = "IV";
        break;
      case "5":
        roman = "V";
        break;
      case "6":
        roman = "VI";
        break;
      case "7":
        roman = "VII";
        break;
      case "8":
        roman = "VIII";
        break;
      case "9":
        roman = "IX";
        break;
      case "10":
        roman = "X";
        break;
    }

    return roman;
  }

  function tens(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "X";
        break;
      case "2":
        roman = "XX";
        break;
      case "3":
        roman = "XXX";
        break;
      case "4":
        roman = "XL";
        break;
      case "5":
        roman = "L";
        break;
      case "6":
        roman = "LX";
        break;
      case "7":
        roman = "LXX";
        break;
      case "8":
        roman = "LXXX";
        break;
      case "9":
        roman = "XC";
        break;
    }
    return roman;
  }

  function hundreds(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "C";
        break;
      case "2":
        roman = "CC";
        break;
      case "3":
        roman = "CCC";
        break;
      case "4":
        roman = "CD";
        break;
      case "5":
        roman = "D";
        break;
      case "6":
        roman = "DC";
        break;
      case "7":
        roman = "DCC";
        break;
      case "8":
        roman = "DCCC";
        break;
      case "9":
        roman = "CM";
        break;
    }

    return roman;
  }

  function thounsands(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "M";
        break;
      case "2":
        roman = "MM";
        break;
      case "3":
        roman = "MMM";
        break;

    }

    return roman;
  }

  if (num >= 1000) {
    var al = splitArr.length;

    romanArr.push(thounsands(splitArr[al - 4]), hundreds(splitArr[al - 3]), tens(splitArr[al - 2]), units(splitArr[al - 1]));
  }

  if (num >= 100 && num < 1000) {
    var _al = splitArr.length;

    romanArr.push(hundreds(splitArr[_al - 3]), tens(splitArr[_al - 2]), units(splitArr[_al - 1]));
  }
  if (num < 100 && num > 10) {
    var _al2 = splitArr.length;

    romanArr.push(tens(splitArr[_al2 - 2]), units(splitArr[_al2 - 1]));
  }

  if (num < 10) {
    var _al3 = splitArr.length;

    romanArr.push(units(splitArr[_al3 - 1]));
  }

  return romanArr.join("");
}
var input = document.getElementById("inputField");
var text = document.getElementById("text");
document.getElementById("romanConverter").onclick = function (e) {
  e.preventDefault();
  text.innerHTML = convertToRoman(input.value);
};
},{}],11:[function(require,module,exports) {
function telephoneCheck(str) {

  // Good luck!
  var phoneNum = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\s?\d{3}[\s-]?\d{4}$/;
  var check = phoneNum.test(str);
  var matchCheck = str.match(phoneNum);
  return check;
}

telephoneCheck("5555555555");
console.log(telephoneCheck("1 555)555-5555"));
},{}],7:[function(require,module,exports) {
'use strict';

var _romanConverter = require('./romanConverter');

var _romanConverter2 = _interopRequireDefault(_romanConverter);

var _telNumValidator = require('./telNumValidator');

var _telNumValidator2 = _interopRequireDefault(_telNumValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _romanConverter2.default)();
(0, _telNumValidator2.default)();
},{"./romanConverter":9,"./telNumValidator":11}],13:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61131' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[13,7], null)
//# sourceMappingURL=/fCC_algo.787aca84.map