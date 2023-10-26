const style = "";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(ti) {
  return ti && ti.__esModule && Object.prototype.hasOwnProperty.call(ti, "default") ? ti.default : ti;
}
var highcharts = { exports: {} };
(function(ti) {
  (function(ui, ci) {
    ti.exports ? (ci.default = ci, ti.exports = ui.document ? ci(ui) : ci) : (ui.Highcharts && ui.Highcharts.error(16, !0), ui.Highcharts = ci(ui));
  })(typeof window < "u" ? window : commonjsGlobal, function(ui) {
    function ci(Si, ji, qi, ts) {
      Si.hasOwnProperty(ji) || (Si[ji] = ts.apply(null, qi), typeof CustomEvent == "function" && ui.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: ji, module: Si[ji] } })));
    }
    var oi = {};
    return ci(oi, "Core/Globals.js", [], function() {
      var Si;
      return function(ji) {
        ji.SVG_NS = "http://www.w3.org/2000/svg", ji.product = "Highcharts", ji.version = "11.1.0", ji.win = typeof ui < "u" ? ui : {}, ji.doc = ji.win.document, ji.svg = ji.doc && ji.doc.createElementNS && !!ji.doc.createElementNS(ji.SVG_NS, "svg").createSVGRect, ji.userAgent = ji.win.navigator && ji.win.navigator.userAgent || "", ji.isChrome = ji.userAgent.indexOf("Chrome") !== -1, ji.isFirefox = ji.userAgent.indexOf("Firefox") !== -1, ji.isMS = /(edge|msie|trident)/i.test(ji.userAgent) && !ji.win.opera, ji.isSafari = !ji.isChrome && ji.userAgent.indexOf("Safari") !== -1, ji.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(ji.userAgent), ji.isWebKit = ji.userAgent.indexOf("AppleWebKit") !== -1, ji.deg2rad = 2 * Math.PI / 360, ji.hasBidiBug = ji.isFirefox && 4 > parseInt(ji.userAgent.split("Firefox/")[1], 10), ji.hasTouch = !!ji.win.TouchEvent, ji.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], ji.noop = function() {
        }, ji.supportsPassiveEvents = function() {
          let qi = !1;
          if (!ji.isMS) {
            const ts = Object.defineProperty({}, "passive", { get: function() {
              qi = !0;
            } });
            ji.win.addEventListener && ji.win.removeEventListener && (ji.win.addEventListener("testPassive", ji.noop, ts), ji.win.removeEventListener("testPassive", ji.noop, ts));
          }
          return qi;
        }(), ji.charts = [], ji.dateFormats = {}, ji.seriesTypes = {}, ji.symbolSizes = {}, ji.chartCount = 0;
      }(Si || (Si = {})), Si;
    }), ci(oi, "Core/Utilities.js", [oi["Core/Globals.js"]], function(Si) {
      function ji(Fe, ii, hi, gi) {
        const Ei = ii ? "Highcharts error" : "Highcharts warning";
        Fe === 32 && (Fe = `${Ei}: Deprecated member`);
        const ni = Ki(Fe);
        let Pi = ni ? `${Ei} #${Fe}: www.highcharts.com/errors/${Fe}/` : Fe.toString();
        if (typeof gi < "u") {
          let Fi = "";
          ni && (Pi += "?"), Ti(gi, function(Zi, rs) {
            Fi += `
 - ${rs}: ${Zi}`, ni && (Pi += encodeURI(rs) + "=" + encodeURI(Zi));
          }), Pi += Fi;
        }
        Oi(Si, "displayError", { chart: hi, code: Fe, message: Pi, params: gi }, function() {
          if (ii)
            throw Error(Pi);
          xi.console && ji.messages.indexOf(Pi) === -1 && console.warn(Pi);
        }), ji.messages.push(Pi);
      }
      function qi(Fe, ii) {
        return parseInt(Fe, ii || 10);
      }
      function ts(Fe) {
        return typeof Fe == "string";
      }
      function Qi(Fe) {
        return Fe = Object.prototype.toString.call(Fe), Fe === "[object Array]" || Fe === "[object Array Iterator]";
      }
      function is(Fe, ii) {
        return !!Fe && typeof Fe == "object" && (!ii || !Qi(Fe));
      }
      function ss(Fe) {
        return is(Fe) && typeof Fe.nodeType == "number";
      }
      function Wi(Fe) {
        const ii = Fe && Fe.constructor;
        return !(!is(Fe, !0) || ss(Fe) || !ii || !ii.name || ii.name === "Object");
      }
      function Ki(Fe) {
        return typeof Fe == "number" && !isNaN(Fe) && 1 / 0 > Fe && -1 / 0 < Fe;
      }
      function Ui(Fe) {
        return typeof Fe < "u" && Fe !== null;
      }
      function ki(Fe, ii, hi) {
        const gi = ts(ii) && !Ui(hi);
        let Ei;
        const ni = (Pi, Fi) => {
          Ui(Pi) ? Fe.setAttribute(Fi, Pi) : gi ? (Ei = Fe.getAttribute(Fi)) || Fi !== "class" || (Ei = Fe.getAttribute(Fi + "Name")) : Fe.removeAttribute(Fi);
        };
        return ts(ii) ? ni(hi, ii) : Ti(ii, ni), Ei;
      }
      function bi(Fe) {
        return Qi(Fe) ? Fe : [Fe];
      }
      function Ri(Fe, ii) {
        let hi;
        Fe || (Fe = {});
        for (hi in ii)
          Fe[hi] = ii[hi];
        return Fe;
      }
      function Ni() {
        const Fe = arguments, ii = Fe.length;
        for (let hi = 0; hi < ii; hi++) {
          const gi = Fe[hi];
          if (typeof gi < "u" && gi !== null)
            return gi;
        }
      }
      function fi(Fe, ii) {
        Si.isMS && !Si.svg && ii && Ui(ii.opacity) && (ii.filter = `alpha(opacity=${100 * ii.opacity})`), Ri(Fe.style, ii);
      }
      function Ci(Fe) {
        return Math.pow(10, Math.floor(Math.log(Fe) / Math.LN10));
      }
      function wi(Fe, ii) {
        return 1e14 < Fe ? Fe : parseFloat(Fe.toPrecision(ii || 14));
      }
      function yi(Fe, ii, hi) {
        let gi;
        return ii === "width" ? (ii = Math.min(Fe.offsetWidth, Fe.scrollWidth), hi = Fe.getBoundingClientRect && Fe.getBoundingClientRect().width, hi < ii && hi >= ii - 1 && (ii = Math.floor(hi)), Math.max(0, ii - (yi(Fe, "padding-left", !0) || 0) - (yi(Fe, "padding-right", !0) || 0))) : ii === "height" ? Math.max(0, Math.min(Fe.offsetHeight, Fe.scrollHeight) - (yi(Fe, "padding-top", !0) || 0) - (yi(Fe, "padding-bottom", !0) || 0)) : ((Fe = xi.getComputedStyle(Fe, void 0)) && (gi = Fe.getPropertyValue(ii), Ni(hi, ii !== "opacity") && (gi = qi(gi))), gi);
      }
      function Ti(Fe, ii, hi) {
        for (const gi in Fe)
          Object.hasOwnProperty.call(
            Fe,
            gi
          ) && ii.call(hi || Fe[gi], Fe[gi], gi, Fe);
      }
      function Mi(Fe, ii, hi) {
        function gi(Pi, Fi) {
          const Zi = Fe.removeEventListener;
          Zi && Zi.call(Fe, Pi, Fi, !1);
        }
        function Ei(Pi) {
          let Fi, Zi;
          Fe.nodeName && (ii ? (Fi = {}, Fi[ii] = !0) : Fi = Pi, Ti(Fi, function(rs, Bi) {
            if (Pi[Bi])
              for (Zi = Pi[Bi].length; Zi--; )
                gi(Bi, Pi[Bi][Zi].fn);
          }));
        }
        var ni = typeof Fe == "function" && Fe.prototype || Fe;
        if (Object.hasOwnProperty.call(ni, "hcEvents")) {
          const Pi = ni.hcEvents;
          ii ? (ni = Pi[ii] || [], hi ? (Pi[ii] = ni.filter(function(Fi) {
            return hi !== Fi.fn;
          }), gi(ii, hi)) : (Ei(Pi), Pi[ii] = [])) : (Ei(Pi), delete ni.hcEvents);
        }
      }
      function Oi(Fe, ii, hi, gi) {
        if (hi = hi || {}, li.createEvent && (Fe.dispatchEvent || Fe.fireEvent && Fe !== Si)) {
          var Ei = li.createEvent("Events");
          Ei.initEvent(ii, !0, !0), hi = Ri(Ei, hi), Fe.dispatchEvent ? Fe.dispatchEvent(hi) : Fe.fireEvent(ii, hi);
        } else if (Fe.hcEvents) {
          hi.target || Ri(hi, { preventDefault: function() {
            hi.defaultPrevented = !0;
          }, target: Fe, type: ii }), Ei = [];
          let ni = Fe, Pi = !1;
          for (; ni.hcEvents; )
            Object.hasOwnProperty.call(ni, "hcEvents") && ni.hcEvents[ii] && (Ei.length && (Pi = !0), Ei.unshift.apply(Ei, ni.hcEvents[ii])), ni = Object.getPrototypeOf(ni);
          Pi && Ei.sort((Fi, Zi) => Fi.order - Zi.order), Ei.forEach((Fi) => {
            Fi.fn.call(Fe, hi) === !1 && hi.preventDefault();
          });
        }
        gi && !hi.defaultPrevented && gi.call(Fe, hi);
      }
      const { charts: ai, doc: li, win: xi } = Si;
      (ji || (ji = {})).messages = [], Math.easeInOutSine = function(Fe) {
        return -0.5 * (Math.cos(Math.PI * Fe) - 1);
      };
      var di = Array.prototype.find ? function(Fe, ii) {
        return Fe.find(ii);
      } : function(Fe, ii) {
        let hi;
        const gi = Fe.length;
        for (hi = 0; hi < gi; hi++)
          if (ii(Fe[hi], hi))
            return Fe[hi];
      };
      Ti({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(Fe, ii) {
        Si[ii] = function(hi) {
          return ji(32, !1, void 0, { [`Highcharts.${ii}`]: `use Array.${Fe}` }), Array.prototype[Fe].apply(hi, [].slice.call(
            arguments,
            1
          ));
        };
      });
      let pi;
      const ei = function() {
        const Fe = Math.random().toString(36).substring(2, 9) + "-";
        let ii = 0;
        return function() {
          return "highcharts-" + (pi ? "" : Fe) + ii++;
        };
      }();
      return xi.jQuery && (xi.jQuery.fn.highcharts = function() {
        const Fe = [].slice.call(arguments);
        if (this[0])
          return Fe[0] ? (new Si[ts(Fe[0]) ? Fe.shift() : "Chart"](this[0], Fe[0], Fe[1]), this) : ai[ki(this[0], "data-highcharts-chart")];
      }), di = { addEvent: function(Fe, ii, hi, gi = {}) {
        var Ei = typeof Fe == "function" && Fe.prototype || Fe;
        Object.hasOwnProperty.call(Ei, "hcEvents") || (Ei.hcEvents = {}), Ei = Ei.hcEvents, Si.Point && Fe instanceof Si.Point && Fe.series && Fe.series.chart && (Fe.series.chart.runTrackerClick = !0);
        const ni = Fe.addEventListener;
        return ni && ni.call(Fe, ii, hi, Si.supportsPassiveEvents ? { passive: gi.passive === void 0 ? ii.indexOf("touch") !== -1 : gi.passive, capture: !1 } : !1), Ei[ii] || (Ei[ii] = []), Ei[ii].push({ fn: hi, order: typeof gi.order == "number" ? gi.order : 1 / 0 }), Ei[ii].sort((Pi, Fi) => Pi.order - Fi.order), function() {
          Mi(Fe, ii, hi);
        };
      }, arrayMax: function(Fe) {
        let ii = Fe.length, hi = Fe[0];
        for (; ii--; )
          Fe[ii] > hi && (hi = Fe[ii]);
        return hi;
      }, arrayMin: function(Fe) {
        let ii = Fe.length, hi = Fe[0];
        for (; ii--; )
          Fe[ii] < hi && (hi = Fe[ii]);
        return hi;
      }, attr: ki, clamp: function(Fe, ii, hi) {
        return Fe > ii ? Fe < hi ? Fe : hi : ii;
      }, clearTimeout: function(Fe) {
        Ui(Fe) && clearTimeout(Fe);
      }, correctFloat: wi, createElement: function(Fe, ii, hi, gi, Ei) {
        return Fe = li.createElement(Fe), ii && Ri(Fe, ii), Ei && fi(Fe, { padding: "0", border: "none", margin: "0" }), hi && fi(Fe, hi), gi && gi.appendChild(Fe), Fe;
      }, css: fi, defined: Ui, destroyObjectProperties: function(Fe, ii) {
        Ti(Fe, function(hi, gi) {
          hi && hi !== ii && hi.destroy && hi.destroy(), delete Fe[gi];
        });
      }, diffObjects: function(Fe, ii, hi, gi) {
        function Ei(Pi, Fi, Zi, rs) {
          const Bi = hi ? Fi : Pi;
          Ti(Pi, function(si, Li) {
            if (!rs && gi && -1 < gi.indexOf(Li) && Fi[Li]) {
              si = bi(si), Zi[Li] = [];
              for (let Hi = 0; Hi < Math.max(si.length, Fi[Li].length); Hi++)
                Fi[Li][Hi] && (si[Hi] === void 0 ? Zi[Li][Hi] = Fi[Li][Hi] : (Zi[Li][Hi] = {}, Ei(si[Hi], Fi[Li][Hi], Zi[Li][Hi], rs + 1)));
            } else
              is(si, !0) && !si.nodeType ? (Zi[Li] = Qi(si) ? [] : {}, Ei(si, Fi[Li] || {}, Zi[Li], rs + 1), Object.keys(Zi[Li]).length !== 0 || Li === "colorAxis" && rs === 0 || delete Zi[Li]) : (Pi[Li] !== Fi[Li] || Li in Pi && !(Li in Fi)) && (Zi[Li] = Bi[Li]);
          });
        }
        const ni = {};
        return Ei(Fe, ii, ni, 0), ni;
      }, discardElement: function(Fe) {
        Fe && Fe.parentElement && Fe.parentElement.removeChild(Fe);
      }, erase: function(Fe, ii) {
        let hi = Fe.length;
        for (; hi--; )
          if (Fe[hi] === ii) {
            Fe.splice(hi, 1);
            break;
          }
      }, error: ji, extend: Ri, extendClass: function(Fe, ii) {
        const hi = function() {
        };
        return hi.prototype = new Fe(), Ri(hi.prototype, ii), hi;
      }, find: di, fireEvent: Oi, getClosestDistance: function(Fe, ii) {
        const hi = !ii;
        let gi, Ei, ni;
        return Fe.forEach((Pi) => {
          if (1 < Pi.length)
            for (ni = Pi.length - 1; 0 < ni; ni--)
              Ei = Pi[ni] - Pi[ni - 1], 0 > Ei && !hi ? (ii == null || ii(), ii = void 0) : Ei && (typeof gi > "u" || Ei < gi) && (gi = Ei);
        }), gi;
      }, getMagnitude: Ci, getNestedProperty: function(Fe, ii) {
        for (Fe = Fe.split("."); Fe.length && Ui(ii); ) {
          const hi = Fe.shift();
          if (typeof hi > "u" || hi === "__proto__")
            return;
          if (hi === "this") {
            let gi;
            return is(ii) && (gi = ii["@this"]), gi ?? ii;
          }
          if (ii = ii[hi], !Ui(ii) || typeof ii == "function" || typeof ii.nodeType == "number" || ii === xi)
            return;
        }
        return ii;
      }, getStyle: yi, inArray: function(Fe, ii, hi) {
        return ji(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }), ii.indexOf(Fe, hi);
      }, insertItem: function(Fe, ii) {
        const hi = Fe.options.index, gi = ii.length;
        let Ei;
        for (Ei = Fe.options.isInternal ? gi : 0; Ei < gi + 1; Ei++)
          if (!ii[Ei] || Ki(hi) && hi < Ni(ii[Ei].options.index, ii[Ei]._i) || ii[Ei].options.isInternal) {
            ii.splice(
              Ei,
              0,
              Fe
            );
            break;
          }
        return Ei;
      }, isArray: Qi, isClass: Wi, isDOMElement: ss, isFunction: function(Fe) {
        return typeof Fe == "function";
      }, isNumber: Ki, isObject: is, isString: ts, keys: function(Fe) {
        return ji(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }), Object.keys(Fe);
      }, merge: function() {
        let Fe, ii = arguments, hi = {};
        const gi = function(ni, Pi) {
          return typeof ni != "object" && (ni = {}), Ti(Pi, function(Fi, Zi) {
            Zi !== "__proto__" && Zi !== "constructor" && (!is(Fi, !0) || Wi(Fi) || ss(Fi) ? ni[Zi] = Pi[Zi] : ni[Zi] = gi(ni[Zi] || {}, Fi));
          }), ni;
        };
        ii[0] === !0 && (hi = ii[1], ii = Array.prototype.slice.call(ii, 2));
        const Ei = ii.length;
        for (Fe = 0; Fe < Ei; Fe++)
          hi = gi(hi, ii[Fe]);
        return hi;
      }, normalizeTickInterval: function(Fe, ii, hi, gi, Ei) {
        let ni = Fe;
        hi = Ni(hi, Ci(Fe));
        const Pi = Fe / hi;
        for (ii || (ii = Ei ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], gi === !1 && (hi === 1 ? ii = ii.filter(function(Fi) {
          return Fi % 1 === 0;
        }) : 0.1 >= hi && (ii = [1 / hi]))), gi = 0; gi < ii.length && (ni = ii[gi], !(Ei && ni * hi >= Fe || !Ei && Pi <= (ii[gi] + (ii[gi + 1] || ii[gi])) / 2)); gi++)
          ;
        return ni = wi(ni * hi, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: Ti, offset: function(Fe) {
        const ii = li.documentElement;
        return Fe = Fe.parentElement || Fe.parentNode ? Fe.getBoundingClientRect() : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        }, { top: Fe.top + (xi.pageYOffset || ii.scrollTop) - (ii.clientTop || 0), left: Fe.left + (xi.pageXOffset || ii.scrollLeft) - (ii.clientLeft || 0), width: Fe.width, height: Fe.height };
      }, pad: function(Fe, ii, hi) {
        return Array((ii || 2) + 1 - String(Fe).replace("-", "").length).join(hi || "0") + Fe;
      }, pick: Ni, pInt: qi, pushUnique: function(Fe, ii) {
        return 0 > Fe.indexOf(ii) && !!Fe.push(ii);
      }, relativeLength: function(Fe, ii, hi) {
        return /%$/.test(Fe) ? ii * parseFloat(Fe) / 100 + (hi || 0) : parseFloat(Fe);
      }, removeEvent: Mi, splat: bi, stableSort: function(Fe, ii) {
        const hi = Fe.length;
        let gi, Ei;
        for (Ei = 0; Ei < hi; Ei++)
          Fe[Ei].safeI = Ei;
        for (Fe.sort(function(ni, Pi) {
          return gi = ii(ni, Pi), gi === 0 ? ni.safeI - Pi.safeI : gi;
        }), Ei = 0; Ei < hi; Ei++)
          delete Fe[Ei].safeI;
      }, syncTimeout: function(Fe, ii, hi) {
        return 0 < ii ? setTimeout(Fe, ii, hi) : (Fe.call(0, hi), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: ei, useSerialIds: function(Fe) {
        return pi = Ni(Fe, pi);
      }, wrap: function(Fe, ii, hi) {
        const gi = Fe[ii];
        Fe[ii] = function() {
          const Ei = arguments, ni = this;
          return hi.apply(this, [function() {
            return gi.apply(
              ni,
              arguments.length ? arguments : Ei
            );
          }].concat([].slice.call(arguments)));
        };
      } }, di;
    }), ci(oi, "Core/Chart/ChartDefaults.js", [], function() {
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
    }), ci(oi, "Core/Color/Color.js", [oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      const { isNumber: qi, merge: ts, pInt: Qi } = ji;
      class is {
        static parse(Wi) {
          return Wi ? new is(Wi) : is.None;
        }
        constructor(Wi) {
          this.rgba = [NaN, NaN, NaN, NaN], this.input = Wi;
          const Ki = Si.Color;
          if (Ki && Ki !== is)
            return new Ki(Wi);
          this.init(Wi);
        }
        init(Wi) {
          let Ki, Ui;
          if (typeof Wi == "object" && typeof Wi.stops < "u")
            this.stops = Wi.stops.map((Ri) => new is(Ri[1]));
          else if (typeof Wi == "string") {
            if (this.input = Wi = is.names[Wi.toLowerCase()] || Wi, Wi.charAt(0) === "#") {
              var ki = Wi.length, bi = parseInt(Wi.substr(1), 16);
              ki === 7 ? Ki = [(bi & 16711680) >> 16, (bi & 65280) >> 8, bi & 255, 1] : ki === 4 && (Ki = [(bi & 3840) >> 4 | (bi & 3840) >> 8, (bi & 240) >> 4 | bi & 240, (bi & 15) << 4 | bi & 15, 1]);
            }
            if (!Ki)
              for (bi = is.parsers.length; bi-- && !Ki; )
                Ui = is.parsers[bi], (ki = Ui.regex.exec(Wi)) && (Ki = Ui.parse(ki));
          }
          Ki && (this.rgba = Ki);
        }
        get(Wi) {
          const Ki = this.input, Ui = this.rgba;
          if (typeof Ki == "object" && typeof this.stops < "u") {
            const ki = ts(Ki);
            return ki.stops = [].slice.call(ki.stops), this.stops.forEach((bi, Ri) => {
              ki.stops[Ri] = [
                ki.stops[Ri][0],
                bi.get(Wi)
              ];
            }), ki;
          }
          return Ui && qi(Ui[0]) ? Wi === "rgb" || !Wi && Ui[3] === 1 ? "rgb(" + Ui[0] + "," + Ui[1] + "," + Ui[2] + ")" : Wi === "a" ? `${Ui[3]}` : "rgba(" + Ui.join(",") + ")" : Ki;
        }
        brighten(Wi) {
          const Ki = this.rgba;
          if (this.stops)
            this.stops.forEach(function(Ui) {
              Ui.brighten(Wi);
            });
          else if (qi(Wi) && Wi !== 0)
            for (let Ui = 0; 3 > Ui; Ui++)
              Ki[Ui] += Qi(255 * Wi), 0 > Ki[Ui] && (Ki[Ui] = 0), 255 < Ki[Ui] && (Ki[Ui] = 255);
          return this;
        }
        setOpacity(Wi) {
          return this.rgba[3] = Wi, this;
        }
        tweenTo(Wi, Ki) {
          const Ui = this.rgba, ki = Wi.rgba;
          return !qi(Ui[0]) || !qi(ki[0]) ? Wi.input || "none" : (Wi = ki[3] !== 1 || Ui[3] !== 1, (Wi ? "rgba(" : "rgb(") + Math.round(ki[0] + (Ui[0] - ki[0]) * (1 - Ki)) + "," + Math.round(ki[1] + (Ui[1] - ki[1]) * (1 - Ki)) + "," + Math.round(ki[2] + (Ui[2] - ki[2]) * (1 - Ki)) + (Wi ? "," + (ki[3] + (Ui[3] - ki[3]) * (1 - Ki)) : "") + ")");
        }
      }
      return is.names = { white: "#ffffff", black: "#000000" }, is.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(ss) {
        return [Qi(ss[1]), Qi(ss[2]), Qi(ss[3]), parseFloat(ss[4], 10)];
      } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(ss) {
        return [
          Qi(ss[1]),
          Qi(ss[2]),
          Qi(ss[3]),
          1
        ];
      } }], is.None = new is(""), is;
    }), ci(oi, "Core/Color/Palettes.js", [], function() {
      return { colors: "#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(" ") };
    }), ci(oi, "Core/Time.js", [oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      const { win: qi } = Si, { defined: ts, error: Qi, extend: is, isObject: ss, merge: Wi, objectEach: Ki, pad: Ui, pick: ki, splat: bi, timeUnits: Ri } = ji, Ni = Si.isSafari && qi.Intl && qi.Intl.DateTimeFormat.prototype.formatRange, fi = Si.isSafari && qi.Intl && !qi.Intl.DateTimeFormat.prototype.formatRange;
      class Ci {
        constructor(yi) {
          this.options = {}, this.variableTimezone = this.useUTC = !1, this.Date = qi.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(yi);
        }
        get(yi, Ti) {
          if (this.variableTimezone || this.timezoneOffset) {
            const Mi = Ti.getTime(), Oi = Mi - this.getTimezoneOffset(Ti);
            return Ti.setTime(Oi), yi = Ti["getUTC" + yi](), Ti.setTime(Mi), yi;
          }
          return this.useUTC ? Ti["getUTC" + yi]() : Ti["get" + yi]();
        }
        set(yi, Ti, Mi) {
          if (this.variableTimezone || this.timezoneOffset) {
            if (yi === "Milliseconds" || yi === "Seconds" || yi === "Minutes" && this.getTimezoneOffset(Ti) % 36e5 === 0)
              return Ti["setUTC" + yi](Mi);
            var Oi = this.getTimezoneOffset(Ti);
            return Oi = Ti.getTime() - Oi, Ti.setTime(Oi), Ti["setUTC" + yi](Mi), yi = this.getTimezoneOffset(Ti), Oi = Ti.getTime() + yi, Ti.setTime(Oi);
          }
          return this.useUTC || Ni && yi === "FullYear" ? Ti["setUTC" + yi](Mi) : Ti["set" + yi](Mi);
        }
        update(yi = {}) {
          const Ti = ki(yi.useUTC, !0);
          this.options = yi = Wi(!0, this.options, yi), this.Date = yi.Date || qi.Date || Date, this.timezoneOffset = (this.useUTC = Ti) && yi.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = Ti && !(!yi.getTimezoneOffset && !yi.timezone);
        }
        makeTime(yi, Ti, Mi, Oi, ai, li) {
          let xi, di, pi;
          return this.useUTC ? (xi = this.Date.UTC.apply(0, arguments), di = this.getTimezoneOffset(xi), xi += di, pi = this.getTimezoneOffset(xi), di !== pi ? xi += pi - di : di - 36e5 !== this.getTimezoneOffset(xi - 36e5) || fi || (xi -= 36e5)) : xi = new this.Date(yi, Ti, ki(Mi, 1), ki(Oi, 0), ki(ai, 0), ki(li, 0)).getTime(), xi;
        }
        timezoneOffsetFunction() {
          const yi = this, Ti = this.options, Mi = Ti.getTimezoneOffset, Oi = Ti.moment || qi.moment;
          if (!this.useUTC)
            return function(ai) {
              return 6e4 * new Date(ai.toString()).getTimezoneOffset();
            };
          if (Ti.timezone) {
            if (Oi)
              return function(ai) {
                return 6e4 * -Oi.tz(ai, Ti.timezone).utcOffset();
              };
            Qi(25);
          }
          return this.useUTC && Mi ? function(ai) {
            return 6e4 * Mi(ai.valueOf());
          } : function() {
            return 6e4 * (yi.timezoneOffset || 0);
          };
        }
        dateFormat(yi, Ti, Mi) {
          if (!ts(Ti) || isNaN(Ti))
            return Si.defaultOptions.lang && Si.defaultOptions.lang.invalidDate || "";
          yi = ki(yi, "%Y-%m-%d %H:%M:%S");
          const Oi = this;
          var ai = new this.Date(Ti);
          const li = this.get("Hours", ai), xi = this.get("Day", ai), di = this.get("Date", ai), pi = this.get("Month", ai), ei = this.get("FullYear", ai), Fe = Si.defaultOptions.lang, ii = Fe && Fe.weekdays, hi = Fe && Fe.shortWeekdays;
          return ai = is({ a: hi ? hi[xi] : ii[xi].substr(0, 3), A: ii[xi], d: Ui(di), e: Ui(di, 2, " "), w: xi, b: Fe.shortMonths[pi], B: Fe.months[pi], m: Ui(pi + 1), o: pi + 1, y: ei.toString().substr(2, 2), Y: ei, H: Ui(li), k: li, I: Ui(li % 12 || 12), l: li % 12 || 12, M: Ui(this.get("Minutes", ai)), p: 12 > li ? "AM" : "PM", P: 12 > li ? "am" : "pm", S: Ui(ai.getSeconds()), L: Ui(Math.floor(Ti % 1e3), 3) }, Si.dateFormats), Ki(ai, function(gi, Ei) {
            for (; yi.indexOf("%" + Ei) !== -1; )
              yi = yi.replace("%" + Ei, typeof gi == "function" ? gi.call(Oi, Ti) : gi);
          }), Mi ? yi.substr(0, 1).toUpperCase() + yi.substr(1) : yi;
        }
        resolveDTLFormat(yi) {
          return ss(yi, !0) ? yi : (yi = bi(yi), {
            main: yi[0],
            from: yi[1],
            to: yi[2]
          });
        }
        getTimeTicks(yi, Ti, Mi, Oi) {
          const ai = this, li = [], xi = {};
          var di = new ai.Date(Ti);
          const pi = yi.unitRange, ei = yi.count || 1;
          let Fe;
          if (Oi = ki(Oi, 1), ts(Ti)) {
            if (ai.set("Milliseconds", di, pi >= Ri.second ? 0 : ei * Math.floor(ai.get("Milliseconds", di) / ei)), pi >= Ri.second && ai.set("Seconds", di, pi >= Ri.minute ? 0 : ei * Math.floor(ai.get("Seconds", di) / ei)), pi >= Ri.minute && ai.set("Minutes", di, pi >= Ri.hour ? 0 : ei * Math.floor(ai.get("Minutes", di) / ei)), pi >= Ri.hour && ai.set("Hours", di, pi >= Ri.day ? 0 : ei * Math.floor(ai.get("Hours", di) / ei)), pi >= Ri.day && ai.set("Date", di, pi >= Ri.month ? 1 : Math.max(1, ei * Math.floor(ai.get(
              "Date",
              di
            ) / ei))), pi >= Ri.month) {
              ai.set("Month", di, pi >= Ri.year ? 0 : ei * Math.floor(ai.get("Month", di) / ei));
              var ii = ai.get("FullYear", di);
            }
            pi >= Ri.year && ai.set("FullYear", di, ii - ii % ei), pi === Ri.week && (ii = ai.get("Day", di), ai.set("Date", di, ai.get("Date", di) - ii + Oi + (ii < Oi ? -7 : 0))), ii = ai.get("FullYear", di), Oi = ai.get("Month", di);
            const hi = ai.get("Date", di), gi = ai.get("Hours", di);
            for (Ti = di.getTime(), !ai.variableTimezone && ai.useUTC || !ts(Mi) || (Fe = Mi - Ti > 4 * Ri.month || ai.getTimezoneOffset(Ti) !== ai.getTimezoneOffset(Mi)), Ti = di.getTime(), di = 1; Ti < Mi; )
              li.push(Ti), Ti = pi === Ri.year ? ai.makeTime(ii + di * ei, 0) : pi === Ri.month ? ai.makeTime(ii, Oi + di * ei) : !Fe || pi !== Ri.day && pi !== Ri.week ? Fe && pi === Ri.hour && 1 < ei ? ai.makeTime(ii, Oi, hi, gi + di * ei) : Ti + pi * ei : ai.makeTime(ii, Oi, hi + di * ei * (pi === Ri.day ? 1 : 7)), di++;
            li.push(Ti), pi <= Ri.hour && 1e4 > li.length && li.forEach(function(Ei) {
              Ei % 18e5 === 0 && ai.dateFormat("%H%M%S%L", Ei) === "000000000" && (xi[Ei] = "day");
            });
          }
          return li.info = is(yi, { higherRanks: xi, totalRange: pi * ei }), li;
        }
        getDateFormat(yi, Ti, Mi, Oi) {
          const ai = this.dateFormat("%m-%d %H:%M:%S.%L", Ti), li = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 };
          let xi, di = "millisecond";
          for (xi in Ri) {
            if (yi === Ri.week && +this.dateFormat(
              "%w",
              Ti
            ) === Mi && ai.substr(6) === "00:00:00.000") {
              xi = "week";
              break;
            }
            if (Ri[xi] > yi) {
              xi = di;
              break;
            }
            if (li[xi] && ai.substr(li[xi]) !== "01-01 00:00:00.000".substr(li[xi]))
              break;
            xi !== "week" && (di = xi);
          }
          return this.resolveDTLFormat(Oi[xi]).main;
        }
      }
      return Ci;
    }), ci(oi, "Core/Defaults.js", [oi["Core/Chart/ChartDefaults.js"], oi["Core/Color/Color.js"], oi["Core/Globals.js"], oi["Core/Color/Palettes.js"], oi["Core/Time.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts, Qi, is) {
      const { isTouchDevice: ss, svg: Wi } = qi, { merge: Ki } = is, Ui = {
        colors: ts.colors,
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
        chart: Si,
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
          animation: Wi,
          borderRadius: 3,
          dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" },
          footerFormat: "",
          headerShape: "callout",
          hideDelay: 500,
          padding: 8,
          shape: "callout",
          shared: !1,
          snap: ss ? 25 : 10,
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
      Ui.chart.styledMode = !1;
      const ki = new Qi(Ui.time);
      return Si = { defaultOptions: Ui, defaultTime: ki, getOptions: function() {
        return Ui;
      }, setOptions: function(bi) {
        return Ki(!0, Ui, bi), (bi.time || bi.global) && (qi.time ? qi.time.update(Ki(Ui.global, Ui.time, bi.global, bi.time)) : qi.time = ki), Ui;
      } }, Si;
    }), ci(oi, "Core/Animation/Fx.js", [oi["Core/Color/Color.js"], oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { parse: ts } = Si, { win: Qi } = ji, { isNumber: is, objectEach: ss } = qi;
      class Wi {
        constructor(Ui, ki, bi) {
          this.pos = NaN, this.options = ki, this.elem = Ui, this.prop = bi;
        }
        dSetter() {
          var Ui = this.paths;
          const ki = Ui && Ui[0];
          Ui = Ui && Ui[1];
          const bi = this.now || 0;
          let Ri = [];
          if (bi !== 1 && ki && Ui)
            if (ki.length === Ui.length && 1 > bi)
              for (let Ni = 0; Ni < Ui.length; Ni++) {
                const fi = ki[Ni], Ci = Ui[Ni], wi = [];
                for (let yi = 0; yi < Ci.length; yi++) {
                  const Ti = fi[yi], Mi = Ci[yi];
                  is(Ti) && is(Mi) && (Ci[0] !== "A" || yi !== 4 && yi !== 5) ? wi[yi] = Ti + bi * (Mi - Ti) : wi[yi] = Mi;
                }
                Ri.push(wi);
              }
            else
              Ri = Ui;
          else
            Ri = this.toD || [];
          this.elem.attr("d", Ri, void 0, !0);
        }
        update() {
          const Ui = this.elem, ki = this.prop, bi = this.now, Ri = this.options.step;
          this[ki + "Setter"] ? this[ki + "Setter"]() : Ui.attr ? Ui.element && Ui.attr(ki, bi, null, !0) : Ui.style[ki] = bi + this.unit, Ri && Ri.call(Ui, bi, this);
        }
        run(Ui, ki, bi) {
          const Ri = this, Ni = Ri.options, fi = function(yi) {
            return fi.stopped ? !1 : Ri.step(yi);
          }, Ci = Qi.requestAnimationFrame || function(yi) {
            setTimeout(yi, 13);
          }, wi = function() {
            for (let yi = 0; yi < Wi.timers.length; yi++)
              Wi.timers[yi]() || Wi.timers.splice(yi--, 1);
            Wi.timers.length && Ci(wi);
          };
          Ui !== ki || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = Ui, this.end = ki, this.unit = bi, this.now = this.start, this.pos = 0, fi.elem = this.elem, fi.prop = this.prop, fi() && Wi.timers.push(fi) === 1 && Ci(wi)) : (delete Ni.curAnim[this.prop], Ni.complete && Object.keys(Ni.curAnim).length === 0 && Ni.complete.call(this.elem));
        }
        step(Ui) {
          const ki = +/* @__PURE__ */ new Date(), bi = this.options, Ri = this.elem, Ni = bi.complete, fi = bi.duration, Ci = bi.curAnim;
          let wi;
          return Ri.attr && !Ri.element ? Ui = !1 : Ui || ki >= fi + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), wi = Ci[this.prop] = !0, ss(Ci, function(yi) {
            yi !== !0 && (wi = !1);
          }), wi && Ni && Ni.call(Ri), Ui = !1) : (this.pos = bi.easing((ki - this.startTime) / fi), this.now = this.start + (this.end - this.start) * this.pos, this.update(), Ui = !0), Ui;
        }
        initPath(Ui, ki, bi) {
          function Ri(ai, li) {
            for (; ai.length < Mi; ) {
              var xi = ai[0];
              const di = li[Mi - ai.length];
              di && xi[0] === "M" && (ai[0] = di[0] === "C" ? ["C", xi[1], xi[2], xi[1], xi[2], xi[1], xi[2]] : ["L", xi[1], xi[2]]), ai.unshift(xi), wi && (xi = ai.pop(), ai.push(ai[ai.length - 1], xi));
            }
          }
          function Ni(ai, li) {
            for (; ai.length < Mi; )
              if (li = ai[Math.floor(ai.length / yi) - 1].slice(), li[0] === "C" && (li[1] = li[5], li[2] = li[6]), wi) {
                const xi = ai[Math.floor(ai.length / yi)].slice();
                ai.splice(ai.length / 2, 0, li, xi);
              } else
                ai.push(li);
          }
          const fi = Ui.startX, Ci = Ui.endX;
          bi = bi.slice();
          const wi = Ui.isArea, yi = wi ? 2 : 1;
          let Ti, Mi, Oi;
          if (ki = ki && ki.slice(), !ki)
            return [
              bi,
              bi
            ];
          if (fi && Ci && Ci.length) {
            for (Ui = 0; Ui < fi.length; Ui++)
              if (fi[Ui] === Ci[0]) {
                Ti = Ui;
                break;
              } else if (fi[0] === Ci[Ci.length - fi.length + Ui]) {
                Ti = Ui, Oi = !0;
                break;
              } else if (fi[fi.length - 1] === Ci[Ci.length - fi.length + Ui]) {
                Ti = fi.length - Ui;
                break;
              }
            typeof Ti > "u" && (ki = []);
          }
          return ki.length && is(Ti) && (Mi = bi.length + Ti * yi, Oi ? (Ri(ki, bi), Ni(bi, ki)) : (Ri(bi, ki), Ni(ki, bi))), [ki, bi];
        }
        fillSetter() {
          Wi.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, ts(this.start).tweenTo(ts(this.end), this.pos), void 0, !0);
        }
      }
      return Wi.timers = [], Wi;
    }), ci(
      oi,
      "Core/Animation/AnimationUtilities.js",
      [oi["Core/Animation/Fx.js"], oi["Core/Utilities.js"]],
      function(Si, ji) {
        function qi(Ri) {
          return Ki(Ri) ? Ui({ duration: 500, defer: 0 }, Ri) : { duration: Ri ? 500 : 0, defer: 0 };
        }
        function ts(Ri, Ni) {
          let fi = Si.timers.length;
          for (; fi--; )
            Si.timers[fi].elem !== Ri || Ni && Ni !== Si.timers[fi].prop || (Si.timers[fi].stopped = !0);
        }
        const { defined: Qi, getStyle: is, isArray: ss, isNumber: Wi, isObject: Ki, merge: Ui, objectEach: ki, pick: bi } = ji;
        return { animate: function(Ri, Ni, fi) {
          let Ci, wi = "", yi, Ti, Mi;
          Ki(fi) || (Mi = arguments, fi = { duration: Mi[2], easing: Mi[3], complete: Mi[4] }), Wi(fi.duration) || (fi.duration = 400), fi.easing = typeof fi.easing == "function" ? fi.easing : Math[fi.easing] || Math.easeInOutSine, fi.curAnim = Ui(Ni), ki(Ni, function(Oi, ai) {
            ts(Ri, ai), Ti = new Si(Ri, fi, ai), yi = void 0, ai === "d" && ss(Ni.d) ? (Ti.paths = Ti.initPath(Ri, Ri.pathArray, Ni.d), Ti.toD = Ni.d, Ci = 0, yi = 1) : Ri.attr ? Ci = Ri.attr(ai) : (Ci = parseFloat(is(Ri, ai)) || 0, ai !== "opacity" && (wi = "px")), yi || (yi = Oi), typeof yi == "string" && yi.match("px") && (yi = yi.replace(/px/g, "")), Ti.run(Ci, yi, wi);
          });
        }, animObject: qi, getDeferredAnimation: function(Ri, Ni, fi) {
          const Ci = qi(Ni);
          let wi = 0, yi = 0;
          return (fi ? [fi] : Ri.series).forEach((Ti) => {
            Ti = qi(Ti.options.animation), wi = Ni && Qi(Ni.defer) ? Ci.defer : Math.max(wi, Ti.duration + Ti.defer), yi = Math.min(Ci.duration, Ti.duration);
          }), Ri.renderer.forExport && (wi = 0), { defer: Math.max(0, wi - yi), duration: Math.min(wi, yi) };
        }, setAnimation: function(Ri, Ni) {
          Ni.renderer.globalAnimation = bi(Ri, Ni.options.chart.animation, !0);
        }, stop: ts };
      }
    ), ci(oi, "Core/Renderer/HTML/AST.js", [oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      const { SVG_NS: qi, win: ts } = Si, { attr: Qi, createElement: is, css: ss, error: Wi, isFunction: Ki, isString: Ui, objectEach: ki, splat: bi } = ji;
      ({ trustedTypes: ji } = ts);
      const Ri = ji && Ki(ji.createPolicy) && ji.createPolicy("highcharts", { createHTML: (wi) => wi });
      ji = Ri ? Ri.createHTML("") : "";
      try {
        var Ni = !!new DOMParser().parseFromString(ji, "text/html");
      } catch {
        Ni = !1;
      }
      const fi = Ni;
      class Ci {
        static filterUserAttributes(yi) {
          return ki(yi, (Ti, Mi) => {
            let Oi = !0;
            Ci.allowedAttributes.indexOf(Mi) === -1 && (Oi = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(Mi) !== -1 && (Oi = Ui(Ti) && Ci.allowedReferences.some((ai) => Ti.indexOf(ai) === 0)), Oi || (Wi(33, !1, void 0, { "Invalid attribute in config": `${Mi}` }), delete yi[Mi]), Ui(Ti) && yi[Mi] && (yi[Mi] = Ti.replace(
              /</g,
              "&lt;"
            ));
          }), yi;
        }
        static parseStyle(yi) {
          return yi.split(";").reduce((Ti, Mi) => {
            Mi = Mi.split(":").map((ai) => ai.trim());
            const Oi = Mi.shift();
            return Oi && Mi.length && (Ti[Oi.replace(/-([a-z])/g, (ai) => ai[1].toUpperCase())] = Mi.join(":")), Ti;
          }, {});
        }
        static setElementHTML(yi, Ti) {
          yi.innerHTML = Ci.emptyHTML, Ti && new Ci(Ti).addToDOM(yi);
        }
        constructor(yi) {
          this.nodes = typeof yi == "string" ? this.parseMarkup(yi) : yi;
        }
        addToDOM(yi) {
          function Ti(Mi, Oi) {
            let ai;
            return bi(Mi).forEach(function(li) {
              var xi = li.tagName;
              const di = li.textContent ? Si.doc.createTextNode(li.textContent) : void 0, pi = Ci.bypassHTMLFiltering;
              let ei;
              if (xi)
                if (xi === "#text")
                  ei = di;
                else if (Ci.allowedTags.indexOf(xi) !== -1 || pi) {
                  xi = Si.doc.createElementNS(xi === "svg" ? qi : Oi.namespaceURI || qi, xi);
                  const Fe = li.attributes || {};
                  ki(li, function(ii, hi) {
                    hi !== "tagName" && hi !== "attributes" && hi !== "children" && hi !== "style" && hi !== "textContent" && (Fe[hi] = ii);
                  }), Qi(xi, pi ? Fe : Ci.filterUserAttributes(Fe)), li.style && ss(xi, li.style), di && xi.appendChild(di), Ti(li.children || [], xi), ei = xi;
                } else
                  Wi(33, !1, void 0, { "Invalid tagName in config": xi });
              ei && Oi.appendChild(ei), ai = ei;
            }), ai;
          }
          return Ti(this.nodes, yi);
        }
        parseMarkup(yi) {
          const Ti = [];
          if (yi = yi.trim().replace(/ style=(["'])/g, " data-style=$1"), fi)
            yi = new DOMParser().parseFromString(Ri ? Ri.createHTML(yi) : yi, "text/html");
          else {
            const Oi = is("div");
            Oi.innerHTML = yi, yi = { body: Oi };
          }
          const Mi = (Oi, ai) => {
            var li = Oi.nodeName.toLowerCase();
            const xi = { tagName: li };
            if (li === "#text" && (xi.textContent = Oi.textContent || ""), li = Oi.attributes) {
              const di = {};
              [].forEach.call(li, (pi) => {
                pi.name === "data-style" ? xi.style = Ci.parseStyle(pi.value) : di[pi.name] = pi.value;
              }), xi.attributes = di;
            }
            if (Oi.childNodes.length) {
              const di = [];
              [].forEach.call(Oi.childNodes, (pi) => {
                Mi(
                  pi,
                  di
                );
              }), di.length && (xi.children = di);
            }
            ai.push(xi);
          };
          return [].forEach.call(yi.body.childNodes, (Oi) => Mi(Oi, Ti)), Ti;
        }
      }
      return Ci.allowedAttributes = "alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" "), Ci.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "), Ci.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" "), Ci.emptyHTML = ji, Ci.bypassHTMLFiltering = !1, Ci;
    }), ci(oi, "Core/Templating.js", [oi["Core/Defaults.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      function qi(fi = "", Ci, wi) {
        const yi = /\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g, Ti = /\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g, Mi = [], Oi = /f$/, ai = /\.([0-9])/, li = Qi.lang, xi = wi && wi.time || is, di = wi && wi.numberFormatter || ts, pi = (ni = "") => {
          let Pi;
          return ni === "true" ? !0 : ni === "false" ? !1 : (Pi = Number(ni)).toString() === ni ? Pi : Wi(ni, Ci);
        };
        let ei, Fe, ii = 0, hi;
        for (; (ei = yi.exec(fi)) !== null; ) {
          const ni = Ti.exec(ei[1]);
          ni && (ei = ni, hi = !0), Fe && Fe.isBlock || (Fe = {
            ctx: Ci,
            expression: ei[1],
            find: ei[0],
            isBlock: ei[1].charAt(0) === "#",
            start: ei.index,
            startInner: ei.index + ei[0].length,
            length: ei[0].length
          });
          var gi = ei[1].split(" ")[0].replace("#", "");
          if (Ni[gi] && (Fe.isBlock && gi === Fe.fn && ii++, Fe.fn || (Fe.fn = gi)), gi = ei[1] === "else", Fe.isBlock && Fe.fn && (ei[1] === `/${Fe.fn}` || gi))
            if (ii)
              gi || ii--;
            else {
              var Ei = Fe.startInner;
              Ei = fi.substr(Ei, ei.index - Ei), Fe.body === void 0 ? (Fe.body = Ei, Fe.startInner = ei.index + ei[0].length) : Fe.elseBody = Ei, Fe.find += Ei + ei[0], gi || (Mi.push(Fe), Fe = void 0);
            }
          else
            Fe.isBlock || Mi.push(Fe);
          if (ni && (Fe == null || !Fe.isBlock))
            break;
        }
        return Mi.forEach((ni) => {
          const { body: Pi, elseBody: Fi, expression: Zi, fn: rs } = ni;
          var Bi;
          if (rs) {
            var si = [ni], Li = Zi.split(" ");
            for (Bi = Ni[rs].length; Bi--; )
              si.unshift(pi(Li[Bi + 1]));
            Bi = Ni[rs].apply(Ci, si), ni.isBlock && typeof Bi == "boolean" && (Bi = qi(Bi ? Pi : Fi, Ci));
          } else
            si = Zi.split(":"), Bi = pi(si.shift() || ""), si.length && typeof Bi == "number" && (si = si.join(":"), Oi.test(si) ? (Li = parseInt((si.match(ai) || ["", "-1"])[1], 10), Bi !== null && (Bi = di(Bi, Li, li.decimalPoint, -1 < si.indexOf(",") ? li.thousandsSep : ""))) : Bi = xi.dateFormat(si, Bi));
          fi = fi.replace(ni.find, bi(Bi, ""));
        }), hi ? qi(fi, Ci, wi) : fi;
      }
      function ts(fi, Ci, wi, yi) {
        fi = +fi || 0, Ci = +Ci;
        const Ti = Qi.lang;
        var Mi = (fi.toString().split(".")[1] || "").split("e")[0].length;
        const Oi = fi.toString().split("e"), ai = Ci;
        if (Ci === -1)
          Ci = Math.min(Mi, 20);
        else if (!Ui(Ci))
          Ci = 2;
        else if (Ci && Oi[1] && 0 > Oi[1]) {
          var li = Ci + +Oi[1];
          0 <= li ? (Oi[0] = (+Oi[0]).toExponential(li).split("e")[0], Ci = li) : (Oi[0] = Oi[0].split(".")[0] || 0, fi = 20 > Ci ? (Oi[0] * Math.pow(10, Oi[1])).toFixed(Ci) : 0, Oi[1] = 0);
        }
        li = (Math.abs(Oi[1] ? Oi[0] : fi) + Math.pow(10, -Math.max(Ci, Mi) - 1)).toFixed(Ci), Mi = String(Ri(li));
        const xi = 3 < Mi.length ? Mi.length % 3 : 0;
        return wi = bi(wi, Ti.decimalPoint), yi = bi(yi, Ti.thousandsSep), fi = (0 > fi ? "-" : "") + (xi ? Mi.substr(0, xi) + yi : ""), fi = 0 > +Oi[1] && !ai ? "0" : fi + Mi.substr(xi).replace(/(\d{3})(?=\d)/g, "$1" + yi), Ci && (fi += wi + li.slice(-Ci)), Oi[1] && +fi != 0 && (fi += "e" + Oi[1]), fi;
      }
      const { defaultOptions: Qi, defaultTime: is } = Si, { extend: ss, getNestedProperty: Wi, isArray: Ki, isNumber: Ui, isObject: ki, pick: bi, pInt: Ri } = ji, Ni = { add: (fi, Ci) => fi + Ci, divide: (fi, Ci) => Ci !== 0 ? fi / Ci : "", eq: (fi, Ci) => fi == Ci, each: function(fi) {
        const Ci = arguments[arguments.length - 1];
        return Ki(fi) ? fi.map((wi, yi) => qi(Ci.body, ss(ki(wi) ? wi : { "@this": wi }, { "@index": yi, "@first": yi === 0, "@last": yi === fi.length - 1 }))).join("") : !1;
      }, ge: (fi, Ci) => fi >= Ci, gt: (fi, Ci) => fi > Ci, if: (fi) => !!fi, le: (fi, Ci) => fi <= Ci, lt: (fi, Ci) => fi < Ci, multiply: (fi, Ci) => fi * Ci, ne: (fi, Ci) => fi != Ci, subtract: (fi, Ci) => fi - Ci, unless: (fi) => !fi };
      return { dateFormat: function(fi, Ci, wi) {
        return is.dateFormat(fi, Ci, wi);
      }, format: qi, helpers: Ni, numberFormat: ts };
    }), ci(oi, "Core/Renderer/RendererUtilities.js", [oi["Core/Utilities.js"]], function(Si) {
      const { clamp: ji, pick: qi, stableSort: ts } = Si;
      var Qi;
      return function(is) {
        function ss(Wi, Ki, Ui) {
          const ki = Wi;
          var bi = ki.reducedLen || Ki, Ri = (Ti, Mi) => (Mi.rank || 0) - (Ti.rank || 0);
          const Ni = (Ti, Mi) => Ti.target - Mi.target;
          let fi, Ci = !0, wi = [], yi = 0;
          for (fi = Wi.length; fi--; )
            yi += Wi[fi].size;
          if (yi > bi) {
            for (ts(Wi, Ri), yi = fi = 0; yi <= bi; )
              yi += Wi[fi].size, fi++;
            wi = Wi.splice(fi - 1, Wi.length);
          }
          for (ts(Wi, Ni), Wi = Wi.map((Ti) => ({ size: Ti.size, targets: [Ti.target], align: qi(Ti.align, 0.5) })); Ci; ) {
            for (fi = Wi.length; fi--; )
              bi = Wi[fi], Ri = (Math.min.apply(0, bi.targets) + Math.max.apply(0, bi.targets)) / 2, bi.pos = ji(Ri - bi.size * bi.align, 0, Ki - bi.size);
            for (fi = Wi.length, Ci = !1; fi--; )
              0 < fi && Wi[fi - 1].pos + Wi[fi - 1].size > Wi[fi].pos && (Wi[fi - 1].size += Wi[fi].size, Wi[fi - 1].targets = Wi[fi - 1].targets.concat(Wi[fi].targets), Wi[fi - 1].align = 0.5, Wi[fi - 1].pos + Wi[fi - 1].size > Ki && (Wi[fi - 1].pos = Ki - Wi[fi - 1].size), Wi.splice(fi, 1), Ci = !0);
          }
          return ki.push.apply(ki, wi), fi = 0, Wi.some((Ti) => {
            let Mi = 0;
            return (Ti.targets || []).some(() => (ki[fi].pos = Ti.pos + Mi, typeof Ui < "u" && Math.abs(ki[fi].pos - ki[fi].target) > Ui ? (ki.slice(0, fi + 1).forEach((Oi) => delete Oi.pos), ki.reducedLen = (ki.reducedLen || Ki) - 0.1 * Ki, ki.reducedLen > 0.1 * Ki && ss(ki, Ki, Ui), !0) : (Mi += ki[fi].size, fi++, !1)));
          }), ts(ki, Ni), ki;
        }
        is.distribute = ss;
      }(Qi || (Qi = {})), Qi;
    }), ci(oi, "Core/Renderer/SVG/SVGElement.js", [
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Color/Color.js"],
      oi["Core/Globals.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts) {
      const { animate: Qi, animObject: is, stop: ss } = Si, { deg2rad: Wi, doc: Ki, svg: Ui, SVG_NS: ki, win: bi } = qi, { addEvent: Ri, attr: Ni, createElement: fi, css: Ci, defined: wi, erase: yi, extend: Ti, fireEvent: Mi, isArray: Oi, isFunction: ai, isObject: li, isString: xi, merge: di, objectEach: pi, pick: ei, pInt: Fe, syncTimeout: ii, uniqueKey: hi } = ts;
      class gi {
        constructor() {
          this.element = void 0, this.onEvents = {}, this.opacity = 1, this.renderer = void 0, this.SVG_NS = ki;
        }
        _defaultGetter(ni) {
          return ni = ei(this[ni + "Value"], this[ni], this.element ? this.element.getAttribute(ni) : null, 0), /^[\-0-9\.]+$/.test(ni) && (ni = parseFloat(ni)), ni;
        }
        _defaultSetter(ni, Pi, Fi) {
          Fi.setAttribute(Pi, ni);
        }
        add(ni) {
          const Pi = this.renderer, Fi = this.element;
          let Zi;
          return ni && (this.parentGroup = ni), typeof this.textStr < "u" && this.element.nodeName === "text" && Pi.buildText(this), this.added = !0, (!ni || ni.handleZ || this.zIndex) && (Zi = this.zIndexSetter()), Zi || (ni ? ni.element : Pi.box).appendChild(Fi), this.onAdd && this.onAdd(), this;
        }
        addClass(ni, Pi) {
          const Fi = Pi ? "" : this.attr("class") || "";
          return ni = (ni || "").split(/ /g).reduce(function(Zi, rs) {
            return Fi.indexOf(rs) === -1 && Zi.push(rs), Zi;
          }, Fi ? [Fi] : []).join(" "), ni !== Fi && this.attr("class", ni), this;
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), this.doTransform = !1);
        }
        align(ni, Pi, Fi) {
          const Zi = {};
          var rs = this.renderer, Bi = rs.alignedObjects, si;
          let Li, Hi;
          ni ? (this.alignOptions = ni, this.alignByTranslate = Pi, (!Fi || xi(Fi)) && (this.alignTo = si = Fi || "renderer", yi(Bi, this), Bi.push(this), Fi = void 0)) : (ni = this.alignOptions, Pi = this.alignByTranslate, si = this.alignTo), Fi = ei(Fi, rs[si], si === "scrollablePlotBox" ? rs.plotBox : void 0, rs), si = ni.align;
          const Di = ni.verticalAlign;
          return rs = (Fi.x || 0) + (ni.x || 0), Bi = (Fi.y || 0) + (ni.y || 0), si === "right" ? Li = 1 : si === "center" && (Li = 2), Li && (rs += (Fi.width - (ni.width || 0)) / Li), Zi[Pi ? "translateX" : "x"] = Math.round(rs), Di === "bottom" ? Hi = 1 : Di === "middle" && (Hi = 2), Hi && (Bi += (Fi.height - (ni.height || 0)) / Hi), Zi[Pi ? "translateY" : "y"] = Math.round(Bi), this[this.placed ? "animate" : "attr"](Zi), this.placed = !0, this.alignAttr = Zi, this;
        }
        alignSetter(ni) {
          const Pi = { left: "start", center: "middle", right: "end" };
          Pi[ni] && (this.alignValue = ni, this.element.setAttribute("text-anchor", Pi[ni]));
        }
        animate(ni, Pi, Fi) {
          const Zi = is(ei(Pi, this.renderer.globalAnimation, !0));
          return Pi = Zi.defer, Ki.hidden && (Zi.duration = 0), Zi.duration !== 0 ? (Fi && (Zi.complete = Fi), ii(() => {
            this.element && Qi(this, ni, Zi);
          }, Pi)) : (this.attr(ni, void 0, Fi || Zi.complete), pi(ni, function(rs, Bi) {
            Zi.step && Zi.step.call(this, rs, { prop: Bi, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(ni) {
          const Pi = this.element;
          ni.indexOf("contrast") !== -1 && (ni = ni.replace(/contrast/g, this.renderer.getContrast(Pi.style.fill)));
          var Fi = ni.split(" ");
          if (ni = Fi[Fi.length - 1], (Fi = Fi[0]) && Fi !== "none" && qi.svg) {
            this.fakeTS = !0, Fi = Fi.replace(/(^[\d\.]+)(.*?)$/g, function(Bi, si, Li) {
              return 2 * Number(si) + Li;
            }), this.removeTextOutline();
            const Zi = Ki.createElementNS(ki, "tspan");
            Ni(Zi, { class: "highcharts-text-outline", fill: ni, stroke: ni, "stroke-width": Fi, "stroke-linejoin": "round" }), ni = Pi.querySelector("textPath") || Pi, [].forEach.call(ni.childNodes, (Bi) => {
              const si = Bi.cloneNode(!0);
              si.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((Li) => si.removeAttribute(Li)), Zi.appendChild(si);
            });
            let rs = 0;
            [].forEach.call(ni.querySelectorAll("text tspan"), (Bi) => {
              rs += Number(Bi.getAttribute("dy"));
            }), Fi = Ki.createElementNS(ki, "tspan"), Fi.textContent = "​", Ni(Fi, { x: Number(Pi.getAttribute("x")), dy: -rs }), Zi.appendChild(Fi), ni.insertBefore(Zi, ni.firstChild);
          }
        }
        attr(ni, Pi, Fi, Zi) {
          const rs = this.element, Bi = gi.symbolCustomAttribs;
          let si, Li, Hi = this, Di, Vi;
          return typeof ni == "string" && typeof Pi < "u" && (si = ni, ni = {}, ni[si] = Pi), typeof ni == "string" ? Hi = (this[ni + "Getter"] || this._defaultGetter).call(this, ni, rs) : (pi(ni, function(ri, mi) {
            Di = !1, Zi || ss(this, mi), this.symbolName && Bi.indexOf(mi) !== -1 && (Li || (this.symbolAttr(ni), Li = !0), Di = !0), !this.rotation || mi !== "x" && mi !== "y" || (this.doTransform = !0), Di || (Vi = this[mi + "Setter"] || this._defaultSetter, Vi.call(this, ri, mi, rs));
          }, this), this.afterSetters()), Fi && Fi.call(this), Hi;
        }
        clip(ni) {
          return this.attr("clip-path", ni ? "url(" + this.renderer.url + "#" + ni.id + ")" : "none");
        }
        crisp(ni, Pi) {
          Pi = Pi || ni.strokeWidth || 0;
          const Fi = Math.round(Pi) % 2 / 2;
          return ni.x = Math.floor(ni.x || this.x || 0) + Fi, ni.y = Math.floor(ni.y || this.y || 0) + Fi, ni.width = Math.floor((ni.width || this.width || 0) - 2 * Fi), ni.height = Math.floor((ni.height || this.height || 0) - 2 * Fi), wi(ni.strokeWidth) && (ni.strokeWidth = Pi), ni;
        }
        complexColor(ni, Pi, Fi) {
          const Zi = this.renderer;
          let rs, Bi, si, Li, Hi, Di, Vi, ri, mi, vi, zi = [], Xi;
          Mi(this.renderer, "complexColor", { args: arguments }, function() {
            if (ni.radialGradient ? Bi = "radialGradient" : ni.linearGradient && (Bi = "linearGradient"), Bi) {
              if (si = ni[Bi], Hi = Zi.gradients, Di = ni.stops, mi = Fi.radialReference, Oi(si) && (ni[Bi] = si = { x1: si[0], y1: si[1], x2: si[2], y2: si[3], gradientUnits: "userSpaceOnUse" }), Bi === "radialGradient" && mi && !wi(si.gradientUnits) && (Li = si, si = di(si, Zi.getRadialAttr(mi, Li), { gradientUnits: "userSpaceOnUse" })), pi(si, function(Gi, Ji) {
                Ji !== "id" && zi.push(Ji, Gi);
              }), pi(Di, function(Gi) {
                zi.push(Gi);
              }), zi = zi.join(","), Hi[zi])
                vi = Hi[zi].attr("id");
              else {
                si.id = vi = hi();
                const Gi = Hi[zi] = Zi.createElement(Bi).attr(si).add(Zi.defs);
                Gi.radAttr = Li, Gi.stops = [], Di.forEach(function(Ji) {
                  Ji[1].indexOf("rgba") === 0 ? (rs = ji.parse(Ji[1]), Vi = rs.get("rgb"), ri = rs.get("a")) : (Vi = Ji[1], ri = 1), Ji = Zi.createElement("stop").attr({ offset: Ji[0], "stop-color": Vi, "stop-opacity": ri }).add(Gi), Gi.stops.push(Ji);
                });
              }
              Xi = "url(" + Zi.url + "#" + vi + ")", Fi.setAttribute(Pi, Xi), Fi.gradient = zi, ni.toString = function() {
                return Xi;
              };
            }
          });
        }
        css(ni) {
          const Pi = this.styles, Fi = {}, Zi = this.element;
          let rs, Bi = !Pi;
          if (Pi && pi(ni, function(si, Li) {
            Pi && Pi[Li] !== si && (Fi[Li] = si, Bi = !0);
          }), Bi) {
            Pi && (ni = Ti(Pi, Fi)), ni.width === null || ni.width === "auto" ? delete this.textWidth : Zi.nodeName.toLowerCase() === "text" && ni.width && (rs = this.textWidth = Fe(ni.width)), this.styles = ni, rs && !Ui && this.renderer.forExport && delete ni.width;
            const si = di(ni);
            Zi.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((Li) => si && delete si[Li]), si.color && (si.fill = si.color)), Ci(Zi, si);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), ni.textOutline && this.applyTextOutline(ni.textOutline)), this;
        }
        dashstyleSetter(ni) {
          let Pi = this["stroke-width"];
          if (Pi === "inherit" && (Pi = 1), ni = ni && ni.toLowerCase()) {
            const Fi = ni.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (ni = Fi.length; ni--; )
              Fi[ni] = "" + Fe(Fi[ni]) * ei(Pi, NaN);
            ni = Fi.join(",").replace(/NaN/g, "none"), this.element.setAttribute(
              "stroke-dasharray",
              ni
            );
          }
        }
        destroy() {
          const ni = this;
          var Pi = ni.element || {};
          const Fi = ni.renderer;
          var Zi = Pi.ownerSVGElement;
          let rs = Pi.nodeName === "SPAN" && ni.parentGroup || void 0;
          if (Pi.onclick = Pi.onmouseout = Pi.onmouseover = Pi.onmousemove = Pi.point = null, ss(ni), ni.clipPath && Zi) {
            const Bi = ni.clipPath;
            [].forEach.call(Zi.querySelectorAll("[clip-path],[CLIP-PATH]"), function(si) {
              -1 < si.getAttribute("clip-path").indexOf(Bi.element.id) && si.removeAttribute("clip-path");
            }), ni.clipPath = Bi.destroy();
          }
          if (ni.stops) {
            for (Zi = 0; Zi < ni.stops.length; Zi++)
              ni.stops[Zi].destroy();
            ni.stops.length = 0, ni.stops = void 0;
          }
          for (ni.safeRemoveChild(Pi); rs && rs.div && rs.div.childNodes.length === 0; )
            Pi = rs.parentGroup, ni.safeRemoveChild(rs.div), delete rs.div, rs = Pi;
          ni.alignTo && yi(Fi.alignedObjects, ni), pi(ni, function(Bi, si) {
            ni[si] && ni[si].parentGroup === ni && ni[si].destroy && ni[si].destroy(), delete ni[si];
          });
        }
        dSetter(ni, Pi, Fi) {
          Oi(ni) && (typeof ni[0] == "string" && (ni = this.renderer.pathToSegments(ni)), this.pathArray = ni, ni = ni.reduce((Zi, rs, Bi) => rs && rs.join ? (Bi ? Zi + " " : "") + rs.join(" ") : (rs || "").toString(), "")), /(NaN| {2}|^$)/.test(ni) && (ni = "M 0 0"), this[Pi] !== ni && (Fi.setAttribute(
            Pi,
            ni
          ), this[Pi] = ni);
        }
        fadeOut(ni) {
          const Pi = this;
          Pi.animate({ opacity: 0 }, { duration: ei(ni, 150), complete: function() {
            Pi.hide();
          } });
        }
        fillSetter(ni, Pi, Fi) {
          typeof ni == "string" ? Fi.setAttribute(Pi, ni) : ni && this.complexColor(ni, Pi, Fi);
        }
        getBBox(ni, Pi) {
          const { alignValue: Fi, element: Zi, renderer: rs, styles: Bi, textStr: si } = this, { cache: Li, cacheKeys: Hi } = rs;
          var Di = Zi.namespaceURI === this.SVG_NS;
          Pi = ei(Pi, this.rotation, 0);
          var Vi = rs.styledMode ? Zi && gi.prototype.getStyle.call(Zi, "font-size") : Bi && Bi.fontSize;
          let ri, mi;
          if (wi(si) && (mi = si.toString(), mi.indexOf("<") === -1 && (mi = mi.replace(
            /[0-9]/g,
            "0"
          )), mi += ["", rs.rootFontSize, Vi, Pi, this.textWidth, Fi, Bi && Bi.textOverflow, Bi && Bi.fontWeight].join()), mi && !ni && (ri = Li[mi]), !ri) {
            if (Di || rs.forExport) {
              try {
                var vi = this.fakeTS && function(es) {
                  const os = Zi.querySelector(".highcharts-text-outline");
                  os && Ci(os, { display: es });
                };
                ai(vi) && vi("none"), ri = Zi.getBBox ? Ti({}, Zi.getBBox()) : { width: Zi.offsetWidth, height: Zi.offsetHeight, x: 0, y: 0 }, ai(vi) && vi("");
              } catch {
              }
              (!ri || 0 > ri.width) && (ri = { x: 0, y: 0, width: 0, height: 0 });
            } else
              ri = this.htmlGetBBox();
            if (vi = ri.width, ni = ri.height, Di && (ri.height = ni = { "11px,17": 14, "13px,20": 16 }[`${Vi || ""},${Math.round(ni)}`] || ni), Pi) {
              Di = Number(Zi.getAttribute("y") || 0) - ri.y, Vi = { right: 1, center: 0.5 }[Fi || 0] || 0;
              var zi = Pi * Wi, Xi = (Pi - 90) * Wi, Gi = vi * Math.cos(zi);
              Pi = vi * Math.sin(zi);
              var Ji = Math.cos(Xi);
              zi = Math.sin(Xi), vi = ri.x + Vi * (vi - Gi) + Di * Ji, Xi = vi + Gi, Ji = Xi - ni * Ji, Gi = Ji - Gi, Di = ri.y + Di - Vi * Pi + Di * zi, Vi = Di + Pi, ni = Vi - ni * zi, Pi = ni - Pi, ri.x = Math.min(vi, Xi, Ji, Gi), ri.y = Math.min(Di, Vi, ni, Pi), ri.width = Math.max(vi, Xi, Ji, Gi) - ri.x, ri.height = Math.max(Di, Vi, ni, Pi) - ri.y;
            }
          }
          if (mi && (si === "" || 0 < ri.height)) {
            for (; 250 < Hi.length; )
              delete Li[Hi.shift()];
            Li[mi] || Hi.push(mi), Li[mi] = ri;
          }
          return ri;
        }
        getStyle(ni) {
          return bi.getComputedStyle(this.element || this, "").getPropertyValue(ni);
        }
        hasClass(ni) {
          return ("" + this.attr("class")).split(" ").indexOf(ni) !== -1;
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        init(ni, Pi) {
          this.element = Pi === "span" ? fi(Pi) : Ki.createElementNS(this.SVG_NS, Pi), this.renderer = ni, Mi(this, "afterInit");
        }
        on(ni, Pi) {
          const { onEvents: Fi } = this;
          return Fi[ni] && Fi[ni](), Fi[ni] = Ri(this.element, ni, Pi), this;
        }
        opacitySetter(ni, Pi, Fi) {
          this.opacity = ni = Number(Number(ni).toFixed(3)), Fi.setAttribute(Pi, ni);
        }
        removeClass(ni) {
          return this.attr(
            "class",
            ("" + this.attr("class")).replace(xi(ni) ? new RegExp(`(^| )${ni}( |$)`) : ni, " ").replace(/ +/g, " ").trim()
          );
        }
        removeTextOutline() {
          const ni = this.element.querySelector("tspan.highcharts-text-outline");
          ni && this.safeRemoveChild(ni);
        }
        safeRemoveChild(ni) {
          const Pi = ni.parentNode;
          Pi && Pi.removeChild(ni);
        }
        setRadialReference(ni) {
          const Pi = this.element.gradient && this.renderer.gradients[this.element.gradient];
          return this.element.radialReference = ni, Pi && Pi.radAttr && Pi.animate(this.renderer.getRadialAttr(ni, Pi.radAttr)), this;
        }
        setTextPath(ni, Pi) {
          Pi = di(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, Pi);
          const Fi = this.renderer.url, Zi = this.text || this, rs = Zi.textPath, { attributes: Bi, enabled: si } = Pi;
          return ni = ni || rs && rs.path, rs && rs.undo(), ni && si ? (Pi = Ri(Zi, "afterModifyTree", (Li) => {
            if (ni && si) {
              let Di = ni.attr("id");
              Di || ni.attr("id", Di = hi());
              var Hi = { x: 0, y: 0 };
              wi(Bi.dx) && (Hi.dx = Bi.dx, delete Bi.dx), wi(Bi.dy) && (Hi.dy = Bi.dy, delete Bi.dy), Zi.attr(Hi), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy()), Hi = Li.nodes.slice(0), Li.nodes.length = 0, Li.nodes[0] = { tagName: "textPath", attributes: Ti(
                Bi,
                { "text-anchor": Bi.textAnchor, href: `${Fi}#${Di}` }
              ), children: Hi };
            }
          }), Zi.textPath = { path: ni, undo: Pi }) : (Zi.attr({ dx: 0, dy: 0 }), delete Zi.textPath), this.added && (Zi.textCache = "", this.renderer.buildText(Zi)), this;
        }
        shadow(ni) {
          var Pi;
          const { renderer: Fi } = this, Zi = di(((Pi = this.parentGroup) === null || Pi === void 0 ? void 0 : Pi.rotation) === 90 ? { offsetX: -1, offsetY: -1 } : {}, li(ni) ? ni : {});
          return Pi = Fi.shadowDefinition(Zi), this.attr({ filter: ni ? `url(${Fi.url}#${Pi})` : "none" });
        }
        show(ni = !0) {
          return this.attr({ visibility: ni ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(ni, Pi, Fi) {
          this[Pi] = ni, Fi.setAttribute(Pi, ni);
        }
        strokeWidth() {
          if (!this.renderer.styledMode)
            return this["stroke-width"] || 0;
          const ni = this.getStyle("stroke-width");
          let Pi = 0, Fi;
          return ni.indexOf("px") === ni.length - 2 ? Pi = Fe(ni) : ni !== "" && (Fi = Ki.createElementNS(ki, "rect"), Ni(Fi, { width: ni, "stroke-width": 0 }), this.element.parentNode.appendChild(Fi), Pi = Fi.getBBox().width, Fi.parentNode.removeChild(Fi)), Pi;
        }
        symbolAttr(ni) {
          const Pi = this;
          gi.symbolCustomAttribs.forEach(function(Fi) {
            Pi[Fi] = ei(ni[Fi], Pi[Fi]);
          }), Pi.attr({ d: Pi.renderer.symbols[Pi.symbolName](
            Pi.x,
            Pi.y,
            Pi.width,
            Pi.height,
            Pi
          ) });
        }
        textSetter(ni) {
          ni !== this.textStr && (delete this.textPxLength, this.textStr = ni, this.added && this.renderer.buildText(this));
        }
        titleSetter(ni) {
          const Pi = this.element, Fi = Pi.getElementsByTagName("title")[0] || Ki.createElementNS(this.SVG_NS, "title");
          Pi.insertBefore ? Pi.insertBefore(Fi, Pi.firstChild) : Pi.appendChild(Fi), Fi.textContent = String(ei(ni, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          const ni = this.element;
          return ni.parentNode.appendChild(ni), this;
        }
        translate(ni, Pi) {
          return this.attr({
            translateX: ni,
            translateY: Pi
          });
        }
        updateTransform() {
          const { element: ni, matrix: Pi, rotation: Fi = 0, scaleX: Zi, scaleY: rs, translateX: Bi = 0, translateY: si = 0 } = this, Li = ["translate(" + Bi + "," + si + ")"];
          wi(Pi) && Li.push("matrix(" + Pi.join(",") + ")"), Fi && Li.push("rotate(" + Fi + " " + ei(this.rotationOriginX, ni.getAttribute("x"), 0) + " " + ei(this.rotationOriginY, ni.getAttribute("y") || 0) + ")"), (wi(Zi) || wi(rs)) && Li.push("scale(" + ei(Zi, 1) + " " + ei(rs, 1) + ")"), Li.length && !(this.text || this).textPath && ni.setAttribute("transform", Li.join(" "));
        }
        visibilitySetter(ni, Pi, Fi) {
          ni === "inherit" ? Fi.removeAttribute(Pi) : this[Pi] !== ni && Fi.setAttribute(Pi, ni), this[Pi] = ni;
        }
        xGetter(ni) {
          return this.element.nodeName === "circle" && (ni === "x" ? ni = "cx" : ni === "y" && (ni = "cy")), this._defaultGetter(ni);
        }
        zIndexSetter(ni, Pi) {
          var Fi = this.renderer, Zi = this.parentGroup;
          const rs = (Zi || Fi).element || Fi.box, Bi = this.element;
          Fi = rs === Fi.box;
          let si = !1, Li;
          var Hi = this.added;
          let Di;
          if (wi(ni) ? (Bi.setAttribute("data-z-index", ni), ni = +ni, this[Pi] === ni && (Hi = !1)) : wi(this[Pi]) && Bi.removeAttribute("data-z-index"), this[Pi] = ni, Hi) {
            for ((ni = this.zIndex) && Zi && (Zi.handleZ = !0), Pi = rs.childNodes, Di = Pi.length - 1; 0 <= Di && !si; Di--)
              Zi = Pi[Di], Hi = Zi.getAttribute("data-z-index"), Li = !wi(Hi), Zi !== Bi && (0 > ni && Li && !Fi && !Di ? (rs.insertBefore(Bi, Pi[Di]), si = !0) : (Fe(Hi) <= ni || Li && (!wi(ni) || 0 <= ni)) && (rs.insertBefore(Bi, Pi[Di + 1]), si = !0));
            si || (rs.insertBefore(Bi, Pi[Fi ? 3 : 0]), si = !0);
          }
          return si;
        }
      }
      return gi.symbolCustomAttribs = "anchorX anchorY clockwise end height innerR r start width x y".split(" "), gi.prototype.strokeSetter = gi.prototype.fillSetter, gi.prototype.yGetter = gi.prototype.xGetter, gi.prototype.matrixSetter = gi.prototype.rotationOriginXSetter = gi.prototype.rotationOriginYSetter = gi.prototype.rotationSetter = gi.prototype.scaleXSetter = gi.prototype.scaleYSetter = gi.prototype.translateXSetter = gi.prototype.translateYSetter = gi.prototype.verticalAlignSetter = function(Ei, ni) {
        this[ni] = Ei, this.doTransform = !0;
      }, gi;
    }), ci(oi, "Core/Renderer/RendererRegistry.js", [oi["Core/Globals.js"]], function(Si) {
      var ji;
      return function(qi) {
        qi.rendererTypes = {};
        let ts;
        qi.getRendererType = function(Qi = ts) {
          return qi.rendererTypes[Qi] || qi.rendererTypes[ts];
        }, qi.registerRendererType = function(Qi, is, ss) {
          qi.rendererTypes[Qi] = is, (!ts || ss) && (ts = Qi, Si.Renderer = is);
        };
      }(ji || (ji = {})), ji;
    }), ci(oi, "Core/Renderer/SVG/SVGLabel.js", [oi["Core/Renderer/SVG/SVGElement.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      const { defined: qi, extend: ts, isNumber: Qi, merge: is, pick: ss, removeEvent: Wi } = ji;
      class Ki extends Si {
        constructor(ki, bi, Ri, Ni, fi, Ci, wi, yi, Ti, Mi) {
          super(), this.paddingRightSetter = this.paddingLeftSetter = this.paddingSetter, this.init(ki, "g"), this.textStr = bi, this.x = Ri, this.y = Ni, this.anchorX = Ci, this.anchorY = wi, this.baseline = Ti, this.className = Mi, this.addClass(Mi === "button" ? "highcharts-no-tooltip" : "highcharts-label"), Mi && this.addClass("highcharts-" + Mi), this.text = ki.text(void 0, 0, 0, yi).attr({ zIndex: 1 });
          let Oi;
          typeof fi == "string" && ((Oi = /^url\((.*?)\)$/.test(fi)) || this.renderer.symbols[fi]) && (this.symbolKey = fi), this.bBox = Ki.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = ki.styledMode || Oi, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(ki) {
          ki = { left: 0, center: 0.5, right: 1 }[ki], ki !== this.alignFactor && (this.alignFactor = ki, this.bBox && Qi(this.xSetting) && this.attr({ x: this.xSetting }));
        }
        anchorXSetter(ki, bi) {
          this.anchorX = ki, this.boxAttr(bi, Math.round(ki) - this.getCrispAdjust() - this.xSetting);
        }
        anchorYSetter(ki, bi) {
          this.anchorY = ki, this.boxAttr(bi, ki - this.ySetting);
        }
        boxAttr(ki, bi) {
          this.box ? this.box.attr(ki, bi) : this.deferredAttr[ki] = bi;
        }
        css(ki) {
          if (ki) {
            const bi = {};
            ki = is(ki), Ki.textProps.forEach((Ri) => {
              typeof ki[Ri] < "u" && (bi[Ri] = ki[Ri], delete ki[Ri]);
            }), this.text.css(bi), "fontSize" in bi || "fontWeight" in bi ? this.updateTextPadding() : ("width" in bi || "textOverflow" in bi) && this.updateBoxSize();
          }
          return Si.prototype.css.call(this, ki);
        }
        destroy() {
          Wi(this.element, "mouseenter"), Wi(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), Si.prototype.destroy.call(this);
        }
        fillSetter(ki, bi) {
          ki && (this.needsBox = !0), this.fill = ki, this.boxAttr(bi, ki);
        }
        getBBox() {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          const ki = this.padding, bi = ss(this.paddingLeft, ki);
          return { width: this.width, height: this.height, x: this.bBox.x - bi, y: this.bBox.y - ki };
        }
        getCrispAdjust() {
          return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
        }
        heightSetter(ki) {
          this.heightSetting = ki;
        }
        onAdd() {
          this.text.add(this), this.attr({ text: ss(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && qi(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(ki, bi) {
          Qi(ki) ? ki !== this[bi] && (this[bi] = ki, this.updateTextPadding()) : this[bi] = void 0;
        }
        rSetter(ki, bi) {
          this.boxAttr(bi, ki);
        }
        strokeSetter(ki, bi) {
          this.stroke = ki, this.boxAttr(bi, ki);
        }
        "stroke-widthSetter"(ki, bi) {
          ki && (this.needsBox = !0), this["stroke-width"] = ki, this.boxAttr(bi, ki);
        }
        "text-alignSetter"(ki) {
          this.textAlign = ki;
        }
        textSetter(ki) {
          typeof ki < "u" && this.text.attr({ text: ki }), this.updateTextPadding();
        }
        updateBoxSize() {
          var ki = this.text;
          const bi = {}, Ri = this.padding, Ni = this.bBox = Qi(this.widthSetting) && Qi(this.heightSetting) && !this.textAlign || !qi(ki.textStr) ? Ki.emptyBBox : ki.getBBox();
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || Ni.height || 0) + 2 * Ri;
          const fi = this.renderer.fontMetrics(ki);
          this.baselineOffset = Ri + Math.min((this.text.firstLineMetrics || fi).b, Ni.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - fi.h) / 2), this.needsBox && !ki.textPath && (this.box || (ki = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), ki.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), ki.add(this)), ki = this.getCrispAdjust(), bi.x = ki, bi.y = (this.baseline ? -this.baselineOffset : 0) + ki, bi.width = Math.round(this.width), bi.height = Math.round(this.height), this.box.attr(ts(bi, this.deferredAttr)), this.deferredAttr = {});
        }
        updateTextPadding() {
          const ki = this.text;
          if (!ki.textPath) {
            this.updateBoxSize();
            const bi = this.baseline ? 0 : this.baselineOffset;
            let Ri = ss(this.paddingLeft, this.padding);
            qi(this.widthSetting) && this.bBox && (this.textAlign === "center" || this.textAlign === "right") && (Ri += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)), (Ri !== ki.x || bi !== ki.y) && (ki.attr("x", Ri), ki.hasBoxWidthChanged && (this.bBox = ki.getBBox(!0)), typeof bi < "u" && ki.attr("y", bi)), ki.x = Ri, ki.y = bi;
          }
        }
        widthSetter(ki) {
          this.widthSetting = Qi(ki) ? ki : void 0;
        }
        getPaddedWidth() {
          var ki = this.padding;
          const bi = ss(this.paddingLeft, ki);
          return ki = ss(
            this.paddingRight,
            ki
          ), (this.widthSetting || this.bBox.width || 0) + bi + ki;
        }
        xSetter(ki) {
          this.x = ki, this.alignFactor && (ki -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(ki), this.attr("translateX", this.xSetting);
        }
        ySetter(ki) {
          this.ySetting = this.y = Math.round(ki), this.attr("translateY", this.ySetting);
        }
      }
      return Ki.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, Ki.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(" "), Ki;
    }), ci(oi, "Core/Renderer/SVG/Symbols.js", [oi["Core/Utilities.js"]], function(Si) {
      function ji(Wi, Ki, Ui, ki, bi) {
        const Ri = [];
        if (bi) {
          const Ni = bi.start || 0, fi = ss(bi.r, Ui);
          Ui = ss(bi.r, ki || Ui), ki = (bi.end || 0) - 1e-3;
          const Ci = bi.innerR, wi = ss(bi.open, 1e-3 > Math.abs((bi.end || 0) - Ni - 2 * Math.PI)), yi = Math.cos(Ni), Ti = Math.sin(Ni), Mi = Math.cos(ki), Oi = Math.sin(ki), ai = ss(bi.longArc, 1e-3 > ki - Ni - Math.PI ? 0 : 1);
          let li = ["A", fi, Ui, 0, ai, ss(bi.clockwise, 1), Wi + fi * Mi, Ki + Ui * Oi];
          li.params = { start: Ni, end: ki, cx: Wi, cy: Ki }, Ri.push(["M", Wi + fi * yi, Ki + Ui * Ti], li), Qi(Ci) && (li = ["A", Ci, Ci, 0, ai, Qi(bi.clockwise) ? 1 - bi.clockwise : 0, Wi + Ci * yi, Ki + Ci * Ti], li.params = { start: ki, end: Ni, cx: Wi, cy: Ki }, Ri.push(wi ? ["M", Wi + Ci * Mi, Ki + Ci * Oi] : ["L", Wi + Ci * Mi, Ki + Ci * Oi], li)), wi || Ri.push(["Z"]);
        }
        return Ri;
      }
      function qi(Wi, Ki, Ui, ki, bi) {
        return bi && bi.r ? ts(Wi, Ki, Ui, ki, bi) : [["M", Wi, Ki], ["L", Wi + Ui, Ki], ["L", Wi + Ui, Ki + ki], ["L", Wi, Ki + ki], ["Z"]];
      }
      function ts(Wi, Ki, Ui, ki, bi) {
        return bi = (bi == null ? void 0 : bi.r) || 0, [["M", Wi + bi, Ki], ["L", Wi + Ui - bi, Ki], ["A", bi, bi, 0, 0, 1, Wi + Ui, Ki + bi], ["L", Wi + Ui, Ki + ki - bi], ["A", bi, bi, 0, 0, 1, Wi + Ui - bi, Ki + ki], ["L", Wi + bi, Ki + ki], ["A", bi, bi, 0, 0, 1, Wi, Ki + ki - bi], ["L", Wi, Ki + bi], ["A", bi, bi, 0, 0, 1, Wi + bi, Ki], ["Z"]];
      }
      const { defined: Qi, isNumber: is, pick: ss } = Si;
      return { arc: ji, callout: function(Wi, Ki, Ui, ki, bi) {
        const Ri = Math.min(bi && bi.r || 0, Ui, ki), Ni = Ri + 6, fi = bi && bi.anchorX;
        bi = bi && bi.anchorY || 0;
        const Ci = ts(Wi, Ki, Ui, ki, { r: Ri });
        return is(fi) && (Wi + fi >= Ui ? bi > Ki + Ni && bi < Ki + ki - Ni ? Ci.splice(3, 1, ["L", Wi + Ui, bi - 6], ["L", Wi + Ui + 6, bi], ["L", Wi + Ui, bi + 6], ["L", Wi + Ui, Ki + ki - Ri]) : Ci.splice(3, 1, ["L", Wi + Ui, ki / 2], ["L", fi, bi], ["L", Wi + Ui, ki / 2], ["L", Wi + Ui, Ki + ki - Ri]) : 0 >= Wi + fi ? bi > Ki + Ni && bi < Ki + ki - Ni ? Ci.splice(7, 1, ["L", Wi, bi + 6], ["L", Wi - 6, bi], ["L", Wi, bi - 6], ["L", Wi, Ki + Ri]) : Ci.splice(7, 1, ["L", Wi, ki / 2], ["L", fi, bi], ["L", Wi, ki / 2], ["L", Wi, Ki + Ri]) : bi && bi > ki && fi > Wi + Ni && fi < Wi + Ui - Ni ? Ci.splice(5, 1, [
          "L",
          fi + 6,
          Ki + ki
        ], ["L", fi, Ki + ki + 6], ["L", fi - 6, Ki + ki], ["L", Wi + Ri, Ki + ki]) : bi && 0 > bi && fi > Wi + Ni && fi < Wi + Ui - Ni && Ci.splice(1, 1, ["L", fi - 6, Ki], ["L", fi, Ki - 6], ["L", fi + 6, Ki], ["L", Ui - Ri, Ki])), Ci;
      }, circle: function(Wi, Ki, Ui, ki) {
        return ji(Wi + Ui / 2, Ki + ki / 2, Ui / 2, ki / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(Wi, Ki, Ui, ki) {
        return [["M", Wi + Ui / 2, Ki], ["L", Wi + Ui, Ki + ki / 2], ["L", Wi + Ui / 2, Ki + ki], ["L", Wi, Ki + ki / 2], ["Z"]];
      }, rect: qi, roundedRect: ts, square: qi, triangle: function(Wi, Ki, Ui, ki) {
        return [["M", Wi + Ui / 2, Ki], ["L", Wi + Ui, Ki + ki], ["L", Wi, Ki + ki], ["Z"]];
      }, "triangle-down": function(Wi, Ki, Ui, ki) {
        return [[
          "M",
          Wi,
          Ki
        ], ["L", Wi + Ui, Ki], ["L", Wi + Ui / 2, Ki + ki], ["Z"]];
      } };
    }), ci(oi, "Core/Renderer/SVG/TextBuilder.js", [oi["Core/Renderer/HTML/AST.js"], oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { doc: ts, SVG_NS: Qi, win: is } = ji, { attr: ss, extend: Wi, fireEvent: Ki, isString: Ui, objectEach: ki, pick: bi } = qi;
      class Ri {
        constructor(fi) {
          const Ci = fi.styles;
          this.renderer = fi.renderer, this.svgElement = fi, this.width = fi.textWidth, this.textLineHeight = Ci && Ci.lineHeight, this.textOutline = Ci && Ci.textOutline, this.ellipsis = !(!Ci || Ci.textOverflow !== "ellipsis"), this.noWrap = !(!Ci || Ci.whiteSpace !== "nowrap");
        }
        buildSVG() {
          const fi = this.svgElement, Ci = fi.element;
          var wi = fi.renderer, yi = bi(fi.textStr, "").toString();
          const Ti = yi.indexOf("<") !== -1, Mi = Ci.childNodes;
          wi = !fi.added && wi.box;
          const Oi = /<br.*?>/g;
          var ai = [yi, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, fi.getStyle("font-size"), this.width].join();
          if (ai !== fi.textCache) {
            for (fi.textCache = ai, delete fi.actualWidth, ai = Mi.length; ai--; )
              Ci.removeChild(Mi[ai]);
            Ti || this.ellipsis || this.width || fi.textPath || yi.indexOf(" ") !== -1 && (!this.noWrap || Oi.test(yi)) ? yi !== "" && (wi && wi.appendChild(Ci), yi = new Si(yi), this.modifyTree(yi.nodes), yi.addToDOM(Ci), this.modifyDOM(), this.ellipsis && (Ci.textContent || "").indexOf("…") !== -1 && fi.attr("title", this.unescapeEntities(fi.textStr || "", ["&lt;", "&gt;"])), wi && wi.removeChild(Ci)) : Ci.appendChild(ts.createTextNode(this.unescapeEntities(yi))), Ui(this.textOutline) && fi.applyTextOutline && fi.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          const fi = this.svgElement, Ci = ss(fi.element, "x");
          fi.firstLineMetrics = void 0;
          let wi;
          for (; (wi = fi.element.firstChild) && /^[\s\u200B]*$/.test(wi.textContent || " "); )
            fi.element.removeChild(wi);
          [].forEach.call(fi.element.querySelectorAll("tspan.highcharts-br"), (Oi, ai) => {
            Oi.nextSibling && Oi.previousSibling && (ai === 0 && Oi.previousSibling.nodeType === 1 && (fi.firstLineMetrics = fi.renderer.fontMetrics(Oi.previousSibling)), ss(Oi, { dy: this.getLineHeight(Oi.nextSibling), x: Ci }));
          });
          const yi = this.width || 0;
          if (yi) {
            var Ti = (Oi, ai) => {
              var li = Oi.textContent || "";
              const xi = li.replace(/([^\^])-/g, "$1- ").split(" ");
              var di = !this.noWrap && (1 < xi.length || 1 < fi.element.childNodes.length);
              const pi = this.getLineHeight(ai);
              let ei = 0, Fe = fi.actualWidth;
              if (this.ellipsis)
                li && this.truncate(Oi, li, void 0, 0, Math.max(0, yi - 0.8 * pi), (ii, hi) => ii.substring(0, hi) + "…");
              else if (di) {
                for (li = [], di = []; ai.firstChild && ai.firstChild !== Oi; )
                  di.push(ai.firstChild), ai.removeChild(ai.firstChild);
                for (; xi.length; )
                  xi.length && !this.noWrap && 0 < ei && (li.push(Oi.textContent || ""), Oi.textContent = xi.join(" ").replace(/- /g, "-")), this.truncate(Oi, void 0, xi, ei === 0 && Fe || 0, yi, (ii, hi) => xi.slice(0, hi).join(" ").replace(/- /g, "-")), Fe = fi.actualWidth, ei++;
                di.forEach((ii) => {
                  ai.insertBefore(ii, Oi);
                }), li.forEach((ii) => {
                  ai.insertBefore(ts.createTextNode(ii), Oi), ii = ts.createElementNS(Qi, "tspan"), ii.textContent = "​", ss(ii, { dy: pi, x: Ci }), ai.insertBefore(ii, Oi);
                });
              }
            }, Mi = (Oi) => {
              [].slice.call(Oi.childNodes).forEach((ai) => {
                ai.nodeType === is.Node.TEXT_NODE ? Ti(ai, Oi) : (ai.className.baseVal.indexOf("highcharts-br") !== -1 && (fi.actualWidth = 0), Mi(ai));
              });
            };
            Mi(fi.element);
          }
        }
        getLineHeight(fi) {
          return fi = fi.nodeType === is.Node.TEXT_NODE ? fi.parentElement : fi, this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(fi || this.svgElement.element).h;
        }
        modifyTree(fi) {
          const Ci = (wi, yi) => {
            const { attributes: Ti = {}, children: Mi, style: Oi = {}, tagName: ai } = wi, li = this.renderer.styledMode;
            ai === "b" || ai === "strong" ? li ? Ti.class = "highcharts-strong" : Oi.fontWeight = "bold" : (ai === "i" || ai === "em") && (li ? Ti.class = "highcharts-emphasized" : Oi.fontStyle = "italic"), Oi && Oi.color && (Oi.fill = Oi.color), ai === "br" ? (Ti.class = "highcharts-br", wi.textContent = "​", (yi = fi[yi + 1]) && yi.textContent && (yi.textContent = yi.textContent.replace(/^ +/gm, ""))) : ai === "a" && Mi && Mi.some((xi) => xi.tagName === "#text") && (wi.children = [{ children: Mi, tagName: "tspan" }]), ai !== "#text" && ai !== "a" && (wi.tagName = "tspan"), Wi(wi, { attributes: Ti, style: Oi }), Mi && Mi.filter((xi) => xi.tagName !== "#text").forEach(Ci);
          };
          fi.forEach(Ci), Ki(this.svgElement, "afterModifyTree", { nodes: fi });
        }
        truncate(fi, Ci, wi, yi, Ti, Mi) {
          const Oi = this.svgElement, { rotation: ai } = Oi, li = [];
          let xi = wi ? 1 : 0, di = (Ci || wi || "").length, pi = di, ei, Fe;
          const ii = function(hi, gi) {
            if (hi = gi || hi, (gi = fi.parentNode) && typeof li[hi] > "u" && gi.getSubStringLength)
              try {
                li[hi] = yi + gi.getSubStringLength(0, wi ? hi + 1 : hi);
              } catch {
              }
            return li[hi];
          };
          if (Oi.rotation = 0, Fe = ii(fi.textContent.length), yi + Fe > Ti) {
            for (; xi <= di; )
              pi = Math.ceil((xi + di) / 2), wi && (ei = Mi(wi, pi)), Fe = ii(pi, ei && ei.length - 1), xi === di ? xi = di + 1 : Fe > Ti ? di = pi - 1 : xi = pi;
            di === 0 ? fi.textContent = "" : Ci && di === Ci.length - 1 || (fi.textContent = ei || Mi(Ci || wi, pi));
          }
          wi && wi.splice(0, pi), Oi.actualWidth = Fe, Oi.rotation = ai;
        }
        unescapeEntities(fi, Ci) {
          return ki(this.renderer.escapes, function(wi, yi) {
            Ci && Ci.indexOf(wi) !== -1 || (fi = fi.toString().replace(new RegExp(wi, "g"), yi));
          }), fi;
        }
      }
      return Ri;
    }), ci(oi, "Core/Renderer/SVG/SVGRenderer.js", [
      oi["Core/Renderer/HTML/AST.js"],
      oi["Core/Color/Color.js"],
      oi["Core/Globals.js"],
      oi["Core/Renderer/RendererRegistry.js"],
      oi["Core/Renderer/SVG/SVGElement.js"],
      oi["Core/Renderer/SVG/SVGLabel.js"],
      oi["Core/Renderer/SVG/Symbols.js"],
      oi["Core/Renderer/SVG/TextBuilder.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi, is, ss, Wi, Ki) {
      const { charts: Ui, deg2rad: ki, doc: bi, isFirefox: Ri, isMS: Ni, isWebKit: fi, noop: Ci, SVG_NS: wi, symbolSizes: yi, win: Ti } = qi, { addEvent: Mi, attr: Oi, createElement: ai, css: li, defined: xi, destroyObjectProperties: di, extend: pi, isArray: ei, isNumber: Fe, isObject: ii, isString: hi, merge: gi, pick: Ei, pInt: ni, uniqueKey: Pi } = Ki;
      let Fi;
      class Zi {
        constructor(Bi, si, Li, Hi, Di, Vi, ri) {
          this.width = this.url = this.style = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0, this.init(Bi, si, Li, Hi, Di, Vi, ri);
        }
        init(Bi, si, Li, Hi, Di, Vi, ri) {
          const mi = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), vi = mi.element;
          ri || mi.css(this.getStyle(Hi)), Bi.appendChild(vi), Oi(Bi, "dir", "ltr"), Bi.innerHTML.indexOf("xmlns") === -1 && Oi(vi, "xmlns", this.SVG_NS), this.box = vi, this.boxWrapper = mi, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(bi.createTextNode("Created with Highcharts 11.1.0")), this.defs = this.createElement("defs").add(), this.allowHTML = Vi, this.forExport = Di, this.styledMode = ri, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = mi.getStyle("font-size"), this.setSize(si, Li, !1);
          let zi;
          Ri && Bi.getBoundingClientRect && (si = function() {
            li(Bi, { left: 0, top: 0 }), zi = Bi.getBoundingClientRect(), li(Bi, { left: Math.ceil(zi.left) - zi.left + "px", top: Math.ceil(zi.top) - zi.top + "px" });
          }, si(), this.unSubPixelFix = Mi(Ti, "resize", si));
        }
        definition(Bi) {
          return new Si([Bi]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((Ri || fi) && bi.getElementsByTagName("base").length) {
            if (!xi(Fi)) {
              var Bi = Pi();
              Bi = new Si([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: Bi }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${Bi})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(bi.body), li(Bi, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              const si = bi.elementFromPoint(6, 6);
              Fi = (si && si.id) === "hitme", bi.body.removeChild(Bi);
            }
            if (Fi)
              return Ti.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
          }
          return "";
        }
        getStyle(Bi) {
          return this.style = pi({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, Bi);
        }
        setStyle(Bi) {
          this.boxWrapper.css(this.getStyle(Bi));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          const Bi = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), di(this.gradients || {}), this.gradients = null, this.defs = Bi.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null;
        }
        createElement(Bi) {
          const si = new this.Element();
          return si.init(this, Bi), si;
        }
        getRadialAttr(Bi, si) {
          return { cx: Bi[0] - Bi[2] / 2 + (si.cx || 0) * Bi[2], cy: Bi[1] - Bi[2] / 2 + (si.cy || 0) * Bi[2], r: (si.r || 0) * Bi[2] };
        }
        shadowDefinition(Bi) {
          const si = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(Bi).map((Hi) => Bi[Hi])].join("-").replace(/[^a-z0-9\-]/g, ""), Li = gi({
            color: "#000000",
            offsetX: 1,
            offsetY: 1,
            opacity: 0.15,
            width: 5
          }, Bi);
          return this.defs.element.querySelector(`#${si}`) || this.definition({ tagName: "filter", attributes: { id: si }, children: [{ tagName: "feDropShadow", attributes: { dx: Li.offsetX, dy: Li.offsetY, "flood-color": Li.color, "flood-opacity": Math.min(5 * Li.opacity, 1), stdDeviation: Li.width / 2 } }] }), si;
        }
        buildText(Bi) {
          new Wi(Bi).buildSVG();
        }
        getContrast(Bi) {
          return Bi = ji.parse(Bi).rgba.map((si) => (si /= 255, 0.03928 >= si ? si / 12.92 : Math.pow((si + 0.055) / 1.055, 2.4))), Bi = 0.2126 * Bi[0] + 0.7152 * Bi[1] + 0.0722 * Bi[2], 1.05 / (Bi + 0.05) > (Bi + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        }
        button(Bi, si, Li, Hi, Di = {}, Vi, ri, mi, vi, zi) {
          const Xi = this.label(Bi, si, Li, vi, void 0, void 0, zi, void 0, "button"), Gi = this.styledMode;
          Bi = Di.states || {};
          let Ji = 0;
          Di = gi(Di), delete Di.states;
          const es = gi({ color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, Di.style);
          delete Di.style;
          let os = Si.filterUserAttributes(Di);
          Xi.attr(gi({ padding: 8, r: 2 }, os));
          let ns, ls, Ii;
          return Gi || (os = gi({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, os), Vi = gi(os, { fill: "#e6e6e6" }, Si.filterUserAttributes(Vi || Bi.hover || {})), ns = Vi.style, delete Vi.style, ri = gi(os, { fill: "#e6e9ff", style: {
            color: "#000000",
            fontWeight: "bold"
          } }, Si.filterUserAttributes(ri || Bi.select || {})), ls = ri.style, delete ri.style, mi = gi(os, { style: { color: "#cccccc" } }, Si.filterUserAttributes(mi || Bi.disabled || {})), Ii = mi.style, delete mi.style), Mi(Xi.element, Ni ? "mouseover" : "mouseenter", function() {
            Ji !== 3 && Xi.setState(1);
          }), Mi(Xi.element, Ni ? "mouseout" : "mouseleave", function() {
            Ji !== 3 && Xi.setState(Ji);
          }), Xi.setState = function(Ai) {
            Ai !== 1 && (Xi.state = Ji = Ai), Xi.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
              "normal",
              "hover",
              "pressed",
              "disabled"
            ][Ai || 0]), Gi || (Xi.attr([os, Vi, ri, mi][Ai || 0]), Ai = [es, ns, ls, Ii][Ai || 0], ii(Ai) && Xi.css(Ai));
          }, Gi || (Xi.attr(os).css(pi({ cursor: "default" }, es)), zi && Xi.text.css({ pointerEvents: "none" })), Xi.on("touchstart", (Ai) => Ai.stopPropagation()).on("click", function(Ai) {
            Ji !== 3 && Hi.call(Xi, Ai);
          });
        }
        crispLine(Bi, si, Li = "round") {
          const Hi = Bi[0], Di = Bi[1];
          return xi(Hi[1]) && Hi[1] === Di[1] && (Hi[1] = Di[1] = Math[Li](Hi[1]) - si % 2 / 2), xi(Hi[2]) && Hi[2] === Di[2] && (Hi[2] = Di[2] = Math[Li](Hi[2]) + si % 2 / 2), Bi;
        }
        path(Bi) {
          const si = this.styledMode ? {} : { fill: "none" };
          return ei(Bi) ? si.d = Bi : ii(Bi) && pi(si, Bi), this.createElement("path").attr(si);
        }
        circle(Bi, si, Li) {
          return Bi = ii(Bi) ? Bi : typeof Bi > "u" ? {} : { x: Bi, y: si, r: Li }, si = this.createElement("circle"), si.xSetter = si.ySetter = function(Hi, Di, Vi) {
            Vi.setAttribute("c" + Di, Hi);
          }, si.attr(Bi);
        }
        arc(Bi, si, Li, Hi, Di, Vi) {
          return ii(Bi) ? (Hi = Bi, si = Hi.y, Li = Hi.r, Bi = Hi.x) : Hi = { innerR: Hi, start: Di, end: Vi }, Bi = this.symbol("arc", Bi, si, Li, Li, Hi), Bi.r = Li, Bi;
        }
        rect(Bi, si, Li, Hi, Di, Vi) {
          Bi = ii(Bi) ? Bi : typeof Bi > "u" ? {} : { x: Bi, y: si, r: Di, width: Math.max(Li || 0, 0), height: Math.max(Hi || 0, 0) };
          const ri = this.createElement("rect");
          return this.styledMode || (typeof Vi < "u" && (Bi["stroke-width"] = Vi, pi(Bi, ri.crisp(Bi))), Bi.fill = "none"), ri.rSetter = function(mi, vi, zi) {
            ri.r = mi, Oi(zi, { rx: mi, ry: mi });
          }, ri.rGetter = function() {
            return ri.r || 0;
          }, ri.attr(Bi);
        }
        roundedRect(Bi) {
          return this.symbol("roundedRect").attr(Bi);
        }
        setSize(Bi, si, Li) {
          this.width = Bi, this.height = si, this.boxWrapper.animate({ width: Bi, height: si }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: Ei(Li, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(Bi) {
          const si = this.createElement("g");
          return Bi ? si.attr({ class: "highcharts-" + Bi }) : si;
        }
        image(Bi, si, Li, Hi, Di, Vi) {
          const ri = { preserveAspectRatio: "none" };
          Fe(si) && (ri.x = si), Fe(Li) && (ri.y = Li), Fe(Hi) && (ri.width = Hi), Fe(Di) && (ri.height = Di);
          const mi = this.createElement("image").attr(ri);
          return si = function(vi) {
            mi.attr({ href: Bi }), Vi.call(mi, vi);
          }, Vi ? (mi.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }), Li = new Ti.Image(), Mi(Li, "load", si), Li.src = Bi, Li.complete && si({})) : mi.attr({ href: Bi }), mi;
        }
        symbol(Bi, si, Li, Hi, Di, Vi) {
          const ri = this, mi = /^url\((.*?)\)$/, vi = mi.test(Bi), zi = !vi && (this.symbols[Bi] ? Bi : "circle"), Xi = zi && this.symbols[zi];
          let Gi, Ji, es, os;
          if (Xi)
            typeof si == "number" && (Ji = Xi.call(this.symbols, Math.round(si || 0), Math.round(Li || 0), Hi || 0, Di || 0, Vi)), Gi = this.path(Ji), ri.styledMode || Gi.attr("fill", "none"), pi(Gi, { symbolName: zi || void 0, x: si, y: Li, width: Hi, height: Di }), Vi && pi(Gi, Vi);
          else if (vi) {
            es = Bi.match(mi)[1];
            const ns = Gi = this.image(es);
            ns.imgwidth = Ei(Vi && Vi.width, yi[es] && yi[es].width), ns.imgheight = Ei(Vi && Vi.height, yi[es] && yi[es].height), os = (ls) => ls.attr({ width: ls.width, height: ls.height }), ["width", "height"].forEach(function(ls) {
              ns[ls + "Setter"] = function(Ii, Ai) {
                this[Ai] = Ii;
                const {
                  alignByTranslate: $i,
                  element: Yi,
                  width: _i,
                  height: hs,
                  imgwidth: as,
                  imgheight: us
                } = this;
                if (Ii = this["img" + Ai], xi(Ii)) {
                  let ps = 1;
                  Vi && Vi.backgroundSize === "within" && _i && hs ? (ps = Math.min(_i / as, hs / us), Oi(Yi, { width: Math.round(as * ps), height: Math.round(us * ps) })) : Yi && Yi.setAttribute(Ai, Ii), $i || this.translate(((_i || 0) - as * ps) / 2, ((hs || 0) - us * ps) / 2);
                }
              };
            }), xi(si) && ns.attr({ x: si, y: Li }), ns.isImg = !0, xi(ns.imgwidth) && xi(ns.imgheight) ? os(ns) : (ns.attr({ width: 0, height: 0 }), ai("img", { onload: function() {
              const ls = Ui[ri.chartIndex];
              this.width === 0 && (li(this, { position: "absolute", top: "-999em" }), bi.body.appendChild(this)), yi[es] = {
                width: this.width,
                height: this.height
              }, ns.imgwidth = this.width, ns.imgheight = this.height, ns.element && os(ns), this.parentNode && this.parentNode.removeChild(this), ri.imgCount--, !ri.imgCount && ls && !ls.hasLoaded && ls.onload();
            }, src: es }), this.imgCount++);
          }
          return Gi;
        }
        clipRect(Bi, si, Li, Hi) {
          const Di = Pi() + "-", Vi = this.createElement("clipPath").attr({ id: Di }).add(this.defs);
          return Bi = this.rect(Bi, si, Li, Hi, 0).add(Vi), Bi.id = Di, Bi.clipPath = Vi, Bi.count = 0, Bi;
        }
        text(Bi, si, Li, Hi) {
          const Di = {};
          return Hi && (this.allowHTML || !this.forExport) ? this.html(Bi, si, Li) : (Di.x = Math.round(si || 0), Li && (Di.y = Math.round(Li)), xi(Bi) && (Di.text = Bi), Bi = this.createElement("text").attr(Di), (!Hi || this.forExport && !this.allowHTML) && (Bi.xSetter = function(Vi, ri, mi) {
            const vi = mi.getElementsByTagName("tspan"), zi = mi.getAttribute(ri);
            for (let Xi = 0, Gi; Xi < vi.length; Xi++)
              Gi = vi[Xi], Gi.getAttribute(ri) === zi && Gi.setAttribute(ri, Vi);
            mi.setAttribute(ri, Vi);
          }), Bi);
        }
        fontMetrics(Bi) {
          Bi = ni(Qi.prototype.getStyle.call(Bi, "font-size") || 0);
          const si = 24 > Bi ? Bi + 3 : Math.round(1.2 * Bi);
          return { h: si, b: Math.round(0.8 * si), f: Bi };
        }
        rotCorr(Bi, si, Li) {
          let Hi = Bi;
          return si && Li && (Hi = Math.max(Hi * Math.cos(si * ki), 4)), { x: -Bi / 3 * Math.sin(si * ki), y: Hi };
        }
        pathToSegments(Bi) {
          const si = [], Li = [], Hi = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let Di = 0; Di < Bi.length; Di++)
            hi(Li[0]) && Fe(Bi[Di]) && Li.length === Hi[Li[0].toUpperCase()] && Bi.splice(Di, 0, Li[0].replace("M", "L").replace("m", "l")), typeof Bi[Di] == "string" && (Li.length && si.push(Li.slice(0)), Li.length = 0), Li.push(Bi[Di]);
          return si.push(Li.slice(0)), si;
        }
        label(Bi, si, Li, Hi, Di, Vi, ri, mi, vi) {
          return new is(this, Bi, si, Li, Hi, Di, Vi, ri, mi, vi);
        }
        alignElements() {
          this.alignedObjects.forEach((Bi) => Bi.align());
        }
      }
      return pi(Zi.prototype, {
        Element: Qi,
        SVG_NS: wi,
        escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
        symbols: ss,
        draw: Ci
      }), ts.registerRendererType("svg", Zi, !0), Zi;
    }), ci(oi, "Core/Renderer/HTML/HTMLElement.js", [oi["Core/Globals.js"], oi["Core/Renderer/SVG/SVGElement.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { isFirefox: ts, isMS: Qi, isWebKit: is, win: ss } = Si, { css: Wi, defined: Ki, extend: Ui, pick: ki, pInt: bi } = qi, Ri = [];
      class Ni extends ji {
        static compose(Ci) {
          if (qi.pushUnique(Ri, Ci)) {
            const wi = Ni.prototype, yi = Ci.prototype;
            yi.getSpanCorrection = wi.getSpanCorrection, yi.htmlCss = wi.htmlCss, yi.htmlGetBBox = wi.htmlGetBBox, yi.htmlUpdateTransform = wi.htmlUpdateTransform, yi.setSpanRotation = wi.setSpanRotation;
          }
          return Ci;
        }
        getSpanCorrection(Ci, wi, yi) {
          this.xCorr = -Ci * yi, this.yCorr = -wi;
        }
        htmlCss(Ci) {
          const wi = this.element.tagName === "SPAN" && Ci && "width" in Ci, yi = ki(wi && Ci.width, void 0);
          let Ti;
          return wi && (delete Ci.width, this.textWidth = yi, Ti = !0), Ci && Ci.textOverflow === "ellipsis" && (Ci.whiteSpace = "nowrap", Ci.overflow = "hidden"), this.styles = Ui(this.styles, Ci), Wi(this.element, Ci), Ti && this.htmlUpdateTransform(), this;
        }
        htmlGetBBox() {
          const Ci = this.element;
          return { x: Ci.offsetLeft, y: Ci.offsetTop, width: Ci.offsetWidth, height: Ci.offsetHeight };
        }
        htmlUpdateTransform() {
          if (this.added) {
            var Ci = this.renderer, wi = this.element, yi = this.x || 0, Ti = this.y || 0, Mi = this.textAlign || "left", Oi = { left: 0, center: 0.5, right: 1 }[Mi], ai = this.styles, li = ai && ai.whiteSpace;
            if (Wi(wi, { marginLeft: this.translateX || 0, marginTop: this.translateY || 0 }), wi.tagName === "SPAN") {
              ai = this.rotation;
              const di = this.textWidth && bi(this.textWidth), pi = [ai, Mi, wi.innerHTML, this.textWidth, this.textAlign].join();
              let ei = !1;
              if (di !== this.oldTextWidth) {
                if (this.textPxLength)
                  var xi = this.textPxLength;
                else
                  Wi(wi, { width: "", whiteSpace: li || "nowrap" }), xi = wi.offsetWidth;
                (di > this.oldTextWidth || xi > di) && (/[ \-]/.test(wi.textContent || wi.innerText) || wi.style.textOverflow === "ellipsis") && (Wi(wi, { width: xi > di || ai ? di + "px" : "auto", display: "block", whiteSpace: li || "normal" }), this.oldTextWidth = di, ei = !0);
              }
              this.hasBoxWidthChanged = ei, pi !== this.cTT && (Ci = Ci.fontMetrics(wi).b, !Ki(ai) || ai === (this.oldRotation || 0) && Mi === this.oldAlign || this.setSpanRotation(ai, Oi, Ci), this.getSpanCorrection(!Ki(ai) && this.textPxLength || wi.offsetWidth, Ci, Oi, ai, Mi)), Wi(wi, { left: yi + (this.xCorr || 0) + "px", top: Ti + (this.yCorr || 0) + "px" }), this.cTT = pi, this.oldRotation = ai, this.oldAlign = Mi;
            }
          } else
            this.alignOnAdd = !0;
        }
        setSpanRotation(Ci, wi, yi) {
          const Ti = {}, Mi = Qi && !/Edge/.test(ss.navigator.userAgent) ? "-ms-transform" : is ? "-webkit-transform" : ts ? "MozTransform" : ss.opera ? "-o-transform" : void 0;
          Mi && (Ti[Mi] = Ti.transform = "rotate(" + Ci + "deg)", Ti[Mi + (ts ? "Origin" : "-origin")] = Ti.transformOrigin = 100 * wi + "% " + yi + "px", Wi(this.element, Ti));
        }
      }
      return Ni;
    }), ci(oi, "Core/Renderer/HTML/HTMLRenderer.js", [
      oi["Core/Renderer/HTML/AST.js"],
      oi["Core/Renderer/SVG/SVGElement.js"],
      oi["Core/Renderer/SVG/SVGRenderer.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts) {
      const { attr: Qi, createElement: is, extend: ss, pick: Wi } = ts, Ki = [];
      class Ui extends qi {
        static compose(bi) {
          return ts.pushUnique(Ki, bi) && (bi.prototype.html = Ui.prototype.html), bi;
        }
        html(bi, Ri, Ni) {
          const fi = this.createElement("span"), Ci = fi.element, wi = fi.renderer, yi = function(Ti, Mi) {
            ["opacity", "visibility"].forEach(function(Oi) {
              Ti[Oi + "Setter"] = function(ai, li, xi) {
                const di = Ti.div ? Ti.div.style : Mi;
                ji.prototype[Oi + "Setter"].call(this, ai, li, xi), di && (di[li] = ai);
              };
            }), Ti.addedSetters = !0;
          };
          return fi.textSetter = function(Ti) {
            Ti !== this.textStr && (delete this.bBox, delete this.oldTextWidth, Si.setElementHTML(this.element, Wi(Ti, "")), this.textStr = Ti, fi.doTransform = !0);
          }, yi(fi, fi.element.style), fi.xSetter = fi.ySetter = fi.alignSetter = fi.rotationSetter = function(Ti, Mi) {
            Mi === "align" ? fi.alignValue = fi.textAlign = Ti : fi[Mi] = Ti, fi.doTransform = !0;
          }, fi.afterSetters = function() {
            this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
          }, fi.attr({ text: bi, x: Math.round(Ri), y: Math.round(Ni) }).css({ position: "absolute" }), wi.styledMode || fi.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }), Ci.style.whiteSpace = "nowrap", fi.css = fi.htmlCss, fi.add = function(Ti) {
            const Mi = wi.box.parentNode, Oi = [];
            let ai;
            if (this.parentGroup = Ti) {
              if (ai = Ti.div, !ai) {
                for (; Ti; )
                  Oi.push(Ti), Ti = Ti.parentGroup;
                Oi.reverse().forEach(function(li) {
                  function xi(Fe, ii) {
                    li[ii] = Fe, ii === "translateX" ? ei.left = Fe + "px" : ei.top = Fe + "px", li.doTransform = !0;
                  }
                  const di = Qi(li.element, "class"), pi = li.styles || {};
                  ai = li.div = li.div || is("div", di ? { className: di } : void 0, { position: "absolute", left: (li.translateX || 0) + "px", top: (li.translateY || 0) + "px", display: li.display, opacity: li.opacity, visibility: li.visibility }, ai || Mi);
                  const ei = ai.style;
                  ss(li, { classSetter: function(Fe) {
                    return function(ii) {
                      this.element.setAttribute("class", ii), Fe.className = ii;
                    };
                  }(ai), css: function(Fe) {
                    return fi.css.call(li, Fe), ["cursor", "pointerEvents"].forEach((ii) => {
                      Fe[ii] && (ei[ii] = Fe[ii]);
                    }), li;
                  }, on: function() {
                    return Oi[0].div && fi.on.apply({ element: Oi[0].div, onEvents: li.onEvents }, arguments), li;
                  }, translateXSetter: xi, translateYSetter: xi }), li.addedSetters || yi(li), li.css(pi);
                });
              }
            } else
              ai = Mi;
            return ai.appendChild(Ci), fi.added = !0, fi.alignOnAdd && fi.htmlUpdateTransform(), fi;
          }, fi;
        }
      }
      return Ui;
    }), ci(oi, "Core/Axis/AxisDefaults.js", [], function() {
      var Si;
      return function(ji) {
        ji.defaultXAxisOptions = {
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
        }, ji.defaultYAxisOptions = {
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
            const { numberFormatter: qi } = this.axis.chart;
            return qi(this.total || 0, -1);
          }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } },
          gridLineWidth: 1,
          lineWidth: 0
        }, ji.defaultLeftAxisOptions = { title: { rotation: 270 } }, ji.defaultRightAxisOptions = { title: { rotation: 90 } }, ji.defaultBottomAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } }, ji.defaultTopAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } };
      }(Si || (Si = {})), Si;
    }), ci(oi, "Core/Foundation.js", [oi["Core/Utilities.js"]], function(Si) {
      const { addEvent: ji, isFunction: qi, objectEach: ts, removeEvent: Qi } = Si;
      var is;
      return function(ss) {
        ss.registerEventOptions = function(Wi, Ki) {
          Wi.eventOptions = Wi.eventOptions || {}, ts(Ki.events, function(Ui, ki) {
            Wi.eventOptions[ki] !== Ui && (Wi.eventOptions[ki] && (Qi(Wi, ki, Wi.eventOptions[ki]), delete Wi.eventOptions[ki]), qi(Ui) && (Wi.eventOptions[ki] = Ui, ji(Wi, ki, Ui, { order: 0 })));
          });
        };
      }(is || (is = {})), is;
    }), ci(oi, "Core/Axis/Tick.js", [oi["Core/Templating.js"], oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { deg2rad: ts } = ji, { clamp: Qi, correctFloat: is, defined: ss, destroyObjectProperties: Wi, extend: Ki, fireEvent: Ui, isNumber: ki, merge: bi, objectEach: Ri, pick: Ni } = qi;
      class fi {
        constructor(wi, yi, Ti, Mi, Oi) {
          this.isNewLabel = this.isNew = !0, this.axis = wi, this.pos = yi, this.type = Ti || "", this.parameters = Oi || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, Ui(this, "init"), Ti || Mi || this.addLabel();
        }
        addLabel() {
          const wi = this, yi = wi.axis;
          var Ti = yi.options;
          const Mi = yi.chart;
          var Oi = yi.categories;
          const ai = yi.logarithmic, li = yi.names, xi = wi.pos, di = Ni(wi.options && wi.options.labels, Ti.labels);
          var pi = yi.tickPositions;
          const ei = xi === pi[0], Fe = xi === pi[pi.length - 1], ii = (!di.step || di.step === 1) && yi.tickInterval === 1;
          pi = pi.info;
          let hi = wi.label, gi, Ei, ni;
          Oi = this.parameters.category || (Oi ? Ni(Oi[xi], li[xi], xi) : xi), ai && ki(Oi) && (Oi = is(ai.lin2log(Oi))), yi.dateTime && (pi ? (Ei = Mi.time.resolveDTLFormat(Ti.dateTimeLabelFormats[!Ti.grid && pi.higherRanks[xi] || pi.unitName]), gi = Ei.main) : ki(Oi) && (gi = yi.dateTime.getXDateFormat(Oi, Ti.dateTimeLabelFormats || {}))), wi.isFirst = ei, wi.isLast = Fe;
          const Pi = { axis: yi, chart: Mi, dateTimeLabelFormat: gi, isFirst: ei, isLast: Fe, pos: xi, tick: wi, tickPositionInfo: pi, value: Oi };
          Ui(this, "labelFormat", Pi);
          const Fi = (rs) => di.formatter ? di.formatter.call(rs, rs) : di.format ? (rs.text = yi.defaultLabelFormatter.call(rs, rs), Si.format(di.format, rs, Mi)) : yi.defaultLabelFormatter.call(rs, rs);
          Ti = Fi.call(Pi, Pi);
          const Zi = Ei && Ei.list;
          wi.shortenLabel = Zi ? function() {
            for (ni = 0; ni < Zi.length; ni++)
              if (Ki(
                Pi,
                { dateTimeLabelFormat: Zi[ni] }
              ), hi.attr({ text: Fi.call(Pi, Pi) }), hi.getBBox().width < yi.getSlotWidth(wi) - 2 * di.padding)
                return;
            hi.attr({ text: "" });
          } : void 0, ii && yi._addedPlotLB && wi.moveLabel(Ti, di), ss(hi) || wi.movedLabel ? hi && hi.textStr !== Ti && !ii && (!hi.textWidth || di.style.width || hi.styles.width || hi.css({ width: null }), hi.attr({ text: Ti }), hi.textPxLength = hi.getBBox().width) : (wi.label = hi = wi.createLabel({ x: 0, y: 0 }, Ti, di), wi.rotation = 0);
        }
        createLabel(wi, yi, Ti) {
          const Mi = this.axis, Oi = Mi.chart;
          return (wi = ss(yi) && Ti.enabled ? Oi.renderer.text(yi, wi.x, wi.y, Ti.useHTML).add(Mi.labelGroup) : null) && (Oi.styledMode || wi.css(bi(Ti.style)), wi.textPxLength = wi.getBBox().width), wi;
        }
        destroy() {
          Wi(this, this.axis);
        }
        getPosition(wi, yi, Ti, Mi) {
          const Oi = this.axis, ai = Oi.chart, li = Mi && ai.oldChartHeight || ai.chartHeight;
          return wi = { x: wi ? is(Oi.translate(yi + Ti, void 0, void 0, Mi) + Oi.transB) : Oi.left + Oi.offset + (Oi.opposite ? (Mi && ai.oldChartWidth || ai.chartWidth) - Oi.right - Oi.left : 0), y: wi ? li - Oi.bottom + Oi.offset - (Oi.opposite ? Oi.height : 0) : is(li - Oi.translate(yi + Ti, void 0, void 0, Mi) - Oi.transB) }, wi.y = Qi(wi.y, -1e5, 1e5), Ui(this, "afterGetPosition", { pos: wi }), wi;
        }
        getLabelPosition(wi, yi, Ti, Mi, Oi, ai, li, xi) {
          const di = this.axis, pi = di.transA, ei = di.isLinked && di.linkedParent ? di.linkedParent.reversed : di.reversed, Fe = di.staggerLines, ii = di.tickRotCorr || { x: 0, y: 0 }, hi = Mi || di.reserveSpaceDefault ? 0 : -di.labelOffset * (di.labelAlign === "center" ? 0.5 : 1), gi = Oi.distance, Ei = {};
          return Ti = di.side === 0 ? Ti.rotation ? -gi : -Ti.getBBox().height : di.side === 2 ? ii.y + gi : Math.cos(Ti.rotation * ts) * (ii.y - Ti.getBBox(!1, 0).height / 2), ss(Oi.y) && (Ti = di.side === 0 && di.horiz ? Oi.y + Ti : Oi.y), wi = wi + Ni(Oi.x, [0, 1, 0, -1][di.side] * gi) + hi + ii.x - (ai && Mi ? ai * pi * (ei ? -1 : 1) : 0), yi = yi + Ti - (ai && !Mi ? ai * pi * (ei ? 1 : -1) : 0), Fe && (Mi = li / (xi || 1) % Fe, di.opposite && (Mi = Fe - Mi - 1), yi += di.labelOffset / Fe * Mi), Ei.x = wi, Ei.y = Math.round(yi), Ui(this, "afterGetLabelPosition", { pos: Ei, tickmarkOffset: ai, index: li }), Ei;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(wi, yi, Ti, Mi, Oi, ai) {
          return ai.crispLine([["M", wi, yi], ["L", wi + (Oi ? 0 : -Ti), yi + (Oi ? Ti : 0)]], Mi);
        }
        handleOverflow(wi) {
          const yi = this.axis, Ti = yi.options.labels, Mi = wi.x;
          var Oi = yi.chart.chartWidth, ai = yi.chart.spacing;
          const li = Ni(yi.labelLeft, Math.min(yi.pos, ai[3]));
          ai = Ni(yi.labelRight, Math.max(yi.isRadial ? 0 : yi.pos + yi.len, Oi - ai[1]));
          const xi = this.label, di = this.rotation, pi = { left: 0, center: 0.5, right: 1 }[yi.labelAlign || xi.attr("align")], ei = xi.getBBox().width, Fe = yi.getSlotWidth(this), ii = {};
          let hi = Fe, gi = 1, Ei;
          di || Ti.overflow !== "justify" ? 0 > di && Mi - pi * ei < li ? Ei = Math.round(Mi / Math.cos(di * ts) - li) : 0 < di && Mi + pi * ei > ai && (Ei = Math.round((Oi - Mi) / Math.cos(di * ts))) : (Oi = Mi + (1 - pi) * ei, Mi - pi * ei < li ? hi = wi.x + hi * (1 - pi) - li : Oi > ai && (hi = ai - wi.x + hi * pi, gi = -1), hi = Math.min(Fe, hi), hi < Fe && yi.labelAlign === "center" && (wi.x += gi * (Fe - hi - pi * (Fe - Math.min(ei, hi)))), (ei > hi || yi.autoRotation && (xi.styles || {}).width) && (Ei = hi)), Ei && (this.shortenLabel ? this.shortenLabel() : (ii.width = Math.floor(Ei) + "px", (Ti.style || {}).textOverflow || (ii.textOverflow = "ellipsis"), xi.css(ii)));
        }
        moveLabel(wi, yi) {
          const Ti = this;
          var Mi = Ti.label;
          const Oi = Ti.axis;
          let ai = !1;
          Mi && Mi.textStr === wi ? (Ti.movedLabel = Mi, ai = !0, delete Ti.label) : Ri(Oi.ticks, function(li) {
            ai || li.isNew || li === Ti || !li.label || li.label.textStr !== wi || (Ti.movedLabel = li.label, ai = !0, li.labelPos = Ti.movedLabel.xy, delete li.label);
          }), ai || !Ti.labelPos && !Mi || (Mi = Ti.labelPos || Mi.xy, Ti.movedLabel = Ti.createLabel(Mi, wi, yi), Ti.movedLabel && Ti.movedLabel.attr({ opacity: 0 }));
        }
        render(wi, yi, Ti) {
          var Mi = this.axis, Oi = Mi.horiz, ai = this.pos, li = Ni(this.tickmarkOffset, Mi.tickmarkOffset);
          ai = this.getPosition(Oi, ai, li, yi), li = ai.x;
          const xi = ai.y;
          Mi = Oi && li === Mi.pos + Mi.len || !Oi && xi === Mi.pos ? -1 : 1, Oi = Ni(Ti, this.label && this.label.newOpacity, 1), Ti = Ni(Ti, 1), this.isActive = !0, this.renderGridLine(yi, Ti, Mi), this.renderMark(ai, Ti, Mi), this.renderLabel(ai, yi, Oi, wi), this.isNew = !1, Ui(this, "afterRender");
        }
        renderGridLine(wi, yi, Ti) {
          const Mi = this.axis, Oi = Mi.options, ai = {}, li = this.pos, xi = this.type, di = Ni(this.tickmarkOffset, Mi.tickmarkOffset), pi = Mi.chart.renderer;
          let ei = this.gridLine, Fe = Oi.gridLineWidth, ii = Oi.gridLineColor, hi = Oi.gridLineDashStyle;
          this.type === "minor" && (Fe = Oi.minorGridLineWidth, ii = Oi.minorGridLineColor, hi = Oi.minorGridLineDashStyle), ei || (Mi.chart.styledMode || (ai.stroke = ii, ai["stroke-width"] = Fe || 0, ai.dashstyle = hi), xi || (ai.zIndex = 1), wi && (yi = 0), this.gridLine = ei = pi.path().attr(ai).addClass("highcharts-" + (xi ? xi + "-" : "") + "grid-line").add(Mi.gridGroup)), ei && (Ti = Mi.getPlotLinePath({ value: li + di, lineWidth: ei.strokeWidth() * Ti, force: "pass", old: wi, acrossPanes: !1 })) && ei[wi || this.isNew ? "attr" : "animate"]({ d: Ti, opacity: yi });
        }
        renderMark(wi, yi, Ti) {
          const Mi = this.axis;
          var Oi = Mi.options;
          const ai = Mi.chart.renderer, li = this.type, xi = Mi.tickSize(li ? li + "Tick" : "tick"), di = wi.x;
          wi = wi.y;
          const pi = Ni(Oi[li !== "minor" ? "tickWidth" : "minorTickWidth"], !li && Mi.isXAxis ? 1 : 0);
          Oi = Oi[li !== "minor" ? "tickColor" : "minorTickColor"];
          let ei = this.mark;
          const Fe = !ei;
          xi && (Mi.opposite && (xi[0] = -xi[0]), ei || (this.mark = ei = ai.path().addClass("highcharts-" + (li ? li + "-" : "") + "tick").add(Mi.axisGroup), Mi.chart.styledMode || ei.attr({ stroke: Oi, "stroke-width": pi })), ei[Fe ? "attr" : "animate"]({ d: this.getMarkPath(di, wi, xi[0], ei.strokeWidth() * Ti, Mi.horiz, ai), opacity: yi }));
        }
        renderLabel(wi, yi, Ti, Mi) {
          var Oi = this.axis;
          const ai = Oi.horiz, li = Oi.options, xi = this.label, di = li.labels, pi = di.step;
          Oi = Ni(this.tickmarkOffset, Oi.tickmarkOffset);
          const ei = wi.x;
          wi = wi.y;
          let Fe = !0;
          xi && ki(ei) && (xi.xy = wi = this.getLabelPosition(ei, wi, xi, ai, di, Oi, Mi, pi), this.isFirst && !this.isLast && !li.showFirstLabel || this.isLast && !this.isFirst && !li.showLastLabel ? Fe = !1 : !ai || di.step || di.rotation || yi || Ti === 0 || this.handleOverflow(wi), pi && Mi % pi && (Fe = !1), Fe && ki(wi.y) ? (wi.opacity = Ti, xi[this.isNewLabel ? "attr" : "animate"](wi).show(!0), this.isNewLabel = !1) : (xi.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          const wi = this.label, yi = this.axis;
          wi && !this.isNew && (wi.animate({ opacity: 0 }, void 0, wi.destroy), delete this.label), yi.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }
      return fi;
    }), ci(oi, "Core/Axis/Axis.js", [oi["Core/Animation/AnimationUtilities.js"], oi["Core/Axis/AxisDefaults.js"], oi["Core/Color/Color.js"], oi["Core/Defaults.js"], oi["Core/Foundation.js"], oi["Core/Globals.js"], oi["Core/Axis/Tick.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts, Qi, is, ss, Wi) {
      const { animObject: Ki } = Si, { defaultOptions: Ui } = ts, { registerEventOptions: ki } = Qi, { deg2rad: bi } = is, { arrayMax: Ri, arrayMin: Ni, clamp: fi, correctFloat: Ci, defined: wi, destroyObjectProperties: yi, erase: Ti, error: Mi, extend: Oi, fireEvent: ai, getClosestDistance: li, insertItem: xi, isArray: di, isNumber: pi, isString: ei, merge: Fe, normalizeTickInterval: ii, objectEach: hi, pick: gi, relativeLength: Ei, removeEvent: ni, splat: Pi, syncTimeout: Fi } = Wi, Zi = (Bi, si) => ii(si, void 0, void 0, gi(Bi.options.allowDecimals, 0.5 > si || Bi.tickAmount !== void 0), !!Bi.tickAmount);
      class rs {
        constructor(si, Li, Hi) {
          this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.index = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0, this.init(si, Li, Hi);
        }
        init(si, Li, Hi = this.coll) {
          const Di = Hi === "xAxis";
          this.chart = si, this.horiz = this.isZAxis || (si.inverted ? !Di : Di), this.isXAxis = Di, this.coll = Hi, ai(this, "init", { userOptions: Li }), this.opposite = gi(Li.opposite, this.opposite), this.side = gi(Li.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(Li), Hi = this.options;
          const Vi = Hi.labels, ri = Hi.type;
          this.userOptions = Li, this.minPixelPadding = 0, this.reversed = gi(Hi.reversed, this.reversed), this.visible = Hi.visible, this.zoomEnabled = Hi.zoomEnabled, this.hasNames = ri === "category" || Hi.categories === !0, this.categories = Hi.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = wi(Hi.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = Hi.minRange || Hi.maxZoom, this.range = Hi.range, this.offset = Hi.offset || 0, this.min = this.max = null, Li = gi(Hi.crosshair, Pi(si.options.tooltip.crosshairs)[Di ? 0 : 1]), this.crosshair = Li === !0 ? {} : Li, si.axes.indexOf(this) === -1 && (Di ? si.axes.splice(si.xAxis.length, 0, this) : si.axes.push(this), xi(this, si[this.coll])), si.orderItems(this.coll), this.series = this.series || [], si.inverted && !this.isZAxis && Di && typeof this.reversed > "u" && (this.reversed = !0), this.labelRotation = pi(Vi.rotation) ? Vi.rotation : void 0, ki(this, Hi), ai(this, "afterInit");
        }
        setOptions(si) {
          this.options = Fe(ji.defaultXAxisOptions, this.coll === "yAxis" && ji.defaultYAxisOptions, [ji.defaultTopAxisOptions, ji.defaultRightAxisOptions, ji.defaultBottomAxisOptions, ji.defaultLeftAxisOptions][this.side], Fe(Ui[this.coll], si)), ai(this, "afterSetOptions", { userOptions: si });
        }
        defaultLabelFormatter(si) {
          var Li = this.axis;
          ({ numberFormatter: si } = this.chart);
          const Hi = pi(this.value) ? this.value : NaN, Di = Li.chart.time, Vi = this.dateTimeLabelFormat;
          var ri = Ui.lang;
          const mi = ri.numericSymbols;
          ri = ri.numericSymbolMagnitude || 1e3;
          const vi = Li.logarithmic ? Math.abs(Hi) : Li.tickInterval;
          let zi = mi && mi.length, Xi;
          if (Li.categories)
            Xi = `${this.value}`;
          else if (Vi)
            Xi = Di.dateFormat(Vi, Hi);
          else if (zi && 1e3 <= vi)
            for (; zi-- && typeof Xi > "u"; )
              Li = Math.pow(ri, zi + 1), vi >= Li && 10 * Hi % Li === 0 && mi[zi] !== null && Hi !== 0 && (Xi = si(Hi / Li, -1) + mi[zi]);
          return typeof Xi > "u" && (Xi = 1e4 <= Math.abs(Hi) ? si(Hi, -1) : si(Hi, -1, void 0, "")), Xi;
        }
        getSeriesExtremes() {
          const si = this, Li = si.chart;
          let Hi;
          ai(this, "getSeriesExtremes", null, function() {
            si.hasVisibleSeries = !1, si.dataMin = si.dataMax = si.threshold = null, si.softThreshold = !si.isXAxis, si.series.forEach(function(Di) {
              if (Di.visible || !Li.options.chart.ignoreHiddenSeries) {
                var Vi = Di.options;
                let ri = Vi.threshold, mi, vi;
                si.hasVisibleSeries = !0, si.positiveValuesOnly && 0 >= ri && (ri = null), si.isXAxis ? (Vi = Di.xData) && Vi.length && (Vi = si.logarithmic ? Vi.filter((zi) => 0 < zi) : Vi, Hi = Di.getXExtremes(Vi), mi = Hi.min, vi = Hi.max, pi(mi) || mi instanceof Date || (Vi = Vi.filter(pi), Hi = Di.getXExtremes(Vi), mi = Hi.min, vi = Hi.max), Vi.length && (si.dataMin = Math.min(gi(si.dataMin, mi), mi), si.dataMax = Math.max(gi(
                  si.dataMax,
                  vi
                ), vi))) : (Di = Di.applyExtremes(), pi(Di.dataMin) && (mi = Di.dataMin, si.dataMin = Math.min(gi(si.dataMin, mi), mi)), pi(Di.dataMax) && (vi = Di.dataMax, si.dataMax = Math.max(gi(si.dataMax, vi), vi)), wi(ri) && (si.threshold = ri), (!Vi.softThreshold || si.positiveValuesOnly) && (si.softThreshold = !1));
              }
            });
          }), ai(this, "afterGetSeriesExtremes");
        }
        translate(si, Li, Hi, Di, Vi, ri) {
          const mi = this.linkedParent || this, vi = Di && mi.old ? mi.old.min : mi.min;
          if (!pi(vi))
            return NaN;
          const zi = mi.minPixelPadding;
          Vi = (mi.isOrdinal || mi.brokenAxis && mi.brokenAxis.hasBreaks || mi.logarithmic && Vi) && mi.lin2val;
          let Xi = 1, Gi = 0;
          return Di = Di && mi.old ? mi.old.transA : mi.transA, Di || (Di = mi.transA), Hi && (Xi *= -1, Gi = mi.len), mi.reversed && (Xi *= -1, Gi -= Xi * (mi.sector || mi.len)), Li ? (ri = (si * Xi + Gi - zi) / Di + vi, Vi && (ri = mi.lin2val(ri))) : (Vi && (si = mi.val2lin(si)), si = Xi * (si - vi) * Di, ri = (mi.isRadial ? si : Ci(si)) + Gi + Xi * zi + (pi(ri) ? Di * ri : 0)), ri;
        }
        toPixels(si, Li) {
          return this.translate(si, !1, !this.horiz, void 0, !0) + (Li ? 0 : this.pos);
        }
        toValue(si, Li) {
          return this.translate(si - (Li ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(si) {
          function Li(Yi, _i, hs) {
            return os !== "pass" && (Yi < _i || Yi > hs) && (os ? Yi = fi(Yi, _i, hs) : $i = !0), Yi;
          }
          const Hi = this, Di = Hi.chart, Vi = Hi.left, ri = Hi.top, mi = si.old, vi = si.value, zi = si.lineWidth, Xi = mi && Di.oldChartHeight || Di.chartHeight, Gi = mi && Di.oldChartWidth || Di.chartWidth, Ji = Hi.transB;
          let es = si.translatedValue, os = si.force, ns, ls, Ii, Ai, $i;
          return si = { value: vi, lineWidth: zi, old: mi, force: os, acrossPanes: si.acrossPanes, translatedValue: es }, ai(this, "getPlotLinePath", si, function(Yi) {
            es = gi(es, Hi.translate(vi, void 0, void 0, mi)), es = fi(es, -1e5, 1e5), ns = Ii = Math.round(es + Ji), ls = Ai = Math.round(Xi - es - Ji), pi(es) ? Hi.horiz ? (ls = ri, Ai = Xi - Hi.bottom, ns = Ii = Li(ns, Vi, Vi + Hi.width)) : (ns = Vi, Ii = Gi - Hi.right, ls = Ai = Li(ls, ri, ri + Hi.height)) : ($i = !0, os = !1), Yi.path = $i && !os ? null : Di.renderer.crispLine([["M", ns, ls], ["L", Ii, Ai]], zi || 1);
          }), si.path;
        }
        getLinearTickPositions(si, Li, Hi) {
          const Di = Ci(Math.floor(Li / si) * si);
          Hi = Ci(Math.ceil(Hi / si) * si);
          const Vi = [];
          let ri, mi;
          if (Ci(Di + si) === Di && (mi = 20), this.single)
            return [Li];
          for (Li = Di; Li <= Hi && (Vi.push(Li), Li = Ci(Li + si, mi), Li !== ri); )
            ri = Li;
          return Vi;
        }
        getMinorTickInterval() {
          const si = this.options;
          return si.minorTicks === !0 ? gi(si.minorTickInterval, "auto") : si.minorTicks === !1 ? null : si.minorTickInterval;
        }
        getMinorTickPositions() {
          var si = this.options;
          const Li = this.tickPositions, Hi = this.minorTickInterval;
          var Di = this.pointRangePadding || 0;
          const Vi = this.min - Di;
          Di = this.max + Di;
          const ri = Di - Vi;
          let mi = [];
          if (ri && ri / Hi < this.len / 3) {
            const vi = this.logarithmic;
            if (vi)
              this.paddedTicks.forEach(function(zi, Xi, Gi) {
                Xi && mi.push.apply(mi, vi.getLogTickPositions(Hi, Gi[Xi - 1], Gi[Xi], !0));
              });
            else if (this.dateTime && this.getMinorTickInterval() === "auto")
              mi = mi.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(Hi), Vi, Di, si.startOfWeek));
            else
              for (si = Vi + (Li[0] - Vi) % Hi; si <= Di && si !== mi[0]; si += Hi)
                mi.push(si);
          }
          return mi.length !== 0 && this.trimTicks(mi), mi;
        }
        adjustForMinRange() {
          const si = this.options, Li = this.logarithmic;
          let Hi = this.min;
          var Di = this.max;
          let Vi, ri;
          if (this.isXAxis && typeof this.minRange > "u" && !Li)
            if (wi(si.min) || wi(si.max) || wi(si.floor) || wi(si.ceiling))
              this.minRange = null;
            else {
              var mi = li(this.series.map((vi) => {
                var zi;
                return (vi.xIncrement ? (zi = vi.xData) === null || zi === void 0 ? void 0 : zi.slice(0, 2) : vi.xData) || [];
              })) || 0;
              this.minRange = Math.min(5 * mi, this.dataMax - this.dataMin);
            }
          Di - Hi < this.minRange && (mi = this.dataMax - this.dataMin >= this.minRange, ri = this.minRange, Di = (ri - Di + Hi) / 2, Vi = [Hi - Di, gi(si.min, Hi - Di)], mi && (Vi[2] = Li ? Li.log2lin(this.dataMin) : this.dataMin), Hi = Ri(Vi), Di = [Hi + ri, gi(si.max, Hi + ri)], mi && (Di[2] = Li ? Li.log2lin(this.dataMax) : this.dataMax), Di = Ni(Di), Di - Hi < ri && (Vi[0] = Di - ri, Vi[1] = gi(si.min, Di - ri), Hi = Ri(Vi))), this.min = Hi, this.max = Di;
        }
        getClosest() {
          let si, Li;
          if (this.categories)
            Li = 1;
          else {
            const Hi = [];
            this.series.forEach(function(Di) {
              var Vi;
              const ri = Di.closestPointRange, mi = Di.visible || !Di.chart.options.chart.ignoreHiddenSeries;
              ((Vi = Di.xData) === null || Vi === void 0 ? void 0 : Vi.length) === 1 ? Hi.push(Di.xData[0]) : !Di.noSharedTooltip && wi(ri) && mi && (Li = wi(Li) ? Math.min(Li, ri) : ri);
            }), Hi.length && (Hi.sort((Di, Vi) => Di - Vi), si = li([Hi]));
          }
          return si && Li ? Math.min(si, Li) : si || Li;
        }
        nameToX(si) {
          const Li = di(this.options.categories), Hi = Li ? this.categories : this.names;
          let Di = si.options.x, Vi;
          return si.series.requireSorting = !1, wi(Di) || (Di = this.options.uniqueNames && Hi ? Li ? Hi.indexOf(si.name) : gi(Hi.keys[si.name], -1) : si.series.autoIncrement()), Di === -1 ? !Li && Hi && (Vi = Hi.length) : Vi = Di, typeof Vi < "u" ? (this.names[Vi] = si.name, this.names.keys[si.name] = Vi) : si.x && (Vi = si.x), Vi;
        }
        updateNames() {
          const si = this, Li = this.names;
          0 < Li.length && (Object.keys(Li.keys).forEach(function(Hi) {
            delete Li.keys[Hi];
          }), Li.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(Hi) {
            Hi.xIncrement = null, (!Hi.points || Hi.isDirtyData) && (si.max = Math.max(si.max, Hi.xData.length - 1), Hi.processData(), Hi.generatePoints()), Hi.data.forEach(function(Di, Vi) {
              let ri;
              Di && Di.options && typeof Di.name < "u" && (ri = si.nameToX(Di), typeof ri < "u" && ri !== Di.x && (Di.x = ri, Hi.xData[Vi] = ri));
            });
          }));
        }
        setAxisTranslation() {
          const si = this, Li = si.max - si.min;
          var Hi = si.linkedParent;
          const Di = !!si.categories, Vi = si.isXAxis;
          let ri = si.axisPointRange || 0, mi, vi = 0, zi = 0, Xi = si.transA;
          (Vi || Di || ri) && (mi = si.getClosest(), Hi ? (vi = Hi.minPointOffset, zi = Hi.pointRangePadding) : si.series.forEach(function(Gi) {
            const Ji = Di ? 1 : Vi ? gi(Gi.options.pointRange, mi, 0) : si.axisPointRange || 0, es = Gi.options.pointPlacement;
            ri = Math.max(ri, Ji), (!si.single || Di) && (Gi = Gi.is("xrange") ? !Vi : Vi, vi = Math.max(vi, Gi && ei(es) ? 0 : Ji / 2), zi = Math.max(zi, Gi && es === "on" ? 0 : Ji));
          }), Hi = si.ordinal && si.ordinal.slope && mi ? si.ordinal.slope / mi : 1, si.minPointOffset = vi *= Hi, si.pointRangePadding = zi *= Hi, si.pointRange = Math.min(ri, si.single && Di ? 1 : Li), Vi && mi && (si.closestPointRange = mi)), si.translationSlope = si.transA = Xi = si.staticScale || si.len / (Li + zi || 1), si.transB = si.horiz ? si.left : si.bottom, si.minPixelPadding = Xi * vi, ai(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          return this.max - this.range;
        }
        setTickInterval(si) {
          var Li = this.chart;
          const Hi = this.logarithmic, Di = this.options, Vi = this.isXAxis, ri = this.isLinked, mi = Di.tickPixelInterval, vi = this.categories, zi = this.softThreshold;
          let Xi = Di.maxPadding, Gi = Di.minPadding, Ji = pi(Di.tickInterval) && 0 <= Di.tickInterval ? Di.tickInterval : void 0, es = pi(this.threshold) ? this.threshold : null, os, ns, ls;
          if (this.dateTime || vi || ri || this.getTickAmount(), ns = gi(this.userMin, Di.min), ls = gi(this.userMax, Di.max), ri) {
            this.linkedParent = Li[this.coll][Di.linkedTo];
            var Ii = this.linkedParent.getExtremes();
            this.min = gi(Ii.min, Ii.dataMin), this.max = gi(Ii.max, Ii.dataMax), Di.type !== this.linkedParent.options.type && Mi(11, 1, Li);
          } else
            zi && wi(es) && (this.dataMin >= es ? (Ii = es, Gi = 0) : this.dataMax <= es && (os = es, Xi = 0)), this.min = gi(ns, Ii, this.dataMin), this.max = gi(ls, os, this.dataMax);
          if (Hi && (this.positiveValuesOnly && !si && 0 >= Math.min(this.min, gi(
            this.dataMin,
            this.min
          )) && Mi(10, 1, Li), this.min = Ci(Hi.log2lin(this.min), 16), this.max = Ci(Hi.log2lin(this.max), 16)), this.range && wi(this.max) && (this.userMin = this.min = ns = Math.max(this.dataMin, this.minFromRange()), this.userMax = ls = this.max, this.range = null), ai(this, "foundExtremes"), this.beforePadding && this.beforePadding(), this.adjustForMinRange(), !pi(this.userMin) && pi(Di.softMin) && Di.softMin < this.min && (this.min = ns = Di.softMin), !pi(this.userMax) && pi(Di.softMax) && Di.softMax > this.max && (this.max = ls = Di.softMax), !(vi || this.axisPointRange || this.stacking && this.stacking.usePercentage || ri) && wi(this.min) && wi(this.max) && (Li = this.max - this.min) && (!wi(ns) && Gi && (this.min -= Li * Gi), !wi(ls) && Xi && (this.max += Li * Xi)), !pi(this.userMin) && pi(Di.floor) && (this.min = Math.max(this.min, Di.floor)), !pi(this.userMax) && pi(Di.ceiling) && (this.max = Math.min(this.max, Di.ceiling)), zi && wi(this.dataMin) && (es = es || 0, !wi(ns) && this.min < es && this.dataMin >= es ? this.min = this.options.minRange ? Math.min(es, this.max - this.minRange) : es : !wi(ls) && this.max > es && this.dataMax <= es && (this.max = this.options.minRange ? Math.max(es, this.min + this.minRange) : es)), pi(this.min) && pi(this.max) && !this.chart.polar && this.min > this.max && (wi(this.options.min) ? this.max = this.min : wi(this.options.max) && (this.min = this.max)), this.tickInterval = this.min === this.max || typeof this.min > "u" || typeof this.max > "u" ? 1 : ri && this.linkedParent && !Ji && mi === this.linkedParent.options.tickPixelInterval ? Ji = this.linkedParent.tickInterval : gi(Ji, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, vi ? 1 : (this.max - this.min) * mi / Math.max(this.len, mi)), Vi && !si) {
            const Ai = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
            this.series.forEach(function($i) {
              $i.forceCrop = $i.forceCropping && $i.forceCropping(), $i.processData(Ai);
            }), ai(this, "postProcessData", { hasExtremesChanged: Ai });
          }
          this.setAxisTranslation(), ai(this, "initialAxisTranslation"), this.pointRange && !Ji && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)), si = gi(Di.minTickInterval, this.dateTime && !this.series.some((Ai) => Ai.noSharedTooltip) ? this.closestPointRange : 0), !Ji && this.tickInterval < si && (this.tickInterval = si), this.dateTime || this.logarithmic || Ji || (this.tickInterval = Zi(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          var si = this.options;
          const Li = si.tickPositions, Hi = si.tickPositioner;
          var Di = this.getMinorTickInterval(), Vi = this.hasVerticalPanning(), ri = this.coll === "colorAxis";
          const mi = (ri || !Vi) && si.startOnTick;
          Vi = (ri || !Vi) && si.endOnTick, ri = [];
          let vi;
          if (this.tickmarkOffset = this.categories && si.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.minorTickInterval = Di === "auto" && this.tickInterval ? this.tickInterval / si.minorTicksPerMajor : Di, this.single = this.min === this.max && wi(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || si.allowDecimals !== !1), Li)
            ri = Li.slice();
          else if (pi(this.min) && pi(this.max)) {
            if (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)))
              if (this.dateTime)
                ri = this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(this.tickInterval, si.units),
                  this.min,
                  this.max,
                  si.startOfWeek,
                  this.ordinal && this.ordinal.positions,
                  this.closestPointRange,
                  !0
                );
              else if (this.logarithmic)
                ri = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else
                for (Di = si = this.tickInterval; Di <= 2 * si && (ri = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && ri.length > this.tickAmount); )
                  this.tickInterval = Zi(this, Di *= 1.1);
            else
              ri = [this.min, this.max], Mi(19, !1, this.chart);
            ri.length > this.len && (ri = [ri[0], ri[ri.length - 1]], ri[0] === ri[1] && (ri.length = 1)), Hi && (this.tickPositions = ri, (vi = Hi.apply(this, [this.min, this.max])) && (ri = vi));
          }
          this.tickPositions = ri, this.paddedTicks = ri.slice(0), this.trimTicks(ri, mi, Vi), !this.isLinked && pi(this.min) && pi(this.max) && (this.single && 2 > ri.length && !this.categories && !this.series.some((zi) => zi.is("heatmap") && zi.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), Li || vi || this.adjustTickAmount()), ai(this, "afterSetTickPositions");
        }
        trimTicks(si, Li, Hi) {
          const Di = si[0], Vi = si[si.length - 1], ri = !this.isOrdinal && this.minPointOffset || 0;
          if (ai(this, "trimTicks"), !this.isLinked) {
            if (Li && Di !== -1 / 0)
              this.min = Di;
            else
              for (; this.min - ri > si[0]; )
                si.shift();
            if (Hi)
              this.max = Vi;
            else
              for (; this.max + ri < si[si.length - 1]; )
                si.pop();
            si.length === 0 && wi(Di) && !this.options.tickPositions && si.push((Vi + Di) / 2);
          }
        }
        alignToOthers() {
          const si = this, Li = [this], Hi = si.options, Di = this.coll === "yAxis" && this.chart.options.chart.alignThresholds, Vi = [];
          let ri;
          if (si.thresholdAlignment = void 0, (this.chart.options.chart.alignTicks !== !1 && Hi.alignTicks || Di) && Hi.startOnTick !== !1 && Hi.endOnTick !== !1 && !si.logarithmic) {
            const mi = (zi) => {
              const { horiz: Xi, options: Gi } = zi;
              return [Xi ? Gi.left : Gi.top, Gi.width, Gi.height, Gi.pane].join();
            }, vi = mi(this);
            this.chart[this.coll].forEach(function(zi) {
              const { series: Xi } = zi;
              Xi.length && Xi.some((Gi) => Gi.visible) && zi !== si && mi(zi) === vi && (ri = !0, Li.push(zi));
            });
          }
          if (ri && Di) {
            Li.forEach((vi) => {
              vi = vi.getThresholdAlignment(si), pi(vi) && Vi.push(vi);
            });
            const mi = 1 < Vi.length ? Vi.reduce((vi, zi) => vi + zi, 0) / Vi.length : void 0;
            Li.forEach((vi) => {
              vi.thresholdAlignment = mi;
            });
          }
          return ri;
        }
        getThresholdAlignment(si) {
          if ((!pi(this.dataMin) || this !== si && this.series.some((Li) => Li.isDirty || Li.isDirtyData)) && this.getSeriesExtremes(), pi(this.threshold))
            return si = fi((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (si = 1 - si), si;
        }
        getTickAmount() {
          const si = this.options, Li = si.tickPixelInterval;
          let Hi = si.tickAmount;
          !wi(si.tickInterval) && !Hi && this.len < Li && !this.isRadial && !this.logarithmic && si.startOnTick && si.endOnTick && (Hi = 2), !Hi && this.alignToOthers() && (Hi = Math.ceil(this.len / Li) + 1), 4 > Hi && (this.finalTickAmt = Hi, Hi = 5), this.tickAmount = Hi;
        }
        adjustTickAmount() {
          const si = this, { finalTickAmt: Li, max: Hi, min: Di, options: Vi, tickPositions: ri, tickAmount: mi, thresholdAlignment: vi } = si, zi = ri && ri.length;
          var Xi = gi(si.threshold, si.softThreshold ? 0 : null), Gi = si.tickInterval;
          let Ji;
          if (pi(vi) && (Ji = 0.5 > vi ? Math.ceil(vi * (mi - 1)) : Math.floor(vi * (mi - 1)), Vi.reversed && (Ji = mi - 1 - Ji)), si.hasData() && pi(Di) && pi(Hi)) {
            const es = () => {
              si.transA *= (zi - 1) / (mi - 1), si.min = Vi.startOnTick ? ri[0] : Math.min(Di, ri[0]), si.max = Vi.endOnTick ? ri[ri.length - 1] : Math.max(Hi, ri[ri.length - 1]);
            };
            if (pi(Ji) && pi(si.threshold)) {
              for (; ri[Ji] !== Xi || ri.length !== mi || ri[0] > Di || ri[ri.length - 1] < Hi; ) {
                for (ri.length = 0, ri.push(si.threshold); ri.length < mi; )
                  ri[Ji] === void 0 || ri[Ji] > si.threshold ? ri.unshift(Ci(ri[0] - Gi)) : ri.push(Ci(ri[ri.length - 1] + Gi));
                if (Gi > 8 * si.tickInterval)
                  break;
                Gi *= 2;
              }
              es();
            } else if (zi < mi) {
              for (; ri.length < mi; )
                ri.length % 2 || Di === Xi ? ri.push(Ci(ri[ri.length - 1] + Gi)) : ri.unshift(Ci(ri[0] - Gi));
              es();
            }
            if (wi(Li)) {
              for (Gi = Xi = ri.length; Gi--; )
                (Li === 3 && Gi % 2 === 1 || 2 >= Li && 0 < Gi && Gi < Xi - 1) && ri.splice(Gi, 1);
              si.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          let si = !1, Li = !1;
          this.series.forEach(function(Di) {
            si = si || Di.isDirtyData || Di.isDirty, Li = Li || Di.xAxis && Di.xAxis.isDirty || !1;
          }), this.setAxisSize();
          const Hi = this.len !== (this.old && this.old.len);
          Hi || si || Li || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && (this.stacking.resetStacks(), this.stacking.buildStacks()), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = Hi || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(), si && this.panningState && (this.panningState.isDirty = !0), ai(this, "afterSetScale");
        }
        setExtremes(si, Li, Hi, Di, Vi) {
          const ri = this, mi = ri.chart;
          Hi = gi(Hi, !0), ri.series.forEach(function(vi) {
            delete vi.kdTree;
          }), Vi = Oi(Vi, { min: si, max: Li }), ai(ri, "setExtremes", Vi, function() {
            ri.userMin = si, ri.userMax = Li, ri.eventArgs = Vi, Hi && mi.redraw(Di);
          });
        }
        zoom(si, Li) {
          const Hi = this, Di = this.dataMin, Vi = this.dataMax, ri = this.options, mi = Math.min(Di, gi(ri.min, Di)), vi = Math.max(Vi, gi(ri.max, Vi));
          return si = { newMin: si, newMax: Li }, ai(this, "zoom", si, function(zi) {
            let Xi = zi.newMin, Gi = zi.newMax;
            (Xi !== Hi.min || Gi !== Hi.max) && (Hi.allowZoomOutside || (wi(Di) && (Xi < mi && (Xi = mi), Xi > vi && (Xi = vi)), wi(Vi) && (Gi < mi && (Gi = mi), Gi > vi && (Gi = vi))), Hi.displayBtn = typeof Xi < "u" || typeof Gi < "u", Hi.setExtremes(Xi, Gi, !1, void 0, { trigger: "zoom" })), zi.zoomed = !0;
          }), si.zoomed;
        }
        setAxisSize() {
          const si = this.chart;
          var Li = this.options;
          const Hi = Li.offsets || [0, 0, 0, 0], Di = this.horiz, Vi = this.width = Math.round(Ei(gi(Li.width, si.plotWidth - Hi[3] + Hi[1]), si.plotWidth)), ri = this.height = Math.round(Ei(gi(Li.height, si.plotHeight - Hi[0] + Hi[2]), si.plotHeight)), mi = this.top = Math.round(Ei(gi(Li.top, si.plotTop + Hi[0]), si.plotHeight, si.plotTop));
          Li = this.left = Math.round(Ei(
            gi(Li.left, si.plotLeft + Hi[3]),
            si.plotWidth,
            si.plotLeft
          )), this.bottom = si.chartHeight - ri - mi, this.right = si.chartWidth - Vi - Li, this.len = Math.max(Di ? Vi : ri, 0), this.pos = Di ? Li : mi;
        }
        getExtremes() {
          const si = this.logarithmic;
          return { min: si ? Ci(si.lin2log(this.min)) : this.min, max: si ? Ci(si.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(si) {
          var Li = this.logarithmic;
          const Hi = Li ? Li.lin2log(this.min) : this.min;
          return Li = Li ? Li.lin2log(this.max) : this.max, si === null || si === -1 / 0 ? si = Hi : si === 1 / 0 ? si = Li : Hi > si ? si = Hi : Li < si && (si = Li), this.translate(
            si,
            0,
            1,
            0,
            1
          );
        }
        autoLabelAlign(si) {
          const Li = (gi(si, 0) - 90 * this.side + 720) % 360;
          return si = { align: "center" }, ai(this, "autoLabelAlign", si, function(Hi) {
            15 < Li && 165 > Li ? Hi.align = "right" : 195 < Li && 345 > Li && (Hi.align = "left");
          }), si.align;
        }
        tickSize(si) {
          const Li = this.options, Hi = gi(Li[si === "tick" ? "tickWidth" : "minorTickWidth"], si === "tick" && this.isXAxis && !this.categories ? 1 : 0);
          let Di = Li[si === "tick" ? "tickLength" : "minorTickLength"], Vi;
          return Hi && Di && (Li[si + "Position"] === "inside" && (Di = -Di), Vi = [Di, Hi]), si = { tickSize: Vi }, ai(this, "afterTickSize", si), si.tickSize;
        }
        labelMetrics() {
          const si = this.chart.renderer;
          var Li = this.ticks;
          return Li = Li[Object.keys(Li)[0]] || {}, this.chart.renderer.fontMetrics(Li.label || Li.movedLabel || si.box);
        }
        unsquish() {
          const si = this.options.labels;
          var Li = this.horiz;
          const Hi = this.tickInterval, Di = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / Hi), Vi = si.rotation, ri = 0.75 * this.labelMetrics().h, mi = Math.max(this.max - this.min, 0), vi = function(es) {
            let os = es / (Di || 1);
            return os = 1 < os ? Math.ceil(os) : 1, os * Hi > mi && es !== 1 / 0 && Di !== 1 / 0 && mi && (os = Math.ceil(mi / Hi)), Ci(os * Hi);
          };
          let zi = Hi, Xi, Gi = Number.MAX_VALUE, Ji;
          if (Li) {
            if (si.staggerLines || (pi(Vi) ? Ji = [Vi] : Di < si.autoRotationLimit && (Ji = si.autoRotation)), Ji) {
              let es;
              for (const os of Ji)
                (os === Vi || os && -90 <= os && 90 >= os) && (Li = vi(Math.abs(ri / Math.sin(bi * os))), es = Li + Math.abs(os / 360), es < Gi && (Gi = es, Xi = os, zi = Li));
            }
          } else
            zi = vi(ri);
          return this.autoRotation = Ji, this.labelRotation = gi(Xi, pi(Vi) ? Vi : 0), si.step ? Hi : zi;
        }
        getSlotWidth(si) {
          const Li = this.chart, Hi = this.horiz, Di = this.options.labels, Vi = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), ri = Li.margin[3];
          if (si && pi(si.slotWidth))
            return si.slotWidth;
          if (Hi && 2 > Di.step)
            return Di.rotation ? 0 : (this.staggerLines || 1) * this.len / Vi;
          if (!Hi) {
            if (si = Di.style.width, si !== void 0)
              return parseInt(String(si), 10);
            if (ri)
              return ri - Li.spacing[3];
          }
          return 0.33 * Li.chartWidth;
        }
        renderUnsquish() {
          const si = this.chart, Li = si.renderer, Hi = this.tickPositions, Di = this.ticks, Vi = this.options.labels, ri = Vi.style, mi = this.horiz, vi = this.getSlotWidth();
          var zi = Math.max(1, Math.round(vi - 2 * Vi.padding));
          const Xi = {}, Gi = this.labelMetrics(), Ji = ri.textOverflow;
          let es, os, ns = 0;
          if (ei(Vi.rotation) || (Xi.rotation = Vi.rotation || 0), Hi.forEach(function(Ii) {
            Ii = Di[Ii], Ii.movedLabel && Ii.replaceMovedLabel(), Ii && Ii.label && Ii.label.textPxLength > ns && (ns = Ii.label.textPxLength);
          }), this.maxLabelLength = ns, this.autoRotation)
            ns > zi && ns > Gi.h ? Xi.rotation = this.labelRotation : this.labelRotation = 0;
          else if (vi && (es = zi, !Ji))
            for (os = "clip", zi = Hi.length; !mi && zi--; ) {
              var ls = Hi[zi];
              (ls = Di[ls].label) && (ls.styles && ls.styles.textOverflow === "ellipsis" ? ls.css({ textOverflow: "clip" }) : ls.textPxLength > vi && ls.css({ width: vi + "px" }), ls.getBBox().height > this.len / Hi.length - (Gi.h - Gi.f) && (ls.specificTextOverflow = "ellipsis"));
            }
          Xi.rotation && (es = ns > 0.5 * si.chartHeight ? 0.33 * si.chartHeight : ns, Ji || (os = "ellipsis")), (this.labelAlign = Vi.align || this.autoLabelAlign(this.labelRotation)) && (Xi.align = this.labelAlign), Hi.forEach(function(Ii) {
            const Ai = (Ii = Di[Ii]) && Ii.label, $i = ri.width, Yi = {};
            Ai && (Ai.attr(Xi), Ii.shortenLabel ? Ii.shortenLabel() : es && !$i && ri.whiteSpace !== "nowrap" && (es < Ai.textPxLength || Ai.element.tagName === "SPAN") ? (Yi.width = es + "px", Ji || (Yi.textOverflow = Ai.specificTextOverflow || os), Ai.css(Yi)) : Ai.styles && Ai.styles.width && !Yi.width && !$i && Ai.css({ width: null }), delete Ai.specificTextOverflow, Ii.rotation = Xi.rotation);
          }, this), this.tickRotCorr = Li.rotCorr(
            Gi.b,
            this.labelRotation || 0,
            this.side !== 0
          );
        }
        hasData() {
          return this.series.some(function(si) {
            return si.hasData();
          }) || this.options.showEmpty && wi(this.min) && wi(this.max);
        }
        addTitle(si) {
          const Li = this.chart.renderer, Hi = this.horiz, Di = this.opposite, Vi = this.options.title, ri = this.chart.styledMode;
          let mi;
          this.axisTitle || ((mi = Vi.textAlign) || (mi = (Hi ? { low: "left", middle: "center", high: "right" } : { low: Di ? "right" : "left", middle: "center", high: Di ? "left" : "right" })[Vi.align]), this.axisTitle = Li.text(Vi.text || "", 0, 0, Vi.useHTML).attr({
            zIndex: 7,
            rotation: Vi.rotation,
            align: mi
          }).addClass("highcharts-axis-title"), ri || this.axisTitle.css(Fe(Vi.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), ri || Vi.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[si ? "show" : "hide"](si);
        }
        generateTick(si) {
          const Li = this.ticks;
          Li[si] ? Li[si].addLabel() : Li[si] = new ss(this, si);
        }
        getOffset() {
          const si = this, { chart: Li, horiz: Hi, options: Di, side: Vi, ticks: ri, tickPositions: mi, coll: vi, axisParent: zi } = si, Xi = Li.renderer, Gi = Li.inverted && !si.isZAxis ? [1, 0, 3, 2][Vi] : Vi;
          var Ji = si.hasData();
          const es = Di.title;
          var os = Di.labels;
          const ns = pi(Di.crossing);
          var ls = Li.axisOffset;
          const Ii = Li.clipOffset, Ai = [-1, 1, 1, -1][Vi], $i = Di.className;
          let Yi, _i = 0, hs;
          var as = 0;
          let us = 0;
          if (si.showAxis = Yi = Ji || Di.showEmpty, si.staggerLines = si.horiz && os.staggerLines || void 0, !si.axisGroup) {
            const ps = (cs, ds, ms) => Xi.g(cs).attr({ zIndex: ms }).addClass(`highcharts-${vi.toLowerCase()}${ds} ` + (this.isRadial ? `highcharts-radial-axis${ds} ` : "") + ($i || "")).add(zi);
            si.gridGroup = ps("grid", "-grid", Di.gridZIndex), si.axisGroup = ps("axis", "", Di.zIndex), si.labelGroup = ps(
              "axis-labels",
              "-labels",
              os.zIndex
            );
          }
          Ji || si.isLinked ? (mi.forEach(function(ps) {
            si.generateTick(ps);
          }), si.renderUnsquish(), si.reserveSpaceDefault = Vi === 0 || Vi === 2 || { 1: "left", 3: "right" }[Vi] === si.labelAlign, gi(os.reserveSpace, ns ? !1 : null, si.labelAlign === "center" ? !0 : null, si.reserveSpaceDefault) && mi.forEach(function(ps) {
            us = Math.max(ri[ps].getLabelSize(), us);
          }), si.staggerLines && (us *= si.staggerLines), si.labelOffset = us * (si.opposite ? -1 : 1)) : hi(ri, function(ps, cs) {
            ps.destroy(), delete ri[cs];
          }), es && es.text && es.enabled !== !1 && (si.addTitle(Yi), Yi && !ns && es.reserveSpace !== !1 && (si.titleOffset = _i = si.axisTitle.getBBox()[Hi ? "height" : "width"], hs = es.offset, as = wi(hs) ? 0 : gi(es.margin, Hi ? 5 : 10))), si.renderLine(), si.offset = Ai * gi(Di.offset, ls[Vi] ? ls[Vi] + (Di.margin || 0) : 0), si.tickRotCorr = si.tickRotCorr || { x: 0, y: 0 }, Ji = Vi === 0 ? -si.labelMetrics().h : Vi === 2 ? si.tickRotCorr.y : 0, as = Math.abs(us) + as, us && (as = as - Ji + Ai * (Hi ? gi(os.y, si.tickRotCorr.y + Ai * os.distance) : gi(os.x, Ai * os.distance))), si.axisTitleMargin = gi(hs, as), si.getMaxLabelDimensions && (si.maxLabelDimensions = si.getMaxLabelDimensions(ri, mi)), vi !== "colorAxis" && (os = this.tickSize("tick"), ls[Vi] = Math.max(ls[Vi], (si.axisTitleMargin || 0) + _i + Ai * si.offset, as, mi && mi.length && os ? os[0] + Ai * si.offset : 0), ls = !si.axisLine || Di.offset ? 0 : 2 * Math.floor(si.axisLine.strokeWidth() / 2), Ii[Gi] = Math.max(Ii[Gi], ls)), ai(this, "afterGetOffset");
        }
        getLinePath(si) {
          const Li = this.chart, Hi = this.opposite;
          var Di = this.offset;
          const Vi = this.horiz, ri = this.left + (Hi ? this.width : 0) + Di;
          return Di = Li.chartHeight - this.bottom - (Hi ? this.height : 0) + Di, Hi && (si *= -1), Li.renderer.crispLine([["M", Vi ? this.left : ri, Vi ? Di : this.top], ["L", Vi ? Li.chartWidth - this.right : ri, Vi ? Di : Li.chartHeight - this.bottom]], si);
        }
        renderLine() {
          this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(si) {
          var Li = this.horiz, Hi = this.left;
          const Di = this.top;
          var Vi = this.len;
          const ri = this.options.title, mi = Li ? Hi : Di, vi = this.opposite, zi = this.offset, Xi = ri.x, Gi = ri.y, Ji = this.chart.renderer.fontMetrics(si);
          return si = si ? Math.max(si.getBBox(!1, 0).height - Ji.h - 1, 0) : 0, Vi = { low: mi + (Li ? 0 : Vi), middle: mi + Vi / 2, high: mi + (Li ? Vi : 0) }[ri.align], Hi = (Li ? Di + this.height : Hi) + (Li ? 1 : -1) * (vi ? -1 : 1) * (this.axisTitleMargin || 0) + [-si, si, Ji.f, -si][this.side], Li = { x: Li ? Vi + Xi : Hi + (vi ? this.width : 0) + zi + Xi, y: Li ? Hi + Gi - (vi ? this.height : 0) + zi : Vi + Gi }, ai(this, "afterGetTitlePosition", { titlePosition: Li }), Li;
        }
        renderMinorTick(si, Li) {
          const Hi = this.minorTicks;
          Hi[si] || (Hi[si] = new ss(this, si, "minor")), Li && Hi[si].isNew && Hi[si].render(null, !0), Hi[si].render(null, !1, 1);
        }
        renderTick(si, Li, Hi) {
          const Di = this.ticks;
          (!this.isLinked || si >= this.min && si <= this.max || this.grid && this.grid.isColumn) && (Di[si] || (Di[si] = new ss(
            this,
            si
          )), Hi && Di[si].isNew && Di[si].render(Li, !0, -1), Di[si].render(Li));
        }
        render() {
          const si = this, Li = si.chart, Hi = si.logarithmic, Di = si.options, Vi = si.isLinked, ri = si.tickPositions, mi = si.axisTitle, vi = si.ticks, zi = si.minorTicks, Xi = si.alternateBands, Gi = Di.stackLabels, Ji = Di.alternateGridColor;
          var es = Di.crossing;
          const os = si.tickmarkOffset, ns = si.axisLine, ls = si.showAxis, Ii = Ki(Li.renderer.globalAnimation);
          let Ai, $i;
          if (si.labelEdge.length = 0, si.overlap = !1, [vi, zi, Xi].forEach(function(Yi) {
            hi(Yi, function(_i) {
              _i.isActive = !1;
            });
          }), pi(es)) {
            const Yi = this.isXAxis ? Li.yAxis[0] : Li.xAxis[0], _i = [1, -1, -1, 1][this.side];
            Yi && (es = Yi.toPixels(es, !0), si.horiz && (es = Yi.len - es), si.offset = _i * es);
          }
          if (si.hasData() || Vi) {
            const Yi = si.chart.hasRendered && si.old && pi(si.old.min);
            si.minorTickInterval && !si.categories && si.getMinorTickPositions().forEach(function(_i) {
              si.renderMinorTick(_i, Yi);
            }), ri.length && (ri.forEach(function(_i, hs) {
              si.renderTick(_i, hs, Yi);
            }), os && (si.min === 0 || si.single) && (vi[-1] || (vi[-1] = new ss(si, -1, null, !0)), vi[-1].render(-1))), Ji && ri.forEach(function(_i, hs) {
              $i = typeof ri[hs + 1] < "u" ? ri[hs + 1] + os : si.max - os, hs % 2 === 0 && _i < si.max && $i <= si.max + (Li.polar ? -os : os) && (Xi[_i] || (Xi[_i] = new is.PlotLineOrBand(si)), Ai = _i + os, Xi[_i].options = { from: Hi ? Hi.lin2log(Ai) : Ai, to: Hi ? Hi.lin2log($i) : $i, color: Ji, className: "highcharts-alternate-grid" }, Xi[_i].render(), Xi[_i].isActive = !0);
            }), si._addedPlotLB || (si._addedPlotLB = !0, (Di.plotLines || []).concat(Di.plotBands || []).forEach(function(_i) {
              si.addPlotBandOrLine(_i);
            }));
          }
          [vi, zi, Xi].forEach(function(Yi) {
            const _i = [], hs = Ii.duration;
            hi(Yi, function(as, us) {
              as.isActive || (as.render(us, !1, 0), as.isActive = !1, _i.push(us));
            }), Fi(function() {
              let as = _i.length;
              for (; as--; )
                Yi[_i[as]] && !Yi[_i[as]].isActive && (Yi[_i[as]].destroy(), delete Yi[_i[as]]);
            }, Yi !== Xi && Li.hasRendered && hs ? hs : 0);
          }), ns && (ns[ns.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(ns.strokeWidth()) }), ns.isPlaced = !0, ns[ls ? "show" : "hide"](ls)), mi && ls && (mi[mi.isNew ? "attr" : "animate"](si.getTitlePosition(mi)), mi.isNew = !1), Gi && Gi.enabled && si.stacking && si.stacking.renderStackTotals(), si.old = { len: si.len, max: si.max, min: si.min, transA: si.transA, userMax: si.userMax, userMin: si.userMin }, si.isDirty = !1, ai(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(si) {
            si.render();
          })), this.series.forEach(function(si) {
            si.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || rs.keepProps;
        }
        destroy(si) {
          const Li = this, Hi = Li.plotLinesAndBands, Di = this.eventOptions;
          if (ai(this, "destroy", { keepEvents: si }), si || ni(Li), [Li.ticks, Li.minorTicks, Li.alternateBands].forEach(function(Vi) {
            yi(Vi);
          }), Hi)
            for (si = Hi.length; si--; )
              Hi[si].destroy();
          "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(Vi) {
            Li[Vi] && (Li[Vi] = Li[Vi].destroy());
          });
          for (const Vi in Li.plotLinesAndBandsGroups)
            Li.plotLinesAndBandsGroups[Vi] = Li.plotLinesAndBandsGroups[Vi].destroy();
          hi(Li, function(Vi, ri) {
            Li.getKeepProps().indexOf(ri) === -1 && delete Li[ri];
          }), this.eventOptions = Di;
        }
        drawCrosshair(si, Li) {
          const Hi = this.crosshair;
          var Di = gi(Hi && Hi.snap, !0);
          const Vi = this.chart;
          let ri, mi = this.cross;
          if (ai(this, "drawCrosshair", { e: si, point: Li }), si || (si = this.cross && this.cross.e), Hi && (wi(Li) || !Di) !== !1) {
            if (Di ? wi(Li) && (ri = gi(this.coll !== "colorAxis" ? Li.crosshairPos : null, this.isXAxis ? Li.plotX : this.len - Li.plotY)) : ri = si && (this.horiz ? si.chartX - this.pos : this.len - si.chartY + this.pos), wi(ri)) {
              var vi = { value: Li && (this.isXAxis ? Li.x : gi(Li.stackY, Li.y)), translatedValue: ri };
              Vi.polar && Oi(vi, { isCrosshair: !0, chartX: si && si.chartX, chartY: si && si.chartY, point: Li }), vi = this.getPlotLinePath(vi) || null;
            }
            if (!wi(vi)) {
              this.hideCrosshair();
              return;
            }
            Di = this.categories && !this.isRadial, mi || (this.cross = mi = Vi.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (Di ? "category " : "thin ") + (Hi.className || "")).attr({ zIndex: gi(Hi.zIndex, 2) }).add(), Vi.styledMode || (mi.attr({ stroke: Hi.color || (Di ? qi.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": gi(
              Hi.width,
              1
            ) }).css({ "pointer-events": "none" }), Hi.dashStyle && mi.attr({ dashstyle: Hi.dashStyle }))), mi.show().attr({ d: vi }), Di && !Hi.width && mi.attr({ "stroke-width": this.transA }), this.cross.e = si;
          } else
            this.hideCrosshair();
          ai(this, "afterDrawCrosshair", { e: si, point: Li });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), ai(this, "afterHideCrosshair");
        }
        hasVerticalPanning() {
          const si = this.chart.options.chart.panning;
          return !!(si && si.enabled && /y/.test(si.type));
        }
        update(si, Li) {
          const Hi = this.chart;
          si = Fe(this.userOptions, si), this.destroy(!0), this.init(Hi, si), Hi.isDirtyBox = !0, gi(Li, !0) && Hi.redraw();
        }
        remove(si) {
          const Li = this.chart, Hi = this.coll, Di = this.series;
          let Vi = Di.length;
          for (; Vi--; )
            Di[Vi] && Di[Vi].remove(!1);
          Ti(Li.axes, this), Ti(Li[Hi] || [], this), Li.orderItems(Hi), this.destroy(), Li.isDirtyBox = !0, gi(si, !0) && Li.redraw();
        }
        setTitle(si, Li) {
          this.update({ title: si }, Li);
        }
        setCategories(si, Li) {
          this.update({ categories: si }, Li);
        }
      }
      return rs.defaultOptions = ji.defaultXAxisOptions, rs.keepProps = "coll extKey hcEvents names series userMax userMin".split(" "), rs;
    }), ci(
      oi,
      "Core/Axis/DateTimeAxis.js",
      [oi["Core/Utilities.js"]],
      function(Si) {
        const { addEvent: ji, getMagnitude: qi, normalizeTickInterval: ts, timeUnits: Qi } = Si;
        var is;
        return function(ss) {
          function Wi() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function Ki(bi) {
            bi.userOptions.type !== "datetime" ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new ki(this));
          }
          const Ui = [];
          ss.compose = function(bi) {
            return Si.pushUnique(Ui, bi) && (bi.keepProps.push("dateTime"), bi.prototype.getTimeTicks = Wi, ji(bi, "init", Ki)), bi;
          };
          class ki {
            constructor(Ri) {
              this.axis = Ri;
            }
            normalizeTimeTickInterval(Ri, Ni) {
              const fi = Ni || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
              Ni = fi[fi.length - 1];
              let Ci = Qi[Ni[0]], wi = Ni[1], yi;
              for (yi = 0; yi < fi.length && (Ni = fi[yi], Ci = Qi[Ni[0]], wi = Ni[1], !(fi[yi + 1] && Ri <= (Ci * wi[wi.length - 1] + Qi[fi[yi + 1][0]]) / 2)); yi++)
                ;
              return Ci === Qi.year && Ri < 5 * Ci && (wi = [1, 2, 5]), Ri = ts(Ri / Ci, wi, Ni[0] === "year" ? Math.max(qi(Ri / Ci), 1) : 1), { unitRange: Ci, count: Ri, unitName: Ni[0] };
            }
            getXDateFormat(Ri, Ni) {
              const { axis: fi } = this, Ci = fi.chart.time;
              return fi.closestPointRange ? Ci.getDateFormat(fi.closestPointRange, Ri, fi.options.startOfWeek, Ni) || Ci.resolveDTLFormat(Ni.year).main : Ci.resolveDTLFormat(Ni.day).main;
            }
          }
          ss.Additions = ki;
        }(is || (is = {})), is;
      }
    ), ci(oi, "Core/Axis/LogarithmicAxis.js", [oi["Core/Utilities.js"]], function(Si) {
      const { addEvent: ji, normalizeTickInterval: qi, pick: ts } = Si;
      var Qi;
      return function(is) {
        function ss(ki) {
          let bi = this.logarithmic;
          ki.userOptions.type !== "logarithmic" ? this.logarithmic = void 0 : bi || (this.logarithmic = new Ui(this));
        }
        function Wi() {
          const ki = this.logarithmic;
          ki && (this.lin2val = function(bi) {
            return ki.lin2log(bi);
          }, this.val2lin = function(bi) {
            return ki.log2lin(bi);
          });
        }
        const Ki = [];
        is.compose = function(ki) {
          return Si.pushUnique(Ki, ki) && (ki.keepProps.push("logarithmic"), ji(ki, "init", ss), ji(ki, "afterInit", Wi)), ki;
        };
        class Ui {
          constructor(bi) {
            this.axis = bi;
          }
          getLogTickPositions(bi, Ri, Ni, fi) {
            const Ci = this.axis;
            var wi = Ci.len, yi = Ci.options;
            let Ti = [];
            if (fi || (this.minorAutoInterval = void 0), 0.5 <= bi)
              bi = Math.round(bi), Ti = Ci.getLinearTickPositions(bi, Ri, Ni);
            else if (0.08 <= bi) {
              yi = Math.floor(Ri);
              let Mi, Oi, ai, li, xi;
              for (wi = 0.3 < bi ? [1, 2, 4] : 0.15 < bi ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; yi < Ni + 1 && !xi; yi++)
                for (Oi = wi.length, Mi = 0; Mi < Oi && !xi; Mi++)
                  ai = this.log2lin(this.lin2log(yi) * wi[Mi]), ai > Ri && (!fi || li <= Ni) && typeof li < "u" && Ti.push(li), li > Ni && (xi = !0), li = ai;
            } else
              Ri = this.lin2log(Ri), Ni = this.lin2log(Ni), bi = fi ? Ci.getMinorTickInterval() : yi.tickInterval, bi = ts(bi === "auto" ? null : bi, this.minorAutoInterval, yi.tickPixelInterval / (fi ? 5 : 1) * (Ni - Ri) / ((fi ? wi / Ci.tickPositions.length : wi) || 1)), bi = qi(bi), Ti = Ci.getLinearTickPositions(bi, Ri, Ni).map(this.log2lin), fi || (this.minorAutoInterval = bi / 5);
            return fi || (Ci.tickInterval = bi), Ti;
          }
          lin2log(bi) {
            return Math.pow(
              10,
              bi
            );
          }
          log2lin(bi) {
            return Math.log(bi) / Math.LN10;
          }
        }
        is.Additions = Ui;
      }(Qi || (Qi = {})), Qi;
    }), ci(oi, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [oi["Core/Utilities.js"]], function(Si) {
      const { erase: ji, extend: qi, isNumber: ts } = Si;
      var Qi;
      return function(is) {
        function ss(Ci) {
          return this.addPlotBandOrLine(Ci, "plotBands");
        }
        function Wi(Ci, wi) {
          const yi = this.userOptions;
          let Ti = new fi(this, Ci);
          if (this.visible && (Ti = Ti.render()), Ti) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (yi.plotLines || []).concat(yi.plotBands || []).forEach((Mi) => {
              this.addPlotBandOrLine(Mi);
            })), wi) {
              const Mi = yi[wi] || [];
              Mi.push(Ci), yi[wi] = Mi;
            }
            this.plotLinesAndBands.push(Ti);
          }
          return Ti;
        }
        function Ki(Ci) {
          return this.addPlotBandOrLine(Ci, "plotLines");
        }
        function Ui(Ci, wi, yi = this.options) {
          const Ti = this.getPlotLinePath({ value: wi, force: !0, acrossPanes: yi.acrossPanes }), Mi = [], Oi = this.horiz;
          wi = !ts(this.min) || !ts(this.max) || Ci < this.min && wi < this.min || Ci > this.max && wi > this.max, Ci = this.getPlotLinePath({ value: Ci, force: !0, acrossPanes: yi.acrossPanes }), yi = 1;
          let ai;
          if (Ci && Ti)
            for (wi && (ai = Ci.toString() === Ti.toString(), yi = 0), wi = 0; wi < Ci.length; wi += 2) {
              const li = Ci[wi], xi = Ci[wi + 1], di = Ti[wi], pi = Ti[wi + 1];
              li[0] !== "M" && li[0] !== "L" || xi[0] !== "M" && xi[0] !== "L" || di[0] !== "M" && di[0] !== "L" || pi[0] !== "M" && pi[0] !== "L" || (Oi && di[1] === li[1] ? (di[1] += yi, pi[1] += yi) : Oi || di[2] !== li[2] || (di[2] += yi, pi[2] += yi), Mi.push(["M", li[1], li[2]], ["L", xi[1], xi[2]], ["L", pi[1], pi[2]], ["L", di[1], di[2]], ["Z"])), Mi.isFlat = ai;
            }
          return Mi;
        }
        function ki(Ci) {
          this.removePlotBandOrLine(Ci);
        }
        function bi(Ci) {
          const wi = this.plotLinesAndBands, yi = this.options, Ti = this.userOptions;
          if (wi) {
            let Mi = wi.length;
            for (; Mi--; )
              wi[Mi].id === Ci && wi[Mi].destroy();
            [
              yi.plotLines || [],
              Ti.plotLines || [],
              yi.plotBands || [],
              Ti.plotBands || []
            ].forEach(function(Oi) {
              for (Mi = Oi.length; Mi--; )
                (Oi[Mi] || {}).id === Ci && ji(Oi, Oi[Mi]);
            });
          }
        }
        function Ri(Ci) {
          this.removePlotBandOrLine(Ci);
        }
        const Ni = [];
        let fi;
        is.compose = function(Ci, wi) {
          return fi || (fi = Ci), Si.pushUnique(Ni, wi) && qi(wi.prototype, { addPlotBand: ss, addPlotLine: Ki, addPlotBandOrLine: Wi, getPlotBandPath: Ui, removePlotBand: ki, removePlotLine: Ri, removePlotBandOrLine: bi }), wi;
        };
      }(Qi || (Qi = {})), Qi;
    }), ci(
      oi,
      "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
      [oi["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], oi["Core/Utilities.js"]],
      function(Si, ji) {
        const { arrayMax: qi, arrayMin: ts, defined: Qi, destroyObjectProperties: is, erase: ss, fireEvent: Wi, merge: Ki, objectEach: Ui, pick: ki } = ji;
        class bi {
          static compose(Ni) {
            return Si.compose(bi, Ni);
          }
          constructor(Ni, fi) {
            this.axis = Ni, fi && (this.options = fi, this.id = fi.id);
          }
          render() {
            Wi(this, "render");
            const Ni = this, fi = Ni.axis, Ci = fi.horiz;
            var wi = fi.logarithmic;
            const yi = Ni.options, Ti = yi.color, Mi = ki(yi.zIndex, 0), Oi = yi.events, ai = {}, li = fi.chart.renderer;
            let xi = yi.label, di = Ni.label, pi = yi.to, ei = yi.from, Fe = yi.value, ii = Ni.svgElem;
            var hi = [];
            const gi = Qi(ei) && Qi(pi);
            hi = Qi(Fe);
            const Ei = !ii, ni = { class: "highcharts-plot-" + (gi ? "band " : "line ") + (yi.className || "") };
            let Pi = gi ? "bands" : "lines";
            if (wi && (ei = wi.log2lin(ei), pi = wi.log2lin(pi), Fe = wi.log2lin(Fe)), fi.chart.styledMode || (hi ? (ni.stroke = Ti || "#999999", ni["stroke-width"] = ki(yi.width, 1), yi.dashStyle && (ni.dashstyle = yi.dashStyle)) : gi && (ni.fill = Ti || "#e6e9ff", yi.borderWidth && (ni.stroke = yi.borderColor, ni["stroke-width"] = yi.borderWidth))), ai.zIndex = Mi, Pi += "-" + Mi, (wi = fi.plotLinesAndBandsGroups[Pi]) || (fi.plotLinesAndBandsGroups[Pi] = wi = li.g("plot-" + Pi).attr(ai).add()), Ei && (Ni.svgElem = ii = li.path().attr(ni).add(wi)), hi)
              hi = fi.getPlotLinePath({ value: Fe, lineWidth: ii.strokeWidth(), acrossPanes: yi.acrossPanes });
            else if (gi)
              hi = fi.getPlotBandPath(ei, pi, yi);
            else
              return;
            return !Ni.eventsAdded && Oi && (Ui(Oi, function(Fi, Zi) {
              ii.on(Zi, function(rs) {
                Oi[Zi].apply(Ni, [rs]);
              });
            }), Ni.eventsAdded = !0), (Ei || !ii.d) && hi && hi.length ? ii.attr({ d: hi }) : ii && (hi ? (ii.show(), ii.animate({ d: hi })) : ii.d && (ii.hide(), di && (Ni.label = di = di.destroy()))), xi && (Qi(xi.text) || Qi(xi.formatter)) && hi && hi.length && 0 < fi.width && 0 < fi.height && !hi.isFlat ? (xi = Ki({ align: Ci && gi && "center", x: Ci ? !gi && 4 : 10, verticalAlign: !Ci && gi && "middle", y: Ci ? gi ? 16 : 10 : gi ? 6 : -4, rotation: Ci && !gi && 90 }, xi), this.renderLabel(xi, hi, gi, Mi)) : di && di.hide(), Ni;
          }
          renderLabel(Ni, fi, Ci, wi) {
            const yi = this.axis;
            var Ti = yi.chart.renderer;
            let Mi = this.label;
            Mi || (this.label = Mi = Ti.text(this.getLabelText(Ni), 0, 0, Ni.useHTML).attr({ align: Ni.textAlign || Ni.align, rotation: Ni.rotation, class: "highcharts-plot-" + (Ci ? "band" : "line") + "-label " + (Ni.className || ""), zIndex: wi }).add(), yi.chart.styledMode || Mi.css(Ki({ fontSize: "0.8em", textOverflow: "ellipsis" }, Ni.style))), wi = fi.xBounds || [fi[0][1], fi[1][1], Ci ? fi[2][1] : fi[0][1]], fi = fi.yBounds || [fi[0][2], fi[1][2], Ci ? fi[2][2] : fi[0][2]], Ci = ts(wi), Ti = ts(fi), Mi.align(Ni, !1, { x: Ci, y: Ti, width: qi(wi) - Ci, height: qi(fi) - Ti }), Mi.alignValue && Mi.alignValue !== "left" || (Ni = Ni.clip ? yi.width : yi.chart.chartWidth, Mi.css({ width: (Mi.rotation === 90 ? yi.height - (Mi.alignAttr.y - yi.top) : Ni - (Mi.alignAttr.x - yi.left)) + "px" })), Mi.show(!0);
          }
          getLabelText(Ni) {
            return Qi(Ni.formatter) ? Ni.formatter.call(this) : Ni.text;
          }
          destroy() {
            ss(this.axis.plotLinesAndBands, this), delete this.axis, is(this);
          }
        }
        return bi;
      }
    ), ci(oi, "Core/Tooltip.js", [
      oi["Core/Templating.js"],
      oi["Core/Globals.js"],
      oi["Core/Renderer/RendererUtilities.js"],
      oi["Core/Renderer/RendererRegistry.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi) {
      const { format: is } = Si, { doc: ss, isSafari: Wi } = ji, { distribute: Ki } = qi, { addEvent: Ui, clamp: ki, css: bi, discardElement: Ri, extend: Ni, fireEvent: fi, isArray: Ci, isNumber: wi, isString: yi, merge: Ti, pick: Mi, splat: Oi, syncTimeout: ai } = Qi;
      class li {
        constructor(di, pi) {
          this.allowShared = !0, this.container = void 0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.now = {}, this.options = {}, this.outside = !1, this.chart = di, this.init(di, pi);
        }
        bodyFormatter(di) {
          return di.map(function(pi) {
            const ei = pi.series.tooltipOptions;
            return (ei[(pi.point.formatPrefix || "point") + "Formatter"] || pi.point.tooltipFormatter).call(pi.point, ei[(pi.point.formatPrefix || "point") + "Format"] || "");
          });
        }
        cleanSplit(di) {
          this.chart.series.forEach(function(pi) {
            const ei = pi && pi.tt;
            ei && (!ei.isActive || di ? pi.tt = ei.destroy() : ei.isActive = !1);
          });
        }
        defaultFormatter(di) {
          const pi = this.points || Oi(this);
          let ei;
          return ei = [di.tooltipFooterHeaderFormatter(pi[0])], ei = ei.concat(di.bodyFormatter(pi)), ei.push(di.tooltipFooterHeaderFormatter(
            pi[0],
            !0
          )), ei;
        }
        destroy() {
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), Ri(this.container)), Qi.clearTimeout(this.hideTimer), Qi.clearTimeout(this.tooltipTimeout);
        }
        getAnchor(di, pi) {
          var ei = this.chart;
          const Fe = ei.pointer, ii = ei.inverted, hi = ei.plotTop;
          if (ei = ei.plotLeft, di = Oi(di), di[0].series && di[0].series.yAxis && !di[0].series.yAxis.options.reversedStacks && (di = di.slice().reverse()), this.followPointer && pi)
            typeof pi.chartX > "u" && (pi = Fe.normalize(pi)), di = [pi.chartX - ei, pi.chartY - hi];
          else if (di[0].tooltipPos)
            di = di[0].tooltipPos;
          else {
            let gi = 0, Ei = 0;
            di.forEach(function(ni) {
              (ni = ni.pos(!0)) && (gi += ni[0], Ei += ni[1]);
            }), gi /= di.length, Ei /= di.length, this.shared && 1 < di.length && pi && (ii ? gi = pi.chartX : Ei = pi.chartY), di = [gi - ei, Ei - hi];
          }
          return di.map(Math.round);
        }
        getClassName(di, pi, ei) {
          const Fe = di.series, ii = Fe.options;
          return [this.options.className, "highcharts-label", ei && "highcharts-tooltip-header", pi ? "highcharts-tooltip-box" : "highcharts-tooltip", !ei && "highcharts-color-" + Mi(
            di.colorIndex,
            Fe.colorIndex
          ), ii && ii.className].filter(yi).join(" ");
        }
        getLabel() {
          const di = this, pi = this.chart.styledMode, ei = this.options, Fe = this.split && this.allowShared, ii = ei.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none");
          let hi, gi = this.chart.renderer;
          if (this.label) {
            var Ei = !this.label.hasClass("highcharts-label");
            (!Fe && Ei || Fe && !Ei) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              Ei = this.chart.options.chart.style;
              const ni = ts.getRendererType();
              this.container = hi = ji.doc.createElement("div"), hi.className = "highcharts-tooltip-container", bi(hi, { position: "absolute", top: "1px", pointerEvents: ii, zIndex: Math.max(this.options.style.zIndex || 0, (Ei && Ei.zIndex || 0) + 3) }), ji.doc.body.appendChild(hi), this.renderer = gi = new ni(hi, 0, 0, Ei, void 0, void 0, gi.styledMode);
            }
            if (Fe ? this.label = gi.g("tooltip") : (this.label = gi.label("", 0, 0, ei.shape, void 0, void 0, ei.useHTML, void 0, "tooltip").attr({ padding: ei.padding, r: ei.borderRadius }), pi || this.label.attr({ fill: ei.backgroundColor, "stroke-width": ei.borderWidth || 0 }).css(ei.style).css({ pointerEvents: ii })), di.outside) {
              const ni = this.label, {
                xSetter: Pi,
                ySetter: Fi
              } = ni;
              ni.xSetter = function(Zi) {
                Pi.call(ni, di.distance), hi.style.left = Zi + "px";
              }, ni.ySetter = function(Zi) {
                Fi.call(ni, di.distance), hi.style.top = Zi + "px";
              };
            }
            this.label.attr({ zIndex: 8 }).shadow(ei.shadow).add();
          }
          return this.label;
        }
        getPlayingField() {
          const { body: di, documentElement: pi } = ss, { chart: ei, distance: Fe, outside: ii } = this;
          return { width: ii ? Math.max(di.scrollWidth, pi.scrollWidth, di.offsetWidth, pi.offsetWidth, pi.clientWidth) - 2 * Fe : ei.chartWidth, height: ii ? Math.max(di.scrollHeight, pi.scrollHeight, di.offsetHeight, pi.offsetHeight, pi.clientHeight) : ei.chartHeight };
        }
        getPosition(di, pi, ei) {
          const Fe = this.chart, ii = this.distance, hi = {}, gi = Fe.inverted && ei.h || 0, Ei = this.outside;
          var ni = this.getPlayingField();
          const Pi = ni.width, Fi = ni.height, Zi = Fe.pointer.getChartPosition();
          ni = (mi) => {
            const vi = mi === "x";
            return [mi, vi ? Pi : Fi, vi ? di : pi].concat(Ei ? [vi ? di * Zi.scaleX : pi * Zi.scaleY, vi ? Zi.left - ii + (ei.plotX + Fe.plotLeft) * Zi.scaleX : Zi.top - ii + (ei.plotY + Fe.plotTop) * Zi.scaleY, 0, vi ? Pi : Fi] : [vi ? di : pi, vi ? ei.plotX + Fe.plotLeft : ei.plotY + Fe.plotTop, vi ? Fe.plotLeft : Fe.plotTop, vi ? Fe.plotLeft + Fe.plotWidth : Fe.plotTop + Fe.plotHeight]);
          };
          let rs = ni("y"), Bi = ni("x"), si;
          ni = !!ei.negative, !Fe.polar && Fe.hoverSeries && Fe.hoverSeries.yAxis && Fe.hoverSeries.yAxis.reversed && (ni = !ni);
          const Li = !this.followPointer && Mi(ei.ttBelow, !Fe.inverted === ni), Hi = function(mi, vi, zi, Xi, Gi, Ji, es) {
            const os = Ei ? mi === "y" ? ii * Zi.scaleY : ii * Zi.scaleX : ii, ns = (zi - Xi) / 2, ls = Xi < Gi - ii, Ii = Gi + ii + Xi < vi, Ai = Gi - os - zi + ns;
            if (Gi = Gi + os - ns, Li && Ii)
              hi[mi] = Gi;
            else if (!Li && ls)
              hi[mi] = Ai;
            else if (ls)
              hi[mi] = Math.min(es - Xi, 0 > Ai - gi ? Ai : Ai - gi);
            else if (Ii)
              hi[mi] = Math.max(Ji, Gi + gi + zi > vi ? Gi : Gi + gi);
            else
              return !1;
          }, Di = function(mi, vi, zi, Xi, Gi) {
            let Ji;
            return Gi < ii || Gi > vi - ii ? Ji = !1 : hi[mi] = Gi < zi / 2 ? 1 : Gi > vi - Xi / 2 ? vi - Xi - 2 : Gi - zi / 2, Ji;
          }, Vi = function(mi) {
            const vi = rs;
            rs = Bi, Bi = vi, si = mi;
          }, ri = function() {
            Hi.apply(0, rs) !== !1 ? Di.apply(0, Bi) !== !1 || si || (Vi(!0), ri()) : si ? hi.x = hi.y = 0 : (Vi(!0), ri());
          };
          return (Fe.inverted || 1 < this.len) && Vi(), ri(), hi;
        }
        hide(di) {
          const pi = this;
          Qi.clearTimeout(this.hideTimer), di = Mi(di, this.options.hideDelay), this.isHidden || (this.hideTimer = ai(function() {
            pi.getLabel().fadeOut(di && void 0), pi.isHidden = !0;
          }, di));
        }
        init(di, pi) {
          this.chart = di, this.options = pi, this.crosshairs = [], this.now = { x: 0, y: 0 }, this.isHidden = !0, this.split = pi.split && !di.inverted && !di.polar, this.shared = pi.shared || this.split, this.outside = Mi(pi.outside, !(!di.scrollablePixelsX && !di.scrollablePixelsY));
        }
        shouldStickOnContact(di) {
          return !(this.followPointer || !this.options.stickOnContact || di && !this.chart.pointer.inClass(di.target, "highcharts-tooltip"));
        }
        move(di, pi, ei, Fe) {
          const ii = this, hi = ii.now, gi = ii.options.animation !== !1 && !ii.isHidden && (1 < Math.abs(di - hi.x) || 1 < Math.abs(pi - hi.y)), Ei = ii.followPointer || 1 < ii.len;
          Ni(hi, { x: gi ? (2 * hi.x + di) / 3 : di, y: gi ? (hi.y + pi) / 2 : pi, anchorX: Ei ? void 0 : gi ? (2 * hi.anchorX + ei) / 3 : ei, anchorY: Ei ? void 0 : gi ? (hi.anchorY + Fe) / 2 : Fe }), ii.getLabel().attr(hi), ii.drawTracker(), gi && (Qi.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
            ii && ii.move(di, pi, ei, Fe);
          }, 32));
        }
        refresh(di, pi) {
          const ei = this.chart, Fe = this.options, ii = ei.pointer, hi = Oi(di), gi = hi[0], Ei = [];
          var ni = Fe.format, Pi = Fe.formatter || this.defaultFormatter;
          const Fi = this.shared, Zi = ei.styledMode;
          let rs = {};
          if (Fe.enabled && gi.series) {
            Qi.clearTimeout(this.hideTimer), this.allowShared = !(!Ci(di) && di.series && di.series.noSharedTooltip), this.followPointer = !this.split && gi.series.tooltipOptions.followPointer, di = this.getAnchor(di, pi);
            var Bi = di[0], si = di[1];
            if (Fi && this.allowShared ? (ii.applyInactiveState(hi), hi.forEach(function(Li) {
              Li.setState("hover"), Ei.push(Li.getLabelConfig());
            }), rs = gi.getLabelConfig(), rs.points = Ei) : rs = gi.getLabelConfig(), this.len = Ei.length, ni = yi(ni) ? is(ni, rs, ei) : Pi.call(rs, this), Pi = gi.series, this.distance = Mi(Pi.tooltipOptions.distance, 16), ni === !1)
              this.hide();
            else {
              if (this.split && this.allowShared)
                this.renderSplit(ni, hi);
              else {
                let Li = Bi, Hi = si;
                if (pi && ii.isDirectTouch && (Li = pi.chartX - ei.plotLeft, Hi = pi.chartY - ei.plotTop), ei.polar || Pi.options.clip === !1 || hi.some((Di) => ii.isDirectTouch || Di.series.shouldShowTooltip(
                  Li,
                  Hi
                )))
                  pi = this.getLabel(), Fe.style.width && !Zi || pi.css({ width: (this.outside ? this.getPlayingField() : ei.spacingBox).width + "px" }), pi.attr({ text: ni && ni.join ? ni.join("") : ni }), pi.addClass(this.getClassName(gi), !0), Zi || pi.attr({ stroke: Fe.borderColor || gi.color || Pi.color || "#666666" }), this.updatePosition({ plotX: Bi, plotY: si, negative: gi.negative, ttBelow: gi.ttBelow, h: di[2] || 0 });
                else {
                  this.hide();
                  return;
                }
              }
              this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
            }
            fi(this, "refresh");
          }
        }
        renderSplit(di, pi) {
          function ei(Yi, _i, hs, as, us = !0) {
            return hs ? (_i = zi ? 0 : os, Yi = ki(Yi - as / 2, ri.left, ri.right - as - (Fe.outside ? Xi : 0))) : (_i -= Ji, Yi = us ? Yi - as - Hi : Yi + Hi, Yi = ki(Yi, us ? Yi : ri.left, ri.right)), { x: Yi, y: _i };
          }
          const Fe = this, { chart: ii, chart: { chartWidth: hi, chartHeight: gi, plotHeight: Ei, plotLeft: ni, plotTop: Pi, pointer: Fi, scrollablePixelsY: Zi = 0, scrollablePixelsX: rs, scrollingContainer: { scrollLeft: Bi, scrollTop: si } = { scrollLeft: 0, scrollTop: 0 }, styledMode: Li }, distance: Hi, options: Di, options: { positioner: Vi } } = Fe, ri = Fe.outside && typeof rs != "number" ? ss.documentElement.getBoundingClientRect() : {
            left: Bi,
            right: Bi + hi,
            top: si,
            bottom: si + gi
          }, mi = Fe.getLabel(), vi = this.renderer || ii.renderer, zi = !(!ii.xAxis[0] || !ii.xAxis[0].opposite), { left: Xi, top: Gi } = Fi.getChartPosition();
          let Ji = Pi + si, es = 0, os = Ei - Zi;
          yi(di) && (di = [!1, di]), di = di.slice(0, pi.length + 1).reduce(function(Yi, _i, hs) {
            if (_i !== !1 && _i !== "") {
              hs = pi[hs - 1] || { isHeader: !0, plotX: pi[0].plotX, plotY: Ei, series: {} };
              const ms = hs.isHeader;
              var as = ms ? Fe : hs.series, us;
              {
                var ps = hs;
                _i = _i.toString();
                var cs = as.tt;
                const { isHeader: xs, series: Ss } = ps;
                cs || (cs = { padding: Di.padding, r: Di.borderRadius }, Li || (cs.fill = Di.backgroundColor, cs["stroke-width"] = (us = Di.borderWidth) !== null && us !== void 0 ? us : 1), cs = vi.label("", 0, 0, Di[xs ? "headerShape" : "shape"], void 0, void 0, Di.useHTML).addClass(Fe.getClassName(ps, !0, xs)).attr(cs).add(mi)), cs.isActive = !0, cs.attr({ text: _i }), Li || cs.css(Di.style).attr({ stroke: Di.borderColor || ps.color || Ss.color || "#333333" }), us = cs;
              }
              us = as.tt = us, ps = us.getBBox(), as = ps.width + us.strokeWidth(), ms && (es = ps.height, os += es, zi && (Ji -= es));
              {
                const { isHeader: xs, plotX: Ss = 0, plotY: vs = 0, series: ws } = hs;
                if (xs) {
                  _i = ni + Ss;
                  var ds = Pi + Ei / 2;
                } else {
                  const { xAxis: ks, yAxis: ys } = ws;
                  _i = ks.pos + ki(Ss, -Hi, ks.len + Hi), ws.shouldShowTooltip(0, ys.pos - Pi + vs, { ignoreX: !0 }) && (ds = ys.pos + vs);
                }
                _i = ki(_i, ri.left - Hi, ri.right + Hi), ds = { anchorX: _i, anchorY: ds };
              }
              const { anchorX: fs, anchorY: gs } = ds;
              typeof gs == "number" ? (ds = ps.height + 1, ps = Vi ? Vi.call(Fe, as, ds, hs) : ei(fs, gs, ms, as), Yi.push({ align: Vi ? 0 : void 0, anchorX: fs, anchorY: gs, boxWidth: as, point: hs, rank: Mi(ps.rank, ms ? 1 : 0), size: ds, target: ps.y, tt: us, x: ps.x })) : us.isActive = !1;
            }
            return Yi;
          }, []), !Vi && di.some((Yi) => {
            var { outside: _i } = Fe;
            return _i = (_i ? Xi : 0) + Yi.anchorX, _i < ri.left && _i + Yi.boxWidth < ri.right ? !0 : _i < Xi - ri.left + Yi.boxWidth && ri.right - _i > _i;
          }) && (di = di.map((Yi) => {
            const { x: _i, y: hs } = ei(
              Yi.anchorX,
              Yi.anchorY,
              Yi.point.isHeader,
              Yi.boxWidth,
              !1
            );
            return Ni(Yi, { target: hs, x: _i });
          })), Fe.cleanSplit(), Ki(di, os);
          var ns = Xi, ls = Xi;
          di.forEach(function(Yi) {
            const { x: _i, boxWidth: hs, isHeader: as } = Yi;
            as || (Fe.outside && Xi + _i < ns && (ns = Xi + _i), !as && Fe.outside && ns + hs > ls && (ls = Xi + _i));
          }), di.forEach(function(Yi) {
            const { x: _i, anchorX: hs, anchorY: as, pos: us, point: { isHeader: ps } } = Yi, cs = { visibility: typeof us > "u" ? "hidden" : "inherit", x: _i, y: (us || 0) + Ji, anchorX: hs, anchorY: as };
            if (Fe.outside && _i < hs) {
              const ds = Xi - ns;
              0 < ds && (ps || (cs.x = _i + ds, cs.anchorX = hs + ds), ps && (cs.x = (ls - ns) / 2, cs.anchorX = hs + ds));
            }
            Yi.tt.attr(cs);
          });
          const {
            container: Ii,
            outside: Ai,
            renderer: $i
          } = Fe;
          if (Ai && Ii && $i) {
            const { width: Yi, height: _i, x: hs, y: as } = mi.getBBox();
            $i.setSize(Yi + hs, _i + as, !1), Ii.style.left = ns + "px", Ii.style.top = Gi + "px";
          }
          Wi && mi.attr({ opacity: mi.opacity === 1 ? 0.999 : 1 });
        }
        drawTracker() {
          if (this.shouldStickOnContact()) {
            var di = this.chart, pi = this.label, ei = this.shared ? di.hoverPoints : di.hoverPoint;
            if (pi && ei) {
              var Fe = { x: 0, y: 0, width: 0, height: 0 };
              ei = this.getAnchor(ei);
              var ii = pi.getBBox();
              ei[0] += di.plotLeft - pi.translateX, ei[1] += di.plotTop - pi.translateY, Fe.x = Math.min(0, ei[0]), Fe.y = Math.min(0, ei[1]), Fe.width = 0 > ei[0] ? Math.max(Math.abs(ei[0]), ii.width - ei[0]) : Math.max(Math.abs(ei[0]), ii.width), Fe.height = 0 > ei[1] ? Math.max(Math.abs(ei[1]), ii.height - Math.abs(ei[1])) : Math.max(Math.abs(ei[1]), ii.height), this.tracker ? this.tracker.attr(Fe) : (this.tracker = pi.renderer.rect(Fe).addClass("highcharts-tracker").add(pi), di.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
            }
          } else
            this.tracker && (this.tracker = this.tracker.destroy());
        }
        styledModeFormat(di) {
          return di.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(
            /style="color:{(point|series)\.color}"/g,
            'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
          );
        }
        tooltipFooterHeaderFormatter(di, pi) {
          const ei = di.series, Fe = ei.tooltipOptions;
          var ii = ei.xAxis;
          const hi = ii && ii.dateTime;
          ii = { isFooter: pi, labelConfig: di };
          let gi = Fe.xDateFormat, Ei = Fe[pi ? "footerFormat" : "headerFormat"];
          return fi(this, "headerFormatter", ii, function(ni) {
            hi && !gi && wi(di.key) && (gi = hi.getXDateFormat(di.key, Fe.dateTimeLabelFormats)), hi && gi && (di.point && di.point.tooltipDateKeys || ["key"]).forEach(function(Pi) {
              Ei = Ei.replace("{point." + Pi + "}", "{point." + Pi + ":" + gi + "}");
            }), ei.chart.styledMode && (Ei = this.styledModeFormat(Ei)), ni.text = is(Ei, { point: di, series: ei }, this.chart);
          }), ii.text;
        }
        update(di) {
          this.destroy(), this.init(this.chart, Ti(!0, this.options, di));
        }
        updatePosition(di) {
          const { chart: pi, distance: ei, options: Fe } = this;
          var ii = pi.pointer;
          const hi = this.getLabel(), { left: gi, top: Ei, scaleX: ni, scaleY: Pi } = ii.getChartPosition();
          ii = (Fe.positioner || this.getPosition).call(this, hi.width, hi.height, di);
          let Fi = (di.plotX || 0) + pi.plotLeft;
          di = (di.plotY || 0) + pi.plotTop;
          let Zi;
          this.outside && (Fe.positioner && (ii.x += gi - ei, ii.y += Ei - ei), Zi = (Fe.borderWidth || 0) + 2 * ei, this.renderer.setSize(hi.width + Zi, hi.height + Zi, !1), (ni !== 1 || Pi !== 1) && (bi(this.container, { transform: `scale(${ni}, ${Pi})` }), Fi *= ni, di *= Pi), Fi += gi - ii.x, di += Ei - ii.y), this.move(Math.round(ii.x), Math.round(ii.y || 0), Fi, di);
        }
      }
      return function(xi) {
        const di = [];
        xi.compose = function(pi) {
          Qi.pushUnique(di, pi) && Ui(pi, "afterInit", function() {
            const ei = this.chart;
            ei.options.tooltip && (ei.tooltip = new xi(ei, ei.options.tooltip));
          });
        };
      }(li || (li = {})), li;
    }), ci(oi, "Core/Series/Point.js", [
      oi["Core/Renderer/HTML/AST.js"],
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Defaults.js"],
      oi["Core/Templating.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi) {
      const { animObject: is } = ji, { defaultOptions: ss } = qi, { format: Wi } = ts, { addEvent: Ki, defined: Ui, erase: ki, extend: bi, fireEvent: Ri, getNestedProperty: Ni, isArray: fi, isFunction: Ci, isNumber: wi, isObject: yi, merge: Ti, objectEach: Mi, pick: Oi, syncTimeout: ai, removeEvent: li, uniqueKey: xi } = Qi;
      class di {
        constructor() {
          this.category = void 0, this.destroyed = !1, this.formatPrefix = "point", this.id = void 0, this.isNull = !1, this.percentage = this.options = this.name = void 0, this.selected = !1, this.total = this.shapeArgs = this.series = void 0, this.visible = !0, this.x = void 0;
        }
        animateBeforeDestroy() {
          const ei = this, Fe = { x: ei.startXPos, opacity: 0 }, ii = ei.getGraphicalProps();
          ii.singular.forEach(function(hi) {
            ei[hi] = ei[hi].animate(hi === "dataLabel" ? { x: ei[hi].startXPos, y: ei[hi].startYPos, opacity: 0 } : Fe);
          }), ii.plural.forEach(function(hi) {
            ei[hi].forEach(function(gi) {
              gi.element && gi.animate(bi({ x: ei.startXPos }, gi.startYPos ? { x: gi.startXPos, y: gi.startYPos } : {}));
            });
          });
        }
        applyOptions(ei, Fe) {
          const ii = this.series, hi = ii.options.pointValKey || ii.pointValKey;
          return ei = di.prototype.optionsToObject.call(this, ei), bi(this, ei), this.options = this.options ? bi(this.options, ei) : ei, ei.group && delete this.group, ei.dataLabels && delete this.dataLabels, hi && (this.y = di.prototype.getNestedProperty.call(this, hi)), this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point", this.selected && (this.state = "select"), "name" in this && typeof Fe > "u" && ii.xAxis && ii.xAxis.hasNames && (this.x = ii.xAxis.nameToX(this)), typeof this.x > "u" && ii ? this.x = typeof Fe > "u" ? ii.autoIncrement() : Fe : wi(ei.x) && ii.options.relativeXValue && (this.x = ii.autoIncrement(ei.x)), this;
        }
        destroy() {
          if (!this.destroyed) {
            const Fe = this;
            var ei = Fe.series;
            const ii = ei.chart;
            ei = ei.options.dataSorting;
            const hi = ii.hoverPoints, gi = is(Fe.series.chart.renderer.globalAnimation), Ei = () => {
              (Fe.graphic || Fe.graphics || Fe.dataLabel || Fe.dataLabels) && (li(Fe), Fe.destroyElements());
              for (const ni in Fe)
                delete Fe[ni];
            };
            Fe.legendItem && ii.legend.destroyItem(Fe), hi && (Fe.setState(), ki(hi, Fe), hi.length || (ii.hoverPoints = null)), Fe === ii.hoverPoint && Fe.onMouseOut(), ei && ei.enabled ? (this.animateBeforeDestroy(), ai(Ei, gi.duration)) : Ei(), ii.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(ei) {
          const Fe = this;
          ei = Fe.getGraphicalProps(ei), ei.singular.forEach(function(ii) {
            Fe[ii] = Fe[ii].destroy();
          }), ei.plural.forEach(function(ii) {
            Fe[ii].forEach(function(hi) {
              hi && hi.element && hi.destroy();
            }), delete Fe[ii];
          });
        }
        firePointEvent(ei, Fe, ii) {
          const hi = this, gi = this.series.options;
          (gi.point.events[ei] || hi.options && hi.options.events && hi.options.events[ei]) && hi.importEvents(), ei === "click" && gi.allowPointSelect && (ii = function(Ei) {
            hi.select && hi.select(null, Ei.ctrlKey || Ei.metaKey || Ei.shiftKey);
          }), Ri(hi, ei, Fe, ii);
        }
        getClassName() {
          return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (typeof this.colorIndex < "u" ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
        }
        getGraphicalProps(ei) {
          const Fe = this, ii = [], hi = { singular: [], plural: [] };
          let gi, Ei;
          for (ei = ei || { graphic: 1, dataLabel: 1 }, ei.graphic && ii.push("graphic"), ei.dataLabel && ii.push("dataLabel", "dataLabelPath", "dataLabelUpper", "connector"), Ei = ii.length; Ei--; )
            gi = ii[Ei], Fe[gi] && hi.singular.push(gi);
          return ["graphic", "dataLabel", "connector"].forEach(function(ni) {
            const Pi = ni + "s";
            ei[ni] && Fe[Pi] && hi.plural.push(Pi);
          }), hi;
        }
        getLabelConfig() {
          return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
        }
        getNestedProperty(ei) {
          if (ei)
            return ei.indexOf("custom.") === 0 ? Ni(ei, this.options) : this[ei];
        }
        getZone() {
          var ei = this.series;
          const Fe = ei.zones;
          ei = ei.zoneAxis || "y";
          let ii, hi = 0;
          for (ii = Fe[hi]; this[ei] >= ii.value; )
            ii = Fe[++hi];
          return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = ii && ii.color && !this.options.color ? ii.color : this.nonZonedColor, ii;
        }
        hasNewShapeType() {
          return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
        }
        init(ei, Fe, ii) {
          return this.series = ei, this.applyOptions(Fe, ii), this.id = Ui(this.id) ? this.id : xi(), this.resolveColor(), ei.chart.pointCount++, Ri(this, "afterInit"), this;
        }
        isValid() {
          return this.x !== null && wi(this.y);
        }
        optionsToObject(ei) {
          var Fe = this.series;
          const ii = Fe.options.keys, hi = ii || Fe.pointArrayMap || ["y"], gi = hi.length;
          let Ei = {}, ni = 0, Pi = 0;
          if (wi(ei) || ei === null)
            Ei[hi[0]] = ei;
          else if (fi(ei))
            for (!ii && ei.length > gi && (Fe = typeof ei[0], Fe === "string" ? Ei.name = ei[0] : Fe === "number" && (Ei.x = ei[0]), ni++); Pi < gi; )
              ii && typeof ei[ni] > "u" || (0 < hi[Pi].indexOf(".") ? di.prototype.setNestedProperty(Ei, ei[ni], hi[Pi]) : Ei[hi[Pi]] = ei[ni]), ni++, Pi++;
          else
            typeof ei == "object" && (Ei = ei, ei.dataLabels && (Fe._hasPointLabels = !0), ei.marker && (Fe._hasPointMarkers = !0));
          return Ei;
        }
        pos(ei, Fe = this.plotY) {
          if (!this.destroyed) {
            const { plotX: ii, series: hi } = this, { chart: gi, xAxis: Ei, yAxis: ni } = hi;
            let Pi = 0, Fi = 0;
            if (wi(ii) && wi(Fe))
              return ei && (Pi = Ei ? Ei.pos : gi.plotLeft, Fi = ni ? ni.pos : gi.plotTop), gi.inverted && Ei && ni ? [ni.len - Fe + Fi, Ei.len - ii + Pi] : [ii + Pi, Fe + Fi];
          }
        }
        resolveColor() {
          const ei = this.series;
          var Fe = ei.chart.styledMode;
          let ii;
          var hi = ei.chart.options.chart.colorCount;
          delete this.nonZonedColor, ei.options.colorByPoint ? (Fe || (hi = ei.options.colors || ei.chart.options.colors, ii = hi[ei.colorCounter], hi = hi.length), Fe = ei.colorCounter, ei.colorCounter++, ei.colorCounter === hi && (ei.colorCounter = 0)) : (Fe || (ii = ei.color), Fe = ei.colorIndex), this.colorIndex = Oi(this.options.colorIndex, Fe), this.color = Oi(this.options.color, ii);
        }
        setNestedProperty(ei, Fe, ii) {
          return ii.split(".").reduce(function(hi, gi, Ei, ni) {
            return hi[gi] = ni.length - 1 === Ei ? Fe : yi(hi[gi], !0) ? hi[gi] : {}, hi[gi];
          }, ei), ei;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(ei) {
          const Fe = this.series, ii = Fe.tooltipOptions, hi = Oi(ii.valueDecimals, ""), gi = ii.valuePrefix || "", Ei = ii.valueSuffix || "";
          return Fe.chart.styledMode && (ei = Fe.chart.tooltip.styledModeFormat(ei)), (Fe.pointArrayMap || ["y"]).forEach(function(ni) {
            ni = "{point." + ni, (gi || Ei) && (ei = ei.replace(RegExp(ni + "}", "g"), gi + ni + "}" + Ei)), ei = ei.replace(RegExp(ni + "}", "g"), ni + ":,." + hi + "f}");
          }), Wi(ei, { point: this, series: this.series }, Fe.chart);
        }
        update(ei, Fe, ii, hi) {
          function gi() {
            Ei.applyOptions(ei);
            var Bi = Pi && Ei.hasMockGraphic;
            Bi = Ei.y === null ? !Bi : Bi, Pi && Bi && (Ei.graphic = Pi.destroy(), delete Ei.hasMockGraphic), yi(ei, !0) && (Pi && Pi.element && ei && ei.marker && typeof ei.marker.symbol < "u" && (Ei.graphic = Pi.destroy()), ei && ei.dataLabels && Ei.dataLabel && (Ei.dataLabel = Ei.dataLabel.destroy()), Ei.connector && (Ei.connector = Ei.connector.destroy())), rs = Ei.index, ni.updateParallelArrays(Ei, rs), Zi.data[rs] = yi(Zi.data[rs], !0) || yi(ei, !0) ? Ei.options : Oi(ei, Zi.data[rs]), ni.isDirty = ni.isDirtyData = !0, !ni.fixedBox && ni.hasCartesianSeries && (Fi.isDirtyBox = !0), Zi.legendType === "point" && (Fi.isDirtyLegend = !0), Fe && Fi.redraw(ii);
          }
          const Ei = this, ni = Ei.series, Pi = Ei.graphic, Fi = ni.chart, Zi = ni.options;
          let rs;
          Fe = Oi(Fe, !0), hi === !1 ? gi() : Ei.firePointEvent("update", { options: ei }, gi);
        }
        remove(ei, Fe) {
          this.series.removePoint(
            this.series.data.indexOf(this),
            ei,
            Fe
          );
        }
        select(ei, Fe) {
          const ii = this, hi = ii.series, gi = hi.chart;
          this.selectedStaging = ei = Oi(ei, !ii.selected), ii.firePointEvent(ei ? "select" : "unselect", { accumulate: Fe }, function() {
            ii.selected = ii.options.selected = ei, hi.options.data[hi.data.indexOf(ii)] = ii.options, ii.setState(ei && "select"), Fe || gi.getSelectedPoints().forEach(function(Ei) {
              const ni = Ei.series;
              Ei.selected && Ei !== ii && (Ei.selected = Ei.options.selected = !1, ni.options.data[ni.data.indexOf(Ei)] = Ei.options, Ei.setState(gi.hoverPoints && ni.options.inactiveOtherPoints ? "inactive" : ""), Ei.firePointEvent("unselect"));
            });
          }), delete this.selectedStaging;
        }
        onMouseOver(ei) {
          const Fe = this.series.chart, ii = Fe.pointer;
          ei = ei ? ii.normalize(ei) : ii.getChartCoordinatesFromPoint(this, Fe.inverted), ii.runPointActions(ei, this);
        }
        onMouseOut() {
          const ei = this.series.chart;
          this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (ei.hoverPoints || []).forEach(function(Fe) {
            Fe.setState();
          }), ei.hoverPoints = ei.hoverPoint = null;
        }
        importEvents() {
          if (!this.hasImportedEvents) {
            const ei = this, Fe = Ti(ei.series.options.point, ei.options).events;
            ei.events = Fe, Mi(Fe, function(ii, hi) {
              Ci(ii) && Ki(ei, hi, ii);
            }), this.hasImportedEvents = !0;
          }
        }
        setState(ei, Fe) {
          const ii = this.series;
          var hi = this.state, gi = ii.options.states[ei || "normal"] || {}, Ei = ss.plotOptions[ii.type].marker && ii.options.marker;
          const ni = Ei && Ei.enabled === !1, Pi = Ei && Ei.states && Ei.states[ei || "normal"] || {}, Fi = Pi.enabled === !1, Zi = this.marker || {}, rs = ii.chart, Bi = Ei && ii.markerAttribs;
          let si = ii.halo;
          var Li;
          let Hi;
          var Di = ii.stateMarkerGraphic;
          if (ei = ei || "", !(ei === this.state && !Fe || this.selected && ei !== "select" || gi.enabled === !1 || ei && (Fi || ni && Pi.enabled === !1) || ei && Zi.states && Zi.states[ei] && Zi.states[ei].enabled === !1)) {
            if (this.state = ei, Bi && (Li = ii.markerAttribs(this, ei)), this.graphic && !this.hasMockGraphic) {
              if (hi && this.graphic.removeClass("highcharts-point-" + hi), ei && this.graphic.addClass("highcharts-point-" + ei), !rs.styledMode) {
                hi = ii.pointAttribs(this, ei), Hi = Oi(rs.options.chart.animation, gi.animation);
                const Vi = hi.opacity;
                ii.options.inactiveOtherPoints && wi(Vi) && ((this.dataLabels || []).forEach(function(ri) {
                  ri && !ri.hasClass("highcharts-data-label-hidden") && ri.animate({ opacity: Vi }, Hi);
                }), this.connector && this.connector.animate({ opacity: Vi }, Hi)), this.graphic.animate(
                  hi,
                  Hi
                );
              }
              Li && this.graphic.animate(Li, Oi(rs.options.chart.animation, Pi.animation, Ei.animation)), Di && Di.hide();
            } else
              ei && Pi && (Ei = Zi.symbol || ii.symbol, Di && Di.currentSymbol !== Ei && (Di = Di.destroy()), Li && (Di ? Di[Fe ? "animate" : "attr"]({ x: Li.x, y: Li.y }) : Ei && (ii.stateMarkerGraphic = Di = rs.renderer.symbol(Ei, Li.x, Li.y, Li.width, Li.height).add(ii.markerGroup), Di.currentSymbol = Ei)), !rs.styledMode && Di && this.state !== "inactive" && Di.attr(ii.pointAttribs(this, ei))), Di && (Di[ei && this.isInside ? "show" : "hide"](), Di.element.point = this, Di.addClass(this.getClassName(), !0));
            gi = gi.halo, Li = (Di = this.graphic || Di) && Di.visibility || "inherit", gi && gi.size && Di && Li !== "hidden" && !this.isCluster ? (si || (ii.halo = si = rs.renderer.path().add(Di.parentGroup)), si.show()[Fe ? "animate" : "attr"]({ d: this.haloPath(gi.size) }), si.attr({ class: "highcharts-halo highcharts-color-" + Oi(this.colorIndex, ii.colorIndex) + (this.className ? " " + this.className : ""), visibility: Li, zIndex: -1 }), si.point = this, rs.styledMode || si.attr(bi({ fill: this.color || ii.color, "fill-opacity": gi.opacity }, Si.filterUserAttributes(gi.attributes || {})))) : si && si.point && si.point.haloPath && si.animate({ d: si.point.haloPath(0) }, null, si.hide), Ri(this, "afterSetState", { state: ei });
          }
        }
        haloPath(ei) {
          const Fe = this.pos();
          return Fe ? this.series.chart.renderer.symbols.circle(Math.floor(Fe[0]) - ei, Fe[1] - ei, 2 * ei, 2 * ei) : [];
        }
      }
      return di;
    }), ci(oi, "Core/Pointer.js", [oi["Core/Color/Color.js"], oi["Core/Globals.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { parse: ts } = Si, { charts: Qi, noop: is } = ji, { addEvent: ss, attr: Wi, css: Ki, defined: Ui, extend: ki, find: bi, fireEvent: Ri, isNumber: Ni, isObject: fi, objectEach: Ci, offset: wi, pick: yi, splat: Ti } = qi;
      class Mi {
        constructor(ai, li) {
          this.lastValidTouch = {}, this.pinchDown = [], this.runChartClick = !1, this.eventsToUnbind = [], this.chart = ai, this.hasDragged = !1, this.options = li, this.init(ai, li);
        }
        applyInactiveState(ai) {
          let li = [], xi;
          (ai || []).forEach(function(di) {
            xi = di.series, li.push(xi), xi.linkedParent && li.push(xi.linkedParent), xi.linkedSeries && (li = li.concat(xi.linkedSeries)), xi.navigatorSeries && li.push(xi.navigatorSeries);
          }), this.chart.series.forEach(function(di) {
            li.indexOf(di) === -1 ? di.setState("inactive", !0) : di.options.inactiveOtherPoints && di.setAllPointsToState("inactive");
          });
        }
        destroy() {
          const ai = this;
          this.eventsToUnbind.forEach((li) => li()), this.eventsToUnbind = [], ji.chartCount || (Mi.unbindDocumentMouseUp && (Mi.unbindDocumentMouseUp = Mi.unbindDocumentMouseUp()), Mi.unbindDocumentTouchEnd && (Mi.unbindDocumentTouchEnd = Mi.unbindDocumentTouchEnd())), clearInterval(ai.tooltipTimeout), Ci(ai, function(li, xi) {
            ai[xi] = void 0;
          });
        }
        getSelectionMarkerAttrs(ai, li) {
          const xi = { args: { chartX: ai, chartY: li }, attrs: {}, shapeType: "rect" };
          return Ri(this, "getSelectionMarkerAttrs", xi, (di) => {
            const { chart: pi, mouseDownX: ei = 0, mouseDownY: Fe = 0, zoomHor: ii, zoomVert: hi } = this;
            di = di.attrs;
            let gi;
            di.x = pi.plotLeft, di.y = pi.plotTop, di.width = ii ? 1 : pi.plotWidth, di.height = hi ? 1 : pi.plotHeight, ii && (gi = ai - ei, di.width = Math.abs(gi), di.x = (0 < gi ? 0 : gi) + ei), hi && (gi = li - Fe, di.height = Math.abs(gi), di.y = (0 < gi ? 0 : gi) + Fe);
          }), xi;
        }
        drag(ai) {
          const li = this.chart, xi = li.options.chart;
          var di = li.plotLeft;
          const pi = li.plotTop, ei = li.plotWidth, Fe = li.plotHeight, ii = this.mouseDownX || 0, hi = this.mouseDownY || 0, gi = fi(xi.panning) ? xi.panning && xi.panning.enabled : xi.panning, Ei = xi.panKey && ai[xi.panKey + "Key"];
          let ni = ai.chartX, Pi = ai.chartY, Fi = this.selectionMarker;
          if ((!Fi || !Fi.touch) && (ni < di ? ni = di : ni > di + ei && (ni = di + ei), Pi < pi ? Pi = pi : Pi > pi + Fe && (Pi = pi + Fe), this.hasDragged = Math.sqrt(Math.pow(ii - ni, 2) + Math.pow(hi - Pi, 2)), 10 < this.hasDragged)) {
            di = li.isInsidePlot(ii - di, hi - pi, { visiblePlotOnly: !0 });
            const { shapeType: Zi, attrs: rs } = this.getSelectionMarkerAttrs(ni, Pi);
            !li.hasCartesianSeries && !li.mapView || !this.zoomX && !this.zoomY || !di || Ei || Fi || (this.selectionMarker = Fi = li.renderer[Zi](), Fi.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), li.styledMode || Fi.attr({ fill: xi.selectionMarkerFill || ts("#334eff").setOpacity(0.25).get() })), Fi && Fi.attr(rs), di && !Fi && gi && li.pan(ai, xi.panning);
          }
        }
        dragStart(ai) {
          const li = this.chart;
          li.mouseIsDown = ai.type, li.cancelClick = !1, li.mouseDownX = this.mouseDownX = ai.chartX, li.mouseDownY = this.mouseDownY = ai.chartY;
        }
        getSelectionBox(ai) {
          const li = { args: { marker: ai }, result: {} };
          return Ri(this, "getSelectionBox", li, (xi) => {
            xi.result = { x: ai.attr ? +ai.attr("x") : ai.x, y: ai.attr ? +ai.attr("y") : ai.y, width: ai.attr ? ai.attr("width") : ai.width, height: ai.attr ? ai.attr("height") : ai.height };
          }), li.result;
        }
        drop(ai) {
          const li = this, xi = this.chart, di = this.hasPinched;
          if (this.selectionMarker) {
            const {
              x: pi,
              y: ei,
              width: Fe,
              height: ii
            } = this.getSelectionBox(this.selectionMarker), hi = { originalEvent: ai, xAxis: [], yAxis: [], x: pi, y: ei, width: Fe, height: ii };
            let gi = !!xi.mapView;
            (this.hasDragged || di) && (xi.axes.forEach(function(Ei) {
              if (Ei.zoomEnabled && Ui(Ei.min) && (di || li[{ xAxis: "zoomX", yAxis: "zoomY" }[Ei.coll]]) && Ni(pi) && Ni(ei) && Ni(Fe) && Ni(ii)) {
                var ni = Ei.horiz;
                const Pi = ai.type === "touchend" ? Ei.minPixelPadding : 0, Fi = Ei.toValue((ni ? pi : ei) + Pi);
                ni = Ei.toValue((ni ? pi + Fe : ei + ii) - Pi), hi[Ei.coll].push({ axis: Ei, min: Math.min(Fi, ni), max: Math.max(Fi, ni) }), gi = !0;
              }
            }), gi && Ri(xi, "selection", hi, function(Ei) {
              xi.zoom(ki(
                Ei,
                di ? { animation: !1 } : null
              ));
            })), Ni(xi.index) && (this.selectionMarker = this.selectionMarker.destroy()), di && this.scaleGroups();
          }
          xi && Ni(xi.index) && (Ki(xi.container, { cursor: xi._cursor }), xi.cancelClick = 10 < this.hasDragged, xi.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
        }
        findNearestKDPoint(ai, li, xi) {
          let di;
          return ai.forEach(function(pi) {
            var ei = !(pi.noSharedTooltip && li) && 0 > pi.options.findNearestPointBy.indexOf("y");
            if (pi = pi.searchPoint(xi, ei), (ei = fi(pi, !0) && pi.series) && !(ei = !fi(di, !0))) {
              {
                ei = di.distX - pi.distX;
                const Fe = di.dist - pi.dist, ii = (pi.series.group && pi.series.group.zIndex) - (di.series.group && di.series.group.zIndex);
                ei = ei !== 0 && li ? ei : Fe !== 0 ? Fe : ii !== 0 ? ii : di.series.index > pi.series.index ? -1 : 1;
              }
              ei = 0 < ei;
            }
            ei && (di = pi);
          }), di;
        }
        getChartCoordinatesFromPoint(ai, li) {
          var xi = ai.series;
          const di = xi.xAxis;
          xi = xi.yAxis;
          const pi = ai.shapeArgs;
          if (di && xi) {
            let ei = yi(ai.clientX, ai.plotX), Fe = ai.plotY || 0;
            return ai.isNode && pi && Ni(pi.x) && Ni(pi.y) && (ei = pi.x, Fe = pi.y), li ? { chartX: xi.len + xi.pos - Fe, chartY: di.len + di.pos - ei } : { chartX: ei + di.pos, chartY: Fe + xi.pos };
          }
          if (pi && pi.x && pi.y)
            return { chartX: pi.x, chartY: pi.y };
        }
        getChartPosition() {
          if (this.chartPosition)
            return this.chartPosition;
          var { container: ai } = this.chart;
          const li = wi(ai);
          this.chartPosition = { left: li.left, top: li.top, scaleX: 1, scaleY: 1 };
          const xi = ai.offsetWidth;
          return ai = ai.offsetHeight, 2 < xi && 2 < ai && (this.chartPosition.scaleX = li.width / xi, this.chartPosition.scaleY = li.height / ai), this.chartPosition;
        }
        getCoordinates(ai) {
          const li = { xAxis: [], yAxis: [] };
          return this.chart.axes.forEach(function(xi) {
            li[xi.isXAxis ? "xAxis" : "yAxis"].push({ axis: xi, value: xi.toValue(ai[xi.horiz ? "chartX" : "chartY"]) });
          }), li;
        }
        getHoverData(ai, li, xi, di, pi, ei) {
          const Fe = [];
          di = !(!di || !ai);
          const ii = function(ni) {
            return ni.visible && !(!pi && ni.directTouch) && yi(ni.options.enableMouseTracking, !0);
          };
          let hi, gi = { chartX: ei ? ei.chartX : void 0, chartY: ei ? ei.chartY : void 0, shared: pi };
          Ri(this, "beforeGetHoverData", gi), hi = li && !li.stickyTracking ? [li] : xi.filter((ni) => ni.stickyTracking && (gi.filter || ii)(ni));
          const Ei = di || !ei ? ai : this.findNearestKDPoint(hi, pi, ei);
          return li = Ei && Ei.series, Ei && (pi && !li.noSharedTooltip ? (hi = xi.filter(function(ni) {
            return gi.filter ? gi.filter(ni) : ii(ni) && !ni.noSharedTooltip;
          }), hi.forEach(function(ni) {
            let Pi = bi(ni.points, function(Fi) {
              return Fi.x === Ei.x && !Fi.isNull;
            });
            fi(Pi) && (ni.boosted && ni.boost && (Pi = ni.boost.getPoint(Pi)), Fe.push(Pi));
          })) : Fe.push(Ei)), gi = { hoverPoint: Ei }, Ri(this, "afterGetHoverData", gi), { hoverPoint: gi.hoverPoint, hoverSeries: li, hoverPoints: Fe };
        }
        getPointFromEvent(ai) {
          ai = ai.target;
          let li;
          for (; ai && !li; )
            li = ai.point, ai = ai.parentNode;
          return li;
        }
        onTrackerMouseOut(ai) {
          ai = ai.relatedTarget;
          const li = this.chart.hoverSeries;
          this.isDirectTouch = !1, !li || !ai || li.stickyTracking || this.inClass(ai, "highcharts-tooltip") || this.inClass(ai, "highcharts-series-" + li.index) && this.inClass(ai, "highcharts-tracker") || li.onMouseOut();
        }
        inClass(ai, li) {
          let xi;
          for (; ai; ) {
            if (xi = Wi(ai, "class")) {
              if (xi.indexOf(li) !== -1)
                return !0;
              if (xi.indexOf("highcharts-container") !== -1)
                return !1;
            }
            ai = ai.parentElement;
          }
        }
        init(ai, li) {
          this.options = li, this.chart = ai, this.runChartClick = !(!li.chart.events || !li.chart.events.click), this.pinchDown = [], this.lastValidTouch = {}, this.setDOMEvents(), Ri(this, "afterInit");
        }
        normalize(ai, li) {
          var xi = ai.touches, di = xi ? xi.length ? xi.item(0) : yi(xi.changedTouches, ai.changedTouches)[0] : ai;
          return li || (li = this.getChartPosition()), xi = di.pageX - li.left, di = di.pageY - li.top, xi /= li.scaleX, di /= li.scaleY, ki(ai, { chartX: Math.round(xi), chartY: Math.round(di) });
        }
        onContainerClick(ai) {
          const li = this.chart, xi = li.hoverPoint;
          ai = this.normalize(ai);
          const di = li.plotLeft, pi = li.plotTop;
          li.cancelClick || (xi && this.inClass(ai.target, "highcharts-tracker") ? (Ri(xi.series, "click", ki(ai, { point: xi })), li.hoverPoint && xi.firePointEvent("click", ai)) : (ki(ai, this.getCoordinates(ai)), li.isInsidePlot(ai.chartX - di, ai.chartY - pi, { visiblePlotOnly: !0 }) && Ri(li, "click", ai)));
        }
        onContainerMouseDown(ai) {
          const li = ((ai.buttons || ai.button) & 1) === 1;
          ai = this.normalize(ai), ji.isFirefox && ai.button !== 0 && this.onContainerMouseMove(ai), (typeof ai.button > "u" || li) && (this.zoomOption(ai), li && ai.preventDefault && ai.preventDefault(), this.dragStart(ai));
        }
        onContainerMouseLeave(ai) {
          const li = Qi[yi(Mi.hoverChartIndex, -1)];
          ai = this.normalize(ai), li && ai.relatedTarget && !this.inClass(ai.relatedTarget, "highcharts-tooltip") && (li.pointer.reset(), li.pointer.chartPosition = void 0);
        }
        onContainerMouseEnter(ai) {
          delete this.chartPosition;
        }
        onContainerMouseMove(ai) {
          const li = this.chart, xi = li.tooltip;
          ai = this.normalize(ai), this.setHoverChartIndex(), (li.mouseIsDown === "mousedown" || this.touchSelect(ai)) && this.drag(ai), li.openMenu || !this.inClass(ai.target, "highcharts-tracker") && !li.isInsidePlot(ai.chartX - li.plotLeft, ai.chartY - li.plotTop, { visiblePlotOnly: !0 }) || xi && xi.shouldStickOnContact(ai) || (this.inClass(ai.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(ai));
        }
        onDocumentTouchEnd(ai) {
          const li = Qi[yi(Mi.hoverChartIndex, -1)];
          li && li.pointer.drop(ai);
        }
        onContainerTouchMove(ai) {
          this.touchSelect(ai) ? this.onContainerMouseMove(ai) : this.touch(ai);
        }
        onContainerTouchStart(ai) {
          this.touchSelect(ai) ? this.onContainerMouseDown(ai) : (this.zoomOption(ai), this.touch(ai, !0));
        }
        onDocumentMouseMove(ai) {
          const li = this.chart, xi = li.tooltip, di = this.chartPosition;
          ai = this.normalize(ai, di), !di || li.isInsidePlot(ai.chartX - li.plotLeft, ai.chartY - li.plotTop, { visiblePlotOnly: !0 }) || xi && xi.shouldStickOnContact(ai) || this.inClass(ai.target, "highcharts-tracker") || this.reset();
        }
        onDocumentMouseUp(ai) {
          const li = Qi[yi(Mi.hoverChartIndex, -1)];
          li && li.pointer.drop(ai);
        }
        pinch(ai) {
          const li = this, xi = li.chart, di = li.pinchDown, pi = ai.touches || [], ei = pi.length, Fe = li.lastValidTouch, ii = li.hasZoom, hi = {}, gi = ei === 1 && (li.inClass(ai.target, "highcharts-tracker") && xi.runTrackerClick || li.runChartClick), Ei = {};
          var ni = li.chart.tooltip;
          ni = ei === 1 && yi(ni && ni.options.followTouchMove, !0);
          let Pi = li.selectionMarker;
          1 < ei ? li.initiated = !0 : ni && (li.initiated = !1), ii && li.initiated && !gi && ai.cancelable !== !1 && ai.preventDefault(), [].map.call(pi, function(Fi) {
            return li.normalize(Fi);
          }), ai.type === "touchstart" ? ([].forEach.call(pi, function(Fi, Zi) {
            di[Zi] = { chartX: Fi.chartX, chartY: Fi.chartY };
          }), Fe.x = [di[0].chartX, di[1] && di[1].chartX], Fe.y = [di[0].chartY, di[1] && di[1].chartY], xi.axes.forEach(function(Fi) {
            if (Fi.zoomEnabled) {
              const Zi = xi.bounds[Fi.horiz ? "h" : "v"], rs = Fi.minPixelPadding, Bi = Fi.toPixels(Math.min(yi(Fi.options.min, Fi.dataMin), Fi.dataMin)), si = Fi.toPixels(Math.max(yi(Fi.options.max, Fi.dataMax), Fi.dataMax)), Li = Math.max(Bi, si);
              Zi.min = Math.min(Fi.pos, Math.min(Bi, si) - rs), Zi.max = Math.max(Fi.pos + Fi.len, Li + rs);
            }
          }), li.res = !0) : ni ? this.runPointActions(li.normalize(ai)) : di.length && (Ri(xi, "touchpan", { originalEvent: ai }, () => {
            Pi || (li.selectionMarker = Pi = ki({ destroy: is, touch: !0 }, xi.plotBox)), li.pinchTranslate(di, pi, hi, Pi, Ei, Fe), li.hasPinched = ii, li.scaleGroups(hi, Ei);
          }), li.res && (li.res = !1, this.reset(
            !1,
            0
          )));
        }
        pinchTranslate(ai, li, xi, di, pi, ei) {
          this.zoomHor && this.pinchTranslateDirection(!0, ai, li, xi, di, pi, ei), this.zoomVert && this.pinchTranslateDirection(!1, ai, li, xi, di, pi, ei);
        }
        pinchTranslateDirection(ai, li, xi, di, pi, ei, Fe, ii) {
          const hi = this.chart, gi = ai ? "x" : "y", Ei = ai ? "X" : "Y", ni = "chart" + Ei, Pi = ai ? "width" : "height", Fi = hi["plot" + (ai ? "Left" : "Top")], Zi = hi.inverted, rs = hi.bounds[ai ? "h" : "v"], Bi = li.length === 1, si = li[0][ni], Li = !Bi && li[1][ni];
          li = function() {
            typeof mi == "number" && 20 < Math.abs(si - Li) && (Vi = ii || Math.abs(ri - mi) / Math.abs(si - Li)), Di = (Fi - ri) / Vi + si, Hi = hi["plot" + (ai ? "Width" : "Height")] / Vi;
          };
          let Hi, Di, Vi = ii || 1, ri = xi[0][ni], mi = !Bi && xi[1][ni], vi;
          li(), xi = Di, xi < rs.min ? (xi = rs.min, vi = !0) : xi + Hi > rs.max && (xi = rs.max - Hi, vi = !0), vi ? (ri -= 0.8 * (ri - Fe[gi][0]), typeof mi == "number" && (mi -= 0.8 * (mi - Fe[gi][1])), li()) : Fe[gi] = [ri, mi], Zi || (ei[gi] = Di - Fi, ei[Pi] = Hi), ei = Zi ? 1 / Vi : Vi, pi[Pi] = Hi, pi[gi] = xi, di[Zi ? ai ? "scaleY" : "scaleX" : "scale" + Ei] = Vi, di["translate" + Ei] = ei * Fi + (ri - ei * si);
        }
        reset(ai, li) {
          const xi = this.chart, di = xi.hoverSeries, pi = xi.hoverPoint, ei = xi.hoverPoints, Fe = xi.tooltip, ii = Fe && Fe.shared ? ei : pi;
          ai && ii && Ti(ii).forEach(function(hi) {
            hi.series.isCartesian && typeof hi.plotX > "u" && (ai = !1);
          }), ai ? Fe && ii && Ti(ii).length && (Fe.refresh(ii), Fe.shared && ei ? ei.forEach(function(hi) {
            hi.setState(hi.state, !0), hi.series.isCartesian && (hi.series.xAxis.crosshair && hi.series.xAxis.drawCrosshair(null, hi), hi.series.yAxis.crosshair && hi.series.yAxis.drawCrosshair(null, hi));
          }) : pi && (pi.setState(pi.state, !0), xi.axes.forEach(function(hi) {
            hi.crosshair && pi.series[hi.coll] === hi && hi.drawCrosshair(null, pi);
          }))) : (pi && pi.onMouseOut(), ei && ei.forEach(function(hi) {
            hi.setState();
          }), di && di.onMouseOut(), Fe && Fe.hide(li), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), xi.axes.forEach(function(hi) {
            hi.hideCrosshair();
          }), this.hoverX = xi.hoverPoints = xi.hoverPoint = null);
        }
        runPointActions(ai, li, xi) {
          const di = this.chart, pi = di.tooltip && di.tooltip.options.enabled ? di.tooltip : void 0, ei = pi ? pi.shared : !1;
          let Fe = li || di.hoverPoint, ii = Fe && Fe.series || di.hoverSeries;
          li = this.getHoverData(Fe, ii, di.series, (!ai || ai.type !== "touchmove") && (!!li || ii && ii.directTouch && this.isDirectTouch), ei, ai), Fe = li.hoverPoint, ii = li.hoverSeries;
          const hi = li.hoverPoints;
          li = ii && ii.tooltipOptions.followPointer && !ii.tooltipOptions.split;
          const gi = ei && ii && !ii.noSharedTooltip;
          if (Fe && (xi || Fe !== di.hoverPoint || pi && pi.isHidden)) {
            if ((di.hoverPoints || []).forEach(function(Ei) {
              hi.indexOf(Ei) === -1 && Ei.setState();
            }), di.hoverSeries !== ii && ii.onMouseOver(), this.applyInactiveState(hi), (hi || []).forEach(function(Ei) {
              Ei.setState("hover");
            }), di.hoverPoint && di.hoverPoint.firePointEvent("mouseOut"), !Fe.series)
              return;
            di.hoverPoints = hi, di.hoverPoint = Fe, Fe.firePointEvent("mouseOver", void 0, () => {
              pi && Fe && pi.refresh(gi ? hi : Fe, ai);
            });
          } else
            li && pi && !pi.isHidden && (xi = pi.getAnchor([{}], ai), di.isInsidePlot(xi[0], xi[1], { visiblePlotOnly: !0 }) && pi.updatePosition({
              plotX: xi[0],
              plotY: xi[1]
            }));
          this.unDocMouseMove || (this.unDocMouseMove = ss(di.container.ownerDocument, "mousemove", function(Ei) {
            const ni = Qi[Mi.hoverChartIndex];
            ni && ni.pointer.onDocumentMouseMove(Ei);
          }), this.eventsToUnbind.push(this.unDocMouseMove)), di.axes.forEach(function(Ei) {
            const ni = yi((Ei.crosshair || {}).snap, !0);
            let Pi;
            ni && ((Pi = di.hoverPoint) && Pi.series[Ei.coll] === Ei || (Pi = bi(hi, (Fi) => Fi.series && Fi.series[Ei.coll] === Ei))), Pi || !ni ? Ei.drawCrosshair(ai, Pi) : Ei.hideCrosshair();
          });
        }
        scaleGroups(ai, li) {
          const xi = this.chart;
          xi.series.forEach(function(di) {
            const pi = ai || di.getPlotBox();
            di.group && (di.xAxis && di.xAxis.zoomEnabled || xi.mapView) && (di.group.attr(pi), di.markerGroup && (di.markerGroup.attr(pi), di.markerGroup.clip(li ? xi.clipRect : null)), di.dataLabelsGroup && di.dataLabelsGroup.attr(pi));
          }), xi.clipRect.attr(li || xi.clipBox);
        }
        setDOMEvents() {
          const ai = this.chart.container, li = ai.ownerDocument;
          ai.onmousedown = this.onContainerMouseDown.bind(this), ai.onmousemove = this.onContainerMouseMove.bind(this), ai.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(ss(ai, "mouseenter", this.onContainerMouseEnter.bind(this))), this.eventsToUnbind.push(ss(ai, "mouseleave", this.onContainerMouseLeave.bind(this))), Mi.unbindDocumentMouseUp || (Mi.unbindDocumentMouseUp = ss(li, "mouseup", this.onDocumentMouseUp.bind(this)));
          let xi = this.chart.renderTo.parentElement;
          for (; xi && xi.tagName !== "BODY"; )
            this.eventsToUnbind.push(ss(xi, "scroll", () => {
              delete this.chartPosition;
            })), xi = xi.parentElement;
          ji.hasTouch && (this.eventsToUnbind.push(ss(ai, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(ss(
            ai,
            "touchmove",
            this.onContainerTouchMove.bind(this),
            { passive: !1 }
          )), Mi.unbindDocumentTouchEnd || (Mi.unbindDocumentTouchEnd = ss(li, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })));
        }
        setHoverChartIndex() {
          const ai = this.chart, li = ji.charts[yi(Mi.hoverChartIndex, -1)];
          li && li !== ai && li.pointer.onContainerMouseLeave({ relatedTarget: ai.container }), li && li.mouseIsDown || (Mi.hoverChartIndex = ai.index);
        }
        touch(ai, li) {
          const xi = this.chart;
          let di;
          this.setHoverChartIndex(), ai.touches.length === 1 ? (ai = this.normalize(ai), xi.isInsidePlot(ai.chartX - xi.plotLeft, ai.chartY - xi.plotTop, { visiblePlotOnly: !0 }) && !xi.openMenu ? (li && this.runPointActions(ai), ai.type === "touchmove" && (li = this.pinchDown, di = li[0] ? 4 <= Math.sqrt(Math.pow(li[0].chartX - ai.chartX, 2) + Math.pow(li[0].chartY - ai.chartY, 2)) : !1), yi(di, !0) && this.pinch(ai)) : li && this.reset()) : ai.touches.length === 2 && this.pinch(ai);
        }
        touchSelect(ai) {
          return !(!this.chart.zooming.singleTouch || !ai.touches || ai.touches.length !== 1);
        }
        zoomOption(ai) {
          const li = this.chart, xi = li.inverted;
          var di = li.zooming.type || "";
          /touch/.test(ai.type) && (di = yi(li.zooming.pinchType, di)), this.zoomX = ai = /x/.test(di), this.zoomY = di = /y/.test(di), this.zoomHor = ai && !xi || di && xi, this.zoomVert = di && !xi || ai && xi, this.hasZoom = ai || di;
        }
      }
      return function(Oi) {
        const ai = [], li = [];
        Oi.compose = function(xi) {
          qi.pushUnique(li, xi) && ss(xi, "beforeRender", function() {
            this.pointer = new Oi(this, this.options);
          });
        }, Oi.dissolve = function() {
          for (let xi = 0, di = ai.length; xi < di; ++xi)
            ai[xi]();
          ai.length = 0;
        };
      }(Mi || (Mi = {})), Mi;
    }), ci(
      oi,
      "Core/Legend/Legend.js",
      [oi["Core/Animation/AnimationUtilities.js"], oi["Core/Templating.js"], oi["Core/Globals.js"], oi["Core/Series/Point.js"], oi["Core/Renderer/RendererUtilities.js"], oi["Core/Utilities.js"]],
      function(Si, ji, qi, ts, Qi, is) {
        const { animObject: ss, setAnimation: Wi } = Si, { format: Ki } = ji, { marginNames: Ui } = qi, { distribute: ki } = Qi, { addEvent: bi, createElement: Ri, css: Ni, defined: fi, discardElement: Ci, find: wi, fireEvent: yi, isNumber: Ti, merge: Mi, pick: Oi, relativeLength: ai, stableSort: li, syncTimeout: xi } = is;
        class di {
          constructor(ei, Fe) {
            this.allItems = [], this.contentGroup = this.box = void 0, this.display = !1, this.group = void 0, this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0, this.options = void 0, this.padding = 0, this.pages = [], this.proximate = !1, this.scrollGroup = void 0, this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0, this.chart = ei, this.init(ei, Fe);
          }
          init(ei, Fe) {
            this.chart = ei, this.setOptions(Fe), Fe.enabled && (this.render(), bi(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            }), bi(this.chart, "render", () => {
              this.proximate && (this.proximatePositions(), this.positionItems());
            }));
          }
          setOptions(ei) {
            const Fe = Oi(ei.padding, 8);
            this.options = ei, this.chart.styledMode || (this.itemStyle = ei.itemStyle, this.itemHiddenStyle = Mi(this.itemStyle, ei.itemHiddenStyle)), this.itemMarginTop = ei.itemMarginTop, this.itemMarginBottom = ei.itemMarginBottom, this.padding = Fe, this.initialItemY = Fe - 5, this.symbolWidth = Oi(ei.symbolWidth, 16), this.pages = [], this.proximate = ei.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
          }
          update(ei, Fe) {
            const ii = this.chart;
            this.setOptions(Mi(!0, this.options, ei)), this.destroy(), ii.isDirtyLegend = ii.isDirtyBox = !0, Oi(Fe, !0) && ii.redraw(), yi(this, "afterUpdate");
          }
          colorizeItem(ei, Fe) {
            const { group: ii, label: hi, line: gi, symbol: Ei } = ei.legendItem || {};
            if (ii && ii[Fe ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
              const { itemHiddenStyle: ni } = this, Pi = ni.color, Fi = Fe && ei.color || Pi, Zi = ei.options && ei.options.marker;
              let rs = { fill: Fi };
              hi == null || hi.css(Mi(Fe ? this.itemStyle : ni)), gi == null || gi.attr({ stroke: Fi }), Ei && (Zi && Ei.isMarker && (rs = ei.pointAttribs(), Fe || (rs.stroke = rs.fill = Pi)), Ei.attr(rs));
            }
            yi(this, "afterColorizeItem", { item: ei, visible: Fe });
          }
          positionItems() {
            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
          }
          positionItem(ei) {
            const { group: Fe, x: ii = 0, y: hi = 0 } = ei.legendItem || {};
            var gi = this.options, Ei = gi.symbolPadding;
            const ni = !gi.rtl;
            gi = ei.checkbox, Fe && Fe.element && (Ei = { translateX: ni ? ii : this.legendWidth - ii - 2 * Ei - 4, translateY: hi }, Fe[fi(Fe.translateY) ? "animate" : "attr"](Ei, void 0, () => {
              yi(this, "afterPositionItem", { item: ei });
            })), gi && (gi.x = ii, gi.y = hi);
          }
          destroyItem(ei) {
            const Fe = ei.checkbox, ii = ei.legendItem || {};
            for (const hi of ["group", "label", "line", "symbol"])
              ii[hi] && (ii[hi] = ii[hi].destroy());
            Fe && Ci(Fe), ei.legendItem = void 0;
          }
          destroy() {
            for (const ei of this.getAllItems())
              this.destroyItem(ei);
            for (const ei of "clipRect up down pager nav box title group".split(" "))
              this[ei] && (this[ei] = this[ei].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            const ei = this.group && this.group.alignAttr, Fe = this.clipHeight || this.legendHeight, ii = this.titleHeight;
            let hi;
            ei && (hi = ei.translateY, this.allItems.forEach(function(gi) {
              const Ei = gi.checkbox;
              let ni;
              Ei && (ni = hi + ii + Ei.y + (this.scrollOffset || 0) + 3, Ni(Ei, { left: ei.translateX + gi.checkboxOffset + Ei.x - 20 + "px", top: ni + "px", display: this.proximate || ni > hi - 6 && ni < hi + Fe - 6 ? "" : "none" }));
            }, this));
          }
          renderTitle() {
            var ei = this.options;
            const Fe = this.padding, ii = ei.title;
            let hi = 0;
            ii.text && (this.title || (this.title = this.chart.renderer.label(ii.text, Fe - 3, Fe - 4, void 0, void 0, void 0, ei.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(ii.style), this.title.add(this.group)), ii.width || this.title.css({ width: this.maxLegendWidth + "px" }), ei = this.title.getBBox(), hi = ei.height, this.offsetWidth = ei.width, this.contentGroup.attr({ translateY: hi })), this.titleHeight = hi;
          }
          setText(ei) {
            const Fe = this.options;
            ei.legendItem.label.attr({ text: Fe.labelFormat ? Ki(Fe.labelFormat, ei, this.chart) : Fe.labelFormatter.call(ei) });
          }
          renderItem(ei) {
            const Fe = ei.legendItem = ei.legendItem || {};
            var ii = this.chart, hi = ii.renderer;
            const gi = this.options, Ei = this.symbolWidth, ni = gi.symbolPadding || 0, Pi = this.itemStyle, Fi = this.itemHiddenStyle, Zi = gi.layout === "horizontal" ? Oi(gi.itemDistance, 20) : 0, rs = !gi.rtl, Bi = !ei.series, si = !Bi && ei.series.drawLegendSymbol ? ei.series : ei;
            var Li = si.options;
            const Hi = this.createCheckboxForItem && Li && Li.showCheckbox, Di = gi.useHTML, Vi = ei.options.className;
            let ri = Fe.label;
            Li = Ei + ni + Zi + (Hi ? 20 : 0), ri || (Fe.group = hi.g("legend-item").addClass("highcharts-" + si.type + "-series highcharts-color-" + ei.colorIndex + (Vi ? " " + Vi : "") + (Bi ? " highcharts-series-" + ei.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), Fe.label = ri = hi.text("", rs ? Ei + ni : -ni, this.baseline || 0, Di), ii.styledMode || ri.css(Mi(ei.visible ? Pi : Fi)), ri.attr({ align: rs ? "left" : "right", zIndex: 2 }).add(Fe.group), this.baseline || (this.fontMetrics = hi.fontMetrics(ri), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, ri.attr("y", this.baseline), this.symbolHeight = Oi(gi.symbolHeight, this.fontMetrics.f), gi.squareSymbol && (this.symbolWidth = Oi(gi.symbolWidth, Math.max(this.symbolHeight, 16)), Li = this.symbolWidth + ni + Zi + (Hi ? 20 : 0), rs && ri.attr("x", this.symbolWidth + ni))), si.drawLegendSymbol(this, ei), this.setItemEvents && this.setItemEvents(ei, ri, Di)), Hi && !ei.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(ei), this.colorizeItem(
              ei,
              ei.visible
            ), !ii.styledMode && Pi.width || ri.css({ width: (gi.itemWidth || this.widthOption || ii.spacingBox.width) - Li + "px" }), this.setText(ei), ii = ri.getBBox(), hi = this.fontMetrics && this.fontMetrics.h || 0, ei.itemWidth = ei.checkboxOffset = gi.itemWidth || Fe.labelWidth || ii.width + Li, this.maxItemWidth = Math.max(this.maxItemWidth, ei.itemWidth), this.totalItemWidth += ei.itemWidth, this.itemHeight = ei.itemHeight = Math.round(Fe.labelHeight || (ii.height > 1.5 * hi ? ii.height : hi));
          }
          layoutItem(ei) {
            var Fe = this.options;
            const ii = this.padding, hi = Fe.layout === "horizontal", gi = ei.itemHeight, Ei = this.itemMarginBottom, ni = this.itemMarginTop, Pi = hi ? Oi(Fe.itemDistance, 20) : 0, Fi = this.maxLegendWidth;
            Fe = Fe.alignColumns && this.totalItemWidth > Fi ? this.maxItemWidth : ei.itemWidth;
            const Zi = ei.legendItem || {};
            hi && this.itemX - ii + Fe > Fi && (this.itemX = ii, this.lastLineHeight && (this.itemY += ni + this.lastLineHeight + Ei), this.lastLineHeight = 0), this.lastItemY = ni + this.itemY + Ei, this.lastLineHeight = Math.max(gi, this.lastLineHeight), Zi.x = this.itemX, Zi.y = this.itemY, hi ? this.itemX += Fe : (this.itemY += ni + gi + Ei, this.lastLineHeight = gi), this.offsetWidth = this.widthOption || Math.max((hi ? this.itemX - ii - (ei.checkbox ? 0 : Pi) : Fe) + ii, this.offsetWidth);
          }
          getAllItems() {
            let ei = [];
            return this.chart.series.forEach(function(Fe) {
              const ii = Fe && Fe.options;
              Fe && Oi(ii.showInLegend, fi(ii.linkedTo) ? !1 : void 0, !0) && (ei = ei.concat((Fe.legendItem || {}).labels || (ii.legendType === "point" ? Fe.data : Fe)));
            }), yi(this, "afterGetAllItems", { allItems: ei }), ei;
          }
          getAlignment() {
            const ei = this.options;
            return this.proximate ? ei.align.charAt(0) + "tv" : ei.floating ? "" : ei.align.charAt(0) + ei.verticalAlign.charAt(0) + ei.layout.charAt(0);
          }
          adjustMargins(ei, Fe) {
            const ii = this.chart, hi = this.options, gi = this.getAlignment();
            gi && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(Ei, ni) {
              Ei.test(gi) && !fi(ei[ni]) && (ii[Ui[ni]] = Math.max(ii[Ui[ni]], ii.legend[(ni + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][ni] * hi[ni % 2 ? "x" : "y"] + Oi(hi.margin, 12) + Fe[ni] + (ii.titleOffset[ni] || 0)));
            });
          }
          proximatePositions() {
            const ei = this.chart, Fe = [], ii = this.options.align === "left";
            this.allItems.forEach(function(gi) {
              var Ei, ni = ii;
              let Pi;
              gi.yAxis && (gi.xAxis.options.reversed && (ni = !ni), gi.points && (Ei = wi(ni ? gi.points : gi.points.slice(0).reverse(), function(Fi) {
                return Ti(Fi.plotY);
              })), ni = this.itemMarginTop + gi.legendItem.label.getBBox().height + this.itemMarginBottom, Pi = gi.yAxis.top - ei.plotTop, gi.visible ? (Ei = Ei ? Ei.plotY : gi.yAxis.height, Ei += Pi - 0.3 * ni) : Ei = Pi + gi.yAxis.height, Fe.push({ target: Ei, size: ni, item: gi }));
            }, this);
            let hi;
            for (const gi of ki(Fe, ei.plotHeight))
              hi = gi.item.legendItem || {}, Ti(gi.pos) && (hi.y = ei.plotTop - ei.spacing[0] + gi.pos);
          }
          render() {
            const ei = this.chart, Fe = ei.renderer, ii = this.options, hi = this.padding;
            var gi = this.getAllItems();
            let Ei, ni = this.group, Pi = this.box;
            this.itemX = hi, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, this.widthOption = ai(ii.width, ei.spacingBox.width - hi);
            var Fi = ei.spacingBox.width - 2 * hi - ii.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (Fi /= 2), this.maxLegendWidth = this.widthOption || Fi, ni || (this.group = ni = Fe.g("legend").addClass(ii.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = Fe.g().attr({ zIndex: 1 }).add(ni), this.scrollGroup = Fe.g().add(this.contentGroup)), this.renderTitle(), li(gi, (Zi, rs) => (Zi.options && Zi.options.legendIndex || 0) - (rs.options && rs.options.legendIndex || 0)), ii.reversed && gi.reverse(), this.allItems = gi, this.display = Fi = !!gi.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, gi.forEach(this.renderItem, this), gi.forEach(this.layoutItem, this), gi = (this.widthOption || this.offsetWidth) + hi, Ei = this.lastItemY + this.lastLineHeight + this.titleHeight, Ei = this.handleOverflow(Ei), Ei += hi, Pi || (this.box = Pi = Fe.rect().addClass("highcharts-legend-box").attr({ r: ii.borderRadius }).add(ni)), ei.styledMode || Pi.attr({
              stroke: ii.borderColor,
              "stroke-width": ii.borderWidth || 0,
              fill: ii.backgroundColor || "none"
            }).shadow(ii.shadow), 0 < gi && 0 < Ei && Pi[Pi.placed ? "animate" : "attr"](Pi.crisp.call({}, { x: 0, y: 0, width: gi, height: Ei }, Pi.strokeWidth())), ni[Fi ? "show" : "hide"](), ei.styledMode && ni.getStyle("display") === "none" && (gi = Ei = 0), this.legendWidth = gi, this.legendHeight = Ei, Fi && this.align(), this.proximate || this.positionItems(), yi(this, "afterRender");
          }
          align(ei = this.chart.spacingBox) {
            const Fe = this.chart, ii = this.options;
            let hi = ei.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < Fe.titleOffset[0] ? hi += Fe.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < Fe.titleOffset[2] && (hi -= Fe.titleOffset[2]), hi !== ei.y && (ei = Mi(ei, { y: hi })), Fe.hasRendered || (this.group.placed = !1), this.group.align(Mi(ii, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : ii.verticalAlign }), !0, ei);
          }
          handleOverflow(ei) {
            const Fe = this, ii = this.chart, hi = ii.renderer, gi = this.options;
            var Ei = gi.y;
            const ni = gi.verticalAlign === "top", Pi = this.padding, Fi = gi.maxHeight, Zi = gi.navigation, rs = Oi(Zi.animation, !0), Bi = Zi.arrowSize || 12, si = this.pages, Li = this.allItems, Hi = function(Xi) {
              typeof Xi == "number" ? zi.attr({ height: Xi }) : zi && (Fe.clipRect = zi.destroy(), Fe.contentGroup.clip()), Fe.contentGroup.div && (Fe.contentGroup.div.style.clip = Xi ? "rect(" + Pi + "px,9999px," + (Pi + Xi) + "px,0)" : "auto");
            }, Di = function(Xi) {
              return Fe[Xi] = hi.circle(0, 0, 1.3 * Bi).translate(Bi / 2, Bi / 2).add(vi), ii.styledMode || Fe[Xi].attr("fill", "rgba(0,0,0,0.0001)"), Fe[Xi];
            };
            let Vi, ri, mi;
            Ei = ii.spacingBox.height + (ni ? -Ei : Ei) - Pi;
            let vi = this.nav, zi = this.clipRect;
            return gi.layout !== "horizontal" || gi.verticalAlign === "middle" || gi.floating || (Ei /= 2), Fi && (Ei = Math.min(Ei, Fi)), si.length = 0, ei && 0 < Ei && ei > Ei && Zi.enabled !== !1 ? (this.clipHeight = Vi = Math.max(Ei - 20 - this.titleHeight - Pi, 0), this.currentPage = Oi(this.currentPage, 1), this.fullHeight = ei, Li.forEach((Xi, Gi) => {
              mi = Xi.legendItem || {}, Xi = mi.y || 0;
              const Ji = Math.round(mi.label.getBBox().height);
              let es = si.length;
              (!es || Xi - si[es - 1] > Vi && (ri || Xi) !== si[es - 1]) && (si.push(ri || Xi), es++), mi.pageIx = es - 1, ri && ((Li[Gi - 1].legendItem || {}).pageIx = es - 1), Gi === Li.length - 1 && Xi + Ji - si[es - 1] > Vi && Xi > si[es - 1] && (si.push(Xi), mi.pageIx = es), Xi !== ri && (ri = Xi);
            }), zi || (zi = Fe.clipRect = hi.clipRect(0, Pi - 2, 9999, 0), Fe.contentGroup.clip(zi)), Hi(Vi), vi || (this.nav = vi = hi.g().attr({ zIndex: 1 }).add(this.group), this.up = hi.symbol("triangle", 0, 0, Bi, Bi).add(vi), Di("upTracker").on("click", function() {
              Fe.scroll(-1, rs);
            }), this.pager = hi.text("", 15, 10).addClass("highcharts-legend-navigation"), !ii.styledMode && Zi.style && this.pager.css(Zi.style), this.pager.add(vi), this.down = hi.symbol("triangle-down", 0, 0, Bi, Bi).add(vi), Di("downTracker").on("click", function() {
              Fe.scroll(1, rs);
            })), Fe.scroll(0), ei = Ei) : vi && (Hi(), this.nav = vi.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), ei;
          }
          scroll(ei, Fe) {
            const ii = this.chart, hi = this.pages, gi = hi.length, Ei = this.clipHeight, ni = this.options.navigation, Pi = this.pager, Fi = this.padding;
            let Zi = this.currentPage + ei;
            Zi > gi && (Zi = gi), 0 < Zi && (typeof Fe < "u" && Wi(Fe, ii), this.nav.attr({ translateX: Fi, translateY: Ei + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(rs) {
              rs.attr({ class: Zi === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), Pi.attr({ text: Zi + "/" + gi }), [this.down, this.downTracker].forEach(function(rs) {
              rs.attr({ x: 18 + this.pager.getBBox().width, class: Zi === gi ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }, this), ii.styledMode || (this.up.attr({ fill: Zi === 1 ? ni.inactiveColor : ni.activeColor }), this.upTracker.css({ cursor: Zi === 1 ? "default" : "pointer" }), this.down.attr({ fill: Zi === gi ? ni.inactiveColor : ni.activeColor }), this.downTracker.css({ cursor: Zi === gi ? "default" : "pointer" })), this.scrollOffset = -hi[Zi - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = Zi, this.positionCheckboxes(), ei = ss(Oi(Fe, ii.renderer.globalAnimation, !0)), xi(() => {
              yi(this, "afterScroll", { currentPage: Zi });
            }, ei.duration));
          }
          setItemEvents(ei, Fe, ii) {
            const hi = this, gi = ei.legendItem || {}, Ei = hi.chart.renderer.boxWrapper, ni = ei instanceof ts, Pi = "highcharts-legend-" + (ni ? "point" : "series") + "-active", Fi = hi.chart.styledMode;
            ii = ii ? [Fe, gi.symbol] : [gi.group];
            const Zi = (rs) => {
              hi.allItems.forEach((Bi) => {
                ei !== Bi && [Bi].concat(Bi.linkedSeries || []).forEach((si) => {
                  si.setState(rs, !ni);
                });
              });
            };
            for (const rs of ii)
              rs && rs.on("mouseover", function() {
                ei.visible && Zi("inactive"), ei.setState("hover"), ei.visible && Ei.addClass(Pi), Fi || Fe.css(hi.options.itemHoverStyle);
              }).on("mouseout", function() {
                hi.chart.styledMode || Fe.css(Mi(ei.visible ? hi.itemStyle : hi.itemHiddenStyle)), Zi(""), Ei.removeClass(Pi), ei.setState();
              }).on("click", function(Bi) {
                const si = function() {
                  ei.setVisible && ei.setVisible(), Zi(ei.visible ? "inactive" : "");
                };
                Ei.removeClass(Pi), Bi = { browserEvent: Bi }, ei.firePointEvent ? ei.firePointEvent("legendItemClick", Bi, si) : yi(ei, "legendItemClick", Bi, si);
              });
          }
          createCheckboxForItem(ei) {
            ei.checkbox = Ri("input", {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: ei.selected,
              defaultChecked: ei.selected
            }, this.options.itemCheckboxStyle, this.chart.container), bi(ei.checkbox, "click", function(Fe) {
              yi(ei.series || ei, "checkboxClick", { checked: Fe.target.checked, item: ei }, function() {
                ei.select();
              });
            });
          }
        }
        return function(pi) {
          const ei = [];
          pi.compose = function(Fe) {
            is.pushUnique(ei, Fe) && bi(Fe, "beforeMargins", function() {
              this.legend = new pi(this, this.options.legend);
            });
          };
        }(di || (di = {})), di;
      }
    ), ci(oi, "Core/Legend/LegendSymbol.js", [oi["Core/Utilities.js"]], function(Si) {
      const { extend: ji, merge: qi, pick: ts } = Si;
      var Qi;
      return function(is) {
        is.lineMarker = function(ss, Wi) {
          Wi = this.legendItem = this.legendItem || {};
          var Ki = this.options;
          const Ui = ss.symbolWidth, ki = ss.symbolHeight, bi = ki / 2, Ri = this.chart.renderer, Ni = Wi.group;
          ss = ss.baseline - Math.round(0.3 * ss.fontMetrics.b);
          let fi = {}, Ci = Ki.marker, wi = 0;
          this.chart.styledMode || (fi = { "stroke-width": Math.min(Ki.lineWidth || 0, 24) }, Ki.dashStyle ? fi.dashstyle = Ki.dashStyle : Ki.linecap !== "square" && (fi["stroke-linecap"] = "round")), Wi.line = Ri.path().addClass("highcharts-graph").attr(fi).add(Ni), fi["stroke-linecap"] && (wi = Math.min(
            Wi.line.strokeWidth(),
            Ui
          ) / 2), Ui && Wi.line.attr({ d: [["M", wi, ss], ["L", Ui - wi, ss]] }), Ci && Ci.enabled !== !1 && Ui && (Ki = Math.min(ts(Ci.radius, bi), bi), this.symbol.indexOf("url") === 0 && (Ci = qi(Ci, { width: ki, height: ki }), Ki = 0), Wi.symbol = Wi = Ri.symbol(this.symbol, Ui / 2 - Ki, ss - Ki, 2 * Ki, 2 * Ki, ji({ context: "legend" }, Ci)).addClass("highcharts-point").add(Ni), Wi.isMarker = !0);
        }, is.rectangle = function(ss, Wi) {
          Wi = Wi.legendItem || {};
          const Ki = ss.symbolHeight, Ui = ss.options.squareSymbol;
          Wi.symbol = this.chart.renderer.rect(Ui ? (ss.symbolWidth - Ki) / 2 : 0, ss.baseline - Ki + 1, Ui ? Ki : ss.symbolWidth, Ki, ts(
            ss.options.symbolRadius,
            Ki / 2
          )).addClass("highcharts-point").attr({ zIndex: 3 }).add(Wi.group);
        };
      }(Qi || (Qi = {})), Qi;
    }), ci(oi, "Core/Series/SeriesDefaults.js", [], function() {
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
          const { numberFormatter: Si } = this.series.chart;
          return typeof this.y != "number" ? "" : Si(this.y, -1);
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
    }), ci(oi, "Core/Series/SeriesRegistry.js", [oi["Core/Globals.js"], oi["Core/Defaults.js"], oi["Core/Series/Point.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts) {
      const { defaultOptions: Qi } = ji, { extendClass: is, merge: ss } = ts;
      var Wi;
      return function(Ki) {
        function Ui(ki, bi) {
          const Ri = Qi.plotOptions || {}, Ni = bi.defaultOptions, fi = bi.prototype;
          fi.type = ki, fi.pointClass || (fi.pointClass = qi), Ni && (Ri[ki] = Ni), Ki.seriesTypes[ki] = bi;
        }
        Ki.seriesTypes = Si.seriesTypes, Ki.registerSeriesType = Ui, Ki.seriesType = function(ki, bi, Ri, Ni, fi) {
          const Ci = Qi.plotOptions || {};
          return bi = bi || "", Ci[ki] = ss(Ci[bi], Ri), Ui(ki, is(Ki.seriesTypes[bi] || function() {
          }, Ni)), Ki.seriesTypes[ki].prototype.type = ki, fi && (Ki.seriesTypes[ki].prototype.pointClass = is(qi, fi)), Ki.seriesTypes[ki];
        };
      }(Wi || (Wi = {})), Wi;
    }), ci(oi, "Core/Series/Series.js", [
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Defaults.js"],
      oi["Core/Foundation.js"],
      oi["Core/Globals.js"],
      oi["Core/Legend/LegendSymbol.js"],
      oi["Core/Series/Point.js"],
      oi["Core/Series/SeriesDefaults.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Core/Renderer/SVG/SVGElement.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi, is, ss, Wi, Ki, Ui) {
      const { animObject: ki, setAnimation: bi } = Si, { defaultOptions: Ri } = ji, { registerEventOptions: Ni } = qi, { hasTouch: fi, svg: Ci, win: wi } = ts, { seriesTypes: yi } = Wi, {
        arrayMax: Ti,
        arrayMin: Mi,
        clamp: Oi,
        correctFloat: ai,
        defined: li,
        diffObjects: xi,
        erase: di,
        error: pi,
        extend: ei,
        find: Fe,
        fireEvent: ii,
        getClosestDistance: hi,
        getNestedProperty: gi,
        insertItem: Ei,
        isArray: ni,
        isNumber: Pi,
        isString: Fi,
        merge: Zi,
        objectEach: rs,
        pick: Bi,
        removeEvent: si,
        splat: Li,
        syncTimeout: Hi
      } = Ui;
      class Di {
        constructor() {
          this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
        }
        init(ri, mi) {
          ii(this, "init", { options: mi });
          const vi = this, zi = ri.series;
          this.eventsToUnbind = [], vi.chart = ri, vi.options = vi.setOptions(mi), mi = vi.options, vi.linkedSeries = [], vi.bindAxes(), ei(vi, { name: mi.name, state: "", visible: mi.visible !== !1, selected: mi.selected === !0 }), Ni(this, mi);
          const Xi = mi.events;
          (Xi && Xi.click || mi.point && mi.point.events && mi.point.events.click || mi.allowPointSelect) && (ri.runTrackerClick = !0), vi.getColor(), vi.getSymbol(), vi.parallelArrays.forEach(function(Ji) {
            vi[Ji + "Data"] || (vi[Ji + "Data"] = []);
          }), vi.isCartesian && (ri.hasCartesianSeries = !0);
          let Gi;
          zi.length && (Gi = zi[zi.length - 1]), vi._i = Bi(Gi && Gi._i, -1) + 1, vi.opacity = vi.options.opacity, ri.orderItems("series", Ei(this, zi)), mi.dataSorting && mi.dataSorting.enabled ? vi.setDataSortingOptions() : vi.points || vi.data || vi.setData(mi.data, !1), ii(
            this,
            "afterInit"
          );
        }
        is(ri) {
          return yi[ri] && this instanceof yi[ri];
        }
        bindAxes() {
          const ri = this, mi = ri.options, vi = ri.chart;
          let zi;
          ii(this, "bindAxes", null, function() {
            (ri.axisTypes || []).forEach(function(Xi) {
              vi[Xi].forEach(function(Gi) {
                zi = Gi.options, (Bi(mi[Xi], 0) === Gi.index || typeof mi[Xi] < "u" && mi[Xi] === zi.id) && (Ei(ri, Gi.series), ri[Xi] = Gi, Gi.isDirty = !0);
              }), ri[Xi] || ri.optionalAxis === Xi || pi(18, !0, vi);
            });
          }), ii(this, "afterBindAxes");
        }
        updateParallelArrays(ri, mi, vi) {
          const zi = ri.series, Xi = Pi(mi) ? function(Gi) {
            const Ji = Gi === "y" && zi.toYData ? zi.toYData(ri) : ri[Gi];
            zi[Gi + "Data"][mi] = Ji;
          } : function(Gi) {
            Array.prototype[mi].apply(zi[Gi + "Data"], vi);
          };
          zi.parallelArrays.forEach(Xi);
        }
        hasData() {
          return this.visible && typeof this.dataMax < "u" && typeof this.dataMin < "u" || this.visible && this.yData && 0 < this.yData.length;
        }
        autoIncrement(ri) {
          var mi = this.options;
          const vi = mi.pointIntervalUnit, zi = mi.relativeXValue, Xi = this.chart.time;
          let Gi = this.xIncrement, Ji;
          return Gi = Bi(Gi, mi.pointStart, 0), this.pointInterval = Ji = Bi(this.pointInterval, mi.pointInterval, 1), zi && Pi(ri) && (Ji *= ri), vi && (mi = new Xi.Date(Gi), vi === "day" ? Xi.set("Date", mi, Xi.get(
            "Date",
            mi
          ) + Ji) : vi === "month" ? Xi.set("Month", mi, Xi.get("Month", mi) + Ji) : vi === "year" && Xi.set("FullYear", mi, Xi.get("FullYear", mi) + Ji), Ji = mi.getTime() - Gi), zi && Pi(ri) ? Gi + Ji : (this.xIncrement = Gi + Ji, Gi);
        }
        setDataSortingOptions() {
          const ri = this.options;
          ei(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), li(ri.pointRange) || (ri.pointRange = 1);
        }
        setOptions(ri) {
          var mi, vi;
          const zi = this.chart;
          var Xi = zi.options.plotOptions, Gi = zi.userOptions || {};
          const Ji = Zi(ri);
          ri = zi.styledMode;
          const es = { plotOptions: Xi, userOptions: Ji };
          ii(
            this,
            "setOptions",
            es
          );
          const os = es.plotOptions[this.type];
          Gi = Gi.plotOptions || {};
          const ns = Gi.series || {}, ls = Ri.plotOptions[this.type] || {}, Ii = Gi[this.type] || {};
          return this.userOptions = es.userOptions, Xi = Zi(os, Xi.series, Ii, Ji), this.tooltipOptions = Zi(Ri.tooltip, (mi = Ri.plotOptions.series) === null || mi === void 0 ? void 0 : mi.tooltip, ls == null ? void 0 : ls.tooltip, zi.userOptions.tooltip, (vi = Gi.series) === null || vi === void 0 ? void 0 : vi.tooltip, Ii.tooltip, Ji.tooltip), this.stickyTracking = Bi(Ji.stickyTracking, Ii.stickyTracking, ns.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : Xi.stickyTracking), os.marker === null && delete Xi.marker, this.zoneAxis = Xi.zoneAxis, vi = this.zones = (Xi.zones || []).slice(), !Xi.negativeColor && !Xi.negativeFillColor || Xi.zones || (mi = { value: Xi[this.zoneAxis + "Threshold"] || Xi.threshold || 0, className: "highcharts-negative" }, ri || (mi.color = Xi.negativeColor, mi.fillColor = Xi.negativeFillColor), vi.push(mi)), vi.length && li(vi[vi.length - 1].value) && vi.push(ri ? {} : { color: this.color, fillColor: this.fillColor }), ii(this, "afterSetOptions", { options: Xi }), Xi;
        }
        getName() {
          return Bi(
            this.options.name,
            "Series " + (this.index + 1)
          );
        }
        getCyclic(ri, mi, vi) {
          const zi = this.chart, Xi = `${ri}Index`, Gi = `${ri}Counter`, Ji = (vi == null ? void 0 : vi.length) || zi.options.chart.colorCount;
          if (!mi) {
            var es = Bi(ri === "color" ? this.options.colorIndex : void 0, this[Xi]);
            li(es) || (zi.series.length || (zi[Gi] = 0), es = zi[Gi] % Ji, zi[Gi] += 1), vi && (mi = vi[es]);
          }
          typeof es < "u" && (this[Xi] = es), this[ri] = mi;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic(
            "color",
            this.options.color || Ri.plotOptions[this.type].color,
            this.chart.options.colors
          );
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
        }
        findPointIndex(ri, mi) {
          const vi = ri.id, zi = ri.x, Xi = this.points;
          var Gi = this.options.dataSorting, Ji;
          let es, os;
          if (vi)
            Gi = this.chart.get(vi), Gi instanceof is && (Ji = Gi);
          else if ((this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) && (Ji = (ns) => !ns.touched && ns.index === ri.index, Gi && Gi.matchByName ? Ji = (ns) => !ns.touched && ns.name === ri.name : this.options.relativeXValue && (Ji = (ns) => !ns.touched && ns.options.x === ri.x), Ji = Fe(Xi, Ji), !Ji))
            return;
          return Ji && (os = Ji && Ji.index, typeof os < "u" && (es = !0)), typeof os > "u" && Pi(zi) && (os = this.xData.indexOf(zi, mi)), os !== -1 && typeof os < "u" && this.cropped && (os = os >= this.cropStart ? os - this.cropStart : os), !es && Pi(os) && Xi[os] && Xi[os].touched && (os = void 0), os;
        }
        updateData(ri, mi) {
          const vi = this.options, zi = vi.dataSorting, Xi = this.points, Gi = [], Ji = this.requireSorting, es = ri.length === Xi.length;
          let os, ns, ls, Ii = !0;
          if (this.xIncrement = null, ri.forEach(function(Ai, $i) {
            var Yi = li(Ai) && this.pointClass.prototype.optionsToObject.call({ series: this }, Ai) || {};
            const _i = Yi.x;
            Yi.id || Pi(_i) ? (Yi = this.findPointIndex(Yi, ls), Yi === -1 || typeof Yi > "u" ? Gi.push(Ai) : Xi[Yi] && Ai !== vi.data[Yi] ? (Xi[Yi].update(Ai, !1, null, !1), Xi[Yi].touched = !0, Ji && (ls = Yi + 1)) : Xi[Yi] && (Xi[Yi].touched = !0), (!es || $i !== Yi || zi && zi.enabled || this.hasDerivedData) && (os = !0)) : Gi.push(Ai);
          }, this), os)
            for (ri = Xi.length; ri--; )
              (ns = Xi[ri]) && !ns.touched && ns.remove && ns.remove(!1, mi);
          else
            !es || zi && zi.enabled ? Ii = !1 : (ri.forEach(function(Ai, $i) {
              Ai === Xi[$i].y || Xi[$i].destroyed || Xi[$i].update(Ai, !1, null, !1);
            }), Gi.length = 0);
          return Xi.forEach(function(Ai) {
            Ai && (Ai.touched = !1);
          }), Ii ? (Gi.forEach(function(Ai) {
            this.addPoint(Ai, !1, null, null, !1);
          }, this), this.xIncrement === null && this.xData && this.xData.length && (this.xIncrement = Ti(this.xData), this.autoIncrement()), !0) : !1;
        }
        setData(ri, mi = !0, vi, zi) {
          var Xi;
          const Gi = this, Ji = Gi.points, es = Ji && Ji.length || 0, os = Gi.options, ns = Gi.chart, ls = os.dataSorting, Ii = Gi.xAxis, Ai = os.turboThreshold, $i = this.xData, Yi = this.yData;
          var _i = Gi.pointArrayMap;
          _i = _i && _i.length;
          const hs = os.keys;
          let as, us = 0, ps = 1, cs = null;
          if (!ns.options.chart.allowMutatingData) {
            os.data && delete Gi.options.data, Gi.userOptions.data && delete Gi.userOptions.data;
            var ds = Zi(!0, ri);
          }
          if (ri = ds || ri || [], ds = ri.length, ls && ls.enabled && (ri = this.sortData(ri)), ns.options.chart.allowMutatingData && zi !== !1 && ds && es && !Gi.cropped && !Gi.hasGroupedData && Gi.visible && !Gi.boosted && (as = this.updateData(ri, vi)), !as) {
            if (Gi.xIncrement = null, Gi.colorCounter = 0, this.parallelArrays.forEach(function(ms) {
              Gi[ms + "Data"].length = 0;
            }), Ai && ds > Ai)
              if (cs = Gi.getFirstValidPoint(ri), Pi(cs))
                for (vi = 0; vi < ds; vi++)
                  $i[vi] = this.autoIncrement(), Yi[vi] = ri[vi];
              else if (ni(cs))
                if (_i)
                  if (cs.length === _i)
                    for (vi = 0; vi < ds; vi++)
                      $i[vi] = this.autoIncrement(), Yi[vi] = ri[vi];
                  else
                    for (vi = 0; vi < ds; vi++)
                      zi = ri[vi], $i[vi] = zi[0], Yi[vi] = zi.slice(1, _i + 1);
                else if (hs && (us = hs.indexOf("x"), ps = hs.indexOf("y"), us = 0 <= us ? us : 0, ps = 0 <= ps ? ps : 1), cs.length === 1 && (ps = 0), us === ps)
                  for (vi = 0; vi < ds; vi++)
                    $i[vi] = this.autoIncrement(), Yi[vi] = ri[vi][ps];
                else
                  for (vi = 0; vi < ds; vi++)
                    zi = ri[vi], $i[vi] = zi[us], Yi[vi] = zi[ps];
              else
                pi(12, !1, ns);
            else
              for (vi = 0; vi < ds; vi++)
                zi = { series: Gi }, Gi.pointClass.prototype.applyOptions.apply(zi, [ri[vi]]), Gi.updateParallelArrays(zi, vi);
            for (Yi && Fi(Yi[0]) && pi(
              14,
              !0,
              ns
            ), Gi.data = [], Gi.options.data = Gi.userOptions.data = ri, vi = es; vi--; )
              (Xi = Ji[vi]) === null || Xi === void 0 || Xi.destroy();
            Ii && (Ii.minRange = Ii.userMinRange), Gi.isDirty = ns.isDirtyBox = !0, Gi.isDirtyData = !!Ji, vi = !1;
          }
          os.legendType === "point" && (this.processData(), this.generatePoints()), mi && ns.redraw(vi);
        }
        sortData(ri) {
          const mi = this, vi = mi.options.dataSorting.sortKey || "y", zi = function(Xi, Gi) {
            return li(Gi) && Xi.pointClass.prototype.optionsToObject.call({ series: Xi }, Gi) || {};
          };
          return ri.forEach(function(Xi, Gi) {
            ri[Gi] = zi(mi, Xi), ri[Gi].index = Gi;
          }, this), ri.concat().sort((Xi, Gi) => (Xi = gi(vi, Xi), Gi = gi(vi, Gi), Gi < Xi ? -1 : Gi > Xi ? 1 : 0)).forEach(function(Xi, Gi) {
            Xi.x = Gi;
          }, this), mi.linkedSeries && mi.linkedSeries.forEach(function(Xi) {
            const Gi = Xi.options, Ji = Gi.data;
            Gi.dataSorting && Gi.dataSorting.enabled || !Ji || (Ji.forEach(function(es, os) {
              Ji[os] = zi(Xi, es), ri[os] && (Ji[os].x = ri[os].x, Ji[os].index = os);
            }), Xi.setData(Ji, !1));
          }), ri;
        }
        getProcessedData(ri) {
          const mi = this;
          var vi = mi.xAxis, zi = mi.options;
          const Xi = zi.cropThreshold, Gi = ri || mi.getExtremesFromAll || zi.getExtremesFromAll, Ji = vi == null ? void 0 : vi.logarithmic, es = mi.isCartesian;
          let os = 0, ns;
          ri = mi.xData, zi = mi.yData;
          let ls = !1;
          const Ii = ri.length;
          if (vi) {
            var Ai = vi.getExtremes();
            ns = Ai.min, Ai = Ai.max, ls = !(!vi.categories || vi.names.length);
          }
          if (es && mi.sorted && !Gi && (!Xi || Ii > Xi || mi.forceCrop)) {
            if (ri[Ii - 1] < ns || ri[0] > Ai)
              ri = [], zi = [];
            else if (mi.yData && (ri[0] < ns || ri[Ii - 1] > Ai)) {
              var $i = this.cropData(mi.xData, mi.yData, ns, Ai);
              ri = $i.xData, zi = $i.yData, os = $i.start, $i = !0;
            }
          }
          return vi = hi([Ji ? ri.map(Ji.log2lin) : ri], () => mi.requireSorting && !ls && pi(15, !1, mi.chart)), { xData: ri, yData: zi, cropped: $i, cropStart: os, closestPointRange: vi };
        }
        processData(ri) {
          const mi = this.xAxis;
          if (this.isCartesian && !this.isDirty && !mi.isDirty && !this.yAxis.isDirty && !ri)
            return !1;
          ri = this.getProcessedData(), this.cropped = ri.cropped, this.cropStart = ri.cropStart, this.processedXData = ri.xData, this.processedYData = ri.yData, this.closestPointRange = this.basePointRange = ri.closestPointRange, ii(this, "afterProcessData");
        }
        cropData(ri, mi, vi, zi, Xi) {
          const Gi = ri.length;
          let Ji, es = 0, os = Gi;
          for (Xi = Bi(Xi, this.cropShoulder), Ji = 0; Ji < Gi; Ji++)
            if (ri[Ji] >= vi) {
              es = Math.max(0, Ji - Xi);
              break;
            }
          for (vi = Ji; vi < Gi; vi++)
            if (ri[vi] > zi) {
              os = vi + Xi;
              break;
            }
          return {
            xData: ri.slice(es, os),
            yData: mi.slice(es, os),
            start: es,
            end: os
          };
        }
        generatePoints() {
          var ri = this.options;
          const mi = this.processedData || ri.data, vi = this.processedXData, zi = this.processedYData, Xi = this.pointClass, Gi = vi.length, Ji = this.cropStart || 0, es = this.hasGroupedData, os = ri.keys, ns = [];
          ri = ri.dataGrouping && ri.dataGrouping.groupAll ? Ji : 0;
          let ls, Ii, Ai, $i = this.data;
          if (!$i && !es) {
            var Yi = [];
            Yi.length = mi.length, $i = this.data = Yi;
          }
          for (os && es && (this.options.keys = !1), Ai = 0; Ai < Gi; Ai++)
            Yi = Ji + Ai, es ? (Ii = new Xi().init(this, [vi[Ai]].concat(Li(zi[Ai]))), Ii.dataGroup = this.groupMap[ri + Ai], Ii.dataGroup.options && (Ii.options = Ii.dataGroup.options, ei(Ii, Ii.dataGroup.options), delete Ii.dataLabels)) : (Ii = $i[Yi]) || typeof mi[Yi] > "u" || ($i[Yi] = Ii = new Xi().init(this, mi[Yi], vi[Ai])), Ii && (Ii.index = es ? ri + Ai : Yi, ns[Ai] = Ii);
          if (this.options.keys = os, $i && (Gi !== (ls = $i.length) || es))
            for (Ai = 0; Ai < ls; Ai++)
              Ai !== Ji || es || (Ai += Gi), $i[Ai] && ($i[Ai].destroyElements(), $i[Ai].plotX = void 0);
          this.data = $i, this.points = ns, ii(this, "afterGeneratePoints");
        }
        getXExtremes(ri) {
          return { min: Mi(ri), max: Ti(ri) };
        }
        getExtremes(ri, mi) {
          const vi = this.xAxis;
          var zi = this.yAxis;
          const Xi = this.processedXData || this.xData, Gi = [], Ji = this.requireSorting ? this.cropShoulder : 0;
          zi = zi ? zi.positiveValuesOnly : !1;
          let es, os = 0, ns = 0, ls = 0;
          ri = ri || this.stackedYData || this.processedYData || [];
          const Ii = ri.length;
          if (vi) {
            var Ai = vi.getExtremes();
            os = Ai.min, ns = Ai.max;
          }
          for (es = 0; es < Ii; es++) {
            var $i = Xi[es];
            Ai = ri[es];
            var Yi = (Pi(Ai) || ni(Ai)) && (Ai.length || 0 < Ai || !zi);
            if ($i = mi || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !vi || (Xi[es + Ji] || $i) >= os && (Xi[es - Ji] || $i) <= ns, Yi && $i)
              if (Yi = Ai.length)
                for (; Yi--; )
                  Pi(Ai[Yi]) && (Gi[ls++] = Ai[Yi]);
              else
                Gi[ls++] = Ai;
          }
          return ri = { activeYData: Gi, dataMin: Mi(Gi), dataMax: Ti(Gi) }, ii(this, "afterGetExtremes", { dataExtremes: ri }), ri;
        }
        applyExtremes() {
          const ri = this.getExtremes();
          return this.dataMin = ri.dataMin, this.dataMax = ri.dataMax, ri;
        }
        getFirstValidPoint(ri) {
          const mi = ri.length;
          let vi = 0, zi = null;
          for (; zi === null && vi < mi; )
            zi = ri[vi], vi++;
          return zi;
        }
        translate() {
          var ri;
          this.processedXData || this.processData(), this.generatePoints();
          var mi = this.options;
          const vi = mi.stacking, zi = this.xAxis, Xi = zi.categories, Gi = this.enabledDataSorting, Ji = this.yAxis, es = this.points, os = es.length, ns = this.pointPlacementToXValue(), ls = !!ns, Ii = mi.threshold;
          mi = mi.startFromThreshold ? Ii : 0;
          let Ai, $i, Yi, _i, hs = Number.MAX_VALUE;
          for (Ai = 0; Ai < os; Ai++) {
            const as = es[Ai], us = as.x;
            let ps, cs, ds = as.y, ms = as.low;
            const fs = vi && ((ri = Ji.stacking) === null || ri === void 0 ? void 0 : ri.stacks[(this.negStacks && ds < (mi ? 0 : Ii) ? "-" : "") + this.stackKey]);
            $i = zi.translate(us, !1, !1, !1, !0, ns), as.plotX = Pi($i) ? ai(Oi($i, -1e5, 1e5)) : void 0, vi && this.visible && fs && fs[us] && (_i = this.getStackIndicator(_i, us, this.index), !as.isNull && _i.key && (ps = fs[us], cs = ps.points[_i.key]), ps && ni(cs) && (ms = cs[0], ds = cs[1], ms === mi && _i.key === fs[us].base && (ms = Bi(Pi(Ii) ? Ii : Ji.min)), Ji.positiveValuesOnly && li(ms) && 0 >= ms && (ms = void 0), as.total = as.stackTotal = Bi(ps.total), as.percentage = li(as.y) && ps.total ? as.y / ps.total * 100 : void 0, as.stackY = ds, this.irregularWidths || ps.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), as.yBottom = li(ms) ? Oi(Ji.translate(ms, !1, !0, !1, !0), -1e5, 1e5) : void 0, this.dataModify && (ds = this.dataModify.modifyValue(ds, Ai));
            let gs;
            Pi(ds) && as.plotX !== void 0 && (gs = Ji.translate(ds, !1, !0, !1, !0), gs = Pi(gs) ? Oi(gs, -1e5, 1e5) : void 0), as.plotY = gs, as.isInside = this.isPointInside(as), as.clientX = ls ? ai(zi.translate(us, !1, !1, !1, !0, ns)) : $i, as.negative = (as.y || 0) < (Ii || 0), as.category = Bi(Xi && Xi[as.x], as.x), as.isNull || as.visible === !1 || (typeof Yi < "u" && (hs = Math.min(hs, Math.abs($i - Yi))), Yi = $i), as.zone = this.zones.length ? as.getZone() : void 0, !as.graphic && this.group && Gi && (as.isNew = !0);
          }
          this.closestPointRangePx = hs, ii(this, "afterTranslate");
        }
        getValidPoints(ri, mi, vi) {
          const zi = this.chart;
          return (ri || this.points || []).filter(function(Xi) {
            const { plotX: Gi, plotY: Ji } = Xi;
            return !vi && (Xi.isNull || !Pi(Ji)) || mi && !zi.isInsidePlot(Gi, Ji, { inverted: zi.inverted }) ? !1 : Xi.visible !== !1;
          });
        }
        getClipBox() {
          const { chart: ri, xAxis: mi, yAxis: vi } = this, zi = Zi(ri.clipBox);
          return mi && mi.len !== ri.plotSizeX && (zi.width = mi.len), vi && vi.len !== ri.plotSizeY && (zi.height = vi.len), zi;
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
        }
        setClip() {
          const { chart: ri, group: mi, markerGroup: vi } = this, zi = ri.sharedClips, Xi = ri.renderer, Gi = this.getClipBox(), Ji = this.getSharedClipKey();
          let es = zi[Ji];
          es ? es.animate(Gi) : zi[Ji] = es = Xi.clipRect(Gi), mi && mi.clip(this.options.clip === !1 ? void 0 : es), vi && vi.clip();
        }
        animate(ri) {
          const { chart: mi, group: vi, markerGroup: zi } = this, Xi = mi.inverted;
          var Gi = ki(this.options.animation), Ji = [this.getSharedClipKey(), Gi.duration, Gi.easing, Gi.defer].join();
          let es = mi.sharedClips[Ji], os = mi.sharedClips[Ji + "m"];
          if (ri && vi)
            Gi = this.getClipBox(), es ? es.attr("height", Gi.height) : (Gi.width = 0, Xi && (Gi.x = mi.plotHeight), es = mi.renderer.clipRect(Gi), mi.sharedClips[Ji] = es, os = mi.renderer.clipRect({ x: -99, y: -99, width: Xi ? mi.plotWidth + 199 : 99, height: Xi ? 99 : mi.plotHeight + 199 }), mi.sharedClips[Ji + "m"] = os), vi.clip(es), zi && zi.clip(os);
          else if (es && !es.hasClass("highcharts-animating")) {
            Ji = this.getClipBox();
            const ns = Gi.step;
            zi && zi.element.childNodes.length && (Gi.step = function(ls, Ii) {
              ns && ns.apply(Ii, arguments), Ii.prop === "width" && os && os.element && os.attr(Xi ? "height" : "width", ls + 99);
            }), es.addClass("highcharts-animating").animate(Ji, Gi);
          }
        }
        afterAnimate() {
          this.setClip(), rs(this.chart.sharedClips, (ri, mi, vi) => {
            ri && !this.chart.container.querySelector(`[clip-path="url(#${ri.id})"]`) && (ri.destroy(), delete vi[mi]);
          }), this.finishedAnimating = !0, ii(this, "afterAnimate");
        }
        drawPoints(ri = this.points) {
          const mi = this.chart, vi = mi.styledMode, { colorAxis: zi, options: Xi } = this, Gi = Xi.marker, Ji = this[this.specialGroup || "markerGroup"], es = this.xAxis, os = Bi(Gi.enabled, !es || es.isRadial ? !0 : null, this.closestPointRangePx >= Gi.enabledThreshold * Gi.radius);
          let ns, ls, Ii, Ai, $i, Yi;
          if (Gi.enabled !== !1 || this._hasPointMarkers)
            for (ns = 0; ns < ri.length; ns++) {
              ls = ri[ns], Ai = (Ii = ls.graphic) ? "animate" : "attr";
              var _i = ls.marker || {};
              if ($i = !!ls.marker, (os && typeof _i.enabled > "u" || _i.enabled) && !ls.isNull && ls.visible !== !1) {
                const hs = Bi(_i.symbol, this.symbol, "rect");
                Yi = this.markerAttribs(ls, ls.selected && "select"), this.enabledDataSorting && (ls.startXPos = es.reversed ? -(Yi.width || 0) : es.width);
                const as = ls.isInside !== !1;
                !Ii && as && (0 < (Yi.width || 0) || ls.hasImage) && (ls.graphic = Ii = mi.renderer.symbol(hs, Yi.x, Yi.y, Yi.width, Yi.height, $i ? _i : Gi).add(Ji), this.enabledDataSorting && mi.hasRendered && (Ii.attr({ x: ls.startXPos }), Ai = "animate")), Ii && Ai === "animate" && Ii[as ? "show" : "hide"](as).animate(Yi), Ii && (_i = this.pointAttribs(ls, vi || !ls.selected ? void 0 : "select"), vi ? zi && Ii.css({ fill: _i.fill }) : Ii[Ai](_i)), Ii && Ii.addClass(ls.getClassName(), !0);
              } else
                Ii && (ls.graphic = Ii.destroy());
            }
        }
        markerAttribs(ri, mi) {
          const vi = this.options;
          var zi = vi.marker;
          const Xi = ri.marker || {}, Gi = Xi.symbol || zi.symbol, Ji = {};
          let es = Bi(Xi.radius, zi && zi.radius);
          return mi && (zi = zi.states[mi], mi = Xi.states && Xi.states[mi], es = Bi(mi && mi.radius, zi && zi.radius, es && es + (zi && zi.radiusPlus || 0))), ri.hasImage = Gi && Gi.indexOf("url") === 0, ri.hasImage && (es = 0), ri = ri.pos(), Pi(es) && ri && (Ji.x = ri[0] - es, Ji.y = ri[1] - es, vi.crisp && (Ji.x = Math.floor(Ji.x))), es && (Ji.width = Ji.height = 2 * es), Ji;
        }
        pointAttribs(ri, mi) {
          var vi = this.options.marker, zi = ri && ri.options;
          const Xi = zi && zi.marker || {};
          var Gi = zi && zi.color, Ji = ri && ri.color;
          const es = ri && ri.zone && ri.zone.color;
          let os = this.color;
          return ri = Bi(Xi.lineWidth, vi.lineWidth), zi = 1, os = Gi || es || Ji || os, Gi = Xi.fillColor || vi.fillColor || os, Ji = Xi.lineColor || vi.lineColor || os, mi = mi || "normal", vi = vi.states[mi] || {}, mi = Xi.states && Xi.states[mi] || {}, ri = Bi(mi.lineWidth, vi.lineWidth, ri + Bi(mi.lineWidthPlus, vi.lineWidthPlus, 0)), Gi = mi.fillColor || vi.fillColor || Gi, Ji = mi.lineColor || vi.lineColor || Ji, zi = Bi(mi.opacity, vi.opacity, zi), { stroke: Ji, "stroke-width": ri, fill: Gi, opacity: zi };
        }
        destroy(ri) {
          const mi = this, vi = mi.chart, zi = /AppleWebKit\/533/.test(wi.navigator.userAgent), Xi = mi.data || [];
          let Gi, Ji, es, os;
          for (ii(mi, "destroy", { keepEventsForUpdate: ri }), this.removeEvents(ri), (mi.axisTypes || []).forEach(function(ns) {
            (os = mi[ns]) && os.series && (di(os.series, mi), os.isDirty = os.forceRedraw = !0);
          }), mi.legendItem && mi.chart.legend.destroyItem(mi), Ji = Xi.length; Ji--; )
            (es = Xi[Ji]) && es.destroy && es.destroy();
          mi.clips && mi.clips.forEach((ns) => ns.destroy()), Ui.clearTimeout(mi.animationTimeout), rs(mi, function(ns, ls) {
            ns instanceof Ki && !ns.survive && (Gi = zi && ls === "group" ? "hide" : "destroy", ns[Gi]());
          }), vi.hoverSeries === mi && (vi.hoverSeries = void 0), di(vi.series, mi), vi.orderItems("series"), rs(mi, function(ns, ls) {
            ri && ls === "hcEvents" || delete mi[ls];
          });
        }
        applyZones() {
          const ri = this, mi = this.chart, vi = mi.renderer, zi = this.zones, Xi = this.clips || [], Gi = this.graph, Ji = this.area, es = Math.max(mi.plotWidth, mi.plotHeight), os = this[(this.zoneAxis || "y") + "Axis"], ns = mi.inverted;
          let ls, Ii, Ai, $i, Yi, _i, hs, as, us, ps, cs, ds = !1;
          zi.length && (Gi || Ji) && os && typeof os.min < "u" ? (Yi = os.reversed, _i = os.horiz, Gi && !this.showLine && Gi.hide(), Ji && Ji.hide(), $i = os.getExtremes(), zi.forEach(function(ms, fs) {
            ls = Yi ? _i ? mi.plotWidth : 0 : _i ? 0 : os.toPixels($i.min) || 0, ls = Oi(Bi(Ii, ls), 0, es), Ii = Oi(Math.round(os.toPixels(Bi(ms.value, $i.max), !0) || 0), 0, es), ds && (ls = Ii = os.toPixels($i.max)), hs = Math.abs(ls - Ii), as = Math.min(ls, Ii), us = Math.max(ls, Ii), os.isXAxis ? (Ai = { x: ns ? us : as, y: 0, width: hs, height: es }, _i || (Ai.x = mi.plotHeight - Ai.x)) : (Ai = { x: 0, y: ns ? us : as, width: es, height: hs }, _i && (Ai.y = mi.plotWidth - Ai.y)), Xi[fs] ? Xi[fs].animate(Ai) : Xi[fs] = vi.clipRect(Ai), ps = ri["zone-area-" + fs], cs = ri["zone-graph-" + fs], Gi && cs && cs.clip(Xi[fs]), Ji && ps && ps.clip(Xi[fs]), ds = ms.value > $i.max, ri.resetZones && Ii === 0 && (Ii = void 0);
          }), this.clips = Xi) : ri.visible && (Gi && Gi.show(), Ji && Ji.show());
        }
        plotGroup(ri, mi, vi, zi, Xi) {
          let Gi = this[ri];
          const Ji = !Gi;
          return vi = { visibility: vi, zIndex: zi || 0.1 }, typeof this.opacity > "u" || this.chart.styledMode || this.state === "inactive" || (vi.opacity = this.opacity), Ji && (this[ri] = Gi = this.chart.renderer.g().add(Xi)), Gi.addClass("highcharts-" + mi + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (li(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (Gi.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), Gi.attr(vi)[Ji ? "attr" : "animate"](this.getPlotBox(mi)), Gi;
        }
        getPlotBox(ri) {
          let mi = this.xAxis, vi = this.yAxis;
          const zi = this.chart;
          return ri = zi.inverted && !zi.polar && mi && this.invertible !== !1 && ri === "series", zi.inverted && (mi = vi, vi = this.xAxis), { translateX: mi ? mi.left : zi.plotLeft, translateY: vi ? vi.top : zi.plotTop, rotation: ri ? 90 : 0, rotationOriginX: ri ? (mi.len - vi.len) / 2 : 0, rotationOriginY: ri ? (mi.len + vi.len) / 2 : 0, scaleX: ri ? -1 : 1, scaleY: 1 };
        }
        removeEvents(ri) {
          ri || si(this), this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(mi) {
            mi();
          }), this.eventsToUnbind.length = 0);
        }
        render() {
          const ri = this;
          var mi = ri.chart;
          const vi = ri.options, zi = ki(vi.animation), Xi = ri.visible ? "inherit" : "hidden", Gi = vi.zIndex, Ji = ri.hasRendered;
          mi = mi.seriesGroup;
          let es = ri.finishedAnimating ? 0 : zi.duration;
          ii(this, "render"), ri.plotGroup("group", "series", Xi, Gi, mi), ri.markerGroup = ri.plotGroup("markerGroup", "markers", Xi, Gi, mi), vi.clip !== !1 && ri.setClip(), ri.animate && es && ri.animate(!0), ri.drawGraph && (ri.drawGraph(), ri.applyZones()), ri.visible && ri.drawPoints(), ri.drawDataLabels && ri.drawDataLabels(), ri.redrawPoints && ri.redrawPoints(), ri.drawTracker && vi.enableMouseTracking && ri.drawTracker(), ri.animate && es && ri.animate(), Ji || (es && zi.defer && (es += zi.defer), ri.animationTimeout = Hi(function() {
            ri.afterAnimate();
          }, es || 0)), ri.isDirty = !1, ri.hasRendered = !0, ii(ri, "afterRender");
        }
        redraw() {
          const ri = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), ri && delete this.kdTree;
        }
        searchPoint(ri, mi) {
          const vi = this.xAxis, zi = this.yAxis, Xi = this.chart.inverted;
          return this.searchKDTree({ clientX: Xi ? vi.len - ri.chartY + vi.pos : ri.chartX - vi.pos, plotY: Xi ? zi.len - ri.chartX + zi.pos : ri.chartY - zi.pos }, mi, ri);
        }
        buildKDTree(ri) {
          function mi(Xi, Gi, Ji) {
            var es = Xi && Xi.length;
            let os;
            if (es)
              return os = vi.kdAxisArray[Gi % Ji], Xi.sort(function(ns, ls) {
                return ns[os] - ls[os];
              }), es = Math.floor(es / 2), { point: Xi[es], left: mi(Xi.slice(0, es), Gi + 1, Ji), right: mi(Xi.slice(es + 1), Gi + 1, Ji) };
          }
          this.buildingKdTree = !0;
          const vi = this, zi = -1 < vi.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          delete vi.kdTree, Hi(function() {
            vi.kdTree = mi(vi.getValidPoints(null, !vi.directTouch), zi, zi), vi.buildingKdTree = !1;
          }, vi.options.kdNow || ri && ri.type === "touchstart" ? 0 : 1);
        }
        searchKDTree(ri, mi, vi) {
          function zi(os, ns, ls, Ii) {
            const Ai = ns.point;
            var $i = Xi.kdAxisArray[ls % Ii];
            let Yi = Ai;
            var _i = li(os[Gi]) && li(Ai[Gi]) ? Math.pow(os[Gi] - Ai[Gi], 2) : null, hs = li(os[Ji]) && li(Ai[Ji]) ? Math.pow(os[Ji] - Ai[Ji], 2) : null;
            return hs = (_i || 0) + (hs || 0), Ai.dist = li(hs) ? Math.sqrt(hs) : Number.MAX_VALUE, Ai.distX = li(_i) ? Math.sqrt(_i) : Number.MAX_VALUE, $i = os[$i] - Ai[$i], hs = 0 > $i ? "left" : "right", _i = 0 > $i ? "right" : "left", ns[hs] && (hs = zi(os, ns[hs], ls + 1, Ii), Yi = hs[es] < Yi[es] ? hs : Ai), ns[_i] && Math.sqrt($i * $i) < Yi[es] && (os = zi(os, ns[_i], ls + 1, Ii), Yi = os[es] < Yi[es] ? os : Yi), Yi;
          }
          const Xi = this, Gi = this.kdAxisArray[0], Ji = this.kdAxisArray[1], es = mi ? "distX" : "dist";
          if (mi = -1 < Xi.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(vi), this.kdTree)
            return zi(
              ri,
              this.kdTree,
              mi,
              mi
            );
        }
        pointPlacementToXValue() {
          const { options: { pointPlacement: ri, pointRange: mi }, xAxis: vi } = this;
          let zi = ri;
          return zi === "between" && (zi = vi.reversed ? -0.5 : 0.5), Pi(zi) ? zi * (mi || vi.pointRange) : 0;
        }
        isPointInside(ri) {
          const { chart: mi, xAxis: vi, yAxis: zi } = this;
          return typeof ri.plotY < "u" && typeof ri.plotX < "u" && 0 <= ri.plotY && ri.plotY <= (zi ? zi.len : mi.plotHeight) && 0 <= ri.plotX && ri.plotX <= (vi ? vi.len : mi.plotWidth);
        }
        drawTracker() {
          const ri = this, mi = ri.options, vi = mi.trackByArea, zi = [].concat(vi ? ri.areaPath : ri.graphPath), Xi = ri.chart, Gi = Xi.pointer, Ji = Xi.renderer, es = Xi.options.tooltip.snap, os = ri.tracker, ns = function(Ii) {
            mi.enableMouseTracking && Xi.hoverSeries !== ri && ri.onMouseOver();
          }, ls = "rgba(192,192,192," + (Ci ? 1e-4 : 2e-3) + ")";
          os ? os.attr({ d: zi }) : ri.graph && (ri.tracker = Ji.path(zi).attr({ visibility: ri.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(vi ? "highcharts-tracker-area" : "highcharts-tracker-line").add(ri.group), Xi.styledMode || ri.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: ls, fill: vi ? ls : "none", "stroke-width": ri.graph.strokeWidth() + (vi ? 0 : 2 * es) }), [
            ri.tracker,
            ri.markerGroup,
            ri.dataLabelsGroup
          ].forEach(function(Ii) {
            Ii && (Ii.addClass("highcharts-tracker").on("mouseover", ns).on("mouseout", function(Ai) {
              Gi.onTrackerMouseOut(Ai);
            }), mi.cursor && !Xi.styledMode && Ii.css({ cursor: mi.cursor }), fi) && Ii.on("touchstart", ns);
          })), ii(this, "afterDrawTracker");
        }
        addPoint(ri, mi, vi, zi, Xi) {
          const Gi = this.options, Ji = this.data, es = this.chart;
          var os = this.xAxis;
          os = os && os.hasNames && os.names;
          const ns = Gi.data, ls = this.xData;
          let Ii, Ai;
          mi = Bi(mi, !0);
          const $i = { series: this };
          this.pointClass.prototype.applyOptions.apply($i, [ri]);
          const Yi = $i.x;
          if (Ai = ls.length, this.requireSorting && Yi < ls[Ai - 1])
            for (Ii = !0; Ai && ls[Ai - 1] > Yi; )
              Ai--;
          this.updateParallelArrays($i, "splice", [Ai, 0, 0]), this.updateParallelArrays($i, Ai), os && $i.name && (os[Yi] = $i.name), ns.splice(Ai, 0, ri), (Ii || this.processedData) && (this.data.splice(Ai, 0, null), this.processData()), Gi.legendType === "point" && this.generatePoints(), vi && (Ji[0] && Ji[0].remove ? Ji[0].remove(!1) : (Ji.shift(), this.updateParallelArrays($i, "shift"), ns.shift())), Xi !== !1 && ii(this, "addPoint", { point: $i }), this.isDirtyData = this.isDirty = !0, mi && es.redraw(zi);
        }
        removePoint(ri, mi, vi) {
          const zi = this, Xi = zi.data, Gi = Xi[ri], Ji = zi.points, es = zi.chart, os = function() {
            Ji && Ji.length === Xi.length && Ji.splice(ri, 1), Xi.splice(ri, 1), zi.options.data.splice(ri, 1), zi.updateParallelArrays(Gi || { series: zi }, "splice", [ri, 1]), Gi && Gi.destroy(), zi.isDirty = !0, zi.isDirtyData = !0, mi && es.redraw();
          };
          bi(vi, es), mi = Bi(mi, !0), Gi ? Gi.firePointEvent("remove", null, os) : os();
        }
        remove(ri, mi, vi, zi) {
          function Xi() {
            Gi.destroy(zi), Ji.isDirtyLegend = Ji.isDirtyBox = !0, Ji.linkSeries(zi), Bi(ri, !0) && Ji.redraw(mi);
          }
          const Gi = this, Ji = Gi.chart;
          vi !== !1 ? ii(Gi, "remove", null, Xi) : Xi();
        }
        update(ri, mi) {
          ri = xi(ri, this.userOptions), ii(this, "update", { options: ri });
          const vi = this, zi = vi.chart;
          var Xi = vi.userOptions;
          const Gi = vi.initialType || vi.type;
          var Ji = zi.options.plotOptions;
          const es = yi[Gi].prototype;
          var os = vi.finishedAnimating && { animation: !1 };
          const ns = {};
          let ls, Ii = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], Ai = ri.type || Xi.type || zi.options.chart.type;
          const $i = !(this.hasDerivedData || Ai && Ai !== this.type || typeof ri.pointStart < "u" || typeof ri.pointInterval < "u" || typeof ri.relativeXValue < "u" || ri.joinBy || ri.mapData || vi.hasOptionChanged("dataGrouping") || vi.hasOptionChanged("pointStart") || vi.hasOptionChanged("pointInterval") || vi.hasOptionChanged("pointIntervalUnit") || vi.hasOptionChanged("keys"));
          if (Ai = Ai || Gi, $i && (Ii.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), ri.visible !== !1 && Ii.push("area", "graph"), vi.parallelArrays.forEach(function(Yi) {
            Ii.push(Yi + "Data");
          }), ri.data && (ri.dataSorting && ei(vi.options.dataSorting, ri.dataSorting), this.setData(ri.data, !1))), ri = Zi(Xi, os, { index: typeof Xi.index > "u" ? vi.index : Xi.index, pointStart: Bi(Ji && Ji.series && Ji.series.pointStart, Xi.pointStart, vi.xData[0]) }, !$i && { data: vi.options.data }, ri), $i && ri.data && (ri.data = vi.options.data), Ii = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(Ii), Ii.forEach(function(Yi) {
            Ii[Yi] = vi[Yi], delete vi[Yi];
          }), Ji = !1, yi[Ai]) {
            if (Ji = Ai !== vi.type, vi.remove(!1, !1, !1, !0), Ji)
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(
                  vi,
                  yi[Ai].prototype
                );
              else {
                os = Object.hasOwnProperty.call(vi, "hcEvents") && vi.hcEvents;
                for (ls in es)
                  vi[ls] = void 0;
                ei(vi, yi[Ai].prototype), os ? vi.hcEvents = os : delete vi.hcEvents;
              }
          } else
            pi(17, !0, zi, { missingModuleFor: Ai });
          if (Ii.forEach(function(Yi) {
            vi[Yi] = Ii[Yi];
          }), vi.init(zi, ri), $i && this.points) {
            if (ri = vi.options, ri.visible === !1)
              ns.graphic = 1, ns.dataLabel = 1;
            else if (!vi._hasPointLabels) {
              const { marker: Yi, dataLabels: _i } = ri;
              Xi = Xi.marker || {}, !Yi || Yi.enabled !== !1 && Xi.symbol === Yi.symbol && Xi.height === Yi.height && Xi.width === Yi.width || (ns.graphic = 1), _i && _i.enabled === !1 && (ns.dataLabel = 1);
            }
            for (const Yi of this.points)
              Yi && Yi.series && (Yi.resolveColor(), Object.keys(ns).length && Yi.destroyElements(ns), ri.showInLegend === !1 && Yi.legendItem && zi.legend.destroyItem(Yi));
          }
          vi.initialType = Gi, zi.linkSeries(), Ji && vi.linkedSeries.length && (vi.isDirtyData = !0), ii(this, "afterUpdate"), Bi(mi, !0) && zi.redraw($i ? void 0 : !1);
        }
        setName(ri) {
          this.name = this.options.name = this.userOptions.name = ri, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(ri) {
          const mi = this.options[ri], vi = this.chart.options.plotOptions, zi = this.userOptions[ri];
          return zi ? mi !== zi : mi !== Bi(vi && vi[this.type] && vi[this.type][ri], vi && vi.series && vi.series[ri], mi);
        }
        onMouseOver() {
          const ri = this.chart, mi = ri.hoverSeries;
          ri.pointer.setHoverChartIndex(), mi && mi !== this && mi.onMouseOut(), this.options.events.mouseOver && ii(this, "mouseOver"), this.setState("hover"), ri.hoverSeries = this;
        }
        onMouseOut() {
          const ri = this.options, mi = this.chart, vi = mi.tooltip, zi = mi.hoverPoint;
          mi.hoverSeries = null, zi && zi.onMouseOut(), this && ri.events.mouseOut && ii(this, "mouseOut"), !vi || this.stickyTracking || vi.shared && !this.noSharedTooltip || vi.hide(), mi.series.forEach(function(Xi) {
            Xi.setState(
              "",
              !0
            );
          });
        }
        setState(ri, mi) {
          const vi = this;
          var zi = vi.options;
          const Xi = vi.graph, Gi = zi.inactiveOtherPoints, Ji = zi.states, es = Bi(Ji[ri || "normal"] && Ji[ri || "normal"].animation, vi.chart.options.chart.animation);
          let os = zi.lineWidth, ns = 0, ls = zi.opacity;
          if (ri = ri || "", vi.state !== ri && ([vi.group, vi.markerGroup, vi.dataLabelsGroup].forEach(function(Ii) {
            Ii && (vi.state && Ii.removeClass("highcharts-series-" + vi.state), ri && Ii.addClass("highcharts-series-" + ri));
          }), vi.state = ri, !vi.chart.styledMode)) {
            if (Ji[ri] && Ji[ri].enabled === !1)
              return;
            if (ri && (os = Ji[ri].lineWidth || os + (Ji[ri].lineWidthPlus || 0), ls = Bi(Ji[ri].opacity, ls)), Xi && !Xi.dashstyle && Pi(os))
              for (zi = { "stroke-width": os }, Xi.animate(zi, es); vi["zone-graph-" + ns]; )
                vi["zone-graph-" + ns].animate(zi, es), ns += 1;
            Gi || [vi.group, vi.markerGroup, vi.dataLabelsGroup, vi.labelBySeries].forEach(function(Ii) {
              Ii && Ii.animate({ opacity: ls }, es);
            });
          }
          mi && Gi && vi.points && vi.setAllPointsToState(ri || void 0);
        }
        setAllPointsToState(ri) {
          this.points.forEach(function(mi) {
            mi.setState && mi.setState(ri);
          });
        }
        setVisible(ri, mi) {
          const vi = this, zi = vi.chart, Xi = zi.options.chart.ignoreHiddenSeries, Gi = vi.visible, Ji = (vi.visible = ri = vi.options.visible = vi.userOptions.visible = typeof ri > "u" ? !Gi : ri) ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(es) {
            vi[es] && vi[es][Ji]();
          }), (zi.hoverSeries === vi || (zi.hoverPoint && zi.hoverPoint.series) === vi) && vi.onMouseOut(), vi.legendItem && zi.legend.colorizeItem(vi, ri), vi.isDirty = !0, vi.options.stacking && zi.series.forEach(function(es) {
            es.options.stacking && es.visible && (es.isDirty = !0);
          }), vi.linkedSeries.forEach(function(es) {
            es.setVisible(ri, !1);
          }), Xi && (zi.isDirtyBox = !0), ii(vi, Ji), mi !== !1 && zi.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(ri) {
          this.selected = ri = this.options.selected = typeof ri > "u" ? !this.selected : ri, this.checkbox && (this.checkbox.checked = ri), ii(this, ri ? "select" : "unselect");
        }
        shouldShowTooltip(ri, mi, vi = {}) {
          return vi.series = this, vi.visiblePlotOnly = !0, this.chart.isInsidePlot(ri, mi, vi);
        }
        drawLegendSymbol(ri, mi) {
          var vi;
          (vi = Qi[this.options.legendSymbol || "rectangle"]) === null || vi === void 0 || vi.call(this, ri, mi);
        }
      }
      return Di.defaultOptions = ss, Di.types = Wi.seriesTypes, Di.registerType = Wi.registerSeriesType, ei(Di.prototype, {
        axisTypes: ["xAxis", "yAxis"],
        coll: "series",
        colorCounter: 0,
        cropShoulder: 1,
        directTouch: !1,
        isCartesian: !0,
        kdAxisArray: ["clientX", "plotY"],
        parallelArrays: ["x", "y"],
        pointClass: is,
        requireSorting: !0,
        sorted: !0
      }), Wi.series = Di, Di;
    }), ci(oi, "Core/Chart/Chart.js", [
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Axis/Axis.js"],
      oi["Core/Defaults.js"],
      oi["Core/Templating.js"],
      oi["Core/Foundation.js"],
      oi["Core/Globals.js"],
      oi["Core/Renderer/RendererRegistry.js"],
      oi["Core/Series/Series.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Core/Renderer/SVG/SVGRenderer.js"],
      oi["Core/Time.js"],
      oi["Core/Utilities.js"],
      oi["Core/Renderer/HTML/AST.js"]
    ], function(Si, ji, qi, ts, Qi, is, ss, Wi, Ki, Ui, ki, bi, Ri) {
      const { animate: Ni, animObject: fi, setAnimation: Ci } = Si, { defaultOptions: wi, defaultTime: yi } = qi, { numberFormat: Ti } = ts, { registerEventOptions: Mi } = Qi, { charts: Oi, doc: ai, marginNames: li, svg: xi, win: di } = is, { seriesTypes: pi } = Ki, {
        addEvent: ei,
        attr: Fe,
        createElement: ii,
        css: hi,
        defined: gi,
        diffObjects: Ei,
        discardElement: ni,
        erase: Pi,
        error: Fi,
        extend: Zi,
        find: rs,
        fireEvent: Bi,
        getStyle: si,
        isArray: Li,
        isNumber: Hi,
        isObject: Di,
        isString: Vi,
        merge: ri,
        objectEach: mi,
        pick: vi,
        pInt: zi,
        relativeLength: Xi,
        removeEvent: Gi,
        splat: Ji,
        syncTimeout: es,
        uniqueKey: os
      } = bi;
      class ns {
        static chart(Ii, Ai, $i) {
          return new ns(Ii, Ai, $i);
        }
        constructor(Ii, Ai, $i) {
          this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0, this.sharedClips = {}, this.zooming = this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0, this.getArgs(Ii, Ai, $i);
        }
        getArgs(Ii, Ai, $i) {
          Vi(Ii) || Ii.nodeName ? (this.renderTo = Ii, this.init(Ai, $i)) : this.init(Ii, Ai);
        }
        setZoomOptions() {
          const Ii = this.options.chart, Ai = Ii.zooming;
          this.zooming = Object.assign(Object.assign({}, Ai), { type: vi(Ii.zoomType, Ai.type), key: vi(Ii.zoomKey, Ai.key), pinchType: vi(Ii.pinchType, Ai.pinchType), singleTouch: vi(
            Ii.zoomBySingleTouch,
            Ai.singleTouch,
            !1
          ), resetButton: ri(Ai.resetButton, Ii.resetZoomButton) });
        }
        init(Ii, Ai) {
          Bi(this, "init", { args: arguments }, function() {
            const $i = ri(wi, Ii), Yi = $i.chart;
            this.userOptions = Zi({}, Ii), this.margin = [], this.spacing = [], this.bounds = { h: {}, v: {} }, this.labelCollectors = [], this.callback = Ai, this.isResizing = 0, this.options = $i, this.axes = [], this.series = [], this.time = Ii.time && Object.keys(Ii.time).length ? new ki(Ii.time) : is.time, this.numberFormatter = Yi.numberFormatter || Ti, this.styledMode = Yi.styledMode, this.hasCartesianSeries = Yi.showAxes, this.index = Oi.length, Oi.push(this), is.chartCount++, Mi(this, Yi), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), Bi(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(Ii) {
          var Ai = this.options.chart;
          Ai = Ii.type || Ai.type;
          const $i = pi[Ai];
          return $i || Fi(17, !0, this, { missingModuleFor: Ai }), Ai = new $i(), typeof Ai.init == "function" && Ai.init(this, Ii), Ai;
        }
        setSeriesData() {
          this.getSeriesOrderByLinks().forEach(function(Ii) {
            Ii.points || Ii.data || !Ii.enabledDataSorting || Ii.setData(Ii.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function(Ii, Ai) {
            return Ii.linkedSeries.length || Ai.linkedSeries.length ? Ai.linkedSeries.length - Ii.linkedSeries.length : 0;
          });
        }
        orderItems(Ii, Ai = 0) {
          const $i = this[Ii], Yi = this.options[Ii] = Ji(this.options[Ii]).slice();
          if (Ii = this.userOptions[Ii] = this.userOptions[Ii] ? Ji(this.userOptions[Ii]).slice() : [], this.hasRendered && (Yi.splice(Ai), Ii.splice(Ai)), $i)
            for (let _i = Ai, hs = $i.length; _i < hs; ++_i)
              (Ai = $i[_i]) && (Ai.index = _i, Ai instanceof Wi && (Ai.name = Ai.getName()), Ai.options.isInternal || (Yi[_i] = Ai.options, Ii[_i] = Ai.userOptions));
        }
        isInsidePlot(Ii, Ai, $i = {}) {
          const {
            inverted: Yi,
            plotBox: _i,
            plotLeft: hs,
            plotTop: as,
            scrollablePlotBox: us
          } = this;
          var ps = 0;
          let cs = 0;
          $i.visiblePlotOnly && this.scrollingContainer && ({ scrollLeft: ps, scrollTop: cs } = this.scrollingContainer);
          const ds = $i.series, ms = $i.visiblePlotOnly && us || _i;
          var fs = $i.inverted ? Ai : Ii;
          if (Ai = $i.inverted ? Ii : Ai, Ii = { x: fs, y: Ai, isInsidePlot: !0, options: $i }, !$i.ignoreX) {
            const gs = ds && (Yi && !this.polar ? ds.yAxis : ds.xAxis) || { pos: hs, len: 1 / 0 };
            fs = $i.paneCoordinates ? gs.pos + fs : hs + fs, fs >= Math.max(ps + hs, gs.pos) && fs <= Math.min(ps + hs + ms.width, gs.pos + gs.len) || (Ii.isInsidePlot = !1);
          }
          return !$i.ignoreY && Ii.isInsidePlot && (ps = !Yi && $i.axis && !$i.axis.isXAxis && $i.axis || ds && (Yi ? ds.xAxis : ds.yAxis) || { pos: as, len: 1 / 0 }, $i = $i.paneCoordinates ? ps.pos + Ai : as + Ai, $i >= Math.max(cs + as, ps.pos) && $i <= Math.min(cs + as + ms.height, ps.pos + ps.len) || (Ii.isInsidePlot = !1)), Bi(this, "afterIsInsidePlot", Ii), Ii.isInsidePlot;
        }
        redraw(Ii) {
          Bi(this, "beforeRedraw");
          const Ai = this.hasCartesianSeries ? this.axes : this.colorAxis || [], $i = this.series, Yi = this.pointer, _i = this.legend, hs = this.userOptions.legend, as = this.renderer, us = as.isHidden(), ps = [];
          let cs, ds, ms = this.isDirtyBox, fs = this.isDirtyLegend, gs;
          for (as.rootFontSize = as.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), Ci(this.hasRendered ? Ii : !1, this), us && this.temporaryDisplay(), this.layOutTitles(!1), Ii = $i.length; Ii--; )
            if (gs = $i[Ii], (gs.options.stacking || gs.options.centerInCategory) && (ds = !0, gs.isDirty)) {
              cs = !0;
              break;
            }
          if (cs)
            for (Ii = $i.length; Ii--; )
              gs = $i[Ii], gs.options.stacking && (gs.isDirty = !0);
          $i.forEach(function(xs) {
            xs.isDirty && (xs.options.legendType === "point" ? (typeof xs.updateTotals == "function" && xs.updateTotals(), fs = !0) : hs && (hs.labelFormatter || hs.labelFormat) && (fs = !0)), xs.isDirtyData && Bi(xs, "updatedData");
          }), fs && _i && _i.options.enabled && (_i.render(), this.isDirtyLegend = !1), ds && this.getStacks(), Ai.forEach(function(xs) {
            xs.updateNames(), xs.setScale();
          }), this.getMargins(), Ai.forEach(function(xs) {
            xs.isDirty && (ms = !0);
          }), Ai.forEach(function(xs) {
            const Ss = xs.min + "," + xs.max;
            xs.extKey !== Ss && (xs.extKey = Ss, ps.push(function() {
              Bi(xs, "afterSetExtremes", Zi(xs.eventArgs, xs.getExtremes())), delete xs.eventArgs;
            })), (ms || ds) && xs.redraw();
          }), ms && this.drawChartBox(), Bi(this, "predraw"), $i.forEach(function(xs) {
            (ms || xs.isDirty) && xs.visible && xs.redraw(), xs.isDirtyData = !1;
          }), Yi && Yi.reset(!0), as.draw(), Bi(this, "redraw"), Bi(this, "render"), us && this.temporaryDisplay(!0), ps.forEach(function(xs) {
            xs.call();
          });
        }
        get(Ii) {
          function Ai(_i) {
            return _i.id === Ii || _i.options && _i.options.id === Ii;
          }
          const $i = this.series;
          let Yi = rs(this.axes, Ai) || rs(this.series, Ai);
          for (let _i = 0; !Yi && _i < $i.length; _i++)
            Yi = rs($i[_i].points || [], Ai);
          return Yi;
        }
        getAxes() {
          const Ii = this.options;
          Bi(this, "getAxes");
          for (const Ai of ["xAxis", "yAxis"]) {
            const $i = Ii[Ai] = Ji(Ii[Ai] || {});
            for (const Yi of $i)
              new ji(this, Yi, Ai);
          }
          Bi(this, "afterGetAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((Ii, Ai) => (Ai.getPointsCollection().forEach(($i) => {
            vi($i.selectedStaging, $i.selected) && Ii.push($i);
          }), Ii), []);
        }
        getSelectedSeries() {
          return this.series.filter(function(Ii) {
            return Ii.selected;
          });
        }
        setTitle(Ii, Ai, $i) {
          this.applyDescription("title", Ii), this.applyDescription("subtitle", Ai), this.applyDescription("caption", void 0), this.layOutTitles($i);
        }
        applyDescription(Ii, Ai) {
          const $i = this, Yi = this.options[Ii] = ri(this.options[Ii], Ai);
          let _i = this[Ii];
          _i && Ai && (this[Ii] = _i = _i.destroy()), Yi && !_i && (_i = this.renderer.text(Yi.text, 0, 0, Yi.useHTML).attr({
            align: Yi.align,
            class: "highcharts-" + Ii,
            zIndex: Yi.zIndex || 4
          }).add(), _i.update = function(hs, as) {
            $i.applyDescription(Ii, hs), $i.layOutTitles(as);
          }, this.styledMode || _i.css(Zi(Ii === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, Yi.style)), this[Ii] = _i);
        }
        layOutTitles(Ii = !0) {
          const Ai = [0, 0, 0], $i = this.renderer, Yi = this.spacingBox;
          ["title", "subtitle", "caption"].forEach(function(hs) {
            const as = this[hs], us = this.options[hs], ps = us.verticalAlign || "top";
            if (hs = hs === "title" ? ps === "top" ? -3 : 0 : ps === "top" ? Ai[0] + 2 : 0, as) {
              as.css({ width: (us.width || Yi.width + (us.widthAdjust || 0)) + "px" });
              const cs = $i.fontMetrics(as).b, ds = Math.round(as.getBBox(us.useHTML).height);
              as.align(Zi({ y: ps === "bottom" ? cs : hs + cs, height: ds }, us), !1, "spacingBox"), us.floating || (ps === "top" ? Ai[0] = Math.ceil(Ai[0] + ds) : ps === "bottom" && (Ai[2] = Math.ceil(Ai[2] + ds)));
            }
          }, this), Ai[0] && (this.options.title.verticalAlign || "top") === "top" && (Ai[0] += this.options.title.margin), Ai[2] && this.options.caption.verticalAlign === "bottom" && (Ai[2] += this.options.caption.margin);
          const _i = !this.titleOffset || this.titleOffset.join(",") !== Ai.join(",");
          this.titleOffset = Ai, Bi(this, "afterLayOutTitles"), !this.isDirtyBox && _i && (this.isDirtyBox = this.isDirtyLegend = _i, this.hasRendered && Ii && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          return { width: si(this.renderTo, "width", !0) || 0, height: si(this.renderTo, "height", !0) || 0 };
        }
        getChartSize() {
          var Ii = this.options.chart;
          const Ai = Ii.width;
          Ii = Ii.height;
          const $i = this.getContainerBox();
          this.chartWidth = Math.max(0, Ai || $i.width || 600), this.chartHeight = Math.max(0, Xi(Ii, this.chartWidth) || (1 < $i.height ? $i.height : 400)), this.containerBox = $i;
        }
        temporaryDisplay(Ii) {
          let Ai = this.renderTo;
          if (Ii)
            for (; Ai && Ai.style; )
              Ai.hcOrigStyle && (hi(Ai, Ai.hcOrigStyle), delete Ai.hcOrigStyle), Ai.hcOrigDetached && (ai.body.removeChild(Ai), Ai.hcOrigDetached = !1), Ai = Ai.parentNode;
          else
            for (; Ai && Ai.style && (ai.body.contains(Ai) || Ai.parentNode || (Ai.hcOrigDetached = !0, ai.body.appendChild(Ai)), (si(Ai, "display", !1) === "none" || Ai.hcOricDetached) && (Ai.hcOrigStyle = { display: Ai.style.display, height: Ai.style.height, overflow: Ai.style.overflow }, Ii = { display: "block", overflow: "hidden" }, Ai !== this.renderTo && (Ii.height = 0), hi(Ai, Ii), Ai.offsetWidth || Ai.style.setProperty(
              "display",
              "block",
              "important"
            )), Ai = Ai.parentNode, Ai !== ai.body); )
              ;
        }
        setClassName(Ii) {
          this.container.className = "highcharts-container " + (Ii || "");
        }
        getContainer() {
          const Ii = this.options, Ai = Ii.chart;
          var $i = os();
          let Yi, _i = this.renderTo;
          _i || (this.renderTo = _i = Ai.renderTo), Vi(_i) && (this.renderTo = _i = ai.getElementById(_i)), _i || Fi(13, !0, this);
          var hs = zi(Fe(_i, "data-highcharts-chart"));
          Hi(hs) && Oi[hs] && Oi[hs].hasRendered && Oi[hs].destroy(), Fe(_i, "data-highcharts-chart", this.index), _i.innerHTML = Ri.emptyHTML, Ai.skipClone || _i.offsetWidth || this.temporaryDisplay(), this.getChartSize(), hs = this.chartWidth;
          const as = this.chartHeight;
          if (hi(_i, { overflow: "hidden" }), this.styledMode || (Yi = Zi({ position: "relative", overflow: "hidden", width: hs + "px", height: as + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, Ai.style || {})), this.container = $i = ii("div", { id: $i }, Yi, _i), this._cursor = $i.style.cursor, this.renderer = new (Ai.renderer || !xi ? ss.getRendererType(Ai.renderer) : Ui)(
            $i,
            hs,
            as,
            void 0,
            Ai.forExport,
            Ii.exporting && Ii.exporting.allowHTML,
            this.styledMode
          ), this.containerBox = this.getContainerBox(), Ci(void 0, this), this.setClassName(Ai.className), this.styledMode)
            for (const us in Ii.defs)
              this.renderer.definition(Ii.defs[us]);
          else
            this.renderer.setStyle(Ai.style);
          this.renderer.chartIndex = this.index, Bi(this, "afterGetContainer");
        }
        getMargins(Ii) {
          const { spacing: Ai, margin: $i, titleOffset: Yi } = this;
          this.resetMargins(), Yi[0] && !gi($i[0]) && (this.plotTop = Math.max(this.plotTop, Yi[0] + Ai[0])), Yi[2] && !gi($i[2]) && (this.marginBottom = Math.max(
            this.marginBottom,
            Yi[2] + Ai[2]
          )), this.legend && this.legend.display && this.legend.adjustMargins($i, Ai), Bi(this, "getMargins"), Ii || this.getAxisMargins();
        }
        getAxisMargins() {
          const Ii = this, Ai = Ii.axisOffset = [0, 0, 0, 0], $i = Ii.colorAxis, Yi = Ii.margin, _i = function(hs) {
            hs.forEach(function(as) {
              as.visible && as.getOffset();
            });
          };
          Ii.hasCartesianSeries ? _i(Ii.axes) : $i && $i.length && _i($i), li.forEach(function(hs, as) {
            gi(Yi[as]) || (Ii[hs] += Ai[as]);
          }), Ii.setChartSize();
        }
        getOptions() {
          return Ei(this.userOptions, wi);
        }
        reflow(Ii) {
          const Ai = this;
          var $i = Ai.options.chart;
          $i = gi($i.width) && gi($i.height);
          const Yi = Ai.containerBox, _i = Ai.getContainerBox();
          delete Ai.pointer.chartPosition, !$i && !Ai.isPrinting && Yi && _i.width && ((_i.width !== Yi.width || _i.height !== Yi.height) && (bi.clearTimeout(Ai.reflowTimeout), Ai.reflowTimeout = es(function() {
            Ai.container && Ai.setSize(void 0, void 0, !1);
          }, Ii ? 100 : 0)), Ai.containerBox = _i);
        }
        setReflow() {
          const Ii = this;
          var Ai = ($i) => {
            var Yi;
            !((Yi = Ii.options) === null || Yi === void 0) && Yi.chart.reflow && Ii.hasLoaded && Ii.reflow($i);
          };
          typeof ResizeObserver == "function" ? new ResizeObserver(Ai).observe(Ii.renderTo) : (Ai = ei(di, "resize", Ai), ei(
            this,
            "destroy",
            Ai
          ));
        }
        setSize(Ii, Ai, $i) {
          const Yi = this, _i = Yi.renderer;
          Yi.isResizing += 1, Ci($i, Yi), $i = _i.globalAnimation, Yi.oldChartHeight = Yi.chartHeight, Yi.oldChartWidth = Yi.chartWidth, typeof Ii < "u" && (Yi.options.chart.width = Ii), typeof Ai < "u" && (Yi.options.chart.height = Ai), Yi.getChartSize(), Yi.styledMode || ($i ? Ni : hi)(Yi.container, { width: Yi.chartWidth + "px", height: Yi.chartHeight + "px" }, $i), Yi.setChartSize(!0), _i.setSize(Yi.chartWidth, Yi.chartHeight, $i), Yi.axes.forEach(function(hs) {
            hs.isDirty = !0, hs.setScale();
          }), Yi.isDirtyLegend = !0, Yi.isDirtyBox = !0, Yi.layOutTitles(), Yi.getMargins(), Yi.redraw($i), Yi.oldChartHeight = null, Bi(Yi, "resize"), es(function() {
            Yi && Bi(Yi, "endResize", null, function() {
              --Yi.isResizing;
            });
          }, fi($i).duration);
        }
        setChartSize(Ii) {
          var Ai = this.inverted;
          const $i = this.renderer;
          var Yi = this.chartWidth, _i = this.chartHeight;
          const hs = this.options.chart, as = this.spacing, us = this.clipOffset;
          let ps, cs, ds, ms;
          this.plotLeft = ps = Math.round(this.plotLeft), this.plotTop = cs = Math.round(this.plotTop), this.plotWidth = ds = Math.max(0, Math.round(Yi - ps - this.marginRight)), this.plotHeight = ms = Math.max(
            0,
            Math.round(_i - cs - this.marginBottom)
          ), this.plotSizeX = Ai ? ms : ds, this.plotSizeY = Ai ? ds : ms, this.plotBorderWidth = hs.plotBorderWidth || 0, this.spacingBox = $i.spacingBox = { x: as[3], y: as[0], width: Yi - as[3] - as[1], height: _i - as[0] - as[2] }, this.plotBox = $i.plotBox = { x: ps, y: cs, width: ds, height: ms }, Ai = 2 * Math.floor(this.plotBorderWidth / 2), Yi = Math.ceil(Math.max(Ai, us[3]) / 2), _i = Math.ceil(Math.max(Ai, us[0]) / 2), this.clipBox = { x: Yi, y: _i, width: Math.floor(this.plotSizeX - Math.max(Ai, us[1]) / 2 - Yi), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(Ai, us[2]) / 2 - _i)) }, Ii || (this.axes.forEach(function(fs) {
            fs.setAxisSize(), fs.setAxisTranslation();
          }), $i.alignElements()), Bi(this, "afterSetChartSize", { skipAxes: Ii });
        }
        resetMargins() {
          Bi(this, "resetMargins");
          const Ii = this, Ai = Ii.options.chart;
          ["margin", "spacing"].forEach(function($i) {
            const Yi = Ai[$i], _i = Di(Yi) ? Yi : [Yi, Yi, Yi, Yi];
            ["Top", "Right", "Bottom", "Left"].forEach(function(hs, as) {
              Ii[$i][as] = vi(Ai[$i + hs], _i[as]);
            });
          }), li.forEach(function($i, Yi) {
            Ii[$i] = vi(Ii.margin[Yi], Ii.spacing[Yi]);
          }), Ii.axisOffset = [0, 0, 0, 0], Ii.clipOffset = [0, 0, 0, 0];
        }
        drawChartBox() {
          const Ii = this.options.chart, Ai = this.renderer, $i = this.chartWidth, Yi = this.chartHeight, _i = this.styledMode, hs = this.plotBGImage;
          var as = Ii.backgroundColor;
          const us = Ii.plotBackgroundColor, ps = Ii.plotBackgroundImage, cs = this.plotLeft, ds = this.plotTop, ms = this.plotWidth, fs = this.plotHeight, gs = this.plotBox, xs = this.clipRect, Ss = this.clipBox;
          let vs = this.chartBackground, ws = this.plotBackground, ks = this.plotBorder, ys, Ms, Cs = "animate";
          vs || (this.chartBackground = vs = Ai.rect().addClass("highcharts-background").add(), Cs = "attr"), _i ? ys = Ms = vs.strokeWidth() : (ys = Ii.borderWidth || 0, Ms = ys + (Ii.shadow ? 8 : 0), as = { fill: as || "none" }, (ys || vs["stroke-width"]) && (as.stroke = Ii.borderColor, as["stroke-width"] = ys), vs.attr(as).shadow(Ii.shadow)), vs[Cs]({ x: Ms / 2, y: Ms / 2, width: $i - Ms - ys % 2, height: Yi - Ms - ys % 2, r: Ii.borderRadius }), Cs = "animate", ws || (Cs = "attr", this.plotBackground = ws = Ai.rect().addClass("highcharts-plot-background").add()), ws[Cs](gs), _i || (ws.attr({ fill: us || "none" }).shadow(Ii.plotShadow), ps && (hs ? (ps !== hs.attr("href") && hs.attr("href", ps), hs.animate(gs)) : this.plotBGImage = Ai.image(ps, cs, ds, ms, fs).add())), xs ? xs.animate({ width: Ss.width, height: Ss.height }) : this.clipRect = Ai.clipRect(Ss), Cs = "animate", ks || (Cs = "attr", this.plotBorder = ks = Ai.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), _i || ks.attr({ stroke: Ii.plotBorderColor, "stroke-width": Ii.plotBorderWidth || 0, fill: "none" }), ks[Cs](ks.crisp({ x: cs, y: ds, width: ms, height: fs }, -ks.strokeWidth())), this.isDirtyBox = !1, Bi(this, "afterDrawChartBox");
        }
        propFromSeries() {
          const Ii = this, Ai = Ii.options.chart, $i = Ii.options.series;
          let Yi, _i, hs;
          ["inverted", "angular", "polar"].forEach(function(as) {
            for (_i = pi[Ai.type], hs = Ai[as] || _i && _i.prototype[as], Yi = $i && $i.length; !hs && Yi--; )
              (_i = pi[$i[Yi].type]) && _i.prototype[as] && (hs = !0);
            Ii[as] = hs;
          });
        }
        linkSeries(Ii) {
          const Ai = this, $i = Ai.series;
          $i.forEach(function(Yi) {
            Yi.linkedSeries.length = 0;
          }), $i.forEach(function(Yi) {
            let _i = Yi.options.linkedTo;
            Vi(_i) && (_i = _i === ":previous" ? Ai.series[Yi.index - 1] : Ai.get(_i)) && _i.linkedParent !== Yi && (_i.linkedSeries.push(Yi), Yi.linkedParent = _i, _i.enabledDataSorting && Yi.setDataSortingOptions(), Yi.visible = vi(Yi.options.visible, _i.options.visible, Yi.visible));
          }), Bi(this, "afterLinkSeries", { isUpdating: Ii });
        }
        renderSeries() {
          this.series.forEach(function(Ii) {
            Ii.translate(), Ii.render();
          });
        }
        render() {
          const Ii = this.axes, Ai = this.colorAxis, $i = this.renderer, Yi = function(cs) {
            cs.forEach(function(ds) {
              ds.visible && ds.render();
            });
          };
          let _i = 0;
          this.setTitle(), Bi(this, "beforeMargins"), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize();
          const hs = this.plotWidth;
          Ii.some(function(cs) {
            if (cs.horiz && cs.visible && cs.options.labels.enabled && cs.series.length)
              return _i = 21, !0;
          });
          const as = this.plotHeight = Math.max(this.plotHeight - _i, 0);
          Ii.forEach(function(cs) {
            cs.setScale();
          }), this.getAxisMargins();
          const us = 1.1 < hs / this.plotWidth, ps = 1.05 < as / this.plotHeight;
          (us || ps) && (Ii.forEach(function(cs) {
            (cs.horiz && us || !cs.horiz && ps) && cs.setTickInterval(!0);
          }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries ? Yi(Ii) : Ai && Ai.length && Yi(Ai), this.seriesGroup || (this.seriesGroup = $i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(Ii) {
          const Ai = this, $i = ri(!0, this.options.credits, Ii);
          $i.enabled && !this.credits && (this.credits = this.renderer.text($i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            $i.href && (di.location.href = $i.href);
          }).attr({ align: $i.position.align, zIndex: 8 }), Ai.styledMode || this.credits.css($i.style), this.credits.add().align($i.position), this.credits.update = function(Yi) {
            Ai.credits = Ai.credits.destroy(), Ai.addCredits(Yi);
          });
        }
        destroy() {
          const Ii = this, Ai = Ii.axes, $i = Ii.series, Yi = Ii.container, _i = Yi && Yi.parentNode;
          let hs;
          for (Bi(Ii, "destroy"), Ii.renderer.forExport ? Pi(Oi, Ii) : Oi[Ii.index] = void 0, is.chartCount--, Ii.renderTo.removeAttribute("data-highcharts-chart"), Gi(Ii), hs = Ai.length; hs--; )
            Ai[hs] = Ai[hs].destroy();
          for (this.scroller && this.scroller.destroy && this.scroller.destroy(), hs = $i.length; hs--; )
            $i[hs] = $i[hs].destroy();
          "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(as) {
            const us = Ii[as];
            us && us.destroy && (Ii[as] = us.destroy());
          }), Yi && (Yi.innerHTML = Ri.emptyHTML, Gi(Yi), _i && ni(Yi)), mi(Ii, function(as, us) {
            delete Ii[us];
          });
        }
        firstRender() {
          const Ii = this, Ai = Ii.options;
          Ii.getContainer(), Ii.resetMargins(), Ii.setChartSize(), Ii.propFromSeries(), Ii.getAxes();
          const $i = Li(Ai.series) ? Ai.series : [];
          Ai.series = [], $i.forEach(function(Yi) {
            Ii.initSeries(Yi);
          }), Ii.linkSeries(), Ii.setSeriesData(), Bi(Ii, "beforeRender"), Ii.render(), Ii.pointer.getChartPosition(), !Ii.renderer.imgCount && !Ii.hasLoaded && Ii.onload(), Ii.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(Ii) {
            Ii && typeof this.index < "u" && Ii.apply(this, [this]);
          }, this), Bi(this, "load"), Bi(this, "render"), gi(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          const { options: Ii, title: Ai } = this;
          Ii && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (Ai && Ai.element.textContent || "").replace(/</g, "&lt;") }), Ii.accessibility && Ii.accessibility.enabled === !1 || Fi(
            'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
            !1,
            this
          ));
        }
        addSeries(Ii, Ai, $i) {
          const Yi = this;
          let _i;
          return Ii && (Ai = vi(Ai, !0), Bi(Yi, "addSeries", { options: Ii }, function() {
            _i = Yi.initSeries(Ii), Yi.isDirtyLegend = !0, Yi.linkSeries(), _i.enabledDataSorting && _i.setData(Ii.data, !1), Bi(Yi, "afterAddSeries", { series: _i }), Ai && Yi.redraw($i);
          })), _i;
        }
        addAxis(Ii, Ai, $i, Yi) {
          return this.createAxis(Ai ? "xAxis" : "yAxis", { axis: Ii, redraw: $i, animation: Yi });
        }
        addColorAxis(Ii, Ai, $i) {
          return this.createAxis("colorAxis", { axis: Ii, redraw: Ai, animation: $i });
        }
        createAxis(Ii, Ai) {
          return Ii = new ji(this, Ai.axis, Ii), vi(Ai.redraw, !0) && this.redraw(Ai.animation), Ii;
        }
        showLoading(Ii) {
          const Ai = this, $i = Ai.options, Yi = $i.loading, _i = function() {
            hs && hi(hs, { left: Ai.plotLeft + "px", top: Ai.plotTop + "px", width: Ai.plotWidth + "px", height: Ai.plotHeight + "px" });
          };
          let hs = Ai.loadingDiv, as = Ai.loadingSpan;
          hs || (Ai.loadingDiv = hs = ii("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, Ai.container)), as || (Ai.loadingSpan = as = ii("span", { className: "highcharts-loading-inner" }, null, hs), ei(Ai, "redraw", _i)), hs.className = "highcharts-loading", Ri.setElementHTML(as, vi(Ii, $i.lang.loading, "")), Ai.styledMode || (hi(
            hs,
            Zi(Yi.style, { zIndex: 10 })
          ), hi(as, Yi.labelStyle), Ai.loadingShown || (hi(hs, { opacity: 0, display: "" }), Ni(hs, { opacity: Yi.style.opacity || 0.5 }, { duration: Yi.showDuration || 0 }))), Ai.loadingShown = !0, _i();
        }
        hideLoading() {
          const Ii = this.options, Ai = this.loadingDiv;
          Ai && (Ai.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || Ni(Ai, { opacity: 0 }, { duration: Ii.loading.hideDuration || 100, complete: function() {
            hi(Ai, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(Ii, Ai, $i, Yi) {
          const _i = this, hs = {
            credits: "addCredits",
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }, as = Ii.isResponsiveOptions, us = [];
          let ps, cs;
          Bi(_i, "update", { options: Ii }), as || _i.setResponsive(!1, !0), Ii = Ei(Ii, _i.options), _i.userOptions = ri(_i.userOptions, Ii);
          var ds = Ii.chart;
          if (ds) {
            if (ri(!0, _i.options.chart, ds), this.setZoomOptions(), "className" in ds && _i.setClassName(ds.className), "inverted" in ds || "polar" in ds || "type" in ds) {
              _i.propFromSeries();
              var ms = !0;
            }
            "alignTicks" in ds && (ms = !0), "events" in ds && Mi(this, ds), mi(ds, function(fs, gs) {
              _i.propsRequireUpdateSeries.indexOf("chart." + gs) !== -1 && (ps = !0), _i.propsRequireDirtyBox.indexOf(gs) !== -1 && (_i.isDirtyBox = !0), _i.propsRequireReflow.indexOf(gs) !== -1 && (as ? _i.isDirtyBox = !0 : cs = !0);
            }), !_i.styledMode && ds.style && _i.renderer.setStyle(_i.options.chart.style || {});
          }
          !_i.styledMode && Ii.colors && (this.options.colors = Ii.colors), Ii.time && (this.time === yi && (this.time = new ki(Ii.time)), ri(!0, _i.options.time, Ii.time)), mi(Ii, function(fs, gs) {
            _i[gs] && typeof _i[gs].update == "function" ? _i[gs].update(fs, !1) : typeof _i[hs[gs]] == "function" ? _i[hs[gs]](fs) : gs !== "colors" && _i.collectionsWithUpdate.indexOf(gs) === -1 && ri(!0, _i.options[gs], Ii[gs]), gs !== "chart" && _i.propsRequireUpdateSeries.indexOf(gs) !== -1 && (ps = !0);
          }), this.collectionsWithUpdate.forEach(function(fs) {
            Ii[fs] && (Ji(Ii[fs]).forEach(function(gs, xs) {
              const Ss = gi(gs.id);
              let vs;
              Ss && (vs = _i.get(gs.id)), !vs && _i[fs] && (vs = _i[fs][vi(gs.index, xs)]) && (Ss && gi(vs.options.id) || vs.options.isInternal) && (vs = void 0), vs && vs.coll === fs && (vs.update(gs, !1), $i && (vs.touched = !0)), !vs && $i && _i.collectionsWithInit[fs] && (_i.collectionsWithInit[fs][0].apply(_i, [gs].concat(_i.collectionsWithInit[fs][1] || []).concat([!1])).touched = !0);
            }), $i && _i[fs].forEach(function(gs) {
              gs.touched || gs.options.isInternal ? delete gs.touched : us.push(gs);
            }));
          }), us.forEach(function(fs) {
            fs.chart && fs.remove && fs.remove(!1);
          }), ms && _i.axes.forEach(function(fs) {
            fs.update({}, !1);
          }), ps && _i.getSeriesOrderByLinks().forEach(function(fs) {
            fs.chart && fs.update({}, !1);
          }, this), ms = ds && ds.width, ds = ds && (Vi(ds.height) ? Xi(ds.height, ms || _i.chartWidth) : ds.height), cs || Hi(ms) && ms !== _i.chartWidth || Hi(ds) && ds !== _i.chartHeight ? _i.setSize(ms, ds, Yi) : vi(Ai, !0) && _i.redraw(Yi), Bi(_i, "afterUpdate", { options: Ii, redraw: Ai, animation: Yi });
        }
        setSubtitle(Ii, Ai) {
          this.applyDescription(
            "subtitle",
            Ii
          ), this.layOutTitles(Ai);
        }
        setCaption(Ii, Ai) {
          this.applyDescription("caption", Ii), this.layOutTitles(Ai);
        }
        showResetZoom() {
          function Ii() {
            Ai.zoomOut();
          }
          const Ai = this, $i = wi.lang, Yi = Ai.zooming.resetButton, _i = Yi.theme, hs = Yi.relativeTo === "chart" || Yi.relativeTo === "spacingBox" ? null : "scrollablePlotBox";
          Bi(this, "beforeShowResetZoom", null, function() {
            Ai.resetZoomButton = Ai.renderer.button($i.resetZoom, null, null, Ii, _i).attr({ align: Yi.position.align, title: $i.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(Yi.position, !1, hs);
          }), Bi(
            this,
            "afterShowResetZoom"
          );
        }
        zoomOut() {
          Bi(this, "selection", { resetSelection: !0 }, this.zoom);
        }
        zoom(Ii) {
          const Ai = this, $i = Ai.pointer;
          let Yi = !1, _i;
          !Ii || Ii.resetSelection ? (Ai.axes.forEach(function(as) {
            _i = as.zoom();
          }), $i.initiated = !1) : Ii.xAxis.concat(Ii.yAxis).forEach(function(as) {
            const us = as.axis;
            ($i[us.isXAxis ? "zoomX" : "zoomY"] && gi($i.mouseDownX) && gi($i.mouseDownY) && Ai.isInsidePlot($i.mouseDownX - Ai.plotLeft, $i.mouseDownY - Ai.plotTop, { axis: us }) || !gi(Ai.inverted ? $i.mouseDownX : $i.mouseDownY)) && (_i = us.zoom(as.min, as.max), us.displayBtn && (Yi = !0));
          });
          const hs = Ai.resetZoomButton;
          Yi && !hs ? Ai.showResetZoom() : !Yi && Di(hs) && (Ai.resetZoomButton = hs.destroy()), _i && Ai.redraw(vi(Ai.options.chart.animation, Ii && Ii.animation, 100 > Ai.pointCount));
        }
        pan(Ii, Ai) {
          const $i = this, Yi = $i.hoverPoints;
          Ai = typeof Ai == "object" ? Ai : { enabled: Ai, type: "x" };
          const _i = $i.options.chart;
          _i && _i.panning && (_i.panning = Ai);
          const hs = Ai.type;
          let as;
          Bi(this, "pan", { originalEvent: Ii }, function() {
            Yi && Yi.forEach(function(cs) {
              cs.setState();
            });
            let us = $i.xAxis;
            hs === "xy" ? us = us.concat($i.yAxis) : hs === "y" && (us = $i.yAxis);
            const ps = {};
            us.forEach(function(cs) {
              if (cs.options.panningEnabled && !cs.options.isInternal) {
                var ds = cs.horiz, ms = Ii[ds ? "chartX" : "chartY"];
                ds = ds ? "mouseDownX" : "mouseDownY";
                var fs = $i[ds], gs = cs.minPointOffset || 0, xs = cs.reversed && !$i.inverted || !cs.reversed && $i.inverted ? -1 : 1, Ss = cs.getExtremes(), vs = cs.toValue(fs - ms, !0) + gs * xs, ws = cs.toValue(fs + cs.len - ms, !0) - (gs * xs || cs.isXAxis && cs.pointRangePadding || 0), ks = ws < vs;
                xs = cs.hasVerticalPanning(), fs = ks ? ws : vs, vs = ks ? vs : ws;
                var ys = cs.panningState;
                !xs || cs.isXAxis || ys && !ys.isDirty || cs.series.forEach(function(Ms) {
                  var Cs = Ms.getProcessedData(!0);
                  Cs = Ms.getExtremes(Cs.yData, !0), ys || (ys = {
                    startMin: Number.MAX_VALUE,
                    startMax: -Number.MAX_VALUE
                  }), Hi(Cs.dataMin) && Hi(Cs.dataMax) && (ys.startMin = Math.min(vi(Ms.options.threshold, 1 / 0), Cs.dataMin, ys.startMin), ys.startMax = Math.max(vi(Ms.options.threshold, -1 / 0), Cs.dataMax, ys.startMax));
                }), xs = Math.min(vi(ys && ys.startMin, Ss.dataMin), gs ? Ss.min : cs.toValue(cs.toPixels(Ss.min) - cs.minPixelPadding)), ws = Math.max(vi(ys && ys.startMax, Ss.dataMax), gs ? Ss.max : cs.toValue(cs.toPixels(Ss.max) + cs.minPixelPadding)), cs.panningState = ys, cs.isOrdinal || (gs = xs - fs, 0 < gs && (vs += gs, fs = xs), gs = vs - ws, 0 < gs && (vs = ws, fs -= gs), cs.series.length && fs !== Ss.min && vs !== Ss.max && fs >= xs && vs <= ws && (cs.setExtremes(fs, vs, !1, !1, { trigger: "pan" }), !$i.resetZoomButton && fs !== xs && vs !== ws && hs.match("y") && ($i.showResetZoom(), cs.displayBtn = !1), as = !0), ps[ds] = ms);
              }
            }), mi(ps, (cs, ds) => {
              $i[ds] = cs;
            }), as && $i.redraw(!1), hi($i.container, { cursor: "move" });
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
    }), ci(
      oi,
      "Extensions/ScrollablePlotArea.js",
      [oi["Core/Animation/AnimationUtilities.js"], oi["Core/Axis/Axis.js"], oi["Core/Chart/Chart.js"], oi["Core/Series/Series.js"], oi["Core/Renderer/RendererRegistry.js"], oi["Core/Utilities.js"]],
      function(Si, ji, qi, ts, Qi, is) {
        const { stop: ss } = Si, { addEvent: Wi, createElement: Ki, defined: Ui, merge: ki, pick: bi } = is;
        Wi(qi, "afterSetChartSize", function(Ri) {
          var Ni = this.options.chart.scrollablePlotArea, fi = Ni && Ni.minWidth;
          Ni = Ni && Ni.minHeight;
          let Ci;
          this.renderer.forExport || (fi ? (this.scrollablePixelsX = fi = Math.max(0, fi - this.chartWidth)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = ki(this.plotBox), this.plotBox.width = this.plotWidth += fi, this.inverted ? this.clipBox.height += fi : this.clipBox.width += fi, Ci = { 1: { name: "right", value: fi } }) : Ni && (this.scrollablePixelsY = fi = Math.max(0, Ni - this.chartHeight), Ui(fi) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = ki(this.plotBox), this.plotBox.height = this.plotHeight += fi, this.inverted ? this.clipBox.width += fi : this.clipBox.height += fi, Ci = { 2: { name: "bottom", value: fi } })), Ci && !Ri.skipAxes && this.axes.forEach(function(wi) {
            Ci[wi.side] ? wi.getPlotLinePath = function() {
              let yi = Ci[wi.side].name, Ti = this[yi], Mi;
              return this[yi] = Ti - Ci[wi.side].value, Mi = ji.prototype.getPlotLinePath.apply(this, arguments), this[yi] = Ti, Mi;
            } : (wi.setAxisSize(), wi.setAxisTranslation());
          }));
        }), Wi(qi, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        }), qi.prototype.setUpScrolling = function() {
          const Ri = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (Ri.overflowX = "auto"), this.scrollablePixelsY && (Ri.overflowY = "auto"), this.scrollingParent = Ki("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo), this.scrollingContainer = Ki("div", { className: "highcharts-scrolling" }, Ri, this.scrollingParent);
          let Ni;
          Wi(this.scrollingContainer, "scroll", () => {
            this.pointer && (delete this.pointer.chartPosition, this.hoverPoint && (Ni = this.hoverPoint), this.pointer.runPointActions(void 0, Ni, !0));
          }), this.innerContainer = Ki("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null;
        }, qi.prototype.moveFixedElements = function() {
          let Ri = this.container, Ni = this.fixedRenderer, fi = ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), Ci;
          this.scrollablePixelsX && !this.inverted ? Ci = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted || this.scrollablePixelsY && !this.inverted ? Ci = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (Ci = ".highcharts-yaxis"), Ci && fi.push(`${Ci}:not(.highcharts-radial-axis)`, `${Ci}-labels:not(.highcharts-radial-axis-labels)`), fi.forEach(function(wi) {
            [].forEach.call(Ri.querySelectorAll(wi), function(yi) {
              (yi.namespaceURI === Ni.SVG_NS ? Ni.box : Ni.box.parentNode).appendChild(yi), yi.style.pointerEvents = "auto";
            });
          });
        }, qi.prototype.applyFixed = function() {
          var Ri = !this.fixedDiv, Ni = this.options.chart, fi = Ni.scrollablePlotArea, Ci = Qi.getRendererType();
          Ri ? (this.fixedDiv = Ki("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (Ni.style && Ni.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = Ni = new Ci(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = Ni.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": bi(
            fi.opacity,
            0.85
          ), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), Wi(this, "afterShowResetZoom", this.moveFixedElements), Wi(this, "afterApplyDrilldown", this.moveFixedElements), Wi(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), (this.scrollableDirty || Ri) && (this.scrollableDirty = !1, this.moveFixedElements()), Ni = this.chartWidth + (this.scrollablePixelsX || 0), Ci = this.chartHeight + (this.scrollablePixelsY || 0), ss(this.container), this.container.style.width = Ni + "px", this.container.style.height = Ci + "px", this.renderer.boxWrapper.attr({ width: Ni, height: Ci, viewBox: [0, 0, Ni, Ci].join(" ") }), this.chartBackground.attr({ width: Ni, height: Ci }), this.scrollingContainer.style.height = this.chartHeight + "px", Ri && (fi.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * fi.scrollPositionX), fi.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * fi.scrollPositionY)), Ci = this.axisOffset, Ri = this.plotTop - Ci[0] - 1, fi = this.plotLeft - Ci[3] - 1, Ni = this.plotTop + this.plotHeight + Ci[2] + 1, Ci = this.plotLeft + this.plotWidth + Ci[1] + 1;
          let wi = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), yi = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          Ri = this.scrollablePixelsX ? [["M", 0, Ri], ["L", this.plotLeft - 1, Ri], ["L", this.plotLeft - 1, Ni], ["L", 0, Ni], ["Z"], ["M", wi, Ri], ["L", this.chartWidth, Ri], ["L", this.chartWidth, Ni], ["L", wi, Ni], ["Z"]] : this.scrollablePixelsY ? [["M", fi, 0], ["L", fi, this.plotTop - 1], ["L", Ci, this.plotTop - 1], ["L", Ci, 0], ["Z"], ["M", fi, yi], ["L", fi, this.chartHeight], ["L", Ci, this.chartHeight], [
            "L",
            Ci,
            yi
          ], ["Z"]] : [["M", 0, 0]], this.redrawTrigger !== "adjustHeight" && this.scrollableMask.attr({ d: Ri });
        }, Wi(ji, "afterInit", function() {
          this.chart.scrollableDirty = !0;
        }), Wi(ts, "show", function() {
          this.chart.scrollableDirty = !0;
        });
      }
    ), ci(oi, "Core/Axis/Stacking/StackItem.js", [oi["Core/Templating.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { format: ts } = Si, { series: Qi } = ji, { destroyObjectProperties: is, fireEvent: ss, isNumber: Wi, pick: Ki } = qi;
      class Ui {
        constructor(bi, Ri, Ni, fi, Ci) {
          const wi = bi.chart.inverted, yi = bi.reversed;
          this.axis = bi, bi = this.isNegative = !!Ni != !!yi, this.options = Ri = Ri || {}, this.x = fi, this.cumulative = this.total = null, this.points = {}, this.hasValidPoints = !1, this.stack = Ci, this.rightCliff = this.leftCliff = 0, this.alignOptions = { align: Ri.align || (wi ? bi ? "left" : "right" : "center"), verticalAlign: Ri.verticalAlign || (wi ? "middle" : bi ? "bottom" : "top"), y: Ri.y, x: Ri.x }, this.textAlign = Ri.textAlign || (wi ? bi ? "right" : "left" : "center");
        }
        destroy() {
          is(this, this.axis);
        }
        render(bi) {
          const Ri = this.axis.chart, Ni = this.options;
          var fi = Ni.format;
          fi = fi ? ts(fi, this, Ri) : Ni.formatter.call(this), this.label ? this.label.attr({ text: fi, visibility: "hidden" }) : (this.label = Ri.renderer.label(fi, null, void 0, Ni.shape, void 0, void 0, Ni.useHTML, !1, "stack-labels"), fi = { r: Ni.borderRadius || 0, text: fi, padding: Ki(Ni.padding, 5), visibility: "hidden" }, Ri.styledMode || (fi.fill = Ni.backgroundColor, fi.stroke = Ni.borderColor, fi["stroke-width"] = Ni.borderWidth, this.label.css(Ni.style || {})), this.label.attr(fi), this.label.added || this.label.add(bi)), this.label.labelrank = Ri.plotSizeY, ss(this, "afterRender");
        }
        setOffset(bi, Ri, Ni, fi, Ci, wi) {
          const {
            alignOptions: yi,
            axis: Ti,
            label: Mi,
            options: Oi,
            textAlign: ai
          } = this, li = Ti.chart;
          Ni = this.getStackBox({ xOffset: bi, width: Ri, boxBottom: Ni, boxTop: fi, defaultX: Ci, xAxis: wi });
          var { verticalAlign: xi } = yi;
          if (Mi && Ni) {
            fi = Mi.getBBox(), Ci = Mi.padding, wi = Ki(Oi.overflow, "justify") === "justify", yi.x = Oi.x || 0, yi.y = Oi.y || 0;
            const { x: di, y: pi } = this.adjustStackPosition({ labelBox: fi, verticalAlign: xi, textAlign: ai });
            Ni.x -= di, Ni.y -= pi, Mi.align(yi, !1, Ni), (xi = li.isInsidePlot(Mi.alignAttr.x + yi.x + di, Mi.alignAttr.y + yi.y + pi)) || (wi = !1), wi && Qi.prototype.justifyDataLabel.call(Ti, Mi, yi, Mi.alignAttr, fi, Ni), Mi.attr({
              x: Mi.alignAttr.x,
              y: Mi.alignAttr.y,
              rotation: Oi.rotation,
              rotationOriginX: fi.width / 2,
              rotationOriginY: fi.height / 2
            }), Ki(!wi && Oi.crop, !0) && (xi = Wi(Mi.x) && Wi(Mi.y) && li.isInsidePlot(Mi.x - Ci + Mi.width, Mi.y) && li.isInsidePlot(Mi.x + Ci, Mi.y)), Mi[xi ? "show" : "hide"]();
          }
          ss(this, "afterSetOffset", { xOffset: bi, width: Ri });
        }
        adjustStackPosition({ labelBox: bi, verticalAlign: Ri, textAlign: Ni }) {
          const fi = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 };
          return { x: bi.width / 2 + bi.width / 2 * fi[Ni], y: bi.height / 2 * fi[Ri] };
        }
        getStackBox(bi) {
          var Ri = this.axis;
          const Ni = Ri.chart, {
            boxTop: fi,
            defaultX: Ci,
            xOffset: wi,
            width: yi,
            boxBottom: Ti
          } = bi;
          var Mi = Ri.stacking.usePercentage ? 100 : Ki(fi, this.total, 0);
          Mi = Ri.toPixels(Mi), bi = bi.xAxis || Ni.xAxis[0];
          const Oi = Ki(Ci, bi.translate(this.x)) + wi;
          Ri = Ri.toPixels(Ti || Wi(Ri.min) && Ri.logarithmic && Ri.logarithmic.lin2log(Ri.min) || 0), Ri = Math.abs(Mi - Ri);
          const ai = this.isNegative;
          return Ni.inverted ? { x: (ai ? Mi : Mi - Ri) - Ni.plotLeft, y: bi.height - Oi - yi, width: Ri, height: yi } : { x: Oi + bi.transB - Ni.plotLeft, y: (ai ? Mi - Ri : Mi) - Ni.plotTop, width: yi, height: Ri };
        }
      }
      return Ui;
    }), ci(oi, "Core/Axis/Stacking/StackingAxis.js", [
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Axis/Axis.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Core/Axis/Stacking/StackItem.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi) {
      function is() {
        const ei = this, Fe = ei.inverted;
        ei.yAxis.forEach((ii) => {
          ii.stacking && ii.stacking.stacks && ii.hasVisibleSeries && (ii.stacking.oldStacks = ii.stacking.stacks);
        }), ei.series.forEach((ii) => {
          const hi = ii.xAxis && ii.xAxis.options || {};
          !ii.options.stacking || ii.visible !== !0 && ei.options.chart.ignoreHiddenSeries !== !1 || (ii.stackKey = [ii.type, xi(ii.options.stack, ""), Fe ? hi.top : hi.left, Fe ? hi.height : hi.width].join());
        });
      }
      function ss() {
        const ei = this.stacking;
        if (ei) {
          var Fe = ei.stacks;
          li(Fe, function(ii, hi) {
            Ti(ii), Fe[hi] = null;
          }), ei && ei.stackTotalGroup && ei.stackTotalGroup.destroy();
        }
      }
      function Wi() {
        this.coll !== "yAxis" || this.stacking || (this.stacking = new di(this));
      }
      function Ki(ei, Fe, ii, hi) {
        return !yi(ei) || ei.x !== Fe || hi && ei.stackKey !== hi ? ei = { x: Fe, index: 0, key: hi, stackKey: hi } : ei.index++, ei.key = [ii, Fe, ei.index].join(), ei;
      }
      function Ui() {
        const ei = this, Fe = ei.stackKey, ii = ei.yAxis.stacking.stacks, hi = ei.processedXData, gi = ei[ei.options.stacking + "Stacker"];
        let Ei;
        gi && [Fe, "-" + Fe].forEach((ni) => {
          let Pi = hi.length, Fi;
          for (; Pi--; ) {
            var Zi = hi[Pi];
            Ei = ei.getStackIndicator(Ei, Zi, ei.index, ni), (Fi = (Zi = ii[ni] && ii[ni][Zi]) && Zi.points[Ei.key]) && gi.call(ei, Fi, Zi, Pi);
          }
        });
      }
      function ki(ei, Fe, ii) {
        Fe = Fe.total ? 100 / Fe.total : 0, ei[0] = wi(ei[0] * Fe), ei[1] = wi(ei[1] * Fe), this.stackedYData[ii] = ei[1];
      }
      function bi() {
        const ei = this.yAxis.stacking;
        this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? fi.setStackedPoints.call(this, "group") : ei && li(ei.stacks, (Fe, ii) => {
          ii.slice(-5) === "group" && (li(Fe, (hi) => hi.destroy()), delete ei.stacks[ii]);
        });
      }
      function Ri(ei) {
        var Fe = this.chart;
        const ii = ei || this.options.stacking;
        if (ii && (this.visible === !0 || Fe.options.chart.ignoreHiddenSeries === !1)) {
          var hi = this.processedXData, gi = this.processedYData, Ei = [], ni = gi.length, Pi = this.options, Fi = Pi.threshold, Zi = xi(Pi.startFromThreshold && Fi, 0);
          Pi = Pi.stack, ei = ei ? `${this.type},${ii}` : this.stackKey;
          var rs = "-" + ei, Bi = this.negStacks;
          Fe = ii === "group" ? Fe.yAxis[0] : this.yAxis;
          var si = Fe.stacking.stacks, Li = Fe.stacking.oldStacks, Hi, Di;
          for (Fe.stacking.stacksTouched += 1, Di = 0; Di < ni; Di++) {
            var Vi = hi[Di], ri = gi[Di], mi = this.getStackIndicator(mi, Vi, this.index), vi = mi.key, zi = (Hi = Bi && ri < (Zi ? 0 : Fi)) ? rs : ei;
            si[zi] || (si[zi] = {}), si[zi][Vi] || (Li[zi] && Li[zi][Vi] ? (si[zi][Vi] = Li[zi][Vi], si[zi][Vi].total = null) : si[zi][Vi] = new ts(Fe, Fe.options.stackLabels, !!Hi, Vi, Pi)), zi = si[zi][Vi], ri !== null ? (zi.points[vi] = zi.points[this.index] = [xi(zi.cumulative, Zi)], yi(zi.cumulative) || (zi.base = vi), zi.touched = Fe.stacking.stacksTouched, 0 < mi.index && this.singleStacks === !1 && (zi.points[vi][0] = zi.points[this.index + "," + Vi + ",0"][0])) : zi.points[vi] = zi.points[this.index] = null, ii === "percent" ? (Hi = Hi ? ei : rs, Bi && si[Hi] && si[Hi][Vi] ? (Hi = si[Hi][Vi], zi.total = Hi.total = Math.max(Hi.total, zi.total) + Math.abs(ri) || 0) : zi.total = wi(zi.total + (Math.abs(ri) || 0))) : ii === "group" ? (Oi(ri) && (ri = ri[0]), ri !== null && (zi.total = (zi.total || 0) + 1)) : zi.total = wi(zi.total + (ri || 0)), zi.cumulative = ii === "group" ? (zi.total || 1) - 1 : wi(xi(zi.cumulative, Zi) + (ri || 0)), ri !== null && (zi.points[vi].push(zi.cumulative), Ei[Di] = zi.cumulative, zi.hasValidPoints = !0);
          }
          ii === "percent" && (Fe.stacking.usePercentage = !0), ii !== "group" && (this.stackedYData = Ei), Fe.stacking.oldStacks = {};
        }
      }
      const { getDeferredAnimation: Ni } = Si, { series: { prototype: fi } } = qi, { addEvent: Ci, correctFloat: wi, defined: yi, destroyObjectProperties: Ti, fireEvent: Mi, isArray: Oi, isNumber: ai, objectEach: li, pick: xi } = Qi;
      class di {
        constructor(Fe) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = Fe;
        }
        buildStacks() {
          const Fe = this.axis, ii = Fe.series, hi = Fe.options.reversedStacks, gi = ii.length;
          let Ei, ni;
          for (this.usePercentage = !1, ni = gi; ni--; )
            Ei = ii[hi ? ni : gi - ni - 1], Ei.setStackedPoints(), Ei.setGroupedPoints();
          for (ni = 0; ni < gi; ni++)
            ii[ni].modifyStacks();
          Mi(Fe, "afterBuildStacks");
        }
        cleanStacks() {
          let Fe;
          this.oldStacks && (Fe = this.stacks = this.oldStacks), li(Fe, function(ii) {
            li(ii, function(hi) {
              hi.cumulative = hi.total;
            });
          });
        }
        resetStacks() {
          li(this.stacks, (Fe) => {
            li(Fe, (ii, hi) => {
              ai(ii.touched) && ii.touched < this.stacksTouched ? (ii.destroy(), delete Fe[hi]) : (ii.total = null, ii.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          var Fe = this.axis;
          const ii = Fe.chart, hi = ii.renderer, gi = this.stacks;
          Fe = Ni(ii, Fe.options.stackLabels && Fe.options.stackLabels.animation || !1);
          const Ei = this.stackTotalGroup = this.stackTotalGroup || hi.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          Ei.translate(ii.plotLeft, ii.plotTop), li(gi, function(ni) {
            li(ni, function(Pi) {
              Pi.render(Ei);
            });
          }), Ei.animate({ opacity: 1 }, Fe);
        }
      }
      var pi;
      return function(ei) {
        const Fe = [];
        ei.compose = function(ii, hi, gi) {
          Qi.pushUnique(Fe, ii) && (Ci(ii, "init", Wi), Ci(ii, "destroy", ss)), Qi.pushUnique(Fe, hi) && (hi.prototype.getStacks = is), Qi.pushUnique(Fe, gi) && (ii = gi.prototype, ii.getStackIndicator = Ki, ii.modifyStacks = Ui, ii.percentStacker = ki, ii.setGroupedPoints = bi, ii.setStackedPoints = Ri);
        };
      }(pi || (pi = {})), pi;
    }), ci(
      oi,
      "Series/Line/LineSeries.js",
      [oi["Core/Series/Series.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]],
      function(Si, ji, qi) {
        const { defined: ts, merge: Qi } = qi;
        class is extends Si {
          constructor() {
            super(...arguments), this.points = this.options = this.data = void 0;
          }
          drawGraph() {
            const Wi = this, Ki = this.options, Ui = (this.gappedPath || this.getGraphPath).call(this), ki = this.chart.styledMode;
            let bi = [["graph", "highcharts-graph"]];
            ki || bi[0].push(Ki.lineColor || this.color || "#cccccc", Ki.dashStyle), bi = Wi.getZonesGraphs(bi), bi.forEach(function(Ri, Ni) {
              var fi = Ri[0];
              let Ci = Wi[fi];
              const wi = Ci ? "animate" : "attr";
              Ci ? (Ci.endX = Wi.preventGraphAnimation ? null : Ui.xMap, Ci.animate({ d: Ui })) : Ui.length && (Wi[fi] = Ci = Wi.chart.renderer.path(Ui).addClass(Ri[1]).attr({ zIndex: 1 }).add(Wi.group)), Ci && !ki && (fi = { stroke: Ri[2], "stroke-width": Ki.lineWidth || 0, fill: Wi.fillGraph && Wi.color || "none" }, Ri[3] ? fi.dashstyle = Ri[3] : Ki.linecap !== "square" && (fi["stroke-linecap"] = fi["stroke-linejoin"] = "round"), Ci[wi](fi).shadow(2 > Ni && Ki.shadow)), Ci && (Ci.startX = Ui.xMap, Ci.isArea = Ui.isArea);
            });
          }
          getGraphPath(Wi, Ki, Ui) {
            const ki = this, bi = ki.options, Ri = [], Ni = [];
            let fi, Ci = bi.step;
            Wi = Wi || ki.points;
            const wi = Wi.reversed;
            return wi && Wi.reverse(), (Ci = { right: 1, center: 2 }[Ci] || Ci && 3) && wi && (Ci = 4 - Ci), Wi = this.getValidPoints(Wi, !1, !(bi.connectNulls && !Ki && !Ui)), Wi.forEach(function(yi, Ti) {
              const Mi = yi.plotX, Oi = yi.plotY, ai = Wi[Ti - 1], li = yi.isNull || typeof Oi != "number";
              (yi.leftCliff || ai && ai.rightCliff) && !Ui && (fi = !0), li && !ts(Ki) && 0 < Ti ? fi = !bi.connectNulls : li && !Ki ? fi = !0 : (Ti === 0 || fi ? Ti = [["M", yi.plotX, yi.plotY]] : ki.getPointSpline ? Ti = [ki.getPointSpline(Wi, yi, Ti)] : Ci ? (Ti = Ci === 1 ? [["L", ai.plotX, Oi]] : Ci === 2 ? [["L", (ai.plotX + Mi) / 2, ai.plotY], ["L", (ai.plotX + Mi) / 2, Oi]] : [["L", Mi, ai.plotY]], Ti.push(["L", Mi, Oi])) : Ti = [["L", Mi, Oi]], Ni.push(yi.x), Ci && (Ni.push(yi.x), Ci === 2 && Ni.push(yi.x)), Ri.push.apply(Ri, Ti), fi = !1);
            }), Ri.xMap = Ni, ki.graphPath = Ri;
          }
          getZonesGraphs(Wi) {
            return this.zones.forEach(function(Ki, Ui) {
              Ui = ["zone-graph-" + Ui, "highcharts-graph highcharts-zone-graph-" + Ui + " " + (Ki.className || "")], this.chart.styledMode || Ui.push(Ki.color || this.color, Ki.dashStyle || this.options.dashStyle), Wi.push(Ui);
            }, this), Wi;
          }
        }
        return is.defaultOptions = Qi(Si.defaultOptions, { legendSymbol: "lineMarker" }), ji.registerSeriesType("line", is), is;
      }
    ), ci(oi, "Series/Area/AreaSeries.js", [
      oi["Core/Color/Color.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi) {
      const { seriesTypes: { line: ts } } = ji, { extend: Qi, merge: is, objectEach: ss, pick: Wi } = qi;
      class Ki extends ts {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          const ki = this, bi = this.areaPath, Ri = this.options, Ni = [["area", "highcharts-area", this.color, Ri.fillColor]];
          this.zones.forEach(function(fi, Ci) {
            Ni.push(["zone-area-" + Ci, "highcharts-area highcharts-zone-area-" + Ci + " " + fi.className, fi.color || ki.color, fi.fillColor || Ri.fillColor]);
          }), Ni.forEach(function(fi) {
            const Ci = fi[0], wi = {};
            let yi = ki[Ci];
            const Ti = yi ? "animate" : "attr";
            yi ? (yi.endX = ki.preventGraphAnimation ? null : bi.xMap, yi.animate({ d: bi })) : (wi.zIndex = 0, yi = ki[Ci] = ki.chart.renderer.path(bi).addClass(fi[1]).add(ki.group), yi.isArea = !0), ki.chart.styledMode || (fi[3] ? wi.fill = fi[3] : (wi.fill = fi[2], wi["fill-opacity"] = Wi(Ri.fillOpacity, 0.75))), yi[Ti](wi), yi.startX = bi.xMap, yi.shiftUnit = Ri.step ? 2 : 1;
          });
        }
        getGraphPath(ki) {
          var bi = ts.prototype.getGraphPath, Ri = this.options;
          const Ni = Ri.stacking, fi = this.yAxis, Ci = [], wi = [], yi = this.index, Ti = fi.stacking.stacks[this.stackKey], Mi = Ri.threshold, Oi = Math.round(fi.getThreshold(Ri.threshold));
          Ri = Wi(Ri.connectNulls, Ni === "percent");
          var ai = function(pi, ei, Fe) {
            var ii = ki[pi];
            pi = Ni && Ti[ii.x].points[yi];
            const hi = ii[Fe + "Null"] || 0;
            Fe = ii[Fe + "Cliff"] || 0;
            let gi, Ei;
            ii = !0, Fe || hi ? (gi = (hi ? pi[0] : pi[1]) + Fe, Ei = pi[0] + Fe, ii = !!hi) : !Ni && ki[ei] && ki[ei].isNull && (gi = Ei = Mi), typeof gi < "u" && (wi.push({ plotX: li, plotY: gi === null ? Oi : fi.getThreshold(gi), isNull: ii, isCliff: !0 }), Ci.push({ plotX: li, plotY: Ei === null ? Oi : fi.getThreshold(Ei), doCurve: !1 }));
          };
          let li;
          ki = ki || this.points, Ni && (ki = this.getStackPoints(ki));
          for (let pi = 0, ei = ki.length; pi < ei; ++pi) {
            Ni || (ki[pi].leftCliff = ki[pi].rightCliff = ki[pi].leftNull = ki[pi].rightNull = void 0);
            var xi = ki[pi].isNull;
            li = Wi(ki[pi].rectPlotX, ki[pi].plotX);
            var di = Ni ? Wi(ki[pi].yBottom, Oi) : Oi;
            (!xi || Ri) && (Ri || ai(pi, pi - 1, "left"), xi && !Ni && Ri || (wi.push(ki[pi]), Ci.push({ x: pi, plotX: li, plotY: di })), Ri || ai(pi, pi + 1, "right"));
          }
          return ai = bi.call(this, wi, !0, !0), Ci.reversed = !0, xi = bi.call(this, Ci, !0, !0), (di = xi[0]) && di[0] === "M" && (xi[0] = ["L", di[1], di[2]]), xi = ai.concat(xi), xi.length && xi.push(["Z"]), bi = bi.call(this, wi, !1, Ri), xi.xMap = ai.xMap, this.areaPath = xi, bi;
        }
        getStackPoints(ki) {
          const bi = this, Ri = [], Ni = [], fi = this.xAxis, Ci = this.yAxis, wi = Ci.stacking.stacks[this.stackKey], yi = {}, Ti = Ci.series, Mi = Ti.length, Oi = Ci.options.reversedStacks ? 1 : -1, ai = Ti.indexOf(bi);
          if (ki = ki || this.points, this.options.stacking) {
            for (let xi = 0; xi < ki.length; xi++)
              ki[xi].leftNull = ki[xi].rightNull = void 0, yi[ki[xi].x] = ki[xi];
            ss(wi, function(xi, di) {
              xi.total !== null && Ni.push(di);
            }), Ni.sort(function(xi, di) {
              return xi - di;
            });
            const li = Ti.map((xi) => xi.visible);
            Ni.forEach(function(xi, di) {
              let pi = 0, ei, Fe;
              if (yi[xi] && !yi[xi].isNull)
                Ri.push(yi[xi]), [-1, 1].forEach(function(ii) {
                  const hi = ii === 1 ? "rightNull" : "leftNull", gi = wi[Ni[di + ii]];
                  let Ei = 0;
                  if (gi) {
                    let ni = ai;
                    for (; 0 <= ni && ni < Mi; ) {
                      const Pi = Ti[ni].index;
                      ei = gi.points[Pi], ei || (Pi === bi.index ? yi[xi][hi] = !0 : li[ni] && (Fe = wi[xi].points[Pi]) && (Ei -= Fe[1] - Fe[0])), ni += Oi;
                    }
                  }
                  yi[xi][ii === 1 ? "rightCliff" : "leftCliff"] = Ei;
                });
              else {
                let ii = ai;
                for (; 0 <= ii && ii < Mi; ) {
                  if (ei = wi[xi].points[Ti[ii].index]) {
                    pi = ei[1];
                    break;
                  }
                  ii += Oi;
                }
                pi = Wi(pi, 0), pi = Ci.translate(pi, 0, 1, 0, 1), Ri.push({ isNull: !0, plotX: fi.translate(xi, 0, 0, 0, 1), x: xi, plotY: pi, yBottom: pi });
              }
            });
          }
          return Ri;
        }
      }
      return Ki.defaultOptions = is(ts.defaultOptions, { threshold: 0, legendSymbol: "rectangle" }), Qi(Ki.prototype, { singleStacks: !1 }), ji.registerSeriesType("area", Ki), Ki;
    }), ci(oi, "Series/Spline/SplineSeries.js", [oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      const { line: qi } = Si.seriesTypes, { merge: ts, pick: Qi } = ji;
      class is extends qi {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
        getPointSpline(Wi, Ki, Ui) {
          const ki = Ki.plotX || 0, bi = Ki.plotY || 0, Ri = Wi[Ui - 1];
          Ui = Wi[Ui + 1];
          let Ni, fi, Ci;
          if (Ri && !Ri.isNull && Ri.doCurve !== !1 && !Ki.isCliff && Ui && !Ui.isNull && Ui.doCurve !== !1 && !Ki.isCliff) {
            Wi = Ri.plotY || 0;
            var wi = Ui.plotX || 0;
            Ui = Ui.plotY || 0;
            let yi = 0;
            Ni = (1.5 * ki + (Ri.plotX || 0)) / 2.5, fi = (1.5 * bi + Wi) / 2.5, wi = (1.5 * ki + wi) / 2.5, Ci = (1.5 * bi + Ui) / 2.5, wi !== Ni && (yi = (Ci - fi) * (wi - ki) / (wi - Ni) + bi - Ci), fi += yi, Ci += yi, fi > Wi && fi > bi ? (fi = Math.max(Wi, bi), Ci = 2 * bi - fi) : fi < Wi && fi < bi && (fi = Math.min(Wi, bi), Ci = 2 * bi - fi), Ci > Ui && Ci > bi ? (Ci = Math.max(Ui, bi), fi = 2 * bi - Ci) : Ci < Ui && Ci < bi && (Ci = Math.min(Ui, bi), fi = 2 * bi - Ci), Ki.rightContX = wi, Ki.rightContY = Ci;
          }
          return Ki = ["C", Qi(Ri.rightContX, Ri.plotX, 0), Qi(Ri.rightContY, Ri.plotY, 0), Qi(Ni, ki, 0), Qi(fi, bi, 0), ki, bi], Ri.rightContX = Ri.rightContY = void 0, Ki;
        }
      }
      return is.defaultOptions = ts(qi.defaultOptions), Si.registerSeriesType(
        "spline",
        is
      ), is;
    }), ci(oi, "Series/AreaSpline/AreaSplineSeries.js", [oi["Series/Spline/SplineSeries.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { area: ts, area: { prototype: Qi } } = ji.seriesTypes, { extend: is, merge: ss } = qi;
      class Wi extends Si {
        constructor() {
          super(...arguments), this.options = this.points = this.data = void 0;
        }
      }
      return Wi.defaultOptions = ss(Si.defaultOptions, ts.defaultOptions), is(Wi.prototype, { getGraphPath: Qi.getGraphPath, getStackPoints: Qi.getStackPoints, drawGraph: Qi.drawGraph }), ji.registerSeriesType(
        "areaspline",
        Wi
      ), Wi;
    }), ci(oi, "Series/Column/ColumnSeriesDefaults.js", [], function() {
      return { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
    }), ci(oi, "Series/Column/ColumnSeries.js", [
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Color/Color.js"],
      oi["Series/Column/ColumnSeriesDefaults.js"],
      oi["Core/Globals.js"],
      oi["Core/Series/Series.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Core/Utilities.js"]
    ], function(Si, ji, qi, ts, Qi, is, ss) {
      const { animObject: Wi } = Si, { parse: Ki } = ji, { hasTouch: Ui, noop: ki } = ts, { clamp: bi, defined: Ri, extend: Ni, fireEvent: fi, isArray: Ci, isNumber: wi, merge: yi, pick: Ti, objectEach: Mi } = ss;
      class Oi extends Qi {
        constructor() {
          super(...arguments), this.points = this.options = this.group = this.data = this.borderWidth = void 0;
        }
        animate(li) {
          const xi = this, di = this.yAxis, pi = di.pos, ei = xi.options, Fe = this.chart.inverted, ii = {}, hi = Fe ? "translateX" : "translateY";
          let gi;
          li ? (ii.scaleY = 1e-3, li = bi(di.toPixels(ei.threshold), pi, pi + di.len), Fe ? ii.translateX = li - di.len : ii.translateY = li, xi.clipBox && xi.setClip(), xi.group.attr(ii)) : (gi = Number(xi.group.attr(hi)), xi.group.animate({ scaleY: 1 }, Ni(Wi(xi.options.animation), { step: function(Ei, ni) {
            xi.group && (ii[hi] = gi + ni.pos * (pi - gi), xi.group.attr(ii));
          } })));
        }
        init(li, xi) {
          super.init.apply(this, arguments);
          const di = this;
          li = di.chart, li.hasRendered && li.series.forEach(function(pi) {
            pi.type === di.type && (pi.isDirty = !0);
          });
        }
        getColumnMetrics() {
          const li = this;
          var xi = li.options;
          const di = li.xAxis, pi = li.yAxis;
          var ei = di.options.reversedStacks;
          ei = di.reversed && !ei || !di.reversed && ei;
          const Fe = {};
          let ii, hi = 0;
          xi.grouping === !1 ? hi = 1 : li.chart.series.forEach(function(Pi) {
            const Fi = Pi.yAxis, Zi = Pi.options;
            let rs;
            Pi.type !== li.type || !Pi.visible && li.chart.options.chart.ignoreHiddenSeries || pi.len !== Fi.len || pi.pos !== Fi.pos || (Zi.stacking && Zi.stacking !== "group" ? (ii = Pi.stackKey, typeof Fe[ii] > "u" && (Fe[ii] = hi++), rs = Fe[ii]) : Zi.grouping !== !1 && (rs = hi++), Pi.columnIndex = rs);
          });
          const gi = Math.min(Math.abs(di.transA) * (di.ordinal && di.ordinal.slope || xi.pointRange || di.closestPointRange || di.tickInterval || 1), di.len), Ei = gi * xi.groupPadding, ni = (gi - 2 * Ei) / (hi || 1);
          return xi = Math.min(xi.maxPointWidth || di.len, Ti(xi.pointWidth, ni * (1 - 2 * xi.pointPadding))), li.columnMetrics = { width: xi, offset: (ni - xi) / 2 + (Ei + ((li.columnIndex || 0) + (ei ? 1 : 0)) * ni - gi / 2) * (ei ? -1 : 1), paddedWidth: ni, columnCount: hi }, li.columnMetrics;
        }
        crispCol(li, xi, di, pi) {
          var ei = this.borderWidth, Fe = -(ei % 2 ? 0.5 : 0);
          return ei = ei % 2 ? 0.5 : 1, this.options.crisp && (di = Math.round(li + di) + Fe, li = Math.round(li) + Fe, di -= li), pi = Math.round(xi + pi) + ei, Fe = 0.5 >= Math.abs(xi) && 0.5 < pi, xi = Math.round(xi) + ei, pi -= xi, Fe && pi && (--xi, pi += 1), { x: li, y: xi, width: di, height: pi };
        }
        adjustForMissingColumns(li, xi, di, pi) {
          const ei = this.options.stacking;
          if (!di.isNull && 1 < pi.columnCount) {
            const Fe = this.yAxis.options.reversedStacks;
            let ii = 0, hi = Fe ? 0 : -pi.columnCount;
            Mi(this.yAxis.stacking && this.yAxis.stacking.stacks, (gi) => {
              if (typeof di.x == "number") {
                const Ei = gi[di.x.toString()];
                Ei && (gi = Ei.points[this.index], ei ? (gi && (ii = hi), Ei.hasValidPoints && (Fe ? hi++ : hi--)) : Ci(gi) && (gi = Object.keys(Ei.points).filter((ni) => !ni.match(",") && Ei.points[ni] && 1 < Ei.points[ni].length).map(parseFloat).sort((ni, Pi) => Pi - ni), ii = gi.indexOf(this.index), hi = gi.length));
              }
            }), li = (di.plotX || 0) + ((hi - 1) * pi.paddedWidth + xi) / 2 - xi - ii * pi.paddedWidth;
          }
          return li;
        }
        translate() {
          const li = this, xi = li.chart, di = li.options;
          var pi = li.dense = 2 > li.closestPointRange * li.xAxis.transA;
          pi = li.borderWidth = Ti(di.borderWidth, pi ? 0 : 1);
          const ei = li.xAxis, Fe = li.yAxis, ii = di.threshold, hi = Ti(di.minPointLength, 5), gi = li.getColumnMetrics(), Ei = gi.width, ni = li.pointXOffset = gi.offset, Pi = li.dataMin, Fi = li.dataMax;
          let Zi = li.barW = Math.max(Ei, 1 + 2 * pi), rs = li.translatedThreshold = Fe.getThreshold(ii);
          xi.inverted && (rs -= 0.5), di.pointPadding && (Zi = Math.ceil(Zi)), Qi.prototype.translate.apply(li), li.points.forEach(function(Bi) {
            const si = Ti(Bi.yBottom, rs);
            var Li = 999 + Math.abs(si), Hi = Bi.plotX || 0;
            Li = bi(Bi.plotY, -Li, Fe.len + Li);
            let Di = Math.min(Li, si), Vi = Math.max(Li, si) - Di, ri = Ei, mi = Hi + ni, vi = Zi;
            hi && Math.abs(Vi) < hi && (Vi = hi, Hi = !Fe.reversed && !Bi.negative || Fe.reversed && Bi.negative, wi(ii) && wi(Fi) && Bi.y === ii && Fi <= ii && (Fe.min || 0) < ii && (Pi !== Fi || (Fe.max || 0) <= ii) && (Hi = !Hi, Bi.negative = !Bi.negative), Di = Math.abs(Di - rs) > hi ? si - hi : rs - (Hi ? hi : 0)), Ri(Bi.options.pointWidth) && (ri = vi = Math.ceil(Bi.options.pointWidth), mi -= Math.round((ri - Ei) / 2)), di.centerInCategory && (mi = li.adjustForMissingColumns(mi, ri, Bi, gi)), Bi.barX = mi, Bi.pointWidth = ri, Bi.tooltipPos = xi.inverted ? [bi(Fe.len + Fe.pos - xi.plotLeft - Li, Fe.pos - xi.plotLeft, Fe.len + Fe.pos - xi.plotLeft), ei.len + ei.pos - xi.plotTop - mi - vi / 2, Vi] : [ei.left - xi.plotLeft + mi + vi / 2, bi(Li + Fe.pos - xi.plotTop, Fe.pos - xi.plotTop, Fe.len + Fe.pos - xi.plotTop), Vi], Bi.shapeType = li.pointClass.prototype.shapeType || "roundedRect", Bi.shapeArgs = li.crispCol(mi, Bi.isNull ? rs : Di, vi, Bi.isNull ? 0 : Vi);
          }), fi(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(li, xi) {
          const di = this.options;
          var pi = this.pointAttrToOptions || {}, ei = pi.stroke || "borderColor";
          const Fe = pi["stroke-width"] || "borderWidth";
          let ii, hi = li && li.color || this.color, gi = li && li[ei] || di[ei] || hi;
          pi = li && li.options.dashStyle || di.dashStyle;
          let Ei = li && li[Fe] || di[Fe] || this[Fe] || 0, ni = Ti(li && li.opacity, di.opacity, 1);
          return li && this.zones.length && (ii = li.getZone(), hi = li.options.color || ii && (ii.color || li.nonZonedColor) || this.color, ii && (gi = ii.borderColor || gi, pi = ii.dashStyle || pi, Ei = ii.borderWidth || Ei)), xi && li && (li = yi(
            di.states[xi],
            li.options.states && li.options.states[xi] || {}
          ), xi = li.brightness, hi = li.color || typeof xi < "u" && Ki(hi).brighten(li.brightness).get() || hi, gi = li[ei] || gi, Ei = li[Fe] || Ei, pi = li.dashStyle || pi, ni = Ti(li.opacity, ni)), ei = { fill: hi, stroke: gi, "stroke-width": Ei, opacity: ni }, pi && (ei.dashstyle = pi), ei;
        }
        drawPoints(li = this.points) {
          const xi = this, di = this.chart, pi = xi.options, ei = di.renderer, Fe = pi.animationLimit || 250;
          let ii;
          li.forEach(function(hi) {
            let gi = hi.graphic, Ei = !!gi, ni = gi && di.pointCount < Fe ? "animate" : "attr";
            wi(hi.plotY) && hi.y !== null ? (ii = hi.shapeArgs, gi && hi.hasNewShapeType() && (gi = gi.destroy()), xi.enabledDataSorting && (hi.startXPos = xi.xAxis.reversed ? -(ii && ii.width || 0) : xi.xAxis.width), gi || (hi.graphic = gi = ei[hi.shapeType](ii).add(hi.group || xi.group)) && xi.enabledDataSorting && di.hasRendered && di.pointCount < Fe && (gi.attr({ x: hi.startXPos }), Ei = !0, ni = "animate"), gi && Ei && gi[ni](yi(ii)), di.styledMode || gi[ni](xi.pointAttribs(hi, hi.selected && "select")).shadow(hi.allowShadow !== !1 && pi.shadow), gi && (gi.addClass(hi.getClassName(), !0), gi.attr({ visibility: hi.visible ? "inherit" : "hidden" }))) : gi && (hi.graphic = gi.destroy());
          });
        }
        drawTracker(li = this.points) {
          const xi = this, di = xi.chart, pi = di.pointer, ei = function(ii) {
            const hi = pi.getPointFromEvent(ii);
            typeof hi < "u" && xi.options.enableMouseTracking && (pi.isDirectTouch = !0, hi.onMouseOver(ii));
          };
          let Fe;
          li.forEach(function(ii) {
            Fe = Ci(ii.dataLabels) ? ii.dataLabels : ii.dataLabel ? [ii.dataLabel] : [], ii.graphic && (ii.graphic.element.point = ii), Fe.forEach(function(hi) {
              hi.div ? hi.div.point = ii : hi.element.point = ii;
            });
          }), xi._hasTracking || (xi.trackerGroups.forEach(function(ii) {
            xi[ii] && (xi[ii].addClass("highcharts-tracker").on("mouseover", ei).on(
              "mouseout",
              function(hi) {
                pi.onTrackerMouseOut(hi);
              }
            ), Ui && xi[ii].on("touchstart", ei), !di.styledMode && xi.options.cursor && xi[ii].css({ cursor: xi.options.cursor }));
          }), xi._hasTracking = !0), fi(this, "afterDrawTracker");
        }
        remove() {
          const li = this, xi = li.chart;
          xi.hasRendered && xi.series.forEach(function(di) {
            di.type === li.type && (di.isDirty = !0);
          }), Qi.prototype.remove.apply(li, arguments);
        }
      }
      return Oi.defaultOptions = yi(Qi.defaultOptions, qi), Ni(Oi.prototype, { cropShoulder: 0, directTouch: !0, getSymbol: ki, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), is.registerSeriesType(
        "column",
        Oi
      ), Oi;
    }), ci(oi, "Core/Series/DataLabel.js", [oi["Core/Animation/AnimationUtilities.js"], oi["Core/Templating.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { getDeferredAnimation: ts } = Si, { format: Qi } = ji, { defined: is, extend: ss, fireEvent: Wi, isArray: Ki, isString: Ui, merge: ki, objectEach: bi, pick: Ri, splat: Ni } = qi;
      var fi;
      return function(Ci) {
        function wi(pi, ei, Fe, ii, hi) {
          const gi = this.chart;
          var Ei = this.isCartesian && gi.inverted;
          const ni = this.enabledDataSorting;
          var Pi = pi.plotX, Fi = pi.plotY;
          const Zi = Fe.rotation;
          var rs = Fe.align;
          Fi = is(Pi) && is(Fi) && gi.isInsidePlot(
            Pi,
            Math.round(Fi),
            { inverted: Ei, paneCoordinates: !0, series: this }
          );
          let Bi = Ri(Fe.overflow, ni ? "none" : "justify") === "justify";
          if (Ei = this.visible && pi.visible !== !1 && is(Pi) && (pi.series.forceDL || ni && !Bi || Fi || Ri(Fe.inside, !!this.options.stacking) && ii && gi.isInsidePlot(Pi, Ei ? ii.x + 1 : ii.y + ii.height - 1, { inverted: Ei, paneCoordinates: !0, series: this })), Pi = pi.pos(), Ei && Pi) {
            Zi && ei.attr({ align: rs }), rs = ei.getBBox(!0);
            var si = [0, 0], Li = gi.renderer.fontMetrics(ei).b;
            if (ii = ss({ x: Pi[0], y: Math.round(Pi[1]), width: 0, height: 0 }, ii), ss(Fe, { width: rs.width, height: rs.height }), Zi ? (Bi = !1, si = gi.renderer.rotCorr(Li, Zi), Li = { x: ii.x + (Fe.x || 0) + ii.width / 2 + si.x, y: ii.y + (Fe.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[Fe.verticalAlign] * ii.height }, si = [rs.x - Number(ei.attr("x")), rs.y - Number(ei.attr("y"))], ni && this.xAxis && !Bi && this.setDataLabelStartPos(pi, ei, hi, Fi, Li), ei[hi ? "attr" : "animate"](Li)) : (ni && this.xAxis && !Bi && this.setDataLabelStartPos(pi, ei, hi, Fi, ii), ei.align(Fe, void 0, ii), Li = ei.alignAttr), Bi && 0 <= ii.height)
              this.justifyDataLabel(ei, Fe, Li, rs, ii, hi);
            else if (Ri(Fe.crop, !0)) {
              let { x: Hi, y: Di } = Li;
              Hi += si[0], Di += si[1], Ei = gi.isInsidePlot(Hi, Di, {
                paneCoordinates: !0,
                series: this
              }) && gi.isInsidePlot(Hi + rs.width, Di + rs.height, { paneCoordinates: !0, series: this });
            }
            Fe.shape && !Zi && ei[hi ? "attr" : "animate"]({ anchorX: Pi[0], anchorY: Pi[1] });
          }
          hi && ni && (ei.placed = !1), Ei || ni && !Bi ? ei.show() : (ei.hide(), ei.placed = !1);
        }
        function yi(pi, ei) {
          var Fe = ei.filter;
          return Fe ? (ei = Fe.operator, pi = pi[Fe.property], Fe = Fe.value, ei === ">" && pi > Fe || ei === "<" && pi < Fe || ei === ">=" && pi >= Fe || ei === "<=" && pi <= Fe || ei === "==" && pi == Fe || ei === "===" && pi === Fe) : !0;
        }
        function Ti() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
        }
        function Mi(pi) {
          const ei = this.hasRendered || 0, Fe = this.initDataLabelsGroup().attr({ opacity: +ei });
          return !ei && Fe && (this.visible && Fe.show(), this.options.animation ? Fe.animate({ opacity: 1 }, pi) : Fe.attr({ opacity: 1 })), Fe;
        }
        function Oi(pi = this.points) {
          var ei, Fe;
          const ii = this, hi = ii.chart, gi = ii.options, Ei = hi.renderer, { backgroundColor: ni, plotBackgroundColor: Pi } = hi.options.chart, Fi = hi.options.plotOptions, Zi = Ei.getContrast(Ui(Pi) && Pi || Ui(ni) && ni || "#000000");
          let rs = gi.dataLabels, Bi, si;
          var Li = Ni(rs)[0];
          const Hi = Li.animation;
          Li = Li.defer ? ts(hi, Hi, ii) : { defer: 0, duration: 0 }, rs = li(li((ei = Fi == null ? void 0 : Fi.series) === null || ei === void 0 ? void 0 : ei.dataLabels, (Fe = Fi == null ? void 0 : Fi[ii.type]) === null || Fe === void 0 ? void 0 : Fe.dataLabels), rs), Wi(this, "drawDataLabels"), (Ki(rs) || rs.enabled || ii._hasPointLabels) && (si = this.initDataLabels(Li), pi.forEach((Di) => {
            var Vi;
            const ri = Di.dataLabels || [];
            for (Bi = Ni(li(rs, Di.dlOptions || ((Vi = Di.options) === null || Vi === void 0 ? void 0 : Vi.dataLabels))), Bi.forEach((mi, vi) => {
              var zi, Xi = mi.enabled && (!Di.isNull || Di.dataLabelOnNull) && yi(Di, mi);
              const Gi = Di.connectors ? Di.connectors[vi] : Di.connector, Ji = mi.style || {};
              let es = {}, os = ri[vi], ns = !os;
              const ls = Ri(mi.distance, Di.labelDistance);
              if (Xi) {
                var Ii = Ri(mi[Di.formatPrefix + "Format"], mi.format), Ai = Di.getLabelConfig();
                if (Ai = is(Ii) ? Qi(Ii, Ai, hi) : (mi[Di.formatPrefix + "Formatter"] || mi.formatter).call(Ai, mi), Ii = mi.rotation, hi.styledMode || (Ji.color = Ri(mi.color, Ji.color, Ui(ii.color) ? ii.color : void 0, "#000000"), Ji.color === "contrast" ? (Di.contrastColor = Ei.getContrast(Di.color || ii.color), Ji.color = !is(ls) && mi.inside || 0 > (ls || 0) || gi.stacking ? Di.contrastColor : Zi) : delete Di.contrastColor, gi.cursor && (Ji.cursor = gi.cursor)), es = { r: mi.borderRadius || 0, rotation: Ii, padding: mi.padding, zIndex: 1 }, !hi.styledMode) {
                  const { backgroundColor: $i, borderColor: Yi } = mi;
                  es.fill = $i === "auto" ? Di.color : $i, es.stroke = Yi === "auto" ? Di.color : Yi, es["stroke-width"] = mi.borderWidth;
                }
                bi(es, ($i, Yi) => {
                  typeof $i > "u" && delete es[Yi];
                });
              }
              !os || Xi && is(Ai) && !!os.div == !!mi.useHTML && (os.rotation && mi.rotation || os.rotation === mi.rotation) || (os = void 0, ns = !0, Gi && Di.connector && (Di.connector = Di.connector.destroy(), Di.connectors && (Di.connectors.length === 1 ? delete Di.connectors : delete Di.connectors[vi]))), Xi && is(Ai) && (os ? es.text = Ai : (os = Ii ? Ei.text(Ai, 0, 0, mi.useHTML).addClass("highcharts-data-label") : Ei.label(Ai, 0, 0, mi.shape, void 0, void 0, mi.useHTML, void 0, "data-label")) && os.addClass(" highcharts-data-label-color-" + Di.colorIndex + " " + (mi.className || "") + (mi.useHTML ? " highcharts-tracker" : "")), os && (os.options = mi, os.attr(es), hi.styledMode || os.css(Ji).shadow(mi.shadow), (Xi = mi[Di.formatPrefix + "TextPath"] || mi.textPath) && !mi.useHTML && (os.setTextPath(((zi = Di.getDataLabelPath) === null || zi === void 0 ? void 0 : zi.call(Di, os)) || Di.graphic, Xi), Di.dataLabelPath && !Xi.enabled && (Di.dataLabelPath = Di.dataLabelPath.destroy())), os.added || os.add(si), ii.alignDataLabel(Di, os, mi, void 0, ns), os.isActive = !0, ri[vi] && ri[vi] !== os && ri[vi].destroy(), ri[vi] = os));
            }), Vi = ri.length; Vi--; )
              ri[Vi].isActive ? ri[Vi].isActive = !1 : (ri[Vi].destroy(), ri.splice(Vi, 1));
            Di.dataLabel = ri[0], Di.dataLabels = ri;
          })), Wi(this, "afterDrawDataLabels");
        }
        function ai(pi, ei, Fe, ii, hi, gi) {
          const Ei = this.chart, ni = ei.align, Pi = ei.verticalAlign, Fi = pi.box ? 0 : pi.padding || 0;
          let { x: Zi = 0, y: rs = 0 } = ei, Bi, si;
          return Bi = (Fe.x || 0) + Fi, 0 > Bi && (ni === "right" && 0 <= Zi ? (ei.align = "left", ei.inside = !0) : Zi -= Bi, si = !0), Bi = (Fe.x || 0) + ii.width - Fi, Bi > Ei.plotWidth && (ni === "left" && 0 >= Zi ? (ei.align = "right", ei.inside = !0) : Zi += Ei.plotWidth - Bi, si = !0), Bi = Fe.y + Fi, 0 > Bi && (Pi === "bottom" && 0 <= rs ? (ei.verticalAlign = "top", ei.inside = !0) : rs -= Bi, si = !0), Bi = (Fe.y || 0) + ii.height - Fi, Bi > Ei.plotHeight && (Pi === "top" && 0 >= rs ? (ei.verticalAlign = "bottom", ei.inside = !0) : rs += Ei.plotHeight - Bi, si = !0), si && (ei.x = Zi, ei.y = rs, pi.placed = !gi, pi.align(ei, void 0, hi)), si;
        }
        function li(pi, ei) {
          let Fe = [], ii;
          if (Ki(pi) && !Ki(ei))
            Fe = pi.map(function(hi) {
              return ki(hi, ei);
            });
          else if (Ki(ei) && !Ki(pi))
            Fe = ei.map(function(hi) {
              return ki(pi, hi);
            });
          else if (!Ki(pi) && !Ki(ei))
            Fe = ki(pi, ei);
          else if (Ki(pi) && Ki(ei))
            for (ii = Math.max(pi.length, ei.length); ii--; )
              Fe[ii] = ki(pi[ii], ei[ii]);
          return Fe;
        }
        function xi(pi, ei, Fe, ii, hi) {
          const gi = this.chart, Ei = gi.inverted, ni = this.xAxis, Pi = ni.reversed, Fi = Ei ? ei.height / 2 : ei.width / 2;
          pi = (pi = pi.pointWidth) ? pi / 2 : 0, ei.startXPos = Ei ? hi.x : Pi ? -Fi - pi : ni.width - Fi + pi, ei.startYPos = Ei ? Pi ? this.yAxis.height - Fi + pi : -Fi - pi : hi.y, ii ? ei.visibility === "hidden" && (ei.show(), ei.attr({ opacity: 0 }).animate({ opacity: 1 })) : ei.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, ei.hide), gi.hasRendered && (Fe && ei.attr({ x: ei.startXPos, y: ei.startYPos }), ei.placed = !0);
        }
        const di = [];
        Ci.compose = function(pi) {
          qi.pushUnique(di, pi) && (pi = pi.prototype, pi.initDataLabelsGroup = Ti, pi.initDataLabels = Mi, pi.alignDataLabel = wi, pi.drawDataLabels = Oi, pi.justifyDataLabel = ai, pi.setDataLabelStartPos = xi);
        };
      }(fi || (fi = {})), fi;
    }), ci(oi, "Series/Column/ColumnDataLabel.js", [oi["Core/Series/DataLabel.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { series: ts } = ji, { merge: Qi, pick: is } = qi;
      var ss;
      return function(Wi) {
        function Ki(ki, bi, Ri, Ni, fi) {
          let Ci = this.chart.inverted;
          var wi = ki.series;
          let yi = (wi.xAxis ? wi.xAxis.len : this.chart.plotSizeX) || 0;
          wi = (wi.yAxis ? wi.yAxis.len : this.chart.plotSizeY) || 0;
          var Ti = ki.dlBox || ki.shapeArgs;
          let Mi = is(ki.below, ki.plotY > is(this.translatedThreshold, wi)), Oi = is(Ri.inside, !!this.options.stacking);
          Ti && (Ni = Qi(Ti), 0 > Ni.y && (Ni.height += Ni.y, Ni.y = 0), Ti = Ni.y + Ni.height - wi, 0 < Ti && Ti < Ni.height && (Ni.height -= Ti), Ci && (Ni = { x: wi - Ni.y - Ni.height, y: yi - Ni.x - Ni.width, width: Ni.height, height: Ni.width }), Oi || (Ci ? (Ni.x += Mi ? 0 : Ni.width, Ni.width = 0) : (Ni.y += Mi ? Ni.height : 0, Ni.height = 0))), Ri.align = is(Ri.align, !Ci || Oi ? "center" : Mi ? "right" : "left"), Ri.verticalAlign = is(Ri.verticalAlign, Ci || Oi ? "middle" : Mi ? "top" : "bottom"), ts.prototype.alignDataLabel.call(this, ki, bi, Ri, Ni, fi), Ri.inside && ki.contrastColor && bi.css({ color: ki.contrastColor });
        }
        const Ui = [];
        Wi.compose = function(ki) {
          Si.compose(ts), qi.pushUnique(Ui, ki) && (ki.prototype.alignDataLabel = Ki);
        };
      }(ss || (ss = {})), ss;
    }), ci(oi, "Series/Bar/BarSeries.js", [oi["Series/Column/ColumnSeries.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { extend: ts, merge: Qi } = qi;
      class is extends Si {
        constructor() {
          super(...arguments), this.points = this.options = this.data = void 0;
        }
      }
      return is.defaultOptions = Qi(Si.defaultOptions, {}), ts(is.prototype, { inverted: !0 }), ji.registerSeriesType("bar", is), is;
    }), ci(oi, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
      return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
    }), ci(
      oi,
      "Series/Scatter/ScatterSeries.js",
      [oi["Series/Scatter/ScatterSeriesDefaults.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]],
      function(Si, ji, qi) {
        const { column: ts, line: Qi } = ji.seriesTypes, { addEvent: is, extend: ss, merge: Wi } = qi;
        class Ki extends Qi {
          constructor() {
            super(...arguments), this.points = this.options = this.data = void 0;
          }
          applyJitter() {
            const ki = this, bi = this.options.jitter, Ri = this.points.length;
            bi && this.points.forEach(function(Ni, fi) {
              ["x", "y"].forEach(function(Ci, wi) {
                let yi = "plot" + Ci.toUpperCase(), Ti, Mi;
                if (bi[Ci] && !Ni.isNull) {
                  var Oi = ki[Ci + "Axis"];
                  Mi = bi[Ci] * Oi.transA, Oi && !Oi.isLog && (Ti = Math.max(0, Ni[yi] - Mi), Oi = Math.min(Oi.len, Ni[yi] + Mi), wi = 1e4 * Math.sin(fi + wi * Ri), wi -= Math.floor(wi), Ni[yi] = Ti + (Oi - Ti) * wi, Ci === "x" && (Ni.clientX = Ni.plotX));
                }
              });
            });
          }
          drawGraph() {
            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
          }
        }
        return Ki.defaultOptions = Wi(Qi.defaultOptions, Si), ss(Ki.prototype, { drawTracker: ts.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }), is(Ki, "afterTranslate", function() {
          this.applyJitter();
        }), ji.registerSeriesType("scatter", Ki), Ki;
      }
    ), ci(oi, "Series/CenteredUtilities.js", [oi["Core/Globals.js"], oi["Core/Series/Series.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { deg2rad: ts } = Si, { fireEvent: Qi, isNumber: is, pick: ss, relativeLength: Wi } = qi;
      var Ki;
      return function(Ui) {
        Ui.getCenter = function() {
          var ki = this.options, bi = this.chart;
          const Ri = 2 * (ki.slicedOffset || 0), Ni = bi.plotWidth - 2 * Ri, fi = bi.plotHeight - 2 * Ri;
          var Ci = ki.center;
          const wi = Math.min(Ni, fi), yi = ki.thickness;
          var Ti = ki.size;
          let Mi = ki.innerSize || 0;
          for (typeof Ti == "string" && (Ti = parseFloat(Ti)), typeof Mi == "string" && (Mi = parseFloat(Mi)), ki = [ss(Ci[0], "50%"), ss(Ci[1], "50%"), ss(Ti && 0 > Ti ? void 0 : ki.size, "100%"), ss(Mi && 0 > Mi ? void 0 : ki.innerSize || 0, "0%")], !bi.angular || this instanceof ji || (ki[3] = 0), Ci = 0; 4 > Ci; ++Ci)
            Ti = ki[Ci], bi = 2 > Ci || Ci === 2 && /%$/.test(Ti), ki[Ci] = Wi(Ti, [Ni, fi, wi, ki[2]][Ci]) + (bi ? Ri : 0);
          return ki[3] > ki[2] && (ki[3] = ki[2]), is(yi) && 2 * yi < ki[2] && 0 < yi && (ki[3] = ki[2] - 2 * yi), Qi(this, "afterGetCenter", { positions: ki }), ki;
        }, Ui.getStartAndEndRadians = function(ki, bi) {
          return ki = is(ki) ? ki : 0, bi = is(bi) && bi > ki && 360 > bi - ki ? bi : ki + 360, { start: ts * (ki + -90), end: ts * (bi + -90) };
        };
      }(Ki || (Ki = {})), Ki;
    }), ci(oi, "Series/Pie/PiePoint.js", [oi["Core/Animation/AnimationUtilities.js"], oi["Core/Series/Point.js"], oi["Core/Utilities.js"]], function(Si, ji, qi) {
      const { setAnimation: ts } = Si, { addEvent: Qi, defined: is, extend: ss, isNumber: Wi, pick: Ki, relativeLength: Ui } = qi;
      class ki extends ji {
        constructor() {
          super(...arguments), this.series = this.options = this.labelDistance = void 0;
        }
        getConnectorPath() {
          const Ri = this.labelPosition, Ni = this.series.options.dataLabels, fi = this.connectorShapes;
          let Ci = Ni.connectorShape;
          return fi[Ci] && (Ci = fi[Ci]), Ci.call(
            this,
            { x: Ri.computed.x, y: Ri.computed.y, alignment: Ri.alignment },
            Ri.connectorPosition,
            Ni
          );
        }
        getTranslate() {
          return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
        }
        haloPath(Ri) {
          const Ni = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(Ni.x, Ni.y, Ni.r + Ri, Ni.r + Ri, { innerR: Ni.r - 1, start: Ni.start, end: Ni.end, borderRadius: Ni.borderRadius });
        }
        init() {
          super.init.apply(this, arguments), this.name = Ki(this.name, "Slice");
          const Ri = (Ni) => {
            this.slice(Ni.type === "select");
          };
          return Qi(this, "select", Ri), Qi(
            this,
            "unselect",
            Ri
          ), this;
        }
        isValid() {
          return Wi(this.y) && 0 <= this.y;
        }
        setVisible(Ri, Ni) {
          const fi = this.series, Ci = fi.chart, wi = fi.options.ignoreHiddenPoint;
          Ni = Ki(Ni, wi), Ri !== this.visible && (this.visible = this.options.visible = Ri = typeof Ri > "u" ? !this.visible : Ri, fi.options.data[fi.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector"].forEach((yi) => {
            this[yi] && this[yi][Ri ? "show" : "hide"](Ri);
          }), this.legendItem && Ci.legend.colorizeItem(this, Ri), Ri || this.state !== "hover" || this.setState(""), wi && (fi.isDirty = !0), Ni && Ci.redraw());
        }
        slice(Ri, Ni, fi) {
          const Ci = this.series;
          ts(fi, Ci.chart), Ki(Ni, !0), this.sliced = this.options.sliced = is(Ri) ? Ri : !this.sliced, Ci.options.data[Ci.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      return ss(ki.prototype, { connectorShapes: { fixedOffset: function(bi, Ri, Ni) {
        const fi = Ri.breakAt;
        return Ri = Ri.touchingSliceAt, [["M", bi.x, bi.y], Ni.softConnector ? ["C", bi.x + (bi.alignment === "left" ? -5 : 5), bi.y, 2 * fi.x - Ri.x, 2 * fi.y - Ri.y, fi.x, fi.y] : ["L", fi.x, fi.y], ["L", Ri.x, Ri.y]];
      }, straight: function(bi, Ri) {
        return Ri = Ri.touchingSliceAt, [
          ["M", bi.x, bi.y],
          ["L", Ri.x, Ri.y]
        ];
      }, crookedLine: function(bi, Ri, Ni) {
        const { breakAt: fi, touchingSliceAt: Ci } = Ri;
        ({ series: Ri } = this);
        const [wi, yi, Ti] = Ri.center, Mi = Ti / 2, Oi = Ri.chart.plotWidth, ai = Ri.chart.plotLeft;
        Ri = bi.alignment === "left";
        const { x: li, y: xi } = bi;
        return Ni.crookDistance ? (bi = Ui(Ni.crookDistance, 1), bi = Ri ? wi + Mi + (Oi + ai - wi - Mi) * (1 - bi) : ai + (wi - Mi) * bi) : bi = wi + (yi - xi) * Math.tan((this.angle || 0) - Math.PI / 2), Ni = [["M", li, xi]], (Ri ? bi <= li && bi >= fi.x : bi >= li && bi <= fi.x) && Ni.push(["L", bi, xi]), Ni.push(["L", fi.x, fi.y], ["L", Ci.x, Ci.y]), Ni;
      } } }), ki;
    }), ci(oi, "Series/Pie/PieSeriesDefaults.js", [], function() {
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
    }), ci(oi, "Series/Pie/PieSeries.js", [oi["Series/CenteredUtilities.js"], oi["Series/Column/ColumnSeries.js"], oi["Core/Globals.js"], oi["Series/Pie/PiePoint.js"], oi["Series/Pie/PieSeriesDefaults.js"], oi["Core/Series/Series.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Renderer/SVG/Symbols.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts, Qi, is, ss, Wi, Ki) {
      const { getStartAndEndRadians: Ui } = Si;
      ({ noop: qi } = qi);
      const { clamp: ki, extend: bi, fireEvent: Ri, merge: Ni, pick: fi, relativeLength: Ci } = Ki;
      class wi extends is {
        constructor() {
          super(...arguments), this.points = this.options = this.maxLabelDistance = this.data = this.center = void 0;
        }
        animate(Ti) {
          const Mi = this, Oi = Mi.points, ai = Mi.startAngleRad;
          Ti || Oi.forEach(function(li) {
            const xi = li.graphic, di = li.shapeArgs;
            xi && di && (xi.attr({ r: fi(li.startR, Mi.center && Mi.center[3] / 2), start: ai, end: ai }), xi.animate({ r: di.r, start: di.start, end: di.end }, Mi.options.animation));
          });
        }
        drawEmpty() {
          const Ti = this.startAngleRad, Mi = this.endAngleRad, Oi = this.options;
          let ai, li;
          this.total === 0 && this.center ? (ai = this.center[0], li = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(
            ai,
            li,
            this.center[1] / 2,
            0,
            Ti,
            Mi
          ).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: Wi.arc(ai, li, this.center[2] / 2, 0, { start: Ti, end: Mi, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": Oi.borderWidth, fill: Oi.fillColor || "none", stroke: Oi.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
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
        getX(Ti, Mi, Oi) {
          const ai = this.center, li = this.radii ? this.radii[Oi.index] || 0 : ai[2] / 2;
          return Ti = Math.asin(ki((Ti - ai[1]) / (li + Oi.labelDistance), -1, 1)), ai[0] + (Mi ? -1 : 1) * Math.cos(Ti) * (li + Oi.labelDistance) + (0 < Oi.labelDistance ? (Mi ? -1 : 1) * this.options.dataLabels.padding : 0);
        }
        hasData() {
          return !!this.processedXData.length;
        }
        redrawPoints() {
          const Ti = this, Mi = Ti.chart;
          let Oi, ai, li, xi;
          this.drawEmpty(), Ti.group && !Mi.styledMode && Ti.group.shadow(Ti.options.shadow), Ti.points.forEach(function(di) {
            const pi = {};
            ai = di.graphic, !di.isNull && ai ? (xi = di.shapeArgs, Oi = di.getTranslate(), Mi.styledMode || (li = Ti.pointAttribs(di, di.selected && "select")), di.delayedRendering ? (ai.setRadialReference(Ti.center).attr(xi).attr(Oi), Mi.styledMode || ai.attr(li).attr({ "stroke-linejoin": "round" }), di.delayedRendering = !1) : (ai.setRadialReference(Ti.center), Mi.styledMode || Ni(!0, pi, li), Ni(!0, pi, xi, Oi), ai.animate(pi)), ai.attr({ visibility: di.visible ? "inherit" : "hidden" }), ai.addClass(di.getClassName(), !0)) : ai && (di.graphic = ai.destroy());
          });
        }
        sortByAngle(Ti, Mi) {
          Ti.sort(function(Oi, ai) {
            return typeof Oi.angle < "u" && (ai.angle - Oi.angle) * Mi;
          });
        }
        translate(Ti) {
          Ri(this, "translate"), this.generatePoints();
          var Mi = this.options;
          const Oi = Mi.slicedOffset, ai = Oi + (Mi.borderWidth || 0);
          var li = Ui(Mi.startAngle, Mi.endAngle);
          const xi = this.startAngleRad = li.start;
          li = (this.endAngleRad = li.end) - xi;
          const di = this.points, pi = Mi.dataLabels.distance;
          Mi = Mi.ignoreHiddenPoint;
          const ei = di.length;
          let Fe, ii, hi, gi = 0;
          for (Ti || (this.center = Ti = this.getCenter()), ii = 0; ii < ei; ii++) {
            hi = di[ii];
            var Ei = xi + gi * li;
            !hi.isValid() || Mi && !hi.visible || (gi += hi.percentage / 100);
            var ni = xi + gi * li, Pi = {
              x: Ti[0],
              y: Ti[1],
              r: Ti[2] / 2,
              innerR: Ti[3] / 2,
              start: Math.round(1e3 * Ei) / 1e3,
              end: Math.round(1e3 * ni) / 1e3
            };
            hi.shapeType = "arc", hi.shapeArgs = Pi, hi.labelDistance = fi(hi.options.dataLabels && hi.options.dataLabels.distance, pi), hi.labelDistance = Ci(hi.labelDistance, Pi.r), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, hi.labelDistance), ni = (ni + Ei) / 2, ni > 1.5 * Math.PI ? ni -= 2 * Math.PI : ni < -Math.PI / 2 && (ni += 2 * Math.PI), hi.slicedTranslation = { translateX: Math.round(Math.cos(ni) * Oi), translateY: Math.round(Math.sin(ni) * Oi) }, Pi = Math.cos(ni) * Ti[2] / 2, Fe = Math.sin(ni) * Ti[2] / 2, hi.tooltipPos = [Ti[0] + 0.7 * Pi, Ti[1] + 0.7 * Fe], hi.half = ni < -Math.PI / 2 || ni > Math.PI / 2 ? 1 : 0, hi.angle = ni, Ei = Math.min(ai, hi.labelDistance / 5), hi.labelPosition = { natural: { x: Ti[0] + Pi + Math.cos(ni) * hi.labelDistance, y: Ti[1] + Fe + Math.sin(ni) * hi.labelDistance }, computed: {}, alignment: 0 > hi.labelDistance ? "center" : hi.half ? "right" : "left", connectorPosition: { breakAt: { x: Ti[0] + Pi + Math.cos(ni) * Ei, y: Ti[1] + Fe + Math.sin(ni) * Ei }, touchingSliceAt: { x: Ti[0] + Pi, y: Ti[1] + Fe } } };
          }
          Ri(this, "afterTranslate");
        }
        updateTotals() {
          const Ti = this.points, Mi = Ti.length, Oi = this.options.ignoreHiddenPoint;
          let ai, li, xi = 0;
          for (ai = 0; ai < Mi; ai++)
            li = Ti[ai], !li.isValid() || Oi && !li.visible || (xi += li.y);
          for (this.total = xi, ai = 0; ai < Mi; ai++)
            li = Ti[ai], li.percentage = 0 < xi && (li.visible || !Oi) ? li.y / xi * 100 : 0, li.total = xi;
        }
      }
      return wi.defaultOptions = Ni(is.defaultOptions, Qi), bi(wi.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: ji.prototype.drawTracker, getCenter: Si.getCenter, getSymbol: qi, isCartesian: !1, noSharedTooltip: !0, pointAttribs: ji.prototype.pointAttribs, pointClass: ts, requireSorting: !1, searchPoint: qi, trackerGroups: ["group", "dataLabelsGroup"] }), ss.registerSeriesType(
        "pie",
        wi
      ), wi;
    }), ci(oi, "Series/Pie/PieDataLabel.js", [oi["Core/Series/DataLabel.js"], oi["Core/Globals.js"], oi["Core/Renderer/RendererUtilities.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts, Qi) {
      const { noop: is } = ji, { distribute: ss } = qi, { series: Wi } = ts, { arrayMax: Ki, clamp: Ui, defined: ki, merge: bi, pick: Ri, relativeLength: Ni } = Qi;
      var fi;
      return function(Ci) {
        function wi() {
          const ai = this, li = ai.data, xi = ai.chart, di = ai.options.dataLabels || {}, pi = di.connectorPadding, ei = xi.plotWidth, Fe = xi.plotHeight, ii = xi.plotLeft, hi = Math.round(xi.chartWidth / 3), gi = ai.center, Ei = gi[2] / 2, ni = gi[1], Pi = [[], []], Fi = [0, 0, 0, 0], Zi = ai.dataLabelPositioners;
          let rs, Bi, si, Li, Hi, Di, Vi, ri, mi, vi, zi, Xi;
          ai.visible && (di.enabled || ai._hasPointLabels) && (li.forEach(function(Gi) {
            Gi.dataLabel && Gi.visible && Gi.dataLabel.shortened && (Gi.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), Gi.dataLabel.shortened = !1);
          }), Wi.prototype.drawDataLabels.apply(ai), li.forEach(function(Gi) {
            Gi.dataLabel && (Gi.visible ? (Pi[Gi.half].push(Gi), Gi.dataLabel._pos = null, !ki(di.style.width) && !ki(Gi.options.dataLabels && Gi.options.dataLabels.style && Gi.options.dataLabels.style.width) && Gi.dataLabel.getBBox().width > hi && (Gi.dataLabel.css({ width: Math.round(0.7 * hi) + "px" }), Gi.dataLabel.shortened = !0)) : (Gi.dataLabel = Gi.dataLabel.destroy(), Gi.dataLabels && Gi.dataLabels.length === 1 && delete Gi.dataLabels));
          }), Pi.forEach((Gi, Ji) => {
            const es = Gi.length, os = [];
            let ns, ls = 0;
            if (es) {
              if (ai.sortByAngle(Gi, Ji - 0.5), 0 < ai.maxLabelDistance) {
                var Ii = Math.max(0, ni - Ei - ai.maxLabelDistance);
                ns = Math.min(ni + Ei + ai.maxLabelDistance, xi.plotHeight), Gi.forEach(function(Ai) {
                  0 < Ai.labelDistance && Ai.dataLabel && (Ai.top = Math.max(
                    0,
                    ni - Ei - Ai.labelDistance
                  ), Ai.bottom = Math.min(ni + Ei + Ai.labelDistance, xi.plotHeight), ls = Ai.dataLabel.getBBox().height || 21, Ai.distributeBox = { target: Ai.labelPosition.natural.y - Ai.top + ls / 2, size: ls, rank: Ai.y }, os.push(Ai.distributeBox));
                }), Ii = ns + ls - Ii, ss(os, Ii, Ii / 5);
              }
              for (zi = 0; zi < es; zi++) {
                if (rs = Gi[zi], Di = rs.labelPosition, Li = rs.dataLabel, vi = rs.visible === !1 ? "hidden" : "inherit", mi = Ii = Di.natural.y, os && ki(rs.distributeBox) && (typeof rs.distributeBox.pos > "u" ? vi = "hidden" : (Vi = rs.distributeBox.size, mi = Zi.radialDistributionY(rs))), delete rs.positionIndex, di.justify)
                  ri = Zi.justify(rs, Ei, gi);
                else
                  switch (di.alignTo) {
                    case "connectors":
                      ri = Zi.alignToConnectors(Gi, Ji, ei, ii);
                      break;
                    case "plotEdges":
                      ri = Zi.alignToPlotEdges(Li, Ji, ei, ii);
                      break;
                    default:
                      ri = Zi.radialDistributionX(ai, rs, mi, Ii);
                  }
                Li._attr = { visibility: vi, align: Di.alignment }, Xi = rs.options.dataLabels || {}, Li._pos = { x: ri + Ri(Xi.x, di.x) + ({ left: pi, right: -pi }[Di.alignment] || 0), y: mi + Ri(Xi.y, di.y) - Li.getBBox().height / 2 }, Di && (Di.computed.x = ri, Di.computed.y = mi), Ri(di.crop, !0) && (Hi = Li.getBBox().width, Ii = null, ri - Hi < pi && Ji === 1 ? (Ii = Math.round(Hi - ri + pi), Fi[3] = Math.max(Ii, Fi[3])) : ri + Hi > ei - pi && Ji === 0 && (Ii = Math.round(ri + Hi - ei + pi), Fi[1] = Math.max(Ii, Fi[1])), 0 > mi - Vi / 2 ? Fi[0] = Math.max(Math.round(-mi + Vi / 2), Fi[0]) : mi + Vi / 2 > Fe && (Fi[2] = Math.max(Math.round(mi + Vi / 2 - Fe), Fi[2])), Li.sideOverflow = Ii);
              }
            }
          }), Ki(Fi) === 0 || this.verifyDataLabelOverflow(Fi)) && (this.placeDataLabels(), this.points.forEach(function(Gi) {
            if (Xi = bi(di, Gi.options.dataLabels), Bi = Ri(Xi.connectorWidth, 1)) {
              let Ji;
              si = Gi.connector, (Li = Gi.dataLabel) && Li._pos && Gi.visible && 0 < Gi.labelDistance ? (vi = Li._attr.visibility, (Ji = !si) && (Gi.connector = si = xi.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + Gi.colorIndex + (Gi.className ? " " + Gi.className : "")).add(ai.dataLabelsGroup), xi.styledMode || si.attr({ "stroke-width": Bi, stroke: Xi.connectorColor || Gi.color || "#666666" })), si[Ji ? "attr" : "animate"]({ d: Gi.getConnectorPath() }), si.attr("visibility", vi)) : si && (Gi.connector = si.destroy());
            }
          }));
        }
        function yi() {
          this.points.forEach(function(ai) {
            let li = ai.dataLabel, xi;
            li && ai.visible && ((xi = li._pos) ? (li.sideOverflow && (li._attr.width = Math.max(li.getBBox().width - li.sideOverflow, 0), li.css({ width: li._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), li.shortened = !0), li.attr(li._attr), li[li.moved ? "animate" : "attr"](xi), li.moved = !0) : li && li.attr({ y: -9999 })), delete ai.distributeBox;
          }, this);
        }
        function Ti(ai) {
          let li = this.center, xi = this.options, di = xi.center, pi = xi.minSize || 80, ei, Fe = xi.size !== null;
          return Fe || (di[0] !== null ? ei = Math.max(li[2] - Math.max(ai[1], ai[3]), pi) : (ei = Math.max(li[2] - ai[1] - ai[3], pi), li[0] += (ai[3] - ai[1]) / 2), di[1] !== null ? ei = Ui(ei, pi, li[2] - Math.max(ai[0], ai[2])) : (ei = Ui(ei, pi, li[2] - ai[0] - ai[2]), li[1] += (ai[0] - ai[2]) / 2), ei < li[2] ? (li[2] = ei, li[3] = Math.min(xi.thickness ? Math.max(0, ei - 2 * xi.thickness) : Math.max(0, Ni(xi.innerSize || 0, ei)), ei), this.translate(li), this.drawDataLabels && this.drawDataLabels()) : Fe = !0), Fe;
        }
        const Mi = [], Oi = { radialDistributionY: function(ai) {
          return ai.top + ai.distributeBox.pos;
        }, radialDistributionX: function(ai, li, xi, di) {
          return ai.getX(xi < li.top + 2 || xi > li.bottom - 2 ? di : xi, li.half, li);
        }, justify: function(ai, li, xi) {
          return xi[0] + (ai.half ? -1 : 1) * (li + ai.labelDistance);
        }, alignToPlotEdges: function(ai, li, xi, di) {
          return ai = ai.getBBox().width, li ? ai + di : xi - ai - di;
        }, alignToConnectors: function(ai, li, xi, di) {
          let pi = 0, ei;
          return ai.forEach(function(Fe) {
            ei = Fe.dataLabel.getBBox().width, ei > pi && (pi = ei);
          }), li ? pi + di : xi - pi - di;
        } };
        Ci.compose = function(ai) {
          Si.compose(Wi), Qi.pushUnique(Mi, ai) && (ai = ai.prototype, ai.dataLabelPositioners = Oi, ai.alignDataLabel = is, ai.drawDataLabels = wi, ai.placeDataLabels = yi, ai.verifyDataLabelOverflow = Ti);
        };
      }(fi || (fi = {})), fi;
    }), ci(oi, "Extensions/OverlappingDataLabels.js", [oi["Core/Chart/Chart.js"], oi["Core/Utilities.js"]], function(Si, ji) {
      function qi(Ui, ki) {
        let bi, Ri = !1;
        return Ui && (bi = Ui.newOpacity, Ui.oldOpacity !== bi && (Ui.alignAttr && Ui.placed ? (Ui[bi ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), Ri = !0, Ui.alignAttr.opacity = bi, Ui[Ui.isOld ? "animate" : "attr"](Ui.alignAttr, null, function() {
          ki.styledMode || Ui.css({ pointerEvents: bi ? "auto" : "none" });
        }), Qi(ki, "afterHideOverlappingLabel")) : Ui.attr({ opacity: bi })), Ui.isOld = !0), Ri;
      }
      const { addEvent: ts, fireEvent: Qi, isArray: is, isNumber: ss, objectEach: Wi, pick: Ki } = ji;
      ts(Si, "render", function() {
        let Ui = this, ki = [];
        (this.labelCollectors || []).forEach(function(bi) {
          ki = ki.concat(bi());
        }), (this.yAxis || []).forEach(function(bi) {
          bi.stacking && bi.options.stackLabels && !bi.options.stackLabels.allowOverlap && Wi(bi.stacking.stacks, function(Ri) {
            Wi(Ri, function(Ni) {
              Ni.label && ki.push(Ni.label);
            });
          });
        }), (this.series || []).forEach(function(bi) {
          var Ri = bi.options.dataLabels;
          bi.visible && (Ri.enabled !== !1 || bi._hasPointLabels) && (Ri = (Ni) => Ni.forEach((fi) => {
            fi.visible && (is(fi.dataLabels) ? fi.dataLabels : fi.dataLabel ? [fi.dataLabel] : []).forEach(function(Ci) {
              const wi = Ci.options;
              Ci.labelrank = Ki(wi.labelrank, fi.labelrank, fi.shapeArgs && fi.shapeArgs.height), wi.allowOverlap ? (Ci.oldOpacity = Ci.opacity, Ci.newOpacity = 1, qi(Ci, Ui)) : ki.push(Ci);
            });
          }), Ri(bi.nodes || []), Ri(bi.points));
        }), this.hideOverlappingLabels(ki);
      }), Si.prototype.hideOverlappingLabels = function(Ui) {
        let ki = this, bi = Ui.length, Ri = ki.renderer;
        var Ni;
        let fi, Ci, wi, yi, Ti = !1;
        var Mi = function(Oi) {
          let ai, li;
          var xi;
          let di = Oi.box ? 0 : Oi.padding || 0, pi = xi = 0, ei, Fe;
          if (Oi && (!Oi.alignAttr || Oi.placed))
            return ai = Oi.alignAttr || { x: Oi.attr("x"), y: Oi.attr("y") }, li = Oi.parentGroup, Oi.width || (xi = Oi.getBBox(), Oi.width = xi.width, Oi.height = xi.height, xi = Ri.fontMetrics(Oi.element).h), ei = Oi.width - 2 * di, (Fe = { left: "0", center: "0.5", right: "1" }[Oi.alignValue]) ? pi = +Fe * ei : ss(Oi.x) && Math.round(Oi.x) !== Oi.translateX && (pi = Oi.x - Oi.translateX), { x: ai.x + (li.translateX || 0) + di - (pi || 0), y: ai.y + (li.translateY || 0) + di - xi, width: Oi.width - 2 * di, height: Oi.height - 2 * di };
        };
        for (fi = 0; fi < bi; fi++)
          (Ni = Ui[fi]) && (Ni.oldOpacity = Ni.opacity, Ni.newOpacity = 1, Ni.absoluteBox = Mi(Ni));
        for (Ui.sort(function(Oi, ai) {
          return (ai.labelrank || 0) - (Oi.labelrank || 0);
        }), fi = 0; fi < bi; fi++)
          for (wi = (Mi = Ui[fi]) && Mi.absoluteBox, Ni = fi + 1; Ni < bi; ++Ni)
            yi = (Ci = Ui[Ni]) && Ci.absoluteBox, !wi || !yi || Mi === Ci || Mi.newOpacity === 0 || Ci.newOpacity === 0 || Mi.visibility === "hidden" || Ci.visibility === "hidden" || yi.x >= wi.x + wi.width || yi.x + yi.width <= wi.x || yi.y >= wi.y + wi.height || yi.y + yi.height <= wi.y || ((Mi.labelrank < Ci.labelrank ? Mi : Ci).newOpacity = 0);
        Ui.forEach(function(Oi) {
          qi(Oi, ki) && (Ti = !0);
        }), Ti && Qi(ki, "afterHideAllOverlappingLabels");
      };
    }), ci(oi, "Extensions/BorderRadius.js", [oi["Core/Defaults.js"], oi["Core/Series/Series.js"], oi["Core/Series/SeriesRegistry.js"], oi["Core/Renderer/SVG/SVGElement.js"], oi["Core/Renderer/SVG/SVGRenderer.js"], oi["Core/Utilities.js"]], function(Si, ji, qi, ts, Qi, is) {
      const { defaultOptions: ss } = Si;
      ({ seriesTypes: Si } = qi);
      const { addEvent: Wi, extend: Ki, isObject: Ui, merge: ki, relativeLength: bi } = is, Ri = {
        radius: 0,
        scope: "stack",
        where: void 0
      }, Ni = (fi, Ci) => (Ui(fi) || (fi = { radius: fi || 0 }), ki(Ri, Ci, fi));
      if (ts.symbolCustomAttribs.indexOf("borderRadius") === -1) {
        ts.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY");
        const fi = Qi.prototype.symbols.arc;
        Qi.prototype.symbols.arc = function(wi, yi, Ti, Mi, Oi = {}) {
          wi = fi(wi, yi, Ti, Mi, Oi);
          const { innerR: ai = 0, r: li = Ti, start: xi = 0, end: di = 0 } = Oi;
          if (Oi.open || !Oi.borderRadius)
            return wi;
          for (Ti = di - xi, yi = Math.sin(Ti / 2), Oi = Math.max(Math.min(bi(Oi.borderRadius || 0, li - ai), (li - ai) / 2, li * yi / (1 + yi)), 0), Ti = Math.min(Oi, Ti / Math.PI * 2 * ai), yi = wi.length - 1; yi--; ) {
            let Ei, ni, Pi;
            Mi = wi;
            var pi = yi, ei = 1 < yi ? Ti : Oi, Fe = Mi[pi], ii = Mi[pi + 1];
            if (ii[0] === "Z" && (ii = Mi[0]), Fe[0] !== "M" && Fe[0] !== "L" || ii[0] !== "A" ? Fe[0] !== "A" || ii[0] !== "M" && ii[0] !== "L" || (Pi = ii, ni = Fe) : (Pi = Fe, ni = ii, Ei = !0), Pi && ni && ni.params) {
              Fe = ni[1];
              var hi = ni[5];
              ii = ni.params;
              const { start: Fi, end: Zi, cx: rs, cy: Bi } = ii;
              var gi = hi ? Fe - ei : Fe + ei;
              const si = gi ? Math.asin(ei / gi) : 0;
              hi = hi ? si : -si, gi *= Math.cos(si), Ei ? (ii.start = Fi + hi, Pi[1] = rs + gi * Math.cos(Fi), Pi[2] = Bi + gi * Math.sin(Fi), Mi.splice(pi + 1, 0, ["A", ei, ei, 0, 0, 1, rs + Fe * Math.cos(ii.start), Bi + Fe * Math.sin(ii.start)])) : (ii.end = Zi - hi, ni[6] = rs + Fe * Math.cos(ii.end), ni[7] = Bi + Fe * Math.sin(ii.end), Mi.splice(pi + 1, 0, ["A", ei, ei, 0, 0, 1, rs + gi * Math.cos(Zi), Bi + gi * Math.sin(Zi)])), ni[4] = Math.abs(ii.end - ii.start) < Math.PI ? 0 : 1;
            }
          }
          return wi;
        };
        const Ci = Qi.prototype.symbols.roundedRect;
        Qi.prototype.symbols.roundedRect = function(wi, yi, Ti, Mi, Oi = {}) {
          const ai = Ci(wi, yi, Ti, Mi, Oi), { r: li = 0, brBoxHeight: xi = Mi, brBoxY: di = yi } = Oi;
          var pi = yi - di, ei = di + xi - (yi + Mi);
          Oi = -0.1 < pi - li ? 0 : li;
          const Fe = -0.1 < ei - li ? 0 : li;
          var ii = Math.max(Oi && pi, 0);
          const hi = Math.max(Fe && ei, 0);
          ei = [wi + Oi, yi], pi = [wi + Ti - Oi, yi];
          const gi = [wi + Ti, yi + Oi], Ei = [wi + Ti, yi + Mi - Fe], ni = [wi + Ti - Fe, yi + Mi], Pi = [wi + Fe, yi + Mi], Fi = [wi, yi + Mi - Fe], Zi = [wi, yi + Oi];
          if (ii) {
            const rs = Math.sqrt(Math.pow(Oi, 2) - Math.pow(Oi - ii, 2));
            ei[0] -= rs, pi[0] += rs, gi[1] = Zi[1] = yi + Oi - ii;
          }
          return Mi < Oi - ii && (ii = Math.sqrt(Math.pow(Oi, 2) - Math.pow(Oi - ii - Mi, 2)), gi[0] = Ei[0] = wi + Ti - Oi + ii, ni[0] = Math.min(gi[0], ni[0]), Pi[0] = Math.max(Ei[0], Pi[0]), Fi[0] = Zi[0] = wi + Oi - ii, gi[1] = Zi[1] = yi + Mi), hi && (ii = Math.sqrt(Math.pow(Fe, 2) - Math.pow(Fe - hi, 2)), ni[0] += ii, Pi[0] -= ii, Ei[1] = Fi[1] = yi + Mi - Fe + hi), Mi < Fe - hi && (Mi = Math.sqrt(Math.pow(Fe, 2) - Math.pow(Fe - hi - Mi, 2)), gi[0] = Ei[0] = wi + Ti - Fe + Mi, pi[0] = Math.min(gi[0], pi[0]), ei[0] = Math.max(Ei[0], ei[0]), Fi[0] = Zi[0] = wi + Fe - Mi, Ei[1] = Fi[1] = yi), ai.length = 0, ai.push(["M", ...ei], ["L", ...pi], [
            "A",
            Oi,
            Oi,
            0,
            0,
            1,
            ...gi
          ], ["L", ...Ei], ["A", Fe, Fe, 0, 0, 1, ...ni], ["L", ...Pi], ["A", Fe, Fe, 0, 0, 1, ...Fi], ["L", ...Zi], ["A", Oi, Oi, 0, 0, 1, ...ei], ["Z"]), ai;
        }, Wi(Si.pie, "afterTranslate", function() {
          const wi = Ni(this.options.borderRadius);
          for (const yi of this.points) {
            const Ti = yi.shapeArgs;
            Ti && (Ti.borderRadius = bi(wi.radius, (Ti.r || 0) - (Ti.innerR || 0)));
          }
        }), Wi(ji, "afterColumnTranslate", function() {
          var wi, yi;
          if (this.options.borderRadius && (!this.chart.is3d || !this.chart.is3d())) {
            const { options: ai, yAxis: li } = this, xi = ai.stacking === "percent";
            var Ti = (yi = (wi = ss.plotOptions) === null || wi === void 0 ? void 0 : wi[this.type]) === null || yi === void 0 ? void 0 : yi.borderRadius;
            wi = Ni(ai.borderRadius, Ui(Ti) ? Ti : {}), yi = li.options.reversed;
            for (const di of this.points)
              if ({ shapeArgs: Ti } = di, di.shapeType === "roundedRect" && Ti) {
                const { width: pi = 0, height: ei = 0, y: Fe = 0 } = Ti;
                var Mi = Fe, Oi = ei;
                wi.scope === "stack" && di.stackTotal && (Mi = li.translate(xi ? 100 : di.stackTotal, !1, !0, !1, !0), Oi = li.translate(ai.threshold || 0, !1, !0, !1, !0), Oi = this.crispCol(0, Math.min(Mi, Oi), 0, Math.abs(Mi - Oi)), Mi = Oi.y, Oi = Oi.height);
                const ii = (di.negative ? -1 : 1) * (yi ? -1 : 1) === -1;
                let hi = wi.where;
                !hi && this.is("waterfall") && Math.abs((di.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (hi = "all"), hi || (hi = "end");
                const gi = Math.min(bi(wi.radius, pi), pi / 2, hi === "all" ? ei / 2 : 1 / 0) || 0;
                hi === "end" && (ii && (Mi -= gi), Oi += gi), Ki(Ti, { brBoxHeight: Oi, brBoxY: Mi, r: gi });
              }
          }
        }, { order: 9 });
      }
      return ji = { optionsToObject: Ni }, ji;
    }), ci(oi, "Core/Responsive.js", [oi["Core/Utilities.js"]], function(Si) {
      const { diffObjects: ji, extend: qi, find: ts, merge: Qi, pick: is, uniqueKey: ss } = Si;
      var Wi;
      return function(Ki) {
        function Ui(Ri, Ni) {
          const fi = Ri.condition;
          (fi.callback || function() {
            return this.chartWidth <= is(fi.maxWidth, Number.MAX_VALUE) && this.chartHeight <= is(fi.maxHeight, Number.MAX_VALUE) && this.chartWidth >= is(fi.minWidth, 0) && this.chartHeight >= is(fi.minHeight, 0);
          }).call(this) && Ni.push(Ri._id);
        }
        function ki(Ri, Ni) {
          const fi = this.options.responsive;
          var Ci = this.currentResponsive;
          let wi = [];
          !Ni && fi && fi.rules && fi.rules.forEach((yi) => {
            typeof yi._id > "u" && (yi._id = ss()), this.matchResponsiveRule(yi, wi);
          }, this), Ni = Qi(...wi.map((yi) => ts((fi || {}).rules || [], (Ti) => Ti._id === yi)).map((yi) => yi && yi.chartOptions)), Ni.isResponsiveOptions = !0, wi = wi.toString() || void 0, wi !== (Ci && Ci.ruleIds) && (Ci && this.update(Ci.undoOptions, Ri, !0), wi ? (Ci = ji(Ni, this.options, !0, this.collectionsWithUpdate), Ci.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: wi, mergedOptions: Ni, undoOptions: Ci }, this.update(Ni, Ri, !0)) : this.currentResponsive = void 0);
        }
        const bi = [];
        Ki.compose = function(Ri) {
          return Si.pushUnique(bi, Ri) && qi(Ri.prototype, { matchResponsiveRule: Ui, setResponsive: ki }), Ri;
        };
      }(Wi || (Wi = {})), Wi;
    }), ci(oi, "masters/highcharts.src.js", [
      oi["Core/Globals.js"],
      oi["Core/Utilities.js"],
      oi["Core/Defaults.js"],
      oi["Core/Animation/Fx.js"],
      oi["Core/Animation/AnimationUtilities.js"],
      oi["Core/Renderer/HTML/AST.js"],
      oi["Core/Templating.js"],
      oi["Core/Renderer/RendererUtilities.js"],
      oi["Core/Renderer/SVG/SVGElement.js"],
      oi["Core/Renderer/SVG/SVGRenderer.js"],
      oi["Core/Renderer/HTML/HTMLElement.js"],
      oi["Core/Renderer/HTML/HTMLRenderer.js"],
      oi["Core/Axis/Axis.js"],
      oi["Core/Axis/DateTimeAxis.js"],
      oi["Core/Axis/LogarithmicAxis.js"],
      oi["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
      oi["Core/Axis/Tick.js"],
      oi["Core/Tooltip.js"],
      oi["Core/Series/Point.js"],
      oi["Core/Pointer.js"],
      oi["Core/Legend/Legend.js"],
      oi["Core/Chart/Chart.js"],
      oi["Core/Axis/Stacking/StackingAxis.js"],
      oi["Core/Axis/Stacking/StackItem.js"],
      oi["Core/Series/Series.js"],
      oi["Core/Series/SeriesRegistry.js"],
      oi["Series/Column/ColumnSeries.js"],
      oi["Series/Column/ColumnDataLabel.js"],
      oi["Series/Pie/PieSeries.js"],
      oi["Series/Pie/PieDataLabel.js"],
      oi["Core/Series/DataLabel.js"],
      oi["Core/Responsive.js"],
      oi["Core/Color/Color.js"],
      oi["Core/Time.js"]
    ], function(Si, ji, qi, ts, Qi, is, ss, Wi, Ki, Ui, ki, bi, Ri, Ni, fi, Ci, wi, yi, Ti, Mi, Oi, ai, li, xi, di, pi, ei, Fe, ii, hi, gi, Ei, ni, Pi) {
      return Si.animate = Qi.animate, Si.animObject = Qi.animObject, Si.getDeferredAnimation = Qi.getDeferredAnimation, Si.setAnimation = Qi.setAnimation, Si.stop = Qi.stop, Si.timers = ts.timers, Si.AST = is, Si.Axis = Ri, Si.Chart = ai, Si.chart = ai.chart, Si.Fx = ts, Si.Legend = Oi, Si.PlotLineOrBand = Ci, Si.Point = Ti, Si.Pointer = Mi, Si.Series = di, Si.StackItem = xi, Si.SVGElement = Ki, Si.SVGRenderer = Ui, Si.Templating = ss, Si.Tick = wi, Si.Time = Pi, Si.Tooltip = yi, Si.Color = ni, Si.color = ni.parse, bi.compose(Ui), ki.compose(Ki), Mi.compose(ai), Oi.compose(ai), Si.defaultOptions = qi.defaultOptions, Si.getOptions = qi.getOptions, Si.time = qi.defaultTime, Si.setOptions = qi.setOptions, Si.dateFormat = ss.dateFormat, Si.format = ss.format, Si.numberFormat = ss.numberFormat, Si.addEvent = ji.addEvent, Si.arrayMax = ji.arrayMax, Si.arrayMin = ji.arrayMin, Si.attr = ji.attr, Si.clearTimeout = ji.clearTimeout, Si.correctFloat = ji.correctFloat, Si.createElement = ji.createElement, Si.css = ji.css, Si.defined = ji.defined, Si.destroyObjectProperties = ji.destroyObjectProperties, Si.discardElement = ji.discardElement, Si.distribute = Wi.distribute, Si.erase = ji.erase, Si.error = ji.error, Si.extend = ji.extend, Si.extendClass = ji.extendClass, Si.find = ji.find, Si.fireEvent = ji.fireEvent, Si.getMagnitude = ji.getMagnitude, Si.getStyle = ji.getStyle, Si.inArray = ji.inArray, Si.isArray = ji.isArray, Si.isClass = ji.isClass, Si.isDOMElement = ji.isDOMElement, Si.isFunction = ji.isFunction, Si.isNumber = ji.isNumber, Si.isObject = ji.isObject, Si.isString = ji.isString, Si.keys = ji.keys, Si.merge = ji.merge, Si.normalizeTickInterval = ji.normalizeTickInterval, Si.objectEach = ji.objectEach, Si.offset = ji.offset, Si.pad = ji.pad, Si.pick = ji.pick, Si.pInt = ji.pInt, Si.relativeLength = ji.relativeLength, Si.removeEvent = ji.removeEvent, Si.seriesType = pi.seriesType, Si.splat = ji.splat, Si.stableSort = ji.stableSort, Si.syncTimeout = ji.syncTimeout, Si.timeUnits = ji.timeUnits, Si.uniqueKey = ji.uniqueKey, Si.useSerialIds = ji.useSerialIds, Si.wrap = ji.wrap, Fe.compose(ei), gi.compose(di), Ni.compose(Ri), fi.compose(Ri), hi.compose(ii), Ci.compose(Ri), Ei.compose(ai), li.compose(Ri, ai, di), yi.compose(Mi), Si;
    }), oi["masters/highcharts.src.js"]._modules = oi, oi["masters/highcharts.src.js"];
  });
})(highcharts);
var highchartsExports = highcharts.exports;
const Highcharts = /* @__PURE__ */ getDefaultExportFromCjs(highchartsExports);
var htmx_min = { exports: {} };
(function(module) {
  (function(ti, ui) {
    module.exports ? module.exports = ui() : ti.htmx = ti.htmx || ui();
  })(typeof self < "u" ? self : commonjsGlobal, function() {
    return function() {
      var G = { onLoad: t, process: Nt, on: le, off: ue, trigger: oe, ajax: xr, find: b, findAll: f, closest: d, values: function(ti, ui) {
        var ci = er(ti, ui || "post");
        return ci.values;
      }, remove: U, addClass: B, removeClass: n, toggleClass: V, takeClass: j, defineExtension: Rr, removeExtension: Or, logAll: X, logNone: F, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1 }, parseInterval: v, _: e, createEventSource: function(ti) {
        return new EventSource(ti, { withCredentials: !0 });
      }, createWebSocket: function(ti) {
        var ui = new WebSocket(ti, []);
        return ui.binaryType = G.config.wsBinaryType, ui;
      }, version: "1.9.5" }, C = { addTriggerHandler: bt, bodyContains: re, canAccessLocalStorage: M, findThisElement: he, filterValues: ar, hasAttribute: o, getAttributeValue: Z, getClosestAttributeValue: Y, getClosestMatch: c, getExpressionVars: gr, getHeaders: ir, getInputValues: er, getInternalData: ee, getSwapSpecification: sr, getTriggerSpecs: Ge, getTarget: de, makeFragment: l, mergeObjects: ne, makeSettleInfo: S, oobSwap: me, querySelectorExt: ie, selectAndSwap: De, settleImmediately: Wt, shouldCancel: Qe, triggerEvent: oe, triggerErrorEvent: ae, withExtensions: w }, R = ["get", "post", "put", "delete", "patch"], O = R.map(function(ti) {
        return "[hx-" + ti + "], [data-hx-" + ti + "]";
      }).join(", ");
      function v(ti) {
        if (ti != null)
          return ti.slice(-2) == "ms" ? parseFloat(ti.slice(0, -2)) || void 0 : ti.slice(-1) == "s" ? parseFloat(ti.slice(0, -1)) * 1e3 || void 0 : ti.slice(-1) == "m" ? parseFloat(ti.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(ti) || void 0;
      }
      function J(ti, ui) {
        return ti.getAttribute && ti.getAttribute(ui);
      }
      function o(ti, ui) {
        return ti.hasAttribute && (ti.hasAttribute(ui) || ti.hasAttribute("data-" + ui));
      }
      function Z(ti, ui) {
        return J(ti, ui) || J(ti, "data-" + ui);
      }
      function u(ti) {
        return ti.parentElement;
      }
      function K() {
        return document;
      }
      function c(ti, ui) {
        for (; ti && !ui(ti); )
          ti = u(ti);
        return ti || null;
      }
      function T(ti, ui, ci) {
        var oi = Z(ui, ci), Si = Z(ui, "hx-disinherit");
        return ti !== ui && Si && (Si === "*" || Si.split(" ").indexOf(ci) >= 0) ? "unset" : oi;
      }
      function Y(ti, ui) {
        var ci = null;
        if (c(ti, function(oi) {
          return ci = T(ti, oi, ui);
        }), ci !== "unset")
          return ci;
      }
      function h(ti, ui) {
        var ci = ti.matches || ti.matchesSelector || ti.msMatchesSelector || ti.mozMatchesSelector || ti.webkitMatchesSelector || ti.oMatchesSelector;
        return ci && ci.call(ti, ui);
      }
      function q(ti) {
        var ui = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ci = ui.exec(ti);
        return ci ? ci[1].toLowerCase() : "";
      }
      function i(ti, ui) {
        for (var ci = new DOMParser(), oi = ci.parseFromString(ti, "text/html"), Si = oi.body; ui > 0; )
          ui--, Si = Si.firstChild;
        return Si == null && (Si = K().createDocumentFragment()), Si;
      }
      function H(ti) {
        return ti.match(/<body/);
      }
      function l(ti) {
        var ui = !H(ti);
        if (G.config.useTemplateFragments && ui) {
          var ci = i("<body><template>" + ti + "</template></body>", 0);
          return ci.querySelector("template").content;
        } else {
          var oi = q(ti);
          switch (oi) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return i("<table>" + ti + "</table>", 1);
            case "col":
              return i("<table><colgroup>" + ti + "</colgroup></table>", 2);
            case "tr":
              return i("<table><tbody>" + ti + "</tbody></table>", 2);
            case "td":
            case "th":
              return i("<table><tbody><tr>" + ti + "</tr></tbody></table>", 3);
            case "script":
              return i("<div>" + ti + "</div>", 1);
            default:
              return i(ti, 0);
          }
        }
      }
      function Q(ti) {
        ti && ti();
      }
      function L(ti, ui) {
        return Object.prototype.toString.call(ti) === "[object " + ui + "]";
      }
      function A(ti) {
        return L(ti, "Function");
      }
      function N(ti) {
        return L(ti, "Object");
      }
      function ee(ti) {
        var ui = "htmx-internal-data", ci = ti[ui];
        return ci || (ci = ti[ui] = {}), ci;
      }
      function I(ti) {
        var ui = [];
        if (ti)
          for (var ci = 0; ci < ti.length; ci++)
            ui.push(ti[ci]);
        return ui;
      }
      function te(ti, ui) {
        if (ti)
          for (var ci = 0; ci < ti.length; ci++)
            ui(ti[ci]);
      }
      function P(ti) {
        var ui = ti.getBoundingClientRect(), ci = ui.top, oi = ui.bottom;
        return ci < window.innerHeight && oi >= 0;
      }
      function re(ti) {
        return ti.getRootNode && ti.getRootNode() instanceof window.ShadowRoot ? K().body.contains(ti.getRootNode().host) : K().body.contains(ti);
      }
      function k(ti) {
        return ti.trim().split(/\s+/);
      }
      function ne(ti, ui) {
        for (var ci in ui)
          ui.hasOwnProperty(ci) && (ti[ci] = ui[ci]);
        return ti;
      }
      function y(ti) {
        try {
          return JSON.parse(ti);
        } catch (ui) {
          return x(ui), null;
        }
      }
      function M() {
        var ti = "htmx:localStorageTest";
        try {
          return localStorage.setItem(ti, ti), localStorage.removeItem(ti), !0;
        } catch {
          return !1;
        }
      }
      function D(ti) {
        try {
          var ui = new URL(ti);
          return ui && (ti = ui.pathname + ui.search), ti.match("^/$") || (ti = ti.replace(/\/+$/, "")), ti;
        } catch {
          return ti;
        }
      }
      function e(e) {
        return hr(K().body, function() {
          return eval(e);
        });
      }
      function t(ti) {
        var ui = G.on("htmx:load", function(ci) {
          ti(ci.detail.elt);
        });
        return ui;
      }
      function X() {
        G.logger = function(ti, ui, ci) {
          console && console.log(ui, ti, ci);
        };
      }
      function F() {
        G.logger = null;
      }
      function b(ti, ui) {
        return ui ? ti.querySelector(ui) : b(K(), ti);
      }
      function f(ti, ui) {
        return ui ? ti.querySelectorAll(ui) : f(K(), ti);
      }
      function U(ti, ui) {
        ti = s(ti), ui ? setTimeout(function() {
          U(ti), ti = null;
        }, ui) : ti.parentElement.removeChild(ti);
      }
      function B(ti, ui, ci) {
        ti = s(ti), ci ? setTimeout(function() {
          B(ti, ui), ti = null;
        }, ci) : ti.classList && ti.classList.add(ui);
      }
      function n(ti, ui, ci) {
        ti = s(ti), ci ? setTimeout(function() {
          n(ti, ui), ti = null;
        }, ci) : ti.classList && (ti.classList.remove(ui), ti.classList.length === 0 && ti.removeAttribute("class"));
      }
      function V(ti, ui) {
        ti = s(ti), ti.classList.toggle(ui);
      }
      function j(ti, ui) {
        ti = s(ti), te(ti.parentElement.children, function(ci) {
          n(ci, ui);
        }), B(ti, ui);
      }
      function d(ti, ui) {
        if (ti = s(ti), ti.closest)
          return ti.closest(ui);
        do
          if (ti == null || h(ti, ui))
            return ti;
        while (ti = ti && u(ti));
        return null;
      }
      function r(ti) {
        var ui = ti.trim();
        return ui.startsWith("<") && ui.endsWith("/>") ? ui.substring(1, ui.length - 2) : ui;
      }
      function W(ti, ui) {
        return ui.indexOf("closest ") === 0 ? [d(ti, r(ui.substr(8)))] : ui.indexOf("find ") === 0 ? [b(ti, r(ui.substr(5)))] : ui.indexOf("next ") === 0 ? [_(ti, r(ui.substr(5)))] : ui.indexOf("previous ") === 0 ? [z(ti, r(ui.substr(9)))] : ui === "document" ? [document] : ui === "window" ? [window] : ui === "body" ? [document.body] : K().querySelectorAll(r(ui));
      }
      var _ = function(ti, ui) {
        for (var ci = K().querySelectorAll(ui), oi = 0; oi < ci.length; oi++) {
          var Si = ci[oi];
          if (Si.compareDocumentPosition(ti) === Node.DOCUMENT_POSITION_PRECEDING)
            return Si;
        }
      }, z = function(ti, ui) {
        for (var ci = K().querySelectorAll(ui), oi = ci.length - 1; oi >= 0; oi--) {
          var Si = ci[oi];
          if (Si.compareDocumentPosition(ti) === Node.DOCUMENT_POSITION_FOLLOWING)
            return Si;
        }
      };
      function ie(ti, ui) {
        return ui ? W(ti, ui)[0] : W(K().body, ti)[0];
      }
      function s(ti) {
        return L(ti, "String") ? b(ti) : ti;
      }
      function $(ti, ui, ci) {
        return A(ui) ? { target: K().body, event: ti, listener: ui } : { target: s(ti), event: ui, listener: ci };
      }
      function le(ti, ui, ci) {
        Hr(function() {
          var Si = $(ti, ui, ci);
          Si.target.addEventListener(Si.event, Si.listener);
        });
        var oi = A(ui);
        return oi ? ui : ci;
      }
      function ue(ti, ui, ci) {
        return Hr(function() {
          var oi = $(ti, ui, ci);
          oi.target.removeEventListener(oi.event, oi.listener);
        }), A(ui) ? ui : ci;
      }
      var fe = K().createElement("output");
      function ce(ti, ui) {
        var ci = Y(ti, ui);
        if (ci) {
          if (ci === "this")
            return [he(ti, ui)];
          var oi = W(ti, ci);
          return oi.length === 0 ? (x('The selector "' + ci + '" on ' + ui + " returned no matches!"), [fe]) : oi;
        }
      }
      function he(ti, ui) {
        return c(ti, function(ci) {
          return Z(ci, ui) != null;
        });
      }
      function de(ti) {
        var ui = Y(ti, "hx-target");
        if (ui)
          return ui === "this" ? he(ti, "hx-target") : ie(ti, ui);
        var ci = ee(ti);
        return ci.boosted ? K().body : ti;
      }
      function ve(ti) {
        for (var ui = G.config.attributesToSettle, ci = 0; ci < ui.length; ci++)
          if (ti === ui[ci])
            return !0;
        return !1;
      }
      function ge(ti, ui) {
        te(ti.attributes, function(ci) {
          !ui.hasAttribute(ci.name) && ve(ci.name) && ti.removeAttribute(ci.name);
        }), te(ui.attributes, function(ci) {
          ve(ci.name) && ti.setAttribute(ci.name, ci.value);
        });
      }
      function pe(ti, ui) {
        for (var ci = Tr(ui), oi = 0; oi < ci.length; oi++) {
          var Si = ci[oi];
          try {
            if (Si.isInlineSwap(ti))
              return !0;
          } catch (ji) {
            x(ji);
          }
        }
        return ti === "outerHTML";
      }
      function me(ti, ui, ci) {
        var oi = "#" + J(ui, "id"), Si = "outerHTML";
        ti === "true" || (ti.indexOf(":") > 0 ? (Si = ti.substr(0, ti.indexOf(":")), oi = ti.substr(ti.indexOf(":") + 1, ti.length)) : Si = ti);
        var ji = K().querySelectorAll(oi);
        return ji ? (te(ji, function(qi) {
          var ts, Qi = ui.cloneNode(!0);
          ts = K().createDocumentFragment(), ts.appendChild(Qi), pe(Si, qi) || (ts = Qi);
          var is = { shouldSwap: !0, target: qi, fragment: ts };
          oe(qi, "htmx:oobBeforeSwap", is) && (qi = is.target, is.shouldSwap && ke(Si, qi, qi, ts, ci), te(ci.elts, function(ss) {
            oe(ss, "htmx:oobAfterSwap", is);
          }));
        }), ui.parentNode.removeChild(ui)) : (ui.parentNode.removeChild(ui), ae(K().body, "htmx:oobErrorNoTarget", { content: ui })), ti;
      }
      function xe(ti, ui, ci) {
        var oi = Y(ti, "hx-select-oob");
        if (oi) {
          var Si = oi.split(",");
          for (let is = 0; is < Si.length; is++) {
            var ji = Si[is].split(":", 2), qi = ji[0].trim();
            qi.indexOf("#") === 0 && (qi = qi.substring(1));
            var ts = ji[1] || "true", Qi = ui.querySelector("#" + qi);
            Qi && me(ts, Qi, ci);
          }
        }
        te(f(ui, "[hx-swap-oob], [data-hx-swap-oob]"), function(is) {
          var ss = Z(is, "hx-swap-oob");
          ss != null && me(ss, is, ci);
        });
      }
      function ye(ti) {
        te(f(ti, "[hx-preserve], [data-hx-preserve]"), function(ui) {
          var ci = Z(ui, "id"), oi = K().getElementById(ci);
          oi != null && ui.parentNode.replaceChild(oi, ui);
        });
      }
      function be(ti, ui, ci) {
        te(ui.querySelectorAll("[id]"), function(oi) {
          var Si = J(oi, "id");
          if (Si && Si.length > 0) {
            var ji = Si.replace("'", "\\'"), qi = oi.tagName.replace(":", "\\:"), ts = ti.querySelector(qi + "[id='" + ji + "']");
            if (ts && ts !== ti) {
              var Qi = oi.cloneNode();
              ge(oi, ts), ci.tasks.push(function() {
                ge(oi, Qi);
              });
            }
          }
        });
      }
      function we(ti) {
        return function() {
          n(ti, G.config.addedClass), Nt(ti), St(ti), Se(ti), oe(ti, "htmx:load");
        };
      }
      function Se(ti) {
        var ui = "[autofocus]", ci = h(ti, ui) ? ti : ti.querySelector(ui);
        ci != null && ci.focus();
      }
      function a(ti, ui, ci, oi) {
        for (be(ti, ci, oi); ci.childNodes.length > 0; ) {
          var Si = ci.firstChild;
          B(Si, G.config.addedClass), ti.insertBefore(Si, ui), Si.nodeType !== Node.TEXT_NODE && Si.nodeType !== Node.COMMENT_NODE && oi.tasks.push(we(Si));
        }
      }
      function Ee(ti, ui) {
        for (var ci = 0; ci < ti.length; )
          ui = (ui << 5) - ui + ti.charCodeAt(ci++) | 0;
        return ui;
      }
      function Ce(ti) {
        var ui = 0;
        if (ti.attributes)
          for (var ci = 0; ci < ti.attributes.length; ci++) {
            var oi = ti.attributes[ci];
            oi.value && (ui = Ee(oi.name, ui), ui = Ee(oi.value, ui));
          }
        return ui;
      }
      function Re(ti) {
        var ui = ee(ti);
        if (ui.onHandlers) {
          for (let ci = 0; ci < ui.onHandlers.length; ci++) {
            const oi = ui.onHandlers[ci];
            ti.removeEventListener(oi.event, oi.listener);
          }
          delete ui.onHandlers;
        }
      }
      function Oe(ti) {
        var ui = ee(ti);
        ui.timeout && clearTimeout(ui.timeout), ui.webSocket && ui.webSocket.close(), ui.sseEventSource && ui.sseEventSource.close(), ui.listenerInfos && te(ui.listenerInfos, function(ci) {
          ci.on && ci.on.removeEventListener(ci.trigger, ci.listener);
        }), ui.initHash && (ui.initHash = null), Re(ti);
      }
      function g(ti) {
        oe(ti, "htmx:beforeCleanupElement"), Oe(ti), ti.children && te(ti.children, function(ui) {
          g(ui);
        });
      }
      function Te(ti, ui, ci) {
        if (ti.tagName === "BODY")
          return Ie(ti, ui, ci);
        var oi, Si = ti.previousSibling;
        for (a(u(ti), ti, ui, ci), Si == null ? oi = u(ti).firstChild : oi = Si.nextSibling, ee(ti).replacedWith = oi, ci.elts = ci.elts.filter(function(ji) {
          return ji != ti;
        }); oi && oi !== ti; )
          oi.nodeType === Node.ELEMENT_NODE && ci.elts.push(oi), oi = oi.nextElementSibling;
        g(ti), u(ti).removeChild(ti);
      }
      function qe(ti, ui, ci) {
        return a(ti, ti.firstChild, ui, ci);
      }
      function He(ti, ui, ci) {
        return a(u(ti), ti, ui, ci);
      }
      function Le(ti, ui, ci) {
        return a(ti, null, ui, ci);
      }
      function Ae(ti, ui, ci) {
        return a(u(ti), ti.nextSibling, ui, ci);
      }
      function Ne(ti, ui, ci) {
        return g(ti), u(ti).removeChild(ti);
      }
      function Ie(ti, ui, ci) {
        var oi = ti.firstChild;
        if (a(ti, oi, ui, ci), oi) {
          for (; oi.nextSibling; )
            g(oi.nextSibling), ti.removeChild(oi.nextSibling);
          g(oi), ti.removeChild(oi);
        }
      }
      function Pe(ti, ui, ci) {
        var oi = ci || Y(ti, "hx-select");
        if (oi) {
          var Si = K().createDocumentFragment();
          te(ui.querySelectorAll(oi), function(ji) {
            Si.appendChild(ji);
          }), ui = Si;
        }
        return ui;
      }
      function ke(ti, ui, ci, oi, Si) {
        switch (ti) {
          case "none":
            return;
          case "outerHTML":
            Te(ci, oi, Si);
            return;
          case "afterbegin":
            qe(ci, oi, Si);
            return;
          case "beforebegin":
            He(ci, oi, Si);
            return;
          case "beforeend":
            Le(ci, oi, Si);
            return;
          case "afterend":
            Ae(ci, oi, Si);
            return;
          case "delete":
            Ne(ci);
            return;
          default:
            for (var ji = Tr(ui), qi = 0; qi < ji.length; qi++) {
              var ts = ji[qi];
              try {
                var Qi = ts.handleSwap(ti, ci, oi, Si);
                if (Qi) {
                  if (typeof Qi.length < "u")
                    for (var is = 0; is < Qi.length; is++) {
                      var ss = Qi[is];
                      ss.nodeType !== Node.TEXT_NODE && ss.nodeType !== Node.COMMENT_NODE && Si.tasks.push(we(ss));
                    }
                  return;
                }
              } catch (Wi) {
                x(Wi);
              }
            }
            ti === "innerHTML" ? Ie(ci, oi, Si) : ke(G.config.defaultSwapStyle, ui, ci, oi, Si);
        }
      }
      function Me(ti) {
        if (ti.indexOf("<title") > -1) {
          var ui = ti.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), ci = ui.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (ci)
            return ci[2];
        }
      }
      function De(ti, ui, ci, oi, Si, ji) {
        Si.title = Me(oi);
        var qi = l(oi);
        if (qi)
          return xe(ci, qi, Si), qi = Pe(ci, qi, ji), ye(qi), ke(ti, ci, ui, qi, Si);
      }
      function Xe(ti, ui, ci) {
        var oi = ti.getResponseHeader(ui);
        if (oi.indexOf("{") === 0) {
          var Si = y(oi);
          for (var ji in Si)
            if (Si.hasOwnProperty(ji)) {
              var qi = Si[ji];
              N(qi) || (qi = { value: qi }), oe(ci, ji, qi);
            }
        } else
          for (var ts = oi.split(","), Qi = 0; Qi < ts.length; Qi++)
            oe(ci, ts[Qi].trim(), []);
      }
      var p = /[\s,]/, Ue = /[_$a-zA-Z]/, Be = /[_$a-zA-Z0-9]/, Ve = ['"', "'", "/"], je = /[^\s]/;
      function We(ti) {
        for (var ui = [], ci = 0; ci < ti.length; ) {
          if (Ue.exec(ti.charAt(ci))) {
            for (var oi = ci; Be.exec(ti.charAt(ci + 1)); )
              ci++;
            ui.push(ti.substr(oi, ci - oi + 1));
          } else if (Ve.indexOf(ti.charAt(ci)) !== -1) {
            var Si = ti.charAt(ci), oi = ci;
            for (ci++; ci < ti.length && ti.charAt(ci) !== Si; )
              ti.charAt(ci) === "\\" && ci++, ci++;
            ui.push(ti.substr(oi, ci - oi + 1));
          } else {
            var ji = ti.charAt(ci);
            ui.push(ji);
          }
          ci++;
        }
        return ui;
      }
      function _e(ti, ui, ci) {
        return Ue.exec(ti.charAt(0)) && ti !== "true" && ti !== "false" && ti !== "this" && ti !== ci && ui !== ".";
      }
      function ze(ti, ui, ci) {
        if (ui[0] === "[") {
          ui.shift();
          for (var oi = 1, Si = " return (function(" + ci + "){ return (", ji = null; ui.length > 0; ) {
            var qi = ui[0];
            if (qi === "]") {
              if (oi--, oi === 0) {
                ji === null && (Si = Si + "true"), ui.shift(), Si += ")})";
                try {
                  var ts = hr(ti, function() {
                    return Function(Si)();
                  }, function() {
                    return !0;
                  });
                  return ts.source = Si, ts;
                } catch (Qi) {
                  return ae(K().body, "htmx:syntax:error", { error: Qi, source: Si }), null;
                }
              }
            } else
              qi === "[" && oi++;
            _e(qi, ji, ci) ? Si += "((" + ci + "." + qi + ") ? (" + ci + "." + qi + ") : (window." + qi + "))" : Si = Si + qi, ji = ui.shift();
          }
        }
      }
      function m(ti, ui) {
        for (var ci = ""; ti.length > 0 && !ti[0].match(ui); )
          ci += ti.shift();
        return ci;
      }
      var $e = "input, textarea, select";
      function Ge(ti) {
        var ui = Z(ti, "hx-trigger"), ci = [];
        if (ui) {
          var oi = We(ui);
          do {
            m(oi, je);
            var Si = oi.length, ji = m(oi, /[,\[\s]/);
            if (ji !== "")
              if (ji === "every") {
                var qi = { trigger: "every" };
                m(oi, je), qi.pollInterval = v(m(oi, /[,\[\s]/)), m(oi, je);
                var ts = ze(ti, oi, "event");
                ts && (qi.eventFilter = ts), ci.push(qi);
              } else if (ji.indexOf("sse:") === 0)
                ci.push({ trigger: "sse", sseEvent: ji.substr(4) });
              else {
                var Qi = { trigger: ji }, ts = ze(ti, oi, "event");
                for (ts && (Qi.eventFilter = ts); oi.length > 0 && oi[0] !== ","; ) {
                  m(oi, je);
                  var is = oi.shift();
                  if (is === "changed")
                    Qi.changed = !0;
                  else if (is === "once")
                    Qi.once = !0;
                  else if (is === "consume")
                    Qi.consume = !0;
                  else if (is === "delay" && oi[0] === ":")
                    oi.shift(), Qi.delay = v(m(oi, p));
                  else if (is === "from" && oi[0] === ":") {
                    oi.shift();
                    var ss = m(oi, p);
                    (ss === "closest" || ss === "find" || ss === "next" || ss === "previous") && (oi.shift(), ss += " " + m(oi, p)), Qi.from = ss;
                  } else
                    is === "target" && oi[0] === ":" ? (oi.shift(), Qi.target = m(oi, p)) : is === "throttle" && oi[0] === ":" ? (oi.shift(), Qi.throttle = v(m(oi, p))) : is === "queue" && oi[0] === ":" ? (oi.shift(), Qi.queue = m(oi, p)) : (is === "root" || is === "threshold") && oi[0] === ":" ? (oi.shift(), Qi[is] = m(oi, p)) : ae(ti, "htmx:syntax:error", { token: oi.shift() });
                }
                ci.push(Qi);
              }
            oi.length === Si && ae(ti, "htmx:syntax:error", { token: oi.shift() }), m(oi, je);
          } while (oi[0] === "," && oi.shift());
        }
        return ci.length > 0 ? ci : h(ti, "form") ? [{ trigger: "submit" }] : h(ti, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(ti, $e) ? [{ trigger: "change" }] : [{ trigger: "click" }];
      }
      function Je(ti) {
        ee(ti).cancelled = !0;
      }
      function Ze(ti, ui, ci) {
        var oi = ee(ti);
        oi.timeout = setTimeout(function() {
          re(ti) && oi.cancelled !== !0 && (tt(ci, ti, Pt("hx:poll:trigger", { triggerSpec: ci, target: ti })) || ui(ti), Ze(ti, ui, ci));
        }, ci.pollInterval);
      }
      function Ke(ti) {
        return location.hostname === ti.hostname && J(ti, "href") && J(ti, "href").indexOf("#") !== 0;
      }
      function Ye(ti, ui, ci) {
        if (ti.tagName === "A" && Ke(ti) && (ti.target === "" || ti.target === "_self") || ti.tagName === "FORM") {
          ui.boosted = !0;
          var oi, Si;
          if (ti.tagName === "A")
            oi = "get", Si = ti.href;
          else {
            var ji = J(ti, "method");
            oi = ji ? ji.toLowerCase() : "get", Si = J(ti, "action");
          }
          ci.forEach(function(qi) {
            rt(ti, function(ts, Qi) {
              if (d(ts, G.config.disableSelector)) {
                g(ts);
                return;
              }
              se(oi, Si, ts, Qi);
            }, ui, qi, !0);
          });
        }
      }
      function Qe(ti, ui) {
        return !!((ti.type === "submit" || ti.type === "click") && (ui.tagName === "FORM" || h(ui, 'input[type="submit"], button') && d(ui, "form") !== null || ui.tagName === "A" && ui.href && (ui.getAttribute("href") === "#" || ui.getAttribute("href").indexOf("#") !== 0)));
      }
      function et(ti, ui) {
        return ee(ti).boosted && ti.tagName === "A" && ui.type === "click" && (ui.ctrlKey || ui.metaKey);
      }
      function tt(ti, ui, ci) {
        var oi = ti.eventFilter;
        if (oi)
          try {
            return oi.call(ui, ci) !== !0;
          } catch (Si) {
            return ae(K().body, "htmx:eventFilter:error", { error: Si, source: oi.source }), !0;
          }
        return !1;
      }
      function rt(ti, ui, ci, oi, Si) {
        var ji = ee(ti), qi;
        oi.from ? qi = W(ti, oi.from) : qi = [ti], oi.changed && qi.forEach(function(ts) {
          var Qi = ee(ts);
          Qi.lastValue = ts.value;
        }), te(qi, function(ts) {
          var Qi = function(is) {
            if (!re(ti)) {
              ts.removeEventListener(oi.trigger, Qi);
              return;
            }
            if (!et(ti, is) && ((Si || Qe(is, ti)) && is.preventDefault(), !tt(oi, ti, is))) {
              var ss = ee(is);
              if (ss.triggerSpec = oi, ss.handledFor == null && (ss.handledFor = []), ss.handledFor.indexOf(ti) < 0) {
                if (ss.handledFor.push(ti), oi.consume && is.stopPropagation(), oi.target && is.target && !h(is.target, oi.target))
                  return;
                if (oi.once) {
                  if (ji.triggeredOnce)
                    return;
                  ji.triggeredOnce = !0;
                }
                if (oi.changed) {
                  var Wi = ee(ts);
                  if (Wi.lastValue === ts.value)
                    return;
                  Wi.lastValue = ts.value;
                }
                if (ji.delayed && clearTimeout(ji.delayed), ji.throttle)
                  return;
                oi.throttle ? ji.throttle || (ui(ti, is), ji.throttle = setTimeout(function() {
                  ji.throttle = null;
                }, oi.throttle)) : oi.delay ? ji.delayed = setTimeout(function() {
                  ui(ti, is);
                }, oi.delay) : (oe(ti, "htmx:trigger"), ui(ti, is));
              }
            }
          };
          ci.listenerInfos == null && (ci.listenerInfos = []), ci.listenerInfos.push({ trigger: oi.trigger, listener: Qi, on: ts }), ts.addEventListener(oi.trigger, Qi);
        });
      }
      var nt = !1, it = null;
      function at() {
        it || (it = function() {
          nt = !0;
        }, window.addEventListener("scroll", it), setInterval(function() {
          nt && (nt = !1, te(K().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(ti) {
            ot(ti);
          }));
        }, 200));
      }
      function ot(ti) {
        if (!o(ti, "data-hx-revealed") && P(ti)) {
          ti.setAttribute("data-hx-revealed", "true");
          var ui = ee(ti);
          ui.initHash ? oe(ti, "revealed") : ti.addEventListener("htmx:afterProcessNode", function(ci) {
            oe(ti, "revealed");
          }, { once: !0 });
        }
      }
      function st(ti, ui, ci) {
        for (var oi = k(ci), Si = 0; Si < oi.length; Si++) {
          var ji = oi[Si].split(/:(.+)/);
          ji[0] === "connect" && lt(ti, ji[1], 0), ji[0] === "send" && ft(ti);
        }
      }
      function lt(ti, ui, ci) {
        if (re(ti)) {
          if (ui.indexOf("/") == 0) {
            var oi = location.hostname + (location.port ? ":" + location.port : "");
            location.protocol == "https:" ? ui = "wss://" + oi + ui : location.protocol == "http:" && (ui = "ws://" + oi + ui);
          }
          var Si = G.createWebSocket(ui);
          Si.onerror = function(ji) {
            ae(ti, "htmx:wsError", { error: ji, socket: Si }), ut(ti);
          }, Si.onclose = function(ji) {
            if ([1006, 1012, 1013].indexOf(ji.code) >= 0) {
              var qi = ct(ci);
              setTimeout(function() {
                lt(ti, ui, ci + 1);
              }, qi);
            }
          }, Si.onopen = function(ji) {
            ci = 0;
          }, ee(ti).webSocket = Si, Si.addEventListener("message", function(ji) {
            if (!ut(ti)) {
              var qi = ji.data;
              w(ti, function(Ki) {
                qi = Ki.transformResponse(qi, null, ti);
              });
              for (var ts = S(ti), Qi = l(qi), is = I(Qi.children), ss = 0; ss < is.length; ss++) {
                var Wi = is[ss];
                me(Z(Wi, "hx-swap-oob") || "true", Wi, ts);
              }
              Wt(ts.tasks);
            }
          });
        }
      }
      function ut(ti) {
        if (!re(ti))
          return ee(ti).webSocket.close(), !0;
      }
      function ft(ti) {
        var ui = c(ti, function(ci) {
          return ee(ci).webSocket != null;
        });
        ui ? ti.addEventListener(Ge(ti)[0].trigger, function(ci) {
          var oi = ee(ui).webSocket, Si = ir(ti, ui), ji = er(ti, "post"), qi = ji.errors, ts = ji.values, Qi = gr(ti), is = ne(ts, Qi), ss = ar(is, ti);
          if (ss.HEADERS = Si, qi && qi.length > 0) {
            oe(ti, "htmx:validation:halted", qi);
            return;
          }
          oi.send(JSON.stringify(ss)), Qe(ci, ti) && ci.preventDefault();
        }) : ae(ti, "htmx:noWebSocketSourceError");
      }
      function ct(ti) {
        var ui = G.config.wsReconnectDelay;
        if (typeof ui == "function")
          return ui(ti);
        if (ui === "full-jitter") {
          var ci = Math.min(ti, 6), oi = 1e3 * Math.pow(2, ci);
          return oi * Math.random();
        }
        x('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function ht(ti, ui, ci) {
        for (var oi = k(ci), Si = 0; Si < oi.length; Si++) {
          var ji = oi[Si].split(/:(.+)/);
          ji[0] === "connect" && dt(ti, ji[1]), ji[0] === "swap" && vt(ti, ji[1]);
        }
      }
      function dt(ti, ui) {
        var ci = G.createEventSource(ui);
        ci.onerror = function(oi) {
          ae(ti, "htmx:sseError", { error: oi, source: ci }), pt(ti);
        }, ee(ti).sseEventSource = ci;
      }
      function vt(ti, ui) {
        var ci = c(ti, mt);
        if (ci) {
          var oi = ee(ci).sseEventSource, Si = function(ji) {
            if (!pt(ci)) {
              if (!re(ti)) {
                oi.removeEventListener(ui, Si);
                return;
              }
              var qi = ji.data;
              w(ti, function(ss) {
                qi = ss.transformResponse(qi, null, ti);
              });
              var ts = sr(ti), Qi = de(ti), is = S(ti);
              De(ts.swapStyle, Qi, ti, qi, is), Wt(is.tasks), oe(ti, "htmx:sseMessage", ji);
            }
          };
          ee(ti).sseListener = Si, oi.addEventListener(ui, Si);
        } else
          ae(ti, "htmx:noSSESourceError");
      }
      function gt(ti, ui, ci) {
        var oi = c(ti, mt);
        if (oi) {
          var Si = ee(oi).sseEventSource, ji = function() {
            pt(oi) || (re(ti) ? ui(ti) : Si.removeEventListener(ci, ji));
          };
          ee(ti).sseListener = ji, Si.addEventListener(ci, ji);
        } else
          ae(ti, "htmx:noSSESourceError");
      }
      function pt(ti) {
        if (!re(ti))
          return ee(ti).sseEventSource.close(), !0;
      }
      function mt(ti) {
        return ee(ti).sseEventSource != null;
      }
      function xt(ti, ui, ci, oi) {
        var Si = function() {
          ci.loaded || (ci.loaded = !0, ui(ti));
        };
        oi ? setTimeout(Si, oi) : Si();
      }
      function yt(ti, ui, ci) {
        var oi = !1;
        return te(R, function(Si) {
          if (o(ti, "hx-" + Si)) {
            var ji = Z(ti, "hx-" + Si);
            oi = !0, ui.path = ji, ui.verb = Si, ci.forEach(function(qi) {
              bt(ti, qi, ui, function(ts, Qi) {
                if (d(ts, G.config.disableSelector)) {
                  g(ts);
                  return;
                }
                se(Si, ji, ts, Qi);
              });
            });
          }
        }), oi;
      }
      function bt(ti, ui, ci, oi) {
        if (ui.sseEvent)
          gt(ti, oi, ui.sseEvent);
        else if (ui.trigger === "revealed")
          at(), rt(ti, oi, ci, ui), ot(ti);
        else if (ui.trigger === "intersect") {
          var Si = {};
          ui.root && (Si.root = ie(ti, ui.root)), ui.threshold && (Si.threshold = parseFloat(ui.threshold));
          var ji = new IntersectionObserver(function(qi) {
            for (var ts = 0; ts < qi.length; ts++) {
              var Qi = qi[ts];
              if (Qi.isIntersecting) {
                oe(ti, "intersect");
                break;
              }
            }
          }, Si);
          ji.observe(ti), rt(ti, oi, ci, ui);
        } else
          ui.trigger === "load" ? tt(ui, ti, Pt("load", { elt: ti })) || xt(ti, oi, ci, ui.delay) : ui.pollInterval ? (ci.polling = !0, Ze(ti, oi, ui)) : rt(ti, oi, ci, ui);
      }
      function wt(ti) {
        if (G.config.allowScriptTags && (ti.type === "text/javascript" || ti.type === "module" || ti.type === "")) {
          var ui = K().createElement("script");
          te(ti.attributes, function(oi) {
            ui.setAttribute(oi.name, oi.value);
          }), ui.textContent = ti.textContent, ui.async = !1, G.config.inlineScriptNonce && (ui.nonce = G.config.inlineScriptNonce);
          var ci = ti.parentElement;
          try {
            ci.insertBefore(ui, ti);
          } catch (oi) {
            x(oi);
          } finally {
            ti.parentElement && ti.parentElement.removeChild(ti);
          }
        }
      }
      function St(ti) {
        h(ti, "script") && wt(ti), te(f(ti, "script"), function(ui) {
          wt(ui);
        });
      }
      function Et() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Ct(ti) {
        if (!document.evaluate)
          return [];
        let ui = null;
        const ci = [], oi = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', ti);
        for (; ui = oi.iterateNext(); )
          ci.push(ui);
        return ci;
      }
      function Rt(ti) {
        if (ti.querySelectorAll) {
          var ui = Et() ? ", a" : "", ci = ti.querySelectorAll(O + ui + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return ci;
        } else
          return [];
      }
      function Ot(ti) {
        var ui = s("#" + J(ti, "form")) || d(ti, "form");
        if (ui) {
          var ci = function(oi) {
            var Si = d(oi.target, "button, input[type='submit']");
            if (Si !== null) {
              var ji = ee(ui);
              ji.lastButtonClicked = Si;
            }
          };
          ti.addEventListener("click", ci), ti.addEventListener("focusin", ci), ti.addEventListener("focusout", function(oi) {
            var Si = ee(ui);
            Si.lastButtonClicked = null;
          });
        }
      }
      function Tt(ti) {
        var ui = We(ti), ci = 0;
        for (let oi = 0; oi < ui.length; oi++) {
          const Si = ui[oi];
          Si === "{" ? ci++ : Si === "}" && ci--;
        }
        return ci;
      }
      function qt(ti, ui, ci) {
        var oi = ee(ti);
        oi.onHandlers = [];
        var Si, ji = function(qi) {
          return hr(ti, function() {
            Si || (Si = new Function("event", ci)), Si.call(ti, qi);
          });
        };
        ti.addEventListener(ui, ji), oi.onHandlers.push({ event: ui, listener: ji });
      }
      function Ht(ti) {
        var ui = Z(ti, "hx-on");
        if (ui) {
          for (var ci = {}, oi = ui.split(`
`), Si = null, ji = 0; oi.length > 0; ) {
            var qi = oi.shift(), ts = qi.match(/^\s*([a-zA-Z:\-]+:)(.*)/);
            ji === 0 && ts ? (qi.split(":"), Si = ts[1].slice(0, -1), ci[Si] = ts[2]) : ci[Si] += qi, ji += Tt(qi);
          }
          for (var Qi in ci)
            qt(ti, Qi, ci[Qi]);
        }
      }
      function Lt(ti) {
        Re(ti);
        for (var ui = 0; ui < ti.attributes.length; ui++) {
          var ci = ti.attributes[ui].name, oi = ti.attributes[ui].value;
          if (ci.startsWith("hx-on:") || ci.startsWith("data-hx-on:")) {
            let Si = ci.slice(ci.indexOf(":") + 1);
            Si.startsWith(":") && (Si = "htmx" + Si), qt(ti, Si, oi);
          }
        }
      }
      function At(ti) {
        if (d(ti, G.config.disableSelector)) {
          g(ti);
          return;
        }
        var ui = ee(ti);
        if (ui.initHash !== Ce(ti)) {
          Oe(ti), ui.initHash = Ce(ti), Ht(ti), oe(ti, "htmx:beforeProcessNode"), ti.value && (ui.lastValue = ti.value);
          var ci = Ge(ti), oi = yt(ti, ui, ci);
          oi || (Y(ti, "hx-boost") === "true" ? Ye(ti, ui, ci) : o(ti, "hx-trigger") && ci.forEach(function(qi) {
            bt(ti, qi, ui, function() {
            });
          })), (ti.tagName === "FORM" || J(ti, "type") === "submit" && o(ti, "form")) && Ot(ti);
          var Si = Z(ti, "hx-sse");
          Si && ht(ti, ui, Si);
          var ji = Z(ti, "hx-ws");
          ji && st(ti, ui, ji), oe(ti, "htmx:afterProcessNode");
        }
      }
      function Nt(ti) {
        if (ti = s(ti), d(ti, G.config.disableSelector)) {
          g(ti);
          return;
        }
        At(ti), te(Rt(ti), function(ui) {
          At(ui);
        }), te(Ct(ti), Lt);
      }
      function It(ti) {
        return ti.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Pt(ti, ui) {
        var ci;
        return window.CustomEvent && typeof window.CustomEvent == "function" ? ci = new CustomEvent(ti, { bubbles: !0, cancelable: !0, detail: ui }) : (ci = K().createEvent("CustomEvent"), ci.initCustomEvent(ti, !0, !0, ui)), ci;
      }
      function ae(ti, ui, ci) {
        oe(ti, ui, ne({ error: ui }, ci));
      }
      function kt(ti) {
        return ti === "htmx:afterProcessNode";
      }
      function w(ti, ui) {
        te(Tr(ti), function(ci) {
          try {
            ui(ci);
          } catch (oi) {
            x(oi);
          }
        });
      }
      function x(ti) {
        console.error ? console.error(ti) : console.log && console.log("ERROR: ", ti);
      }
      function oe(ti, ui, ci) {
        ti = s(ti), ci == null && (ci = {}), ci.elt = ti;
        var oi = Pt(ui, ci);
        G.logger && !kt(ui) && G.logger(ti, ui, ci), ci.error && (x(ci.error), oe(ti, "htmx:error", { errorInfo: ci }));
        var Si = ti.dispatchEvent(oi), ji = It(ui);
        if (Si && ji !== ui) {
          var qi = Pt(ji, oi.detail);
          Si = Si && ti.dispatchEvent(qi);
        }
        return w(ti, function(ts) {
          Si = Si && ts.onEvent(ui, oi) !== !1;
        }), Si;
      }
      var Mt = location.pathname + location.search;
      function Dt() {
        var ti = K().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return ti || K().body;
      }
      function Xt(ti, ui, ci, oi) {
        if (M()) {
          ti = D(ti);
          for (var Si = y(localStorage.getItem("htmx-history-cache")) || [], ji = 0; ji < Si.length; ji++)
            if (Si[ji].url === ti) {
              Si.splice(ji, 1);
              break;
            }
          var qi = { url: ti, content: ui, title: ci, scroll: oi };
          for (oe(K().body, "htmx:historyItemCreated", { item: qi, cache: Si }), Si.push(qi); Si.length > G.config.historyCacheSize; )
            Si.shift();
          for (; Si.length > 0; )
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(Si));
              break;
            } catch (ts) {
              ae(K().body, "htmx:historyCacheError", { cause: ts, cache: Si }), Si.shift();
            }
        }
      }
      function Ft(ti) {
        if (!M())
          return null;
        ti = D(ti);
        for (var ui = y(localStorage.getItem("htmx-history-cache")) || [], ci = 0; ci < ui.length; ci++)
          if (ui[ci].url === ti)
            return ui[ci];
        return null;
      }
      function Ut(ti) {
        var ui = G.config.requestClass, ci = ti.cloneNode(!0);
        return te(f(ci, "." + ui), function(oi) {
          n(oi, ui);
        }), ci.innerHTML;
      }
      function Bt() {
        var ti = Dt(), ui = Mt || location.pathname + location.search, ci = K().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        ci || (oe(K().body, "htmx:beforeHistorySave", { path: ui, historyElt: ti }), Xt(ui, Ut(ti), K().title, window.scrollY)), G.config.historyEnabled && history.replaceState({ htmx: !0 }, K().title, window.location.href);
      }
      function Vt(ti) {
        G.config.getCacheBusterParam && (ti = ti.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (ti.endsWith("&") || ti.endsWith("?")) && (ti = ti.slice(0, -1))), G.config.historyEnabled && history.pushState({ htmx: !0 }, "", ti), Mt = ti;
      }
      function jt(ti) {
        G.config.historyEnabled && history.replaceState({ htmx: !0 }, "", ti), Mt = ti;
      }
      function Wt(ti) {
        te(ti, function(ui) {
          ui.call();
        });
      }
      function _t(ti) {
        var ui = new XMLHttpRequest(), ci = { path: ti, xhr: ui };
        oe(K().body, "htmx:historyCacheMiss", ci), ui.open("GET", ti, !0), ui.setRequestHeader("HX-History-Restore-Request", "true"), ui.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            oe(K().body, "htmx:historyCacheMissLoad", ci);
            var oi = l(this.response);
            oi = oi.querySelector("[hx-history-elt],[data-hx-history-elt]") || oi;
            var Si = Dt(), ji = S(Si), qi = Me(this.response);
            if (qi) {
              var ts = b("title");
              ts ? ts.innerHTML = qi : window.document.title = qi;
            }
            Ie(Si, oi, ji), Wt(ji.tasks), Mt = ti, oe(K().body, "htmx:historyRestore", { path: ti, cacheMiss: !0, serverResponse: this.response });
          } else
            ae(K().body, "htmx:historyCacheMissLoadError", ci);
        }, ui.send();
      }
      function zt(ti) {
        Bt(), ti = ti || location.pathname + location.search;
        var ui = Ft(ti);
        if (ui) {
          var ci = l(ui.content), oi = Dt(), Si = S(oi);
          Ie(oi, ci, Si), Wt(Si.tasks), document.title = ui.title, setTimeout(function() {
            window.scrollTo(0, ui.scroll);
          }, 0), Mt = ti, oe(K().body, "htmx:historyRestore", { path: ti, item: ui });
        } else
          G.config.refreshOnHistoryMiss ? window.location.reload(!0) : _t(ti);
      }
      function $t(ti) {
        var ui = ce(ti, "hx-indicator");
        return ui == null && (ui = [ti]), te(ui, function(ci) {
          var oi = ee(ci);
          oi.requestCount = (oi.requestCount || 0) + 1, ci.classList.add.call(ci.classList, G.config.requestClass);
        }), ui;
      }
      function Gt(ti) {
        te(ti, function(ui) {
          var ci = ee(ui);
          ci.requestCount = (ci.requestCount || 0) - 1, ci.requestCount === 0 && ui.classList.remove.call(ui.classList, G.config.requestClass);
        });
      }
      function Jt(ti, ui) {
        for (var ci = 0; ci < ti.length; ci++) {
          var oi = ti[ci];
          if (oi.isSameNode(ui))
            return !0;
        }
        return !1;
      }
      function Zt(ti) {
        return ti.name === "" || ti.name == null || ti.disabled || ti.type === "button" || ti.type === "submit" || ti.tagName === "image" || ti.tagName === "reset" || ti.tagName === "file" ? !1 : ti.type === "checkbox" || ti.type === "radio" ? ti.checked : !0;
      }
      function Kt(ti, ui, ci) {
        if (ti != null && ui != null) {
          var oi = ci[ti];
          oi === void 0 ? ci[ti] = ui : Array.isArray(oi) ? Array.isArray(ui) ? ci[ti] = oi.concat(ui) : oi.push(ui) : Array.isArray(ui) ? ci[ti] = [oi].concat(ui) : ci[ti] = [oi, ui];
        }
      }
      function Yt(ti, ui, ci, oi, Si) {
        if (!(oi == null || Jt(ti, oi))) {
          if (ti.push(oi), Zt(oi)) {
            var ji = J(oi, "name"), qi = oi.value;
            oi.multiple && (qi = I(oi.querySelectorAll("option:checked")).map(function(Qi) {
              return Qi.value;
            })), oi.files && (qi = I(oi.files)), Kt(ji, qi, ui), Si && Qt(oi, ci);
          }
          if (h(oi, "form")) {
            var ts = oi.elements;
            te(ts, function(Qi) {
              Yt(ti, ui, ci, Qi, Si);
            });
          }
        }
      }
      function Qt(ti, ui) {
        ti.willValidate && (oe(ti, "htmx:validation:validate"), ti.checkValidity() || (ui.push({ elt: ti, message: ti.validationMessage, validity: ti.validity }), oe(ti, "htmx:validation:failed", { message: ti.validationMessage, validity: ti.validity })));
      }
      function er(ti, ui) {
        var ci = [], oi = {}, Si = {}, ji = [], qi = ee(ti), ts = h(ti, "form") && ti.noValidate !== !0 || Z(ti, "hx-validate") === "true";
        if (qi.lastButtonClicked && (ts = ts && qi.lastButtonClicked.formNoValidate !== !0), ui !== "get" && Yt(ci, Si, ji, d(ti, "form"), ts), Yt(ci, oi, ji, ti, ts), qi.lastButtonClicked || ti.tagName === "BUTTON" || ti.tagName === "INPUT" && J(ti, "type") === "submit") {
          var Qi = qi.lastButtonClicked || ti, is = J(Qi, "name");
          Kt(is, Qi.value, Si);
        }
        var ss = ce(ti, "hx-include");
        return te(ss, function(Wi) {
          Yt(ci, oi, ji, Wi, ts), h(Wi, "form") || te(Wi.querySelectorAll($e), function(Ki) {
            Yt(ci, oi, ji, Ki, ts);
          });
        }), oi = ne(oi, Si), { errors: ji, values: oi };
      }
      function tr(ti, ui, ci) {
        ti !== "" && (ti += "&"), String(ci) === "[object Object]" && (ci = JSON.stringify(ci));
        var oi = encodeURIComponent(ci);
        return ti += encodeURIComponent(ui) + "=" + oi, ti;
      }
      function rr(ti) {
        var ui = "";
        for (var ci in ti)
          if (ti.hasOwnProperty(ci)) {
            var oi = ti[ci];
            Array.isArray(oi) ? te(oi, function(Si) {
              ui = tr(ui, ci, Si);
            }) : ui = tr(ui, ci, oi);
          }
        return ui;
      }
      function nr(ti) {
        var ui = new FormData();
        for (var ci in ti)
          if (ti.hasOwnProperty(ci)) {
            var oi = ti[ci];
            Array.isArray(oi) ? te(oi, function(Si) {
              ui.append(ci, Si);
            }) : ui.append(ci, oi);
          }
        return ui;
      }
      function ir(ti, ui, ci) {
        var oi = { "HX-Request": "true", "HX-Trigger": J(ti, "id"), "HX-Trigger-Name": J(ti, "name"), "HX-Target": Z(ui, "id"), "HX-Current-URL": K().location.href };
        return cr(ti, "hx-headers", !1, oi), ci !== void 0 && (oi["HX-Prompt"] = ci), ee(ti).boosted && (oi["HX-Boosted"] = "true"), oi;
      }
      function ar(ti, ui) {
        var ci = Y(ui, "hx-params");
        if (ci) {
          if (ci === "none")
            return {};
          if (ci === "*")
            return ti;
          if (ci.indexOf("not ") === 0)
            return te(ci.substr(4).split(","), function(Si) {
              Si = Si.trim(), delete ti[Si];
            }), ti;
          var oi = {};
          return te(ci.split(","), function(Si) {
            Si = Si.trim(), oi[Si] = ti[Si];
          }), oi;
        } else
          return ti;
      }
      function or(ti) {
        return J(ti, "href") && J(ti, "href").indexOf("#") >= 0;
      }
      function sr(ti, ui) {
        var ci = ui || Y(ti, "hx-swap"), oi = { swapStyle: ee(ti).boosted ? "innerHTML" : G.config.defaultSwapStyle, swapDelay: G.config.defaultSwapDelay, settleDelay: G.config.defaultSettleDelay };
        if (ee(ti).boosted && !or(ti) && (oi.show = "top"), ci) {
          var Si = k(ci);
          if (Si.length > 0) {
            oi.swapStyle = Si[0];
            for (var ji = 1; ji < Si.length; ji++) {
              var qi = Si[ji];
              if (qi.indexOf("swap:") === 0 && (oi.swapDelay = v(qi.substr(5))), qi.indexOf("settle:") === 0 && (oi.settleDelay = v(qi.substr(7))), qi.indexOf("transition:") === 0 && (oi.transition = qi.substr(11) === "true"), qi.indexOf("scroll:") === 0) {
                var ts = qi.substr(7), Qi = ts.split(":"), is = Qi.pop(), ss = Qi.length > 0 ? Qi.join(":") : null;
                oi.scroll = is, oi.scrollTarget = ss;
              }
              if (qi.indexOf("show:") === 0) {
                var Wi = qi.substr(5), Qi = Wi.split(":"), Ki = Qi.pop(), ss = Qi.length > 0 ? Qi.join(":") : null;
                oi.show = Ki, oi.showTarget = ss;
              }
              if (qi.indexOf("focus-scroll:") === 0) {
                var Ui = qi.substr(13);
                oi.focusScroll = Ui == "true";
              }
            }
          }
        }
        return oi;
      }
      function lr(ti) {
        return Y(ti, "hx-encoding") === "multipart/form-data" || h(ti, "form") && J(ti, "enctype") === "multipart/form-data";
      }
      function ur(ti, ui, ci) {
        var oi = null;
        return w(ui, function(Si) {
          oi == null && (oi = Si.encodeParameters(ti, ci, ui));
        }), oi ?? (lr(ui) ? nr(ci) : rr(ci));
      }
      function S(ti) {
        return { tasks: [], elts: [ti] };
      }
      function fr(ti, ui) {
        var ci = ti[0], oi = ti[ti.length - 1];
        if (ui.scroll) {
          var Si = null;
          ui.scrollTarget && (Si = ie(ci, ui.scrollTarget)), ui.scroll === "top" && (ci || Si) && (Si = Si || ci, Si.scrollTop = 0), ui.scroll === "bottom" && (oi || Si) && (Si = Si || oi, Si.scrollTop = Si.scrollHeight);
        }
        if (ui.show) {
          var Si = null;
          if (ui.showTarget) {
            var ji = ui.showTarget;
            ui.showTarget === "window" && (ji = "body"), Si = ie(ci, ji);
          }
          ui.show === "top" && (ci || Si) && (Si = Si || ci, Si.scrollIntoView({ block: "start", behavior: G.config.scrollBehavior })), ui.show === "bottom" && (oi || Si) && (Si = Si || oi, Si.scrollIntoView({ block: "end", behavior: G.config.scrollBehavior }));
        }
      }
      function cr(ti, ui, ci, oi) {
        if (oi == null && (oi = {}), ti == null)
          return oi;
        var Si = Z(ti, ui);
        if (Si) {
          var ji = Si.trim(), qi = ci;
          if (ji === "unset")
            return null;
          ji.indexOf("javascript:") === 0 ? (ji = ji.substr(11), qi = !0) : ji.indexOf("js:") === 0 && (ji = ji.substr(3), qi = !0), ji.indexOf("{") !== 0 && (ji = "{" + ji + "}");
          var ts;
          qi ? ts = hr(ti, function() {
            return Function("return (" + ji + ")")();
          }, {}) : ts = y(ji);
          for (var Qi in ts)
            ts.hasOwnProperty(Qi) && oi[Qi] == null && (oi[Qi] = ts[Qi]);
        }
        return cr(u(ti), ui, ci, oi);
      }
      function hr(ti, ui, ci) {
        return G.config.allowEval ? ui() : (ae(ti, "htmx:evalDisallowedError"), ci);
      }
      function dr(ti, ui) {
        return cr(ti, "hx-vars", !0, ui);
      }
      function vr(ti, ui) {
        return cr(ti, "hx-vals", !1, ui);
      }
      function gr(ti) {
        return ne(dr(ti), vr(ti));
      }
      function pr(ti, ui, ci) {
        if (ci !== null)
          try {
            ti.setRequestHeader(ui, ci);
          } catch {
            ti.setRequestHeader(ui, encodeURIComponent(ci)), ti.setRequestHeader(ui + "-URI-AutoEncoded", "true");
          }
      }
      function mr(ti) {
        if (ti.responseURL && typeof URL < "u")
          try {
            var ui = new URL(ti.responseURL);
            return ui.pathname + ui.search;
          } catch {
            ae(K().body, "htmx:badResponseUrl", { url: ti.responseURL });
          }
      }
      function E(ti, ui) {
        return ti.getAllResponseHeaders().match(ui);
      }
      function xr(ti, ui, ci) {
        return ti = ti.toLowerCase(), ci ? ci instanceof Element || L(ci, "String") ? se(ti, ui, null, null, { targetOverride: s(ci), returnPromise: !0 }) : se(ti, ui, s(ci.source), ci.event, { handler: ci.handler, headers: ci.headers, values: ci.values, targetOverride: s(ci.target), swapOverride: ci.swap, returnPromise: !0 }) : se(ti, ui, null, null, { returnPromise: !0 });
      }
      function yr(ti) {
        for (var ui = []; ti; )
          ui.push(ti), ti = ti.parentElement;
        return ui;
      }
      function br(ti, ui, ci) {
        var oi = new URL(ui, document.location.href), Si = document.location.origin, ji = Si === oi.origin;
        return G.config.selfRequestsOnly && !ji ? !1 : oe(ti, "htmx:validateUrl", ne({ url: oi, sameHost: ji }, ci));
      }
      function se(ti, ui, ci, oi, Si, ji) {
        var qi = null, ts = null;
        if (Si = Si ?? {}, Si.returnPromise && typeof Promise < "u")
          var Qi = new Promise(function(mi, vi) {
            qi = mi, ts = vi;
          });
        ci == null && (ci = K().body);
        var is = Si.handler || Sr;
        if (re(ci)) {
          var ss = Si.targetOverride || de(ci);
          if (ss == null || ss == fe) {
            ae(ci, "htmx:targetError", { target: Z(ci, "hx-target") });
            return;
          }
          if (!ji) {
            var Wi = function() {
              return se(ti, ui, ci, oi, Si, !0);
            }, Ki = { target: ss, elt: ci, path: ui, verb: ti, triggeringEvent: oi, etc: Si, issueRequest: Wi };
            if (oe(ci, "htmx:confirm", Ki) === !1)
              return;
          }
          var Ui = ci, ki = ee(ci), bi = Y(ci, "hx-sync"), Ri = null, Ni = !1;
          if (bi) {
            var fi = bi.split(":"), Ci = fi[0].trim();
            if (Ci === "this" ? Ui = he(ci, "hx-sync") : Ui = ie(ci, Ci), bi = (fi[1] || "drop").trim(), ki = ee(Ui), bi === "drop" && ki.xhr && ki.abortable !== !0)
              return;
            if (bi === "abort") {
              if (ki.xhr)
                return;
              Ni = !0;
            } else if (bi === "replace")
              oe(Ui, "htmx:abort");
            else if (bi.indexOf("queue") === 0) {
              var wi = bi.split(" ");
              Ri = (wi[1] || "last").trim();
            }
          }
          if (ki.xhr)
            if (ki.abortable)
              oe(Ui, "htmx:abort");
            else {
              if (Ri == null) {
                if (oi) {
                  var yi = ee(oi);
                  yi && yi.triggerSpec && yi.triggerSpec.queue && (Ri = yi.triggerSpec.queue);
                }
                Ri == null && (Ri = "last");
              }
              ki.queuedRequests == null && (ki.queuedRequests = []), Ri === "first" && ki.queuedRequests.length === 0 ? ki.queuedRequests.push(function() {
                se(ti, ui, ci, oi, Si);
              }) : Ri === "all" ? ki.queuedRequests.push(function() {
                se(ti, ui, ci, oi, Si);
              }) : Ri === "last" && (ki.queuedRequests = [], ki.queuedRequests.push(function() {
                se(ti, ui, ci, oi, Si);
              }));
              return;
            }
          var Ti = new XMLHttpRequest();
          ki.xhr = Ti, ki.abortable = Ni;
          var Mi = function() {
            if (ki.xhr = null, ki.abortable = !1, ki.queuedRequests != null && ki.queuedRequests.length > 0) {
              var mi = ki.queuedRequests.shift();
              mi();
            }
          }, Oi = Y(ci, "hx-prompt");
          if (Oi) {
            var ai = prompt(Oi);
            if (ai === null || !oe(ci, "htmx:prompt", { prompt: ai, target: ss }))
              return Q(qi), Mi(), Qi;
          }
          var li = Y(ci, "hx-confirm");
          if (li && !confirm(li))
            return Q(qi), Mi(), Qi;
          var xi = ir(ci, ss, ai);
          Si.headers && (xi = ne(xi, Si.headers));
          var di = er(ci, ti), pi = di.errors, ei = di.values;
          Si.values && (ei = ne(ei, Si.values));
          var Fe = gr(ci), ii = ne(ei, Fe), hi = ar(ii, ci);
          ti !== "get" && !lr(ci) && (xi["Content-Type"] = "application/x-www-form-urlencoded"), G.config.getCacheBusterParam && ti === "get" && (hi["org.htmx.cache-buster"] = J(ss, "id") || "true"), (ui == null || ui === "") && (ui = K().location.href);
          var gi = cr(ci, "hx-request"), Ei = ee(ci).boosted, ni = G.config.methodsThatUseUrlParams.indexOf(ti) >= 0, Pi = { boosted: Ei, useUrlParams: ni, parameters: hi, unfilteredParameters: ii, headers: xi, target: ss, verb: ti, errors: pi, withCredentials: Si.credentials || gi.credentials || G.config.withCredentials, timeout: Si.timeout || gi.timeout || G.config.timeout, path: ui, triggeringEvent: oi };
          if (!oe(ci, "htmx:configRequest", Pi))
            return Q(qi), Mi(), Qi;
          if (ui = Pi.path, ti = Pi.verb, xi = Pi.headers, hi = Pi.parameters, pi = Pi.errors, ni = Pi.useUrlParams, pi && pi.length > 0)
            return oe(ci, "htmx:validation:halted", Pi), Q(qi), Mi(), Qi;
          var Fi = ui.split("#"), Zi = Fi[0], rs = Fi[1], Bi = ui;
          if (ni) {
            Bi = Zi;
            var si = Object.keys(hi).length !== 0;
            si && (Bi.indexOf("?") < 0 ? Bi += "?" : Bi += "&", Bi += rr(hi), rs && (Bi += "#" + rs));
          }
          if (!br(ci, Bi, Pi)) {
            ae(ci, "htmx:invalidPath", Pi);
            return;
          }
          if (Ti.open(ti.toUpperCase(), Bi, !0), Ti.overrideMimeType("text/html"), Ti.withCredentials = Pi.withCredentials, Ti.timeout = Pi.timeout, !gi.noHeaders) {
            for (var Li in xi)
              if (xi.hasOwnProperty(Li)) {
                var Hi = xi[Li];
                pr(Ti, Li, Hi);
              }
          }
          var Di = { xhr: Ti, target: ss, requestConfig: Pi, etc: Si, boosted: Ei, pathInfo: { requestPath: ui, finalRequestPath: Bi, anchor: rs } };
          if (Ti.onload = function() {
            try {
              var mi = yr(ci);
              if (Di.pathInfo.responsePath = mr(Ti), is(ci, Di), Gt(Vi), oe(ci, "htmx:afterRequest", Di), oe(ci, "htmx:afterOnLoad", Di), !re(ci)) {
                for (var vi = null; mi.length > 0 && vi == null; ) {
                  var zi = mi.shift();
                  re(zi) && (vi = zi);
                }
                vi && (oe(vi, "htmx:afterRequest", Di), oe(vi, "htmx:afterOnLoad", Di));
              }
              Q(qi), Mi();
            } catch (Xi) {
              throw ae(ci, "htmx:onLoadError", ne({ error: Xi }, Di)), Xi;
            }
          }, Ti.onerror = function() {
            Gt(Vi), ae(ci, "htmx:afterRequest", Di), ae(ci, "htmx:sendError", Di), Q(ts), Mi();
          }, Ti.onabort = function() {
            Gt(Vi), ae(ci, "htmx:afterRequest", Di), ae(ci, "htmx:sendAbort", Di), Q(ts), Mi();
          }, Ti.ontimeout = function() {
            Gt(Vi), ae(ci, "htmx:afterRequest", Di), ae(ci, "htmx:timeout", Di), Q(ts), Mi();
          }, !oe(ci, "htmx:beforeRequest", Di))
            return Q(qi), Mi(), Qi;
          var Vi = $t(ci);
          te(["loadstart", "loadend", "progress", "abort"], function(mi) {
            te([Ti, Ti.upload], function(vi) {
              vi.addEventListener(mi, function(zi) {
                oe(ci, "htmx:xhr:" + mi, { lengthComputable: zi.lengthComputable, loaded: zi.loaded, total: zi.total });
              });
            });
          }), oe(ci, "htmx:beforeSend", Di);
          var ri = ni ? null : ur(Ti, ci, hi);
          return Ti.send(ri), Qi;
        }
      }
      function wr(ti, ui) {
        var ci = ui.xhr, oi = null, Si = null;
        if (E(ci, /HX-Push:/i) ? (oi = ci.getResponseHeader("HX-Push"), Si = "push") : E(ci, /HX-Push-Url:/i) ? (oi = ci.getResponseHeader("HX-Push-Url"), Si = "push") : E(ci, /HX-Replace-Url:/i) && (oi = ci.getResponseHeader("HX-Replace-Url"), Si = "replace"), oi)
          return oi === "false" ? {} : { type: Si, path: oi };
        var ji = ui.pathInfo.finalRequestPath, qi = ui.pathInfo.responsePath, ts = Y(ti, "hx-push-url"), Qi = Y(ti, "hx-replace-url"), is = ee(ti).boosted, ss = null, Wi = null;
        return ts ? (ss = "push", Wi = ts) : Qi ? (ss = "replace", Wi = Qi) : is && (ss = "push", Wi = qi || ji), Wi ? Wi === "false" ? {} : (Wi === "true" && (Wi = qi || ji), ui.pathInfo.anchor && Wi.indexOf("#") === -1 && (Wi = Wi + "#" + ui.pathInfo.anchor), { type: ss, path: Wi }) : {};
      }
      function Sr(ti, ui) {
        var ci = ui.xhr, oi = ui.target, Si = ui.etc;
        if (oe(ti, "htmx:beforeOnLoad", ui)) {
          if (E(ci, /HX-Trigger:/i) && Xe(ci, "HX-Trigger", ti), E(ci, /HX-Location:/i)) {
            Bt();
            var ji = ci.getResponseHeader("HX-Location"), qi;
            ji.indexOf("{") === 0 && (qi = y(ji), ji = qi.path, delete qi.path), xr("GET", ji, qi).then(function() {
              Vt(ji);
            });
            return;
          }
          if (E(ci, /HX-Redirect:/i)) {
            location.href = ci.getResponseHeader("HX-Redirect");
            return;
          }
          if (E(ci, /HX-Refresh:/i) && ci.getResponseHeader("HX-Refresh") === "true") {
            location.reload();
            return;
          }
          E(ci, /HX-Retarget:/i) && (ui.target = K().querySelector(ci.getResponseHeader("HX-Retarget")));
          var ts = wr(ti, ui), Qi = ci.status >= 200 && ci.status < 400 && ci.status !== 204, is = ci.response, ss = ci.status >= 400, Wi = ne({ shouldSwap: Qi, serverResponse: is, isError: ss }, ui);
          if (oe(oi, "htmx:beforeSwap", Wi)) {
            if (oi = Wi.target, is = Wi.serverResponse, ss = Wi.isError, ui.target = oi, ui.failed = ss, ui.successful = !ss, Wi.shouldSwap) {
              ci.status === 286 && Je(ti), w(ti, function(wi) {
                is = wi.transformResponse(is, ci, ti);
              }), ts.type && Bt();
              var Ki = Si.swapOverride;
              E(ci, /HX-Reswap:/i) && (Ki = ci.getResponseHeader("HX-Reswap"));
              var qi = sr(ti, Ki);
              oi.classList.add(G.config.swappingClass);
              var Ui = null, ki = null, bi = function() {
                try {
                  var wi = document.activeElement, yi = {};
                  try {
                    yi = { elt: wi, start: wi ? wi.selectionStart : null, end: wi ? wi.selectionEnd : null };
                  } catch {
                  }
                  var Ti;
                  E(ci, /HX-Reselect:/i) && (Ti = ci.getResponseHeader("HX-Reselect"));
                  var Mi = S(oi);
                  if (De(qi.swapStyle, oi, ti, is, Mi, Ti), yi.elt && !re(yi.elt) && J(yi.elt, "id")) {
                    var Oi = document.getElementById(J(yi.elt, "id")), ai = { preventScroll: qi.focusScroll !== void 0 ? !qi.focusScroll : !G.config.defaultFocusScroll };
                    if (Oi) {
                      if (yi.start && Oi.setSelectionRange)
                        try {
                          Oi.setSelectionRange(yi.start, yi.end);
                        } catch {
                        }
                      Oi.focus(ai);
                    }
                  }
                  if (oi.classList.remove(G.config.swappingClass), te(Mi.elts, function(di) {
                    di.classList && di.classList.add(G.config.settlingClass), oe(di, "htmx:afterSwap", ui);
                  }), E(ci, /HX-Trigger-After-Swap:/i)) {
                    var li = ti;
                    re(ti) || (li = K().body), Xe(ci, "HX-Trigger-After-Swap", li);
                  }
                  var xi = function() {
                    if (te(Mi.tasks, function(Fe) {
                      Fe.call();
                    }), te(Mi.elts, function(Fe) {
                      Fe.classList && Fe.classList.remove(G.config.settlingClass), oe(Fe, "htmx:afterSettle", ui);
                    }), ts.type && (ts.type === "push" ? (Vt(ts.path), oe(K().body, "htmx:pushedIntoHistory", { path: ts.path })) : (jt(ts.path), oe(K().body, "htmx:replacedInHistory", { path: ts.path }))), ui.pathInfo.anchor) {
                      var di = b("#" + ui.pathInfo.anchor);
                      di && di.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                    if (Mi.title) {
                      var pi = b("title");
                      pi ? pi.innerHTML = Mi.title : window.document.title = Mi.title;
                    }
                    if (fr(Mi.elts, qi), E(ci, /HX-Trigger-After-Settle:/i)) {
                      var ei = ti;
                      re(ti) || (ei = K().body), Xe(ci, "HX-Trigger-After-Settle", ei);
                    }
                    Q(Ui);
                  };
                  qi.settleDelay > 0 ? setTimeout(xi, qi.settleDelay) : xi();
                } catch (di) {
                  throw ae(ti, "htmx:swapError", ui), Q(ki), di;
                }
              }, Ri = G.config.globalViewTransitions;
              if (qi.hasOwnProperty("transition") && (Ri = qi.transition), Ri && oe(ti, "htmx:beforeTransition", ui) && typeof Promise < "u" && document.startViewTransition) {
                var Ni = new Promise(function(wi, yi) {
                  Ui = wi, ki = yi;
                }), fi = bi;
                bi = function() {
                  document.startViewTransition(function() {
                    return fi(), Ni;
                  });
                };
              }
              qi.swapDelay > 0 ? setTimeout(bi, qi.swapDelay) : bi();
            }
            ss && ae(ti, "htmx:responseError", ne({ error: "Response Status Error Code " + ci.status + " from " + ui.pathInfo.requestPath }, ui));
          }
        }
      }
      var Er = {};
      function Cr() {
        return { init: function(ti) {
          return null;
        }, onEvent: function(ti, ui) {
          return !0;
        }, transformResponse: function(ti, ui, ci) {
          return ti;
        }, isInlineSwap: function(ti) {
          return !1;
        }, handleSwap: function(ti, ui, ci, oi) {
          return !1;
        }, encodeParameters: function(ti, ui, ci) {
          return null;
        } };
      }
      function Rr(ti, ui) {
        ui.init && ui.init(C), Er[ti] = ne(Cr(), ui);
      }
      function Or(ti) {
        delete Er[ti];
      }
      function Tr(ti, ui, ci) {
        if (ti == null)
          return ui;
        ui == null && (ui = []), ci == null && (ci = []);
        var oi = Z(ti, "hx-ext");
        return oi && te(oi.split(","), function(Si) {
          if (Si = Si.replace(/ /g, ""), Si.slice(0, 7) == "ignore:") {
            ci.push(Si.slice(7));
            return;
          }
          if (ci.indexOf(Si) < 0) {
            var ji = Er[Si];
            ji && ui.indexOf(ji) < 0 && ui.push(ji);
          }
        }), Tr(u(ti), ui, ci);
      }
      var qr = !1;
      K().addEventListener("DOMContentLoaded", function() {
        qr = !0;
      });
      function Hr(ti) {
        qr || K().readyState === "complete" ? ti() : K().addEventListener("DOMContentLoaded", ti);
      }
      function Lr() {
        G.config.includeIndicatorStyles !== !1 && K().head.insertAdjacentHTML("beforeend", "<style>                      ." + G.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + G.config.requestClass + " ." + G.config.indicatorClass + "{opacity:1}                      ." + G.config.requestClass + "." + G.config.indicatorClass + "{opacity:1}                    </style>");
      }
      function Ar() {
        var ti = K().querySelector('meta[name="htmx-config"]');
        return ti ? y(ti.content) : null;
      }
      function Nr() {
        var ti = Ar();
        ti && (G.config = ne(G.config, ti));
      }
      return Hr(function() {
        Nr(), Lr();
        var ti = K().body;
        Nt(ti);
        var ui = K().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        ti.addEventListener("htmx:abort", function(oi) {
          var Si = oi.target, ji = ee(Si);
          ji && ji.xhr && ji.xhr.abort();
        });
        var ci = window.onpopstate;
        window.onpopstate = function(oi) {
          oi.state && oi.state.htmx ? (zt(), te(ui, function(Si) {
            oe(Si, "htmx:restored", { document: K(), triggerEvent: oe });
          })) : ci && ci(oi);
        }, setTimeout(function() {
          oe(ti, "htmx:load", {}), ti = null;
        }, 0);
      }), G;
    }();
  });
})(htmx_min);
var htmx_minExports = htmx_min.exports;
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
window.htmx = htmx;
async function prices(ti) {
  return fetch(`https://api.coincap.io/v2/assets/bitcoin/history?interval=h1&start=${Date.now() - 6048e5}&end=${Date.now()}`).then((ui) => ui.json()).then((ui) => ui.data.map((ci) => [ci.time, Number(ci.priceUsd)]));
}
window.addEventListener("DOMContentLoaded", async function() {
  Highcharts.chart("chart", {
    chart: {
      type: "line",
      backgroundColor: "var(--background-color)",
      numberFormatter: function(ti) {
        return ti.toFixed(0);
      }
    },
    title: {
      text: "bitcoin price chart",
      style: {
        color: "var(--color)"
      }
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
      data: await prices(),
      color: "var(--purple)"
    }]
  });
});
