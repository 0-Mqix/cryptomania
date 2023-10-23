const style = "";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(Fe) {
  return Fe && Fe.__esModule && Object.prototype.hasOwnProperty.call(Fe, "default") ? Fe.default : Fe;
}
var htmx_min = { exports: {} };
(function(module) {
  (function(Fe, $r) {
    module.exports ? module.exports = $r() : Fe.htmx = Fe.htmx || $r();
  })(typeof self < "u" ? self : commonjsGlobal, function() {
    return function() {
      var G = { onLoad: t, process: Nt, on: le, off: ue, trigger: oe, ajax: xr, find: b, findAll: f, closest: d, values: function(Fe, $r) {
        var _r = er(Fe, $r || "post");
        return _r.values;
      }, remove: U, addClass: B, removeClass: n, toggleClass: V, takeClass: j, defineExtension: Rr, removeExtension: Or, logAll: X, logNone: F, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1 }, parseInterval: v, _: e, createEventSource: function(Fe) {
        return new EventSource(Fe, { withCredentials: !0 });
      }, createWebSocket: function(Fe) {
        var $r = new WebSocket(Fe, []);
        return $r.binaryType = G.config.wsBinaryType, $r;
      }, version: "1.9.5" }, C = { addTriggerHandler: bt, bodyContains: re, canAccessLocalStorage: M, findThisElement: he, filterValues: ar, hasAttribute: o, getAttributeValue: Z, getClosestAttributeValue: Y, getClosestMatch: c, getExpressionVars: gr, getHeaders: ir, getInputValues: er, getInternalData: ee, getSwapSpecification: sr, getTriggerSpecs: Ge, getTarget: de, makeFragment: l, mergeObjects: ne, makeSettleInfo: S, oobSwap: me, querySelectorExt: ie, selectAndSwap: De, settleImmediately: Wt, shouldCancel: Qe, triggerEvent: oe, triggerErrorEvent: ae, withExtensions: w }, R = ["get", "post", "put", "delete", "patch"], O = R.map(function(Fe) {
        return "[hx-" + Fe + "], [data-hx-" + Fe + "]";
      }).join(", ");
      function v(Fe) {
        if (Fe != null)
          return Fe.slice(-2) == "ms" ? parseFloat(Fe.slice(0, -2)) || void 0 : Fe.slice(-1) == "s" ? parseFloat(Fe.slice(0, -1)) * 1e3 || void 0 : Fe.slice(-1) == "m" ? parseFloat(Fe.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(Fe) || void 0;
      }
      function J(Fe, $r) {
        return Fe.getAttribute && Fe.getAttribute($r);
      }
      function o(Fe, $r) {
        return Fe.hasAttribute && (Fe.hasAttribute($r) || Fe.hasAttribute("data-" + $r));
      }
      function Z(Fe, $r) {
        return J(Fe, $r) || J(Fe, "data-" + $r);
      }
      function u(Fe) {
        return Fe.parentElement;
      }
      function K() {
        return document;
      }
      function c(Fe, $r) {
        for (; Fe && !$r(Fe); )
          Fe = u(Fe);
        return Fe || null;
      }
      function T(Fe, $r, _r) {
        var Pr = Z($r, _r), Mr = Z($r, "hx-disinherit");
        return Fe !== $r && Mr && (Mr === "*" || Mr.split(" ").indexOf(_r) >= 0) ? "unset" : Pr;
      }
      function Y(Fe, $r) {
        var _r = null;
        if (c(Fe, function(Pr) {
          return _r = T(Fe, Pr, $r);
        }), _r !== "unset")
          return _r;
      }
      function h(Fe, $r) {
        var _r = Fe.matches || Fe.matchesSelector || Fe.msMatchesSelector || Fe.mozMatchesSelector || Fe.webkitMatchesSelector || Fe.oMatchesSelector;
        return _r && _r.call(Fe, $r);
      }
      function q(Fe) {
        var $r = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, _r = $r.exec(Fe);
        return _r ? _r[1].toLowerCase() : "";
      }
      function i(Fe, $r) {
        for (var _r = new DOMParser(), Pr = _r.parseFromString(Fe, "text/html"), Mr = Pr.body; $r > 0; )
          $r--, Mr = Mr.firstChild;
        return Mr == null && (Mr = K().createDocumentFragment()), Mr;
      }
      function H(Fe) {
        return Fe.match(/<body/);
      }
      function l(Fe) {
        var $r = !H(Fe);
        if (G.config.useTemplateFragments && $r) {
          var _r = i("<body><template>" + Fe + "</template></body>", 0);
          return _r.querySelector("template").content;
        } else {
          var Pr = q(Fe);
          switch (Pr) {
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
      function L(Fe, $r) {
        return Object.prototype.toString.call(Fe) === "[object " + $r + "]";
      }
      function A(Fe) {
        return L(Fe, "Function");
      }
      function N(Fe) {
        return L(Fe, "Object");
      }
      function ee(Fe) {
        var $r = "htmx-internal-data", _r = Fe[$r];
        return _r || (_r = Fe[$r] = {}), _r;
      }
      function I(Fe) {
        var $r = [];
        if (Fe)
          for (var _r = 0; _r < Fe.length; _r++)
            $r.push(Fe[_r]);
        return $r;
      }
      function te(Fe, $r) {
        if (Fe)
          for (var _r = 0; _r < Fe.length; _r++)
            $r(Fe[_r]);
      }
      function P(Fe) {
        var $r = Fe.getBoundingClientRect(), _r = $r.top, Pr = $r.bottom;
        return _r < window.innerHeight && Pr >= 0;
      }
      function re(Fe) {
        return Fe.getRootNode && Fe.getRootNode() instanceof window.ShadowRoot ? K().body.contains(Fe.getRootNode().host) : K().body.contains(Fe);
      }
      function k(Fe) {
        return Fe.trim().split(/\s+/);
      }
      function ne(Fe, $r) {
        for (var _r in $r)
          $r.hasOwnProperty(_r) && (Fe[_r] = $r[_r]);
        return Fe;
      }
      function y(Fe) {
        try {
          return JSON.parse(Fe);
        } catch ($r) {
          return x($r), null;
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
          var $r = new URL(Fe);
          return $r && (Fe = $r.pathname + $r.search), Fe.match("^/$") || (Fe = Fe.replace(/\/+$/, "")), Fe;
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
        var $r = G.on("htmx:load", function(_r) {
          Fe(_r.detail.elt);
        });
        return $r;
      }
      function X() {
        G.logger = function(Fe, $r, _r) {
          console && console.log($r, Fe, _r);
        };
      }
      function F() {
        G.logger = null;
      }
      function b(Fe, $r) {
        return $r ? Fe.querySelector($r) : b(K(), Fe);
      }
      function f(Fe, $r) {
        return $r ? Fe.querySelectorAll($r) : f(K(), Fe);
      }
      function U(Fe, $r) {
        Fe = s(Fe), $r ? setTimeout(function() {
          U(Fe), Fe = null;
        }, $r) : Fe.parentElement.removeChild(Fe);
      }
      function B(Fe, $r, _r) {
        Fe = s(Fe), _r ? setTimeout(function() {
          B(Fe, $r), Fe = null;
        }, _r) : Fe.classList && Fe.classList.add($r);
      }
      function n(Fe, $r, _r) {
        Fe = s(Fe), _r ? setTimeout(function() {
          n(Fe, $r), Fe = null;
        }, _r) : Fe.classList && (Fe.classList.remove($r), Fe.classList.length === 0 && Fe.removeAttribute("class"));
      }
      function V(Fe, $r) {
        Fe = s(Fe), Fe.classList.toggle($r);
      }
      function j(Fe, $r) {
        Fe = s(Fe), te(Fe.parentElement.children, function(_r) {
          n(_r, $r);
        }), B(Fe, $r);
      }
      function d(Fe, $r) {
        if (Fe = s(Fe), Fe.closest)
          return Fe.closest($r);
        do
          if (Fe == null || h(Fe, $r))
            return Fe;
        while (Fe = Fe && u(Fe));
        return null;
      }
      function r(Fe) {
        var $r = Fe.trim();
        return $r.startsWith("<") && $r.endsWith("/>") ? $r.substring(1, $r.length - 2) : $r;
      }
      function W(Fe, $r) {
        return $r.indexOf("closest ") === 0 ? [d(Fe, r($r.substr(8)))] : $r.indexOf("find ") === 0 ? [b(Fe, r($r.substr(5)))] : $r.indexOf("next ") === 0 ? [_(Fe, r($r.substr(5)))] : $r.indexOf("previous ") === 0 ? [z(Fe, r($r.substr(9)))] : $r === "document" ? [document] : $r === "window" ? [window] : $r === "body" ? [document.body] : K().querySelectorAll(r($r));
      }
      var _ = function(Fe, $r) {
        for (var _r = K().querySelectorAll($r), Pr = 0; Pr < _r.length; Pr++) {
          var Mr = _r[Pr];
          if (Mr.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_PRECEDING)
            return Mr;
        }
      }, z = function(Fe, $r) {
        for (var _r = K().querySelectorAll($r), Pr = _r.length - 1; Pr >= 0; Pr--) {
          var Mr = _r[Pr];
          if (Mr.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_FOLLOWING)
            return Mr;
        }
      };
      function ie(Fe, $r) {
        return $r ? W(Fe, $r)[0] : W(K().body, Fe)[0];
      }
      function s(Fe) {
        return L(Fe, "String") ? b(Fe) : Fe;
      }
      function $(Fe, $r, _r) {
        return A($r) ? { target: K().body, event: Fe, listener: $r } : { target: s(Fe), event: $r, listener: _r };
      }
      function le(Fe, $r, _r) {
        Hr(function() {
          var Mr = $(Fe, $r, _r);
          Mr.target.addEventListener(Mr.event, Mr.listener);
        });
        var Pr = A($r);
        return Pr ? $r : _r;
      }
      function ue(Fe, $r, _r) {
        return Hr(function() {
          var Pr = $(Fe, $r, _r);
          Pr.target.removeEventListener(Pr.event, Pr.listener);
        }), A($r) ? $r : _r;
      }
      var fe = K().createElement("output");
      function ce(Fe, $r) {
        var _r = Y(Fe, $r);
        if (_r) {
          if (_r === "this")
            return [he(Fe, $r)];
          var Pr = W(Fe, _r);
          return Pr.length === 0 ? (x('The selector "' + _r + '" on ' + $r + " returned no matches!"), [fe]) : Pr;
        }
      }
      function he(Fe, $r) {
        return c(Fe, function(_r) {
          return Z(_r, $r) != null;
        });
      }
      function de(Fe) {
        var $r = Y(Fe, "hx-target");
        if ($r)
          return $r === "this" ? he(Fe, "hx-target") : ie(Fe, $r);
        var _r = ee(Fe);
        return _r.boosted ? K().body : Fe;
      }
      function ve(Fe) {
        for (var $r = G.config.attributesToSettle, _r = 0; _r < $r.length; _r++)
          if (Fe === $r[_r])
            return !0;
        return !1;
      }
      function ge(Fe, $r) {
        te(Fe.attributes, function(_r) {
          !$r.hasAttribute(_r.name) && ve(_r.name) && Fe.removeAttribute(_r.name);
        }), te($r.attributes, function(_r) {
          ve(_r.name) && Fe.setAttribute(_r.name, _r.value);
        });
      }
      function pe(Fe, $r) {
        for (var _r = Tr($r), Pr = 0; Pr < _r.length; Pr++) {
          var Mr = _r[Pr];
          try {
            if (Mr.isInlineSwap(Fe))
              return !0;
          } catch (Ir) {
            x(Ir);
          }
        }
        return Fe === "outerHTML";
      }
      function me(Fe, $r, _r) {
        var Pr = "#" + J($r, "id"), Mr = "outerHTML";
        Fe === "true" || (Fe.indexOf(":") > 0 ? (Mr = Fe.substr(0, Fe.indexOf(":")), Pr = Fe.substr(Fe.indexOf(":") + 1, Fe.length)) : Mr = Fe);
        var Ir = K().querySelectorAll(Pr);
        return Ir ? (te(Ir, function(Ur) {
          var Gr, kr = $r.cloneNode(!0);
          Gr = K().createDocumentFragment(), Gr.appendChild(kr), pe(Mr, Ur) || (Gr = kr);
          var Dr = { shouldSwap: !0, target: Ur, fragment: Gr };
          oe(Ur, "htmx:oobBeforeSwap", Dr) && (Ur = Dr.target, Dr.shouldSwap && ke(Mr, Ur, Ur, Gr, _r), te(_r.elts, function(Kr) {
            oe(Kr, "htmx:oobAfterSwap", Dr);
          }));
        }), $r.parentNode.removeChild($r)) : ($r.parentNode.removeChild($r), ae(K().body, "htmx:oobErrorNoTarget", { content: $r })), Fe;
      }
      function xe(Fe, $r, _r) {
        var Pr = Y(Fe, "hx-select-oob");
        if (Pr) {
          var Mr = Pr.split(",");
          for (let Dr = 0; Dr < Mr.length; Dr++) {
            var Ir = Mr[Dr].split(":", 2), Ur = Ir[0].trim();
            Ur.indexOf("#") === 0 && (Ur = Ur.substring(1));
            var Gr = Ir[1] || "true", kr = $r.querySelector("#" + Ur);
            kr && me(Gr, kr, _r);
          }
        }
        te(f($r, "[hx-swap-oob], [data-hx-swap-oob]"), function(Dr) {
          var Kr = Z(Dr, "hx-swap-oob");
          Kr != null && me(Kr, Dr, _r);
        });
      }
      function ye(Fe) {
        te(f(Fe, "[hx-preserve], [data-hx-preserve]"), function($r) {
          var _r = Z($r, "id"), Pr = K().getElementById(_r);
          Pr != null && $r.parentNode.replaceChild(Pr, $r);
        });
      }
      function be(Fe, $r, _r) {
        te($r.querySelectorAll("[id]"), function(Pr) {
          var Mr = J(Pr, "id");
          if (Mr && Mr.length > 0) {
            var Ir = Mr.replace("'", "\\'"), Ur = Pr.tagName.replace(":", "\\:"), Gr = Fe.querySelector(Ur + "[id='" + Ir + "']");
            if (Gr && Gr !== Fe) {
              var kr = Pr.cloneNode();
              ge(Pr, Gr), _r.tasks.push(function() {
                ge(Pr, kr);
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
        var $r = "[autofocus]", _r = h(Fe, $r) ? Fe : Fe.querySelector($r);
        _r != null && _r.focus();
      }
      function a(Fe, $r, _r, Pr) {
        for (be(Fe, _r, Pr); _r.childNodes.length > 0; ) {
          var Mr = _r.firstChild;
          B(Mr, G.config.addedClass), Fe.insertBefore(Mr, $r), Mr.nodeType !== Node.TEXT_NODE && Mr.nodeType !== Node.COMMENT_NODE && Pr.tasks.push(we(Mr));
        }
      }
      function Ee(Fe, $r) {
        for (var _r = 0; _r < Fe.length; )
          $r = ($r << 5) - $r + Fe.charCodeAt(_r++) | 0;
        return $r;
      }
      function Ce(Fe) {
        var $r = 0;
        if (Fe.attributes)
          for (var _r = 0; _r < Fe.attributes.length; _r++) {
            var Pr = Fe.attributes[_r];
            Pr.value && ($r = Ee(Pr.name, $r), $r = Ee(Pr.value, $r));
          }
        return $r;
      }
      function Re(Fe) {
        var $r = ee(Fe);
        if ($r.onHandlers) {
          for (let _r = 0; _r < $r.onHandlers.length; _r++) {
            const Pr = $r.onHandlers[_r];
            Fe.removeEventListener(Pr.event, Pr.listener);
          }
          delete $r.onHandlers;
        }
      }
      function Oe(Fe) {
        var $r = ee(Fe);
        $r.timeout && clearTimeout($r.timeout), $r.webSocket && $r.webSocket.close(), $r.sseEventSource && $r.sseEventSource.close(), $r.listenerInfos && te($r.listenerInfos, function(_r) {
          _r.on && _r.on.removeEventListener(_r.trigger, _r.listener);
        }), $r.initHash && ($r.initHash = null), Re(Fe);
      }
      function g(Fe) {
        oe(Fe, "htmx:beforeCleanupElement"), Oe(Fe), Fe.children && te(Fe.children, function($r) {
          g($r);
        });
      }
      function Te(Fe, $r, _r) {
        if (Fe.tagName === "BODY")
          return Ie(Fe, $r, _r);
        var Pr, Mr = Fe.previousSibling;
        for (a(u(Fe), Fe, $r, _r), Mr == null ? Pr = u(Fe).firstChild : Pr = Mr.nextSibling, ee(Fe).replacedWith = Pr, _r.elts = _r.elts.filter(function(Ir) {
          return Ir != Fe;
        }); Pr && Pr !== Fe; )
          Pr.nodeType === Node.ELEMENT_NODE && _r.elts.push(Pr), Pr = Pr.nextElementSibling;
        g(Fe), u(Fe).removeChild(Fe);
      }
      function qe(Fe, $r, _r) {
        return a(Fe, Fe.firstChild, $r, _r);
      }
      function He(Fe, $r, _r) {
        return a(u(Fe), Fe, $r, _r);
      }
      function Le(Fe, $r, _r) {
        return a(Fe, null, $r, _r);
      }
      function Ae(Fe, $r, _r) {
        return a(u(Fe), Fe.nextSibling, $r, _r);
      }
      function Ne(Fe, $r, _r) {
        return g(Fe), u(Fe).removeChild(Fe);
      }
      function Ie(Fe, $r, _r) {
        var Pr = Fe.firstChild;
        if (a(Fe, Pr, $r, _r), Pr) {
          for (; Pr.nextSibling; )
            g(Pr.nextSibling), Fe.removeChild(Pr.nextSibling);
          g(Pr), Fe.removeChild(Pr);
        }
      }
      function Pe(Fe, $r, _r) {
        var Pr = _r || Y(Fe, "hx-select");
        if (Pr) {
          var Mr = K().createDocumentFragment();
          te($r.querySelectorAll(Pr), function(Ir) {
            Mr.appendChild(Ir);
          }), $r = Mr;
        }
        return $r;
      }
      function ke(Fe, $r, _r, Pr, Mr) {
        switch (Fe) {
          case "none":
            return;
          case "outerHTML":
            Te(_r, Pr, Mr);
            return;
          case "afterbegin":
            qe(_r, Pr, Mr);
            return;
          case "beforebegin":
            He(_r, Pr, Mr);
            return;
          case "beforeend":
            Le(_r, Pr, Mr);
            return;
          case "afterend":
            Ae(_r, Pr, Mr);
            return;
          case "delete":
            Ne(_r);
            return;
          default:
            for (var Ir = Tr($r), Ur = 0; Ur < Ir.length; Ur++) {
              var Gr = Ir[Ur];
              try {
                var kr = Gr.handleSwap(Fe, _r, Pr, Mr);
                if (kr) {
                  if (typeof kr.length < "u")
                    for (var Dr = 0; Dr < kr.length; Dr++) {
                      var Kr = kr[Dr];
                      Kr.nodeType !== Node.TEXT_NODE && Kr.nodeType !== Node.COMMENT_NODE && Mr.tasks.push(we(Kr));
                    }
                  return;
                }
              } catch (jr) {
                x(jr);
              }
            }
            Fe === "innerHTML" ? Ie(_r, Pr, Mr) : ke(G.config.defaultSwapStyle, $r, _r, Pr, Mr);
        }
      }
      function Me(Fe) {
        if (Fe.indexOf("<title") > -1) {
          var $r = Fe.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), _r = $r.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (_r)
            return _r[2];
        }
      }
      function De(Fe, $r, _r, Pr, Mr, Ir) {
        Mr.title = Me(Pr);
        var Ur = l(Pr);
        if (Ur)
          return xe(_r, Ur, Mr), Ur = Pe(_r, Ur, Ir), ye(Ur), ke(Fe, _r, $r, Ur, Mr);
      }
      function Xe(Fe, $r, _r) {
        var Pr = Fe.getResponseHeader($r);
        if (Pr.indexOf("{") === 0) {
          var Mr = y(Pr);
          for (var Ir in Mr)
            if (Mr.hasOwnProperty(Ir)) {
              var Ur = Mr[Ir];
              N(Ur) || (Ur = { value: Ur }), oe(_r, Ir, Ur);
            }
        } else
          for (var Gr = Pr.split(","), kr = 0; kr < Gr.length; kr++)
            oe(_r, Gr[kr].trim(), []);
      }
      var p = /[\s,]/, Ue = /[_$a-zA-Z]/, Be = /[_$a-zA-Z0-9]/, Ve = ['"', "'", "/"], je = /[^\s]/;
      function We(Fe) {
        for (var $r = [], _r = 0; _r < Fe.length; ) {
          if (Ue.exec(Fe.charAt(_r))) {
            for (var Pr = _r; Be.exec(Fe.charAt(_r + 1)); )
              _r++;
            $r.push(Fe.substr(Pr, _r - Pr + 1));
          } else if (Ve.indexOf(Fe.charAt(_r)) !== -1) {
            var Mr = Fe.charAt(_r), Pr = _r;
            for (_r++; _r < Fe.length && Fe.charAt(_r) !== Mr; )
              Fe.charAt(_r) === "\\" && _r++, _r++;
            $r.push(Fe.substr(Pr, _r - Pr + 1));
          } else {
            var Ir = Fe.charAt(_r);
            $r.push(Ir);
          }
          _r++;
        }
        return $r;
      }
      function _e(Fe, $r, _r) {
        return Ue.exec(Fe.charAt(0)) && Fe !== "true" && Fe !== "false" && Fe !== "this" && Fe !== _r && $r !== ".";
      }
      function ze(Fe, $r, _r) {
        if ($r[0] === "[") {
          $r.shift();
          for (var Pr = 1, Mr = " return (function(" + _r + "){ return (", Ir = null; $r.length > 0; ) {
            var Ur = $r[0];
            if (Ur === "]") {
              if (Pr--, Pr === 0) {
                Ir === null && (Mr = Mr + "true"), $r.shift(), Mr += ")})";
                try {
                  var Gr = hr(Fe, function() {
                    return Function(Mr)();
                  }, function() {
                    return !0;
                  });
                  return Gr.source = Mr, Gr;
                } catch (kr) {
                  return ae(K().body, "htmx:syntax:error", { error: kr, source: Mr }), null;
                }
              }
            } else
              Ur === "[" && Pr++;
            _e(Ur, Ir, _r) ? Mr += "((" + _r + "." + Ur + ") ? (" + _r + "." + Ur + ") : (window." + Ur + "))" : Mr = Mr + Ur, Ir = $r.shift();
          }
        }
      }
      function m(Fe, $r) {
        for (var _r = ""; Fe.length > 0 && !Fe[0].match($r); )
          _r += Fe.shift();
        return _r;
      }
      var $e = "input, textarea, select";
      function Ge(Fe) {
        var $r = Z(Fe, "hx-trigger"), _r = [];
        if ($r) {
          var Pr = We($r);
          do {
            m(Pr, je);
            var Mr = Pr.length, Ir = m(Pr, /[,\[\s]/);
            if (Ir !== "")
              if (Ir === "every") {
                var Ur = { trigger: "every" };
                m(Pr, je), Ur.pollInterval = v(m(Pr, /[,\[\s]/)), m(Pr, je);
                var Gr = ze(Fe, Pr, "event");
                Gr && (Ur.eventFilter = Gr), _r.push(Ur);
              } else if (Ir.indexOf("sse:") === 0)
                _r.push({ trigger: "sse", sseEvent: Ir.substr(4) });
              else {
                var kr = { trigger: Ir }, Gr = ze(Fe, Pr, "event");
                for (Gr && (kr.eventFilter = Gr); Pr.length > 0 && Pr[0] !== ","; ) {
                  m(Pr, je);
                  var Dr = Pr.shift();
                  if (Dr === "changed")
                    kr.changed = !0;
                  else if (Dr === "once")
                    kr.once = !0;
                  else if (Dr === "consume")
                    kr.consume = !0;
                  else if (Dr === "delay" && Pr[0] === ":")
                    Pr.shift(), kr.delay = v(m(Pr, p));
                  else if (Dr === "from" && Pr[0] === ":") {
                    Pr.shift();
                    var Kr = m(Pr, p);
                    (Kr === "closest" || Kr === "find" || Kr === "next" || Kr === "previous") && (Pr.shift(), Kr += " " + m(Pr, p)), kr.from = Kr;
                  } else
                    Dr === "target" && Pr[0] === ":" ? (Pr.shift(), kr.target = m(Pr, p)) : Dr === "throttle" && Pr[0] === ":" ? (Pr.shift(), kr.throttle = v(m(Pr, p))) : Dr === "queue" && Pr[0] === ":" ? (Pr.shift(), kr.queue = m(Pr, p)) : (Dr === "root" || Dr === "threshold") && Pr[0] === ":" ? (Pr.shift(), kr[Dr] = m(Pr, p)) : ae(Fe, "htmx:syntax:error", { token: Pr.shift() });
                }
                _r.push(kr);
              }
            Pr.length === Mr && ae(Fe, "htmx:syntax:error", { token: Pr.shift() }), m(Pr, je);
          } while (Pr[0] === "," && Pr.shift());
        }
        return _r.length > 0 ? _r : h(Fe, "form") ? [{ trigger: "submit" }] : h(Fe, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(Fe, $e) ? [{ trigger: "change" }] : [{ trigger: "click" }];
      }
      function Je(Fe) {
        ee(Fe).cancelled = !0;
      }
      function Ze(Fe, $r, _r) {
        var Pr = ee(Fe);
        Pr.timeout = setTimeout(function() {
          re(Fe) && Pr.cancelled !== !0 && (tt(_r, Fe, Pt("hx:poll:trigger", { triggerSpec: _r, target: Fe })) || $r(Fe), Ze(Fe, $r, _r));
        }, _r.pollInterval);
      }
      function Ke(Fe) {
        return location.hostname === Fe.hostname && J(Fe, "href") && J(Fe, "href").indexOf("#") !== 0;
      }
      function Ye(Fe, $r, _r) {
        if (Fe.tagName === "A" && Ke(Fe) && (Fe.target === "" || Fe.target === "_self") || Fe.tagName === "FORM") {
          $r.boosted = !0;
          var Pr, Mr;
          if (Fe.tagName === "A")
            Pr = "get", Mr = Fe.href;
          else {
            var Ir = J(Fe, "method");
            Pr = Ir ? Ir.toLowerCase() : "get", Mr = J(Fe, "action");
          }
          _r.forEach(function(Ur) {
            rt(Fe, function(Gr, kr) {
              if (d(Gr, G.config.disableSelector)) {
                g(Gr);
                return;
              }
              se(Pr, Mr, Gr, kr);
            }, $r, Ur, !0);
          });
        }
      }
      function Qe(Fe, $r) {
        return !!((Fe.type === "submit" || Fe.type === "click") && ($r.tagName === "FORM" || h($r, 'input[type="submit"], button') && d($r, "form") !== null || $r.tagName === "A" && $r.href && ($r.getAttribute("href") === "#" || $r.getAttribute("href").indexOf("#") !== 0)));
      }
      function et(Fe, $r) {
        return ee(Fe).boosted && Fe.tagName === "A" && $r.type === "click" && ($r.ctrlKey || $r.metaKey);
      }
      function tt(Fe, $r, _r) {
        var Pr = Fe.eventFilter;
        if (Pr)
          try {
            return Pr.call($r, _r) !== !0;
          } catch (Mr) {
            return ae(K().body, "htmx:eventFilter:error", { error: Mr, source: Pr.source }), !0;
          }
        return !1;
      }
      function rt(Fe, $r, _r, Pr, Mr) {
        var Ir = ee(Fe), Ur;
        Pr.from ? Ur = W(Fe, Pr.from) : Ur = [Fe], Pr.changed && Ur.forEach(function(Gr) {
          var kr = ee(Gr);
          kr.lastValue = Gr.value;
        }), te(Ur, function(Gr) {
          var kr = function(Dr) {
            if (!re(Fe)) {
              Gr.removeEventListener(Pr.trigger, kr);
              return;
            }
            if (!et(Fe, Dr) && ((Mr || Qe(Dr, Fe)) && Dr.preventDefault(), !tt(Pr, Fe, Dr))) {
              var Kr = ee(Dr);
              if (Kr.triggerSpec = Pr, Kr.handledFor == null && (Kr.handledFor = []), Kr.handledFor.indexOf(Fe) < 0) {
                if (Kr.handledFor.push(Fe), Pr.consume && Dr.stopPropagation(), Pr.target && Dr.target && !h(Dr.target, Pr.target))
                  return;
                if (Pr.once) {
                  if (Ir.triggeredOnce)
                    return;
                  Ir.triggeredOnce = !0;
                }
                if (Pr.changed) {
                  var jr = ee(Gr);
                  if (jr.lastValue === Gr.value)
                    return;
                  jr.lastValue = Gr.value;
                }
                if (Ir.delayed && clearTimeout(Ir.delayed), Ir.throttle)
                  return;
                Pr.throttle ? Ir.throttle || ($r(Fe, Dr), Ir.throttle = setTimeout(function() {
                  Ir.throttle = null;
                }, Pr.throttle)) : Pr.delay ? Ir.delayed = setTimeout(function() {
                  $r(Fe, Dr);
                }, Pr.delay) : (oe(Fe, "htmx:trigger"), $r(Fe, Dr));
              }
            }
          };
          _r.listenerInfos == null && (_r.listenerInfos = []), _r.listenerInfos.push({ trigger: Pr.trigger, listener: kr, on: Gr }), Gr.addEventListener(Pr.trigger, kr);
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
          var $r = ee(Fe);
          $r.initHash ? oe(Fe, "revealed") : Fe.addEventListener("htmx:afterProcessNode", function(_r) {
            oe(Fe, "revealed");
          }, { once: !0 });
        }
      }
      function st(Fe, $r, _r) {
        for (var Pr = k(_r), Mr = 0; Mr < Pr.length; Mr++) {
          var Ir = Pr[Mr].split(/:(.+)/);
          Ir[0] === "connect" && lt(Fe, Ir[1], 0), Ir[0] === "send" && ft(Fe);
        }
      }
      function lt(Fe, $r, _r) {
        if (re(Fe)) {
          if ($r.indexOf("/") == 0) {
            var Pr = location.hostname + (location.port ? ":" + location.port : "");
            location.protocol == "https:" ? $r = "wss://" + Pr + $r : location.protocol == "http:" && ($r = "ws://" + Pr + $r);
          }
          var Mr = G.createWebSocket($r);
          Mr.onerror = function(Ir) {
            ae(Fe, "htmx:wsError", { error: Ir, socket: Mr }), ut(Fe);
          }, Mr.onclose = function(Ir) {
            if ([1006, 1012, 1013].indexOf(Ir.code) >= 0) {
              var Ur = ct(_r);
              setTimeout(function() {
                lt(Fe, $r, _r + 1);
              }, Ur);
            }
          }, Mr.onopen = function(Ir) {
            _r = 0;
          }, ee(Fe).webSocket = Mr, Mr.addEventListener("message", function(Ir) {
            if (!ut(Fe)) {
              var Ur = Ir.data;
              w(Fe, function(Xr) {
                Ur = Xr.transformResponse(Ur, null, Fe);
              });
              for (var Gr = S(Fe), kr = l(Ur), Dr = I(kr.children), Kr = 0; Kr < Dr.length; Kr++) {
                var jr = Dr[Kr];
                me(Z(jr, "hx-swap-oob") || "true", jr, Gr);
              }
              Wt(Gr.tasks);
            }
          });
        }
      }
      function ut(Fe) {
        if (!re(Fe))
          return ee(Fe).webSocket.close(), !0;
      }
      function ft(Fe) {
        var $r = c(Fe, function(_r) {
          return ee(_r).webSocket != null;
        });
        $r ? Fe.addEventListener(Ge(Fe)[0].trigger, function(_r) {
          var Pr = ee($r).webSocket, Mr = ir(Fe, $r), Ir = er(Fe, "post"), Ur = Ir.errors, Gr = Ir.values, kr = gr(Fe), Dr = ne(Gr, kr), Kr = ar(Dr, Fe);
          if (Kr.HEADERS = Mr, Ur && Ur.length > 0) {
            oe(Fe, "htmx:validation:halted", Ur);
            return;
          }
          Pr.send(JSON.stringify(Kr)), Qe(_r, Fe) && _r.preventDefault();
        }) : ae(Fe, "htmx:noWebSocketSourceError");
      }
      function ct(Fe) {
        var $r = G.config.wsReconnectDelay;
        if (typeof $r == "function")
          return $r(Fe);
        if ($r === "full-jitter") {
          var _r = Math.min(Fe, 6), Pr = 1e3 * Math.pow(2, _r);
          return Pr * Math.random();
        }
        x('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function ht(Fe, $r, _r) {
        for (var Pr = k(_r), Mr = 0; Mr < Pr.length; Mr++) {
          var Ir = Pr[Mr].split(/:(.+)/);
          Ir[0] === "connect" && dt(Fe, Ir[1]), Ir[0] === "swap" && vt(Fe, Ir[1]);
        }
      }
      function dt(Fe, $r) {
        var _r = G.createEventSource($r);
        _r.onerror = function(Pr) {
          ae(Fe, "htmx:sseError", { error: Pr, source: _r }), pt(Fe);
        }, ee(Fe).sseEventSource = _r;
      }
      function vt(Fe, $r) {
        var _r = c(Fe, mt);
        if (_r) {
          var Pr = ee(_r).sseEventSource, Mr = function(Ir) {
            if (!pt(_r)) {
              if (!re(Fe)) {
                Pr.removeEventListener($r, Mr);
                return;
              }
              var Ur = Ir.data;
              w(Fe, function(Kr) {
                Ur = Kr.transformResponse(Ur, null, Fe);
              });
              var Gr = sr(Fe), kr = de(Fe), Dr = S(Fe);
              De(Gr.swapStyle, kr, Fe, Ur, Dr), Wt(Dr.tasks), oe(Fe, "htmx:sseMessage", Ir);
            }
          };
          ee(Fe).sseListener = Mr, Pr.addEventListener($r, Mr);
        } else
          ae(Fe, "htmx:noSSESourceError");
      }
      function gt(Fe, $r, _r) {
        var Pr = c(Fe, mt);
        if (Pr) {
          var Mr = ee(Pr).sseEventSource, Ir = function() {
            pt(Pr) || (re(Fe) ? $r(Fe) : Mr.removeEventListener(_r, Ir));
          };
          ee(Fe).sseListener = Ir, Mr.addEventListener(_r, Ir);
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
      function xt(Fe, $r, _r, Pr) {
        var Mr = function() {
          _r.loaded || (_r.loaded = !0, $r(Fe));
        };
        Pr ? setTimeout(Mr, Pr) : Mr();
      }
      function yt(Fe, $r, _r) {
        var Pr = !1;
        return te(R, function(Mr) {
          if (o(Fe, "hx-" + Mr)) {
            var Ir = Z(Fe, "hx-" + Mr);
            Pr = !0, $r.path = Ir, $r.verb = Mr, _r.forEach(function(Ur) {
              bt(Fe, Ur, $r, function(Gr, kr) {
                if (d(Gr, G.config.disableSelector)) {
                  g(Gr);
                  return;
                }
                se(Mr, Ir, Gr, kr);
              });
            });
          }
        }), Pr;
      }
      function bt(Fe, $r, _r, Pr) {
        if ($r.sseEvent)
          gt(Fe, Pr, $r.sseEvent);
        else if ($r.trigger === "revealed")
          at(), rt(Fe, Pr, _r, $r), ot(Fe);
        else if ($r.trigger === "intersect") {
          var Mr = {};
          $r.root && (Mr.root = ie(Fe, $r.root)), $r.threshold && (Mr.threshold = parseFloat($r.threshold));
          var Ir = new IntersectionObserver(function(Ur) {
            for (var Gr = 0; Gr < Ur.length; Gr++) {
              var kr = Ur[Gr];
              if (kr.isIntersecting) {
                oe(Fe, "intersect");
                break;
              }
            }
          }, Mr);
          Ir.observe(Fe), rt(Fe, Pr, _r, $r);
        } else
          $r.trigger === "load" ? tt($r, Fe, Pt("load", { elt: Fe })) || xt(Fe, Pr, _r, $r.delay) : $r.pollInterval ? (_r.polling = !0, Ze(Fe, Pr, $r)) : rt(Fe, Pr, _r, $r);
      }
      function wt(Fe) {
        if (G.config.allowScriptTags && (Fe.type === "text/javascript" || Fe.type === "module" || Fe.type === "")) {
          var $r = K().createElement("script");
          te(Fe.attributes, function(Pr) {
            $r.setAttribute(Pr.name, Pr.value);
          }), $r.textContent = Fe.textContent, $r.async = !1, G.config.inlineScriptNonce && ($r.nonce = G.config.inlineScriptNonce);
          var _r = Fe.parentElement;
          try {
            _r.insertBefore($r, Fe);
          } catch (Pr) {
            x(Pr);
          } finally {
            Fe.parentElement && Fe.parentElement.removeChild(Fe);
          }
        }
      }
      function St(Fe) {
        h(Fe, "script") && wt(Fe), te(f(Fe, "script"), function($r) {
          wt($r);
        });
      }
      function Et() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Ct(Fe) {
        if (!document.evaluate)
          return [];
        let $r = null;
        const _r = [], Pr = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', Fe);
        for (; $r = Pr.iterateNext(); )
          _r.push($r);
        return _r;
      }
      function Rt(Fe) {
        if (Fe.querySelectorAll) {
          var $r = Et() ? ", a" : "", _r = Fe.querySelectorAll(O + $r + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return _r;
        } else
          return [];
      }
      function Ot(Fe) {
        var $r = s("#" + J(Fe, "form")) || d(Fe, "form");
        if ($r) {
          var _r = function(Pr) {
            var Mr = d(Pr.target, "button, input[type='submit']");
            if (Mr !== null) {
              var Ir = ee($r);
              Ir.lastButtonClicked = Mr;
            }
          };
          Fe.addEventListener("click", _r), Fe.addEventListener("focusin", _r), Fe.addEventListener("focusout", function(Pr) {
            var Mr = ee($r);
            Mr.lastButtonClicked = null;
          });
        }
      }
      function Tt(Fe) {
        var $r = We(Fe), _r = 0;
        for (let Pr = 0; Pr < $r.length; Pr++) {
          const Mr = $r[Pr];
          Mr === "{" ? _r++ : Mr === "}" && _r--;
        }
        return _r;
      }
      function qt(Fe, $r, _r) {
        var Pr = ee(Fe);
        Pr.onHandlers = [];
        var Mr, Ir = function(Ur) {
          return hr(Fe, function() {
            Mr || (Mr = new Function("event", _r)), Mr.call(Fe, Ur);
          });
        };
        Fe.addEventListener($r, Ir), Pr.onHandlers.push({ event: $r, listener: Ir });
      }
      function Ht(Fe) {
        var $r = Z(Fe, "hx-on");
        if ($r) {
          for (var _r = {}, Pr = $r.split(`
`), Mr = null, Ir = 0; Pr.length > 0; ) {
            var Ur = Pr.shift(), Gr = Ur.match(/^\s*([a-zA-Z:\-]+:)(.*)/);
            Ir === 0 && Gr ? (Ur.split(":"), Mr = Gr[1].slice(0, -1), _r[Mr] = Gr[2]) : _r[Mr] += Ur, Ir += Tt(Ur);
          }
          for (var kr in _r)
            qt(Fe, kr, _r[kr]);
        }
      }
      function Lt(Fe) {
        Re(Fe);
        for (var $r = 0; $r < Fe.attributes.length; $r++) {
          var _r = Fe.attributes[$r].name, Pr = Fe.attributes[$r].value;
          if (_r.startsWith("hx-on:") || _r.startsWith("data-hx-on:")) {
            let Mr = _r.slice(_r.indexOf(":") + 1);
            Mr.startsWith(":") && (Mr = "htmx" + Mr), qt(Fe, Mr, Pr);
          }
        }
      }
      function At(Fe) {
        if (d(Fe, G.config.disableSelector)) {
          g(Fe);
          return;
        }
        var $r = ee(Fe);
        if ($r.initHash !== Ce(Fe)) {
          Oe(Fe), $r.initHash = Ce(Fe), Ht(Fe), oe(Fe, "htmx:beforeProcessNode"), Fe.value && ($r.lastValue = Fe.value);
          var _r = Ge(Fe), Pr = yt(Fe, $r, _r);
          Pr || (Y(Fe, "hx-boost") === "true" ? Ye(Fe, $r, _r) : o(Fe, "hx-trigger") && _r.forEach(function(Ur) {
            bt(Fe, Ur, $r, function() {
            });
          })), (Fe.tagName === "FORM" || J(Fe, "type") === "submit" && o(Fe, "form")) && Ot(Fe);
          var Mr = Z(Fe, "hx-sse");
          Mr && ht(Fe, $r, Mr);
          var Ir = Z(Fe, "hx-ws");
          Ir && st(Fe, $r, Ir), oe(Fe, "htmx:afterProcessNode");
        }
      }
      function Nt(Fe) {
        if (Fe = s(Fe), d(Fe, G.config.disableSelector)) {
          g(Fe);
          return;
        }
        At(Fe), te(Rt(Fe), function($r) {
          At($r);
        }), te(Ct(Fe), Lt);
      }
      function It(Fe) {
        return Fe.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Pt(Fe, $r) {
        var _r;
        return window.CustomEvent && typeof window.CustomEvent == "function" ? _r = new CustomEvent(Fe, { bubbles: !0, cancelable: !0, detail: $r }) : (_r = K().createEvent("CustomEvent"), _r.initCustomEvent(Fe, !0, !0, $r)), _r;
      }
      function ae(Fe, $r, _r) {
        oe(Fe, $r, ne({ error: $r }, _r));
      }
      function kt(Fe) {
        return Fe === "htmx:afterProcessNode";
      }
      function w(Fe, $r) {
        te(Tr(Fe), function(_r) {
          try {
            $r(_r);
          } catch (Pr) {
            x(Pr);
          }
        });
      }
      function x(Fe) {
        console.error ? console.error(Fe) : console.log && console.log("ERROR: ", Fe);
      }
      function oe(Fe, $r, _r) {
        Fe = s(Fe), _r == null && (_r = {}), _r.elt = Fe;
        var Pr = Pt($r, _r);
        G.logger && !kt($r) && G.logger(Fe, $r, _r), _r.error && (x(_r.error), oe(Fe, "htmx:error", { errorInfo: _r }));
        var Mr = Fe.dispatchEvent(Pr), Ir = It($r);
        if (Mr && Ir !== $r) {
          var Ur = Pt(Ir, Pr.detail);
          Mr = Mr && Fe.dispatchEvent(Ur);
        }
        return w(Fe, function(Gr) {
          Mr = Mr && Gr.onEvent($r, Pr) !== !1;
        }), Mr;
      }
      var Mt = location.pathname + location.search;
      function Dt() {
        var Fe = K().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return Fe || K().body;
      }
      function Xt(Fe, $r, _r, Pr) {
        if (M()) {
          Fe = D(Fe);
          for (var Mr = y(localStorage.getItem("htmx-history-cache")) || [], Ir = 0; Ir < Mr.length; Ir++)
            if (Mr[Ir].url === Fe) {
              Mr.splice(Ir, 1);
              break;
            }
          var Ur = { url: Fe, content: $r, title: _r, scroll: Pr };
          for (oe(K().body, "htmx:historyItemCreated", { item: Ur, cache: Mr }), Mr.push(Ur); Mr.length > G.config.historyCacheSize; )
            Mr.shift();
          for (; Mr.length > 0; )
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(Mr));
              break;
            } catch (Gr) {
              ae(K().body, "htmx:historyCacheError", { cause: Gr, cache: Mr }), Mr.shift();
            }
        }
      }
      function Ft(Fe) {
        if (!M())
          return null;
        Fe = D(Fe);
        for (var $r = y(localStorage.getItem("htmx-history-cache")) || [], _r = 0; _r < $r.length; _r++)
          if ($r[_r].url === Fe)
            return $r[_r];
        return null;
      }
      function Ut(Fe) {
        var $r = G.config.requestClass, _r = Fe.cloneNode(!0);
        return te(f(_r, "." + $r), function(Pr) {
          n(Pr, $r);
        }), _r.innerHTML;
      }
      function Bt() {
        var Fe = Dt(), $r = Mt || location.pathname + location.search, _r = K().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        _r || (oe(K().body, "htmx:beforeHistorySave", { path: $r, historyElt: Fe }), Xt($r, Ut(Fe), K().title, window.scrollY)), G.config.historyEnabled && history.replaceState({ htmx: !0 }, K().title, window.location.href);
      }
      function Vt(Fe) {
        G.config.getCacheBusterParam && (Fe = Fe.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (Fe.endsWith("&") || Fe.endsWith("?")) && (Fe = Fe.slice(0, -1))), G.config.historyEnabled && history.pushState({ htmx: !0 }, "", Fe), Mt = Fe;
      }
      function jt(Fe) {
        G.config.historyEnabled && history.replaceState({ htmx: !0 }, "", Fe), Mt = Fe;
      }
      function Wt(Fe) {
        te(Fe, function($r) {
          $r.call();
        });
      }
      function _t(Fe) {
        var $r = new XMLHttpRequest(), _r = { path: Fe, xhr: $r };
        oe(K().body, "htmx:historyCacheMiss", _r), $r.open("GET", Fe, !0), $r.setRequestHeader("HX-History-Restore-Request", "true"), $r.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            oe(K().body, "htmx:historyCacheMissLoad", _r);
            var Pr = l(this.response);
            Pr = Pr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Pr;
            var Mr = Dt(), Ir = S(Mr), Ur = Me(this.response);
            if (Ur) {
              var Gr = b("title");
              Gr ? Gr.innerHTML = Ur : window.document.title = Ur;
            }
            Ie(Mr, Pr, Ir), Wt(Ir.tasks), Mt = Fe, oe(K().body, "htmx:historyRestore", { path: Fe, cacheMiss: !0, serverResponse: this.response });
          } else
            ae(K().body, "htmx:historyCacheMissLoadError", _r);
        }, $r.send();
      }
      function zt(Fe) {
        Bt(), Fe = Fe || location.pathname + location.search;
        var $r = Ft(Fe);
        if ($r) {
          var _r = l($r.content), Pr = Dt(), Mr = S(Pr);
          Ie(Pr, _r, Mr), Wt(Mr.tasks), document.title = $r.title, setTimeout(function() {
            window.scrollTo(0, $r.scroll);
          }, 0), Mt = Fe, oe(K().body, "htmx:historyRestore", { path: Fe, item: $r });
        } else
          G.config.refreshOnHistoryMiss ? window.location.reload(!0) : _t(Fe);
      }
      function $t(Fe) {
        var $r = ce(Fe, "hx-indicator");
        return $r == null && ($r = [Fe]), te($r, function(_r) {
          var Pr = ee(_r);
          Pr.requestCount = (Pr.requestCount || 0) + 1, _r.classList.add.call(_r.classList, G.config.requestClass);
        }), $r;
      }
      function Gt(Fe) {
        te(Fe, function($r) {
          var _r = ee($r);
          _r.requestCount = (_r.requestCount || 0) - 1, _r.requestCount === 0 && $r.classList.remove.call($r.classList, G.config.requestClass);
        });
      }
      function Jt(Fe, $r) {
        for (var _r = 0; _r < Fe.length; _r++) {
          var Pr = Fe[_r];
          if (Pr.isSameNode($r))
            return !0;
        }
        return !1;
      }
      function Zt(Fe) {
        return Fe.name === "" || Fe.name == null || Fe.disabled || Fe.type === "button" || Fe.type === "submit" || Fe.tagName === "image" || Fe.tagName === "reset" || Fe.tagName === "file" ? !1 : Fe.type === "checkbox" || Fe.type === "radio" ? Fe.checked : !0;
      }
      function Kt(Fe, $r, _r) {
        if (Fe != null && $r != null) {
          var Pr = _r[Fe];
          Pr === void 0 ? _r[Fe] = $r : Array.isArray(Pr) ? Array.isArray($r) ? _r[Fe] = Pr.concat($r) : Pr.push($r) : Array.isArray($r) ? _r[Fe] = [Pr].concat($r) : _r[Fe] = [Pr, $r];
        }
      }
      function Yt(Fe, $r, _r, Pr, Mr) {
        if (!(Pr == null || Jt(Fe, Pr))) {
          if (Fe.push(Pr), Zt(Pr)) {
            var Ir = J(Pr, "name"), Ur = Pr.value;
            Pr.multiple && (Ur = I(Pr.querySelectorAll("option:checked")).map(function(kr) {
              return kr.value;
            })), Pr.files && (Ur = I(Pr.files)), Kt(Ir, Ur, $r), Mr && Qt(Pr, _r);
          }
          if (h(Pr, "form")) {
            var Gr = Pr.elements;
            te(Gr, function(kr) {
              Yt(Fe, $r, _r, kr, Mr);
            });
          }
        }
      }
      function Qt(Fe, $r) {
        Fe.willValidate && (oe(Fe, "htmx:validation:validate"), Fe.checkValidity() || ($r.push({ elt: Fe, message: Fe.validationMessage, validity: Fe.validity }), oe(Fe, "htmx:validation:failed", { message: Fe.validationMessage, validity: Fe.validity })));
      }
      function er(Fe, $r) {
        var _r = [], Pr = {}, Mr = {}, Ir = [], Ur = ee(Fe), Gr = h(Fe, "form") && Fe.noValidate !== !0 || Z(Fe, "hx-validate") === "true";
        if (Ur.lastButtonClicked && (Gr = Gr && Ur.lastButtonClicked.formNoValidate !== !0), $r !== "get" && Yt(_r, Mr, Ir, d(Fe, "form"), Gr), Yt(_r, Pr, Ir, Fe, Gr), Ur.lastButtonClicked || Fe.tagName === "BUTTON" || Fe.tagName === "INPUT" && J(Fe, "type") === "submit") {
          var kr = Ur.lastButtonClicked || Fe, Dr = J(kr, "name");
          Kt(Dr, kr.value, Mr);
        }
        var Kr = ce(Fe, "hx-include");
        return te(Kr, function(jr) {
          Yt(_r, Pr, Ir, jr, Gr), h(jr, "form") || te(jr.querySelectorAll($e), function(Xr) {
            Yt(_r, Pr, Ir, Xr, Gr);
          });
        }), Pr = ne(Pr, Mr), { errors: Ir, values: Pr };
      }
      function tr(Fe, $r, _r) {
        Fe !== "" && (Fe += "&"), String(_r) === "[object Object]" && (_r = JSON.stringify(_r));
        var Pr = encodeURIComponent(_r);
        return Fe += encodeURIComponent($r) + "=" + Pr, Fe;
      }
      function rr(Fe) {
        var $r = "";
        for (var _r in Fe)
          if (Fe.hasOwnProperty(_r)) {
            var Pr = Fe[_r];
            Array.isArray(Pr) ? te(Pr, function(Mr) {
              $r = tr($r, _r, Mr);
            }) : $r = tr($r, _r, Pr);
          }
        return $r;
      }
      function nr(Fe) {
        var $r = new FormData();
        for (var _r in Fe)
          if (Fe.hasOwnProperty(_r)) {
            var Pr = Fe[_r];
            Array.isArray(Pr) ? te(Pr, function(Mr) {
              $r.append(_r, Mr);
            }) : $r.append(_r, Pr);
          }
        return $r;
      }
      function ir(Fe, $r, _r) {
        var Pr = { "HX-Request": "true", "HX-Trigger": J(Fe, "id"), "HX-Trigger-Name": J(Fe, "name"), "HX-Target": Z($r, "id"), "HX-Current-URL": K().location.href };
        return cr(Fe, "hx-headers", !1, Pr), _r !== void 0 && (Pr["HX-Prompt"] = _r), ee(Fe).boosted && (Pr["HX-Boosted"] = "true"), Pr;
      }
      function ar(Fe, $r) {
        var _r = Y($r, "hx-params");
        if (_r) {
          if (_r === "none")
            return {};
          if (_r === "*")
            return Fe;
          if (_r.indexOf("not ") === 0)
            return te(_r.substr(4).split(","), function(Mr) {
              Mr = Mr.trim(), delete Fe[Mr];
            }), Fe;
          var Pr = {};
          return te(_r.split(","), function(Mr) {
            Mr = Mr.trim(), Pr[Mr] = Fe[Mr];
          }), Pr;
        } else
          return Fe;
      }
      function or(Fe) {
        return J(Fe, "href") && J(Fe, "href").indexOf("#") >= 0;
      }
      function sr(Fe, $r) {
        var _r = $r || Y(Fe, "hx-swap"), Pr = { swapStyle: ee(Fe).boosted ? "innerHTML" : G.config.defaultSwapStyle, swapDelay: G.config.defaultSwapDelay, settleDelay: G.config.defaultSettleDelay };
        if (ee(Fe).boosted && !or(Fe) && (Pr.show = "top"), _r) {
          var Mr = k(_r);
          if (Mr.length > 0) {
            Pr.swapStyle = Mr[0];
            for (var Ir = 1; Ir < Mr.length; Ir++) {
              var Ur = Mr[Ir];
              if (Ur.indexOf("swap:") === 0 && (Pr.swapDelay = v(Ur.substr(5))), Ur.indexOf("settle:") === 0 && (Pr.settleDelay = v(Ur.substr(7))), Ur.indexOf("transition:") === 0 && (Pr.transition = Ur.substr(11) === "true"), Ur.indexOf("scroll:") === 0) {
                var Gr = Ur.substr(7), kr = Gr.split(":"), Dr = kr.pop(), Kr = kr.length > 0 ? kr.join(":") : null;
                Pr.scroll = Dr, Pr.scrollTarget = Kr;
              }
              if (Ur.indexOf("show:") === 0) {
                var jr = Ur.substr(5), kr = jr.split(":"), Xr = kr.pop(), Kr = kr.length > 0 ? kr.join(":") : null;
                Pr.show = Xr, Pr.showTarget = Kr;
              }
              if (Ur.indexOf("focus-scroll:") === 0) {
                var Vr = Ur.substr(13);
                Pr.focusScroll = Vr == "true";
              }
            }
          }
        }
        return Pr;
      }
      function lr(Fe) {
        return Y(Fe, "hx-encoding") === "multipart/form-data" || h(Fe, "form") && J(Fe, "enctype") === "multipart/form-data";
      }
      function ur(Fe, $r, _r) {
        var Pr = null;
        return w($r, function(Mr) {
          Pr == null && (Pr = Mr.encodeParameters(Fe, _r, $r));
        }), Pr ?? (lr($r) ? nr(_r) : rr(_r));
      }
      function S(Fe) {
        return { tasks: [], elts: [Fe] };
      }
      function fr(Fe, $r) {
        var _r = Fe[0], Pr = Fe[Fe.length - 1];
        if ($r.scroll) {
          var Mr = null;
          $r.scrollTarget && (Mr = ie(_r, $r.scrollTarget)), $r.scroll === "top" && (_r || Mr) && (Mr = Mr || _r, Mr.scrollTop = 0), $r.scroll === "bottom" && (Pr || Mr) && (Mr = Mr || Pr, Mr.scrollTop = Mr.scrollHeight);
        }
        if ($r.show) {
          var Mr = null;
          if ($r.showTarget) {
            var Ir = $r.showTarget;
            $r.showTarget === "window" && (Ir = "body"), Mr = ie(_r, Ir);
          }
          $r.show === "top" && (_r || Mr) && (Mr = Mr || _r, Mr.scrollIntoView({ block: "start", behavior: G.config.scrollBehavior })), $r.show === "bottom" && (Pr || Mr) && (Mr = Mr || Pr, Mr.scrollIntoView({ block: "end", behavior: G.config.scrollBehavior }));
        }
      }
      function cr(Fe, $r, _r, Pr) {
        if (Pr == null && (Pr = {}), Fe == null)
          return Pr;
        var Mr = Z(Fe, $r);
        if (Mr) {
          var Ir = Mr.trim(), Ur = _r;
          if (Ir === "unset")
            return null;
          Ir.indexOf("javascript:") === 0 ? (Ir = Ir.substr(11), Ur = !0) : Ir.indexOf("js:") === 0 && (Ir = Ir.substr(3), Ur = !0), Ir.indexOf("{") !== 0 && (Ir = "{" + Ir + "}");
          var Gr;
          Ur ? Gr = hr(Fe, function() {
            return Function("return (" + Ir + ")")();
          }, {}) : Gr = y(Ir);
          for (var kr in Gr)
            Gr.hasOwnProperty(kr) && Pr[kr] == null && (Pr[kr] = Gr[kr]);
        }
        return cr(u(Fe), $r, _r, Pr);
      }
      function hr(Fe, $r, _r) {
        return G.config.allowEval ? $r() : (ae(Fe, "htmx:evalDisallowedError"), _r);
      }
      function dr(Fe, $r) {
        return cr(Fe, "hx-vars", !0, $r);
      }
      function vr(Fe, $r) {
        return cr(Fe, "hx-vals", !1, $r);
      }
      function gr(Fe) {
        return ne(dr(Fe), vr(Fe));
      }
      function pr(Fe, $r, _r) {
        if (_r !== null)
          try {
            Fe.setRequestHeader($r, _r);
          } catch {
            Fe.setRequestHeader($r, encodeURIComponent(_r)), Fe.setRequestHeader($r + "-URI-AutoEncoded", "true");
          }
      }
      function mr(Fe) {
        if (Fe.responseURL && typeof URL < "u")
          try {
            var $r = new URL(Fe.responseURL);
            return $r.pathname + $r.search;
          } catch {
            ae(K().body, "htmx:badResponseUrl", { url: Fe.responseURL });
          }
      }
      function E(Fe, $r) {
        return Fe.getAllResponseHeaders().match($r);
      }
      function xr(Fe, $r, _r) {
        return Fe = Fe.toLowerCase(), _r ? _r instanceof Element || L(_r, "String") ? se(Fe, $r, null, null, { targetOverride: s(_r), returnPromise: !0 }) : se(Fe, $r, s(_r.source), _r.event, { handler: _r.handler, headers: _r.headers, values: _r.values, targetOverride: s(_r.target), swapOverride: _r.swap, returnPromise: !0 }) : se(Fe, $r, null, null, { returnPromise: !0 });
      }
      function yr(Fe) {
        for (var $r = []; Fe; )
          $r.push(Fe), Fe = Fe.parentElement;
        return $r;
      }
      function br(Fe, $r, _r) {
        var Pr = new URL($r, document.location.href), Mr = document.location.origin, Ir = Mr === Pr.origin;
        return G.config.selfRequestsOnly && !Ir ? !1 : oe(Fe, "htmx:validateUrl", ne({ url: Pr, sameHost: Ir }, _r));
      }
      function se(Fe, $r, _r, Pr, Mr, Ir) {
        var Ur = null, Gr = null;
        if (Mr = Mr ?? {}, Mr.returnPromise && typeof Promise < "u")
          var kr = new Promise(function(on, sn) {
            Ur = on, Gr = sn;
          });
        _r == null && (_r = K().body);
        var Dr = Mr.handler || Sr;
        if (re(_r)) {
          var Kr = Mr.targetOverride || de(_r);
          if (Kr == null || Kr == fe) {
            ae(_r, "htmx:targetError", { target: Z(_r, "hx-target") });
            return;
          }
          if (!Ir) {
            var jr = function() {
              return se(Fe, $r, _r, Pr, Mr, !0);
            }, Xr = { target: Kr, elt: _r, path: $r, verb: Fe, triggeringEvent: Pr, etc: Mr, issueRequest: jr };
            if (oe(_r, "htmx:confirm", Xr) === !1)
              return;
          }
          var Vr = _r, Br = ee(_r), zr = Y(_r, "hx-sync"), en = null, pn = !1;
          if (zr) {
            var gn = zr.split(":"), wn = gn[0].trim();
            if (wn === "this" ? Vr = he(_r, "hx-sync") : Vr = ie(_r, wn), zr = (gn[1] || "drop").trim(), Br = ee(Vr), zr === "drop" && Br.xhr && Br.abortable !== !0)
              return;
            if (zr === "abort") {
              if (Br.xhr)
                return;
              pn = !0;
            } else if (zr === "replace")
              oe(Vr, "htmx:abort");
            else if (zr.indexOf("queue") === 0) {
              var tn = zr.split(" ");
              en = (tn[1] || "last").trim();
            }
          }
          if (Br.xhr)
            if (Br.abortable)
              oe(Vr, "htmx:abort");
            else {
              if (en == null) {
                if (Pr) {
                  var Jr = ee(Pr);
                  Jr && Jr.triggerSpec && Jr.triggerSpec.queue && (en = Jr.triggerSpec.queue);
                }
                en == null && (en = "last");
              }
              Br.queuedRequests == null && (Br.queuedRequests = []), en === "first" && Br.queuedRequests.length === 0 ? Br.queuedRequests.push(function() {
                se(Fe, $r, _r, Pr, Mr);
              }) : en === "all" ? Br.queuedRequests.push(function() {
                se(Fe, $r, _r, Pr, Mr);
              }) : en === "last" && (Br.queuedRequests = [], Br.queuedRequests.push(function() {
                se(Fe, $r, _r, Pr, Mr);
              }));
              return;
            }
          var Fr = new XMLHttpRequest();
          Br.xhr = Fr, Br.abortable = pn;
          var Wr = function() {
            if (Br.xhr = null, Br.abortable = !1, Br.queuedRequests != null && Br.queuedRequests.length > 0) {
              var on = Br.queuedRequests.shift();
              on();
            }
          }, an = Y(_r, "hx-prompt");
          if (an) {
            var dn = prompt(an);
            if (dn === null || !oe(_r, "htmx:prompt", { prompt: dn, target: Kr }))
              return Q(Ur), Wr(), kr;
          }
          var vn = Y(_r, "hx-confirm");
          if (vn && !confirm(vn))
            return Q(Ur), Wr(), kr;
          var rn = ir(_r, Kr, dn);
          Mr.headers && (rn = ne(rn, Mr.headers));
          var Yr = er(_r, Fe), ln = Yr.errors, fn = Yr.values;
          Mr.values && (fn = ne(fn, Mr.values));
          var un = gr(_r), Sn = ne(fn, un), cn = ar(Sn, _r);
          Fe !== "get" && !lr(_r) && (rn["Content-Type"] = "application/x-www-form-urlencoded"), G.config.getCacheBusterParam && Fe === "get" && (cn["org.htmx.cache-buster"] = J(Kr, "id") || "true"), ($r == null || $r === "") && ($r = K().location.href);
          var bn = cr(_r, "hx-request"), En = ee(_r).boosted, mn = G.config.methodsThatUseUrlParams.indexOf(Fe) >= 0, Qr = { boosted: En, useUrlParams: mn, parameters: cn, unfilteredParameters: Sn, headers: rn, target: Kr, verb: Fe, errors: ln, withCredentials: Mr.credentials || bn.credentials || G.config.withCredentials, timeout: Mr.timeout || bn.timeout || G.config.timeout, path: $r, triggeringEvent: Pr };
          if (!oe(_r, "htmx:configRequest", Qr))
            return Q(Ur), Wr(), kr;
          if ($r = Qr.path, Fe = Qr.verb, rn = Qr.headers, cn = Qr.parameters, ln = Qr.errors, mn = Qr.useUrlParams, ln && ln.length > 0)
            return oe(_r, "htmx:validation:halted", Qr), Q(Ur), Wr(), kr;
          var An = $r.split("#"), Tn = An[0], xn = An[1], nn = $r;
          if (mn) {
            nn = Tn;
            var On = Object.keys(cn).length !== 0;
            On && (nn.indexOf("?") < 0 ? nn += "?" : nn += "&", nn += rr(cn), xn && (nn += "#" + xn));
          }
          if (!br(_r, nn, Qr)) {
            ae(_r, "htmx:invalidPath", Qr);
            return;
          }
          if (Fr.open(Fe.toUpperCase(), nn, !0), Fr.overrideMimeType("text/html"), Fr.withCredentials = Qr.withCredentials, Fr.timeout = Qr.timeout, !bn.noHeaders) {
            for (var $n in rn)
              if (rn.hasOwnProperty($n)) {
                var Rn = rn[$n];
                pr(Fr, $n, Rn);
              }
          }
          var Zr = { xhr: Fr, target: Kr, requestConfig: Qr, etc: Mr, boosted: En, pathInfo: { requestPath: $r, finalRequestPath: nn, anchor: xn } };
          if (Fr.onload = function() {
            try {
              var on = yr(_r);
              if (Zr.pathInfo.responsePath = mr(Fr), Dr(_r, Zr), Gt(yn), oe(_r, "htmx:afterRequest", Zr), oe(_r, "htmx:afterOnLoad", Zr), !re(_r)) {
                for (var sn = null; on.length > 0 && sn == null; ) {
                  var hn = on.shift();
                  re(hn) && (sn = hn);
                }
                sn && (oe(sn, "htmx:afterRequest", Zr), oe(sn, "htmx:afterOnLoad", Zr));
              }
              Q(Ur), Wr();
            } catch (_n) {
              throw ae(_r, "htmx:onLoadError", ne({ error: _n }, Zr)), _n;
            }
          }, Fr.onerror = function() {
            Gt(yn), ae(_r, "htmx:afterRequest", Zr), ae(_r, "htmx:sendError", Zr), Q(Gr), Wr();
          }, Fr.onabort = function() {
            Gt(yn), ae(_r, "htmx:afterRequest", Zr), ae(_r, "htmx:sendAbort", Zr), Q(Gr), Wr();
          }, Fr.ontimeout = function() {
            Gt(yn), ae(_r, "htmx:afterRequest", Zr), ae(_r, "htmx:timeout", Zr), Q(Gr), Wr();
          }, !oe(_r, "htmx:beforeRequest", Zr))
            return Q(Ur), Wr(), kr;
          var yn = $t(_r);
          te(["loadstart", "loadend", "progress", "abort"], function(on) {
            te([Fr, Fr.upload], function(sn) {
              sn.addEventListener(on, function(hn) {
                oe(_r, "htmx:xhr:" + on, { lengthComputable: hn.lengthComputable, loaded: hn.loaded, total: hn.total });
              });
            });
          }), oe(_r, "htmx:beforeSend", Zr);
          var Hn = mn ? null : ur(Fr, _r, cn);
          return Fr.send(Hn), kr;
        }
      }
      function wr(Fe, $r) {
        var _r = $r.xhr, Pr = null, Mr = null;
        if (E(_r, /HX-Push:/i) ? (Pr = _r.getResponseHeader("HX-Push"), Mr = "push") : E(_r, /HX-Push-Url:/i) ? (Pr = _r.getResponseHeader("HX-Push-Url"), Mr = "push") : E(_r, /HX-Replace-Url:/i) && (Pr = _r.getResponseHeader("HX-Replace-Url"), Mr = "replace"), Pr)
          return Pr === "false" ? {} : { type: Mr, path: Pr };
        var Ir = $r.pathInfo.finalRequestPath, Ur = $r.pathInfo.responsePath, Gr = Y(Fe, "hx-push-url"), kr = Y(Fe, "hx-replace-url"), Dr = ee(Fe).boosted, Kr = null, jr = null;
        return Gr ? (Kr = "push", jr = Gr) : kr ? (Kr = "replace", jr = kr) : Dr && (Kr = "push", jr = Ur || Ir), jr ? jr === "false" ? {} : (jr === "true" && (jr = Ur || Ir), $r.pathInfo.anchor && jr.indexOf("#") === -1 && (jr = jr + "#" + $r.pathInfo.anchor), { type: Kr, path: jr }) : {};
      }
      function Sr(Fe, $r) {
        var _r = $r.xhr, Pr = $r.target, Mr = $r.etc;
        if (oe(Fe, "htmx:beforeOnLoad", $r)) {
          if (E(_r, /HX-Trigger:/i) && Xe(_r, "HX-Trigger", Fe), E(_r, /HX-Location:/i)) {
            Bt();
            var Ir = _r.getResponseHeader("HX-Location"), Ur;
            Ir.indexOf("{") === 0 && (Ur = y(Ir), Ir = Ur.path, delete Ur.path), xr("GET", Ir, Ur).then(function() {
              Vt(Ir);
            });
            return;
          }
          if (E(_r, /HX-Redirect:/i)) {
            location.href = _r.getResponseHeader("HX-Redirect");
            return;
          }
          if (E(_r, /HX-Refresh:/i) && _r.getResponseHeader("HX-Refresh") === "true") {
            location.reload();
            return;
          }
          E(_r, /HX-Retarget:/i) && ($r.target = K().querySelector(_r.getResponseHeader("HX-Retarget")));
          var Gr = wr(Fe, $r), kr = _r.status >= 200 && _r.status < 400 && _r.status !== 204, Dr = _r.response, Kr = _r.status >= 400, jr = ne({ shouldSwap: kr, serverResponse: Dr, isError: Kr }, $r);
          if (oe(Pr, "htmx:beforeSwap", jr)) {
            if (Pr = jr.target, Dr = jr.serverResponse, Kr = jr.isError, $r.target = Pr, $r.failed = Kr, $r.successful = !Kr, jr.shouldSwap) {
              _r.status === 286 && Je(Fe), w(Fe, function(tn) {
                Dr = tn.transformResponse(Dr, _r, Fe);
              }), Gr.type && Bt();
              var Xr = Mr.swapOverride;
              E(_r, /HX-Reswap:/i) && (Xr = _r.getResponseHeader("HX-Reswap"));
              var Ur = sr(Fe, Xr);
              Pr.classList.add(G.config.swappingClass);
              var Vr = null, Br = null, zr = function() {
                try {
                  var tn = document.activeElement, Jr = {};
                  try {
                    Jr = { elt: tn, start: tn ? tn.selectionStart : null, end: tn ? tn.selectionEnd : null };
                  } catch {
                  }
                  var Fr;
                  E(_r, /HX-Reselect:/i) && (Fr = _r.getResponseHeader("HX-Reselect"));
                  var Wr = S(Pr);
                  if (De(Ur.swapStyle, Pr, Fe, Dr, Wr, Fr), Jr.elt && !re(Jr.elt) && J(Jr.elt, "id")) {
                    var an = document.getElementById(J(Jr.elt, "id")), dn = { preventScroll: Ur.focusScroll !== void 0 ? !Ur.focusScroll : !G.config.defaultFocusScroll };
                    if (an) {
                      if (Jr.start && an.setSelectionRange)
                        try {
                          an.setSelectionRange(Jr.start, Jr.end);
                        } catch {
                        }
                      an.focus(dn);
                    }
                  }
                  if (Pr.classList.remove(G.config.swappingClass), te(Wr.elts, function(Yr) {
                    Yr.classList && Yr.classList.add(G.config.settlingClass), oe(Yr, "htmx:afterSwap", $r);
                  }), E(_r, /HX-Trigger-After-Swap:/i)) {
                    var vn = Fe;
                    re(Fe) || (vn = K().body), Xe(_r, "HX-Trigger-After-Swap", vn);
                  }
                  var rn = function() {
                    if (te(Wr.tasks, function(un) {
                      un.call();
                    }), te(Wr.elts, function(un) {
                      un.classList && un.classList.remove(G.config.settlingClass), oe(un, "htmx:afterSettle", $r);
                    }), Gr.type && (Gr.type === "push" ? (Vt(Gr.path), oe(K().body, "htmx:pushedIntoHistory", { path: Gr.path })) : (jt(Gr.path), oe(K().body, "htmx:replacedInHistory", { path: Gr.path }))), $r.pathInfo.anchor) {
                      var Yr = b("#" + $r.pathInfo.anchor);
                      Yr && Yr.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                    if (Wr.title) {
                      var ln = b("title");
                      ln ? ln.innerHTML = Wr.title : window.document.title = Wr.title;
                    }
                    if (fr(Wr.elts, Ur), E(_r, /HX-Trigger-After-Settle:/i)) {
                      var fn = Fe;
                      re(Fe) || (fn = K().body), Xe(_r, "HX-Trigger-After-Settle", fn);
                    }
                    Q(Vr);
                  };
                  Ur.settleDelay > 0 ? setTimeout(rn, Ur.settleDelay) : rn();
                } catch (Yr) {
                  throw ae(Fe, "htmx:swapError", $r), Q(Br), Yr;
                }
              }, en = G.config.globalViewTransitions;
              if (Ur.hasOwnProperty("transition") && (en = Ur.transition), en && oe(Fe, "htmx:beforeTransition", $r) && typeof Promise < "u" && document.startViewTransition) {
                var pn = new Promise(function(tn, Jr) {
                  Vr = tn, Br = Jr;
                }), gn = zr;
                zr = function() {
                  document.startViewTransition(function() {
                    return gn(), pn;
                  });
                };
              }
              Ur.swapDelay > 0 ? setTimeout(zr, Ur.swapDelay) : zr();
            }
            Kr && ae(Fe, "htmx:responseError", ne({ error: "Response Status Error Code " + _r.status + " from " + $r.pathInfo.requestPath }, $r));
          }
        }
      }
      var Er = {};
      function Cr() {
        return { init: function(Fe) {
          return null;
        }, onEvent: function(Fe, $r) {
          return !0;
        }, transformResponse: function(Fe, $r, _r) {
          return Fe;
        }, isInlineSwap: function(Fe) {
          return !1;
        }, handleSwap: function(Fe, $r, _r, Pr) {
          return !1;
        }, encodeParameters: function(Fe, $r, _r) {
          return null;
        } };
      }
      function Rr(Fe, $r) {
        $r.init && $r.init(C), Er[Fe] = ne(Cr(), $r);
      }
      function Or(Fe) {
        delete Er[Fe];
      }
      function Tr(Fe, $r, _r) {
        if (Fe == null)
          return $r;
        $r == null && ($r = []), _r == null && (_r = []);
        var Pr = Z(Fe, "hx-ext");
        return Pr && te(Pr.split(","), function(Mr) {
          if (Mr = Mr.replace(/ /g, ""), Mr.slice(0, 7) == "ignore:") {
            _r.push(Mr.slice(7));
            return;
          }
          if (_r.indexOf(Mr) < 0) {
            var Ir = Er[Mr];
            Ir && $r.indexOf(Ir) < 0 && $r.push(Ir);
          }
        }), Tr(u(Fe), $r, _r);
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
        var $r = K().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        Fe.addEventListener("htmx:abort", function(Pr) {
          var Mr = Pr.target, Ir = ee(Mr);
          Ir && Ir.xhr && Ir.xhr.abort();
        });
        var _r = window.onpopstate;
        window.onpopstate = function(Pr) {
          Pr.state && Pr.state.htmx ? (zt(), te($r, function(Mr) {
            oe(Mr, "htmx:restored", { document: K(), triggerEvent: oe });
          })) : _r && _r(Pr);
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
const t$2 = globalThis, e$2 = t$2.ShadowRoot && (t$2.ShadyCSS === void 0 || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$2 = /* @__PURE__ */ new WeakMap();
let n$2 = class {
  constructor($r, _r, Pr) {
    if (this._$cssResult$ = !0, Pr !== s$2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = $r, this.t = _r;
  }
  get styleSheet() {
    let $r = this.o;
    const _r = this.t;
    if (e$2 && $r === void 0) {
      const Pr = _r !== void 0 && _r.length === 1;
      Pr && ($r = o$2.get(_r)), $r === void 0 && ((this.o = $r = new CSSStyleSheet()).replaceSync(this.cssText), Pr && o$2.set(_r, $r));
    }
    return $r;
  }
  toString() {
    return this.cssText;
  }
};
const r$3 = (Fe) => new n$2(typeof Fe == "string" ? Fe : Fe + "", void 0, s$2), S$1 = (Fe, $r) => {
  if (e$2)
    Fe.adoptedStyleSheets = $r.map((_r) => _r instanceof CSSStyleSheet ? _r : _r.styleSheet);
  else
    for (const _r of $r) {
      const Pr = document.createElement("style"), Mr = t$2.litNonce;
      Mr !== void 0 && Pr.setAttribute("nonce", Mr), Pr.textContent = _r.cssText, Fe.appendChild(Pr);
    }
}, c$2 = e$2 ? (Fe) => Fe : (Fe) => Fe instanceof CSSStyleSheet ? (($r) => {
  let _r = "";
  for (const Pr of $r.cssRules)
    _r += Pr.cssText;
  return r$3(_r);
})(Fe) : Fe;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$1, defineProperty: e$1, getOwnPropertyDescriptor: r$2, getOwnPropertyNames: h$1, getOwnPropertySymbols: o$1, getPrototypeOf: n$1 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (Fe, $r) => Fe, u$1 = { toAttribute(Fe, $r) {
  switch ($r) {
    case Boolean:
      Fe = Fe ? l$1 : null;
      break;
    case Object:
    case Array:
      Fe = Fe == null ? Fe : JSON.stringify(Fe);
  }
  return Fe;
}, fromAttribute(Fe, $r) {
  let _r = Fe;
  switch ($r) {
    case Boolean:
      _r = Fe !== null;
      break;
    case Number:
      _r = Fe === null ? null : Number(Fe);
      break;
    case Object:
    case Array:
      try {
        _r = JSON.parse(Fe);
      } catch {
        _r = null;
      }
  }
  return _r;
} }, f$1 = (Fe, $r) => !i$1(Fe, $r), y$1 = { attribute: !0, type: String, converter: u$1, reflect: !1, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer($r) {
    this._$Ei(), (this.l ?? (this.l = [])).push($r);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty($r, _r = y$1) {
    if (_r.state && (_r.attribute = !1), this._$Ei(), this.elementProperties.set($r, _r), !_r.noAccessor) {
      const Pr = Symbol(), Mr = this.getPropertyDescriptor($r, Pr, _r);
      Mr !== void 0 && e$1(this.prototype, $r, Mr);
    }
  }
  static getPropertyDescriptor($r, _r, Pr) {
    const { get: Mr, set: Ir } = r$2(this.prototype, $r) ?? { get() {
      return this[_r];
    }, set(Ur) {
      this[_r] = Ur;
    } };
    return { get() {
      return Mr == null ? void 0 : Mr.call(this);
    }, set(Ur) {
      const Gr = Mr == null ? void 0 : Mr.call(this);
      Ir.call(this, Ur), this.requestUpdate($r, Gr, Pr);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions($r) {
    return this.elementProperties.get($r) ?? y$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties")))
      return;
    const $r = n$1(this);
    $r.finalize(), $r.l !== void 0 && (this.l = [...$r.l]), this.elementProperties = new Map($r.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const _r = this.properties, Pr = [...h$1(_r), ...o$1(_r)];
      for (const Mr of Pr)
        this.createProperty(Mr, _r[Mr]);
    }
    const $r = this[Symbol.metadata];
    if ($r !== null) {
      const _r = litPropertyMetadata.get($r);
      if (_r !== void 0)
        for (const [Pr, Mr] of _r)
          this.elementProperties.set(Pr, Mr);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [_r, Pr] of this.elementProperties) {
      const Mr = this._$Eu(_r, Pr);
      Mr !== void 0 && this._$Eh.set(Mr, _r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles($r) {
    const _r = [];
    if (Array.isArray($r)) {
      const Pr = new Set($r.flat(1 / 0).reverse());
      for (const Mr of Pr)
        _r.unshift(c$2(Mr));
    } else
      $r !== void 0 && _r.push(c$2($r));
    return _r;
  }
  static _$Eu($r, _r) {
    const Pr = _r.attribute;
    return Pr === !1 ? void 0 : typeof Pr == "string" ? Pr : typeof $r == "string" ? $r.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var $r;
    this._$Eg = new Promise((_r) => this.enableUpdating = _r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), ($r = this.constructor.l) == null || $r.forEach((_r) => _r(this));
  }
  addController($r) {
    var _r;
    (this._$ES ?? (this._$ES = [])).push($r), this.renderRoot !== void 0 && this.isConnected && ((_r = $r.hostConnected) == null || _r.call($r));
  }
  removeController($r) {
    var _r;
    (_r = this._$ES) == null || _r.splice(this._$ES.indexOf($r) >>> 0, 1);
  }
  _$E_() {
    const $r = /* @__PURE__ */ new Map(), _r = this.constructor.elementProperties;
    for (const Pr of _r.keys())
      this.hasOwnProperty(Pr) && ($r.set(Pr, this[Pr]), delete this[Pr]);
    $r.size > 0 && (this._$Ep = $r);
  }
  createRenderRoot() {
    const $r = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1($r, this.constructor.elementStyles), $r;
  }
  connectedCallback() {
    var $r;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), ($r = this._$ES) == null || $r.forEach((_r) => {
      var Pr;
      return (Pr = _r.hostConnected) == null ? void 0 : Pr.call(_r);
    });
  }
  enableUpdating($r) {
  }
  disconnectedCallback() {
    var $r;
    ($r = this._$ES) == null || $r.forEach((_r) => {
      var Pr;
      return (Pr = _r.hostDisconnected) == null ? void 0 : Pr.call(_r);
    });
  }
  attributeChangedCallback($r, _r, Pr) {
    this._$AK($r, Pr);
  }
  _$EO($r, _r) {
    var Ir;
    const Pr = this.constructor.elementProperties.get($r), Mr = this.constructor._$Eu($r, Pr);
    if (Mr !== void 0 && Pr.reflect === !0) {
      const Ur = (((Ir = Pr.converter) == null ? void 0 : Ir.toAttribute) !== void 0 ? Pr.converter : u$1).toAttribute(_r, Pr.type);
      this._$Em = $r, Ur == null ? this.removeAttribute(Mr) : this.setAttribute(Mr, Ur), this._$Em = null;
    }
  }
  _$AK($r, _r) {
    var Ir;
    const Pr = this.constructor, Mr = Pr._$Eh.get($r);
    if (Mr !== void 0 && this._$Em !== Mr) {
      const Ur = Pr.getPropertyOptions(Mr), Gr = typeof Ur.converter == "function" ? { fromAttribute: Ur.converter } : ((Ir = Ur.converter) == null ? void 0 : Ir.fromAttribute) !== void 0 ? Ur.converter : u$1;
      this._$Em = Mr, this[Mr] = Gr.fromAttribute(_r, Ur.type), this._$Em = null;
    }
  }
  requestUpdate($r, _r, Pr, Mr = !1, Ir) {
    if ($r !== void 0) {
      if (Pr ?? (Pr = this.constructor.getPropertyOptions($r)), !(Pr.hasChanged ?? f$1)(Mr ? Ir : this[$r], _r))
        return;
      this.C($r, _r, Pr);
    }
    this.isUpdatePending === !1 && (this._$Eg = this._$EP());
  }
  C($r, _r, Pr) {
    this._$AL.has($r) || this._$AL.set($r, _r), Pr.reflect === !0 && this._$Em !== $r && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add($r);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (_r) {
      Promise.reject(_r);
    }
    const $r = this.scheduleUpdate();
    return $r != null && await $r, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var Pr;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this._$Ep) {
        for (const [Ir, Ur] of this._$Ep)
          this[Ir] = Ur;
        this._$Ep = void 0;
      }
      const Mr = this.constructor.elementProperties;
      if (Mr.size > 0)
        for (const [Ir, Ur] of Mr)
          Ur.wrapped !== !0 || this._$AL.has(Ir) || this[Ir] === void 0 || this.C(Ir, this[Ir], Ur);
    }
    let $r = !1;
    const _r = this._$AL;
    try {
      $r = this.shouldUpdate(_r), $r ? (this.willUpdate(_r), (Pr = this._$ES) == null || Pr.forEach((Mr) => {
        var Ir;
        return (Ir = Mr.hostUpdate) == null ? void 0 : Ir.call(Mr);
      }), this.update(_r)) : this._$ET();
    } catch (Mr) {
      throw $r = !1, this._$ET(), Mr;
    }
    $r && this._$AE(_r);
  }
  willUpdate($r) {
  }
  _$AE($r) {
    var _r;
    (_r = this._$ES) == null || _r.forEach((Pr) => {
      var Mr;
      return (Mr = Pr.hostUpdated) == null ? void 0 : Mr.call(Pr);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated($r)), this.updated($r);
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
  shouldUpdate($r) {
    return !0;
  }
  update($r) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((_r) => this._$EO(_r, this[_r]))), this._$ET();
  }
  updated($r) {
  }
  firstUpdated($r) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d$1("elementProperties")] = /* @__PURE__ */ new Map(), b[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null || p$1({ ReactiveElement: b }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, i = t$1.trustedTypes, s$1 = i ? i.createPolicy("lit-html", { createHTML: (Fe) => Fe }) : void 0, e = "$lit$", h = `lit$${(Math.random() + "").slice(9)}$`, o = "?" + h, n = `<${o}>`, r$1 = document, l = () => r$1.createComment(""), c = (Fe) => Fe === null || typeof Fe != "object" && typeof Fe != "function", a = Array.isArray, u = (Fe) => a(Fe) || typeof (Fe == null ? void 0 : Fe[Symbol.iterator]) == "function", d = `[ 	
\f\r]`, f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (Fe) => ($r, ..._r) => ({ _$litType$: Fe, strings: $r, values: _r }), x = y(1), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), E = r$1.createTreeWalker(r$1, 129);
function C(Fe, $r) {
  if (!Array.isArray(Fe) || !Fe.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return s$1 !== void 0 ? s$1.createHTML($r) : $r;
}
const P = (Fe, $r) => {
  const _r = Fe.length - 1, Pr = [];
  let Mr, Ir = $r === 2 ? "<svg>" : "", Ur = f;
  for (let Gr = 0; Gr < _r; Gr++) {
    const kr = Fe[Gr];
    let Dr, Kr, jr = -1, Xr = 0;
    for (; Xr < kr.length && (Ur.lastIndex = Xr, Kr = Ur.exec(kr), Kr !== null); )
      Xr = Ur.lastIndex, Ur === f ? Kr[1] === "!--" ? Ur = v : Kr[1] !== void 0 ? Ur = _ : Kr[2] !== void 0 ? ($.test(Kr[2]) && (Mr = RegExp("</" + Kr[2], "g")), Ur = m) : Kr[3] !== void 0 && (Ur = m) : Ur === m ? Kr[0] === ">" ? (Ur = Mr ?? f, jr = -1) : Kr[1] === void 0 ? jr = -2 : (jr = Ur.lastIndex - Kr[2].length, Dr = Kr[1], Ur = Kr[3] === void 0 ? m : Kr[3] === '"' ? g : p) : Ur === g || Ur === p ? Ur = m : Ur === v || Ur === _ ? Ur = f : (Ur = m, Mr = void 0);
    const Vr = Ur === m && Fe[Gr + 1].startsWith("/>") ? " " : "";
    Ir += Ur === f ? kr + n : jr >= 0 ? (Pr.push(Dr), kr.slice(0, jr) + e + kr.slice(jr) + h + Vr) : kr + h + (jr === -2 ? Gr : Vr);
  }
  return [C(Fe, Ir + (Fe[_r] || "<?>") + ($r === 2 ? "</svg>" : "")), Pr];
};
class V {
  constructor({ strings: $r, _$litType$: _r }, Pr) {
    let Mr;
    this.parts = [];
    let Ir = 0, Ur = 0;
    const Gr = $r.length - 1, kr = this.parts, [Dr, Kr] = P($r, _r);
    if (this.el = V.createElement(Dr, Pr), E.currentNode = this.el.content, _r === 2) {
      const jr = this.el.content.firstChild;
      jr.replaceWith(...jr.childNodes);
    }
    for (; (Mr = E.nextNode()) !== null && kr.length < Gr; ) {
      if (Mr.nodeType === 1) {
        if (Mr.hasAttributes())
          for (const jr of Mr.getAttributeNames())
            if (jr.endsWith(e)) {
              const Xr = Kr[Ur++], Vr = Mr.getAttribute(jr).split(h), Br = /([.?@])?(.*)/.exec(Xr);
              kr.push({ type: 1, index: Ir, name: Br[2], strings: Vr, ctor: Br[1] === "." ? k : Br[1] === "?" ? H : Br[1] === "@" ? I : R }), Mr.removeAttribute(jr);
            } else
              jr.startsWith(h) && (kr.push({ type: 6, index: Ir }), Mr.removeAttribute(jr));
        if ($.test(Mr.tagName)) {
          const jr = Mr.textContent.split(h), Xr = jr.length - 1;
          if (Xr > 0) {
            Mr.textContent = i ? i.emptyScript : "";
            for (let Vr = 0; Vr < Xr; Vr++)
              Mr.append(jr[Vr], l()), E.nextNode(), kr.push({ type: 2, index: ++Ir });
            Mr.append(jr[Xr], l());
          }
        }
      } else if (Mr.nodeType === 8)
        if (Mr.data === o)
          kr.push({ type: 2, index: Ir });
        else {
          let jr = -1;
          for (; (jr = Mr.data.indexOf(h, jr + 1)) !== -1; )
            kr.push({ type: 7, index: Ir }), jr += h.length - 1;
        }
      Ir++;
    }
  }
  static createElement($r, _r) {
    const Pr = r$1.createElement("template");
    return Pr.innerHTML = $r, Pr;
  }
}
function N(Fe, $r, _r = Fe, Pr) {
  var Ur, Gr;
  if ($r === w)
    return $r;
  let Mr = Pr !== void 0 ? (Ur = _r._$Co) == null ? void 0 : Ur[Pr] : _r._$Cl;
  const Ir = c($r) ? void 0 : $r._$litDirective$;
  return (Mr == null ? void 0 : Mr.constructor) !== Ir && ((Gr = Mr == null ? void 0 : Mr._$AO) == null || Gr.call(Mr, !1), Ir === void 0 ? Mr = void 0 : (Mr = new Ir(Fe), Mr._$AT(Fe, _r, Pr)), Pr !== void 0 ? (_r._$Co ?? (_r._$Co = []))[Pr] = Mr : _r._$Cl = Mr), Mr !== void 0 && ($r = N(Fe, Mr._$AS(Fe, $r.values), Mr, Pr)), $r;
}
class S {
  constructor($r, _r) {
    this._$AV = [], this._$AN = void 0, this._$AD = $r, this._$AM = _r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u($r) {
    const { el: { content: _r }, parts: Pr } = this._$AD, Mr = (($r == null ? void 0 : $r.creationScope) ?? r$1).importNode(_r, !0);
    E.currentNode = Mr;
    let Ir = E.nextNode(), Ur = 0, Gr = 0, kr = Pr[0];
    for (; kr !== void 0; ) {
      if (Ur === kr.index) {
        let Dr;
        kr.type === 2 ? Dr = new M(Ir, Ir.nextSibling, this, $r) : kr.type === 1 ? Dr = new kr.ctor(Ir, kr.name, kr.strings, this, $r) : kr.type === 6 && (Dr = new L(Ir, this, $r)), this._$AV.push(Dr), kr = Pr[++Gr];
      }
      Ur !== (kr == null ? void 0 : kr.index) && (Ir = E.nextNode(), Ur++);
    }
    return E.currentNode = r$1, Mr;
  }
  p($r) {
    let _r = 0;
    for (const Pr of this._$AV)
      Pr !== void 0 && (Pr.strings !== void 0 ? (Pr._$AI($r, Pr, _r), _r += Pr.strings.length - 2) : Pr._$AI($r[_r])), _r++;
  }
}
class M {
  get _$AU() {
    var $r;
    return (($r = this._$AM) == null ? void 0 : $r._$AU) ?? this._$Cv;
  }
  constructor($r, _r, Pr, Mr) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = $r, this._$AB = _r, this._$AM = Pr, this.options = Mr, this._$Cv = (Mr == null ? void 0 : Mr.isConnected) ?? !0;
  }
  get parentNode() {
    let $r = this._$AA.parentNode;
    const _r = this._$AM;
    return _r !== void 0 && ($r == null ? void 0 : $r.nodeType) === 11 && ($r = _r.parentNode), $r;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI($r, _r = this) {
    $r = N(this, $r, _r), c($r) ? $r === T || $r == null || $r === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : $r !== this._$AH && $r !== w && this._($r) : $r._$litType$ !== void 0 ? this.g($r) : $r.nodeType !== void 0 ? this.$($r) : u($r) ? this.T($r) : this._($r);
  }
  k($r) {
    return this._$AA.parentNode.insertBefore($r, this._$AB);
  }
  $($r) {
    this._$AH !== $r && (this._$AR(), this._$AH = this.k($r));
  }
  _($r) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = $r : this.$(r$1.createTextNode($r)), this._$AH = $r;
  }
  g($r) {
    var Ir;
    const { values: _r, _$litType$: Pr } = $r, Mr = typeof Pr == "number" ? this._$AC($r) : (Pr.el === void 0 && (Pr.el = V.createElement(C(Pr.h, Pr.h[0]), this.options)), Pr);
    if (((Ir = this._$AH) == null ? void 0 : Ir._$AD) === Mr)
      this._$AH.p(_r);
    else {
      const Ur = new S(Mr, this), Gr = Ur.u(this.options);
      Ur.p(_r), this.$(Gr), this._$AH = Ur;
    }
  }
  _$AC($r) {
    let _r = A.get($r.strings);
    return _r === void 0 && A.set($r.strings, _r = new V($r)), _r;
  }
  T($r) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const _r = this._$AH;
    let Pr, Mr = 0;
    for (const Ir of $r)
      Mr === _r.length ? _r.push(Pr = new M(this.k(l()), this.k(l()), this, this.options)) : Pr = _r[Mr], Pr._$AI(Ir), Mr++;
    Mr < _r.length && (this._$AR(Pr && Pr._$AB.nextSibling, Mr), _r.length = Mr);
  }
  _$AR($r = this._$AA.nextSibling, _r) {
    var Pr;
    for ((Pr = this._$AP) == null ? void 0 : Pr.call(this, !1, !0, _r); $r && $r !== this._$AB; ) {
      const Mr = $r.nextSibling;
      $r.remove(), $r = Mr;
    }
  }
  setConnected($r) {
    var _r;
    this._$AM === void 0 && (this._$Cv = $r, (_r = this._$AP) == null || _r.call(this, $r));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor($r, _r, Pr, Mr, Ir) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = $r, this.name = _r, this._$AM = Mr, this.options = Ir, Pr.length > 2 || Pr[0] !== "" || Pr[1] !== "" ? (this._$AH = Array(Pr.length - 1).fill(new String()), this.strings = Pr) : this._$AH = T;
  }
  _$AI($r, _r = this, Pr, Mr) {
    const Ir = this.strings;
    let Ur = !1;
    if (Ir === void 0)
      $r = N(this, $r, _r, 0), Ur = !c($r) || $r !== this._$AH && $r !== w, Ur && (this._$AH = $r);
    else {
      const Gr = $r;
      let kr, Dr;
      for ($r = Ir[0], kr = 0; kr < Ir.length - 1; kr++)
        Dr = N(this, Gr[Pr + kr], _r, kr), Dr === w && (Dr = this._$AH[kr]), Ur || (Ur = !c(Dr) || Dr !== this._$AH[kr]), Dr === T ? $r = T : $r !== T && ($r += (Dr ?? "") + Ir[kr + 1]), this._$AH[kr] = Dr;
    }
    Ur && !Mr && this.j($r);
  }
  j($r) {
    $r === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, $r ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j($r) {
    this.element[this.name] = $r === T ? void 0 : $r;
  }
}
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j($r) {
    this.element.toggleAttribute(this.name, !!$r && $r !== T);
  }
}
class I extends R {
  constructor($r, _r, Pr, Mr, Ir) {
    super($r, _r, Pr, Mr, Ir), this.type = 5;
  }
  _$AI($r, _r = this) {
    if (($r = N(this, $r, _r, 0) ?? T) === w)
      return;
    const Pr = this._$AH, Mr = $r === T && Pr !== T || $r.capture !== Pr.capture || $r.once !== Pr.once || $r.passive !== Pr.passive, Ir = $r !== T && (Pr === T || Mr);
    Mr && this.element.removeEventListener(this.name, this, Pr), Ir && this.element.addEventListener(this.name, this, $r), this._$AH = $r;
  }
  handleEvent($r) {
    var _r;
    typeof this._$AH == "function" ? this._$AH.call(((_r = this.options) == null ? void 0 : _r.host) ?? this.element, $r) : this._$AH.handleEvent($r);
  }
}
class L {
  constructor($r, _r, Pr) {
    this.element = $r, this.type = 6, this._$AN = void 0, this._$AM = _r, this.options = Pr;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI($r) {
    N(this, $r);
  }
}
const Z = t$1.litHtmlPolyfillSupport;
Z == null || Z(V, M), (t$1.litHtmlVersions ?? (t$1.litHtmlVersions = [])).push("3.0.0");
const j = (Fe, $r, _r) => {
  const Pr = (_r == null ? void 0 : _r.renderBefore) ?? $r;
  let Mr = Pr._$litPart$;
  if (Mr === void 0) {
    const Ir = (_r == null ? void 0 : _r.renderBefore) ?? null;
    Pr._$litPart$ = Mr = new M($r.insertBefore(l(), Ir), Ir, void 0, _r ?? {});
  }
  return Mr._$AI(Fe), Mr;
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
    var _r;
    const $r = super.createRenderRoot();
    return (_r = this.renderOptions).renderBefore ?? (_r.renderBefore = $r.firstChild), $r;
  }
  update($r) {
    const _r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update($r), this._$Do = j(_r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var $r;
    super.connectedCallback(), ($r = this._$Do) == null || $r.setConnected(!0);
  }
  disconnectedCallback() {
    var $r;
    super.disconnectedCallback(), ($r = this._$Do) == null || $r.setConnected(!1);
  }
  render() {
    return w;
  }
}
var Cn;
s._$litElement$ = !0, s.finalized = !0, (Cn = globalThis.litElementHydrateSupport) == null || Cn.call(globalThis, { LitElement: s });
const r = globalThis.litElementPolyfillSupport;
r == null || r({ LitElement: s });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (Fe) => ($r, _r) => {
  _r !== void 0 ? _r.addInitializer(() => {
    customElements.define(Fe, $r);
  }) : customElements.define(Fe, $r);
};
var __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __decorateClass = (Fe, $r, _r, Pr) => {
  for (var Mr = Pr > 1 ? void 0 : Pr ? __getOwnPropDesc($r, _r) : $r, Ir = Fe.length - 1, Ur; Ir >= 0; Ir--)
    (Ur = Fe[Ir]) && (Mr = (Pr ? Ur($r, _r, Mr) : Ur(Mr)) || Mr);
  return Pr && Mr && __defProp($r, _r, Mr), Mr;
};
window.htmx = htmx;
let SimpleGreeting = class extends s {
  constructor() {
    super(), this.addEventListener("load-complete", async () => {
      console.log("hello from component");
    });
  }
  render() {
    return x`<div>childeren: <slot>${this.children}</slot></div>`;
  }
};
SimpleGreeting = __decorateClass([
  t("simple-greeting")
], SimpleGreeting);
