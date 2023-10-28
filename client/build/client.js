var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(Fe) {
  return Fe && Fe.__esModule && Object.prototype.hasOwnProperty.call(Fe, "default") ? Fe.default : Fe;
}
var highcharts = { exports: {} };
(function(Fe) {
  (function(ei, ri) {
    Fe.exports ? (ri.default = ri, Fe.exports = ei.document ? ri(ei) : ri) : (ei.Highcharts && ei.Highcharts.error(16, !0), ei.Highcharts = ri(ei));
  })(typeof window < "u" ? window : commonjsGlobal, function(ei) {
    function ri(hi, wi, zi, Ki) {
      hi.hasOwnProperty(wi) || (hi[wi] = Ki.apply(null, zi), typeof CustomEvent == "function" && ei.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: wi, module: hi[wi] } })));
    }
    var ii = {};
    return ri(ii, "Core/Globals.js", [], function() {
      var hi;
      return function(wi) {
        wi.SVG_NS = "http://www.w3.org/2000/svg", wi.product = "Highcharts", wi.version = "11.1.0", wi.win = typeof ei < "u" ? ei : {}, wi.doc = wi.win.document, wi.svg = wi.doc && wi.doc.createElementNS && !!wi.doc.createElementNS(wi.SVG_NS, "svg").createSVGRect, wi.userAgent = wi.win.navigator && wi.win.navigator.userAgent || "", wi.isChrome = wi.userAgent.indexOf("Chrome") !== -1, wi.isFirefox = wi.userAgent.indexOf("Firefox") !== -1, wi.isMS = /(edge|msie|trident)/i.test(wi.userAgent) && !wi.win.opera, wi.isSafari = !wi.isChrome && wi.userAgent.indexOf("Safari") !== -1, wi.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(wi.userAgent), wi.isWebKit = wi.userAgent.indexOf("AppleWebKit") !== -1, wi.deg2rad = 2 * Math.PI / 360, wi.hasBidiBug = wi.isFirefox && 4 > parseInt(wi.userAgent.split("Firefox/")[1], 10), wi.hasTouch = !!wi.win.TouchEvent, wi.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], wi.noop = function() {
        }, wi.supportsPassiveEvents = function() {
          let zi = !1;
          if (!wi.isMS) {
            const Ki = Object.defineProperty({}, "passive", { get: function() {
              zi = !0;
            } });
            wi.win.addEventListener && wi.win.removeEventListener && (wi.win.addEventListener("testPassive", wi.noop, Ki), wi.win.removeEventListener("testPassive", wi.noop, Ki));
          }
          return zi;
        }(), wi.charts = [], wi.dateFormats = {}, wi.seriesTypes = {}, wi.symbolSizes = {}, wi.chartCount = 0;
      }(hi || (hi = {})), hi;
    }), ri(ii, "Core/Utilities.js", [ii["Core/Globals.js"]], function(hi) {
      function wi(ti, oi, di, mi) {
        const Oi = oi ? "Highcharts error" : "Highcharts warning";
        ti === 32 && (ti = `${Oi}: Deprecated member`);
        const li = Vi(ti);
        let Li = li ? `${Oi} #${ti}: www.highcharts.com/errors/${ti}/` : ti.toString();
        if (typeof mi < "u") {
          let Ui = "";
          li && (Li += "?"), Ti(mi, function(Zi, rs) {
            Ui += `
 - ${rs}: ${Zi}`, li && (Li += encodeURI(rs) + "=" + encodeURI(Zi));
          }), Li += Ui;
        }
        Di(hi, "displayError", { chart: di, code: ti, message: Li, params: mi }, function() {
          if (oi)
            throw Error(Li);
          vi.console && wi.messages.indexOf(Li) === -1 && console.warn(Li);
        }), wi.messages.push(Li);
      }
      function zi(ti, oi) {
        return parseInt(ti, oi || 10);
      }
      function Ki(ti) {
        return typeof ti == "string";
      }
      function Yi(ti) {
        return ti = Object.prototype.toString.call(ti), ti === "[object Array]" || ti === "[object Array Iterator]";
      }
      function es(ti, oi) {
        return !!ti && typeof ti == "object" && (!oi || !Yi(ti));
      }
      function is(ti) {
        return es(ti) && typeof ti.nodeType == "number";
      }
      function $i(ti) {
        const oi = ti && ti.constructor;
        return !(!es(ti, !0) || is(ti) || !oi || !oi.name || oi.name === "Object");
      }
      function Vi(ti) {
        return typeof ti == "number" && !isNaN(ti) && 1 / 0 > ti && -1 / 0 < ti;
      }
      function _i(ti) {
        return typeof ti < "u" && ti !== null;
      }
      function bi(ti, oi, di) {
        const mi = Ki(oi) && !_i(di);
        let Oi;
        const li = (Li, Ui) => {
          _i(Li) ? ti.setAttribute(Ui, Li) : mi ? (Oi = ti.getAttribute(Ui)) || Ui !== "class" || (Oi = ti.getAttribute(Ui + "Name")) : ti.removeAttribute(Ui);
        };
        return Ki(oi) ? li(di, oi) : Ti(oi, li), Oi;
      }
      function Ai(ti) {
        return Yi(ti) ? ti : [ti];
      }
      function ji(ti, oi) {
        let di;
        ti || (ti = {});
        for (di in oi)
          ti[di] = oi[di];
        return ti;
      }
      function Ni() {
        const ti = arguments, oi = ti.length;
        for (let di = 0; di < oi; di++) {
          const mi = ti[di];
          if (typeof mi < "u" && mi !== null)
            return mi;
        }
      }
      function gi(ti, oi) {
        hi.isMS && !hi.svg && oi && _i(oi.opacity) && (oi.filter = `alpha(opacity=${100 * oi.opacity})`), ji(ti.style, oi);
      }
      function ki(ti) {
        return Math.pow(10, Math.floor(Math.log(ti) / Math.LN10));
      }
      function Ci(ti, oi) {
        return 1e14 < ti ? ti : parseFloat(ti.toPrecision(oi || 14));
      }
      function Si(ti, oi, di) {
        let mi;
        return oi === "width" ? (oi = Math.min(ti.offsetWidth, ti.scrollWidth), di = ti.getBoundingClientRect && ti.getBoundingClientRect().width, di < oi && di >= oi - 1 && (oi = Math.floor(di)), Math.max(0, oi - (Si(ti, "padding-left", !0) || 0) - (Si(ti, "padding-right", !0) || 0))) : oi === "height" ? Math.max(0, Math.min(ti.offsetHeight, ti.scrollHeight) - (Si(ti, "padding-top", !0) || 0) - (Si(ti, "padding-bottom", !0) || 0)) : ((ti = vi.getComputedStyle(ti, void 0)) && (mi = ti.getPropertyValue(oi), Ni(di, oi !== "opacity") && (mi = zi(mi))), mi);
      }
      function Ti(ti, oi, di) {
        for (const mi in ti)
          Object.hasOwnProperty.call(
            ti,
            mi
          ) && oi.call(di || ti[mi], ti[mi], mi, ti);
      }
      function Mi(ti, oi, di) {
        function mi(Li, Ui) {
          const Zi = ti.removeEventListener;
          Zi && Zi.call(ti, Li, Ui, !1);
        }
        function Oi(Li) {
          let Ui, Zi;
          ti.nodeName && (oi ? (Ui = {}, Ui[oi] = !0) : Ui = Li, Ti(Ui, function(rs, Bi) {
            if (Li[Bi])
              for (Zi = Li[Bi].length; Zi--; )
                mi(Bi, Li[Bi][Zi].fn);
          }));
        }
        var li = typeof ti == "function" && ti.prototype || ti;
        if (Object.hasOwnProperty.call(li, "hcEvents")) {
          const Li = li.hcEvents;
          oi ? (li = Li[oi] || [], di ? (Li[oi] = li.filter(function(Ui) {
            return di !== Ui.fn;
          }), mi(oi, di)) : (Oi(Li), Li[oi] = [])) : (Oi(Li), delete li.hcEvents);
        }
      }
      function Di(ti, oi, di, mi) {
        if (di = di || {}, pi.createEvent && (ti.dispatchEvent || ti.fireEvent && ti !== hi)) {
          var Oi = pi.createEvent("Events");
          Oi.initEvent(oi, !0, !0), di = ji(Oi, di), ti.dispatchEvent ? ti.dispatchEvent(di) : ti.fireEvent(oi, di);
        } else if (ti.hcEvents) {
          di.target || ji(di, { preventDefault: function() {
            di.defaultPrevented = !0;
          }, target: ti, type: oi }), Oi = [];
          let li = ti, Li = !1;
          for (; li.hcEvents; )
            Object.hasOwnProperty.call(li, "hcEvents") && li.hcEvents[oi] && (Oi.length && (Li = !0), Oi.unshift.apply(Oi, li.hcEvents[oi])), li = Object.getPrototypeOf(li);
          Li && Oi.sort((Ui, Zi) => Ui.order - Zi.order), Oi.forEach((Ui) => {
            Ui.fn.call(ti, di) === !1 && di.preventDefault();
          });
        }
        mi && !di.defaultPrevented && mi.call(ti, di);
      }
      const { charts: ci, doc: pi, win: vi } = hi;
      (wi || (wi = {})).messages = [], Math.easeInOutSine = function(ti) {
        return -0.5 * (Math.cos(Math.PI * ti) - 1);
      };
      var ui = Array.prototype.find ? function(ti, oi) {
        return ti.find(oi);
      } : function(ti, oi) {
        let di;
        const mi = ti.length;
        for (di = 0; di < mi; di++)
          if (oi(ti[di], di))
            return ti[di];
      };
      Ti({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(ti, oi) {
        hi[oi] = function(di) {
          return wi(32, !1, void 0, { [`Highcharts.${oi}`]: `use Array.${ti}` }), Array.prototype[ti].apply(di, [].slice.call(
            arguments,
            1
          ));
        };
      });
      let fi;
      const si = function() {
        const ti = Math.random().toString(36).substring(2, 9) + "-";
        let oi = 0;
        return function() {
          return "highcharts-" + (fi ? "" : ti) + oi++;
        };
      }();
      return vi.jQuery && (vi.jQuery.fn.highcharts = function() {
        const ti = [].slice.call(arguments);
        if (this[0])
          return ti[0] ? (new hi[Ki(ti[0]) ? ti.shift() : "Chart"](this[0], ti[0], ti[1]), this) : ci[bi(this[0], "data-highcharts-chart")];
      }), ui = { addEvent: function(ti, oi, di, mi = {}) {
        var Oi = typeof ti == "function" && ti.prototype || ti;
        Object.hasOwnProperty.call(Oi, "hcEvents") || (Oi.hcEvents = {}), Oi = Oi.hcEvents, hi.Point && ti instanceof hi.Point && ti.series && ti.series.chart && (ti.series.chart.runTrackerClick = !0);
        const li = ti.addEventListener;
        return li && li.call(ti, oi, di, hi.supportsPassiveEvents ? { passive: mi.passive === void 0 ? oi.indexOf("touch") !== -1 : mi.passive, capture: !1 } : !1), Oi[oi] || (Oi[oi] = []), Oi[oi].push({ fn: di, order: typeof mi.order == "number" ? mi.order : 1 / 0 }), Oi[oi].sort((Li, Ui) => Li.order - Ui.order), function() {
          Mi(ti, oi, di);
        };
      }, arrayMax: function(ti) {
        let oi = ti.length, di = ti[0];
        for (; oi--; )
          ti[oi] > di && (di = ti[oi]);
        return di;
      }, arrayMin: function(ti) {
        let oi = ti.length, di = ti[0];
        for (; oi--; )
          ti[oi] < di && (di = ti[oi]);
        return di;
      }, attr: bi, clamp: function(ti, oi, di) {
        return ti > oi ? ti < di ? ti : di : oi;
      }, clearTimeout: function(ti) {
        _i(ti) && clearTimeout(ti);
      }, correctFloat: Ci, createElement: function(ti, oi, di, mi, Oi) {
        return ti = pi.createElement(ti), oi && ji(ti, oi), Oi && gi(ti, { padding: "0", border: "none", margin: "0" }), di && gi(ti, di), mi && mi.appendChild(ti), ti;
      }, css: gi, defined: _i, destroyObjectProperties: function(ti, oi) {
        Ti(ti, function(di, mi) {
          di && di !== oi && di.destroy && di.destroy(), delete ti[mi];
        });
      }, diffObjects: function(ti, oi, di, mi) {
        function Oi(Li, Ui, Zi, rs) {
          const Bi = di ? Ui : Li;
          Ti(Li, function(ni, Pi) {
            if (!rs && mi && -1 < mi.indexOf(Pi) && Ui[Pi]) {
              ni = Ai(ni), Zi[Pi] = [];
              for (let Hi = 0; Hi < Math.max(ni.length, Ui[Pi].length); Hi++)
                Ui[Pi][Hi] && (ni[Hi] === void 0 ? Zi[Pi][Hi] = Ui[Pi][Hi] : (Zi[Pi][Hi] = {}, Oi(ni[Hi], Ui[Pi][Hi], Zi[Pi][Hi], rs + 1)));
            } else
              es(ni, !0) && !ni.nodeType ? (Zi[Pi] = Yi(ni) ? [] : {}, Oi(ni, Ui[Pi] || {}, Zi[Pi], rs + 1), Object.keys(Zi[Pi]).length !== 0 || Pi === "colorAxis" && rs === 0 || delete Zi[Pi]) : (Li[Pi] !== Ui[Pi] || Pi in Li && !(Pi in Ui)) && (Zi[Pi] = Bi[Pi]);
          });
        }
        const li = {};
        return Oi(ti, oi, li, 0), li;
      }, discardElement: function(ti) {
        ti && ti.parentElement && ti.parentElement.removeChild(ti);
      }, erase: function(ti, oi) {
        let di = ti.length;
        for (; di--; )
          if (ti[di] === oi) {
            ti.splice(di, 1);
            break;
          }
      }, error: wi, extend: ji, extendClass: function(ti, oi) {
        const di = function() {
        };
        return di.prototype = new ti(), ji(di.prototype, oi), di;
      }, find: ui, fireEvent: Di, getClosestDistance: function(ti, oi) {
        const di = !oi;
        let mi, Oi, li;
        return ti.forEach((Li) => {
          if (1 < Li.length)
            for (li = Li.length - 1; 0 < li; li--)
              Oi = Li[li] - Li[li - 1], 0 > Oi && !di ? (oi == null || oi(), oi = void 0) : Oi && (typeof mi > "u" || Oi < mi) && (mi = Oi);
        }), mi;
      }, getMagnitude: ki, getNestedProperty: function(ti, oi) {
        for (ti = ti.split("."); ti.length && _i(oi); ) {
          const di = ti.shift();
          if (typeof di > "u" || di === "__proto__")
            return;
          if (di === "this") {
            let mi;
            return es(oi) && (mi = oi["@this"]), mi ?? oi;
          }
          if (oi = oi[di], !_i(oi) || typeof oi == "function" || typeof oi.nodeType == "number" || oi === vi)
            return;
        }
        return oi;
      }, getStyle: Si, inArray: function(ti, oi, di) {
        return wi(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }), oi.indexOf(ti, di);
      }, insertItem: function(ti, oi) {
        const di = ti.options.index, mi = oi.length;
        let Oi;
        for (Oi = ti.options.isInternal ? mi : 0; Oi < mi + 1; Oi++)
          if (!oi[Oi] || Vi(di) && di < Ni(oi[Oi].options.index, oi[Oi]._i) || oi[Oi].options.isInternal) {
            oi.splice(
              Oi,
              0,
              ti
            );
            break;
          }
        return Oi;
      }, isArray: Yi, isClass: $i, isDOMElement: is, isFunction: function(ti) {
        return typeof ti == "function";
      }, isNumber: Vi, isObject: es, isString: Ki, keys: function(ti) {
        return wi(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }), Object.keys(ti);
      }, merge: function() {
        let ti, oi = arguments, di = {};
        const mi = function(li, Li) {
          return typeof li != "object" && (li = {}), Ti(Li, function(Ui, Zi) {
            Zi !== "__proto__" && Zi !== "constructor" && (!es(Ui, !0) || $i(Ui) || is(Ui) ? li[Zi] = Li[Zi] : li[Zi] = mi(li[Zi] || {}, Ui));
          }), li;
        };
        oi[0] === !0 && (di = oi[1], oi = Array.prototype.slice.call(oi, 2));
        const Oi = oi.length;
        for (ti = 0; ti < Oi; ti++)
          di = mi(di, oi[ti]);
        return di;
      }, normalizeTickInterval: function(ti, oi, di, mi, Oi) {
        let li = ti;
        di = Ni(di, ki(ti));
        const Li = ti / di;
        for (oi || (oi = Oi ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], mi === !1 && (di === 1 ? oi = oi.filter(function(Ui) {
          return Ui % 1 === 0;
        }) : 0.1 >= di && (oi = [1 / di]))), mi = 0; mi < oi.length && (li = oi[mi], !(Oi && li * di >= ti || !Oi && Li <= (oi[mi] + (oi[mi + 1] || oi[mi])) / 2)); mi++)
          ;
        return li = Ci(li * di, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: Ti, offset: function(ti) {
        const oi = pi.documentElement;
        return ti = ti.parentElement || ti.parentNode ? ti.getBoundingClientRect() : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        }, { top: ti.top + (vi.pageYOffset || oi.scrollTop) - (oi.clientTop || 0), left: ti.left + (vi.pageXOffset || oi.scrollLeft) - (oi.clientLeft || 0), width: ti.width, height: ti.height };
      }, pad: function(ti, oi, di) {
        return Array((oi || 2) + 1 - String(ti).replace("-", "").length).join(di || "0") + ti;
      }, pick: Ni, pInt: zi, pushUnique: function(ti, oi) {
        return 0 > ti.indexOf(oi) && !!ti.push(oi);
      }, relativeLength: function(ti, oi, di) {
        return /%$/.test(ti) ? oi * parseFloat(ti) / 100 + (di || 0) : parseFloat(ti);
      }, removeEvent: Mi, splat: Ai, stableSort: function(ti, oi) {
        const di = ti.length;
        let mi, Oi;
        for (Oi = 0; Oi < di; Oi++)
          ti[Oi].safeI = Oi;
        for (ti.sort(function(li, Li) {
          return mi = oi(li, Li), mi === 0 ? li.safeI - Li.safeI : mi;
        }), Oi = 0; Oi < di; Oi++)
          delete ti[Oi].safeI;
      }, syncTimeout: function(ti, oi, di) {
        return 0 < oi ? setTimeout(ti, oi, di) : (ti.call(0, di), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: si, useSerialIds: function(ti) {
        return fi = Ni(ti, fi);
      }, wrap: function(ti, oi, di) {
        const mi = ti[oi];
        ti[oi] = function() {
          const Oi = arguments, li = this;
          return di.apply(this, [function() {
            return mi.apply(
              li,
              arguments.length ? arguments : Oi
            );
          }].concat([].slice.call(arguments)));
        };
      } }, ui;
    }), ri(ii, "Core/Chart/ChartDefaults.js", [], function() {
      return {
        alignThresholds: !1,
        panning: { enabled: !1, type: "x" },
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        allowMutatingData: !0,
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } },
        reflow: !0,
        type: "line",
        zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } },
        width: null,
        height: null,
        borderColor: "#334eff",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      };
    }), ri(ii, "Core/Color/Color.js", [ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      const { isNumber: zi, merge: Ki, pInt: Yi } = wi;
      class es {
        static parse($i) {
          return $i ? new es($i) : es.None;
        }
        constructor($i) {
          this.rgba = [NaN, NaN, NaN, NaN], this.input = $i;
          const Vi = hi.Color;
          if (Vi && Vi !== es)
            return new Vi($i);
          this.init($i);
        }
        init($i) {
          let Vi, _i;
          if (typeof $i == "object" && typeof $i.stops < "u")
            this.stops = $i.stops.map((ji) => new es(ji[1]));
          else if (typeof $i == "string") {
            if (this.input = $i = es.names[$i.toLowerCase()] || $i, $i.charAt(0) === "#") {
              var bi = $i.length, Ai = parseInt($i.substr(1), 16);
              bi === 7 ? Vi = [(Ai & 16711680) >> 16, (Ai & 65280) >> 8, Ai & 255, 1] : bi === 4 && (Vi = [(Ai & 3840) >> 4 | (Ai & 3840) >> 8, (Ai & 240) >> 4 | Ai & 240, (Ai & 15) << 4 | Ai & 15, 1]);
            }
            if (!Vi)
              for (Ai = es.parsers.length; Ai-- && !Vi; )
                _i = es.parsers[Ai], (bi = _i.regex.exec($i)) && (Vi = _i.parse(bi));
          }
          Vi && (this.rgba = Vi);
        }
        get($i) {
          const Vi = this.input, _i = this.rgba;
          if (typeof Vi == "object" && typeof this.stops < "u") {
            const bi = Ki(Vi);
            return bi.stops = [].slice.call(bi.stops), this.stops.forEach((Ai, ji) => {
              bi.stops[ji] = [
                bi.stops[ji][0],
                Ai.get($i)
              ];
            }), bi;
          }
          return _i && zi(_i[0]) ? $i === "rgb" || !$i && _i[3] === 1 ? "rgb(" + _i[0] + "," + _i[1] + "," + _i[2] + ")" : $i === "a" ? `${_i[3]}` : "rgba(" + _i.join(",") + ")" : Vi;
        }
        brighten($i) {
          const Vi = this.rgba;
          if (this.stops)
            this.stops.forEach(function(_i) {
              _i.brighten($i);
            });
          else if (zi($i) && $i !== 0)
            for (let _i = 0; 3 > _i; _i++)
              Vi[_i] += Yi(255 * $i), 0 > Vi[_i] && (Vi[_i] = 0), 255 < Vi[_i] && (Vi[_i] = 255);
          return this;
        }
        setOpacity($i) {
          return this.rgba[3] = $i, this;
        }
        tweenTo($i, Vi) {
          const _i = this.rgba, bi = $i.rgba;
          return !zi(_i[0]) || !zi(bi[0]) ? $i.input || "none" : ($i = bi[3] !== 1 || _i[3] !== 1, ($i ? "rgba(" : "rgb(") + Math.round(bi[0] + (_i[0] - bi[0]) * (1 - Vi)) + "," + Math.round(bi[1] + (_i[1] - bi[1]) * (1 - Vi)) + "," + Math.round(bi[2] + (_i[2] - bi[2]) * (1 - Vi)) + ($i ? "," + (bi[3] + (_i[3] - bi[3]) * (1 - Vi)) : "") + ")");
        }
      }
      return es.names = { white: "#ffffff", black: "#000000" }, es.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(is) {
        return [Yi(is[1]), Yi(is[2]), Yi(is[3]), parseFloat(is[4], 10)];
      } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(is) {
        return [
          Yi(is[1]),
          Yi(is[2]),
          Yi(is[3]),
          1
        ];
      } }], es.None = new es(""), es;
    }), ri(ii, "Core/Color/Palettes.js", [], function() {
      return { colors: "#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(" ") };
    }), ri(ii, "Core/Time.js", [ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      const { win: zi } = hi, { defined: Ki, error: Yi, extend: es, isObject: is, merge: $i, objectEach: Vi, pad: _i, pick: bi, splat: Ai, timeUnits: ji } = wi, Ni = hi.isSafari && zi.Intl && zi.Intl.DateTimeFormat.prototype.formatRange, gi = hi.isSafari && zi.Intl && !zi.Intl.DateTimeFormat.prototype.formatRange;
      class ki {
        constructor(Si) {
          this.options = {}, this.variableTimezone = this.useUTC = !1, this.Date = zi.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(Si);
        }
        get(Si, Ti) {
          if (this.variableTimezone || this.timezoneOffset) {
            const Mi = Ti.getTime(), Di = Mi - this.getTimezoneOffset(Ti);
            return Ti.setTime(Di), Si = Ti["getUTC" + Si](), Ti.setTime(Mi), Si;
          }
          return this.useUTC ? Ti["getUTC" + Si]() : Ti["get" + Si]();
        }
        set(Si, Ti, Mi) {
          if (this.variableTimezone || this.timezoneOffset) {
            if (Si === "Milliseconds" || Si === "Seconds" || Si === "Minutes" && this.getTimezoneOffset(Ti) % 36e5 === 0)
              return Ti["setUTC" + Si](Mi);
            var Di = this.getTimezoneOffset(Ti);
            return Di = Ti.getTime() - Di, Ti.setTime(Di), Ti["setUTC" + Si](Mi), Si = this.getTimezoneOffset(Ti), Di = Ti.getTime() + Si, Ti.setTime(Di);
          }
          return this.useUTC || Ni && Si === "FullYear" ? Ti["setUTC" + Si](Mi) : Ti["set" + Si](Mi);
        }
        update(Si = {}) {
          const Ti = bi(Si.useUTC, !0);
          this.options = Si = $i(!0, this.options, Si), this.Date = Si.Date || zi.Date || Date, this.timezoneOffset = (this.useUTC = Ti) && Si.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = Ti && !(!Si.getTimezoneOffset && !Si.timezone);
        }
        makeTime(Si, Ti, Mi, Di, ci, pi) {
          let vi, ui, fi;
          return this.useUTC ? (vi = this.Date.UTC.apply(0, arguments), ui = this.getTimezoneOffset(vi), vi += ui, fi = this.getTimezoneOffset(vi), ui !== fi ? vi += fi - ui : ui - 36e5 !== this.getTimezoneOffset(vi - 36e5) || gi || (vi -= 36e5)) : vi = new this.Date(Si, Ti, bi(Mi, 1), bi(Di, 0), bi(ci, 0), bi(pi, 0)).getTime(), vi;
        }
        timezoneOffsetFunction() {
          const Si = this, Ti = this.options, Mi = Ti.getTimezoneOffset, Di = Ti.moment || zi.moment;
          if (!this.useUTC)
            return function(ci) {
              return 6e4 * new Date(ci.toString()).getTimezoneOffset();
            };
          if (Ti.timezone) {
            if (Di)
              return function(ci) {
                return 6e4 * -Di.tz(ci, Ti.timezone).utcOffset();
              };
            Yi(25);
          }
          return this.useUTC && Mi ? function(ci) {
            return 6e4 * Mi(ci.valueOf());
          } : function() {
            return 6e4 * (Si.timezoneOffset || 0);
          };
        }
        dateFormat(Si, Ti, Mi) {
          if (!Ki(Ti) || isNaN(Ti))
            return hi.defaultOptions.lang && hi.defaultOptions.lang.invalidDate || "";
          Si = bi(Si, "%Y-%m-%d %H:%M:%S");
          const Di = this;
          var ci = new this.Date(Ti);
          const pi = this.get("Hours", ci), vi = this.get("Day", ci), ui = this.get("Date", ci), fi = this.get("Month", ci), si = this.get("FullYear", ci), ti = hi.defaultOptions.lang, oi = ti && ti.weekdays, di = ti && ti.shortWeekdays;
          return ci = es({ a: di ? di[vi] : oi[vi].substr(0, 3), A: oi[vi], d: _i(ui), e: _i(ui, 2, " "), w: vi, b: ti.shortMonths[fi], B: ti.months[fi], m: _i(fi + 1), o: fi + 1, y: si.toString().substr(2, 2), Y: si, H: _i(pi), k: pi, I: _i(pi % 12 || 12), l: pi % 12 || 12, M: _i(this.get("Minutes", ci)), p: 12 > pi ? "AM" : "PM", P: 12 > pi ? "am" : "pm", S: _i(ci.getSeconds()), L: _i(Math.floor(Ti % 1e3), 3) }, hi.dateFormats), Vi(ci, function(mi, Oi) {
            for (; Si.indexOf("%" + Oi) !== -1; )
              Si = Si.replace("%" + Oi, typeof mi == "function" ? mi.call(Di, Ti) : mi);
          }), Mi ? Si.substr(0, 1).toUpperCase() + Si.substr(1) : Si;
        }
        resolveDTLFormat(Si) {
          return is(Si, !0) ? Si : (Si = Ai(Si), {
            main: Si[0],
            from: Si[1],
            to: Si[2]
          });
        }
        getTimeTicks(Si, Ti, Mi, Di) {
          const ci = this, pi = [], vi = {};
          var ui = new ci.Date(Ti);
          const fi = Si.unitRange, si = Si.count || 1;
          let ti;
          if (Di = bi(Di, 1), Ki(Ti)) {
            if (ci.set("Milliseconds", ui, fi >= ji.second ? 0 : si * Math.floor(ci.get("Milliseconds", ui) / si)), fi >= ji.second && ci.set("Seconds", ui, fi >= ji.minute ? 0 : si * Math.floor(ci.get("Seconds", ui) / si)), fi >= ji.minute && ci.set("Minutes", ui, fi >= ji.hour ? 0 : si * Math.floor(ci.get("Minutes", ui) / si)), fi >= ji.hour && ci.set("Hours", ui, fi >= ji.day ? 0 : si * Math.floor(ci.get("Hours", ui) / si)), fi >= ji.day && ci.set("Date", ui, fi >= ji.month ? 1 : Math.max(1, si * Math.floor(ci.get(
              "Date",
              ui
            ) / si))), fi >= ji.month) {
              ci.set("Month", ui, fi >= ji.year ? 0 : si * Math.floor(ci.get("Month", ui) / si));
              var oi = ci.get("FullYear", ui);
            }
            fi >= ji.year && ci.set("FullYear", ui, oi - oi % si), fi === ji.week && (oi = ci.get("Day", ui), ci.set("Date", ui, ci.get("Date", ui) - oi + Di + (oi < Di ? -7 : 0))), oi = ci.get("FullYear", ui), Di = ci.get("Month", ui);
            const di = ci.get("Date", ui), mi = ci.get("Hours", ui);
            for (Ti = ui.getTime(), !ci.variableTimezone && ci.useUTC || !Ki(Mi) || (ti = Mi - Ti > 4 * ji.month || ci.getTimezoneOffset(Ti) !== ci.getTimezoneOffset(Mi)), Ti = ui.getTime(), ui = 1; Ti < Mi; )
              pi.push(Ti), Ti = fi === ji.year ? ci.makeTime(oi + ui * si, 0) : fi === ji.month ? ci.makeTime(oi, Di + ui * si) : !ti || fi !== ji.day && fi !== ji.week ? ti && fi === ji.hour && 1 < si ? ci.makeTime(oi, Di, di, mi + ui * si) : Ti + fi * si : ci.makeTime(oi, Di, di + ui * si * (fi === ji.day ? 1 : 7)), ui++;
            pi.push(Ti), fi <= ji.hour && 1e4 > pi.length && pi.forEach(function(Oi) {
              Oi % 18e5 === 0 && ci.dateFormat("%H%M%S%L", Oi) === "000000000" && (vi[Oi] = "day");
            });
          }
          return pi.info = es(Si, { higherRanks: vi, totalRange: fi * si }), pi;
        }
        getDateFormat(Si, Ti, Mi, Di) {
          const ci = this.dateFormat("%m-%d %H:%M:%S.%L", Ti), pi = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 };
          let vi, ui = "millisecond";
          for (vi in ji) {
            if (Si === ji.week && +this.dateFormat(
              "%w",
              Ti
            ) === Mi && ci.substr(6) === "00:00:00.000") {
              vi = "week";
              break;
            }
            if (ji[vi] > Si) {
              vi = ui;
              break;
            }
            if (pi[vi] && ci.substr(pi[vi]) !== "01-01 00:00:00.000".substr(pi[vi]))
              break;
            vi !== "week" && (ui = vi);
          }
          return this.resolveDTLFormat(Di[vi]).main;
        }
      }
      return ki;
    }), ri(ii, "Core/Defaults.js", [ii["Core/Chart/ChartDefaults.js"], ii["Core/Color/Color.js"], ii["Core/Globals.js"], ii["Core/Color/Palettes.js"], ii["Core/Time.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki, Yi, es) {
      const { isTouchDevice: is, svg: $i } = zi, { merge: Vi } = es, _i = {
        colors: Ki.colors,
        symbols: [
          "circle",
          "diamond",
          "square",
          "triangle",
          "triangle-down"
        ],
        lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " },
        global: {},
        time: {
          Date: void 0,
          getTimezoneOffset: void 0,
          timezone: void 0,
          timezoneOffset: 0,
          useUTC: !0
        },
        chart: hi,
        title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
        subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "center", widthAdjust: -44 },
        caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" },
        plotOptions: {},
        legend: {
          enabled: !0,
          align: "center",
          alignColumns: !0,
          className: "highcharts-no-tooltip",
          layout: "horizontal",
          itemMarginBottom: 2,
          itemMarginTop: 2,
          labelFormatter: function() {
            return this.name;
          },
          borderColor: "#999999",
          borderRadius: 0,
          navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" },
          itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" },
          itemHoverStyle: { color: "#000000" },
          itemHiddenStyle: { color: "#666666", textDecoration: "line-through" },
          shadow: !1,
          itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
          squareSymbol: !0,
          symbolPadding: 5,
          verticalAlign: "bottom",
          x: 0,
          y: 0,
          title: { style: { fontSize: "0.8em", fontWeight: "bold" } }
        },
        loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } },
        tooltip: {
          enabled: !0,
          animation: $i,
          borderRadius: 3,
          dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" },
          footerFormat: "",
          headerShape: "callout",
          hideDelay: 500,
          padding: 8,
          shape: "callout",
          shared: !1,
          snap: is ? 25 : 10,
          headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
          pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
          backgroundColor: "#ffffff",
          borderWidth: void 0,
          shadow: !0,
          stickOnContact: !1,
          style: { color: "#333333", cursor: "default", fontSize: "0.8em" },
          useHTML: !1
        },
        credits: {
          enabled: !0,
          href: "https://www.highcharts.com?credits",
          position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
          style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" },
          text: "Highcharts.com"
        }
      };
      _i.chart.styledMode = !1;
      const bi = new Yi(_i.time);
      return hi = { defaultOptions: _i, defaultTime: bi, getOptions: function() {
        return _i;
      }, setOptions: function(Ai) {
        return Vi(!0, _i, Ai), (Ai.time || Ai.global) && (zi.time ? zi.time.update(Vi(_i.global, _i.time, Ai.global, Ai.time)) : zi.time = bi), _i;
      } }, hi;
    }), ri(ii, "Core/Animation/Fx.js", [ii["Core/Color/Color.js"], ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { parse: Ki } = hi, { win: Yi } = wi, { isNumber: es, objectEach: is } = zi;
      class $i {
        constructor(_i, bi, Ai) {
          this.pos = NaN, this.options = bi, this.elem = _i, this.prop = Ai;
        }
        dSetter() {
          var _i = this.paths;
          const bi = _i && _i[0];
          _i = _i && _i[1];
          const Ai = this.now || 0;
          let ji = [];
          if (Ai !== 1 && bi && _i)
            if (bi.length === _i.length && 1 > Ai)
              for (let Ni = 0; Ni < _i.length; Ni++) {
                const gi = bi[Ni], ki = _i[Ni], Ci = [];
                for (let Si = 0; Si < ki.length; Si++) {
                  const Ti = gi[Si], Mi = ki[Si];
                  es(Ti) && es(Mi) && (ki[0] !== "A" || Si !== 4 && Si !== 5) ? Ci[Si] = Ti + Ai * (Mi - Ti) : Ci[Si] = Mi;
                }
                ji.push(Ci);
              }
            else
              ji = _i;
          else
            ji = this.toD || [];
          this.elem.attr("d", ji, void 0, !0);
        }
        update() {
          const _i = this.elem, bi = this.prop, Ai = this.now, ji = this.options.step;
          this[bi + "Setter"] ? this[bi + "Setter"]() : _i.attr ? _i.element && _i.attr(bi, Ai, null, !0) : _i.style[bi] = Ai + this.unit, ji && ji.call(_i, Ai, this);
        }
        run(_i, bi, Ai) {
          const ji = this, Ni = ji.options, gi = function(Si) {
            return gi.stopped ? !1 : ji.step(Si);
          }, ki = Yi.requestAnimationFrame || function(Si) {
            setTimeout(Si, 13);
          }, Ci = function() {
            for (let Si = 0; Si < $i.timers.length; Si++)
              $i.timers[Si]() || $i.timers.splice(Si--, 1);
            $i.timers.length && ki(Ci);
          };
          _i !== bi || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = _i, this.end = bi, this.unit = Ai, this.now = this.start, this.pos = 0, gi.elem = this.elem, gi.prop = this.prop, gi() && $i.timers.push(gi) === 1 && ki(Ci)) : (delete Ni.curAnim[this.prop], Ni.complete && Object.keys(Ni.curAnim).length === 0 && Ni.complete.call(this.elem));
        }
        step(_i) {
          const bi = +/* @__PURE__ */ new Date(), Ai = this.options, ji = this.elem, Ni = Ai.complete, gi = Ai.duration, ki = Ai.curAnim;
          let Ci;
          return ji.attr && !ji.element ? _i = !1 : _i || bi >= gi + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), Ci = ki[this.prop] = !0, is(ki, function(Si) {
            Si !== !0 && (Ci = !1);
          }), Ci && Ni && Ni.call(ji), _i = !1) : (this.pos = Ai.easing((bi - this.startTime) / gi), this.now = this.start + (this.end - this.start) * this.pos, this.update(), _i = !0), _i;
        }
        initPath(_i, bi, Ai) {
          function ji(ci, pi) {
            for (; ci.length < Mi; ) {
              var vi = ci[0];
              const ui = pi[Mi - ci.length];
              ui && vi[0] === "M" && (ci[0] = ui[0] === "C" ? ["C", vi[1], vi[2], vi[1], vi[2], vi[1], vi[2]] : ["L", vi[1], vi[2]]), ci.unshift(vi), Ci && (vi = ci.pop(), ci.push(ci[ci.length - 1], vi));
            }
          }
          function Ni(ci, pi) {
            for (; ci.length < Mi; )
              if (pi = ci[Math.floor(ci.length / Si) - 1].slice(), pi[0] === "C" && (pi[1] = pi[5], pi[2] = pi[6]), Ci) {
                const vi = ci[Math.floor(ci.length / Si)].slice();
                ci.splice(ci.length / 2, 0, pi, vi);
              } else
                ci.push(pi);
          }
          const gi = _i.startX, ki = _i.endX;
          Ai = Ai.slice();
          const Ci = _i.isArea, Si = Ci ? 2 : 1;
          let Ti, Mi, Di;
          if (bi = bi && bi.slice(), !bi)
            return [
              Ai,
              Ai
            ];
          if (gi && ki && ki.length) {
            for (_i = 0; _i < gi.length; _i++)
              if (gi[_i] === ki[0]) {
                Ti = _i;
                break;
              } else if (gi[0] === ki[ki.length - gi.length + _i]) {
                Ti = _i, Di = !0;
                break;
              } else if (gi[gi.length - 1] === ki[ki.length - gi.length + _i]) {
                Ti = gi.length - _i;
                break;
              }
            typeof Ti > "u" && (bi = []);
          }
          return bi.length && es(Ti) && (Mi = Ai.length + Ti * Si, Di ? (ji(bi, Ai), Ni(Ai, bi)) : (ji(Ai, bi), Ni(bi, Ai))), [bi, Ai];
        }
        fillSetter() {
          $i.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, Ki(this.start).tweenTo(Ki(this.end), this.pos), void 0, !0);
        }
      }
      return $i.timers = [], $i;
    }), ri(
      ii,
      "Core/Animation/AnimationUtilities.js",
      [ii["Core/Animation/Fx.js"], ii["Core/Utilities.js"]],
      function(hi, wi) {
        function zi(ji) {
          return Vi(ji) ? _i({ duration: 500, defer: 0 }, ji) : { duration: ji ? 500 : 0, defer: 0 };
        }
        function Ki(ji, Ni) {
          let gi = hi.timers.length;
          for (; gi--; )
            hi.timers[gi].elem !== ji || Ni && Ni !== hi.timers[gi].prop || (hi.timers[gi].stopped = !0);
        }
        const { defined: Yi, getStyle: es, isArray: is, isNumber: $i, isObject: Vi, merge: _i, objectEach: bi, pick: Ai } = wi;
        return { animate: function(ji, Ni, gi) {
          let ki, Ci = "", Si, Ti, Mi;
          Vi(gi) || (Mi = arguments, gi = { duration: Mi[2], easing: Mi[3], complete: Mi[4] }), $i(gi.duration) || (gi.duration = 400), gi.easing = typeof gi.easing == "function" ? gi.easing : Math[gi.easing] || Math.easeInOutSine, gi.curAnim = _i(Ni), bi(Ni, function(Di, ci) {
            Ki(ji, ci), Ti = new hi(ji, gi, ci), Si = void 0, ci === "d" && is(Ni.d) ? (Ti.paths = Ti.initPath(ji, ji.pathArray, Ni.d), Ti.toD = Ni.d, ki = 0, Si = 1) : ji.attr ? ki = ji.attr(ci) : (ki = parseFloat(es(ji, ci)) || 0, ci !== "opacity" && (Ci = "px")), Si || (Si = Di), typeof Si == "string" && Si.match("px") && (Si = Si.replace(/px/g, "")), Ti.run(ki, Si, Ci);
          });
        }, animObject: zi, getDeferredAnimation: function(ji, Ni, gi) {
          const ki = zi(Ni);
          let Ci = 0, Si = 0;
          return (gi ? [gi] : ji.series).forEach((Ti) => {
            Ti = zi(Ti.options.animation), Ci = Ni && Yi(Ni.defer) ? ki.defer : Math.max(Ci, Ti.duration + Ti.defer), Si = Math.min(ki.duration, Ti.duration);
          }), ji.renderer.forExport && (Ci = 0), { defer: Math.max(0, Ci - Si), duration: Math.min(Ci, Si) };
        }, setAnimation: function(ji, Ni) {
          Ni.renderer.globalAnimation = Ai(ji, Ni.options.chart.animation, !0);
        }, stop: Ki };
      }
    ), ri(ii, "Core/Renderer/HTML/AST.js", [ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      const { SVG_NS: zi, win: Ki } = hi, { attr: Yi, createElement: es, css: is, error: $i, isFunction: Vi, isString: _i, objectEach: bi, splat: Ai } = wi;
      ({ trustedTypes: wi } = Ki);
      const ji = wi && Vi(wi.createPolicy) && wi.createPolicy("highcharts", { createHTML: (Ci) => Ci });
      wi = ji ? ji.createHTML("") : "";
      try {
        var Ni = !!new DOMParser().parseFromString(wi, "text/html");
      } catch {
        Ni = !1;
      }
      const gi = Ni;
      class ki {
        static filterUserAttributes(Si) {
          return bi(Si, (Ti, Mi) => {
            let Di = !0;
            ki.allowedAttributes.indexOf(Mi) === -1 && (Di = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(Mi) !== -1 && (Di = _i(Ti) && ki.allowedReferences.some((ci) => Ti.indexOf(ci) === 0)), Di || ($i(33, !1, void 0, { "Invalid attribute in config": `${Mi}` }), delete Si[Mi]), _i(Ti) && Si[Mi] && (Si[Mi] = Ti.replace(
              /</g,
              "&lt;"
            ));
          }), Si;
        }
        static parseStyle(Si) {
          return Si.split(";").reduce((Ti, Mi) => {
            Mi = Mi.split(":").map((ci) => ci.trim());
            const Di = Mi.shift();
            return Di && Mi.length && (Ti[Di.replace(/-([a-z])/g, (ci) => ci[1].toUpperCase())] = Mi.join(":")), Ti;
          }, {});
        }
        static setElementHTML(Si, Ti) {
          Si.innerHTML = ki.emptyHTML, Ti && new ki(Ti).addToDOM(Si);
        }
        constructor(Si) {
          this.nodes = typeof Si == "string" ? this.parseMarkup(Si) : Si;
        }
        addToDOM(Si) {
          function Ti(Mi, Di) {
            let ci;
            return Ai(Mi).forEach(function(pi) {
              var vi = pi.tagName;
              const ui = pi.textContent ? hi.doc.createTextNode(pi.textContent) : void 0, fi = ki.bypassHTMLFiltering;
              let si;
              if (vi)
                if (vi === "#text")
                  si = ui;
                else if (ki.allowedTags.indexOf(vi) !== -1 || fi) {
                  vi = hi.doc.createElementNS(vi === "svg" ? zi : Di.namespaceURI || zi, vi);
                  const ti = pi.attributes || {};
                  bi(pi, function(oi, di) {
                    di !== "tagName" && di !== "attributes" && di !== "children" && di !== "style" && di !== "textContent" && (ti[di] = oi);
                  }), Yi(vi, fi ? ti : ki.filterUserAttributes(ti)), pi.style && is(vi, pi.style), ui && vi.appendChild(ui), Ti(pi.children || [], vi), si = vi;
                } else
                  $i(33, !1, void 0, { "Invalid tagName in config": vi });
              si && Di.appendChild(si), ci = si;
            }), ci;
          }
          return Ti(this.nodes, Si);
        }
        parseMarkup(Si) {
          const Ti = [];
          if (Si = Si.trim().replace(/ style=(["'])/g, " data-style=$1"), gi)
            Si = new DOMParser().parseFromString(ji ? ji.createHTML(Si) : Si, "text/html");
          else {
            const Di = es("div");
            Di.innerHTML = Si, Si = { body: Di };
          }
          const Mi = (Di, ci) => {
            var pi = Di.nodeName.toLowerCase();
            const vi = { tagName: pi };
            if (pi === "#text" && (vi.textContent = Di.textContent || ""), pi = Di.attributes) {
              const ui = {};
              [].forEach.call(pi, (fi) => {
                fi.name === "data-style" ? vi.style = ki.parseStyle(fi.value) : ui[fi.name] = fi.value;
              }), vi.attributes = ui;
            }
            if (Di.childNodes.length) {
              const ui = [];
              [].forEach.call(Di.childNodes, (fi) => {
                Mi(
                  fi,
                  ui
                );
              }), ui.length && (vi.children = ui);
            }
            ci.push(vi);
          };
          return [].forEach.call(Si.body.childNodes, (Di) => Mi(Di, Ti)), Ti;
        }
      }
      return ki.allowedAttributes = "alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" "), ki.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "), ki.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" "), ki.emptyHTML = wi, ki.bypassHTMLFiltering = !1, ki;
    }), ri(ii, "Core/Templating.js", [ii["Core/Defaults.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      function zi(gi = "", ki, Ci) {
        const Si = /\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g, Ti = /\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g, Mi = [], Di = /f$/, ci = /\.([0-9])/, pi = Yi.lang, vi = Ci && Ci.time || es, ui = Ci && Ci.numberFormatter || Ki, fi = (li = "") => {
          let Li;
          return li === "true" ? !0 : li === "false" ? !1 : (Li = Number(li)).toString() === li ? Li : $i(li, ki);
        };
        let si, ti, oi = 0, di;
        for (; (si = Si.exec(gi)) !== null; ) {
          const li = Ti.exec(si[1]);
          li && (si = li, di = !0), ti && ti.isBlock || (ti = {
            ctx: ki,
            expression: si[1],
            find: si[0],
            isBlock: si[1].charAt(0) === "#",
            start: si.index,
            startInner: si.index + si[0].length,
            length: si[0].length
          });
          var mi = si[1].split(" ")[0].replace("#", "");
          if (Ni[mi] && (ti.isBlock && mi === ti.fn && oi++, ti.fn || (ti.fn = mi)), mi = si[1] === "else", ti.isBlock && ti.fn && (si[1] === `/${ti.fn}` || mi))
            if (oi)
              mi || oi--;
            else {
              var Oi = ti.startInner;
              Oi = gi.substr(Oi, si.index - Oi), ti.body === void 0 ? (ti.body = Oi, ti.startInner = si.index + si[0].length) : ti.elseBody = Oi, ti.find += Oi + si[0], mi || (Mi.push(ti), ti = void 0);
            }
          else
            ti.isBlock || Mi.push(ti);
          if (li && (ti == null || !ti.isBlock))
            break;
        }
        return Mi.forEach((li) => {
          const { body: Li, elseBody: Ui, expression: Zi, fn: rs } = li;
          var Bi;
          if (rs) {
            var ni = [li], Pi = Zi.split(" ");
            for (Bi = Ni[rs].length; Bi--; )
              ni.unshift(fi(Pi[Bi + 1]));
            Bi = Ni[rs].apply(ki, ni), li.isBlock && typeof Bi == "boolean" && (Bi = zi(Bi ? Li : Ui, ki));
          } else
            ni = Zi.split(":"), Bi = fi(ni.shift() || ""), ni.length && typeof Bi == "number" && (ni = ni.join(":"), Di.test(ni) ? (Pi = parseInt((ni.match(ci) || ["", "-1"])[1], 10), Bi !== null && (Bi = ui(Bi, Pi, pi.decimalPoint, -1 < ni.indexOf(",") ? pi.thousandsSep : ""))) : Bi = vi.dateFormat(ni, Bi));
          gi = gi.replace(li.find, Ai(Bi, ""));
        }), di ? zi(gi, ki, Ci) : gi;
      }
      function Ki(gi, ki, Ci, Si) {
        gi = +gi || 0, ki = +ki;
        const Ti = Yi.lang;
        var Mi = (gi.toString().split(".")[1] || "").split("e")[0].length;
        const Di = gi.toString().split("e"), ci = ki;
        if (ki === -1)
          ki = Math.min(Mi, 20);
        else if (!_i(ki))
          ki = 2;
        else if (ki && Di[1] && 0 > Di[1]) {
          var pi = ki + +Di[1];
          0 <= pi ? (Di[0] = (+Di[0]).toExponential(pi).split("e")[0], ki = pi) : (Di[0] = Di[0].split(".")[0] || 0, gi = 20 > ki ? (Di[0] * Math.pow(10, Di[1])).toFixed(ki) : 0, Di[1] = 0);
        }
        pi = (Math.abs(Di[1] ? Di[0] : gi) + Math.pow(10, -Math.max(ki, Mi) - 1)).toFixed(ki), Mi = String(ji(pi));
        const vi = 3 < Mi.length ? Mi.length % 3 : 0;
        return Ci = Ai(Ci, Ti.decimalPoint), Si = Ai(Si, Ti.thousandsSep), gi = (0 > gi ? "-" : "") + (vi ? Mi.substr(0, vi) + Si : ""), gi = 0 > +Di[1] && !ci ? "0" : gi + Mi.substr(vi).replace(/(\d{3})(?=\d)/g, "$1" + Si), ki && (gi += Ci + pi.slice(-ki)), Di[1] && +gi != 0 && (gi += "e" + Di[1]), gi;
      }
      const { defaultOptions: Yi, defaultTime: es } = hi, { extend: is, getNestedProperty: $i, isArray: Vi, isNumber: _i, isObject: bi, pick: Ai, pInt: ji } = wi, Ni = { add: (gi, ki) => gi + ki, divide: (gi, ki) => ki !== 0 ? gi / ki : "", eq: (gi, ki) => gi == ki, each: function(gi) {
        const ki = arguments[arguments.length - 1];
        return Vi(gi) ? gi.map((Ci, Si) => zi(ki.body, is(bi(Ci) ? Ci : { "@this": Ci }, { "@index": Si, "@first": Si === 0, "@last": Si === gi.length - 1 }))).join("") : !1;
      }, ge: (gi, ki) => gi >= ki, gt: (gi, ki) => gi > ki, if: (gi) => !!gi, le: (gi, ki) => gi <= ki, lt: (gi, ki) => gi < ki, multiply: (gi, ki) => gi * ki, ne: (gi, ki) => gi != ki, subtract: (gi, ki) => gi - ki, unless: (gi) => !gi };
      return { dateFormat: function(gi, ki, Ci) {
        return es.dateFormat(gi, ki, Ci);
      }, format: zi, helpers: Ni, numberFormat: Ki };
    }), ri(ii, "Core/Renderer/RendererUtilities.js", [ii["Core/Utilities.js"]], function(hi) {
      const { clamp: wi, pick: zi, stableSort: Ki } = hi;
      var Yi;
      return function(es) {
        function is($i, Vi, _i) {
          const bi = $i;
          var Ai = bi.reducedLen || Vi, ji = (Ti, Mi) => (Mi.rank || 0) - (Ti.rank || 0);
          const Ni = (Ti, Mi) => Ti.target - Mi.target;
          let gi, ki = !0, Ci = [], Si = 0;
          for (gi = $i.length; gi--; )
            Si += $i[gi].size;
          if (Si > Ai) {
            for (Ki($i, ji), Si = gi = 0; Si <= Ai; )
              Si += $i[gi].size, gi++;
            Ci = $i.splice(gi - 1, $i.length);
          }
          for (Ki($i, Ni), $i = $i.map((Ti) => ({ size: Ti.size, targets: [Ti.target], align: zi(Ti.align, 0.5) })); ki; ) {
            for (gi = $i.length; gi--; )
              Ai = $i[gi], ji = (Math.min.apply(0, Ai.targets) + Math.max.apply(0, Ai.targets)) / 2, Ai.pos = wi(ji - Ai.size * Ai.align, 0, Vi - Ai.size);
            for (gi = $i.length, ki = !1; gi--; )
              0 < gi && $i[gi - 1].pos + $i[gi - 1].size > $i[gi].pos && ($i[gi - 1].size += $i[gi].size, $i[gi - 1].targets = $i[gi - 1].targets.concat($i[gi].targets), $i[gi - 1].align = 0.5, $i[gi - 1].pos + $i[gi - 1].size > Vi && ($i[gi - 1].pos = Vi - $i[gi - 1].size), $i.splice(gi, 1), ki = !0);
          }
          return bi.push.apply(bi, Ci), gi = 0, $i.some((Ti) => {
            let Mi = 0;
            return (Ti.targets || []).some(() => (bi[gi].pos = Ti.pos + Mi, typeof _i < "u" && Math.abs(bi[gi].pos - bi[gi].target) > _i ? (bi.slice(0, gi + 1).forEach((Di) => delete Di.pos), bi.reducedLen = (bi.reducedLen || Vi) - 0.1 * Vi, bi.reducedLen > 0.1 * Vi && is(bi, Vi, _i), !0) : (Mi += bi[gi].size, gi++, !1)));
          }), Ki(bi, Ni), bi;
        }
        es.distribute = is;
      }(Yi || (Yi = {})), Yi;
    }), ri(ii, "Core/Renderer/SVG/SVGElement.js", [
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Color/Color.js"],
      ii["Core/Globals.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki) {
      const { animate: Yi, animObject: es, stop: is } = hi, { deg2rad: $i, doc: Vi, svg: _i, SVG_NS: bi, win: Ai } = zi, { addEvent: ji, attr: Ni, createElement: gi, css: ki, defined: Ci, erase: Si, extend: Ti, fireEvent: Mi, isArray: Di, isFunction: ci, isObject: pi, isString: vi, merge: ui, objectEach: fi, pick: si, pInt: ti, syncTimeout: oi, uniqueKey: di } = Ki;
      class mi {
        constructor() {
          this.element = void 0, this.onEvents = {}, this.opacity = 1, this.renderer = void 0, this.SVG_NS = bi;
        }
        _defaultGetter(li) {
          return li = si(this[li + "Value"], this[li], this.element ? this.element.getAttribute(li) : null, 0), /^[\-0-9\.]+$/.test(li) && (li = parseFloat(li)), li;
        }
        _defaultSetter(li, Li, Ui) {
          Ui.setAttribute(Li, li);
        }
        add(li) {
          const Li = this.renderer, Ui = this.element;
          let Zi;
          return li && (this.parentGroup = li), typeof this.textStr < "u" && this.element.nodeName === "text" && Li.buildText(this), this.added = !0, (!li || li.handleZ || this.zIndex) && (Zi = this.zIndexSetter()), Zi || (li ? li.element : Li.box).appendChild(Ui), this.onAdd && this.onAdd(), this;
        }
        addClass(li, Li) {
          const Ui = Li ? "" : this.attr("class") || "";
          return li = (li || "").split(/ /g).reduce(function(Zi, rs) {
            return Ui.indexOf(rs) === -1 && Zi.push(rs), Zi;
          }, Ui ? [Ui] : []).join(" "), li !== Ui && this.attr("class", li), this;
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), this.doTransform = !1);
        }
        align(li, Li, Ui) {
          const Zi = {};
          var rs = this.renderer, Bi = rs.alignedObjects, ni;
          let Pi, Hi;
          li ? (this.alignOptions = li, this.alignByTranslate = Li, (!Ui || vi(Ui)) && (this.alignTo = ni = Ui || "renderer", Si(Bi, this), Bi.push(this), Ui = void 0)) : (li = this.alignOptions, Li = this.alignByTranslate, ni = this.alignTo), Ui = si(Ui, rs[ni], ni === "scrollablePlotBox" ? rs.plotBox : void 0, rs), ni = li.align;
          const Ri = li.verticalAlign;
          return rs = (Ui.x || 0) + (li.x || 0), Bi = (Ui.y || 0) + (li.y || 0), ni === "right" ? Pi = 1 : ni === "center" && (Pi = 2), Pi && (rs += (Ui.width - (li.width || 0)) / Pi), Zi[Li ? "translateX" : "x"] = Math.round(rs), Ri === "bottom" ? Hi = 1 : Ri === "middle" && (Hi = 2), Hi && (Bi += (Ui.height - (li.height || 0)) / Hi), Zi[Li ? "translateY" : "y"] = Math.round(Bi), this[this.placed ? "animate" : "attr"](Zi), this.placed = !0, this.alignAttr = Zi, this;
        }
        alignSetter(li) {
          const Li = { left: "start", center: "middle", right: "end" };
          Li[li] && (this.alignValue = li, this.element.setAttribute("text-anchor", Li[li]));
        }
        animate(li, Li, Ui) {
          const Zi = es(si(Li, this.renderer.globalAnimation, !0));
          return Li = Zi.defer, Vi.hidden && (Zi.duration = 0), Zi.duration !== 0 ? (Ui && (Zi.complete = Ui), oi(() => {
            this.element && Yi(this, li, Zi);
          }, Li)) : (this.attr(li, void 0, Ui || Zi.complete), fi(li, function(rs, Bi) {
            Zi.step && Zi.step.call(this, rs, { prop: Bi, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(li) {
          const Li = this.element;
          li.indexOf("contrast") !== -1 && (li = li.replace(/contrast/g, this.renderer.getContrast(Li.style.fill)));
          var Ui = li.split(" ");
          if (li = Ui[Ui.length - 1], (Ui = Ui[0]) && Ui !== "none" && zi.svg) {
            this.fakeTS = !0, Ui = Ui.replace(/(^[\d\.]+)(.*?)$/g, function(Bi, ni, Pi) {
              return 2 * Number(ni) + Pi;
            }), this.removeTextOutline();
            const Zi = Vi.createElementNS(bi, "tspan");
            Ni(Zi, { class: "highcharts-text-outline", fill: li, stroke: li, "stroke-width": Ui, "stroke-linejoin": "round" }), li = Li.querySelector("textPath") || Li, [].forEach.call(li.childNodes, (Bi) => {
              const ni = Bi.cloneNode(!0);
              ni.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((Pi) => ni.removeAttribute(Pi)), Zi.appendChild(ni);
            });
            let rs = 0;
            [].forEach.call(li.querySelectorAll("text tspan"), (Bi) => {
              rs += Number(Bi.getAttribute("dy"));
            }), Ui = Vi.createElementNS(bi, "tspan"), Ui.textContent = "​", Ni(Ui, { x: Number(Li.getAttribute("x")), dy: -rs }), Zi.appendChild(Ui), li.insertBefore(Zi, li.firstChild);
          }
        }
        attr(li, Li, Ui, Zi) {
          const rs = this.element, Bi = mi.symbolCustomAttribs;
          let ni, Pi, Hi = this, Ri, qi;
          return typeof li == "string" && typeof Li < "u" && (ni = li, li = {}, li[ni] = Li), typeof li == "string" ? Hi = (this[li + "Getter"] || this._defaultGetter).call(this, li, rs) : (fi(li, function(ai, xi) {
            Ri = !1, Zi || is(this, xi), this.symbolName && Bi.indexOf(xi) !== -1 && (Pi || (this.symbolAttr(li), Pi = !0), Ri = !0), !this.rotation || xi !== "x" && xi !== "y" || (this.doTransform = !0), Ri || (qi = this[xi + "Setter"] || this._defaultSetter, qi.call(this, ai, xi, rs));
          }, this), this.afterSetters()), Ui && Ui.call(this), Hi;
        }
        clip(li) {
          return this.attr("clip-path", li ? "url(" + this.renderer.url + "#" + li.id + ")" : "none");
        }
        crisp(li, Li) {
          Li = Li || li.strokeWidth || 0;
          const Ui = Math.round(Li) % 2 / 2;
          return li.x = Math.floor(li.x || this.x || 0) + Ui, li.y = Math.floor(li.y || this.y || 0) + Ui, li.width = Math.floor((li.width || this.width || 0) - 2 * Ui), li.height = Math.floor((li.height || this.height || 0) - 2 * Ui), Ci(li.strokeWidth) && (li.strokeWidth = Li), li;
        }
        complexColor(li, Li, Ui) {
          const Zi = this.renderer;
          let rs, Bi, ni, Pi, Hi, Ri, qi, ai, xi, yi, Gi = [], Xi;
          Mi(this.renderer, "complexColor", { args: arguments }, function() {
            if (li.radialGradient ? Bi = "radialGradient" : li.linearGradient && (Bi = "linearGradient"), Bi) {
              if (ni = li[Bi], Hi = Zi.gradients, Ri = li.stops, xi = Ui.radialReference, Di(ni) && (li[Bi] = ni = { x1: ni[0], y1: ni[1], x2: ni[2], y2: ni[3], gradientUnits: "userSpaceOnUse" }), Bi === "radialGradient" && xi && !Ci(ni.gradientUnits) && (Pi = ni, ni = ui(ni, Zi.getRadialAttr(xi, Pi), { gradientUnits: "userSpaceOnUse" })), fi(ni, function(Wi, ts) {
                ts !== "id" && Gi.push(ts, Wi);
              }), fi(Ri, function(Wi) {
                Gi.push(Wi);
              }), Gi = Gi.join(","), Hi[Gi])
                yi = Hi[Gi].attr("id");
              else {
                ni.id = yi = di();
                const Wi = Hi[Gi] = Zi.createElement(Bi).attr(ni).add(Zi.defs);
                Wi.radAttr = Pi, Wi.stops = [], Ri.forEach(function(ts) {
                  ts[1].indexOf("rgba") === 0 ? (rs = wi.parse(ts[1]), qi = rs.get("rgb"), ai = rs.get("a")) : (qi = ts[1], ai = 1), ts = Zi.createElement("stop").attr({ offset: ts[0], "stop-color": qi, "stop-opacity": ai }).add(Wi), Wi.stops.push(ts);
                });
              }
              Xi = "url(" + Zi.url + "#" + yi + ")", Ui.setAttribute(Li, Xi), Ui.gradient = Gi, li.toString = function() {
                return Xi;
              };
            }
          });
        }
        css(li) {
          const Li = this.styles, Ui = {}, Zi = this.element;
          let rs, Bi = !Li;
          if (Li && fi(li, function(ni, Pi) {
            Li && Li[Pi] !== ni && (Ui[Pi] = ni, Bi = !0);
          }), Bi) {
            Li && (li = Ti(Li, Ui)), li.width === null || li.width === "auto" ? delete this.textWidth : Zi.nodeName.toLowerCase() === "text" && li.width && (rs = this.textWidth = ti(li.width)), this.styles = li, rs && !_i && this.renderer.forExport && delete li.width;
            const ni = ui(li);
            Zi.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((Pi) => ni && delete ni[Pi]), ni.color && (ni.fill = ni.color)), ki(Zi, ni);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), li.textOutline && this.applyTextOutline(li.textOutline)), this;
        }
        dashstyleSetter(li) {
          let Li = this["stroke-width"];
          if (Li === "inherit" && (Li = 1), li = li && li.toLowerCase()) {
            const Ui = li.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (li = Ui.length; li--; )
              Ui[li] = "" + ti(Ui[li]) * si(Li, NaN);
            li = Ui.join(",").replace(/NaN/g, "none"), this.element.setAttribute(
              "stroke-dasharray",
              li
            );
          }
        }
        destroy() {
          const li = this;
          var Li = li.element || {};
          const Ui = li.renderer;
          var Zi = Li.ownerSVGElement;
          let rs = Li.nodeName === "SPAN" && li.parentGroup || void 0;
          if (Li.onclick = Li.onmouseout = Li.onmouseover = Li.onmousemove = Li.point = null, is(li), li.clipPath && Zi) {
            const Bi = li.clipPath;
            [].forEach.call(Zi.querySelectorAll("[clip-path],[CLIP-PATH]"), function(ni) {
              -1 < ni.getAttribute("clip-path").indexOf(Bi.element.id) && ni.removeAttribute("clip-path");
            }), li.clipPath = Bi.destroy();
          }
          if (li.stops) {
            for (Zi = 0; Zi < li.stops.length; Zi++)
              li.stops[Zi].destroy();
            li.stops.length = 0, li.stops = void 0;
          }
          for (li.safeRemoveChild(Li); rs && rs.div && rs.div.childNodes.length === 0; )
            Li = rs.parentGroup, li.safeRemoveChild(rs.div), delete rs.div, rs = Li;
          li.alignTo && Si(Ui.alignedObjects, li), fi(li, function(Bi, ni) {
            li[ni] && li[ni].parentGroup === li && li[ni].destroy && li[ni].destroy(), delete li[ni];
          });
        }
        dSetter(li, Li, Ui) {
          Di(li) && (typeof li[0] == "string" && (li = this.renderer.pathToSegments(li)), this.pathArray = li, li = li.reduce((Zi, rs, Bi) => rs && rs.join ? (Bi ? Zi + " " : "") + rs.join(" ") : (rs || "").toString(), "")), /(NaN| {2}|^$)/.test(li) && (li = "M 0 0"), this[Li] !== li && (Ui.setAttribute(
            Li,
            li
          ), this[Li] = li);
        }
        fadeOut(li) {
          const Li = this;
          Li.animate({ opacity: 0 }, { duration: si(li, 150), complete: function() {
            Li.hide();
          } });
        }
        fillSetter(li, Li, Ui) {
          typeof li == "string" ? Ui.setAttribute(Li, li) : li && this.complexColor(li, Li, Ui);
        }
        getBBox(li, Li) {
          const { alignValue: Ui, element: Zi, renderer: rs, styles: Bi, textStr: ni } = this, { cache: Pi, cacheKeys: Hi } = rs;
          var Ri = Zi.namespaceURI === this.SVG_NS;
          Li = si(Li, this.rotation, 0);
          var qi = rs.styledMode ? Zi && mi.prototype.getStyle.call(Zi, "font-size") : Bi && Bi.fontSize;
          let ai, xi;
          if (Ci(ni) && (xi = ni.toString(), xi.indexOf("<") === -1 && (xi = xi.replace(
            /[0-9]/g,
            "0"
          )), xi += ["", rs.rootFontSize, qi, Li, this.textWidth, Ui, Bi && Bi.textOverflow, Bi && Bi.fontWeight].join()), xi && !li && (ai = Pi[xi]), !ai) {
            if (Ri || rs.forExport) {
              try {
                var yi = this.fakeTS && function(ss) {
                  const os = Zi.querySelector(".highcharts-text-outline");
                  os && ki(os, { display: ss });
                };
                ci(yi) && yi("none"), ai = Zi.getBBox ? Ti({}, Zi.getBBox()) : { width: Zi.offsetWidth, height: Zi.offsetHeight, x: 0, y: 0 }, ci(yi) && yi("");
              } catch {
              }
              (!ai || 0 > ai.width) && (ai = { x: 0, y: 0, width: 0, height: 0 });
            } else
              ai = this.htmlGetBBox();
            if (yi = ai.width, li = ai.height, Ri && (ai.height = li = { "11px,17": 14, "13px,20": 16 }[`${qi || ""},${Math.round(li)}`] || li), Li) {
              Ri = Number(Zi.getAttribute("y") || 0) - ai.y, qi = { right: 1, center: 0.5 }[Ui || 0] || 0;
              var Gi = Li * $i, Xi = (Li - 90) * $i, Wi = yi * Math.cos(Gi);
              Li = yi * Math.sin(Gi);
              var ts = Math.cos(Xi);
              Gi = Math.sin(Xi), yi = ai.x + qi * (yi - Wi) + Ri * ts, Xi = yi + Wi, ts = Xi - li * ts, Wi = ts - Wi, Ri = ai.y + Ri - qi * Li + Ri * Gi, qi = Ri + Li, li = qi - li * Gi, Li = li - Li, ai.x = Math.min(yi, Xi, ts, Wi), ai.y = Math.min(Ri, qi, li, Li), ai.width = Math.max(yi, Xi, ts, Wi) - ai.x, ai.height = Math.max(Ri, qi, li, Li) - ai.y;
            }
          }
          if (xi && (ni === "" || 0 < ai.height)) {
            for (; 250 < Hi.length; )
              delete Pi[Hi.shift()];
            Pi[xi] || Hi.push(xi), Pi[xi] = ai;
          }
          return ai;
        }
        getStyle(li) {
          return Ai.getComputedStyle(this.element || this, "").getPropertyValue(li);
        }
        hasClass(li) {
          return ("" + this.attr("class")).split(" ").indexOf(li) !== -1;
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        init(li, Li) {
          this.element = Li === "span" ? gi(Li) : Vi.createElementNS(this.SVG_NS, Li), this.renderer = li, Mi(this, "afterInit");
        }
        on(li, Li) {
          const { onEvents: Ui } = this;
          return Ui[li] && Ui[li](), Ui[li] = ji(this.element, li, Li), this;
        }
        opacitySetter(li, Li, Ui) {
          this.opacity = li = Number(Number(li).toFixed(3)), Ui.setAttribute(Li, li);
        }
        removeClass(li) {
          return this.attr(
            "class",
            ("" + this.attr("class")).replace(vi(li) ? new RegExp(`(^| )${li}( |$)`) : li, " ").replace(/ +/g, " ").trim()
          );
        }
        removeTextOutline() {
          const li = this.element.querySelector("tspan.highcharts-text-outline");
          li && this.safeRemoveChild(li);
        }
        safeRemoveChild(li) {
          const Li = li.parentNode;
          Li && Li.removeChild(li);
        }
        setRadialReference(li) {
          const Li = this.element.gradient && this.renderer.gradients[this.element.gradient];
          return this.element.radialReference = li, Li && Li.radAttr && Li.animate(this.renderer.getRadialAttr(li, Li.radAttr)), this;
        }
        setTextPath(li, Li) {
          Li = ui(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, Li);
          const Ui = this.renderer.url, Zi = this.text || this, rs = Zi.textPath, { attributes: Bi, enabled: ni } = Li;
          return li = li || rs && rs.path, rs && rs.undo(), li && ni ? (Li = ji(Zi, "afterModifyTree", (Pi) => {
            if (li && ni) {
              let Ri = li.attr("id");
              Ri || li.attr("id", Ri = di());
              var Hi = { x: 0, y: 0 };
              Ci(Bi.dx) && (Hi.dx = Bi.dx, delete Bi.dx), Ci(Bi.dy) && (Hi.dy = Bi.dy, delete Bi.dy), Zi.attr(Hi), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy()), Hi = Pi.nodes.slice(0), Pi.nodes.length = 0, Pi.nodes[0] = { tagName: "textPath", attributes: Ti(
                Bi,
                { "text-anchor": Bi.textAnchor, href: `${Ui}#${Ri}` }
              ), children: Hi };
            }
          }), Zi.textPath = { path: li, undo: Li }) : (Zi.attr({ dx: 0, dy: 0 }), delete Zi.textPath), this.added && (Zi.textCache = "", this.renderer.buildText(Zi)), this;
        }
        shadow(li) {
          var Li;
          const { renderer: Ui } = this, Zi = ui(((Li = this.parentGroup) === null || Li === void 0 ? void 0 : Li.rotation) === 90 ? { offsetX: -1, offsetY: -1 } : {}, pi(li) ? li : {});
          return Li = Ui.shadowDefinition(Zi), this.attr({ filter: li ? `url(${Ui.url}#${Li})` : "none" });
        }
        show(li = !0) {
          return this.attr({ visibility: li ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(li, Li, Ui) {
          this[Li] = li, Ui.setAttribute(Li, li);
        }
        strokeWidth() {
          if (!this.renderer.styledMode)
            return this["stroke-width"] || 0;
          const li = this.getStyle("stroke-width");
          let Li = 0, Ui;
          return li.indexOf("px") === li.length - 2 ? Li = ti(li) : li !== "" && (Ui = Vi.createElementNS(bi, "rect"), Ni(Ui, { width: li, "stroke-width": 0 }), this.element.parentNode.appendChild(Ui), Li = Ui.getBBox().width, Ui.parentNode.removeChild(Ui)), Li;
        }
        symbolAttr(li) {
          const Li = this;
          mi.symbolCustomAttribs.forEach(function(Ui) {
            Li[Ui] = si(li[Ui], Li[Ui]);
          }), Li.attr({ d: Li.renderer.symbols[Li.symbolName](
            Li.x,
            Li.y,
            Li.width,
            Li.height,
            Li
          ) });
        }
        textSetter(li) {
          li !== this.textStr && (delete this.textPxLength, this.textStr = li, this.added && this.renderer.buildText(this));
        }
        titleSetter(li) {
          const Li = this.element, Ui = Li.getElementsByTagName("title")[0] || Vi.createElementNS(this.SVG_NS, "title");
          Li.insertBefore ? Li.insertBefore(Ui, Li.firstChild) : Li.appendChild(Ui), Ui.textContent = String(si(li, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          const li = this.element;
          return li.parentNode.appendChild(li), this;
        }
        translate(li, Li) {
          return this.attr({
            translateX: li,
            translateY: Li
          });
        }
        updateTransform() {
          const { element: li, matrix: Li, rotation: Ui = 0, scaleX: Zi, scaleY: rs, translateX: Bi = 0, translateY: ni = 0 } = this, Pi = ["translate(" + Bi + "," + ni + ")"];
          Ci(Li) && Pi.push("matrix(" + Li.join(",") + ")"), Ui && Pi.push("rotate(" + Ui + " " + si(this.rotationOriginX, li.getAttribute("x"), 0) + " " + si(this.rotationOriginY, li.getAttribute("y") || 0) + ")"), (Ci(Zi) || Ci(rs)) && Pi.push("scale(" + si(Zi, 1) + " " + si(rs, 1) + ")"), Pi.length && !(this.text || this).textPath && li.setAttribute("transform", Pi.join(" "));
        }
        visibilitySetter(li, Li, Ui) {
          li === "inherit" ? Ui.removeAttribute(Li) : this[Li] !== li && Ui.setAttribute(Li, li), this[Li] = li;
        }
        xGetter(li) {
          return this.element.nodeName === "circle" && (li === "x" ? li = "cx" : li === "y" && (li = "cy")), this._defaultGetter(li);
        }
        zIndexSetter(li, Li) {
          var Ui = this.renderer, Zi = this.parentGroup;
          const rs = (Zi || Ui).element || Ui.box, Bi = this.element;
          Ui = rs === Ui.box;
          let ni = !1, Pi;
          var Hi = this.added;
          let Ri;
          if (Ci(li) ? (Bi.setAttribute("data-z-index", li), li = +li, this[Li] === li && (Hi = !1)) : Ci(this[Li]) && Bi.removeAttribute("data-z-index"), this[Li] = li, Hi) {
            for ((li = this.zIndex) && Zi && (Zi.handleZ = !0), Li = rs.childNodes, Ri = Li.length - 1; 0 <= Ri && !ni; Ri--)
              Zi = Li[Ri], Hi = Zi.getAttribute("data-z-index"), Pi = !Ci(Hi), Zi !== Bi && (0 > li && Pi && !Ui && !Ri ? (rs.insertBefore(Bi, Li[Ri]), ni = !0) : (ti(Hi) <= li || Pi && (!Ci(li) || 0 <= li)) && (rs.insertBefore(Bi, Li[Ri + 1]), ni = !0));
            ni || (rs.insertBefore(Bi, Li[Ui ? 3 : 0]), ni = !0);
          }
          return ni;
        }
      }
      return mi.symbolCustomAttribs = "anchorX anchorY clockwise end height innerR r start width x y".split(" "), mi.prototype.strokeSetter = mi.prototype.fillSetter, mi.prototype.yGetter = mi.prototype.xGetter, mi.prototype.matrixSetter = mi.prototype.rotationOriginXSetter = mi.prototype.rotationOriginYSetter = mi.prototype.rotationSetter = mi.prototype.scaleXSetter = mi.prototype.scaleYSetter = mi.prototype.translateXSetter = mi.prototype.translateYSetter = mi.prototype.verticalAlignSetter = function(Oi, li) {
        this[li] = Oi, this.doTransform = !0;
      }, mi;
    }), ri(ii, "Core/Renderer/RendererRegistry.js", [ii["Core/Globals.js"]], function(hi) {
      var wi;
      return function(zi) {
        zi.rendererTypes = {};
        let Ki;
        zi.getRendererType = function(Yi = Ki) {
          return zi.rendererTypes[Yi] || zi.rendererTypes[Ki];
        }, zi.registerRendererType = function(Yi, es, is) {
          zi.rendererTypes[Yi] = es, (!Ki || is) && (Ki = Yi, hi.Renderer = es);
        };
      }(wi || (wi = {})), wi;
    }), ri(ii, "Core/Renderer/SVG/SVGLabel.js", [ii["Core/Renderer/SVG/SVGElement.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      const { defined: zi, extend: Ki, isNumber: Yi, merge: es, pick: is, removeEvent: $i } = wi;
      class Vi extends hi {
        constructor(bi, Ai, ji, Ni, gi, ki, Ci, Si, Ti, Mi) {
          super(), this.paddingRightSetter = this.paddingLeftSetter = this.paddingSetter, this.init(bi, "g"), this.textStr = Ai, this.x = ji, this.y = Ni, this.anchorX = ki, this.anchorY = Ci, this.baseline = Ti, this.className = Mi, this.addClass(Mi === "button" ? "highcharts-no-tooltip" : "highcharts-label"), Mi && this.addClass("highcharts-" + Mi), this.text = bi.text(void 0, 0, 0, Si).attr({ zIndex: 1 });
          let Di;
          typeof gi == "string" && ((Di = /^url\((.*?)\)$/.test(gi)) || this.renderer.symbols[gi]) && (this.symbolKey = gi), this.bBox = Vi.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = bi.styledMode || Di, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(bi) {
          bi = { left: 0, center: 0.5, right: 1 }[bi], bi !== this.alignFactor && (this.alignFactor = bi, this.bBox && Yi(this.xSetting) && this.attr({ x: this.xSetting }));
        }
        anchorXSetter(bi, Ai) {
          this.anchorX = bi, this.boxAttr(Ai, Math.round(bi) - this.getCrispAdjust() - this.xSetting);
        }
        anchorYSetter(bi, Ai) {
          this.anchorY = bi, this.boxAttr(Ai, bi - this.ySetting);
        }
        boxAttr(bi, Ai) {
          this.box ? this.box.attr(bi, Ai) : this.deferredAttr[bi] = Ai;
        }
        css(bi) {
          if (bi) {
            const Ai = {};
            bi = es(bi), Vi.textProps.forEach((ji) => {
              typeof bi[ji] < "u" && (Ai[ji] = bi[ji], delete bi[ji]);
            }), this.text.css(Ai), "fontSize" in Ai || "fontWeight" in Ai ? this.updateTextPadding() : ("width" in Ai || "textOverflow" in Ai) && this.updateBoxSize();
          }
          return hi.prototype.css.call(this, bi);
        }
        destroy() {
          $i(this.element, "mouseenter"), $i(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), hi.prototype.destroy.call(this);
        }
        fillSetter(bi, Ai) {
          bi && (this.needsBox = !0), this.fill = bi, this.boxAttr(Ai, bi);
        }
        getBBox() {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          const bi = this.padding, Ai = is(this.paddingLeft, bi);
          return { width: this.width, height: this.height, x: this.bBox.x - Ai, y: this.bBox.y - bi };
        }
        getCrispAdjust() {
          return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
        }
        heightSetter(bi) {
          this.heightSetting = bi;
        }
        onAdd() {
          this.text.add(this), this.attr({ text: is(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && zi(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(bi, Ai) {
          Yi(bi) ? bi !== this[Ai] && (this[Ai] = bi, this.updateTextPadding()) : this[Ai] = void 0;
        }
        rSetter(bi, Ai) {
          this.boxAttr(Ai, bi);
        }
        strokeSetter(bi, Ai) {
          this.stroke = bi, this.boxAttr(Ai, bi);
        }
        "stroke-widthSetter"(bi, Ai) {
          bi && (this.needsBox = !0), this["stroke-width"] = bi, this.boxAttr(Ai, bi);
        }
        "text-alignSetter"(bi) {
          this.textAlign = bi;
        }
        textSetter(bi) {
          typeof bi < "u" && this.text.attr({ text: bi }), this.updateTextPadding();
        }
        updateBoxSize() {
          var bi = this.text;
          const Ai = {}, ji = this.padding, Ni = this.bBox = Yi(this.widthSetting) && Yi(this.heightSetting) && !this.textAlign || !zi(bi.textStr) ? Vi.emptyBBox : bi.getBBox();
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || Ni.height || 0) + 2 * ji;
          const gi = this.renderer.fontMetrics(bi);
          this.baselineOffset = ji + Math.min((this.text.firstLineMetrics || gi).b, Ni.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - gi.h) / 2), this.needsBox && !bi.textPath && (this.box || (bi = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), bi.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), bi.add(this)), bi = this.getCrispAdjust(), Ai.x = bi, Ai.y = (this.baseline ? -this.baselineOffset : 0) + bi, Ai.width = Math.round(this.width), Ai.height = Math.round(this.height), this.box.attr(Ki(Ai, this.deferredAttr)), this.deferredAttr = {});
        }
        updateTextPadding() {
          const bi = this.text;
          if (!bi.textPath) {
            this.updateBoxSize();
            const Ai = this.baseline ? 0 : this.baselineOffset;
            let ji = is(this.paddingLeft, this.padding);
            zi(this.widthSetting) && this.bBox && (this.textAlign === "center" || this.textAlign === "right") && (ji += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)), (ji !== bi.x || Ai !== bi.y) && (bi.attr("x", ji), bi.hasBoxWidthChanged && (this.bBox = bi.getBBox(!0)), typeof Ai < "u" && bi.attr("y", Ai)), bi.x = ji, bi.y = Ai;
          }
        }
        widthSetter(bi) {
          this.widthSetting = Yi(bi) ? bi : void 0;
        }
        getPaddedWidth() {
          var bi = this.padding;
          const Ai = is(this.paddingLeft, bi);
          return bi = is(
            this.paddingRight,
            bi
          ), (this.widthSetting || this.bBox.width || 0) + Ai + bi;
        }
        xSetter(bi) {
          this.x = bi, this.alignFactor && (bi -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(bi), this.attr("translateX", this.xSetting);
        }
        ySetter(bi) {
          this.ySetting = this.y = Math.round(bi), this.attr("translateY", this.ySetting);
        }
      }
      return Vi.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, Vi.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(" "), Vi;
    }), ri(ii, "Core/Renderer/SVG/Symbols.js", [ii["Core/Utilities.js"]], function(hi) {
      function wi($i, Vi, _i, bi, Ai) {
        const ji = [];
        if (Ai) {
          const Ni = Ai.start || 0, gi = is(Ai.r, _i);
          _i = is(Ai.r, bi || _i), bi = (Ai.end || 0) - 1e-3;
          const ki = Ai.innerR, Ci = is(Ai.open, 1e-3 > Math.abs((Ai.end || 0) - Ni - 2 * Math.PI)), Si = Math.cos(Ni), Ti = Math.sin(Ni), Mi = Math.cos(bi), Di = Math.sin(bi), ci = is(Ai.longArc, 1e-3 > bi - Ni - Math.PI ? 0 : 1);
          let pi = ["A", gi, _i, 0, ci, is(Ai.clockwise, 1), $i + gi * Mi, Vi + _i * Di];
          pi.params = { start: Ni, end: bi, cx: $i, cy: Vi }, ji.push(["M", $i + gi * Si, Vi + _i * Ti], pi), Yi(ki) && (pi = ["A", ki, ki, 0, ci, Yi(Ai.clockwise) ? 1 - Ai.clockwise : 0, $i + ki * Si, Vi + ki * Ti], pi.params = { start: bi, end: Ni, cx: $i, cy: Vi }, ji.push(Ci ? ["M", $i + ki * Mi, Vi + ki * Di] : ["L", $i + ki * Mi, Vi + ki * Di], pi)), Ci || ji.push(["Z"]);
        }
        return ji;
      }
      function zi($i, Vi, _i, bi, Ai) {
        return Ai && Ai.r ? Ki($i, Vi, _i, bi, Ai) : [["M", $i, Vi], ["L", $i + _i, Vi], ["L", $i + _i, Vi + bi], ["L", $i, Vi + bi], ["Z"]];
      }
      function Ki($i, Vi, _i, bi, Ai) {
        return Ai = (Ai == null ? void 0 : Ai.r) || 0, [["M", $i + Ai, Vi], ["L", $i + _i - Ai, Vi], ["A", Ai, Ai, 0, 0, 1, $i + _i, Vi + Ai], ["L", $i + _i, Vi + bi - Ai], ["A", Ai, Ai, 0, 0, 1, $i + _i - Ai, Vi + bi], ["L", $i + Ai, Vi + bi], ["A", Ai, Ai, 0, 0, 1, $i, Vi + bi - Ai], ["L", $i, Vi + Ai], ["A", Ai, Ai, 0, 0, 1, $i + Ai, Vi], ["Z"]];
      }
      const { defined: Yi, isNumber: es, pick: is } = hi;
      return { arc: wi, callout: function($i, Vi, _i, bi, Ai) {
        const ji = Math.min(Ai && Ai.r || 0, _i, bi), Ni = ji + 6, gi = Ai && Ai.anchorX;
        Ai = Ai && Ai.anchorY || 0;
        const ki = Ki($i, Vi, _i, bi, { r: ji });
        return es(gi) && ($i + gi >= _i ? Ai > Vi + Ni && Ai < Vi + bi - Ni ? ki.splice(3, 1, ["L", $i + _i, Ai - 6], ["L", $i + _i + 6, Ai], ["L", $i + _i, Ai + 6], ["L", $i + _i, Vi + bi - ji]) : ki.splice(3, 1, ["L", $i + _i, bi / 2], ["L", gi, Ai], ["L", $i + _i, bi / 2], ["L", $i + _i, Vi + bi - ji]) : 0 >= $i + gi ? Ai > Vi + Ni && Ai < Vi + bi - Ni ? ki.splice(7, 1, ["L", $i, Ai + 6], ["L", $i - 6, Ai], ["L", $i, Ai - 6], ["L", $i, Vi + ji]) : ki.splice(7, 1, ["L", $i, bi / 2], ["L", gi, Ai], ["L", $i, bi / 2], ["L", $i, Vi + ji]) : Ai && Ai > bi && gi > $i + Ni && gi < $i + _i - Ni ? ki.splice(5, 1, [
          "L",
          gi + 6,
          Vi + bi
        ], ["L", gi, Vi + bi + 6], ["L", gi - 6, Vi + bi], ["L", $i + ji, Vi + bi]) : Ai && 0 > Ai && gi > $i + Ni && gi < $i + _i - Ni && ki.splice(1, 1, ["L", gi - 6, Vi], ["L", gi, Vi - 6], ["L", gi + 6, Vi], ["L", _i - ji, Vi])), ki;
      }, circle: function($i, Vi, _i, bi) {
        return wi($i + _i / 2, Vi + bi / 2, _i / 2, bi / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function($i, Vi, _i, bi) {
        return [["M", $i + _i / 2, Vi], ["L", $i + _i, Vi + bi / 2], ["L", $i + _i / 2, Vi + bi], ["L", $i, Vi + bi / 2], ["Z"]];
      }, rect: zi, roundedRect: Ki, square: zi, triangle: function($i, Vi, _i, bi) {
        return [["M", $i + _i / 2, Vi], ["L", $i + _i, Vi + bi], ["L", $i, Vi + bi], ["Z"]];
      }, "triangle-down": function($i, Vi, _i, bi) {
        return [[
          "M",
          $i,
          Vi
        ], ["L", $i + _i, Vi], ["L", $i + _i / 2, Vi + bi], ["Z"]];
      } };
    }), ri(ii, "Core/Renderer/SVG/TextBuilder.js", [ii["Core/Renderer/HTML/AST.js"], ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { doc: Ki, SVG_NS: Yi, win: es } = wi, { attr: is, extend: $i, fireEvent: Vi, isString: _i, objectEach: bi, pick: Ai } = zi;
      class ji {
        constructor(gi) {
          const ki = gi.styles;
          this.renderer = gi.renderer, this.svgElement = gi, this.width = gi.textWidth, this.textLineHeight = ki && ki.lineHeight, this.textOutline = ki && ki.textOutline, this.ellipsis = !(!ki || ki.textOverflow !== "ellipsis"), this.noWrap = !(!ki || ki.whiteSpace !== "nowrap");
        }
        buildSVG() {
          const gi = this.svgElement, ki = gi.element;
          var Ci = gi.renderer, Si = Ai(gi.textStr, "").toString();
          const Ti = Si.indexOf("<") !== -1, Mi = ki.childNodes;
          Ci = !gi.added && Ci.box;
          const Di = /<br.*?>/g;
          var ci = [Si, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, gi.getStyle("font-size"), this.width].join();
          if (ci !== gi.textCache) {
            for (gi.textCache = ci, delete gi.actualWidth, ci = Mi.length; ci--; )
              ki.removeChild(Mi[ci]);
            Ti || this.ellipsis || this.width || gi.textPath || Si.indexOf(" ") !== -1 && (!this.noWrap || Di.test(Si)) ? Si !== "" && (Ci && Ci.appendChild(ki), Si = new hi(Si), this.modifyTree(Si.nodes), Si.addToDOM(ki), this.modifyDOM(), this.ellipsis && (ki.textContent || "").indexOf("…") !== -1 && gi.attr("title", this.unescapeEntities(gi.textStr || "", ["&lt;", "&gt;"])), Ci && Ci.removeChild(ki)) : ki.appendChild(Ki.createTextNode(this.unescapeEntities(Si))), _i(this.textOutline) && gi.applyTextOutline && gi.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          const gi = this.svgElement, ki = is(gi.element, "x");
          gi.firstLineMetrics = void 0;
          let Ci;
          for (; (Ci = gi.element.firstChild) && /^[\s\u200B]*$/.test(Ci.textContent || " "); )
            gi.element.removeChild(Ci);
          [].forEach.call(gi.element.querySelectorAll("tspan.highcharts-br"), (Di, ci) => {
            Di.nextSibling && Di.previousSibling && (ci === 0 && Di.previousSibling.nodeType === 1 && (gi.firstLineMetrics = gi.renderer.fontMetrics(Di.previousSibling)), is(Di, { dy: this.getLineHeight(Di.nextSibling), x: ki }));
          });
          const Si = this.width || 0;
          if (Si) {
            var Ti = (Di, ci) => {
              var pi = Di.textContent || "";
              const vi = pi.replace(/([^\^])-/g, "$1- ").split(" ");
              var ui = !this.noWrap && (1 < vi.length || 1 < gi.element.childNodes.length);
              const fi = this.getLineHeight(ci);
              let si = 0, ti = gi.actualWidth;
              if (this.ellipsis)
                pi && this.truncate(Di, pi, void 0, 0, Math.max(0, Si - 0.8 * fi), (oi, di) => oi.substring(0, di) + "…");
              else if (ui) {
                for (pi = [], ui = []; ci.firstChild && ci.firstChild !== Di; )
                  ui.push(ci.firstChild), ci.removeChild(ci.firstChild);
                for (; vi.length; )
                  vi.length && !this.noWrap && 0 < si && (pi.push(Di.textContent || ""), Di.textContent = vi.join(" ").replace(/- /g, "-")), this.truncate(Di, void 0, vi, si === 0 && ti || 0, Si, (oi, di) => vi.slice(0, di).join(" ").replace(/- /g, "-")), ti = gi.actualWidth, si++;
                ui.forEach((oi) => {
                  ci.insertBefore(oi, Di);
                }), pi.forEach((oi) => {
                  ci.insertBefore(Ki.createTextNode(oi), Di), oi = Ki.createElementNS(Yi, "tspan"), oi.textContent = "​", is(oi, { dy: fi, x: ki }), ci.insertBefore(oi, Di);
                });
              }
            }, Mi = (Di) => {
              [].slice.call(Di.childNodes).forEach((ci) => {
                ci.nodeType === es.Node.TEXT_NODE ? Ti(ci, Di) : (ci.className.baseVal.indexOf("highcharts-br") !== -1 && (gi.actualWidth = 0), Mi(ci));
              });
            };
            Mi(gi.element);
          }
        }
        getLineHeight(gi) {
          return gi = gi.nodeType === es.Node.TEXT_NODE ? gi.parentElement : gi, this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(gi || this.svgElement.element).h;
        }
        modifyTree(gi) {
          const ki = (Ci, Si) => {
            const { attributes: Ti = {}, children: Mi, style: Di = {}, tagName: ci } = Ci, pi = this.renderer.styledMode;
            ci === "b" || ci === "strong" ? pi ? Ti.class = "highcharts-strong" : Di.fontWeight = "bold" : (ci === "i" || ci === "em") && (pi ? Ti.class = "highcharts-emphasized" : Di.fontStyle = "italic"), Di && Di.color && (Di.fill = Di.color), ci === "br" ? (Ti.class = "highcharts-br", Ci.textContent = "​", (Si = gi[Si + 1]) && Si.textContent && (Si.textContent = Si.textContent.replace(/^ +/gm, ""))) : ci === "a" && Mi && Mi.some((vi) => vi.tagName === "#text") && (Ci.children = [{ children: Mi, tagName: "tspan" }]), ci !== "#text" && ci !== "a" && (Ci.tagName = "tspan"), $i(Ci, { attributes: Ti, style: Di }), Mi && Mi.filter((vi) => vi.tagName !== "#text").forEach(ki);
          };
          gi.forEach(ki), Vi(this.svgElement, "afterModifyTree", { nodes: gi });
        }
        truncate(gi, ki, Ci, Si, Ti, Mi) {
          const Di = this.svgElement, { rotation: ci } = Di, pi = [];
          let vi = Ci ? 1 : 0, ui = (ki || Ci || "").length, fi = ui, si, ti;
          const oi = function(di, mi) {
            if (di = mi || di, (mi = gi.parentNode) && typeof pi[di] > "u" && mi.getSubStringLength)
              try {
                pi[di] = Si + mi.getSubStringLength(0, Ci ? di + 1 : di);
              } catch {
              }
            return pi[di];
          };
          if (Di.rotation = 0, ti = oi(gi.textContent.length), Si + ti > Ti) {
            for (; vi <= ui; )
              fi = Math.ceil((vi + ui) / 2), Ci && (si = Mi(Ci, fi)), ti = oi(fi, si && si.length - 1), vi === ui ? vi = ui + 1 : ti > Ti ? ui = fi - 1 : vi = fi;
            ui === 0 ? gi.textContent = "" : ki && ui === ki.length - 1 || (gi.textContent = si || Mi(ki || Ci, fi));
          }
          Ci && Ci.splice(0, fi), Di.actualWidth = ti, Di.rotation = ci;
        }
        unescapeEntities(gi, ki) {
          return bi(this.renderer.escapes, function(Ci, Si) {
            ki && ki.indexOf(Ci) !== -1 || (gi = gi.toString().replace(new RegExp(Ci, "g"), Si));
          }), gi;
        }
      }
      return ji;
    }), ri(ii, "Core/Renderer/SVG/SVGRenderer.js", [
      ii["Core/Renderer/HTML/AST.js"],
      ii["Core/Color/Color.js"],
      ii["Core/Globals.js"],
      ii["Core/Renderer/RendererRegistry.js"],
      ii["Core/Renderer/SVG/SVGElement.js"],
      ii["Core/Renderer/SVG/SVGLabel.js"],
      ii["Core/Renderer/SVG/Symbols.js"],
      ii["Core/Renderer/SVG/TextBuilder.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi, es, is, $i, Vi) {
      const { charts: _i, deg2rad: bi, doc: Ai, isFirefox: ji, isMS: Ni, isWebKit: gi, noop: ki, SVG_NS: Ci, symbolSizes: Si, win: Ti } = zi, { addEvent: Mi, attr: Di, createElement: ci, css: pi, defined: vi, destroyObjectProperties: ui, extend: fi, isArray: si, isNumber: ti, isObject: oi, isString: di, merge: mi, pick: Oi, pInt: li, uniqueKey: Li } = Vi;
      let Ui;
      class Zi {
        constructor(Bi, ni, Pi, Hi, Ri, qi, ai) {
          this.width = this.url = this.style = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0, this.init(Bi, ni, Pi, Hi, Ri, qi, ai);
        }
        init(Bi, ni, Pi, Hi, Ri, qi, ai) {
          const xi = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), yi = xi.element;
          ai || xi.css(this.getStyle(Hi)), Bi.appendChild(yi), Di(Bi, "dir", "ltr"), Bi.innerHTML.indexOf("xmlns") === -1 && Di(yi, "xmlns", this.SVG_NS), this.box = yi, this.boxWrapper = xi, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(Ai.createTextNode("Created with Highcharts 11.1.0")), this.defs = this.createElement("defs").add(), this.allowHTML = qi, this.forExport = Ri, this.styledMode = ai, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = xi.getStyle("font-size"), this.setSize(ni, Pi, !1);
          let Gi;
          ji && Bi.getBoundingClientRect && (ni = function() {
            pi(Bi, { left: 0, top: 0 }), Gi = Bi.getBoundingClientRect(), pi(Bi, { left: Math.ceil(Gi.left) - Gi.left + "px", top: Math.ceil(Gi.top) - Gi.top + "px" });
          }, ni(), this.unSubPixelFix = Mi(Ti, "resize", ni));
        }
        definition(Bi) {
          return new hi([Bi]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((ji || gi) && Ai.getElementsByTagName("base").length) {
            if (!vi(Ui)) {
              var Bi = Li();
              Bi = new hi([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: Bi }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${Bi})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(Ai.body), pi(Bi, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              const ni = Ai.elementFromPoint(6, 6);
              Ui = (ni && ni.id) === "hitme", Ai.body.removeChild(Bi);
            }
            if (Ui)
              return Ti.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
          }
          return "";
        }
        getStyle(Bi) {
          return this.style = fi({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, Bi);
        }
        setStyle(Bi) {
          this.boxWrapper.css(this.getStyle(Bi));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          const Bi = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), ui(this.gradients || {}), this.gradients = null, this.defs = Bi.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null;
        }
        createElement(Bi) {
          const ni = new this.Element();
          return ni.init(this, Bi), ni;
        }
        getRadialAttr(Bi, ni) {
          return { cx: Bi[0] - Bi[2] / 2 + (ni.cx || 0) * Bi[2], cy: Bi[1] - Bi[2] / 2 + (ni.cy || 0) * Bi[2], r: (ni.r || 0) * Bi[2] };
        }
        shadowDefinition(Bi) {
          const ni = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(Bi).map((Hi) => Bi[Hi])].join("-").replace(/[^a-z0-9\-]/g, ""), Pi = mi({
            color: "#000000",
            offsetX: 1,
            offsetY: 1,
            opacity: 0.15,
            width: 5
          }, Bi);
          return this.defs.element.querySelector(`#${ni}`) || this.definition({ tagName: "filter", attributes: { id: ni }, children: [{ tagName: "feDropShadow", attributes: { dx: Pi.offsetX, dy: Pi.offsetY, "flood-color": Pi.color, "flood-opacity": Math.min(5 * Pi.opacity, 1), stdDeviation: Pi.width / 2 } }] }), ni;
        }
        buildText(Bi) {
          new $i(Bi).buildSVG();
        }
        getContrast(Bi) {
          return Bi = wi.parse(Bi).rgba.map((ni) => (ni /= 255, 0.03928 >= ni ? ni / 12.92 : Math.pow((ni + 0.055) / 1.055, 2.4))), Bi = 0.2126 * Bi[0] + 0.7152 * Bi[1] + 0.0722 * Bi[2], 1.05 / (Bi + 0.05) > (Bi + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        }
        button(Bi, ni, Pi, Hi, Ri = {}, qi, ai, xi, yi, Gi) {
          const Xi = this.label(Bi, ni, Pi, yi, void 0, void 0, Gi, void 0, "button"), Wi = this.styledMode;
          Bi = Ri.states || {};
          let ts = 0;
          Ri = mi(Ri), delete Ri.states;
          const ss = mi({ color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, Ri.style);
          delete Ri.style;
          let os = hi.filterUserAttributes(Ri);
          Xi.attr(mi({ padding: 8, r: 2 }, os));
          let ns, ls, Ii;
          return Wi || (os = mi({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, os), qi = mi(os, { fill: "#e6e6e6" }, hi.filterUserAttributes(qi || Bi.hover || {})), ns = qi.style, delete qi.style, ai = mi(os, { fill: "#e6e9ff", style: {
            color: "#000000",
            fontWeight: "bold"
          } }, hi.filterUserAttributes(ai || Bi.select || {})), ls = ai.style, delete ai.style, xi = mi(os, { style: { color: "#cccccc" } }, hi.filterUserAttributes(xi || Bi.disabled || {})), Ii = xi.style, delete xi.style), Mi(Xi.element, Ni ? "mouseover" : "mouseenter", function() {
            ts !== 3 && Xi.setState(1);
          }), Mi(Xi.element, Ni ? "mouseout" : "mouseleave", function() {
            ts !== 3 && Xi.setState(ts);
          }), Xi.setState = function(Ei) {
            Ei !== 1 && (Xi.state = ts = Ei), Xi.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
              "normal",
              "hover",
              "pressed",
              "disabled"
            ][Ei || 0]), Wi || (Xi.attr([os, qi, ai, xi][Ei || 0]), Ei = [ss, ns, ls, Ii][Ei || 0], oi(Ei) && Xi.css(Ei));
          }, Wi || (Xi.attr(os).css(fi({ cursor: "default" }, ss)), Gi && Xi.text.css({ pointerEvents: "none" })), Xi.on("touchstart", (Ei) => Ei.stopPropagation()).on("click", function(Ei) {
            ts !== 3 && Hi.call(Xi, Ei);
          });
        }
        crispLine(Bi, ni, Pi = "round") {
          const Hi = Bi[0], Ri = Bi[1];
          return vi(Hi[1]) && Hi[1] === Ri[1] && (Hi[1] = Ri[1] = Math[Pi](Hi[1]) - ni % 2 / 2), vi(Hi[2]) && Hi[2] === Ri[2] && (Hi[2] = Ri[2] = Math[Pi](Hi[2]) + ni % 2 / 2), Bi;
        }
        path(Bi) {
          const ni = this.styledMode ? {} : { fill: "none" };
          return si(Bi) ? ni.d = Bi : oi(Bi) && fi(ni, Bi), this.createElement("path").attr(ni);
        }
        circle(Bi, ni, Pi) {
          return Bi = oi(Bi) ? Bi : typeof Bi > "u" ? {} : { x: Bi, y: ni, r: Pi }, ni = this.createElement("circle"), ni.xSetter = ni.ySetter = function(Hi, Ri, qi) {
            qi.setAttribute("c" + Ri, Hi);
          }, ni.attr(Bi);
        }
        arc(Bi, ni, Pi, Hi, Ri, qi) {
          return oi(Bi) ? (Hi = Bi, ni = Hi.y, Pi = Hi.r, Bi = Hi.x) : Hi = { innerR: Hi, start: Ri, end: qi }, Bi = this.symbol("arc", Bi, ni, Pi, Pi, Hi), Bi.r = Pi, Bi;
        }
        rect(Bi, ni, Pi, Hi, Ri, qi) {
          Bi = oi(Bi) ? Bi : typeof Bi > "u" ? {} : { x: Bi, y: ni, r: Ri, width: Math.max(Pi || 0, 0), height: Math.max(Hi || 0, 0) };
          const ai = this.createElement("rect");
          return this.styledMode || (typeof qi < "u" && (Bi["stroke-width"] = qi, fi(Bi, ai.crisp(Bi))), Bi.fill = "none"), ai.rSetter = function(xi, yi, Gi) {
            ai.r = xi, Di(Gi, { rx: xi, ry: xi });
          }, ai.rGetter = function() {
            return ai.r || 0;
          }, ai.attr(Bi);
        }
        roundedRect(Bi) {
          return this.symbol("roundedRect").attr(Bi);
        }
        setSize(Bi, ni, Pi) {
          this.width = Bi, this.height = ni, this.boxWrapper.animate({ width: Bi, height: ni }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: Oi(Pi, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(Bi) {
          const ni = this.createElement("g");
          return Bi ? ni.attr({ class: "highcharts-" + Bi }) : ni;
        }
        image(Bi, ni, Pi, Hi, Ri, qi) {
          const ai = { preserveAspectRatio: "none" };
          ti(ni) && (ai.x = ni), ti(Pi) && (ai.y = Pi), ti(Hi) && (ai.width = Hi), ti(Ri) && (ai.height = Ri);
          const xi = this.createElement("image").attr(ai);
          return ni = function(yi) {
            xi.attr({ href: Bi }), qi.call(xi, yi);
          }, qi ? (xi.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }), Pi = new Ti.Image(), Mi(Pi, "load", ni), Pi.src = Bi, Pi.complete && ni({})) : xi.attr({ href: Bi }), xi;
        }
        symbol(Bi, ni, Pi, Hi, Ri, qi) {
          const ai = this, xi = /^url\((.*?)\)$/, yi = xi.test(Bi), Gi = !yi && (this.symbols[Bi] ? Bi : "circle"), Xi = Gi && this.symbols[Gi];
          let Wi, ts, ss, os;
          if (Xi)
            typeof ni == "number" && (ts = Xi.call(this.symbols, Math.round(ni || 0), Math.round(Pi || 0), Hi || 0, Ri || 0, qi)), Wi = this.path(ts), ai.styledMode || Wi.attr("fill", "none"), fi(Wi, { symbolName: Gi || void 0, x: ni, y: Pi, width: Hi, height: Ri }), qi && fi(Wi, qi);
          else if (yi) {
            ss = Bi.match(xi)[1];
            const ns = Wi = this.image(ss);
            ns.imgwidth = Oi(qi && qi.width, Si[ss] && Si[ss].width), ns.imgheight = Oi(qi && qi.height, Si[ss] && Si[ss].height), os = (ls) => ls.attr({ width: ls.width, height: ls.height }), ["width", "height"].forEach(function(ls) {
              ns[ls + "Setter"] = function(Ii, Ei) {
                this[Ei] = Ii;
                const {
                  alignByTranslate: Ji,
                  element: Fi,
                  width: Qi,
                  height: hs,
                  imgwidth: as,
                  imgheight: ps
                } = this;
                if (Ii = this["img" + Ei], vi(Ii)) {
                  let us = 1;
                  qi && qi.backgroundSize === "within" && Qi && hs ? (us = Math.min(Qi / as, hs / ps), Di(Fi, { width: Math.round(as * us), height: Math.round(ps * us) })) : Fi && Fi.setAttribute(Ei, Ii), Ji || this.translate(((Qi || 0) - as * us) / 2, ((hs || 0) - ps * us) / 2);
                }
              };
            }), vi(ni) && ns.attr({ x: ni, y: Pi }), ns.isImg = !0, vi(ns.imgwidth) && vi(ns.imgheight) ? os(ns) : (ns.attr({ width: 0, height: 0 }), ci("img", { onload: function() {
              const ls = _i[ai.chartIndex];
              this.width === 0 && (pi(this, { position: "absolute", top: "-999em" }), Ai.body.appendChild(this)), Si[ss] = {
                width: this.width,
                height: this.height
              }, ns.imgwidth = this.width, ns.imgheight = this.height, ns.element && os(ns), this.parentNode && this.parentNode.removeChild(this), ai.imgCount--, !ai.imgCount && ls && !ls.hasLoaded && ls.onload();
            }, src: ss }), this.imgCount++);
          }
          return Wi;
        }
        clipRect(Bi, ni, Pi, Hi) {
          const Ri = Li() + "-", qi = this.createElement("clipPath").attr({ id: Ri }).add(this.defs);
          return Bi = this.rect(Bi, ni, Pi, Hi, 0).add(qi), Bi.id = Ri, Bi.clipPath = qi, Bi.count = 0, Bi;
        }
        text(Bi, ni, Pi, Hi) {
          const Ri = {};
          return Hi && (this.allowHTML || !this.forExport) ? this.html(Bi, ni, Pi) : (Ri.x = Math.round(ni || 0), Pi && (Ri.y = Math.round(Pi)), vi(Bi) && (Ri.text = Bi), Bi = this.createElement("text").attr(Ri), (!Hi || this.forExport && !this.allowHTML) && (Bi.xSetter = function(qi, ai, xi) {
            const yi = xi.getElementsByTagName("tspan"), Gi = xi.getAttribute(ai);
            for (let Xi = 0, Wi; Xi < yi.length; Xi++)
              Wi = yi[Xi], Wi.getAttribute(ai) === Gi && Wi.setAttribute(ai, qi);
            xi.setAttribute(ai, qi);
          }), Bi);
        }
        fontMetrics(Bi) {
          Bi = li(Yi.prototype.getStyle.call(Bi, "font-size") || 0);
          const ni = 24 > Bi ? Bi + 3 : Math.round(1.2 * Bi);
          return { h: ni, b: Math.round(0.8 * ni), f: Bi };
        }
        rotCorr(Bi, ni, Pi) {
          let Hi = Bi;
          return ni && Pi && (Hi = Math.max(Hi * Math.cos(ni * bi), 4)), { x: -Bi / 3 * Math.sin(ni * bi), y: Hi };
        }
        pathToSegments(Bi) {
          const ni = [], Pi = [], Hi = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let Ri = 0; Ri < Bi.length; Ri++)
            di(Pi[0]) && ti(Bi[Ri]) && Pi.length === Hi[Pi[0].toUpperCase()] && Bi.splice(Ri, 0, Pi[0].replace("M", "L").replace("m", "l")), typeof Bi[Ri] == "string" && (Pi.length && ni.push(Pi.slice(0)), Pi.length = 0), Pi.push(Bi[Ri]);
          return ni.push(Pi.slice(0)), ni;
        }
        label(Bi, ni, Pi, Hi, Ri, qi, ai, xi, yi) {
          return new es(this, Bi, ni, Pi, Hi, Ri, qi, ai, xi, yi);
        }
        alignElements() {
          this.alignedObjects.forEach((Bi) => Bi.align());
        }
      }
      return fi(Zi.prototype, {
        Element: Yi,
        SVG_NS: Ci,
        escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
        symbols: is,
        draw: ki
      }), Ki.registerRendererType("svg", Zi, !0), Zi;
    }), ri(ii, "Core/Renderer/HTML/HTMLElement.js", [ii["Core/Globals.js"], ii["Core/Renderer/SVG/SVGElement.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { isFirefox: Ki, isMS: Yi, isWebKit: es, win: is } = hi, { css: $i, defined: Vi, extend: _i, pick: bi, pInt: Ai } = zi, ji = [];
      class Ni extends wi {
        static compose(ki) {
          if (zi.pushUnique(ji, ki)) {
            const Ci = Ni.prototype, Si = ki.prototype;
            Si.getSpanCorrection = Ci.getSpanCorrection, Si.htmlCss = Ci.htmlCss, Si.htmlGetBBox = Ci.htmlGetBBox, Si.htmlUpdateTransform = Ci.htmlUpdateTransform, Si.setSpanRotation = Ci.setSpanRotation;
          }
          return ki;
        }
        getSpanCorrection(ki, Ci, Si) {
          this.xCorr = -ki * Si, this.yCorr = -Ci;
        }
        htmlCss(ki) {
          const Ci = this.element.tagName === "SPAN" && ki && "width" in ki, Si = bi(Ci && ki.width, void 0);
          let Ti;
          return Ci && (delete ki.width, this.textWidth = Si, Ti = !0), ki && ki.textOverflow === "ellipsis" && (ki.whiteSpace = "nowrap", ki.overflow = "hidden"), this.styles = _i(this.styles, ki), $i(this.element, ki), Ti && this.htmlUpdateTransform(), this;
        }
        htmlGetBBox() {
          const ki = this.element;
          return { x: ki.offsetLeft, y: ki.offsetTop, width: ki.offsetWidth, height: ki.offsetHeight };
        }
        htmlUpdateTransform() {
          if (this.added) {
            var ki = this.renderer, Ci = this.element, Si = this.x || 0, Ti = this.y || 0, Mi = this.textAlign || "left", Di = { left: 0, center: 0.5, right: 1 }[Mi], ci = this.styles, pi = ci && ci.whiteSpace;
            if ($i(Ci, { marginLeft: this.translateX || 0, marginTop: this.translateY || 0 }), Ci.tagName === "SPAN") {
              ci = this.rotation;
              const ui = this.textWidth && Ai(this.textWidth), fi = [ci, Mi, Ci.innerHTML, this.textWidth, this.textAlign].join();
              let si = !1;
              if (ui !== this.oldTextWidth) {
                if (this.textPxLength)
                  var vi = this.textPxLength;
                else
                  $i(Ci, { width: "", whiteSpace: pi || "nowrap" }), vi = Ci.offsetWidth;
                (ui > this.oldTextWidth || vi > ui) && (/[ \-]/.test(Ci.textContent || Ci.innerText) || Ci.style.textOverflow === "ellipsis") && ($i(Ci, { width: vi > ui || ci ? ui + "px" : "auto", display: "block", whiteSpace: pi || "normal" }), this.oldTextWidth = ui, si = !0);
              }
              this.hasBoxWidthChanged = si, fi !== this.cTT && (ki = ki.fontMetrics(Ci).b, !Vi(ci) || ci === (this.oldRotation || 0) && Mi === this.oldAlign || this.setSpanRotation(ci, Di, ki), this.getSpanCorrection(!Vi(ci) && this.textPxLength || Ci.offsetWidth, ki, Di, ci, Mi)), $i(Ci, { left: Si + (this.xCorr || 0) + "px", top: Ti + (this.yCorr || 0) + "px" }), this.cTT = fi, this.oldRotation = ci, this.oldAlign = Mi;
            }
          } else
            this.alignOnAdd = !0;
        }
        setSpanRotation(ki, Ci, Si) {
          const Ti = {}, Mi = Yi && !/Edge/.test(is.navigator.userAgent) ? "-ms-transform" : es ? "-webkit-transform" : Ki ? "MozTransform" : is.opera ? "-o-transform" : void 0;
          Mi && (Ti[Mi] = Ti.transform = "rotate(" + ki + "deg)", Ti[Mi + (Ki ? "Origin" : "-origin")] = Ti.transformOrigin = 100 * Ci + "% " + Si + "px", $i(this.element, Ti));
        }
      }
      return Ni;
    }), ri(ii, "Core/Renderer/HTML/HTMLRenderer.js", [
      ii["Core/Renderer/HTML/AST.js"],
      ii["Core/Renderer/SVG/SVGElement.js"],
      ii["Core/Renderer/SVG/SVGRenderer.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki) {
      const { attr: Yi, createElement: es, extend: is, pick: $i } = Ki, Vi = [];
      class _i extends zi {
        static compose(Ai) {
          return Ki.pushUnique(Vi, Ai) && (Ai.prototype.html = _i.prototype.html), Ai;
        }
        html(Ai, ji, Ni) {
          const gi = this.createElement("span"), ki = gi.element, Ci = gi.renderer, Si = function(Ti, Mi) {
            ["opacity", "visibility"].forEach(function(Di) {
              Ti[Di + "Setter"] = function(ci, pi, vi) {
                const ui = Ti.div ? Ti.div.style : Mi;
                wi.prototype[Di + "Setter"].call(this, ci, pi, vi), ui && (ui[pi] = ci);
              };
            }), Ti.addedSetters = !0;
          };
          return gi.textSetter = function(Ti) {
            Ti !== this.textStr && (delete this.bBox, delete this.oldTextWidth, hi.setElementHTML(this.element, $i(Ti, "")), this.textStr = Ti, gi.doTransform = !0);
          }, Si(gi, gi.element.style), gi.xSetter = gi.ySetter = gi.alignSetter = gi.rotationSetter = function(Ti, Mi) {
            Mi === "align" ? gi.alignValue = gi.textAlign = Ti : gi[Mi] = Ti, gi.doTransform = !0;
          }, gi.afterSetters = function() {
            this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
          }, gi.attr({ text: Ai, x: Math.round(ji), y: Math.round(Ni) }).css({ position: "absolute" }), Ci.styledMode || gi.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }), ki.style.whiteSpace = "nowrap", gi.css = gi.htmlCss, gi.add = function(Ti) {
            const Mi = Ci.box.parentNode, Di = [];
            let ci;
            if (this.parentGroup = Ti) {
              if (ci = Ti.div, !ci) {
                for (; Ti; )
                  Di.push(Ti), Ti = Ti.parentGroup;
                Di.reverse().forEach(function(pi) {
                  function vi(ti, oi) {
                    pi[oi] = ti, oi === "translateX" ? si.left = ti + "px" : si.top = ti + "px", pi.doTransform = !0;
                  }
                  const ui = Yi(pi.element, "class"), fi = pi.styles || {};
                  ci = pi.div = pi.div || es("div", ui ? { className: ui } : void 0, { position: "absolute", left: (pi.translateX || 0) + "px", top: (pi.translateY || 0) + "px", display: pi.display, opacity: pi.opacity, visibility: pi.visibility }, ci || Mi);
                  const si = ci.style;
                  is(pi, { classSetter: function(ti) {
                    return function(oi) {
                      this.element.setAttribute("class", oi), ti.className = oi;
                    };
                  }(ci), css: function(ti) {
                    return gi.css.call(pi, ti), ["cursor", "pointerEvents"].forEach((oi) => {
                      ti[oi] && (si[oi] = ti[oi]);
                    }), pi;
                  }, on: function() {
                    return Di[0].div && gi.on.apply({ element: Di[0].div, onEvents: pi.onEvents }, arguments), pi;
                  }, translateXSetter: vi, translateYSetter: vi }), pi.addedSetters || Si(pi), pi.css(fi);
                });
              }
            } else
              ci = Mi;
            return ci.appendChild(ki), gi.added = !0, gi.alignOnAdd && gi.htmlUpdateTransform(), gi;
          }, gi;
        }
      }
      return _i;
    }), ri(ii, "Core/Axis/AxisDefaults.js", [], function() {
      var hi;
      return function(wi) {
        wi.defaultXAxisOptions = {
          alignTicks: !0,
          allowDecimals: void 0,
          panningEnabled: !0,
          zIndex: 2,
          zoomEnabled: !0,
          dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e %b" }, week: { main: "%e %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } },
          endOnTick: !1,
          gridLineDashStyle: "Solid",
          gridZIndex: 1,
          labels: { autoRotation: void 0, autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em" } },
          maxPadding: 0.01,
          minorGridLineDashStyle: "Solid",
          minorTickLength: 2,
          minorTickPosition: "outside",
          minorTicksPerMajor: 5,
          minPadding: 0.01,
          offset: void 0,
          opposite: !1,
          reversed: void 0,
          reversedStacks: !1,
          showEmpty: !0,
          showFirstLabel: !0,
          showLastLabel: !0,
          startOfWeek: 1,
          startOnTick: !1,
          tickLength: 10,
          tickPixelInterval: 100,
          tickmarkPlacement: "between",
          tickPosition: "outside",
          title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } },
          type: "linear",
          uniqueNames: !0,
          visible: !0,
          minorGridLineColor: "#f2f2f2",
          minorGridLineWidth: 1,
          minorTickColor: "#999999",
          lineColor: "#333333",
          lineWidth: 1,
          gridLineColor: "#e6e6e6",
          gridLineWidth: void 0,
          tickColor: "#333333"
        }, wi.defaultYAxisOptions = {
          reversedStacks: !0,
          endOnTick: !0,
          maxPadding: 0.05,
          minPadding: 0.05,
          tickPixelInterval: 72,
          showLastLabel: !0,
          labels: { x: void 0 },
          startOnTick: !0,
          title: { rotation: 270, text: "Values" },
          stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
            const { numberFormatter: zi } = this.axis.chart;
            return zi(this.total || 0, -1);
          }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } },
          gridLineWidth: 1,
          lineWidth: 0
        }, wi.defaultLeftAxisOptions = { title: { rotation: 270 } }, wi.defaultRightAxisOptions = { title: { rotation: 90 } }, wi.defaultBottomAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } }, wi.defaultTopAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } };
      }(hi || (hi = {})), hi;
    }), ri(ii, "Core/Foundation.js", [ii["Core/Utilities.js"]], function(hi) {
      const { addEvent: wi, isFunction: zi, objectEach: Ki, removeEvent: Yi } = hi;
      var es;
      return function(is) {
        is.registerEventOptions = function($i, Vi) {
          $i.eventOptions = $i.eventOptions || {}, Ki(Vi.events, function(_i, bi) {
            $i.eventOptions[bi] !== _i && ($i.eventOptions[bi] && (Yi($i, bi, $i.eventOptions[bi]), delete $i.eventOptions[bi]), zi(_i) && ($i.eventOptions[bi] = _i, wi($i, bi, _i, { order: 0 })));
          });
        };
      }(es || (es = {})), es;
    }), ri(ii, "Core/Axis/Tick.js", [ii["Core/Templating.js"], ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { deg2rad: Ki } = wi, { clamp: Yi, correctFloat: es, defined: is, destroyObjectProperties: $i, extend: Vi, fireEvent: _i, isNumber: bi, merge: Ai, objectEach: ji, pick: Ni } = zi;
      class gi {
        constructor(Ci, Si, Ti, Mi, Di) {
          this.isNewLabel = this.isNew = !0, this.axis = Ci, this.pos = Si, this.type = Ti || "", this.parameters = Di || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, _i(this, "init"), Ti || Mi || this.addLabel();
        }
        addLabel() {
          const Ci = this, Si = Ci.axis;
          var Ti = Si.options;
          const Mi = Si.chart;
          var Di = Si.categories;
          const ci = Si.logarithmic, pi = Si.names, vi = Ci.pos, ui = Ni(Ci.options && Ci.options.labels, Ti.labels);
          var fi = Si.tickPositions;
          const si = vi === fi[0], ti = vi === fi[fi.length - 1], oi = (!ui.step || ui.step === 1) && Si.tickInterval === 1;
          fi = fi.info;
          let di = Ci.label, mi, Oi, li;
          Di = this.parameters.category || (Di ? Ni(Di[vi], pi[vi], vi) : vi), ci && bi(Di) && (Di = es(ci.lin2log(Di))), Si.dateTime && (fi ? (Oi = Mi.time.resolveDTLFormat(Ti.dateTimeLabelFormats[!Ti.grid && fi.higherRanks[vi] || fi.unitName]), mi = Oi.main) : bi(Di) && (mi = Si.dateTime.getXDateFormat(Di, Ti.dateTimeLabelFormats || {}))), Ci.isFirst = si, Ci.isLast = ti;
          const Li = { axis: Si, chart: Mi, dateTimeLabelFormat: mi, isFirst: si, isLast: ti, pos: vi, tick: Ci, tickPositionInfo: fi, value: Di };
          _i(this, "labelFormat", Li);
          const Ui = (rs) => ui.formatter ? ui.formatter.call(rs, rs) : ui.format ? (rs.text = Si.defaultLabelFormatter.call(rs, rs), hi.format(ui.format, rs, Mi)) : Si.defaultLabelFormatter.call(rs, rs);
          Ti = Ui.call(Li, Li);
          const Zi = Oi && Oi.list;
          Ci.shortenLabel = Zi ? function() {
            for (li = 0; li < Zi.length; li++)
              if (Vi(
                Li,
                { dateTimeLabelFormat: Zi[li] }
              ), di.attr({ text: Ui.call(Li, Li) }), di.getBBox().width < Si.getSlotWidth(Ci) - 2 * ui.padding)
                return;
            di.attr({ text: "" });
          } : void 0, oi && Si._addedPlotLB && Ci.moveLabel(Ti, ui), is(di) || Ci.movedLabel ? di && di.textStr !== Ti && !oi && (!di.textWidth || ui.style.width || di.styles.width || di.css({ width: null }), di.attr({ text: Ti }), di.textPxLength = di.getBBox().width) : (Ci.label = di = Ci.createLabel({ x: 0, y: 0 }, Ti, ui), Ci.rotation = 0);
        }
        createLabel(Ci, Si, Ti) {
          const Mi = this.axis, Di = Mi.chart;
          return (Ci = is(Si) && Ti.enabled ? Di.renderer.text(Si, Ci.x, Ci.y, Ti.useHTML).add(Mi.labelGroup) : null) && (Di.styledMode || Ci.css(Ai(Ti.style)), Ci.textPxLength = Ci.getBBox().width), Ci;
        }
        destroy() {
          $i(this, this.axis);
        }
        getPosition(Ci, Si, Ti, Mi) {
          const Di = this.axis, ci = Di.chart, pi = Mi && ci.oldChartHeight || ci.chartHeight;
          return Ci = { x: Ci ? es(Di.translate(Si + Ti, void 0, void 0, Mi) + Di.transB) : Di.left + Di.offset + (Di.opposite ? (Mi && ci.oldChartWidth || ci.chartWidth) - Di.right - Di.left : 0), y: Ci ? pi - Di.bottom + Di.offset - (Di.opposite ? Di.height : 0) : es(pi - Di.translate(Si + Ti, void 0, void 0, Mi) - Di.transB) }, Ci.y = Yi(Ci.y, -1e5, 1e5), _i(this, "afterGetPosition", { pos: Ci }), Ci;
        }
        getLabelPosition(Ci, Si, Ti, Mi, Di, ci, pi, vi) {
          const ui = this.axis, fi = ui.transA, si = ui.isLinked && ui.linkedParent ? ui.linkedParent.reversed : ui.reversed, ti = ui.staggerLines, oi = ui.tickRotCorr || { x: 0, y: 0 }, di = Mi || ui.reserveSpaceDefault ? 0 : -ui.labelOffset * (ui.labelAlign === "center" ? 0.5 : 1), mi = Di.distance, Oi = {};
          return Ti = ui.side === 0 ? Ti.rotation ? -mi : -Ti.getBBox().height : ui.side === 2 ? oi.y + mi : Math.cos(Ti.rotation * Ki) * (oi.y - Ti.getBBox(!1, 0).height / 2), is(Di.y) && (Ti = ui.side === 0 && ui.horiz ? Di.y + Ti : Di.y), Ci = Ci + Ni(Di.x, [0, 1, 0, -1][ui.side] * mi) + di + oi.x - (ci && Mi ? ci * fi * (si ? -1 : 1) : 0), Si = Si + Ti - (ci && !Mi ? ci * fi * (si ? 1 : -1) : 0), ti && (Mi = pi / (vi || 1) % ti, ui.opposite && (Mi = ti - Mi - 1), Si += ui.labelOffset / ti * Mi), Oi.x = Ci, Oi.y = Math.round(Si), _i(this, "afterGetLabelPosition", { pos: Oi, tickmarkOffset: ci, index: pi }), Oi;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(Ci, Si, Ti, Mi, Di, ci) {
          return ci.crispLine([["M", Ci, Si], ["L", Ci + (Di ? 0 : -Ti), Si + (Di ? Ti : 0)]], Mi);
        }
        handleOverflow(Ci) {
          const Si = this.axis, Ti = Si.options.labels, Mi = Ci.x;
          var Di = Si.chart.chartWidth, ci = Si.chart.spacing;
          const pi = Ni(Si.labelLeft, Math.min(Si.pos, ci[3]));
          ci = Ni(Si.labelRight, Math.max(Si.isRadial ? 0 : Si.pos + Si.len, Di - ci[1]));
          const vi = this.label, ui = this.rotation, fi = { left: 0, center: 0.5, right: 1 }[Si.labelAlign || vi.attr("align")], si = vi.getBBox().width, ti = Si.getSlotWidth(this), oi = {};
          let di = ti, mi = 1, Oi;
          ui || Ti.overflow !== "justify" ? 0 > ui && Mi - fi * si < pi ? Oi = Math.round(Mi / Math.cos(ui * Ki) - pi) : 0 < ui && Mi + fi * si > ci && (Oi = Math.round((Di - Mi) / Math.cos(ui * Ki))) : (Di = Mi + (1 - fi) * si, Mi - fi * si < pi ? di = Ci.x + di * (1 - fi) - pi : Di > ci && (di = ci - Ci.x + di * fi, mi = -1), di = Math.min(ti, di), di < ti && Si.labelAlign === "center" && (Ci.x += mi * (ti - di - fi * (ti - Math.min(si, di)))), (si > di || Si.autoRotation && (vi.styles || {}).width) && (Oi = di)), Oi && (this.shortenLabel ? this.shortenLabel() : (oi.width = Math.floor(Oi) + "px", (Ti.style || {}).textOverflow || (oi.textOverflow = "ellipsis"), vi.css(oi)));
        }
        moveLabel(Ci, Si) {
          const Ti = this;
          var Mi = Ti.label;
          const Di = Ti.axis;
          let ci = !1;
          Mi && Mi.textStr === Ci ? (Ti.movedLabel = Mi, ci = !0, delete Ti.label) : ji(Di.ticks, function(pi) {
            ci || pi.isNew || pi === Ti || !pi.label || pi.label.textStr !== Ci || (Ti.movedLabel = pi.label, ci = !0, pi.labelPos = Ti.movedLabel.xy, delete pi.label);
          }), ci || !Ti.labelPos && !Mi || (Mi = Ti.labelPos || Mi.xy, Ti.movedLabel = Ti.createLabel(Mi, Ci, Si), Ti.movedLabel && Ti.movedLabel.attr({ opacity: 0 }));
        }
        render(Ci, Si, Ti) {
          var Mi = this.axis, Di = Mi.horiz, ci = this.pos, pi = Ni(this.tickmarkOffset, Mi.tickmarkOffset);
          ci = this.getPosition(Di, ci, pi, Si), pi = ci.x;
          const vi = ci.y;
          Mi = Di && pi === Mi.pos + Mi.len || !Di && vi === Mi.pos ? -1 : 1, Di = Ni(Ti, this.label && this.label.newOpacity, 1), Ti = Ni(Ti, 1), this.isActive = !0, this.renderGridLine(Si, Ti, Mi), this.renderMark(ci, Ti, Mi), this.renderLabel(ci, Si, Di, Ci), this.isNew = !1, _i(this, "afterRender");
        }
        renderGridLine(Ci, Si, Ti) {
          const Mi = this.axis, Di = Mi.options, ci = {}, pi = this.pos, vi = this.type, ui = Ni(this.tickmarkOffset, Mi.tickmarkOffset), fi = Mi.chart.renderer;
          let si = this.gridLine, ti = Di.gridLineWidth, oi = Di.gridLineColor, di = Di.gridLineDashStyle;
          this.type === "minor" && (ti = Di.minorGridLineWidth, oi = Di.minorGridLineColor, di = Di.minorGridLineDashStyle), si || (Mi.chart.styledMode || (ci.stroke = oi, ci["stroke-width"] = ti || 0, ci.dashstyle = di), vi || (ci.zIndex = 1), Ci && (Si = 0), this.gridLine = si = fi.path().attr(ci).addClass("highcharts-" + (vi ? vi + "-" : "") + "grid-line").add(Mi.gridGroup)), si && (Ti = Mi.getPlotLinePath({ value: pi + ui, lineWidth: si.strokeWidth() * Ti, force: "pass", old: Ci, acrossPanes: !1 })) && si[Ci || this.isNew ? "attr" : "animate"]({ d: Ti, opacity: Si });
        }
        renderMark(Ci, Si, Ti) {
          const Mi = this.axis;
          var Di = Mi.options;
          const ci = Mi.chart.renderer, pi = this.type, vi = Mi.tickSize(pi ? pi + "Tick" : "tick"), ui = Ci.x;
          Ci = Ci.y;
          const fi = Ni(Di[pi !== "minor" ? "tickWidth" : "minorTickWidth"], !pi && Mi.isXAxis ? 1 : 0);
          Di = Di[pi !== "minor" ? "tickColor" : "minorTickColor"];
          let si = this.mark;
          const ti = !si;
          vi && (Mi.opposite && (vi[0] = -vi[0]), si || (this.mark = si = ci.path().addClass("highcharts-" + (pi ? pi + "-" : "") + "tick").add(Mi.axisGroup), Mi.chart.styledMode || si.attr({ stroke: Di, "stroke-width": fi })), si[ti ? "attr" : "animate"]({ d: this.getMarkPath(ui, Ci, vi[0], si.strokeWidth() * Ti, Mi.horiz, ci), opacity: Si }));
        }
        renderLabel(Ci, Si, Ti, Mi) {
          var Di = this.axis;
          const ci = Di.horiz, pi = Di.options, vi = this.label, ui = pi.labels, fi = ui.step;
          Di = Ni(this.tickmarkOffset, Di.tickmarkOffset);
          const si = Ci.x;
          Ci = Ci.y;
          let ti = !0;
          vi && bi(si) && (vi.xy = Ci = this.getLabelPosition(si, Ci, vi, ci, ui, Di, Mi, fi), this.isFirst && !this.isLast && !pi.showFirstLabel || this.isLast && !this.isFirst && !pi.showLastLabel ? ti = !1 : !ci || ui.step || ui.rotation || Si || Ti === 0 || this.handleOverflow(Ci), fi && Mi % fi && (ti = !1), ti && bi(Ci.y) ? (Ci.opacity = Ti, vi[this.isNewLabel ? "attr" : "animate"](Ci).show(!0), this.isNewLabel = !1) : (vi.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          const Ci = this.label, Si = this.axis;
          Ci && !this.isNew && (Ci.animate({ opacity: 0 }, void 0, Ci.destroy), delete this.label), Si.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }
      return gi;
    }), ri(ii, "Core/Axis/Axis.js", [ii["Core/Animation/AnimationUtilities.js"], ii["Core/Axis/AxisDefaults.js"], ii["Core/Color/Color.js"], ii["Core/Defaults.js"], ii["Core/Foundation.js"], ii["Core/Globals.js"], ii["Core/Axis/Tick.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki, Yi, es, is, $i) {
      const { animObject: Vi } = hi, { defaultOptions: _i } = Ki, { registerEventOptions: bi } = Yi, { deg2rad: Ai } = es, { arrayMax: ji, arrayMin: Ni, clamp: gi, correctFloat: ki, defined: Ci, destroyObjectProperties: Si, erase: Ti, error: Mi, extend: Di, fireEvent: ci, getClosestDistance: pi, insertItem: vi, isArray: ui, isNumber: fi, isString: si, merge: ti, normalizeTickInterval: oi, objectEach: di, pick: mi, relativeLength: Oi, removeEvent: li, splat: Li, syncTimeout: Ui } = $i, Zi = (Bi, ni) => oi(ni, void 0, void 0, mi(Bi.options.allowDecimals, 0.5 > ni || Bi.tickAmount !== void 0), !!Bi.tickAmount);
      class rs {
        constructor(ni, Pi, Hi) {
          this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.index = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0, this.init(ni, Pi, Hi);
        }
        init(ni, Pi, Hi = this.coll) {
          const Ri = Hi === "xAxis";
          this.chart = ni, this.horiz = this.isZAxis || (ni.inverted ? !Ri : Ri), this.isXAxis = Ri, this.coll = Hi, ci(this, "init", { userOptions: Pi }), this.opposite = mi(Pi.opposite, this.opposite), this.side = mi(Pi.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(Pi), Hi = this.options;
          const qi = Hi.labels, ai = Hi.type;
          this.userOptions = Pi, this.minPixelPadding = 0, this.reversed = mi(Hi.reversed, this.reversed), this.visible = Hi.visible, this.zoomEnabled = Hi.zoomEnabled, this.hasNames = ai === "category" || Hi.categories === !0, this.categories = Hi.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = Ci(Hi.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = Hi.minRange || Hi.maxZoom, this.range = Hi.range, this.offset = Hi.offset || 0, this.min = this.max = null, Pi = mi(Hi.crosshair, Li(ni.options.tooltip.crosshairs)[Ri ? 0 : 1]), this.crosshair = Pi === !0 ? {} : Pi, ni.axes.indexOf(this) === -1 && (Ri ? ni.axes.splice(ni.xAxis.length, 0, this) : ni.axes.push(this), vi(this, ni[this.coll])), ni.orderItems(this.coll), this.series = this.series || [], ni.inverted && !this.isZAxis && Ri && typeof this.reversed > "u" && (this.reversed = !0), this.labelRotation = fi(qi.rotation) ? qi.rotation : void 0, bi(this, Hi), ci(this, "afterInit");
        }
        setOptions(ni) {
          this.options = ti(wi.defaultXAxisOptions, this.coll === "yAxis" && wi.defaultYAxisOptions, [wi.defaultTopAxisOptions, wi.defaultRightAxisOptions, wi.defaultBottomAxisOptions, wi.defaultLeftAxisOptions][this.side], ti(_i[this.coll], ni)), ci(this, "afterSetOptions", { userOptions: ni });
        }
        defaultLabelFormatter(ni) {
          var Pi = this.axis;
          ({ numberFormatter: ni } = this.chart);
          const Hi = fi(this.value) ? this.value : NaN, Ri = Pi.chart.time, qi = this.dateTimeLabelFormat;
          var ai = _i.lang;
          const xi = ai.numericSymbols;
          ai = ai.numericSymbolMagnitude || 1e3;
          const yi = Pi.logarithmic ? Math.abs(Hi) : Pi.tickInterval;
          let Gi = xi && xi.length, Xi;
          if (Pi.categories)
            Xi = `${this.value}`;
          else if (qi)
            Xi = Ri.dateFormat(qi, Hi);
          else if (Gi && 1e3 <= yi)
            for (; Gi-- && typeof Xi > "u"; )
              Pi = Math.pow(ai, Gi + 1), yi >= Pi && 10 * Hi % Pi === 0 && xi[Gi] !== null && Hi !== 0 && (Xi = ni(Hi / Pi, -1) + xi[Gi]);
          return typeof Xi > "u" && (Xi = 1e4 <= Math.abs(Hi) ? ni(Hi, -1) : ni(Hi, -1, void 0, "")), Xi;
        }
        getSeriesExtremes() {
          const ni = this, Pi = ni.chart;
          let Hi;
          ci(this, "getSeriesExtremes", null, function() {
            ni.hasVisibleSeries = !1, ni.dataMin = ni.dataMax = ni.threshold = null, ni.softThreshold = !ni.isXAxis, ni.series.forEach(function(Ri) {
              if (Ri.visible || !Pi.options.chart.ignoreHiddenSeries) {
                var qi = Ri.options;
                let ai = qi.threshold, xi, yi;
                ni.hasVisibleSeries = !0, ni.positiveValuesOnly && 0 >= ai && (ai = null), ni.isXAxis ? (qi = Ri.xData) && qi.length && (qi = ni.logarithmic ? qi.filter((Gi) => 0 < Gi) : qi, Hi = Ri.getXExtremes(qi), xi = Hi.min, yi = Hi.max, fi(xi) || xi instanceof Date || (qi = qi.filter(fi), Hi = Ri.getXExtremes(qi), xi = Hi.min, yi = Hi.max), qi.length && (ni.dataMin = Math.min(mi(ni.dataMin, xi), xi), ni.dataMax = Math.max(mi(
                  ni.dataMax,
                  yi
                ), yi))) : (Ri = Ri.applyExtremes(), fi(Ri.dataMin) && (xi = Ri.dataMin, ni.dataMin = Math.min(mi(ni.dataMin, xi), xi)), fi(Ri.dataMax) && (yi = Ri.dataMax, ni.dataMax = Math.max(mi(ni.dataMax, yi), yi)), Ci(ai) && (ni.threshold = ai), (!qi.softThreshold || ni.positiveValuesOnly) && (ni.softThreshold = !1));
              }
            });
          }), ci(this, "afterGetSeriesExtremes");
        }
        translate(ni, Pi, Hi, Ri, qi, ai) {
          const xi = this.linkedParent || this, yi = Ri && xi.old ? xi.old.min : xi.min;
          if (!fi(yi))
            return NaN;
          const Gi = xi.minPixelPadding;
          qi = (xi.isOrdinal || xi.brokenAxis && xi.brokenAxis.hasBreaks || xi.logarithmic && qi) && xi.lin2val;
          let Xi = 1, Wi = 0;
          return Ri = Ri && xi.old ? xi.old.transA : xi.transA, Ri || (Ri = xi.transA), Hi && (Xi *= -1, Wi = xi.len), xi.reversed && (Xi *= -1, Wi -= Xi * (xi.sector || xi.len)), Pi ? (ai = (ni * Xi + Wi - Gi) / Ri + yi, qi && (ai = xi.lin2val(ai))) : (qi && (ni = xi.val2lin(ni)), ni = Xi * (ni - yi) * Ri, ai = (xi.isRadial ? ni : ki(ni)) + Wi + Xi * Gi + (fi(ai) ? Ri * ai : 0)), ai;
        }
        toPixels(ni, Pi) {
          return this.translate(ni, !1, !this.horiz, void 0, !0) + (Pi ? 0 : this.pos);
        }
        toValue(ni, Pi) {
          return this.translate(ni - (Pi ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(ni) {
          function Pi(Fi, Qi, hs) {
            return os !== "pass" && (Fi < Qi || Fi > hs) && (os ? Fi = gi(Fi, Qi, hs) : Ji = !0), Fi;
          }
          const Hi = this, Ri = Hi.chart, qi = Hi.left, ai = Hi.top, xi = ni.old, yi = ni.value, Gi = ni.lineWidth, Xi = xi && Ri.oldChartHeight || Ri.chartHeight, Wi = xi && Ri.oldChartWidth || Ri.chartWidth, ts = Hi.transB;
          let ss = ni.translatedValue, os = ni.force, ns, ls, Ii, Ei, Ji;
          return ni = { value: yi, lineWidth: Gi, old: xi, force: os, acrossPanes: ni.acrossPanes, translatedValue: ss }, ci(this, "getPlotLinePath", ni, function(Fi) {
            ss = mi(ss, Hi.translate(yi, void 0, void 0, xi)), ss = gi(ss, -1e5, 1e5), ns = Ii = Math.round(ss + ts), ls = Ei = Math.round(Xi - ss - ts), fi(ss) ? Hi.horiz ? (ls = ai, Ei = Xi - Hi.bottom, ns = Ii = Pi(ns, qi, qi + Hi.width)) : (ns = qi, Ii = Wi - Hi.right, ls = Ei = Pi(ls, ai, ai + Hi.height)) : (Ji = !0, os = !1), Fi.path = Ji && !os ? null : Ri.renderer.crispLine([["M", ns, ls], ["L", Ii, Ei]], Gi || 1);
          }), ni.path;
        }
        getLinearTickPositions(ni, Pi, Hi) {
          const Ri = ki(Math.floor(Pi / ni) * ni);
          Hi = ki(Math.ceil(Hi / ni) * ni);
          const qi = [];
          let ai, xi;
          if (ki(Ri + ni) === Ri && (xi = 20), this.single)
            return [Pi];
          for (Pi = Ri; Pi <= Hi && (qi.push(Pi), Pi = ki(Pi + ni, xi), Pi !== ai); )
            ai = Pi;
          return qi;
        }
        getMinorTickInterval() {
          const ni = this.options;
          return ni.minorTicks === !0 ? mi(ni.minorTickInterval, "auto") : ni.minorTicks === !1 ? null : ni.minorTickInterval;
        }
        getMinorTickPositions() {
          var ni = this.options;
          const Pi = this.tickPositions, Hi = this.minorTickInterval;
          var Ri = this.pointRangePadding || 0;
          const qi = this.min - Ri;
          Ri = this.max + Ri;
          const ai = Ri - qi;
          let xi = [];
          if (ai && ai / Hi < this.len / 3) {
            const yi = this.logarithmic;
            if (yi)
              this.paddedTicks.forEach(function(Gi, Xi, Wi) {
                Xi && xi.push.apply(xi, yi.getLogTickPositions(Hi, Wi[Xi - 1], Wi[Xi], !0));
              });
            else if (this.dateTime && this.getMinorTickInterval() === "auto")
              xi = xi.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(Hi), qi, Ri, ni.startOfWeek));
            else
              for (ni = qi + (Pi[0] - qi) % Hi; ni <= Ri && ni !== xi[0]; ni += Hi)
                xi.push(ni);
          }
          return xi.length !== 0 && this.trimTicks(xi), xi;
        }
        adjustForMinRange() {
          const ni = this.options, Pi = this.logarithmic;
          let Hi = this.min;
          var Ri = this.max;
          let qi, ai;
          if (this.isXAxis && typeof this.minRange > "u" && !Pi)
            if (Ci(ni.min) || Ci(ni.max) || Ci(ni.floor) || Ci(ni.ceiling))
              this.minRange = null;
            else {
              var xi = pi(this.series.map((yi) => {
                var Gi;
                return (yi.xIncrement ? (Gi = yi.xData) === null || Gi === void 0 ? void 0 : Gi.slice(0, 2) : yi.xData) || [];
              })) || 0;
              this.minRange = Math.min(5 * xi, this.dataMax - this.dataMin);
            }
          Ri - Hi < this.minRange && (xi = this.dataMax - this.dataMin >= this.minRange, ai = this.minRange, Ri = (ai - Ri + Hi) / 2, qi = [Hi - Ri, mi(ni.min, Hi - Ri)], xi && (qi[2] = Pi ? Pi.log2lin(this.dataMin) : this.dataMin), Hi = ji(qi), Ri = [Hi + ai, mi(ni.max, Hi + ai)], xi && (Ri[2] = Pi ? Pi.log2lin(this.dataMax) : this.dataMax), Ri = Ni(Ri), Ri - Hi < ai && (qi[0] = Ri - ai, qi[1] = mi(ni.min, Ri - ai), Hi = ji(qi))), this.min = Hi, this.max = Ri;
        }
        getClosest() {
          let ni, Pi;
          if (this.categories)
            Pi = 1;
          else {
            const Hi = [];
            this.series.forEach(function(Ri) {
              var qi;
              const ai = Ri.closestPointRange, xi = Ri.visible || !Ri.chart.options.chart.ignoreHiddenSeries;
              ((qi = Ri.xData) === null || qi === void 0 ? void 0 : qi.length) === 1 ? Hi.push(Ri.xData[0]) : !Ri.noSharedTooltip && Ci(ai) && xi && (Pi = Ci(Pi) ? Math.min(Pi, ai) : ai);
            }), Hi.length && (Hi.sort((Ri, qi) => Ri - qi), ni = pi([Hi]));
          }
          return ni && Pi ? Math.min(ni, Pi) : ni || Pi;
        }
        nameToX(ni) {
          const Pi = ui(this.options.categories), Hi = Pi ? this.categories : this.names;
          let Ri = ni.options.x, qi;
          return ni.series.requireSorting = !1, Ci(Ri) || (Ri = this.options.uniqueNames && Hi ? Pi ? Hi.indexOf(ni.name) : mi(Hi.keys[ni.name], -1) : ni.series.autoIncrement()), Ri === -1 ? !Pi && Hi && (qi = Hi.length) : qi = Ri, typeof qi < "u" ? (this.names[qi] = ni.name, this.names.keys[ni.name] = qi) : ni.x && (qi = ni.x), qi;
        }
        updateNames() {
          const ni = this, Pi = this.names;
          0 < Pi.length && (Object.keys(Pi.keys).forEach(function(Hi) {
            delete Pi.keys[Hi];
          }), Pi.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(Hi) {
            Hi.xIncrement = null, (!Hi.points || Hi.isDirtyData) && (ni.max = Math.max(ni.max, Hi.xData.length - 1), Hi.processData(), Hi.generatePoints()), Hi.data.forEach(function(Ri, qi) {
              let ai;
              Ri && Ri.options && typeof Ri.name < "u" && (ai = ni.nameToX(Ri), typeof ai < "u" && ai !== Ri.x && (Ri.x = ai, Hi.xData[qi] = ai));
            });
          }));
        }
        setAxisTranslation() {
          const ni = this, Pi = ni.max - ni.min;
          var Hi = ni.linkedParent;
          const Ri = !!ni.categories, qi = ni.isXAxis;
          let ai = ni.axisPointRange || 0, xi, yi = 0, Gi = 0, Xi = ni.transA;
          (qi || Ri || ai) && (xi = ni.getClosest(), Hi ? (yi = Hi.minPointOffset, Gi = Hi.pointRangePadding) : ni.series.forEach(function(Wi) {
            const ts = Ri ? 1 : qi ? mi(Wi.options.pointRange, xi, 0) : ni.axisPointRange || 0, ss = Wi.options.pointPlacement;
            ai = Math.max(ai, ts), (!ni.single || Ri) && (Wi = Wi.is("xrange") ? !qi : qi, yi = Math.max(yi, Wi && si(ss) ? 0 : ts / 2), Gi = Math.max(Gi, Wi && ss === "on" ? 0 : ts));
          }), Hi = ni.ordinal && ni.ordinal.slope && xi ? ni.ordinal.slope / xi : 1, ni.minPointOffset = yi *= Hi, ni.pointRangePadding = Gi *= Hi, ni.pointRange = Math.min(ai, ni.single && Ri ? 1 : Pi), qi && xi && (ni.closestPointRange = xi)), ni.translationSlope = ni.transA = Xi = ni.staticScale || ni.len / (Pi + Gi || 1), ni.transB = ni.horiz ? ni.left : ni.bottom, ni.minPixelPadding = Xi * yi, ci(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          return this.max - this.range;
        }
        setTickInterval(ni) {
          var Pi = this.chart;
          const Hi = this.logarithmic, Ri = this.options, qi = this.isXAxis, ai = this.isLinked, xi = Ri.tickPixelInterval, yi = this.categories, Gi = this.softThreshold;
          let Xi = Ri.maxPadding, Wi = Ri.minPadding, ts = fi(Ri.tickInterval) && 0 <= Ri.tickInterval ? Ri.tickInterval : void 0, ss = fi(this.threshold) ? this.threshold : null, os, ns, ls;
          if (this.dateTime || yi || ai || this.getTickAmount(), ns = mi(this.userMin, Ri.min), ls = mi(this.userMax, Ri.max), ai) {
            this.linkedParent = Pi[this.coll][Ri.linkedTo];
            var Ii = this.linkedParent.getExtremes();
            this.min = mi(Ii.min, Ii.dataMin), this.max = mi(Ii.max, Ii.dataMax), Ri.type !== this.linkedParent.options.type && Mi(11, 1, Pi);
          } else
            Gi && Ci(ss) && (this.dataMin >= ss ? (Ii = ss, Wi = 0) : this.dataMax <= ss && (os = ss, Xi = 0)), this.min = mi(ns, Ii, this.dataMin), this.max = mi(ls, os, this.dataMax);
          if (Hi && (this.positiveValuesOnly && !ni && 0 >= Math.min(this.min, mi(
            this.dataMin,
            this.min
          )) && Mi(10, 1, Pi), this.min = ki(Hi.log2lin(this.min), 16), this.max = ki(Hi.log2lin(this.max), 16)), this.range && Ci(this.max) && (this.userMin = this.min = ns = Math.max(this.dataMin, this.minFromRange()), this.userMax = ls = this.max, this.range = null), ci(this, "foundExtremes"), this.beforePadding && this.beforePadding(), this.adjustForMinRange(), !fi(this.userMin) && fi(Ri.softMin) && Ri.softMin < this.min && (this.min = ns = Ri.softMin), !fi(this.userMax) && fi(Ri.softMax) && Ri.softMax > this.max && (this.max = ls = Ri.softMax), !(yi || this.axisPointRange || this.stacking && this.stacking.usePercentage || ai) && Ci(this.min) && Ci(this.max) && (Pi = this.max - this.min) && (!Ci(ns) && Wi && (this.min -= Pi * Wi), !Ci(ls) && Xi && (this.max += Pi * Xi)), !fi(this.userMin) && fi(Ri.floor) && (this.min = Math.max(this.min, Ri.floor)), !fi(this.userMax) && fi(Ri.ceiling) && (this.max = Math.min(this.max, Ri.ceiling)), Gi && Ci(this.dataMin) && (ss = ss || 0, !Ci(ns) && this.min < ss && this.dataMin >= ss ? this.min = this.options.minRange ? Math.min(ss, this.max - this.minRange) : ss : !Ci(ls) && this.max > ss && this.dataMax <= ss && (this.max = this.options.minRange ? Math.max(ss, this.min + this.minRange) : ss)), fi(this.min) && fi(this.max) && !this.chart.polar && this.min > this.max && (Ci(this.options.min) ? this.max = this.min : Ci(this.options.max) && (this.min = this.max)), this.tickInterval = this.min === this.max || typeof this.min > "u" || typeof this.max > "u" ? 1 : ai && this.linkedParent && !ts && xi === this.linkedParent.options.tickPixelInterval ? ts = this.linkedParent.tickInterval : mi(ts, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, yi ? 1 : (this.max - this.min) * xi / Math.max(this.len, xi)), qi && !ni) {
            const Ei = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
            this.series.forEach(function(Ji) {
              Ji.forceCrop = Ji.forceCropping && Ji.forceCropping(), Ji.processData(Ei);
            }), ci(this, "postProcessData", { hasExtremesChanged: Ei });
          }
          this.setAxisTranslation(), ci(this, "initialAxisTranslation"), this.pointRange && !ts && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)), ni = mi(Ri.minTickInterval, this.dateTime && !this.series.some((Ei) => Ei.noSharedTooltip) ? this.closestPointRange : 0), !ts && this.tickInterval < ni && (this.tickInterval = ni), this.dateTime || this.logarithmic || ts || (this.tickInterval = Zi(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          var ni = this.options;
          const Pi = ni.tickPositions, Hi = ni.tickPositioner;
          var Ri = this.getMinorTickInterval(), qi = this.hasVerticalPanning(), ai = this.coll === "colorAxis";
          const xi = (ai || !qi) && ni.startOnTick;
          qi = (ai || !qi) && ni.endOnTick, ai = [];
          let yi;
          if (this.tickmarkOffset = this.categories && ni.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.minorTickInterval = Ri === "auto" && this.tickInterval ? this.tickInterval / ni.minorTicksPerMajor : Ri, this.single = this.min === this.max && Ci(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || ni.allowDecimals !== !1), Pi)
            ai = Pi.slice();
          else if (fi(this.min) && fi(this.max)) {
            if (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)))
              if (this.dateTime)
                ai = this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(this.tickInterval, ni.units),
                  this.min,
                  this.max,
                  ni.startOfWeek,
                  this.ordinal && this.ordinal.positions,
                  this.closestPointRange,
                  !0
                );
              else if (this.logarithmic)
                ai = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else
                for (Ri = ni = this.tickInterval; Ri <= 2 * ni && (ai = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && ai.length > this.tickAmount); )
                  this.tickInterval = Zi(this, Ri *= 1.1);
            else
              ai = [this.min, this.max], Mi(19, !1, this.chart);
            ai.length > this.len && (ai = [ai[0], ai[ai.length - 1]], ai[0] === ai[1] && (ai.length = 1)), Hi && (this.tickPositions = ai, (yi = Hi.apply(this, [this.min, this.max])) && (ai = yi));
          }
          this.tickPositions = ai, this.paddedTicks = ai.slice(0), this.trimTicks(ai, xi, qi), !this.isLinked && fi(this.min) && fi(this.max) && (this.single && 2 > ai.length && !this.categories && !this.series.some((Gi) => Gi.is("heatmap") && Gi.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), Pi || yi || this.adjustTickAmount()), ci(this, "afterSetTickPositions");
        }
        trimTicks(ni, Pi, Hi) {
          const Ri = ni[0], qi = ni[ni.length - 1], ai = !this.isOrdinal && this.minPointOffset || 0;
          if (ci(this, "trimTicks"), !this.isLinked) {
            if (Pi && Ri !== -1 / 0)
              this.min = Ri;
            else
              for (; this.min - ai > ni[0]; )
                ni.shift();
            if (Hi)
              this.max = qi;
            else
              for (; this.max + ai < ni[ni.length - 1]; )
                ni.pop();
            ni.length === 0 && Ci(Ri) && !this.options.tickPositions && ni.push((qi + Ri) / 2);
          }
        }
        alignToOthers() {
          const ni = this, Pi = [this], Hi = ni.options, Ri = this.coll === "yAxis" && this.chart.options.chart.alignThresholds, qi = [];
          let ai;
          if (ni.thresholdAlignment = void 0, (this.chart.options.chart.alignTicks !== !1 && Hi.alignTicks || Ri) && Hi.startOnTick !== !1 && Hi.endOnTick !== !1 && !ni.logarithmic) {
            const xi = (Gi) => {
              const { horiz: Xi, options: Wi } = Gi;
              return [Xi ? Wi.left : Wi.top, Wi.width, Wi.height, Wi.pane].join();
            }, yi = xi(this);
            this.chart[this.coll].forEach(function(Gi) {
              const { series: Xi } = Gi;
              Xi.length && Xi.some((Wi) => Wi.visible) && Gi !== ni && xi(Gi) === yi && (ai = !0, Pi.push(Gi));
            });
          }
          if (ai && Ri) {
            Pi.forEach((yi) => {
              yi = yi.getThresholdAlignment(ni), fi(yi) && qi.push(yi);
            });
            const xi = 1 < qi.length ? qi.reduce((yi, Gi) => yi + Gi, 0) / qi.length : void 0;
            Pi.forEach((yi) => {
              yi.thresholdAlignment = xi;
            });
          }
          return ai;
        }
        getThresholdAlignment(ni) {
          if ((!fi(this.dataMin) || this !== ni && this.series.some((Pi) => Pi.isDirty || Pi.isDirtyData)) && this.getSeriesExtremes(), fi(this.threshold))
            return ni = gi((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (ni = 1 - ni), ni;
        }
        getTickAmount() {
          const ni = this.options, Pi = ni.tickPixelInterval;
          let Hi = ni.tickAmount;
          !Ci(ni.tickInterval) && !Hi && this.len < Pi && !this.isRadial && !this.logarithmic && ni.startOnTick && ni.endOnTick && (Hi = 2), !Hi && this.alignToOthers() && (Hi = Math.ceil(this.len / Pi) + 1), 4 > Hi && (this.finalTickAmt = Hi, Hi = 5), this.tickAmount = Hi;
        }
        adjustTickAmount() {
          const ni = this, { finalTickAmt: Pi, max: Hi, min: Ri, options: qi, tickPositions: ai, tickAmount: xi, thresholdAlignment: yi } = ni, Gi = ai && ai.length;
          var Xi = mi(ni.threshold, ni.softThreshold ? 0 : null), Wi = ni.tickInterval;
          let ts;
          if (fi(yi) && (ts = 0.5 > yi ? Math.ceil(yi * (xi - 1)) : Math.floor(yi * (xi - 1)), qi.reversed && (ts = xi - 1 - ts)), ni.hasData() && fi(Ri) && fi(Hi)) {
            const ss = () => {
              ni.transA *= (Gi - 1) / (xi - 1), ni.min = qi.startOnTick ? ai[0] : Math.min(Ri, ai[0]), ni.max = qi.endOnTick ? ai[ai.length - 1] : Math.max(Hi, ai[ai.length - 1]);
            };
            if (fi(ts) && fi(ni.threshold)) {
              for (; ai[ts] !== Xi || ai.length !== xi || ai[0] > Ri || ai[ai.length - 1] < Hi; ) {
                for (ai.length = 0, ai.push(ni.threshold); ai.length < xi; )
                  ai[ts] === void 0 || ai[ts] > ni.threshold ? ai.unshift(ki(ai[0] - Wi)) : ai.push(ki(ai[ai.length - 1] + Wi));
                if (Wi > 8 * ni.tickInterval)
                  break;
                Wi *= 2;
              }
              ss();
            } else if (Gi < xi) {
              for (; ai.length < xi; )
                ai.length % 2 || Ri === Xi ? ai.push(ki(ai[ai.length - 1] + Wi)) : ai.unshift(ki(ai[0] - Wi));
              ss();
            }
            if (Ci(Pi)) {
              for (Wi = Xi = ai.length; Wi--; )
                (Pi === 3 && Wi % 2 === 1 || 2 >= Pi && 0 < Wi && Wi < Xi - 1) && ai.splice(Wi, 1);
              ni.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          let ni = !1, Pi = !1;
          this.series.forEach(function(Ri) {
            ni = ni || Ri.isDirtyData || Ri.isDirty, Pi = Pi || Ri.xAxis && Ri.xAxis.isDirty || !1;
          }), this.setAxisSize();
          const Hi = this.len !== (this.old && this.old.len);
          Hi || ni || Pi || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && (this.stacking.resetStacks(), this.stacking.buildStacks()), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = Hi || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(), ni && this.panningState && (this.panningState.isDirty = !0), ci(this, "afterSetScale");
        }
        setExtremes(ni, Pi, Hi, Ri, qi) {
          const ai = this, xi = ai.chart;
          Hi = mi(Hi, !0), ai.series.forEach(function(yi) {
            delete yi.kdTree;
          }), qi = Di(qi, { min: ni, max: Pi }), ci(ai, "setExtremes", qi, function() {
            ai.userMin = ni, ai.userMax = Pi, ai.eventArgs = qi, Hi && xi.redraw(Ri);
          });
        }
        zoom(ni, Pi) {
          const Hi = this, Ri = this.dataMin, qi = this.dataMax, ai = this.options, xi = Math.min(Ri, mi(ai.min, Ri)), yi = Math.max(qi, mi(ai.max, qi));
          return ni = { newMin: ni, newMax: Pi }, ci(this, "zoom", ni, function(Gi) {
            let Xi = Gi.newMin, Wi = Gi.newMax;
            (Xi !== Hi.min || Wi !== Hi.max) && (Hi.allowZoomOutside || (Ci(Ri) && (Xi < xi && (Xi = xi), Xi > yi && (Xi = yi)), Ci(qi) && (Wi < xi && (Wi = xi), Wi > yi && (Wi = yi))), Hi.displayBtn = typeof Xi < "u" || typeof Wi < "u", Hi.setExtremes(Xi, Wi, !1, void 0, { trigger: "zoom" })), Gi.zoomed = !0;
          }), ni.zoomed;
        }
        setAxisSize() {
          const ni = this.chart;
          var Pi = this.options;
          const Hi = Pi.offsets || [0, 0, 0, 0], Ri = this.horiz, qi = this.width = Math.round(Oi(mi(Pi.width, ni.plotWidth - Hi[3] + Hi[1]), ni.plotWidth)), ai = this.height = Math.round(Oi(mi(Pi.height, ni.plotHeight - Hi[0] + Hi[2]), ni.plotHeight)), xi = this.top = Math.round(Oi(mi(Pi.top, ni.plotTop + Hi[0]), ni.plotHeight, ni.plotTop));
          Pi = this.left = Math.round(Oi(
            mi(Pi.left, ni.plotLeft + Hi[3]),
            ni.plotWidth,
            ni.plotLeft
          )), this.bottom = ni.chartHeight - ai - xi, this.right = ni.chartWidth - qi - Pi, this.len = Math.max(Ri ? qi : ai, 0), this.pos = Ri ? Pi : xi;
        }
        getExtremes() {
          const ni = this.logarithmic;
          return { min: ni ? ki(ni.lin2log(this.min)) : this.min, max: ni ? ki(ni.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(ni) {
          var Pi = this.logarithmic;
          const Hi = Pi ? Pi.lin2log(this.min) : this.min;
          return Pi = Pi ? Pi.lin2log(this.max) : this.max, ni === null || ni === -1 / 0 ? ni = Hi : ni === 1 / 0 ? ni = Pi : Hi > ni ? ni = Hi : Pi < ni && (ni = Pi), this.translate(
            ni,
            0,
            1,
            0,
            1
          );
        }
        autoLabelAlign(ni) {
          const Pi = (mi(ni, 0) - 90 * this.side + 720) % 360;
          return ni = { align: "center" }, ci(this, "autoLabelAlign", ni, function(Hi) {
            15 < Pi && 165 > Pi ? Hi.align = "right" : 195 < Pi && 345 > Pi && (Hi.align = "left");
          }), ni.align;
        }
        tickSize(ni) {
          const Pi = this.options, Hi = mi(Pi[ni === "tick" ? "tickWidth" : "minorTickWidth"], ni === "tick" && this.isXAxis && !this.categories ? 1 : 0);
          let Ri = Pi[ni === "tick" ? "tickLength" : "minorTickLength"], qi;
          return Hi && Ri && (Pi[ni + "Position"] === "inside" && (Ri = -Ri), qi = [Ri, Hi]), ni = { tickSize: qi }, ci(this, "afterTickSize", ni), ni.tickSize;
        }
        labelMetrics() {
          const ni = this.chart.renderer;
          var Pi = this.ticks;
          return Pi = Pi[Object.keys(Pi)[0]] || {}, this.chart.renderer.fontMetrics(Pi.label || Pi.movedLabel || ni.box);
        }
        unsquish() {
          const ni = this.options.labels;
          var Pi = this.horiz;
          const Hi = this.tickInterval, Ri = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / Hi), qi = ni.rotation, ai = 0.75 * this.labelMetrics().h, xi = Math.max(this.max - this.min, 0), yi = function(ss) {
            let os = ss / (Ri || 1);
            return os = 1 < os ? Math.ceil(os) : 1, os * Hi > xi && ss !== 1 / 0 && Ri !== 1 / 0 && xi && (os = Math.ceil(xi / Hi)), ki(os * Hi);
          };
          let Gi = Hi, Xi, Wi = Number.MAX_VALUE, ts;
          if (Pi) {
            if (ni.staggerLines || (fi(qi) ? ts = [qi] : Ri < ni.autoRotationLimit && (ts = ni.autoRotation)), ts) {
              let ss;
              for (const os of ts)
                (os === qi || os && -90 <= os && 90 >= os) && (Pi = yi(Math.abs(ai / Math.sin(Ai * os))), ss = Pi + Math.abs(os / 360), ss < Wi && (Wi = ss, Xi = os, Gi = Pi));
            }
          } else
            Gi = yi(ai);
          return this.autoRotation = ts, this.labelRotation = mi(Xi, fi(qi) ? qi : 0), ni.step ? Hi : Gi;
        }
        getSlotWidth(ni) {
          const Pi = this.chart, Hi = this.horiz, Ri = this.options.labels, qi = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), ai = Pi.margin[3];
          if (ni && fi(ni.slotWidth))
            return ni.slotWidth;
          if (Hi && 2 > Ri.step)
            return Ri.rotation ? 0 : (this.staggerLines || 1) * this.len / qi;
          if (!Hi) {
            if (ni = Ri.style.width, ni !== void 0)
              return parseInt(String(ni), 10);
            if (ai)
              return ai - Pi.spacing[3];
          }
          return 0.33 * Pi.chartWidth;
        }
        renderUnsquish() {
          const ni = this.chart, Pi = ni.renderer, Hi = this.tickPositions, Ri = this.ticks, qi = this.options.labels, ai = qi.style, xi = this.horiz, yi = this.getSlotWidth();
          var Gi = Math.max(1, Math.round(yi - 2 * qi.padding));
          const Xi = {}, Wi = this.labelMetrics(), ts = ai.textOverflow;
          let ss, os, ns = 0;
          if (si(qi.rotation) || (Xi.rotation = qi.rotation || 0), Hi.forEach(function(Ii) {
            Ii = Ri[Ii], Ii.movedLabel && Ii.replaceMovedLabel(), Ii && Ii.label && Ii.label.textPxLength > ns && (ns = Ii.label.textPxLength);
          }), this.maxLabelLength = ns, this.autoRotation)
            ns > Gi && ns > Wi.h ? Xi.rotation = this.labelRotation : this.labelRotation = 0;
          else if (yi && (ss = Gi, !ts))
            for (os = "clip", Gi = Hi.length; !xi && Gi--; ) {
              var ls = Hi[Gi];
              (ls = Ri[ls].label) && (ls.styles && ls.styles.textOverflow === "ellipsis" ? ls.css({ textOverflow: "clip" }) : ls.textPxLength > yi && ls.css({ width: yi + "px" }), ls.getBBox().height > this.len / Hi.length - (Wi.h - Wi.f) && (ls.specificTextOverflow = "ellipsis"));
            }
          Xi.rotation && (ss = ns > 0.5 * ni.chartHeight ? 0.33 * ni.chartHeight : ns, ts || (os = "ellipsis")), (this.labelAlign = qi.align || this.autoLabelAlign(this.labelRotation)) && (Xi.align = this.labelAlign), Hi.forEach(function(Ii) {
            const Ei = (Ii = Ri[Ii]) && Ii.label, Ji = ai.width, Fi = {};
            Ei && (Ei.attr(Xi), Ii.shortenLabel ? Ii.shortenLabel() : ss && !Ji && ai.whiteSpace !== "nowrap" && (ss < Ei.textPxLength || Ei.element.tagName === "SPAN") ? (Fi.width = ss + "px", ts || (Fi.textOverflow = Ei.specificTextOverflow || os), Ei.css(Fi)) : Ei.styles && Ei.styles.width && !Fi.width && !Ji && Ei.css({ width: null }), delete Ei.specificTextOverflow, Ii.rotation = Xi.rotation);
          }, this), this.tickRotCorr = Pi.rotCorr(
            Wi.b,
            this.labelRotation || 0,
            this.side !== 0
          );
        }
        hasData() {
          return this.series.some(function(ni) {
            return ni.hasData();
          }) || this.options.showEmpty && Ci(this.min) && Ci(this.max);
        }
        addTitle(ni) {
          const Pi = this.chart.renderer, Hi = this.horiz, Ri = this.opposite, qi = this.options.title, ai = this.chart.styledMode;
          let xi;
          this.axisTitle || ((xi = qi.textAlign) || (xi = (Hi ? { low: "left", middle: "center", high: "right" } : { low: Ri ? "right" : "left", middle: "center", high: Ri ? "left" : "right" })[qi.align]), this.axisTitle = Pi.text(qi.text || "", 0, 0, qi.useHTML).attr({
            zIndex: 7,
            rotation: qi.rotation,
            align: xi
          }).addClass("highcharts-axis-title"), ai || this.axisTitle.css(ti(qi.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), ai || qi.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[ni ? "show" : "hide"](ni);
        }
        generateTick(ni) {
          const Pi = this.ticks;
          Pi[ni] ? Pi[ni].addLabel() : Pi[ni] = new is(this, ni);
        }
        getOffset() {
          const ni = this, { chart: Pi, horiz: Hi, options: Ri, side: qi, ticks: ai, tickPositions: xi, coll: yi, axisParent: Gi } = ni, Xi = Pi.renderer, Wi = Pi.inverted && !ni.isZAxis ? [1, 0, 3, 2][qi] : qi;
          var ts = ni.hasData();
          const ss = Ri.title;
          var os = Ri.labels;
          const ns = fi(Ri.crossing);
          var ls = Pi.axisOffset;
          const Ii = Pi.clipOffset, Ei = [-1, 1, 1, -1][qi], Ji = Ri.className;
          let Fi, Qi = 0, hs;
          var as = 0;
          let ps = 0;
          if (ni.showAxis = Fi = ts || Ri.showEmpty, ni.staggerLines = ni.horiz && os.staggerLines || void 0, !ni.axisGroup) {
            const us = (cs, ds, ms) => Xi.g(cs).attr({ zIndex: ms }).addClass(`highcharts-${yi.toLowerCase()}${ds} ` + (this.isRadial ? `highcharts-radial-axis${ds} ` : "") + (Ji || "")).add(Gi);
            ni.gridGroup = us("grid", "-grid", Ri.gridZIndex), ni.axisGroup = us("axis", "", Ri.zIndex), ni.labelGroup = us(
              "axis-labels",
              "-labels",
              os.zIndex
            );
          }
          ts || ni.isLinked ? (xi.forEach(function(us) {
            ni.generateTick(us);
          }), ni.renderUnsquish(), ni.reserveSpaceDefault = qi === 0 || qi === 2 || { 1: "left", 3: "right" }[qi] === ni.labelAlign, mi(os.reserveSpace, ns ? !1 : null, ni.labelAlign === "center" ? !0 : null, ni.reserveSpaceDefault) && xi.forEach(function(us) {
            ps = Math.max(ai[us].getLabelSize(), ps);
          }), ni.staggerLines && (ps *= ni.staggerLines), ni.labelOffset = ps * (ni.opposite ? -1 : 1)) : di(ai, function(us, cs) {
            us.destroy(), delete ai[cs];
          }), ss && ss.text && ss.enabled !== !1 && (ni.addTitle(Fi), Fi && !ns && ss.reserveSpace !== !1 && (ni.titleOffset = Qi = ni.axisTitle.getBBox()[Hi ? "height" : "width"], hs = ss.offset, as = Ci(hs) ? 0 : mi(ss.margin, Hi ? 5 : 10))), ni.renderLine(), ni.offset = Ei * mi(Ri.offset, ls[qi] ? ls[qi] + (Ri.margin || 0) : 0), ni.tickRotCorr = ni.tickRotCorr || { x: 0, y: 0 }, ts = qi === 0 ? -ni.labelMetrics().h : qi === 2 ? ni.tickRotCorr.y : 0, as = Math.abs(ps) + as, ps && (as = as - ts + Ei * (Hi ? mi(os.y, ni.tickRotCorr.y + Ei * os.distance) : mi(os.x, Ei * os.distance))), ni.axisTitleMargin = mi(hs, as), ni.getMaxLabelDimensions && (ni.maxLabelDimensions = ni.getMaxLabelDimensions(ai, xi)), yi !== "colorAxis" && (os = this.tickSize("tick"), ls[qi] = Math.max(ls[qi], (ni.axisTitleMargin || 0) + Qi + Ei * ni.offset, as, xi && xi.length && os ? os[0] + Ei * ni.offset : 0), ls = !ni.axisLine || Ri.offset ? 0 : 2 * Math.floor(ni.axisLine.strokeWidth() / 2), Ii[Wi] = Math.max(Ii[Wi], ls)), ci(this, "afterGetOffset");
        }
        getLinePath(ni) {
          const Pi = this.chart, Hi = this.opposite;
          var Ri = this.offset;
          const qi = this.horiz, ai = this.left + (Hi ? this.width : 0) + Ri;
          return Ri = Pi.chartHeight - this.bottom - (Hi ? this.height : 0) + Ri, Hi && (ni *= -1), Pi.renderer.crispLine([["M", qi ? this.left : ai, qi ? Ri : this.top], ["L", qi ? Pi.chartWidth - this.right : ai, qi ? Ri : Pi.chartHeight - this.bottom]], ni);
        }
        renderLine() {
          this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(ni) {
          var Pi = this.horiz, Hi = this.left;
          const Ri = this.top;
          var qi = this.len;
          const ai = this.options.title, xi = Pi ? Hi : Ri, yi = this.opposite, Gi = this.offset, Xi = ai.x, Wi = ai.y, ts = this.chart.renderer.fontMetrics(ni);
          return ni = ni ? Math.max(ni.getBBox(!1, 0).height - ts.h - 1, 0) : 0, qi = { low: xi + (Pi ? 0 : qi), middle: xi + qi / 2, high: xi + (Pi ? qi : 0) }[ai.align], Hi = (Pi ? Ri + this.height : Hi) + (Pi ? 1 : -1) * (yi ? -1 : 1) * (this.axisTitleMargin || 0) + [-ni, ni, ts.f, -ni][this.side], Pi = { x: Pi ? qi + Xi : Hi + (yi ? this.width : 0) + Gi + Xi, y: Pi ? Hi + Wi - (yi ? this.height : 0) + Gi : qi + Wi }, ci(this, "afterGetTitlePosition", { titlePosition: Pi }), Pi;
        }
        renderMinorTick(ni, Pi) {
          const Hi = this.minorTicks;
          Hi[ni] || (Hi[ni] = new is(this, ni, "minor")), Pi && Hi[ni].isNew && Hi[ni].render(null, !0), Hi[ni].render(null, !1, 1);
        }
        renderTick(ni, Pi, Hi) {
          const Ri = this.ticks;
          (!this.isLinked || ni >= this.min && ni <= this.max || this.grid && this.grid.isColumn) && (Ri[ni] || (Ri[ni] = new is(
            this,
            ni
          )), Hi && Ri[ni].isNew && Ri[ni].render(Pi, !0, -1), Ri[ni].render(Pi));
        }
        render() {
          const ni = this, Pi = ni.chart, Hi = ni.logarithmic, Ri = ni.options, qi = ni.isLinked, ai = ni.tickPositions, xi = ni.axisTitle, yi = ni.ticks, Gi = ni.minorTicks, Xi = ni.alternateBands, Wi = Ri.stackLabels, ts = Ri.alternateGridColor;
          var ss = Ri.crossing;
          const os = ni.tickmarkOffset, ns = ni.axisLine, ls = ni.showAxis, Ii = Vi(Pi.renderer.globalAnimation);
          let Ei, Ji;
          if (ni.labelEdge.length = 0, ni.overlap = !1, [yi, Gi, Xi].forEach(function(Fi) {
            di(Fi, function(Qi) {
              Qi.isActive = !1;
            });
          }), fi(ss)) {
            const Fi = this.isXAxis ? Pi.yAxis[0] : Pi.xAxis[0], Qi = [1, -1, -1, 1][this.side];
            Fi && (ss = Fi.toPixels(ss, !0), ni.horiz && (ss = Fi.len - ss), ni.offset = Qi * ss);
          }
          if (ni.hasData() || qi) {
            const Fi = ni.chart.hasRendered && ni.old && fi(ni.old.min);
            ni.minorTickInterval && !ni.categories && ni.getMinorTickPositions().forEach(function(Qi) {
              ni.renderMinorTick(Qi, Fi);
            }), ai.length && (ai.forEach(function(Qi, hs) {
              ni.renderTick(Qi, hs, Fi);
            }), os && (ni.min === 0 || ni.single) && (yi[-1] || (yi[-1] = new is(ni, -1, null, !0)), yi[-1].render(-1))), ts && ai.forEach(function(Qi, hs) {
              Ji = typeof ai[hs + 1] < "u" ? ai[hs + 1] + os : ni.max - os, hs % 2 === 0 && Qi < ni.max && Ji <= ni.max + (Pi.polar ? -os : os) && (Xi[Qi] || (Xi[Qi] = new es.PlotLineOrBand(ni)), Ei = Qi + os, Xi[Qi].options = { from: Hi ? Hi.lin2log(Ei) : Ei, to: Hi ? Hi.lin2log(Ji) : Ji, color: ts, className: "highcharts-alternate-grid" }, Xi[Qi].render(), Xi[Qi].isActive = !0);
            }), ni._addedPlotLB || (ni._addedPlotLB = !0, (Ri.plotLines || []).concat(Ri.plotBands || []).forEach(function(Qi) {
              ni.addPlotBandOrLine(Qi);
            }));
          }
          [yi, Gi, Xi].forEach(function(Fi) {
            const Qi = [], hs = Ii.duration;
            di(Fi, function(as, ps) {
              as.isActive || (as.render(ps, !1, 0), as.isActive = !1, Qi.push(ps));
            }), Ui(function() {
              let as = Qi.length;
              for (; as--; )
                Fi[Qi[as]] && !Fi[Qi[as]].isActive && (Fi[Qi[as]].destroy(), delete Fi[Qi[as]]);
            }, Fi !== Xi && Pi.hasRendered && hs ? hs : 0);
          }), ns && (ns[ns.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(ns.strokeWidth()) }), ns.isPlaced = !0, ns[ls ? "show" : "hide"](ls)), xi && ls && (xi[xi.isNew ? "attr" : "animate"](ni.getTitlePosition(xi)), xi.isNew = !1), Wi && Wi.enabled && ni.stacking && ni.stacking.renderStackTotals(), ni.old = { len: ni.len, max: ni.max, min: ni.min, transA: ni.transA, userMax: ni.userMax, userMin: ni.userMin }, ni.isDirty = !1, ci(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(ni) {
            ni.render();
          })), this.series.forEach(function(ni) {
            ni.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || rs.keepProps;
        }
        destroy(ni) {
          const Pi = this, Hi = Pi.plotLinesAndBands, Ri = this.eventOptions;
          if (ci(this, "destroy", { keepEvents: ni }), ni || li(Pi), [Pi.ticks, Pi.minorTicks, Pi.alternateBands].forEach(function(qi) {
            Si(qi);
          }), Hi)
            for (ni = Hi.length; ni--; )
              Hi[ni].destroy();
          "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(qi) {
            Pi[qi] && (Pi[qi] = Pi[qi].destroy());
          });
          for (const qi in Pi.plotLinesAndBandsGroups)
            Pi.plotLinesAndBandsGroups[qi] = Pi.plotLinesAndBandsGroups[qi].destroy();
          di(Pi, function(qi, ai) {
            Pi.getKeepProps().indexOf(ai) === -1 && delete Pi[ai];
          }), this.eventOptions = Ri;
        }
        drawCrosshair(ni, Pi) {
          const Hi = this.crosshair;
          var Ri = mi(Hi && Hi.snap, !0);
          const qi = this.chart;
          let ai, xi = this.cross;
          if (ci(this, "drawCrosshair", { e: ni, point: Pi }), ni || (ni = this.cross && this.cross.e), Hi && (Ci(Pi) || !Ri) !== !1) {
            if (Ri ? Ci(Pi) && (ai = mi(this.coll !== "colorAxis" ? Pi.crosshairPos : null, this.isXAxis ? Pi.plotX : this.len - Pi.plotY)) : ai = ni && (this.horiz ? ni.chartX - this.pos : this.len - ni.chartY + this.pos), Ci(ai)) {
              var yi = { value: Pi && (this.isXAxis ? Pi.x : mi(Pi.stackY, Pi.y)), translatedValue: ai };
              qi.polar && Di(yi, { isCrosshair: !0, chartX: ni && ni.chartX, chartY: ni && ni.chartY, point: Pi }), yi = this.getPlotLinePath(yi) || null;
            }
            if (!Ci(yi)) {
              this.hideCrosshair();
              return;
            }
            Ri = this.categories && !this.isRadial, xi || (this.cross = xi = qi.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (Ri ? "category " : "thin ") + (Hi.className || "")).attr({ zIndex: mi(Hi.zIndex, 2) }).add(), qi.styledMode || (xi.attr({ stroke: Hi.color || (Ri ? zi.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": mi(
              Hi.width,
              1
            ) }).css({ "pointer-events": "none" }), Hi.dashStyle && xi.attr({ dashstyle: Hi.dashStyle }))), xi.show().attr({ d: yi }), Ri && !Hi.width && xi.attr({ "stroke-width": this.transA }), this.cross.e = ni;
          } else
            this.hideCrosshair();
          ci(this, "afterDrawCrosshair", { e: ni, point: Pi });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), ci(this, "afterHideCrosshair");
        }
        hasVerticalPanning() {
          const ni = this.chart.options.chart.panning;
          return !!(ni && ni.enabled && /y/.test(ni.type));
        }
        update(ni, Pi) {
          const Hi = this.chart;
          ni = ti(this.userOptions, ni), this.destroy(!0), this.init(Hi, ni), Hi.isDirtyBox = !0, mi(Pi, !0) && Hi.redraw();
        }
        remove(ni) {
          const Pi = this.chart, Hi = this.coll, Ri = this.series;
          let qi = Ri.length;
          for (; qi--; )
            Ri[qi] && Ri[qi].remove(!1);
          Ti(Pi.axes, this), Ti(Pi[Hi] || [], this), Pi.orderItems(Hi), this.destroy(), Pi.isDirtyBox = !0, mi(ni, !0) && Pi.redraw();
        }
        setTitle(ni, Pi) {
          this.update({ title: ni }, Pi);
        }
        setCategories(ni, Pi) {
          this.update({ categories: ni }, Pi);
        }
      }
      return rs.defaultOptions = wi.defaultXAxisOptions, rs.keepProps = "coll extKey hcEvents names series userMax userMin".split(" "), rs;
    }), ri(
      ii,
      "Core/Axis/DateTimeAxis.js",
      [ii["Core/Utilities.js"]],
      function(hi) {
        const { addEvent: wi, getMagnitude: zi, normalizeTickInterval: Ki, timeUnits: Yi } = hi;
        var es;
        return function(is) {
          function $i() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function Vi(Ai) {
            Ai.userOptions.type !== "datetime" ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new bi(this));
          }
          const _i = [];
          is.compose = function(Ai) {
            return hi.pushUnique(_i, Ai) && (Ai.keepProps.push("dateTime"), Ai.prototype.getTimeTicks = $i, wi(Ai, "init", Vi)), Ai;
          };
          class bi {
            constructor(ji) {
              this.axis = ji;
            }
            normalizeTimeTickInterval(ji, Ni) {
              const gi = Ni || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
              Ni = gi[gi.length - 1];
              let ki = Yi[Ni[0]], Ci = Ni[1], Si;
              for (Si = 0; Si < gi.length && (Ni = gi[Si], ki = Yi[Ni[0]], Ci = Ni[1], !(gi[Si + 1] && ji <= (ki * Ci[Ci.length - 1] + Yi[gi[Si + 1][0]]) / 2)); Si++)
                ;
              return ki === Yi.year && ji < 5 * ki && (Ci = [1, 2, 5]), ji = Ki(ji / ki, Ci, Ni[0] === "year" ? Math.max(zi(ji / ki), 1) : 1), { unitRange: ki, count: ji, unitName: Ni[0] };
            }
            getXDateFormat(ji, Ni) {
              const { axis: gi } = this, ki = gi.chart.time;
              return gi.closestPointRange ? ki.getDateFormat(gi.closestPointRange, ji, gi.options.startOfWeek, Ni) || ki.resolveDTLFormat(Ni.year).main : ki.resolveDTLFormat(Ni.day).main;
            }
          }
          is.Additions = bi;
        }(es || (es = {})), es;
      }
    ), ri(ii, "Core/Axis/LogarithmicAxis.js", [ii["Core/Utilities.js"]], function(hi) {
      const { addEvent: wi, normalizeTickInterval: zi, pick: Ki } = hi;
      var Yi;
      return function(es) {
        function is(bi) {
          let Ai = this.logarithmic;
          bi.userOptions.type !== "logarithmic" ? this.logarithmic = void 0 : Ai || (this.logarithmic = new _i(this));
        }
        function $i() {
          const bi = this.logarithmic;
          bi && (this.lin2val = function(Ai) {
            return bi.lin2log(Ai);
          }, this.val2lin = function(Ai) {
            return bi.log2lin(Ai);
          });
        }
        const Vi = [];
        es.compose = function(bi) {
          return hi.pushUnique(Vi, bi) && (bi.keepProps.push("logarithmic"), wi(bi, "init", is), wi(bi, "afterInit", $i)), bi;
        };
        class _i {
          constructor(Ai) {
            this.axis = Ai;
          }
          getLogTickPositions(Ai, ji, Ni, gi) {
            const ki = this.axis;
            var Ci = ki.len, Si = ki.options;
            let Ti = [];
            if (gi || (this.minorAutoInterval = void 0), 0.5 <= Ai)
              Ai = Math.round(Ai), Ti = ki.getLinearTickPositions(Ai, ji, Ni);
            else if (0.08 <= Ai) {
              Si = Math.floor(ji);
              let Mi, Di, ci, pi, vi;
              for (Ci = 0.3 < Ai ? [1, 2, 4] : 0.15 < Ai ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; Si < Ni + 1 && !vi; Si++)
                for (Di = Ci.length, Mi = 0; Mi < Di && !vi; Mi++)
                  ci = this.log2lin(this.lin2log(Si) * Ci[Mi]), ci > ji && (!gi || pi <= Ni) && typeof pi < "u" && Ti.push(pi), pi > Ni && (vi = !0), pi = ci;
            } else
              ji = this.lin2log(ji), Ni = this.lin2log(Ni), Ai = gi ? ki.getMinorTickInterval() : Si.tickInterval, Ai = Ki(Ai === "auto" ? null : Ai, this.minorAutoInterval, Si.tickPixelInterval / (gi ? 5 : 1) * (Ni - ji) / ((gi ? Ci / ki.tickPositions.length : Ci) || 1)), Ai = zi(Ai), Ti = ki.getLinearTickPositions(Ai, ji, Ni).map(this.log2lin), gi || (this.minorAutoInterval = Ai / 5);
            return gi || (ki.tickInterval = Ai), Ti;
          }
          lin2log(Ai) {
            return Math.pow(
              10,
              Ai
            );
          }
          log2lin(Ai) {
            return Math.log(Ai) / Math.LN10;
          }
        }
        es.Additions = _i;
      }(Yi || (Yi = {})), Yi;
    }), ri(ii, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [ii["Core/Utilities.js"]], function(hi) {
      const { erase: wi, extend: zi, isNumber: Ki } = hi;
      var Yi;
      return function(es) {
        function is(ki) {
          return this.addPlotBandOrLine(ki, "plotBands");
        }
        function $i(ki, Ci) {
          const Si = this.userOptions;
          let Ti = new gi(this, ki);
          if (this.visible && (Ti = Ti.render()), Ti) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (Si.plotLines || []).concat(Si.plotBands || []).forEach((Mi) => {
              this.addPlotBandOrLine(Mi);
            })), Ci) {
              const Mi = Si[Ci] || [];
              Mi.push(ki), Si[Ci] = Mi;
            }
            this.plotLinesAndBands.push(Ti);
          }
          return Ti;
        }
        function Vi(ki) {
          return this.addPlotBandOrLine(ki, "plotLines");
        }
        function _i(ki, Ci, Si = this.options) {
          const Ti = this.getPlotLinePath({ value: Ci, force: !0, acrossPanes: Si.acrossPanes }), Mi = [], Di = this.horiz;
          Ci = !Ki(this.min) || !Ki(this.max) || ki < this.min && Ci < this.min || ki > this.max && Ci > this.max, ki = this.getPlotLinePath({ value: ki, force: !0, acrossPanes: Si.acrossPanes }), Si = 1;
          let ci;
          if (ki && Ti)
            for (Ci && (ci = ki.toString() === Ti.toString(), Si = 0), Ci = 0; Ci < ki.length; Ci += 2) {
              const pi = ki[Ci], vi = ki[Ci + 1], ui = Ti[Ci], fi = Ti[Ci + 1];
              pi[0] !== "M" && pi[0] !== "L" || vi[0] !== "M" && vi[0] !== "L" || ui[0] !== "M" && ui[0] !== "L" || fi[0] !== "M" && fi[0] !== "L" || (Di && ui[1] === pi[1] ? (ui[1] += Si, fi[1] += Si) : Di || ui[2] !== pi[2] || (ui[2] += Si, fi[2] += Si), Mi.push(["M", pi[1], pi[2]], ["L", vi[1], vi[2]], ["L", fi[1], fi[2]], ["L", ui[1], ui[2]], ["Z"])), Mi.isFlat = ci;
            }
          return Mi;
        }
        function bi(ki) {
          this.removePlotBandOrLine(ki);
        }
        function Ai(ki) {
          const Ci = this.plotLinesAndBands, Si = this.options, Ti = this.userOptions;
          if (Ci) {
            let Mi = Ci.length;
            for (; Mi--; )
              Ci[Mi].id === ki && Ci[Mi].destroy();
            [
              Si.plotLines || [],
              Ti.plotLines || [],
              Si.plotBands || [],
              Ti.plotBands || []
            ].forEach(function(Di) {
              for (Mi = Di.length; Mi--; )
                (Di[Mi] || {}).id === ki && wi(Di, Di[Mi]);
            });
          }
        }
        function ji(ki) {
          this.removePlotBandOrLine(ki);
        }
        const Ni = [];
        let gi;
        es.compose = function(ki, Ci) {
          return gi || (gi = ki), hi.pushUnique(Ni, Ci) && zi(Ci.prototype, { addPlotBand: is, addPlotLine: Vi, addPlotBandOrLine: $i, getPlotBandPath: _i, removePlotBand: bi, removePlotLine: ji, removePlotBandOrLine: Ai }), Ci;
        };
      }(Yi || (Yi = {})), Yi;
    }), ri(
      ii,
      "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
      [ii["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], ii["Core/Utilities.js"]],
      function(hi, wi) {
        const { arrayMax: zi, arrayMin: Ki, defined: Yi, destroyObjectProperties: es, erase: is, fireEvent: $i, merge: Vi, objectEach: _i, pick: bi } = wi;
        class Ai {
          static compose(Ni) {
            return hi.compose(Ai, Ni);
          }
          constructor(Ni, gi) {
            this.axis = Ni, gi && (this.options = gi, this.id = gi.id);
          }
          render() {
            $i(this, "render");
            const Ni = this, gi = Ni.axis, ki = gi.horiz;
            var Ci = gi.logarithmic;
            const Si = Ni.options, Ti = Si.color, Mi = bi(Si.zIndex, 0), Di = Si.events, ci = {}, pi = gi.chart.renderer;
            let vi = Si.label, ui = Ni.label, fi = Si.to, si = Si.from, ti = Si.value, oi = Ni.svgElem;
            var di = [];
            const mi = Yi(si) && Yi(fi);
            di = Yi(ti);
            const Oi = !oi, li = { class: "highcharts-plot-" + (mi ? "band " : "line ") + (Si.className || "") };
            let Li = mi ? "bands" : "lines";
            if (Ci && (si = Ci.log2lin(si), fi = Ci.log2lin(fi), ti = Ci.log2lin(ti)), gi.chart.styledMode || (di ? (li.stroke = Ti || "#999999", li["stroke-width"] = bi(Si.width, 1), Si.dashStyle && (li.dashstyle = Si.dashStyle)) : mi && (li.fill = Ti || "#e6e9ff", Si.borderWidth && (li.stroke = Si.borderColor, li["stroke-width"] = Si.borderWidth))), ci.zIndex = Mi, Li += "-" + Mi, (Ci = gi.plotLinesAndBandsGroups[Li]) || (gi.plotLinesAndBandsGroups[Li] = Ci = pi.g("plot-" + Li).attr(ci).add()), Oi && (Ni.svgElem = oi = pi.path().attr(li).add(Ci)), di)
              di = gi.getPlotLinePath({ value: ti, lineWidth: oi.strokeWidth(), acrossPanes: Si.acrossPanes });
            else if (mi)
              di = gi.getPlotBandPath(si, fi, Si);
            else
              return;
            return !Ni.eventsAdded && Di && (_i(Di, function(Ui, Zi) {
              oi.on(Zi, function(rs) {
                Di[Zi].apply(Ni, [rs]);
              });
            }), Ni.eventsAdded = !0), (Oi || !oi.d) && di && di.length ? oi.attr({ d: di }) : oi && (di ? (oi.show(), oi.animate({ d: di })) : oi.d && (oi.hide(), ui && (Ni.label = ui = ui.destroy()))), vi && (Yi(vi.text) || Yi(vi.formatter)) && di && di.length && 0 < gi.width && 0 < gi.height && !di.isFlat ? (vi = Vi({ align: ki && mi && "center", x: ki ? !mi && 4 : 10, verticalAlign: !ki && mi && "middle", y: ki ? mi ? 16 : 10 : mi ? 6 : -4, rotation: ki && !mi && 90 }, vi), this.renderLabel(vi, di, mi, Mi)) : ui && ui.hide(), Ni;
          }
          renderLabel(Ni, gi, ki, Ci) {
            const Si = this.axis;
            var Ti = Si.chart.renderer;
            let Mi = this.label;
            Mi || (this.label = Mi = Ti.text(this.getLabelText(Ni), 0, 0, Ni.useHTML).attr({ align: Ni.textAlign || Ni.align, rotation: Ni.rotation, class: "highcharts-plot-" + (ki ? "band" : "line") + "-label " + (Ni.className || ""), zIndex: Ci }).add(), Si.chart.styledMode || Mi.css(Vi({ fontSize: "0.8em", textOverflow: "ellipsis" }, Ni.style))), Ci = gi.xBounds || [gi[0][1], gi[1][1], ki ? gi[2][1] : gi[0][1]], gi = gi.yBounds || [gi[0][2], gi[1][2], ki ? gi[2][2] : gi[0][2]], ki = Ki(Ci), Ti = Ki(gi), Mi.align(Ni, !1, { x: ki, y: Ti, width: zi(Ci) - ki, height: zi(gi) - Ti }), Mi.alignValue && Mi.alignValue !== "left" || (Ni = Ni.clip ? Si.width : Si.chart.chartWidth, Mi.css({ width: (Mi.rotation === 90 ? Si.height - (Mi.alignAttr.y - Si.top) : Ni - (Mi.alignAttr.x - Si.left)) + "px" })), Mi.show(!0);
          }
          getLabelText(Ni) {
            return Yi(Ni.formatter) ? Ni.formatter.call(this) : Ni.text;
          }
          destroy() {
            is(this.axis.plotLinesAndBands, this), delete this.axis, es(this);
          }
        }
        return Ai;
      }
    ), ri(ii, "Core/Tooltip.js", [
      ii["Core/Templating.js"],
      ii["Core/Globals.js"],
      ii["Core/Renderer/RendererUtilities.js"],
      ii["Core/Renderer/RendererRegistry.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi) {
      const { format: es } = hi, { doc: is, isSafari: $i } = wi, { distribute: Vi } = zi, { addEvent: _i, clamp: bi, css: Ai, discardElement: ji, extend: Ni, fireEvent: gi, isArray: ki, isNumber: Ci, isString: Si, merge: Ti, pick: Mi, splat: Di, syncTimeout: ci } = Yi;
      class pi {
        constructor(ui, fi) {
          this.allowShared = !0, this.container = void 0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.now = {}, this.options = {}, this.outside = !1, this.chart = ui, this.init(ui, fi);
        }
        bodyFormatter(ui) {
          return ui.map(function(fi) {
            const si = fi.series.tooltipOptions;
            return (si[(fi.point.formatPrefix || "point") + "Formatter"] || fi.point.tooltipFormatter).call(fi.point, si[(fi.point.formatPrefix || "point") + "Format"] || "");
          });
        }
        cleanSplit(ui) {
          this.chart.series.forEach(function(fi) {
            const si = fi && fi.tt;
            si && (!si.isActive || ui ? fi.tt = si.destroy() : si.isActive = !1);
          });
        }
        defaultFormatter(ui) {
          const fi = this.points || Di(this);
          let si;
          return si = [ui.tooltipFooterHeaderFormatter(fi[0])], si = si.concat(ui.bodyFormatter(fi)), si.push(ui.tooltipFooterHeaderFormatter(
            fi[0],
            !0
          )), si;
        }
        destroy() {
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), ji(this.container)), Yi.clearTimeout(this.hideTimer), Yi.clearTimeout(this.tooltipTimeout);
        }
        getAnchor(ui, fi) {
          var si = this.chart;
          const ti = si.pointer, oi = si.inverted, di = si.plotTop;
          if (si = si.plotLeft, ui = Di(ui), ui[0].series && ui[0].series.yAxis && !ui[0].series.yAxis.options.reversedStacks && (ui = ui.slice().reverse()), this.followPointer && fi)
            typeof fi.chartX > "u" && (fi = ti.normalize(fi)), ui = [fi.chartX - si, fi.chartY - di];
          else if (ui[0].tooltipPos)
            ui = ui[0].tooltipPos;
          else {
            let mi = 0, Oi = 0;
            ui.forEach(function(li) {
              (li = li.pos(!0)) && (mi += li[0], Oi += li[1]);
            }), mi /= ui.length, Oi /= ui.length, this.shared && 1 < ui.length && fi && (oi ? mi = fi.chartX : Oi = fi.chartY), ui = [mi - si, Oi - di];
          }
          return ui.map(Math.round);
        }
        getClassName(ui, fi, si) {
          const ti = ui.series, oi = ti.options;
          return [this.options.className, "highcharts-label", si && "highcharts-tooltip-header", fi ? "highcharts-tooltip-box" : "highcharts-tooltip", !si && "highcharts-color-" + Mi(
            ui.colorIndex,
            ti.colorIndex
          ), oi && oi.className].filter(Si).join(" ");
        }
        getLabel() {
          const ui = this, fi = this.chart.styledMode, si = this.options, ti = this.split && this.allowShared, oi = si.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none");
          let di, mi = this.chart.renderer;
          if (this.label) {
            var Oi = !this.label.hasClass("highcharts-label");
            (!ti && Oi || ti && !Oi) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              Oi = this.chart.options.chart.style;
              const li = Ki.getRendererType();
              this.container = di = wi.doc.createElement("div"), di.className = "highcharts-tooltip-container", Ai(di, { position: "absolute", top: "1px", pointerEvents: oi, zIndex: Math.max(this.options.style.zIndex || 0, (Oi && Oi.zIndex || 0) + 3) }), wi.doc.body.appendChild(di), this.renderer = mi = new li(di, 0, 0, Oi, void 0, void 0, mi.styledMode);
            }
            if (ti ? this.label = mi.g("tooltip") : (this.label = mi.label("", 0, 0, si.shape, void 0, void 0, si.useHTML, void 0, "tooltip").attr({ padding: si.padding, r: si.borderRadius }), fi || this.label.attr({ fill: si.backgroundColor, "stroke-width": si.borderWidth || 0 }).css(si.style).css({ pointerEvents: oi })), ui.outside) {
              const li = this.label, {
                xSetter: Li,
                ySetter: Ui
              } = li;
              li.xSetter = function(Zi) {
                Li.call(li, ui.distance), di.style.left = Zi + "px";
              }, li.ySetter = function(Zi) {
                Ui.call(li, ui.distance), di.style.top = Zi + "px";
              };
            }
            this.label.attr({ zIndex: 8 }).shadow(si.shadow).add();
          }
          return this.label;
        }
        getPlayingField() {
          const { body: ui, documentElement: fi } = is, { chart: si, distance: ti, outside: oi } = this;
          return { width: oi ? Math.max(ui.scrollWidth, fi.scrollWidth, ui.offsetWidth, fi.offsetWidth, fi.clientWidth) - 2 * ti : si.chartWidth, height: oi ? Math.max(ui.scrollHeight, fi.scrollHeight, ui.offsetHeight, fi.offsetHeight, fi.clientHeight) : si.chartHeight };
        }
        getPosition(ui, fi, si) {
          const ti = this.chart, oi = this.distance, di = {}, mi = ti.inverted && si.h || 0, Oi = this.outside;
          var li = this.getPlayingField();
          const Li = li.width, Ui = li.height, Zi = ti.pointer.getChartPosition();
          li = (xi) => {
            const yi = xi === "x";
            return [xi, yi ? Li : Ui, yi ? ui : fi].concat(Oi ? [yi ? ui * Zi.scaleX : fi * Zi.scaleY, yi ? Zi.left - oi + (si.plotX + ti.plotLeft) * Zi.scaleX : Zi.top - oi + (si.plotY + ti.plotTop) * Zi.scaleY, 0, yi ? Li : Ui] : [yi ? ui : fi, yi ? si.plotX + ti.plotLeft : si.plotY + ti.plotTop, yi ? ti.plotLeft : ti.plotTop, yi ? ti.plotLeft + ti.plotWidth : ti.plotTop + ti.plotHeight]);
          };
          let rs = li("y"), Bi = li("x"), ni;
          li = !!si.negative, !ti.polar && ti.hoverSeries && ti.hoverSeries.yAxis && ti.hoverSeries.yAxis.reversed && (li = !li);
          const Pi = !this.followPointer && Mi(si.ttBelow, !ti.inverted === li), Hi = function(xi, yi, Gi, Xi, Wi, ts, ss) {
            const os = Oi ? xi === "y" ? oi * Zi.scaleY : oi * Zi.scaleX : oi, ns = (Gi - Xi) / 2, ls = Xi < Wi - oi, Ii = Wi + oi + Xi < yi, Ei = Wi - os - Gi + ns;
            if (Wi = Wi + os - ns, Pi && Ii)
              di[xi] = Wi;
            else if (!Pi && ls)
              di[xi] = Ei;
            else if (ls)
              di[xi] = Math.min(ss - Xi, 0 > Ei - mi ? Ei : Ei - mi);
            else if (Ii)
              di[xi] = Math.max(ts, Wi + mi + Gi > yi ? Wi : Wi + mi);
            else
              return !1;
          }, Ri = function(xi, yi, Gi, Xi, Wi) {
            let ts;
            return Wi < oi || Wi > yi - oi ? ts = !1 : di[xi] = Wi < Gi / 2 ? 1 : Wi > yi - Xi / 2 ? yi - Xi - 2 : Wi - Gi / 2, ts;
          }, qi = function(xi) {
            const yi = rs;
            rs = Bi, Bi = yi, ni = xi;
          }, ai = function() {
            Hi.apply(0, rs) !== !1 ? Ri.apply(0, Bi) !== !1 || ni || (qi(!0), ai()) : ni ? di.x = di.y = 0 : (qi(!0), ai());
          };
          return (ti.inverted || 1 < this.len) && qi(), ai(), di;
        }
        hide(ui) {
          const fi = this;
          Yi.clearTimeout(this.hideTimer), ui = Mi(ui, this.options.hideDelay), this.isHidden || (this.hideTimer = ci(function() {
            fi.getLabel().fadeOut(ui && void 0), fi.isHidden = !0;
          }, ui));
        }
        init(ui, fi) {
          this.chart = ui, this.options = fi, this.crosshairs = [], this.now = { x: 0, y: 0 }, this.isHidden = !0, this.split = fi.split && !ui.inverted && !ui.polar, this.shared = fi.shared || this.split, this.outside = Mi(fi.outside, !(!ui.scrollablePixelsX && !ui.scrollablePixelsY));
        }
        shouldStickOnContact(ui) {
          return !(this.followPointer || !this.options.stickOnContact || ui && !this.chart.pointer.inClass(ui.target, "highcharts-tooltip"));
        }
        move(ui, fi, si, ti) {
          const oi = this, di = oi.now, mi = oi.options.animation !== !1 && !oi.isHidden && (1 < Math.abs(ui - di.x) || 1 < Math.abs(fi - di.y)), Oi = oi.followPointer || 1 < oi.len;
          Ni(di, { x: mi ? (2 * di.x + ui) / 3 : ui, y: mi ? (di.y + fi) / 2 : fi, anchorX: Oi ? void 0 : mi ? (2 * di.anchorX + si) / 3 : si, anchorY: Oi ? void 0 : mi ? (di.anchorY + ti) / 2 : ti }), oi.getLabel().attr(di), oi.drawTracker(), mi && (Yi.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
            oi && oi.move(ui, fi, si, ti);
          }, 32));
        }
        refresh(ui, fi) {
          const si = this.chart, ti = this.options, oi = si.pointer, di = Di(ui), mi = di[0], Oi = [];
          var li = ti.format, Li = ti.formatter || this.defaultFormatter;
          const Ui = this.shared, Zi = si.styledMode;
          let rs = {};
          if (ti.enabled && mi.series) {
            Yi.clearTimeout(this.hideTimer), this.allowShared = !(!ki(ui) && ui.series && ui.series.noSharedTooltip), this.followPointer = !this.split && mi.series.tooltipOptions.followPointer, ui = this.getAnchor(ui, fi);
            var Bi = ui[0], ni = ui[1];
            if (Ui && this.allowShared ? (oi.applyInactiveState(di), di.forEach(function(Pi) {
              Pi.setState("hover"), Oi.push(Pi.getLabelConfig());
            }), rs = mi.getLabelConfig(), rs.points = Oi) : rs = mi.getLabelConfig(), this.len = Oi.length, li = Si(li) ? es(li, rs, si) : Li.call(rs, this), Li = mi.series, this.distance = Mi(Li.tooltipOptions.distance, 16), li === !1)
              this.hide();
            else {
              if (this.split && this.allowShared)
                this.renderSplit(li, di);
              else {
                let Pi = Bi, Hi = ni;
                if (fi && oi.isDirectTouch && (Pi = fi.chartX - si.plotLeft, Hi = fi.chartY - si.plotTop), si.polar || Li.options.clip === !1 || di.some((Ri) => oi.isDirectTouch || Ri.series.shouldShowTooltip(
                  Pi,
                  Hi
                )))
                  fi = this.getLabel(), ti.style.width && !Zi || fi.css({ width: (this.outside ? this.getPlayingField() : si.spacingBox).width + "px" }), fi.attr({ text: li && li.join ? li.join("") : li }), fi.addClass(this.getClassName(mi), !0), Zi || fi.attr({ stroke: ti.borderColor || mi.color || Li.color || "#666666" }), this.updatePosition({ plotX: Bi, plotY: ni, negative: mi.negative, ttBelow: mi.ttBelow, h: ui[2] || 0 });
                else {
                  this.hide();
                  return;
                }
              }
              this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
            }
            gi(this, "refresh");
          }
        }
        renderSplit(ui, fi) {
          function si(Fi, Qi, hs, as, ps = !0) {
            return hs ? (Qi = Gi ? 0 : os, Fi = bi(Fi - as / 2, ai.left, ai.right - as - (ti.outside ? Xi : 0))) : (Qi -= ts, Fi = ps ? Fi - as - Hi : Fi + Hi, Fi = bi(Fi, ps ? Fi : ai.left, ai.right)), { x: Fi, y: Qi };
          }
          const ti = this, { chart: oi, chart: { chartWidth: di, chartHeight: mi, plotHeight: Oi, plotLeft: li, plotTop: Li, pointer: Ui, scrollablePixelsY: Zi = 0, scrollablePixelsX: rs, scrollingContainer: { scrollLeft: Bi, scrollTop: ni } = { scrollLeft: 0, scrollTop: 0 }, styledMode: Pi }, distance: Hi, options: Ri, options: { positioner: qi } } = ti, ai = ti.outside && typeof rs != "number" ? is.documentElement.getBoundingClientRect() : {
            left: Bi,
            right: Bi + di,
            top: ni,
            bottom: ni + mi
          }, xi = ti.getLabel(), yi = this.renderer || oi.renderer, Gi = !(!oi.xAxis[0] || !oi.xAxis[0].opposite), { left: Xi, top: Wi } = Ui.getChartPosition();
          let ts = Li + ni, ss = 0, os = Oi - Zi;
          Si(ui) && (ui = [!1, ui]), ui = ui.slice(0, fi.length + 1).reduce(function(Fi, Qi, hs) {
            if (Qi !== !1 && Qi !== "") {
              hs = fi[hs - 1] || { isHeader: !0, plotX: fi[0].plotX, plotY: Oi, series: {} };
              const ms = hs.isHeader;
              var as = ms ? ti : hs.series, ps;
              {
                var us = hs;
                Qi = Qi.toString();
                var cs = as.tt;
                const { isHeader: xs, series: Ss } = us;
                cs || (cs = { padding: Ri.padding, r: Ri.borderRadius }, Pi || (cs.fill = Ri.backgroundColor, cs["stroke-width"] = (ps = Ri.borderWidth) !== null && ps !== void 0 ? ps : 1), cs = yi.label("", 0, 0, Ri[xs ? "headerShape" : "shape"], void 0, void 0, Ri.useHTML).addClass(ti.getClassName(us, !0, xs)).attr(cs).add(xi)), cs.isActive = !0, cs.attr({ text: Qi }), Pi || cs.css(Ri.style).attr({ stroke: Ri.borderColor || us.color || Ss.color || "#333333" }), ps = cs;
              }
              ps = as.tt = ps, us = ps.getBBox(), as = us.width + ps.strokeWidth(), ms && (ss = us.height, os += ss, Gi && (ts -= ss));
              {
                const { isHeader: xs, plotX: Ss = 0, plotY: vs = 0, series: ws } = hs;
                if (xs) {
                  Qi = li + Ss;
                  var ds = Li + Oi / 2;
                } else {
                  const { xAxis: bs, yAxis: ys } = ws;
                  Qi = bs.pos + bi(Ss, -Hi, bs.len + Hi), ws.shouldShowTooltip(0, ys.pos - Li + vs, { ignoreX: !0 }) && (ds = ys.pos + vs);
                }
                Qi = bi(Qi, ai.left - Hi, ai.right + Hi), ds = { anchorX: Qi, anchorY: ds };
              }
              const { anchorX: fs, anchorY: gs } = ds;
              typeof gs == "number" ? (ds = us.height + 1, us = qi ? qi.call(ti, as, ds, hs) : si(fs, gs, ms, as), Fi.push({ align: qi ? 0 : void 0, anchorX: fs, anchorY: gs, boxWidth: as, point: hs, rank: Mi(us.rank, ms ? 1 : 0), size: ds, target: us.y, tt: ps, x: us.x })) : ps.isActive = !1;
            }
            return Fi;
          }, []), !qi && ui.some((Fi) => {
            var { outside: Qi } = ti;
            return Qi = (Qi ? Xi : 0) + Fi.anchorX, Qi < ai.left && Qi + Fi.boxWidth < ai.right ? !0 : Qi < Xi - ai.left + Fi.boxWidth && ai.right - Qi > Qi;
          }) && (ui = ui.map((Fi) => {
            const { x: Qi, y: hs } = si(
              Fi.anchorX,
              Fi.anchorY,
              Fi.point.isHeader,
              Fi.boxWidth,
              !1
            );
            return Ni(Fi, { target: hs, x: Qi });
          })), ti.cleanSplit(), Vi(ui, os);
          var ns = Xi, ls = Xi;
          ui.forEach(function(Fi) {
            const { x: Qi, boxWidth: hs, isHeader: as } = Fi;
            as || (ti.outside && Xi + Qi < ns && (ns = Xi + Qi), !as && ti.outside && ns + hs > ls && (ls = Xi + Qi));
          }), ui.forEach(function(Fi) {
            const { x: Qi, anchorX: hs, anchorY: as, pos: ps, point: { isHeader: us } } = Fi, cs = { visibility: typeof ps > "u" ? "hidden" : "inherit", x: Qi, y: (ps || 0) + ts, anchorX: hs, anchorY: as };
            if (ti.outside && Qi < hs) {
              const ds = Xi - ns;
              0 < ds && (us || (cs.x = Qi + ds, cs.anchorX = hs + ds), us && (cs.x = (ls - ns) / 2, cs.anchorX = hs + ds));
            }
            Fi.tt.attr(cs);
          });
          const {
            container: Ii,
            outside: Ei,
            renderer: Ji
          } = ti;
          if (Ei && Ii && Ji) {
            const { width: Fi, height: Qi, x: hs, y: as } = xi.getBBox();
            Ji.setSize(Fi + hs, Qi + as, !1), Ii.style.left = ns + "px", Ii.style.top = Wi + "px";
          }
          $i && xi.attr({ opacity: xi.opacity === 1 ? 0.999 : 1 });
        }
        drawTracker() {
          if (this.shouldStickOnContact()) {
            var ui = this.chart, fi = this.label, si = this.shared ? ui.hoverPoints : ui.hoverPoint;
            if (fi && si) {
              var ti = { x: 0, y: 0, width: 0, height: 0 };
              si = this.getAnchor(si);
              var oi = fi.getBBox();
              si[0] += ui.plotLeft - fi.translateX, si[1] += ui.plotTop - fi.translateY, ti.x = Math.min(0, si[0]), ti.y = Math.min(0, si[1]), ti.width = 0 > si[0] ? Math.max(Math.abs(si[0]), oi.width - si[0]) : Math.max(Math.abs(si[0]), oi.width), ti.height = 0 > si[1] ? Math.max(Math.abs(si[1]), oi.height - Math.abs(si[1])) : Math.max(Math.abs(si[1]), oi.height), this.tracker ? this.tracker.attr(ti) : (this.tracker = fi.renderer.rect(ti).addClass("highcharts-tracker").add(fi), ui.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
            }
          } else
            this.tracker && (this.tracker = this.tracker.destroy());
        }
        styledModeFormat(ui) {
          return ui.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(
            /style="color:{(point|series)\.color}"/g,
            'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
          );
        }
        tooltipFooterHeaderFormatter(ui, fi) {
          const si = ui.series, ti = si.tooltipOptions;
          var oi = si.xAxis;
          const di = oi && oi.dateTime;
          oi = { isFooter: fi, labelConfig: ui };
          let mi = ti.xDateFormat, Oi = ti[fi ? "footerFormat" : "headerFormat"];
          return gi(this, "headerFormatter", oi, function(li) {
            di && !mi && Ci(ui.key) && (mi = di.getXDateFormat(ui.key, ti.dateTimeLabelFormats)), di && mi && (ui.point && ui.point.tooltipDateKeys || ["key"]).forEach(function(Li) {
              Oi = Oi.replace("{point." + Li + "}", "{point." + Li + ":" + mi + "}");
            }), si.chart.styledMode && (Oi = this.styledModeFormat(Oi)), li.text = es(Oi, { point: ui, series: si }, this.chart);
          }), oi.text;
        }
        update(ui) {
          this.destroy(), this.init(this.chart, Ti(!0, this.options, ui));
        }
        updatePosition(ui) {
          const { chart: fi, distance: si, options: ti } = this;
          var oi = fi.pointer;
          const di = this.getLabel(), { left: mi, top: Oi, scaleX: li, scaleY: Li } = oi.getChartPosition();
          oi = (ti.positioner || this.getPosition).call(this, di.width, di.height, ui);
          let Ui = (ui.plotX || 0) + fi.plotLeft;
          ui = (ui.plotY || 0) + fi.plotTop;
          let Zi;
          this.outside && (ti.positioner && (oi.x += mi - si, oi.y += Oi - si), Zi = (ti.borderWidth || 0) + 2 * si, this.renderer.setSize(di.width + Zi, di.height + Zi, !1), (li !== 1 || Li !== 1) && (Ai(this.container, { transform: `scale(${li}, ${Li})` }), Ui *= li, ui *= Li), Ui += mi - oi.x, ui += Oi - oi.y), this.move(Math.round(oi.x), Math.round(oi.y || 0), Ui, ui);
        }
      }
      return function(vi) {
        const ui = [];
        vi.compose = function(fi) {
          Yi.pushUnique(ui, fi) && _i(fi, "afterInit", function() {
            const si = this.chart;
            si.options.tooltip && (si.tooltip = new vi(si, si.options.tooltip));
          });
        };
      }(pi || (pi = {})), pi;
    }), ri(ii, "Core/Series/Point.js", [
      ii["Core/Renderer/HTML/AST.js"],
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Defaults.js"],
      ii["Core/Templating.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi) {
      const { animObject: es } = wi, { defaultOptions: is } = zi, { format: $i } = Ki, { addEvent: Vi, defined: _i, erase: bi, extend: Ai, fireEvent: ji, getNestedProperty: Ni, isArray: gi, isFunction: ki, isNumber: Ci, isObject: Si, merge: Ti, objectEach: Mi, pick: Di, syncTimeout: ci, removeEvent: pi, uniqueKey: vi } = Yi;
      class ui {
        constructor() {
          this.category = void 0, this.destroyed = !1, this.formatPrefix = "point", this.id = void 0, this.isNull = !1, this.percentage = this.options = this.name = void 0, this.selected = !1, this.total = this.shapeArgs = this.series = void 0, this.visible = !0, this.x = void 0;
        }
        animateBeforeDestroy() {
          const si = this, ti = { x: si.startXPos, opacity: 0 }, oi = si.getGraphicalProps();
          oi.singular.forEach(function(di) {
            si[di] = si[di].animate(di === "dataLabel" ? { x: si[di].startXPos, y: si[di].startYPos, opacity: 0 } : ti);
          }), oi.plural.forEach(function(di) {
            si[di].forEach(function(mi) {
              mi.element && mi.animate(Ai({ x: si.startXPos }, mi.startYPos ? { x: mi.startXPos, y: mi.startYPos } : {}));
            });
          });
        }
        applyOptions(si, ti) {
          const oi = this.series, di = oi.options.pointValKey || oi.pointValKey;
          return si = ui.prototype.optionsToObject.call(this, si), Ai(this, si), this.options = this.options ? Ai(this.options, si) : si, si.group && delete this.group, si.dataLabels && delete this.dataLabels, di && (this.y = ui.prototype.getNestedProperty.call(this, di)), this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point", this.selected && (this.state = "select"), "name" in this && typeof ti > "u" && oi.xAxis && oi.xAxis.hasNames && (this.x = oi.xAxis.nameToX(this)), typeof this.x > "u" && oi ? this.x = typeof ti > "u" ? oi.autoIncrement() : ti : Ci(si.x) && oi.options.relativeXValue && (this.x = oi.autoIncrement(si.x)), this;
        }
        destroy() {
          if (!this.destroyed) {
            const ti = this;
            var si = ti.series;
            const oi = si.chart;
            si = si.options.dataSorting;
            const di = oi.hoverPoints, mi = es(ti.series.chart.renderer.globalAnimation), Oi = () => {
              (ti.graphic || ti.graphics || ti.dataLabel || ti.dataLabels) && (pi(ti), ti.destroyElements());
              for (const li in ti)
                delete ti[li];
            };
            ti.legendItem && oi.legend.destroyItem(ti), di && (ti.setState(), bi(di, ti), di.length || (oi.hoverPoints = null)), ti === oi.hoverPoint && ti.onMouseOut(), si && si.enabled ? (this.animateBeforeDestroy(), ci(Oi, mi.duration)) : Oi(), oi.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(si) {
          const ti = this;
          si = ti.getGraphicalProps(si), si.singular.forEach(function(oi) {
            ti[oi] = ti[oi].destroy();
          }), si.plural.forEach(function(oi) {
            ti[oi].forEach(function(di) {
              di && di.element && di.destroy();
            }), delete ti[oi];
          });
        }
        firePointEvent(si, ti, oi) {
          const di = this, mi = this.series.options;
          (mi.point.events[si] || di.options && di.options.events && di.options.events[si]) && di.importEvents(), si === "click" && mi.allowPointSelect && (oi = function(Oi) {
            di.select && di.select(null, Oi.ctrlKey || Oi.metaKey || Oi.shiftKey);
          }), ji(di, si, ti, oi);
        }
        getClassName() {
          return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (typeof this.colorIndex < "u" ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
        }
        getGraphicalProps(si) {
          const ti = this, oi = [], di = { singular: [], plural: [] };
          let mi, Oi;
          for (si = si || { graphic: 1, dataLabel: 1 }, si.graphic && oi.push("graphic"), si.dataLabel && oi.push("dataLabel", "dataLabelPath", "dataLabelUpper", "connector"), Oi = oi.length; Oi--; )
            mi = oi[Oi], ti[mi] && di.singular.push(mi);
          return ["graphic", "dataLabel", "connector"].forEach(function(li) {
            const Li = li + "s";
            si[li] && ti[Li] && di.plural.push(Li);
          }), di;
        }
        getLabelConfig() {
          return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
        }
        getNestedProperty(si) {
          if (si)
            return si.indexOf("custom.") === 0 ? Ni(si, this.options) : this[si];
        }
        getZone() {
          var si = this.series;
          const ti = si.zones;
          si = si.zoneAxis || "y";
          let oi, di = 0;
          for (oi = ti[di]; this[si] >= oi.value; )
            oi = ti[++di];
          return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = oi && oi.color && !this.options.color ? oi.color : this.nonZonedColor, oi;
        }
        hasNewShapeType() {
          return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
        }
        init(si, ti, oi) {
          return this.series = si, this.applyOptions(ti, oi), this.id = _i(this.id) ? this.id : vi(), this.resolveColor(), si.chart.pointCount++, ji(this, "afterInit"), this;
        }
        isValid() {
          return this.x !== null && Ci(this.y);
        }
        optionsToObject(si) {
          var ti = this.series;
          const oi = ti.options.keys, di = oi || ti.pointArrayMap || ["y"], mi = di.length;
          let Oi = {}, li = 0, Li = 0;
          if (Ci(si) || si === null)
            Oi[di[0]] = si;
          else if (gi(si))
            for (!oi && si.length > mi && (ti = typeof si[0], ti === "string" ? Oi.name = si[0] : ti === "number" && (Oi.x = si[0]), li++); Li < mi; )
              oi && typeof si[li] > "u" || (0 < di[Li].indexOf(".") ? ui.prototype.setNestedProperty(Oi, si[li], di[Li]) : Oi[di[Li]] = si[li]), li++, Li++;
          else
            typeof si == "object" && (Oi = si, si.dataLabels && (ti._hasPointLabels = !0), si.marker && (ti._hasPointMarkers = !0));
          return Oi;
        }
        pos(si, ti = this.plotY) {
          if (!this.destroyed) {
            const { plotX: oi, series: di } = this, { chart: mi, xAxis: Oi, yAxis: li } = di;
            let Li = 0, Ui = 0;
            if (Ci(oi) && Ci(ti))
              return si && (Li = Oi ? Oi.pos : mi.plotLeft, Ui = li ? li.pos : mi.plotTop), mi.inverted && Oi && li ? [li.len - ti + Ui, Oi.len - oi + Li] : [oi + Li, ti + Ui];
          }
        }
        resolveColor() {
          const si = this.series;
          var ti = si.chart.styledMode;
          let oi;
          var di = si.chart.options.chart.colorCount;
          delete this.nonZonedColor, si.options.colorByPoint ? (ti || (di = si.options.colors || si.chart.options.colors, oi = di[si.colorCounter], di = di.length), ti = si.colorCounter, si.colorCounter++, si.colorCounter === di && (si.colorCounter = 0)) : (ti || (oi = si.color), ti = si.colorIndex), this.colorIndex = Di(this.options.colorIndex, ti), this.color = Di(this.options.color, oi);
        }
        setNestedProperty(si, ti, oi) {
          return oi.split(".").reduce(function(di, mi, Oi, li) {
            return di[mi] = li.length - 1 === Oi ? ti : Si(di[mi], !0) ? di[mi] : {}, di[mi];
          }, si), si;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(si) {
          const ti = this.series, oi = ti.tooltipOptions, di = Di(oi.valueDecimals, ""), mi = oi.valuePrefix || "", Oi = oi.valueSuffix || "";
          return ti.chart.styledMode && (si = ti.chart.tooltip.styledModeFormat(si)), (ti.pointArrayMap || ["y"]).forEach(function(li) {
            li = "{point." + li, (mi || Oi) && (si = si.replace(RegExp(li + "}", "g"), mi + li + "}" + Oi)), si = si.replace(RegExp(li + "}", "g"), li + ":,." + di + "f}");
          }), $i(si, { point: this, series: this.series }, ti.chart);
        }
        update(si, ti, oi, di) {
          function mi() {
            Oi.applyOptions(si);
            var Bi = Li && Oi.hasMockGraphic;
            Bi = Oi.y === null ? !Bi : Bi, Li && Bi && (Oi.graphic = Li.destroy(), delete Oi.hasMockGraphic), Si(si, !0) && (Li && Li.element && si && si.marker && typeof si.marker.symbol < "u" && (Oi.graphic = Li.destroy()), si && si.dataLabels && Oi.dataLabel && (Oi.dataLabel = Oi.dataLabel.destroy()), Oi.connector && (Oi.connector = Oi.connector.destroy())), rs = Oi.index, li.updateParallelArrays(Oi, rs), Zi.data[rs] = Si(Zi.data[rs], !0) || Si(si, !0) ? Oi.options : Di(si, Zi.data[rs]), li.isDirty = li.isDirtyData = !0, !li.fixedBox && li.hasCartesianSeries && (Ui.isDirtyBox = !0), Zi.legendType === "point" && (Ui.isDirtyLegend = !0), ti && Ui.redraw(oi);
          }
          const Oi = this, li = Oi.series, Li = Oi.graphic, Ui = li.chart, Zi = li.options;
          let rs;
          ti = Di(ti, !0), di === !1 ? mi() : Oi.firePointEvent("update", { options: si }, mi);
        }
        remove(si, ti) {
          this.series.removePoint(
            this.series.data.indexOf(this),
            si,
            ti
          );
        }
        select(si, ti) {
          const oi = this, di = oi.series, mi = di.chart;
          this.selectedStaging = si = Di(si, !oi.selected), oi.firePointEvent(si ? "select" : "unselect", { accumulate: ti }, function() {
            oi.selected = oi.options.selected = si, di.options.data[di.data.indexOf(oi)] = oi.options, oi.setState(si && "select"), ti || mi.getSelectedPoints().forEach(function(Oi) {
              const li = Oi.series;
              Oi.selected && Oi !== oi && (Oi.selected = Oi.options.selected = !1, li.options.data[li.data.indexOf(Oi)] = Oi.options, Oi.setState(mi.hoverPoints && li.options.inactiveOtherPoints ? "inactive" : ""), Oi.firePointEvent("unselect"));
            });
          }), delete this.selectedStaging;
        }
        onMouseOver(si) {
          const ti = this.series.chart, oi = ti.pointer;
          si = si ? oi.normalize(si) : oi.getChartCoordinatesFromPoint(this, ti.inverted), oi.runPointActions(si, this);
        }
        onMouseOut() {
          const si = this.series.chart;
          this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (si.hoverPoints || []).forEach(function(ti) {
            ti.setState();
          }), si.hoverPoints = si.hoverPoint = null;
        }
        importEvents() {
          if (!this.hasImportedEvents) {
            const si = this, ti = Ti(si.series.options.point, si.options).events;
            si.events = ti, Mi(ti, function(oi, di) {
              ki(oi) && Vi(si, di, oi);
            }), this.hasImportedEvents = !0;
          }
        }
        setState(si, ti) {
          const oi = this.series;
          var di = this.state, mi = oi.options.states[si || "normal"] || {}, Oi = is.plotOptions[oi.type].marker && oi.options.marker;
          const li = Oi && Oi.enabled === !1, Li = Oi && Oi.states && Oi.states[si || "normal"] || {}, Ui = Li.enabled === !1, Zi = this.marker || {}, rs = oi.chart, Bi = Oi && oi.markerAttribs;
          let ni = oi.halo;
          var Pi;
          let Hi;
          var Ri = oi.stateMarkerGraphic;
          if (si = si || "", !(si === this.state && !ti || this.selected && si !== "select" || mi.enabled === !1 || si && (Ui || li && Li.enabled === !1) || si && Zi.states && Zi.states[si] && Zi.states[si].enabled === !1)) {
            if (this.state = si, Bi && (Pi = oi.markerAttribs(this, si)), this.graphic && !this.hasMockGraphic) {
              if (di && this.graphic.removeClass("highcharts-point-" + di), si && this.graphic.addClass("highcharts-point-" + si), !rs.styledMode) {
                di = oi.pointAttribs(this, si), Hi = Di(rs.options.chart.animation, mi.animation);
                const qi = di.opacity;
                oi.options.inactiveOtherPoints && Ci(qi) && ((this.dataLabels || []).forEach(function(ai) {
                  ai && !ai.hasClass("highcharts-data-label-hidden") && ai.animate({ opacity: qi }, Hi);
                }), this.connector && this.connector.animate({ opacity: qi }, Hi)), this.graphic.animate(
                  di,
                  Hi
                );
              }
              Pi && this.graphic.animate(Pi, Di(rs.options.chart.animation, Li.animation, Oi.animation)), Ri && Ri.hide();
            } else
              si && Li && (Oi = Zi.symbol || oi.symbol, Ri && Ri.currentSymbol !== Oi && (Ri = Ri.destroy()), Pi && (Ri ? Ri[ti ? "animate" : "attr"]({ x: Pi.x, y: Pi.y }) : Oi && (oi.stateMarkerGraphic = Ri = rs.renderer.symbol(Oi, Pi.x, Pi.y, Pi.width, Pi.height).add(oi.markerGroup), Ri.currentSymbol = Oi)), !rs.styledMode && Ri && this.state !== "inactive" && Ri.attr(oi.pointAttribs(this, si))), Ri && (Ri[si && this.isInside ? "show" : "hide"](), Ri.element.point = this, Ri.addClass(this.getClassName(), !0));
            mi = mi.halo, Pi = (Ri = this.graphic || Ri) && Ri.visibility || "inherit", mi && mi.size && Ri && Pi !== "hidden" && !this.isCluster ? (ni || (oi.halo = ni = rs.renderer.path().add(Ri.parentGroup)), ni.show()[ti ? "animate" : "attr"]({ d: this.haloPath(mi.size) }), ni.attr({ class: "highcharts-halo highcharts-color-" + Di(this.colorIndex, oi.colorIndex) + (this.className ? " " + this.className : ""), visibility: Pi, zIndex: -1 }), ni.point = this, rs.styledMode || ni.attr(Ai({ fill: this.color || oi.color, "fill-opacity": mi.opacity }, hi.filterUserAttributes(mi.attributes || {})))) : ni && ni.point && ni.point.haloPath && ni.animate({ d: ni.point.haloPath(0) }, null, ni.hide), ji(this, "afterSetState", { state: si });
          }
        }
        haloPath(si) {
          const ti = this.pos();
          return ti ? this.series.chart.renderer.symbols.circle(Math.floor(ti[0]) - si, ti[1] - si, 2 * si, 2 * si) : [];
        }
      }
      return ui;
    }), ri(ii, "Core/Pointer.js", [ii["Core/Color/Color.js"], ii["Core/Globals.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { parse: Ki } = hi, { charts: Yi, noop: es } = wi, { addEvent: is, attr: $i, css: Vi, defined: _i, extend: bi, find: Ai, fireEvent: ji, isNumber: Ni, isObject: gi, objectEach: ki, offset: Ci, pick: Si, splat: Ti } = zi;
      class Mi {
        constructor(ci, pi) {
          this.lastValidTouch = {}, this.pinchDown = [], this.runChartClick = !1, this.eventsToUnbind = [], this.chart = ci, this.hasDragged = !1, this.options = pi, this.init(ci, pi);
        }
        applyInactiveState(ci) {
          let pi = [], vi;
          (ci || []).forEach(function(ui) {
            vi = ui.series, pi.push(vi), vi.linkedParent && pi.push(vi.linkedParent), vi.linkedSeries && (pi = pi.concat(vi.linkedSeries)), vi.navigatorSeries && pi.push(vi.navigatorSeries);
          }), this.chart.series.forEach(function(ui) {
            pi.indexOf(ui) === -1 ? ui.setState("inactive", !0) : ui.options.inactiveOtherPoints && ui.setAllPointsToState("inactive");
          });
        }
        destroy() {
          const ci = this;
          this.eventsToUnbind.forEach((pi) => pi()), this.eventsToUnbind = [], wi.chartCount || (Mi.unbindDocumentMouseUp && (Mi.unbindDocumentMouseUp = Mi.unbindDocumentMouseUp()), Mi.unbindDocumentTouchEnd && (Mi.unbindDocumentTouchEnd = Mi.unbindDocumentTouchEnd())), clearInterval(ci.tooltipTimeout), ki(ci, function(pi, vi) {
            ci[vi] = void 0;
          });
        }
        getSelectionMarkerAttrs(ci, pi) {
          const vi = { args: { chartX: ci, chartY: pi }, attrs: {}, shapeType: "rect" };
          return ji(this, "getSelectionMarkerAttrs", vi, (ui) => {
            const { chart: fi, mouseDownX: si = 0, mouseDownY: ti = 0, zoomHor: oi, zoomVert: di } = this;
            ui = ui.attrs;
            let mi;
            ui.x = fi.plotLeft, ui.y = fi.plotTop, ui.width = oi ? 1 : fi.plotWidth, ui.height = di ? 1 : fi.plotHeight, oi && (mi = ci - si, ui.width = Math.abs(mi), ui.x = (0 < mi ? 0 : mi) + si), di && (mi = pi - ti, ui.height = Math.abs(mi), ui.y = (0 < mi ? 0 : mi) + ti);
          }), vi;
        }
        drag(ci) {
          const pi = this.chart, vi = pi.options.chart;
          var ui = pi.plotLeft;
          const fi = pi.plotTop, si = pi.plotWidth, ti = pi.plotHeight, oi = this.mouseDownX || 0, di = this.mouseDownY || 0, mi = gi(vi.panning) ? vi.panning && vi.panning.enabled : vi.panning, Oi = vi.panKey && ci[vi.panKey + "Key"];
          let li = ci.chartX, Li = ci.chartY, Ui = this.selectionMarker;
          if ((!Ui || !Ui.touch) && (li < ui ? li = ui : li > ui + si && (li = ui + si), Li < fi ? Li = fi : Li > fi + ti && (Li = fi + ti), this.hasDragged = Math.sqrt(Math.pow(oi - li, 2) + Math.pow(di - Li, 2)), 10 < this.hasDragged)) {
            ui = pi.isInsidePlot(oi - ui, di - fi, { visiblePlotOnly: !0 });
            const { shapeType: Zi, attrs: rs } = this.getSelectionMarkerAttrs(li, Li);
            !pi.hasCartesianSeries && !pi.mapView || !this.zoomX && !this.zoomY || !ui || Oi || Ui || (this.selectionMarker = Ui = pi.renderer[Zi](), Ui.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), pi.styledMode || Ui.attr({ fill: vi.selectionMarkerFill || Ki("#334eff").setOpacity(0.25).get() })), Ui && Ui.attr(rs), ui && !Ui && mi && pi.pan(ci, vi.panning);
          }
        }
        dragStart(ci) {
          const pi = this.chart;
          pi.mouseIsDown = ci.type, pi.cancelClick = !1, pi.mouseDownX = this.mouseDownX = ci.chartX, pi.mouseDownY = this.mouseDownY = ci.chartY;
        }
        getSelectionBox(ci) {
          const pi = { args: { marker: ci }, result: {} };
          return ji(this, "getSelectionBox", pi, (vi) => {
            vi.result = { x: ci.attr ? +ci.attr("x") : ci.x, y: ci.attr ? +ci.attr("y") : ci.y, width: ci.attr ? ci.attr("width") : ci.width, height: ci.attr ? ci.attr("height") : ci.height };
          }), pi.result;
        }
        drop(ci) {
          const pi = this, vi = this.chart, ui = this.hasPinched;
          if (this.selectionMarker) {
            const {
              x: fi,
              y: si,
              width: ti,
              height: oi
            } = this.getSelectionBox(this.selectionMarker), di = { originalEvent: ci, xAxis: [], yAxis: [], x: fi, y: si, width: ti, height: oi };
            let mi = !!vi.mapView;
            (this.hasDragged || ui) && (vi.axes.forEach(function(Oi) {
              if (Oi.zoomEnabled && _i(Oi.min) && (ui || pi[{ xAxis: "zoomX", yAxis: "zoomY" }[Oi.coll]]) && Ni(fi) && Ni(si) && Ni(ti) && Ni(oi)) {
                var li = Oi.horiz;
                const Li = ci.type === "touchend" ? Oi.minPixelPadding : 0, Ui = Oi.toValue((li ? fi : si) + Li);
                li = Oi.toValue((li ? fi + ti : si + oi) - Li), di[Oi.coll].push({ axis: Oi, min: Math.min(Ui, li), max: Math.max(Ui, li) }), mi = !0;
              }
            }), mi && ji(vi, "selection", di, function(Oi) {
              vi.zoom(bi(
                Oi,
                ui ? { animation: !1 } : null
              ));
            })), Ni(vi.index) && (this.selectionMarker = this.selectionMarker.destroy()), ui && this.scaleGroups();
          }
          vi && Ni(vi.index) && (Vi(vi.container, { cursor: vi._cursor }), vi.cancelClick = 10 < this.hasDragged, vi.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
        }
        findNearestKDPoint(ci, pi, vi) {
          let ui;
          return ci.forEach(function(fi) {
            var si = !(fi.noSharedTooltip && pi) && 0 > fi.options.findNearestPointBy.indexOf("y");
            if (fi = fi.searchPoint(vi, si), (si = gi(fi, !0) && fi.series) && !(si = !gi(ui, !0))) {
              {
                si = ui.distX - fi.distX;
                const ti = ui.dist - fi.dist, oi = (fi.series.group && fi.series.group.zIndex) - (ui.series.group && ui.series.group.zIndex);
                si = si !== 0 && pi ? si : ti !== 0 ? ti : oi !== 0 ? oi : ui.series.index > fi.series.index ? -1 : 1;
              }
              si = 0 < si;
            }
            si && (ui = fi);
          }), ui;
        }
        getChartCoordinatesFromPoint(ci, pi) {
          var vi = ci.series;
          const ui = vi.xAxis;
          vi = vi.yAxis;
          const fi = ci.shapeArgs;
          if (ui && vi) {
            let si = Si(ci.clientX, ci.plotX), ti = ci.plotY || 0;
            return ci.isNode && fi && Ni(fi.x) && Ni(fi.y) && (si = fi.x, ti = fi.y), pi ? { chartX: vi.len + vi.pos - ti, chartY: ui.len + ui.pos - si } : { chartX: si + ui.pos, chartY: ti + vi.pos };
          }
          if (fi && fi.x && fi.y)
            return { chartX: fi.x, chartY: fi.y };
        }
        getChartPosition() {
          if (this.chartPosition)
            return this.chartPosition;
          var { container: ci } = this.chart;
          const pi = Ci(ci);
          this.chartPosition = { left: pi.left, top: pi.top, scaleX: 1, scaleY: 1 };
          const vi = ci.offsetWidth;
          return ci = ci.offsetHeight, 2 < vi && 2 < ci && (this.chartPosition.scaleX = pi.width / vi, this.chartPosition.scaleY = pi.height / ci), this.chartPosition;
        }
        getCoordinates(ci) {
          const pi = { xAxis: [], yAxis: [] };
          return this.chart.axes.forEach(function(vi) {
            pi[vi.isXAxis ? "xAxis" : "yAxis"].push({ axis: vi, value: vi.toValue(ci[vi.horiz ? "chartX" : "chartY"]) });
          }), pi;
        }
        getHoverData(ci, pi, vi, ui, fi, si) {
          const ti = [];
          ui = !(!ui || !ci);
          const oi = function(li) {
            return li.visible && !(!fi && li.directTouch) && Si(li.options.enableMouseTracking, !0);
          };
          let di, mi = { chartX: si ? si.chartX : void 0, chartY: si ? si.chartY : void 0, shared: fi };
          ji(this, "beforeGetHoverData", mi), di = pi && !pi.stickyTracking ? [pi] : vi.filter((li) => li.stickyTracking && (mi.filter || oi)(li));
          const Oi = ui || !si ? ci : this.findNearestKDPoint(di, fi, si);
          return pi = Oi && Oi.series, Oi && (fi && !pi.noSharedTooltip ? (di = vi.filter(function(li) {
            return mi.filter ? mi.filter(li) : oi(li) && !li.noSharedTooltip;
          }), di.forEach(function(li) {
            let Li = Ai(li.points, function(Ui) {
              return Ui.x === Oi.x && !Ui.isNull;
            });
            gi(Li) && (li.boosted && li.boost && (Li = li.boost.getPoint(Li)), ti.push(Li));
          })) : ti.push(Oi)), mi = { hoverPoint: Oi }, ji(this, "afterGetHoverData", mi), { hoverPoint: mi.hoverPoint, hoverSeries: pi, hoverPoints: ti };
        }
        getPointFromEvent(ci) {
          ci = ci.target;
          let pi;
          for (; ci && !pi; )
            pi = ci.point, ci = ci.parentNode;
          return pi;
        }
        onTrackerMouseOut(ci) {
          ci = ci.relatedTarget;
          const pi = this.chart.hoverSeries;
          this.isDirectTouch = !1, !pi || !ci || pi.stickyTracking || this.inClass(ci, "highcharts-tooltip") || this.inClass(ci, "highcharts-series-" + pi.index) && this.inClass(ci, "highcharts-tracker") || pi.onMouseOut();
        }
        inClass(ci, pi) {
          let vi;
          for (; ci; ) {
            if (vi = $i(ci, "class")) {
              if (vi.indexOf(pi) !== -1)
                return !0;
              if (vi.indexOf("highcharts-container") !== -1)
                return !1;
            }
            ci = ci.parentElement;
          }
        }
        init(ci, pi) {
          this.options = pi, this.chart = ci, this.runChartClick = !(!pi.chart.events || !pi.chart.events.click), this.pinchDown = [], this.lastValidTouch = {}, this.setDOMEvents(), ji(this, "afterInit");
        }
        normalize(ci, pi) {
          var vi = ci.touches, ui = vi ? vi.length ? vi.item(0) : Si(vi.changedTouches, ci.changedTouches)[0] : ci;
          return pi || (pi = this.getChartPosition()), vi = ui.pageX - pi.left, ui = ui.pageY - pi.top, vi /= pi.scaleX, ui /= pi.scaleY, bi(ci, { chartX: Math.round(vi), chartY: Math.round(ui) });
        }
        onContainerClick(ci) {
          const pi = this.chart, vi = pi.hoverPoint;
          ci = this.normalize(ci);
          const ui = pi.plotLeft, fi = pi.plotTop;
          pi.cancelClick || (vi && this.inClass(ci.target, "highcharts-tracker") ? (ji(vi.series, "click", bi(ci, { point: vi })), pi.hoverPoint && vi.firePointEvent("click", ci)) : (bi(ci, this.getCoordinates(ci)), pi.isInsidePlot(ci.chartX - ui, ci.chartY - fi, { visiblePlotOnly: !0 }) && ji(pi, "click", ci)));
        }
        onContainerMouseDown(ci) {
          const pi = ((ci.buttons || ci.button) & 1) === 1;
          ci = this.normalize(ci), wi.isFirefox && ci.button !== 0 && this.onContainerMouseMove(ci), (typeof ci.button > "u" || pi) && (this.zoomOption(ci), pi && ci.preventDefault && ci.preventDefault(), this.dragStart(ci));
        }
        onContainerMouseLeave(ci) {
          const pi = Yi[Si(Mi.hoverChartIndex, -1)];
          ci = this.normalize(ci), pi && ci.relatedTarget && !this.inClass(ci.relatedTarget, "highcharts-tooltip") && (pi.pointer.reset(), pi.pointer.chartPosition = void 0);
        }
        onContainerMouseEnter(ci) {
          delete this.chartPosition;
        }
        onContainerMouseMove(ci) {
          const pi = this.chart, vi = pi.tooltip;
          ci = this.normalize(ci), this.setHoverChartIndex(), (pi.mouseIsDown === "mousedown" || this.touchSelect(ci)) && this.drag(ci), pi.openMenu || !this.inClass(ci.target, "highcharts-tracker") && !pi.isInsidePlot(ci.chartX - pi.plotLeft, ci.chartY - pi.plotTop, { visiblePlotOnly: !0 }) || vi && vi.shouldStickOnContact(ci) || (this.inClass(ci.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(ci));
        }
        onDocumentTouchEnd(ci) {
          const pi = Yi[Si(Mi.hoverChartIndex, -1)];
          pi && pi.pointer.drop(ci);
        }
        onContainerTouchMove(ci) {
          this.touchSelect(ci) ? this.onContainerMouseMove(ci) : this.touch(ci);
        }
        onContainerTouchStart(ci) {
          this.touchSelect(ci) ? this.onContainerMouseDown(ci) : (this.zoomOption(ci), this.touch(ci, !0));
        }
        onDocumentMouseMove(ci) {
          const pi = this.chart, vi = pi.tooltip, ui = this.chartPosition;
          ci = this.normalize(ci, ui), !ui || pi.isInsidePlot(ci.chartX - pi.plotLeft, ci.chartY - pi.plotTop, { visiblePlotOnly: !0 }) || vi && vi.shouldStickOnContact(ci) || this.inClass(ci.target, "highcharts-tracker") || this.reset();
        }
        onDocumentMouseUp(ci) {
          const pi = Yi[Si(Mi.hoverChartIndex, -1)];
          pi && pi.pointer.drop(ci);
        }
        pinch(ci) {
          const pi = this, vi = pi.chart, ui = pi.pinchDown, fi = ci.touches || [], si = fi.length, ti = pi.lastValidTouch, oi = pi.hasZoom, di = {}, mi = si === 1 && (pi.inClass(ci.target, "highcharts-tracker") && vi.runTrackerClick || pi.runChartClick), Oi = {};
          var li = pi.chart.tooltip;
          li = si === 1 && Si(li && li.options.followTouchMove, !0);
          let Li = pi.selectionMarker;
          1 < si ? pi.initiated = !0 : li && (pi.initiated = !1), oi && pi.initiated && !mi && ci.cancelable !== !1 && ci.preventDefault(), [].map.call(fi, function(Ui) {
            return pi.normalize(Ui);
          }), ci.type === "touchstart" ? ([].forEach.call(fi, function(Ui, Zi) {
            ui[Zi] = { chartX: Ui.chartX, chartY: Ui.chartY };
          }), ti.x = [ui[0].chartX, ui[1] && ui[1].chartX], ti.y = [ui[0].chartY, ui[1] && ui[1].chartY], vi.axes.forEach(function(Ui) {
            if (Ui.zoomEnabled) {
              const Zi = vi.bounds[Ui.horiz ? "h" : "v"], rs = Ui.minPixelPadding, Bi = Ui.toPixels(Math.min(Si(Ui.options.min, Ui.dataMin), Ui.dataMin)), ni = Ui.toPixels(Math.max(Si(Ui.options.max, Ui.dataMax), Ui.dataMax)), Pi = Math.max(Bi, ni);
              Zi.min = Math.min(Ui.pos, Math.min(Bi, ni) - rs), Zi.max = Math.max(Ui.pos + Ui.len, Pi + rs);
            }
          }), pi.res = !0) : li ? this.runPointActions(pi.normalize(ci)) : ui.length && (ji(vi, "touchpan", { originalEvent: ci }, () => {
            Li || (pi.selectionMarker = Li = bi({ destroy: es, touch: !0 }, vi.plotBox)), pi.pinchTranslate(ui, fi, di, Li, Oi, ti), pi.hasPinched = oi, pi.scaleGroups(di, Oi);
          }), pi.res && (pi.res = !1, this.reset(
            !1,
            0
          )));
        }
        pinchTranslate(ci, pi, vi, ui, fi, si) {
          this.zoomHor && this.pinchTranslateDirection(!0, ci, pi, vi, ui, fi, si), this.zoomVert && this.pinchTranslateDirection(!1, ci, pi, vi, ui, fi, si);
        }
        pinchTranslateDirection(ci, pi, vi, ui, fi, si, ti, oi) {
          const di = this.chart, mi = ci ? "x" : "y", Oi = ci ? "X" : "Y", li = "chart" + Oi, Li = ci ? "width" : "height", Ui = di["plot" + (ci ? "Left" : "Top")], Zi = di.inverted, rs = di.bounds[ci ? "h" : "v"], Bi = pi.length === 1, ni = pi[0][li], Pi = !Bi && pi[1][li];
          pi = function() {
            typeof xi == "number" && 20 < Math.abs(ni - Pi) && (qi = oi || Math.abs(ai - xi) / Math.abs(ni - Pi)), Ri = (Ui - ai) / qi + ni, Hi = di["plot" + (ci ? "Width" : "Height")] / qi;
          };
          let Hi, Ri, qi = oi || 1, ai = vi[0][li], xi = !Bi && vi[1][li], yi;
          pi(), vi = Ri, vi < rs.min ? (vi = rs.min, yi = !0) : vi + Hi > rs.max && (vi = rs.max - Hi, yi = !0), yi ? (ai -= 0.8 * (ai - ti[mi][0]), typeof xi == "number" && (xi -= 0.8 * (xi - ti[mi][1])), pi()) : ti[mi] = [ai, xi], Zi || (si[mi] = Ri - Ui, si[Li] = Hi), si = Zi ? 1 / qi : qi, fi[Li] = Hi, fi[mi] = vi, ui[Zi ? ci ? "scaleY" : "scaleX" : "scale" + Oi] = qi, ui["translate" + Oi] = si * Ui + (ai - si * ni);
        }
        reset(ci, pi) {
          const vi = this.chart, ui = vi.hoverSeries, fi = vi.hoverPoint, si = vi.hoverPoints, ti = vi.tooltip, oi = ti && ti.shared ? si : fi;
          ci && oi && Ti(oi).forEach(function(di) {
            di.series.isCartesian && typeof di.plotX > "u" && (ci = !1);
          }), ci ? ti && oi && Ti(oi).length && (ti.refresh(oi), ti.shared && si ? si.forEach(function(di) {
            di.setState(di.state, !0), di.series.isCartesian && (di.series.xAxis.crosshair && di.series.xAxis.drawCrosshair(null, di), di.series.yAxis.crosshair && di.series.yAxis.drawCrosshair(null, di));
          }) : fi && (fi.setState(fi.state, !0), vi.axes.forEach(function(di) {
            di.crosshair && fi.series[di.coll] === di && di.drawCrosshair(null, fi);
          }))) : (fi && fi.onMouseOut(), si && si.forEach(function(di) {
            di.setState();
          }), ui && ui.onMouseOut(), ti && ti.hide(pi), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), vi.axes.forEach(function(di) {
            di.hideCrosshair();
          }), this.hoverX = vi.hoverPoints = vi.hoverPoint = null);
        }
        runPointActions(ci, pi, vi) {
          const ui = this.chart, fi = ui.tooltip && ui.tooltip.options.enabled ? ui.tooltip : void 0, si = fi ? fi.shared : !1;
          let ti = pi || ui.hoverPoint, oi = ti && ti.series || ui.hoverSeries;
          pi = this.getHoverData(ti, oi, ui.series, (!ci || ci.type !== "touchmove") && (!!pi || oi && oi.directTouch && this.isDirectTouch), si, ci), ti = pi.hoverPoint, oi = pi.hoverSeries;
          const di = pi.hoverPoints;
          pi = oi && oi.tooltipOptions.followPointer && !oi.tooltipOptions.split;
          const mi = si && oi && !oi.noSharedTooltip;
          if (ti && (vi || ti !== ui.hoverPoint || fi && fi.isHidden)) {
            if ((ui.hoverPoints || []).forEach(function(Oi) {
              di.indexOf(Oi) === -1 && Oi.setState();
            }), ui.hoverSeries !== oi && oi.onMouseOver(), this.applyInactiveState(di), (di || []).forEach(function(Oi) {
              Oi.setState("hover");
            }), ui.hoverPoint && ui.hoverPoint.firePointEvent("mouseOut"), !ti.series)
              return;
            ui.hoverPoints = di, ui.hoverPoint = ti, ti.firePointEvent("mouseOver", void 0, () => {
              fi && ti && fi.refresh(mi ? di : ti, ci);
            });
          } else
            pi && fi && !fi.isHidden && (vi = fi.getAnchor([{}], ci), ui.isInsidePlot(vi[0], vi[1], { visiblePlotOnly: !0 }) && fi.updatePosition({
              plotX: vi[0],
              plotY: vi[1]
            }));
          this.unDocMouseMove || (this.unDocMouseMove = is(ui.container.ownerDocument, "mousemove", function(Oi) {
            const li = Yi[Mi.hoverChartIndex];
            li && li.pointer.onDocumentMouseMove(Oi);
          }), this.eventsToUnbind.push(this.unDocMouseMove)), ui.axes.forEach(function(Oi) {
            const li = Si((Oi.crosshair || {}).snap, !0);
            let Li;
            li && ((Li = ui.hoverPoint) && Li.series[Oi.coll] === Oi || (Li = Ai(di, (Ui) => Ui.series && Ui.series[Oi.coll] === Oi))), Li || !li ? Oi.drawCrosshair(ci, Li) : Oi.hideCrosshair();
          });
        }
        scaleGroups(ci, pi) {
          const vi = this.chart;
          vi.series.forEach(function(ui) {
            const fi = ci || ui.getPlotBox();
            ui.group && (ui.xAxis && ui.xAxis.zoomEnabled || vi.mapView) && (ui.group.attr(fi), ui.markerGroup && (ui.markerGroup.attr(fi), ui.markerGroup.clip(pi ? vi.clipRect : null)), ui.dataLabelsGroup && ui.dataLabelsGroup.attr(fi));
          }), vi.clipRect.attr(pi || vi.clipBox);
        }
        setDOMEvents() {
          const ci = this.chart.container, pi = ci.ownerDocument;
          ci.onmousedown = this.onContainerMouseDown.bind(this), ci.onmousemove = this.onContainerMouseMove.bind(this), ci.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(is(ci, "mouseenter", this.onContainerMouseEnter.bind(this))), this.eventsToUnbind.push(is(ci, "mouseleave", this.onContainerMouseLeave.bind(this))), Mi.unbindDocumentMouseUp || (Mi.unbindDocumentMouseUp = is(pi, "mouseup", this.onDocumentMouseUp.bind(this)));
          let vi = this.chart.renderTo.parentElement;
          for (; vi && vi.tagName !== "BODY"; )
            this.eventsToUnbind.push(is(vi, "scroll", () => {
              delete this.chartPosition;
            })), vi = vi.parentElement;
          wi.hasTouch && (this.eventsToUnbind.push(is(ci, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(is(
            ci,
            "touchmove",
            this.onContainerTouchMove.bind(this),
            { passive: !1 }
          )), Mi.unbindDocumentTouchEnd || (Mi.unbindDocumentTouchEnd = is(pi, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })));
        }
        setHoverChartIndex() {
          const ci = this.chart, pi = wi.charts[Si(Mi.hoverChartIndex, -1)];
          pi && pi !== ci && pi.pointer.onContainerMouseLeave({ relatedTarget: ci.container }), pi && pi.mouseIsDown || (Mi.hoverChartIndex = ci.index);
        }
        touch(ci, pi) {
          const vi = this.chart;
          let ui;
          this.setHoverChartIndex(), ci.touches.length === 1 ? (ci = this.normalize(ci), vi.isInsidePlot(ci.chartX - vi.plotLeft, ci.chartY - vi.plotTop, { visiblePlotOnly: !0 }) && !vi.openMenu ? (pi && this.runPointActions(ci), ci.type === "touchmove" && (pi = this.pinchDown, ui = pi[0] ? 4 <= Math.sqrt(Math.pow(pi[0].chartX - ci.chartX, 2) + Math.pow(pi[0].chartY - ci.chartY, 2)) : !1), Si(ui, !0) && this.pinch(ci)) : pi && this.reset()) : ci.touches.length === 2 && this.pinch(ci);
        }
        touchSelect(ci) {
          return !(!this.chart.zooming.singleTouch || !ci.touches || ci.touches.length !== 1);
        }
        zoomOption(ci) {
          const pi = this.chart, vi = pi.inverted;
          var ui = pi.zooming.type || "";
          /touch/.test(ci.type) && (ui = Si(pi.zooming.pinchType, ui)), this.zoomX = ci = /x/.test(ui), this.zoomY = ui = /y/.test(ui), this.zoomHor = ci && !vi || ui && vi, this.zoomVert = ui && !vi || ci && vi, this.hasZoom = ci || ui;
        }
      }
      return function(Di) {
        const ci = [], pi = [];
        Di.compose = function(vi) {
          zi.pushUnique(pi, vi) && is(vi, "beforeRender", function() {
            this.pointer = new Di(this, this.options);
          });
        }, Di.dissolve = function() {
          for (let vi = 0, ui = ci.length; vi < ui; ++vi)
            ci[vi]();
          ci.length = 0;
        };
      }(Mi || (Mi = {})), Mi;
    }), ri(
      ii,
      "Core/Legend/Legend.js",
      [ii["Core/Animation/AnimationUtilities.js"], ii["Core/Templating.js"], ii["Core/Globals.js"], ii["Core/Series/Point.js"], ii["Core/Renderer/RendererUtilities.js"], ii["Core/Utilities.js"]],
      function(hi, wi, zi, Ki, Yi, es) {
        const { animObject: is, setAnimation: $i } = hi, { format: Vi } = wi, { marginNames: _i } = zi, { distribute: bi } = Yi, { addEvent: Ai, createElement: ji, css: Ni, defined: gi, discardElement: ki, find: Ci, fireEvent: Si, isNumber: Ti, merge: Mi, pick: Di, relativeLength: ci, stableSort: pi, syncTimeout: vi } = es;
        class ui {
          constructor(si, ti) {
            this.allItems = [], this.contentGroup = this.box = void 0, this.display = !1, this.group = void 0, this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0, this.options = void 0, this.padding = 0, this.pages = [], this.proximate = !1, this.scrollGroup = void 0, this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0, this.chart = si, this.init(si, ti);
          }
          init(si, ti) {
            this.chart = si, this.setOptions(ti), ti.enabled && (this.render(), Ai(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            }), Ai(this.chart, "render", () => {
              this.proximate && (this.proximatePositions(), this.positionItems());
            }));
          }
          setOptions(si) {
            const ti = Di(si.padding, 8);
            this.options = si, this.chart.styledMode || (this.itemStyle = si.itemStyle, this.itemHiddenStyle = Mi(this.itemStyle, si.itemHiddenStyle)), this.itemMarginTop = si.itemMarginTop, this.itemMarginBottom = si.itemMarginBottom, this.padding = ti, this.initialItemY = ti - 5, this.symbolWidth = Di(si.symbolWidth, 16), this.pages = [], this.proximate = si.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
          }
          update(si, ti) {
            const oi = this.chart;
            this.setOptions(Mi(!0, this.options, si)), this.destroy(), oi.isDirtyLegend = oi.isDirtyBox = !0, Di(ti, !0) && oi.redraw(), Si(this, "afterUpdate");
          }
          colorizeItem(si, ti) {
            const { group: oi, label: di, line: mi, symbol: Oi } = si.legendItem || {};
            if (oi && oi[ti ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
              const { itemHiddenStyle: li } = this, Li = li.color, Ui = ti && si.color || Li, Zi = si.options && si.options.marker;
              let rs = { fill: Ui };
              di == null || di.css(Mi(ti ? this.itemStyle : li)), mi == null || mi.attr({ stroke: Ui }), Oi && (Zi && Oi.isMarker && (rs = si.pointAttribs(), ti || (rs.stroke = rs.fill = Li)), Oi.attr(rs));
            }
            Si(this, "afterColorizeItem", { item: si, visible: ti });
          }
          positionItems() {
            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
          }
          positionItem(si) {
            const { group: ti, x: oi = 0, y: di = 0 } = si.legendItem || {};
            var mi = this.options, Oi = mi.symbolPadding;
            const li = !mi.rtl;
            mi = si.checkbox, ti && ti.element && (Oi = { translateX: li ? oi : this.legendWidth - oi - 2 * Oi - 4, translateY: di }, ti[gi(ti.translateY) ? "animate" : "attr"](Oi, void 0, () => {
              Si(this, "afterPositionItem", { item: si });
            })), mi && (mi.x = oi, mi.y = di);
          }
          destroyItem(si) {
            const ti = si.checkbox, oi = si.legendItem || {};
            for (const di of ["group", "label", "line", "symbol"])
              oi[di] && (oi[di] = oi[di].destroy());
            ti && ki(ti), si.legendItem = void 0;
          }
          destroy() {
            for (const si of this.getAllItems())
              this.destroyItem(si);
            for (const si of "clipRect up down pager nav box title group".split(" "))
              this[si] && (this[si] = this[si].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            const si = this.group && this.group.alignAttr, ti = this.clipHeight || this.legendHeight, oi = this.titleHeight;
            let di;
            si && (di = si.translateY, this.allItems.forEach(function(mi) {
              const Oi = mi.checkbox;
              let li;
              Oi && (li = di + oi + Oi.y + (this.scrollOffset || 0) + 3, Ni(Oi, { left: si.translateX + mi.checkboxOffset + Oi.x - 20 + "px", top: li + "px", display: this.proximate || li > di - 6 && li < di + ti - 6 ? "" : "none" }));
            }, this));
          }
          renderTitle() {
            var si = this.options;
            const ti = this.padding, oi = si.title;
            let di = 0;
            oi.text && (this.title || (this.title = this.chart.renderer.label(oi.text, ti - 3, ti - 4, void 0, void 0, void 0, si.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(oi.style), this.title.add(this.group)), oi.width || this.title.css({ width: this.maxLegendWidth + "px" }), si = this.title.getBBox(), di = si.height, this.offsetWidth = si.width, this.contentGroup.attr({ translateY: di })), this.titleHeight = di;
          }
          setText(si) {
            const ti = this.options;
            si.legendItem.label.attr({ text: ti.labelFormat ? Vi(ti.labelFormat, si, this.chart) : ti.labelFormatter.call(si) });
          }
          renderItem(si) {
            const ti = si.legendItem = si.legendItem || {};
            var oi = this.chart, di = oi.renderer;
            const mi = this.options, Oi = this.symbolWidth, li = mi.symbolPadding || 0, Li = this.itemStyle, Ui = this.itemHiddenStyle, Zi = mi.layout === "horizontal" ? Di(mi.itemDistance, 20) : 0, rs = !mi.rtl, Bi = !si.series, ni = !Bi && si.series.drawLegendSymbol ? si.series : si;
            var Pi = ni.options;
            const Hi = this.createCheckboxForItem && Pi && Pi.showCheckbox, Ri = mi.useHTML, qi = si.options.className;
            let ai = ti.label;
            Pi = Oi + li + Zi + (Hi ? 20 : 0), ai || (ti.group = di.g("legend-item").addClass("highcharts-" + ni.type + "-series highcharts-color-" + si.colorIndex + (qi ? " " + qi : "") + (Bi ? " highcharts-series-" + si.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), ti.label = ai = di.text("", rs ? Oi + li : -li, this.baseline || 0, Ri), oi.styledMode || ai.css(Mi(si.visible ? Li : Ui)), ai.attr({ align: rs ? "left" : "right", zIndex: 2 }).add(ti.group), this.baseline || (this.fontMetrics = di.fontMetrics(ai), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, ai.attr("y", this.baseline), this.symbolHeight = Di(mi.symbolHeight, this.fontMetrics.f), mi.squareSymbol && (this.symbolWidth = Di(mi.symbolWidth, Math.max(this.symbolHeight, 16)), Pi = this.symbolWidth + li + Zi + (Hi ? 20 : 0), rs && ai.attr("x", this.symbolWidth + li))), ni.drawLegendSymbol(this, si), this.setItemEvents && this.setItemEvents(si, ai, Ri)), Hi && !si.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(si), this.colorizeItem(
              si,
              si.visible
            ), !oi.styledMode && Li.width || ai.css({ width: (mi.itemWidth || this.widthOption || oi.spacingBox.width) - Pi + "px" }), this.setText(si), oi = ai.getBBox(), di = this.fontMetrics && this.fontMetrics.h || 0, si.itemWidth = si.checkboxOffset = mi.itemWidth || ti.labelWidth || oi.width + Pi, this.maxItemWidth = Math.max(this.maxItemWidth, si.itemWidth), this.totalItemWidth += si.itemWidth, this.itemHeight = si.itemHeight = Math.round(ti.labelHeight || (oi.height > 1.5 * di ? oi.height : di));
          }
          layoutItem(si) {
            var ti = this.options;
            const oi = this.padding, di = ti.layout === "horizontal", mi = si.itemHeight, Oi = this.itemMarginBottom, li = this.itemMarginTop, Li = di ? Di(ti.itemDistance, 20) : 0, Ui = this.maxLegendWidth;
            ti = ti.alignColumns && this.totalItemWidth > Ui ? this.maxItemWidth : si.itemWidth;
            const Zi = si.legendItem || {};
            di && this.itemX - oi + ti > Ui && (this.itemX = oi, this.lastLineHeight && (this.itemY += li + this.lastLineHeight + Oi), this.lastLineHeight = 0), this.lastItemY = li + this.itemY + Oi, this.lastLineHeight = Math.max(mi, this.lastLineHeight), Zi.x = this.itemX, Zi.y = this.itemY, di ? this.itemX += ti : (this.itemY += li + mi + Oi, this.lastLineHeight = mi), this.offsetWidth = this.widthOption || Math.max((di ? this.itemX - oi - (si.checkbox ? 0 : Li) : ti) + oi, this.offsetWidth);
          }
          getAllItems() {
            let si = [];
            return this.chart.series.forEach(function(ti) {
              const oi = ti && ti.options;
              ti && Di(oi.showInLegend, gi(oi.linkedTo) ? !1 : void 0, !0) && (si = si.concat((ti.legendItem || {}).labels || (oi.legendType === "point" ? ti.data : ti)));
            }), Si(this, "afterGetAllItems", { allItems: si }), si;
          }
          getAlignment() {
            const si = this.options;
            return this.proximate ? si.align.charAt(0) + "tv" : si.floating ? "" : si.align.charAt(0) + si.verticalAlign.charAt(0) + si.layout.charAt(0);
          }
          adjustMargins(si, ti) {
            const oi = this.chart, di = this.options, mi = this.getAlignment();
            mi && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(Oi, li) {
              Oi.test(mi) && !gi(si[li]) && (oi[_i[li]] = Math.max(oi[_i[li]], oi.legend[(li + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][li] * di[li % 2 ? "x" : "y"] + Di(di.margin, 12) + ti[li] + (oi.titleOffset[li] || 0)));
            });
          }
          proximatePositions() {
            const si = this.chart, ti = [], oi = this.options.align === "left";
            this.allItems.forEach(function(mi) {
              var Oi, li = oi;
              let Li;
              mi.yAxis && (mi.xAxis.options.reversed && (li = !li), mi.points && (Oi = Ci(li ? mi.points : mi.points.slice(0).reverse(), function(Ui) {
                return Ti(Ui.plotY);
              })), li = this.itemMarginTop + mi.legendItem.label.getBBox().height + this.itemMarginBottom, Li = mi.yAxis.top - si.plotTop, mi.visible ? (Oi = Oi ? Oi.plotY : mi.yAxis.height, Oi += Li - 0.3 * li) : Oi = Li + mi.yAxis.height, ti.push({ target: Oi, size: li, item: mi }));
            }, this);
            let di;
            for (const mi of bi(ti, si.plotHeight))
              di = mi.item.legendItem || {}, Ti(mi.pos) && (di.y = si.plotTop - si.spacing[0] + mi.pos);
          }
          render() {
            const si = this.chart, ti = si.renderer, oi = this.options, di = this.padding;
            var mi = this.getAllItems();
            let Oi, li = this.group, Li = this.box;
            this.itemX = di, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, this.widthOption = ci(oi.width, si.spacingBox.width - di);
            var Ui = si.spacingBox.width - 2 * di - oi.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (Ui /= 2), this.maxLegendWidth = this.widthOption || Ui, li || (this.group = li = ti.g("legend").addClass(oi.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = ti.g().attr({ zIndex: 1 }).add(li), this.scrollGroup = ti.g().add(this.contentGroup)), this.renderTitle(), pi(mi, (Zi, rs) => (Zi.options && Zi.options.legendIndex || 0) - (rs.options && rs.options.legendIndex || 0)), oi.reversed && mi.reverse(), this.allItems = mi, this.display = Ui = !!mi.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, mi.forEach(this.renderItem, this), mi.forEach(this.layoutItem, this), mi = (this.widthOption || this.offsetWidth) + di, Oi = this.lastItemY + this.lastLineHeight + this.titleHeight, Oi = this.handleOverflow(Oi), Oi += di, Li || (this.box = Li = ti.rect().addClass("highcharts-legend-box").attr({ r: oi.borderRadius }).add(li)), si.styledMode || Li.attr({
              stroke: oi.borderColor,
              "stroke-width": oi.borderWidth || 0,
              fill: oi.backgroundColor || "none"
            }).shadow(oi.shadow), 0 < mi && 0 < Oi && Li[Li.placed ? "animate" : "attr"](Li.crisp.call({}, { x: 0, y: 0, width: mi, height: Oi }, Li.strokeWidth())), li[Ui ? "show" : "hide"](), si.styledMode && li.getStyle("display") === "none" && (mi = Oi = 0), this.legendWidth = mi, this.legendHeight = Oi, Ui && this.align(), this.proximate || this.positionItems(), Si(this, "afterRender");
          }
          align(si = this.chart.spacingBox) {
            const ti = this.chart, oi = this.options;
            let di = si.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < ti.titleOffset[0] ? di += ti.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < ti.titleOffset[2] && (di -= ti.titleOffset[2]), di !== si.y && (si = Mi(si, { y: di })), ti.hasRendered || (this.group.placed = !1), this.group.align(Mi(oi, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : oi.verticalAlign }), !0, si);
          }
          handleOverflow(si) {
            const ti = this, oi = this.chart, di = oi.renderer, mi = this.options;
            var Oi = mi.y;
            const li = mi.verticalAlign === "top", Li = this.padding, Ui = mi.maxHeight, Zi = mi.navigation, rs = Di(Zi.animation, !0), Bi = Zi.arrowSize || 12, ni = this.pages, Pi = this.allItems, Hi = function(Xi) {
              typeof Xi == "number" ? Gi.attr({ height: Xi }) : Gi && (ti.clipRect = Gi.destroy(), ti.contentGroup.clip()), ti.contentGroup.div && (ti.contentGroup.div.style.clip = Xi ? "rect(" + Li + "px,9999px," + (Li + Xi) + "px,0)" : "auto");
            }, Ri = function(Xi) {
              return ti[Xi] = di.circle(0, 0, 1.3 * Bi).translate(Bi / 2, Bi / 2).add(yi), oi.styledMode || ti[Xi].attr("fill", "rgba(0,0,0,0.0001)"), ti[Xi];
            };
            let qi, ai, xi;
            Oi = oi.spacingBox.height + (li ? -Oi : Oi) - Li;
            let yi = this.nav, Gi = this.clipRect;
            return mi.layout !== "horizontal" || mi.verticalAlign === "middle" || mi.floating || (Oi /= 2), Ui && (Oi = Math.min(Oi, Ui)), ni.length = 0, si && 0 < Oi && si > Oi && Zi.enabled !== !1 ? (this.clipHeight = qi = Math.max(Oi - 20 - this.titleHeight - Li, 0), this.currentPage = Di(this.currentPage, 1), this.fullHeight = si, Pi.forEach((Xi, Wi) => {
              xi = Xi.legendItem || {}, Xi = xi.y || 0;
              const ts = Math.round(xi.label.getBBox().height);
              let ss = ni.length;
              (!ss || Xi - ni[ss - 1] > qi && (ai || Xi) !== ni[ss - 1]) && (ni.push(ai || Xi), ss++), xi.pageIx = ss - 1, ai && ((Pi[Wi - 1].legendItem || {}).pageIx = ss - 1), Wi === Pi.length - 1 && Xi + ts - ni[ss - 1] > qi && Xi > ni[ss - 1] && (ni.push(Xi), xi.pageIx = ss), Xi !== ai && (ai = Xi);
            }), Gi || (Gi = ti.clipRect = di.clipRect(0, Li - 2, 9999, 0), ti.contentGroup.clip(Gi)), Hi(qi), yi || (this.nav = yi = di.g().attr({ zIndex: 1 }).add(this.group), this.up = di.symbol("triangle", 0, 0, Bi, Bi).add(yi), Ri("upTracker").on("click", function() {
              ti.scroll(-1, rs);
            }), this.pager = di.text("", 15, 10).addClass("highcharts-legend-navigation"), !oi.styledMode && Zi.style && this.pager.css(Zi.style), this.pager.add(yi), this.down = di.symbol("triangle-down", 0, 0, Bi, Bi).add(yi), Ri("downTracker").on("click", function() {
              ti.scroll(1, rs);
            })), ti.scroll(0), si = Oi) : yi && (Hi(), this.nav = yi.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), si;
          }
          scroll(si, ti) {
            const oi = this.chart, di = this.pages, mi = di.length, Oi = this.clipHeight, li = this.options.navigation, Li = this.pager, Ui = this.padding;
            let Zi = this.currentPage + si;
            Zi > mi && (Zi = mi), 0 < Zi && (typeof ti < "u" && $i(ti, oi), this.nav.attr({ translateX: Ui, translateY: Oi + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(rs) {
              rs.attr({ class: Zi === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), Li.attr({ text: Zi + "/" + mi }), [this.down, this.downTracker].forEach(function(rs) {
              rs.attr({ x: 18 + this.pager.getBBox().width, class: Zi === mi ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }, this), oi.styledMode || (this.up.attr({ fill: Zi === 1 ? li.inactiveColor : li.activeColor }), this.upTracker.css({ cursor: Zi === 1 ? "default" : "pointer" }), this.down.attr({ fill: Zi === mi ? li.inactiveColor : li.activeColor }), this.downTracker.css({ cursor: Zi === mi ? "default" : "pointer" })), this.scrollOffset = -di[Zi - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = Zi, this.positionCheckboxes(), si = is(Di(ti, oi.renderer.globalAnimation, !0)), vi(() => {
              Si(this, "afterScroll", { currentPage: Zi });
            }, si.duration));
          }
          setItemEvents(si, ti, oi) {
            const di = this, mi = si.legendItem || {}, Oi = di.chart.renderer.boxWrapper, li = si instanceof Ki, Li = "highcharts-legend-" + (li ? "point" : "series") + "-active", Ui = di.chart.styledMode;
            oi = oi ? [ti, mi.symbol] : [mi.group];
            const Zi = (rs) => {
              di.allItems.forEach((Bi) => {
                si !== Bi && [Bi].concat(Bi.linkedSeries || []).forEach((ni) => {
                  ni.setState(rs, !li);
                });
              });
            };
            for (const rs of oi)
              rs && rs.on("mouseover", function() {
                si.visible && Zi("inactive"), si.setState("hover"), si.visible && Oi.addClass(Li), Ui || ti.css(di.options.itemHoverStyle);
              }).on("mouseout", function() {
                di.chart.styledMode || ti.css(Mi(si.visible ? di.itemStyle : di.itemHiddenStyle)), Zi(""), Oi.removeClass(Li), si.setState();
              }).on("click", function(Bi) {
                const ni = function() {
                  si.setVisible && si.setVisible(), Zi(si.visible ? "inactive" : "");
                };
                Oi.removeClass(Li), Bi = { browserEvent: Bi }, si.firePointEvent ? si.firePointEvent("legendItemClick", Bi, ni) : Si(si, "legendItemClick", Bi, ni);
              });
          }
          createCheckboxForItem(si) {
            si.checkbox = ji("input", {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: si.selected,
              defaultChecked: si.selected
            }, this.options.itemCheckboxStyle, this.chart.container), Ai(si.checkbox, "click", function(ti) {
              Si(si.series || si, "checkboxClick", { checked: ti.target.checked, item: si }, function() {
                si.select();
              });
            });
          }
        }
        return function(fi) {
          const si = [];
          fi.compose = function(ti) {
            es.pushUnique(si, ti) && Ai(ti, "beforeMargins", function() {
              this.legend = new fi(this, this.options.legend);
            });
          };
        }(ui || (ui = {})), ui;
      }
    ), ri(ii, "Core/Legend/LegendSymbol.js", [ii["Core/Utilities.js"]], function(hi) {
      const { extend: wi, merge: zi, pick: Ki } = hi;
      var Yi;
      return function(es) {
        es.lineMarker = function(is, $i) {
          $i = this.legendItem = this.legendItem || {};
          var Vi = this.options;
          const _i = is.symbolWidth, bi = is.symbolHeight, Ai = bi / 2, ji = this.chart.renderer, Ni = $i.group;
          is = is.baseline - Math.round(0.3 * is.fontMetrics.b);
          let gi = {}, ki = Vi.marker, Ci = 0;
          this.chart.styledMode || (gi = { "stroke-width": Math.min(Vi.lineWidth || 0, 24) }, Vi.dashStyle ? gi.dashstyle = Vi.dashStyle : Vi.linecap !== "square" && (gi["stroke-linecap"] = "round")), $i.line = ji.path().addClass("highcharts-graph").attr(gi).add(Ni), gi["stroke-linecap"] && (Ci = Math.min(
            $i.line.strokeWidth(),
            _i
          ) / 2), _i && $i.line.attr({ d: [["M", Ci, is], ["L", _i - Ci, is]] }), ki && ki.enabled !== !1 && _i && (Vi = Math.min(Ki(ki.radius, Ai), Ai), this.symbol.indexOf("url") === 0 && (ki = zi(ki, { width: bi, height: bi }), Vi = 0), $i.symbol = $i = ji.symbol(this.symbol, _i / 2 - Vi, is - Vi, 2 * Vi, 2 * Vi, wi({ context: "legend" }, ki)).addClass("highcharts-point").add(Ni), $i.isMarker = !0);
        }, es.rectangle = function(is, $i) {
          $i = $i.legendItem || {};
          const Vi = is.symbolHeight, _i = is.options.squareSymbol;
          $i.symbol = this.chart.renderer.rect(_i ? (is.symbolWidth - Vi) / 2 : 0, is.baseline - Vi + 1, _i ? Vi : is.symbolWidth, Vi, Ki(
            is.options.symbolRadius,
            Vi / 2
          )).addClass("highcharts-point").attr({ zIndex: 3 }).add($i.group);
        };
      }(Yi || (Yi = {})), Yi;
    }), ri(ii, "Core/Series/SeriesDefaults.js", [], function() {
      return {
        lineWidth: 1,
        allowPointSelect: !1,
        crisp: !0,
        showCheckbox: !1,
        animation: { duration: 1e3 },
        enableMouseTracking: !0,
        events: {},
        marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } },
        point: { events: {} },
        dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
          const { numberFormatter: hi } = this.series.chart;
          return typeof this.y != "number" ? "" : hi(this.y, -1);
        }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 },
        cropThreshold: 300,
        opacity: 1,
        pointRange: 0,
        softThreshold: !0,
        states: {
          normal: { animation: !0 },
          hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } },
          select: { animation: { duration: 0 } },
          inactive: { animation: { duration: 150 }, opacity: 0.2 }
        },
        stickyTracking: !0,
        turboThreshold: 1e3,
        findNearestPointBy: "x"
      };
    }), ri(ii, "Core/Series/SeriesRegistry.js", [ii["Core/Globals.js"], ii["Core/Defaults.js"], ii["Core/Series/Point.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki) {
      const { defaultOptions: Yi } = wi, { extendClass: es, merge: is } = Ki;
      var $i;
      return function(Vi) {
        function _i(bi, Ai) {
          const ji = Yi.plotOptions || {}, Ni = Ai.defaultOptions, gi = Ai.prototype;
          gi.type = bi, gi.pointClass || (gi.pointClass = zi), Ni && (ji[bi] = Ni), Vi.seriesTypes[bi] = Ai;
        }
        Vi.seriesTypes = hi.seriesTypes, Vi.registerSeriesType = _i, Vi.seriesType = function(bi, Ai, ji, Ni, gi) {
          const ki = Yi.plotOptions || {};
          return Ai = Ai || "", ki[bi] = is(ki[Ai], ji), _i(bi, es(Vi.seriesTypes[Ai] || function() {
          }, Ni)), Vi.seriesTypes[bi].prototype.type = bi, gi && (Vi.seriesTypes[bi].prototype.pointClass = es(zi, gi)), Vi.seriesTypes[bi];
        };
      }($i || ($i = {})), $i;
    }), ri(ii, "Core/Series/Series.js", [
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Defaults.js"],
      ii["Core/Foundation.js"],
      ii["Core/Globals.js"],
      ii["Core/Legend/LegendSymbol.js"],
      ii["Core/Series/Point.js"],
      ii["Core/Series/SeriesDefaults.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Core/Renderer/SVG/SVGElement.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi, es, is, $i, Vi, _i) {
      const { animObject: bi, setAnimation: Ai } = hi, { defaultOptions: ji } = wi, { registerEventOptions: Ni } = zi, { hasTouch: gi, svg: ki, win: Ci } = Ki, { seriesTypes: Si } = $i, {
        arrayMax: Ti,
        arrayMin: Mi,
        clamp: Di,
        correctFloat: ci,
        defined: pi,
        diffObjects: vi,
        erase: ui,
        error: fi,
        extend: si,
        find: ti,
        fireEvent: oi,
        getClosestDistance: di,
        getNestedProperty: mi,
        insertItem: Oi,
        isArray: li,
        isNumber: Li,
        isString: Ui,
        merge: Zi,
        objectEach: rs,
        pick: Bi,
        removeEvent: ni,
        splat: Pi,
        syncTimeout: Hi
      } = _i;
      class Ri {
        constructor() {
          this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
        }
        init(ai, xi) {
          oi(this, "init", { options: xi });
          const yi = this, Gi = ai.series;
          this.eventsToUnbind = [], yi.chart = ai, yi.options = yi.setOptions(xi), xi = yi.options, yi.linkedSeries = [], yi.bindAxes(), si(yi, { name: xi.name, state: "", visible: xi.visible !== !1, selected: xi.selected === !0 }), Ni(this, xi);
          const Xi = xi.events;
          (Xi && Xi.click || xi.point && xi.point.events && xi.point.events.click || xi.allowPointSelect) && (ai.runTrackerClick = !0), yi.getColor(), yi.getSymbol(), yi.parallelArrays.forEach(function(ts) {
            yi[ts + "Data"] || (yi[ts + "Data"] = []);
          }), yi.isCartesian && (ai.hasCartesianSeries = !0);
          let Wi;
          Gi.length && (Wi = Gi[Gi.length - 1]), yi._i = Bi(Wi && Wi._i, -1) + 1, yi.opacity = yi.options.opacity, ai.orderItems("series", Oi(this, Gi)), xi.dataSorting && xi.dataSorting.enabled ? yi.setDataSortingOptions() : yi.points || yi.data || yi.setData(xi.data, !1), oi(
            this,
            "afterInit"
          );
        }
        is(ai) {
          return Si[ai] && this instanceof Si[ai];
        }
        bindAxes() {
          const ai = this, xi = ai.options, yi = ai.chart;
          let Gi;
          oi(this, "bindAxes", null, function() {
            (ai.axisTypes || []).forEach(function(Xi) {
              yi[Xi].forEach(function(Wi) {
                Gi = Wi.options, (Bi(xi[Xi], 0) === Wi.index || typeof xi[Xi] < "u" && xi[Xi] === Gi.id) && (Oi(ai, Wi.series), ai[Xi] = Wi, Wi.isDirty = !0);
              }), ai[Xi] || ai.optionalAxis === Xi || fi(18, !0, yi);
            });
          }), oi(this, "afterBindAxes");
        }
        updateParallelArrays(ai, xi, yi) {
          const Gi = ai.series, Xi = Li(xi) ? function(Wi) {
            const ts = Wi === "y" && Gi.toYData ? Gi.toYData(ai) : ai[Wi];
            Gi[Wi + "Data"][xi] = ts;
          } : function(Wi) {
            Array.prototype[xi].apply(Gi[Wi + "Data"], yi);
          };
          Gi.parallelArrays.forEach(Xi);
        }
        hasData() {
          return this.visible && typeof this.dataMax < "u" && typeof this.dataMin < "u" || this.visible && this.yData && 0 < this.yData.length;
        }
        autoIncrement(ai) {
          var xi = this.options;
          const yi = xi.pointIntervalUnit, Gi = xi.relativeXValue, Xi = this.chart.time;
          let Wi = this.xIncrement, ts;
          return Wi = Bi(Wi, xi.pointStart, 0), this.pointInterval = ts = Bi(this.pointInterval, xi.pointInterval, 1), Gi && Li(ai) && (ts *= ai), yi && (xi = new Xi.Date(Wi), yi === "day" ? Xi.set("Date", xi, Xi.get(
            "Date",
            xi
          ) + ts) : yi === "month" ? Xi.set("Month", xi, Xi.get("Month", xi) + ts) : yi === "year" && Xi.set("FullYear", xi, Xi.get("FullYear", xi) + ts), ts = xi.getTime() - Wi), Gi && Li(ai) ? Wi + ts : (this.xIncrement = Wi + ts, Wi);
        }
        setDataSortingOptions() {
          const ai = this.options;
          si(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), pi(ai.pointRange) || (ai.pointRange = 1);
        }
        setOptions(ai) {
          var xi, yi;
          const Gi = this.chart;
          var Xi = Gi.options.plotOptions, Wi = Gi.userOptions || {};
          const ts = Zi(ai);
          ai = Gi.styledMode;
          const ss = { plotOptions: Xi, userOptions: ts };
          oi(
            this,
            "setOptions",
            ss
          );
          const os = ss.plotOptions[this.type];
          Wi = Wi.plotOptions || {};
          const ns = Wi.series || {}, ls = ji.plotOptions[this.type] || {}, Ii = Wi[this.type] || {};
          return this.userOptions = ss.userOptions, Xi = Zi(os, Xi.series, Ii, ts), this.tooltipOptions = Zi(ji.tooltip, (xi = ji.plotOptions.series) === null || xi === void 0 ? void 0 : xi.tooltip, ls == null ? void 0 : ls.tooltip, Gi.userOptions.tooltip, (yi = Wi.series) === null || yi === void 0 ? void 0 : yi.tooltip, Ii.tooltip, ts.tooltip), this.stickyTracking = Bi(ts.stickyTracking, Ii.stickyTracking, ns.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : Xi.stickyTracking), os.marker === null && delete Xi.marker, this.zoneAxis = Xi.zoneAxis, yi = this.zones = (Xi.zones || []).slice(), !Xi.negativeColor && !Xi.negativeFillColor || Xi.zones || (xi = { value: Xi[this.zoneAxis + "Threshold"] || Xi.threshold || 0, className: "highcharts-negative" }, ai || (xi.color = Xi.negativeColor, xi.fillColor = Xi.negativeFillColor), yi.push(xi)), yi.length && pi(yi[yi.length - 1].value) && yi.push(ai ? {} : { color: this.color, fillColor: this.fillColor }), oi(this, "afterSetOptions", { options: Xi }), Xi;
        }
        getName() {
          return Bi(
            this.options.name,
            "Series " + (this.index + 1)
          );
        }
        getCyclic(ai, xi, yi) {
          const Gi = this.chart, Xi = `${ai}Index`, Wi = `${ai}Counter`, ts = (yi == null ? void 0 : yi.length) || Gi.options.chart.colorCount;
          if (!xi) {
            var ss = Bi(ai === "color" ? this.options.colorIndex : void 0, this[Xi]);
            pi(ss) || (Gi.series.length || (Gi[Wi] = 0), ss = Gi[Wi] % ts, Gi[Wi] += 1), yi && (xi = yi[ss]);
          }
          typeof ss < "u" && (this[Xi] = ss), this[ai] = xi;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic(
            "color",
            this.options.color || ji.plotOptions[this.type].color,
            this.chart.options.colors
          );
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
        }
        findPointIndex(ai, xi) {
          const yi = ai.id, Gi = ai.x, Xi = this.points;
          var Wi = this.options.dataSorting, ts;
          let ss, os;
          if (yi)
            Wi = this.chart.get(yi), Wi instanceof es && (ts = Wi);
          else if ((this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) && (ts = (ns) => !ns.touched && ns.index === ai.index, Wi && Wi.matchByName ? ts = (ns) => !ns.touched && ns.name === ai.name : this.options.relativeXValue && (ts = (ns) => !ns.touched && ns.options.x === ai.x), ts = ti(Xi, ts), !ts))
            return;
          return ts && (os = ts && ts.index, typeof os < "u" && (ss = !0)), typeof os > "u" && Li(Gi) && (os = this.xData.indexOf(Gi, xi)), os !== -1 && typeof os < "u" && this.cropped && (os = os >= this.cropStart ? os - this.cropStart : os), !ss && Li(os) && Xi[os] && Xi[os].touched && (os = void 0), os;
        }
        updateData(ai, xi) {
          const yi = this.options, Gi = yi.dataSorting, Xi = this.points, Wi = [], ts = this.requireSorting, ss = ai.length === Xi.length;
          let os, ns, ls, Ii = !0;
          if (this.xIncrement = null, ai.forEach(function(Ei, Ji) {
            var Fi = pi(Ei) && this.pointClass.prototype.optionsToObject.call({ series: this }, Ei) || {};
            const Qi = Fi.x;
            Fi.id || Li(Qi) ? (Fi = this.findPointIndex(Fi, ls), Fi === -1 || typeof Fi > "u" ? Wi.push(Ei) : Xi[Fi] && Ei !== yi.data[Fi] ? (Xi[Fi].update(Ei, !1, null, !1), Xi[Fi].touched = !0, ts && (ls = Fi + 1)) : Xi[Fi] && (Xi[Fi].touched = !0), (!ss || Ji !== Fi || Gi && Gi.enabled || this.hasDerivedData) && (os = !0)) : Wi.push(Ei);
          }, this), os)
            for (ai = Xi.length; ai--; )
              (ns = Xi[ai]) && !ns.touched && ns.remove && ns.remove(!1, xi);
          else
            !ss || Gi && Gi.enabled ? Ii = !1 : (ai.forEach(function(Ei, Ji) {
              Ei === Xi[Ji].y || Xi[Ji].destroyed || Xi[Ji].update(Ei, !1, null, !1);
            }), Wi.length = 0);
          return Xi.forEach(function(Ei) {
            Ei && (Ei.touched = !1);
          }), Ii ? (Wi.forEach(function(Ei) {
            this.addPoint(Ei, !1, null, null, !1);
          }, this), this.xIncrement === null && this.xData && this.xData.length && (this.xIncrement = Ti(this.xData), this.autoIncrement()), !0) : !1;
        }
        setData(ai, xi = !0, yi, Gi) {
          var Xi;
          const Wi = this, ts = Wi.points, ss = ts && ts.length || 0, os = Wi.options, ns = Wi.chart, ls = os.dataSorting, Ii = Wi.xAxis, Ei = os.turboThreshold, Ji = this.xData, Fi = this.yData;
          var Qi = Wi.pointArrayMap;
          Qi = Qi && Qi.length;
          const hs = os.keys;
          let as, ps = 0, us = 1, cs = null;
          if (!ns.options.chart.allowMutatingData) {
            os.data && delete Wi.options.data, Wi.userOptions.data && delete Wi.userOptions.data;
            var ds = Zi(!0, ai);
          }
          if (ai = ds || ai || [], ds = ai.length, ls && ls.enabled && (ai = this.sortData(ai)), ns.options.chart.allowMutatingData && Gi !== !1 && ds && ss && !Wi.cropped && !Wi.hasGroupedData && Wi.visible && !Wi.boosted && (as = this.updateData(ai, yi)), !as) {
            if (Wi.xIncrement = null, Wi.colorCounter = 0, this.parallelArrays.forEach(function(ms) {
              Wi[ms + "Data"].length = 0;
            }), Ei && ds > Ei)
              if (cs = Wi.getFirstValidPoint(ai), Li(cs))
                for (yi = 0; yi < ds; yi++)
                  Ji[yi] = this.autoIncrement(), Fi[yi] = ai[yi];
              else if (li(cs))
                if (Qi)
                  if (cs.length === Qi)
                    for (yi = 0; yi < ds; yi++)
                      Ji[yi] = this.autoIncrement(), Fi[yi] = ai[yi];
                  else
                    for (yi = 0; yi < ds; yi++)
                      Gi = ai[yi], Ji[yi] = Gi[0], Fi[yi] = Gi.slice(1, Qi + 1);
                else if (hs && (ps = hs.indexOf("x"), us = hs.indexOf("y"), ps = 0 <= ps ? ps : 0, us = 0 <= us ? us : 1), cs.length === 1 && (us = 0), ps === us)
                  for (yi = 0; yi < ds; yi++)
                    Ji[yi] = this.autoIncrement(), Fi[yi] = ai[yi][us];
                else
                  for (yi = 0; yi < ds; yi++)
                    Gi = ai[yi], Ji[yi] = Gi[ps], Fi[yi] = Gi[us];
              else
                fi(12, !1, ns);
            else
              for (yi = 0; yi < ds; yi++)
                Gi = { series: Wi }, Wi.pointClass.prototype.applyOptions.apply(Gi, [ai[yi]]), Wi.updateParallelArrays(Gi, yi);
            for (Fi && Ui(Fi[0]) && fi(
              14,
              !0,
              ns
            ), Wi.data = [], Wi.options.data = Wi.userOptions.data = ai, yi = ss; yi--; )
              (Xi = ts[yi]) === null || Xi === void 0 || Xi.destroy();
            Ii && (Ii.minRange = Ii.userMinRange), Wi.isDirty = ns.isDirtyBox = !0, Wi.isDirtyData = !!ts, yi = !1;
          }
          os.legendType === "point" && (this.processData(), this.generatePoints()), xi && ns.redraw(yi);
        }
        sortData(ai) {
          const xi = this, yi = xi.options.dataSorting.sortKey || "y", Gi = function(Xi, Wi) {
            return pi(Wi) && Xi.pointClass.prototype.optionsToObject.call({ series: Xi }, Wi) || {};
          };
          return ai.forEach(function(Xi, Wi) {
            ai[Wi] = Gi(xi, Xi), ai[Wi].index = Wi;
          }, this), ai.concat().sort((Xi, Wi) => (Xi = mi(yi, Xi), Wi = mi(yi, Wi), Wi < Xi ? -1 : Wi > Xi ? 1 : 0)).forEach(function(Xi, Wi) {
            Xi.x = Wi;
          }, this), xi.linkedSeries && xi.linkedSeries.forEach(function(Xi) {
            const Wi = Xi.options, ts = Wi.data;
            Wi.dataSorting && Wi.dataSorting.enabled || !ts || (ts.forEach(function(ss, os) {
              ts[os] = Gi(Xi, ss), ai[os] && (ts[os].x = ai[os].x, ts[os].index = os);
            }), Xi.setData(ts, !1));
          }), ai;
        }
        getProcessedData(ai) {
          const xi = this;
          var yi = xi.xAxis, Gi = xi.options;
          const Xi = Gi.cropThreshold, Wi = ai || xi.getExtremesFromAll || Gi.getExtremesFromAll, ts = yi == null ? void 0 : yi.logarithmic, ss = xi.isCartesian;
          let os = 0, ns;
          ai = xi.xData, Gi = xi.yData;
          let ls = !1;
          const Ii = ai.length;
          if (yi) {
            var Ei = yi.getExtremes();
            ns = Ei.min, Ei = Ei.max, ls = !(!yi.categories || yi.names.length);
          }
          if (ss && xi.sorted && !Wi && (!Xi || Ii > Xi || xi.forceCrop)) {
            if (ai[Ii - 1] < ns || ai[0] > Ei)
              ai = [], Gi = [];
            else if (xi.yData && (ai[0] < ns || ai[Ii - 1] > Ei)) {
              var Ji = this.cropData(xi.xData, xi.yData, ns, Ei);
              ai = Ji.xData, Gi = Ji.yData, os = Ji.start, Ji = !0;
            }
          }
          return yi = di([ts ? ai.map(ts.log2lin) : ai], () => xi.requireSorting && !ls && fi(15, !1, xi.chart)), { xData: ai, yData: Gi, cropped: Ji, cropStart: os, closestPointRange: yi };
        }
        processData(ai) {
          const xi = this.xAxis;
          if (this.isCartesian && !this.isDirty && !xi.isDirty && !this.yAxis.isDirty && !ai)
            return !1;
          ai = this.getProcessedData(), this.cropped = ai.cropped, this.cropStart = ai.cropStart, this.processedXData = ai.xData, this.processedYData = ai.yData, this.closestPointRange = this.basePointRange = ai.closestPointRange, oi(this, "afterProcessData");
        }
        cropData(ai, xi, yi, Gi, Xi) {
          const Wi = ai.length;
          let ts, ss = 0, os = Wi;
          for (Xi = Bi(Xi, this.cropShoulder), ts = 0; ts < Wi; ts++)
            if (ai[ts] >= yi) {
              ss = Math.max(0, ts - Xi);
              break;
            }
          for (yi = ts; yi < Wi; yi++)
            if (ai[yi] > Gi) {
              os = yi + Xi;
              break;
            }
          return {
            xData: ai.slice(ss, os),
            yData: xi.slice(ss, os),
            start: ss,
            end: os
          };
        }
        generatePoints() {
          var ai = this.options;
          const xi = this.processedData || ai.data, yi = this.processedXData, Gi = this.processedYData, Xi = this.pointClass, Wi = yi.length, ts = this.cropStart || 0, ss = this.hasGroupedData, os = ai.keys, ns = [];
          ai = ai.dataGrouping && ai.dataGrouping.groupAll ? ts : 0;
          let ls, Ii, Ei, Ji = this.data;
          if (!Ji && !ss) {
            var Fi = [];
            Fi.length = xi.length, Ji = this.data = Fi;
          }
          for (os && ss && (this.options.keys = !1), Ei = 0; Ei < Wi; Ei++)
            Fi = ts + Ei, ss ? (Ii = new Xi().init(this, [yi[Ei]].concat(Pi(Gi[Ei]))), Ii.dataGroup = this.groupMap[ai + Ei], Ii.dataGroup.options && (Ii.options = Ii.dataGroup.options, si(Ii, Ii.dataGroup.options), delete Ii.dataLabels)) : (Ii = Ji[Fi]) || typeof xi[Fi] > "u" || (Ji[Fi] = Ii = new Xi().init(this, xi[Fi], yi[Ei])), Ii && (Ii.index = ss ? ai + Ei : Fi, ns[Ei] = Ii);
          if (this.options.keys = os, Ji && (Wi !== (ls = Ji.length) || ss))
            for (Ei = 0; Ei < ls; Ei++)
              Ei !== ts || ss || (Ei += Wi), Ji[Ei] && (Ji[Ei].destroyElements(), Ji[Ei].plotX = void 0);
          this.data = Ji, this.points = ns, oi(this, "afterGeneratePoints");
        }
        getXExtremes(ai) {
          return { min: Mi(ai), max: Ti(ai) };
        }
        getExtremes(ai, xi) {
          const yi = this.xAxis;
          var Gi = this.yAxis;
          const Xi = this.processedXData || this.xData, Wi = [], ts = this.requireSorting ? this.cropShoulder : 0;
          Gi = Gi ? Gi.positiveValuesOnly : !1;
          let ss, os = 0, ns = 0, ls = 0;
          ai = ai || this.stackedYData || this.processedYData || [];
          const Ii = ai.length;
          if (yi) {
            var Ei = yi.getExtremes();
            os = Ei.min, ns = Ei.max;
          }
          for (ss = 0; ss < Ii; ss++) {
            var Ji = Xi[ss];
            Ei = ai[ss];
            var Fi = (Li(Ei) || li(Ei)) && (Ei.length || 0 < Ei || !Gi);
            if (Ji = xi || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !yi || (Xi[ss + ts] || Ji) >= os && (Xi[ss - ts] || Ji) <= ns, Fi && Ji)
              if (Fi = Ei.length)
                for (; Fi--; )
                  Li(Ei[Fi]) && (Wi[ls++] = Ei[Fi]);
              else
                Wi[ls++] = Ei;
          }
          return ai = { activeYData: Wi, dataMin: Mi(Wi), dataMax: Ti(Wi) }, oi(this, "afterGetExtremes", { dataExtremes: ai }), ai;
        }
        applyExtremes() {
          const ai = this.getExtremes();
          return this.dataMin = ai.dataMin, this.dataMax = ai.dataMax, ai;
        }
        getFirstValidPoint(ai) {
          const xi = ai.length;
          let yi = 0, Gi = null;
          for (; Gi === null && yi < xi; )
            Gi = ai[yi], yi++;
          return Gi;
        }
        translate() {
          var ai;
          this.processedXData || this.processData(), this.generatePoints();
          var xi = this.options;
          const yi = xi.stacking, Gi = this.xAxis, Xi = Gi.categories, Wi = this.enabledDataSorting, ts = this.yAxis, ss = this.points, os = ss.length, ns = this.pointPlacementToXValue(), ls = !!ns, Ii = xi.threshold;
          xi = xi.startFromThreshold ? Ii : 0;
          let Ei, Ji, Fi, Qi, hs = Number.MAX_VALUE;
          for (Ei = 0; Ei < os; Ei++) {
            const as = ss[Ei], ps = as.x;
            let us, cs, ds = as.y, ms = as.low;
            const fs = yi && ((ai = ts.stacking) === null || ai === void 0 ? void 0 : ai.stacks[(this.negStacks && ds < (xi ? 0 : Ii) ? "-" : "") + this.stackKey]);
            Ji = Gi.translate(ps, !1, !1, !1, !0, ns), as.plotX = Li(Ji) ? ci(Di(Ji, -1e5, 1e5)) : void 0, yi && this.visible && fs && fs[ps] && (Qi = this.getStackIndicator(Qi, ps, this.index), !as.isNull && Qi.key && (us = fs[ps], cs = us.points[Qi.key]), us && li(cs) && (ms = cs[0], ds = cs[1], ms === xi && Qi.key === fs[ps].base && (ms = Bi(Li(Ii) ? Ii : ts.min)), ts.positiveValuesOnly && pi(ms) && 0 >= ms && (ms = void 0), as.total = as.stackTotal = Bi(us.total), as.percentage = pi(as.y) && us.total ? as.y / us.total * 100 : void 0, as.stackY = ds, this.irregularWidths || us.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), as.yBottom = pi(ms) ? Di(ts.translate(ms, !1, !0, !1, !0), -1e5, 1e5) : void 0, this.dataModify && (ds = this.dataModify.modifyValue(ds, Ei));
            let gs;
            Li(ds) && as.plotX !== void 0 && (gs = ts.translate(ds, !1, !0, !1, !0), gs = Li(gs) ? Di(gs, -1e5, 1e5) : void 0), as.plotY = gs, as.isInside = this.isPointInside(as), as.clientX = ls ? ci(Gi.translate(ps, !1, !1, !1, !0, ns)) : Ji, as.negative = (as.y || 0) < (Ii || 0), as.category = Bi(Xi && Xi[as.x], as.x), as.isNull || as.visible === !1 || (typeof Fi < "u" && (hs = Math.min(hs, Math.abs(Ji - Fi))), Fi = Ji), as.zone = this.zones.length ? as.getZone() : void 0, !as.graphic && this.group && Wi && (as.isNew = !0);
          }
          this.closestPointRangePx = hs, oi(this, "afterTranslate");
        }
        getValidPoints(ai, xi, yi) {
          const Gi = this.chart;
          return (ai || this.points || []).filter(function(Xi) {
            const { plotX: Wi, plotY: ts } = Xi;
            return !yi && (Xi.isNull || !Li(ts)) || xi && !Gi.isInsidePlot(Wi, ts, { inverted: Gi.inverted }) ? !1 : Xi.visible !== !1;
          });
        }
        getClipBox() {
          const { chart: ai, xAxis: xi, yAxis: yi } = this, Gi = Zi(ai.clipBox);
          return xi && xi.len !== ai.plotSizeX && (Gi.width = xi.len), yi && yi.len !== ai.plotSizeY && (Gi.height = yi.len), Gi;
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
        }
        setClip() {
          const { chart: ai, group: xi, markerGroup: yi } = this, Gi = ai.sharedClips, Xi = ai.renderer, Wi = this.getClipBox(), ts = this.getSharedClipKey();
          let ss = Gi[ts];
          ss ? ss.animate(Wi) : Gi[ts] = ss = Xi.clipRect(Wi), xi && xi.clip(this.options.clip === !1 ? void 0 : ss), yi && yi.clip();
        }
        animate(ai) {
          const { chart: xi, group: yi, markerGroup: Gi } = this, Xi = xi.inverted;
          var Wi = bi(this.options.animation), ts = [this.getSharedClipKey(), Wi.duration, Wi.easing, Wi.defer].join();
          let ss = xi.sharedClips[ts], os = xi.sharedClips[ts + "m"];
          if (ai && yi)
            Wi = this.getClipBox(), ss ? ss.attr("height", Wi.height) : (Wi.width = 0, Xi && (Wi.x = xi.plotHeight), ss = xi.renderer.clipRect(Wi), xi.sharedClips[ts] = ss, os = xi.renderer.clipRect({ x: -99, y: -99, width: Xi ? xi.plotWidth + 199 : 99, height: Xi ? 99 : xi.plotHeight + 199 }), xi.sharedClips[ts + "m"] = os), yi.clip(ss), Gi && Gi.clip(os);
          else if (ss && !ss.hasClass("highcharts-animating")) {
            ts = this.getClipBox();
            const ns = Wi.step;
            Gi && Gi.element.childNodes.length && (Wi.step = function(ls, Ii) {
              ns && ns.apply(Ii, arguments), Ii.prop === "width" && os && os.element && os.attr(Xi ? "height" : "width", ls + 99);
            }), ss.addClass("highcharts-animating").animate(ts, Wi);
          }
        }
        afterAnimate() {
          this.setClip(), rs(this.chart.sharedClips, (ai, xi, yi) => {
            ai && !this.chart.container.querySelector(`[clip-path="url(#${ai.id})"]`) && (ai.destroy(), delete yi[xi]);
          }), this.finishedAnimating = !0, oi(this, "afterAnimate");
        }
        drawPoints(ai = this.points) {
          const xi = this.chart, yi = xi.styledMode, { colorAxis: Gi, options: Xi } = this, Wi = Xi.marker, ts = this[this.specialGroup || "markerGroup"], ss = this.xAxis, os = Bi(Wi.enabled, !ss || ss.isRadial ? !0 : null, this.closestPointRangePx >= Wi.enabledThreshold * Wi.radius);
          let ns, ls, Ii, Ei, Ji, Fi;
          if (Wi.enabled !== !1 || this._hasPointMarkers)
            for (ns = 0; ns < ai.length; ns++) {
              ls = ai[ns], Ei = (Ii = ls.graphic) ? "animate" : "attr";
              var Qi = ls.marker || {};
              if (Ji = !!ls.marker, (os && typeof Qi.enabled > "u" || Qi.enabled) && !ls.isNull && ls.visible !== !1) {
                const hs = Bi(Qi.symbol, this.symbol, "rect");
                Fi = this.markerAttribs(ls, ls.selected && "select"), this.enabledDataSorting && (ls.startXPos = ss.reversed ? -(Fi.width || 0) : ss.width);
                const as = ls.isInside !== !1;
                !Ii && as && (0 < (Fi.width || 0) || ls.hasImage) && (ls.graphic = Ii = xi.renderer.symbol(hs, Fi.x, Fi.y, Fi.width, Fi.height, Ji ? Qi : Wi).add(ts), this.enabledDataSorting && xi.hasRendered && (Ii.attr({ x: ls.startXPos }), Ei = "animate")), Ii && Ei === "animate" && Ii[as ? "show" : "hide"](as).animate(Fi), Ii && (Qi = this.pointAttribs(ls, yi || !ls.selected ? void 0 : "select"), yi ? Gi && Ii.css({ fill: Qi.fill }) : Ii[Ei](Qi)), Ii && Ii.addClass(ls.getClassName(), !0);
              } else
                Ii && (ls.graphic = Ii.destroy());
            }
        }
        markerAttribs(ai, xi) {
          const yi = this.options;
          var Gi = yi.marker;
          const Xi = ai.marker || {}, Wi = Xi.symbol || Gi.symbol, ts = {};
          let ss = Bi(Xi.radius, Gi && Gi.radius);
          return xi && (Gi = Gi.states[xi], xi = Xi.states && Xi.states[xi], ss = Bi(xi && xi.radius, Gi && Gi.radius, ss && ss + (Gi && Gi.radiusPlus || 0))), ai.hasImage = Wi && Wi.indexOf("url") === 0, ai.hasImage && (ss = 0), ai = ai.pos(), Li(ss) && ai && (ts.x = ai[0] - ss, ts.y = ai[1] - ss, yi.crisp && (ts.x = Math.floor(ts.x))), ss && (ts.width = ts.height = 2 * ss), ts;
        }
        pointAttribs(ai, xi) {
          var yi = this.options.marker, Gi = ai && ai.options;
          const Xi = Gi && Gi.marker || {};
          var Wi = Gi && Gi.color, ts = ai && ai.color;
          const ss = ai && ai.zone && ai.zone.color;
          let os = this.color;
          return ai = Bi(Xi.lineWidth, yi.lineWidth), Gi = 1, os = Wi || ss || ts || os, Wi = Xi.fillColor || yi.fillColor || os, ts = Xi.lineColor || yi.lineColor || os, xi = xi || "normal", yi = yi.states[xi] || {}, xi = Xi.states && Xi.states[xi] || {}, ai = Bi(xi.lineWidth, yi.lineWidth, ai + Bi(xi.lineWidthPlus, yi.lineWidthPlus, 0)), Wi = xi.fillColor || yi.fillColor || Wi, ts = xi.lineColor || yi.lineColor || ts, Gi = Bi(xi.opacity, yi.opacity, Gi), { stroke: ts, "stroke-width": ai, fill: Wi, opacity: Gi };
        }
        destroy(ai) {
          const xi = this, yi = xi.chart, Gi = /AppleWebKit\/533/.test(Ci.navigator.userAgent), Xi = xi.data || [];
          let Wi, ts, ss, os;
          for (oi(xi, "destroy", { keepEventsForUpdate: ai }), this.removeEvents(ai), (xi.axisTypes || []).forEach(function(ns) {
            (os = xi[ns]) && os.series && (ui(os.series, xi), os.isDirty = os.forceRedraw = !0);
          }), xi.legendItem && xi.chart.legend.destroyItem(xi), ts = Xi.length; ts--; )
            (ss = Xi[ts]) && ss.destroy && ss.destroy();
          xi.clips && xi.clips.forEach((ns) => ns.destroy()), _i.clearTimeout(xi.animationTimeout), rs(xi, function(ns, ls) {
            ns instanceof Vi && !ns.survive && (Wi = Gi && ls === "group" ? "hide" : "destroy", ns[Wi]());
          }), yi.hoverSeries === xi && (yi.hoverSeries = void 0), ui(yi.series, xi), yi.orderItems("series"), rs(xi, function(ns, ls) {
            ai && ls === "hcEvents" || delete xi[ls];
          });
        }
        applyZones() {
          const ai = this, xi = this.chart, yi = xi.renderer, Gi = this.zones, Xi = this.clips || [], Wi = this.graph, ts = this.area, ss = Math.max(xi.plotWidth, xi.plotHeight), os = this[(this.zoneAxis || "y") + "Axis"], ns = xi.inverted;
          let ls, Ii, Ei, Ji, Fi, Qi, hs, as, ps, us, cs, ds = !1;
          Gi.length && (Wi || ts) && os && typeof os.min < "u" ? (Fi = os.reversed, Qi = os.horiz, Wi && !this.showLine && Wi.hide(), ts && ts.hide(), Ji = os.getExtremes(), Gi.forEach(function(ms, fs) {
            ls = Fi ? Qi ? xi.plotWidth : 0 : Qi ? 0 : os.toPixels(Ji.min) || 0, ls = Di(Bi(Ii, ls), 0, ss), Ii = Di(Math.round(os.toPixels(Bi(ms.value, Ji.max), !0) || 0), 0, ss), ds && (ls = Ii = os.toPixels(Ji.max)), hs = Math.abs(ls - Ii), as = Math.min(ls, Ii), ps = Math.max(ls, Ii), os.isXAxis ? (Ei = { x: ns ? ps : as, y: 0, width: hs, height: ss }, Qi || (Ei.x = xi.plotHeight - Ei.x)) : (Ei = { x: 0, y: ns ? ps : as, width: ss, height: hs }, Qi && (Ei.y = xi.plotWidth - Ei.y)), Xi[fs] ? Xi[fs].animate(Ei) : Xi[fs] = yi.clipRect(Ei), us = ai["zone-area-" + fs], cs = ai["zone-graph-" + fs], Wi && cs && cs.clip(Xi[fs]), ts && us && us.clip(Xi[fs]), ds = ms.value > Ji.max, ai.resetZones && Ii === 0 && (Ii = void 0);
          }), this.clips = Xi) : ai.visible && (Wi && Wi.show(), ts && ts.show());
        }
        plotGroup(ai, xi, yi, Gi, Xi) {
          let Wi = this[ai];
          const ts = !Wi;
          return yi = { visibility: yi, zIndex: Gi || 0.1 }, typeof this.opacity > "u" || this.chart.styledMode || this.state === "inactive" || (yi.opacity = this.opacity), ts && (this[ai] = Wi = this.chart.renderer.g().add(Xi)), Wi.addClass("highcharts-" + xi + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (pi(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (Wi.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), Wi.attr(yi)[ts ? "attr" : "animate"](this.getPlotBox(xi)), Wi;
        }
        getPlotBox(ai) {
          let xi = this.xAxis, yi = this.yAxis;
          const Gi = this.chart;
          return ai = Gi.inverted && !Gi.polar && xi && this.invertible !== !1 && ai === "series", Gi.inverted && (xi = yi, yi = this.xAxis), { translateX: xi ? xi.left : Gi.plotLeft, translateY: yi ? yi.top : Gi.plotTop, rotation: ai ? 90 : 0, rotationOriginX: ai ? (xi.len - yi.len) / 2 : 0, rotationOriginY: ai ? (xi.len + yi.len) / 2 : 0, scaleX: ai ? -1 : 1, scaleY: 1 };
        }
        removeEvents(ai) {
          ai || ni(this), this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(xi) {
            xi();
          }), this.eventsToUnbind.length = 0);
        }
        render() {
          const ai = this;
          var xi = ai.chart;
          const yi = ai.options, Gi = bi(yi.animation), Xi = ai.visible ? "inherit" : "hidden", Wi = yi.zIndex, ts = ai.hasRendered;
          xi = xi.seriesGroup;
          let ss = ai.finishedAnimating ? 0 : Gi.duration;
          oi(this, "render"), ai.plotGroup("group", "series", Xi, Wi, xi), ai.markerGroup = ai.plotGroup("markerGroup", "markers", Xi, Wi, xi), yi.clip !== !1 && ai.setClip(), ai.animate && ss && ai.animate(!0), ai.drawGraph && (ai.drawGraph(), ai.applyZones()), ai.visible && ai.drawPoints(), ai.drawDataLabels && ai.drawDataLabels(), ai.redrawPoints && ai.redrawPoints(), ai.drawTracker && yi.enableMouseTracking && ai.drawTracker(), ai.animate && ss && ai.animate(), ts || (ss && Gi.defer && (ss += Gi.defer), ai.animationTimeout = Hi(function() {
            ai.afterAnimate();
          }, ss || 0)), ai.isDirty = !1, ai.hasRendered = !0, oi(ai, "afterRender");
        }
        redraw() {
          const ai = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), ai && delete this.kdTree;
        }
        searchPoint(ai, xi) {
          const yi = this.xAxis, Gi = this.yAxis, Xi = this.chart.inverted;
          return this.searchKDTree({ clientX: Xi ? yi.len - ai.chartY + yi.pos : ai.chartX - yi.pos, plotY: Xi ? Gi.len - ai.chartX + Gi.pos : ai.chartY - Gi.pos }, xi, ai);
        }
        buildKDTree(ai) {
          function xi(Xi, Wi, ts) {
            var ss = Xi && Xi.length;
            let os;
            if (ss)
              return os = yi.kdAxisArray[Wi % ts], Xi.sort(function(ns, ls) {
                return ns[os] - ls[os];
              }), ss = Math.floor(ss / 2), { point: Xi[ss], left: xi(Xi.slice(0, ss), Wi + 1, ts), right: xi(Xi.slice(ss + 1), Wi + 1, ts) };
          }
          this.buildingKdTree = !0;
          const yi = this, Gi = -1 < yi.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          delete yi.kdTree, Hi(function() {
            yi.kdTree = xi(yi.getValidPoints(null, !yi.directTouch), Gi, Gi), yi.buildingKdTree = !1;
          }, yi.options.kdNow || ai && ai.type === "touchstart" ? 0 : 1);
        }
        searchKDTree(ai, xi, yi) {
          function Gi(os, ns, ls, Ii) {
            const Ei = ns.point;
            var Ji = Xi.kdAxisArray[ls % Ii];
            let Fi = Ei;
            var Qi = pi(os[Wi]) && pi(Ei[Wi]) ? Math.pow(os[Wi] - Ei[Wi], 2) : null, hs = pi(os[ts]) && pi(Ei[ts]) ? Math.pow(os[ts] - Ei[ts], 2) : null;
            return hs = (Qi || 0) + (hs || 0), Ei.dist = pi(hs) ? Math.sqrt(hs) : Number.MAX_VALUE, Ei.distX = pi(Qi) ? Math.sqrt(Qi) : Number.MAX_VALUE, Ji = os[Ji] - Ei[Ji], hs = 0 > Ji ? "left" : "right", Qi = 0 > Ji ? "right" : "left", ns[hs] && (hs = Gi(os, ns[hs], ls + 1, Ii), Fi = hs[ss] < Fi[ss] ? hs : Ei), ns[Qi] && Math.sqrt(Ji * Ji) < Fi[ss] && (os = Gi(os, ns[Qi], ls + 1, Ii), Fi = os[ss] < Fi[ss] ? os : Fi), Fi;
          }
          const Xi = this, Wi = this.kdAxisArray[0], ts = this.kdAxisArray[1], ss = xi ? "distX" : "dist";
          if (xi = -1 < Xi.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(yi), this.kdTree)
            return Gi(
              ai,
              this.kdTree,
              xi,
              xi
            );
        }
        pointPlacementToXValue() {
          const { options: { pointPlacement: ai, pointRange: xi }, xAxis: yi } = this;
          let Gi = ai;
          return Gi === "between" && (Gi = yi.reversed ? -0.5 : 0.5), Li(Gi) ? Gi * (xi || yi.pointRange) : 0;
        }
        isPointInside(ai) {
          const { chart: xi, xAxis: yi, yAxis: Gi } = this;
          return typeof ai.plotY < "u" && typeof ai.plotX < "u" && 0 <= ai.plotY && ai.plotY <= (Gi ? Gi.len : xi.plotHeight) && 0 <= ai.plotX && ai.plotX <= (yi ? yi.len : xi.plotWidth);
        }
        drawTracker() {
          const ai = this, xi = ai.options, yi = xi.trackByArea, Gi = [].concat(yi ? ai.areaPath : ai.graphPath), Xi = ai.chart, Wi = Xi.pointer, ts = Xi.renderer, ss = Xi.options.tooltip.snap, os = ai.tracker, ns = function(Ii) {
            xi.enableMouseTracking && Xi.hoverSeries !== ai && ai.onMouseOver();
          }, ls = "rgba(192,192,192," + (ki ? 1e-4 : 2e-3) + ")";
          os ? os.attr({ d: Gi }) : ai.graph && (ai.tracker = ts.path(Gi).attr({ visibility: ai.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(yi ? "highcharts-tracker-area" : "highcharts-tracker-line").add(ai.group), Xi.styledMode || ai.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: ls, fill: yi ? ls : "none", "stroke-width": ai.graph.strokeWidth() + (yi ? 0 : 2 * ss) }), [
            ai.tracker,
            ai.markerGroup,
            ai.dataLabelsGroup
          ].forEach(function(Ii) {
            Ii && (Ii.addClass("highcharts-tracker").on("mouseover", ns).on("mouseout", function(Ei) {
              Wi.onTrackerMouseOut(Ei);
            }), xi.cursor && !Xi.styledMode && Ii.css({ cursor: xi.cursor }), gi) && Ii.on("touchstart", ns);
          })), oi(this, "afterDrawTracker");
        }
        addPoint(ai, xi, yi, Gi, Xi) {
          const Wi = this.options, ts = this.data, ss = this.chart;
          var os = this.xAxis;
          os = os && os.hasNames && os.names;
          const ns = Wi.data, ls = this.xData;
          let Ii, Ei;
          xi = Bi(xi, !0);
          const Ji = { series: this };
          this.pointClass.prototype.applyOptions.apply(Ji, [ai]);
          const Fi = Ji.x;
          if (Ei = ls.length, this.requireSorting && Fi < ls[Ei - 1])
            for (Ii = !0; Ei && ls[Ei - 1] > Fi; )
              Ei--;
          this.updateParallelArrays(Ji, "splice", [Ei, 0, 0]), this.updateParallelArrays(Ji, Ei), os && Ji.name && (os[Fi] = Ji.name), ns.splice(Ei, 0, ai), (Ii || this.processedData) && (this.data.splice(Ei, 0, null), this.processData()), Wi.legendType === "point" && this.generatePoints(), yi && (ts[0] && ts[0].remove ? ts[0].remove(!1) : (ts.shift(), this.updateParallelArrays(Ji, "shift"), ns.shift())), Xi !== !1 && oi(this, "addPoint", { point: Ji }), this.isDirtyData = this.isDirty = !0, xi && ss.redraw(Gi);
        }
        removePoint(ai, xi, yi) {
          const Gi = this, Xi = Gi.data, Wi = Xi[ai], ts = Gi.points, ss = Gi.chart, os = function() {
            ts && ts.length === Xi.length && ts.splice(ai, 1), Xi.splice(ai, 1), Gi.options.data.splice(ai, 1), Gi.updateParallelArrays(Wi || { series: Gi }, "splice", [ai, 1]), Wi && Wi.destroy(), Gi.isDirty = !0, Gi.isDirtyData = !0, xi && ss.redraw();
          };
          Ai(yi, ss), xi = Bi(xi, !0), Wi ? Wi.firePointEvent("remove", null, os) : os();
        }
        remove(ai, xi, yi, Gi) {
          function Xi() {
            Wi.destroy(Gi), ts.isDirtyLegend = ts.isDirtyBox = !0, ts.linkSeries(Gi), Bi(ai, !0) && ts.redraw(xi);
          }
          const Wi = this, ts = Wi.chart;
          yi !== !1 ? oi(Wi, "remove", null, Xi) : Xi();
        }
        update(ai, xi) {
          ai = vi(ai, this.userOptions), oi(this, "update", { options: ai });
          const yi = this, Gi = yi.chart;
          var Xi = yi.userOptions;
          const Wi = yi.initialType || yi.type;
          var ts = Gi.options.plotOptions;
          const ss = Si[Wi].prototype;
          var os = yi.finishedAnimating && { animation: !1 };
          const ns = {};
          let ls, Ii = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], Ei = ai.type || Xi.type || Gi.options.chart.type;
          const Ji = !(this.hasDerivedData || Ei && Ei !== this.type || typeof ai.pointStart < "u" || typeof ai.pointInterval < "u" || typeof ai.relativeXValue < "u" || ai.joinBy || ai.mapData || yi.hasOptionChanged("dataGrouping") || yi.hasOptionChanged("pointStart") || yi.hasOptionChanged("pointInterval") || yi.hasOptionChanged("pointIntervalUnit") || yi.hasOptionChanged("keys"));
          if (Ei = Ei || Wi, Ji && (Ii.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), ai.visible !== !1 && Ii.push("area", "graph"), yi.parallelArrays.forEach(function(Fi) {
            Ii.push(Fi + "Data");
          }), ai.data && (ai.dataSorting && si(yi.options.dataSorting, ai.dataSorting), this.setData(ai.data, !1))), ai = Zi(Xi, os, { index: typeof Xi.index > "u" ? yi.index : Xi.index, pointStart: Bi(ts && ts.series && ts.series.pointStart, Xi.pointStart, yi.xData[0]) }, !Ji && { data: yi.options.data }, ai), Ji && ai.data && (ai.data = yi.options.data), Ii = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(Ii), Ii.forEach(function(Fi) {
            Ii[Fi] = yi[Fi], delete yi[Fi];
          }), ts = !1, Si[Ei]) {
            if (ts = Ei !== yi.type, yi.remove(!1, !1, !1, !0), ts)
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(
                  yi,
                  Si[Ei].prototype
                );
              else {
                os = Object.hasOwnProperty.call(yi, "hcEvents") && yi.hcEvents;
                for (ls in ss)
                  yi[ls] = void 0;
                si(yi, Si[Ei].prototype), os ? yi.hcEvents = os : delete yi.hcEvents;
              }
          } else
            fi(17, !0, Gi, { missingModuleFor: Ei });
          if (Ii.forEach(function(Fi) {
            yi[Fi] = Ii[Fi];
          }), yi.init(Gi, ai), Ji && this.points) {
            if (ai = yi.options, ai.visible === !1)
              ns.graphic = 1, ns.dataLabel = 1;
            else if (!yi._hasPointLabels) {
              const { marker: Fi, dataLabels: Qi } = ai;
              Xi = Xi.marker || {}, !Fi || Fi.enabled !== !1 && Xi.symbol === Fi.symbol && Xi.height === Fi.height && Xi.width === Fi.width || (ns.graphic = 1), Qi && Qi.enabled === !1 && (ns.dataLabel = 1);
            }
            for (const Fi of this.points)
              Fi && Fi.series && (Fi.resolveColor(), Object.keys(ns).length && Fi.destroyElements(ns), ai.showInLegend === !1 && Fi.legendItem && Gi.legend.destroyItem(Fi));
          }
          yi.initialType = Wi, Gi.linkSeries(), ts && yi.linkedSeries.length && (yi.isDirtyData = !0), oi(this, "afterUpdate"), Bi(xi, !0) && Gi.redraw(Ji ? void 0 : !1);
        }
        setName(ai) {
          this.name = this.options.name = this.userOptions.name = ai, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(ai) {
          const xi = this.options[ai], yi = this.chart.options.plotOptions, Gi = this.userOptions[ai];
          return Gi ? xi !== Gi : xi !== Bi(yi && yi[this.type] && yi[this.type][ai], yi && yi.series && yi.series[ai], xi);
        }
        onMouseOver() {
          const ai = this.chart, xi = ai.hoverSeries;
          ai.pointer.setHoverChartIndex(), xi && xi !== this && xi.onMouseOut(), this.options.events.mouseOver && oi(this, "mouseOver"), this.setState("hover"), ai.hoverSeries = this;
        }
        onMouseOut() {
          const ai = this.options, xi = this.chart, yi = xi.tooltip, Gi = xi.hoverPoint;
          xi.hoverSeries = null, Gi && Gi.onMouseOut(), this && ai.events.mouseOut && oi(this, "mouseOut"), !yi || this.stickyTracking || yi.shared && !this.noSharedTooltip || yi.hide(), xi.series.forEach(function(Xi) {
            Xi.setState(
              "",
              !0
            );
          });
        }
        setState(ai, xi) {
          const yi = this;
          var Gi = yi.options;
          const Xi = yi.graph, Wi = Gi.inactiveOtherPoints, ts = Gi.states, ss = Bi(ts[ai || "normal"] && ts[ai || "normal"].animation, yi.chart.options.chart.animation);
          let os = Gi.lineWidth, ns = 0, ls = Gi.opacity;
          if (ai = ai || "", yi.state !== ai && ([yi.group, yi.markerGroup, yi.dataLabelsGroup].forEach(function(Ii) {
            Ii && (yi.state && Ii.removeClass("highcharts-series-" + yi.state), ai && Ii.addClass("highcharts-series-" + ai));
          }), yi.state = ai, !yi.chart.styledMode)) {
            if (ts[ai] && ts[ai].enabled === !1)
              return;
            if (ai && (os = ts[ai].lineWidth || os + (ts[ai].lineWidthPlus || 0), ls = Bi(ts[ai].opacity, ls)), Xi && !Xi.dashstyle && Li(os))
              for (Gi = { "stroke-width": os }, Xi.animate(Gi, ss); yi["zone-graph-" + ns]; )
                yi["zone-graph-" + ns].animate(Gi, ss), ns += 1;
            Wi || [yi.group, yi.markerGroup, yi.dataLabelsGroup, yi.labelBySeries].forEach(function(Ii) {
              Ii && Ii.animate({ opacity: ls }, ss);
            });
          }
          xi && Wi && yi.points && yi.setAllPointsToState(ai || void 0);
        }
        setAllPointsToState(ai) {
          this.points.forEach(function(xi) {
            xi.setState && xi.setState(ai);
          });
        }
        setVisible(ai, xi) {
          const yi = this, Gi = yi.chart, Xi = Gi.options.chart.ignoreHiddenSeries, Wi = yi.visible, ts = (yi.visible = ai = yi.options.visible = yi.userOptions.visible = typeof ai > "u" ? !Wi : ai) ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(ss) {
            yi[ss] && yi[ss][ts]();
          }), (Gi.hoverSeries === yi || (Gi.hoverPoint && Gi.hoverPoint.series) === yi) && yi.onMouseOut(), yi.legendItem && Gi.legend.colorizeItem(yi, ai), yi.isDirty = !0, yi.options.stacking && Gi.series.forEach(function(ss) {
            ss.options.stacking && ss.visible && (ss.isDirty = !0);
          }), yi.linkedSeries.forEach(function(ss) {
            ss.setVisible(ai, !1);
          }), Xi && (Gi.isDirtyBox = !0), oi(yi, ts), xi !== !1 && Gi.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(ai) {
          this.selected = ai = this.options.selected = typeof ai > "u" ? !this.selected : ai, this.checkbox && (this.checkbox.checked = ai), oi(this, ai ? "select" : "unselect");
        }
        shouldShowTooltip(ai, xi, yi = {}) {
          return yi.series = this, yi.visiblePlotOnly = !0, this.chart.isInsidePlot(ai, xi, yi);
        }
        drawLegendSymbol(ai, xi) {
          var yi;
          (yi = Yi[this.options.legendSymbol || "rectangle"]) === null || yi === void 0 || yi.call(this, ai, xi);
        }
      }
      return Ri.defaultOptions = is, Ri.types = $i.seriesTypes, Ri.registerType = $i.registerSeriesType, si(Ri.prototype, {
        axisTypes: ["xAxis", "yAxis"],
        coll: "series",
        colorCounter: 0,
        cropShoulder: 1,
        directTouch: !1,
        isCartesian: !0,
        kdAxisArray: ["clientX", "plotY"],
        parallelArrays: ["x", "y"],
        pointClass: es,
        requireSorting: !0,
        sorted: !0
      }), $i.series = Ri, Ri;
    }), ri(ii, "Core/Chart/Chart.js", [
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Axis/Axis.js"],
      ii["Core/Defaults.js"],
      ii["Core/Templating.js"],
      ii["Core/Foundation.js"],
      ii["Core/Globals.js"],
      ii["Core/Renderer/RendererRegistry.js"],
      ii["Core/Series/Series.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Core/Renderer/SVG/SVGRenderer.js"],
      ii["Core/Time.js"],
      ii["Core/Utilities.js"],
      ii["Core/Renderer/HTML/AST.js"]
    ], function(hi, wi, zi, Ki, Yi, es, is, $i, Vi, _i, bi, Ai, ji) {
      const { animate: Ni, animObject: gi, setAnimation: ki } = hi, { defaultOptions: Ci, defaultTime: Si } = zi, { numberFormat: Ti } = Ki, { registerEventOptions: Mi } = Yi, { charts: Di, doc: ci, marginNames: pi, svg: vi, win: ui } = es, { seriesTypes: fi } = Vi, {
        addEvent: si,
        attr: ti,
        createElement: oi,
        css: di,
        defined: mi,
        diffObjects: Oi,
        discardElement: li,
        erase: Li,
        error: Ui,
        extend: Zi,
        find: rs,
        fireEvent: Bi,
        getStyle: ni,
        isArray: Pi,
        isNumber: Hi,
        isObject: Ri,
        isString: qi,
        merge: ai,
        objectEach: xi,
        pick: yi,
        pInt: Gi,
        relativeLength: Xi,
        removeEvent: Wi,
        splat: ts,
        syncTimeout: ss,
        uniqueKey: os
      } = Ai;
      class ns {
        static chart(Ii, Ei, Ji) {
          return new ns(Ii, Ei, Ji);
        }
        constructor(Ii, Ei, Ji) {
          this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0, this.sharedClips = {}, this.zooming = this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0, this.getArgs(Ii, Ei, Ji);
        }
        getArgs(Ii, Ei, Ji) {
          qi(Ii) || Ii.nodeName ? (this.renderTo = Ii, this.init(Ei, Ji)) : this.init(Ii, Ei);
        }
        setZoomOptions() {
          const Ii = this.options.chart, Ei = Ii.zooming;
          this.zooming = Object.assign(Object.assign({}, Ei), { type: yi(Ii.zoomType, Ei.type), key: yi(Ii.zoomKey, Ei.key), pinchType: yi(Ii.pinchType, Ei.pinchType), singleTouch: yi(
            Ii.zoomBySingleTouch,
            Ei.singleTouch,
            !1
          ), resetButton: ai(Ei.resetButton, Ii.resetZoomButton) });
        }
        init(Ii, Ei) {
          Bi(this, "init", { args: arguments }, function() {
            const Ji = ai(Ci, Ii), Fi = Ji.chart;
            this.userOptions = Zi({}, Ii), this.margin = [], this.spacing = [], this.bounds = { h: {}, v: {} }, this.labelCollectors = [], this.callback = Ei, this.isResizing = 0, this.options = Ji, this.axes = [], this.series = [], this.time = Ii.time && Object.keys(Ii.time).length ? new bi(Ii.time) : es.time, this.numberFormatter = Fi.numberFormatter || Ti, this.styledMode = Fi.styledMode, this.hasCartesianSeries = Fi.showAxes, this.index = Di.length, Di.push(this), es.chartCount++, Mi(this, Fi), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), Bi(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(Ii) {
          var Ei = this.options.chart;
          Ei = Ii.type || Ei.type;
          const Ji = fi[Ei];
          return Ji || Ui(17, !0, this, { missingModuleFor: Ei }), Ei = new Ji(), typeof Ei.init == "function" && Ei.init(this, Ii), Ei;
        }
        setSeriesData() {
          this.getSeriesOrderByLinks().forEach(function(Ii) {
            Ii.points || Ii.data || !Ii.enabledDataSorting || Ii.setData(Ii.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function(Ii, Ei) {
            return Ii.linkedSeries.length || Ei.linkedSeries.length ? Ei.linkedSeries.length - Ii.linkedSeries.length : 0;
          });
        }
        orderItems(Ii, Ei = 0) {
          const Ji = this[Ii], Fi = this.options[Ii] = ts(this.options[Ii]).slice();
          if (Ii = this.userOptions[Ii] = this.userOptions[Ii] ? ts(this.userOptions[Ii]).slice() : [], this.hasRendered && (Fi.splice(Ei), Ii.splice(Ei)), Ji)
            for (let Qi = Ei, hs = Ji.length; Qi < hs; ++Qi)
              (Ei = Ji[Qi]) && (Ei.index = Qi, Ei instanceof $i && (Ei.name = Ei.getName()), Ei.options.isInternal || (Fi[Qi] = Ei.options, Ii[Qi] = Ei.userOptions));
        }
        isInsidePlot(Ii, Ei, Ji = {}) {
          const {
            inverted: Fi,
            plotBox: Qi,
            plotLeft: hs,
            plotTop: as,
            scrollablePlotBox: ps
          } = this;
          var us = 0;
          let cs = 0;
          Ji.visiblePlotOnly && this.scrollingContainer && ({ scrollLeft: us, scrollTop: cs } = this.scrollingContainer);
          const ds = Ji.series, ms = Ji.visiblePlotOnly && ps || Qi;
          var fs = Ji.inverted ? Ei : Ii;
          if (Ei = Ji.inverted ? Ii : Ei, Ii = { x: fs, y: Ei, isInsidePlot: !0, options: Ji }, !Ji.ignoreX) {
            const gs = ds && (Fi && !this.polar ? ds.yAxis : ds.xAxis) || { pos: hs, len: 1 / 0 };
            fs = Ji.paneCoordinates ? gs.pos + fs : hs + fs, fs >= Math.max(us + hs, gs.pos) && fs <= Math.min(us + hs + ms.width, gs.pos + gs.len) || (Ii.isInsidePlot = !1);
          }
          return !Ji.ignoreY && Ii.isInsidePlot && (us = !Fi && Ji.axis && !Ji.axis.isXAxis && Ji.axis || ds && (Fi ? ds.xAxis : ds.yAxis) || { pos: as, len: 1 / 0 }, Ji = Ji.paneCoordinates ? us.pos + Ei : as + Ei, Ji >= Math.max(cs + as, us.pos) && Ji <= Math.min(cs + as + ms.height, us.pos + us.len) || (Ii.isInsidePlot = !1)), Bi(this, "afterIsInsidePlot", Ii), Ii.isInsidePlot;
        }
        redraw(Ii) {
          Bi(this, "beforeRedraw");
          const Ei = this.hasCartesianSeries ? this.axes : this.colorAxis || [], Ji = this.series, Fi = this.pointer, Qi = this.legend, hs = this.userOptions.legend, as = this.renderer, ps = as.isHidden(), us = [];
          let cs, ds, ms = this.isDirtyBox, fs = this.isDirtyLegend, gs;
          for (as.rootFontSize = as.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), ki(this.hasRendered ? Ii : !1, this), ps && this.temporaryDisplay(), this.layOutTitles(!1), Ii = Ji.length; Ii--; )
            if (gs = Ji[Ii], (gs.options.stacking || gs.options.centerInCategory) && (ds = !0, gs.isDirty)) {
              cs = !0;
              break;
            }
          if (cs)
            for (Ii = Ji.length; Ii--; )
              gs = Ji[Ii], gs.options.stacking && (gs.isDirty = !0);
          Ji.forEach(function(xs) {
            xs.isDirty && (xs.options.legendType === "point" ? (typeof xs.updateTotals == "function" && xs.updateTotals(), fs = !0) : hs && (hs.labelFormatter || hs.labelFormat) && (fs = !0)), xs.isDirtyData && Bi(xs, "updatedData");
          }), fs && Qi && Qi.options.enabled && (Qi.render(), this.isDirtyLegend = !1), ds && this.getStacks(), Ei.forEach(function(xs) {
            xs.updateNames(), xs.setScale();
          }), this.getMargins(), Ei.forEach(function(xs) {
            xs.isDirty && (ms = !0);
          }), Ei.forEach(function(xs) {
            const Ss = xs.min + "," + xs.max;
            xs.extKey !== Ss && (xs.extKey = Ss, us.push(function() {
              Bi(xs, "afterSetExtremes", Zi(xs.eventArgs, xs.getExtremes())), delete xs.eventArgs;
            })), (ms || ds) && xs.redraw();
          }), ms && this.drawChartBox(), Bi(this, "predraw"), Ji.forEach(function(xs) {
            (ms || xs.isDirty) && xs.visible && xs.redraw(), xs.isDirtyData = !1;
          }), Fi && Fi.reset(!0), as.draw(), Bi(this, "redraw"), Bi(this, "render"), ps && this.temporaryDisplay(!0), us.forEach(function(xs) {
            xs.call();
          });
        }
        get(Ii) {
          function Ei(Qi) {
            return Qi.id === Ii || Qi.options && Qi.options.id === Ii;
          }
          const Ji = this.series;
          let Fi = rs(this.axes, Ei) || rs(this.series, Ei);
          for (let Qi = 0; !Fi && Qi < Ji.length; Qi++)
            Fi = rs(Ji[Qi].points || [], Ei);
          return Fi;
        }
        getAxes() {
          const Ii = this.options;
          Bi(this, "getAxes");
          for (const Ei of ["xAxis", "yAxis"]) {
            const Ji = Ii[Ei] = ts(Ii[Ei] || {});
            for (const Fi of Ji)
              new wi(this, Fi, Ei);
          }
          Bi(this, "afterGetAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((Ii, Ei) => (Ei.getPointsCollection().forEach((Ji) => {
            yi(Ji.selectedStaging, Ji.selected) && Ii.push(Ji);
          }), Ii), []);
        }
        getSelectedSeries() {
          return this.series.filter(function(Ii) {
            return Ii.selected;
          });
        }
        setTitle(Ii, Ei, Ji) {
          this.applyDescription("title", Ii), this.applyDescription("subtitle", Ei), this.applyDescription("caption", void 0), this.layOutTitles(Ji);
        }
        applyDescription(Ii, Ei) {
          const Ji = this, Fi = this.options[Ii] = ai(this.options[Ii], Ei);
          let Qi = this[Ii];
          Qi && Ei && (this[Ii] = Qi = Qi.destroy()), Fi && !Qi && (Qi = this.renderer.text(Fi.text, 0, 0, Fi.useHTML).attr({
            align: Fi.align,
            class: "highcharts-" + Ii,
            zIndex: Fi.zIndex || 4
          }).add(), Qi.update = function(hs, as) {
            Ji.applyDescription(Ii, hs), Ji.layOutTitles(as);
          }, this.styledMode || Qi.css(Zi(Ii === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, Fi.style)), this[Ii] = Qi);
        }
        layOutTitles(Ii = !0) {
          const Ei = [0, 0, 0], Ji = this.renderer, Fi = this.spacingBox;
          ["title", "subtitle", "caption"].forEach(function(hs) {
            const as = this[hs], ps = this.options[hs], us = ps.verticalAlign || "top";
            if (hs = hs === "title" ? us === "top" ? -3 : 0 : us === "top" ? Ei[0] + 2 : 0, as) {
              as.css({ width: (ps.width || Fi.width + (ps.widthAdjust || 0)) + "px" });
              const cs = Ji.fontMetrics(as).b, ds = Math.round(as.getBBox(ps.useHTML).height);
              as.align(Zi({ y: us === "bottom" ? cs : hs + cs, height: ds }, ps), !1, "spacingBox"), ps.floating || (us === "top" ? Ei[0] = Math.ceil(Ei[0] + ds) : us === "bottom" && (Ei[2] = Math.ceil(Ei[2] + ds)));
            }
          }, this), Ei[0] && (this.options.title.verticalAlign || "top") === "top" && (Ei[0] += this.options.title.margin), Ei[2] && this.options.caption.verticalAlign === "bottom" && (Ei[2] += this.options.caption.margin);
          const Qi = !this.titleOffset || this.titleOffset.join(",") !== Ei.join(",");
          this.titleOffset = Ei, Bi(this, "afterLayOutTitles"), !this.isDirtyBox && Qi && (this.isDirtyBox = this.isDirtyLegend = Qi, this.hasRendered && Ii && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          return { width: ni(this.renderTo, "width", !0) || 0, height: ni(this.renderTo, "height", !0) || 0 };
        }
        getChartSize() {
          var Ii = this.options.chart;
          const Ei = Ii.width;
          Ii = Ii.height;
          const Ji = this.getContainerBox();
          this.chartWidth = Math.max(0, Ei || Ji.width || 600), this.chartHeight = Math.max(0, Xi(Ii, this.chartWidth) || (1 < Ji.height ? Ji.height : 400)), this.containerBox = Ji;
        }
        temporaryDisplay(Ii) {
          let Ei = this.renderTo;
          if (Ii)
            for (; Ei && Ei.style; )
              Ei.hcOrigStyle && (di(Ei, Ei.hcOrigStyle), delete Ei.hcOrigStyle), Ei.hcOrigDetached && (ci.body.removeChild(Ei), Ei.hcOrigDetached = !1), Ei = Ei.parentNode;
          else
            for (; Ei && Ei.style && (ci.body.contains(Ei) || Ei.parentNode || (Ei.hcOrigDetached = !0, ci.body.appendChild(Ei)), (ni(Ei, "display", !1) === "none" || Ei.hcOricDetached) && (Ei.hcOrigStyle = { display: Ei.style.display, height: Ei.style.height, overflow: Ei.style.overflow }, Ii = { display: "block", overflow: "hidden" }, Ei !== this.renderTo && (Ii.height = 0), di(Ei, Ii), Ei.offsetWidth || Ei.style.setProperty(
              "display",
              "block",
              "important"
            )), Ei = Ei.parentNode, Ei !== ci.body); )
              ;
        }
        setClassName(Ii) {
          this.container.className = "highcharts-container " + (Ii || "");
        }
        getContainer() {
          const Ii = this.options, Ei = Ii.chart;
          var Ji = os();
          let Fi, Qi = this.renderTo;
          Qi || (this.renderTo = Qi = Ei.renderTo), qi(Qi) && (this.renderTo = Qi = ci.getElementById(Qi)), Qi || Ui(13, !0, this);
          var hs = Gi(ti(Qi, "data-highcharts-chart"));
          Hi(hs) && Di[hs] && Di[hs].hasRendered && Di[hs].destroy(), ti(Qi, "data-highcharts-chart", this.index), Qi.innerHTML = ji.emptyHTML, Ei.skipClone || Qi.offsetWidth || this.temporaryDisplay(), this.getChartSize(), hs = this.chartWidth;
          const as = this.chartHeight;
          if (di(Qi, { overflow: "hidden" }), this.styledMode || (Fi = Zi({ position: "relative", overflow: "hidden", width: hs + "px", height: as + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, Ei.style || {})), this.container = Ji = oi("div", { id: Ji }, Fi, Qi), this._cursor = Ji.style.cursor, this.renderer = new (Ei.renderer || !vi ? is.getRendererType(Ei.renderer) : _i)(
            Ji,
            hs,
            as,
            void 0,
            Ei.forExport,
            Ii.exporting && Ii.exporting.allowHTML,
            this.styledMode
          ), this.containerBox = this.getContainerBox(), ki(void 0, this), this.setClassName(Ei.className), this.styledMode)
            for (const ps in Ii.defs)
              this.renderer.definition(Ii.defs[ps]);
          else
            this.renderer.setStyle(Ei.style);
          this.renderer.chartIndex = this.index, Bi(this, "afterGetContainer");
        }
        getMargins(Ii) {
          const { spacing: Ei, margin: Ji, titleOffset: Fi } = this;
          this.resetMargins(), Fi[0] && !mi(Ji[0]) && (this.plotTop = Math.max(this.plotTop, Fi[0] + Ei[0])), Fi[2] && !mi(Ji[2]) && (this.marginBottom = Math.max(
            this.marginBottom,
            Fi[2] + Ei[2]
          )), this.legend && this.legend.display && this.legend.adjustMargins(Ji, Ei), Bi(this, "getMargins"), Ii || this.getAxisMargins();
        }
        getAxisMargins() {
          const Ii = this, Ei = Ii.axisOffset = [0, 0, 0, 0], Ji = Ii.colorAxis, Fi = Ii.margin, Qi = function(hs) {
            hs.forEach(function(as) {
              as.visible && as.getOffset();
            });
          };
          Ii.hasCartesianSeries ? Qi(Ii.axes) : Ji && Ji.length && Qi(Ji), pi.forEach(function(hs, as) {
            mi(Fi[as]) || (Ii[hs] += Ei[as]);
          }), Ii.setChartSize();
        }
        getOptions() {
          return Oi(this.userOptions, Ci);
        }
        reflow(Ii) {
          const Ei = this;
          var Ji = Ei.options.chart;
          Ji = mi(Ji.width) && mi(Ji.height);
          const Fi = Ei.containerBox, Qi = Ei.getContainerBox();
          delete Ei.pointer.chartPosition, !Ji && !Ei.isPrinting && Fi && Qi.width && ((Qi.width !== Fi.width || Qi.height !== Fi.height) && (Ai.clearTimeout(Ei.reflowTimeout), Ei.reflowTimeout = ss(function() {
            Ei.container && Ei.setSize(void 0, void 0, !1);
          }, Ii ? 100 : 0)), Ei.containerBox = Qi);
        }
        setReflow() {
          const Ii = this;
          var Ei = (Ji) => {
            var Fi;
            !((Fi = Ii.options) === null || Fi === void 0) && Fi.chart.reflow && Ii.hasLoaded && Ii.reflow(Ji);
          };
          typeof ResizeObserver == "function" ? new ResizeObserver(Ei).observe(Ii.renderTo) : (Ei = si(ui, "resize", Ei), si(
            this,
            "destroy",
            Ei
          ));
        }
        setSize(Ii, Ei, Ji) {
          const Fi = this, Qi = Fi.renderer;
          Fi.isResizing += 1, ki(Ji, Fi), Ji = Qi.globalAnimation, Fi.oldChartHeight = Fi.chartHeight, Fi.oldChartWidth = Fi.chartWidth, typeof Ii < "u" && (Fi.options.chart.width = Ii), typeof Ei < "u" && (Fi.options.chart.height = Ei), Fi.getChartSize(), Fi.styledMode || (Ji ? Ni : di)(Fi.container, { width: Fi.chartWidth + "px", height: Fi.chartHeight + "px" }, Ji), Fi.setChartSize(!0), Qi.setSize(Fi.chartWidth, Fi.chartHeight, Ji), Fi.axes.forEach(function(hs) {
            hs.isDirty = !0, hs.setScale();
          }), Fi.isDirtyLegend = !0, Fi.isDirtyBox = !0, Fi.layOutTitles(), Fi.getMargins(), Fi.redraw(Ji), Fi.oldChartHeight = null, Bi(Fi, "resize"), ss(function() {
            Fi && Bi(Fi, "endResize", null, function() {
              --Fi.isResizing;
            });
          }, gi(Ji).duration);
        }
        setChartSize(Ii) {
          var Ei = this.inverted;
          const Ji = this.renderer;
          var Fi = this.chartWidth, Qi = this.chartHeight;
          const hs = this.options.chart, as = this.spacing, ps = this.clipOffset;
          let us, cs, ds, ms;
          this.plotLeft = us = Math.round(this.plotLeft), this.plotTop = cs = Math.round(this.plotTop), this.plotWidth = ds = Math.max(0, Math.round(Fi - us - this.marginRight)), this.plotHeight = ms = Math.max(
            0,
            Math.round(Qi - cs - this.marginBottom)
          ), this.plotSizeX = Ei ? ms : ds, this.plotSizeY = Ei ? ds : ms, this.plotBorderWidth = hs.plotBorderWidth || 0, this.spacingBox = Ji.spacingBox = { x: as[3], y: as[0], width: Fi - as[3] - as[1], height: Qi - as[0] - as[2] }, this.plotBox = Ji.plotBox = { x: us, y: cs, width: ds, height: ms }, Ei = 2 * Math.floor(this.plotBorderWidth / 2), Fi = Math.ceil(Math.max(Ei, ps[3]) / 2), Qi = Math.ceil(Math.max(Ei, ps[0]) / 2), this.clipBox = { x: Fi, y: Qi, width: Math.floor(this.plotSizeX - Math.max(Ei, ps[1]) / 2 - Fi), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(Ei, ps[2]) / 2 - Qi)) }, Ii || (this.axes.forEach(function(fs) {
            fs.setAxisSize(), fs.setAxisTranslation();
          }), Ji.alignElements()), Bi(this, "afterSetChartSize", { skipAxes: Ii });
        }
        resetMargins() {
          Bi(this, "resetMargins");
          const Ii = this, Ei = Ii.options.chart;
          ["margin", "spacing"].forEach(function(Ji) {
            const Fi = Ei[Ji], Qi = Ri(Fi) ? Fi : [Fi, Fi, Fi, Fi];
            ["Top", "Right", "Bottom", "Left"].forEach(function(hs, as) {
              Ii[Ji][as] = yi(Ei[Ji + hs], Qi[as]);
            });
          }), pi.forEach(function(Ji, Fi) {
            Ii[Ji] = yi(Ii.margin[Fi], Ii.spacing[Fi]);
          }), Ii.axisOffset = [0, 0, 0, 0], Ii.clipOffset = [0, 0, 0, 0];
        }
        drawChartBox() {
          const Ii = this.options.chart, Ei = this.renderer, Ji = this.chartWidth, Fi = this.chartHeight, Qi = this.styledMode, hs = this.plotBGImage;
          var as = Ii.backgroundColor;
          const ps = Ii.plotBackgroundColor, us = Ii.plotBackgroundImage, cs = this.plotLeft, ds = this.plotTop, ms = this.plotWidth, fs = this.plotHeight, gs = this.plotBox, xs = this.clipRect, Ss = this.clipBox;
          let vs = this.chartBackground, ws = this.plotBackground, bs = this.plotBorder, ys, ks, Cs = "animate";
          vs || (this.chartBackground = vs = Ei.rect().addClass("highcharts-background").add(), Cs = "attr"), Qi ? ys = ks = vs.strokeWidth() : (ys = Ii.borderWidth || 0, ks = ys + (Ii.shadow ? 8 : 0), as = { fill: as || "none" }, (ys || vs["stroke-width"]) && (as.stroke = Ii.borderColor, as["stroke-width"] = ys), vs.attr(as).shadow(Ii.shadow)), vs[Cs]({ x: ks / 2, y: ks / 2, width: Ji - ks - ys % 2, height: Fi - ks - ys % 2, r: Ii.borderRadius }), Cs = "animate", ws || (Cs = "attr", this.plotBackground = ws = Ei.rect().addClass("highcharts-plot-background").add()), ws[Cs](gs), Qi || (ws.attr({ fill: ps || "none" }).shadow(Ii.plotShadow), us && (hs ? (us !== hs.attr("href") && hs.attr("href", us), hs.animate(gs)) : this.plotBGImage = Ei.image(us, cs, ds, ms, fs).add())), xs ? xs.animate({ width: Ss.width, height: Ss.height }) : this.clipRect = Ei.clipRect(Ss), Cs = "animate", bs || (Cs = "attr", this.plotBorder = bs = Ei.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), Qi || bs.attr({ stroke: Ii.plotBorderColor, "stroke-width": Ii.plotBorderWidth || 0, fill: "none" }), bs[Cs](bs.crisp({ x: cs, y: ds, width: ms, height: fs }, -bs.strokeWidth())), this.isDirtyBox = !1, Bi(this, "afterDrawChartBox");
        }
        propFromSeries() {
          const Ii = this, Ei = Ii.options.chart, Ji = Ii.options.series;
          let Fi, Qi, hs;
          ["inverted", "angular", "polar"].forEach(function(as) {
            for (Qi = fi[Ei.type], hs = Ei[as] || Qi && Qi.prototype[as], Fi = Ji && Ji.length; !hs && Fi--; )
              (Qi = fi[Ji[Fi].type]) && Qi.prototype[as] && (hs = !0);
            Ii[as] = hs;
          });
        }
        linkSeries(Ii) {
          const Ei = this, Ji = Ei.series;
          Ji.forEach(function(Fi) {
            Fi.linkedSeries.length = 0;
          }), Ji.forEach(function(Fi) {
            let Qi = Fi.options.linkedTo;
            qi(Qi) && (Qi = Qi === ":previous" ? Ei.series[Fi.index - 1] : Ei.get(Qi)) && Qi.linkedParent !== Fi && (Qi.linkedSeries.push(Fi), Fi.linkedParent = Qi, Qi.enabledDataSorting && Fi.setDataSortingOptions(), Fi.visible = yi(Fi.options.visible, Qi.options.visible, Fi.visible));
          }), Bi(this, "afterLinkSeries", { isUpdating: Ii });
        }
        renderSeries() {
          this.series.forEach(function(Ii) {
            Ii.translate(), Ii.render();
          });
        }
        render() {
          const Ii = this.axes, Ei = this.colorAxis, Ji = this.renderer, Fi = function(cs) {
            cs.forEach(function(ds) {
              ds.visible && ds.render();
            });
          };
          let Qi = 0;
          this.setTitle(), Bi(this, "beforeMargins"), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize();
          const hs = this.plotWidth;
          Ii.some(function(cs) {
            if (cs.horiz && cs.visible && cs.options.labels.enabled && cs.series.length)
              return Qi = 21, !0;
          });
          const as = this.plotHeight = Math.max(this.plotHeight - Qi, 0);
          Ii.forEach(function(cs) {
            cs.setScale();
          }), this.getAxisMargins();
          const ps = 1.1 < hs / this.plotWidth, us = 1.05 < as / this.plotHeight;
          (ps || us) && (Ii.forEach(function(cs) {
            (cs.horiz && ps || !cs.horiz && us) && cs.setTickInterval(!0);
          }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries ? Fi(Ii) : Ei && Ei.length && Fi(Ei), this.seriesGroup || (this.seriesGroup = Ji.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(Ii) {
          const Ei = this, Ji = ai(!0, this.options.credits, Ii);
          Ji.enabled && !this.credits && (this.credits = this.renderer.text(Ji.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            Ji.href && (ui.location.href = Ji.href);
          }).attr({ align: Ji.position.align, zIndex: 8 }), Ei.styledMode || this.credits.css(Ji.style), this.credits.add().align(Ji.position), this.credits.update = function(Fi) {
            Ei.credits = Ei.credits.destroy(), Ei.addCredits(Fi);
          });
        }
        destroy() {
          const Ii = this, Ei = Ii.axes, Ji = Ii.series, Fi = Ii.container, Qi = Fi && Fi.parentNode;
          let hs;
          for (Bi(Ii, "destroy"), Ii.renderer.forExport ? Li(Di, Ii) : Di[Ii.index] = void 0, es.chartCount--, Ii.renderTo.removeAttribute("data-highcharts-chart"), Wi(Ii), hs = Ei.length; hs--; )
            Ei[hs] = Ei[hs].destroy();
          for (this.scroller && this.scroller.destroy && this.scroller.destroy(), hs = Ji.length; hs--; )
            Ji[hs] = Ji[hs].destroy();
          "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(as) {
            const ps = Ii[as];
            ps && ps.destroy && (Ii[as] = ps.destroy());
          }), Fi && (Fi.innerHTML = ji.emptyHTML, Wi(Fi), Qi && li(Fi)), xi(Ii, function(as, ps) {
            delete Ii[ps];
          });
        }
        firstRender() {
          const Ii = this, Ei = Ii.options;
          Ii.getContainer(), Ii.resetMargins(), Ii.setChartSize(), Ii.propFromSeries(), Ii.getAxes();
          const Ji = Pi(Ei.series) ? Ei.series : [];
          Ei.series = [], Ji.forEach(function(Fi) {
            Ii.initSeries(Fi);
          }), Ii.linkSeries(), Ii.setSeriesData(), Bi(Ii, "beforeRender"), Ii.render(), Ii.pointer.getChartPosition(), !Ii.renderer.imgCount && !Ii.hasLoaded && Ii.onload(), Ii.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(Ii) {
            Ii && typeof this.index < "u" && Ii.apply(this, [this]);
          }, this), Bi(this, "load"), Bi(this, "render"), mi(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          const { options: Ii, title: Ei } = this;
          Ii && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (Ei && Ei.element.textContent || "").replace(/</g, "&lt;") }), Ii.accessibility && Ii.accessibility.enabled === !1 || Ui(
            'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
            !1,
            this
          ));
        }
        addSeries(Ii, Ei, Ji) {
          const Fi = this;
          let Qi;
          return Ii && (Ei = yi(Ei, !0), Bi(Fi, "addSeries", { options: Ii }, function() {
            Qi = Fi.initSeries(Ii), Fi.isDirtyLegend = !0, Fi.linkSeries(), Qi.enabledDataSorting && Qi.setData(Ii.data, !1), Bi(Fi, "afterAddSeries", { series: Qi }), Ei && Fi.redraw(Ji);
          })), Qi;
        }
        addAxis(Ii, Ei, Ji, Fi) {
          return this.createAxis(Ei ? "xAxis" : "yAxis", { axis: Ii, redraw: Ji, animation: Fi });
        }
        addColorAxis(Ii, Ei, Ji) {
          return this.createAxis("colorAxis", { axis: Ii, redraw: Ei, animation: Ji });
        }
        createAxis(Ii, Ei) {
          return Ii = new wi(this, Ei.axis, Ii), yi(Ei.redraw, !0) && this.redraw(Ei.animation), Ii;
        }
        showLoading(Ii) {
          const Ei = this, Ji = Ei.options, Fi = Ji.loading, Qi = function() {
            hs && di(hs, { left: Ei.plotLeft + "px", top: Ei.plotTop + "px", width: Ei.plotWidth + "px", height: Ei.plotHeight + "px" });
          };
          let hs = Ei.loadingDiv, as = Ei.loadingSpan;
          hs || (Ei.loadingDiv = hs = oi("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, Ei.container)), as || (Ei.loadingSpan = as = oi("span", { className: "highcharts-loading-inner" }, null, hs), si(Ei, "redraw", Qi)), hs.className = "highcharts-loading", ji.setElementHTML(as, yi(Ii, Ji.lang.loading, "")), Ei.styledMode || (di(
            hs,
            Zi(Fi.style, { zIndex: 10 })
          ), di(as, Fi.labelStyle), Ei.loadingShown || (di(hs, { opacity: 0, display: "" }), Ni(hs, { opacity: Fi.style.opacity || 0.5 }, { duration: Fi.showDuration || 0 }))), Ei.loadingShown = !0, Qi();
        }
        hideLoading() {
          const Ii = this.options, Ei = this.loadingDiv;
          Ei && (Ei.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || Ni(Ei, { opacity: 0 }, { duration: Ii.loading.hideDuration || 100, complete: function() {
            di(Ei, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(Ii, Ei, Ji, Fi) {
          const Qi = this, hs = {
            credits: "addCredits",
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }, as = Ii.isResponsiveOptions, ps = [];
          let us, cs;
          Bi(Qi, "update", { options: Ii }), as || Qi.setResponsive(!1, !0), Ii = Oi(Ii, Qi.options), Qi.userOptions = ai(Qi.userOptions, Ii);
          var ds = Ii.chart;
          if (ds) {
            if (ai(!0, Qi.options.chart, ds), this.setZoomOptions(), "className" in ds && Qi.setClassName(ds.className), "inverted" in ds || "polar" in ds || "type" in ds) {
              Qi.propFromSeries();
              var ms = !0;
            }
            "alignTicks" in ds && (ms = !0), "events" in ds && Mi(this, ds), xi(ds, function(fs, gs) {
              Qi.propsRequireUpdateSeries.indexOf("chart." + gs) !== -1 && (us = !0), Qi.propsRequireDirtyBox.indexOf(gs) !== -1 && (Qi.isDirtyBox = !0), Qi.propsRequireReflow.indexOf(gs) !== -1 && (as ? Qi.isDirtyBox = !0 : cs = !0);
            }), !Qi.styledMode && ds.style && Qi.renderer.setStyle(Qi.options.chart.style || {});
          }
          !Qi.styledMode && Ii.colors && (this.options.colors = Ii.colors), Ii.time && (this.time === Si && (this.time = new bi(Ii.time)), ai(!0, Qi.options.time, Ii.time)), xi(Ii, function(fs, gs) {
            Qi[gs] && typeof Qi[gs].update == "function" ? Qi[gs].update(fs, !1) : typeof Qi[hs[gs]] == "function" ? Qi[hs[gs]](fs) : gs !== "colors" && Qi.collectionsWithUpdate.indexOf(gs) === -1 && ai(!0, Qi.options[gs], Ii[gs]), gs !== "chart" && Qi.propsRequireUpdateSeries.indexOf(gs) !== -1 && (us = !0);
          }), this.collectionsWithUpdate.forEach(function(fs) {
            Ii[fs] && (ts(Ii[fs]).forEach(function(gs, xs) {
              const Ss = mi(gs.id);
              let vs;
              Ss && (vs = Qi.get(gs.id)), !vs && Qi[fs] && (vs = Qi[fs][yi(gs.index, xs)]) && (Ss && mi(vs.options.id) || vs.options.isInternal) && (vs = void 0), vs && vs.coll === fs && (vs.update(gs, !1), Ji && (vs.touched = !0)), !vs && Ji && Qi.collectionsWithInit[fs] && (Qi.collectionsWithInit[fs][0].apply(Qi, [gs].concat(Qi.collectionsWithInit[fs][1] || []).concat([!1])).touched = !0);
            }), Ji && Qi[fs].forEach(function(gs) {
              gs.touched || gs.options.isInternal ? delete gs.touched : ps.push(gs);
            }));
          }), ps.forEach(function(fs) {
            fs.chart && fs.remove && fs.remove(!1);
          }), ms && Qi.axes.forEach(function(fs) {
            fs.update({}, !1);
          }), us && Qi.getSeriesOrderByLinks().forEach(function(fs) {
            fs.chart && fs.update({}, !1);
          }, this), ms = ds && ds.width, ds = ds && (qi(ds.height) ? Xi(ds.height, ms || Qi.chartWidth) : ds.height), cs || Hi(ms) && ms !== Qi.chartWidth || Hi(ds) && ds !== Qi.chartHeight ? Qi.setSize(ms, ds, Fi) : yi(Ei, !0) && Qi.redraw(Fi), Bi(Qi, "afterUpdate", { options: Ii, redraw: Ei, animation: Fi });
        }
        setSubtitle(Ii, Ei) {
          this.applyDescription(
            "subtitle",
            Ii
          ), this.layOutTitles(Ei);
        }
        setCaption(Ii, Ei) {
          this.applyDescription("caption", Ii), this.layOutTitles(Ei);
        }
        showResetZoom() {
          function Ii() {
            Ei.zoomOut();
          }
          const Ei = this, Ji = Ci.lang, Fi = Ei.zooming.resetButton, Qi = Fi.theme, hs = Fi.relativeTo === "chart" || Fi.relativeTo === "spacingBox" ? null : "scrollablePlotBox";
          Bi(this, "beforeShowResetZoom", null, function() {
            Ei.resetZoomButton = Ei.renderer.button(Ji.resetZoom, null, null, Ii, Qi).attr({ align: Fi.position.align, title: Ji.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(Fi.position, !1, hs);
          }), Bi(
            this,
            "afterShowResetZoom"
          );
        }
        zoomOut() {
          Bi(this, "selection", { resetSelection: !0 }, this.zoom);
        }
        zoom(Ii) {
          const Ei = this, Ji = Ei.pointer;
          let Fi = !1, Qi;
          !Ii || Ii.resetSelection ? (Ei.axes.forEach(function(as) {
            Qi = as.zoom();
          }), Ji.initiated = !1) : Ii.xAxis.concat(Ii.yAxis).forEach(function(as) {
            const ps = as.axis;
            (Ji[ps.isXAxis ? "zoomX" : "zoomY"] && mi(Ji.mouseDownX) && mi(Ji.mouseDownY) && Ei.isInsidePlot(Ji.mouseDownX - Ei.plotLeft, Ji.mouseDownY - Ei.plotTop, { axis: ps }) || !mi(Ei.inverted ? Ji.mouseDownX : Ji.mouseDownY)) && (Qi = ps.zoom(as.min, as.max), ps.displayBtn && (Fi = !0));
          });
          const hs = Ei.resetZoomButton;
          Fi && !hs ? Ei.showResetZoom() : !Fi && Ri(hs) && (Ei.resetZoomButton = hs.destroy()), Qi && Ei.redraw(yi(Ei.options.chart.animation, Ii && Ii.animation, 100 > Ei.pointCount));
        }
        pan(Ii, Ei) {
          const Ji = this, Fi = Ji.hoverPoints;
          Ei = typeof Ei == "object" ? Ei : { enabled: Ei, type: "x" };
          const Qi = Ji.options.chart;
          Qi && Qi.panning && (Qi.panning = Ei);
          const hs = Ei.type;
          let as;
          Bi(this, "pan", { originalEvent: Ii }, function() {
            Fi && Fi.forEach(function(cs) {
              cs.setState();
            });
            let ps = Ji.xAxis;
            hs === "xy" ? ps = ps.concat(Ji.yAxis) : hs === "y" && (ps = Ji.yAxis);
            const us = {};
            ps.forEach(function(cs) {
              if (cs.options.panningEnabled && !cs.options.isInternal) {
                var ds = cs.horiz, ms = Ii[ds ? "chartX" : "chartY"];
                ds = ds ? "mouseDownX" : "mouseDownY";
                var fs = Ji[ds], gs = cs.minPointOffset || 0, xs = cs.reversed && !Ji.inverted || !cs.reversed && Ji.inverted ? -1 : 1, Ss = cs.getExtremes(), vs = cs.toValue(fs - ms, !0) + gs * xs, ws = cs.toValue(fs + cs.len - ms, !0) - (gs * xs || cs.isXAxis && cs.pointRangePadding || 0), bs = ws < vs;
                xs = cs.hasVerticalPanning(), fs = bs ? ws : vs, vs = bs ? vs : ws;
                var ys = cs.panningState;
                !xs || cs.isXAxis || ys && !ys.isDirty || cs.series.forEach(function(ks) {
                  var Cs = ks.getProcessedData(!0);
                  Cs = ks.getExtremes(Cs.yData, !0), ys || (ys = {
                    startMin: Number.MAX_VALUE,
                    startMax: -Number.MAX_VALUE
                  }), Hi(Cs.dataMin) && Hi(Cs.dataMax) && (ys.startMin = Math.min(yi(ks.options.threshold, 1 / 0), Cs.dataMin, ys.startMin), ys.startMax = Math.max(yi(ks.options.threshold, -1 / 0), Cs.dataMax, ys.startMax));
                }), xs = Math.min(yi(ys && ys.startMin, Ss.dataMin), gs ? Ss.min : cs.toValue(cs.toPixels(Ss.min) - cs.minPixelPadding)), ws = Math.max(yi(ys && ys.startMax, Ss.dataMax), gs ? Ss.max : cs.toValue(cs.toPixels(Ss.max) + cs.minPixelPadding)), cs.panningState = ys, cs.isOrdinal || (gs = xs - fs, 0 < gs && (vs += gs, fs = xs), gs = vs - ws, 0 < gs && (vs = ws, fs -= gs), cs.series.length && fs !== Ss.min && vs !== Ss.max && fs >= xs && vs <= ws && (cs.setExtremes(fs, vs, !1, !1, { trigger: "pan" }), !Ji.resetZoomButton && fs !== xs && vs !== ws && hs.match("y") && (Ji.showResetZoom(), cs.displayBtn = !1), as = !0), us[ds] = ms);
              }
            }), xi(us, (cs, ds) => {
              Ji[ds] = cs;
            }), as && Ji.redraw(!1), di(Ji.container, { cursor: "move" });
          });
        }
      }
      return Zi(ns.prototype, {
        callbacks: [],
        collectionsWithInit: { xAxis: [ns.prototype.addAxis, [!0]], yAxis: [ns.prototype.addAxis, [!1]], series: [ns.prototype.addSeries] },
        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
        propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
        propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
        propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
      }), ns;
    }), ri(
      ii,
      "Extensions/ScrollablePlotArea.js",
      [ii["Core/Animation/AnimationUtilities.js"], ii["Core/Axis/Axis.js"], ii["Core/Chart/Chart.js"], ii["Core/Series/Series.js"], ii["Core/Renderer/RendererRegistry.js"], ii["Core/Utilities.js"]],
      function(hi, wi, zi, Ki, Yi, es) {
        const { stop: is } = hi, { addEvent: $i, createElement: Vi, defined: _i, merge: bi, pick: Ai } = es;
        $i(zi, "afterSetChartSize", function(ji) {
          var Ni = this.options.chart.scrollablePlotArea, gi = Ni && Ni.minWidth;
          Ni = Ni && Ni.minHeight;
          let ki;
          this.renderer.forExport || (gi ? (this.scrollablePixelsX = gi = Math.max(0, gi - this.chartWidth)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = bi(this.plotBox), this.plotBox.width = this.plotWidth += gi, this.inverted ? this.clipBox.height += gi : this.clipBox.width += gi, ki = { 1: { name: "right", value: gi } }) : Ni && (this.scrollablePixelsY = gi = Math.max(0, Ni - this.chartHeight), _i(gi) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = bi(this.plotBox), this.plotBox.height = this.plotHeight += gi, this.inverted ? this.clipBox.width += gi : this.clipBox.height += gi, ki = { 2: { name: "bottom", value: gi } })), ki && !ji.skipAxes && this.axes.forEach(function(Ci) {
            ki[Ci.side] ? Ci.getPlotLinePath = function() {
              let Si = ki[Ci.side].name, Ti = this[Si], Mi;
              return this[Si] = Ti - ki[Ci.side].value, Mi = wi.prototype.getPlotLinePath.apply(this, arguments), this[Si] = Ti, Mi;
            } : (Ci.setAxisSize(), Ci.setAxisTranslation());
          }));
        }), $i(zi, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        }), zi.prototype.setUpScrolling = function() {
          const ji = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (ji.overflowX = "auto"), this.scrollablePixelsY && (ji.overflowY = "auto"), this.scrollingParent = Vi("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo), this.scrollingContainer = Vi("div", { className: "highcharts-scrolling" }, ji, this.scrollingParent);
          let Ni;
          $i(this.scrollingContainer, "scroll", () => {
            this.pointer && (delete this.pointer.chartPosition, this.hoverPoint && (Ni = this.hoverPoint), this.pointer.runPointActions(void 0, Ni, !0));
          }), this.innerContainer = Vi("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null;
        }, zi.prototype.moveFixedElements = function() {
          let ji = this.container, Ni = this.fixedRenderer, gi = ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), ki;
          this.scrollablePixelsX && !this.inverted ? ki = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted || this.scrollablePixelsY && !this.inverted ? ki = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (ki = ".highcharts-yaxis"), ki && gi.push(`${ki}:not(.highcharts-radial-axis)`, `${ki}-labels:not(.highcharts-radial-axis-labels)`), gi.forEach(function(Ci) {
            [].forEach.call(ji.querySelectorAll(Ci), function(Si) {
              (Si.namespaceURI === Ni.SVG_NS ? Ni.box : Ni.box.parentNode).appendChild(Si), Si.style.pointerEvents = "auto";
            });
          });
        }, zi.prototype.applyFixed = function() {
          var ji = !this.fixedDiv, Ni = this.options.chart, gi = Ni.scrollablePlotArea, ki = Yi.getRendererType();
          ji ? (this.fixedDiv = Vi("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (Ni.style && Ni.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = Ni = new ki(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = Ni.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": Ai(
            gi.opacity,
            0.85
          ), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), $i(this, "afterShowResetZoom", this.moveFixedElements), $i(this, "afterApplyDrilldown", this.moveFixedElements), $i(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), (this.scrollableDirty || ji) && (this.scrollableDirty = !1, this.moveFixedElements()), Ni = this.chartWidth + (this.scrollablePixelsX || 0), ki = this.chartHeight + (this.scrollablePixelsY || 0), is(this.container), this.container.style.width = Ni + "px", this.container.style.height = ki + "px", this.renderer.boxWrapper.attr({ width: Ni, height: ki, viewBox: [0, 0, Ni, ki].join(" ") }), this.chartBackground.attr({ width: Ni, height: ki }), this.scrollingContainer.style.height = this.chartHeight + "px", ji && (gi.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * gi.scrollPositionX), gi.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * gi.scrollPositionY)), ki = this.axisOffset, ji = this.plotTop - ki[0] - 1, gi = this.plotLeft - ki[3] - 1, Ni = this.plotTop + this.plotHeight + ki[2] + 1, ki = this.plotLeft + this.plotWidth + ki[1] + 1;
          let Ci = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), Si = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          ji = this.scrollablePixelsX ? [["M", 0, ji], ["L", this.plotLeft - 1, ji], ["L", this.plotLeft - 1, Ni], ["L", 0, Ni], ["Z"], ["M", Ci, ji], ["L", this.chartWidth, ji], ["L", this.chartWidth, Ni], ["L", Ci, Ni], ["Z"]] : this.scrollablePixelsY ? [["M", gi, 0], ["L", gi, this.plotTop - 1], ["L", ki, this.plotTop - 1], ["L", ki, 0], ["Z"], ["M", gi, Si], ["L", gi, this.chartHeight], ["L", ki, this.chartHeight], [
            "L",
            ki,
            Si
          ], ["Z"]] : [["M", 0, 0]], this.redrawTrigger !== "adjustHeight" && this.scrollableMask.attr({ d: ji });
        }, $i(wi, "afterInit", function() {
          this.chart.scrollableDirty = !0;
        }), $i(Ki, "show", function() {
          this.chart.scrollableDirty = !0;
        });
      }
    ), ri(ii, "Core/Axis/Stacking/StackItem.js", [ii["Core/Templating.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { format: Ki } = hi, { series: Yi } = wi, { destroyObjectProperties: es, fireEvent: is, isNumber: $i, pick: Vi } = zi;
      class _i {
        constructor(Ai, ji, Ni, gi, ki) {
          const Ci = Ai.chart.inverted, Si = Ai.reversed;
          this.axis = Ai, Ai = this.isNegative = !!Ni != !!Si, this.options = ji = ji || {}, this.x = gi, this.cumulative = this.total = null, this.points = {}, this.hasValidPoints = !1, this.stack = ki, this.rightCliff = this.leftCliff = 0, this.alignOptions = { align: ji.align || (Ci ? Ai ? "left" : "right" : "center"), verticalAlign: ji.verticalAlign || (Ci ? "middle" : Ai ? "bottom" : "top"), y: ji.y, x: ji.x }, this.textAlign = ji.textAlign || (Ci ? Ai ? "right" : "left" : "center");
        }
        destroy() {
          es(this, this.axis);
        }
        render(Ai) {
          const ji = this.axis.chart, Ni = this.options;
          var gi = Ni.format;
          gi = gi ? Ki(gi, this, ji) : Ni.formatter.call(this), this.label ? this.label.attr({ text: gi, visibility: "hidden" }) : (this.label = ji.renderer.label(gi, null, void 0, Ni.shape, void 0, void 0, Ni.useHTML, !1, "stack-labels"), gi = { r: Ni.borderRadius || 0, text: gi, padding: Vi(Ni.padding, 5), visibility: "hidden" }, ji.styledMode || (gi.fill = Ni.backgroundColor, gi.stroke = Ni.borderColor, gi["stroke-width"] = Ni.borderWidth, this.label.css(Ni.style || {})), this.label.attr(gi), this.label.added || this.label.add(Ai)), this.label.labelrank = ji.plotSizeY, is(this, "afterRender");
        }
        setOffset(Ai, ji, Ni, gi, ki, Ci) {
          const {
            alignOptions: Si,
            axis: Ti,
            label: Mi,
            options: Di,
            textAlign: ci
          } = this, pi = Ti.chart;
          Ni = this.getStackBox({ xOffset: Ai, width: ji, boxBottom: Ni, boxTop: gi, defaultX: ki, xAxis: Ci });
          var { verticalAlign: vi } = Si;
          if (Mi && Ni) {
            gi = Mi.getBBox(), ki = Mi.padding, Ci = Vi(Di.overflow, "justify") === "justify", Si.x = Di.x || 0, Si.y = Di.y || 0;
            const { x: ui, y: fi } = this.adjustStackPosition({ labelBox: gi, verticalAlign: vi, textAlign: ci });
            Ni.x -= ui, Ni.y -= fi, Mi.align(Si, !1, Ni), (vi = pi.isInsidePlot(Mi.alignAttr.x + Si.x + ui, Mi.alignAttr.y + Si.y + fi)) || (Ci = !1), Ci && Yi.prototype.justifyDataLabel.call(Ti, Mi, Si, Mi.alignAttr, gi, Ni), Mi.attr({
              x: Mi.alignAttr.x,
              y: Mi.alignAttr.y,
              rotation: Di.rotation,
              rotationOriginX: gi.width / 2,
              rotationOriginY: gi.height / 2
            }), Vi(!Ci && Di.crop, !0) && (vi = $i(Mi.x) && $i(Mi.y) && pi.isInsidePlot(Mi.x - ki + Mi.width, Mi.y) && pi.isInsidePlot(Mi.x + ki, Mi.y)), Mi[vi ? "show" : "hide"]();
          }
          is(this, "afterSetOffset", { xOffset: Ai, width: ji });
        }
        adjustStackPosition({ labelBox: Ai, verticalAlign: ji, textAlign: Ni }) {
          const gi = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 };
          return { x: Ai.width / 2 + Ai.width / 2 * gi[Ni], y: Ai.height / 2 * gi[ji] };
        }
        getStackBox(Ai) {
          var ji = this.axis;
          const Ni = ji.chart, {
            boxTop: gi,
            defaultX: ki,
            xOffset: Ci,
            width: Si,
            boxBottom: Ti
          } = Ai;
          var Mi = ji.stacking.usePercentage ? 100 : Vi(gi, this.total, 0);
          Mi = ji.toPixels(Mi), Ai = Ai.xAxis || Ni.xAxis[0];
          const Di = Vi(ki, Ai.translate(this.x)) + Ci;
          ji = ji.toPixels(Ti || $i(ji.min) && ji.logarithmic && ji.logarithmic.lin2log(ji.min) || 0), ji = Math.abs(Mi - ji);
          const ci = this.isNegative;
          return Ni.inverted ? { x: (ci ? Mi : Mi - ji) - Ni.plotLeft, y: Ai.height - Di - Si, width: ji, height: Si } : { x: Di + Ai.transB - Ni.plotLeft, y: (ci ? Mi - ji : Mi) - Ni.plotTop, width: Si, height: ji };
        }
      }
      return _i;
    }), ri(ii, "Core/Axis/Stacking/StackingAxis.js", [
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Axis/Axis.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Core/Axis/Stacking/StackItem.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi) {
      function es() {
        const si = this, ti = si.inverted;
        si.yAxis.forEach((oi) => {
          oi.stacking && oi.stacking.stacks && oi.hasVisibleSeries && (oi.stacking.oldStacks = oi.stacking.stacks);
        }), si.series.forEach((oi) => {
          const di = oi.xAxis && oi.xAxis.options || {};
          !oi.options.stacking || oi.visible !== !0 && si.options.chart.ignoreHiddenSeries !== !1 || (oi.stackKey = [oi.type, vi(oi.options.stack, ""), ti ? di.top : di.left, ti ? di.height : di.width].join());
        });
      }
      function is() {
        const si = this.stacking;
        if (si) {
          var ti = si.stacks;
          pi(ti, function(oi, di) {
            Ti(oi), ti[di] = null;
          }), si && si.stackTotalGroup && si.stackTotalGroup.destroy();
        }
      }
      function $i() {
        this.coll !== "yAxis" || this.stacking || (this.stacking = new ui(this));
      }
      function Vi(si, ti, oi, di) {
        return !Si(si) || si.x !== ti || di && si.stackKey !== di ? si = { x: ti, index: 0, key: di, stackKey: di } : si.index++, si.key = [oi, ti, si.index].join(), si;
      }
      function _i() {
        const si = this, ti = si.stackKey, oi = si.yAxis.stacking.stacks, di = si.processedXData, mi = si[si.options.stacking + "Stacker"];
        let Oi;
        mi && [ti, "-" + ti].forEach((li) => {
          let Li = di.length, Ui;
          for (; Li--; ) {
            var Zi = di[Li];
            Oi = si.getStackIndicator(Oi, Zi, si.index, li), (Ui = (Zi = oi[li] && oi[li][Zi]) && Zi.points[Oi.key]) && mi.call(si, Ui, Zi, Li);
          }
        });
      }
      function bi(si, ti, oi) {
        ti = ti.total ? 100 / ti.total : 0, si[0] = Ci(si[0] * ti), si[1] = Ci(si[1] * ti), this.stackedYData[oi] = si[1];
      }
      function Ai() {
        const si = this.yAxis.stacking;
        this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? gi.setStackedPoints.call(this, "group") : si && pi(si.stacks, (ti, oi) => {
          oi.slice(-5) === "group" && (pi(ti, (di) => di.destroy()), delete si.stacks[oi]);
        });
      }
      function ji(si) {
        var ti = this.chart;
        const oi = si || this.options.stacking;
        if (oi && (this.visible === !0 || ti.options.chart.ignoreHiddenSeries === !1)) {
          var di = this.processedXData, mi = this.processedYData, Oi = [], li = mi.length, Li = this.options, Ui = Li.threshold, Zi = vi(Li.startFromThreshold && Ui, 0);
          Li = Li.stack, si = si ? `${this.type},${oi}` : this.stackKey;
          var rs = "-" + si, Bi = this.negStacks;
          ti = oi === "group" ? ti.yAxis[0] : this.yAxis;
          var ni = ti.stacking.stacks, Pi = ti.stacking.oldStacks, Hi, Ri;
          for (ti.stacking.stacksTouched += 1, Ri = 0; Ri < li; Ri++) {
            var qi = di[Ri], ai = mi[Ri], xi = this.getStackIndicator(xi, qi, this.index), yi = xi.key, Gi = (Hi = Bi && ai < (Zi ? 0 : Ui)) ? rs : si;
            ni[Gi] || (ni[Gi] = {}), ni[Gi][qi] || (Pi[Gi] && Pi[Gi][qi] ? (ni[Gi][qi] = Pi[Gi][qi], ni[Gi][qi].total = null) : ni[Gi][qi] = new Ki(ti, ti.options.stackLabels, !!Hi, qi, Li)), Gi = ni[Gi][qi], ai !== null ? (Gi.points[yi] = Gi.points[this.index] = [vi(Gi.cumulative, Zi)], Si(Gi.cumulative) || (Gi.base = yi), Gi.touched = ti.stacking.stacksTouched, 0 < xi.index && this.singleStacks === !1 && (Gi.points[yi][0] = Gi.points[this.index + "," + qi + ",0"][0])) : Gi.points[yi] = Gi.points[this.index] = null, oi === "percent" ? (Hi = Hi ? si : rs, Bi && ni[Hi] && ni[Hi][qi] ? (Hi = ni[Hi][qi], Gi.total = Hi.total = Math.max(Hi.total, Gi.total) + Math.abs(ai) || 0) : Gi.total = Ci(Gi.total + (Math.abs(ai) || 0))) : oi === "group" ? (Di(ai) && (ai = ai[0]), ai !== null && (Gi.total = (Gi.total || 0) + 1)) : Gi.total = Ci(Gi.total + (ai || 0)), Gi.cumulative = oi === "group" ? (Gi.total || 1) - 1 : Ci(vi(Gi.cumulative, Zi) + (ai || 0)), ai !== null && (Gi.points[yi].push(Gi.cumulative), Oi[Ri] = Gi.cumulative, Gi.hasValidPoints = !0);
          }
          oi === "percent" && (ti.stacking.usePercentage = !0), oi !== "group" && (this.stackedYData = Oi), ti.stacking.oldStacks = {};
        }
      }
      const { getDeferredAnimation: Ni } = hi, { series: { prototype: gi } } = zi, { addEvent: ki, correctFloat: Ci, defined: Si, destroyObjectProperties: Ti, fireEvent: Mi, isArray: Di, isNumber: ci, objectEach: pi, pick: vi } = Yi;
      class ui {
        constructor(ti) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = ti;
        }
        buildStacks() {
          const ti = this.axis, oi = ti.series, di = ti.options.reversedStacks, mi = oi.length;
          let Oi, li;
          for (this.usePercentage = !1, li = mi; li--; )
            Oi = oi[di ? li : mi - li - 1], Oi.setStackedPoints(), Oi.setGroupedPoints();
          for (li = 0; li < mi; li++)
            oi[li].modifyStacks();
          Mi(ti, "afterBuildStacks");
        }
        cleanStacks() {
          let ti;
          this.oldStacks && (ti = this.stacks = this.oldStacks), pi(ti, function(oi) {
            pi(oi, function(di) {
              di.cumulative = di.total;
            });
          });
        }
        resetStacks() {
          pi(this.stacks, (ti) => {
            pi(ti, (oi, di) => {
              ci(oi.touched) && oi.touched < this.stacksTouched ? (oi.destroy(), delete ti[di]) : (oi.total = null, oi.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          var ti = this.axis;
          const oi = ti.chart, di = oi.renderer, mi = this.stacks;
          ti = Ni(oi, ti.options.stackLabels && ti.options.stackLabels.animation || !1);
          const Oi = this.stackTotalGroup = this.stackTotalGroup || di.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          Oi.translate(oi.plotLeft, oi.plotTop), pi(mi, function(li) {
            pi(li, function(Li) {
              Li.render(Oi);
            });
          }), Oi.animate({ opacity: 1 }, ti);
        }
      }
      var fi;
      return function(si) {
        const ti = [];
        si.compose = function(oi, di, mi) {
          Yi.pushUnique(ti, oi) && (ki(oi, "init", $i), ki(oi, "destroy", is)), Yi.pushUnique(ti, di) && (di.prototype.getStacks = es), Yi.pushUnique(ti, mi) && (oi = mi.prototype, oi.getStackIndicator = Vi, oi.modifyStacks = _i, oi.percentStacker = bi, oi.setGroupedPoints = Ai, oi.setStackedPoints = ji);
        };
      }(fi || (fi = {})), fi;
    }), ri(
      ii,
      "Series/Line/LineSeries.js",
      [ii["Core/Series/Series.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]],
      function(hi, wi, zi) {
        const { defined: Ki, merge: Yi } = zi;
        class es extends hi {
          constructor() {
            super(...arguments), this.points = this.options = this.data = void 0;
          }
          drawGraph() {
            const $i = this, Vi = this.options, _i = (this.gappedPath || this.getGraphPath).call(this), bi = this.chart.styledMode;
            let Ai = [["graph", "highcharts-graph"]];
            bi || Ai[0].push(Vi.lineColor || this.color || "#cccccc", Vi.dashStyle), Ai = $i.getZonesGraphs(Ai), Ai.forEach(function(ji, Ni) {
              var gi = ji[0];
              let ki = $i[gi];
              const Ci = ki ? "animate" : "attr";
              ki ? (ki.endX = $i.preventGraphAnimation ? null : _i.xMap, ki.animate({ d: _i })) : _i.length && ($i[gi] = ki = $i.chart.renderer.path(_i).addClass(ji[1]).attr({ zIndex: 1 }).add($i.group)), ki && !bi && (gi = { stroke: ji[2], "stroke-width": Vi.lineWidth || 0, fill: $i.fillGraph && $i.color || "none" }, ji[3] ? gi.dashstyle = ji[3] : Vi.linecap !== "square" && (gi["stroke-linecap"] = gi["stroke-linejoin"] = "round"), ki[Ci](gi).shadow(2 > Ni && Vi.shadow)), ki && (ki.startX = _i.xMap, ki.isArea = _i.isArea);
            });
          }
          getGraphPath($i, Vi, _i) {
            const bi = this, Ai = bi.options, ji = [], Ni = [];
            let gi, ki = Ai.step;
            $i = $i || bi.points;
            const Ci = $i.reversed;
            return Ci && $i.reverse(), (ki = { right: 1, center: 2 }[ki] || ki && 3) && Ci && (ki = 4 - ki), $i = this.getValidPoints($i, !1, !(Ai.connectNulls && !Vi && !_i)), $i.forEach(function(Si, Ti) {
              const Mi = Si.plotX, Di = Si.plotY, ci = $i[Ti - 1], pi = Si.isNull || typeof Di != "number";
              (Si.leftCliff || ci && ci.rightCliff) && !_i && (gi = !0), pi && !Ki(Vi) && 0 < Ti ? gi = !Ai.connectNulls : pi && !Vi ? gi = !0 : (Ti === 0 || gi ? Ti = [["M", Si.plotX, Si.plotY]] : bi.getPointSpline ? Ti = [bi.getPointSpline($i, Si, Ti)] : ki ? (Ti = ki === 1 ? [["L", ci.plotX, Di]] : ki === 2 ? [["L", (ci.plotX + Mi) / 2, ci.plotY], ["L", (ci.plotX + Mi) / 2, Di]] : [["L", Mi, ci.plotY]], Ti.push(["L", Mi, Di])) : Ti = [["L", Mi, Di]], Ni.push(Si.x), ki && (Ni.push(Si.x), ki === 2 && Ni.push(Si.x)), ji.push.apply(ji, Ti), gi = !1);
            }), ji.xMap = Ni, bi.graphPath = ji;
          }
          getZonesGraphs($i) {
            return this.zones.forEach(function(Vi, _i) {
              _i = ["zone-graph-" + _i, "highcharts-graph highcharts-zone-graph-" + _i + " " + (Vi.className || "")], this.chart.styledMode || _i.push(Vi.color || this.color, Vi.dashStyle || this.options.dashStyle), $i.push(_i);
            }, this), $i;
          }
        }
        return es.defaultOptions = Yi(hi.defaultOptions, { legendSymbol: "lineMarker" }), wi.registerSeriesType("line", es), es;
      }
    ), ri(ii, "Series/Area/AreaSeries.js", [
      ii["Core/Color/Color.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi) {
      const { seriesTypes: { line: Ki } } = wi, { extend: Yi, merge: es, objectEach: is, pick: $i } = zi;
      class Vi extends Ki {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          const bi = this, Ai = this.areaPath, ji = this.options, Ni = [["area", "highcharts-area", this.color, ji.fillColor]];
          this.zones.forEach(function(gi, ki) {
            Ni.push(["zone-area-" + ki, "highcharts-area highcharts-zone-area-" + ki + " " + gi.className, gi.color || bi.color, gi.fillColor || ji.fillColor]);
          }), Ni.forEach(function(gi) {
            const ki = gi[0], Ci = {};
            let Si = bi[ki];
            const Ti = Si ? "animate" : "attr";
            Si ? (Si.endX = bi.preventGraphAnimation ? null : Ai.xMap, Si.animate({ d: Ai })) : (Ci.zIndex = 0, Si = bi[ki] = bi.chart.renderer.path(Ai).addClass(gi[1]).add(bi.group), Si.isArea = !0), bi.chart.styledMode || (gi[3] ? Ci.fill = gi[3] : (Ci.fill = gi[2], Ci["fill-opacity"] = $i(ji.fillOpacity, 0.75))), Si[Ti](Ci), Si.startX = Ai.xMap, Si.shiftUnit = ji.step ? 2 : 1;
          });
        }
        getGraphPath(bi) {
          var Ai = Ki.prototype.getGraphPath, ji = this.options;
          const Ni = ji.stacking, gi = this.yAxis, ki = [], Ci = [], Si = this.index, Ti = gi.stacking.stacks[this.stackKey], Mi = ji.threshold, Di = Math.round(gi.getThreshold(ji.threshold));
          ji = $i(ji.connectNulls, Ni === "percent");
          var ci = function(fi, si, ti) {
            var oi = bi[fi];
            fi = Ni && Ti[oi.x].points[Si];
            const di = oi[ti + "Null"] || 0;
            ti = oi[ti + "Cliff"] || 0;
            let mi, Oi;
            oi = !0, ti || di ? (mi = (di ? fi[0] : fi[1]) + ti, Oi = fi[0] + ti, oi = !!di) : !Ni && bi[si] && bi[si].isNull && (mi = Oi = Mi), typeof mi < "u" && (Ci.push({ plotX: pi, plotY: mi === null ? Di : gi.getThreshold(mi), isNull: oi, isCliff: !0 }), ki.push({ plotX: pi, plotY: Oi === null ? Di : gi.getThreshold(Oi), doCurve: !1 }));
          };
          let pi;
          bi = bi || this.points, Ni && (bi = this.getStackPoints(bi));
          for (let fi = 0, si = bi.length; fi < si; ++fi) {
            Ni || (bi[fi].leftCliff = bi[fi].rightCliff = bi[fi].leftNull = bi[fi].rightNull = void 0);
            var vi = bi[fi].isNull;
            pi = $i(bi[fi].rectPlotX, bi[fi].plotX);
            var ui = Ni ? $i(bi[fi].yBottom, Di) : Di;
            (!vi || ji) && (ji || ci(fi, fi - 1, "left"), vi && !Ni && ji || (Ci.push(bi[fi]), ki.push({ x: fi, plotX: pi, plotY: ui })), ji || ci(fi, fi + 1, "right"));
          }
          return ci = Ai.call(this, Ci, !0, !0), ki.reversed = !0, vi = Ai.call(this, ki, !0, !0), (ui = vi[0]) && ui[0] === "M" && (vi[0] = ["L", ui[1], ui[2]]), vi = ci.concat(vi), vi.length && vi.push(["Z"]), Ai = Ai.call(this, Ci, !1, ji), vi.xMap = ci.xMap, this.areaPath = vi, Ai;
        }
        getStackPoints(bi) {
          const Ai = this, ji = [], Ni = [], gi = this.xAxis, ki = this.yAxis, Ci = ki.stacking.stacks[this.stackKey], Si = {}, Ti = ki.series, Mi = Ti.length, Di = ki.options.reversedStacks ? 1 : -1, ci = Ti.indexOf(Ai);
          if (bi = bi || this.points, this.options.stacking) {
            for (let vi = 0; vi < bi.length; vi++)
              bi[vi].leftNull = bi[vi].rightNull = void 0, Si[bi[vi].x] = bi[vi];
            is(Ci, function(vi, ui) {
              vi.total !== null && Ni.push(ui);
            }), Ni.sort(function(vi, ui) {
              return vi - ui;
            });
            const pi = Ti.map((vi) => vi.visible);
            Ni.forEach(function(vi, ui) {
              let fi = 0, si, ti;
              if (Si[vi] && !Si[vi].isNull)
                ji.push(Si[vi]), [-1, 1].forEach(function(oi) {
                  const di = oi === 1 ? "rightNull" : "leftNull", mi = Ci[Ni[ui + oi]];
                  let Oi = 0;
                  if (mi) {
                    let li = ci;
                    for (; 0 <= li && li < Mi; ) {
                      const Li = Ti[li].index;
                      si = mi.points[Li], si || (Li === Ai.index ? Si[vi][di] = !0 : pi[li] && (ti = Ci[vi].points[Li]) && (Oi -= ti[1] - ti[0])), li += Di;
                    }
                  }
                  Si[vi][oi === 1 ? "rightCliff" : "leftCliff"] = Oi;
                });
              else {
                let oi = ci;
                for (; 0 <= oi && oi < Mi; ) {
                  if (si = Ci[vi].points[Ti[oi].index]) {
                    fi = si[1];
                    break;
                  }
                  oi += Di;
                }
                fi = $i(fi, 0), fi = ki.translate(fi, 0, 1, 0, 1), ji.push({ isNull: !0, plotX: gi.translate(vi, 0, 0, 0, 1), x: vi, plotY: fi, yBottom: fi });
              }
            });
          }
          return ji;
        }
      }
      return Vi.defaultOptions = es(Ki.defaultOptions, { threshold: 0, legendSymbol: "rectangle" }), Yi(Vi.prototype, { singleStacks: !1 }), wi.registerSeriesType("area", Vi), Vi;
    }), ri(ii, "Series/Spline/SplineSeries.js", [ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      const { line: zi } = hi.seriesTypes, { merge: Ki, pick: Yi } = wi;
      class es extends zi {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
        getPointSpline($i, Vi, _i) {
          const bi = Vi.plotX || 0, Ai = Vi.plotY || 0, ji = $i[_i - 1];
          _i = $i[_i + 1];
          let Ni, gi, ki;
          if (ji && !ji.isNull && ji.doCurve !== !1 && !Vi.isCliff && _i && !_i.isNull && _i.doCurve !== !1 && !Vi.isCliff) {
            $i = ji.plotY || 0;
            var Ci = _i.plotX || 0;
            _i = _i.plotY || 0;
            let Si = 0;
            Ni = (1.5 * bi + (ji.plotX || 0)) / 2.5, gi = (1.5 * Ai + $i) / 2.5, Ci = (1.5 * bi + Ci) / 2.5, ki = (1.5 * Ai + _i) / 2.5, Ci !== Ni && (Si = (ki - gi) * (Ci - bi) / (Ci - Ni) + Ai - ki), gi += Si, ki += Si, gi > $i && gi > Ai ? (gi = Math.max($i, Ai), ki = 2 * Ai - gi) : gi < $i && gi < Ai && (gi = Math.min($i, Ai), ki = 2 * Ai - gi), ki > _i && ki > Ai ? (ki = Math.max(_i, Ai), gi = 2 * Ai - ki) : ki < _i && ki < Ai && (ki = Math.min(_i, Ai), gi = 2 * Ai - ki), Vi.rightContX = Ci, Vi.rightContY = ki;
          }
          return Vi = ["C", Yi(ji.rightContX, ji.plotX, 0), Yi(ji.rightContY, ji.plotY, 0), Yi(Ni, bi, 0), Yi(gi, Ai, 0), bi, Ai], ji.rightContX = ji.rightContY = void 0, Vi;
        }
      }
      return es.defaultOptions = Ki(zi.defaultOptions), hi.registerSeriesType(
        "spline",
        es
      ), es;
    }), ri(ii, "Series/AreaSpline/AreaSplineSeries.js", [ii["Series/Spline/SplineSeries.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { area: Ki, area: { prototype: Yi } } = wi.seriesTypes, { extend: es, merge: is } = zi;
      class $i extends hi {
        constructor() {
          super(...arguments), this.options = this.points = this.data = void 0;
        }
      }
      return $i.defaultOptions = is(hi.defaultOptions, Ki.defaultOptions), es($i.prototype, { getGraphPath: Yi.getGraphPath, getStackPoints: Yi.getStackPoints, drawGraph: Yi.drawGraph }), wi.registerSeriesType(
        "areaspline",
        $i
      ), $i;
    }), ri(ii, "Series/Column/ColumnSeriesDefaults.js", [], function() {
      return { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
    }), ri(ii, "Series/Column/ColumnSeries.js", [
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Color/Color.js"],
      ii["Series/Column/ColumnSeriesDefaults.js"],
      ii["Core/Globals.js"],
      ii["Core/Series/Series.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Core/Utilities.js"]
    ], function(hi, wi, zi, Ki, Yi, es, is) {
      const { animObject: $i } = hi, { parse: Vi } = wi, { hasTouch: _i, noop: bi } = Ki, { clamp: Ai, defined: ji, extend: Ni, fireEvent: gi, isArray: ki, isNumber: Ci, merge: Si, pick: Ti, objectEach: Mi } = is;
      class Di extends Yi {
        constructor() {
          super(...arguments), this.points = this.options = this.group = this.data = this.borderWidth = void 0;
        }
        animate(pi) {
          const vi = this, ui = this.yAxis, fi = ui.pos, si = vi.options, ti = this.chart.inverted, oi = {}, di = ti ? "translateX" : "translateY";
          let mi;
          pi ? (oi.scaleY = 1e-3, pi = Ai(ui.toPixels(si.threshold), fi, fi + ui.len), ti ? oi.translateX = pi - ui.len : oi.translateY = pi, vi.clipBox && vi.setClip(), vi.group.attr(oi)) : (mi = Number(vi.group.attr(di)), vi.group.animate({ scaleY: 1 }, Ni($i(vi.options.animation), { step: function(Oi, li) {
            vi.group && (oi[di] = mi + li.pos * (fi - mi), vi.group.attr(oi));
          } })));
        }
        init(pi, vi) {
          super.init.apply(this, arguments);
          const ui = this;
          pi = ui.chart, pi.hasRendered && pi.series.forEach(function(fi) {
            fi.type === ui.type && (fi.isDirty = !0);
          });
        }
        getColumnMetrics() {
          const pi = this;
          var vi = pi.options;
          const ui = pi.xAxis, fi = pi.yAxis;
          var si = ui.options.reversedStacks;
          si = ui.reversed && !si || !ui.reversed && si;
          const ti = {};
          let oi, di = 0;
          vi.grouping === !1 ? di = 1 : pi.chart.series.forEach(function(Li) {
            const Ui = Li.yAxis, Zi = Li.options;
            let rs;
            Li.type !== pi.type || !Li.visible && pi.chart.options.chart.ignoreHiddenSeries || fi.len !== Ui.len || fi.pos !== Ui.pos || (Zi.stacking && Zi.stacking !== "group" ? (oi = Li.stackKey, typeof ti[oi] > "u" && (ti[oi] = di++), rs = ti[oi]) : Zi.grouping !== !1 && (rs = di++), Li.columnIndex = rs);
          });
          const mi = Math.min(Math.abs(ui.transA) * (ui.ordinal && ui.ordinal.slope || vi.pointRange || ui.closestPointRange || ui.tickInterval || 1), ui.len), Oi = mi * vi.groupPadding, li = (mi - 2 * Oi) / (di || 1);
          return vi = Math.min(vi.maxPointWidth || ui.len, Ti(vi.pointWidth, li * (1 - 2 * vi.pointPadding))), pi.columnMetrics = { width: vi, offset: (li - vi) / 2 + (Oi + ((pi.columnIndex || 0) + (si ? 1 : 0)) * li - mi / 2) * (si ? -1 : 1), paddedWidth: li, columnCount: di }, pi.columnMetrics;
        }
        crispCol(pi, vi, ui, fi) {
          var si = this.borderWidth, ti = -(si % 2 ? 0.5 : 0);
          return si = si % 2 ? 0.5 : 1, this.options.crisp && (ui = Math.round(pi + ui) + ti, pi = Math.round(pi) + ti, ui -= pi), fi = Math.round(vi + fi) + si, ti = 0.5 >= Math.abs(vi) && 0.5 < fi, vi = Math.round(vi) + si, fi -= vi, ti && fi && (--vi, fi += 1), { x: pi, y: vi, width: ui, height: fi };
        }
        adjustForMissingColumns(pi, vi, ui, fi) {
          const si = this.options.stacking;
          if (!ui.isNull && 1 < fi.columnCount) {
            const ti = this.yAxis.options.reversedStacks;
            let oi = 0, di = ti ? 0 : -fi.columnCount;
            Mi(this.yAxis.stacking && this.yAxis.stacking.stacks, (mi) => {
              if (typeof ui.x == "number") {
                const Oi = mi[ui.x.toString()];
                Oi && (mi = Oi.points[this.index], si ? (mi && (oi = di), Oi.hasValidPoints && (ti ? di++ : di--)) : ki(mi) && (mi = Object.keys(Oi.points).filter((li) => !li.match(",") && Oi.points[li] && 1 < Oi.points[li].length).map(parseFloat).sort((li, Li) => Li - li), oi = mi.indexOf(this.index), di = mi.length));
              }
            }), pi = (ui.plotX || 0) + ((di - 1) * fi.paddedWidth + vi) / 2 - vi - oi * fi.paddedWidth;
          }
          return pi;
        }
        translate() {
          const pi = this, vi = pi.chart, ui = pi.options;
          var fi = pi.dense = 2 > pi.closestPointRange * pi.xAxis.transA;
          fi = pi.borderWidth = Ti(ui.borderWidth, fi ? 0 : 1);
          const si = pi.xAxis, ti = pi.yAxis, oi = ui.threshold, di = Ti(ui.minPointLength, 5), mi = pi.getColumnMetrics(), Oi = mi.width, li = pi.pointXOffset = mi.offset, Li = pi.dataMin, Ui = pi.dataMax;
          let Zi = pi.barW = Math.max(Oi, 1 + 2 * fi), rs = pi.translatedThreshold = ti.getThreshold(oi);
          vi.inverted && (rs -= 0.5), ui.pointPadding && (Zi = Math.ceil(Zi)), Yi.prototype.translate.apply(pi), pi.points.forEach(function(Bi) {
            const ni = Ti(Bi.yBottom, rs);
            var Pi = 999 + Math.abs(ni), Hi = Bi.plotX || 0;
            Pi = Ai(Bi.plotY, -Pi, ti.len + Pi);
            let Ri = Math.min(Pi, ni), qi = Math.max(Pi, ni) - Ri, ai = Oi, xi = Hi + li, yi = Zi;
            di && Math.abs(qi) < di && (qi = di, Hi = !ti.reversed && !Bi.negative || ti.reversed && Bi.negative, Ci(oi) && Ci(Ui) && Bi.y === oi && Ui <= oi && (ti.min || 0) < oi && (Li !== Ui || (ti.max || 0) <= oi) && (Hi = !Hi, Bi.negative = !Bi.negative), Ri = Math.abs(Ri - rs) > di ? ni - di : rs - (Hi ? di : 0)), ji(Bi.options.pointWidth) && (ai = yi = Math.ceil(Bi.options.pointWidth), xi -= Math.round((ai - Oi) / 2)), ui.centerInCategory && (xi = pi.adjustForMissingColumns(xi, ai, Bi, mi)), Bi.barX = xi, Bi.pointWidth = ai, Bi.tooltipPos = vi.inverted ? [Ai(ti.len + ti.pos - vi.plotLeft - Pi, ti.pos - vi.plotLeft, ti.len + ti.pos - vi.plotLeft), si.len + si.pos - vi.plotTop - xi - yi / 2, qi] : [si.left - vi.plotLeft + xi + yi / 2, Ai(Pi + ti.pos - vi.plotTop, ti.pos - vi.plotTop, ti.len + ti.pos - vi.plotTop), qi], Bi.shapeType = pi.pointClass.prototype.shapeType || "roundedRect", Bi.shapeArgs = pi.crispCol(xi, Bi.isNull ? rs : Ri, yi, Bi.isNull ? 0 : qi);
          }), gi(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(pi, vi) {
          const ui = this.options;
          var fi = this.pointAttrToOptions || {}, si = fi.stroke || "borderColor";
          const ti = fi["stroke-width"] || "borderWidth";
          let oi, di = pi && pi.color || this.color, mi = pi && pi[si] || ui[si] || di;
          fi = pi && pi.options.dashStyle || ui.dashStyle;
          let Oi = pi && pi[ti] || ui[ti] || this[ti] || 0, li = Ti(pi && pi.opacity, ui.opacity, 1);
          return pi && this.zones.length && (oi = pi.getZone(), di = pi.options.color || oi && (oi.color || pi.nonZonedColor) || this.color, oi && (mi = oi.borderColor || mi, fi = oi.dashStyle || fi, Oi = oi.borderWidth || Oi)), vi && pi && (pi = Si(
            ui.states[vi],
            pi.options.states && pi.options.states[vi] || {}
          ), vi = pi.brightness, di = pi.color || typeof vi < "u" && Vi(di).brighten(pi.brightness).get() || di, mi = pi[si] || mi, Oi = pi[ti] || Oi, fi = pi.dashStyle || fi, li = Ti(pi.opacity, li)), si = { fill: di, stroke: mi, "stroke-width": Oi, opacity: li }, fi && (si.dashstyle = fi), si;
        }
        drawPoints(pi = this.points) {
          const vi = this, ui = this.chart, fi = vi.options, si = ui.renderer, ti = fi.animationLimit || 250;
          let oi;
          pi.forEach(function(di) {
            let mi = di.graphic, Oi = !!mi, li = mi && ui.pointCount < ti ? "animate" : "attr";
            Ci(di.plotY) && di.y !== null ? (oi = di.shapeArgs, mi && di.hasNewShapeType() && (mi = mi.destroy()), vi.enabledDataSorting && (di.startXPos = vi.xAxis.reversed ? -(oi && oi.width || 0) : vi.xAxis.width), mi || (di.graphic = mi = si[di.shapeType](oi).add(di.group || vi.group)) && vi.enabledDataSorting && ui.hasRendered && ui.pointCount < ti && (mi.attr({ x: di.startXPos }), Oi = !0, li = "animate"), mi && Oi && mi[li](Si(oi)), ui.styledMode || mi[li](vi.pointAttribs(di, di.selected && "select")).shadow(di.allowShadow !== !1 && fi.shadow), mi && (mi.addClass(di.getClassName(), !0), mi.attr({ visibility: di.visible ? "inherit" : "hidden" }))) : mi && (di.graphic = mi.destroy());
          });
        }
        drawTracker(pi = this.points) {
          const vi = this, ui = vi.chart, fi = ui.pointer, si = function(oi) {
            const di = fi.getPointFromEvent(oi);
            typeof di < "u" && vi.options.enableMouseTracking && (fi.isDirectTouch = !0, di.onMouseOver(oi));
          };
          let ti;
          pi.forEach(function(oi) {
            ti = ki(oi.dataLabels) ? oi.dataLabels : oi.dataLabel ? [oi.dataLabel] : [], oi.graphic && (oi.graphic.element.point = oi), ti.forEach(function(di) {
              di.div ? di.div.point = oi : di.element.point = oi;
            });
          }), vi._hasTracking || (vi.trackerGroups.forEach(function(oi) {
            vi[oi] && (vi[oi].addClass("highcharts-tracker").on("mouseover", si).on(
              "mouseout",
              function(di) {
                fi.onTrackerMouseOut(di);
              }
            ), _i && vi[oi].on("touchstart", si), !ui.styledMode && vi.options.cursor && vi[oi].css({ cursor: vi.options.cursor }));
          }), vi._hasTracking = !0), gi(this, "afterDrawTracker");
        }
        remove() {
          const pi = this, vi = pi.chart;
          vi.hasRendered && vi.series.forEach(function(ui) {
            ui.type === pi.type && (ui.isDirty = !0);
          }), Yi.prototype.remove.apply(pi, arguments);
        }
      }
      return Di.defaultOptions = Si(Yi.defaultOptions, zi), Ni(Di.prototype, { cropShoulder: 0, directTouch: !0, getSymbol: bi, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), es.registerSeriesType(
        "column",
        Di
      ), Di;
    }), ri(ii, "Core/Series/DataLabel.js", [ii["Core/Animation/AnimationUtilities.js"], ii["Core/Templating.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { getDeferredAnimation: Ki } = hi, { format: Yi } = wi, { defined: es, extend: is, fireEvent: $i, isArray: Vi, isString: _i, merge: bi, objectEach: Ai, pick: ji, splat: Ni } = zi;
      var gi;
      return function(ki) {
        function Ci(fi, si, ti, oi, di) {
          const mi = this.chart;
          var Oi = this.isCartesian && mi.inverted;
          const li = this.enabledDataSorting;
          var Li = fi.plotX, Ui = fi.plotY;
          const Zi = ti.rotation;
          var rs = ti.align;
          Ui = es(Li) && es(Ui) && mi.isInsidePlot(
            Li,
            Math.round(Ui),
            { inverted: Oi, paneCoordinates: !0, series: this }
          );
          let Bi = ji(ti.overflow, li ? "none" : "justify") === "justify";
          if (Oi = this.visible && fi.visible !== !1 && es(Li) && (fi.series.forceDL || li && !Bi || Ui || ji(ti.inside, !!this.options.stacking) && oi && mi.isInsidePlot(Li, Oi ? oi.x + 1 : oi.y + oi.height - 1, { inverted: Oi, paneCoordinates: !0, series: this })), Li = fi.pos(), Oi && Li) {
            Zi && si.attr({ align: rs }), rs = si.getBBox(!0);
            var ni = [0, 0], Pi = mi.renderer.fontMetrics(si).b;
            if (oi = is({ x: Li[0], y: Math.round(Li[1]), width: 0, height: 0 }, oi), is(ti, { width: rs.width, height: rs.height }), Zi ? (Bi = !1, ni = mi.renderer.rotCorr(Pi, Zi), Pi = { x: oi.x + (ti.x || 0) + oi.width / 2 + ni.x, y: oi.y + (ti.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[ti.verticalAlign] * oi.height }, ni = [rs.x - Number(si.attr("x")), rs.y - Number(si.attr("y"))], li && this.xAxis && !Bi && this.setDataLabelStartPos(fi, si, di, Ui, Pi), si[di ? "attr" : "animate"](Pi)) : (li && this.xAxis && !Bi && this.setDataLabelStartPos(fi, si, di, Ui, oi), si.align(ti, void 0, oi), Pi = si.alignAttr), Bi && 0 <= oi.height)
              this.justifyDataLabel(si, ti, Pi, rs, oi, di);
            else if (ji(ti.crop, !0)) {
              let { x: Hi, y: Ri } = Pi;
              Hi += ni[0], Ri += ni[1], Oi = mi.isInsidePlot(Hi, Ri, {
                paneCoordinates: !0,
                series: this
              }) && mi.isInsidePlot(Hi + rs.width, Ri + rs.height, { paneCoordinates: !0, series: this });
            }
            ti.shape && !Zi && si[di ? "attr" : "animate"]({ anchorX: Li[0], anchorY: Li[1] });
          }
          di && li && (si.placed = !1), Oi || li && !Bi ? si.show() : (si.hide(), si.placed = !1);
        }
        function Si(fi, si) {
          var ti = si.filter;
          return ti ? (si = ti.operator, fi = fi[ti.property], ti = ti.value, si === ">" && fi > ti || si === "<" && fi < ti || si === ">=" && fi >= ti || si === "<=" && fi <= ti || si === "==" && fi == ti || si === "===" && fi === ti) : !0;
        }
        function Ti() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
        }
        function Mi(fi) {
          const si = this.hasRendered || 0, ti = this.initDataLabelsGroup().attr({ opacity: +si });
          return !si && ti && (this.visible && ti.show(), this.options.animation ? ti.animate({ opacity: 1 }, fi) : ti.attr({ opacity: 1 })), ti;
        }
        function Di(fi = this.points) {
          var si, ti;
          const oi = this, di = oi.chart, mi = oi.options, Oi = di.renderer, { backgroundColor: li, plotBackgroundColor: Li } = di.options.chart, Ui = di.options.plotOptions, Zi = Oi.getContrast(_i(Li) && Li || _i(li) && li || "#000000");
          let rs = mi.dataLabels, Bi, ni;
          var Pi = Ni(rs)[0];
          const Hi = Pi.animation;
          Pi = Pi.defer ? Ki(di, Hi, oi) : { defer: 0, duration: 0 }, rs = pi(pi((si = Ui == null ? void 0 : Ui.series) === null || si === void 0 ? void 0 : si.dataLabels, (ti = Ui == null ? void 0 : Ui[oi.type]) === null || ti === void 0 ? void 0 : ti.dataLabels), rs), $i(this, "drawDataLabels"), (Vi(rs) || rs.enabled || oi._hasPointLabels) && (ni = this.initDataLabels(Pi), fi.forEach((Ri) => {
            var qi;
            const ai = Ri.dataLabels || [];
            for (Bi = Ni(pi(rs, Ri.dlOptions || ((qi = Ri.options) === null || qi === void 0 ? void 0 : qi.dataLabels))), Bi.forEach((xi, yi) => {
              var Gi, Xi = xi.enabled && (!Ri.isNull || Ri.dataLabelOnNull) && Si(Ri, xi);
              const Wi = Ri.connectors ? Ri.connectors[yi] : Ri.connector, ts = xi.style || {};
              let ss = {}, os = ai[yi], ns = !os;
              const ls = ji(xi.distance, Ri.labelDistance);
              if (Xi) {
                var Ii = ji(xi[Ri.formatPrefix + "Format"], xi.format), Ei = Ri.getLabelConfig();
                if (Ei = es(Ii) ? Yi(Ii, Ei, di) : (xi[Ri.formatPrefix + "Formatter"] || xi.formatter).call(Ei, xi), Ii = xi.rotation, di.styledMode || (ts.color = ji(xi.color, ts.color, _i(oi.color) ? oi.color : void 0, "#000000"), ts.color === "contrast" ? (Ri.contrastColor = Oi.getContrast(Ri.color || oi.color), ts.color = !es(ls) && xi.inside || 0 > (ls || 0) || mi.stacking ? Ri.contrastColor : Zi) : delete Ri.contrastColor, mi.cursor && (ts.cursor = mi.cursor)), ss = { r: xi.borderRadius || 0, rotation: Ii, padding: xi.padding, zIndex: 1 }, !di.styledMode) {
                  const { backgroundColor: Ji, borderColor: Fi } = xi;
                  ss.fill = Ji === "auto" ? Ri.color : Ji, ss.stroke = Fi === "auto" ? Ri.color : Fi, ss["stroke-width"] = xi.borderWidth;
                }
                Ai(ss, (Ji, Fi) => {
                  typeof Ji > "u" && delete ss[Fi];
                });
              }
              !os || Xi && es(Ei) && !!os.div == !!xi.useHTML && (os.rotation && xi.rotation || os.rotation === xi.rotation) || (os = void 0, ns = !0, Wi && Ri.connector && (Ri.connector = Ri.connector.destroy(), Ri.connectors && (Ri.connectors.length === 1 ? delete Ri.connectors : delete Ri.connectors[yi]))), Xi && es(Ei) && (os ? ss.text = Ei : (os = Ii ? Oi.text(Ei, 0, 0, xi.useHTML).addClass("highcharts-data-label") : Oi.label(Ei, 0, 0, xi.shape, void 0, void 0, xi.useHTML, void 0, "data-label")) && os.addClass(" highcharts-data-label-color-" + Ri.colorIndex + " " + (xi.className || "") + (xi.useHTML ? " highcharts-tracker" : "")), os && (os.options = xi, os.attr(ss), di.styledMode || os.css(ts).shadow(xi.shadow), (Xi = xi[Ri.formatPrefix + "TextPath"] || xi.textPath) && !xi.useHTML && (os.setTextPath(((Gi = Ri.getDataLabelPath) === null || Gi === void 0 ? void 0 : Gi.call(Ri, os)) || Ri.graphic, Xi), Ri.dataLabelPath && !Xi.enabled && (Ri.dataLabelPath = Ri.dataLabelPath.destroy())), os.added || os.add(ni), oi.alignDataLabel(Ri, os, xi, void 0, ns), os.isActive = !0, ai[yi] && ai[yi] !== os && ai[yi].destroy(), ai[yi] = os));
            }), qi = ai.length; qi--; )
              ai[qi].isActive ? ai[qi].isActive = !1 : (ai[qi].destroy(), ai.splice(qi, 1));
            Ri.dataLabel = ai[0], Ri.dataLabels = ai;
          })), $i(this, "afterDrawDataLabels");
        }
        function ci(fi, si, ti, oi, di, mi) {
          const Oi = this.chart, li = si.align, Li = si.verticalAlign, Ui = fi.box ? 0 : fi.padding || 0;
          let { x: Zi = 0, y: rs = 0 } = si, Bi, ni;
          return Bi = (ti.x || 0) + Ui, 0 > Bi && (li === "right" && 0 <= Zi ? (si.align = "left", si.inside = !0) : Zi -= Bi, ni = !0), Bi = (ti.x || 0) + oi.width - Ui, Bi > Oi.plotWidth && (li === "left" && 0 >= Zi ? (si.align = "right", si.inside = !0) : Zi += Oi.plotWidth - Bi, ni = !0), Bi = ti.y + Ui, 0 > Bi && (Li === "bottom" && 0 <= rs ? (si.verticalAlign = "top", si.inside = !0) : rs -= Bi, ni = !0), Bi = (ti.y || 0) + oi.height - Ui, Bi > Oi.plotHeight && (Li === "top" && 0 >= rs ? (si.verticalAlign = "bottom", si.inside = !0) : rs += Oi.plotHeight - Bi, ni = !0), ni && (si.x = Zi, si.y = rs, fi.placed = !mi, fi.align(si, void 0, di)), ni;
        }
        function pi(fi, si) {
          let ti = [], oi;
          if (Vi(fi) && !Vi(si))
            ti = fi.map(function(di) {
              return bi(di, si);
            });
          else if (Vi(si) && !Vi(fi))
            ti = si.map(function(di) {
              return bi(fi, di);
            });
          else if (!Vi(fi) && !Vi(si))
            ti = bi(fi, si);
          else if (Vi(fi) && Vi(si))
            for (oi = Math.max(fi.length, si.length); oi--; )
              ti[oi] = bi(fi[oi], si[oi]);
          return ti;
        }
        function vi(fi, si, ti, oi, di) {
          const mi = this.chart, Oi = mi.inverted, li = this.xAxis, Li = li.reversed, Ui = Oi ? si.height / 2 : si.width / 2;
          fi = (fi = fi.pointWidth) ? fi / 2 : 0, si.startXPos = Oi ? di.x : Li ? -Ui - fi : li.width - Ui + fi, si.startYPos = Oi ? Li ? this.yAxis.height - Ui + fi : -Ui - fi : di.y, oi ? si.visibility === "hidden" && (si.show(), si.attr({ opacity: 0 }).animate({ opacity: 1 })) : si.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, si.hide), mi.hasRendered && (ti && si.attr({ x: si.startXPos, y: si.startYPos }), si.placed = !0);
        }
        const ui = [];
        ki.compose = function(fi) {
          zi.pushUnique(ui, fi) && (fi = fi.prototype, fi.initDataLabelsGroup = Ti, fi.initDataLabels = Mi, fi.alignDataLabel = Ci, fi.drawDataLabels = Di, fi.justifyDataLabel = ci, fi.setDataLabelStartPos = vi);
        };
      }(gi || (gi = {})), gi;
    }), ri(ii, "Series/Column/ColumnDataLabel.js", [ii["Core/Series/DataLabel.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { series: Ki } = wi, { merge: Yi, pick: es } = zi;
      var is;
      return function($i) {
        function Vi(bi, Ai, ji, Ni, gi) {
          let ki = this.chart.inverted;
          var Ci = bi.series;
          let Si = (Ci.xAxis ? Ci.xAxis.len : this.chart.plotSizeX) || 0;
          Ci = (Ci.yAxis ? Ci.yAxis.len : this.chart.plotSizeY) || 0;
          var Ti = bi.dlBox || bi.shapeArgs;
          let Mi = es(bi.below, bi.plotY > es(this.translatedThreshold, Ci)), Di = es(ji.inside, !!this.options.stacking);
          Ti && (Ni = Yi(Ti), 0 > Ni.y && (Ni.height += Ni.y, Ni.y = 0), Ti = Ni.y + Ni.height - Ci, 0 < Ti && Ti < Ni.height && (Ni.height -= Ti), ki && (Ni = { x: Ci - Ni.y - Ni.height, y: Si - Ni.x - Ni.width, width: Ni.height, height: Ni.width }), Di || (ki ? (Ni.x += Mi ? 0 : Ni.width, Ni.width = 0) : (Ni.y += Mi ? Ni.height : 0, Ni.height = 0))), ji.align = es(ji.align, !ki || Di ? "center" : Mi ? "right" : "left"), ji.verticalAlign = es(ji.verticalAlign, ki || Di ? "middle" : Mi ? "top" : "bottom"), Ki.prototype.alignDataLabel.call(this, bi, Ai, ji, Ni, gi), ji.inside && bi.contrastColor && Ai.css({ color: bi.contrastColor });
        }
        const _i = [];
        $i.compose = function(bi) {
          hi.compose(Ki), zi.pushUnique(_i, bi) && (bi.prototype.alignDataLabel = Vi);
        };
      }(is || (is = {})), is;
    }), ri(ii, "Series/Bar/BarSeries.js", [ii["Series/Column/ColumnSeries.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { extend: Ki, merge: Yi } = zi;
      class es extends hi {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
      }
      return es.defaultOptions = Yi(hi.defaultOptions, {}), Ki(es.prototype, { inverted: !0 }), wi.registerSeriesType("bar", es), es;
    }), ri(ii, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
      return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
    }), ri(
      ii,
      "Series/Scatter/ScatterSeries.js",
      [ii["Series/Scatter/ScatterSeriesDefaults.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]],
      function(hi, wi, zi) {
        const { column: Ki, line: Yi } = wi.seriesTypes, { addEvent: es, extend: is, merge: $i } = zi;
        class Vi extends Yi {
          constructor() {
            super(...arguments), this.points = this.options = this.data = void 0;
          }
          applyJitter() {
            const bi = this, Ai = this.options.jitter, ji = this.points.length;
            Ai && this.points.forEach(function(Ni, gi) {
              ["x", "y"].forEach(function(ki, Ci) {
                let Si = "plot" + ki.toUpperCase(), Ti, Mi;
                if (Ai[ki] && !Ni.isNull) {
                  var Di = bi[ki + "Axis"];
                  Mi = Ai[ki] * Di.transA, Di && !Di.isLog && (Ti = Math.max(0, Ni[Si] - Mi), Di = Math.min(Di.len, Ni[Si] + Mi), Ci = 1e4 * Math.sin(gi + Ci * ji), Ci -= Math.floor(Ci), Ni[Si] = Ti + (Di - Ti) * Ci, ki === "x" && (Ni.clientX = Ni.plotX));
                }
              });
            });
          }
          drawGraph() {
            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
          }
        }
        return Vi.defaultOptions = $i(Yi.defaultOptions, hi), is(Vi.prototype, { drawTracker: Ki.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }), es(Vi, "afterTranslate", function() {
          this.applyJitter();
        }), wi.registerSeriesType("scatter", Vi), Vi;
      }
    ), ri(ii, "Series/CenteredUtilities.js", [ii["Core/Globals.js"], ii["Core/Series/Series.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { deg2rad: Ki } = hi, { fireEvent: Yi, isNumber: es, pick: is, relativeLength: $i } = zi;
      var Vi;
      return function(_i) {
        _i.getCenter = function() {
          var bi = this.options, Ai = this.chart;
          const ji = 2 * (bi.slicedOffset || 0), Ni = Ai.plotWidth - 2 * ji, gi = Ai.plotHeight - 2 * ji;
          var ki = bi.center;
          const Ci = Math.min(Ni, gi), Si = bi.thickness;
          var Ti = bi.size;
          let Mi = bi.innerSize || 0;
          for (typeof Ti == "string" && (Ti = parseFloat(Ti)), typeof Mi == "string" && (Mi = parseFloat(Mi)), bi = [is(ki[0], "50%"), is(ki[1], "50%"), is(Ti && 0 > Ti ? void 0 : bi.size, "100%"), is(Mi && 0 > Mi ? void 0 : bi.innerSize || 0, "0%")], !Ai.angular || this instanceof wi || (bi[3] = 0), ki = 0; 4 > ki; ++ki)
            Ti = bi[ki], Ai = 2 > ki || ki === 2 && /%$/.test(Ti), bi[ki] = $i(Ti, [Ni, gi, Ci, bi[2]][ki]) + (Ai ? ji : 0);
          return bi[3] > bi[2] && (bi[3] = bi[2]), es(Si) && 2 * Si < bi[2] && 0 < Si && (bi[3] = bi[2] - 2 * Si), Yi(this, "afterGetCenter", { positions: bi }), bi;
        }, _i.getStartAndEndRadians = function(bi, Ai) {
          return bi = es(bi) ? bi : 0, Ai = es(Ai) && Ai > bi && 360 > Ai - bi ? Ai : bi + 360, { start: Ki * (bi + -90), end: Ki * (Ai + -90) };
        };
      }(Vi || (Vi = {})), Vi;
    }), ri(ii, "Series/Pie/PiePoint.js", [ii["Core/Animation/AnimationUtilities.js"], ii["Core/Series/Point.js"], ii["Core/Utilities.js"]], function(hi, wi, zi) {
      const { setAnimation: Ki } = hi, { addEvent: Yi, defined: es, extend: is, isNumber: $i, pick: Vi, relativeLength: _i } = zi;
      class bi extends wi {
        constructor() {
          super(...arguments), this.series = this.options = this.labelDistance = void 0;
        }
        getConnectorPath() {
          const ji = this.labelPosition, Ni = this.series.options.dataLabels, gi = this.connectorShapes;
          let ki = Ni.connectorShape;
          return gi[ki] && (ki = gi[ki]), ki.call(
            this,
            { x: ji.computed.x, y: ji.computed.y, alignment: ji.alignment },
            ji.connectorPosition,
            Ni
          );
        }
        getTranslate() {
          return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
        }
        haloPath(ji) {
          const Ni = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(Ni.x, Ni.y, Ni.r + ji, Ni.r + ji, { innerR: Ni.r - 1, start: Ni.start, end: Ni.end, borderRadius: Ni.borderRadius });
        }
        init() {
          super.init.apply(this, arguments), this.name = Vi(this.name, "Slice");
          const ji = (Ni) => {
            this.slice(Ni.type === "select");
          };
          return Yi(this, "select", ji), Yi(
            this,
            "unselect",
            ji
          ), this;
        }
        isValid() {
          return $i(this.y) && 0 <= this.y;
        }
        setVisible(ji, Ni) {
          const gi = this.series, ki = gi.chart, Ci = gi.options.ignoreHiddenPoint;
          Ni = Vi(Ni, Ci), ji !== this.visible && (this.visible = this.options.visible = ji = typeof ji > "u" ? !this.visible : ji, gi.options.data[gi.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector"].forEach((Si) => {
            this[Si] && this[Si][ji ? "show" : "hide"](ji);
          }), this.legendItem && ki.legend.colorizeItem(this, ji), ji || this.state !== "hover" || this.setState(""), Ci && (gi.isDirty = !0), Ni && ki.redraw());
        }
        slice(ji, Ni, gi) {
          const ki = this.series;
          Ki(gi, ki.chart), Vi(Ni, !0), this.sliced = this.options.sliced = es(ji) ? ji : !this.sliced, ki.options.data[ki.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      return is(bi.prototype, { connectorShapes: { fixedOffset: function(Ai, ji, Ni) {
        const gi = ji.breakAt;
        return ji = ji.touchingSliceAt, [["M", Ai.x, Ai.y], Ni.softConnector ? ["C", Ai.x + (Ai.alignment === "left" ? -5 : 5), Ai.y, 2 * gi.x - ji.x, 2 * gi.y - ji.y, gi.x, gi.y] : ["L", gi.x, gi.y], ["L", ji.x, ji.y]];
      }, straight: function(Ai, ji) {
        return ji = ji.touchingSliceAt, [
          ["M", Ai.x, Ai.y],
          ["L", ji.x, ji.y]
        ];
      }, crookedLine: function(Ai, ji, Ni) {
        const { breakAt: gi, touchingSliceAt: ki } = ji;
        ({ series: ji } = this);
        const [Ci, Si, Ti] = ji.center, Mi = Ti / 2, Di = ji.chart.plotWidth, ci = ji.chart.plotLeft;
        ji = Ai.alignment === "left";
        const { x: pi, y: vi } = Ai;
        return Ni.crookDistance ? (Ai = _i(Ni.crookDistance, 1), Ai = ji ? Ci + Mi + (Di + ci - Ci - Mi) * (1 - Ai) : ci + (Ci - Mi) * Ai) : Ai = Ci + (Si - vi) * Math.tan((this.angle || 0) - Math.PI / 2), Ni = [["M", pi, vi]], (ji ? Ai <= pi && Ai >= gi.x : Ai >= pi && Ai <= gi.x) && Ni.push(["L", Ai, vi]), Ni.push(["L", gi.x, gi.y], ["L", ki.x, ki.y]), Ni;
      } } }), bi;
    }), ri(ii, "Series/Pie/PieSeriesDefaults.js", [], function() {
      return {
        borderRadius: 3,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: { allowOverlap: !0, connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
          return this.point.isNull ? void 0 : this.point.name;
        }, softConnector: !0, x: 0 },
        fillColor: void 0,
        ignoreHiddenPoint: !0,
        inactiveOtherPoints: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        stickyTracking: !1,
        tooltip: { followPointer: !0 },
        borderColor: "#ffffff",
        borderWidth: 1,
        lineWidth: void 0,
        states: { hover: { brightness: 0.1 } }
      };
    }), ri(ii, "Series/Pie/PieSeries.js", [ii["Series/CenteredUtilities.js"], ii["Series/Column/ColumnSeries.js"], ii["Core/Globals.js"], ii["Series/Pie/PiePoint.js"], ii["Series/Pie/PieSeriesDefaults.js"], ii["Core/Series/Series.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Renderer/SVG/Symbols.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki, Yi, es, is, $i, Vi) {
      const { getStartAndEndRadians: _i } = hi;
      ({ noop: zi } = zi);
      const { clamp: bi, extend: Ai, fireEvent: ji, merge: Ni, pick: gi, relativeLength: ki } = Vi;
      class Ci extends es {
        constructor() {
          super(...arguments), this.points = this.options = this.maxLabelDistance = this.data = this.center = void 0;
        }
        animate(Ti) {
          const Mi = this, Di = Mi.points, ci = Mi.startAngleRad;
          Ti || Di.forEach(function(pi) {
            const vi = pi.graphic, ui = pi.shapeArgs;
            vi && ui && (vi.attr({ r: gi(pi.startR, Mi.center && Mi.center[3] / 2), start: ci, end: ci }), vi.animate({ r: ui.r, start: ui.start, end: ui.end }, Mi.options.animation));
          });
        }
        drawEmpty() {
          const Ti = this.startAngleRad, Mi = this.endAngleRad, Di = this.options;
          let ci, pi;
          this.total === 0 && this.center ? (ci = this.center[0], pi = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(
            ci,
            pi,
            this.center[1] / 2,
            0,
            Ti,
            Mi
          ).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: $i.arc(ci, pi, this.center[2] / 2, 0, { start: Ti, end: Mi, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": Di.borderWidth, fill: Di.fillColor || "none", stroke: Di.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
        }
        drawPoints() {
          const Ti = this.chart.renderer;
          this.points.forEach(function(Mi) {
            Mi.graphic && Mi.hasNewShapeType() && (Mi.graphic = Mi.graphic.destroy()), Mi.graphic || (Mi.graphic = Ti[Mi.shapeType](Mi.shapeArgs).add(Mi.series.group), Mi.delayedRendering = !0);
          });
        }
        generatePoints() {
          super.generatePoints(), this.updateTotals();
        }
        getX(Ti, Mi, Di) {
          const ci = this.center, pi = this.radii ? this.radii[Di.index] || 0 : ci[2] / 2;
          return Ti = Math.asin(bi((Ti - ci[1]) / (pi + Di.labelDistance), -1, 1)), ci[0] + (Mi ? -1 : 1) * Math.cos(Ti) * (pi + Di.labelDistance) + (0 < Di.labelDistance ? (Mi ? -1 : 1) * this.options.dataLabels.padding : 0);
        }
        hasData() {
          return !!this.processedXData.length;
        }
        redrawPoints() {
          const Ti = this, Mi = Ti.chart;
          let Di, ci, pi, vi;
          this.drawEmpty(), Ti.group && !Mi.styledMode && Ti.group.shadow(Ti.options.shadow), Ti.points.forEach(function(ui) {
            const fi = {};
            ci = ui.graphic, !ui.isNull && ci ? (vi = ui.shapeArgs, Di = ui.getTranslate(), Mi.styledMode || (pi = Ti.pointAttribs(ui, ui.selected && "select")), ui.delayedRendering ? (ci.setRadialReference(Ti.center).attr(vi).attr(Di), Mi.styledMode || ci.attr(pi).attr({ "stroke-linejoin": "round" }), ui.delayedRendering = !1) : (ci.setRadialReference(Ti.center), Mi.styledMode || Ni(!0, fi, pi), Ni(!0, fi, vi, Di), ci.animate(fi)), ci.attr({ visibility: ui.visible ? "inherit" : "hidden" }), ci.addClass(ui.getClassName(), !0)) : ci && (ui.graphic = ci.destroy());
          });
        }
        sortByAngle(Ti, Mi) {
          Ti.sort(function(Di, ci) {
            return typeof Di.angle < "u" && (ci.angle - Di.angle) * Mi;
          });
        }
        translate(Ti) {
          ji(this, "translate"), this.generatePoints();
          var Mi = this.options;
          const Di = Mi.slicedOffset, ci = Di + (Mi.borderWidth || 0);
          var pi = _i(Mi.startAngle, Mi.endAngle);
          const vi = this.startAngleRad = pi.start;
          pi = (this.endAngleRad = pi.end) - vi;
          const ui = this.points, fi = Mi.dataLabels.distance;
          Mi = Mi.ignoreHiddenPoint;
          const si = ui.length;
          let ti, oi, di, mi = 0;
          for (Ti || (this.center = Ti = this.getCenter()), oi = 0; oi < si; oi++) {
            di = ui[oi];
            var Oi = vi + mi * pi;
            !di.isValid() || Mi && !di.visible || (mi += di.percentage / 100);
            var li = vi + mi * pi, Li = {
              x: Ti[0],
              y: Ti[1],
              r: Ti[2] / 2,
              innerR: Ti[3] / 2,
              start: Math.round(1e3 * Oi) / 1e3,
              end: Math.round(1e3 * li) / 1e3
            };
            di.shapeType = "arc", di.shapeArgs = Li, di.labelDistance = gi(di.options.dataLabels && di.options.dataLabels.distance, fi), di.labelDistance = ki(di.labelDistance, Li.r), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, di.labelDistance), li = (li + Oi) / 2, li > 1.5 * Math.PI ? li -= 2 * Math.PI : li < -Math.PI / 2 && (li += 2 * Math.PI), di.slicedTranslation = { translateX: Math.round(Math.cos(li) * Di), translateY: Math.round(Math.sin(li) * Di) }, Li = Math.cos(li) * Ti[2] / 2, ti = Math.sin(li) * Ti[2] / 2, di.tooltipPos = [Ti[0] + 0.7 * Li, Ti[1] + 0.7 * ti], di.half = li < -Math.PI / 2 || li > Math.PI / 2 ? 1 : 0, di.angle = li, Oi = Math.min(ci, di.labelDistance / 5), di.labelPosition = { natural: { x: Ti[0] + Li + Math.cos(li) * di.labelDistance, y: Ti[1] + ti + Math.sin(li) * di.labelDistance }, computed: {}, alignment: 0 > di.labelDistance ? "center" : di.half ? "right" : "left", connectorPosition: { breakAt: { x: Ti[0] + Li + Math.cos(li) * Oi, y: Ti[1] + ti + Math.sin(li) * Oi }, touchingSliceAt: { x: Ti[0] + Li, y: Ti[1] + ti } } };
          }
          ji(this, "afterTranslate");
        }
        updateTotals() {
          const Ti = this.points, Mi = Ti.length, Di = this.options.ignoreHiddenPoint;
          let ci, pi, vi = 0;
          for (ci = 0; ci < Mi; ci++)
            pi = Ti[ci], !pi.isValid() || Di && !pi.visible || (vi += pi.y);
          for (this.total = vi, ci = 0; ci < Mi; ci++)
            pi = Ti[ci], pi.percentage = 0 < vi && (pi.visible || !Di) ? pi.y / vi * 100 : 0, pi.total = vi;
        }
      }
      return Ci.defaultOptions = Ni(es.defaultOptions, Yi), Ai(Ci.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: wi.prototype.drawTracker, getCenter: hi.getCenter, getSymbol: zi, isCartesian: !1, noSharedTooltip: !0, pointAttribs: wi.prototype.pointAttribs, pointClass: Ki, requireSorting: !1, searchPoint: zi, trackerGroups: ["group", "dataLabelsGroup"] }), is.registerSeriesType(
        "pie",
        Ci
      ), Ci;
    }), ri(ii, "Series/Pie/PieDataLabel.js", [ii["Core/Series/DataLabel.js"], ii["Core/Globals.js"], ii["Core/Renderer/RendererUtilities.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki, Yi) {
      const { noop: es } = wi, { distribute: is } = zi, { series: $i } = Ki, { arrayMax: Vi, clamp: _i, defined: bi, merge: Ai, pick: ji, relativeLength: Ni } = Yi;
      var gi;
      return function(ki) {
        function Ci() {
          const ci = this, pi = ci.data, vi = ci.chart, ui = ci.options.dataLabels || {}, fi = ui.connectorPadding, si = vi.plotWidth, ti = vi.plotHeight, oi = vi.plotLeft, di = Math.round(vi.chartWidth / 3), mi = ci.center, Oi = mi[2] / 2, li = mi[1], Li = [[], []], Ui = [0, 0, 0, 0], Zi = ci.dataLabelPositioners;
          let rs, Bi, ni, Pi, Hi, Ri, qi, ai, xi, yi, Gi, Xi;
          ci.visible && (ui.enabled || ci._hasPointLabels) && (pi.forEach(function(Wi) {
            Wi.dataLabel && Wi.visible && Wi.dataLabel.shortened && (Wi.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), Wi.dataLabel.shortened = !1);
          }), $i.prototype.drawDataLabels.apply(ci), pi.forEach(function(Wi) {
            Wi.dataLabel && (Wi.visible ? (Li[Wi.half].push(Wi), Wi.dataLabel._pos = null, !bi(ui.style.width) && !bi(Wi.options.dataLabels && Wi.options.dataLabels.style && Wi.options.dataLabels.style.width) && Wi.dataLabel.getBBox().width > di && (Wi.dataLabel.css({ width: Math.round(0.7 * di) + "px" }), Wi.dataLabel.shortened = !0)) : (Wi.dataLabel = Wi.dataLabel.destroy(), Wi.dataLabels && Wi.dataLabels.length === 1 && delete Wi.dataLabels));
          }), Li.forEach((Wi, ts) => {
            const ss = Wi.length, os = [];
            let ns, ls = 0;
            if (ss) {
              if (ci.sortByAngle(Wi, ts - 0.5), 0 < ci.maxLabelDistance) {
                var Ii = Math.max(0, li - Oi - ci.maxLabelDistance);
                ns = Math.min(li + Oi + ci.maxLabelDistance, vi.plotHeight), Wi.forEach(function(Ei) {
                  0 < Ei.labelDistance && Ei.dataLabel && (Ei.top = Math.max(
                    0,
                    li - Oi - Ei.labelDistance
                  ), Ei.bottom = Math.min(li + Oi + Ei.labelDistance, vi.plotHeight), ls = Ei.dataLabel.getBBox().height || 21, Ei.distributeBox = { target: Ei.labelPosition.natural.y - Ei.top + ls / 2, size: ls, rank: Ei.y }, os.push(Ei.distributeBox));
                }), Ii = ns + ls - Ii, is(os, Ii, Ii / 5);
              }
              for (Gi = 0; Gi < ss; Gi++) {
                if (rs = Wi[Gi], Ri = rs.labelPosition, Pi = rs.dataLabel, yi = rs.visible === !1 ? "hidden" : "inherit", xi = Ii = Ri.natural.y, os && bi(rs.distributeBox) && (typeof rs.distributeBox.pos > "u" ? yi = "hidden" : (qi = rs.distributeBox.size, xi = Zi.radialDistributionY(rs))), delete rs.positionIndex, ui.justify)
                  ai = Zi.justify(rs, Oi, mi);
                else
                  switch (ui.alignTo) {
                    case "connectors":
                      ai = Zi.alignToConnectors(Wi, ts, si, oi);
                      break;
                    case "plotEdges":
                      ai = Zi.alignToPlotEdges(Pi, ts, si, oi);
                      break;
                    default:
                      ai = Zi.radialDistributionX(ci, rs, xi, Ii);
                  }
                Pi._attr = { visibility: yi, align: Ri.alignment }, Xi = rs.options.dataLabels || {}, Pi._pos = { x: ai + ji(Xi.x, ui.x) + ({ left: fi, right: -fi }[Ri.alignment] || 0), y: xi + ji(Xi.y, ui.y) - Pi.getBBox().height / 2 }, Ri && (Ri.computed.x = ai, Ri.computed.y = xi), ji(ui.crop, !0) && (Hi = Pi.getBBox().width, Ii = null, ai - Hi < fi && ts === 1 ? (Ii = Math.round(Hi - ai + fi), Ui[3] = Math.max(Ii, Ui[3])) : ai + Hi > si - fi && ts === 0 && (Ii = Math.round(ai + Hi - si + fi), Ui[1] = Math.max(Ii, Ui[1])), 0 > xi - qi / 2 ? Ui[0] = Math.max(Math.round(-xi + qi / 2), Ui[0]) : xi + qi / 2 > ti && (Ui[2] = Math.max(Math.round(xi + qi / 2 - ti), Ui[2])), Pi.sideOverflow = Ii);
              }
            }
          }), Vi(Ui) === 0 || this.verifyDataLabelOverflow(Ui)) && (this.placeDataLabels(), this.points.forEach(function(Wi) {
            if (Xi = Ai(ui, Wi.options.dataLabels), Bi = ji(Xi.connectorWidth, 1)) {
              let ts;
              ni = Wi.connector, (Pi = Wi.dataLabel) && Pi._pos && Wi.visible && 0 < Wi.labelDistance ? (yi = Pi._attr.visibility, (ts = !ni) && (Wi.connector = ni = vi.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + Wi.colorIndex + (Wi.className ? " " + Wi.className : "")).add(ci.dataLabelsGroup), vi.styledMode || ni.attr({ "stroke-width": Bi, stroke: Xi.connectorColor || Wi.color || "#666666" })), ni[ts ? "attr" : "animate"]({ d: Wi.getConnectorPath() }), ni.attr("visibility", yi)) : ni && (Wi.connector = ni.destroy());
            }
          }));
        }
        function Si() {
          this.points.forEach(function(ci) {
            let pi = ci.dataLabel, vi;
            pi && ci.visible && ((vi = pi._pos) ? (pi.sideOverflow && (pi._attr.width = Math.max(pi.getBBox().width - pi.sideOverflow, 0), pi.css({ width: pi._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), pi.shortened = !0), pi.attr(pi._attr), pi[pi.moved ? "animate" : "attr"](vi), pi.moved = !0) : pi && pi.attr({ y: -9999 })), delete ci.distributeBox;
          }, this);
        }
        function Ti(ci) {
          let pi = this.center, vi = this.options, ui = vi.center, fi = vi.minSize || 80, si, ti = vi.size !== null;
          return ti || (ui[0] !== null ? si = Math.max(pi[2] - Math.max(ci[1], ci[3]), fi) : (si = Math.max(pi[2] - ci[1] - ci[3], fi), pi[0] += (ci[3] - ci[1]) / 2), ui[1] !== null ? si = _i(si, fi, pi[2] - Math.max(ci[0], ci[2])) : (si = _i(si, fi, pi[2] - ci[0] - ci[2]), pi[1] += (ci[0] - ci[2]) / 2), si < pi[2] ? (pi[2] = si, pi[3] = Math.min(vi.thickness ? Math.max(0, si - 2 * vi.thickness) : Math.max(0, Ni(vi.innerSize || 0, si)), si), this.translate(pi), this.drawDataLabels && this.drawDataLabels()) : ti = !0), ti;
        }
        const Mi = [], Di = { radialDistributionY: function(ci) {
          return ci.top + ci.distributeBox.pos;
        }, radialDistributionX: function(ci, pi, vi, ui) {
          return ci.getX(vi < pi.top + 2 || vi > pi.bottom - 2 ? ui : vi, pi.half, pi);
        }, justify: function(ci, pi, vi) {
          return vi[0] + (ci.half ? -1 : 1) * (pi + ci.labelDistance);
        }, alignToPlotEdges: function(ci, pi, vi, ui) {
          return ci = ci.getBBox().width, pi ? ci + ui : vi - ci - ui;
        }, alignToConnectors: function(ci, pi, vi, ui) {
          let fi = 0, si;
          return ci.forEach(function(ti) {
            si = ti.dataLabel.getBBox().width, si > fi && (fi = si);
          }), pi ? fi + ui : vi - fi - ui;
        } };
        ki.compose = function(ci) {
          hi.compose($i), Yi.pushUnique(Mi, ci) && (ci = ci.prototype, ci.dataLabelPositioners = Di, ci.alignDataLabel = es, ci.drawDataLabels = Ci, ci.placeDataLabels = Si, ci.verifyDataLabelOverflow = Ti);
        };
      }(gi || (gi = {})), gi;
    }), ri(ii, "Extensions/OverlappingDataLabels.js", [ii["Core/Chart/Chart.js"], ii["Core/Utilities.js"]], function(hi, wi) {
      function zi(_i, bi) {
        let Ai, ji = !1;
        return _i && (Ai = _i.newOpacity, _i.oldOpacity !== Ai && (_i.alignAttr && _i.placed ? (_i[Ai ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), ji = !0, _i.alignAttr.opacity = Ai, _i[_i.isOld ? "animate" : "attr"](_i.alignAttr, null, function() {
          bi.styledMode || _i.css({ pointerEvents: Ai ? "auto" : "none" });
        }), Yi(bi, "afterHideOverlappingLabel")) : _i.attr({ opacity: Ai })), _i.isOld = !0), ji;
      }
      const { addEvent: Ki, fireEvent: Yi, isArray: es, isNumber: is, objectEach: $i, pick: Vi } = wi;
      Ki(hi, "render", function() {
        let _i = this, bi = [];
        (this.labelCollectors || []).forEach(function(Ai) {
          bi = bi.concat(Ai());
        }), (this.yAxis || []).forEach(function(Ai) {
          Ai.stacking && Ai.options.stackLabels && !Ai.options.stackLabels.allowOverlap && $i(Ai.stacking.stacks, function(ji) {
            $i(ji, function(Ni) {
              Ni.label && bi.push(Ni.label);
            });
          });
        }), (this.series || []).forEach(function(Ai) {
          var ji = Ai.options.dataLabels;
          Ai.visible && (ji.enabled !== !1 || Ai._hasPointLabels) && (ji = (Ni) => Ni.forEach((gi) => {
            gi.visible && (es(gi.dataLabels) ? gi.dataLabels : gi.dataLabel ? [gi.dataLabel] : []).forEach(function(ki) {
              const Ci = ki.options;
              ki.labelrank = Vi(Ci.labelrank, gi.labelrank, gi.shapeArgs && gi.shapeArgs.height), Ci.allowOverlap ? (ki.oldOpacity = ki.opacity, ki.newOpacity = 1, zi(ki, _i)) : bi.push(ki);
            });
          }), ji(Ai.nodes || []), ji(Ai.points));
        }), this.hideOverlappingLabels(bi);
      }), hi.prototype.hideOverlappingLabels = function(_i) {
        let bi = this, Ai = _i.length, ji = bi.renderer;
        var Ni;
        let gi, ki, Ci, Si, Ti = !1;
        var Mi = function(Di) {
          let ci, pi;
          var vi;
          let ui = Di.box ? 0 : Di.padding || 0, fi = vi = 0, si, ti;
          if (Di && (!Di.alignAttr || Di.placed))
            return ci = Di.alignAttr || { x: Di.attr("x"), y: Di.attr("y") }, pi = Di.parentGroup, Di.width || (vi = Di.getBBox(), Di.width = vi.width, Di.height = vi.height, vi = ji.fontMetrics(Di.element).h), si = Di.width - 2 * ui, (ti = { left: "0", center: "0.5", right: "1" }[Di.alignValue]) ? fi = +ti * si : is(Di.x) && Math.round(Di.x) !== Di.translateX && (fi = Di.x - Di.translateX), { x: ci.x + (pi.translateX || 0) + ui - (fi || 0), y: ci.y + (pi.translateY || 0) + ui - vi, width: Di.width - 2 * ui, height: Di.height - 2 * ui };
        };
        for (gi = 0; gi < Ai; gi++)
          (Ni = _i[gi]) && (Ni.oldOpacity = Ni.opacity, Ni.newOpacity = 1, Ni.absoluteBox = Mi(Ni));
        for (_i.sort(function(Di, ci) {
          return (ci.labelrank || 0) - (Di.labelrank || 0);
        }), gi = 0; gi < Ai; gi++)
          for (Ci = (Mi = _i[gi]) && Mi.absoluteBox, Ni = gi + 1; Ni < Ai; ++Ni)
            Si = (ki = _i[Ni]) && ki.absoluteBox, !Ci || !Si || Mi === ki || Mi.newOpacity === 0 || ki.newOpacity === 0 || Mi.visibility === "hidden" || ki.visibility === "hidden" || Si.x >= Ci.x + Ci.width || Si.x + Si.width <= Ci.x || Si.y >= Ci.y + Ci.height || Si.y + Si.height <= Ci.y || ((Mi.labelrank < ki.labelrank ? Mi : ki).newOpacity = 0);
        _i.forEach(function(Di) {
          zi(Di, bi) && (Ti = !0);
        }), Ti && Yi(bi, "afterHideAllOverlappingLabels");
      };
    }), ri(ii, "Extensions/BorderRadius.js", [ii["Core/Defaults.js"], ii["Core/Series/Series.js"], ii["Core/Series/SeriesRegistry.js"], ii["Core/Renderer/SVG/SVGElement.js"], ii["Core/Renderer/SVG/SVGRenderer.js"], ii["Core/Utilities.js"]], function(hi, wi, zi, Ki, Yi, es) {
      const { defaultOptions: is } = hi;
      ({ seriesTypes: hi } = zi);
      const { addEvent: $i, extend: Vi, isObject: _i, merge: bi, relativeLength: Ai } = es, ji = {
        radius: 0,
        scope: "stack",
        where: void 0
      }, Ni = (gi, ki) => (_i(gi) || (gi = { radius: gi || 0 }), bi(ji, ki, gi));
      if (Ki.symbolCustomAttribs.indexOf("borderRadius") === -1) {
        Ki.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY");
        const gi = Yi.prototype.symbols.arc;
        Yi.prototype.symbols.arc = function(Ci, Si, Ti, Mi, Di = {}) {
          Ci = gi(Ci, Si, Ti, Mi, Di);
          const { innerR: ci = 0, r: pi = Ti, start: vi = 0, end: ui = 0 } = Di;
          if (Di.open || !Di.borderRadius)
            return Ci;
          for (Ti = ui - vi, Si = Math.sin(Ti / 2), Di = Math.max(Math.min(Ai(Di.borderRadius || 0, pi - ci), (pi - ci) / 2, pi * Si / (1 + Si)), 0), Ti = Math.min(Di, Ti / Math.PI * 2 * ci), Si = Ci.length - 1; Si--; ) {
            let Oi, li, Li;
            Mi = Ci;
            var fi = Si, si = 1 < Si ? Ti : Di, ti = Mi[fi], oi = Mi[fi + 1];
            if (oi[0] === "Z" && (oi = Mi[0]), ti[0] !== "M" && ti[0] !== "L" || oi[0] !== "A" ? ti[0] !== "A" || oi[0] !== "M" && oi[0] !== "L" || (Li = oi, li = ti) : (Li = ti, li = oi, Oi = !0), Li && li && li.params) {
              ti = li[1];
              var di = li[5];
              oi = li.params;
              const { start: Ui, end: Zi, cx: rs, cy: Bi } = oi;
              var mi = di ? ti - si : ti + si;
              const ni = mi ? Math.asin(si / mi) : 0;
              di = di ? ni : -ni, mi *= Math.cos(ni), Oi ? (oi.start = Ui + di, Li[1] = rs + mi * Math.cos(Ui), Li[2] = Bi + mi * Math.sin(Ui), Mi.splice(fi + 1, 0, ["A", si, si, 0, 0, 1, rs + ti * Math.cos(oi.start), Bi + ti * Math.sin(oi.start)])) : (oi.end = Zi - di, li[6] = rs + ti * Math.cos(oi.end), li[7] = Bi + ti * Math.sin(oi.end), Mi.splice(fi + 1, 0, ["A", si, si, 0, 0, 1, rs + mi * Math.cos(Zi), Bi + mi * Math.sin(Zi)])), li[4] = Math.abs(oi.end - oi.start) < Math.PI ? 0 : 1;
            }
          }
          return Ci;
        };
        const ki = Yi.prototype.symbols.roundedRect;
        Yi.prototype.symbols.roundedRect = function(Ci, Si, Ti, Mi, Di = {}) {
          const ci = ki(Ci, Si, Ti, Mi, Di), { r: pi = 0, brBoxHeight: vi = Mi, brBoxY: ui = Si } = Di;
          var fi = Si - ui, si = ui + vi - (Si + Mi);
          Di = -0.1 < fi - pi ? 0 : pi;
          const ti = -0.1 < si - pi ? 0 : pi;
          var oi = Math.max(Di && fi, 0);
          const di = Math.max(ti && si, 0);
          si = [Ci + Di, Si], fi = [Ci + Ti - Di, Si];
          const mi = [Ci + Ti, Si + Di], Oi = [Ci + Ti, Si + Mi - ti], li = [Ci + Ti - ti, Si + Mi], Li = [Ci + ti, Si + Mi], Ui = [Ci, Si + Mi - ti], Zi = [Ci, Si + Di];
          if (oi) {
            const rs = Math.sqrt(Math.pow(Di, 2) - Math.pow(Di - oi, 2));
            si[0] -= rs, fi[0] += rs, mi[1] = Zi[1] = Si + Di - oi;
          }
          return Mi < Di - oi && (oi = Math.sqrt(Math.pow(Di, 2) - Math.pow(Di - oi - Mi, 2)), mi[0] = Oi[0] = Ci + Ti - Di + oi, li[0] = Math.min(mi[0], li[0]), Li[0] = Math.max(Oi[0], Li[0]), Ui[0] = Zi[0] = Ci + Di - oi, mi[1] = Zi[1] = Si + Mi), di && (oi = Math.sqrt(Math.pow(ti, 2) - Math.pow(ti - di, 2)), li[0] += oi, Li[0] -= oi, Oi[1] = Ui[1] = Si + Mi - ti + di), Mi < ti - di && (Mi = Math.sqrt(Math.pow(ti, 2) - Math.pow(ti - di - Mi, 2)), mi[0] = Oi[0] = Ci + Ti - ti + Mi, fi[0] = Math.min(mi[0], fi[0]), si[0] = Math.max(Oi[0], si[0]), Ui[0] = Zi[0] = Ci + ti - Mi, Oi[1] = Ui[1] = Si), ci.length = 0, ci.push(["M", ...si], ["L", ...fi], [
            "A",
            Di,
            Di,
            0,
            0,
            1,
            ...mi
          ], ["L", ...Oi], ["A", ti, ti, 0, 0, 1, ...li], ["L", ...Li], ["A", ti, ti, 0, 0, 1, ...Ui], ["L", ...Zi], ["A", Di, Di, 0, 0, 1, ...si], ["Z"]), ci;
        }, $i(hi.pie, "afterTranslate", function() {
          const Ci = Ni(this.options.borderRadius);
          for (const Si of this.points) {
            const Ti = Si.shapeArgs;
            Ti && (Ti.borderRadius = Ai(Ci.radius, (Ti.r || 0) - (Ti.innerR || 0)));
          }
        }), $i(wi, "afterColumnTranslate", function() {
          var Ci, Si;
          if (this.options.borderRadius && (!this.chart.is3d || !this.chart.is3d())) {
            const { options: ci, yAxis: pi } = this, vi = ci.stacking === "percent";
            var Ti = (Si = (Ci = is.plotOptions) === null || Ci === void 0 ? void 0 : Ci[this.type]) === null || Si === void 0 ? void 0 : Si.borderRadius;
            Ci = Ni(ci.borderRadius, _i(Ti) ? Ti : {}), Si = pi.options.reversed;
            for (const ui of this.points)
              if ({ shapeArgs: Ti } = ui, ui.shapeType === "roundedRect" && Ti) {
                const { width: fi = 0, height: si = 0, y: ti = 0 } = Ti;
                var Mi = ti, Di = si;
                Ci.scope === "stack" && ui.stackTotal && (Mi = pi.translate(vi ? 100 : ui.stackTotal, !1, !0, !1, !0), Di = pi.translate(ci.threshold || 0, !1, !0, !1, !0), Di = this.crispCol(0, Math.min(Mi, Di), 0, Math.abs(Mi - Di)), Mi = Di.y, Di = Di.height);
                const oi = (ui.negative ? -1 : 1) * (Si ? -1 : 1) === -1;
                let di = Ci.where;
                !di && this.is("waterfall") && Math.abs((ui.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (di = "all"), di || (di = "end");
                const mi = Math.min(Ai(Ci.radius, fi), fi / 2, di === "all" ? si / 2 : 1 / 0) || 0;
                di === "end" && (oi && (Mi -= mi), Di += mi), Vi(Ti, { brBoxHeight: Di, brBoxY: Mi, r: mi });
              }
          }
        }, { order: 9 });
      }
      return wi = { optionsToObject: Ni }, wi;
    }), ri(ii, "Core/Responsive.js", [ii["Core/Utilities.js"]], function(hi) {
      const { diffObjects: wi, extend: zi, find: Ki, merge: Yi, pick: es, uniqueKey: is } = hi;
      var $i;
      return function(Vi) {
        function _i(ji, Ni) {
          const gi = ji.condition;
          (gi.callback || function() {
            return this.chartWidth <= es(gi.maxWidth, Number.MAX_VALUE) && this.chartHeight <= es(gi.maxHeight, Number.MAX_VALUE) && this.chartWidth >= es(gi.minWidth, 0) && this.chartHeight >= es(gi.minHeight, 0);
          }).call(this) && Ni.push(ji._id);
        }
        function bi(ji, Ni) {
          const gi = this.options.responsive;
          var ki = this.currentResponsive;
          let Ci = [];
          !Ni && gi && gi.rules && gi.rules.forEach((Si) => {
            typeof Si._id > "u" && (Si._id = is()), this.matchResponsiveRule(Si, Ci);
          }, this), Ni = Yi(...Ci.map((Si) => Ki((gi || {}).rules || [], (Ti) => Ti._id === Si)).map((Si) => Si && Si.chartOptions)), Ni.isResponsiveOptions = !0, Ci = Ci.toString() || void 0, Ci !== (ki && ki.ruleIds) && (ki && this.update(ki.undoOptions, ji, !0), Ci ? (ki = wi(Ni, this.options, !0, this.collectionsWithUpdate), ki.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: Ci, mergedOptions: Ni, undoOptions: ki }, this.update(Ni, ji, !0)) : this.currentResponsive = void 0);
        }
        const Ai = [];
        Vi.compose = function(ji) {
          return hi.pushUnique(Ai, ji) && zi(ji.prototype, { matchResponsiveRule: _i, setResponsive: bi }), ji;
        };
      }($i || ($i = {})), $i;
    }), ri(ii, "masters/highcharts.src.js", [
      ii["Core/Globals.js"],
      ii["Core/Utilities.js"],
      ii["Core/Defaults.js"],
      ii["Core/Animation/Fx.js"],
      ii["Core/Animation/AnimationUtilities.js"],
      ii["Core/Renderer/HTML/AST.js"],
      ii["Core/Templating.js"],
      ii["Core/Renderer/RendererUtilities.js"],
      ii["Core/Renderer/SVG/SVGElement.js"],
      ii["Core/Renderer/SVG/SVGRenderer.js"],
      ii["Core/Renderer/HTML/HTMLElement.js"],
      ii["Core/Renderer/HTML/HTMLRenderer.js"],
      ii["Core/Axis/Axis.js"],
      ii["Core/Axis/DateTimeAxis.js"],
      ii["Core/Axis/LogarithmicAxis.js"],
      ii["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
      ii["Core/Axis/Tick.js"],
      ii["Core/Tooltip.js"],
      ii["Core/Series/Point.js"],
      ii["Core/Pointer.js"],
      ii["Core/Legend/Legend.js"],
      ii["Core/Chart/Chart.js"],
      ii["Core/Axis/Stacking/StackingAxis.js"],
      ii["Core/Axis/Stacking/StackItem.js"],
      ii["Core/Series/Series.js"],
      ii["Core/Series/SeriesRegistry.js"],
      ii["Series/Column/ColumnSeries.js"],
      ii["Series/Column/ColumnDataLabel.js"],
      ii["Series/Pie/PieSeries.js"],
      ii["Series/Pie/PieDataLabel.js"],
      ii["Core/Series/DataLabel.js"],
      ii["Core/Responsive.js"],
      ii["Core/Color/Color.js"],
      ii["Core/Time.js"]
    ], function(hi, wi, zi, Ki, Yi, es, is, $i, Vi, _i, bi, Ai, ji, Ni, gi, ki, Ci, Si, Ti, Mi, Di, ci, pi, vi, ui, fi, si, ti, oi, di, mi, Oi, li, Li) {
      return hi.animate = Yi.animate, hi.animObject = Yi.animObject, hi.getDeferredAnimation = Yi.getDeferredAnimation, hi.setAnimation = Yi.setAnimation, hi.stop = Yi.stop, hi.timers = Ki.timers, hi.AST = es, hi.Axis = ji, hi.Chart = ci, hi.chart = ci.chart, hi.Fx = Ki, hi.Legend = Di, hi.PlotLineOrBand = ki, hi.Point = Ti, hi.Pointer = Mi, hi.Series = ui, hi.StackItem = vi, hi.SVGElement = Vi, hi.SVGRenderer = _i, hi.Templating = is, hi.Tick = Ci, hi.Time = Li, hi.Tooltip = Si, hi.Color = li, hi.color = li.parse, Ai.compose(_i), bi.compose(Vi), Mi.compose(ci), Di.compose(ci), hi.defaultOptions = zi.defaultOptions, hi.getOptions = zi.getOptions, hi.time = zi.defaultTime, hi.setOptions = zi.setOptions, hi.dateFormat = is.dateFormat, hi.format = is.format, hi.numberFormat = is.numberFormat, hi.addEvent = wi.addEvent, hi.arrayMax = wi.arrayMax, hi.arrayMin = wi.arrayMin, hi.attr = wi.attr, hi.clearTimeout = wi.clearTimeout, hi.correctFloat = wi.correctFloat, hi.createElement = wi.createElement, hi.css = wi.css, hi.defined = wi.defined, hi.destroyObjectProperties = wi.destroyObjectProperties, hi.discardElement = wi.discardElement, hi.distribute = $i.distribute, hi.erase = wi.erase, hi.error = wi.error, hi.extend = wi.extend, hi.extendClass = wi.extendClass, hi.find = wi.find, hi.fireEvent = wi.fireEvent, hi.getMagnitude = wi.getMagnitude, hi.getStyle = wi.getStyle, hi.inArray = wi.inArray, hi.isArray = wi.isArray, hi.isClass = wi.isClass, hi.isDOMElement = wi.isDOMElement, hi.isFunction = wi.isFunction, hi.isNumber = wi.isNumber, hi.isObject = wi.isObject, hi.isString = wi.isString, hi.keys = wi.keys, hi.merge = wi.merge, hi.normalizeTickInterval = wi.normalizeTickInterval, hi.objectEach = wi.objectEach, hi.offset = wi.offset, hi.pad = wi.pad, hi.pick = wi.pick, hi.pInt = wi.pInt, hi.relativeLength = wi.relativeLength, hi.removeEvent = wi.removeEvent, hi.seriesType = fi.seriesType, hi.splat = wi.splat, hi.stableSort = wi.stableSort, hi.syncTimeout = wi.syncTimeout, hi.timeUnits = wi.timeUnits, hi.uniqueKey = wi.uniqueKey, hi.useSerialIds = wi.useSerialIds, hi.wrap = wi.wrap, ti.compose(si), mi.compose(ui), Ni.compose(ji), gi.compose(ji), di.compose(oi), ki.compose(ji), Oi.compose(ci), pi.compose(ji, ci, ui), Si.compose(Mi), hi;
    }), ii["masters/highcharts.src.js"]._modules = ii, ii["masters/highcharts.src.js"];
  });
})(highcharts);
var highchartsExports = highcharts.exports;
const Highcharts = /* @__PURE__ */ getDefaultExportFromCjs(highchartsExports);
var htmx_min = { exports: {} };
(function(module) {
  (function(Fe, ei) {
    module.exports ? module.exports = ei() : Fe.htmx = Fe.htmx || ei();
  })(typeof self < "u" ? self : commonjsGlobal, function() {
    return function() {
      var G = { onLoad: t, process: Nt, on: le, off: ue, trigger: oe, ajax: xr, find: b, findAll: f, closest: d, values: function(Fe, ei) {
        var ri = er(Fe, ei || "post");
        return ri.values;
      }, remove: U, addClass: B, removeClass: n, toggleClass: V, takeClass: j, defineExtension: Rr, removeExtension: Or, logAll: X, logNone: F, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1 }, parseInterval: v, _: e, createEventSource: function(Fe) {
        return new EventSource(Fe, { withCredentials: !0 });
      }, createWebSocket: function(Fe) {
        var ei = new WebSocket(Fe, []);
        return ei.binaryType = G.config.wsBinaryType, ei;
      }, version: "1.9.5" }, C = { addTriggerHandler: bt, bodyContains: re, canAccessLocalStorage: M, findThisElement: he, filterValues: ar, hasAttribute: o, getAttributeValue: Z, getClosestAttributeValue: Y, getClosestMatch: c, getExpressionVars: gr, getHeaders: ir, getInputValues: er, getInternalData: ee, getSwapSpecification: sr, getTriggerSpecs: Ge, getTarget: de, makeFragment: l, mergeObjects: ne, makeSettleInfo: S, oobSwap: me, querySelectorExt: ie, selectAndSwap: De, settleImmediately: Wt, shouldCancel: Qe, triggerEvent: oe, triggerErrorEvent: ae, withExtensions: w }, R = ["get", "post", "put", "delete", "patch"], O = R.map(function(Fe) {
        return "[hx-" + Fe + "], [data-hx-" + Fe + "]";
      }).join(", ");
      function v(Fe) {
        if (Fe != null)
          return Fe.slice(-2) == "ms" ? parseFloat(Fe.slice(0, -2)) || void 0 : Fe.slice(-1) == "s" ? parseFloat(Fe.slice(0, -1)) * 1e3 || void 0 : Fe.slice(-1) == "m" ? parseFloat(Fe.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(Fe) || void 0;
      }
      function J(Fe, ei) {
        return Fe.getAttribute && Fe.getAttribute(ei);
      }
      function o(Fe, ei) {
        return Fe.hasAttribute && (Fe.hasAttribute(ei) || Fe.hasAttribute("data-" + ei));
      }
      function Z(Fe, ei) {
        return J(Fe, ei) || J(Fe, "data-" + ei);
      }
      function u(Fe) {
        return Fe.parentElement;
      }
      function K() {
        return document;
      }
      function c(Fe, ei) {
        for (; Fe && !ei(Fe); )
          Fe = u(Fe);
        return Fe || null;
      }
      function T(Fe, ei, ri) {
        var ii = Z(ei, ri), hi = Z(ei, "hx-disinherit");
        return Fe !== ei && hi && (hi === "*" || hi.split(" ").indexOf(ri) >= 0) ? "unset" : ii;
      }
      function Y(Fe, ei) {
        var ri = null;
        if (c(Fe, function(ii) {
          return ri = T(Fe, ii, ei);
        }), ri !== "unset")
          return ri;
      }
      function h(Fe, ei) {
        var ri = Fe.matches || Fe.matchesSelector || Fe.msMatchesSelector || Fe.mozMatchesSelector || Fe.webkitMatchesSelector || Fe.oMatchesSelector;
        return ri && ri.call(Fe, ei);
      }
      function q(Fe) {
        var ei = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ri = ei.exec(Fe);
        return ri ? ri[1].toLowerCase() : "";
      }
      function i(Fe, ei) {
        for (var ri = new DOMParser(), ii = ri.parseFromString(Fe, "text/html"), hi = ii.body; ei > 0; )
          ei--, hi = hi.firstChild;
        return hi == null && (hi = K().createDocumentFragment()), hi;
      }
      function H(Fe) {
        return Fe.match(/<body/);
      }
      function l(Fe) {
        var ei = !H(Fe);
        if (G.config.useTemplateFragments && ei) {
          var ri = i("<body><template>" + Fe + "</template></body>", 0);
          return ri.querySelector("template").content;
        } else {
          var ii = q(Fe);
          switch (ii) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return i("<table>" + Fe + "</table>", 1);
            case "col":
              return i("<table><colgroup>" + Fe + "</colgroup></table>", 2);
            case "tr":
              return i("<table><tbody>" + Fe + "</tbody></table>", 2);
            case "td":
            case "th":
              return i("<table><tbody><tr>" + Fe + "</tr></tbody></table>", 3);
            case "script":
              return i("<div>" + Fe + "</div>", 1);
            default:
              return i(Fe, 0);
          }
        }
      }
      function Q(Fe) {
        Fe && Fe();
      }
      function L(Fe, ei) {
        return Object.prototype.toString.call(Fe) === "[object " + ei + "]";
      }
      function A(Fe) {
        return L(Fe, "Function");
      }
      function N(Fe) {
        return L(Fe, "Object");
      }
      function ee(Fe) {
        var ei = "htmx-internal-data", ri = Fe[ei];
        return ri || (ri = Fe[ei] = {}), ri;
      }
      function I(Fe) {
        var ei = [];
        if (Fe)
          for (var ri = 0; ri < Fe.length; ri++)
            ei.push(Fe[ri]);
        return ei;
      }
      function te(Fe, ei) {
        if (Fe)
          for (var ri = 0; ri < Fe.length; ri++)
            ei(Fe[ri]);
      }
      function P(Fe) {
        var ei = Fe.getBoundingClientRect(), ri = ei.top, ii = ei.bottom;
        return ri < window.innerHeight && ii >= 0;
      }
      function re(Fe) {
        return Fe.getRootNode && Fe.getRootNode() instanceof window.ShadowRoot ? K().body.contains(Fe.getRootNode().host) : K().body.contains(Fe);
      }
      function k(Fe) {
        return Fe.trim().split(/\s+/);
      }
      function ne(Fe, ei) {
        for (var ri in ei)
          ei.hasOwnProperty(ri) && (Fe[ri] = ei[ri]);
        return Fe;
      }
      function y(Fe) {
        try {
          return JSON.parse(Fe);
        } catch (ei) {
          return x(ei), null;
        }
      }
      function M() {
        var Fe = "htmx:localStorageTest";
        try {
          return localStorage.setItem(Fe, Fe), localStorage.removeItem(Fe), !0;
        } catch {
          return !1;
        }
      }
      function D(Fe) {
        try {
          var ei = new URL(Fe);
          return ei && (Fe = ei.pathname + ei.search), Fe.match("^/$") || (Fe = Fe.replace(/\/+$/, "")), Fe;
        } catch {
          return Fe;
        }
      }
      function e(e) {
        return hr(K().body, function() {
          return eval(e);
        });
      }
      function t(Fe) {
        var ei = G.on("htmx:load", function(ri) {
          Fe(ri.detail.elt);
        });
        return ei;
      }
      function X() {
        G.logger = function(Fe, ei, ri) {
          console && console.log(ei, Fe, ri);
        };
      }
      function F() {
        G.logger = null;
      }
      function b(Fe, ei) {
        return ei ? Fe.querySelector(ei) : b(K(), Fe);
      }
      function f(Fe, ei) {
        return ei ? Fe.querySelectorAll(ei) : f(K(), Fe);
      }
      function U(Fe, ei) {
        Fe = s(Fe), ei ? setTimeout(function() {
          U(Fe), Fe = null;
        }, ei) : Fe.parentElement.removeChild(Fe);
      }
      function B(Fe, ei, ri) {
        Fe = s(Fe), ri ? setTimeout(function() {
          B(Fe, ei), Fe = null;
        }, ri) : Fe.classList && Fe.classList.add(ei);
      }
      function n(Fe, ei, ri) {
        Fe = s(Fe), ri ? setTimeout(function() {
          n(Fe, ei), Fe = null;
        }, ri) : Fe.classList && (Fe.classList.remove(ei), Fe.classList.length === 0 && Fe.removeAttribute("class"));
      }
      function V(Fe, ei) {
        Fe = s(Fe), Fe.classList.toggle(ei);
      }
      function j(Fe, ei) {
        Fe = s(Fe), te(Fe.parentElement.children, function(ri) {
          n(ri, ei);
        }), B(Fe, ei);
      }
      function d(Fe, ei) {
        if (Fe = s(Fe), Fe.closest)
          return Fe.closest(ei);
        do
          if (Fe == null || h(Fe, ei))
            return Fe;
        while (Fe = Fe && u(Fe));
        return null;
      }
      function r(Fe) {
        var ei = Fe.trim();
        return ei.startsWith("<") && ei.endsWith("/>") ? ei.substring(1, ei.length - 2) : ei;
      }
      function W(Fe, ei) {
        return ei.indexOf("closest ") === 0 ? [d(Fe, r(ei.substr(8)))] : ei.indexOf("find ") === 0 ? [b(Fe, r(ei.substr(5)))] : ei.indexOf("next ") === 0 ? [_(Fe, r(ei.substr(5)))] : ei.indexOf("previous ") === 0 ? [z(Fe, r(ei.substr(9)))] : ei === "document" ? [document] : ei === "window" ? [window] : ei === "body" ? [document.body] : K().querySelectorAll(r(ei));
      }
      var _ = function(Fe, ei) {
        for (var ri = K().querySelectorAll(ei), ii = 0; ii < ri.length; ii++) {
          var hi = ri[ii];
          if (hi.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_PRECEDING)
            return hi;
        }
      }, z = function(Fe, ei) {
        for (var ri = K().querySelectorAll(ei), ii = ri.length - 1; ii >= 0; ii--) {
          var hi = ri[ii];
          if (hi.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_FOLLOWING)
            return hi;
        }
      };
      function ie(Fe, ei) {
        return ei ? W(Fe, ei)[0] : W(K().body, Fe)[0];
      }
      function s(Fe) {
        return L(Fe, "String") ? b(Fe) : Fe;
      }
      function $(Fe, ei, ri) {
        return A(ei) ? { target: K().body, event: Fe, listener: ei } : { target: s(Fe), event: ei, listener: ri };
      }
      function le(Fe, ei, ri) {
        Hr(function() {
          var hi = $(Fe, ei, ri);
          hi.target.addEventListener(hi.event, hi.listener);
        });
        var ii = A(ei);
        return ii ? ei : ri;
      }
      function ue(Fe, ei, ri) {
        return Hr(function() {
          var ii = $(Fe, ei, ri);
          ii.target.removeEventListener(ii.event, ii.listener);
        }), A(ei) ? ei : ri;
      }
      var fe = K().createElement("output");
      function ce(Fe, ei) {
        var ri = Y(Fe, ei);
        if (ri) {
          if (ri === "this")
            return [he(Fe, ei)];
          var ii = W(Fe, ri);
          return ii.length === 0 ? (x('The selector "' + ri + '" on ' + ei + " returned no matches!"), [fe]) : ii;
        }
      }
      function he(Fe, ei) {
        return c(Fe, function(ri) {
          return Z(ri, ei) != null;
        });
      }
      function de(Fe) {
        var ei = Y(Fe, "hx-target");
        if (ei)
          return ei === "this" ? he(Fe, "hx-target") : ie(Fe, ei);
        var ri = ee(Fe);
        return ri.boosted ? K().body : Fe;
      }
      function ve(Fe) {
        for (var ei = G.config.attributesToSettle, ri = 0; ri < ei.length; ri++)
          if (Fe === ei[ri])
            return !0;
        return !1;
      }
      function ge(Fe, ei) {
        te(Fe.attributes, function(ri) {
          !ei.hasAttribute(ri.name) && ve(ri.name) && Fe.removeAttribute(ri.name);
        }), te(ei.attributes, function(ri) {
          ve(ri.name) && Fe.setAttribute(ri.name, ri.value);
        });
      }
      function pe(Fe, ei) {
        for (var ri = Tr(ei), ii = 0; ii < ri.length; ii++) {
          var hi = ri[ii];
          try {
            if (hi.isInlineSwap(Fe))
              return !0;
          } catch (wi) {
            x(wi);
          }
        }
        return Fe === "outerHTML";
      }
      function me(Fe, ei, ri) {
        var ii = "#" + J(ei, "id"), hi = "outerHTML";
        Fe === "true" || (Fe.indexOf(":") > 0 ? (hi = Fe.substr(0, Fe.indexOf(":")), ii = Fe.substr(Fe.indexOf(":") + 1, Fe.length)) : hi = Fe);
        var wi = K().querySelectorAll(ii);
        return wi ? (te(wi, function(zi) {
          var Ki, Yi = ei.cloneNode(!0);
          Ki = K().createDocumentFragment(), Ki.appendChild(Yi), pe(hi, zi) || (Ki = Yi);
          var es = { shouldSwap: !0, target: zi, fragment: Ki };
          oe(zi, "htmx:oobBeforeSwap", es) && (zi = es.target, es.shouldSwap && ke(hi, zi, zi, Ki, ri), te(ri.elts, function(is) {
            oe(is, "htmx:oobAfterSwap", es);
          }));
        }), ei.parentNode.removeChild(ei)) : (ei.parentNode.removeChild(ei), ae(K().body, "htmx:oobErrorNoTarget", { content: ei })), Fe;
      }
      function xe(Fe, ei, ri) {
        var ii = Y(Fe, "hx-select-oob");
        if (ii) {
          var hi = ii.split(",");
          for (let es = 0; es < hi.length; es++) {
            var wi = hi[es].split(":", 2), zi = wi[0].trim();
            zi.indexOf("#") === 0 && (zi = zi.substring(1));
            var Ki = wi[1] || "true", Yi = ei.querySelector("#" + zi);
            Yi && me(Ki, Yi, ri);
          }
        }
        te(f(ei, "[hx-swap-oob], [data-hx-swap-oob]"), function(es) {
          var is = Z(es, "hx-swap-oob");
          is != null && me(is, es, ri);
        });
      }
      function ye(Fe) {
        te(f(Fe, "[hx-preserve], [data-hx-preserve]"), function(ei) {
          var ri = Z(ei, "id"), ii = K().getElementById(ri);
          ii != null && ei.parentNode.replaceChild(ii, ei);
        });
      }
      function be(Fe, ei, ri) {
        te(ei.querySelectorAll("[id]"), function(ii) {
          var hi = J(ii, "id");
          if (hi && hi.length > 0) {
            var wi = hi.replace("'", "\\'"), zi = ii.tagName.replace(":", "\\:"), Ki = Fe.querySelector(zi + "[id='" + wi + "']");
            if (Ki && Ki !== Fe) {
              var Yi = ii.cloneNode();
              ge(ii, Ki), ri.tasks.push(function() {
                ge(ii, Yi);
              });
            }
          }
        });
      }
      function we(Fe) {
        return function() {
          n(Fe, G.config.addedClass), Nt(Fe), St(Fe), Se(Fe), oe(Fe, "htmx:load");
        };
      }
      function Se(Fe) {
        var ei = "[autofocus]", ri = h(Fe, ei) ? Fe : Fe.querySelector(ei);
        ri != null && ri.focus();
      }
      function a(Fe, ei, ri, ii) {
        for (be(Fe, ri, ii); ri.childNodes.length > 0; ) {
          var hi = ri.firstChild;
          B(hi, G.config.addedClass), Fe.insertBefore(hi, ei), hi.nodeType !== Node.TEXT_NODE && hi.nodeType !== Node.COMMENT_NODE && ii.tasks.push(we(hi));
        }
      }
      function Ee(Fe, ei) {
        for (var ri = 0; ri < Fe.length; )
          ei = (ei << 5) - ei + Fe.charCodeAt(ri++) | 0;
        return ei;
      }
      function Ce(Fe) {
        var ei = 0;
        if (Fe.attributes)
          for (var ri = 0; ri < Fe.attributes.length; ri++) {
            var ii = Fe.attributes[ri];
            ii.value && (ei = Ee(ii.name, ei), ei = Ee(ii.value, ei));
          }
        return ei;
      }
      function Re(Fe) {
        var ei = ee(Fe);
        if (ei.onHandlers) {
          for (let ri = 0; ri < ei.onHandlers.length; ri++) {
            const ii = ei.onHandlers[ri];
            Fe.removeEventListener(ii.event, ii.listener);
          }
          delete ei.onHandlers;
        }
      }
      function Oe(Fe) {
        var ei = ee(Fe);
        ei.timeout && clearTimeout(ei.timeout), ei.webSocket && ei.webSocket.close(), ei.sseEventSource && ei.sseEventSource.close(), ei.listenerInfos && te(ei.listenerInfos, function(ri) {
          ri.on && ri.on.removeEventListener(ri.trigger, ri.listener);
        }), ei.initHash && (ei.initHash = null), Re(Fe);
      }
      function g(Fe) {
        oe(Fe, "htmx:beforeCleanupElement"), Oe(Fe), Fe.children && te(Fe.children, function(ei) {
          g(ei);
        });
      }
      function Te(Fe, ei, ri) {
        if (Fe.tagName === "BODY")
          return Ie(Fe, ei, ri);
        var ii, hi = Fe.previousSibling;
        for (a(u(Fe), Fe, ei, ri), hi == null ? ii = u(Fe).firstChild : ii = hi.nextSibling, ee(Fe).replacedWith = ii, ri.elts = ri.elts.filter(function(wi) {
          return wi != Fe;
        }); ii && ii !== Fe; )
          ii.nodeType === Node.ELEMENT_NODE && ri.elts.push(ii), ii = ii.nextElementSibling;
        g(Fe), u(Fe).removeChild(Fe);
      }
      function qe(Fe, ei, ri) {
        return a(Fe, Fe.firstChild, ei, ri);
      }
      function He(Fe, ei, ri) {
        return a(u(Fe), Fe, ei, ri);
      }
      function Le(Fe, ei, ri) {
        return a(Fe, null, ei, ri);
      }
      function Ae(Fe, ei, ri) {
        return a(u(Fe), Fe.nextSibling, ei, ri);
      }
      function Ne(Fe, ei, ri) {
        return g(Fe), u(Fe).removeChild(Fe);
      }
      function Ie(Fe, ei, ri) {
        var ii = Fe.firstChild;
        if (a(Fe, ii, ei, ri), ii) {
          for (; ii.nextSibling; )
            g(ii.nextSibling), Fe.removeChild(ii.nextSibling);
          g(ii), Fe.removeChild(ii);
        }
      }
      function Pe(Fe, ei, ri) {
        var ii = ri || Y(Fe, "hx-select");
        if (ii) {
          var hi = K().createDocumentFragment();
          te(ei.querySelectorAll(ii), function(wi) {
            hi.appendChild(wi);
          }), ei = hi;
        }
        return ei;
      }
      function ke(Fe, ei, ri, ii, hi) {
        switch (Fe) {
          case "none":
            return;
          case "outerHTML":
            Te(ri, ii, hi);
            return;
          case "afterbegin":
            qe(ri, ii, hi);
            return;
          case "beforebegin":
            He(ri, ii, hi);
            return;
          case "beforeend":
            Le(ri, ii, hi);
            return;
          case "afterend":
            Ae(ri, ii, hi);
            return;
          case "delete":
            Ne(ri);
            return;
          default:
            for (var wi = Tr(ei), zi = 0; zi < wi.length; zi++) {
              var Ki = wi[zi];
              try {
                var Yi = Ki.handleSwap(Fe, ri, ii, hi);
                if (Yi) {
                  if (typeof Yi.length < "u")
                    for (var es = 0; es < Yi.length; es++) {
                      var is = Yi[es];
                      is.nodeType !== Node.TEXT_NODE && is.nodeType !== Node.COMMENT_NODE && hi.tasks.push(we(is));
                    }
                  return;
                }
              } catch ($i) {
                x($i);
              }
            }
            Fe === "innerHTML" ? Ie(ri, ii, hi) : ke(G.config.defaultSwapStyle, ei, ri, ii, hi);
        }
      }
      function Me(Fe) {
        if (Fe.indexOf("<title") > -1) {
          var ei = Fe.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), ri = ei.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (ri)
            return ri[2];
        }
      }
      function De(Fe, ei, ri, ii, hi, wi) {
        hi.title = Me(ii);
        var zi = l(ii);
        if (zi)
          return xe(ri, zi, hi), zi = Pe(ri, zi, wi), ye(zi), ke(Fe, ri, ei, zi, hi);
      }
      function Xe(Fe, ei, ri) {
        var ii = Fe.getResponseHeader(ei);
        if (ii.indexOf("{") === 0) {
          var hi = y(ii);
          for (var wi in hi)
            if (hi.hasOwnProperty(wi)) {
              var zi = hi[wi];
              N(zi) || (zi = { value: zi }), oe(ri, wi, zi);
            }
        } else
          for (var Ki = ii.split(","), Yi = 0; Yi < Ki.length; Yi++)
            oe(ri, Ki[Yi].trim(), []);
      }
      var p = /[\s,]/, Ue = /[_$a-zA-Z]/, Be = /[_$a-zA-Z0-9]/, Ve = ['"', "'", "/"], je = /[^\s]/;
      function We(Fe) {
        for (var ei = [], ri = 0; ri < Fe.length; ) {
          if (Ue.exec(Fe.charAt(ri))) {
            for (var ii = ri; Be.exec(Fe.charAt(ri + 1)); )
              ri++;
            ei.push(Fe.substr(ii, ri - ii + 1));
          } else if (Ve.indexOf(Fe.charAt(ri)) !== -1) {
            var hi = Fe.charAt(ri), ii = ri;
            for (ri++; ri < Fe.length && Fe.charAt(ri) !== hi; )
              Fe.charAt(ri) === "\\" && ri++, ri++;
            ei.push(Fe.substr(ii, ri - ii + 1));
          } else {
            var wi = Fe.charAt(ri);
            ei.push(wi);
          }
          ri++;
        }
        return ei;
      }
      function _e(Fe, ei, ri) {
        return Ue.exec(Fe.charAt(0)) && Fe !== "true" && Fe !== "false" && Fe !== "this" && Fe !== ri && ei !== ".";
      }
      function ze(Fe, ei, ri) {
        if (ei[0] === "[") {
          ei.shift();
          for (var ii = 1, hi = " return (function(" + ri + "){ return (", wi = null; ei.length > 0; ) {
            var zi = ei[0];
            if (zi === "]") {
              if (ii--, ii === 0) {
                wi === null && (hi = hi + "true"), ei.shift(), hi += ")})";
                try {
                  var Ki = hr(Fe, function() {
                    return Function(hi)();
                  }, function() {
                    return !0;
                  });
                  return Ki.source = hi, Ki;
                } catch (Yi) {
                  return ae(K().body, "htmx:syntax:error", { error: Yi, source: hi }), null;
                }
              }
            } else
              zi === "[" && ii++;
            _e(zi, wi, ri) ? hi += "((" + ri + "." + zi + ") ? (" + ri + "." + zi + ") : (window." + zi + "))" : hi = hi + zi, wi = ei.shift();
          }
        }
      }
      function m(Fe, ei) {
        for (var ri = ""; Fe.length > 0 && !Fe[0].match(ei); )
          ri += Fe.shift();
        return ri;
      }
      var $e = "input, textarea, select";
      function Ge(Fe) {
        var ei = Z(Fe, "hx-trigger"), ri = [];
        if (ei) {
          var ii = We(ei);
          do {
            m(ii, je);
            var hi = ii.length, wi = m(ii, /[,\[\s]/);
            if (wi !== "")
              if (wi === "every") {
                var zi = { trigger: "every" };
                m(ii, je), zi.pollInterval = v(m(ii, /[,\[\s]/)), m(ii, je);
                var Ki = ze(Fe, ii, "event");
                Ki && (zi.eventFilter = Ki), ri.push(zi);
              } else if (wi.indexOf("sse:") === 0)
                ri.push({ trigger: "sse", sseEvent: wi.substr(4) });
              else {
                var Yi = { trigger: wi }, Ki = ze(Fe, ii, "event");
                for (Ki && (Yi.eventFilter = Ki); ii.length > 0 && ii[0] !== ","; ) {
                  m(ii, je);
                  var es = ii.shift();
                  if (es === "changed")
                    Yi.changed = !0;
                  else if (es === "once")
                    Yi.once = !0;
                  else if (es === "consume")
                    Yi.consume = !0;
                  else if (es === "delay" && ii[0] === ":")
                    ii.shift(), Yi.delay = v(m(ii, p));
                  else if (es === "from" && ii[0] === ":") {
                    ii.shift();
                    var is = m(ii, p);
                    (is === "closest" || is === "find" || is === "next" || is === "previous") && (ii.shift(), is += " " + m(ii, p)), Yi.from = is;
                  } else
                    es === "target" && ii[0] === ":" ? (ii.shift(), Yi.target = m(ii, p)) : es === "throttle" && ii[0] === ":" ? (ii.shift(), Yi.throttle = v(m(ii, p))) : es === "queue" && ii[0] === ":" ? (ii.shift(), Yi.queue = m(ii, p)) : (es === "root" || es === "threshold") && ii[0] === ":" ? (ii.shift(), Yi[es] = m(ii, p)) : ae(Fe, "htmx:syntax:error", { token: ii.shift() });
                }
                ri.push(Yi);
              }
            ii.length === hi && ae(Fe, "htmx:syntax:error", { token: ii.shift() }), m(ii, je);
          } while (ii[0] === "," && ii.shift());
        }
        return ri.length > 0 ? ri : h(Fe, "form") ? [{ trigger: "submit" }] : h(Fe, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(Fe, $e) ? [{ trigger: "change" }] : [{ trigger: "click" }];
      }
      function Je(Fe) {
        ee(Fe).cancelled = !0;
      }
      function Ze(Fe, ei, ri) {
        var ii = ee(Fe);
        ii.timeout = setTimeout(function() {
          re(Fe) && ii.cancelled !== !0 && (tt(ri, Fe, Pt("hx:poll:trigger", { triggerSpec: ri, target: Fe })) || ei(Fe), Ze(Fe, ei, ri));
        }, ri.pollInterval);
      }
      function Ke(Fe) {
        return location.hostname === Fe.hostname && J(Fe, "href") && J(Fe, "href").indexOf("#") !== 0;
      }
      function Ye(Fe, ei, ri) {
        if (Fe.tagName === "A" && Ke(Fe) && (Fe.target === "" || Fe.target === "_self") || Fe.tagName === "FORM") {
          ei.boosted = !0;
          var ii, hi;
          if (Fe.tagName === "A")
            ii = "get", hi = Fe.href;
          else {
            var wi = J(Fe, "method");
            ii = wi ? wi.toLowerCase() : "get", hi = J(Fe, "action");
          }
          ri.forEach(function(zi) {
            rt(Fe, function(Ki, Yi) {
              if (d(Ki, G.config.disableSelector)) {
                g(Ki);
                return;
              }
              se(ii, hi, Ki, Yi);
            }, ei, zi, !0);
          });
        }
      }
      function Qe(Fe, ei) {
        return !!((Fe.type === "submit" || Fe.type === "click") && (ei.tagName === "FORM" || h(ei, 'input[type="submit"], button') && d(ei, "form") !== null || ei.tagName === "A" && ei.href && (ei.getAttribute("href") === "#" || ei.getAttribute("href").indexOf("#") !== 0)));
      }
      function et(Fe, ei) {
        return ee(Fe).boosted && Fe.tagName === "A" && ei.type === "click" && (ei.ctrlKey || ei.metaKey);
      }
      function tt(Fe, ei, ri) {
        var ii = Fe.eventFilter;
        if (ii)
          try {
            return ii.call(ei, ri) !== !0;
          } catch (hi) {
            return ae(K().body, "htmx:eventFilter:error", { error: hi, source: ii.source }), !0;
          }
        return !1;
      }
      function rt(Fe, ei, ri, ii, hi) {
        var wi = ee(Fe), zi;
        ii.from ? zi = W(Fe, ii.from) : zi = [Fe], ii.changed && zi.forEach(function(Ki) {
          var Yi = ee(Ki);
          Yi.lastValue = Ki.value;
        }), te(zi, function(Ki) {
          var Yi = function(es) {
            if (!re(Fe)) {
              Ki.removeEventListener(ii.trigger, Yi);
              return;
            }
            if (!et(Fe, es) && ((hi || Qe(es, Fe)) && es.preventDefault(), !tt(ii, Fe, es))) {
              var is = ee(es);
              if (is.triggerSpec = ii, is.handledFor == null && (is.handledFor = []), is.handledFor.indexOf(Fe) < 0) {
                if (is.handledFor.push(Fe), ii.consume && es.stopPropagation(), ii.target && es.target && !h(es.target, ii.target))
                  return;
                if (ii.once) {
                  if (wi.triggeredOnce)
                    return;
                  wi.triggeredOnce = !0;
                }
                if (ii.changed) {
                  var $i = ee(Ki);
                  if ($i.lastValue === Ki.value)
                    return;
                  $i.lastValue = Ki.value;
                }
                if (wi.delayed && clearTimeout(wi.delayed), wi.throttle)
                  return;
                ii.throttle ? wi.throttle || (ei(Fe, es), wi.throttle = setTimeout(function() {
                  wi.throttle = null;
                }, ii.throttle)) : ii.delay ? wi.delayed = setTimeout(function() {
                  ei(Fe, es);
                }, ii.delay) : (oe(Fe, "htmx:trigger"), ei(Fe, es));
              }
            }
          };
          ri.listenerInfos == null && (ri.listenerInfos = []), ri.listenerInfos.push({ trigger: ii.trigger, listener: Yi, on: Ki }), Ki.addEventListener(ii.trigger, Yi);
        });
      }
      var nt = !1, it = null;
      function at() {
        it || (it = function() {
          nt = !0;
        }, window.addEventListener("scroll", it), setInterval(function() {
          nt && (nt = !1, te(K().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(Fe) {
            ot(Fe);
          }));
        }, 200));
      }
      function ot(Fe) {
        if (!o(Fe, "data-hx-revealed") && P(Fe)) {
          Fe.setAttribute("data-hx-revealed", "true");
          var ei = ee(Fe);
          ei.initHash ? oe(Fe, "revealed") : Fe.addEventListener("htmx:afterProcessNode", function(ri) {
            oe(Fe, "revealed");
          }, { once: !0 });
        }
      }
      function st(Fe, ei, ri) {
        for (var ii = k(ri), hi = 0; hi < ii.length; hi++) {
          var wi = ii[hi].split(/:(.+)/);
          wi[0] === "connect" && lt(Fe, wi[1], 0), wi[0] === "send" && ft(Fe);
        }
      }
      function lt(Fe, ei, ri) {
        if (re(Fe)) {
          if (ei.indexOf("/") == 0) {
            var ii = location.hostname + (location.port ? ":" + location.port : "");
            location.protocol == "https:" ? ei = "wss://" + ii + ei : location.protocol == "http:" && (ei = "ws://" + ii + ei);
          }
          var hi = G.createWebSocket(ei);
          hi.onerror = function(wi) {
            ae(Fe, "htmx:wsError", { error: wi, socket: hi }), ut(Fe);
          }, hi.onclose = function(wi) {
            if ([1006, 1012, 1013].indexOf(wi.code) >= 0) {
              var zi = ct(ri);
              setTimeout(function() {
                lt(Fe, ei, ri + 1);
              }, zi);
            }
          }, hi.onopen = function(wi) {
            ri = 0;
          }, ee(Fe).webSocket = hi, hi.addEventListener("message", function(wi) {
            if (!ut(Fe)) {
              var zi = wi.data;
              w(Fe, function(Vi) {
                zi = Vi.transformResponse(zi, null, Fe);
              });
              for (var Ki = S(Fe), Yi = l(zi), es = I(Yi.children), is = 0; is < es.length; is++) {
                var $i = es[is];
                me(Z($i, "hx-swap-oob") || "true", $i, Ki);
              }
              Wt(Ki.tasks);
            }
          });
        }
      }
      function ut(Fe) {
        if (!re(Fe))
          return ee(Fe).webSocket.close(), !0;
      }
      function ft(Fe) {
        var ei = c(Fe, function(ri) {
          return ee(ri).webSocket != null;
        });
        ei ? Fe.addEventListener(Ge(Fe)[0].trigger, function(ri) {
          var ii = ee(ei).webSocket, hi = ir(Fe, ei), wi = er(Fe, "post"), zi = wi.errors, Ki = wi.values, Yi = gr(Fe), es = ne(Ki, Yi), is = ar(es, Fe);
          if (is.HEADERS = hi, zi && zi.length > 0) {
            oe(Fe, "htmx:validation:halted", zi);
            return;
          }
          ii.send(JSON.stringify(is)), Qe(ri, Fe) && ri.preventDefault();
        }) : ae(Fe, "htmx:noWebSocketSourceError");
      }
      function ct(Fe) {
        var ei = G.config.wsReconnectDelay;
        if (typeof ei == "function")
          return ei(Fe);
        if (ei === "full-jitter") {
          var ri = Math.min(Fe, 6), ii = 1e3 * Math.pow(2, ri);
          return ii * Math.random();
        }
        x('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function ht(Fe, ei, ri) {
        for (var ii = k(ri), hi = 0; hi < ii.length; hi++) {
          var wi = ii[hi].split(/:(.+)/);
          wi[0] === "connect" && dt(Fe, wi[1]), wi[0] === "swap" && vt(Fe, wi[1]);
        }
      }
      function dt(Fe, ei) {
        var ri = G.createEventSource(ei);
        ri.onerror = function(ii) {
          ae(Fe, "htmx:sseError", { error: ii, source: ri }), pt(Fe);
        }, ee(Fe).sseEventSource = ri;
      }
      function vt(Fe, ei) {
        var ri = c(Fe, mt);
        if (ri) {
          var ii = ee(ri).sseEventSource, hi = function(wi) {
            if (!pt(ri)) {
              if (!re(Fe)) {
                ii.removeEventListener(ei, hi);
                return;
              }
              var zi = wi.data;
              w(Fe, function(is) {
                zi = is.transformResponse(zi, null, Fe);
              });
              var Ki = sr(Fe), Yi = de(Fe), es = S(Fe);
              De(Ki.swapStyle, Yi, Fe, zi, es), Wt(es.tasks), oe(Fe, "htmx:sseMessage", wi);
            }
          };
          ee(Fe).sseListener = hi, ii.addEventListener(ei, hi);
        } else
          ae(Fe, "htmx:noSSESourceError");
      }
      function gt(Fe, ei, ri) {
        var ii = c(Fe, mt);
        if (ii) {
          var hi = ee(ii).sseEventSource, wi = function() {
            pt(ii) || (re(Fe) ? ei(Fe) : hi.removeEventListener(ri, wi));
          };
          ee(Fe).sseListener = wi, hi.addEventListener(ri, wi);
        } else
          ae(Fe, "htmx:noSSESourceError");
      }
      function pt(Fe) {
        if (!re(Fe))
          return ee(Fe).sseEventSource.close(), !0;
      }
      function mt(Fe) {
        return ee(Fe).sseEventSource != null;
      }
      function xt(Fe, ei, ri, ii) {
        var hi = function() {
          ri.loaded || (ri.loaded = !0, ei(Fe));
        };
        ii ? setTimeout(hi, ii) : hi();
      }
      function yt(Fe, ei, ri) {
        var ii = !1;
        return te(R, function(hi) {
          if (o(Fe, "hx-" + hi)) {
            var wi = Z(Fe, "hx-" + hi);
            ii = !0, ei.path = wi, ei.verb = hi, ri.forEach(function(zi) {
              bt(Fe, zi, ei, function(Ki, Yi) {
                if (d(Ki, G.config.disableSelector)) {
                  g(Ki);
                  return;
                }
                se(hi, wi, Ki, Yi);
              });
            });
          }
        }), ii;
      }
      function bt(Fe, ei, ri, ii) {
        if (ei.sseEvent)
          gt(Fe, ii, ei.sseEvent);
        else if (ei.trigger === "revealed")
          at(), rt(Fe, ii, ri, ei), ot(Fe);
        else if (ei.trigger === "intersect") {
          var hi = {};
          ei.root && (hi.root = ie(Fe, ei.root)), ei.threshold && (hi.threshold = parseFloat(ei.threshold));
          var wi = new IntersectionObserver(function(zi) {
            for (var Ki = 0; Ki < zi.length; Ki++) {
              var Yi = zi[Ki];
              if (Yi.isIntersecting) {
                oe(Fe, "intersect");
                break;
              }
            }
          }, hi);
          wi.observe(Fe), rt(Fe, ii, ri, ei);
        } else
          ei.trigger === "load" ? tt(ei, Fe, Pt("load", { elt: Fe })) || xt(Fe, ii, ri, ei.delay) : ei.pollInterval ? (ri.polling = !0, Ze(Fe, ii, ei)) : rt(Fe, ii, ri, ei);
      }
      function wt(Fe) {
        if (G.config.allowScriptTags && (Fe.type === "text/javascript" || Fe.type === "module" || Fe.type === "")) {
          var ei = K().createElement("script");
          te(Fe.attributes, function(ii) {
            ei.setAttribute(ii.name, ii.value);
          }), ei.textContent = Fe.textContent, ei.async = !1, G.config.inlineScriptNonce && (ei.nonce = G.config.inlineScriptNonce);
          var ri = Fe.parentElement;
          try {
            ri.insertBefore(ei, Fe);
          } catch (ii) {
            x(ii);
          } finally {
            Fe.parentElement && Fe.parentElement.removeChild(Fe);
          }
        }
      }
      function St(Fe) {
        h(Fe, "script") && wt(Fe), te(f(Fe, "script"), function(ei) {
          wt(ei);
        });
      }
      function Et() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Ct(Fe) {
        if (!document.evaluate)
          return [];
        let ei = null;
        const ri = [], ii = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', Fe);
        for (; ei = ii.iterateNext(); )
          ri.push(ei);
        return ri;
      }
      function Rt(Fe) {
        if (Fe.querySelectorAll) {
          var ei = Et() ? ", a" : "", ri = Fe.querySelectorAll(O + ei + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return ri;
        } else
          return [];
      }
      function Ot(Fe) {
        var ei = s("#" + J(Fe, "form")) || d(Fe, "form");
        if (ei) {
          var ri = function(ii) {
            var hi = d(ii.target, "button, input[type='submit']");
            if (hi !== null) {
              var wi = ee(ei);
              wi.lastButtonClicked = hi;
            }
          };
          Fe.addEventListener("click", ri), Fe.addEventListener("focusin", ri), Fe.addEventListener("focusout", function(ii) {
            var hi = ee(ei);
            hi.lastButtonClicked = null;
          });
        }
      }
      function Tt(Fe) {
        var ei = We(Fe), ri = 0;
        for (let ii = 0; ii < ei.length; ii++) {
          const hi = ei[ii];
          hi === "{" ? ri++ : hi === "}" && ri--;
        }
        return ri;
      }
      function qt(Fe, ei, ri) {
        var ii = ee(Fe);
        ii.onHandlers = [];
        var hi, wi = function(zi) {
          return hr(Fe, function() {
            hi || (hi = new Function("event", ri)), hi.call(Fe, zi);
          });
        };
        Fe.addEventListener(ei, wi), ii.onHandlers.push({ event: ei, listener: wi });
      }
      function Ht(Fe) {
        var ei = Z(Fe, "hx-on");
        if (ei) {
          for (var ri = {}, ii = ei.split(`
`), hi = null, wi = 0; ii.length > 0; ) {
            var zi = ii.shift(), Ki = zi.match(/^\s*([a-zA-Z:\-]+:)(.*)/);
            wi === 0 && Ki ? (zi.split(":"), hi = Ki[1].slice(0, -1), ri[hi] = Ki[2]) : ri[hi] += zi, wi += Tt(zi);
          }
          for (var Yi in ri)
            qt(Fe, Yi, ri[Yi]);
        }
      }
      function Lt(Fe) {
        Re(Fe);
        for (var ei = 0; ei < Fe.attributes.length; ei++) {
          var ri = Fe.attributes[ei].name, ii = Fe.attributes[ei].value;
          if (ri.startsWith("hx-on:") || ri.startsWith("data-hx-on:")) {
            let hi = ri.slice(ri.indexOf(":") + 1);
            hi.startsWith(":") && (hi = "htmx" + hi), qt(Fe, hi, ii);
          }
        }
      }
      function At(Fe) {
        if (d(Fe, G.config.disableSelector)) {
          g(Fe);
          return;
        }
        var ei = ee(Fe);
        if (ei.initHash !== Ce(Fe)) {
          Oe(Fe), ei.initHash = Ce(Fe), Ht(Fe), oe(Fe, "htmx:beforeProcessNode"), Fe.value && (ei.lastValue = Fe.value);
          var ri = Ge(Fe), ii = yt(Fe, ei, ri);
          ii || (Y(Fe, "hx-boost") === "true" ? Ye(Fe, ei, ri) : o(Fe, "hx-trigger") && ri.forEach(function(zi) {
            bt(Fe, zi, ei, function() {
            });
          })), (Fe.tagName === "FORM" || J(Fe, "type") === "submit" && o(Fe, "form")) && Ot(Fe);
          var hi = Z(Fe, "hx-sse");
          hi && ht(Fe, ei, hi);
          var wi = Z(Fe, "hx-ws");
          wi && st(Fe, ei, wi), oe(Fe, "htmx:afterProcessNode");
        }
      }
      function Nt(Fe) {
        if (Fe = s(Fe), d(Fe, G.config.disableSelector)) {
          g(Fe);
          return;
        }
        At(Fe), te(Rt(Fe), function(ei) {
          At(ei);
        }), te(Ct(Fe), Lt);
      }
      function It(Fe) {
        return Fe.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Pt(Fe, ei) {
        var ri;
        return window.CustomEvent && typeof window.CustomEvent == "function" ? ri = new CustomEvent(Fe, { bubbles: !0, cancelable: !0, detail: ei }) : (ri = K().createEvent("CustomEvent"), ri.initCustomEvent(Fe, !0, !0, ei)), ri;
      }
      function ae(Fe, ei, ri) {
        oe(Fe, ei, ne({ error: ei }, ri));
      }
      function kt(Fe) {
        return Fe === "htmx:afterProcessNode";
      }
      function w(Fe, ei) {
        te(Tr(Fe), function(ri) {
          try {
            ei(ri);
          } catch (ii) {
            x(ii);
          }
        });
      }
      function x(Fe) {
        console.error ? console.error(Fe) : console.log && console.log("ERROR: ", Fe);
      }
      function oe(Fe, ei, ri) {
        Fe = s(Fe), ri == null && (ri = {}), ri.elt = Fe;
        var ii = Pt(ei, ri);
        G.logger && !kt(ei) && G.logger(Fe, ei, ri), ri.error && (x(ri.error), oe(Fe, "htmx:error", { errorInfo: ri }));
        var hi = Fe.dispatchEvent(ii), wi = It(ei);
        if (hi && wi !== ei) {
          var zi = Pt(wi, ii.detail);
          hi = hi && Fe.dispatchEvent(zi);
        }
        return w(Fe, function(Ki) {
          hi = hi && Ki.onEvent(ei, ii) !== !1;
        }), hi;
      }
      var Mt = location.pathname + location.search;
      function Dt() {
        var Fe = K().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return Fe || K().body;
      }
      function Xt(Fe, ei, ri, ii) {
        if (M()) {
          Fe = D(Fe);
          for (var hi = y(localStorage.getItem("htmx-history-cache")) || [], wi = 0; wi < hi.length; wi++)
            if (hi[wi].url === Fe) {
              hi.splice(wi, 1);
              break;
            }
          var zi = { url: Fe, content: ei, title: ri, scroll: ii };
          for (oe(K().body, "htmx:historyItemCreated", { item: zi, cache: hi }), hi.push(zi); hi.length > G.config.historyCacheSize; )
            hi.shift();
          for (; hi.length > 0; )
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(hi));
              break;
            } catch (Ki) {
              ae(K().body, "htmx:historyCacheError", { cause: Ki, cache: hi }), hi.shift();
            }
        }
      }
      function Ft(Fe) {
        if (!M())
          return null;
        Fe = D(Fe);
        for (var ei = y(localStorage.getItem("htmx-history-cache")) || [], ri = 0; ri < ei.length; ri++)
          if (ei[ri].url === Fe)
            return ei[ri];
        return null;
      }
      function Ut(Fe) {
        var ei = G.config.requestClass, ri = Fe.cloneNode(!0);
        return te(f(ri, "." + ei), function(ii) {
          n(ii, ei);
        }), ri.innerHTML;
      }
      function Bt() {
        var Fe = Dt(), ei = Mt || location.pathname + location.search, ri = K().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        ri || (oe(K().body, "htmx:beforeHistorySave", { path: ei, historyElt: Fe }), Xt(ei, Ut(Fe), K().title, window.scrollY)), G.config.historyEnabled && history.replaceState({ htmx: !0 }, K().title, window.location.href);
      }
      function Vt(Fe) {
        G.config.getCacheBusterParam && (Fe = Fe.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (Fe.endsWith("&") || Fe.endsWith("?")) && (Fe = Fe.slice(0, -1))), G.config.historyEnabled && history.pushState({ htmx: !0 }, "", Fe), Mt = Fe;
      }
      function jt(Fe) {
        G.config.historyEnabled && history.replaceState({ htmx: !0 }, "", Fe), Mt = Fe;
      }
      function Wt(Fe) {
        te(Fe, function(ei) {
          ei.call();
        });
      }
      function _t(Fe) {
        var ei = new XMLHttpRequest(), ri = { path: Fe, xhr: ei };
        oe(K().body, "htmx:historyCacheMiss", ri), ei.open("GET", Fe, !0), ei.setRequestHeader("HX-History-Restore-Request", "true"), ei.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            oe(K().body, "htmx:historyCacheMissLoad", ri);
            var ii = l(this.response);
            ii = ii.querySelector("[hx-history-elt],[data-hx-history-elt]") || ii;
            var hi = Dt(), wi = S(hi), zi = Me(this.response);
            if (zi) {
              var Ki = b("title");
              Ki ? Ki.innerHTML = zi : window.document.title = zi;
            }
            Ie(hi, ii, wi), Wt(wi.tasks), Mt = Fe, oe(K().body, "htmx:historyRestore", { path: Fe, cacheMiss: !0, serverResponse: this.response });
          } else
            ae(K().body, "htmx:historyCacheMissLoadError", ri);
        }, ei.send();
      }
      function zt(Fe) {
        Bt(), Fe = Fe || location.pathname + location.search;
        var ei = Ft(Fe);
        if (ei) {
          var ri = l(ei.content), ii = Dt(), hi = S(ii);
          Ie(ii, ri, hi), Wt(hi.tasks), document.title = ei.title, setTimeout(function() {
            window.scrollTo(0, ei.scroll);
          }, 0), Mt = Fe, oe(K().body, "htmx:historyRestore", { path: Fe, item: ei });
        } else
          G.config.refreshOnHistoryMiss ? window.location.reload(!0) : _t(Fe);
      }
      function $t(Fe) {
        var ei = ce(Fe, "hx-indicator");
        return ei == null && (ei = [Fe]), te(ei, function(ri) {
          var ii = ee(ri);
          ii.requestCount = (ii.requestCount || 0) + 1, ri.classList.add.call(ri.classList, G.config.requestClass);
        }), ei;
      }
      function Gt(Fe) {
        te(Fe, function(ei) {
          var ri = ee(ei);
          ri.requestCount = (ri.requestCount || 0) - 1, ri.requestCount === 0 && ei.classList.remove.call(ei.classList, G.config.requestClass);
        });
      }
      function Jt(Fe, ei) {
        for (var ri = 0; ri < Fe.length; ri++) {
          var ii = Fe[ri];
          if (ii.isSameNode(ei))
            return !0;
        }
        return !1;
      }
      function Zt(Fe) {
        return Fe.name === "" || Fe.name == null || Fe.disabled || Fe.type === "button" || Fe.type === "submit" || Fe.tagName === "image" || Fe.tagName === "reset" || Fe.tagName === "file" ? !1 : Fe.type === "checkbox" || Fe.type === "radio" ? Fe.checked : !0;
      }
      function Kt(Fe, ei, ri) {
        if (Fe != null && ei != null) {
          var ii = ri[Fe];
          ii === void 0 ? ri[Fe] = ei : Array.isArray(ii) ? Array.isArray(ei) ? ri[Fe] = ii.concat(ei) : ii.push(ei) : Array.isArray(ei) ? ri[Fe] = [ii].concat(ei) : ri[Fe] = [ii, ei];
        }
      }
      function Yt(Fe, ei, ri, ii, hi) {
        if (!(ii == null || Jt(Fe, ii))) {
          if (Fe.push(ii), Zt(ii)) {
            var wi = J(ii, "name"), zi = ii.value;
            ii.multiple && (zi = I(ii.querySelectorAll("option:checked")).map(function(Yi) {
              return Yi.value;
            })), ii.files && (zi = I(ii.files)), Kt(wi, zi, ei), hi && Qt(ii, ri);
          }
          if (h(ii, "form")) {
            var Ki = ii.elements;
            te(Ki, function(Yi) {
              Yt(Fe, ei, ri, Yi, hi);
            });
          }
        }
      }
      function Qt(Fe, ei) {
        Fe.willValidate && (oe(Fe, "htmx:validation:validate"), Fe.checkValidity() || (ei.push({ elt: Fe, message: Fe.validationMessage, validity: Fe.validity }), oe(Fe, "htmx:validation:failed", { message: Fe.validationMessage, validity: Fe.validity })));
      }
      function er(Fe, ei) {
        var ri = [], ii = {}, hi = {}, wi = [], zi = ee(Fe), Ki = h(Fe, "form") && Fe.noValidate !== !0 || Z(Fe, "hx-validate") === "true";
        if (zi.lastButtonClicked && (Ki = Ki && zi.lastButtonClicked.formNoValidate !== !0), ei !== "get" && Yt(ri, hi, wi, d(Fe, "form"), Ki), Yt(ri, ii, wi, Fe, Ki), zi.lastButtonClicked || Fe.tagName === "BUTTON" || Fe.tagName === "INPUT" && J(Fe, "type") === "submit") {
          var Yi = zi.lastButtonClicked || Fe, es = J(Yi, "name");
          Kt(es, Yi.value, hi);
        }
        var is = ce(Fe, "hx-include");
        return te(is, function($i) {
          Yt(ri, ii, wi, $i, Ki), h($i, "form") || te($i.querySelectorAll($e), function(Vi) {
            Yt(ri, ii, wi, Vi, Ki);
          });
        }), ii = ne(ii, hi), { errors: wi, values: ii };
      }
      function tr(Fe, ei, ri) {
        Fe !== "" && (Fe += "&"), String(ri) === "[object Object]" && (ri = JSON.stringify(ri));
        var ii = encodeURIComponent(ri);
        return Fe += encodeURIComponent(ei) + "=" + ii, Fe;
      }
      function rr(Fe) {
        var ei = "";
        for (var ri in Fe)
          if (Fe.hasOwnProperty(ri)) {
            var ii = Fe[ri];
            Array.isArray(ii) ? te(ii, function(hi) {
              ei = tr(ei, ri, hi);
            }) : ei = tr(ei, ri, ii);
          }
        return ei;
      }
      function nr(Fe) {
        var ei = new FormData();
        for (var ri in Fe)
          if (Fe.hasOwnProperty(ri)) {
            var ii = Fe[ri];
            Array.isArray(ii) ? te(ii, function(hi) {
              ei.append(ri, hi);
            }) : ei.append(ri, ii);
          }
        return ei;
      }
      function ir(Fe, ei, ri) {
        var ii = { "HX-Request": "true", "HX-Trigger": J(Fe, "id"), "HX-Trigger-Name": J(Fe, "name"), "HX-Target": Z(ei, "id"), "HX-Current-URL": K().location.href };
        return cr(Fe, "hx-headers", !1, ii), ri !== void 0 && (ii["HX-Prompt"] = ri), ee(Fe).boosted && (ii["HX-Boosted"] = "true"), ii;
      }
      function ar(Fe, ei) {
        var ri = Y(ei, "hx-params");
        if (ri) {
          if (ri === "none")
            return {};
          if (ri === "*")
            return Fe;
          if (ri.indexOf("not ") === 0)
            return te(ri.substr(4).split(","), function(hi) {
              hi = hi.trim(), delete Fe[hi];
            }), Fe;
          var ii = {};
          return te(ri.split(","), function(hi) {
            hi = hi.trim(), ii[hi] = Fe[hi];
          }), ii;
        } else
          return Fe;
      }
      function or(Fe) {
        return J(Fe, "href") && J(Fe, "href").indexOf("#") >= 0;
      }
      function sr(Fe, ei) {
        var ri = ei || Y(Fe, "hx-swap"), ii = { swapStyle: ee(Fe).boosted ? "innerHTML" : G.config.defaultSwapStyle, swapDelay: G.config.defaultSwapDelay, settleDelay: G.config.defaultSettleDelay };
        if (ee(Fe).boosted && !or(Fe) && (ii.show = "top"), ri) {
          var hi = k(ri);
          if (hi.length > 0) {
            ii.swapStyle = hi[0];
            for (var wi = 1; wi < hi.length; wi++) {
              var zi = hi[wi];
              if (zi.indexOf("swap:") === 0 && (ii.swapDelay = v(zi.substr(5))), zi.indexOf("settle:") === 0 && (ii.settleDelay = v(zi.substr(7))), zi.indexOf("transition:") === 0 && (ii.transition = zi.substr(11) === "true"), zi.indexOf("scroll:") === 0) {
                var Ki = zi.substr(7), Yi = Ki.split(":"), es = Yi.pop(), is = Yi.length > 0 ? Yi.join(":") : null;
                ii.scroll = es, ii.scrollTarget = is;
              }
              if (zi.indexOf("show:") === 0) {
                var $i = zi.substr(5), Yi = $i.split(":"), Vi = Yi.pop(), is = Yi.length > 0 ? Yi.join(":") : null;
                ii.show = Vi, ii.showTarget = is;
              }
              if (zi.indexOf("focus-scroll:") === 0) {
                var _i = zi.substr(13);
                ii.focusScroll = _i == "true";
              }
            }
          }
        }
        return ii;
      }
      function lr(Fe) {
        return Y(Fe, "hx-encoding") === "multipart/form-data" || h(Fe, "form") && J(Fe, "enctype") === "multipart/form-data";
      }
      function ur(Fe, ei, ri) {
        var ii = null;
        return w(ei, function(hi) {
          ii == null && (ii = hi.encodeParameters(Fe, ri, ei));
        }), ii ?? (lr(ei) ? nr(ri) : rr(ri));
      }
      function S(Fe) {
        return { tasks: [], elts: [Fe] };
      }
      function fr(Fe, ei) {
        var ri = Fe[0], ii = Fe[Fe.length - 1];
        if (ei.scroll) {
          var hi = null;
          ei.scrollTarget && (hi = ie(ri, ei.scrollTarget)), ei.scroll === "top" && (ri || hi) && (hi = hi || ri, hi.scrollTop = 0), ei.scroll === "bottom" && (ii || hi) && (hi = hi || ii, hi.scrollTop = hi.scrollHeight);
        }
        if (ei.show) {
          var hi = null;
          if (ei.showTarget) {
            var wi = ei.showTarget;
            ei.showTarget === "window" && (wi = "body"), hi = ie(ri, wi);
          }
          ei.show === "top" && (ri || hi) && (hi = hi || ri, hi.scrollIntoView({ block: "start", behavior: G.config.scrollBehavior })), ei.show === "bottom" && (ii || hi) && (hi = hi || ii, hi.scrollIntoView({ block: "end", behavior: G.config.scrollBehavior }));
        }
      }
      function cr(Fe, ei, ri, ii) {
        if (ii == null && (ii = {}), Fe == null)
          return ii;
        var hi = Z(Fe, ei);
        if (hi) {
          var wi = hi.trim(), zi = ri;
          if (wi === "unset")
            return null;
          wi.indexOf("javascript:") === 0 ? (wi = wi.substr(11), zi = !0) : wi.indexOf("js:") === 0 && (wi = wi.substr(3), zi = !0), wi.indexOf("{") !== 0 && (wi = "{" + wi + "}");
          var Ki;
          zi ? Ki = hr(Fe, function() {
            return Function("return (" + wi + ")")();
          }, {}) : Ki = y(wi);
          for (var Yi in Ki)
            Ki.hasOwnProperty(Yi) && ii[Yi] == null && (ii[Yi] = Ki[Yi]);
        }
        return cr(u(Fe), ei, ri, ii);
      }
      function hr(Fe, ei, ri) {
        return G.config.allowEval ? ei() : (ae(Fe, "htmx:evalDisallowedError"), ri);
      }
      function dr(Fe, ei) {
        return cr(Fe, "hx-vars", !0, ei);
      }
      function vr(Fe, ei) {
        return cr(Fe, "hx-vals", !1, ei);
      }
      function gr(Fe) {
        return ne(dr(Fe), vr(Fe));
      }
      function pr(Fe, ei, ri) {
        if (ri !== null)
          try {
            Fe.setRequestHeader(ei, ri);
          } catch {
            Fe.setRequestHeader(ei, encodeURIComponent(ri)), Fe.setRequestHeader(ei + "-URI-AutoEncoded", "true");
          }
      }
      function mr(Fe) {
        if (Fe.responseURL && typeof URL < "u")
          try {
            var ei = new URL(Fe.responseURL);
            return ei.pathname + ei.search;
          } catch {
            ae(K().body, "htmx:badResponseUrl", { url: Fe.responseURL });
          }
      }
      function E(Fe, ei) {
        return Fe.getAllResponseHeaders().match(ei);
      }
      function xr(Fe, ei, ri) {
        return Fe = Fe.toLowerCase(), ri ? ri instanceof Element || L(ri, "String") ? se(Fe, ei, null, null, { targetOverride: s(ri), returnPromise: !0 }) : se(Fe, ei, s(ri.source), ri.event, { handler: ri.handler, headers: ri.headers, values: ri.values, targetOverride: s(ri.target), swapOverride: ri.swap, returnPromise: !0 }) : se(Fe, ei, null, null, { returnPromise: !0 });
      }
      function yr(Fe) {
        for (var ei = []; Fe; )
          ei.push(Fe), Fe = Fe.parentElement;
        return ei;
      }
      function br(Fe, ei, ri) {
        var ii = new URL(ei, document.location.href), hi = document.location.origin, wi = hi === ii.origin;
        return G.config.selfRequestsOnly && !wi ? !1 : oe(Fe, "htmx:validateUrl", ne({ url: ii, sameHost: wi }, ri));
      }
      function se(Fe, ei, ri, ii, hi, wi) {
        var zi = null, Ki = null;
        if (hi = hi ?? {}, hi.returnPromise && typeof Promise < "u")
          var Yi = new Promise(function(xi, yi) {
            zi = xi, Ki = yi;
          });
        ri == null && (ri = K().body);
        var es = hi.handler || Sr;
        if (re(ri)) {
          var is = hi.targetOverride || de(ri);
          if (is == null || is == fe) {
            ae(ri, "htmx:targetError", { target: Z(ri, "hx-target") });
            return;
          }
          if (!wi) {
            var $i = function() {
              return se(Fe, ei, ri, ii, hi, !0);
            }, Vi = { target: is, elt: ri, path: ei, verb: Fe, triggeringEvent: ii, etc: hi, issueRequest: $i };
            if (oe(ri, "htmx:confirm", Vi) === !1)
              return;
          }
          var _i = ri, bi = ee(ri), Ai = Y(ri, "hx-sync"), ji = null, Ni = !1;
          if (Ai) {
            var gi = Ai.split(":"), ki = gi[0].trim();
            if (ki === "this" ? _i = he(ri, "hx-sync") : _i = ie(ri, ki), Ai = (gi[1] || "drop").trim(), bi = ee(_i), Ai === "drop" && bi.xhr && bi.abortable !== !0)
              return;
            if (Ai === "abort") {
              if (bi.xhr)
                return;
              Ni = !0;
            } else if (Ai === "replace")
              oe(_i, "htmx:abort");
            else if (Ai.indexOf("queue") === 0) {
              var Ci = Ai.split(" ");
              ji = (Ci[1] || "last").trim();
            }
          }
          if (bi.xhr)
            if (bi.abortable)
              oe(_i, "htmx:abort");
            else {
              if (ji == null) {
                if (ii) {
                  var Si = ee(ii);
                  Si && Si.triggerSpec && Si.triggerSpec.queue && (ji = Si.triggerSpec.queue);
                }
                ji == null && (ji = "last");
              }
              bi.queuedRequests == null && (bi.queuedRequests = []), ji === "first" && bi.queuedRequests.length === 0 ? bi.queuedRequests.push(function() {
                se(Fe, ei, ri, ii, hi);
              }) : ji === "all" ? bi.queuedRequests.push(function() {
                se(Fe, ei, ri, ii, hi);
              }) : ji === "last" && (bi.queuedRequests = [], bi.queuedRequests.push(function() {
                se(Fe, ei, ri, ii, hi);
              }));
              return;
            }
          var Ti = new XMLHttpRequest();
          bi.xhr = Ti, bi.abortable = Ni;
          var Mi = function() {
            if (bi.xhr = null, bi.abortable = !1, bi.queuedRequests != null && bi.queuedRequests.length > 0) {
              var xi = bi.queuedRequests.shift();
              xi();
            }
          }, Di = Y(ri, "hx-prompt");
          if (Di) {
            var ci = prompt(Di);
            if (ci === null || !oe(ri, "htmx:prompt", { prompt: ci, target: is }))
              return Q(zi), Mi(), Yi;
          }
          var pi = Y(ri, "hx-confirm");
          if (pi && !confirm(pi))
            return Q(zi), Mi(), Yi;
          var vi = ir(ri, is, ci);
          hi.headers && (vi = ne(vi, hi.headers));
          var ui = er(ri, Fe), fi = ui.errors, si = ui.values;
          hi.values && (si = ne(si, hi.values));
          var ti = gr(ri), oi = ne(si, ti), di = ar(oi, ri);
          Fe !== "get" && !lr(ri) && (vi["Content-Type"] = "application/x-www-form-urlencoded"), G.config.getCacheBusterParam && Fe === "get" && (di["org.htmx.cache-buster"] = J(is, "id") || "true"), (ei == null || ei === "") && (ei = K().location.href);
          var mi = cr(ri, "hx-request"), Oi = ee(ri).boosted, li = G.config.methodsThatUseUrlParams.indexOf(Fe) >= 0, Li = { boosted: Oi, useUrlParams: li, parameters: di, unfilteredParameters: oi, headers: vi, target: is, verb: Fe, errors: fi, withCredentials: hi.credentials || mi.credentials || G.config.withCredentials, timeout: hi.timeout || mi.timeout || G.config.timeout, path: ei, triggeringEvent: ii };
          if (!oe(ri, "htmx:configRequest", Li))
            return Q(zi), Mi(), Yi;
          if (ei = Li.path, Fe = Li.verb, vi = Li.headers, di = Li.parameters, fi = Li.errors, li = Li.useUrlParams, fi && fi.length > 0)
            return oe(ri, "htmx:validation:halted", Li), Q(zi), Mi(), Yi;
          var Ui = ei.split("#"), Zi = Ui[0], rs = Ui[1], Bi = ei;
          if (li) {
            Bi = Zi;
            var ni = Object.keys(di).length !== 0;
            ni && (Bi.indexOf("?") < 0 ? Bi += "?" : Bi += "&", Bi += rr(di), rs && (Bi += "#" + rs));
          }
          if (!br(ri, Bi, Li)) {
            ae(ri, "htmx:invalidPath", Li);
            return;
          }
          if (Ti.open(Fe.toUpperCase(), Bi, !0), Ti.overrideMimeType("text/html"), Ti.withCredentials = Li.withCredentials, Ti.timeout = Li.timeout, !mi.noHeaders) {
            for (var Pi in vi)
              if (vi.hasOwnProperty(Pi)) {
                var Hi = vi[Pi];
                pr(Ti, Pi, Hi);
              }
          }
          var Ri = { xhr: Ti, target: is, requestConfig: Li, etc: hi, boosted: Oi, pathInfo: { requestPath: ei, finalRequestPath: Bi, anchor: rs } };
          if (Ti.onload = function() {
            try {
              var xi = yr(ri);
              if (Ri.pathInfo.responsePath = mr(Ti), es(ri, Ri), Gt(qi), oe(ri, "htmx:afterRequest", Ri), oe(ri, "htmx:afterOnLoad", Ri), !re(ri)) {
                for (var yi = null; xi.length > 0 && yi == null; ) {
                  var Gi = xi.shift();
                  re(Gi) && (yi = Gi);
                }
                yi && (oe(yi, "htmx:afterRequest", Ri), oe(yi, "htmx:afterOnLoad", Ri));
              }
              Q(zi), Mi();
            } catch (Xi) {
              throw ae(ri, "htmx:onLoadError", ne({ error: Xi }, Ri)), Xi;
            }
          }, Ti.onerror = function() {
            Gt(qi), ae(ri, "htmx:afterRequest", Ri), ae(ri, "htmx:sendError", Ri), Q(Ki), Mi();
          }, Ti.onabort = function() {
            Gt(qi), ae(ri, "htmx:afterRequest", Ri), ae(ri, "htmx:sendAbort", Ri), Q(Ki), Mi();
          }, Ti.ontimeout = function() {
            Gt(qi), ae(ri, "htmx:afterRequest", Ri), ae(ri, "htmx:timeout", Ri), Q(Ki), Mi();
          }, !oe(ri, "htmx:beforeRequest", Ri))
            return Q(zi), Mi(), Yi;
          var qi = $t(ri);
          te(["loadstart", "loadend", "progress", "abort"], function(xi) {
            te([Ti, Ti.upload], function(yi) {
              yi.addEventListener(xi, function(Gi) {
                oe(ri, "htmx:xhr:" + xi, { lengthComputable: Gi.lengthComputable, loaded: Gi.loaded, total: Gi.total });
              });
            });
          }), oe(ri, "htmx:beforeSend", Ri);
          var ai = li ? null : ur(Ti, ri, di);
          return Ti.send(ai), Yi;
        }
      }
      function wr(Fe, ei) {
        var ri = ei.xhr, ii = null, hi = null;
        if (E(ri, /HX-Push:/i) ? (ii = ri.getResponseHeader("HX-Push"), hi = "push") : E(ri, /HX-Push-Url:/i) ? (ii = ri.getResponseHeader("HX-Push-Url"), hi = "push") : E(ri, /HX-Replace-Url:/i) && (ii = ri.getResponseHeader("HX-Replace-Url"), hi = "replace"), ii)
          return ii === "false" ? {} : { type: hi, path: ii };
        var wi = ei.pathInfo.finalRequestPath, zi = ei.pathInfo.responsePath, Ki = Y(Fe, "hx-push-url"), Yi = Y(Fe, "hx-replace-url"), es = ee(Fe).boosted, is = null, $i = null;
        return Ki ? (is = "push", $i = Ki) : Yi ? (is = "replace", $i = Yi) : es && (is = "push", $i = zi || wi), $i ? $i === "false" ? {} : ($i === "true" && ($i = zi || wi), ei.pathInfo.anchor && $i.indexOf("#") === -1 && ($i = $i + "#" + ei.pathInfo.anchor), { type: is, path: $i }) : {};
      }
      function Sr(Fe, ei) {
        var ri = ei.xhr, ii = ei.target, hi = ei.etc;
        if (oe(Fe, "htmx:beforeOnLoad", ei)) {
          if (E(ri, /HX-Trigger:/i) && Xe(ri, "HX-Trigger", Fe), E(ri, /HX-Location:/i)) {
            Bt();
            var wi = ri.getResponseHeader("HX-Location"), zi;
            wi.indexOf("{") === 0 && (zi = y(wi), wi = zi.path, delete zi.path), xr("GET", wi, zi).then(function() {
              Vt(wi);
            });
            return;
          }
          if (E(ri, /HX-Redirect:/i)) {
            location.href = ri.getResponseHeader("HX-Redirect");
            return;
          }
          if (E(ri, /HX-Refresh:/i) && ri.getResponseHeader("HX-Refresh") === "true") {
            location.reload();
            return;
          }
          E(ri, /HX-Retarget:/i) && (ei.target = K().querySelector(ri.getResponseHeader("HX-Retarget")));
          var Ki = wr(Fe, ei), Yi = ri.status >= 200 && ri.status < 400 && ri.status !== 204, es = ri.response, is = ri.status >= 400, $i = ne({ shouldSwap: Yi, serverResponse: es, isError: is }, ei);
          if (oe(ii, "htmx:beforeSwap", $i)) {
            if (ii = $i.target, es = $i.serverResponse, is = $i.isError, ei.target = ii, ei.failed = is, ei.successful = !is, $i.shouldSwap) {
              ri.status === 286 && Je(Fe), w(Fe, function(Ci) {
                es = Ci.transformResponse(es, ri, Fe);
              }), Ki.type && Bt();
              var Vi = hi.swapOverride;
              E(ri, /HX-Reswap:/i) && (Vi = ri.getResponseHeader("HX-Reswap"));
              var zi = sr(Fe, Vi);
              ii.classList.add(G.config.swappingClass);
              var _i = null, bi = null, Ai = function() {
                try {
                  var Ci = document.activeElement, Si = {};
                  try {
                    Si = { elt: Ci, start: Ci ? Ci.selectionStart : null, end: Ci ? Ci.selectionEnd : null };
                  } catch {
                  }
                  var Ti;
                  E(ri, /HX-Reselect:/i) && (Ti = ri.getResponseHeader("HX-Reselect"));
                  var Mi = S(ii);
                  if (De(zi.swapStyle, ii, Fe, es, Mi, Ti), Si.elt && !re(Si.elt) && J(Si.elt, "id")) {
                    var Di = document.getElementById(J(Si.elt, "id")), ci = { preventScroll: zi.focusScroll !== void 0 ? !zi.focusScroll : !G.config.defaultFocusScroll };
                    if (Di) {
                      if (Si.start && Di.setSelectionRange)
                        try {
                          Di.setSelectionRange(Si.start, Si.end);
                        } catch {
                        }
                      Di.focus(ci);
                    }
                  }
                  if (ii.classList.remove(G.config.swappingClass), te(Mi.elts, function(ui) {
                    ui.classList && ui.classList.add(G.config.settlingClass), oe(ui, "htmx:afterSwap", ei);
                  }), E(ri, /HX-Trigger-After-Swap:/i)) {
                    var pi = Fe;
                    re(Fe) || (pi = K().body), Xe(ri, "HX-Trigger-After-Swap", pi);
                  }
                  var vi = function() {
                    if (te(Mi.tasks, function(ti) {
                      ti.call();
                    }), te(Mi.elts, function(ti) {
                      ti.classList && ti.classList.remove(G.config.settlingClass), oe(ti, "htmx:afterSettle", ei);
                    }), Ki.type && (Ki.type === "push" ? (Vt(Ki.path), oe(K().body, "htmx:pushedIntoHistory", { path: Ki.path })) : (jt(Ki.path), oe(K().body, "htmx:replacedInHistory", { path: Ki.path }))), ei.pathInfo.anchor) {
                      var ui = b("#" + ei.pathInfo.anchor);
                      ui && ui.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                    if (Mi.title) {
                      var fi = b("title");
                      fi ? fi.innerHTML = Mi.title : window.document.title = Mi.title;
                    }
                    if (fr(Mi.elts, zi), E(ri, /HX-Trigger-After-Settle:/i)) {
                      var si = Fe;
                      re(Fe) || (si = K().body), Xe(ri, "HX-Trigger-After-Settle", si);
                    }
                    Q(_i);
                  };
                  zi.settleDelay > 0 ? setTimeout(vi, zi.settleDelay) : vi();
                } catch (ui) {
                  throw ae(Fe, "htmx:swapError", ei), Q(bi), ui;
                }
              }, ji = G.config.globalViewTransitions;
              if (zi.hasOwnProperty("transition") && (ji = zi.transition), ji && oe(Fe, "htmx:beforeTransition", ei) && typeof Promise < "u" && document.startViewTransition) {
                var Ni = new Promise(function(Ci, Si) {
                  _i = Ci, bi = Si;
                }), gi = Ai;
                Ai = function() {
                  document.startViewTransition(function() {
                    return gi(), Ni;
                  });
                };
              }
              zi.swapDelay > 0 ? setTimeout(Ai, zi.swapDelay) : Ai();
            }
            is && ae(Fe, "htmx:responseError", ne({ error: "Response Status Error Code " + ri.status + " from " + ei.pathInfo.requestPath }, ei));
          }
        }
      }
      var Er = {};
      function Cr() {
        return { init: function(Fe) {
          return null;
        }, onEvent: function(Fe, ei) {
          return !0;
        }, transformResponse: function(Fe, ei, ri) {
          return Fe;
        }, isInlineSwap: function(Fe) {
          return !1;
        }, handleSwap: function(Fe, ei, ri, ii) {
          return !1;
        }, encodeParameters: function(Fe, ei, ri) {
          return null;
        } };
      }
      function Rr(Fe, ei) {
        ei.init && ei.init(C), Er[Fe] = ne(Cr(), ei);
      }
      function Or(Fe) {
        delete Er[Fe];
      }
      function Tr(Fe, ei, ri) {
        if (Fe == null)
          return ei;
        ei == null && (ei = []), ri == null && (ri = []);
        var ii = Z(Fe, "hx-ext");
        return ii && te(ii.split(","), function(hi) {
          if (hi = hi.replace(/ /g, ""), hi.slice(0, 7) == "ignore:") {
            ri.push(hi.slice(7));
            return;
          }
          if (ri.indexOf(hi) < 0) {
            var wi = Er[hi];
            wi && ei.indexOf(wi) < 0 && ei.push(wi);
          }
        }), Tr(u(Fe), ei, ri);
      }
      var qr = !1;
      K().addEventListener("DOMContentLoaded", function() {
        qr = !0;
      });
      function Hr(Fe) {
        qr || K().readyState === "complete" ? Fe() : K().addEventListener("DOMContentLoaded", Fe);
      }
      function Lr() {
        G.config.includeIndicatorStyles !== !1 && K().head.insertAdjacentHTML("beforeend", "<style>                      ." + G.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + G.config.requestClass + " ." + G.config.indicatorClass + "{opacity:1}                      ." + G.config.requestClass + "." + G.config.indicatorClass + "{opacity:1}                    </style>");
      }
      function Ar() {
        var Fe = K().querySelector('meta[name="htmx-config"]');
        return Fe ? y(Fe.content) : null;
      }
      function Nr() {
        var Fe = Ar();
        Fe && (G.config = ne(G.config, Fe));
      }
      return Hr(function() {
        Nr(), Lr();
        var Fe = K().body;
        Nt(Fe);
        var ei = K().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        Fe.addEventListener("htmx:abort", function(ii) {
          var hi = ii.target, wi = ee(hi);
          wi && wi.xhr && wi.xhr.abort();
        });
        var ri = window.onpopstate;
        window.onpopstate = function(ii) {
          ii.state && ii.state.htmx ? (zt(), te(ei, function(hi) {
            oe(hi, "htmx:restored", { document: K(), triggerEvent: oe });
          })) : ri && ri(ii);
        }, setTimeout(function() {
          oe(Fe, "htmx:load", {}), Fe = null;
        }, 0);
      }), G;
    }();
  });
})(htmx_min);
var htmx_minExports = htmx_min.exports;
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, e$2 = t$1.ShadowRoot && (t$1.ShadyCSS === void 0 || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
let n$3 = class {
  constructor(ei, ri, ii) {
    if (this._$cssResult$ = !0, ii !== s$2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = ei, this.t = ri;
  }
  get styleSheet() {
    let ei = this.o;
    const ri = this.t;
    if (e$2 && ei === void 0) {
      const ii = ri !== void 0 && ri.length === 1;
      ii && (ei = o$3.get(ri)), ei === void 0 && ((this.o = ei = new CSSStyleSheet()).replaceSync(this.cssText), ii && o$3.set(ri, ei));
    }
    return ei;
  }
  toString() {
    return this.cssText;
  }
};
const r$5 = (Fe) => new n$3(typeof Fe == "string" ? Fe : Fe + "", void 0, s$2), i$2 = (Fe, ...ei) => {
  const ri = Fe.length === 1 ? Fe[0] : ei.reduce((ii, hi, wi) => ii + ((zi) => {
    if (zi._$cssResult$ === !0)
      return zi.cssText;
    if (typeof zi == "number")
      return zi;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + zi + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(hi) + Fe[wi + 1], Fe[0]);
  return new n$3(ri, Fe, s$2);
}, S$1 = (Fe, ei) => {
  if (e$2)
    Fe.adoptedStyleSheets = ei.map((ri) => ri instanceof CSSStyleSheet ? ri : ri.styleSheet);
  else
    for (const ri of ei) {
      const ii = document.createElement("style"), hi = t$1.litNonce;
      hi !== void 0 && ii.setAttribute("nonce", hi), ii.textContent = ri.cssText, Fe.appendChild(ii);
    }
}, c$2 = e$2 ? (Fe) => Fe : (Fe) => Fe instanceof CSSStyleSheet ? ((ei) => {
  let ri = "";
  for (const ii of ei.cssRules)
    ri += ii.cssText;
  return r$5(ri);
})(Fe) : Fe;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$1, defineProperty: e$1, getOwnPropertyDescriptor: r$4, getOwnPropertyNames: h$1, getOwnPropertySymbols: o$2, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (Fe, ei) => Fe, u$1 = { toAttribute(Fe, ei) {
  switch (ei) {
    case Boolean:
      Fe = Fe ? l$1 : null;
      break;
    case Object:
    case Array:
      Fe = Fe == null ? Fe : JSON.stringify(Fe);
  }
  return Fe;
}, fromAttribute(Fe, ei) {
  let ri = Fe;
  switch (ei) {
    case Boolean:
      ri = Fe !== null;
      break;
    case Number:
      ri = Fe === null ? null : Number(Fe);
      break;
    case Object:
    case Array:
      try {
        ri = JSON.parse(Fe);
      } catch {
        ri = null;
      }
  }
  return ri;
} }, f$1 = (Fe, ei) => !i$1(Fe, ei), y$1 = { attribute: !0, type: String, converter: u$1, reflect: !1, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer(ei) {
    this._$Ei(), (this.l ?? (this.l = [])).push(ei);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(ei, ri = y$1) {
    if (ri.state && (ri.attribute = !1), this._$Ei(), this.elementProperties.set(ei, ri), !ri.noAccessor) {
      const ii = Symbol(), hi = this.getPropertyDescriptor(ei, ii, ri);
      hi !== void 0 && e$1(this.prototype, ei, hi);
    }
  }
  static getPropertyDescriptor(ei, ri, ii) {
    const { get: hi, set: wi } = r$4(this.prototype, ei) ?? { get() {
      return this[ri];
    }, set(zi) {
      this[ri] = zi;
    } };
    return { get() {
      return hi == null ? void 0 : hi.call(this);
    }, set(zi) {
      const Ki = hi == null ? void 0 : hi.call(this);
      wi.call(this, zi), this.requestUpdate(ei, Ki, ii);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(ei) {
    return this.elementProperties.get(ei) ?? y$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties")))
      return;
    const ei = n$2(this);
    ei.finalize(), ei.l !== void 0 && (this.l = [...ei.l]), this.elementProperties = new Map(ei.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const ri = this.properties, ii = [...h$1(ri), ...o$2(ri)];
      for (const hi of ii)
        this.createProperty(hi, ri[hi]);
    }
    const ei = this[Symbol.metadata];
    if (ei !== null) {
      const ri = litPropertyMetadata.get(ei);
      if (ri !== void 0)
        for (const [ii, hi] of ri)
          this.elementProperties.set(ii, hi);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [ri, ii] of this.elementProperties) {
      const hi = this._$Eu(ri, ii);
      hi !== void 0 && this._$Eh.set(hi, ri);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(ei) {
    const ri = [];
    if (Array.isArray(ei)) {
      const ii = new Set(ei.flat(1 / 0).reverse());
      for (const hi of ii)
        ri.unshift(c$2(hi));
    } else
      ei !== void 0 && ri.push(c$2(ei));
    return ri;
  }
  static _$Eu(ei, ri) {
    const ii = ri.attribute;
    return ii === !1 ? void 0 : typeof ii == "string" ? ii : typeof ei == "string" ? ei.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var ei;
    this._$Eg = new Promise((ri) => this.enableUpdating = ri), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (ei = this.constructor.l) == null || ei.forEach((ri) => ri(this));
  }
  addController(ei) {
    var ri;
    (this._$ES ?? (this._$ES = [])).push(ei), this.renderRoot !== void 0 && this.isConnected && ((ri = ei.hostConnected) == null || ri.call(ei));
  }
  removeController(ei) {
    var ri;
    (ri = this._$ES) == null || ri.splice(this._$ES.indexOf(ei) >>> 0, 1);
  }
  _$E_() {
    const ei = /* @__PURE__ */ new Map(), ri = this.constructor.elementProperties;
    for (const ii of ri.keys())
      this.hasOwnProperty(ii) && (ei.set(ii, this[ii]), delete this[ii]);
    ei.size > 0 && (this._$Ep = ei);
  }
  createRenderRoot() {
    const ei = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(ei, this.constructor.elementStyles), ei;
  }
  connectedCallback() {
    var ei;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (ei = this._$ES) == null || ei.forEach((ri) => {
      var ii;
      return (ii = ri.hostConnected) == null ? void 0 : ii.call(ri);
    });
  }
  enableUpdating(ei) {
  }
  disconnectedCallback() {
    var ei;
    (ei = this._$ES) == null || ei.forEach((ri) => {
      var ii;
      return (ii = ri.hostDisconnected) == null ? void 0 : ii.call(ri);
    });
  }
  attributeChangedCallback(ei, ri, ii) {
    this._$AK(ei, ii);
  }
  _$EO(ei, ri) {
    var wi;
    const ii = this.constructor.elementProperties.get(ei), hi = this.constructor._$Eu(ei, ii);
    if (hi !== void 0 && ii.reflect === !0) {
      const zi = (((wi = ii.converter) == null ? void 0 : wi.toAttribute) !== void 0 ? ii.converter : u$1).toAttribute(ri, ii.type);
      this._$Em = ei, zi == null ? this.removeAttribute(hi) : this.setAttribute(hi, zi), this._$Em = null;
    }
  }
  _$AK(ei, ri) {
    var wi;
    const ii = this.constructor, hi = ii._$Eh.get(ei);
    if (hi !== void 0 && this._$Em !== hi) {
      const zi = ii.getPropertyOptions(hi), Ki = typeof zi.converter == "function" ? { fromAttribute: zi.converter } : ((wi = zi.converter) == null ? void 0 : wi.fromAttribute) !== void 0 ? zi.converter : u$1;
      this._$Em = hi, this[hi] = Ki.fromAttribute(ri, zi.type), this._$Em = null;
    }
  }
  requestUpdate(ei, ri, ii, hi = !1, wi) {
    if (ei !== void 0) {
      if (ii ?? (ii = this.constructor.getPropertyOptions(ei)), !(ii.hasChanged ?? f$1)(hi ? wi : this[ei], ri))
        return;
      this.C(ei, ri, ii);
    }
    this.isUpdatePending === !1 && (this._$Eg = this._$EP());
  }
  C(ei, ri, ii) {
    this._$AL.has(ei) || this._$AL.set(ei, ri), ii.reflect === !0 && this._$Em !== ei && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(ei);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (ri) {
      Promise.reject(ri);
    }
    const ei = this.scheduleUpdate();
    return ei != null && await ei, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var ii;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this._$Ep) {
        for (const [wi, zi] of this._$Ep)
          this[wi] = zi;
        this._$Ep = void 0;
      }
      const hi = this.constructor.elementProperties;
      if (hi.size > 0)
        for (const [wi, zi] of hi)
          zi.wrapped !== !0 || this._$AL.has(wi) || this[wi] === void 0 || this.C(wi, this[wi], zi);
    }
    let ei = !1;
    const ri = this._$AL;
    try {
      ei = this.shouldUpdate(ri), ei ? (this.willUpdate(ri), (ii = this._$ES) == null || ii.forEach((hi) => {
        var wi;
        return (wi = hi.hostUpdate) == null ? void 0 : wi.call(hi);
      }), this.update(ri)) : this._$ET();
    } catch (hi) {
      throw ei = !1, this._$ET(), hi;
    }
    ei && this._$AE(ri);
  }
  willUpdate(ei) {
  }
  _$AE(ei) {
    var ri;
    (ri = this._$ES) == null || ri.forEach((ii) => {
      var hi;
      return (hi = ii.hostUpdated) == null ? void 0 : hi.call(ii);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(ei)), this.updated(ei);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(ei) {
    return !0;
  }
  update(ei) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((ri) => this._$EO(ri, this[ri]))), this._$ET();
  }
  updated(ei) {
  }
  firstUpdated(ei) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d$1("elementProperties")] = /* @__PURE__ */ new Map(), b[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null || p$1({ ReactiveElement: b }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis, i = t.trustedTypes, s$1 = i ? i.createPolicy("lit-html", { createHTML: (Fe) => Fe }) : void 0, e = "$lit$", h = `lit$${(Math.random() + "").slice(9)}$`, o$1 = "?" + h, n$1 = `<${o$1}>`, r$3 = document, l = () => r$3.createComment(""), c = (Fe) => Fe === null || typeof Fe != "object" && typeof Fe != "function", a = Array.isArray, u = (Fe) => a(Fe) || typeof (Fe == null ? void 0 : Fe[Symbol.iterator]) == "function", d = `[ 	
\f\r]`, f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (Fe) => (ei, ...ri) => ({ _$litType$: Fe, strings: ei, values: ri }), x = y(1), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), E = r$3.createTreeWalker(r$3, 129);
function C(Fe, ei) {
  if (!Array.isArray(Fe) || !Fe.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return s$1 !== void 0 ? s$1.createHTML(ei) : ei;
}
const P = (Fe, ei) => {
  const ri = Fe.length - 1, ii = [];
  let hi, wi = ei === 2 ? "<svg>" : "", zi = f;
  for (let Ki = 0; Ki < ri; Ki++) {
    const Yi = Fe[Ki];
    let es, is, $i = -1, Vi = 0;
    for (; Vi < Yi.length && (zi.lastIndex = Vi, is = zi.exec(Yi), is !== null); )
      Vi = zi.lastIndex, zi === f ? is[1] === "!--" ? zi = v : is[1] !== void 0 ? zi = _ : is[2] !== void 0 ? ($.test(is[2]) && (hi = RegExp("</" + is[2], "g")), zi = m) : is[3] !== void 0 && (zi = m) : zi === m ? is[0] === ">" ? (zi = hi ?? f, $i = -1) : is[1] === void 0 ? $i = -2 : ($i = zi.lastIndex - is[2].length, es = is[1], zi = is[3] === void 0 ? m : is[3] === '"' ? g : p) : zi === g || zi === p ? zi = m : zi === v || zi === _ ? zi = f : (zi = m, hi = void 0);
    const _i = zi === m && Fe[Ki + 1].startsWith("/>") ? " " : "";
    wi += zi === f ? Yi + n$1 : $i >= 0 ? (ii.push(es), Yi.slice(0, $i) + e + Yi.slice($i) + h + _i) : Yi + h + ($i === -2 ? Ki : _i);
  }
  return [C(Fe, wi + (Fe[ri] || "<?>") + (ei === 2 ? "</svg>" : "")), ii];
};
class V {
  constructor({ strings: ei, _$litType$: ri }, ii) {
    let hi;
    this.parts = [];
    let wi = 0, zi = 0;
    const Ki = ei.length - 1, Yi = this.parts, [es, is] = P(ei, ri);
    if (this.el = V.createElement(es, ii), E.currentNode = this.el.content, ri === 2) {
      const $i = this.el.content.firstChild;
      $i.replaceWith(...$i.childNodes);
    }
    for (; (hi = E.nextNode()) !== null && Yi.length < Ki; ) {
      if (hi.nodeType === 1) {
        if (hi.hasAttributes())
          for (const $i of hi.getAttributeNames())
            if ($i.endsWith(e)) {
              const Vi = is[zi++], _i = hi.getAttribute($i).split(h), bi = /([.?@])?(.*)/.exec(Vi);
              Yi.push({ type: 1, index: wi, name: bi[2], strings: _i, ctor: bi[1] === "." ? k : bi[1] === "?" ? H : bi[1] === "@" ? I : R }), hi.removeAttribute($i);
            } else
              $i.startsWith(h) && (Yi.push({ type: 6, index: wi }), hi.removeAttribute($i));
        if ($.test(hi.tagName)) {
          const $i = hi.textContent.split(h), Vi = $i.length - 1;
          if (Vi > 0) {
            hi.textContent = i ? i.emptyScript : "";
            for (let _i = 0; _i < Vi; _i++)
              hi.append($i[_i], l()), E.nextNode(), Yi.push({ type: 2, index: ++wi });
            hi.append($i[Vi], l());
          }
        }
      } else if (hi.nodeType === 8)
        if (hi.data === o$1)
          Yi.push({ type: 2, index: wi });
        else {
          let $i = -1;
          for (; ($i = hi.data.indexOf(h, $i + 1)) !== -1; )
            Yi.push({ type: 7, index: wi }), $i += h.length - 1;
        }
      wi++;
    }
  }
  static createElement(ei, ri) {
    const ii = r$3.createElement("template");
    return ii.innerHTML = ei, ii;
  }
}
function N(Fe, ei, ri = Fe, ii) {
  var zi, Ki;
  if (ei === w)
    return ei;
  let hi = ii !== void 0 ? (zi = ri._$Co) == null ? void 0 : zi[ii] : ri._$Cl;
  const wi = c(ei) ? void 0 : ei._$litDirective$;
  return (hi == null ? void 0 : hi.constructor) !== wi && ((Ki = hi == null ? void 0 : hi._$AO) == null || Ki.call(hi, !1), wi === void 0 ? hi = void 0 : (hi = new wi(Fe), hi._$AT(Fe, ri, ii)), ii !== void 0 ? (ri._$Co ?? (ri._$Co = []))[ii] = hi : ri._$Cl = hi), hi !== void 0 && (ei = N(Fe, hi._$AS(Fe, ei.values), hi, ii)), ei;
}
class S {
  constructor(ei, ri) {
    this._$AV = [], this._$AN = void 0, this._$AD = ei, this._$AM = ri;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(ei) {
    const { el: { content: ri }, parts: ii } = this._$AD, hi = ((ei == null ? void 0 : ei.creationScope) ?? r$3).importNode(ri, !0);
    E.currentNode = hi;
    let wi = E.nextNode(), zi = 0, Ki = 0, Yi = ii[0];
    for (; Yi !== void 0; ) {
      if (zi === Yi.index) {
        let es;
        Yi.type === 2 ? es = new M(wi, wi.nextSibling, this, ei) : Yi.type === 1 ? es = new Yi.ctor(wi, Yi.name, Yi.strings, this, ei) : Yi.type === 6 && (es = new L(wi, this, ei)), this._$AV.push(es), Yi = ii[++Ki];
      }
      zi !== (Yi == null ? void 0 : Yi.index) && (wi = E.nextNode(), zi++);
    }
    return E.currentNode = r$3, hi;
  }
  p(ei) {
    let ri = 0;
    for (const ii of this._$AV)
      ii !== void 0 && (ii.strings !== void 0 ? (ii._$AI(ei, ii, ri), ri += ii.strings.length - 2) : ii._$AI(ei[ri])), ri++;
  }
}
class M {
  get _$AU() {
    var ei;
    return ((ei = this._$AM) == null ? void 0 : ei._$AU) ?? this._$Cv;
  }
  constructor(ei, ri, ii, hi) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = ei, this._$AB = ri, this._$AM = ii, this.options = hi, this._$Cv = (hi == null ? void 0 : hi.isConnected) ?? !0;
  }
  get parentNode() {
    let ei = this._$AA.parentNode;
    const ri = this._$AM;
    return ri !== void 0 && (ei == null ? void 0 : ei.nodeType) === 11 && (ei = ri.parentNode), ei;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(ei, ri = this) {
    ei = N(this, ei, ri), c(ei) ? ei === T || ei == null || ei === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : ei !== this._$AH && ei !== w && this._(ei) : ei._$litType$ !== void 0 ? this.g(ei) : ei.nodeType !== void 0 ? this.$(ei) : u(ei) ? this.T(ei) : this._(ei);
  }
  k(ei) {
    return this._$AA.parentNode.insertBefore(ei, this._$AB);
  }
  $(ei) {
    this._$AH !== ei && (this._$AR(), this._$AH = this.k(ei));
  }
  _(ei) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = ei : this.$(r$3.createTextNode(ei)), this._$AH = ei;
  }
  g(ei) {
    var wi;
    const { values: ri, _$litType$: ii } = ei, hi = typeof ii == "number" ? this._$AC(ei) : (ii.el === void 0 && (ii.el = V.createElement(C(ii.h, ii.h[0]), this.options)), ii);
    if (((wi = this._$AH) == null ? void 0 : wi._$AD) === hi)
      this._$AH.p(ri);
    else {
      const zi = new S(hi, this), Ki = zi.u(this.options);
      zi.p(ri), this.$(Ki), this._$AH = zi;
    }
  }
  _$AC(ei) {
    let ri = A.get(ei.strings);
    return ri === void 0 && A.set(ei.strings, ri = new V(ei)), ri;
  }
  T(ei) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const ri = this._$AH;
    let ii, hi = 0;
    for (const wi of ei)
      hi === ri.length ? ri.push(ii = new M(this.k(l()), this.k(l()), this, this.options)) : ii = ri[hi], ii._$AI(wi), hi++;
    hi < ri.length && (this._$AR(ii && ii._$AB.nextSibling, hi), ri.length = hi);
  }
  _$AR(ei = this._$AA.nextSibling, ri) {
    var ii;
    for ((ii = this._$AP) == null ? void 0 : ii.call(this, !1, !0, ri); ei && ei !== this._$AB; ) {
      const hi = ei.nextSibling;
      ei.remove(), ei = hi;
    }
  }
  setConnected(ei) {
    var ri;
    this._$AM === void 0 && (this._$Cv = ei, (ri = this._$AP) == null || ri.call(this, ei));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(ei, ri, ii, hi, wi) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = ei, this.name = ri, this._$AM = hi, this.options = wi, ii.length > 2 || ii[0] !== "" || ii[1] !== "" ? (this._$AH = Array(ii.length - 1).fill(new String()), this.strings = ii) : this._$AH = T;
  }
  _$AI(ei, ri = this, ii, hi) {
    const wi = this.strings;
    let zi = !1;
    if (wi === void 0)
      ei = N(this, ei, ri, 0), zi = !c(ei) || ei !== this._$AH && ei !== w, zi && (this._$AH = ei);
    else {
      const Ki = ei;
      let Yi, es;
      for (ei = wi[0], Yi = 0; Yi < wi.length - 1; Yi++)
        es = N(this, Ki[ii + Yi], ri, Yi), es === w && (es = this._$AH[Yi]), zi || (zi = !c(es) || es !== this._$AH[Yi]), es === T ? ei = T : ei !== T && (ei += (es ?? "") + wi[Yi + 1]), this._$AH[Yi] = es;
    }
    zi && !hi && this.j(ei);
  }
  j(ei) {
    ei === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, ei ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(ei) {
    this.element[this.name] = ei === T ? void 0 : ei;
  }
}
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(ei) {
    this.element.toggleAttribute(this.name, !!ei && ei !== T);
  }
}
class I extends R {
  constructor(ei, ri, ii, hi, wi) {
    super(ei, ri, ii, hi, wi), this.type = 5;
  }
  _$AI(ei, ri = this) {
    if ((ei = N(this, ei, ri, 0) ?? T) === w)
      return;
    const ii = this._$AH, hi = ei === T && ii !== T || ei.capture !== ii.capture || ei.once !== ii.once || ei.passive !== ii.passive, wi = ei !== T && (ii === T || hi);
    hi && this.element.removeEventListener(this.name, this, ii), wi && this.element.addEventListener(this.name, this, ei), this._$AH = ei;
  }
  handleEvent(ei) {
    var ri;
    typeof this._$AH == "function" ? this._$AH.call(((ri = this.options) == null ? void 0 : ri.host) ?? this.element, ei) : this._$AH.handleEvent(ei);
  }
}
class L {
  constructor(ei, ri, ii) {
    this.element = ei, this.type = 6, this._$AN = void 0, this._$AM = ri, this.options = ii;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(ei) {
    N(this, ei);
  }
}
const Z = t.litHtmlPolyfillSupport;
Z == null || Z(V, M), (t.litHtmlVersions ?? (t.litHtmlVersions = [])).push("3.0.0");
const j = (Fe, ei, ri) => {
  const ii = (ri == null ? void 0 : ri.renderBefore) ?? ei;
  let hi = ii._$litPart$;
  if (hi === void 0) {
    const wi = (ri == null ? void 0 : ri.renderBefore) ?? null;
    ii._$litPart$ = hi = new M(ei.insertBefore(l(), wi), wi, void 0, ri ?? {});
  }
  return hi._$AI(Fe), hi;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var ri;
    const ei = super.createRenderRoot();
    return (ri = this.renderOptions).renderBefore ?? (ri.renderBefore = ei.firstChild), ei;
  }
  update(ei) {
    const ri = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(ei), this._$Do = j(ri, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var ei;
    super.connectedCallback(), (ei = this._$Do) == null || ei.setConnected(!0);
  }
  disconnectedCallback() {
    var ei;
    super.disconnectedCallback(), (ei = this._$Do) == null || ei.setConnected(!1);
  }
  render() {
    return w;
  }
}
var Ms;
s._$litElement$ = !0, s.finalized = !0, (Ms = globalThis.litElementHydrateSupport) == null || Ms.call(globalThis, { LitElement: s });
const r$2 = globalThis.litElementPolyfillSupport;
r$2 == null || r$2({ LitElement: s });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = { attribute: !0, type: String, converter: u$1, reflect: !1, hasChanged: f$1 }, r$1 = (Fe = o, ei, ri) => {
  const { kind: ii, metadata: hi } = ri;
  let wi = globalThis.litPropertyMetadata.get(hi);
  if (wi === void 0 && globalThis.litPropertyMetadata.set(hi, wi = /* @__PURE__ */ new Map()), wi.set(ri.name, Fe), ii === "accessor") {
    const { name: zi } = ri;
    return { set(Ki) {
      const Yi = ei.get.call(this);
      ei.set.call(this, Ki), this.requestUpdate(zi, Yi, Fe);
    }, init(Ki) {
      return Ki !== void 0 && this.C(zi, void 0, Fe), Ki;
    } };
  }
  if (ii === "setter") {
    const { name: zi } = ri;
    return function(Ki) {
      const Yi = this[zi];
      ei.call(this, Ki), this.requestUpdate(zi, Yi, Fe);
    };
  }
  throw Error("Unsupported decorator location: " + ii);
};
function n(Fe) {
  return (ei, ri) => typeof ri == "object" ? r$1(Fe, ei, ri) : ((ii, hi, wi) => {
    const zi = hi.hasOwnProperty(wi);
    return hi.constructor.createProperty(wi, zi ? { ...ii, wrapped: !0 } : ii), zi ? Object.getOwnPropertyDescriptor(hi, wi) : void 0;
  })(Fe, ei, ri);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(Fe) {
  return n({ ...Fe, state: !0, attribute: !1 });
}
function formatFloat(Fe) {
  let ei = "";
  if (Fe < 0.1) {
    const ri = toFixed(Fe, 10).split(".")[1];
    if (!ri)
      ei = Fe.toString();
    else
      for (let ii = 0; ii < ri.length; ii++)
        if (ri[ii] != "0") {
          ei = toFixed(Fe, ii + 3);
          break;
        }
  } else
    Fe < 10 ? ei = toFixed(Fe, 3) : ei = toFixed(Fe, 2);
  return trimFloat(ei);
}
function toFixed(Fe, ei) {
  const ri = Math.pow(10, ei), ii = Math.round(Fe * ri), hi = Math.floor(ii / ri), wi = String(ii % ri).padStart(ei, "0");
  return `${hi}.${wi}`;
}
function trimFloat(Fe) {
  for (let ei = Fe.length - 1; ei > 1 && Fe[ei] == "0"; ei--)
    Fe = Fe.slice(0, ei - (Fe[ei - 1] == "." ? 1 : 0));
  return Fe;
}
var __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __decorateClass = (Fe, ei, ri, ii) => {
  for (var hi = ii > 1 ? void 0 : ii ? __getOwnPropDesc(ei, ri) : ei, wi = Fe.length - 1, zi; wi >= 0; wi--)
    (zi = Fe[wi]) && (hi = (ii ? zi(ei, ri, hi) : zi(hi)) || hi);
  return ii && hi && __defProp(ei, ri, hi), hi;
};
class QuantitySelector extends s {
  constructor() {
    super(), this.coin_price = 0, this.sell = !1, this.symbol = "", this.balance = 0, this.amount = 0, this.pecentage = 0, this.value = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    const ei = this, ri = this.closest("form");
    ri && ri.addEventListener("formdata", function(ii) {
      ii.formData.set("amount", String(ei.amount));
    });
  }
  ignore(ei) {
    (ei.key == "e" || ei.key == "+" || ei.key == "-") && (ei.preventDefault(), ei.stopPropagation());
  }
  slide(ei) {
    let ri = Number(ei.target.value);
    this.pecentage = ri, this.amount = this.balance * (ri / 100), this.value = this.amount * this.coin_price;
  }
  update_slide() {
    let ei = this.amount / this.balance * 100;
    ei = Math.round(ei), ei >= 0 && ei <= 100 && (this.pecentage = ei);
  }
  coin_value_change(ei) {
    let ri = Number(ei.target.value);
    this.sell && ri * this.coin_price > this.balance * this.coin_price && (ri = this.value), this.amount = ri, this.value = ri * this.coin_price, this.update_slide(), ei.target.value = ri;
  }
  value_change(ei) {
    let ri = Number(ei.target.value);
    this.sell && ri > this.balance * this.coin_price && (ri = this.balance * this.coin_price), this.value = ri, this.amount = ri / this.coin_price, this.update_slide(), ei.target.value = ri;
  }
  render() {
    return x`
			<div class="quantity-selector">
				${this.sell ? x`
							<div class="slider">
								<input
									autocomplete="off"
									aria-autocomplete="none"
									name="balance_percentage"
									@input=${this.slide}
									type="range"
									min="0"
									max="100"
									value="0"
									percentage="${this.pecentage}%"
									style="--percentage: ${this.pecentage}%"
								/>
							</div>
					  ` : ""}
				<div class="value">
					<div class="input">
						<input
							autocomplete="off"
							aria-autocomplete="none"
							name="amount"
							@keydown=${this.ignore}
							@change=${this.coin_value_change}
							type="number"
							.value=${trimFloat(toFixed(this.amount, 10))}
						/>
						<span class="suffix">${this.symbol.toUpperCase()}</span>
					</div>
					<div class="input">
						<input
							autocomplete="off"
							aria-autocomplete="none"
							name="value"
							@keydown=${this.ignore}
							@change=${this.value_change}
							type="number"
							.value=${formatFloat(this.value)}
						/>
						<span class="suffix">$</span>
					</div>
				</div>
			</div>
		`;
  }
}
QuantitySelector.styles = i$2`
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		* {
			box-sizing: border-box;
		}

		input[type="number"] {
			-moz-appearance: textfield;
		}

		.quantity-selector {
			display: flex;
			flex-direction: column;
			gap: 12px;
			font-size: 12.8px;
		}

		.value {
			display: flex;
			gap: 12px;
			flex-direction: column;
		}

		.slider {
			display: flex;
			justify-content: center;
			background-color: var(--background-color);
			color: var(--color);
			border: solid var(--color) 2px;
			border-radius: 0.75rem;
			padding: 12px;
			font-size: 14px;
			padding-left: 20px;
			padding-right: 30px;
			flex-direction: column;
			align-items: center;
			height: 40px;
		}

		.slider input {
			all: unset;
		}

		.slider input {
			width: 100%;
			height: 100%;
			align-items: center;
			position: relative;
		}

		/* Hide the default browser thumb */
		input[type="range"]::-webkit-slider-thumb {
			appearance: none;
			width: 0;
			height: 0;
		}

		input[type="range"]::-moz-range-thumb {
			appearance: none;
			width: 0;
			height: 0;
		}
		/* Style the custom thumb */
		input[type="range"]::after {
			content: attr(percentage);
			display: block;
			position: absolute;
			left: var(--percentage);
			transform: translateX(-50%);
			color: var(--color);
		}

		.input {
			display: flex;
			background-color: var(--background-color);
			color: var(--color);
			border: solid var(--color) 2px;
			border-radius: 0.75rem;
			padding: 12px;
			width: 100%;
			gap: 12px;
			height: 40px;
			align-items: center;
		}

		.input input {
			all: unset;
			appearance: none;
			width: 100%;
			height: 100%;
		}

		.input span {
			pointer-events: none;
			font-weight: bolder;
			top: 0;
		}

		@media screen and (min-width: 1600px) {
			.value {
				flex-direction: row;
			}
		}
	`;
__decorateClass([
  n({ type: Number })
], QuantitySelector.prototype, "coin_price", 2);
__decorateClass([
  n({ type: Boolean })
], QuantitySelector.prototype, "sell", 2);
__decorateClass([
  n({ type: String })
], QuantitySelector.prototype, "symbol", 2);
__decorateClass([
  n({ type: Number })
], QuantitySelector.prototype, "balance", 2);
__decorateClass([
  r()
], QuantitySelector.prototype, "amount", 2);
__decorateClass([
  r()
], QuantitySelector.prototype, "pecentage", 2);
__decorateClass([
  r()
], QuantitySelector.prototype, "value", 2);
window.htmx = htmx;
customElements.define("quantity-selector", QuantitySelector);
async function prices(Fe) {
  return fetch(`https://api.coincap.io/v2/assets/${Fe}/history?interval=m15&start=${Date.now() - 6048e5}&end=${Date.now()}`).then((ei) => ei.json()).then((ei) => ei.data.map((ri) => [ri.time, Number(ri.priceUsd)]));
}
window.load_chart = async function(Fe) {
  Highcharts.chart("chart-" + Fe, {
    chart: {
      type: "line",
      backgroundColor: "var(--background-color)",
      numberFormatter: formatFloat
    },
    title: {
      text: ""
    },
    legend: {
      enabled: !1
    },
    xAxis: {
      type: "datetime",
      lineColor: "var(--color)",
      labels: {
        style: {
          color: "var(--color)"
        }
      },
      gridLineColor: "var(--color)",
      tickColor: "var(--color)"
    },
    yAxis: {
      title: {
        text: ""
      },
      labels: {
        style: {
          color: "var(--color)"
        }
      },
      gridLineColor: "var(--color)",
      tickColor: "var(--color)"
    },
    //@ts-ignore
    series: [{
      type: "line",
      name: "$",
      data: await prices(Fe),
      color: "var(--purple)"
    }]
  });
};
window.addEventListener("htmx:configRequest", (Fe) => {
  if (Fe.target instanceof HTMLFormElement) {
    const ei = new FormData(Fe.target);
    for (const ri of ei.entries()) {
      const ii = ri[0], hi = ri[1], wi = Fe.detail.parameters;
      wi[ii] == null ? wi[ii] = [hi] : Array.isArray(wi[ii]) && !wi[ii].includes(hi) && wi[ii].push(hi);
    }
  }
});
