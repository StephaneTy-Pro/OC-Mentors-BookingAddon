// ==UserScript==
// @name         FacturierAddOn:SessionsBooking
// @namespace    http://tampermonkey.net/
// @description
// @author       Stéphane TORCHY
// @version      1.00.0002
// @updateURL    https://raw.githubusercontent.com/StephaneTy-Pro/OC-Mentors-BookingAddon/master/dist/app.min.js
// @downloadURL  https://raw.githubusercontent.com/StephaneTy-Pro/OC-Mentors-BookingAddon/master/dist/app.min.js
// @icon         https://mirrors.creativecommons.org/presskit/icons/heart.red.png
// multiple usage
// @match        https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history*
// @match        https://openclassrooms.com/fr/mentorship/dashboard/sessions
// @match        https://openclassrooms.com/fr/mentorship/dashboard/booked-mentorship-sessions


// Start at document start https://www.tampermonkey.net/documentation.php#_run_at
// @run-at document-start

// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_notification


/*
 * History
 * 
 */
// ==/UserScript==
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // src/vendor/featurejs/feature.js
  var require_feature = __commonJS({
    "src/vendor/featurejs/feature.js"(exports) {
      (function(root, document2, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else {
          root.feature = factory();
        }
      })(typeof self !== "undefined" ? self : exports, document, function() {
        "use strict";
        var docEl = document.documentElement;
        var nav = window.navigator || {};
        var util = {
          create: function(el) {
            return document.createElement(el);
          },
          old: !!/(Android\s(1\.|2\.))|(Silk\/1\.)/i.test(nav.userAgent),
          pfx: function() {
            var style = document.createElement("dummy").style;
            var prefixes = ["Webkit", "Moz", "O", "ms"];
            var memory = {};
            return function(prop) {
              if (typeof memory[prop] === "undefined") {
                var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1);
                var prefixedProps = prefixes.join(ucProp + " ");
                var props = (prop + " " + prefixedProps + ucProp).split(" ");
                memory[prop] = null;
                for (var i2 in props) {
                  if (style[props[i2]] !== void 0) {
                    memory[prop] = props[i2];
                    break;
                  }
                }
              }
              return memory[prop];
            };
          }()
        };
        var Feature2 = {
          css3Dtransform: function() {
            var test = !util.old && util.pfx("perspective") !== null;
            return !!test;
          }(),
          cssTransform: function() {
            var test = !util.old && util.pfx("transformOrigin") !== null;
            return !!test;
          }(),
          cssTransition: function() {
            var test = util.pfx("transition") !== null;
            return !!test;
          }(),
          addEventListener: !!window.addEventListener,
          querySelectorAll: !!document.querySelectorAll,
          matchMedia: !!window.matchMedia,
          deviceMotion: "DeviceMotionEvent" in window,
          deviceOrientation: "DeviceOrientationEvent" in window,
          contextMenu: "contextMenu" in docEl && "HTMLMenuItemElement" in window,
          classList: "classList" in docEl,
          placeholder: "placeholder" in util.create("input"),
          localStorage: function() {
            try {
              window.localStorage.setItem("featurejs-test", "foobar");
              window.localStorage.removeItem("featurejs-test");
              return true;
            } catch (err) {
              return !!window.localStorage.length;
            }
          }(),
          historyAPI: window.history && "pushState" in window.history,
          serviceWorker: "serviceWorker" in nav,
          viewportUnit: function(el) {
            try {
              el.style.width = "1vw";
              var test = el.style.width !== "";
              return !!test;
            } catch (err) {
              return false;
            }
          }(util.create("dummy")),
          remUnit: function(el) {
            try {
              el.style.width = "1rem";
              var test = el.style.width !== "";
              return !!test;
            } catch (err) {
              return false;
            }
          }(util.create("dummy")),
          canvas: function(el) {
            return !!(el.getContext && el.getContext("2d"));
          }(util.create("canvas")),
          svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
          webGL: function(el) {
            try {
              return !!(window.WebGLRenderingContext && (el.getContext("webgl") || el.getContext("experimental-webgl")));
            } catch (err) {
              return false;
            }
          }(util.create("canvas")),
          cors: "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest(),
          touch: !!("ontouchstart" in window || nav.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch),
          async: "async" in util.create("script"),
          defer: "defer" in util.create("script"),
          geolocation: "geolocation" in nav,
          srcset: "srcset" in util.create("img"),
          sizes: "sizes" in util.create("img"),
          pictureElement: "HTMLPictureElement" in window,
          fetch: "fetch" in window,
          testAll: function() {
            var classes = " js";
            for (var test in this) {
              if (test !== "testAll" && test !== "extend" && this[test]) {
                classes += " " + test;
              }
            }
            docEl.className += classes.toLowerCase();
          },
          extend: function(name, callback) {
            if (typeof callback !== "function") {
              throw new TypeError("Feature.extend: `callback` is not a Function");
            }
            this[name] = !!callback(util);
            return this;
          }
        };
        return Feature2;
      });
    }
  });

  // src/vendor/dayjs/jsdelivr/plugin/localeData.js
  var require_localeData = __commonJS({
    "src/vendor/dayjs/jsdelivr/plugin/localeData.js"(exports, module) {
      !function(n, e) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (n = typeof globalThis != "undefined" ? globalThis : n || self).dayjs_plugin_localeData = e();
      }(exports, function() {
        "use strict";
        return function(n, e, t) {
          var r = e.prototype, o = function(n2) {
            return n2 && (n2.indexOf ? n2 : n2.s);
          }, u = function(n2, e2, t2, r2, u2) {
            var i3 = n2.name ? n2 : n2.$locale(), a2 = o(i3[e2]), s2 = o(i3[t2]), f = a2 || s2.map(function(n3) {
              return n3.substr(0, r2);
            });
            if (!u2)
              return f;
            var d = i3.weekStart;
            return f.map(function(n3, e3) {
              return f[(e3 + (d || 0)) % 7];
            });
          }, i2 = function() {
            return t.Ls[t.locale()];
          }, a = function(n2, e2) {
            return n2.formats[e2] || function(n3) {
              return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
                return e3 || t2.slice(1);
              });
            }(n2.formats[e2.toUpperCase()]);
          }, s = function() {
            var n2 = this;
            return { months: function(e2) {
              return e2 ? e2.format("MMMM") : u(n2, "months");
            }, monthsShort: function(e2) {
              return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
            }, firstDayOfWeek: function() {
              return n2.$locale().weekStart || 0;
            }, weekdays: function(e2) {
              return e2 ? e2.format("dddd") : u(n2, "weekdays");
            }, weekdaysMin: function(e2) {
              return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
            }, weekdaysShort: function(e2) {
              return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
            }, longDateFormat: function(e2) {
              return a(n2.$locale(), e2);
            }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
          };
          r.localeData = function() {
            return s.bind(this)();
          }, t.localeData = function() {
            var n2 = i2();
            return { firstDayOfWeek: function() {
              return n2.weekStart || 0;
            }, weekdays: function() {
              return t.weekdays();
            }, weekdaysShort: function() {
              return t.weekdaysShort();
            }, weekdaysMin: function() {
              return t.weekdaysMin();
            }, months: function() {
              return t.months();
            }, monthsShort: function() {
              return t.monthsShort();
            }, longDateFormat: function(e2) {
              return a(n2, e2);
            }, meridiem: n2.meridiem, ordinal: n2.ordinal };
          }, t.months = function() {
            return u(i2(), "months");
          }, t.monthsShort = function() {
            return u(i2(), "monthsShort", "months", 3);
          }, t.weekdays = function(n2) {
            return u(i2(), "weekdays", null, null, n2);
          }, t.weekdaysShort = function(n2) {
            return u(i2(), "weekdaysShort", "weekdays", 3, n2);
          }, t.weekdaysMin = function(n2) {
            return u(i2(), "weekdaysMin", "weekdays", 2, n2);
          };
        };
      });
    }
  });

  // src/vendor/dayjs/jsdelivr/plugin/customParseFormat.js
  var require_customParseFormat = __commonJS({
    "src/vendor/dayjs/jsdelivr/plugin/customParseFormat.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs_plugin_customParseFormat = e();
      }(exports, function() {
        "use strict";
        var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i2 = /\d*[^\s\d-_:/()]+/, o = {}, s = function(t2) {
          return (t2 = +t2) + (t2 > 68 ? 1900 : 2e3);
        };
        var a = function(t2) {
          return function(e2) {
            this[t2] = +e2;
          };
        }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(t2) {
          (this.zone || (this.zone = {})).offset = function(t3) {
            if (!t3)
              return 0;
            if (t3 === "Z")
              return 0;
            var e2 = t3.match(/([+-]|\d\d)/g), n2 = 60 * e2[1] + (+e2[2] || 0);
            return n2 === 0 ? 0 : e2[0] === "+" ? -n2 : n2;
          }(t2);
        }], u = function(t2) {
          var e2 = o[t2];
          return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f));
        }, h = function(t2, e2) {
          var n2, r2 = o.meridiem;
          if (r2) {
            for (var i3 = 1; i3 <= 24; i3 += 1)
              if (t2.indexOf(r2(i3, 0, e2)) > -1) {
                n2 = i3 > 12;
                break;
              }
          } else
            n2 = t2 === (e2 ? "pm" : "PM");
          return n2;
        }, d = { A: [i2, function(t2) {
          this.afternoon = h(t2, false);
        }], a: [i2, function(t2) {
          this.afternoon = h(t2, true);
        }], S: [/\d/, function(t2) {
          this.milliseconds = 100 * +t2;
        }], SS: [n, function(t2) {
          this.milliseconds = 10 * +t2;
        }], SSS: [/\d{3}/, function(t2) {
          this.milliseconds = +t2;
        }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i2, function(t2) {
          var e2 = o.ordinal, n2 = t2.match(/\d+/);
          if (this.day = n2[0], e2)
            for (var r2 = 1; r2 <= 31; r2 += 1)
              e2(r2).replace(/\[|\]/g, "") === t2 && (this.day = r2);
        }], M: [r, a("month")], MM: [n, a("month")], MMM: [i2, function(t2) {
          var e2 = u("months"), n2 = (u("monthsShort") || e2.map(function(t3) {
            return t3.substr(0, 3);
          })).indexOf(t2) + 1;
          if (n2 < 1)
            throw new Error();
          this.month = n2 % 12 || n2;
        }], MMMM: [i2, function(t2) {
          var e2 = u("months").indexOf(t2) + 1;
          if (e2 < 1)
            throw new Error();
          this.month = e2 % 12 || e2;
        }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(t2) {
          this.year = s(t2);
        }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
        function c(n2) {
          var r2, i3;
          r2 = n2, i3 = o && o.formats;
          for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e2, n3, r3) {
            var o2 = r3 && r3.toUpperCase();
            return n3 || i3[r3] || t[r3] || i3[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t2, e3, n4) {
              return e3 || n4.slice(1);
            });
          })).match(e), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
            var u2 = s2[f2], h2 = d[u2], c2 = h2 && h2[0], l = h2 && h2[1];
            s2[f2] = l ? { regex: c2, parser: l } : u2.replace(/^\[|\]$/g, "");
          }
          return function(t2) {
            for (var e2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
              var i4 = s2[n3];
              if (typeof i4 == "string")
                r3 += i4.length;
              else {
                var o2 = i4.regex, f3 = i4.parser, u3 = t2.substr(r3), h3 = o2.exec(u3)[0];
                f3.call(e2, h3), t2 = t2.replace(h3, "");
              }
            }
            return function(t3) {
              var e3 = t3.afternoon;
              if (e3 !== void 0) {
                var n4 = t3.hours;
                e3 ? n4 < 12 && (t3.hours += 12) : n4 === 12 && (t3.hours = 0), delete t3.afternoon;
              }
            }(e2), e2;
          };
        }
        return function(t2, e2, n2) {
          n2.p.customParseFormat = true, t2 && t2.parseTwoDigitYear && (s = t2.parseTwoDigitYear);
          var r2 = e2.prototype, i3 = r2.parse;
          r2.parse = function(t3) {
            var e3 = t3.date, r3 = t3.utc, s2 = t3.args;
            this.$u = r3;
            var a2 = s2[1];
            if (typeof a2 == "string") {
              var f2 = s2[2] === true, u2 = s2[3] === true, h2 = f2 || u2, d2 = s2[2];
              u2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(t4, e4, n3) {
                try {
                  if (["x", "X"].indexOf(e4) > -1)
                    return new Date((e4 === "X" ? 1e3 : 1) * t4);
                  var r4 = c(e4)(t4), i4 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, u3 = r4.seconds, h3 = r4.milliseconds, d3 = r4.zone, l2 = new Date(), m2 = s3 || (i4 || o2 ? 1 : l2.getDate()), M3 = i4 || l2.getFullYear(), Y2 = 0;
                  i4 && !o2 || (Y2 = o2 > 0 ? o2 - 1 : l2.getMonth());
                  var p = a3 || 0, v = f3 || 0, D2 = u3 || 0, g = h3 || 0;
                  return d3 ? new Date(Date.UTC(M3, Y2, m2, p, v, D2, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M3, Y2, m2, p, v, D2, g)) : new Date(M3, Y2, m2, p, v, D2, g);
                } catch (t5) {
                  return new Date("");
                }
              }(e3, a2, r3), this.init(), d2 && d2 !== true && (this.$L = this.locale(d2).$L), h2 && e3 != this.format(a2) && (this.$d = new Date("")), o = {};
            } else if (a2 instanceof Array)
              for (var l = a2.length, m = 1; m <= l; m += 1) {
                s2[1] = a2[m - 1];
                var M2 = n2.apply(this, s2);
                if (M2.isValid()) {
                  this.$d = M2.$d, this.$L = M2.$L, this.init();
                  break;
                }
                m === l && (this.$d = new Date(""));
              }
            else
              i3.call(this, t3);
          };
        };
      });
    }
  });

  // src/vendor/dayjs/jsdelivr/plugin/utc.js
  var require_utc = __commonJS({
    "src/vendor/dayjs/jsdelivr/plugin/utc.js"(exports, module) {
      !function(t, i2) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = i2() : typeof define == "function" && define.amd ? define(i2) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs_plugin_utc = i2();
      }(exports, function() {
        "use strict";
        var t = "minute", i2 = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
        return function(s, f, n) {
          var u = f.prototype;
          n.utc = function(t2) {
            var i3 = { date: t2, utc: true, args: arguments };
            return new f(i3);
          }, u.utc = function(i3) {
            var e2 = n(this.toDate(), { locale: this.$L, utc: true });
            return i3 ? e2.add(this.utcOffset(), t) : e2;
          }, u.local = function() {
            return n(this.toDate(), { locale: this.$L, utc: false });
          };
          var o = u.parse;
          u.parse = function(t2) {
            t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
          };
          var r = u.init;
          u.init = function() {
            if (this.$u) {
              var t2 = this.$d;
              this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
            } else
              r.call(this);
          };
          var a = u.utcOffset;
          u.utcOffset = function(s2, f2) {
            var n2 = this.$utils().u;
            if (n2(s2))
              return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
            if (typeof s2 == "string" && (s2 = function(t2) {
              t2 === void 0 && (t2 = "");
              var s3 = t2.match(i2);
              if (!s3)
                return null;
              var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
              return u3 === 0 ? 0 : n3 === "+" ? u3 : -u3;
            }(s2)) === null)
              return this;
            var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
            if (f2)
              return o2.$offset = u2, o2.$u = s2 === 0, o2;
            if (s2 !== 0) {
              var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
              (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
            } else
              o2 = this.utc();
            return o2;
          };
          var h = u.format;
          u.format = function(t2) {
            var i3 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i3);
          }, u.valueOf = function() {
            var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t2;
          }, u.isUTC = function() {
            return !!this.$u;
          }, u.toISOString = function() {
            return this.toDate().toISOString();
          }, u.toString = function() {
            return this.toDate().toUTCString();
          };
          var l = u.toDate;
          u.toDate = function(t2) {
            return t2 === "s" && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
          };
          var c = u.diff;
          u.diff = function(t2, i3, e2) {
            if (t2 && this.$u === t2.$u)
              return c.call(this, t2, i3, e2);
            var s2 = this.local(), f2 = n(t2).local();
            return c.call(s2, f2, i3, e2);
          };
        };
      });
    }
  });

  // src/vendor/dayjs/jsdelivr/plugin/weekday.js
  var require_weekday = __commonJS({
    "src/vendor/dayjs/jsdelivr/plugin/weekday.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).dayjs_plugin_weekday = t();
      }(exports, function() {
        "use strict";
        return function(e, t) {
          t.prototype.weekday = function(e2) {
            var t2 = this.$locale().weekStart || 0, i2 = this.$W, n = (i2 < t2 ? i2 + 7 : i2) - t2;
            return this.$utils().u(e2) ? n : this.subtract(n, "day").add(e2, "day");
          };
        };
      });
    }
  });

  // src/vendor/dayjs/jsdelivr/plugin/weekOfYear.js
  var require_weekOfYear = __commonJS({
    "src/vendor/dayjs/jsdelivr/plugin/weekOfYear.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
      }(exports, function() {
        "use strict";
        var e = "week", t = "year";
        return function(i2, n, r) {
          var f = n.prototype;
          f.week = function(i3) {
            if (i3 === void 0 && (i3 = null), i3 !== null)
              return this.add(7 * (i3 - this.week()), "day");
            var n2 = this.$locale().yearStart || 1;
            if (this.month() === 11 && this.date() > 25) {
              var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
              if (f2.isBefore(s))
                return 1;
            }
            var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
            return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
          }, f.weeks = function(e2) {
            return e2 === void 0 && (e2 = null), this.week(e2);
          };
        };
      });
    }
  });

  // src/vendor/runtime-hooks/hooks.js
  var require_hooks = __commonJS({
    "src/vendor/runtime-hooks/hooks.js"(exports, module) {
      function withHookBefore2(originalFn, hookFn) {
        return function() {
          if (hookFn.apply(this, arguments) === false) {
            return;
          }
          return originalFn.apply(this, arguments);
        };
      }
      function withHookAfter(originalFn, hookFn) {
        return function() {
          var output = originalFn.apply(this, arguments);
          hookFn.apply(this, arguments);
          return output;
        };
      }
      function hookArgs(originalFn, argsGetter) {
        return function() {
          var _args = argsGetter.apply(this, arguments);
          if (Array.isArray(_args)) {
            for (var i2 = 0; i2 < _args.length; i2++)
              arguments[i2] = _args[i2];
          }
          return originalFn.apply(this, arguments);
        };
      }
      function hookOutput(originalFn, outputGetter) {
        return function() {
          var _output = originalFn.apply(this, arguments);
          return outputGetter(_output);
        };
      }
      module.exports = {
        withHookBefore: withHookBefore2,
        withHookAfter,
        hookArgs,
        hookOutput
      };
    }
  });

  // src/constants.js
  var APP_DEBUG_STYLE = "background-color:green;color:white";
  var APP_INFO_STYLE = "background-color:rgb(93, 121, 174);color:white";
  var APP_ERROR_STYLE = "background-color:red;color:white";

  // src/services/settings.js
  var Defaults = {
    globalVersion: "0.0.1",
    globalLocale: "en-US"
  };
  var Globals = {
    globalLocale: "fr-FR"
  };

  // src/app.js
  var App = (options) => {
    const {
      globalVersion,
      globalLocale
    } = App;
    return {
      getVersion() {
        return this.version || globalVersion;
      },
      getLocale() {
        return this.locale || globalLocale;
      }
    };
  };
  var app_default = Object.assign(App, Defaults, Globals);

  // src/helpers/orchestration.js
  var MAX_TRYS = 10;
  async function tryNTimes(toTry, count = MAX_TRYS) {
    if (count > 0) {
      const result = await toTry().catch((e) => e);
      if (result === "Error") {
        return await tryNTimes(toTry, count - 1);
      }
      return result;
    }
    return `Tried ${count} times and failed`;
  }

  // src/helpers/dom.js
  var insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

  // src/helpers/test.js
  var assert = function(condition, errorMessage, ErrorType = Error) {
    if (!condition)
      throw new ErrorType(errorMessage);
  };

  // src/core.js
  var import_feature = __toModule(require_feature());

  // src/vendor/log/log.js
  var ConsoleOutput = class {
    vrb(msg, ...opt) {
      console.log(msg, ...opt);
    }
    dbg(msg, ...opt) {
      console.log(msg, ...opt);
    }
    inf(msg, ...opt) {
      console.info(msg, ...opt);
    }
    wrn(msg, ...opt) {
      console.warn(msg, ...opt);
    }
    err(msg, ...opt) {
      console.error(msg, ...opt);
    }
    wtf(msg, ...opt) {
      console.error(msg, ...opt);
    }
  };
  var Log = class {
    constructor() {
      throw new Error("Log is a utility class");
    }
    static reset() {
      Log._output = Log.DEFAULT_OUTPUT;
      Log._available = true;
      Log._filterLevel = Log.DEFAULT_FILTER_LEVEL;
      Log._filterTag = Log.FILTER_TAG_ALL;
      Log._hasTimestamp = true;
      Log._hasLevel = true;
      Log._hasTag = true;
    }
    static output() {
      return Log._output;
    }
    static setOutput(ouput) {
      Log._output = ouput;
    }
    static resetOutput() {
      Log._output = Log.DEFAULT_OUTPUT;
    }
    static available() {
      return this._available;
    }
    static enable() {
      Log._available = true;
    }
    static disable() {
      Log._available = false;
    }
    static filterTag() {
      return Log._filterTag;
    }
    static setFilterTag(filterTag) {
      Log._filterTag = filterTag;
    }
    static clearFilterTag() {
      Log._filterTag = Log.FILTER_TAG_ALL;
    }
    static filterLevel() {
      return Log._filterLevel;
    }
    static setFilterLevel(filterLevel) {
      Log._filterLevel = filterLevel;
    }
    static resetFilterLevel() {
      Log._filterLevel = Log.DEFAULT_FILTER_LEVEL;
    }
    static hasTimestamp() {
      return Log._hasTimestamp;
    }
    static keepTimestamp() {
      Log._hasTimestamp = true;
    }
    static discardTimestamp() {
      Log._hasTimestamp = false;
    }
    static hasLevel() {
      return Log._hasLevel;
    }
    static keepLevel() {
      Log._hasLevel = true;
    }
    static discardLevel() {
      Log._hasLevel = false;
    }
    static hasTag() {
      return Log._hasTag;
    }
    static keepTag() {
      Log._hasTag = true;
    }
    static discardTag() {
      Log._hasTag = false;
    }
    static vrb(tag, msg, ...opt) {
      Log.write(Log.LEVEL_VRB, tag, msg, ...opt);
    }
    static dbg(tag, msg, ...opt) {
      Log.write(Log.LEVEL_DBG, tag, msg, ...opt);
    }
    static inf(tag, msg, ...opt) {
      Log.write(Log.LEVEL_INF, tag, msg, ...opt);
    }
    static wrn(tag, msg, ...opt) {
      Log.write(Log.LEVEL_WRN, tag, msg, ...opt);
    }
    static err(tag, msg, ...opt) {
      Log.write(Log.LEVEL_ERR, tag, msg, ...opt);
    }
    static wtf(tag, msg, ...opt) {
      Log.write(Log.LEVEL_WTF, tag, msg, ...opt);
    }
    static write(level, tag, msg, ...opt) {
      if (!Log._available) {
        return;
      }
      if (Log._filterLevel > level) {
        return;
      }
      if (Log.FILTER_TAG_ALL !== Log._filterTag && tag !== Log._filterTag) {
        return;
      }
      const head = Log.buildHead(level, tag);
      if (typeof msg === "string") {
        Log.writeMessage(level, head + " " + msg, ...opt);
      } else {
        if (msg === void 0) {
          Log.writeMessage(level, head, ...opt);
        } else {
          Log.writeMessage(level, head, msg, ...opt);
        }
      }
    }
    static buildHead(level, tag) {
      let head = "";
      if (Log._hasTimestamp) {
        head += Log.buildDate();
      }
      if (Log._hasLevel) {
        if (head !== "") {
          head += " | ";
        }
        head += Log.buildLevel(level);
      }
      if (Log._hasTag) {
        if (head !== "") {
          head += " | ";
        }
        head += tag;
      }
      if (head !== "") {
        head = "[" + head + "]";
      }
      return head;
    }
    static buildDate() {
      const d = new Date();
      const year = d.getFullYear().toString();
      const month = (d.getMonth() + 1).toString();
      const date = d.getDate().toString();
      const hour = d.getHours().toString();
      const min = d.getMinutes().toString();
      const sec = d.getSeconds().toString();
      const msec = d.getMilliseconds().toString();
      return Log.fix(year, 4) + "-" + Log.fix(month, 2) + "-" + Log.fix(date, 2) + "." + Log.fix(hour, 2) + ":" + Log.fix(min, 2) + ":" + Log.fix(sec, 2) + "." + Log.fix(msec, 3);
    }
    static buildLevel(level) {
      switch (level) {
        case Log.LEVEL_VRB:
          return "VRB";
        case Log.LEVEL_DBG:
          return "DBG";
        case Log.LEVEL_INF:
          return "INF";
        case Log.LEVEL_WRN:
          return "WRN";
        case Log.LEVEL_ERR:
          return "ERR";
        case Log.LEVEL_WTF:
          return "WTF";
        default:
          return "UKN";
      }
    }
    static writeMessage(level, s, ...opt) {
      switch (level) {
        case Log.LEVEL_VRB:
          Log._output.vrb(s, ...opt);
          break;
        case Log.LEVEL_DBG:
          Log._output.dbg(s, ...opt);
          break;
        case Log.LEVEL_INF:
          Log._output.inf(s, ...opt);
          break;
        case Log.LEVEL_WRN:
          Log._output.wrn(s, ...opt);
          break;
        case Log.LEVEL_ERR:
          Log._output.err(s, ...opt);
          break;
        case Log.LEVEL_WTF:
          Log._output.wtf(s, ...opt);
          break;
        default:
          break;
      }
    }
    static fix(s, len) {
      let ret = s;
      if (len < 0) {
        return ret;
      }
      const padding = len - s.length;
      for (let i2 = 0; i2 < padding; ++i2) {
        ret = "0" + ret;
      }
      return ret;
    }
  };
  Log.LEVEL_VRB = -2;
  Log.LEVEL_DBG = -1;
  Log.LEVEL_INF = 0;
  Log.LEVEL_WRN = 1;
  Log.LEVEL_ERR = 2;
  Log.LEVEL_WTF = 99;
  Log.DEFAULT_OUTPUT = new ConsoleOutput();
  Log.DEFAULT_FILTER_LEVEL = Log.LEVEL_INF;
  Log.FILTER_TAG_ALL = "";
  Log._output = Log.DEFAULT_OUTPUT;
  Log._available = true;
  Log._filterLevel = Log.DEFAULT_FILTER_LEVEL;
  Log._filterTag = Log.FILTER_TAG_ALL;
  Log._hasTimestamp = true;
  Log._hasLevel = true;
  Log._hasTag = true;
  var log_default = Log;

  // src/vendor/dayjs/src/constant.js
  var SECONDS_A_MINUTE = 60;
  var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
  var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
  var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
  var MILLISECONDS_A_SECOND = 1e3;
  var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
  var MS = "millisecond";
  var S = "second";
  var MIN = "minute";
  var H = "hour";
  var D = "day";
  var W = "week";
  var M = "month";
  var Q = "quarter";
  var Y = "year";
  var DATE = "date";
  var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
  var INVALID_DATE_STRING = "Invalid Date";
  var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

  // src/vendor/dayjs/src/locale/en.js
  var en_default = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  };

  // src/vendor/dayjs/src/utils.js
  var padStart = (string, length, pad) => {
    const s = String(string);
    if (!s || s.length >= length)
      return string;
    return `${Array(length + 1 - s.length).join(pad)}${string}`;
  };
  var padZoneStr = (instance) => {
    const negMinutes = -instance.utcOffset();
    const minutes = Math.abs(negMinutes);
    const hourOffset = Math.floor(minutes / 60);
    const minuteOffset = minutes % 60;
    return `${negMinutes <= 0 ? "+" : "-"}${padStart(hourOffset, 2, "0")}:${padStart(minuteOffset, 2, "0")}`;
  };
  var monthDiff = (a, b) => {
    if (a.date() < b.date())
      return -monthDiff(b, a);
    const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
    const anchor = a.clone().add(wholeMonthDiff, M);
    const c = b - anchor < 0;
    const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
    return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
  };
  var absFloor = (n) => n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
  var prettyUnit = (u) => {
    const special = {
      M,
      y: Y,
      w: W,
      d: D,
      D: DATE,
      h: H,
      m: MIN,
      s: S,
      ms: MS,
      Q
    };
    return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
  };
  var isUndefined = (s) => s === void 0;
  var utils_default = {
    s: padStart,
    z: padZoneStr,
    m: monthDiff,
    a: absFloor,
    p: prettyUnit,
    u: isUndefined
  };

  // src/vendor/dayjs/src/index.js
  var L = "en";
  var Ls = {};
  Ls[L] = en_default;
  var isDayjs = (d) => d instanceof Dayjs;
  var parseLocale = (preset, object, isLocal) => {
    let l;
    if (!preset)
      return L;
    if (typeof preset === "string") {
      if (Ls[preset]) {
        l = preset;
      }
      if (object) {
        Ls[preset] = object;
        l = preset;
      }
    } else {
      const { name } = preset;
      Ls[name] = preset;
      l = name;
    }
    if (!isLocal && l)
      L = l;
    return l || !isLocal && L;
  };
  var dayjs = function(date, c) {
    if (isDayjs(date)) {
      return date.clone();
    }
    const cfg = typeof c === "object" ? c : {};
    cfg.date = date;
    cfg.args = arguments;
    return new Dayjs(cfg);
  };
  var wrapper = (date, instance) => dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
  });
  var Utils = utils_default;
  Utils.l = parseLocale;
  Utils.i = isDayjs;
  Utils.w = wrapper;
  var parseDate = (cfg) => {
    const { date, utc } = cfg;
    if (date === null)
      return new Date(NaN);
    if (Utils.u(date))
      return new Date();
    if (date instanceof Date)
      return new Date(date);
    if (typeof date === "string" && !/Z$/i.test(date)) {
      const d = date.match(REGEX_PARSE);
      if (d) {
        const m = d[2] - 1 || 0;
        const ms = (d[7] || "0").substring(0, 3);
        if (utc) {
          return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
        }
        return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
      }
    }
    return new Date(date);
  };
  var Dayjs = class {
    constructor(cfg) {
      this.$L = parseLocale(cfg.locale, null, true);
      this.parse(cfg);
    }
    parse(cfg) {
      this.$d = parseDate(cfg);
      this.$x = cfg.x || {};
      this.init();
    }
    init() {
      const { $d } = this;
      this.$y = $d.getFullYear();
      this.$M = $d.getMonth();
      this.$D = $d.getDate();
      this.$W = $d.getDay();
      this.$H = $d.getHours();
      this.$m = $d.getMinutes();
      this.$s = $d.getSeconds();
      this.$ms = $d.getMilliseconds();
    }
    $utils() {
      return Utils;
    }
    isValid() {
      return !(this.$d.toString() === INVALID_DATE_STRING);
    }
    isSame(that, units) {
      const other = dayjs(that);
      return this.startOf(units) <= other && other <= this.endOf(units);
    }
    isAfter(that, units) {
      return dayjs(that) < this.startOf(units);
    }
    isBefore(that, units) {
      return this.endOf(units) < dayjs(that);
    }
    $g(input, get3, set) {
      if (Utils.u(input))
        return this[get3];
      return this.set(set, input);
    }
    unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    valueOf() {
      return this.$d.getTime();
    }
    startOf(units, startOf) {
      const isStartOf = !Utils.u(startOf) ? startOf : true;
      const unit = Utils.p(units);
      const instanceFactory = (d, m) => {
        const ins = Utils.w(this.$u ? Date.UTC(this.$y, m, d) : new Date(this.$y, m, d), this);
        return isStartOf ? ins : ins.endOf(D);
      };
      const instanceFactorySet = (method, slice) => {
        const argumentStart = [0, 0, 0, 0];
        const argumentEnd = [23, 59, 59, 999];
        return Utils.w(this.toDate()[method].apply(this.toDate("s"), (isStartOf ? argumentStart : argumentEnd).slice(slice)), this);
      };
      const { $W, $M, $D } = this;
      const utcPad = `set${this.$u ? "UTC" : ""}`;
      switch (unit) {
        case Y:
          return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
        case M:
          return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
        case W: {
          const weekStart = this.$locale().weekStart || 0;
          const gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }
        case D:
        case DATE:
          return instanceFactorySet(`${utcPad}Hours`, 0);
        case H:
          return instanceFactorySet(`${utcPad}Minutes`, 1);
        case MIN:
          return instanceFactorySet(`${utcPad}Seconds`, 2);
        case S:
          return instanceFactorySet(`${utcPad}Milliseconds`, 3);
        default:
          return this.clone();
      }
    }
    endOf(arg) {
      return this.startOf(arg, false);
    }
    $set(units, int) {
      const unit = Utils.p(units);
      const utcPad = `set${this.$u ? "UTC" : ""}`;
      const name = {
        [D]: `${utcPad}Date`,
        [DATE]: `${utcPad}Date`,
        [M]: `${utcPad}Month`,
        [Y]: `${utcPad}FullYear`,
        [H]: `${utcPad}Hours`,
        [MIN]: `${utcPad}Minutes`,
        [S]: `${utcPad}Seconds`,
        [MS]: `${utcPad}Milliseconds`
      }[unit];
      const arg = unit === D ? this.$D + (int - this.$W) : int;
      if (unit === M || unit === Y) {
        const date = this.clone().set(DATE, 1);
        date.$d[name](arg);
        date.init();
        this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
      } else if (name)
        this.$d[name](arg);
      this.init();
      return this;
    }
    set(string, int) {
      return this.clone().$set(string, int);
    }
    get(unit) {
      return this[Utils.p(unit)]();
    }
    add(number, units) {
      number = Number(number);
      const unit = Utils.p(units);
      const instanceFactorySet = (n) => {
        const d = dayjs(this);
        return Utils.w(d.date(d.date() + Math.round(n * number)), this);
      };
      if (unit === M) {
        return this.set(M, this.$M + number);
      }
      if (unit === Y) {
        return this.set(Y, this.$y + number);
      }
      if (unit === D) {
        return instanceFactorySet(1);
      }
      if (unit === W) {
        return instanceFactorySet(7);
      }
      const step = {
        [MIN]: MILLISECONDS_A_MINUTE,
        [H]: MILLISECONDS_A_HOUR,
        [S]: MILLISECONDS_A_SECOND
      }[unit] || 1;
      const nextTimeStamp = this.$d.getTime() + number * step;
      return Utils.w(nextTimeStamp, this);
    }
    subtract(number, string) {
      return this.add(number * -1, string);
    }
    format(formatStr) {
      const locale2 = this.$locale();
      if (!this.isValid())
        return locale2.invalidDate || INVALID_DATE_STRING;
      const str = formatStr || FORMAT_DEFAULT;
      const zoneStr = Utils.z(this);
      const { $H, $m, $M } = this;
      const {
        weekdays,
        months,
        meridiem
      } = locale2;
      const getShort = (arr, index, full, length) => arr && (arr[index] || arr(this, str)) || full[index].substr(0, length);
      const get$H = (num) => Utils.s($H % 12 || 12, num, "0");
      const meridiemFunc = meridiem || ((hour, minute, isLowercase) => {
        const m = hour < 12 ? "AM" : "PM";
        return isLowercase ? m.toLowerCase() : m;
      });
      const matches = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: $M + 1,
        MM: Utils.s($M + 1, 2, "0"),
        MMM: getShort(locale2.monthsShort, $M, months, 3),
        MMMM: getShort(months, $M),
        D: this.$D,
        DD: Utils.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: getShort(locale2.weekdaysMin, this.$W, weekdays, 2),
        ddd: getShort(locale2.weekdaysShort, this.$W, weekdays, 3),
        dddd: weekdays[this.$W],
        H: String($H),
        HH: Utils.s($H, 2, "0"),
        h: get$H(1),
        hh: get$H(2),
        a: meridiemFunc($H, $m, true),
        A: meridiemFunc($H, $m, false),
        m: String($m),
        mm: Utils.s($m, 2, "0"),
        s: String(this.$s),
        ss: Utils.s(this.$s, 2, "0"),
        SSS: Utils.s(this.$ms, 3, "0"),
        Z: zoneStr
      };
      return str.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match] || zoneStr.replace(":", ""));
    }
    utcOffset() {
      return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
    }
    diff(input, units, float) {
      const unit = Utils.p(units);
      const that = dayjs(input);
      const zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
      const diff = this - that;
      let result = Utils.m(this, that);
      result = {
        [Y]: result / 12,
        [M]: result,
        [Q]: result / 3,
        [W]: (diff - zoneDelta) / MILLISECONDS_A_WEEK,
        [D]: (diff - zoneDelta) / MILLISECONDS_A_DAY,
        [H]: diff / MILLISECONDS_A_HOUR,
        [MIN]: diff / MILLISECONDS_A_MINUTE,
        [S]: diff / MILLISECONDS_A_SECOND
      }[unit] || diff;
      return float ? result : Utils.a(result);
    }
    daysInMonth() {
      return this.endOf(M).$D;
    }
    $locale() {
      return Ls[this.$L];
    }
    locale(preset, object) {
      if (!preset)
        return this.$L;
      const that = this.clone();
      const nextLocaleName = parseLocale(preset, object, true);
      if (nextLocaleName)
        that.$L = nextLocaleName;
      return that;
    }
    clone() {
      return Utils.w(this.$d, this);
    }
    toDate() {
      return new Date(this.valueOf());
    }
    toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    toISOString() {
      return this.$d.toISOString();
    }
    toString() {
      return this.$d.toUTCString();
    }
  };
  var proto = Dayjs.prototype;
  dayjs.prototype = proto;
  [
    ["$ms", MS],
    ["$s", S],
    ["$m", MIN],
    ["$H", H],
    ["$W", D],
    ["$M", M],
    ["$y", Y],
    ["$D", DATE]
  ].forEach((g) => {
    proto[g[1]] = function(input) {
      return this.$g(input, g[0], g[1]);
    };
  });
  dayjs.extend = (plugin, option) => {
    if (!plugin.$i) {
      plugin(option, Dayjs, dayjs);
      plugin.$i = true;
    }
    return dayjs;
  };
  dayjs.locale = parseLocale;
  dayjs.isDayjs = isDayjs;
  dayjs.unix = (timestamp) => dayjs(timestamp * 1e3);
  dayjs.en = Ls[L];
  dayjs.Ls = Ls;
  dayjs.p = {};
  var src_default = dayjs;

  // src/core.js
  var import_localeData3 = __toModule(require_localeData());
  var import_customParseFormat2 = __toModule(require_customParseFormat());
  var import_utc2 = __toModule(require_utc());

  // src/vendor/dayjs/src_p/locale/fr.js
  var locale = {
    name: "fr",
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),
    monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    ordinal: (n) => {
      const o = n === 1 ? "er" : "";
      return `${n}${o}`;
    }
  };
  src_default.locale(locale, null, true);

  // src/vendor/mitt/mitt.neutral.js
  function mitt(all) {
    all = all || new Map();
    return {
      all,
      on(type, handler) {
        const handlers = all.get(type);
        if (handlers) {
          handlers.push(handler);
        } else {
          all.set(type, [handler]);
        }
      },
      off(type, handler) {
        const handlers = all.get(type);
        if (handlers) {
          if (handler) {
            handlers.splice(handlers.indexOf(handler) >>> 0, 1);
          } else {
            all.set(type, []);
          }
        }
      },
      emit(type, evt) {
        let handlers = all.get(type);
        if (handlers) {
          handlers.slice().map((handler) => {
            handler(evt);
          });
        }
        handlers = all.get("*");
        if (handlers) {
          handlers.slice().map((handler) => {
            handler(type, evt);
          });
        }
      }
    };
  }

  // src/vendor/sheetrock/sheetrock.neutral.tampermonkey.js
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport2 = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames2(module))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule2 = (module) => {
    return __reExport2(__markAsModule2(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var require_cross_fetch = __commonJS2({
    "vendor/cross-fetch.js"(exports) {
      !function(t) {
        !function(e) {
          var r = "URLSearchParams" in t, o = "Symbol" in t && "iterator" in Symbol, n = "FileReader" in t && "Blob" in t && function() {
            try {
              return new Blob(), true;
            } catch (t2) {
              return false;
            }
          }(), i2 = "FormData" in t, s = "ArrayBuffer" in t;
          if (s)
            var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], h = ArrayBuffer.isView || function(t2) {
              return t2 && a.indexOf(Object.prototype.toString.call(t2)) > -1;
            };
          function u(t2) {
            if (typeof t2 != "string" && (t2 = String(t2)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t2))
              throw new TypeError("Invalid character in header field name");
            return t2.toLowerCase();
          }
          function d(t2) {
            return typeof t2 != "string" && (t2 = String(t2)), t2;
          }
          function f(t2) {
            var e2 = { next: function() {
              var e3 = t2.shift();
              return { done: e3 === void 0, value: e3 };
            } };
            return o && (e2[Symbol.iterator] = function() {
              return e2;
            }), e2;
          }
          function c(t2) {
            this.map = {}, t2 instanceof c ? t2.forEach(function(t3, e2) {
              this.append(e2, t3);
            }, this) : Array.isArray(t2) ? t2.forEach(function(t3) {
              this.append(t3[0], t3[1]);
            }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function(e2) {
              this.append(e2, t2[e2]);
            }, this);
          }
          function p(t2) {
            if (t2.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t2.bodyUsed = true;
          }
          function y(t2) {
            return new Promise(function(e2, r2) {
              t2.onload = function() {
                e2(t2.result);
              }, t2.onerror = function() {
                r2(t2.error);
              };
            });
          }
          function l(t2) {
            var e2 = new FileReader(), r2 = y(e2);
            return e2.readAsArrayBuffer(t2), r2;
          }
          function b(t2) {
            if (t2.slice)
              return t2.slice(0);
            var e2 = new Uint8Array(t2.byteLength);
            return e2.set(new Uint8Array(t2)), e2.buffer;
          }
          function m() {
            return this.bodyUsed = false, this._initBody = function(t2) {
              var e2;
              this._bodyInit = t2, t2 ? typeof t2 == "string" ? this._bodyText = t2 : n && Blob.prototype.isPrototypeOf(t2) ? this._bodyBlob = t2 : i2 && FormData.prototype.isPrototypeOf(t2) ? this._bodyFormData = t2 : r && URLSearchParams.prototype.isPrototypeOf(t2) ? this._bodyText = t2.toString() : s && n && ((e2 = t2) && DataView.prototype.isPrototypeOf(e2)) ? (this._bodyArrayBuffer = b(t2.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t2) || h(t2)) ? this._bodyArrayBuffer = b(t2) : this._bodyText = t2 = Object.prototype.toString.call(t2) : this._bodyText = "", this.headers.get("content-type") || (typeof t2 == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t2) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }, n && (this.blob = function() {
              var t2 = p(this);
              if (t2)
                return t2;
              if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l);
            }), this.text = function() {
              var t2, e2, r2, o2 = p(this);
              if (o2)
                return o2;
              if (this._bodyBlob)
                return t2 = this._bodyBlob, e2 = new FileReader(), r2 = y(e2), e2.readAsText(t2), r2;
              if (this._bodyArrayBuffer)
                return Promise.resolve(function(t3) {
                  for (var e3 = new Uint8Array(t3), r3 = new Array(e3.length), o3 = 0; o3 < e3.length; o3++)
                    r3[o3] = String.fromCharCode(e3[o3]);
                  return r3.join("");
                }(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }, i2 && (this.formData = function() {
              return this.text().then(E);
            }), this.json = function() {
              return this.text().then(JSON.parse);
            }, this;
          }
          c.prototype.append = function(t2, e2) {
            t2 = u(t2), e2 = d(e2);
            var r2 = this.map[t2];
            this.map[t2] = r2 ? r2 + ", " + e2 : e2;
          }, c.prototype.delete = function(t2) {
            delete this.map[u(t2)];
          }, c.prototype.get = function(t2) {
            return t2 = u(t2), this.has(t2) ? this.map[t2] : null;
          }, c.prototype.has = function(t2) {
            return this.map.hasOwnProperty(u(t2));
          }, c.prototype.set = function(t2, e2) {
            this.map[u(t2)] = d(e2);
          }, c.prototype.forEach = function(t2, e2) {
            for (var r2 in this.map)
              this.map.hasOwnProperty(r2) && t2.call(e2, this.map[r2], r2, this);
          }, c.prototype.keys = function() {
            var t2 = [];
            return this.forEach(function(e2, r2) {
              t2.push(r2);
            }), f(t2);
          }, c.prototype.values = function() {
            var t2 = [];
            return this.forEach(function(e2) {
              t2.push(e2);
            }), f(t2);
          }, c.prototype.entries = function() {
            var t2 = [];
            return this.forEach(function(e2, r2) {
              t2.push([r2, e2]);
            }), f(t2);
          }, o && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function v(t2, e2) {
            var r2, o2, n2 = (e2 = e2 || {}).body;
            if (t2 instanceof v) {
              if (t2.bodyUsed)
                throw new TypeError("Already read");
              this.url = t2.url, this.credentials = t2.credentials, e2.headers || (this.headers = new c(t2.headers)), this.method = t2.method, this.mode = t2.mode, this.signal = t2.signal, n2 || t2._bodyInit == null || (n2 = t2._bodyInit, t2.bodyUsed = true);
            } else
              this.url = String(t2);
            if (this.credentials = e2.credentials || this.credentials || "same-origin", !e2.headers && this.headers || (this.headers = new c(e2.headers)), this.method = (r2 = e2.method || this.method || "GET", o2 = r2.toUpperCase(), w.indexOf(o2) > -1 ? o2 : r2), this.mode = e2.mode || this.mode || null, this.signal = e2.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n2)
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n2);
          }
          function E(t2) {
            var e2 = new FormData();
            return t2.trim().split("&").forEach(function(t3) {
              if (t3) {
                var r2 = t3.split("="), o2 = r2.shift().replace(/\+/g, " "), n2 = r2.join("=").replace(/\+/g, " ");
                e2.append(decodeURIComponent(o2), decodeURIComponent(n2));
              }
            }), e2;
          }
          function A2(t2, e2) {
            e2 || (e2 = {}), this.type = "default", this.status = e2.status === void 0 ? 200 : e2.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e2 ? e2.statusText : "OK", this.headers = new c(e2.headers), this.url = e2.url || "", this._initBody(t2);
          }
          v.prototype.clone = function() {
            return new v(this, { body: this._bodyInit });
          }, m.call(v.prototype), m.call(A2.prototype), A2.prototype.clone = function() {
            return new A2(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new c(this.headers), url: this.url });
          }, A2.error = function() {
            var t2 = new A2(null, { status: 0, statusText: "" });
            return t2.type = "error", t2;
          };
          var _ = [301, 302, 303, 307, 308];
          A2.redirect = function(t2, e2) {
            if (_.indexOf(e2) === -1)
              throw new RangeError("Invalid status code");
            return new A2(null, { status: e2, headers: { location: t2 } });
          }, e.DOMException = t.DOMException;
          try {
            new e.DOMException();
          } catch (t2) {
            e.DOMException = function(t3, e2) {
              this.message = t3, this.name = e2;
              var r2 = Error(t3);
              this.stack = r2.stack;
            }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
          }
          function g(t2, r2) {
            return new Promise(function(o2, i22) {
              var s2 = new v(t2, r2);
              if (s2.signal && s2.signal.aborted)
                return i22(new e.DOMException("Aborted", "AbortError"));
              var a2 = new XMLHttpRequest();
              function h2() {
                a2.abort();
              }
              a2.onload = function() {
                var t3, e2, r3 = { status: a2.status, statusText: a2.statusText, headers: (t3 = a2.getAllResponseHeaders() || "", e2 = new c(), t3.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t4) {
                  var r4 = t4.split(":"), o3 = r4.shift().trim();
                  if (o3) {
                    var n3 = r4.join(":").trim();
                    e2.append(o3, n3);
                  }
                }), e2) };
                r3.url = "responseURL" in a2 ? a2.responseURL : r3.headers.get("X-Request-URL");
                var n2 = "response" in a2 ? a2.response : a2.responseText;
                o2(new A2(n2, r3));
              }, a2.onerror = function() {
                i22(new TypeError("Network request failed"));
              }, a2.ontimeout = function() {
                i22(new TypeError("Network request failed"));
              }, a2.onabort = function() {
                i22(new e.DOMException("Aborted", "AbortError"));
              }, a2.open(s2.method, s2.url, true), s2.credentials === "include" ? a2.withCredentials = true : s2.credentials === "omit" && (a2.withCredentials = false), "responseType" in a2 && n && (a2.responseType = "blob"), s2.headers.forEach(function(t3, e2) {
                a2.setRequestHeader(e2, t3);
              }), s2.signal && (s2.signal.addEventListener("abort", h2), a2.onreadystatechange = function() {
                a2.readyState === 4 && s2.signal.removeEventListener("abort", h2);
              }), a2.send(s2._bodyInit === void 0 ? null : s2._bodyInit);
            });
          }
          g.polyfill = true, t.fetch || (t.fetch = g, t.Headers = c, t.Request = v, t.Response = A2), e.Headers = c, e.Request = v, e.Response = A2, e.fetch = g, Object.defineProperty(e, "__esModule", { value: true });
        }({});
      }(typeof self != "undefined" ? self : exports);
    }
  });
  var defaults = {
    url: "",
    query: "",
    target: null,
    fetchSize: 0,
    labels: [],
    rowTemplate: null,
    callback: null,
    reset: false
  };
  var legacyOptions = {
    sql: "query",
    resetStatus: "reset",
    chunkSize: "fetchSize",
    rowHandler: "rowTemplate"
  };
  var sheetTypes = {
    2014: {
      apiEndpoint: "https://docs.google.com/spreadsheets/d/%key%/gviz/tq?",
      keyFormat: new RegExp("spreadsheets/d/([^/#]+)", "i"),
      gidFormat: new RegExp("gid=([^/&#]+)", "i")
    },
    2010: {
      apiEndpoint: "https://spreadsheets.google.com/tq?key=%key%&",
      keyFormat: new RegExp("key=([^&#]+)", "i"),
      gidFormat: new RegExp("gid=([^/&#]+)", "i")
    }
  };
  function getCellValue(cell) {
    let value = cell ? cell.f || cell.v || cell : "";
    if (value instanceof Array) {
      value = value.join("");
    }
    if (typeof value === "object") {
      return "";
    }
    return `${value}`.replace(/^\s+|\s+$/, "");
  }
  function extractElement(blob) {
    let el = blob;
    if (typeof el === "object" && el.jquery && el.length) {
      [el] = el;
    }
    return el && el.nodeType && el.nodeType === 1 ? el : null;
  }
  function append(target, html) {
    if (target && target.insertAdjacentHTML) {
      target.insertAdjacentHTML("beforeEnd", html);
    }
  }
  function hasClass(el, className) {
    const classes = ` ${el.className} `;
    return classes.indexOf(` ${className} `) !== -1;
  }
  function isTable(el) {
    return el && el.tagName === "TABLE";
  }
  function wrapTag(str, tag) {
    return `<${tag}>${str}</${tag}>`;
  }
  function toHTML(row) {
    const tag = row.num ? "td" : "th";
    let html = "";
    Object.keys(row.cells).forEach((key) => {
      html += wrapTag(row.cells[key], tag);
    });
    return wrapTag(html, "tr");
  }
  function triggerEvent(el, eventName) {
    if (typeof Event === "function") {
      const event = new Event(eventName);
      el.dispatchEvent(event);
    }
  }
  var SheetrockError = class extends Error {
    constructor(message = "", code = null) {
      super();
      this.name = "SheetrockError";
      this.code = code;
      this.message = message;
    }
  };
  function translateLegacyOptions(options) {
    const newOptions = {};
    Object.keys(options).forEach((key) => {
      if ({}.hasOwnProperty.call(legacyOptions, key)) {
        newOptions[legacyOptions[key]] = options[key];
      } else {
        newOptions[key] = options[key];
      }
    });
    return newOptions;
  }
  function setUserOptions(options) {
    const validatedOptions = {};
    validatedOptions.target = extractElement(options.target);
    validatedOptions.fetchSize = Math.max(0, parseInt(options.fetchSize, 10) || 0);
    if (!validatedOptions.target && !options.callback && !defaults.callback) {
      throw new SheetrockError("No element targeted or callback provided.");
    }
    return { ...defaults, ...options, ...validatedOptions };
  }
  function setRequestOptions(options, data) {
    if (data) {
      return { data };
    }
    let sheetType = null;
    Object.keys(sheetTypes).forEach((key) => {
      const value = sheetTypes[key];
      if (value.keyFormat.test(options.url) && value.gidFormat.test(options.url)) {
        sheetType = value;
      }
    });
    if (sheetType) {
      const sheetKey = options.url.match(sheetType.keyFormat)[1];
      return {
        key: sheetKey,
        gid: options.url.match(sheetType.gidFormat)[1],
        apiEndpoint: sheetType.apiEndpoint.replace("%key%", sheetKey)
      };
    }
    throw new SheetrockError("No key/gid in the provided URL.");
  }
  var Options = class {
    constructor(options = {}, data = false) {
      this.user = setUserOptions(translateLegacyOptions(options));
      this.request = setRequestOptions(this.user, data);
      this.requestIndex = `${this.request.key}_${this.request.gid}_${this.user.query}`;
    }
  };
  var stateCache = {
    defaults: {
      failed: false,
      header: 0,
      labels: null,
      loaded: false,
      offset: 0
    },
    store: {}
  };
  var Request = class {
    constructor(options) {
      this.options = options;
      this.index = options.requestIndex;
      if (this.state.failed) {
        throw new SheetrockError("A previous request for this resource failed.");
      }
      if (this.state.loaded) {
        throw new SheetrockError("No more rows to load!");
      }
    }
    get state() {
      const hasPreviousState = {}.hasOwnProperty.call(stateCache.store, this.index);
      const reset = this.options.user.reset || this.options.request.data;
      if (!hasPreviousState || reset) {
        const savedState = {
          labels: hasPreviousState ? stateCache.store[this.index].labels : null
        };
        stateCache.store[this.index] = { ...stateCache.defaults, ...savedState };
      }
      return stateCache.store[this.index];
    }
    get url() {
      const size = this.options.user.fetchSize;
      const pageQuery = size ? ` limit ${size + 1} offset ${this.state.offset}` : "";
      const queryVars = [
        `gid=${encodeURIComponent(this.options.request.gid)}`,
        `tq=${encodeURIComponent(this.options.user.query + pageQuery)}`
      ];
      return this.options.request.apiEndpoint + queryVars.join("&");
    }
    update(attributes = {}) {
      stateCache.store[this.index] = Object.assign(this.state, attributes);
    }
  };
  var Row = class {
    constructor(number, cellsArray, labels) {
      this.num = number;
      this.cellsArray = cellsArray.map(getCellValue);
      this.labels = labels;
    }
    get cells() {
      const cellsObj = {};
      this.labels.forEach((label, index) => {
        cellsObj[label] = this.cellsArray[index];
      });
      return cellsObj;
    }
  };
  var Response = class {
    constructor(request) {
      this.request = request;
      this.options = request.options;
    }
    setAttributes() {
      const { fetchSize } = this.options.user;
      const { rows } = this.raw.table;
      const { cols } = this.raw.table;
      const attributes = {
        last: rows.length - 1,
        rowNumberOffset: this.request.state.header || 0
      };
      let columnLabels = this.request.state.labels;
      if (!this.request.state.offset) {
        columnLabels = cols.map((col, i2) => {
          if (col.label) {
            return col.label.replace(/\s/g, "");
          }
          attributes.last += 1;
          attributes.rowNumberOffset = 1;
          return getCellValue(rows[0].c[i2]) || col.id;
        });
        this.request.update({
          header: attributes.rowNumberOffset,
          labels: columnLabels,
          offset: this.request.state.offset + attributes.rowNumberOffset
        });
      }
      if (!fetchSize || rows.length - attributes.rowNumberOffset < fetchSize) {
        attributes.last += 1;
        this.request.update({ loaded: true });
      }
      const userLabels = this.options.user.labels;
      const userLabelsValid = userLabels && userLabels.length === columnLabels.length;
      attributes.labels = userLabelsValid ? userLabels : columnLabels;
      this.attributes = attributes;
    }
    setOutput() {
      this.rows = [];
      if (!this.request.state.offset && !this.attributes.rowNumberOffset) {
        this.rows.push(new Row(0, this.attributes.labels, this.attributes.labels));
      }
      this.raw.table.rows.forEach((row, i2) => {
        if (row.c && i2 < this.attributes.last) {
          const counter = this.request.state.offset + i2 + 1 - this.attributes.rowNumberOffset;
          this.rows.push(new Row(counter, row.c, this.attributes.labels));
        }
      });
      this.request.update({
        offset: this.request.state.offset + this.options.user.fetchSize
      });
    }
    setHTML() {
      const { target } = this.options.user;
      if (typeof target === "undefined" || target === null)
        return;
      const template = this.options.user.rowTemplate || toHTML;
      const isTable2 = isTable(target);
      const needsHeader = target && hasClass(target, "sheetrock-header");
      let headerHTML = "";
      let bodyHTML = "";
      this.rows.forEach((row) => {
        if (row.num) {
          bodyHTML += template(row);
        } else if (isTable2 || needsHeader) {
          headerHTML += template(row);
        }
      });
      if (isTable2) {
        headerHTML = wrapTag(headerHTML, "thead");
        bodyHTML = wrapTag(bodyHTML, "tbody");
      }
      append(target, headerHTML + bodyHTML);
      triggerEvent(target, "sheetrock:loaded");
      this.html = headerHTML + bodyHTML;
    }
    loadData(rawData, callback) {
      this.raw = rawData;
      try {
        this.setAttributes();
        this.setOutput();
      } catch (error) {
        callback(new SheetrockError("Unexpected API response format."));
        return;
      }
      this.setHTML();
      callback(null);
    }
  };
  var import_cross_fetch = __toModule2(require_cross_fetch());
  function get(response, callback) {
    const transportOptions = {
      headers: {
        "X-DataSource-Auth": "true"
      }
    };
    (0, import_cross_fetch.default)(response.request.url, transportOptions).then((resp) => {
      if (!resp.ok) {
        throw new SheetrockError("Request failed.", resp.status);
      }
      return resp.text();
    }).then((body) => {
      const data = JSON.parse(body.replace(/^\)]\}'\n/, ""));
      response.loadData(data, callback);
    }).catch((error) => {
      if (error instanceof SheetrockError) {
        return callback(error);
      }
      const errorMessage = error && error.message ? error.message : "Request failed.";
      return callback(new SheetrockError(errorMessage, 500));
    });
  }
  var callbackIndex = 0;
  function get2(response, callback) {
    const headElement = window.document.getElementsByTagName("head")[0];
    const scriptElement = window.document.createElement("script");
    const callbackName = `_sheetrock_callback_${callbackIndex}`;
    callbackIndex += 1;
    function always() {
      headElement.removeChild(scriptElement);
      delete window[callbackName];
    }
    function success(data) {
      always();
      response.loadData(data, callback);
    }
    function error() {
      always();
      callback(new SheetrockError("Request failed."));
    }
    unsafeWindow[callbackName] = success;
    if (scriptElement.addEventListener) {
      scriptElement.addEventListener("error", error, false);
      scriptElement.addEventListener("abort", error, false);
    }
    scriptElement.type = "text/javascript";
    scriptElement.src = `${response.request.url}&tqx=responseHandler:${callbackName}`;
    headElement.appendChild(scriptElement);
  }
  var version = "1.2.0";
  function sheetrock(userOptions = {}, data = null) {
    let options = null;
    let request = null;
    let response = null;
    function handleError(error) {
      if (error && error.name === "SheetrockError") {
        if (request && request.update) {
          request.update({ failed: true });
        }
      }
      if (userOptions.callback) {
        userOptions.callback(error, options, response);
        return;
      }
      if (error) {
        throw error;
      }
    }
    try {
      options = new Options({ target: this, ...userOptions }, !!data);
      request = new Request(options);
      response = new Response(request);
    } catch (error) {
      handleError(error);
    }
    if (data) {
      response.loadData(data, handleError);
    } else if (options && request && response) {
      if (typeof window === "object" && "document" in window) {
        get2(response, handleError);
      } else {
        get(response, handleError);
      }
    }
    return this;
  }
  Object.assign(sheetrock, { defaults, version });
  try {
    window.jQuery.fn.sheetrock = sheetrock;
  } catch (ignore) {
  }
  var src_default2 = sheetrock;

  // src/vendor/jsPanel4/es6module/jspanel.js
  var jsPanel = {
    version: "4.13.0",
    date: "2021-11-24 11:58",
    ajaxAlwaysCallbacks: [],
    autopositionSpacing: 4,
    closeOnEscape: (() => {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.code === "Escape" || e.key === "Esc") {
          jsPanel.getPanels((panel) => {
            return panel.classList.contains("jsPanel");
          }).some((item) => {
            if (item.options.closeOnEscape) {
              if (typeof item.options.closeOnEscape === "function") {
                return item.options.closeOnEscape.call(item, item);
              } else {
                item.close(null, true);
                return true;
              }
            }
            return false;
          });
        }
      }, false);
    })(),
    defaults: {
      boxShadow: 3,
      container: "window",
      contentSize: { width: "400px", height: "200px" },
      dragit: {
        cursor: "move",
        handles: ".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",
        opacity: 0.8,
        disableOnMaximized: true
      },
      header: true,
      headerTitle: "jsPanel",
      headerControls: { size: "md" },
      iconfont: void 0,
      maximizedMargin: 0,
      minimizeTo: "default",
      paneltype: "standard",
      position: { my: "center", at: "center" },
      resizeit: {
        handles: "n, e, s, w, ne, se, sw, nw",
        minWidth: 128,
        minHeight: 38
      },
      theme: "default"
    },
    defaultAutocloseConfig: { time: "8s", progressbar: true },
    defaultSnapConfig: {
      sensitivity: 70,
      trigger: "panel",
      active: "both"
    },
    extensions: {},
    globalCallbacks: false,
    icons: {
      close: `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>`,
      maximize: `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>`,
      normalize: `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>`,
      minimize: `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>`,
      smallify: `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>`
    },
    idCounter: 0,
    isIE: (() => {
      return navigator.appVersion.match(/Trident/);
    })(),
    pointerdown: "onpointerdown" in window ? ["pointerdown"] : "ontouchend" in window ? ["touchstart", "mousedown"] : ["mousedown"],
    pointermove: "onpointermove" in window ? ["pointermove"] : "ontouchend" in window ? ["touchmove", "mousemove"] : ["mousemove"],
    pointerup: "onpointerup" in window ? ["pointerup"] : "ontouchend" in window ? ["touchend", "mouseup"] : ["mouseup"],
    polyfills: (() => {
      if (!Object.assign) {
        Object.defineProperty(Object, "assign", {
          enumerable: false,
          configurable: true,
          writable: true,
          value: function(target) {
            if (target === void 0 || target === null) {
              throw new TypeError("Cannot convert first argument to object");
            }
            let to = Object(target);
            for (let i2 = 1; i2 < arguments.length; i2++) {
              let nextSource = arguments[i2];
              if (nextSource === void 0 || nextSource === null) {
                continue;
              }
              nextSource = Object(nextSource);
              let keysArray = Object.keys(Object(nextSource));
              for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                let nextKey = keysArray[nextIndex];
                let desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== void 0 && desc.enumerable) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
            return to;
          }
        });
      }
      if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback, thisArg) {
          thisArg = thisArg || window;
          for (let i2 = 0; i2 < this.length; i2++) {
            callback.call(thisArg, this[i2], i2, this);
          }
        };
      }
      (function(arr) {
        arr.forEach(function(item) {
          item.append = item.append || function() {
            let argArr = Array.prototype.slice.call(arguments), docFrag = document.createDocumentFragment();
            argArr.forEach(function(argItem) {
              let isNode = argItem instanceof Node;
              docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
            });
            this.appendChild(docFrag);
          };
        });
      })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
      if (window.Element && !Element.prototype.closest) {
        Element.prototype.closest = function(s) {
          let matches = (this.document || this.ownerDocument).querySelectorAll(s), i2, el = this;
          do {
            i2 = matches.length;
            while (--i2 >= 0 && matches.item(i2) !== el) {
            }
          } while (i2 < 0 && (el = el.parentElement));
          return el;
        };
      }
      (function() {
        if (typeof window.CustomEvent === "function")
          return false;
        function CustomEvent2(event, params) {
          params = params || {
            bubbles: false,
            cancelable: false,
            detail: void 0
          };
          let evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        }
        CustomEvent2.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent2;
      })();
      if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchStr, Position) {
          if (!(Position < this.length))
            Position = this.length;
          else
            Position |= 0;
          return this.substr(Position - searchStr.length, searchStr.length) === searchStr;
        };
      }
      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
          return this.substr(position || 0, searchString.length) === searchString;
        };
      }
      if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
          if (typeof start !== "number") {
            start = 0;
          }
          if (start + search.length > this.length) {
            return false;
          } else {
            return this.indexOf(search, start) !== -1;
          }
        };
      }
      Number.isInteger = Number.isInteger || function(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
      if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, "includes", {
          value: function(searchElement, fromIndex) {
            if (this == null) {
              throw new TypeError('"this" is null or not defined');
            }
            let o = Object(this);
            let len = o.length >>> 0;
            if (len === 0) {
              return false;
            }
            let n = fromIndex | 0;
            let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
              return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
            }
            while (k < len) {
              if (sameValueZero(o[k], searchElement)) {
                return true;
              }
              k++;
            }
            return false;
          }
        });
      }
    })(),
    themes: ["default", "primary", "secondary", "info", "success", "warning", "danger", "light", "dark"],
    ziBase: 100,
    colorFilledLight: 0.81,
    colorFilledDark: 0.08,
    colorFilled: 0,
    colorBrightnessThreshold: 0.55,
    colorNames: {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgrey: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      grey: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
      grey50: "fafafa",
      grey100: "f5f5f5",
      grey200: "eee",
      grey300: "e0e0e0",
      grey400: "bdbdbd",
      grey500: "9e9e9e",
      grey600: "757575",
      grey700: "616161",
      grey800: "424242",
      grey900: "212121",
      gray50: "fafafa",
      gray100: "f5f5f5",
      gray200: "eee",
      gray300: "e0e0e0",
      gray400: "bdbdbd",
      gray500: "9e9e9e",
      gray600: "757575",
      gray700: "616161",
      gray800: "424242",
      gray900: "212121",
      bluegrey50: "eceff1",
      bluegrey100: "CFD8DC",
      bluegrey200: "B0BEC5",
      bluegrey300: "90A4AE",
      bluegrey400: "78909C",
      bluegrey500: "607D8B",
      bluegrey600: "546E7A",
      bluegrey700: "455A64",
      bluegrey800: "37474F",
      bluegrey900: "263238",
      bluegray50: "eceff1",
      bluegray100: "CFD8DC",
      bluegray200: "B0BEC5",
      bluegray300: "90A4AE",
      bluegray400: "78909C",
      bluegray500: "607D8B",
      bluegray600: "546E7A",
      bluegray700: "455A64",
      bluegray800: "37474F",
      bluegray900: "263238",
      red50: "FFEBEE",
      red100: "FFCDD2",
      red200: "EF9A9A",
      red300: "E57373",
      red400: "EF5350",
      red500: "F44336",
      red600: "E53935",
      red700: "D32F2F",
      red800: "C62828",
      red900: "B71C1C",
      reda100: "FF8A80",
      reda200: "FF5252",
      reda400: "FF1744",
      reda700: "D50000",
      pink50: "FCE4EC",
      pink100: "F8BBD0",
      pink200: "F48FB1",
      pink300: "F06292",
      pink400: "EC407A",
      pink500: "E91E63",
      pink600: "D81B60",
      pink700: "C2185B",
      pink800: "AD1457",
      pink900: "880E4F",
      pinka100: "FF80AB",
      pinka200: "FF4081",
      pinka400: "F50057",
      pinka700: "C51162",
      purple50: "F3E5F5",
      purple100: "E1BEE7",
      purple200: "CE93D8",
      purple300: "BA68C8",
      purple400: "AB47BC",
      purple500: "9C27B0",
      purple600: "8E24AA",
      purple700: "7B1FA2",
      purple800: "6A1B9A",
      purple900: "4A148C",
      purplea100: "EA80FC",
      purplea200: "E040FB",
      purplea400: "D500F9",
      purplea700: "AA00FF",
      deeppurple50: "EDE7F6",
      deeppurple100: "D1C4E9",
      deeppurple200: "B39DDB",
      deeppurple300: "9575CD",
      deeppurple400: "7E57C2",
      deeppurple500: "673AB7",
      deeppurple600: "5E35B1",
      deeppurple700: "512DA8",
      deeppurple800: "4527A0",
      deeppurple900: "311B92",
      deeppurplea100: "B388FF",
      deeppurplea200: "7C4DFF",
      deeppurplea400: "651FFF",
      deeppurplea700: "6200EA",
      indigo50: "E8EAF6",
      indigo100: "C5CAE9",
      indigo200: "9FA8DA",
      indigo300: "7986CB",
      indigo400: "5C6BC0",
      indigo500: "3F51B5",
      indigo600: "3949AB",
      indigo700: "303F9F",
      indigo800: "283593",
      indigo900: "1A237E",
      indigoa100: "8C9EFF",
      indigoa200: "536DFE",
      indigoa400: "3D5AFE",
      indigoa700: "304FFE",
      blue50: "E3F2FD",
      blue100: "BBDEFB",
      blue200: "90CAF9",
      blue300: "64B5F6",
      blue400: "42A5F5",
      blue500: "2196F3",
      blue600: "1E88E5",
      blue700: "1976D2",
      blue800: "1565C0",
      blue900: "0D47A1",
      bluea100: "82B1FF",
      bluea200: "448AFF",
      bluea400: "2979FF",
      bluea700: "2962FF",
      lightblue50: "E1F5FE",
      lightblue100: "B3E5FC",
      lightblue200: "81D4FA",
      lightblue300: "4FC3F7",
      lightblue400: "29B6F6",
      lightblue500: "03A9F4",
      lightblue600: "039BE5",
      lightblue700: "0288D1",
      lightblue800: "0277BD",
      lightblue900: "01579B",
      lightbluea100: "80D8FF",
      lightbluea200: "40C4FF",
      lightbluea400: "00B0FF",
      lightbluea700: "0091EA",
      cyan50: "E0F7FA",
      cyan100: "B2EBF2",
      cyan200: "80DEEA",
      cyan300: "4DD0E1",
      cyan400: "26C6DA",
      cyan500: "00BCD4",
      cyan600: "00ACC1",
      cyan700: "0097A7",
      cyan800: "00838F",
      cyan900: "006064",
      cyana100: "84FFFF",
      cyana200: "18FFFF",
      cyana400: "00E5FF",
      cyana700: "00B8D4",
      teal50: "E0F2F1",
      teal100: "B2DFDB",
      teal200: "80CBC4",
      teal300: "4DB6AC",
      teal400: "26A69A",
      teal500: "009688",
      teal600: "00897B",
      teal700: "00796B",
      teal800: "00695C",
      teal900: "004D40",
      teala100: "A7FFEB",
      teala200: "64FFDA",
      teala400: "1DE9B6",
      teala700: "00BFA5",
      green50: "E8F5E9",
      green100: "C8E6C9",
      green200: "A5D6A7",
      green300: "81C784",
      green400: "66BB6A",
      green500: "4CAF50",
      green600: "43A047",
      green700: "388E3C",
      green800: "2E7D32",
      green900: "1B5E20",
      greena100: "B9F6CA",
      greena200: "69F0AE",
      greena400: "00E676",
      greena700: "00C853",
      lightgreen50: "F1F8E9",
      lightgreen100: "DCEDC8",
      lightgreen200: "C5E1A5",
      lightgreen300: "AED581",
      lightgreen400: "9CCC65",
      lightgreen500: "8BC34A",
      lightgreen600: "7CB342",
      lightgreen700: "689F38",
      lightgreen800: "558B2F",
      lightgreen900: "33691E",
      lightgreena100: "CCFF90",
      lightgreena200: "B2FF59",
      lightgreena400: "76FF03",
      lightgreena700: "64DD17",
      lime50: "F9FBE7",
      lime100: "F0F4C3",
      lime200: "E6EE9C",
      lime300: "DCE775",
      lime400: "D4E157",
      lime500: "CDDC39",
      lime600: "C0CA33",
      lime700: "AFB42B",
      lime800: "9E9D24",
      lime900: "827717",
      limea100: "F4FF81",
      limea200: "EEFF41",
      limea400: "C6FF00",
      limea700: "AEEA00",
      yellow50: "FFFDE7",
      yellow100: "FFF9C4",
      yellow200: "FFF59D",
      yellow300: "FFF176",
      yellow400: "FFEE58",
      yellow500: "FFEB3B",
      yellow600: "FDD835",
      yellow700: "FBC02D",
      yellow800: "F9A825",
      yellow900: "F57F17",
      yellowa100: "FFFF8D",
      yellowa200: "FFFF00",
      yellowa400: "FFEA00",
      yellowa700: "FFD600",
      amber50: "FFF8E1",
      amber100: "FFECB3",
      amber200: "FFE082",
      amber300: "FFD54F",
      amber400: "FFCA28",
      amber500: "FFC107",
      amber600: "FFB300",
      amber700: "FFA000",
      amber800: "FF8F00",
      amber900: "FF6F00",
      ambera100: "FFE57F",
      ambera200: "FFD740",
      ambera400: "FFC400",
      ambera700: "FFAB00",
      orange50: "FFF3E0",
      orange100: "FFE0B2",
      orange200: "FFCC80",
      orange300: "FFB74D",
      orange400: "FFA726",
      orange500: "FF9800",
      orange600: "FB8C00",
      orange700: "F57C00",
      orange800: "EF6C00",
      orange900: "E65100",
      orangea100: "FFD180",
      orangea200: "FFAB40",
      orangea400: "FF9100",
      orangea700: "FF6D00",
      deeporange50: "FBE9E7",
      deeporange100: "FFCCBC",
      deeporange200: "FFAB91",
      deeporange300: "FF8A65",
      deeporange400: "FF7043",
      deeporange500: "FF5722",
      deeporange600: "F4511E",
      deeporange700: "E64A19",
      deeporange800: "D84315",
      deeporange900: "BF360C",
      deeporangea100: "FF9E80",
      deeporangea200: "FF6E40",
      deeporangea400: "FF3D00",
      deeporangea700: "DD2C00",
      brown50: "EFEBE9",
      brown100: "D7CCC8",
      brown200: "BCAAA4",
      brown300: "A1887F",
      brown400: "8D6E63",
      brown500: "795548",
      brown600: "6D4C41",
      brown700: "5D4037",
      brown800: "4E342E",
      brown900: "3E2723"
    },
    errorReporting: 1,
    modifier: false,
    helper: (() => {
      document.addEventListener("keydown", (e) => {
        jsPanel.modifier = e;
      });
      document.addEventListener("keyup", () => {
        jsPanel.modifier = false;
      });
    })(),
    usePointerEvents(use = true) {
      if (!use) {
        this.pointerdown = "ontouchend" in window ? ["touchstart", "mousedown"] : ["mousedown"];
        this.pointermove = "ontouchend" in window ? ["touchmove", "mousemove"] : ["mousemove"];
        this.pointerup = "ontouchend" in window ? ["touchend", "mouseup"] : ["mouseup"];
      } else {
        this.pointerdown = "onpointerdown" in window ? ["pointerdown"] : "ontouchend" in window ? ["touchstart", "mousedown"] : ["mousedown"];
        this.pointermove = "onpointermove" in window ? ["pointermove"] : "ontouchend" in window ? ["touchmove", "mousemove"] : ["mousemove"];
        this.pointerup = "onpointerup" in window ? ["pointerup"] : "ontouchend" in window ? ["touchend", "mouseup"] : ["mouseup"];
      }
    },
    color(val) {
      let color = val.toLowerCase(), r, g, b, h, s, l, match, channels, hsl, result = {};
      const hexPattern = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi, RGBAPattern = /^rgba?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3}),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi, HSLAPattern = /^hsla?\(([0-9]{1,3}),([0-9]{1,3}%),([0-9]{1,3}%),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi, namedColors = this.colorNames;
      if (namedColors[color]) {
        color = namedColors[color];
      }
      if (color.match(hexPattern) !== null) {
        color = color.replace("#", "");
        if (color.length % 2 === 1) {
          r = String(color.substr(0, 1)) + color.substr(0, 1);
          g = String(color.substr(1, 1)) + color.substr(1, 1);
          b = String(color.substr(2, 1)) + color.substr(2, 1);
          result.rgb = {
            r: parseInt(r, 16),
            g: parseInt(g, 16),
            b: parseInt(b, 16)
          };
          result.hex = `#${r}${g}${b}`;
        } else {
          result.rgb = {
            r: parseInt(color.substr(0, 2), 16),
            g: parseInt(color.substr(2, 2), 16),
            b: parseInt(color.substr(4, 2), 16)
          };
          result.hex = `#${color}`;
        }
        hsl = this.rgbToHsl(result.rgb.r, result.rgb.g, result.rgb.b);
        result.hsl = hsl;
        result.rgb.css = `rgb(${result.rgb.r},${result.rgb.g},${result.rgb.b})`;
      } else if (color.match(RGBAPattern)) {
        match = RGBAPattern.exec(color);
        result.rgb = { css: color, r: match[1], g: match[2], b: match[3] };
        result.hex = this.rgbToHex(match[1], match[2], match[3]);
        hsl = this.rgbToHsl(match[1], match[2], match[3]);
        result.hsl = hsl;
      } else if (color.match(HSLAPattern)) {
        match = HSLAPattern.exec(color);
        h = match[1] / 360;
        s = match[2].substr(0, match[2].length - 1) / 100;
        l = match[3].substr(0, match[3].length - 1) / 100;
        channels = this.hslToRgb(h, s, l);
        result.rgb = {
          css: `rgb(${channels[0]},${channels[1]},${channels[2]})`,
          r: channels[0],
          g: channels[1],
          b: channels[2]
        };
        result.hex = this.rgbToHex(result.rgb.r, result.rgb.g, result.rgb.b);
        result.hsl = {
          css: `hsl(${match[1]},${match[2]},${match[3]})`,
          h: match[1],
          s: match[2],
          l: match[3]
        };
      } else {
        result.hex = "#f5f5f5";
        result.rgb = { css: "rgb(245,245,245)", r: 245, g: 245, b: 245 };
        result.hsl = { css: "hsl(0,0%,96%)", h: 0, s: "0%", l: "96%" };
      }
      return result;
    },
    calcColors(primaryColor) {
      const threshold = this.colorBrightnessThreshold, primeColor = this.color(primaryColor), filledlightColor = this.lighten(primaryColor, this.colorFilledLight), filledColor = this.darken(primaryColor, this.colorFilled), fontColorForPrimary = this.perceivedBrightness(primaryColor) <= threshold ? "#ffffff" : "#000000", fontColorFilledlight = this.perceivedBrightness(filledlightColor) <= threshold ? "#ffffff" : "#000000", fontColorFilled = this.perceivedBrightness(filledColor) <= threshold ? "#ffffff" : "#000000", filleddarkColor = this.lighten(primaryColor, this.colorFilledDark), fontColorFilleddark = this.perceivedBrightness(filleddarkColor) <= threshold ? "#ffffff" : "#000000";
      return [
        primeColor.hsl.css,
        filledlightColor,
        filledColor,
        fontColorForPrimary,
        fontColorFilledlight,
        fontColorFilled,
        filleddarkColor,
        fontColorFilleddark
      ];
    },
    darken(val, amount) {
      const hsl = this.color(val).hsl, l = parseFloat(hsl.l), lnew = Math.round(l - l * amount) + "%";
      return `hsl(${hsl.h},${hsl.s},${lnew})`;
    },
    lighten(val, amount) {
      const hsl = this.color(val).hsl, l = parseFloat(hsl.l), lnew = Math.round(l + (100 - l) * amount) + "%";
      return `hsl(${hsl.h},${hsl.s},${lnew})`;
    },
    hslToRgb(h, s, l) {
      let r, g, b;
      if (s === 0) {
        r = g = b = l;
      } else {
        let hue2rgb = (p2, q2, t) => {
          if (t < 0) {
            t += 1;
          }
          if (t > 1) {
            t -= 1;
          }
          if (t < 1 / 6) {
            return p2 + (q2 - p2) * 6 * t;
          }
          if (t < 1 / 2) {
            return q2;
          }
          if (t < 2 / 3) {
            return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          }
          return p2;
        };
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    },
    rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      h = Math.round(h * 360);
      s = Math.round(s * 100) + "%";
      l = Math.round(l * 100) + "%";
      return { css: "hsl(" + h + "," + s + "," + l + ")", h, s, l };
    },
    rgbToHex(r, g, b) {
      let red = Number(r).toString(16), green = Number(g).toString(16), blue = Number(b).toString(16);
      if (red.length === 1) {
        red = `0${red}`;
      }
      if (green.length === 1) {
        green = `0${green}`;
      }
      if (blue.length === 1) {
        blue = `0${blue}`;
      }
      return `#${red}${green}${blue}`;
    },
    perceivedBrightness(val) {
      const rgb = this.color(val).rgb;
      return rgb.r / 255 * 0.2126 + rgb.g / 255 * 0.7152 + rgb.b / 255 * 0.0722;
    },
    pOposition(positionshorthand) {
      let result = {};
      let pos = positionshorthand.trim().split(/\s+/);
      let auto = pos.filter((item) => {
        return item.match(/^(down|right|up|left)$/i);
      });
      if (auto.length) {
        result.autoposition = auto[0];
        pos.splice(pos.indexOf(auto[0]), 1);
      }
      let my_at = pos.filter((item) => {
        return item.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i);
      });
      if (my_at.length) {
        result.my = my_at[0];
        result.at = my_at[1] || my_at[0];
        pos.splice(pos.indexOf(my_at[0]), 1);
        if (my_at[1]) {
          pos.splice(pos.indexOf(my_at[1]), 1);
        }
      } else {
        result.my = "center";
        result.at = "center";
      }
      let offsets = pos.filter((item) => {
        return item.match(/^[+-]?\d*\.?\d+[a-z%]*$/i);
      });
      if (offsets.length) {
        result.offsetX = offsets[0].match(/^[+-]?\d*\.?\d+$/i) ? `${offsets[0]}px` : offsets[0];
        if (offsets[1]) {
          result.offsetY = offsets[1].match(/^[+-]?\d*\.?\d+$/i) ? `${offsets[1]}px` : offsets[1];
        } else {
          result.offsetY = result.offsetX;
        }
        pos.splice(pos.indexOf(offsets[0]), 1);
        if (offsets[1]) {
          pos.splice(pos.indexOf(offsets[1]), 1);
        }
      }
      if (pos.length) {
        result.of = pos.join(" ");
      }
      return result;
    },
    position(panel, position) {
      if (!position) {
        panel.style.opacity = 1;
        return panel;
      }
      if (typeof position === "string") {
        position = Object.assign({}, this.defaults.position, this.pOposition(position));
      } else {
        position = Object.assign({}, this.defaults.position, position);
      }
      ["my", "at", "of"].forEach((item) => {
        if (typeof position[item] === "function") {
          position[item] = position[item].call(panel, panel);
        }
      });
      if (panel.options.container === "window") {
        panel.style.position = "fixed";
      }
      if (typeof panel === "string") {
        panel = document.querySelector(panel);
      } else if (Object.getPrototypeOf(panel).jquery) {
        panel = panel[0];
      }
      const container = panel.options.container === "window" ? "window" : panel.parentElement;
      const panelRect = panel.getBoundingClientRect(), containerDomRect = panel.parentElement.getBoundingClientRect(), containerRect = container === "window" ? {
        left: 0,
        top: 0,
        width: document.documentElement.clientWidth,
        height: window.innerHeight
      } : {
        width: containerDomRect.width,
        height: containerDomRect.height,
        left: containerDomRect.left,
        top: containerDomRect.top
      };
      const scaleFactor = container === "window" ? { x: 1, y: 1 } : {
        x: containerRect.width / container.offsetWidth,
        y: containerRect.height / container.offsetHeight
      };
      const containerStyle = container === "window" ? {
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "0px",
        borderLeftWidth: "0px"
      } : window.getComputedStyle(container);
      containerRect.width -= (parseFloat(containerStyle.borderLeftWidth) + parseFloat(containerStyle.borderRightWidth)) * scaleFactor.x;
      containerRect.height -= (parseFloat(containerStyle.borderTopWidth) + parseFloat(containerStyle.borderBottomWidth)) * scaleFactor.y;
      let positionOfRect;
      if (!position.of) {
        positionOfRect = containerRect;
      } else {
        if (typeof position.of === "string") {
          positionOfRect = position.of === "window" ? {
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px"
          } : document.querySelector(position.of).getBoundingClientRect();
        } else if (Object.getPrototypeOf(position.of).jquery) {
          positionOfRect = position.of[0].getBoundingClientRect();
        } else {
          positionOfRect = position.of.getBoundingClientRect();
        }
      }
      let scrollbarwidthsWindow = this.getScrollbarWidth(document.body), scrollbarwidthsContainer = this.getScrollbarWidth(panel.parentElement);
      let left = "0px";
      if (position.my.startsWith("left-")) {
        if (position.at.startsWith("left-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) + "px";
          } else {
            left = "0px";
          }
        } else if (position.at.startsWith("center")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) + positionOfRect.width / 2 + "px";
          } else {
            left = containerRect.width / 2 + "px";
          }
        } else if (position.at.startsWith("right-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) + positionOfRect.width + "px";
          } else {
            left = containerRect.width + "px";
          }
        }
      } else if (position.my.startsWith("center")) {
        if (position.at.startsWith("left-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) - panelRect.width / 2 + "px";
          } else {
            left = -panelRect.width / 2 + "px";
          }
        } else if (position.at.startsWith("center")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) - (panelRect.width - positionOfRect.width) / 2 + "px";
          } else {
            left = containerRect.width / 2 - panelRect.width / 2 + "px";
          }
        } else if (position.at.startsWith("right-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) + (positionOfRect.width - panelRect.width / 2) + "px";
          } else {
            left = containerRect.width - panelRect.width / 2 + "px";
          }
        }
      } else if (position.my.startsWith("right-")) {
        if (position.at.startsWith("left-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) - panelRect.width + "px";
          } else {
            left = -panelRect.width + "px";
          }
        } else if (position.at.startsWith("center")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) - panelRect.width + positionOfRect.width / 2 + "px";
          } else {
            left = containerRect.width / 2 - panelRect.width + "px";
          }
        } else if (position.at.startsWith("right-")) {
          if (position.of) {
            left = positionOfRect.left - containerRect.left - parseFloat(containerStyle.borderLeftWidth) + positionOfRect.width - panelRect.width + "px";
          } else {
            left = containerRect.width - panelRect.width + "px";
          }
          if (container !== "window") {
            left = parseFloat(left) - scrollbarwidthsContainer.y + "px";
          }
        }
      }
      let top = "0px";
      if (position.my.endsWith("-top")) {
        if (position.at.endsWith("-top")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) + "px";
          } else {
            top = "0px";
          }
        } else if (position.at.endsWith("center")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) + positionOfRect.height / 2 + "px";
          } else {
            top = containerRect.height / 2 + "px";
          }
        } else if (position.at.endsWith("-bottom")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) + positionOfRect.height + "px";
          } else {
            top = containerRect.height + "px";
          }
        }
      } else if (position.my.endsWith("center")) {
        if (position.at.endsWith("-top")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height / 2 + "px";
          } else {
            top = -panelRect.height / 2 + "px";
          }
        } else if (position.at.endsWith("center")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height / 2 + positionOfRect.height / 2 + "px";
          } else {
            top = containerRect.height / 2 - panelRect.height / 2 + "px";
          }
        } else if (position.at.endsWith("-bottom")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height / 2 + positionOfRect.height + "px";
          } else {
            top = containerRect.height - panelRect.height / 2 + "px";
          }
        }
      } else if (position.my.endsWith("-bottom")) {
        if (position.at.endsWith("-top")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height + "px";
          } else {
            top = -panelRect.height + "px";
          }
        } else if (position.at.endsWith("center")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height + positionOfRect.height / 2 + "px";
          } else {
            top = containerRect.height / 2 - panelRect.height + "px";
          }
        } else if (position.at.endsWith("-bottom")) {
          if (position.of) {
            top = positionOfRect.top - containerRect.top - parseFloat(containerStyle.borderTopWidth) - panelRect.height + positionOfRect.height + "px";
          } else {
            top = containerRect.height - panelRect.height + "px";
          }
          if (container !== "window") {
            top = parseFloat(top) - scrollbarwidthsContainer.x + "px";
          } else {
            top = parseFloat(top) - scrollbarwidthsWindow.x + "px";
          }
        }
      }
      panel.style.left = scaleFactor.x === 1 ? left : parseFloat(left) / scaleFactor.x + "px";
      panel.style.top = scaleFactor.y === 1 ? top : parseFloat(top) / scaleFactor.y + "px";
      let panelStyle = getComputedStyle(panel);
      let pos = { left: panelStyle.left, top: panelStyle.top };
      if (position.autoposition && position.my === position.at && ["left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom"].indexOf(position.my) >= 0) {
        pos = this.applyPositionAutopos(panel, pos, position);
      }
      if (position.offsetX || position.offsetY) {
        pos = this.applyPositionOffset(panel, pos, position);
      }
      if (position.minLeft || position.minTop || position.maxLeft || position.maxTop) {
        pos = this.applyPositionMinMax(panel, pos, position);
      }
      if (position.modify) {
        pos = this.applyPositionModify(panel, pos, position);
      }
      typeof panel.options.opacity === "number" ? panel.style.opacity = panel.options.opacity : panel.style.opacity = 1;
      return panel;
    },
    applyPositionAutopos(panel, pos, position) {
      const newClass = `${position.my}-${position.autoposition.toLowerCase()}`;
      panel.classList.add(newClass);
      const newClassAll = Array.prototype.slice.call(document.querySelectorAll(`.${newClass}`)), ownIndex = newClassAll.indexOf(panel);
      if (newClassAll.length > 1) {
        switch (position.autoposition) {
          case "down":
            newClassAll.forEach((item, index) => {
              if (index > 0 && index <= ownIndex) {
                pos.top = parseFloat(pos.top) + newClassAll[--index].getBoundingClientRect().height + jsPanel.autopositionSpacing + "px";
              }
            });
            break;
          case "up":
            newClassAll.forEach((item, index) => {
              if (index > 0 && index <= ownIndex) {
                pos.top = parseFloat(pos.top) - newClassAll[--index].getBoundingClientRect().height - jsPanel.autopositionSpacing + "px";
              }
            });
            break;
          case "right":
            newClassAll.forEach((item, index) => {
              if (index > 0 && index <= ownIndex) {
                pos.left = parseFloat(pos.left) + newClassAll[--index].getBoundingClientRect().width + jsPanel.autopositionSpacing + "px";
              }
            });
            break;
          case "left":
            newClassAll.forEach((item, index) => {
              if (index > 0 && index <= ownIndex) {
                pos.left = parseFloat(pos.left) - newClassAll[--index].getBoundingClientRect().width - jsPanel.autopositionSpacing + "px";
              }
            });
            break;
        }
        panel.style.left = pos.left;
        panel.style.top = pos.top;
      }
      return { left: pos.left, top: pos.top };
    },
    applyPositionOffset(panel, pos, position) {
      ["offsetX", "offsetY"].forEach((offset) => {
        if (position[offset]) {
          if (typeof position[offset] === "function") {
            position[offset] = position[offset].call(pos, pos, position);
          }
          if (isNaN(position[offset]) === false) {
            position[offset] = `${position[offset]}px`;
          }
        } else {
          position[offset] = "0px";
        }
      });
      panel.style.left = `calc(${panel.style.left} + ${position.offsetX})`;
      panel.style.top = `calc(${panel.style.top} + ${position.offsetY})`;
      const panelStyle = getComputedStyle(panel);
      return { left: panelStyle.left, top: panelStyle.top };
    },
    applyPositionMinMax(panel, pos, position) {
      ["minLeft", "minTop", "maxLeft", "maxTop"].forEach((val) => {
        if (position[val]) {
          if (typeof position[val] === "function") {
            position[val] = position[val].call(pos, pos, position);
          }
          if (Number.isInteger(position[val]) || position[val].match(/^\d+$/)) {
            position[val] = `${position[val]}px`;
          }
        }
      });
      if (position.minLeft) {
        panel.style.left = position.minLeft;
        let left = getComputedStyle(panel).left;
        if (parseFloat(left) < parseFloat(pos.left)) {
          panel.style.left = pos.left;
        } else {
          pos.left = left;
        }
      }
      if (position.minTop) {
        panel.style.top = position.minTop;
        let top = getComputedStyle(panel).top;
        if (parseFloat(top) < parseFloat(pos.top)) {
          panel.style.top = pos.top;
        } else {
          pos.top = top;
        }
      }
      if (position.maxLeft) {
        panel.style.left = position.maxLeft;
        let left = getComputedStyle(panel).left;
        if (parseFloat(left) > parseFloat(pos.left)) {
          panel.style.left = pos.left;
        } else {
          pos.left = left;
        }
      }
      if (position.maxTop) {
        panel.style.top = position.maxTop;
        let top = getComputedStyle(panel).top;
        if (parseFloat(top) > parseFloat(pos.top)) {
          panel.style.top = pos.top;
        } else {
          pos.top = top;
        }
      }
      const panelStyle = getComputedStyle(panel);
      return { left: panelStyle.left, top: panelStyle.top };
    },
    applyPositionModify(panel, pos, position) {
      if (position.modify && typeof position.modify === "function") {
        const modifiedPosition = position.modify.call(pos, pos, position);
        panel.style.left = Number.isInteger(modifiedPosition.left) || modifiedPosition.left.match(/^\d+$/) ? `${modifiedPosition.left}px` : modifiedPosition.left;
        panel.style.top = Number.isInteger(modifiedPosition.top) || modifiedPosition.top.match(/^\d+$/) ? `${modifiedPosition.top}px` : modifiedPosition.top;
      }
      const panelStyle = getComputedStyle(panel);
      return { left: panelStyle.left, top: panelStyle.top };
    },
    autopositionRemaining(panel) {
      let autoPos, parent = panel.options.container;
      [
        "left-top-down",
        "left-top-right",
        "center-top-down",
        "right-top-down",
        "right-top-left",
        "left-bottom-up",
        "left-bottom-right",
        "center-bottom-up",
        "right-bottom-up",
        "right-bottom-left"
      ].forEach((item) => {
        if (panel.classList.contains(item)) {
          autoPos = item;
        }
      });
      if (autoPos) {
        const box = parent === "window" ? document.body : typeof parent === "string" ? document.querySelector(parent) : parent;
        box.querySelectorAll(`.${autoPos}`).forEach((item) => {
          item.reposition();
        });
      }
    },
    addScript(path, type = "application/javascript", cb) {
      if (!document.querySelector(`script[src="${path}"]`)) {
        const script = document.createElement("script");
        if (cb) {
          script.onload = cb;
        }
        script.src = path;
        script.type = type;
        document.head.appendChild(script);
      }
    },
    ajax(ajaxConfig, panel) {
      let config, urlParts, xhr = new XMLHttpRequest();
      const configDefaults = {
        method: "GET",
        async: true,
        user: "",
        pwd: "",
        done: function() {
          if (panel) {
            let res = jsPanel.strToHtml(this.responseText);
            if (config.urlSelector) {
              res = res.querySelector(config.urlSelector);
            }
            panel.contentRemove();
            panel.content.append(res);
          }
        },
        autoresize: true,
        autoreposition: true
      };
      if (panel && typeof ajaxConfig === "string") {
        config = Object.assign({}, configDefaults, {
          url: ajaxConfig
        });
      } else if (typeof ajaxConfig === "object" && ajaxConfig.url) {
        config = Object.assign({}, configDefaults, ajaxConfig);
        config.url = ajaxConfig.url;
        if (config.async === false) {
          config.timeout = 0;
          if (config.withCredentials) {
            config.withCredentials = void 0;
          }
          if (config.responseType) {
            config.responseType = void 0;
          }
        }
      } else {
        if (this.errorReporting) {
          let err = "XMLHttpRequest seems to miss the <mark>url</mark> parameter!";
          jsPanel.errorpanel(err);
        }
        return;
      }
      urlParts = config.url.trim().split(/\s+/);
      config.url = encodeURI(urlParts[0]);
      if (urlParts.length > 1) {
        urlParts.shift();
        config.urlSelector = urlParts.join(" ");
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            panel ? config.done.call(xhr, xhr, panel) : config.done.call(xhr, xhr);
          } else {
            if (config.fail) {
              panel ? config.fail.call(xhr, xhr, panel) : config.fail.call(xhr, xhr);
            }
          }
          if (config.always) {
            panel ? config.always.call(xhr, xhr, panel) : config.always.call(xhr, xhr);
          }
          if (panel) {
            if (config.autoresize || config.autoreposition) {
              jsPanel.ajaxAutoresizeAutoreposition(panel, config);
            }
          }
          if (jsPanel.ajaxAlwaysCallbacks.length) {
            jsPanel.ajaxAlwaysCallbacks.forEach((item) => {
              panel ? item.call(xhr, xhr, panel) : item.call(xhr, xhr);
            });
          }
        }
      };
      xhr.open(config.method, config.url, config.async, config.user, config.pwd);
      xhr.timeout = config.timeout || 0;
      if (config.withCredentials) {
        xhr.withCredentials = config.withCredentials;
      }
      if (config.responseType) {
        xhr.responseType = config.responseType;
      }
      if (config.beforeSend) {
        panel ? config.beforeSend.call(xhr, xhr, panel) : config.beforeSend.call(xhr, xhr);
      }
      config.data ? xhr.send(config.data) : xhr.send(null);
    },
    ajaxAutoresizeAutoreposition(panel, ajaxOrFetchConfig) {
      const oContentSize = panel.options.contentSize;
      if (typeof oContentSize === "string" && oContentSize.match(/auto/i)) {
        const parts = oContentSize.split(" "), sizes = Object.assign({}, { width: parts[0], height: parts[1] });
        if (ajaxOrFetchConfig.autoresize) {
          panel.resize(sizes);
        }
        if (!panel.classList.contains("jsPanel-contextmenu")) {
          if (ajaxOrFetchConfig.autoreposition) {
            panel.reposition();
          }
        }
      } else if (typeof oContentSize === "object" && (oContentSize.width === "auto" || oContentSize.height === "auto")) {
        const sizes = Object.assign({}, oContentSize);
        if (ajaxOrFetchConfig.autoresize) {
          panel.resize(sizes);
        }
        if (!panel.classList.contains("jsPanel-contextmenu")) {
          if (ajaxOrFetchConfig.autoreposition) {
            panel.reposition();
          }
        }
      }
    },
    createPanelTemplate(dataAttr = true) {
      const panel = document.createElement("div");
      panel.className = "jsPanel";
      panel.style.left = "0";
      panel.style.top = "0";
      if (dataAttr) {
        ["close", "maximize", "normalize", "minimize", "smallify"].forEach((item) => {
          panel.setAttribute(`data-btn${item}`, "enabled");
        });
      }
      panel.innerHTML = `<div class="jsPanel-hdr">
                                <div class="jsPanel-headerbar">
                                    <div class="jsPanel-headerlogo"></div>
                                    <div class="jsPanel-titlebar">
                                        <div class="jsPanel-title"></div>
                                    </div>
                                    <div class="jsPanel-controlbar">
                                        <button type="button" class="jsPanel-btn jsPanel-btn-smallify"  aria-label="Smallify">${this.icons.smallify}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-minimize"  aria-label="Minimize">${this.icons.minimize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-normalize" aria-label="Normalize">${this.icons.normalize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-maximize"  aria-label="Maximize">${this.icons.maximize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-close"     aria-label="Close">${this.icons.close}</button>
                                    </div>
                                </div>
                                <div class="jsPanel-hdr-toolbar"></div>
                            </div>
                            <div class="jsPanel-progressbar">
                                <div class="jsPanel-progressbar-slider"></div>
                            </div>
                            <div class="jsPanel-content"></div>
                            <div class="jsPanel-minimized-box"></div>
                            <div class="jsPanel-ftr"></div>`;
      return panel;
    },
    createMinimizedTemplate() {
      const panel = document.createElement("div");
      panel.className = "jsPanel-replacement";
      panel.innerHTML = `<div class="jsPanel-hdr">
                                <div class="jsPanel-headerbar">
                                    <div class="jsPanel-headerlogo"></div>
                                    <div class="jsPanel-titlebar">
                                        <div class="jsPanel-title"></div>
                                    </div>
                                    <div class="jsPanel-controlbar">
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-normalize" aria-label="Normalize">${this.icons.normalize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-maximize"  aria-label="Maximize">${this.icons.maximize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-close"     aria-label="Close">${this.icons.close}</button>
                                    </div>
                                </div>
                            </div>`;
      return panel;
    },
    createSnapArea(panel, pos, snapsens) {
      const el = document.createElement("div"), parent = panel.parentElement;
      el.className = `jsPanel-snap-area jsPanel-snap-area-${pos}`;
      if (pos === "lt" || pos === "rt" || pos === "rb" || pos === "lb") {
        el.style.width = snapsens + "px";
        el.style.height = snapsens + "px";
      } else if (pos === "ct" || pos === "cb") {
        el.style.height = snapsens + "px";
      } else if (pos === "lc" || pos === "rc") {
        el.style.width = snapsens + "px";
      }
      if (parent !== document.body) {
        el.style.position = "absolute";
      }
      if (!document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${pos}`)) {
        panel.parentElement.appendChild(el);
      }
    },
    emptyNode(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
      return node;
    },
    extend(obj) {
      if (Object.prototype.toString.call(obj) === "[object Object]") {
        for (let ext in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, ext)) {
            this.extensions[ext] = obj[ext];
          }
        }
      }
    },
    fetch(fetchConfig, panel) {
      let config;
      const configDefaults = {
        bodyMethod: "text",
        autoresize: true,
        autoreposition: true,
        done: function(response, panel2) {
          if (panel2) {
            let res = jsPanel.strToHtml(response);
            panel2.contentRemove();
            panel2.content.append(res);
          }
        }
      };
      if (panel && typeof fetchConfig === "string") {
        config = Object.assign({}, configDefaults, {
          resource: encodeURI(fetchConfig)
        });
      } else if (typeof fetchConfig === "object" && fetchConfig.resource) {
        config = Object.assign({}, configDefaults, fetchConfig);
        config.resource = encodeURI(fetchConfig.resource);
      } else {
        if (this.errorReporting) {
          let err = "Fetch Request seems to miss the <mark>resource</mark> parameter!";
          jsPanel.errorpanel(err);
        }
        return;
      }
      const fetchInit = config.fetchInit || {};
      if (config.beforeSend) {
        panel ? config.beforeSend.call(fetchConfig, fetchConfig, panel) : config.beforeSend.call(fetchConfig, fetchConfig);
      }
      fetch(config.resource, fetchInit).then((response) => {
        if (response.ok) {
          return response[config.bodyMethod]();
        }
      }).then((response) => {
        panel ? config.done.call(response, response, panel) : config.done.call(response, response);
        if (panel) {
          if (config.autoresize || config.autoreposition) {
            jsPanel.ajaxAutoresizeAutoreposition(panel, config);
          }
        }
      });
    },
    getPanels(condition = function() {
      return this.classList.contains("jsPanel-standard");
    }) {
      return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter((value) => {
        return condition.call(value, value);
      }).sort((a, b) => {
        return b.style.zIndex - a.style.zIndex;
      });
    },
    pOcontainer(container) {
      if (container === "window") {
        return document.body;
      } else if (typeof container === "string") {
        let list = document.querySelectorAll(container);
        return list.length && list.length > 0 ? list : false;
      } else if (container.nodeType === 1) {
        return container;
      } else if (container.length) {
        return container[0];
      }
      return false;
    },
    pOcontainment(arg) {
      let value = arg;
      if (typeof arg === "function") {
        value = arg();
      }
      if (typeof value === "number") {
        return [value, value, value, value];
      } else if (Array.isArray(value)) {
        if (value.length === 1) {
          return [value[0], value[0], value[0], value[0]];
        } else if (value.length === 2) {
          return value.concat(value);
        } else if (value.length === 3) {
          value[3] = value[1];
        }
      }
      return value;
    },
    pOsize(panel, size) {
      let values = size || this.defaults.contentSize;
      const parent = panel.parentElement;
      if (typeof values === "string") {
        const nums = values.trim().split(" ");
        values = {};
        values.width = nums[0];
        nums.length === 2 ? values.height = nums[1] : values.height = nums[0];
      } else {
        if (values.width && !values.height) {
          values.height = values.width;
        } else if (values.height && !values.width) {
          values.width = values.height;
        }
      }
      if (String(values.width).match(/^[0-9.]+$/gi)) {
        values.width += "px";
      } else if (typeof values.width === "string" && values.width.endsWith("%")) {
        if (parent === document.body) {
          values.width = window.innerWidth * (parseFloat(values.width) / 100) + "px";
        } else {
          const prtStyles = window.getComputedStyle(parent), border = parseFloat(prtStyles.borderLeftWidth) + parseFloat(prtStyles.borderRightWidth);
          values.width = (parseFloat(prtStyles.width) - border) * (parseFloat(values.width) / 100) + "px";
        }
      } else if (typeof values.width === "function") {
        values.width = values.width.call(panel, panel);
        if (typeof values.width === "number") {
          values.width += "px";
        } else if (typeof values.width === "string" && values.width.match(/^[0-9.]+$/gi)) {
          values.width += "px";
        }
      }
      if (String(values.height).match(/^[0-9.]+$/gi)) {
        values.height += "px";
      } else if (typeof values.height === "string" && values.height.endsWith("%")) {
        if (parent === document.body) {
          values.height = window.innerHeight * (parseFloat(values.height) / 100) + "px";
        } else {
          const prtStyles = window.getComputedStyle(parent), border = parseFloat(prtStyles.borderTopWidth) + parseFloat(prtStyles.borderBottomWidth);
          values.height = (parseFloat(prtStyles.height) - border) * (parseFloat(values.height) / 100) + "px";
        }
      } else if (typeof values.height === "function") {
        values.height = values.height.call(panel, panel);
        if (typeof values.height === "number") {
          values.height += "px";
        } else if (typeof values.height === "string" && values.height.match(/^[0-9.]+$/gi)) {
          values.height += "px";
        }
      }
      return values;
    },
    pOborder(border) {
      border = border.trim();
      const values = new Array(3), regexStyle = /\s*(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)\s*/gi, regexWidth = /\s*(thin|medium|thick)|(\d*\.?\d+[a-zA-Z]{2,4})\s*/gi, borderStyle = border.match(regexStyle), borderWidth = border.match(regexWidth);
      if (borderStyle) {
        values[1] = borderStyle[0].trim();
        border = border.replace(values[1], "");
      } else {
        values[1] = "solid";
      }
      if (borderWidth) {
        values[0] = borderWidth[0].trim();
        border = border.replace(values[0], "");
      } else {
        values[0] = "medium";
      }
      values[2] = border.trim();
      return values;
    },
    pOheaderControls(oHdrCtrls) {
      if (typeof oHdrCtrls === "string") {
        let setting = {}, str = oHdrCtrls.toLowerCase(), sizeMatch = str.match(/xl|lg|md|sm|xs/), ctrlMatch = str.match(/closeonly|none/);
        if (sizeMatch) {
          setting.size = sizeMatch[0];
        }
        if (ctrlMatch) {
          setting = Object.assign({}, setting, {
            maximize: "remove",
            normalize: "remove",
            minimize: "remove",
            smallify: "remove"
          });
          if (ctrlMatch[0] === "none") {
            setting.close = "remove";
          }
        }
        return Object.assign({}, this.defaults.headerControls, setting);
      } else {
        return Object.assign({}, this.defaults.headerControls, oHdrCtrls);
      }
    },
    processCallbacks(panel, arg, someOrEvery = "some", param, param2) {
      if (typeof arg === "function") {
        arg = [arg];
      }
      if (someOrEvery) {
        return arg[someOrEvery]((cb) => {
          return cb.call(panel, panel, param, param2);
        });
      } else {
        arg.forEach((cb) => {
          cb.call(panel, panel, param, param2);
        });
      }
    },
    removeSnapAreas() {
      document.querySelectorAll(".jsPanel-snap-area").forEach((el) => {
        el.parentElement.removeChild(el);
      });
    },
    resetZi() {
      this.zi = ((startValue = jsPanel.ziBase) => {
        let val = startValue;
        return {
          next: () => {
            return val++;
          }
        };
      })();
      Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((a, b) => {
        return a.style.zIndex - b.style.zIndex;
      }).forEach((panel) => {
        panel.style.zIndex = jsPanel.zi.next();
      });
    },
    getScrollbarWidth(elmt = document.body) {
      if (elmt === document.body) {
        return {
          y: window.innerWidth - document.documentElement.clientWidth,
          x: window.innerHeight - document.documentElement.clientHeight
        };
      } else {
        let styles = getComputedStyle(elmt);
        return {
          y: elmt.offsetWidth - elmt.clientWidth - parseFloat(styles.borderRightWidth) - parseFloat(styles.borderLeftWidth),
          x: elmt.offsetHeight - elmt.clientHeight - parseFloat(styles.borderBottomWidth) - parseFloat(styles.borderTopWidth)
        };
      }
    },
    remClass(elmt, classnames) {
      classnames.trim().split(/\s+/).forEach((item) => elmt.classList.remove(item));
      return elmt;
    },
    setClass(elmt, classnames) {
      classnames.trim().split(/\s+/).forEach((item) => elmt.classList.add(item));
      return elmt;
    },
    setStyles(elmt, stylesobject) {
      for (let prop in stylesobject) {
        if (prop in elmt.style) {
          elmt.style[prop] = stylesobject[prop];
        } else {
          elmt.style.setProperty(prop, stylesobject[prop]);
        }
      }
      return elmt;
    },
    setStyle(elmt, stylesobject) {
      return this.setStyles.call(elmt, elmt, stylesobject);
    },
    strToHtml(str) {
      return document.createRange().createContextualFragment(str);
    },
    toggleClass(elmt, classnames) {
      classnames.trim().split(/\s+/).forEach((classname) => {
        elmt.classList.contains(classname) ? elmt.classList.remove(classname) : elmt.classList.add(classname);
      });
      return elmt;
    },
    errorpanel(e) {
      this.create({
        paneltype: "error",
        dragit: false,
        resizeit: false,
        theme: {
          bgPanel: "white",
          bgContent: "white",
          colorHeader: "rebeccapurple",
          colorContent: "#333",
          border: "2px solid rebeccapurple"
        },
        borderRadius: ".33rem",
        headerControls: "closeonly xs",
        headerTitle: "&#9888; jsPanel Error",
        contentSize: { width: "50%", height: "auto" },
        position: "center-top 0 5 down",
        animateIn: "jsPanelFadeIn",
        content: `<div class="jsPanel-error-content-separator"></div><p>${e}</p>`
      });
    },
    create(options = {}, cb) {
      if (!jsPanel.zi) {
        jsPanel.zi = ((startValue = jsPanel.ziBase) => {
          let val = startValue;
          return {
            next: () => {
              return val++;
            }
          };
        })();
      }
      if (options.config) {
        options = Object.assign({}, this.defaults, options.config, options);
        delete options.config;
      } else {
        options = Object.assign({}, this.defaults, options);
      }
      if (!options.id) {
        options.id = `jsPanel-${jsPanel.idCounter += 1}`;
      } else if (typeof options.id === "function") {
        options.id = options.id();
      }
      const p = document.getElementById(options.id);
      if (p !== null) {
        if (p.classList.contains("jsPanel")) {
          p.front();
        }
        if (this.errorReporting) {
          let err = `&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${options.id}</mark> already exists in the document.`;
          jsPanel.errorpanel(err);
        }
        return false;
      }
      let panelContainer = this.pOcontainer(options.container);
      if (typeof panelContainer === "object" && panelContainer.length && panelContainer.length > 0) {
        panelContainer = panelContainer[0];
      }
      if (!panelContainer) {
        if (this.errorReporting) {
          let err = "&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist";
          jsPanel.errorpanel(err);
        }
        return false;
      }
      [
        "onbeforeclose",
        "onbeforemaximize",
        "onbeforeminimize",
        "onbeforenormalize",
        "onbeforesmallify",
        "onbeforeunsmallify",
        "onclosed",
        "onfronted",
        "onmaximized",
        "onminimized",
        "onnormalized",
        "onsmallified",
        "onstatuschange",
        "onunsmallified"
      ].forEach((item) => {
        if (options[item]) {
          if (typeof options[item] === "function") {
            options[item] = [options[item]];
          }
        } else {
          options[item] = [];
        }
      });
      const self2 = options.template ? options.template : this.createPanelTemplate();
      self2.options = options;
      self2.closetimer = void 0;
      self2.status = "initialized";
      self2.currentData = {};
      self2.header = self2.querySelector(".jsPanel-hdr");
      self2.headerbar = self2.header.querySelector(".jsPanel-headerbar");
      self2.titlebar = self2.header.querySelector(".jsPanel-titlebar");
      self2.headerlogo = self2.headerbar.querySelector(".jsPanel-headerlogo");
      self2.headertitle = self2.headerbar.querySelector(".jsPanel-title");
      self2.controlbar = self2.headerbar.querySelector(".jsPanel-controlbar");
      self2.headertoolbar = self2.header.querySelector(".jsPanel-hdr-toolbar");
      self2.content = self2.querySelector(".jsPanel-content");
      self2.footer = self2.querySelector(".jsPanel-ftr");
      self2.snappableTo = false;
      self2.snapped = false;
      self2.droppableTo = false;
      self2.progressbar = self2.autocloseProgressbar = self2.querySelector(".jsPanel-progressbar");
      const jspanelloaded = new CustomEvent("jspanelloaded", {
        detail: options.id,
        cancelable: true
      }), jspanelstatuschange = new CustomEvent("jspanelstatuschange", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforenormalize = new CustomEvent("jspanelbeforenormalize", {
        detail: options.id,
        cancelable: true
      }), jspanelnormalized = new CustomEvent("jspanelnormalized", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforemaximize = new CustomEvent("jspanelbeforemaximize", {
        detail: options.id,
        cancelable: true
      }), jspanelmaximized = new CustomEvent("jspanelmaximized", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforeminimize = new CustomEvent("jspanelbeforeminimize", {
        detail: options.id,
        cancelable: true
      }), jspanelminimized = new CustomEvent("jspanelminimized", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforesmallify = new CustomEvent("jspanelbeforesmallify", {
        detail: options.id,
        cancelable: true
      }), jspanelsmallified = new CustomEvent("jspanelsmallified", {
        detail: options.id,
        cancelable: true
      }), jspanelsmallifiedmax = new CustomEvent("jspanelsmallifiedmax", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforeunsmallify = new CustomEvent("jspanelbeforeunsmallify", {
        detail: options.id,
        cancelable: true
      }), jspanelfronted = new CustomEvent("jspanelfronted", {
        detail: options.id,
        cancelable: true
      }), jspanelbeforeclose = new CustomEvent("jspanelbeforeclose", {
        detail: options.id,
        cancelable: true
      }), jspanelclosed = new CustomEvent("jspanelclosed", {
        detail: options.id,
        cancelable: true
      }), jspanelcloseduser = new CustomEvent("jspanelcloseduser", {
        detail: options.id,
        cancelable: true
      });
      [
        jspanelloaded,
        jspanelstatuschange,
        jspanelbeforenormalize,
        jspanelnormalized,
        jspanelbeforemaximize,
        jspanelmaximized,
        jspanelbeforeminimize,
        jspanelminimized,
        jspanelbeforesmallify,
        jspanelsmallified,
        jspanelsmallifiedmax,
        jspanelbeforeunsmallify,
        jspanelfronted,
        jspanelbeforeclose
      ].forEach((evt) => {
        evt.panel = self2;
      });
      const closeBtn = self2.querySelector(".jsPanel-btn-close"), maxBtn = self2.querySelector(".jsPanel-btn-maximize"), normBtn = self2.querySelector(".jsPanel-btn-normalize"), smallBtn = self2.querySelector(".jsPanel-btn-smallify"), minBtn = self2.querySelector(".jsPanel-btn-minimize");
      if (closeBtn) {
        jsPanel.pointerup.forEach((item) => {
          closeBtn.addEventListener(item, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            self2.close(null, true);
          });
        });
      }
      if (maxBtn) {
        jsPanel.pointerup.forEach((item) => {
          maxBtn.addEventListener(item, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            self2.maximize();
          });
        });
      }
      if (normBtn) {
        jsPanel.pointerup.forEach((item) => {
          normBtn.addEventListener(item, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            self2.normalize();
          });
        });
      }
      if (smallBtn) {
        jsPanel.pointerup.forEach((item) => {
          smallBtn.addEventListener(item, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            if (self2.status === "normalized" || self2.status === "maximized") {
              self2.smallify();
            } else if (self2.status === "smallified" || self2.status === "smallifiedmax") {
              self2.unsmallify();
            }
          });
        });
      }
      if (minBtn) {
        jsPanel.pointerup.forEach((item) => {
          minBtn.addEventListener(item, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            self2.minimize();
          });
        });
      }
      let extensions = jsPanel.extensions;
      for (let ext in extensions) {
        if (Object.prototype.hasOwnProperty.call(extensions, ext)) {
          self2[ext] = extensions[ext];
        }
      }
      self2.clearTheme = (cb2) => {
        jsPanel.themes.forEach((value) => {
          ["panel", `jsPanel-theme-${value}`, `panel-${value}`, `${value}-color`].forEach((item) => {
            self2.classList.remove(item);
          });
          self2.header.classList.remove(`jsPanel-theme-${value}`);
        });
        self2.content.classList.remove("jsPanel-content-filled", "jsPanel-content-filledlight");
        self2.header.classList.remove("jsPanel-hdr-light");
        self2.header.classList.remove("jsPanel-hdr-dark");
        self2.style.backgroundColor = "";
        jsPanel.setStyle(self2.headertoolbar, {
          boxShadow: "",
          width: "",
          marginLeft: "",
          borderTopColor: "transparent"
        });
        jsPanel.setStyle(self2.content, {
          background: "",
          borderTopColor: "transparent"
        });
        self2.header.style.background = "";
        Array.prototype.slice.call(self2.controlbar.querySelectorAll(".jsPanel-icon")).concat([self2.headerlogo, self2.headertitle, self2.headertoolbar, self2.content]).forEach((item) => {
          item.style.color = "";
        });
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.getThemeDetails = (th) => {
        const passedTheme = th.toLowerCase(), theme = { color: false, colors: false, filling: false }, step1 = passedTheme.split("fill");
        theme.color = step1[0].trim().replace(/\s*/g, "");
        if (step1.length === 2) {
          if (step1[1].startsWith("edlight")) {
            theme.filling = "filledlight";
          } else if (step1[1].startsWith("eddark")) {
            theme.filling = "filleddark";
          } else if (step1[1].startsWith("ed")) {
            theme.filling = "filled";
          } else if (step1[1].startsWith("color")) {
            let step2 = step1[1].split("color"), fillcolor = step2[step2.length - 1].trim().replace(/\s*/g, "");
            if (jsPanel.colorNames[fillcolor]) {
              fillcolor = jsPanel.colorNames[fillcolor];
            }
            if (fillcolor.match(/^([0-9a-f]{3}|[0-9a-f]{6})$/gi)) {
              fillcolor = "#" + fillcolor;
            }
            theme.filling = fillcolor;
          }
        }
        const builtIn = jsPanel.themes.some((item) => {
          return item === theme.color.split(/\s/i)[0];
        });
        if (builtIn) {
          let baseTheme = theme.color.split(/\s/i)[0], btn = document.createElement("button");
          btn.className = baseTheme + "-bg";
          document.body.appendChild(btn);
          theme.color = getComputedStyle(btn).backgroundColor.replace(/\s+/gi, "");
          document.body.removeChild(btn);
          btn = void 0;
        } else if (theme.color.startsWith("bootstrap-")) {
          let index = theme.color.indexOf("-"), btn = document.createElement("button");
          btn.className = "btn btn" + theme.color.slice(index);
          document.body.appendChild(btn);
          theme.color = getComputedStyle(btn).backgroundColor.replace(/\s+/gi, "");
          document.body.removeChild(btn);
          btn = void 0;
        } else if (theme.color.startsWith("mdb-")) {
          let index = theme.color.indexOf("-") + 1, span = document.createElement("span"), testClass;
          if (theme.color.endsWith("-dark")) {
            testClass = theme.color.slice(index);
            testClass = testClass.replace("-dark", "-color-dark");
          } else {
            testClass = theme.color.slice(index) + "-color";
          }
          span.className = testClass;
          document.body.appendChild(span);
          theme.color = getComputedStyle(span).backgroundColor.replace(/\s+/gi, "");
          document.body.removeChild(span);
          span = void 0;
        }
        theme.colors = jsPanel.calcColors(theme.color);
        return theme;
      };
      self2.applyColorTheme = (themeDetails) => {
        self2.style.backgroundColor = themeDetails.colors[0];
        self2.header.style.backgroundColor = themeDetails.colors[0];
        self2.header.style.color = themeDetails.colors[3];
        [".jsPanel-headerlogo", ".jsPanel-title", ".jsPanel-hdr-toolbar"].forEach((item) => {
          self2.querySelector(item).style.color = themeDetails.colors[3];
        });
        self2.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach((item) => {
          item.style.color = themeDetails.colors[3];
        });
        if (typeof self2.options.theme === "string" && themeDetails.filling === "filled") {
          self2.content.style.borderTop = themeDetails.colors[3] === "#000000" ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.15)";
        }
        if (themeDetails.colors[3] === "#000000") {
          self2.header.classList.add("jsPanel-hdr-light");
        } else {
          self2.header.classList.add("jsPanel-hdr-dark");
        }
        if (themeDetails.filling) {
          switch (themeDetails.filling) {
            case "filled":
              jsPanel.setStyle(self2.content, {
                backgroundColor: themeDetails.colors[2],
                color: themeDetails.colors[3]
              });
              break;
            case "filledlight":
              self2.content.style.backgroundColor = themeDetails.colors[1];
              break;
            case "filleddark":
              jsPanel.setStyle(self2.content, {
                backgroundColor: themeDetails.colors[6],
                color: themeDetails.colors[7]
              });
              break;
            default:
              self2.content.style.backgroundColor = themeDetails.filling;
              self2.content.style.color = jsPanel.perceivedBrightness(themeDetails.filling) <= jsPanel.colorBrightnessThreshold ? "#fff" : "#000";
          }
        }
        return self2;
      };
      self2.applyCustomTheme = (theme) => {
        let defaults2 = {
          bgPanel: "#fff",
          bgContent: "#fff",
          colorHeader: "#000",
          colorContent: "#000"
        }, passedTheme;
        if (typeof theme === "object") {
          passedTheme = Object.assign(defaults2, theme);
        } else {
          passedTheme = defaults2;
        }
        let bgPanel = passedTheme.bgPanel, bgContent = passedTheme.bgContent, colorHeader = passedTheme.colorHeader, colorContent = passedTheme.colorContent;
        jsPanel.colorNames[bgPanel] ? self2.style.background = "#" + jsPanel.colorNames[bgPanel] : self2.style.background = bgPanel;
        if (jsPanel.colorNames[colorHeader]) {
          colorHeader = "#" + jsPanel.colorNames[colorHeader];
        }
        [".jsPanel-headerlogo", ".jsPanel-title", ".jsPanel-hdr-toolbar"].forEach((item) => {
          self2.querySelector(item).style.color = colorHeader;
        });
        self2.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach((item) => {
          item.style.color = colorHeader;
        });
        jsPanel.colorNames[bgContent] ? self2.content.style.background = "#" + jsPanel.colorNames[bgContent] : self2.content.style.background = bgContent;
        jsPanel.colorNames[colorContent] ? self2.content.style.color = "#" + jsPanel.colorNames[colorContent] : self2.content.style.color = colorContent;
        const pbPanel = jsPanel.perceivedBrightness(colorHeader);
        if (pbPanel > jsPanel.colorBrightnessThreshold) {
          self2.header.classList.add("jsPanel-hdr-dark");
        } else {
          self2.header.classList.add("jsPanel-hdr-light");
        }
        const pbContent = jsPanel.perceivedBrightness(colorContent);
        pbContent > jsPanel.colorBrightnessThreshold ? self2.content.style.borderTop = "1px solid rgba(255,255,255,0.15)" : self2.content.style.borderTop = "1px solid rgba(0,0,0,0.15)";
        if (passedTheme.border) {
          let border = passedTheme.border, index = border.lastIndexOf(" "), col = border.slice(++index);
          if (jsPanel.colorNames[col]) {
            border = border.replace(col, "#" + jsPanel.colorNames[col]);
          }
          self2.style.border = border;
        }
        return self2;
      };
      self2.setBorder = (val) => {
        let border = jsPanel.pOborder(val);
        if (!border[2].length) {
          border[2] = self2.style.backgroundColor;
        } else if (jsPanel.colorNames[border[2]]) {
          border[2] = "#" + jsPanel.colorNames[border[2]];
        }
        border = border.join(" ");
        self2.style.border = border;
        self2.options.border = border;
        return self2;
      };
      self2.setBorderRadius = (rad) => {
        if (typeof rad === "number") {
          rad += "px";
        }
        self2.style.borderRadius = rad;
        const br = getComputedStyle(self2);
        if (self2.options.header) {
          self2.header.style.borderTopLeftRadius = br.borderTopLeftRadius;
          self2.header.style.borderTopRightRadius = br.borderTopRightRadius;
        } else {
          self2.content.style.borderTopLeftRadius = br.borderTopLeftRadius;
          self2.content.style.borderTopRightRadius = br.borderTopRightRadius;
        }
        if (self2.options.footerToolbar) {
          self2.footer.style.borderBottomRightRadius = br.borderBottomRightRadius;
          self2.footer.style.borderBottomLeftRadius = br.borderBottomLeftRadius;
        } else {
          self2.content.style.borderBottomRightRadius = br.borderBottomRightRadius;
          self2.content.style.borderBottomLeftRadius = br.borderBottomLeftRadius;
        }
        return self2;
      };
      self2.setTheme = (theme = options.theme, cb2) => {
        let minimized;
        if (self2.status === "minimized") {
          minimized = true;
          self2.normalize();
        }
        self2.clearTheme();
        if (typeof theme === "object") {
          options.border = void 0;
          self2.applyCustomTheme(theme);
        } else {
          if (theme === "none") {
            theme = "white";
          }
          let themeDetails = self2.getThemeDetails(theme);
          self2.applyColorTheme(themeDetails);
        }
        if (minimized) {
          self2.minimize();
        }
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.remove = (id, closedBy, cb2) => {
        self2.parentElement.removeChild(self2);
        if (!document.getElementById(id)) {
          self2.removeMinimizedReplacement();
          self2.status = "closed";
          if (closedBy) {
            document.dispatchEvent(jspanelcloseduser);
          }
          document.dispatchEvent(jspanelclosed);
          if (self2.options.onclosed) {
            jsPanel.processCallbacks(self2, self2.options.onclosed, "every", closedBy);
          }
          jsPanel.autopositionRemaining(self2);
          if (cb2) {
            cb2.call(id, id);
          }
        } else {
          if (cb2) {
            cb2.call(self2, id, self2);
          }
        }
        window.removeEventListener("resize", self2.windowResizeHandler);
        document.removeEventListener("jspanelresize", self2.parentResizeHandler);
      };
      self2.close = (cb2, closedByUser) => {
        if (self2.closetimer) {
          window.clearInterval(self2.closetimer);
        }
        document.dispatchEvent(jspanelbeforeclose);
        self2.statusBefore = self2.status;
        if (self2.options.onbeforeclose && self2.options.onbeforeclose.length > 0 && !jsPanel.processCallbacks(self2, self2.options.onbeforeclose, "some", self2.status, closedByUser)) {
          return self2;
        }
        if (self2.options.animateOut) {
          if (self2.options.animateIn) {
            jsPanel.remClass(self2, self2.options.animateIn);
          }
          jsPanel.setClass(self2, self2.options.animateOut);
          self2.addEventListener("animationend", (e) => {
            e.stopPropagation();
            self2.remove(self2.id, closedByUser, cb2);
          });
        } else {
          self2.remove(self2.id, closedByUser, cb2);
        }
      };
      self2.maximize = (cb2, donotfront) => {
        self2.statusBefore = self2.status;
        if (options.onbeforemaximize && options.onbeforemaximize.length > 0 && !jsPanel.processCallbacks(self2, options.onbeforemaximize, "some", self2.statusBefore)) {
          return self2;
        }
        document.dispatchEvent(jspanelbeforemaximize);
        const parent = self2.parentElement, margins = jsPanel.pOcontainment(options.maximizedMargin);
        if (parent === document.body) {
          self2.style.width = document.documentElement.clientWidth - margins[1] - margins[3] + "px";
          self2.style.height = document.documentElement.clientHeight - margins[0] - margins[2] + "px";
          self2.style.left = margins[3] + "px";
          self2.style.top = margins[0] + "px";
        } else {
          self2.style.width = parent.clientWidth - margins[1] - margins[3] + "px";
          self2.style.height = parent.clientHeight - margins[0] - margins[2] + "px";
          self2.style.left = margins[3] + "px";
          self2.style.top = margins[0] + "px";
        }
        smallBtn.style.transform = "unset";
        self2.removeMinimizedReplacement();
        self2.status = "maximized";
        self2.setControls([".jsPanel-btn-maximize"]);
        if (!donotfront) {
          self2.front();
        }
        document.dispatchEvent(jspanelmaximized);
        document.dispatchEvent(jspanelstatuschange);
        if (options.onstatuschange) {
          jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
        }
        if (cb2) {
          cb2.call(self2, self2, self2.statusBefore);
        }
        if (options.onmaximized) {
          jsPanel.processCallbacks(self2, options.onmaximized, "every", self2.statusBefore);
        }
        return self2;
      };
      self2.minimize = (cb2) => {
        if (self2.status === "minimized") {
          return self2;
        }
        self2.statusBefore = self2.status;
        if (options.onbeforeminimize && options.onbeforeminimize.length > 0 && !jsPanel.processCallbacks(self2, options.onbeforeminimize, "some", self2.statusBefore)) {
          return self2;
        }
        document.dispatchEvent(jspanelbeforeminimize);
        if (!document.getElementById("jsPanel-replacement-container")) {
          const replacementContainer = document.createElement("div");
          replacementContainer.id = "jsPanel-replacement-container";
          document.body.append(replacementContainer);
        }
        self2.style.left = "-9999px";
        self2.status = "minimized";
        document.dispatchEvent(jspanelminimized);
        document.dispatchEvent(jspanelstatuschange);
        if (options.onstatuschange) {
          jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
        }
        if (options.minimizeTo) {
          let replacement = self2.createMinimizedReplacement(), container, parent, list;
          switch (options.minimizeTo) {
            case "default":
              document.getElementById("jsPanel-replacement-container").append(replacement);
              break;
            case "parentpanel":
              parent = self2.closest(".jsPanel-content").parentElement;
              list = parent.querySelectorAll(".jsPanel-minimized-box");
              container = list[list.length - 1];
              container.append(replacement);
              break;
            case "parent":
              parent = self2.parentElement;
              container = parent.querySelector(".jsPanel-minimized-container");
              if (!container) {
                container = document.createElement("div");
                container.className = "jsPanel-minimized-container";
                parent.append(container);
              }
              container.append(replacement);
              break;
            default:
              document.querySelector(options.minimizeTo).append(replacement);
          }
        }
        if (cb2) {
          cb2.call(self2, self2, self2.statusBefore);
        }
        if (options.onminimized) {
          jsPanel.processCallbacks(self2, options.onminimized, "every", self2.statusBefore);
        }
        return self2;
      };
      self2.normalize = (cb2) => {
        if (self2.status === "normalized") {
          return self2;
        }
        self2.statusBefore = self2.status;
        if (options.onbeforenormalize && options.onbeforenormalize.length > 0 && !jsPanel.processCallbacks(self2, options.onbeforenormalize, "some", self2.statusBefore)) {
          return self2;
        }
        document.dispatchEvent(jspanelbeforenormalize);
        self2.style.width = self2.currentData.width;
        self2.style.height = self2.currentData.height;
        if (self2.snapped) {
          self2.snap(self2.snapped, true);
        } else {
          self2.style.left = self2.currentData.left;
          self2.style.top = self2.currentData.top;
        }
        smallBtn.style.transform = "unset";
        self2.removeMinimizedReplacement();
        self2.status = "normalized";
        self2.setControls([".jsPanel-btn-normalize"]);
        self2.front();
        document.dispatchEvent(jspanelnormalized);
        document.dispatchEvent(jspanelstatuschange);
        if (options.onstatuschange) {
          jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
        }
        if (cb2) {
          cb2.call(self2, self2, self2.statusBefore);
        }
        if (options.onnormalized) {
          jsPanel.processCallbacks(self2, options.onnormalized, "every", self2.statusBefore);
        }
        return self2;
      };
      self2.smallify = (cb2) => {
        if (self2.status === "smallified" || self2.status === "smallifiedmax") {
          return self2;
        }
        self2.statusBefore = self2.status;
        if (options.onbeforesmallify && options.onbeforesmallify.length > 0 && !jsPanel.processCallbacks(self2, options.onbeforesmallify, "some", self2.statusBefore)) {
          return self2;
        }
        document.dispatchEvent(jspanelbeforesmallify);
        self2.style.overflow = "hidden";
        const selfStyles = window.getComputedStyle(self2), selfHeaderHeight = parseFloat(window.getComputedStyle(self2.headerbar).height);
        self2.style.height = parseFloat(selfStyles.borderTopWidth) + parseFloat(selfStyles.borderBottomWidth) + selfHeaderHeight + "px";
        smallBtn.style.transform = "rotate(180deg)";
        if (self2.status === "normalized") {
          self2.setControls([".jsPanel-btn-normalize"]);
          self2.status = "smallified";
          document.dispatchEvent(jspanelsmallified);
          document.dispatchEvent(jspanelstatuschange);
          if (options.onstatuschange) {
            jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
          }
        } else if (self2.status === "maximized") {
          self2.setControls([".jsPanel-btn-maximize"]);
          self2.status = "smallifiedmax";
          document.dispatchEvent(jspanelsmallifiedmax);
          document.dispatchEvent(jspanelstatuschange);
          if (options.onstatuschange) {
            jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
          }
        }
        const minBoxes = self2.querySelectorAll(".jsPanel-minimized-box");
        minBoxes[minBoxes.length - 1].style.display = "none";
        if (cb2) {
          cb2.call(self2, self2, self2.statusBefore);
        }
        if (options.onsmallified) {
          jsPanel.processCallbacks(self2, options.onsmallified, "every", self2.statusBefore);
        }
        return self2;
      };
      self2.unsmallify = (cb2) => {
        self2.statusBefore = self2.status;
        if (self2.status === "smallified" || self2.status === "smallifiedmax") {
          if (options.onbeforeunsmallify && options.onbeforeunsmallify.length > 0 && !jsPanel.processCallbacks(self2, options.onbeforeunsmallify, "some", self2.statusBefore)) {
            return self2;
          }
          document.dispatchEvent(jspanelbeforeunsmallify);
          self2.style.overflow = "visible";
          self2.front();
          if (self2.status === "smallified") {
            self2.style.height = self2.currentData.height;
            self2.setControls([".jsPanel-btn-normalize"]);
            self2.status = "normalized";
            document.dispatchEvent(jspanelnormalized);
            document.dispatchEvent(jspanelstatuschange);
            if (options.onstatuschange) {
              jsPanel.processCallbacks(self2, options.onstatuschange, "every", self2.statusBefore);
            }
          } else if (self2.status === "smallifiedmax") {
            self2.maximize();
          } else if (self2.status === "minimized") {
            self2.normalize();
          }
          smallBtn.style.transform = "rotate(0deg)";
          const minBoxes = self2.querySelectorAll(".jsPanel-minimized-box");
          minBoxes[minBoxes.length - 1].style.display = "flex";
          if (cb2) {
            cb2.call(self2, self2, self2.statusBefore);
          }
          if (options.onunsmallified) {
            jsPanel.processCallbacks(self2, options.onunsmallified, "every", self2.statusBefore);
          }
        }
        return self2;
      };
      self2.front = (callback, execOnFrontedCallbacks = true) => {
        if (self2.status === "minimized") {
          self2.statusBefore === "maximized" ? self2.maximize() : self2.normalize();
        } else {
          const newArr = Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map((panel) => {
            return panel.style.zIndex;
          });
          if (Math.max(...newArr) > self2.style.zIndex) {
            self2.style.zIndex = jsPanel.zi.next();
          }
          jsPanel.resetZi();
        }
        document.dispatchEvent(jspanelfronted);
        if (callback) {
          callback.call(self2, self2);
        }
        if (options.onfronted && execOnFrontedCallbacks) {
          jsPanel.processCallbacks(self2, options.onfronted, "every", self2.status);
        }
        return self2;
      };
      self2.snap = (pos, alreadySnapped = false) => {
        if (!alreadySnapped) {
          self2.currentData.beforeSnap = {
            width: self2.currentData.width,
            height: self2.currentData.height
          };
        }
        if (pos && typeof pos === "function" && !alreadySnapped) {
          pos.call(self2, self2, self2.snappableTo);
        } else if (pos !== false) {
          let offsets = [0, 0];
          if (self2.options.dragit.snap.containment) {
            if (self2.options.dragit.containment) {
              const containment = jsPanel.pOcontainment(self2.options.dragit.containment), position = self2.snappableTo;
              if (position.startsWith("left")) {
                offsets[0] = containment[3];
              } else if (position.startsWith("right")) {
                offsets[0] = -containment[1];
              }
              if (position.endsWith("top")) {
                offsets[1] = containment[0];
              } else if (position.endsWith("bottom")) {
                offsets[1] = -containment[2];
              }
            }
          }
          self2.reposition(`${self2.snappableTo} ${offsets[0]} ${offsets[1]}`);
        }
        if (!alreadySnapped) {
          self2.snapped = self2.snappableTo;
        }
      };
      self2.move = (target, cb2) => {
        let overlaps = self2.overlaps(target, "paddingbox"), source = self2.parentElement;
        target.appendChild(self2);
        self2.options.container = target;
        self2.style.left = overlaps.left + "px";
        self2.style.top = overlaps.top + "px";
        self2.saveCurrentDimensions();
        self2.saveCurrentPosition();
        self2.calcSizeFactors();
        if (cb2) {
          cb2.call(self2, self2, target, source);
        }
        return self2;
      };
      self2.closeChildpanels = (cb2) => {
        self2.getChildpanels().forEach((item) => item.close());
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.getChildpanels = (cb2) => {
        const childpanels = self2.content.querySelectorAll(".jsPanel");
        if (cb2) {
          childpanels.forEach((panel, index, list) => {
            cb2.call(panel, panel, index, list);
          });
        }
        return childpanels;
      };
      self2.isChildpanel = (cb2) => {
        const pp = self2.closest(".jsPanel-content"), parentpanel = pp ? pp.parentElement : null;
        if (cb2) {
          cb2.call(self2, self2, parentpanel);
        }
        return pp ? parentpanel : false;
      };
      self2.contentRemove = (cb2) => {
        jsPanel.emptyNode(self2.content);
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.createMinimizedReplacement = () => {
        const tpl = jsPanel.createMinimizedTemplate(), color = window.getComputedStyle(self2.headertitle).color, selfStyles = window.getComputedStyle(self2), font = options.iconfont, controlbar = tpl.querySelector(".jsPanel-controlbar");
        if (self2.options.header !== "auto-show-hide") {
          jsPanel.setStyle(tpl, {
            backgroundColor: selfStyles.backgroundColor,
            backgroundPositionX: selfStyles.backgroundPositionX,
            backgroundPositionY: selfStyles.backgroundPositionY,
            backgroundRepeat: selfStyles.backgroundRepeat,
            backgroundAttachment: selfStyles.backgroundAttachment,
            backgroundImage: selfStyles.backgroundImage,
            backgroundSize: selfStyles.backgroundSize,
            backgroundOrigin: selfStyles.backgroundOrigin,
            backgroundClip: selfStyles.backgroundClip
          });
        } else {
          tpl.style.backgroundColor = window.getComputedStyle(self2.header).backgroundColor;
        }
        tpl.id = self2.id + "-min";
        tpl.querySelector(".jsPanel-headerbar").replaceChild(self2.headerlogo.cloneNode(true), tpl.querySelector(".jsPanel-headerlogo"));
        tpl.querySelector(".jsPanel-titlebar").replaceChild(self2.headertitle.cloneNode(true), tpl.querySelector(".jsPanel-title"));
        tpl.querySelector(".jsPanel-titlebar").setAttribute("title", self2.headertitle.textContent);
        tpl.querySelector(".jsPanel-title").style.color = color;
        controlbar.style.color = color;
        controlbar.querySelectorAll("button").forEach((btn) => {
          btn.style.color = color;
        });
        ["jsPanel-hdr-dark", "jsPanel-hdr-light"].forEach((item) => {
          if (self2.header.classList.contains(item)) {
            tpl.querySelector(".jsPanel-hdr").classList.add(item);
          }
        });
        self2.setIconfont(font, tpl);
        if (self2.dataset.btnnormalize === "enabled") {
          jsPanel.pointerup.forEach((evt) => {
            tpl.querySelector(".jsPanel-btn-normalize").addEventListener(evt, (e) => {
              e.preventDefault();
              if (e.button && e.button > 0) {
                return false;
              }
              self2.normalize();
            });
          });
        } else {
          controlbar.querySelector(".jsPanel-btn-normalize").style.display = "none";
        }
        if (self2.dataset.btnmaximize === "enabled") {
          jsPanel.pointerup.forEach((evt) => {
            tpl.querySelector(".jsPanel-btn-maximize").addEventListener(evt, (e) => {
              e.preventDefault();
              if (e.button && e.button > 0) {
                return false;
              }
              self2.maximize();
            });
          });
        } else {
          controlbar.querySelector(".jsPanel-btn-maximize").style.display = "none";
        }
        if (self2.dataset.btnclose === "enabled") {
          jsPanel.pointerup.forEach((evt) => {
            tpl.querySelector(".jsPanel-btn-close").addEventListener(evt, (e) => {
              e.preventDefault();
              if (e.button && e.button > 0) {
                return false;
              }
              self2.close(null, true);
            });
          });
        } else {
          controlbar.querySelector(".jsPanel-btn-close").style.display = "none";
        }
        return tpl;
      };
      self2.removeMinimizedReplacement = () => {
        const elmt = document.getElementById(`${self2.id}-min`);
        if (elmt) {
          elmt.parentElement.removeChild(elmt);
        }
      };
      self2.drag = (options2 = {}) => {
        let dragstarted, dragElmt, opts;
        const jspaneldragstart = new CustomEvent("jspaneldragstart", { detail: self2.id }), jspaneldrag = new CustomEvent("jspaneldrag", { detail: self2.id }), jspaneldragstop = new CustomEvent("jspaneldragstop", { detail: self2.id });
        [jspaneldragstart, jspaneldrag, jspaneldragstop].forEach((evt) => {
          evt.panel = self2;
        });
        const camelcase = (string) => {
          let str = string.split("-");
          str.forEach((word, index) => {
            str[index] = word.charAt(0).toUpperCase() + word.slice(1);
          });
          return "snap" + str.join("");
        };
        function windowListener(e) {
          if (e.relatedTarget === null) {
            jsPanel.pointermove.forEach((evt) => {
              document.removeEventListener(evt, dragElmt, false);
              self2.style.opacity = 1;
            });
          }
        }
        let handles = options2.handles || jsPanel.defaults.dragit.handles;
        let cursor = options2.cursor || jsPanel.defaults.dragit.cursor;
        function pointerUpHandlerDragit(e) {
          jsPanel.pointermove.forEach((e2) => {
            document.removeEventListener(e2, dragElmt);
          });
          jsPanel.removeSnapAreas();
          if (dragstarted) {
            self2.style.opacity = 1;
            dragstarted = void 0;
            if (opts.snap) {
              switch (self2.snappableTo) {
                case "left-top":
                  self2.snap(opts.snap.snapLeftTop);
                  break;
                case "center-top":
                  self2.snap(opts.snap.snapCenterTop);
                  break;
                case "right-top":
                  self2.snap(opts.snap.snapRightTop);
                  break;
                case "right-center":
                  self2.snap(opts.snap.snapRightCenter);
                  break;
                case "right-bottom":
                  self2.snap(opts.snap.snapRightBottom);
                  break;
                case "center-bottom":
                  self2.snap(opts.snap.snapCenterBottom);
                  break;
                case "left-bottom":
                  self2.snap(opts.snap.snapLeftBottom);
                  break;
                case "left-center":
                  self2.snap(opts.snap.snapLeftCenter);
                  break;
              }
              if (opts.snap.callback && self2.snappableTo && typeof opts.snap.callback === "function") {
                opts.snap.callback.call(self2, self2);
                if (opts.snap.repositionOnSnap && opts.snap[camelcase(self2.snappableTo)] !== false) {
                  self2.repositionOnSnap(self2.snappableTo);
                }
              }
              if (self2.snappableTo && opts.snap.repositionOnSnap && opts.snap[camelcase(self2.snappableTo)]) {
                self2.repositionOnSnap(self2.snappableTo);
              }
            }
            if (self2.droppableTo && self2.droppableTo) {
              let sourceContainer = self2.parentElement;
              self2.move(self2.droppableTo);
              if (opts.drop.callback) {
                opts.drop.callback.call(self2, self2, self2.droppableTo, sourceContainer);
              }
            }
            document.dispatchEvent(jspaneldragstop);
            if (opts.stop.length) {
              let stopStyles = window.getComputedStyle(self2), paneldata = {
                left: parseFloat(stopStyles.left),
                top: parseFloat(stopStyles.top),
                width: parseFloat(stopStyles.width),
                height: parseFloat(stopStyles.height)
              };
              jsPanel.processCallbacks(self2, opts.stop, false, paneldata, e);
            }
            self2.saveCurrentPosition();
            self2.calcSizeFactors();
          }
          self2.controlbar.style.pointerEvents = "inherit";
          self2.content.style.pointerEvents = "inherit";
          document.querySelectorAll("iframe").forEach((frame) => {
            frame.style.pointerEvents = "auto";
          });
          document.removeEventListener(e, pointerUpHandlerDragit);
        }
        self2.querySelectorAll(handles).forEach((handle) => {
          handle.style.touchAction = "none";
          handle.style.cursor = cursor;
          jsPanel.pointerdown.forEach((evt) => {
            handle.addEventListener(evt, (e) => {
              if (e.button && e.button > 0) {
                return false;
              }
              opts = Object.assign({}, jsPanel.defaults.dragit, options2);
              if (opts.disableOnMaximized && self2.status === "maximized") {
                return false;
              }
              if (opts.containment || opts.containment === 0) {
                opts.containment = jsPanel.pOcontainment(opts.containment);
              }
              if (opts.grid) {
                if (Array.isArray(opts.grid)) {
                  if (opts.grid.length === 1) {
                    opts.grid[1] = opts.grid[0];
                  }
                }
              }
              if (opts.snap) {
                if (typeof opts.snap === "object") {
                  opts.snap = Object.assign({}, jsPanel.defaultSnapConfig, opts.snap);
                } else {
                  opts.snap = jsPanel.defaultSnapConfig;
                }
              }
              if (e.target.closest(".jsPanel-ftr-btn")) {
                return;
              }
              self2.controlbar.style.pointerEvents = "none";
              self2.content.style.pointerEvents = "none";
              document.querySelectorAll("iframe").forEach((frame) => {
                frame.style.pointerEvents = "none";
              });
              let startStyles = window.getComputedStyle(self2), startLeft = parseFloat(startStyles.left), startTop = parseFloat(startStyles.top), startWidth = parseFloat(startStyles.width), startHeight = parseFloat(startStyles.height), psx = e.touches ? e.touches[0].clientX : e.clientX, psy = e.touches ? e.touches[0].clientY : e.clientY, parent = self2.parentElement, parentRect = parent.getBoundingClientRect(), parentStyles = window.getComputedStyle(parent), scaleFactor = self2.getScaleFactor(), startLeftCorrection = 0, scrollbarwidths = jsPanel.getScrollbarWidth(parent);
              dragElmt = (e2) => {
                e2.preventDefault();
                if (!dragstarted) {
                  document.dispatchEvent(jspaneldragstart);
                  self2.style.opacity = opts.opacity;
                  if (self2.snapped && opts.snap.resizeToPreSnap && self2.currentData.beforeSnap) {
                    self2.resize(self2.currentData.beforeSnap.width + " " + self2.currentData.beforeSnap.height);
                    self2.setControls([".jsPanel-btn-normalize"]);
                    let intermediateStyles = self2.getBoundingClientRect(), delta = psx - (intermediateStyles.left + intermediateStyles.width), wHalf = intermediateStyles.width / 2;
                    if (delta > -wHalf) {
                      startLeftCorrection = delta + wHalf;
                    }
                  }
                  self2.front();
                  self2.snapped = false;
                  if (self2.status === "maximized") {
                    self2.setControls([".jsPanel-btn-normalize"]);
                    self2.status = "normalized";
                  }
                  if (opts.drop && opts.drop.dropZones) {
                    let dropzones = opts.drop.dropZones.map((zone) => jsPanel.pOcontainer(zone));
                    let dropzonelist = [];
                    dropzones.forEach(function(nodelist) {
                      if (nodelist.length) {
                        nodelist.forEach(function(node) {
                          dropzonelist.push(node);
                        });
                      } else {
                        dropzonelist.push(nodelist);
                      }
                    });
                    dropzonelist = dropzonelist.filter(function(value, index, self3) {
                      return self3.indexOf(value) === index;
                    });
                    opts.drop.dropZones = dropzonelist;
                  }
                  if (opts.start.length) {
                    jsPanel.processCallbacks(self2, opts.start, false, {
                      left: startLeft,
                      top: startTop,
                      width: startWidth,
                      height: startHeight
                    }, e2);
                  }
                }
                dragstarted = 1;
                let elmtL, elmtL2, elmtT, elmtT2, elmtR, elmtR2, elmtB, elmtB2, right, bottom;
                let pmx = e2.touches ? e2.touches[0].clientX : e2.clientX, pmy = e2.touches ? e2.touches[0].clientY : e2.clientY, dragStyles = window.getComputedStyle(self2), overlaps;
                if (parent === document.body) {
                  let elmtRect = self2.getBoundingClientRect();
                  right = window.innerWidth - parseInt(parentStyles.borderLeftWidth, 10) - parseInt(parentStyles.borderRightWidth, 10) - (elmtRect.left + elmtRect.width);
                  bottom = window.innerHeight - parseInt(parentStyles.borderTopWidth, 10) - parseInt(parentStyles.borderBottomWidth, 10) - (elmtRect.top + elmtRect.height);
                } else {
                  right = parseInt(parentStyles.width, 10) - parseInt(parentStyles.borderLeftWidth, 10) - parseInt(parentStyles.borderRightWidth, 10) - (parseInt(dragStyles.left, 10) + parseInt(dragStyles.width, 10));
                  bottom = parseInt(parentStyles.height, 10) - parseInt(parentStyles.borderTopWidth, 10) - parseInt(parentStyles.borderBottomWidth, 10) - (parseInt(dragStyles.top, 10) + parseInt(dragStyles.height, 10));
                }
                elmtL = parseFloat(dragStyles.left);
                elmtT = parseFloat(dragStyles.top);
                elmtR = right;
                elmtB = bottom;
                if (opts.snap) {
                  if (opts.snap.trigger === "panel") {
                    elmtL2 = elmtL ** 2;
                    elmtT2 = elmtT ** 2;
                    elmtR2 = elmtR ** 2;
                    elmtB2 = elmtB ** 2;
                  } else if (opts.snap.trigger === "pointer") {
                    if (self2.options.container === "window") {
                      elmtL = pmx;
                      elmtT = pmy;
                      elmtR = window.innerWidth - pmx;
                      elmtB = window.innerHeight - pmy;
                      elmtL2 = pmx ** 2;
                      elmtT2 = elmtT ** 2;
                      elmtR2 = elmtR ** 2;
                      elmtB2 = elmtB ** 2;
                    } else {
                      overlaps = self2.overlaps(parent, "paddingbox", e2);
                      elmtL = overlaps.pointer.left;
                      elmtT = overlaps.pointer.top;
                      elmtR = overlaps.pointer.right;
                      elmtB = overlaps.pointer.bottom;
                      elmtL2 = overlaps.pointer.left ** 2;
                      elmtT2 = overlaps.pointer.top ** 2;
                      elmtR2 = overlaps.pointer.right ** 2;
                      elmtB2 = overlaps.pointer.bottom ** 2;
                    }
                  }
                }
                let lefttopVectorDrag = Math.sqrt(elmtL2 + elmtT2), leftbottomVectorDrag = Math.sqrt(elmtL2 + elmtB2), righttopVectorDrag = Math.sqrt(elmtR2 + elmtT2), rightbottomVectorDrag = Math.sqrt(elmtR2 + elmtB2), horizontalDeltaDrag = Math.abs(elmtL - elmtR) / 2, verticalDeltaDrag = Math.abs(elmtT - elmtB) / 2, leftVectorDrag = Math.sqrt(elmtL2 + verticalDeltaDrag ** 2), topVectorDrag = Math.sqrt(elmtT2 + horizontalDeltaDrag ** 2), rightVectorDrag = Math.sqrt(elmtR2 + verticalDeltaDrag ** 2), bottomVectorDrag = Math.sqrt(elmtB2 + horizontalDeltaDrag ** 2);
                window.getSelection().removeAllRanges();
                document.dispatchEvent(jspaneldrag);
                if (!opts.axis || opts.axis === "x") {
                  self2.style.left = startLeft + (pmx - psx) / scaleFactor.x + startLeftCorrection + "px";
                }
                if (!opts.axis || opts.axis === "y") {
                  self2.style.top = startTop + (pmy - psy) / scaleFactor.y + "px";
                }
                if (opts.grid) {
                  let grid = opts.grid, axis = opts.axis;
                  let x = grid[0] * Math.round((startLeft + (pmx - psx)) / grid[0]), y = grid[1] * Math.round((startTop + (pmy - psy)) / grid[1]);
                  if (!axis || axis === "x") {
                    self2.style.left = `${x}px`;
                  }
                  if (!axis || axis === "y") {
                    self2.style.top = `${y}px`;
                  }
                }
                if (opts.containment || opts.containment === 0) {
                  let containment = opts.containment;
                  let maxLeft, maxTop;
                  if (self2.options.container === "window") {
                    maxLeft = window.innerWidth - parseFloat(dragStyles.width) - containment[1] - scrollbarwidths.y;
                    maxTop = window.innerHeight - parseFloat(dragStyles.height) - containment[2] - scrollbarwidths.x;
                  } else {
                    let xCorr = parseFloat(parentStyles.borderLeftWidth) + parseFloat(parentStyles.borderRightWidth), yCorr = parseFloat(parentStyles.borderTopWidth) + parseFloat(parentStyles.borderBottomWidth);
                    maxLeft = parentRect.width / scaleFactor.x - parseFloat(dragStyles.width) - containment[1] - xCorr - scrollbarwidths.y;
                    maxTop = parentRect.height / scaleFactor.y - parseFloat(dragStyles.height) - containment[2] - yCorr - scrollbarwidths.x;
                  }
                  if (parseFloat(self2.style.left) <= containment[3]) {
                    self2.style.left = containment[3] + "px";
                  }
                  if (parseFloat(self2.style.top) <= containment[0]) {
                    self2.style.top = containment[0] + "px";
                  }
                  if (parseFloat(self2.style.left) >= maxLeft) {
                    self2.style.left = maxLeft + "px";
                  }
                  if (parseFloat(self2.style.top) >= maxTop) {
                    self2.style.top = maxTop + "px";
                  }
                }
                if (opts.drag.length) {
                  let paneldata = {
                    left: elmtL,
                    top: elmtT,
                    right: elmtR,
                    bottom: elmtB,
                    width: parseFloat(dragStyles.width),
                    height: parseFloat(dragStyles.height)
                  };
                  jsPanel.processCallbacks(self2, opts.drag, false, paneldata, e2);
                }
                if (opts.snap) {
                  let snapSens = opts.snap.sensitivity, topSensAreaLength = parent === document.body ? window.innerWidth / 8 : parentRect.width / 8, sideSensAreaLength = parent === document.body ? window.innerHeight / 8 : parentRect.height / 8;
                  self2.snappableTo = false;
                  jsPanel.removeSnapAreas();
                  if (lefttopVectorDrag < snapSens) {
                    if (opts.snap.snapLeftTop !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "left-top";
                        jsPanel.createSnapArea(self2, "lt", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.left > 0 && overlaps.pointer.top > 0) {
                          self2.snappableTo = "left-top";
                          jsPanel.createSnapArea(self2, "lt", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (leftbottomVectorDrag < snapSens) {
                    if (opts.snap.snapLeftBottom !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "left-bottom";
                        jsPanel.createSnapArea(self2, "lb", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.left > 0 && overlaps.pointer.bottom > 0) {
                          self2.snappableTo = "left-bottom";
                          jsPanel.createSnapArea(self2, "lb", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (righttopVectorDrag < snapSens) {
                    if (opts.snap.snapRightTop !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "right-top";
                        jsPanel.createSnapArea(self2, "rt", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.right > 0 && overlaps.pointer.top > 0) {
                          self2.snappableTo = "right-top";
                          jsPanel.createSnapArea(self2, "rt", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (rightbottomVectorDrag < snapSens) {
                    if (opts.snap.snapRightBottom !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "right-bottom";
                        jsPanel.createSnapArea(self2, "rb", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.right > 0 && overlaps.pointer.bottom > 0) {
                          self2.snappableTo = "right-bottom";
                          jsPanel.createSnapArea(self2, "rb", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (elmtT < snapSens && topVectorDrag < topSensAreaLength) {
                    if (opts.snap.snapCenterTop !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "center-top";
                        jsPanel.createSnapArea(self2, "ct", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.top > 0) {
                          self2.snappableTo = "center-top";
                          jsPanel.createSnapArea(self2, "ct", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (elmtL < snapSens && leftVectorDrag < sideSensAreaLength) {
                    if (opts.snap.snapLeftCenter !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "left-center";
                        jsPanel.createSnapArea(self2, "lc", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.left > 0) {
                          self2.snappableTo = "left-center";
                          jsPanel.createSnapArea(self2, "lc", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (elmtR < snapSens && rightVectorDrag < sideSensAreaLength) {
                    if (opts.snap.snapRightCenter !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "right-center";
                        jsPanel.createSnapArea(self2, "rc", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.right > 0) {
                          self2.snappableTo = "right-center";
                          jsPanel.createSnapArea(self2, "rc", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  } else if (elmtB < snapSens && bottomVectorDrag < topSensAreaLength) {
                    if (opts.snap.snapCenterBottom !== false) {
                      if (!opts.snap.active || opts.snap.active === "both") {
                        self2.snappableTo = "center-bottom";
                        jsPanel.createSnapArea(self2, "cb", snapSens);
                      } else if (opts.snap.trigger === "pointer" && opts.snap.active && opts.snap.active === "inside") {
                        if (overlaps.pointer.bottom > 0) {
                          self2.snappableTo = "center-bottom";
                          jsPanel.createSnapArea(self2, "cb", snapSens);
                        } else {
                          self2.snappableTo = false;
                          jsPanel.removeSnapAreas();
                        }
                      }
                    }
                  }
                }
                if (opts.drop && opts.drop.dropZones) {
                  let elementsFromPoint = jsPanel.isIE ? "msElementsFromPoint" : "elementsFromPoint";
                  let elementsFrom = document[elementsFromPoint](e2.clientX, e2.clientY);
                  if (!Array.isArray(elementsFrom)) {
                    elementsFrom = Array.prototype.slice.call(elementsFrom);
                  }
                  opts.drop.dropZones.forEach((zone) => {
                    if (elementsFrom.includes(zone)) {
                      self2.droppableTo = zone;
                    }
                  });
                  if (!elementsFrom.includes(self2.droppableTo)) {
                    self2.droppableTo = false;
                  }
                }
              };
              jsPanel.pointermove.forEach((e2) => {
                document.addEventListener(e2, dragElmt);
              });
              window.addEventListener("mouseout", windowListener, false);
            });
          });
          jsPanel.pointerup.forEach((event) => {
            document.addEventListener(event, pointerUpHandlerDragit);
            window.removeEventListener("mouseout", windowListener);
          });
          if (options2.disable) {
            handle.style.pointerEvents = "none";
          }
        });
        return self2;
      };
      self2.dragit = (string) => {
        const dragitOptions = Object.assign({}, jsPanel.defaults.dragit, options.dragit), handles = self2.querySelectorAll(dragitOptions.handles);
        if (string === "disable") {
          handles.forEach((handle) => {
            handle.style.pointerEvents = "none";
          });
        } else {
          handles.forEach((handle) => {
            handle.style.pointerEvents = "auto";
          });
        }
        return self2;
      };
      self2.sizeit = (options2 = {}) => {
        const jspanelresizestart = new CustomEvent("jspanelresizestart", { detail: self2.id }), jspanelresize = new CustomEvent("jspanelresize", { detail: self2.id }), jspanelresizestop = new CustomEvent("jspanelresizestop", { detail: self2.id });
        [jspanelresizestart, jspanelresize, jspanelresizestop].forEach((evt) => {
          evt.panel = self2;
        });
        let opts = {}, resizePanel, resizestarted, w, h, startWidth, startHeight;
        opts.handles = options2.handles || jsPanel.defaults.resizeit.handles;
        opts.handles.split(",").forEach((item) => {
          const node = document.createElement("DIV");
          node.className = `jsPanel-resizeit-handle jsPanel-resizeit-${item.trim()}`;
          self2.append(node);
        });
        let cachedOptionAspectRatio = options2.aspectRatio ? options2.aspectRatio : false;
        function windowListener(e) {
          if (e.relatedTarget === null) {
            jsPanel.pointermove.forEach((evt) => {
              document.removeEventListener(evt, resizePanel, false);
            });
          }
        }
        function pointerUpHandlerResizeit(e) {
          jsPanel.pointermove.forEach((evt) => {
            document.removeEventListener(evt, resizePanel, false);
          });
          if (e.target.classList && e.target.classList.contains("jsPanel-resizeit-handle")) {
            let isLeftChange, isTopChange, cl = e.target.className;
            if (cl.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)) {
              isLeftChange = true;
            }
            if (cl.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)) {
              isTopChange = true;
            }
            if (opts.grid && Array.isArray(opts.grid)) {
              if (opts.grid.length === 1) {
                opts.grid[1] = opts.grid[0];
              }
              const cw = parseFloat(self2.style.width), ch = parseFloat(self2.style.height), modW = cw % opts.grid[0], modH = ch % opts.grid[1], cx = parseFloat(self2.style.left), cy = parseFloat(self2.style.top), modX = cx % opts.grid[0], modY = cy % opts.grid[1];
              if (modW < opts.grid[0] / 2) {
                self2.style.width = cw - modW + "px";
              } else {
                self2.style.width = cw + (opts.grid[0] - modW) + "px";
              }
              if (modH < opts.grid[1] / 2) {
                self2.style.height = ch - modH + "px";
              } else {
                self2.style.height = ch + (opts.grid[1] - modH) + "px";
              }
              if (isLeftChange) {
                if (modX < opts.grid[0] / 2) {
                  self2.style.left = cx - modX + "px";
                } else {
                  self2.style.left = cx + (opts.grid[0] - modX) + "px";
                }
              }
              if (isTopChange) {
                if (modY < opts.grid[1] / 2) {
                  self2.style.top = cy - modY + "px";
                } else {
                  self2.style.top = cy + (opts.grid[1] - modY) + "px";
                }
              }
            }
          }
          if (resizestarted) {
            self2.content.style.pointerEvents = "inherit";
            resizestarted = void 0;
            self2.saveCurrentDimensions();
            self2.saveCurrentPosition();
            self2.calcSizeFactors();
            let smallifyBtn = self2.controlbar.querySelector(".jsPanel-btn-smallify");
            let elmtRect = self2.getBoundingClientRect();
            if (smallifyBtn && elmtRect.height > startHeight + 5) {
              smallifyBtn.style.transform = "rotate(0deg)";
            }
            document.dispatchEvent(jspanelresizestop);
            if (opts.stop.length) {
              let stopStyles = window.getComputedStyle(self2), paneldata = {
                left: parseFloat(stopStyles.left),
                top: parseFloat(stopStyles.top),
                width: parseFloat(stopStyles.width),
                height: parseFloat(stopStyles.height)
              };
              jsPanel.processCallbacks(self2, opts.stop, false, paneldata, e);
            }
          }
          self2.content.style.pointerEvents = "inherit";
          document.querySelectorAll("iframe").forEach((frame) => {
            frame.style.pointerEvents = "auto";
          });
          opts.aspectRatio = cachedOptionAspectRatio;
          document.removeEventListener(e, pointerUpHandlerResizeit);
        }
        self2.querySelectorAll(".jsPanel-resizeit-handle").forEach((handle) => {
          handle.style.touchAction = "none";
          jsPanel.pointerdown.forEach((event) => {
            handle.addEventListener(event, (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.button && e.button > 0) {
                return false;
              }
              let factor = 1;
              opts = Object.assign({}, jsPanel.defaults.resizeit, options2);
              if (opts.containment || opts.containment === 0) {
                opts.containment = jsPanel.pOcontainment(opts.containment);
              }
              if (opts.aspectRatio && opts.aspectRatio === true) {
                opts.aspectRatio = "panel";
              }
              if (jsPanel.modifier) {
                let modifier = jsPanel.modifier;
                if (modifier.altKey) {
                  opts.aspectRatio = "content";
                } else if (modifier.ctrlKey) {
                  opts.aspectRatio = "panel";
                } else if (modifier.shiftKey) {
                  opts.aspectRatio = false;
                  factor = 2;
                }
              }
              let maxWidth = typeof opts.maxWidth === "function" ? opts.maxWidth() : opts.maxWidth || 1e4, maxHeight = typeof opts.maxHeight === "function" ? opts.maxHeight() : opts.maxHeight || 1e4, minWidth = typeof opts.minWidth === "function" ? opts.minWidth() : opts.minWidth, minHeight = typeof opts.minHeight === "function" ? opts.minHeight() : opts.minHeight;
              self2.content.style.pointerEvents = "none";
              document.querySelectorAll("iframe").forEach((frame) => {
                frame.style.pointerEvents = "none";
              });
              const elmtParent = self2.parentElement, elmtParentTagName = elmtParent.tagName.toLowerCase(), elmtRect = self2.getBoundingClientRect(), elmtParentRect = elmtParent.getBoundingClientRect(), elmtParentStyles = window.getComputedStyle(elmtParent, null), elmtParentBLW = parseInt(elmtParentStyles.borderLeftWidth, 10), elmtParentBTW = parseInt(elmtParentStyles.borderTopWidth, 10), elmtParentPosition = elmtParentStyles.getPropertyValue("position"), startX = e.clientX || e.clientX === 0 || e.touches[0].clientX, startY = e.clientY || e.clientY === 0 || e.touches[0].clientY, startRatio = startX / startY, resizeHandleClassList = e.target.classList, scaleFactor = self2.getScaleFactor(), aspectRatio = elmtRect.width / elmtRect.height, elmtContentRect = self2.content.getBoundingClientRect(), aspectRatioContent = elmtContentRect.width / elmtContentRect.height, hdrHeight = self2.header.getBoundingClientRect().height, ftrHeight = self2.footer.getBoundingClientRect().height || 0;
              let startLeft = elmtRect.left, startTop = elmtRect.top, maxWidthEast = 1e4, maxWidthWest = 1e4, maxHeightSouth = 1e4, maxHeightNorth = 1e4;
              startWidth = elmtRect.width;
              startHeight = elmtRect.height;
              if (elmtParentTagName !== "body") {
                startLeft = elmtRect.left - elmtParentRect.left + elmtParent.scrollLeft;
                startTop = elmtRect.top - elmtParentRect.top + elmtParent.scrollTop;
              }
              if (elmtParentTagName === "body" && opts.containment) {
                maxWidthEast = document.documentElement.clientWidth - elmtRect.left;
                maxHeightSouth = document.documentElement.clientHeight - elmtRect.top;
                maxWidthWest = elmtRect.width + elmtRect.left;
                maxHeightNorth = elmtRect.height + elmtRect.top;
              } else {
                if (opts.containment) {
                  if (elmtParentPosition === "static") {
                    maxWidthEast = elmtParentRect.width - elmtRect.left + elmtParentBLW;
                    maxHeightSouth = elmtParentRect.height + elmtParentRect.top - elmtRect.top + elmtParentBTW;
                    maxWidthWest = elmtRect.width + (elmtRect.left - elmtParentRect.left) - elmtParentBLW;
                    maxHeightNorth = elmtRect.height + (elmtRect.top - elmtParentRect.top) - elmtParentBTW;
                  } else {
                    maxWidthEast = elmtParent.clientWidth - (elmtRect.left - elmtParentRect.left) / scaleFactor.x + elmtParentBLW;
                    maxHeightSouth = elmtParent.clientHeight - (elmtRect.top - elmtParentRect.top) / scaleFactor.y + elmtParentBTW;
                    maxWidthWest = (elmtRect.width + elmtRect.left - elmtParentRect.left) / scaleFactor.x - elmtParentBLW;
                    maxHeightNorth = self2.clientHeight + (elmtRect.top - elmtParentRect.top) / scaleFactor.y - elmtParentBTW;
                  }
                }
              }
              if (opts.containment) {
                maxWidthWest -= opts.containment[3];
                maxHeightNorth -= opts.containment[0];
                maxWidthEast -= opts.containment[1];
                maxHeightSouth -= opts.containment[2];
              }
              const computedStyle = window.getComputedStyle(self2), wDif = parseFloat(computedStyle.width) - elmtRect.width, hDif = parseFloat(computedStyle.height) - elmtRect.height;
              let xDif = parseFloat(computedStyle.left) - elmtRect.left, yDif = parseFloat(computedStyle.top) - elmtRect.top;
              if (elmtParent !== document.body) {
                xDif += elmtParentRect.left;
                yDif += elmtParentRect.top;
              }
              let borderTopWidth = parseInt(computedStyle.borderTopWidth, 10), borderRightWidth = parseInt(computedStyle.borderRightWidth, 10), borderBottomWidth = parseInt(computedStyle.borderBottomWidth, 10), borderLeftWidth = parseInt(computedStyle.borderLeftWidth, 10);
              resizePanel = (evt) => {
                evt.preventDefault();
                if (!resizestarted) {
                  document.dispatchEvent(jspanelresizestart);
                  if (opts.start.length) {
                    jsPanel.processCallbacks(self2, opts.start, false, {
                      width: startWidth,
                      height: startHeight,
                      left: startLeft,
                      top: startTop
                    }, evt);
                  }
                  self2.front();
                  if (elmtRect.height > startHeight + 5) {
                    self2.status = "normalized";
                    self2.setControls([".jsPanel-btn-normalize"]);
                  }
                }
                resizestarted = 1;
                document.dispatchEvent(jspanelresize);
                let eventX = evt.touches ? evt.touches[0].clientX : evt.clientX, eventY = evt.touches ? evt.touches[0].clientY : evt.clientY, overlaps;
                if (resizeHandleClassList.contains("jsPanel-resizeit-e")) {
                  w = startWidth + (eventX - startX) * factor / scaleFactor.x + wDif;
                  if (w >= maxWidthEast) {
                    w = maxWidthEast;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (factor === 2) {
                    self2.style.left = startLeft - (eventX - startX) + "px";
                  }
                  if (opts.aspectRatio === "content") {
                    self2.style.height = (w - borderRightWidth - borderLeftWidth) / aspectRatioContent + hdrHeight + ftrHeight + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.height = w / aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-s")) {
                  h = startHeight + (eventY - startY) * factor / scaleFactor.y + hDif;
                  if (h >= maxHeightSouth) {
                    h = maxHeightSouth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (factor === 2) {
                    self2.style.top = startTop - (eventY - startY) + "px";
                  }
                  if (opts.aspectRatio === "content") {
                    self2.style.width = (h - hdrHeight - ftrHeight - borderTopWidth - borderBottomWidth) * aspectRatioContent + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.width = h * aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-w")) {
                  w = startWidth + (startX - eventX) * factor / scaleFactor.x + wDif;
                  if (w <= maxWidth && w >= minWidth && w <= maxWidthWest) {
                    self2.style.left = startLeft + (eventX - startX) / scaleFactor.x + xDif + "px";
                  }
                  if (w >= maxWidthWest) {
                    w = maxWidthWest;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (opts.aspectRatio === "content") {
                    self2.style.height = (w - borderRightWidth - borderLeftWidth) / aspectRatioContent + hdrHeight + ftrHeight + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.height = w / aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-n")) {
                  h = startHeight + (startY - eventY) * factor / scaleFactor.y + hDif;
                  if (h <= maxHeight && h >= minHeight && h <= maxHeightNorth) {
                    self2.style.top = startTop + (eventY - startY) / scaleFactor.y + yDif + "px";
                  }
                  if (h >= maxHeightNorth) {
                    h = maxHeightNorth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (opts.aspectRatio === "content") {
                    self2.style.width = (h - hdrHeight - ftrHeight - borderTopWidth - borderBottomWidth) * aspectRatioContent + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.width = h * aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-se")) {
                  w = startWidth + (eventX - startX) * factor / scaleFactor.x + wDif;
                  if (w >= maxWidthEast) {
                    w = maxWidthEast;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (factor === 2) {
                    self2.style.left = startLeft - (eventX - startX) + "px";
                  }
                  if (opts.aspectRatio) {
                    self2.style.height = w / aspectRatio + "px";
                  }
                  h = startHeight + (eventY - startY) * factor / scaleFactor.y + hDif;
                  if (h >= maxHeightSouth) {
                    h = maxHeightSouth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (factor === 2) {
                    self2.style.top = startTop - (eventY - startY) + "px";
                  }
                  if (opts.aspectRatio === "content") {
                    self2.style.width = (h - hdrHeight - ftrHeight - borderTopWidth - borderBottomWidth) * aspectRatioContent + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.width = h * aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-sw")) {
                  h = startHeight + (eventY - startY) * factor / scaleFactor.y + hDif;
                  if (h >= maxHeightSouth) {
                    h = maxHeightSouth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (factor === 2) {
                    self2.style.top = startTop - (eventY - startY) + "px";
                  }
                  if (opts.aspectRatio) {
                    self2.style.width = h * aspectRatio + "px";
                  }
                  w = startWidth + (startX - eventX) * factor / scaleFactor.x + wDif;
                  if (w <= maxWidth && w >= minWidth && w <= maxWidthWest) {
                    self2.style.left = startLeft + (eventX - startX) / scaleFactor.x + xDif + "px";
                  }
                  if (w >= maxWidthWest) {
                    w = maxWidthWest;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (opts.aspectRatio === "content") {
                    self2.style.height = (w - borderRightWidth - borderLeftWidth) / aspectRatioContent + hdrHeight + ftrHeight + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.height = w / aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.bottom <= opts.containment[2]) {
                        self2.style.height = maxHeightSouth + "px";
                        self2.style.width = maxHeightSouth * aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-ne")) {
                  w = startWidth + (eventX - startX) * factor / scaleFactor.x + wDif;
                  if (w >= maxWidthEast) {
                    w = maxWidthEast;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (factor === 2) {
                    self2.style.left = startLeft - (eventX - startX) + "px";
                  }
                  if (opts.aspectRatio) {
                    self2.style.height = w / aspectRatio + "px";
                  }
                  h = startHeight + (startY - eventY) * factor / scaleFactor.y + hDif;
                  if (h <= maxHeight && h >= minHeight && h <= maxHeightNorth) {
                    self2.style.top = startTop + (eventY - startY) / scaleFactor.y + yDif + "px";
                  }
                  if (h >= maxHeightNorth) {
                    h = maxHeightNorth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (opts.aspectRatio === "content") {
                    self2.style.width = (h - hdrHeight - ftrHeight - borderTopWidth - borderBottomWidth) * aspectRatioContent + borderTopWidth + borderBottomWidth + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatioContent + "px";
                      }
                    }
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.width = h * aspectRatio + "px";
                    if (opts.containment) {
                      overlaps = self2.overlaps(elmtParent);
                      if (overlaps.right <= opts.containment[1]) {
                        self2.style.width = maxWidthEast + "px";
                        self2.style.height = maxWidthEast / aspectRatio + "px";
                      }
                    }
                  }
                } else if (resizeHandleClassList.contains("jsPanel-resizeit-nw")) {
                  if (opts.aspectRatio && resizeHandleClassList.contains("jsPanel-resizeit-nw")) {
                    eventX = eventY * startRatio;
                    eventY = eventX / startRatio;
                  }
                  w = startWidth + (startX - eventX) * factor / scaleFactor.x + wDif;
                  if (w <= maxWidth && w >= minWidth && w <= maxWidthWest) {
                    self2.style.left = startLeft + (eventX - startX) / scaleFactor.x + xDif + "px";
                  }
                  if (w >= maxWidthWest) {
                    w = maxWidthWest;
                  }
                  if (w >= maxWidth) {
                    w = maxWidth;
                  }
                  if (w <= minWidth) {
                    w = minWidth;
                  }
                  self2.style.width = w + "px";
                  if (opts.aspectRatio) {
                    self2.style.height = w / aspectRatio + "px";
                  }
                  h = startHeight + (startY - eventY) * factor / scaleFactor.y + hDif;
                  if (h <= maxHeight && h >= minHeight && h <= maxHeightNorth) {
                    self2.style.top = startTop + (eventY - startY) / scaleFactor.y + yDif + "px";
                  }
                  if (h >= maxHeightNorth) {
                    h = maxHeightNorth;
                  }
                  if (h >= maxHeight) {
                    h = maxHeight;
                  }
                  if (h <= minHeight) {
                    h = minHeight;
                  }
                  self2.style.height = h + "px";
                  if (opts.aspectRatio === "content") {
                    self2.style.width = (h - hdrHeight - ftrHeight - borderTopWidth - borderBottomWidth) * aspectRatioContent + borderTopWidth + borderBottomWidth + "px";
                  } else if (opts.aspectRatio === "panel") {
                    self2.style.width = h * aspectRatio + "px";
                  }
                }
                window.getSelection().removeAllRanges();
                const styles = window.getComputedStyle(self2), values = {
                  left: parseFloat(styles.left),
                  top: parseFloat(styles.top),
                  right: parseFloat(styles.right),
                  bottom: parseFloat(styles.bottom),
                  width: parseFloat(styles.width),
                  height: parseFloat(styles.height)
                };
                if (opts.resize.length) {
                  jsPanel.processCallbacks(self2, opts.resize, false, values, evt);
                }
              };
              jsPanel.pointermove.forEach((event2) => {
                document.addEventListener(event2, resizePanel, false);
              });
              window.addEventListener("mouseout", windowListener, false);
            });
          });
          jsPanel.pointerup.forEach(function(event) {
            document.addEventListener(event, pointerUpHandlerResizeit);
            window.removeEventListener("mouseout", windowListener);
          });
          if (options2.disable) {
            handle.style.pointerEvents = "none";
          }
        });
        return self2;
      };
      self2.resizeit = (string) => {
        const handles = self2.querySelectorAll(".jsPanel-resizeit-handle");
        if (string === "disable") {
          handles.forEach((handle) => {
            handle.style.pointerEvents = "none";
          });
        } else {
          handles.forEach((handle) => {
            handle.style.pointerEvents = "auto";
          });
        }
        return self2;
      };
      self2.getScaleFactor = () => {
        const rect = self2.getBoundingClientRect();
        return {
          x: rect.width / self2.offsetWidth,
          y: rect.height / self2.offsetHeight
        };
      };
      self2.calcSizeFactors = () => {
        const styles = window.getComputedStyle(self2);
        if (options.container === "window") {
          self2.hf = parseFloat(styles.left) / (window.innerWidth - parseFloat(styles.width));
          self2.vf = parseFloat(styles.top) / (window.innerHeight - parseFloat(styles.height));
        } else {
          if (self2.parentElement) {
            let parentStyles = self2.parentElement.getBoundingClientRect();
            self2.hf = parseFloat(styles.left) / (parentStyles.width - parseFloat(styles.width));
            self2.vf = parseFloat(styles.top) / (parentStyles.height - parseFloat(styles.height));
          }
        }
      };
      self2.saveCurrentDimensions = (setStyleHeight = false) => {
        const normData = window.getComputedStyle(self2);
        self2.currentData.width = normData.width;
        if (self2.status === "normalized") {
          self2.currentData.height = normData.height;
        }
        if (setStyleHeight) {
          self2.style.height = normData.height;
        }
      };
      self2.saveCurrentPosition = () => {
        const normData = window.getComputedStyle(self2);
        self2.currentData.left = normData.left;
        self2.currentData.top = normData.top;
      };
      self2.reposition = (...params) => {
        let pos = options.position, updateCache2 = true, callback;
        params.forEach((value) => {
          if (typeof value === "string" || typeof value === "object") {
            pos = value;
          } else if (typeof value === "boolean") {
            updateCache2 = value;
          } else if (typeof value === "function") {
            callback = value;
          }
        });
        jsPanel.position(self2, pos);
        if (self2.slaves && self2.slaves.size > 0) {
          self2.slaves.forEach((slave) => {
            slave.reposition();
          });
        }
        if (updateCache2) {
          self2.saveCurrentPosition();
        }
        if (callback) {
          callback.call(self2, self2);
        }
        return self2;
      };
      self2.repositionOnSnap = (pos) => {
        let offsetX = "0", offsetY = "0", margins = jsPanel.pOcontainment(options.dragit.containment);
        if (options.dragit.snap.containment) {
          switch (pos) {
            case "left-top":
              offsetX = margins[3];
              offsetY = margins[0];
              break;
            case "right-top":
              offsetX = -margins[1];
              offsetY = margins[0];
              break;
            case "right-bottom":
              offsetX = -margins[1];
              offsetY = -margins[2];
              break;
            case "left-bottom":
              offsetX = margins[3];
              offsetY = -margins[2];
              break;
            case "center-top":
              offsetX = margins[3] / 2 - margins[1] / 2;
              offsetY = margins[0];
              break;
            case "center-bottom":
              offsetX = margins[3] / 2 - margins[1] / 2;
              offsetY = -margins[2];
              break;
            case "left-center":
              offsetX = margins[3];
              offsetY = margins[0] / 2 - margins[2] / 2;
              break;
            case "right-center":
              offsetX = -margins[1];
              offsetY = margins[0] / 2 - margins[2] / 2;
              break;
          }
        }
        jsPanel.position(self2, pos);
        jsPanel.setStyle(self2, {
          left: `calc(${self2.style.left} + ${offsetX}px)`,
          top: `calc(${self2.style.top} + ${offsetY}px)`
        });
      };
      self2.overlaps = (reference, elmtBox, event) => {
        let panelRect = self2.getBoundingClientRect(), parentStyle = getComputedStyle(self2.parentElement), scaleFactor = self2.getScaleFactor(), parentBorderWidth = { top: 0, right: 0, bottom: 0, left: 0 }, referenceRect, evtX = 0, evtY = 0, evtXparent = 0, evtYparent = 0;
        if (self2.options.container !== "window" && elmtBox === "paddingbox") {
          parentBorderWidth.top = parseInt(parentStyle.borderTopWidth, 10) * scaleFactor.y;
          parentBorderWidth.right = parseInt(parentStyle.borderRightWidth, 10) * scaleFactor.x;
          parentBorderWidth.bottom = parseInt(parentStyle.borderBottomWidth, 10) * scaleFactor.y;
          parentBorderWidth.left = parseInt(parentStyle.borderLeftWidth, 10) * scaleFactor.x;
        }
        if (typeof reference === "string") {
          if (reference === "window") {
            referenceRect = {
              left: 0,
              top: 0,
              right: window.innerWidth,
              bottom: window.innerHeight
            };
          } else if (reference === "parent") {
            referenceRect = self2.parentElement.getBoundingClientRect();
          } else {
            referenceRect = document.querySelector(reference).getBoundingClientRect();
          }
        } else {
          referenceRect = reference.getBoundingClientRect();
        }
        if (event) {
          evtX = event.touches ? event.touches[0].clientX : event.clientX;
          evtY = event.touches ? event.touches[0].clientY : event.clientY;
          evtXparent = evtX - referenceRect.left;
          evtYparent = evtY - referenceRect.top;
        }
        let overlapsX = panelRect.left < referenceRect.right && panelRect.right > referenceRect.left, overlapsY = panelRect.top < referenceRect.bottom && panelRect.bottom > referenceRect.top, overlaps = overlapsX && overlapsY;
        return {
          overlaps,
          top: panelRect.top - referenceRect.top - parentBorderWidth.top,
          right: referenceRect.right - panelRect.right - parentBorderWidth.right,
          bottom: referenceRect.bottom - panelRect.bottom - parentBorderWidth.bottom,
          left: panelRect.left - referenceRect.left - parentBorderWidth.left,
          parentBorderWidth,
          panelRect,
          referenceRect,
          pointer: {
            clientX: evtX,
            clientY: evtY,
            left: evtXparent - parentBorderWidth.left,
            top: evtYparent - parentBorderWidth.top,
            right: referenceRect.width - evtXparent - parentBorderWidth.right,
            bottom: referenceRect.height - evtYparent - parentBorderWidth.bottom
          }
        };
      };
      self2.setSize = () => {
        if (options.panelSize) {
          const values = jsPanel.pOsize(self2, options.panelSize);
          self2.style.width = values.width;
          self2.style.height = values.height;
        } else if (options.contentSize) {
          const values = jsPanel.pOsize(self2, options.contentSize);
          self2.content.style.width = values.width;
          self2.content.style.height = values.height;
          self2.style.width = values.width;
          self2.content.style.width = "100%";
        }
        return self2;
      };
      self2.resize = (...params) => {
        let dimensions = window.getComputedStyle(self2), size = { width: dimensions.width, height: dimensions.height }, updateCache2 = true, callback;
        params.forEach((value) => {
          if (typeof value === "string") {
            size = value;
          } else if (typeof value === "object") {
            size = Object.assign(size, value);
          } else if (typeof value === "boolean") {
            updateCache2 = value;
          } else if (typeof value === "function") {
            callback = value;
          }
        });
        let values = jsPanel.pOsize(self2, size);
        self2.style.width = values.width;
        self2.style.height = values.height;
        if (self2.slaves && self2.slaves.size > 0) {
          self2.slaves.forEach((slave) => {
            slave.reposition();
          });
        }
        if (updateCache2) {
          self2.saveCurrentDimensions();
        }
        self2.status = "normalized";
        let smallifyBtn = self2.controlbar.querySelector(".jsPanel-btn-smallify");
        if (smallifyBtn) {
          smallifyBtn.style.transform = "rotate(0deg)";
        }
        if (callback) {
          callback.call(self2, self2);
        }
        self2.calcSizeFactors();
        return self2;
      };
      self2.windowResizeHandler = (e) => {
        if (e.target === window) {
          let status = self2.status, onWindowResize = options.onwindowresize, left, top;
          if (status === "maximized" && onWindowResize) {
            self2.maximize(false, true);
          } else if (self2.snapped && status !== "minimized") {
            self2.snap(self2.snapped, true);
          } else if (status === "normalized" || status === "smallified" || status === "maximized") {
            if (typeof onWindowResize === "function") {
              onWindowResize.call(self2, e, self2);
            } else {
              left = (window.innerWidth - self2.offsetWidth) * self2.hf;
              self2.style.left = left <= 0 ? 0 : left + "px";
              top = (window.innerHeight - self2.offsetHeight) * self2.vf;
              self2.style.top = top <= 0 ? 0 : top + "px";
            }
          } else if (status === "smallifiedmax" && onWindowResize) {
            self2.maximize(false, true).smallify();
          }
          if (self2.slaves && self2.slaves.size > 0) {
            self2.slaves.forEach((slave) => {
              slave.reposition();
            });
          }
        }
      };
      self2.setControls = (sel, cb2) => {
        self2.header.querySelectorAll(".jsPanel-btn").forEach((item) => {
          const btnClass = item.className.split("-"), btn = btnClass[btnClass.length - 1];
          if (self2.getAttribute(`data-btn${btn}`) !== "hidden") {
            item.style.display = "block";
          }
        });
        sel.forEach((item) => {
          const btn = self2.controlbar.querySelector(item);
          if (btn) {
            btn.style.display = "none";
          }
        });
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setControlStatus = (ctrl, action = "enable", cb2) => {
        const btn = self2.controlbar.querySelector(`.jsPanel-btn-${ctrl}`);
        switch (action) {
          case "disable":
            if (self2.getAttribute(`data-btn${ctrl}`) !== "removed") {
              self2.setAttribute(`data-btn${ctrl}`, "disabled");
              btn.style.pointerEvents = "none";
              btn.style.opacity = 0.4;
              btn.style.cursor = "default";
            }
            break;
          case "hide":
            if (self2.getAttribute(`data-btn${ctrl}`) !== "removed") {
              self2.setAttribute(`data-btn${ctrl}`, "hidden");
              btn.style.display = "none";
            }
            break;
          case "show":
            if (self2.getAttribute(`data-btn${ctrl}`) !== "removed") {
              self2.setAttribute(`data-btn${ctrl}`, "enabled");
              btn.style.display = "block";
              btn.style.pointerEvents = "auto";
              btn.style.opacity = 1;
              btn.style.cursor = "pointer";
            }
            break;
          case "enable":
            if (self2.getAttribute(`data-btn${ctrl}`) !== "removed") {
              if (self2.getAttribute(`data-btn${ctrl}`) === "hidden") {
                btn.style.display = "block";
              }
              self2.setAttribute(`data-btn${ctrl}`, "enabled");
              btn.style.pointerEvents = "auto";
              btn.style.opacity = 1;
              btn.style.cursor = "pointer";
            }
            break;
          case "remove":
            self2.controlbar.removeChild(btn);
            self2.setAttribute(`data-btn${ctrl}`, "removed");
            break;
        }
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setControlSize = (ctrlSize) => {
        const size = ctrlSize.toLowerCase(), icons = self2.controlbar.querySelectorAll(".jsPanel-btn");
        icons.forEach((icon) => {
          ["jsPanel-btn-xl", "jsPanel-btn-lg", "jsPanel-btn-md", "jsPanel-btn-sm", "jsPanel-btn-xs"].forEach((item) => {
            icon.classList.remove(item);
          });
          icon.classList.add(`jsPanel-btn-${size}`);
        });
        if (size === "xl") {
          self2.titlebar.style.fontSize = "1.5rem";
        } else if (size === "lg") {
          self2.titlebar.style.fontSize = "1.25rem";
        } else if (size === "md") {
          self2.titlebar.style.fontSize = "1.05rem";
        } else if (size === "sm") {
          self2.titlebar.style.fontSize = ".9rem";
        } else if (size === "xs") {
          self2.titlebar.style.fontSize = ".8rem";
        }
      };
      self2.setHeaderControls = (cb2) => {
        if (self2.options.headerControls.add) {
          let customControls = self2.options.headerControls.add;
          if (!Array.isArray(customControls)) {
            customControls = [customControls];
          }
          customControls.forEach((ctrl) => {
            self2.addControl(ctrl);
          });
        }
        let controls = [], ctrls = self2.controlbar.querySelectorAll(".jsPanel-btn");
        ctrls.forEach((ctrl) => {
          let match = ctrl.className.match(/jsPanel-btn-[a-z0-9]{3,}/i), ctrlName = match[0].substring(12);
          controls.push(ctrlName);
        });
        const option = jsPanel.pOheaderControls(options.headerControls);
        options.headerControls = option;
        controls.forEach((item) => {
          if (option[item]) {
            self2.setControlStatus(item, option[item]);
          }
        });
        self2.setControlSize(option.size);
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setHeaderLogo = (logo, cb2) => {
        let logos = [self2.headerlogo], minPanel = document.querySelector("#" + self2.id + "-min");
        if (minPanel) {
          logos.push(minPanel.querySelector(".jsPanel-headerlogo"));
        }
        if (typeof logo === "string") {
          if (logo.substr(0, 1) !== "<") {
            logos.forEach((item) => {
              jsPanel.emptyNode(item);
              let img = document.createElement("img");
              img.src = logo;
              item.append(img);
            });
          } else {
            logos.forEach((item) => {
              item.innerHTML = logo;
            });
          }
        } else {
          logos.forEach((item) => {
            jsPanel.emptyNode(item);
            item.append(logo);
          });
        }
        self2.headerlogo.childNodes.forEach((logo2) => {
          if (logo2.nodeName && logo2.nodeName === "IMG") {
            logo2.setAttribute("draggable", "false");
          }
        });
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setHeaderRemove = (cb2) => {
        self2.removeChild(self2.header);
        self2.content.classList.add("jsPanel-content-noheader");
        ["close", "maximize", "normalize", "minimize", "smallify"].forEach((item) => {
          self2.setAttribute(`data-btn${item}`, "removed");
        });
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setHeaderTitle = (hdrTitle, cb2) => {
        let titles = [self2.headertitle], minPanel = document.querySelector("#" + self2.id + "-min");
        if (minPanel) {
          titles.push(minPanel.querySelector(".jsPanel-title"));
        }
        if (typeof hdrTitle === "string") {
          titles.forEach((item) => {
            item.innerHTML = hdrTitle;
          });
        } else if (typeof hdrTitle === "function") {
          titles.forEach((item) => {
            jsPanel.emptyNode(item);
            item.innerHTML = hdrTitle();
          });
        } else {
          titles.forEach((item) => {
            jsPanel.emptyNode(item);
            item.append(hdrTitle);
          });
        }
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.setIconfont = (font, panel = self2, cb2) => {
        if (font) {
          let classArray, textArray;
          if (font === "fa" || font === "far" || font === "fal" || font === "fas" || font === "fad") {
            classArray = [
              `${font} fa-window-close`,
              `${font} fa-window-maximize`,
              `${font} fa-window-restore`,
              `${font} fa-window-minimize`,
              `${font} fa-chevron-up`
            ];
          } else if (font === "material-icons") {
            classArray = [font, font, font, font, font, font];
            textArray = ["close", "fullscreen", "fullscreen_exit", "call_received", "expand_less"];
          } else if (Array.isArray(font)) {
            classArray = [
              `custom-control-icon ${font[4]}`,
              `custom-control-icon ${font[3]}`,
              `custom-control-icon ${font[2]}`,
              `custom-control-icon ${font[1]}`,
              `custom-control-icon ${font[0]}`
            ];
          } else if (font === "bootstrap" || font === "glyphicon") {
            classArray = [
              "glyphicon glyphicon-remove",
              "glyphicon glyphicon-fullscreen",
              "glyphicon glyphicon-resize-full",
              "glyphicon glyphicon-minus",
              "glyphicon glyphicon-chevron-up"
            ];
          } else {
            return panel;
          }
          panel.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach((item) => {
            jsPanel.emptyNode(item).innerHTML = "<span></span>";
          });
          Array.prototype.slice.call(panel.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((item, i2) => {
            item.className = classArray[i2];
            if (font === "material-icons") {
              item.textContent = textArray[i2];
            }
          });
        }
        if (cb2) {
          cb2.call(panel, panel);
        }
        return panel;
      };
      self2.addToolbar = (place, tb, cb2) => {
        if (place === "header") {
          place = self2.headertoolbar;
        } else if (place === "footer") {
          place = self2.footer;
        }
        if (typeof tb === "string") {
          place.innerHTML = tb;
        } else if (Array.isArray(tb)) {
          tb.forEach((item) => {
            if (typeof item === "string") {
              place.innerHTML += item;
            } else {
              place.append(item);
            }
          });
        } else if (typeof tb === "function") {
          let tool = tb.call(self2, self2);
          if (typeof tool === "string") {
            place.innerHTML = tool;
          } else {
            place.append(tool);
          }
        } else {
          place.append(tb);
        }
        place.classList.add("active");
        if (cb2) {
          cb2.call(self2, self2);
        }
        return self2;
      };
      self2.addCloseControl = () => {
        let ctrl = document.createElement("button"), colorContent = self2.content.style.color;
        ctrl.classList.add("jsPanel-addCloseCtrl");
        ctrl.innerHTML = jsPanel.icons.close;
        ctrl.style.color = colorContent;
        if (self2.options.rtl) {
          ctrl.classList.add("rtl");
        }
        self2.appendChild(ctrl);
        jsPanel.pointerup.forEach((evt) => {
          ctrl.addEventListener(evt, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            self2.close(null, true);
          });
        });
        jsPanel.pointerdown.forEach((evt) => {
          ctrl.addEventListener(evt, (e) => {
            e.preventDefault();
          });
        });
        return self2;
      };
      self2.addControl = (obj) => {
        if (!obj.html) {
          return self2;
        }
        if (!obj.position) {
          obj.position = 1;
        }
        const count = self2.controlbar.querySelectorAll(".jsPanel-btn").length;
        let control = document.createElement("button");
        control.innerHTML = obj.html;
        control.className = `jsPanel-btn jsPanel-btn-${obj.name} jsPanel-btn-${options.headerControls.size}`;
        control.style.color = self2.header.style.color;
        if (obj.position > count) {
          self2.controlbar.append(control);
        } else {
          self2.controlbar.insertBefore(control, self2.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${obj.position})`));
        }
        const ariaLabel = obj.ariaLabel || obj.name;
        if (ariaLabel) {
          control.setAttribute("aria-label", ariaLabel);
        }
        jsPanel.pointerup.forEach((evt) => {
          control.addEventListener(evt, (e) => {
            e.preventDefault();
            if (e.button && e.button > 0) {
              return false;
            }
            obj.handler.call(self2, self2, control);
          });
        });
        if (obj.afterInsert) {
          obj.afterInsert.call(control, control);
        }
        return self2;
      };
      self2.setRtl = () => {
        [self2.header, self2.content, self2.footer].forEach((item) => {
          item.dir = "rtl";
          if (options.rtl.lang) {
            item.lang = options.rtl.lang;
          }
        });
      };
      self2.id = options.id;
      self2.classList.add("jsPanel-" + options.paneltype);
      if (options.paneltype === "standard") {
        self2.style.zIndex = this.zi.next();
      }
      panelContainer.append(self2);
      self2.front(false, false);
      self2.setTheme(options.theme);
      if (options.boxShadow) {
        self2.classList.add(`jsPanel-depth-${options.boxShadow}`);
      }
      if (options.header) {
        if (options.headerLogo) {
          self2.setHeaderLogo(options.headerLogo);
        }
        self2.setIconfont(options.iconfont);
        self2.setHeaderTitle(options.headerTitle);
        self2.setHeaderControls();
        if (jsPanel.isIE) {
          let bars = [self2.headerbar, self2.controlbar];
          switch (self2.options.headerControls.size) {
            case "md":
              bars.forEach((bar) => {
                bar.style.height = "34px";
              });
              break;
            case "xs":
              bars.forEach((bar) => {
                bar.style.height = "26px";
              });
              break;
            case "sm":
              bars.forEach((bar) => {
                bar.style.height = "30px";
              });
              break;
            case "lg":
              bars.forEach((bar) => {
                bar.style.height = "38px";
              });
              break;
            case "xl":
              bars.forEach((bar) => {
                bar.style.height = "42px";
              });
              break;
          }
        }
        if (options.header === "auto-show-hide") {
          let boxShadow = "jsPanel-depth-" + options.boxShadow;
          self2.header.style.opacity = 0;
          self2.style.backgroundColor = "transparent";
          this.remClass(self2, boxShadow);
          this.setClass(self2.content, boxShadow);
          self2.header.addEventListener("mouseenter", () => {
            self2.header.style.opacity = 1;
            jsPanel.setClass(self2, boxShadow);
            jsPanel.remClass(self2.content, boxShadow);
          });
          self2.header.addEventListener("mouseleave", () => {
            self2.header.style.opacity = 0;
            jsPanel.remClass(self2, boxShadow);
            jsPanel.setClass(self2.content, boxShadow);
          });
        }
      } else {
        self2.setHeaderRemove();
        if (options.addCloseControl) {
          self2.addCloseControl();
        }
      }
      if (options.headerToolbar) {
        self2.addToolbar(self2.headertoolbar, options.headerToolbar);
      }
      if (options.footerToolbar) {
        self2.addToolbar(self2.footer, options.footerToolbar);
      }
      if (options.border) {
        self2.setBorder(options.border);
      }
      if (options.borderRadius) {
        self2.setBorderRadius(options.borderRadius);
      }
      if (options.content) {
        if (typeof options.content === "function") {
          options.content.call(self2, self2);
        } else if (typeof options.content === "string") {
          self2.content.innerHTML = options.content;
        } else {
          self2.content.append(options.content);
        }
      }
      if (options.contentAjax) {
        this.ajax(options.contentAjax, self2);
      }
      if (options.contentFetch) {
        this.fetch(options.contentFetch, self2);
      }
      if (options.contentOverflow) {
        const value = options.contentOverflow.split(" ");
        if (value.length === 1) {
          self2.content.style.overflow = value[0];
        } else if (value.length === 2) {
          self2.content.style.overflowX = value[0];
          self2.content.style.overflowY = value[1];
        }
      }
      if (options.autoclose) {
        if (typeof options.autoclose === "number") {
          options.autoclose = { time: options.autoclose + "ms" };
        } else if (typeof options.autoclose === "string") {
          options.autoclose = { time: options.autoclose };
        }
        let autoclose = Object.assign({}, jsPanel.defaultAutocloseConfig, options.autoclose);
        if (autoclose.time && typeof autoclose.time === "number") {
          autoclose.time += "ms";
        }
        let slider = self2.progressbar.querySelector("div");
        slider.addEventListener("animationend", (e) => {
          e.stopPropagation();
          self2.progressbar.classList.remove("active");
          self2.close();
        });
        if (autoclose.progressbar) {
          self2.progressbar.classList.add("active");
          if (autoclose.background) {
            if (jsPanel.themes.indexOf(autoclose.background) > -1) {
              self2.progressbar.classList.add(autoclose.background + "-bg");
            } else if (jsPanel.colorNames[autoclose.background]) {
              self2.progressbar.style.background = "#" + jsPanel.colorNames[autoclose.background];
            } else {
              self2.progressbar.style.background = autoclose.background;
            }
          } else {
            self2.progressbar.classList.add("success-bg");
          }
        }
        slider.style.animation = `${autoclose.time} progressbar`;
      }
      if (options.rtl) {
        self2.setRtl();
      }
      self2.setSize();
      self2.status = "normalized";
      if (options.position) {
        this.position(self2, options.position);
      } else {
        self2.style.opacity = 1;
      }
      document.dispatchEvent(jspanelnormalized);
      self2.calcSizeFactors();
      if (options.animateIn) {
        self2.addEventListener("animationend", () => {
          this.remClass(self2, options.animateIn);
        });
        this.setClass(self2, options.animateIn);
      }
      if (options.syncMargins) {
        let containment = this.pOcontainment(options.maximizedMargin);
        if (options.dragit) {
          options.dragit.containment = containment;
          if (options.dragit.snap === true) {
            options.dragit.snap = jsPanel.defaultSnapConfig;
            options.dragit.snap.containment = true;
          } else if (options.dragit.snap) {
            options.dragit.snap.containment = true;
          }
        }
        if (options.resizeit) {
          options.resizeit.containment = containment;
        }
      }
      if (options.dragit) {
        ["start", "drag", "stop"].forEach((item) => {
          if (options.dragit[item]) {
            if (typeof options.dragit[item] === "function") {
              options.dragit[item] = [options.dragit[item]];
            }
          } else {
            options.dragit[item] = [];
          }
        });
        self2.drag(options.dragit);
        self2.addEventListener("jspaneldragstop", (e) => {
          if (e.panel === self2) {
            self2.calcSizeFactors();
          }
        }, false);
      } else {
        self2.titlebar.style.cursor = "default";
      }
      if (options.resizeit) {
        ["start", "resize", "stop"].forEach((item) => {
          if (options.resizeit[item]) {
            if (typeof options.resizeit[item] === "function") {
              options.resizeit[item] = [options.resizeit[item]];
            }
          } else {
            options.resizeit[item] = [];
          }
        });
        self2.sizeit(options.resizeit);
        let startstatus = void 0;
        self2.addEventListener("jspanelresizestart", (e) => {
          if (e.panel === self2) {
            startstatus = self2.status;
          }
        }, false);
        self2.addEventListener("jspanelresizestop", (e) => {
          if (e.panel === self2) {
            if ((startstatus === "smallified" || startstatus === "smallifiedmax" || startstatus === "maximized") && parseFloat(self2.style.height) > parseFloat(window.getComputedStyle(self2.header).height)) {
              self2.setControls([".jsPanel-btn-normalize"]);
              self2.status = "normalized";
              document.dispatchEvent(jspanelnormalized);
              document.dispatchEvent(jspanelstatuschange);
              if (options.onstatuschange) {
                jsPanel.processCallbacks(self2, options.onstatuschange, "every");
              }
              self2.calcSizeFactors();
            }
          }
        }, false);
      }
      self2.saveCurrentDimensions(true);
      self2.saveCurrentPosition();
      if (options.setStatus) {
        if (options.setStatus === "smallifiedmax") {
          self2.maximize().smallify();
        } else if (options.setStatus === "smallified") {
          self2.smallify();
        } else {
          self2[options.setStatus.substr(0, options.setStatus.length - 1)]();
        }
      }
      this.pointerdown.forEach((item) => {
        self2.addEventListener(item, (e) => {
          if (!e.target.closest(".jsPanel-btn-close") && !e.target.closest(".jsPanel-btn-minimize") && options.paneltype === "standard") {
            self2.front();
          }
        }, false);
      });
      if (options.onwindowresize) {
        if (self2.options.container === "window") {
          window.addEventListener("resize", self2.windowResizeHandler, false);
        }
      }
      if (options.onparentresize) {
        let onResize = options.onparentresize, parentPanel = self2.isChildpanel();
        if (parentPanel) {
          const parentContainer = parentPanel.content;
          let parentContainerSize = [];
          self2.parentResizeHandler = (e) => {
            if (e.panel === parentPanel) {
              parentContainerSize[0] = parentContainer.offsetWidth;
              parentContainerSize[1] = parentContainer.offsetHeight;
              let status = self2.status, left, top;
              if (status === "maximized" && onResize) {
                self2.maximize();
              } else if (self2.snapped && status !== "minimized") {
                self2.snap(self2.snapped, true);
              } else if (status === "normalized" || status === "smallified" || status === "maximized") {
                if (typeof onResize === "function") {
                  onResize.call(self2, self2, {
                    width: parentContainerSize[0],
                    height: parentContainerSize[1]
                  });
                } else {
                  left = (parentContainerSize[0] - self2.offsetWidth) * self2.hf;
                  self2.style.left = left <= 0 ? 0 : left + "px";
                  top = (parentContainerSize[1] - self2.offsetHeight) * self2.vf;
                  self2.style.top = top <= 0 ? 0 : top + "px";
                }
              } else if (status === "smallifiedmax" && onResize) {
                self2.maximize().smallify();
              }
            }
          };
          document.addEventListener("jspanelresize", self2.parentResizeHandler, false);
        }
      }
      if (this.globalCallbacks) {
        if (Array.isArray(this.globalCallbacks)) {
          this.globalCallbacks.forEach((item) => {
            item.call(self2, self2);
          });
        } else {
          this.globalCallbacks.call(self2, self2);
        }
      }
      if (options.callback) {
        if (Array.isArray(options.callback)) {
          options.callback.forEach((item) => {
            item.call(self2, self2);
          });
        } else {
          options.callback.call(self2, self2);
        }
      }
      if (cb) {
        cb.call(self2, self2);
      }
      document.dispatchEvent(jspanelloaded);
      return self2;
    }
  };

  // src/vendor/jsPanel4/es6module_p/extensions/datepicker/jspanel.datepicker.js
  var import_localeData = __toModule(require_localeData());
  var import_weekday = __toModule(require_weekday());
  var import_weekOfYear = __toModule(require_weekOfYear());
  if (!jsPanel.datepicker) {
    jsPanel.icons.chevronLeft = `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(6.12323e-17,-1,1,6.12323e-17,0.0375,22.0375)"><path fill="currentColor" d="M2.1,15.2L2.9,16C3.1,16.2 3.4,16.2 3.6,16L11,8.7L18.4,16C18.6,16.2 18.9,16.2 19.1,16L19.9,15.2C20.1,15 20.1,14.7 19.9,14.5L11.3,6C11.1,5.8 10.8,5.8 10.6,6L2.1,14.5C2,14.7 2,15 2.1,15.2Z"/></g></svg>`;
    jsPanel.icons.chevronRight = `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(6.12323e-17,1,-1,6.12323e-17,22.0375,-0.0375)"><path fill="currentColor" d="M2.1,15.2L2.9,16C3.1,16.2 3.4,16.2 3.6,16L11,8.7L18.4,16C18.6,16.2 18.9,16.2 19.1,16L19.9,15.2C20.1,15 20.1,14.7 19.9,14.5L11.3,6C11.1,5.8 10.8,5.8 10.6,6L2.1,14.5C2,14.7 2,15 2.1,15.2Z"/></g></svg>`;
    jsPanel.icons.square = `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(0.0401786,0,0,0.0401786,2,0.714286)"><path fill="currentColor" d="M400,32L48,32C21.5,32 0,53.5 0,80L0,432C0,458.5 21.5,480 48,480L400,480C426.5,480 448,458.5 448,432L448,80C448,53.5 426.5,32 400,32ZM394,432L54,432C50.7,432 48,429.3 48,426L48,86C48,82.7 50.7,80 54,80L394,80C397.3,80 400,82.7 400,86L400,426C400,429.3 397.3,432 394,432Z"/></g></svg>`;
    jsPanel.icons.undo = `<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(2.18687e-18,0.0357143,-0.0357143,2.18687e-18,20.1429,2)"><path fill="currentColor" d="M12,8L39.711,8C46.45,8 51.868,13.548 51.708,20.286L49.361,118.854C93.925,51.834 170.212,7.73 256.793,8.001C393.18,8.428 504.213,120.009 504,256.396C503.786,393.181 392.835,504 256,504C192.074,504 133.798,479.813 89.822,440.092C84.709,435.474 84.468,427.531 89.34,422.659L109.078,402.921C113.576,398.423 120.831,398.136 125.579,402.369C160.213,433.246 205.895,452 256,452C364.322,452 452,364.338 452,256C452,147.678 364.338,60 256,60C176.455,60 108.059,107.282 77.325,175.302L203.714,172.293C210.451,172.133 216,177.55 216,184.29L216,212C216,218.627 210.627,224 204,224L12,224C5.373,224 0,218.627 0,212L0,20C0,13.373 5.373,8 12,8Z"/></g></svg>`;
    jsPanel.datepicker = {
      version: "0.3.2",
      date: "2020-06-19 09:48",
      defaults: {
        locale: "en",
        startdate: void 0,
        months: 1,
        showWeekNumbers: true,
        ondateselect: void 0,
        onrangeselect: void 0,
        onselectionclear: void 0,
        callback: void 0
      },
      keyValue: void 0,
      generateHTML() {
        let wrapper2 = document.createElement("div");
        wrapper2.className = "jsPanel-cal-wrapper";
        wrapper2.innerHTML = `<div class="jsPanel-cal-sub jsPanel-cal-clear" title="Clear all selections">${jsPanel.icons.square}</div>
            <div class="jsPanel-cal-sub jsPanel-cal-back" title="Go back one month">${jsPanel.icons.chevronLeft}</div>
            <div class="jsPanel-cal-sub jsPanel-cal-month"></div>
            <div class="jsPanel-cal-sub jsPanel-cal-forward" title="Go forward one month">${jsPanel.icons.chevronRight}</div>
            <div class="jsPanel-cal-sub jsPanel-cal-reset" title="Reset to current month">${jsPanel.icons.undo}</div>
            <div class="jsPanel-cal-sub jsPanel-cal-blank3"></div>
            <div class="jsPanel-cal-sub day-name day-name-0"></div>
            <div class="jsPanel-cal-sub day-name day-name-1"></div>
            <div class="jsPanel-cal-sub day-name day-name-2"></div>
            <div class="jsPanel-cal-sub day-name day-name-3"></div>
            <div class="jsPanel-cal-sub day-name day-name-4"></div>
            <div class="jsPanel-cal-sub day-name day-name-5"></div>
            <div class="jsPanel-cal-sub day-name day-name-6"></div>`;
        for (let i2 = 0; i2 < 6; i2++) {
          wrapper2.innerHTML += `<div class="jsPanel-cal-sub week week-${i2}"></div>`;
        }
        for (let i2 = 1; i2 < 43; i2++) {
          wrapper2.innerHTML += `<div class="jsPanel-cal-sub day day-${i2}"></div>`;
        }
        return wrapper2;
      },
      fillMonth(datepicker, startdate = src_default()) {
        src_default.extend(import_localeData.default);
        src_default.extend(import_weekday.default);
        src_default.extend(import_weekOfYear.default);
        src_default.locale(datepicker.options.locale);
        let now = src_default(startdate) || src_default(datepicker.options.startdate);
        now.locale(datepicker.options.locale);
        let month = now.month(), firstDay = now.date(1).weekday(), localeData = now.localeData();
        let monthBox = datepicker.querySelector(".jsPanel-cal-month");
        monthBox.innerHTML = now.format("MMMM YYYY");
        monthBox.dataset.date = now.format("YYYY-MM-DD");
        let dayNames = datepicker.querySelectorAll(".jsPanel-cal-sub.day-name"), weekdays = localeData.weekdaysMin();
        if (localeData.firstDayOfWeek() === 1) {
          for (let i2 = 0, j = 1; i2 < 7; i2++, j++) {
            dayNames[i2].textContent = weekdays[j];
          }
          dayNames[6].textContent = weekdays[0];
          dayNames[5].classList.add("weekend");
          dayNames[6].classList.add("weekend");
        } else {
          for (let i2 = 0; i2 < 7; i2++) {
            dayNames[i2].textContent = weekdays[i2];
          }
          dayNames[0].classList.add("weekend");
          dayNames[6].classList.add("weekend");
        }
        let iToday = src_default().weekday();
        let firstEntry = now.subtract(++iToday, "days");
        let days = datepicker.querySelectorAll(".jsPanel-cal-sub.day");
        let value = firstEntry;
        for (let day of days) {
          day.classList.remove("today", "notInMonth", "selected", "range", "remove-border-radius-right", "remove-border-radius-left");
          value = value.add(1, "days");
          day.textContent = value.format("D");
          day.dataset.date = value.format("YYYY-MM-DD");
          if (value.month() !== month) {
            day.classList.add("notInMonth");
          } else if (day.dataset.date === src_default().format("YYYY-MM-DD")) {
            day.classList.add("today");
          }
        }
        if (datepicker.options.showWeekNumbers) {
          datepicker.querySelectorAll(".jsPanel-cal-sub.week").forEach((week, index) => {
            week.textContent = src_default(datepicker.querySelector(`.jsPanel-cal-sub.day-${(index + 1) * 7}`).dataset.date).week();
          });
        }
      },
      deselectAllDays(container) {
        for (let day of container.querySelectorAll(".jsPanel-cal-sub.day")) {
          day.classList.remove("selected", "range", "remove-border-radius-right", "remove-border-radius-left");
        }
      },
      restoreSelections(container) {
        let days = container.querySelectorAll(".jsPanel-cal-sub.day");
        for (let day of days) {
          if (container.selectedDays.has(day.dataset.date)) {
            day.classList.add("selected");
          }
        }
        if (container.selectedRange.size) {
          let rangeIterator = container.selectedRange.values();
          let rangeArray = rangeIterator.next().value.split("/");
          for (let day of days) {
            let date = day.dataset.date;
            if (date >= rangeArray[0] && date <= rangeArray[1]) {
              day.classList.add("selected", "range");
              if (date === rangeArray[0]) {
                day.classList.add("remove-border-radius-right");
              } else if (date === rangeArray[1]) {
                day.classList.add("remove-border-radius-left");
              } else if (date > rangeArray[0] || date < rangeArray[1]) {
                day.classList.add("remove-border-radius-right", "remove-border-radius-left");
              }
            }
          }
        }
      },
      create(container, options = {}) {
        container.style.display = "flex";
        container.selectedDays = new Set();
        container.selectedRange = new Set();
        let opts = Object.assign({}, this.defaults, options);
        let wrapper2;
        for (let i2 = 0; i2 < opts.months; i2++) {
          wrapper2 = this.generateHTML();
          wrapper2.options = opts;
          container.append(wrapper2);
          this.fillMonth(wrapper2, opts.startdate);
          opts.startdate = src_default(opts.startdate).add(1, "months");
        }
        let pickers = container.querySelectorAll(".jsPanel-cal-wrapper");
        for (let picker of pickers) {
          for (let clearbtn of picker.querySelectorAll(".jsPanel-cal-clear")) {
            clearbtn.addEventListener("click", (e) => {
              if (opts.onselectionclear && typeof opts.onselectionclear === "function") {
                opts.onselectionclear.call(container, container, e);
              }
              if (!e.defaultPrevented) {
                jsPanel.datepicker.deselectAllDays(container);
                container.selectedDays.clear();
                container.selectedRange.clear();
              }
            });
          }
          for (let backbtn of picker.querySelectorAll(".jsPanel-cal-back")) {
            backbtn.addEventListener("click", () => {
              for (let picker2 of pickers) {
                let monthshown = picker2.querySelector(".jsPanel-cal-month").dataset.date, monthwanted = src_default(monthshown).subtract(1, "months").format("YYYY-MM");
                jsPanel.datepicker.fillMonth(picker2, monthwanted);
              }
              jsPanel.datepicker.deselectAllDays(container);
              jsPanel.datepicker.restoreSelections(container);
            });
          }
          for (let fwdbtn of picker.querySelectorAll(".jsPanel-cal-forward")) {
            fwdbtn.addEventListener("click", () => {
              for (let picker2 of pickers) {
                let monthshown = picker2.querySelector(".jsPanel-cal-month").dataset.date, monthwanted = src_default(monthshown).add(1, "months").format("YYYY-MM");
                jsPanel.datepicker.fillMonth(picker2, monthwanted);
              }
              jsPanel.datepicker.deselectAllDays(container);
              jsPanel.datepicker.restoreSelections(container);
            });
          }
          for (let resetbtn of picker.querySelectorAll(".jsPanel-cal-reset")) {
            resetbtn.addEventListener("click", (e) => {
              let picker2 = e.target.closest(".jsPanel-cal-wrapper"), counter = 0;
              while (picker2.previousSibling) {
                counter++;
                picker2 = picker2.previousSibling;
              }
              let month = src_default().subtract(counter, "months");
              for (let picker3 of pickers) {
                jsPanel.datepicker.fillMonth(picker3, month);
                month = src_default(month).add(1, "months");
              }
              jsPanel.datepicker.deselectAllDays(container);
              jsPanel.datepicker.restoreSelections(container);
            });
          }
        }
        container.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.target, altKey = e.altKey, ctrlKey = e.ctrlKey, shiftKey = e.shiftKey;
          if (target.classList.contains("day")) {
            let selected = target.classList.contains("selected");
            let date = target.dataset.date;
            if (!ctrlKey && !shiftKey && !altKey) {
              jsPanel.datepicker.deselectAllDays(container);
              container.selectedDays.clear();
              if (selected) {
                target.classList.remove("selected");
              } else {
                target.classList.add("selected");
                container.selectedDays.add(date);
              }
            } else if (!altKey && ctrlKey && !shiftKey) {
              container.selectedRange.clear();
              for (let day of container.querySelectorAll(".day")) {
                if (day.classList.contains("selected") && day.classList.contains("range")) {
                  day.classList.remove("range", "selected");
                }
              }
              if (selected) {
                target.classList.remove("selected");
                container.selectedDays.delete(date);
              } else {
                target.classList.add("selected");
                container.selectedDays.add(date);
              }
            }
            if (opts.ondateselect && typeof opts.ondateselect === "function") {
              opts.ondateselect.call(container, container, date, e);
            }
          }
        });
        let rangeSelectionStarted;
        container.addEventListener("pointerdown", (e) => {
          e.preventDefault();
          const target = e.target, altKey = e.altKey, ctrlKey = e.ctrlKey, shiftKey = e.shiftKey;
          let start = e.target.dataset.date, current = e.target.dataset.date, range = [start, start];
          let calcRange = (e2) => {
            e2.preventDefault();
            rangeSelectionStarted = true;
            if (container.selectedDays.size) {
              container.selectedDays.clear();
            }
            if (e2.target.classList.contains("day")) {
              current = e2.target.dataset.date;
              range = [start, current].sort((a, b) => {
                return src_default(a).unix() - src_default(b).unix();
              });
            }
            for (let day of container.querySelectorAll(".day")) {
              let date = day.dataset.date;
              day.classList.remove("remove-border-radius-right", "remove-border-radius-left");
              if (date < range[0] || date > range[1]) {
                day.classList.remove("selected", "range");
              } else {
                day.classList.add("selected", "range");
                if (date === range[0]) {
                  day.classList.add("remove-border-radius-right");
                } else if (date === range[1]) {
                  day.classList.add("remove-border-radius-left");
                } else if (date > range[0] || date < range[1]) {
                  day.classList.add("remove-border-radius-right", "remove-border-radius-left");
                }
              }
            }
            container.selectedRange.clear();
            container.selectedRange.add(container.querySelector(`.day[data-date="${range[0]}"]`).dataset.date + "/" + container.querySelector(`.day[data-date="${range[1]}"]`).dataset.date);
          };
          if (target.classList.contains("day") && !altKey && !ctrlKey && shiftKey) {
            container.addEventListener("pointermove", calcRange);
            container.addEventListener("pointerup", () => {
              container.removeEventListener("pointermove", calcRange);
            });
          }
        });
        container.addEventListener("pointerup", (e) => {
          if (rangeSelectionStarted) {
            if (opts.onrangeselect && typeof opts.onrangeselect === "function") {
              opts.onrangeselect.call(container, container, container.selectedRange, e);
              rangeSelectionStarted = void 0;
            }
          }
          rangeSelectionStarted = void 0;
        });
        if (opts.callback) {
          opts.callback.call(container, container);
        }
        return container;
      }
    };
    document.addEventListener("keydown", (e) => {
      if (e.key.match(/^[2-9]$/)) {
        jsPanel.datepicker.keyValue = e.key;
      } else if (e.key.match(/^1$/)) {
        jsPanel.datepicker.keyValue = 12;
      }
    });
    document.addEventListener("keyup", () => {
      jsPanel.datepicker.keyValue = void 0;
    });
  }

  // src/vendor/jsPanel4/es6module/extensions/modal/jspanel.modal.min.js
  jsPanel.modal || (jsPanel.modal = { version: "1.2.5", date: "2020-04-26 23:23", defaults: { closeOnEscape: true, closeOnBackdrop: true, dragit: false, headerControls: "closeonly", resizeit: false, syncMargins: false }, addBackdrop(e) {
    let a = document.getElementsByClassName("jsPanel-modal-backdrop").length, n = document.createElement("div");
    return n.id = "jsPanel-modal-backdrop-" + e, a === 0 ? n.className = "jsPanel-modal-backdrop" : a > 0 && (n.className = "jsPanel-modal-backdrop jsPanel-modal-backdrop-multi"), n.style.zIndex = this.ziModal.next(), n;
  }, removeBackdrop(e) {
    let a = document.getElementById(`jsPanel-modal-backdrop-${e}`);
    a.classList.add("jsPanel-modal-backdrop-out");
    let n = 1e3 * parseFloat(getComputedStyle(a).animationDuration);
    window.setTimeout(function() {
      document.body.removeChild(a);
    }, n);
  }, create(e = {}) {
    e.paneltype = "modal", e.id ? typeof e.id == "function" && (e.id = e.id()) : e.id = `jsPanel-${jsPanel.idCounter += 1}`;
    let a = e, n = this.addBackdrop(a.id);
    return e.config && delete (a = Object.assign({}, e.config, e)).config, a = Object.assign({}, this.defaults, a, { container: "window" }), document.body.append(n), jsPanel.create(a, (e2) => {
      e2.style.zIndex = jsPanel.modal.ziModal.next(), e2.header.style.cursor = "default", e2.footer.style.cursor = "default", a.closeOnBackdrop && jsPanel.pointerup.forEach(function(n2) {
        document.getElementById(`jsPanel-modal-backdrop-${a.id}`).addEventListener(n2, function() {
          e2.close(null, true);
        });
      }), e2.options.onclosed.unshift(function() {
        return jsPanel.modal.removeBackdrop(a.id), true;
      });
    });
  } }, jsPanel.modal.ziModal = (() => {
    let e = jsPanel.ziBase + 1e4;
    return { next: function() {
      return e++;
    } };
  })());

  // src/vendor/object-dom/src/base.ts
  var ObjectDom = class {
    constructor() {
      this.update = () => {
      };
      this.onCreate = (_) => {
      };
    }
    renderDom() {
      return renderChild(this.render());
    }
  };
  function renderChild(node) {
    if (node instanceof GlobalDom) {
      return node;
    }
    return renderChild(node.render());
  }
  var GlobalDom = class extends ObjectDom {
    constructor(props) {
      super();
      this.props = props;
      this.attributes = {};
      this.styles = {};
      this._children = [];
      this._events = {};
      this._node = props.node;
      if (props.text)
        this.text = props.text;
      this.children = [...props?.children ?? []];
      if (props.attributes) {
        for (const [key, value] of Object.entries(props.attributes)) {
          this.addAttr(key, value);
        }
      }
      if (props.events) {
        for (const [key, value] of Object.entries(props.events)) {
          this.addEventListener(key, value);
        }
      }
      if (props.styles) {
        for (const [k, v] of Object.entries(props.styles)) {
          this.addStyle(k, v);
        }
      }
    }
    addAttr(key, value) {
      if (value) {
        if (typeof value === "string") {
          this.attributes[key] = new NodeAttr(this, key, value);
        } else if (typeof value === "boolean") {
          this.attributes[key] = new NodeAttr(this, key, value);
        } else if (typeof value === "number") {
          this.attributes[key] = new NodeAttr(this, key, value);
        }
      }
    }
    setAttr(key, value) {
      if (!this.attributes[key]) {
        this.addAttr(key, value);
      }
      this.attributes[key].value = value;
    }
    addStyle(key, value) {
      if (value) {
        if (typeof value === "string") {
          this.styles[key] = new NodeStyle(this, key, value);
        } else if (value) {
          this.styles[key] = value;
        }
      }
    }
    setStyle(key, value) {
      if (!this.styles[key]) {
        this.addStyle(key, value);
      }
      this.styles[key].value = value;
    }
    render() {
      return this;
    }
    get node() {
      const base = generateNode(this);
      return base;
    }
    get children() {
      return this._children;
    }
    set children(value) {
      this._children = value;
      this.update();
    }
    addChild(value, index) {
      const current = this.children;
      if (index) {
        current.splice(index, 0, value);
      } else {
        current.push(value);
      }
      this.children = current;
    }
    removeChild(index) {
      const current = this.children;
      current.splice(index, 1);
      this.children = current;
    }
    get text() {
      return this._text;
    }
    set text(text) {
      this._text = text;
      if (text)
        this._node.innerText = text;
    }
    addEventListener(type, callback, options = void 0) {
      if (!callback)
        return;
      if (!this._events[type])
        this._events[type] = [];
      this._events[type].push({ callback, options });
    }
  };
  function generateNode(source) {
    const result = document.createElement(source._node.tagName);
    if (source.text) {
      result.textContent = source.text;
    }
    for (const child of source.children) {
      if (child instanceof ObjectDom) {
        let childNode = generateNode(child.renderDom());
        child.update = () => {
          const _newNode = generateNode(child.renderDom());
          result?.replaceChild(_newNode, childNode);
          childNode = _newNode;
        };
        result.appendChild(childNode);
      } else {
        result.append(child);
      }
    }
    if (source.styles) {
      for (const [key, val] of Object.entries(source.styles)) {
        result.style.setProperty(convertToPathCase(key), val.value);
      }
    }
    if (source.attributes) {
      for (const [key, value] of Object.entries(source.attributes).filter((n) => n[1].value)) {
        const val = value.value;
        const fixedKey = convertToPathCase(key);
        if (val) {
          if (typeof val === "string") {
            result.setAttribute(fixedKey, val);
          } else if (typeof val === "number") {
            result.setAttribute(fixedKey, `${val}`);
          } else if (typeof val === "boolean" && val) {
            result.setAttribute(fixedKey, fixedKey);
          }
        }
      }
    }
    for (const [type, events] of Object.entries(source._events)) {
      for (const event of events) {
        result.addEventListener(type, event.callback, event.options);
      }
    }
    if (source.props.onCreate) {
      source.props.onCreate(result);
    }
    return result;
  }

  // src/vendor/object-dom/src/dom/utils.ts
  function convertToPathCase(val) {
    return val.split(/(?=[A-Z])/).join("-").toLowerCase();
  }

  // src/vendor/object-dom/src/dom/attrs.ts
  var NodeAttr = class {
    constructor(root, key, value) {
      this._root = root;
      this._key = convertToPathCase(key);
      this._value = value ?? null;
      this.update();
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
      this.update();
    }
    update() {
      if (this.value === null) {
        this.clear();
        return;
      }
      if (typeof this.value === "string") {
        this.node.setAttribute(this._key, this.value);
        this._root.update();
        return;
      }
      if (typeof this.value === "boolean" && this.value) {
        this.node.setAttribute(this._key, this._key);
        this._root.update();
        return;
      }
      if (typeof this.value === "number" && this.value) {
        this.node.setAttribute(this._key, this._key);
        this._root.update();
        return;
      }
    }
    clear() {
      this.node.removeAttribute(this._key);
      this._root.update();
    }
    get node() {
      return this._root.renderDom().node;
    }
  };

  // src/vendor/object-dom/src/dom/styles.ts
  var NodeStyle = class {
    constructor(root, key, value) {
      this._root = root;
      this._key = convertToPathCase(key);
      this._value = value ?? null;
      this.update();
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
      this.update();
    }
    update() {
      if (this.value === null) {
        this.clear();
        return;
      }
      if (typeof this.value === "string") {
        this.node.style.setProperty(this._key, this.value);
        this._root.update();
        return;
      }
    }
    clear() {
      this.node.style.setProperty(this._key, null);
      this._root.update();
    }
    get node() {
      return this._root.renderDom().node;
    }
  };

  // src/vendor/object-dom/src/dom/tags/button.ts
  var Button = class extends GlobalDom {
    constructor(props = {}) {
      super({ node: document.createElement("button"), ...props });
    }
  };

  // src/vendor/object-dom/src/dom/tags/style.ts
  var Style2 = class extends GlobalDom {
    constructor(props = {}) {
      super({ node: document.createElement("style"), ...props });
    }
  };

  // src/vendor/object-dom/src/transformers/render.ts
  function render(source, target = document.body) {
    let node = source.renderDom().node;
    source.update = () => {
      const _newNode = source.renderDom().node;
      target.parentNode?.replaceChild(_newNode, node);
      node = _newNode;
    };
    target.appendChild(node);
  }

  // src/ui.js
  var import_localeData2 = __toModule(require_localeData());
  var import_customParseFormat = __toModule(require_customParseFormat());
  var import_utc = __toModule(require_utc());

  // src/vendor_lib/vanillajs-datepicker/listener-register.js
  var listenerRegistries = new WeakMap();
  function parseType(type, name) {
    const sep = type.indexOf(".");
    return sep < 0 ? [type, typeof name === "string" ? name : void 0] : [type.slice(0, sep), type.slice(sep + 1)];
  }
  function getCaptureVal(opts) {
    return !!(typeof opts === "object" ? opts.capture : opts);
  }
  function examineListener(listener, criteria = {}) {
    if (criteria.name && criteria.name !== listener.name) {
      return false;
    }
    if (criteria.type && criteria.type !== listener.type) {
      return false;
    }
    if (criteria.fn && criteria.fn !== listener.fn) {
      return false;
    }
    if (criteria.capture !== void 0 && criteria.capture !== getCaptureVal(listener.options)) {
      return false;
    }
    return true;
  }
  function register(listeners, target, typeString, rawParams) {
    const params = typeof rawParams[1] === "string" && rawParams[2] === void 0 ? [rawParams[0], void 0, rawParams[1]] : rawParams;
    const [type, name] = parseType(typeString, params[2]);
    const [fn, options] = params;
    target.addEventListener(type, fn, options);
    return [...listeners, { type, fn, options, name }];
  }
  function unregister(listeners, target, typeString, params = void 0) {
    let criteria;
    if (params) {
      const [type, name] = parseType(typeString, params[0]);
      const fn = typeof params[0] === "function" ? params[0] : void 0;
      const capture = fn && !name ? getCaptureVal(params[1]) : void 0;
      criteria = { name, type, fn, capture };
    }
    return listeners.reduce((result, listener) => {
      if (!criteria || examineListener(listener, criteria)) {
        target.removeEventListener(listener.type, listener.fn, listener.options);
      } else {
        result.push(listener);
      }
      return result;
    }, []);
  }
  function performAdd(listeners, target, entry) {
    const types = entry[0].split(" ");
    const params = entry.slice(1);
    return types.length > 1 ? types.reduce((result, typeStr) => register(result, target, typeStr, params), listeners) : register(listeners, target, types[0], params);
  }
  function performRemove(listeners, target, entry) {
    const params = entry.slice(1);
    return entry[0].split(" ").reduce((result, typeStr) => unregister(result, target, typeStr, params), listeners);
  }
  function addListener(target, type, listener, options = void 0, name = void 0) {
    let listeners = listenerRegistries.get(target) || [];
    if (typeof type === "string") {
      listeners = performAdd(listeners, target, [type, listener, options, name]);
    } else if (Array.isArray(type)) {
      listeners = type.reduce((result, entry) => performAdd(result, target, entry), listeners);
    } else {
      listeners = Object.entries(type).reduce((result, entry) => performAdd(result, target, entry), listeners);
    }
    listenerRegistries.set(target, listeners);
  }
  function removeListener(target, type = void 0, listener = void 0, options = void 0) {
    let listeners = listenerRegistries.get(target);
    if (!listeners) {
      return;
    }
    if (type === void 0) {
      listeners = unregister(listeners, target);
    } else if (typeof type === "string") {
      listeners = performRemove(listeners, target, [type, listener, options]);
    } else if (Array.isArray(type)) {
      listeners = type.reduce((result, entry) => {
        return performRemove(result, target, Array.isArray(entry) ? entry : [entry]);
      }, listeners);
    } else {
      listeners = Object.entries(type).reduce((result, entry) => performRemove(result, target, entry), listeners);
    }
    listenerRegistries.set(target, listeners);
  }
  function getListeners(target, criteria = {}) {
    const listeners = listenerRegistries.get(target);
    if (!listeners) {
      return [];
    }
    return listeners.filter((listener) => examineListener(listener, criteria));
  }

  // src/json/jspanel.css.txt
  var jspanel_css_default = '/**\n * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu\n * @version v4.13.0\n * @homepage https://jspanel.de/\n * @license MIT\n * @author Stefan Str\xE4\xDFer - info@jspanel.de\n * @github https://github.com/Flyer53/jsPanel4.git\n */\n.default-bg, .secondary-bg {\n  background-color: #b0bec5; }\n\n.primary-bg {\n  background-color: #01579b; }\n\n.info-bg {\n  background-color: #039be5; }\n\n.success-bg {\n  background-color: #2e7d32; }\n\n.warning-bg {\n  background-color: #f57f17; }\n\n.danger-bg {\n  background-color: #dd2c00; }\n\n.light-bg {\n  background-color: #e0e0e0; }\n\n.dark-bg {\n  background-color: #263238; }\n\n.jsPanel {\n  border: 0;\n  box-sizing: border-box;\n  vertical-align: baseline;\n  font-family: Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  overflow: visible;\n  position: absolute;\n  /* top: 0  do not remove, otherwise panel is at the very bottom of the page -> results in vertical scrollbars -> positioning at right incorrect */\n  z-index: 100; }\n  .jsPanel .jsPanel-hdr {\n    border: 0;\n    box-sizing: border-box;\n    vertical-align: baseline;\n    font-family: Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;\n    font-weight: normal;\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    line-height: normal; }\n  .jsPanel .jsPanel-content {\n    border: 0;\n    box-sizing: border-box;\n    vertical-align: baseline;\n    font-family: Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;\n    font-weight: normal;\n    background: #ffffff;\n    color: #000000;\n    font-size: 1rem;\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n    flex-grow: 1; }\n    .jsPanel .jsPanel-content pre {\n      color: inherit; }\n  .jsPanel .jsPanel-ftr {\n    flex-direction: row;\n    justify-content: flex-end;\n    flex-wrap: nowrap;\n    align-items: center;\n    display: none;\n    box-sizing: border-box;\n    font-size: 1rem;\n    height: auto;\n    background: #f5f5f5;\n    font-weight: normal;\n    color: black;\n    overflow: hidden; }\n  .jsPanel .jsPanel-ftr.active {\n    display: flex;\n    flex-shrink: 0;\n    margin: 0;\n    padding: 3px 8px; }\n\n.jsPanel-hdr.jsPanel-hdr-dark .jsPanel-btn:hover {\n  background-color: rgba(255, 255, 255, 0.4); }\n\n.jsPanel-hdr.jsPanel-hdr-light .jsPanel-btn:hover {\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.jsPanel-hdr-toolbar {\n  font-size: 1rem; }\n\n.jsPanel-headerbar {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center; }\n  .jsPanel-headerbar img {\n    vertical-align: middle;\n    max-height: 38px; }\n\n.jsPanel-titlebar {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  flex: 1 1 0;\n  cursor: move;\n  height: 100%;\n  overflow: hidden;\n  user-select: none; }\n  .jsPanel-titlebar .jsPanel-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-variant: small-caps;\n    font-weight: normal;\n    margin: 0 5px 0 8px;\n    min-width: 0; }\n\n.jsPanel-titlebar.jsPanel-rtl {\n  flex-direction: row-reverse; }\n\n.jsPanel-controlbar {\n  display: flex;\n  align-items: center;\n  align-self: start;\n  touch-action: none;\n  margin: 3px; }\n  .jsPanel-controlbar .jsPanel-btn {\n    cursor: pointer;\n    touch-action: none;\n    border-radius: 3px;\n    border: 0;\n    padding: 0;\n    margin: 0;\n    background-color: transparent;\n    box-shadow: none; }\n    .jsPanel-controlbar .jsPanel-btn svg.jsPanel-icon, .jsPanel-controlbar .jsPanel-btn span, .jsPanel-controlbar .jsPanel-btn i {\n      vertical-align: middle; }\n    .jsPanel-controlbar .jsPanel-btn span.glyphicon {\n      padding: 0 2px; }\n    .jsPanel-controlbar .jsPanel-btn svg.svg-inline--fa {\n      margin: 2px 3px; }\n  .jsPanel-controlbar .jsPanel-btn-normalize {\n    display: none; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl svg:not(.svg-inline--fa), .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span:not(.material-icons) {\n    width: 2rem;\n    height: 2rem;\n    margin: 2px 3px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl .svg-inline--fa {\n    font-size: 2rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span.material-icons {\n    font-size: 2.2rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span[class^=fa] {\n    width: auto;\n    height: auto;\n    font-size: 2rem;\n    margin: 0 4px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg svg:not(.svg-inline--fa), .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span:not(.material-icons) {\n    width: 1.75rem;\n    height: 1.75rem;\n    margin: 2px 3px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg .svg-inline--fa {\n    font-size: 1.75rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span.material-icons {\n    font-size: 1.9rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span[class^=fa] {\n    width: auto;\n    height: auto;\n    font-size: 1.75rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md svg:not(.svg-inline--fa), .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span:not(.material-icons) {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 2px 3px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md .svg-inline--fa {\n    font-size: 1.5rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span.material-icons {\n    font-size: 1.6rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span[class^=fa] {\n    width: auto;\n    height: auto;\n    font-size: 1.5rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm svg:not(.svg-inline--fa), .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span:not(.material-icons) {\n    width: 1.25rem;\n    height: 1.25rem;\n    margin: 2px 3px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm .svg-inline--fa {\n    font-size: 1.25rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span.material-icons {\n    font-size: 1.3rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span[class^=fa] {\n    width: auto;\n    height: auto;\n    font-size: 1.25rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs svg:not(.svg-inline--fa), .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span:not(.material-icons) {\n    width: 1rem;\n    height: 1rem;\n    margin: 1px 3px; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs .svg-inline--fa {\n    font-size: 1rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span.material-icons {\n    font-size: 1rem; }\n  .jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span[class^=fa] {\n    width: auto;\n    height: auto;\n    font-size: 1rem; }\n\n.jsPanel-hdr-toolbar {\n  display: none;\n  width: auto;\n  height: auto; }\n\n.jsPanel-hdr-toolbar.active {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 3px 8px; }\n\n/* styles for panels using option.rtl */\n.jsPanel-titlebar .jsPanel-title[dir=rtl] {\n  margin: 0 8px 0 5px; }\n\n.jsPanel-hdr-toolbar[dir=rtl].active {\n  padding: 0 8px 0 8px; }\n\n.jsPanel-content[dir=rtl] {\n  text-align: right; }\n\n.jsPanel-ftr[dir=rtl] {\n  flex-direction: row; }\n\n/* container that takes the minified jsPanels */\n#jsPanel-replacement-container, .jsPanel-minimized-box, .jsPanel-minimized-container {\n  display: flex;\n  flex-flow: row wrap-reverse;\n  background: transparent none repeat scroll 0 0;\n  bottom: 0;\n  height: auto;\n  left: 0;\n  position: fixed;\n  width: auto;\n  z-index: 9998; }\n\n.jsPanel-replacement {\n  font-family: Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;\n  display: flex;\n  align-items: center;\n  width: 200px;\n  height: 34px;\n  margin: 1px 1px 0 0;\n  z-index: 9999; }\n  .jsPanel-replacement .jsPanel-hdr {\n    flex-grow: 1;\n    min-width: 0;\n    padding: 0;\n    height: 34px;\n    overflow: hidden; }\n    .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo {\n      max-width: 50%;\n      overflow: hidden; }\n      .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo img {\n        max-width: 100px;\n        max-height: 34px; }\n  .jsPanel-replacement .jsPanel-titlebar {\n    cursor: default;\n    min-width: 0; }\n  .jsPanel-replacement .jsPanel-btn.jsPanel-btn-normalize {\n    display: block; }\n\n.jsPanel-minimized-box, .jsPanel-minimized-container {\n  position: absolute;\n  width: 100%;\n  overflow: hidden; }\n\n/* helper classes to make .jsPanel-content a flex box */\n.flexOne {\n  display: flex;\n  flex-flow: row wrap; }\n\n/* css for resizeit handles -------------- */\n.jsPanel-resizeit-handle {\n  display: block;\n  font-size: 0.1px;\n  position: absolute;\n  touch-action: none; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-n {\n  cursor: n-resize;\n  height: 12px;\n  left: 9px;\n  top: -5px;\n  width: calc(100% - 18px); }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-e {\n  cursor: e-resize;\n  height: calc(100% - 18px);\n  right: -9px;\n  top: 9px;\n  width: 12px; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-s {\n  bottom: -9px;\n  cursor: s-resize;\n  height: 12px;\n  left: 9px;\n  width: calc(100% - 18px); }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-w {\n  cursor: w-resize;\n  height: calc(100% - 18px);\n  left: -9px;\n  top: 9px;\n  width: 12px; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-ne {\n  cursor: ne-resize;\n  height: 18px;\n  right: -9px;\n  top: -9px;\n  width: 18px; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-se {\n  bottom: -9px;\n  cursor: se-resize;\n  height: 18px;\n  right: -9px;\n  width: 18px; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-sw {\n  bottom: -9px;\n  cursor: sw-resize;\n  height: 18px;\n  left: -9px;\n  width: 18px; }\n\n.jsPanel-resizeit-handle.jsPanel-resizeit-nw {\n  cursor: nw-resize;\n  height: 18px;\n  left: -9px;\n  top: -9px;\n  width: 18px; }\n\n.jsPanel-drag-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n/* Error panel ----------------- */\n.jsPanel-error .jsPanel-content {\n  border: 0 !important;\n  padding-top: 0 !important;\n  font-size: .9rem;\n  text-align: center; }\n  .jsPanel-error .jsPanel-content p {\n    margin: 0 0 10px 0; }\n  .jsPanel-error .jsPanel-content mark {\n    background: lavender;\n    border-radius: .33rem;\n    padding: 0 8px;\n    font-family: monospace; }\n  .jsPanel-error .jsPanel-content .jsPanel-error-content-separator {\n    width: 100%;\n    height: 1px;\n    background-image: linear-gradient(90deg, white 0%, rebeccapurple 50%, white 100%);\n    margin-bottom: 10px; }\n\n/* box-shadows -------------------------------------------------------- */\n.jsPanel-depth-1 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.jsPanel-depth-2 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.jsPanel-depth-3 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.jsPanel-depth-4 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n\n.jsPanel-depth-5 {\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3), 0 20px 14px rgba(0, 0, 0, 0.22); }\n\n/* snap sensitive areas ------------------------------------------------ */\n.jsPanel-snap-area {\n  position: fixed;\n  background: black;\n  opacity: .2;\n  border: 1px solid silver;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);\n  z-index: 9999; }\n\n.jsPanel-snap-area-lt, .jsPanel-snap-area-lc, .jsPanel-snap-area-lb, .jsPanel-snap-area-left-top, .jsPanel-snap-area-left-center, .jsPanel-snap-area-left-bottom {\n  left: 0; }\n\n.jsPanel-snap-area-ct, .jsPanel-snap-area-cb {\n  left: 37.5%; }\n\n.jsPanel-snap-area-rt, .jsPanel-snap-area-rc, .jsPanel-snap-area-rb, .jsPanel-snap-area-right-top, .jsPanel-snap-area-right-center, .jsPanel-snap-area-right-bottom {\n  right: 0; }\n\n.jsPanel-snap-area-lt, .jsPanel-snap-area-ct, .jsPanel-snap-area-rt, .jsPanel-snap-area-left-top, .jsPanel-snap-area-center-top, .jsPanel-snap-area-right-top {\n  top: 0; }\n\n.jsPanel-snap-area-lc, .jsPanel-snap-area-rc {\n  top: 37.5%; }\n\n.jsPanel-snap-area-lb, .jsPanel-snap-area-cb, .jsPanel-snap-area-rb, .jsPanel-snap-area-left-bottom, .jsPanel-snap-area-center-bottom, .jsPanel-snap-area-right-bottom {\n  bottom: 0; }\n\n.jsPanel-snap-area-ct, .jsPanel-snap-area-cb {\n  width: 25%; }\n\n.jsPanel-snap-area-lc, .jsPanel-snap-area-rc {\n  height: 25%; }\n\n.jsPanel-snap-area-lt, .jsPanel-snap-area-left-top {\n  border-bottom-right-radius: 100%; }\n\n.jsPanel-snap-area-rt, .jsPanel-snap-area-right-top {\n  border-bottom-left-radius: 100%; }\n\n.jsPanel-snap-area-rb, .jsPanel-snap-area-right-bottom {\n  border-top-left-radius: 100%; }\n\n.jsPanel-snap-area-lb, .jsPanel-snap-area-left-bottom {\n  border-top-right-radius: 100%; }\n\n/* tooltip and tooltip connectors */\n.jsPanel-connector-left-top-corner,\n.jsPanel-connector-right-top-corner,\n.jsPanel-connector-left-bottom-corner,\n.jsPanel-connector-right-bottom-corner {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  border-radius: 50%; }\n\n.jsPanel-connector-left-top-corner {\n  left: calc(100% - 6px);\n  top: calc(100% - 6px); }\n\n.jsPanel-connector-right-top-corner {\n  left: -6px;\n  top: calc(100% - 6px); }\n\n.jsPanel-connector-right-bottom-corner {\n  left: -6px;\n  top: -6px; }\n\n.jsPanel-connector-left-bottom-corner {\n  left: calc(100% - 6px);\n  top: -6px; }\n\n.jsPanel-connector-top,\n.jsPanel-connector-topleft,\n.jsPanel-connector-topright,\n.jsPanel-connector-bottom,\n.jsPanel-connector-bottomleft,\n.jsPanel-connector-bottomright,\n.jsPanel-connector-left,\n.jsPanel-connector-lefttop,\n.jsPanel-connector-leftbottom,\n.jsPanel-connector-right,\n.jsPanel-connector-righttop,\n.jsPanel-connector-rightbottom {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border: 12px solid transparent; }\n\n.jsPanel-connector-top,\n.jsPanel-connector-topleft,\n.jsPanel-connector-topright {\n  top: 100%;\n  border-bottom-width: 0; }\n\n.jsPanel-connector-top {\n  left: calc(50% - 12px); }\n\n.jsPanel-connector-topleft {\n  left: 0px; }\n\n.jsPanel-connector-topright {\n  left: calc(100% - 24px); }\n\n.jsPanel-connector-bottom,\n.jsPanel-connector-bottomleft,\n.jsPanel-connector-bottomright {\n  top: -12px;\n  border-top-width: 0; }\n\n.jsPanel-connector-bottom {\n  left: calc(50% - 12px); }\n\n.jsPanel-connector-bottomleft {\n  left: 0px; }\n\n.jsPanel-connector-bottomright {\n  left: calc(100% - 24px); }\n\n.jsPanel-connector-left,\n.jsPanel-connector-lefttop,\n.jsPanel-connector-leftbottom {\n  left: 100%;\n  border-right-width: 0; }\n\n.jsPanel-connector-left {\n  top: calc(50% - 12px); }\n\n.jsPanel-connector-lefttop {\n  top: 0px; }\n\n.jsPanel-connector-leftbottom {\n  top: calc(100% - 24px); }\n\n.jsPanel-connector-right,\n.jsPanel-connector-righttop,\n.jsPanel-connector-rightbottom {\n  left: -12px;\n  border-left-width: 0; }\n\n.jsPanel-connector-right {\n  top: calc(50% - 12px); }\n\n.jsPanel-connector-righttop {\n  top: 0px; }\n\n.jsPanel-connector-rightbottom {\n  top: calc(100% - 24px); }\n\n/* IE11 CSS styles go here */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .jsPanel-replacement .jsPanel-titlebar {\n    max-width: 105px; } }\n\n/* XXXXXXXXXXXXXXXXXXXXXXX */\n/* css3 animations */\n@keyframes jsPanelFadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.jsPanelFadeIn {\n  opacity: 0;\n  animation: jsPanelFadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 600ms; }\n\n@keyframes jsPanelFadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.jsPanelFadeOut {\n  animation: jsPanelFadeOut ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 600ms; }\n\n@keyframes modalBackdropFadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 0.65; } }\n\n.jsPanel-modal-backdrop {\n  animation: modalBackdropFadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 750ms;\n  background: black;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n@keyframes modalBackdropFadeOut {\n  from {\n    opacity: 0.65; }\n  to {\n    opacity: 0; } }\n\n.jsPanel-modal-backdrop-out {\n  animation: modalBackdropFadeOut ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 400ms; }\n\n.jsPanel-modal-backdrop-multi {\n  background: rgba(0, 0, 0, 0.15); }\n\n.jsPanel-content .jsPanel-iframe-overlay {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent; }\n\n.jsPanel-addCloseCtrl {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: .8rem;\n  height: .8rem;\n  margin: 2px;\n  cursor: pointer;\n  line-height: .8rem;\n  padding: 0;\n  z-index: 100;\n  border: 0;\n  background-color: transparent; }\n\n.jsPanel-addCloseCtrl.rtl {\n  right: unset;\n  left: 0; }\n\n.jsPanel-progressbar {\n  position: relative;\n  width: 100%;\n  height: 0;\n  overflow: hidden; }\n  .jsPanel-progressbar .jsPanel-progressbar-slider {\n    position: absolute;\n    width: 0;\n    height: 3px;\n    background: lightgray;\n    right: 0; }\n\n.jsPanel-progressbar.active {\n  height: 3px; }\n\n@keyframes progressbar {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n.jsPanel-content.jsPanel-content-noheader {\n  border: none !important; }\n\nbody {\n  -ms-overflow-style: scrollbar; }\n';

  // src/json/datepicker_theme_default.css.txt
  var datepicker_theme_default_css_default = '/**\n * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu\n * @version v4.13.0\n * @homepage https://jspanel.de/\n * @license MIT\n * @author Stefan Str\xE4\xDFer - info@jspanel.de\n * @github https://github.com/Flyer53/jsPanel4.git\n */\n.jsPanel-cal-wrapper {\n  display: grid;\n  grid-template-areas: "clear back month month month month forward reset" "blank3 day-name-0 day-name-1 day-name-2 day-name-3 day-name-4 day-name-5 day-name-6" "week-0 day-1 day-2 day-3 day-4 day-5 day-6 day-7" "week-1 day-8 day-9 day-10 day-11 day-12 day-13 day-14" "week-2 day-15 day-16 day-17 day-18 day-19 day-20 day-21" "week-3 day-22 day-23 day-24 day-25 day-26 day-27 day-28" "week-4 day-29 day-30 day-31 day-32 day-33 day-34 day-35" "week-5 day-36 day-37 day-38 day-39 day-40 day-41 day-42";\n  grid-template-rows: 1.33fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-columns: .5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-row-gap: .2rem;\n  width: 100%;\n  height: 100%;\n  font-size: .875rem;\n  padding: 0 10px 10px; }\n\n.jsPanel-cal-sub {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.jsPanel-cal-sub.day {\n  cursor: pointer; }\n\n.jsPanel-cal-sub.day.today {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  border: 1px solid #c5e1a5; }\n\n.jsPanel-cal-sub.week {\n  color: gray;\n  font-size: .66rem; }\n\n.jsPanel-cal-sub.day.notInMonth {\n  color: lightgray; }\n\n.jsPanel-cal-sub.day-name, .jsPanel-cal-blank3 {\n  background: gainsboro; }\n\n.jsPanel-cal-sub.day-name.day-name-6 {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.jsPanel-cal-sub.day-name.weekend {\n  color: crimson; }\n\n.jsPanel-cal-sub.day.selected {\n  background-color: #81d4fa;\n  border-radius: 5px;\n  color: #fff; }\n\n.jsPanel-cal-sub.day.selected.range {\n  background-color: #ce93d8;\n  color: #fff; }\n\n.jsPanel-cal-sub.day:hover {\n  background-color: #c5e1a5;\n  border-radius: 5px;\n  color: #fff; }\n\n.jsPanel-cal-sub.jsPanel-cal-back {\n  grid-area: back;\n  cursor: pointer; }\n  .jsPanel-cal-sub.jsPanel-cal-back svg {\n    width: 50%; }\n\n.jsPanel-cal-sub.jsPanel-cal-forward {\n  grid-area: forward;\n  cursor: pointer; }\n  .jsPanel-cal-sub.jsPanel-cal-forward svg {\n    width: 50%; }\n\n.jsPanel-cal-sub.jsPanel-cal-month {\n  grid-area: month;\n  font-variant: small-caps; }\n\n.jsPanel-cal-sub.jsPanel-cal-clear {\n  grid-area: clear;\n  cursor: pointer; }\n\n.jsPanel-cal-sub.jsPanel-cal-reset {\n  grid-area: reset;\n  cursor: pointer; }\n  .jsPanel-cal-sub.jsPanel-cal-reset svg {\n    width: 50%; }\n\n.jsPanel-cal-sub.jsPanel-cal-blank3 {\n  grid-area: blank3;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.jsPanel-cal-sub.day-name-0 {\n  grid-area: day-name-0; }\n\n.jsPanel-cal-sub.day-name-1 {\n  grid-area: day-name-1; }\n\n.jsPanel-cal-sub.day-name-2 {\n  grid-area: day-name-2; }\n\n.jsPanel-cal-sub.day-name-3 {\n  grid-area: day-name-3; }\n\n.jsPanel-cal-sub.day-name-4 {\n  grid-area: day-name-4; }\n\n.jsPanel-cal-sub.day-name-5 {\n  grid-area: day-name-5; }\n\n.jsPanel-cal-sub.day-name-6 {\n  grid-area: day-name-6; }\n\n.jsPanel-cal-sub.week-1 {\n  grid-area: week-1; }\n\n.jsPanel-cal-sub.week-2 {\n  grid-area: week-2; }\n\n.jsPanel-cal-sub.week-3 {\n  grid-area: week-3; }\n\n.jsPanel-cal-sub.week-4 {\n  grid-area: week-4; }\n\n.jsPanel-cal-sub.week-5 {\n  grid-area: week-5; }\n\n.jsPanel-cal-sub.day.selected.range.remove-border-radius-left {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.jsPanel-cal-sub.day.selected.range.remove-border-radius-right {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n';

  // src/json/custom.css.txt
  var custom_css_default = `/* sur une id\xE9e de lea verrou retransmise ici https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/)

voir aussi https://codepen.io/jakob-e/pen/doMoML?editors=0110
pour convertir
*/

:root {
  
--icon-calendar: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke-width='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'/%3E %3Cpath d='M3 10V6C3 4.89543 3.89543 4 5 4H7' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'/%3E %3Cpath d='M7 2V6' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'/%3E %3Cpath d='M21 10V6C21 4.89543 20.1046 4 19 4H18.5' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'/%3E %3C/svg%3E");
}
/*** form **/
.wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
  }


.wrapper form {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 16px;
  
}

.hidden {
	display: none;
	}
	
.wrapper aside {
    align-self: start; /* NOTESTT: full height of content, if nothing set height is height of contente*/
    background: #4b5195;
  }
form label, form .label {
    grid-column: 1 / 2;
    display: block;
}


form button,
form input {
  padding: 1em;
}

form input,
from button
{
  background: lightgrey;
  width: 93%; /* si je mets 100% c'est trop large */
  border: 0;
  grid-column: 2 / 3;
}

.full-width {
    grid-column: 1 / 3;   
}


.manual-width{
	grid-column: var(--col, 1 / 3);
}

.contacts {

  color: #fff;
}


/* jspanel footer */
/* idea from https://ishadeed.com/article/flexbox-separator/ */

.jsPanel-ftr-section {
    display: flex;
    gap: 1rem;
     /*! max-width: 700px; */
     /*! margin: 0.5rem auto; */
    align-items: center;
    flex-wrap: nowrap;
}

.jsPanel-ftr-section__item {
    flex: 1;
}

.jsPanel-ftr-section:before {
    content: "";
    border: 1px solid #d3d3d3;
    align-self: stretch;
    border: 1px solid #d3d3d3;
    border-image: linear-gradient(45deg, #3f51b5, #cddc39) 1;
}
.jsPanel-ftr-section__item--start {
    order: -1;
    flex: 15 1 0;
}

.jsPanel-ftr-section__item--end {
    flex: 1 1 0;
}
`;

  // src/ui.js
  var UI = {
    LOG_UI: "UI",
    LISTENER_PREFIX: "OCRESA",
    UI_PREFIX: "OCRESA",
    UI_MAINPAN: "OCRESA-mainPan",
    _bootstrap: function() {
      let sEl;
      render(new Button({
        attributes: {
          class: "button--primary button",
          "data-action": "menu__BookSession"
        },
        text: "R. Session"
      }), document.querySelector(".menuBar"));
      var lastInserted = document.querySelector(".menuBar").lastChild;
      var whereToInsert = document.querySelector(".menuBar").children[document.querySelector(".menuBar").children.length - 3];
      insertAfter(lastInserted, whereToInsert);
    },
    _getPanelId: function(bThrowError = false) {
      let self2 = this;
      let panelIDs2 = jsPanel.getPanels(function() {
        return this.options.data === self2.UI_MAINPAN;
      }).map((panel) => panel.id);
      if (Array.isArray(panelIDs2) === true && panelIDs2.length === 1) {
        return panelIDs2[0];
      }
      if (Array.isArray(panelIDs2) === true && panelIDs2.length > 1) {
        log_default.err(this.LOG_UI, "%cMore than one main panel found %o", APP_ERROR_STYLE, panelIDs2);
        return void 0;
      }
      if (bThrowError === true) {
        log_default.err(this.LOG_UI, "%cNo panel main panel:%s was found in this panel list %o", APP_ERROR_STYLE, this.UI_MAINPAN, panelIDs2);
        throw new Error(`No main panel ${this.UI_MAINPAN} was found `);
      }
      return void 0;
    },
    clean: function() {
      aEvents = getListeners(document);
      for (let event of aEvents) {
        if (typeof event.name !== "undefined") {
          var sName = event.name;
          var iStartPosition = sName.indexOf(".") || 0;
          if (sName.includes(this.LISTENER_PREFIX, iStartPosition)) {
            removeListener(document, `.${sName}`);
            log_default.dbg(this.LOG_UI, "%cListener: %s was removed", APP_DEBUG_STYLE, sName);
          }
        }
      }
    },
    displayErrors: function(args) {
      if (Array.isArray(args)) {
        this._setMultiMsgOnFooter({ msg: args, btnTxt: "log" });
        return;
      }
      let { error } = Object.assign({
        error: "&nbsp;"
      }, args);
      this._setMsgOnFooter({ msg: error });
      return;
    },
    displayMessages: function(args) {
      if (Array.isArray(args)) {
        this._setMultiMsgOnFooter({ msg: args, btnTxt: "log" });
        return;
      }
      let { type, value } = Object.assign({
        type: "html",
        value: "&nbsp;"
      }, args);
      this._setMsgOnFooter({ msg: value });
      return;
    },
    _setMsgOnFooter: function(args) {
      let { msg, zone } = Object.assign({
        msg: "&nbsp;",
        zone: 1
      }, args);
      let sId = this._getPanelId();
      if (typeof sId === "undefined") {
        log_default.err(this.LOG_UI, "%c no id found for panel", APP_ERROR_STYLE, panelIDs);
        return;
      }
      let panel = document.getElementById(sId);
      log_default.dbg(this.LOG_UI, "%cPanel founded was", APP_DEBUG_STYLE, panel);
      let sSelector = "";
      if (zone === 1) {
        sSelector = ".jsPanel-ftr-section__item--start";
      }
      if (zone === 2) {
        sSelector = ".jsPanel-ftr-section__item--end";
      }
      if (sSelector.length === 0) {
        log_default.err(this.LOG_UI, "%c_setMsgOnFooter impossible to send text: %s to zone: %i", APP_ERROR_STYLE, msg, zone);
        return;
      }
      panel.footer.querySelector(sSelector).innerHTML = msg;
    },
    _setMultiMsgOnFooter: function(args) {
      let { msg, btnTxt, zone } = Object.assign({
        msg: [{ code: "", description: "" }],
        btnTxt: "Afficher le log",
        zone: 1
      }, args);
      let sId = this._getPanelId();
      if (typeof sId === "undefined") {
        log_default.err(this.LOG_UI, "%c no id found for panel", APP_ERROR_STYLE, panelIDs);
        return;
      }
      let panel = document.getElementById(sId);
      log_default.dbg(this.LOG_UI, "%cPanel founded was", APP_DEBUG_STYLE, panel);
      let sSelector = "";
      if (zone === 1) {
        sSelector = ".jsPanel-ftr-section__item--start";
      }
      if (zone === 2) {
        sSelector = ".jsPanel-ftr-section__item--end";
      }
      if (sSelector.length === 0) {
        log_default.err(this.LOG_UI, "%c_setMultiMsgOnFooter impossible to send text: %s to zone: %i", APP_ERROR_STYLE, msg, zone);
        return;
      }
      log_default.dbg(this.LOG_UI, "%c_setMultiMsgOnFooter ajout du bouton: %s", APP_DEBUG_STYLE, btnTxt);
      panel.footer.querySelector(sSelector).innerHTML = `<span>Voir les notifications</span><button data-action="displayErrors">${btnTxt}</button>`;
      const self2 = this;
      let _sTxt = "";
      for (_v in msg) {
        if (typeof msg[_v].value === "undefined") {
          _sTxt += `<div>${msg[_v].description} raison: ${msg[_v].value}</div>`;
        } else {
          _sTxt += `<div>${msg[_v].description}</div>`;
        }
      }
      addListener(document, `click.${this.LISTENER_PREFIX}:footerErrorList`, function(event) {
        if (event.target.dataset && event.target.dataset.action === "displayErrors") {
          jsPanel.modal.create({
            theme: "warning filleddark",
            headerTitle: '<i class="fad fa-exclamation-triangle"></i>Attention',
            content: `<section>${_sTxt}</section>`,
            position: "60 60",
            closeOnBackdrop: false
          });
        }
      });
    },
    progressSet: function(iValue) {
      const sProgressBarColor = "#7451eb";
      let sId = this._getPanelId();
      if (typeof sId === "undefined") {
        log_default.err(this.LOG_UI, "%c no id found for panel", APP_ERROR_STYLE, panelIDs);
        return;
      }
      let panel = document.getElementById(sId);
      log_default.dbg(this.LOG_UI, "%cPanel founded was", APP_DEBUG_STYLE, panel);
      if (iValue == -1) {
        panel.progressbar.classList.remove("active");
        panel.progressbar.querySelector(".jsPanel-progressbar-slider").style.width = "0%";
        return;
      }
      if (panel.progressbar.classList.contains("active") === false) {
        panel.progressbar.classList.add("active");
      }
      panel.progressbar.style.background = sProgressBarColor;
      log_default.dbg(this.LOG_UI, "%cProgressbar updated to %i%", APP_DEBUG_STYLE, iValue);
      if (iValue >= 100) {
        window.setTimeout(() => {
          panel.progressbar.classList.remove("active");
          panel.progressbar.querySelector(".jsPanel-progressbar-slider").style.width = "0%";
        }, 250);
        return;
      }
      panel.progressbar.querySelector(".jsPanel-progressbar-slider").style.width = `${100 - iValue}%`;
    },
    start: function() {
      this._bootstrap();
      const self2 = this;
      document.addEventListener("click", function(event) {
        if (event.target.dataset && event.target.dataset.action === "menu__BookSession") {
          log_default.dbg(self2.LOG_UI, "%cUser click on the menu to book a session", APP_DEBUG_STYLE);
          window["OcBook"].getEventBroker().emit("clickMenu:bookSession", {});
        }
      });
    },
    helper_css: function(sSelector, sId, sCss) {
      if (document.body.querySelector(`${sSelector} [id="${sId}"]`) === null) {
        render(new Style2({
          attributes: { type: "text/css", id: sId },
          text: `${sCss}`
        }), document.body.querySelector(sSelector));
      }
    },
    windowInit: function() {
      const sAnchor = "#sttPlaceHolder";
      this.helper_css(sAnchor, "jspanel/default.css", jspanel_css_default);
      this.helper_css(sAnchor, "datepicker/theme/default.css", datepicker_theme_default_css_default);
      this.helper_css(sAnchor, "ocresa/custom.css", custom_css_default);
      let sPanelID = this._getPanelId();
      log_default.dbg(this.LOG_UI, "%cpanelIDs is %o", APP_DEBUG_STYLE, sPanelID);
      if (typeof sPanelID !== "undefined") {
        if (document.getElementById(sPanelID).status === "minimized") {
          log_default.dbg(this.LOG_UI, "%cpanelIDs %o is minimized have to normalize it", APP_DEBUG_STYLE, sPanelID);
          window.setTimeout(() => {
            document.getElementById(sPanelID).normalize();
          }, 50);
        }
        return;
      }
      log_default.dbg(this.LOG_UI, "%cNo panel we have to create one", APP_DEBUG_STYLE);
      const self2 = this;
      jsPanel.create({
        data: this.UI_MAINPAN,
        theme: "dark",
        headerLogo: '<i class="fad fa-home-heart ml-2"></i>',
        headerTitle: "OC RESA",
        headerToolbar: '<span class="text-sm">Just some text in optional header toolbar ...</span>',
        footerToolbar: `
				<section class="jsPanel-ftr-section">
					<div class="jsPanel-ftr-section__item jsPanel-ftr-section__item--start">
						<!-- Content -->&nbsp;
					</div>
				  
					<div class="jsPanel-ftr-section__item jsPanel-ftr-section__item--end">
						<!-- Content --> v 1.0
					</div>
				</section>
			
			`,
        panelSize: {
          width: () => {
            return Math.min(800, window.innerWidth * 0.9);
          },
          height: () => {
            return Math.min(500, window.innerHeight * 0.6);
          }
        },
        animateIn: "jsPanelFadeIn",
        content: `
			<div class="wrapper">
				<aside class="contacts">Petit message sympa</aside>
				<form id="sample-date">
				<label class="hidden" for="inlineFormDate">Select date</label>
				<svg class="label" width="24" height="24" 
					stroke-width="1.5" viewBox="0 0 24 24" 
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<label style="background-image: --icon-calendar">Test label</label>
				<input type="text"  data-action="chooseDateFrom" id="inlineFormDate" value="" placeholder="selection de la date">
				<div id="form-container" class="manual-width" style="--col: 2 / 3"><!--DATEPICKERCONTAINER--></div>
				<label for="g_sheet_location" class="formbuilder-text-label">Lien Google sheet</label>
				<input type="text" class="form-control" name="g_sheet_location" access="false" id="g_sheet_location">
				<button class="full-width" data-action="bookSession">R\xE9server</button>
				</form>
			</div>
			`,
        onwindowresize: true,
        callback: function(panel) {
          this.content.style.padding = "10px";
        },
        onbeforeclose: [
          function(panel) {
            self2.clean(panel);
            return true;
          }
        ],
        onclosed: function(panel, closedByUser) {
          log_default.dbg(self2.LOG_UI, "%cPanel with id: %s closed! Check if panel close control was clicked to close the panel: %o", APP_DEBUG_STYLE, panel.id, closedByUser);
        }
      });
      addListener(document, `click.${this.LISTENER_PREFIX}:mainPan`, function(event) {
        log_default.dbg(self2.LOG_UI, "%cWe are on Listener Named %s, User click on %o", APP_DEBUG_STYLE, `${self2.LISTENER_PREFIX}:mainPan`, event);
        if (event.target.dataset && event.target.dataset.action === "chooseDateFrom") {
          const oPanelDtPicker = jsPanel.create({
            container: "#form-container",
            contentSize: {
              width: () => {
                return getComputedStyle(document.querySelector('form [data-action="chooseDateFrom"]')).width;
              },
              height: 225
            },
            headerTitle: "choisissez une date",
            headerControls: "closeonly xs",
            theme: "dark",
            borderRadius: 3,
            position: "left-top left-bottom 0 2 #form-container",
            callback: (panel) => {
              jsPanel.datepicker.create(panel.content, {
                locale: "fr",
                ondateselect: (container, date, e) => {
                  document.querySelector('form [data-action="chooseDateFrom"]').value = src_default(date).format("DD-MM-YYYY");
                  window["OcBook"].getEventBroker().emit("changeValue:date", { data: { url: {
                    format: "raw",
                    value: document.querySelector('form [data-action="chooseDateFrom"]').value
                  } } });
                  oPanelDtPicker.close();
                }
              });
            }
          });
        }
        if (event.target.dataset && event.target.dataset.action === "bookSession") {
          event.preventDefault();
          log_default.dbg(self2.LOG_UI, "%cUser click on a button to book a session", APP_DEBUG_STYLE);
          const sValue = document.querySelector('form [data-action="chooseDateFrom"]').value;
          window["OcBook"].getEventBroker().emit("clickBtn:bookSession", { data: { date: { format: "raw", value: sValue } } });
        }
      });
      addListener(document, `change.${this.LISTENER_PREFIX}:mainPan`, function(event) {
        log_default.dbg(self2.LOG_UI, "%cWe are on Listener Named %s, User change some values on %o", APP_DEBUG_STYLE, `${self2.LISTENER_PREFIX}:mainPan`, event);
        if (event.target.id === "g_sheet_location") {
          const sValue = event.target.value;
          window["OcBook"].getEventBroker().emit("changeValue:dataURL", { data: { url: { format: "raw", value: sValue } } });
        }
      });
    }
  };
  var ui_default = UI;

  // src/vendor/JSFrame/dist/JSFrame.neutral.js
  var __commonJS3 = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_ = __commonJS3({
    "src/JSFrame.css"(exports, module) {
      module.exports = {};
    }
  });
  var require_event_emitter = __commonJS3({
    "dependencies/event-emitter/dist/event-emitter.js"() {
      (() => {
        var EventEmitter = class {
          constructor(eventTypes) {
            this.onListeners = new Map();
            this.onlyListeners = new Map();
            if (eventTypes) {
              for (const eventType of eventTypes) {
                const listenerList = new EventListenerList();
                this.onListeners.set(eventType, listenerList);
              }
            }
            this.childEventEmitters = [];
            this.onIntercepterFuncs = {};
          }
          on(eventType, listenerFunc) {
            let listenerList = this.onListeners.get(eventType);
            if (!listenerList) {
              listenerList = new EventListenerList();
              this.onListeners.set(eventType, listenerList);
            }
            listenerList.addListenerFunc(listenerFunc);
            if (this.onIntercepterFuncs) {
              for (let [key, value] of Object.entries(this.onIntercepterFuncs)) {
                const onIntercepterFuncname = key;
                const onIntercepterFunc = value;
                onIntercepterFunc({ eventType, func: listenerFunc, onIntercepterFuncname });
              }
            }
          }
          removeListener(eventType, listenerFunc) {
            let listenerList = this.onListeners.get(eventType);
            if (listenerList) {
              listenerList.removeListener(listenerFunc);
            }
          }
          only(eventType, listenerName, listenerFunc) {
            let listenerMap = this.onlyListeners.get(eventType);
            if (!listenerMap) {
              listenerMap = new EventListenerMap();
              this.onlyListeners.set(eventType, listenerMap);
            }
            listenerMap.putListenerFunc(listenerName, listenerFunc);
          }
          pipe(eventEmitter) {
            this.childEventEmitters.push(eventEmitter);
          }
          emit(eventType, data) {
            const listenerList = this.onListeners.get(eventType);
            if (listenerList) {
              data.eventType = eventType;
              listenerList.callListenerFunc(data);
            }
            const listenerMap = this.onlyListeners.get(eventType);
            if (listenerMap) {
              data.eventType = eventType;
              listenerMap.callListenerFunc(data);
            }
            for (const childEventEmitter of this.childEventEmitters) {
              childEventEmitter.emit(eventType, data);
            }
          }
          getAllListeners() {
            const result = {};
            const onListeners = this.onListeners;
            onListeners.forEach(function(value, key) {
              const eventType = key;
              const eventListenerList = value;
              const listeners = eventListenerList.getAllListeners();
              if (!result[eventType]) {
                result[eventType] = {};
              }
              result[eventType]["listeners"] = listeners;
            });
            let idx = 0;
            for (const childEventEmitter of this.childEventEmitters) {
              childEventEmitter.onListeners.forEach(function(value, key) {
                const eventType = key;
                const eventListenerList = value;
                const listeners = eventListenerList.getAllListeners();
                if (!result[eventType]) {
                  result[eventType] = {};
                }
                if (!result[eventType]["childEventEmitters"]) {
                  result[eventType]["childEventEmitters"] = [];
                }
                result[eventType]["childEventEmitters"].push({ childEmitterIdx: idx, listeners });
              });
              idx++;
            }
            return result;
          }
          hasListenerFuncs(eventType) {
            if (this.onListeners.has(eventType)) {
              const listenerList = this.onListeners.get(eventType);
              if (listenerList && listenerList.hasListenerFunc()) {
                return true;
              }
            }
            for (const childEventEmitter of this.childEventEmitters) {
              const childEventEmitterHasListenerFuncs = childEventEmitter.hasListenerFuncs(eventType);
              if (childEventEmitterHasListenerFuncs) {
                return true;
              }
            }
            return false;
          }
          clearAll() {
            for (const listenerList of this.onListeners.values()) {
              listenerList.clearAll();
            }
            this.onListeners.clear();
            for (const listenerMap of this.onlyListeners.values()) {
              listenerMap.clearAll();
            }
            this.onlyListeners.clear();
            this.childEventEmitters = [];
          }
          addOnIntercepterFunc(funcName, func) {
            if (this.onIntercepterFuncs[funcName]) {
              throw Error(`Always registered intercepter func "${funcName}".`);
            }
            this.onIntercepterFuncs[funcName] = func;
          }
          removeOnIntercepterFunc(funcName) {
            delete this.onIntercepterFuncs[funcName];
          }
          getAllOnIntercepterFuncs() {
            const resultArray = [];
            for (let [key, value] of Object.entries(this.onIntercepterFuncs)) {
              const onIntercepterFuncname = key;
              const onIntercepterFunc = value;
              resultArray.push({ funcName: onIntercepterFuncname, func: onIntercepterFunc });
            }
            return resultArray;
          }
        };
        var EventListenerList = class {
          constructor() {
            this.listenerFuncs = [];
          }
          clearAll() {
            this.listenerFuncs = [];
          }
          getAllListeners() {
            return this.listenerFuncs;
          }
          hasListenerFunc() {
            if (this.listenerFuncs.length > 0) {
              return true;
            } else {
              return false;
            }
          }
          addListenerFunc(listenerFunc) {
            this.listenerFuncs.push(listenerFunc);
          }
          callListenerFunc(data) {
            for (const listenerFunc of this.listenerFuncs) {
              if (this.typeOf(listenerFunc) === "Function" || this.typeOf(listenerFunc) === "AsyncFunction") {
                listenerFunc(data);
              } else {
                throw Error(`[@riversun/event-emitter] listenerFunction you set is not a function ( is type of A "${this.typeOf(listenerFunc)}" ). listenerFunction:"${listenerFunc}".Check args of #only method or #on method.`);
              }
            }
          }
          removeListener(listenerFunc) {
            this.removeArrayItemOnce(this.listenerFuncs, listenerFunc);
          }
          removeArrayItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
              arr.splice(index, 1);
            }
            return arr;
          }
          typeOf(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
          }
        };
        var EventListenerMap = class {
          constructor() {
            this.listenerFuncMap = new Map();
          }
          clearAll() {
            this.listenerFuncMap.clear();
          }
          hasListenerFunc(key) {
            return this.listenerFuncMap.has(key);
          }
          putListenerFunc(key, listenerFunc) {
            this.listenerFuncMap.set(key, listenerFunc);
          }
          callListenerFunc(data) {
            for (const listenerFunc of this.listenerFuncMap.values()) {
              if (this.typeOf(listenerFunc) === "Function") {
                listenerFunc(data);
              } else {
                throw Error(`[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"${listenerFunc}".Check args of #only method or #on method.`);
              }
            }
          }
          typeOf(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
          }
        };
      })();
    }
  });
  var require_CCommon = __commonJS3({
    "src/CCommon.js"(exports, module) {
      var CALIGN2 = {};
      CALIGN2.LEFT_TOP = "LEFT_TOP";
      CALIGN2.HCENTER_TOP = "CENTER_TOP";
      CALIGN2.RIGHT_TOP = "RIGHT_TOP";
      CALIGN2.LEFT_VCENTER = "LEFT_CENTER";
      CALIGN2.HCENTER_VCENTER = "CENTER_CENTER";
      CALIGN2.CENTER = CALIGN2.HCENTER_VCENTER;
      CALIGN2.RIGHT_VCENTER = "RIGHT_CENTER";
      CALIGN2.LEFT_BOTTOM = "LEFT_BOTTOM";
      CALIGN2.HCENTER_BOTTOM = "CENTER_BOTTOM";
      CALIGN2.RIGHT_BOTTOM = "RIGHT_BOTTOM";
      module.exports = CALIGN2;
    }
  });
  var require_CTimer = __commonJS3({
    "src/utils/CTimer.js"(exports, module) {
      var CTimer = function() {
        function CTimer2() {
          var me = this;
          me._timerId = null;
          me._isRunning = false;
          me._timerInterval = 0;
          me._internalCallback = _internalCallback;
          me._timerMethod = null;
          function _internalCallback() {
            if (me._timerMethod) {
              me._timerMethod(me);
            }
            if (me._isRunning) {
              clearTimeout(me._timerId);
              me._timerId = setTimeout(me._internalCallback, me._timerInterval);
            }
          }
        }
        CTimer2.prototype.setCallback = function(callback_func) {
          var me = this;
          me._timerMethod = callback_func;
          return me;
        };
        CTimer2.prototype.setIntervalMillis = function(interval) {
          var me = this;
          me._timerInterval = interval;
          return me;
        };
        CTimer2.prototype.stopTimer = function() {
          var me = this;
          me._isRunning = false;
          return me;
        };
        CTimer2.prototype.startTimer = function() {
          var me = this;
          if (me._timerInterval > 0) {
            me._timerId = setTimeout(me._internalCallback, me._timerInterval);
            me._isRunning = true;
          }
          return me;
        };
        return CTimer2;
      }();
      module.exports = CTimer;
    }
  });
  var require_CSimpleLayoutAnimator = __commonJS3({
    "src/utils/CSimpleLayoutAnimator.js"(exports, module) {
      var CTimer = require_CTimer();
      function CSimpleLayoutAnimator() {
        this.fps = 30;
        this.durationMillis = 200;
        this.targetFrame = null;
        this._crrAlpha = 1;
        this._toAlpha = 1;
        this._crrWidth = 0;
        this._crrHeight = 0;
        this._toWidth = 0;
        this._toHeight = 0;
        this._toX = 0;
        this._toY = 0;
        this.pinnedAnimationEnabled = false;
        this._pinX = 0;
        this._pinY = 0;
        this._pinAnchor = null;
      }
      CSimpleLayoutAnimator.prototype.set = function(ciframe) {
        var me = this;
        me.targetFrame = ciframe;
        me.fromWidth(ciframe.getWidth());
        me.fromHeight(ciframe.getHeight());
        me.toWidth(ciframe.getWidth());
        me.toHeight(ciframe.getHeight());
        var crrPos = ciframe.getPosition();
        me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);
        return me;
      };
      CSimpleLayoutAnimator.prototype.get = function() {
        var me = this;
        return me.targetFrame;
      };
      CSimpleLayoutAnimator.prototype.setDuration = function(durationMillis) {
        var me = this;
        me.durationMillis = durationMillis;
        return me;
      };
      CSimpleLayoutAnimator.prototype.setFPS = function(fps) {
        var me = this;
        me.fps = fps;
        return me;
      };
      CSimpleLayoutAnimator.prototype.fromPosition = function(x, y, anchor) {
        var me = this;
        me.pinnedAnimationEnabled = true;
        me._pinX = x;
        me._pinY = y;
        me.toPosition(x, y);
        if (anchor) {
          me._pinAnchor = anchor;
        }
        return me;
      };
      CSimpleLayoutAnimator.prototype.fromWidth = function(fromWidth) {
        var me = this;
        me._crrWidth = fromWidth;
        return me;
      };
      CSimpleLayoutAnimator.prototype.fromHeight = function(fromHeight) {
        var me = this;
        me._crrHeight = fromHeight;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toWidth = function(toWidth) {
        var me = this;
        me._toWidth = toWidth;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toHeight = function(toHeight) {
        var me = this;
        me._toHeight = toHeight;
        return me;
      };
      CSimpleLayoutAnimator.prototype.fromAlpha = function(fromAlpha) {
        var me = this;
        me._crrAlpha = fromAlpha;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toAlpha = function(toAlpha) {
        var me = this;
        me._toAlpha = toAlpha;
        return me;
      };
      CSimpleLayoutAnimator.prototype.ease = function(ease) {
        var me = this;
        me._ease = ease;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toPosition = function(x, y) {
        var me = this;
        me._toX = x;
        me._toY = y;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toX = function(x) {
        var me = this;
        me._toX = x;
        return me;
      };
      CSimpleLayoutAnimator.prototype.toY = function(t) {
        var me = this;
        me._toY = t;
        return me;
      };
      CSimpleLayoutAnimator.prototype.start = function(waitMillis, requestFocusEnabled) {
        var me = this;
        var fromWidth = me._crrWidth;
        var fromHeight = me._crrHeight;
        var fromX = me._pinX;
        var fromY = me._pinY;
        var fromAlpha = me._crrAlpha;
        return new Promise(function(resolve, reject) {
          var numOfSteps = parseInt(me.fps * (me.durationMillis / 1e3));
          if (numOfSteps == 0) {
            numOfSteps = 1;
          }
          var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
          var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;
          var deltaX = (me._toX - fromX) / numOfSteps;
          var deltaY = (me._toY - fromY) / numOfSteps;
          var deltaAlpha = (me._toAlpha - fromAlpha) / numOfSteps;
          if (me._ease) {
            deltaAlpha = deltaAlpha / 1.24;
          }
          var unitMillis = me.durationMillis / numOfSteps;
          var idx = 0;
          function loop() {
            var timer = new CTimer();
            timer.setIntervalMillis(unitMillis);
            timer.setCallback(function(timer2) {
              if (idx == numOfSteps) {
                var _width = me._toWidth;
                var _height = me._toHeight;
                var _x = fromX + deltaX * idx;
                var _y = fromY + deltaY * idx;
                var _alpha = me._toAlpha;
                if (me.pinnedAnimationEnabled) {
                  me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                }
                if (me.targetFrame.htmlElement.style) {
                  me.targetFrame.htmlElement.style.opacity = _alpha;
                }
                me.targetFrame.setSize(_width, _height, true);
                me._crrWidth = _width;
                me._crrHeight = _height;
                me._pinX = _x;
                me._pinY = _y;
              }
              if (idx == numOfSteps + 1) {
                timer2.stopTimer();
                if (me.targetFrame.htmlElement.style) {
                  me.targetFrame.htmlElement.style.opacity = me._toAlpha;
                }
                resolve(me);
                return;
              }
              var _width = fromWidth + deltaWidth * idx;
              var _height = fromHeight + deltaHeight * idx;
              var _x = fromX + deltaX * idx;
              var _y = fromY + deltaY * idx;
              var _alpha = fromAlpha + deltaAlpha * idx;
              if (me.pinnedAnimationEnabled) {
                me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
              }
              if (me.targetFrame.htmlElement.style) {
                me.targetFrame.htmlElement.style.opacity = _alpha;
              }
              me.targetFrame.setSize(_width, _height, true);
              if (idx == 0) {
                var wmgr = me.targetFrame.parentCanvas;
                if (wmgr) {
                  var _targetFrame = wmgr.getWindow(me.targetFrame.id);
                  if (_targetFrame) {
                    me.targetFrame.show({ requestFocus: requestFocusEnabled });
                  } else {
                  }
                }
              }
              idx++;
            });
            timer.startTimer();
          }
          if (waitMillis) {
            var waiter = new CTimer();
            waiter.setIntervalMillis(waitMillis);
            waiter.setCallback(function(_timer) {
              _timer.stopTimer();
              loop();
            });
            waiter.startTimer();
          } else {
            loop();
          }
        });
      };
      module.exports = CSimpleLayoutAnimator;
    }
  });
  var require_merge_deeply = __commonJS3({
    "dependencies/merge-deeply/dist/merge-deeply.js"() {
      (() => {
        function hasOwnPrototype(obj) {
          return Object.getPrototypeOf(obj) !== Object.prototype;
        }
        function mergeDeeplyInernally(target, source, opts) {
          const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
          const isConcatArray = opts && opts.concatArray;
          const isCloneMode = opts.isCloneMode;
          let assignToObject = {};
          if (opts && opts.assignToObject) {
            assignToObject = opts.assignToObject;
            opts.assignToObject = null;
          }
          let result = null;
          if (assignToObject === target) {
            result = target;
          } else {
            result = Object.assign(assignToObject, target);
          }
          if (isObject(target) && isObject(source)) {
            for (const [sourceKey, sourceValue] of Object.entries(source)) {
              const targetValue = target[sourceKey];
              if (isConcatArray && Array.isArray(sourceValue) && Array.isArray(targetValue) && source !== target) {
                result[sourceKey] = targetValue.concat(...sourceValue);
              } else if (isObject(sourceValue) && Object.prototype.hasOwnProperty.call(target, sourceKey)) {
                result[sourceKey] = mergeDeeplyInernally(targetValue, sourceValue, opts);
              } else {
                let _sourceValue = sourceValue;
                if (isCloneMode && Array.isArray(sourceValue)) {
                  const _clonedArray = [];
                  for (const itemInSourceValue of sourceValue) {
                    const copy = JSON.parse(JSON.stringify(itemInSourceValue));
                    _clonedArray.push(copy);
                  }
                  _sourceValue = _clonedArray;
                }
                Object.assign(result, { [sourceKey]: _sourceValue });
              }
            }
          }
          return result;
        }
        function mergeDeeply(opts) {
          let object1 = null;
          let object2 = null;
          const operation = opts.op;
          if (!operation) {
            throw Error('The initialization property "op" cannot be omitted. "merge","overwrite-merge","clone" can be specified.');
          }
          const isMergeMode = operation === "merge";
          const isCloneMode = operation === "clone";
          const isOverwriteMode = operation === "overwrite-merge";
          if (isMergeMode) {
            object1 = opts.object1;
            object2 = opts.object2;
            if (!(object1 && object2)) {
              throw Error("object1 or object2 is not specified.");
            }
          } else if (isOverwriteMode) {
            object1 = opts.object1;
            object2 = opts.object2;
            if (!(object1 && object2)) {
              throw Error("object1 or object2 is not specified.");
            }
            if (Object.keys(object2).length === 0) {
              return null;
            }
          } else if (isCloneMode) {
            object1 = opts.object1;
            object2 = {};
          } else {
            throw Error(`An invalid "op" property value "${operation}" has been specified.`);
          }
          const prototypeClonedObject = Object.create(Object.getPrototypeOf(object1));
          let resultObject = null;
          const object1HasCustomPrototype = hasOwnPrototype(object1);
          if (isMergeMode && object1HasCustomPrototype || isCloneMode) {
            mergeDeeplyInernally(object1, object1, {
              assignToObject: prototypeClonedObject,
              concatArray: opts && opts.concatArray,
              isCloneMode
            });
            resultObject = prototypeClonedObject;
          } else {
            resultObject = {};
          }
          mergeDeeplyInernally(isCloneMode ? resultObject : object1, object2, {
            assignToObject: isOverwriteMode ? object1 : resultObject,
            concatArray: opts && opts.concatArray
          });
          return resultObject;
        }
      })();
    }
  });
  var require_event_listener_helper = __commonJS3({
    "dependencies/event-listener-helper/dist/event-listener-helper.js"() {
      (() => {
        var EventListenerHelper = class {
          constructor() {
            this.evTargetListenersMap = new Map();
            this.listenerNum = 0;
          }
          addEventListener(eventTarget, eventType, listener, options) {
            let optionsClone = null;
            if (options) {
              optionsClone = this._cloneJson(options);
            }
            if (arguments.length > 4) {
              throw Error("Too many arguments. Number of arguments can be specified 4.");
            }
            this._checkTypeOfOptions(optionsClone);
            let listenerName = null;
            if (optionsClone && optionsClone.listenerName) {
              listenerName = optionsClone.listenerName;
            }
            let onceWrapperListener = null;
            if (optionsClone && optionsClone.once) {
              delete optionsClone.once;
              optionsClone.callbackOnce = true;
              onceWrapperListener = (e) => {
                listener(e);
                this.removeEventListener(eventTarget, eventType, null, optionsClone);
              };
            }
            const result = {
              listenerName: null,
              success: true
            };
            if (onceWrapperListener) {
              eventTarget.addEventListener(eventType, onceWrapperListener, optionsClone);
            } else {
              eventTarget.addEventListener(eventType, listener, optionsClone);
            }
            let evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              evTypeListenersMap = new Map();
              this.evTargetListenersMap.set(eventTarget, evTypeListenersMap);
            }
            let listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs) {
              listenerDefs = new Map();
              evTypeListenersMap.set(eventType, listenerDefs);
            }
            if (listenerName !== null) {
              if (listenerDefs.has(listenerName)) {
                throw Error(`The listenerName "${listenerName}" is already used for the specified event type ${eventType}`);
              }
              listenerDefs.set(listenerName, {
                listener,
                onceListener: onceWrapperListener,
                options: optionsClone
              });
              result.listenerName = listenerName;
            } else {
              const randomListenerName = `listener-${this.listenerNum}`;
              if (!optionsClone) {
                optionsClone = {};
              }
              optionsClone.listenerName = randomListenerName;
              listenerDefs.set(randomListenerName, {
                listener,
                onceListener: onceWrapperListener,
                options: optionsClone
              });
              result.listenerName = randomListenerName;
              this.listenerNum += 1;
            }
            return result;
          }
          removeEventListener(eventTarget, eventType, listener, options) {
            if (arguments.length < 3) {
              throw Error("Three or four arguments are required.");
            }
            if (!(this.typeOf(listener) === "Function" || this.typeOf(listener) === "Null")) {
              throw Error('Type of 3rd arg should be a "Function" or "Null".');
            }
            this._checkTypeOfOptions(options);
            let listenerName = null;
            if (options && options.listenerName) {
              listenerName = options.listenerName;
            }
            const result = {
              success: false,
              message: "unknown error"
            };
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              result.message = `DOM element ${eventTarget}(id=${eventTarget.id}) doesn't have any listeners.`;
              return result;
            }
            const listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs) {
              result.message = `DOM element ${eventTarget}(id=${eventTarget.id}) doesn't have "${eventType}" listeners.`;
              return result;
            }
            if (listenerName) {
              const listenerDef = listenerDefs.get(listenerName);
              if (!listenerDef) {
                result.message = `DOM element ${eventTarget}(id=${eventTarget.id}) doesn't have "${eventType}" listener "${listenerName}"`;
                return result;
              }
              listenerDefs.delete(listenerName);
              if (listenerDef.options && listenerDef.options.callbackOnce) {
                eventTarget.removeEventListener(eventType, listenerDef.onceListener, listenerDef.options);
              } else {
                eventTarget.removeEventListener(eventType, listenerDef.listener, listenerDef.options);
              }
              result.success = true;
            } else if (!listenerName) {
              if (listener) {
                const searchKey = "listener";
                const searchVal = listener;
                const resultListenerName = this._searchKeyInValueContent(listenerDefs, searchKey, searchVal);
                if (resultListenerName) {
                  const storedListenerDef = listenerDefs.get(resultListenerName);
                  const storedOnceListener = storedListenerDef.onceListener;
                  const storedOptions = storedListenerDef.options;
                  listenerDefs.delete(resultListenerName);
                  if (storedOnceListener) {
                    eventTarget.removeEventListener(eventType, storedOnceListener, storedOptions);
                  } else {
                    eventTarget.removeEventListener(eventType, listener, storedOptions);
                  }
                  result.success = true;
                } else {
                  result.success = false;
                  result.message = `Specified listener could not be deleted from DOM element ${eventTarget}(id=${eventTarget.id}).
        Since the specified listener is not registered as an event listener,
        it may have been registered outside of event-listener-helper.`;
                }
              } else {
                result.message = "options.listenerName is not found";
                return result;
              }
            }
            return result;
          }
          getEventListeners(eventTarget, eventType) {
            const result = [];
            if (!eventTarget) {
              return result;
            }
            if (!eventType) {
              return this._getEventListenersWith1Arg(eventTarget);
            }
            return this._getEventListenersWith2Args(eventTarget, eventType);
          }
          getAllEventListeners() {
            const resultMap = new Map();
            this.evTargetListenersMap.forEach((mapValue, mapKey) => {
              const eventTarget = mapKey;
              const listenersForEventTarget = this._getEventListenersWith1Arg(eventTarget);
              const eventTypeListenersMap = new Map();
              resultMap.set(eventTarget, eventTypeListenersMap);
              for (const listenerData of listenersForEventTarget) {
                eventTypeListenersMap.set(listenerData.eventType, listenerData.listeners);
              }
            });
            return resultMap;
          }
          _getEventListenersWith1Arg(eventTarget) {
            const result = [];
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              return result;
            }
            for (const [eventType, listenerDefs] of evTypeListenersMap) {
              const frozenListenerDefs = [];
              for (const listenerDef of listenerDefs.values()) {
                frozenListenerDefs.push(this._getFrozenListenerDef(listenerDef));
              }
              if (frozenListenerDefs.length > 0) {
                result.push({ eventType, listeners: frozenListenerDefs });
              }
            }
            return result;
          }
          _getEventListenersWith2Args(eventTarget, eventType) {
            if (arguments.length !== 2) {
              throw Error("Only two arguments can be specified");
            }
            const result = [];
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              return result;
            }
            const listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs) {
              return result;
            }
            for (const listenerDef of listenerDefs.values()) {
              const frozenListenerDef = this._getFrozenListenerDef(listenerDef);
              result.push(frozenListenerDef);
            }
            return result;
          }
          getEventListener(eventTarget, eventType, listenerName) {
            if (arguments.length !== 3) {
              throw Error("Only 3 arguments can be specified");
            }
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              return null;
            }
            const listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs) {
              return null;
            }
            const listenerDef = listenerDefs.get(listenerName);
            const frozenListenerDef = this._getFrozenListenerDef(listenerDef);
            return frozenListenerDef;
          }
          hasEventListeners(eventTarget, eventType) {
            if (arguments.length !== 2) {
              throw Error("Only two arguments can be specified");
            }
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              return false;
            }
            const listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs || listenerDefs.size === 0) {
              return false;
            }
            return true;
          }
          hasEventListener(eventTarget, eventType, listenerName) {
            if (arguments.length !== 3) {
              throw Error("Only 3 arguments can be specified");
            }
            const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
            if (!evTypeListenersMap) {
              return false;
            }
            const listenerDefs = evTypeListenersMap.get(eventType);
            if (!listenerDefs) {
              return false;
            }
            const listenerDef = listenerDefs.get(listenerName);
            if (listenerDef) {
              return true;
            }
            return false;
          }
          _getFrozenListenerDef(listenerDef) {
            if (!listenerDef) {
              return null;
            }
            const resListenerDef = {};
            let optionsRes = null;
            const optionsOrg = listenerDef.options;
            if (optionsOrg) {
              optionsRes = {};
              resListenerDef.options = optionsRes;
              if (optionsOrg.capture) {
                optionsRes.capture = optionsOrg.capture;
              }
              if (optionsOrg.callbackOnce) {
                optionsRes.once = optionsOrg.callbackOnce;
              }
              if (optionsOrg.listenerName) {
                optionsRes.listenerName = optionsOrg.listenerName;
              }
            }
            resListenerDef.listener = listenerDef.listener;
            Object.freeze(optionsRes);
            Object.freeze(resListenerDef);
            return resListenerDef;
          }
          clearAllEventListeners() {
            const eventTargets = this.getAllEventTargets();
            for (const eventTarget of eventTargets) {
              this.clearEventListeners(eventTarget);
            }
          }
          clearEventListeners(eventTarget, eventType) {
            if (!eventTarget) {
              throw Error("At least the EventTarget must be specified as an argument");
            }
            const items = this.getEventListeners(eventTarget, eventType);
            if (!eventType) {
              for (const item of items) {
                const itemEventType = item.eventType;
                const itemListeners = item.listeners;
                for (const itemListener of itemListeners) {
                  const itemOptions = itemListener.options;
                  this.removeEventListener(eventTarget, itemEventType, null, itemOptions);
                }
              }
            } else if (eventType) {
              for (const item of items) {
                this.removeEventListener(eventTarget, eventType, null, item.options);
              }
            }
          }
          clearEventListener(eventTarget, eventType, listenerName) {
            const listenerDef = this.getEventListener(eventTarget, eventType, listenerName);
            if (listenerDef && listenerDef.options) {
              this.removeEventListener(eventTarget, eventType, null, listenerDef.options);
            }
          }
          getAllEventTargets() {
            return Array.from(this.evTargetListenersMap.keys());
          }
          searchEventListenersByName(listenerName) {
            const result = [];
            const eventTargets = this.getAllEventTargets();
            for (const eventTarget of eventTargets) {
              const evTypeListenersMap = this.evTargetListenersMap.get(eventTarget);
              const eventTypes = evTypeListenersMap.keys();
              for (const eventType of eventTypes) {
                const listenerDefs = evTypeListenersMap.get(eventType);
                const frozenListenerDef = this._getFrozenListenerDef(listenerDefs.get(listenerName));
                if (frozenListenerDef) {
                  result.push(frozenListenerDef);
                }
              }
            }
            return result;
          }
          _searchKeyInValueContent(map, searchKey, searchValue) {
            for (const [k, v] of map) {
              if (v[searchKey] === searchValue) {
                return k;
              }
            }
            return null;
          }
          _checkTypeOfOptions(options) {
            if (typeof options === "object" || typeof options === "undefined") {
              return;
            }
            if (typeof options === "boolean") {
              throw new Error(`Type of boolean is not accepted as the fourth argument you specify.
      If you want to enable useCapture, specify {capture: true} as the fourth parameter instead.`);
            } else {
              throw new Error(`Type of ${typeof options} is not accepted as the fourth argument you specify.
      If you want to specify options, specify an object like {capture: true, listenerName:'my-listener-01'}.`);
            }
          }
          _cloneJson(value) {
            return JSON.parse(JSON.stringify(value));
          }
          typeOf(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
          }
        };
      })();
    }
  });
  var require_WindowEventHelper = __commonJS3({
    "src/utils/WindowEventHelper.js"(exports, module) {
      "use strict";
      var CSimpleLayoutAnimator = require_CSimpleLayoutAnimator();
      var CALIGN2 = require_CCommon();
      var mergeDeeply = require_merge_deeply();
      var EventListenerHelper = require_event_listener_helper();
      function WindowEventHelper(model) {
        this.eventListenerHelper = new EventListenerHelper();
        this.windowMode = "default";
        this.styleDisplay = "flex";
        this.horizontalAlign = "left";
        this.verticalAlign = "top";
        this.keyListener = null;
        this.minimizeButton = null;
        this.maximizeButton = null;
        this.demaximizeButton = null;
        this.deminimizeButton = null;
        this.opts = model;
        this.isWindowManagerFixed = model.frame.jsFrame.isWindowManagerFixed;
        if (model.styleDisplay) {
          this.styleDisplay = model.styleDisplay;
        }
        if (model.minimizeButton) {
          this.minimizeButton = model.minimizeButton;
        }
        if (model.deminimizeButton) {
          this.deminimizeButton = model.deminimizeButton;
        }
        if (model.maximizeButton) {
          this.maximizeButton = model.maximizeButton;
        }
        if (model.demaximizeButton) {
          this.demaximizeButton = model.demaximizeButton;
        }
        if (model.hideButton) {
          this.hideButton = model.hideButton;
        }
        if (model.hideButtons) {
          this.hideButtons = model.hideButtons;
        }
        this.maximizeParam = model.maximizeParam;
        this.demaximizeParam = model.demaximizeParam;
        this.minimizeParam = model.minimizeParam;
        this.deminimizeParam = model.deminimizeParam;
        this.hideParam = model.hideParam;
        this.dehideParam = model.dehideParam;
        if (model.horizontalAlign) {
          this.horizontalAlign = model.horizontalAlign;
        }
        if (model.verticalAlign) {
          this.verticalAlign = model.verticalAlign;
        }
        this.animationEnabled = false;
        this.animationDuration = 100;
        this.frame = model.frame;
        this.hideFrameBorder = true;
        this.hideTitleBar = true;
        this.restoreKey = null;
        this.restoreDuration = null;
        this.restoreCallback = null;
        this.statsStore = {};
        if (model.animation) {
          this.animationEnabled = model.animation;
        }
        if (model.animationDuration) {
          this.animationDuration = model.animationDuration;
        }
        this.eventListeners = {};
        this.resizeListener = this.handleOnResize.bind(this);
        if (this.maximizeParam && this.maximizeParam.matchParent) {
          this.resizeListener = this.handleOnVirtualResize.bind(this);
        }
      }
      WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR = "__jsframe-mp-marker";
      WindowEventHelper.prototype.on = function(eventType, callback) {
        var me = this;
        me.eventListeners[eventType] = callback;
      };
      WindowEventHelper.prototype.doMaximize = function(model) {
        var me = this;
        if (me.windowMode === "hid") {
          throw Error("[JSrame] It is not possible to change directly from the hid state to the maximized state");
          return;
        }
        if (me.windowMode === "maximized" || me.windowMode === "maximizing") {
          return;
        }
        me.windowMode = "maximizing";
        var frame = me.frame;
        if (model && model.matchParent) {
          var windowManager = frame.getWindowManager();
          var parentElement = windowManager.getParentElement();
          if (!me.matchParentResizeObserver) {
            var matchParentResizeObserver = new MutationObserver(function() {
              me.resizeListener();
            });
            matchParentResizeObserver.observe(parentElement, {
              attributeFilter: [WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR],
              attributes: true
            });
            me.matchParentResizeObserver = matchParentResizeObserver;
          }
        } else if (!me.eventListenerHelper.hasEventListener(window, "resize", "window-resize-listener")) {
          me.eventListenerHelper.addEventListener(window, "resize", me.resizeListener, { listenerName: "window-resize-listener" });
        }
        me.saveCurrentWindowStats("maximize_mode");
        me.hideTitleBar = model ? model.fullScreen : false;
        if (me.hideTitleBar) {
          frame.hideAllVisibleFrameComponents();
        } else {
          if (me.maximizeButton) {
            frame.hideFrameComponent(me.maximizeButton);
          }
          if (me.demaximizeButton) {
            frame.showFrameComponent(me.demaximizeButton, me.styleDisplay);
          }
        }
        frame.setMovable(false);
        frame.setResizable(false);
        if (model && model.restoreKey) {
          me.restoreKey = model.restoreKey;
        }
        if (model && model.restoreDuration) {
          me.restoreDuration = model.restoreDuration;
        }
        if (model && model.restoreCallback) {
          me.restoreCallback = model.restoreCallback;
        }
        me.renderMaximizedMode({
          animation: me.animationEnabled,
          callback: model && model.callback ? model.callback : null,
          duration: model && model.duration ? model.duration : null,
          matchParent: model && model.matchParent ? model.matchParent : false
        });
      };
      WindowEventHelper.prototype.renderMaximizedMode = function(model) {
        var me = this;
        var frame = me.frame;
        var from = me.loadWindowStats("maximize_mode");
        var _toX = 0;
        var _toY = 0;
        var _toWidth = 0;
        var _toHeight = 0;
        if (me.hideTitleBar) {
          _toX = 0;
          _toY = -from.titleBarHeight;
        }
        var parentWidth = window.innerWidth;
        var parentHeight = window.innerHeight;
        if (model.matchParent) {
          var windowManager = frame.getWindowManager();
          var parentElement = windowManager.getParentElement();
          parentWidth = parentElement.clientWidth;
          parentHeight = parentElement.clientHeight;
        }
        if (me.hideFrameBorder) {
          _toWidth = parentWidth;
          _toHeight = parentHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
        } else {
          _toWidth = parentWidth - from.frameBorderWidthDefault * 2;
          _toHeight = parentHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
        }
        if (me.horizontalAlign == "right") {
          _toX = -_toWidth;
        }
        if (me.verticalAlign == "bottom") {
          _toY = -_toHeight;
        }
        var funcDoRender = function(opt) {
          var disableCallback = opt && opt.disableCallback;
          frame.setPosition(_toX, _toY);
          if (me.hideFrameBorder) {
            frame.frameBorderWidthDefault = 0;
            frame.frameBorderWidthFocused = 0;
            frame.htmlElement.style.borderWidth = "0px";
          }
          frame.setSize(_toWidth, _toHeight, true);
          if (disableCallback) {
            return;
          }
          if (me.hideTitleBar) {
            if (me.restoreKey) {
              me.keyListener = function(event) {
                if (event.code === me.restoreKey) {
                  me.doCommand("restore");
                }
              };
            }
            window.addEventListener("keydown", me.keyListener);
            if (frame.iframe) {
              frame.iframe.contentWindow.addEventListener("keydown", me.keyListener);
            }
          }
          me.windowMode = "maximized";
          if (model && model.callback) {
            model.callback(me.frame, { eventType: "maximized" });
          }
          if (me.eventListeners["maximized"]) {
            me.eventListeners["maximized"](me.frame, { eventType: "maximized" });
          }
        };
        if (model && model.animation) {
          me.animateFrame({
            frame,
            from,
            to: {
              left: _toX,
              top: _toY,
              width: _toWidth,
              height: _toHeight
            },
            duration: model.duration ? model.duration : me.animationDuration,
            callback: funcDoRender
          });
        } else {
          if (model && model.caller === "handleOnResize") {
            funcDoRender({ disableCallback: true });
          } else {
            funcDoRender();
          }
        }
      };
      WindowEventHelper.prototype.getWindowMode = function() {
        return this.windowMode;
      };
      WindowEventHelper.prototype.doDemaximize = function(model) {
        var me = this;
        var frame = me.frame;
        if (me.windowMode === "hid") {
          throw Error("[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.");
          return;
        }
        if (!me.hasWindowStats("maximize_mode")) {
          return;
        }
        if (me.hideTitleBar) {
        } else {
          if (me.maximizeButton) {
            frame.showFrameComponent(me.maximizeButton, me.styleDisplay);
          }
          if (me.demaximizeButton) {
            frame.hideFrameComponent(me.demaximizeButton);
          }
        }
        me.restoreWindow({
          restorePosition: true,
          restoreMode: "maximize_mode",
          animation: me.animationEnabled,
          callback: model && model.callback ? model.callback : null,
          forceShowFrameComponents: me.animationEnabled && me.hideTitleBar,
          duration: model && model.duration ? model.duration : null,
          eventType: "demaximized"
        });
      };
      WindowEventHelper.prototype.handleOnResize = function() {
        var me = this;
        me.renderMaximizedMode({
          caller: "handleOnResize"
        });
      };
      WindowEventHelper.prototype.handleOnVirtualResize = function() {
        var me = this;
        me.renderMaximizedMode({
          caller: "handleOnResize",
          matchParent: true
        });
      };
      WindowEventHelper.prototype.doMinimize = function(model) {
        var me = this;
        if (me.windowMode === "minimized" || me.windowMode === "minimizing") {
          return;
        }
        me.windowMode = "minimizing";
        var frame = me.frame;
        me.saveCurrentWindowStats("minimize_mode");
        frame.setResizable(false);
        me.renderMinimizedMode({
          animation: me.animationEnabled,
          callback: model && model.callback ? model.callback : null,
          duration: model && model.duration ? model.duration : null,
          toWidth: model && model.toWidth ? model.toWidth : null
        });
      };
      WindowEventHelper.prototype.renderMinimizedMode = function(model) {
        var me = this;
        var frame = me.frame;
        var ri = me.loadWindowStats("minimize_mode");
        var from = me.getCurrentWindowStats();
        var to = me.getCurrentWindowStats();
        to.height = ri.titleBarHeight;
        if (model && model.toWidth) {
          to.width = model.toWidth;
        }
        var funcDoRender = function() {
          var forceSetSize = true;
          frame.setSize(to.width, to.height, forceSetSize);
          me.windowMode = "minimized";
          if (me.minimizeButton) {
            frame.hideFrameComponent(me.minimizeButton);
          }
          if (me.deminimizeButton) {
            frame.showFrameComponent(me.deminimizeButton, me.styleDisplay);
          }
          if (model.callback) {
            model.callback(me.frame, { eventType: "minimized" });
          }
          if (me.eventListeners["minimized"]) {
            me.eventListeners["minimized"](me.frame, { eventType: "minimized" });
          }
        };
        if (model && model.animation) {
          me.animateFrame({
            toAlpha: 1,
            duration: model.duration ? model.duration : me.animationDuration,
            frame,
            from,
            to,
            callback: funcDoRender
          });
        } else {
          funcDoRender();
        }
      };
      WindowEventHelper.prototype.doDeminimize = function(model) {
        var me = this;
        var frame = me.frame;
        if (!me.hasWindowStats("minimize_mode")) {
          return;
        }
        if (me.minimizeButton) {
          frame.showFrameComponent(me.minimizeButton, me.styleDisplay);
        }
        if (me.deminimizeButton) {
          frame.hideFrameComponent(me.deminimizeButton);
        }
        me.restoreWindow({
          restorePosition: false,
          restoreMode: "minimize_mode",
          animation: me.animationEnabled,
          duration: model && model.duration ? model.duration : null,
          callback: model && model.callback ? model.callback : null,
          eventType: "deminimized"
        });
      };
      WindowEventHelper.prototype.doHide = function(model) {
        var me = this;
        if (me.windowMode === "hid" || me.windowMode === "hiding") {
          return;
        }
        me.windowMode = "hiding";
        var frame = me.frame;
        me.saveCurrentWindowStats("hide_mode");
        frame.setResizable(false);
        var arg = {
          animation: me.animationEnabled
        };
        if (model) {
          mergeDeeply({ op: "overwrite-merge", object1: arg, object2: model });
        }
        me.renderHideMode(arg);
      };
      WindowEventHelper.prototype.renderHideMode = function(model) {
        var me = this;
        var frame = me.frame;
        var ri = me.loadWindowStats("hide_mode");
        var from = me.getCurrentWindowStats();
        var offset = { x: 0, y: 0 };
        var toElement = model.toElement;
        if (model.offset) {
          offset = model.offset;
        }
        var left = 0;
        var top = 0;
        {
          var align = model && model.align ? model.align : "LEFT_TOP";
          if (!align || CALIGN2.LEFT_TOP == align) {
            left = from.left;
            top = from.top;
          } else if (CALIGN2.HCENTER_TOP == align) {
            left = from.left + from.width / 2;
            top = from.top;
          } else if (CALIGN2.RIGHT_TOP == align) {
            left = from.left + from.width;
            top = from.top;
          } else if (CALIGN2.LEFT_VCENTER == align) {
            left = from.left;
            top = from.top + from.height / 2;
          } else if (CALIGN2.HCENTER_VCENTER == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height / 2;
          } else if (CALIGN2.RIGHT_VCENTER == align) {
            left = from.left + from.width;
            top = from.top + from.height / 2;
          } else if (CALIGN2.LEFT_BOTTOM == align) {
            left = from.left;
            top = from.top + from.height;
          } else if (CALIGN2.HCENTER_BOTTOM == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height;
          } else if (CALIGN2.RIGHT_BOTTOM == align) {
            left = from.left + from.width;
            top = from.top + from.height;
          } else if (align == "ABSOLUTE") {
            if (toElement) {
              var elementRect = toElement.getBoundingClientRect();
              if (me.isWindowManagerFixed) {
                left = elementRect.left;
                top = elementRect.top;
              } else {
                left = elementRect.left + window.pageXOffset;
                top = elementRect.top + window.pageYOffset;
              }
            } else {
              left = offset.x;
              top = offset.y;
            }
          }
        }
        var to = {
          left,
          top,
          width: 0,
          height: ri.titleBarHeight
        };
        var funcDoRender = function() {
          var forceSetSize = true;
          frame.setSize(to.width, to.height, forceSetSize);
          me.windowMode = "hid";
          if (model && model.callback) {
            model.callback(me.frame, { eventType: "hid" });
          }
          if (me.eventListeners["hid"]) {
            me.eventListeners["hid"](me.frame, { eventType: "hid" });
          }
        };
        frame.hideAllVisibleFrameComponents();
        if (model && model.animation) {
          me.animateFrame({
            fromAlpha: model.silent ? 0 : 1,
            toAlpha: 0,
            ease: true,
            duration: model.duration ? model.duration : me.animationDuration,
            frame,
            from,
            to,
            callback: funcDoRender
          });
        } else {
          funcDoRender();
        }
      };
      WindowEventHelper.prototype.doDehide = function(model) {
        var me = this;
        var frame = me.frame;
        if (!me.hasWindowStats("hide_mode")) {
          return;
        }
        me.restoreWindow({
          duration: model && model.duration ? model.duration : null,
          restorePosition: true,
          restoreMode: "hide_mode",
          animation: me.animationEnabled,
          forceShowFrameComponents: true,
          callback: model && model.callback ? model.callback : null,
          eventType: "dehided"
        });
      };
      WindowEventHelper.prototype.loadWindowStats = function(storeKeyName) {
        var me = this;
        return me.statsStore[storeKeyName];
      };
      WindowEventHelper.prototype.saveCurrentWindowStats = function(storeKeyName) {
        var me = this;
        var crrWindowStats = me.getCurrentWindowStats();
        if (me.hasWindowStats(storeKeyName)) {
          var storedStats = me.loadWindowStats(storeKeyName);
          var isWindowStatsUpdated = !me.windowStatsEquals(crrWindowStats, storedStats);
          if (isWindowStatsUpdated) {
            me.statsStore[storeKeyName] = crrWindowStats;
          }
          return isWindowStatsUpdated;
        } else {
          me.statsStore[storeKeyName] = crrWindowStats;
          return true;
        }
      };
      WindowEventHelper.prototype.windowStatsEquals = function(windowStats1, windowStats2) {
        if (windowStats1 && windowStats2) {
          var result = JSON.stringify(windowStats1) === JSON.stringify(windowStats2);
          return result;
        } else {
          return false;
        }
      };
      WindowEventHelper.prototype.clearWindowStats = function(storeKeyName) {
        var me = this;
        me.statsStore[storeKeyName] = null;
      };
      WindowEventHelper.prototype.hasWindowStats = function(storeKeyName) {
        var me = this;
        return me.statsStore[storeKeyName];
      };
      WindowEventHelper.prototype.getCurrentWindowStats = function() {
        var me = this;
        var frame = me.frame;
        var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
        var __frameBorderWidthDefault = frame.frameBorderWidthDefault;
        var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
        var __left = frame.getLeft();
        var __top = frame.getTop();
        var __width = frame.getWidth();
        var __height = frame.getHeight();
        var __resizable = frame.resizable;
        var __movable = frame.movable;
        return {
          left: __left,
          top: __top,
          width: __width,
          height: __height,
          titleBarHeight: __titleBarHeight,
          frameBorderWidthDefault: __frameBorderWidthDefault,
          frameBorderWidthFocused: __frameBorderWidthFocused,
          resizable: __resizable,
          movable: __movable
        };
      };
      WindowEventHelper.prototype.restoreWindow = function(model) {
        var me = this;
        var frame = me.frame;
        var to = me.loadWindowStats(model.restoreMode);
        var crr = me.getCurrentWindowStats();
        frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
        frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
        frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;
        var funcDoRender = function() {
          if (model && model.restorePosition == false) {
            to.left = crr.left;
            to.top = crr.top;
          }
          frame.setPosition(to.left, to.top);
          var force = true;
          frame.setSize(to.width, to.height, force);
          frame.setResizable(to.resizable);
          frame.setMovable(to.movable);
          me.clearWindowStats(model.restoreMode);
          if (me.keyListener) {
            window.removeEventListener("keydown", me.keyListener);
            if (frame.iframe) {
              frame.iframe.contentWindow.removeEventListener("keydown", me.keyListener);
            }
            me.keyListener = null;
          }
          me.windowMode = "default";
          if (model && model.forceShowFrameComponents) {
            frame.showAllVisibleFrameComponents();
          }
          frame.show();
          var eventType = "restored";
          if (model && model.eventType) {
            eventType = model.eventType;
          }
          if (model && model.callback) {
            model.callback(me.frame, { eventType });
          }
          if (me.eventListeners[eventType]) {
            me.eventListeners[eventType](me.frame, { eventType });
          }
        };
        if (model && model.animation) {
          me.animateFrame({
            duration: model.duration ? model.duration : me.animationDuration,
            frame,
            fromAlpha: 0,
            toAlpha: 1,
            from: crr,
            to,
            callback: funcDoRender
          });
        } else {
          funcDoRender();
        }
        me.eventListenerHelper.removeEventListener(window, "resize", me.resizeListener);
        if (me.matchParentResizeObserver) {
          me.matchParentResizeObserver.disconnect();
          me.matchParentResizeObserver = null;
        }
      };
      WindowEventHelper.prototype.animateFrame = function(model) {
        var me = this;
        var needRequestFocusAfterAnimation = false;
        var fromAlpha = !isNaN(model.fromAlpha) ? model.fromAlpha : 1;
        var from = model.from;
        var to = model.to;
        var animator = new CSimpleLayoutAnimator();
        animator.set(model.frame).setDuration(model.duration ? model.duration : me.animationDuration).fromPosition(from.left, from.top, "LEFT_TOP").toPosition(to.left, to.top, "LEFT_TOP").fromWidth(from.width).fromHeight(from.height).toWidth(to.width).toHeight(to.height).fromAlpha(fromAlpha).toAlpha(model.toAlpha == 0 ? 0 : 1).ease(model.ease).start(0, needRequestFocusAfterAnimation).then(function(animatorObj) {
          model["callback"]();
        });
      };
      WindowEventHelper.prototype.doCommand = function(cmd, opt) {
        var me = this;
        if (cmd === "maximize") {
          me._defaultFunctionMaximize(me.frame);
        }
        if (cmd === "demaximize") {
          me._defaultFunctionDemaximize(me.frame);
        }
        if (cmd === "restore") {
          me._defaultFunctionRestoreFromFullscreen(me.frame);
        }
        if (cmd === "minimize") {
          me._defaultFunctionMinimize(me.frame);
        }
        if (cmd === "deminimize") {
          me._defaultFunctionDeminimize(me.frame);
        }
        if (cmd === "hide") {
          me._defaultFunctionHide(me.frame);
        }
        if (cmd === "dehide") {
          me._defaultFunctionDehide(me.frame);
        }
      };
      WindowEventHelper.prototype._defaultFunctionMaximize = function(_frame, evt) {
        var me = this;
        var model = me.opts;
        var param = {
          fullScreen: model.maximizeWithoutTitleBar === true ? true : false,
          restoreKey: model.restoreKey ? model.restoreKey : "Escape",
          restoreDuration: model.restoreDuration
        };
        if (this.maximizeParam) {
          mergeDeeply({ op: "overwrite-merge", object1: param, object2: this.maximizeParam });
        }
        _frame.control.doMaximize(param);
      };
      WindowEventHelper.prototype._defaultFunctionDemaximize = function(_frame, evt) {
        _frame.control.doDemaximize({});
      };
      WindowEventHelper.prototype._defaultFunctionRestoreFromFullscreen = function(_frame, evt) {
        var me = this;
        _frame.control.doDemaximize({
          duration: me.restoreDuration ? me.restoreDuration : null,
          callback: me.restoreCallback ? me.restoreCallback : null
        });
      };
      WindowEventHelper.prototype._defaultFunctionMinimize = function(_frame, evt) {
        _frame.control.doMinimize(this.minimizeParam);
      };
      WindowEventHelper.prototype._defaultFunctionDeminimize = function(_frame, evt) {
        _frame.control.doDeminimize(this.deminimizeParam);
      };
      WindowEventHelper.prototype._defaultFunctionHide = function(_frame, evt) {
        var param = {
          align: "CENTER_BOTTOM"
        };
        if (this.hideParam) {
          param = this.hideParam;
        }
        _frame.control.doHide(param);
      };
      WindowEventHelper.prototype._defaultFunctionDehide = function(_frame, evt) {
        var me = this;
        _frame.control.doDehide(me.dehideParam);
      };
      WindowEventHelper.prototype.setupDefaultEvents = function() {
        var me = this;
        if (me.maximizeButton) {
          me.frame.on(me.maximizeButton, "click", me._defaultFunctionMaximize.bind(me));
        }
        if (me.demaximizeButton) {
          me.frame.on(me.demaximizeButton, "click", me._defaultFunctionDemaximize.bind(me));
        }
        if (me.minimizeButton) {
          me.frame.on(me.minimizeButton, "click", me._defaultFunctionMinimize.bind(me));
        }
        if (me.deminimizeButton) {
          me.frame.on(me.deminimizeButton, "click", me._defaultFunctionDeminimize.bind(me));
        }
        if (me.hideButton) {
          me.frame.on(me.hideButton, "click", me._defaultFunctionHide.bind(me));
        }
        if (me.hideButtons) {
          for (var key in me.hideButtons) {
            var hideButton = me.hideButtons[key];
            if (hideButton) {
              me.frame.on(hideButton, "click", me._defaultFunctionHide.bind(me));
            }
          }
        }
      };
      module.exports = WindowEventHelper;
    }
  });
  var require_Inherit = __commonJS3({
    "src/utils/Inherit.js"(exports, module) {
      function inherit(subClass, baseClass) {
        function clazz() {
        }
        clazz.prototype = baseClass.prototype;
        subClass.prototype = new clazz();
        subClass.prototype.constructor = subClass;
        subClass.superConstructor = baseClass;
        subClass.superClass = baseClass.prototype;
      }
      module.exports = inherit;
    }
  });
  var require_CButtonAppearance = __commonJS3({
    "src/appearance/CButtonAppearance.js"(exports, module) {
      function CTextButtonAppearance() {
        var crossMark0 = "\u274C";
        this.size = 14;
        this.width = null;
        this.height = null;
        this.borderRadius = 2;
        this.borderWidth = 0;
        this.borderColorDefault = "#aaaaaa";
        this.borderColorFocused = this.borderColorDefault;
        this.borderColorHovered = null;
        this.borderColorPressed = this.borderColorDefault;
        this.borderStyleDefault = "solid";
        this.borderStyleFocused = this.borderStyleDefault;
        this.borderStyleHovered = null;
        this.borderStylePressed = this.borderStyleDefault;
        this.backgroundBoxShadow = null;
        this.backgroundColorDefault = "transparent";
        this.backgroundColorFocused = this.backgroundColorDefault;
        this.backgroundColorHovered = null;
        this.backgroundColorPressed = this.backgroundColorDefault;
        this.caption = null;
        this.captionColorDefault = "white";
        this.captionColorFocused = this.captionColorDefault;
        this.captionColorHovered = null;
        this.captionColorPressed = this.captionColorDefault;
        this.captionShiftYpx = 0;
        this.captionFontRatio = 1;
      }
      module.exports = CTextButtonAppearance;
    }
  });
  var require_CImageButtonAppearance = __commonJS3({
    "src/appearance/CImageButtonAppearance.js"(exports, module) {
      var inherit = require_Inherit();
      var CTextButtonAppearance = require_CButtonAppearance();
      inherit(CImageButtonAppearance, CTextButtonAppearance);
      function CImageButtonAppearance() {
        this.imageDefault = null;
        this.imageHovered = null;
        this.imagePressed = null;
        this.imageFocused = null;
        this.imageStore = {};
      }
      CImageButtonAppearance.prototype._setImage = function(src, width, height) {
        var me = this;
        var storedImgEle = me.imageStore[src];
        if (storedImgEle) {
          return storedImgEle;
        } else {
          var imgEle = document.createElement("img");
          imgEle.src = src;
          if (width && height) {
            var imgWidth = width;
            var imgHeight = height;
            var imgStyle = "margin:0px;padding:0px;width:" + imgWidth + "px;height:" + imgHeight + "px";
            imgEle.setAttribute("style", imgStyle);
          }
          me.imageStore[src] = imgEle;
          return imgEle;
        }
      };
      CImageButtonAppearance.prototype.setSrc = function(model) {
        var me = this;
        if (model.default) {
          me.imageDefault = me._setImage(model.default, model.width, model.height);
        }
        if (model.hovered) {
          me.imageHovered = me._setImage(model.hovered, model.width, model.height);
        }
        if (model.pressed) {
          me.imagePressed = me._setImage(model.pressed, model.width, model.height);
        }
        if (model.focused) {
          me.imageFocused = me._setImage(model.focused, model.width, model.height);
        }
      };
      module.exports = CImageButtonAppearance;
    }
  });
  var require_CChildMenuAppearance = __commonJS3({
    "src/appearance/CChildMenuAppearance.js"(exports, module) {
      function CChildMenuAppearance(model) {
        this.childMenuHTML = "";
        this.childMenuWidth = 0;
        this.childMenuAlign = "LEFT";
        this.yOffset = 0;
        this.xOffset = 0;
      }
      module.exports = CChildMenuAppearance;
    }
  });
  var require_CDomPartsBuilder = __commonJS3({
    "src/appearance/CDomPartsBuilder.js"(exports, module) {
      var mergeDeeply = require_merge_deeply();
      var CTextButtonAppearance = require_CButtonAppearance();
      var CImageButtonAppearance = require_CImageButtonAppearance();
      var CChildMenuAppearance = require_CChildMenuAppearance();
      function CDomPartsBuilder() {
      }
      CDomPartsBuilder.prototype.buildChildMenuAppearance = function(frameAppearance) {
        return new CChildMenuAppearance(frameAppearance);
      };
      CDomPartsBuilder.prototype.buildTextButtonAppearance = function(src) {
        if (src) {
          var result = mergeDeeply({ op: "clone", object1: src, concatArray: true });
          return result;
        } else {
          return new CTextButtonAppearance();
        }
      };
      CDomPartsBuilder.prototype.buildImageButtonAppearance = function(src) {
        if (src) {
          var clonedImageButtonAppearance = mergeDeeply({ op: "clone", object1: src });
          return clonedImageButtonAppearance;
        } else {
          return new CImageButtonAppearance();
        }
      };
      CDomPartsBuilder.prototype.buildButton = function(btnAppearance) {
        var me = this;
        return me.buildTextButton(btnAppearance);
      };
      CDomPartsBuilder.prototype.appendChildMenuTo = function(childMenuAppearance, parentEle) {
        var me = this;
        var ndiv = document.createElement("div");
        ndiv.classList.add("jsframe-child-menu");
        ndiv.innerHTML = childMenuAppearance.childMenuHTML;
        ndiv.style.position = "absolute";
        ndiv.style.pointerEvents = "none";
        ndiv.style.width = childMenuAppearance.childMenuWidth + "px";
        ndiv.style.display = "none";
        var posX = childMenuAppearance.xOffset;
        var posY = parseInt(parentEle.style.height, 10) + childMenuAppearance.yOffset + 2;
        if (childMenuAppearance.childMenuAlign === "LEFT") {
          ndiv.style.left = posX + "px";
        } else if (childMenuAppearance.childMenuAlign === "RIGHT") {
          ndiv.style.right = posX + "px";
        } else if (childMenuAppearance.childMenuAlign === "CENTER") {
          posX = -childMenuAppearance.childMenuWidth / 2 + parseInt(parentEle.style.height, 10) / 2;
          ndiv.style.left = posX + "px";
        }
        ndiv.style.top = posY + "px";
        ndiv.firstChild.style.pointerEvents = "auto";
        parentEle.appendChild(ndiv);
      };
      CDomPartsBuilder.prototype.buildTextButton = function(btnAppearance) {
        var size = btnAppearance.size;
        var width = size;
        var height = size;
        if (btnAppearance.width != null) {
          width = btnAppearance.width;
        }
        if (btnAppearance.height != null) {
          height = btnAppearance.height;
        }
        var divElement = document.createElement("div");
        var borderWidth = btnAppearance.borderWidth;
        var borderRadius = btnAppearance.borderRadius;
        var borderColorDefault = btnAppearance.borderColorDefault;
        var borderColorFocused = btnAppearance.borderColorFocused;
        var borderColorHovered = btnAppearance.borderColorHovered;
        var borderColorPressed = btnAppearance.borderColorPressed;
        var borderStyleDefault = btnAppearance.borderStyleDefault;
        var borderStyleFocused = btnAppearance.borderStyleFocused;
        var borderStyleHovered = btnAppearance.borderStyleHovered;
        var borderStylePressed = btnAppearance.borderStylePressed;
        var backgroundColorDefault = btnAppearance.backgroundColorDefault;
        var backgroundColorFocused = btnAppearance.backgroundColorFocused;
        var backgroundColorHovered = btnAppearance.backgroundColorHovered;
        var backgroundColorPressed = btnAppearance.backgroundColorPressed;
        var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;
        var fa = btnAppearance.fa;
        var caption = btnAppearance.caption;
        var btnImageDefault = btnAppearance.imageDefault;
        var btnImageFocused = btnAppearance.imageFocused;
        var btnImageHovered = btnAppearance.imageHovered;
        var btnImagePressed = btnAppearance.imagePressed;
        if (btnImageDefault) {
          btnImageDefault.style.pointerEvents = "none";
        }
        if (btnImageFocused) {
          btnImageFocused.style.pointerEvents = "none";
        }
        if (btnImageHovered) {
          btnImageHovered.style.pointerEvents = "none";
        }
        if (btnImagePressed) {
          btnImagePressed.style.pointerEvents = "none";
        }
        var _captionColorDefault = btnAppearance.captionColorDefault;
        var captionColorFocused = btnAppearance.captionColorFocused;
        var captionColorHovered = btnAppearance.captionColorHovered;
        var captionColorPressed = btnAppearance.captionColorPressed;
        var captionShiftYpx = btnAppearance.captionShiftYpx;
        var captionFontRatio = btnAppearance.captionFontRatio;
        divElement._hasFrameFocus = false;
        divElement._isMouseDown = false;
        divElement.style.position = "absolute";
        divElement.style.top = "0px";
        divElement.style.left = "0px";
        divElement.style.width = width + "px";
        divElement.style.height = height + "px";
        if (btnAppearance.cursor) {
          divElement.style.cursor = btnAppearance.cursor;
        } else {
          divElement.style.cursor = "pointer";
        }
        divElement.style.margin = "0px";
        divElement.style.padding = "0px";
        divElement.style.boxSizing = "content-box";
        divElement.style.fontFamily = "sans-serif";
        divElement.onmousedown = function(e) {
          divElement._isMouseDown = true;
          divElement._handleFocusDrawing("onmousedown");
        };
        divElement.onmouseout = function(e) {
          divElement._isMouseDown = false;
          divElement._handleFocusDrawing("onmouseout");
        };
        divElement.onmouseover = function(e) {
          divElement._handleHoverDrawing();
        };
        divElement.onmouseup = function(e) {
          divElement._isMouseDown = false;
          divElement._handleFocusDrawing("onmouseup");
        };
        divElement._onTakeFocus = function() {
          divElement._hasFrameFocus = true;
          divElement._handleFocusDrawing("_onTakeFocus");
        };
        divElement._onReleaseFocus = function() {
          divElement._hasFrameFocus = false;
          divElement._handleFocusDrawing("_onReleaseFocus");
        };
        divElement._handleFocusDrawing = function(evtName) {
          if (divElement._hasFrameFocus) {
            if (divElement._isMouseDown) {
              divElement.style.borderColor = borderColorPressed;
              divElement.style.borderStyle = borderStylePressed;
              divElement.style.backgroundColor = backgroundColorPressed;
              divElement.style.color = captionColorPressed;
              if (btnImagePressed) {
                updateImage(btnImagePressed, divElement);
              }
            } else {
              divElement.style.borderColor = borderColorFocused;
              divElement.style.borderStyle = borderStyleFocused;
              divElement.style.backgroundColor = backgroundColorFocused;
              divElement.style.color = captionColorFocused;
              if (btnImageFocused) {
                updateImage(btnImageFocused, divElement);
              }
            }
          } else {
            if (divElement._isMouseDown) {
              divElement.style.borderColor = borderColorPressed;
              divElement.style.borderStyle = borderStylePressed;
              divElement.style.backgroundColor = backgroundColorPressed;
              divElement.style.color = captionColorPressed;
              if (btnImagePressed) {
                updateImage(btnImagePressed, divElement);
              }
            } else {
              divElement.style.borderColor = borderColorDefault;
              divElement.style.borderStyle = borderStyleDefault;
              divElement.style.backgroundColor = backgroundColorDefault;
              divElement.style.color = _captionColorDefault;
              if (btnImageDefault) {
                updateImage(btnImageDefault, divElement);
              }
            }
          }
        };
        divElement._handleHoverDrawing = function() {
          if (divElement._hasFrameFocus) {
          } else {
          }
          if (borderColorHovered) {
            divElement.style.borderColor = borderColorHovered;
          }
          if (borderStyleHovered) {
            divElement.style.borderStyle = borderStyleHovered;
          }
          if (backgroundColorHovered) {
            divElement.style.backgroundColor = backgroundColorHovered;
          }
          if (captionColorHovered) {
            divElement.style.color = captionColorHovered;
          }
          if (btnImageHovered) {
            updateImage(btnImageHovered, divElement);
          }
        };
        divElement.style.padding = "0px";
        divElement.style.textAlign = "center";
        divElement.style.fontSize = height * captionFontRatio + "px";
        divElement.style.lineHeight = height + "px";
        divElement.style.borderWidth = "1px";
        if (borderWidth != null) {
          divElement.style.borderWidth = borderWidth + "px";
        }
        if (backgroundBoxShadow != null) {
          divElement.style.boxShadow = backgroundBoxShadow;
        }
        divElement.style.borderRadius = borderRadius + parseInt(divElement.style.borderWidth) + "px";
        var childMode = true;
        if (childMode && btnImageDefault) {
          updateImage(btnImageDefault, divElement);
        } else if (childMode && caption) {
          var span = document.createElement("span");
          span.style.width = "100%";
          span.style.marginTop = captionShiftYpx + "px";
          span.style.display = "inline-block";
          span.style.textAlign = "center";
          span.style.fontFamily = "sans-serif";
          span.appendChild(document.createTextNode(caption));
          divElement.appendChild(span);
        } else if (childMode && fa) {
          var span = document.createElement("span");
          span.style.pointerEvents = "none";
          span.style.width = "100%";
          span.style.marginTop = captionShiftYpx + "px";
          span.style.display = "inline-block";
          span.style.textAlign = "center";
          span.style.fontFamily = "sans-serif";
          span.innerHTML = '<i class="' + fa + '"></i>';
          divElement.appendChild(span);
        } else if (!childMode && caption) {
          divElement.style.paddingTop = captionShiftYpx + "px";
          divElement.appendChild(document.createTextNode(caption));
        }
        divElement._handleFocusDrawing();
        return divElement;
      };
      function updateImage(image, parentElement) {
        var imgs = parentElement.querySelectorAll("img");
        if (parentElement.firstChild) {
          parentElement.insertBefore(image, parentElement.firstChild);
        } else {
          parentElement.appendChild(image);
        }
        for (var i2 = 0; i2 < imgs.length; i2++) {
          var img = imgs[i2];
          if (image !== img) {
            parentElement.removeChild(img);
          }
        }
      }
      module.exports = CDomPartsBuilder;
    }
  });
  var require_CFrameComponent = __commonJS3({
    "src/appearance/CFrameComponent.js"(exports, module) {
      function CFrameComponent(id, htmlElement, x, y, align, extra) {
        var me = this;
        me.id = id;
        me.x = x;
        me.y = y;
        me.frame = null;
        me._focusTakingCallabck = null;
        me._focusReleasingCallabck = null;
        if (align) {
          me.frameComponentAlign = align;
        } else {
          me.frameComponentAlign = CALIGN.LEFT_TOP;
        }
        me.htmlElement = htmlElement;
        me.htmlElement.style.zIndex = 50;
        me.htmlElement.setAttribute("component-id", id);
        if (extra && extra.childMenu) {
          me.childMenu = extra.childMenu;
        } else if (htmlElement.querySelector(".jsframe-child-menu")) {
          me.childMenu = htmlElement.querySelector(".jsframe-child-menu");
        }
      }
      CFrameComponent.prototype.setFocusCallback = function(focusTakingCallback, focusReleasingCallback) {
        var me = this;
        me._focusTakingCallabck = focusTakingCallback;
        me._focusReleasingCallabck = focusReleasingCallback;
      };
      CFrameComponent.prototype.setFrame = function(frame) {
        var me = this;
        me.frame = frame;
        me.htmlElement.parentObject = frame;
        me.updateAlign();
      };
      CFrameComponent.prototype.updateAlign = function() {
        var me = this;
        var frameComponentAlign = me.frameComponentAlign;
        var frame = me.frame;
        var eleStyle = me.htmlElement.style;
        eleStyle.userSelect = "none";
        var x = me.x;
        var y = me.y;
        var frameWidth = frame.getWidth();
        var frameHeight = frame.getHeight();
        var eleStyleWidth = eleStyle.width;
        var eleStyleHeight = eleStyle.height;
        if (CALIGN.LEFT_TOP == frameComponentAlign) {
          eleStyle.left = x + "px";
          eleStyle.top = y + "px";
        } else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
          eleStyle.top = y + "px";
        } else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
          eleStyle.top = y + "px";
        } else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
          eleStyle.left = x + "px";
          eleStyle.top = parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
        } else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
          eleStyle.top = parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
        } else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
          eleStyle.top = parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
        } else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
          eleStyle.left = x + "px";
          eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
        } else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
          eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
        } else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
          eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
          eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
        }
      };
      CFrameComponent.prototype.handleTakingFocus = function() {
        var me = this;
        if (me._focusTakingCallabck) {
          me._focusTakingCallabck();
        }
      };
      CFrameComponent.prototype.handleReleasingFocus = function() {
        var me = this;
        if (me._focusReleasingCallabck) {
          me._focusReleasingCallabck();
        }
      };
      module.exports = CFrameComponent;
    }
  });
  var require_CFrameAppearance = __commonJS3({
    "src/appearance/CFrameAppearance.js"(exports, module) {
      var CDomPartsBuilder = require_CDomPartsBuilder();
      var CFrameComponent = require_CFrameComponent();
      function CFrameAppearance() {
        var me = this;
        this.showTitleBar = true;
        this.showCloseButton = true;
        this.titleBarCaption = "";
        this.titleBarCaptionFontSize = "12px";
        this.titleBarCaptionFontWeight = "bold";
        this.titleBarHeight = "24px";
        this.useIframe = false;
        this.useFrame = true;
        this.titleBarClassNameDefault = null;
        this.titleBarClassNameFocused = null;
        this.setUseIFrame = function(value) {
          me.useIframe = value;
          me.useFrame = !value;
          return me;
        };
        this.titleBarCaptionLeftMargin = "5px";
        this.titleBarColorDefault = null;
        this.titleBarColorFocused = null;
        this.titleBarCaptionColorDefault = "";
        this.titleBarCaptionColorFocused = "";
        this.titleBarCaptionTextShadow = "0 1px 0 rgba(255,255,255,.7)";
        this.titleBarCaptionTextAlign = "center";
        this.titleBarBorderBottomDefault = "1px solid rgba(0,0,0,0.2)";
        this.titleBarBorderBottomFocused = null;
        this.frameBorderRadius = "6px";
        this.frameBorderWidthDefault = "1px";
        this.frameBorderWidthFocused = this.frameBorderWidthDefault;
        this.frameBorderColorDefault = "rgba(1, 1, 1, 0.2)";
        this.frameBorderColorFocused = this.frameBorderColorDefault;
        this.frameBorderStyle = "solid";
        this.frameBoxShadow = "2px 3px 16px rgba(0,0,0,.6)";
        this.frameBackgroundColor = "transparent";
        this._partsBuilder = null;
        this.frameComponents = [];
        this.frameHeightAdjust = 1;
        this.resizeAreaWidth = 20;
        this.resizeAreaHeight = 20;
        this.resizeAreaOffset = 0;
        this.resizeAreaVisible = false;
        this.getFrameInnerBorderRadius = function(ref, hasFocus) {
          if (!ref) {
            return null;
          }
          if (hasFocus) {
            return {
              frameAppearance: me,
              innerBorderRadius: parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthFocused, 10) + "px"
            };
          }
          return {
            frameAppearance: me,
            innerBorderRadius: parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthDefault, 10) + "px"
          };
        };
        this.onInitialize = function() {
          if (me.showCloseButton) {
            var partsBuilder = me.getPartsBuilder(), crossMark0 = "\u274C", crossMark1 = "\u2716", crossMark2 = "\u274E";
            var btnAppearance = partsBuilder.buildTextButtonAppearance();
            btnAppearance.size = 14;
            btnAppearance.captionShiftYpx = 0;
            btnAppearance.captionFontRatio = 1;
            btnAppearance.borderRadius = 2;
            btnAppearance.backgroundColorPressed = "transparent";
            btnAppearance.backgroundColorDefault = "transparent";
            btnAppearance.caption = crossMark1;
            btnAppearance.captionColorDefault = "gray";
            btnAppearance.captionColorFocused = "gray";
            btnAppearance.captionColorHovered = "silver";
            btnAppearance.captionColorPressed = "black";
            btnAppearance.borderWidth = 0;
            btnAppearance.borderColorDefault = "#aaaaaa";
            btnAppearance.borderStyle = "solid";
            var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
            var eleLeft = -10;
            var eleTop = -18;
            var eleAlign = "RIGHT_TOP";
            var frameComponent = me.addFrameComponent("closeButton", closeBtnEle, eleLeft, eleTop, eleAlign);
          }
        };
        this.onTitleBarStyleInitialize = function() {
        };
      }
      CFrameAppearance.prototype.getPartsBuilder = function() {
        var me = this;
        if (me._partsBuilder === null) {
          me._partsBuilder = new CDomPartsBuilder();
        }
        return me._partsBuilder;
      };
      CFrameAppearance.prototype.initialize = function() {
        var me = this;
        me.onInitialize();
      };
      CFrameAppearance.prototype.addFrameComponent = function(id, myDomElement, x, y, align, extra) {
        var frameComponent = new CFrameComponent(id, myDomElement, x, y, align, extra);
        if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
          frameComponent.setFocusCallback(myDomElement._onTakeFocus, myDomElement._onReleaseFocus);
        }
        this.frameComponents.push(frameComponent);
        return frameComponent;
      };
      module.exports = CFrameAppearance;
    }
  });
  var require_2 = __commonJS3({
    "src/presets/appearance/PresetStyleYosemite.css"(exports, module) {
      module.exports = {};
    }
  });
  var require_ObjectAssigner = __commonJS3({
    "src/utils/ObjectAssigner.js"(exports, module) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function isObject(item) {
        return item && (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && !Array.isArray(item);
      }
      function objectAssign(target) {
        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }
        if (!sources.length)
          return target;
        var source = sources.shift();
        if (isObject(target) && isObject(source)) {
          for (var key in source) {
            if (isObject(source[key])) {
              if (!target[key])
                Object.assign(target, _defineProperty({}, key, {}));
              objectAssign(target[key], source[key]);
            } else {
              Object.assign(target, _defineProperty({}, key, source[key]));
            }
          }
        }
        return objectAssign.apply(void 0, [target].concat(sources));
      }
      module.exports.objectAssign = objectAssign;
    }
  });
  var require_PresetStyleYosemite = __commonJS3({
    "src/presets/appearance/PresetStyleYosemite.js"(exports, module) {
      require_2();
      var ObjectAssigner = require_ObjectAssigner();
      function getStyle(fApr, userParam) {
        var srcParam = {
          titleBar: {
            greenButton: "maximize"
          }
        };
        var param = srcParam;
        if (userParam) {
          ObjectAssigner.objectAssign(srcParam, userParam);
        }
        fApr.showTitleBar = true;
        fApr.showCloseButton = true;
        fApr.titleBarCaptionFontSize = "11px";
        fApr.titleBarCaptionFontWeight = "normal";
        fApr.titleBarCaptionLeftMargin = null;
        fApr.titleBarCaptionColorDefault = "#4d494d";
        fApr.titleBarCaptionColorFocused = "#4d494d";
        fApr.titleBarHeight = "26px";
        fApr.titleBarColorDefault = null;
        fApr.titleBarColorFocused = null;
        fApr.titleBarBorderBottomDefault = "1px solid #b1aeb1";
        fApr.titleBarBorderBottomFocused = fApr.titleBarBorderBottomDefault;
        fApr.frameBorderRadius = "6px";
        fApr.frameBorderWidthDefault = "1px";
        fApr.frameBorderWidthFocused = "1px";
        fApr.frameBorderColorDefault = "#acacac";
        fApr.frameBorderColorFocused = "#acacac";
        fApr.frameBorderStyle = "solid";
        fApr.frameBoxShadow = "0px 0px 20px rgba(0, 0, 0, 0.3)";
        fApr.frameBackgroundColor = "transparent";
        fApr.frameComponents = new Array();
        fApr.getTitleBarStyle = function() {
          if (fApr.focusedFrameOnly) {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-yosemite-focused",
              titleBarClassNameFocused: "jsframe-preset-style-yosemite-focused"
            };
          } else {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-yosemite-default",
              titleBarClassNameFocused: "jsframe-preset-style-yosemite-focused"
            };
          }
        };
        fApr.onInitialize = function() {
          var partsBuilder = fApr.getPartsBuilder();
          var img_data_close_hovered = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==";
          var img_data_maximize_hovered = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC";
          if (param.titleBar.greenButton === "fullscreen") {
            img_data_maximize_hovered = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg==";
          }
          var img_data_demaximize_hovered = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=";
          var img_data_minimize_hovered = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==";
          var img_data_1dot_transparent = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=";
          var img_width = 10;
          var img_height = 10;
          var img_style = "margin:0px;padding:0px;width:" + img_width + "px;height:" + img_height + "px";
          var imageMaximize = document.createElement("img");
          imageMaximize.src = img_data_maximize_hovered;
          imageMaximize.setAttribute("style", img_style);
          var imageDemaximize = document.createElement("img");
          imageDemaximize.src = img_data_demaximize_hovered;
          imageDemaximize.setAttribute("style", img_style);
          var imageMinimize = document.createElement("img");
          imageMinimize.src = img_data_minimize_hovered;
          imageMinimize.setAttribute("style", img_style);
          var imageClose = document.createElement("img");
          imageClose.src = img_data_close_hovered;
          imageClose.setAttribute("style", img_style);
          var imgTransparent = document.createElement("img");
          imgTransparent.src = img_data_1dot_transparent;
          imgTransparent.setAttribute("style", "margin:0px;padding:0px;width:6px;height:6px");
          {
            var cbApr = partsBuilder.buildImageButtonAppearance();
            cbApr.imageDefault = imgTransparent;
            cbApr.imageHovered = imageClose;
            cbApr.imagePressed = imageClose;
            cbApr.imageFocused = imgTransparent;
            cbApr.size = 10;
            cbApr.borderRadius = 5;
            cbApr.borderWidth = 1;
            cbApr.borderColorDefault = "#c6c6c6";
            cbApr.borderColorFocused = "#d3524e";
            cbApr.borderColorHovered = cbApr.borderColorFocused;
            cbApr.borderColorPressed = "#e64842";
            cbApr.borderStyleDefault = "solid";
            cbApr.borderStyleFocused = cbApr.borderStyleDefault;
            cbApr.borderStyleHovered = cbApr.borderStyleDefault;
            cbApr.borderStylePressed = cbApr.borderStyleDefault;
            cbApr.backgroundColorDefault = "#d0d0d0";
            cbApr.backgroundColorFocused = "#fc615c";
            cbApr.backgroundColorHovered = cbApr.backgroundColorFocused;
            cbApr.backgroundColorPressed = cbApr.backgroundColorDefault;
            cbApr.setSrc({
              default: img_data_1dot_transparent,
              focused: img_data_1dot_transparent,
              hovered: img_data_close_hovered,
              pressed: img_data_close_hovered
            });
            var closeBtnEle = partsBuilder.buildButton(cbApr);
            var eleLeft = 8;
            var eleTop = -19;
            var eleAlign = "LEFT_TOP";
            fApr.addFrameComponent(param.closeButtonName || "closeButton", closeBtnEle, eleLeft, eleTop, eleAlign);
            var minBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
            minBtnApr.borderColorDefault = "#c6c6c6";
            minBtnApr.borderColorFocused = "#e6b347";
            minBtnApr.borderColorHovered = minBtnApr.borderColorFocused;
            minBtnApr.borderColorPressed = "#e1a12d";
            minBtnApr.backgroundColorDefault = "#d0d0d0";
            minBtnApr.backgroundColorFocused = "#fdbe40";
            minBtnApr.backgroundColorHovered = minBtnApr.backgroundColorFocused;
            minBtnApr.backgroundColorPressed = minBtnApr.backgroundColorDefault;
            minBtnApr.imageDefault = imgTransparent;
            minBtnApr.imageHovered = imageMinimize;
            minBtnApr.imagePressed = imageMinimize;
            minBtnApr.imageFocused = imgTransparent;
            var minBtnEle = partsBuilder.buildButton(minBtnApr);
            var deminimizeBtnEle = partsBuilder.buildButton(minBtnApr);
            deminimizeBtnEle.style.display = "none";
            var eleLeft = 28;
            var eleTop = -19;
            var eleAlign = "LEFT_TOP";
            fApr.addFrameComponent("minimizeButton", minBtnEle, eleLeft, eleTop, eleAlign);
            fApr.addFrameComponent("deminimizeButton", deminimizeBtnEle, eleLeft, eleTop, eleAlign);
            var maxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
            maxBtnApr.borderColorDefault = "#c6c6c6";
            maxBtnApr.borderColorFocused = "#67b657";
            maxBtnApr.borderColorHovered = maxBtnApr.borderColorFocused;
            maxBtnApr.borderColorPressed = "#00af38";
            maxBtnApr.backgroundColorDefault = "#d0d0d0";
            maxBtnApr.backgroundColorFocused = "#34ca49";
            maxBtnApr.backgroundColorHovered = maxBtnApr.backgroundColorFocused;
            maxBtnApr.backgroundColorPressed = maxBtnApr.backgroundColorDefault;
            maxBtnApr.imageDefault = imgTransparent;
            maxBtnApr.imageHovered = imageMaximize;
            maxBtnApr.imagePressed = imageMaximize;
            maxBtnApr.imageFocused = imgTransparent;
            var zoomBtnEle = partsBuilder.buildButton(maxBtnApr);
            var demaxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
            demaxBtnApr.borderColorDefault = "#c6c6c6";
            demaxBtnApr.borderColorFocused = "#67b657";
            demaxBtnApr.borderColorHovered = demaxBtnApr.borderColorFocused;
            demaxBtnApr.borderColorPressed = "#00af38";
            demaxBtnApr.backgroundColorDefault = "#d0d0d0";
            demaxBtnApr.backgroundColorFocused = "#34ca49";
            demaxBtnApr.backgroundColorHovered = demaxBtnApr.backgroundColorFocused;
            demaxBtnApr.backgroundColorPressed = demaxBtnApr.backgroundColorDefault;
            demaxBtnApr.imageDefault = imgTransparent;
            demaxBtnApr.imageHovered = imageDemaximize;
            demaxBtnApr.imagePressed = imageDemaximize;
            demaxBtnApr.imageFocused = imgTransparent;
            var demaxBtnEle = partsBuilder.buildButton(demaxBtnApr);
            demaxBtnEle.style.display = "none";
            var eleLeft = 48;
            var eleTop = -19;
            var eleAlign = "LEFT_TOP";
            fApr.addFrameComponent("dezoomButton", demaxBtnEle, eleLeft, eleTop, eleAlign);
            fApr.addFrameComponent("zoomButton", zoomBtnEle, eleLeft, eleTop, eleAlign);
          }
        };
        return fApr;
      }
      module.exports.getStyle = getStyle;
    }
  });
  var require_3 = __commonJS3({
    "src/presets/appearance/PresetStyleRedstone.css"(exports, module) {
      module.exports = {};
    }
  });
  var require_PresetStyleRedstone = __commonJS3({
    "src/presets/appearance/PresetStyleRedstone.js"(exports, module) {
      require_3();
      function getStyle(fApr) {
        fApr.showTitleBar = true;
        fApr.showCloseButton = true;
        fApr.titleBarCaptionFontSize = "12px";
        fApr.titleBarCaptionFontWeight = "normal";
        fApr.titleBarCaptionLeftMargin = "10px";
        fApr.titleBarCaptionColorDefault = "#9b9a9b";
        fApr.titleBarCaptionColorFocused = "#4d494d";
        fApr.titleBarHeight = "30px";
        fApr.titleBarColorDefault = null;
        fApr.titleBarColorFocused = null;
        fApr.titleBarBorderBottomDefault = "solid 1px #aaaaaa";
        fApr.titleBarBorderBottomFocused = "solid 1px #1883d7";
        fApr.frameBorderRadius = "0px";
        fApr.frameBorderWidthDefault = "1px";
        fApr.frameBorderWidthFocused = "1px";
        fApr.frameBorderColorDefault = "#aaaaaa";
        fApr.frameBorderColorFocused = "#1883d7";
        fApr.frameBorderStyle = "solid";
        fApr.frameBoxShadow = null;
        fApr.frameBackgroundColor = "transparent";
        fApr.frameComponents = new Array();
        fApr.frameHeightAdjust = 0;
        fApr.getTitleBarStyle = function() {
          if (fApr.focusedFrameOnly) {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-redstone-focused",
              titleBarClassNameFocused: "jsframe-preset-style-redstone-focused"
            };
          } else {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-redstone-default",
              titleBarClassNameFocused: "jsframe-preset-style-redstone-focused"
            };
          }
        };
        fApr.onInitialize = function() {
          var partsBuilder = fApr.getPartsBuilder();
          {
            var CROSS_MARK = "\u2573";
            var cbApr = partsBuilder.buildTextButtonAppearance();
            cbApr.width = 45;
            cbApr.height = 28;
            cbApr.borderRadius = 0;
            cbApr.borderWidth = 0;
            cbApr.borderColorDefault = "#c6c6c6";
            cbApr.borderColorFocused = "#fc615c";
            cbApr.borderColorHovered = cbApr.borderColorFocused;
            cbApr.borderColorPressed = "#e64842";
            cbApr.borderStyleDefault = "solid";
            cbApr.borderStyleFocused = cbApr.borderStyleDefault;
            cbApr.borderStyleHovered = cbApr.borderStyleDefault;
            cbApr.borderStylePressed = cbApr.borderStyleDefault;
            cbApr.backgroundColorDefault = "white";
            cbApr.backgroundColorFocused = "white";
            cbApr.backgroundColorHovered = "#e81123";
            cbApr.backgroundColorPressed = "#f1707a";
            cbApr.caption = CROSS_MARK;
            cbApr.captionColorDefault = "#9b9a9b";
            cbApr.captionColorFocused = "black";
            cbApr.captionColorHovered = "white";
            cbApr.captionColorPressed = "white";
            cbApr.captionShiftYpx = 1;
            cbApr.captionFontRatio = 0.6;
            var closeBtnEle = partsBuilder.buildTextButton(cbApr);
            var eleLeft = 0;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = "RIGHT_TOP";
            fApr.addFrameComponent("closeButton", closeBtnEle, eleLeft, eleTop, eleAlign);
          }
          {
            var MAXIMIZE_MARK = "\u2610";
            var maxApr = partsBuilder.buildTextButtonAppearance();
            maxApr.width = 45;
            maxApr.height = 28;
            maxApr.borderRadius = 0;
            maxApr.borderWidth = 0;
            maxApr.borderColorDefault = "#c6c6c6";
            maxApr.borderColorFocused = "#fc615c";
            maxApr.borderColorHovered = maxApr.borderColorFocused;
            maxApr.borderColorPressed = "#e64842";
            maxApr.borderStyleDefault = "solid";
            maxApr.borderStyleFocused = maxApr.borderStyleDefault;
            maxApr.borderStyleHovered = maxApr.borderStyleDefault;
            maxApr.borderStylePressed = maxApr.borderStyleDefault;
            maxApr.backgroundColorDefault = "white";
            maxApr.backgroundColorFocused = "white";
            maxApr.backgroundColorHovered = "#e5e5e5";
            maxApr.backgroundColorPressed = "#cccccc";
            maxApr.caption = MAXIMIZE_MARK;
            maxApr.captionColorDefault = "#9b9a9b";
            maxApr.captionColorFocused = "black";
            maxApr.captionColorHovered = "black";
            maxApr.captionColorPressed = "black";
            maxApr.captionShiftYpx = 1;
            maxApr.captionFontRatio = 0.55;
            var maxBtnEle = partsBuilder.buildTextButton(maxApr);
            var eleLeft = -46;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = "RIGHT_TOP";
            fApr.addFrameComponent("maximizeButton", maxBtnEle, eleLeft, eleTop, eleAlign);
          }
          {
            var MINIMIZE_MARK = "\uFF3F";
            var minApr = partsBuilder.buildTextButtonAppearance();
            minApr.width = 45;
            minApr.height = 28;
            minApr.borderRadius = 0;
            minApr.borderWidth = 0;
            minApr.borderColorDefault = "#c6c6c6";
            minApr.borderColorFocused = "#fc615c";
            minApr.borderColorHovered = minApr.borderColorFocused;
            minApr.borderColorPressed = "#e64842";
            minApr.borderStyleDefault = "solid";
            minApr.borderStyleFocused = minApr.borderStyleDefault;
            minApr.borderStyleHovered = minApr.borderStyleDefault;
            minApr.borderStylePressed = minApr.borderStyleDefault;
            minApr.backgroundColorDefault = "white";
            minApr.backgroundColorFocused = "white";
            minApr.backgroundColorHovered = "#e5e5e5";
            minApr.backgroundColorPressed = "#cccccc";
            minApr.caption = MINIMIZE_MARK;
            minApr.captionColorDefault = "#9b9a9b";
            minApr.captionColorFocused = "black";
            minApr.captionColorHovered = "black";
            minApr.captionColorPressed = "black";
            minApr.captionShiftYpx = -2;
            minApr.captionFontRatio = 0.3;
            var minBtnEle = partsBuilder.buildTextButton(minApr);
            var eleLeft = -92;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = "RIGHT_TOP";
            fApr.addFrameComponent("minimizeButton", minBtnEle, eleLeft, eleTop, eleAlign);
          }
          {
            var deminApr = partsBuilder.buildTextButtonAppearance();
            deminApr.width = 45;
            deminApr.height = 28;
            deminApr.borderRadius = 0;
            deminApr.borderWidth = 0;
            deminApr.borderColorDefault = "#c6c6c6";
            deminApr.borderColorFocused = "#fc615c";
            deminApr.borderColorHovered = deminApr.borderColorFocused;
            deminApr.borderColorPressed = "#e64842";
            deminApr.borderStyleDefault = "solid";
            deminApr.borderStyleFocused = deminApr.borderStyleDefault;
            deminApr.borderStyleHovered = deminApr.borderStyleDefault;
            deminApr.borderStylePressed = deminApr.borderStyleDefault;
            deminApr.backgroundColorDefault = "white";
            deminApr.backgroundColorFocused = "white";
            deminApr.backgroundColorHovered = "#e5e5e5";
            deminApr.backgroundColorPressed = "#cccccc";
            deminApr.caption = "\u25A3";
            deminApr.captionColorDefault = "#9b9a9b";
            deminApr.captionColorFocused = "black";
            deminApr.captionColorHovered = "black";
            deminApr.captionColorPressed = "black";
            deminApr.captionShiftYpx = 1;
            deminApr.captionFontRatio = 0.6;
            var deminBtnEle = partsBuilder.buildTextButton(deminApr);
            var eleLeft = -92;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = "RIGHT_TOP";
            deminBtnEle.style.display = "none";
            fApr.addFrameComponent("deminimizeButton", deminBtnEle, eleLeft, eleTop, eleAlign);
          }
          {
            var RESTORE_MARK = "\u274F";
            var rbApr = partsBuilder.buildTextButtonAppearance();
            rbApr.width = 45;
            rbApr.height = 28;
            rbApr.borderRadius = 0;
            rbApr.borderWidth = 0;
            rbApr.borderColorDefault = "#c6c6c6";
            rbApr.borderColorFocused = "#fc615c";
            rbApr.borderColorHovered = rbApr.borderColorFocused;
            rbApr.borderColorPressed = "#e64842";
            rbApr.borderStyleDefault = "solid";
            rbApr.borderStyleFocused = rbApr.borderStyleDefault;
            rbApr.borderStyleHovered = rbApr.borderStyleDefault;
            rbApr.borderStylePressed = rbApr.borderStyleDefault;
            rbApr.backgroundColorDefault = "white";
            rbApr.backgroundColorFocused = "white";
            rbApr.backgroundColorHovered = "#e5e5e5";
            rbApr.backgroundColorPressed = "#cccccc";
            rbApr.caption = RESTORE_MARK;
            rbApr.captionColorDefault = "#9b9a9b";
            rbApr.captionColorFocused = "black";
            rbApr.captionColorHovered = "black";
            rbApr.captionColorPressed = "black";
            rbApr.captionShiftYpx = 1;
            rbApr.captionFontRatio = 0.55;
            var restoreBtnEle = partsBuilder.buildTextButton(rbApr);
            var eleLeft = -46;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = "RIGHT_TOP";
            restoreBtnEle.style.display = "none";
            fApr.addFrameComponent("restoreButton", restoreBtnEle, eleLeft, eleTop, eleAlign);
          }
        };
        return fApr;
      }
      module.exports.getStyle = getStyle;
    }
  });
  var require_4 = __commonJS3({
    "src/presets/appearance/PresetStylePopup.css"(exports, module) {
      module.exports = {};
    }
  });
  var require_PresetStylePopup = __commonJS3({
    "src/presets/appearance/PresetStylePopup.js"(exports, module) {
      require_4();
      function getStyle(fApr) {
        fApr.showTitleBar = false;
        fApr.showCloseButton = true;
        fApr.titleBarCaptionFontSize = "12px";
        fApr.titleBarCaptionFontWeight = "normal";
        fApr.titleBarCaptionLeftMargin = "10px";
        fApr.titleBarCaptionColorDefault = "#4d494d";
        fApr.titleBarCaptionColorFocused = "#4d494d";
        fApr.titleBarHeight = "5px";
        fApr.titleBarColorDefault = "white";
        fApr.titleBarColorFocused = "white";
        fApr.titleBarBorderBottomDefault = null;
        fApr.titleBarBorderBottomFocused = null;
        fApr.frameBorderRadius = "6px";
        fApr.frameBorderWidthDefault = "1px";
        fApr.frameBorderWidthFocused = "1px";
        fApr.frameBorderColorDefault = "#aaaaaa";
        fApr.frameBorderColorFocused = "#aaaaaa";
        fApr.frameBorderStyle = "solid";
        fApr.frameBoxShadow = "2px 2px 5px  rgba(0, 0, 0, 0.5)";
        fApr.frameBackgroundColor = "white";
        fApr.frameComponents = new Array();
        fApr.frameHeightAdjust = 2;
        fApr.getTitleBarStyle = function() {
          if (fApr.focusedFrameOnly) {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-popup-focused",
              titleBarClassNameFocused: "jsframe-preset-style-popup-focused"
            };
          } else {
            return {
              titleBarClassNameDefault: "jsframe-preset-style-popup-default",
              titleBarClassNameFocused: "jsframe-preset-style-popup-focused"
            };
          }
        };
        fApr.onInitialize = function() {
          var partsBuilder = fApr.getPartsBuilder();
          var crossMark0 = "\u274C";
          var crossMark1 = "\u2716";
          var crossMark2 = "\u274E";
          var CROSS_MARK = crossMark1;
          var cbApr = partsBuilder.buildTextButtonAppearance();
          cbApr.width = 20;
          cbApr.height = 20;
          cbApr.borderRadius = 10;
          cbApr.borderWidth = 1;
          cbApr.borderColorDefault = "#cccccc";
          cbApr.borderColorFocused = "#cccccc";
          cbApr.borderColorHovered = "#dddddd";
          cbApr.borderColorPressed = "#eeeeee";
          cbApr.borderStyleDefault = "solid";
          cbApr.borderStyleFocused = cbApr.borderStyleDefault;
          cbApr.borderStyleHovered = cbApr.borderStyleDefault;
          cbApr.borderStylePressed = cbApr.borderStyleDefault;
          cbApr.backgroundColorDefault = "white";
          cbApr.backgroundColorFocused = "white";
          cbApr.backgroundColorHovered = "#eeeeee";
          cbApr.backgroundColorPressed = "#dddddd";
          cbApr.backgroundBoxShadow = "2px 2px 5px  rgba(0, 0, 0, 0.5)";
          cbApr.caption = CROSS_MARK;
          cbApr.captionColorDefault = "black";
          cbApr.captionColorFocused = "black";
          cbApr.captionColorHovered = "white";
          cbApr.captionColorPressed = "white";
          cbApr.captionShiftYpx = 1;
          cbApr.captionFontRatio = 0.6;
          var closeBtnEle = partsBuilder.buildTextButton(cbApr);
          var eleLeft = 10;
          var eleTop = -6 - parseInt(fApr.titleBarHeight);
          var eleAlign = "RIGHT_TOP";
          fApr.addFrameComponent("closeButton", closeBtnEle, eleLeft, eleTop, eleAlign);
        };
        return fApr;
      }
      module.exports.getStyle = getStyle;
    }
  });
  var require_PresetStyleToast = __commonJS3({
    "src/presets/appearance/PresetStyleToast.js"(exports, module) {
      function getStyle(fApr) {
        fApr.showTitleBar = false;
        fApr.showCloseButton = true;
        fApr.titleBarCaptionFontSize = "0px";
        fApr.titleBarCaptionFontWeight = "normal";
        fApr.titleBarCaptionLeftMargin = "0px";
        fApr.titleBarCaptionColorDefault = "transparent";
        fApr.titleBarCaptionColorFocused = "transparent";
        fApr.titleBarHeight = "0px";
        fApr.titleBarColorDefault = "transparent";
        fApr.titleBarColorFocused = "transparent";
        fApr.titleBarBorderBottomDefault = null;
        fApr.titleBarBorderBottomFocused = null;
        fApr.frameBorderRadius = "10px";
        fApr.frameBorderWidthDefault = "0px";
        fApr.frameBorderWidthFocused = "0px";
        fApr.frameBorderColorDefault = "transparent";
        fApr.frameBorderColorFocused = "transparent";
        fApr.frameBorderStyle = "solid";
        fApr.frameBoxShadow = "2px 2px 15px  rgba(0, 0, 0, 0.5)";
        fApr.frameBackgroundColor = "transparent";
        fApr.frameComponents = [];
        fApr.frameHeightAdjust = 1;
        fApr.captionClor = "darkgray";
        fApr.pullUpDisabled = false;
        fApr.getTitleBarStyle = function() {
          if (fApr.focusedFrameOnly) {
            return {
              titleBarClassNameDefault: " ",
              titleBarClassNameFocused: " "
            };
          } else {
            return {
              titleBarClassNameDefault: " ",
              titleBarClassNameFocused: " "
            };
          }
        };
        fApr.onInitialize = function() {
          var partsBuilder = fApr.getPartsBuilder();
          var crossMark0 = "\u274C";
          var crossMark1 = "\u2716";
          var crossMark2 = "\u274E";
          var CROSS_MARK = crossMark1;
          var cbApr = partsBuilder.buildTextButtonAppearance();
          cbApr.width = 20;
          cbApr.height = 20;
          cbApr.borderRadius = 10;
          cbApr.borderWidth = 0;
          cbApr.borderColorDefault = "#cccccc";
          cbApr.borderColorFocused = "#cccccc";
          cbApr.borderColorHovered = "#dddddd";
          cbApr.borderColorPressed = "#eeeeee";
          cbApr.borderStyleDefault = "solid";
          cbApr.borderStyleFocused = cbApr.borderStyleDefault;
          cbApr.borderStyleHovered = cbApr.borderStyleDefault;
          cbApr.borderStylePressed = cbApr.borderStyleDefault;
          cbApr.backgroundColorDefault = "transparent";
          cbApr.backgroundColorFocused = "transparent";
          cbApr.backgroundColorHovered = "transparent";
          cbApr.backgroundColorPressed = "transparent";
          cbApr.backgroundBoxShadow = null;
          cbApr.caption = CROSS_MARK;
          cbApr.captionColorDefault = fApr.captionClor;
          cbApr.captionColorFocused = fApr.captionClor;
          cbApr.captionColorHovered = fApr.captionClor;
          cbApr.captionColorPressed = fApr.captionClor;
          cbApr.captionShiftYpx = 1;
          cbApr.captionFontRatio = 0.6;
          var closeBtnEle = partsBuilder.buildTextButton(cbApr);
          var eleLeft = -6;
          var eleTop = 3;
          var eleAlign = "RIGHT_TOP";
          fApr.addFrameComponent("closeButton", closeBtnEle, eleLeft, eleTop, eleAlign);
        };
        return fApr;
      }
      module.exports.getStyle = getStyle;
    }
  });
  var require_5 = __commonJS3({
    "src/presets/appearance/PresetStyleMaterial.css"(exports, module) {
      module.exports = {};
    }
  });
  var require_PresetStyleMaterial = __commonJS3({
    "src/presets/appearance/PresetStyleMaterial.js"(exports, module) {
      require_5();
      var ObjectAssigner = require_ObjectAssigner();
      function getStyle(fApr, userParam) {
        var srcParam = {
          border: {
            color: "transparent",
            width: 0,
            radius: 6
          },
          control: {
            maximizeWithoutTitleBar: false,
            restoreKey: "Escape"
          },
          titleBar: {
            color: "white",
            background: "black",
            leftMargin: 20,
            height: 30,
            fontSize: 12,
            buttonWidth: 36,
            buttonHeight: 16,
            buttonColor: "white",
            buttons: [
              {
                fa: "fas fa-times",
                name: "closeButton",
                visible: true
              },
              {
                fa: "far fa-window-maximize",
                name: "maximizeButton",
                visible: true
              },
              {
                fa: "far fa-window-restore",
                name: "restoreButton",
                visible: false
              },
              {
                fa: "far fa-window-minimize",
                name: "minimizeButton",
                visible: true
              },
              {
                fa: "fas fa-caret-up",
                name: "deminimizeButton",
                visible: false
              }
            ],
            buttonsOnLeft: []
          }
        };
        var param = srcParam;
        if (userParam) {
          ObjectAssigner.objectAssign(srcParam, userParam);
        }
        fApr.showTitleBar = true;
        fApr.showCloseButton = true;
        fApr.titleBarCaptionFontSize = param.titleBar.fontSize + "px";
        fApr.titleBarCaptionFontWeight = "normal";
        fApr.titleBarCaptionLeftMargin = param.titleBar.leftMargin + "px";
        fApr.titleBarCaptionColorDefault = param.titleBar.color;
        fApr.titleBarCaptionColorFocused = param.titleBar.color;
        fApr.titleBarCaptionTextShadow = null;
        fApr.titleBarCaptionTextAlign = "left";
        fApr.titleBarHeight = param.titleBar.height + "px";
        fApr.titleBarColorDefault = param.titleBar.background;
        fApr.titleBarColorFocused = param.titleBar.background;
        fApr.titleBarBorderBottomDefault = "solid 0px #aaaaaa";
        fApr.titleBarBorderBottomFocused = "solid 0px #1883d7";
        fApr.frameBorderRadius = param.border.radius + "px";
        fApr.frameBorderWidthDefault = param.border.width + "px";
        fApr.frameBorderWidthFocused = param.border.width + "px";
        fApr.frameBorderColorDefault = param.border.color;
        fApr.frameBorderColorFocused = param.border.color;
        fApr.frameBorderStyle = "solid";
        fApr.frameBoxShadow = param.border.shadow;
        fApr.frameBackgroundColor = "transparent";
        fApr.frameComponents = new Array();
        fApr.frameHeightAdjust = 0;
        fApr.getTitleBarStyle = function() {
          if (fApr.focusedFrameOnly) {
            return {
              titleBarClassNameDefault: " ",
              titleBarClassNameFocused: " "
            };
          } else {
            return {
              titleBarClassNameDefault: " ",
              titleBarClassNameFocused: " "
            };
          }
        };
        fApr.onInitialize = function() {
          alignButtons(fApr, param, false);
          alignButtons(fApr, param, true);
        };
        return fApr;
      }
      function alignButtons(fApr, param, fromLeft) {
        var partsBuilder = fApr.getPartsBuilder();
        var rbtX = 0;
        var buttons;
        if (fromLeft) {
          buttons = param.titleBar.buttonsOnLeft;
        } else {
          buttons = param.titleBar.buttons;
        }
        for (var rbtIdx in buttons) {
          var rbtSrc = buttons[rbtIdx];
          var rbt = partsBuilder.buildTextButtonAppearance();
          rbt.fa = rbtSrc.fa;
          rbt.width = param.titleBar.buttonWidth;
          rbt.height = param.titleBar.buttonHeight;
          rbt.borderRadius = 0;
          rbt.borderWidth = 0;
          rbt.borderColorDefault = "#c6c6c6";
          rbt.borderColorFocused = "#fc615c";
          rbt.borderColorHovered = rbt.borderColorFocused;
          rbt.borderColorPressed = "#e64842";
          rbt.borderStyleDefault = "solid";
          rbt.borderStyleFocused = rbt.borderStyleDefault;
          rbt.borderStyleHovered = rbt.borderStyleDefault;
          rbt.borderStylePressed = rbt.borderStyleDefault;
          rbt.backgroundColorDefault = "transparent";
          rbt.backgroundColorFocused = "transparent";
          rbt.backgroundColorHovered = "transparent";
          rbt.backgroundColorPressed = "transparent";
          var colors = getSubColor(param.titleBar.buttonColor);
          rbt.captionColorDefault = param.titleBar.buttonColor;
          rbt.captionColorFocused = param.titleBar.buttonColor;
          rbt.captionColorHovered = colors.hovered;
          rbt.captionColorPressed = colors.pressed;
          rbt.captionShiftYpx = 0;
          rbt.captionFontRatio = 1;
          var rbtEle = partsBuilder.buildTextButton(rbt);
          if (rbtSrc.visible) {
            rbtEle.style.display = "flex";
          } else {
            if (fromLeft) {
              rbtX -= param.titleBar.buttonWidth;
            } else {
              rbtX += param.titleBar.buttonWidth;
            }
            rbtEle.style.display = "none";
          }
          var titleBarHeight = parseInt(fApr.titleBarHeight);
          var rbtEleLeft = rbtX;
          var rbtEleTop = -titleBarHeight + (titleBarHeight - rbt.height) / 2;
          var rbtEleAlign;
          if (fromLeft) {
            rbtEleAlign = "LEFT_TOP";
          } else {
            rbtEleAlign = "RIGHT_TOP";
          }
          var ndiv;
          if (rbtSrc.childMenuHTML) {
            ndiv = document.createElement("div");
            ndiv.id = rbtSrc.name + "_child_menu";
            ndiv.innerHTML = rbtSrc.childMenuHTML;
            ndiv.style.position = "absolute";
            ndiv.style.width = (rbtSrc.childMenuWidth ? rbtSrc.childMenuWidth : 200) + "px";
            ndiv.style.top = parseInt(rbtEle.style.top, 10) + parseInt(rbtEle.style.height, 10) / 2 + titleBarHeight / 2 + "px";
            ndiv.style.left = rbtEle.style.left;
            ndiv.style.display = "none";
            rbtEle.appendChild(ndiv);
          }
          fApr.addFrameComponent(rbtSrc.name, rbtEle, rbtEleLeft, rbtEleTop, rbtEleAlign, { childMenu: ndiv });
          if (fromLeft) {
            rbtX += param.titleBar.buttonWidth;
          } else {
            rbtX += -param.titleBar.buttonWidth;
          }
        }
      }
      function getSubColor(color) {
        var canvas = document.createElement("canvas");
        canvas.height = 1;
        canvas.width = 1;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        var colorData = ctx.getImageData(0, 0, 1, 1).data;
        var r = colorData[0];
        var g = colorData[1];
        var b = colorData[2];
        var alpha = colorData[3] / 255;
        var alpha2 = alpha * 0.85;
        var alpha3 = alpha * 0.75;
        var ret = "rgb(" + r + "," + g + "," + b + "," + alpha2 + ")";
        var ret2 = "rgb(" + r + "," + g + "," + b + "," + alpha2 + ")";
        var ret3 = "rgb(" + r + "," + g + "," + b + "," + alpha3 + ")";
        return { src: ret, hovered: ret2, pressed: ret3 };
      }
      module.exports.getStyle = getStyle;
    }
  });
  var require_PresetWindowYosemite = __commonJS3({
    "src/presets/window/PresetWindowYosemite.js"(exports, module) {
      var mergeDeeply = require_merge_deeply();
      function getPreset(param) {
        var result = {};
        result.appearanceName = "yosemite";
        result.appearanceParam = {};
        var presetParam = {};
        if (param) {
          presetParam = param;
        }
        var isFullScreen = presetParam.maximizeButtonBehavior === "fullscreen";
        var minimizeButton = presetParam.minimizeButtonBehavior === "minimize" ? "minimizeButton" : null;
        var hideButton1 = presetParam.minimizeButtonBehavior === "hide" ? "minimizeButton" : null;
        var hideButton2 = presetParam.closeButtonBehavior === "hide" ? "custom-close-button" : null;
        var windowControlParam = presetParam.control;
        var closeButtonNameByCloseButtonBehavior = hideButton2;
        var closeButtonName = presetParam.closeButtonName;
        if (isFullScreen) {
          result.appearanceParam.titleBar = {
            greenButton: "fullscreen"
          };
        }
        result.appearanceParam.closeButtonName = closeButtonNameByCloseButtonBehavior || closeButtonName || "closeButton";
        result.setupPresetWindow = function(frame) {
          var defaultWindowControlParam = {
            maximizeButton: "zoomButton",
            maximizeParam: {
              fullScreen: isFullScreen,
              restoreKey: "Escape"
            },
            demaximizeButton: "dezoomButton",
            deminimizeButton: "deminimizeButton",
            minimizeButton,
            hideButtons: [hideButton1, hideButton2],
            hideParam: {
              align: "CENTER_CENTER",
              duration: 300
            },
            dehideParam: {
              duration: 300
            },
            styleDisplay: "inline",
            animation: true,
            animationDuration: 100
          };
          if (windowControlParam) {
            mergeDeeply({ op: "overwrite-merge", object1: defaultWindowControlParam, object2: windowControlParam });
          }
          frame.setControl(defaultWindowControlParam);
        };
        return result;
      }
      module.exports.getPresetWindow = getPreset;
    }
  });
  var require_JSFrame = __commonJS3({
    "src/JSFrame.js"(exports, module) {
      "use strict";
      require_();
      var EventEmitter = require_event_emitter();
      var CALIGN2 = require_CCommon();
      var WindowEventHelper = require_WindowEventHelper();
      var inherit = require_Inherit();
      var CFrameAppearance = require_CFrameAppearance();
      var CDomPartsBuilder = require_CDomPartsBuilder();
      var CSimpleLayoutAnimator = require_CSimpleLayoutAnimator();
      var EventListenerHelper = require_event_listener_helper();
      var presetStyles = {
        "yosemite": require_PresetStyleYosemite(),
        "redstone": require_PresetStyleRedstone(),
        "popup": require_PresetStylePopup(),
        "toast": require_PresetStyleToast(),
        "material": require_PresetStyleMaterial()
      };
      var presetWindows = {
        "yosemite": require_PresetWindowYosemite()
      };
      var DEF = {};
      var MOUSE_ENABLED = true;
      var TOUCH_ENABLED = true;
      var TOUCH_MOVE_ONLY_WITH_ONE_FINGER = true;
      DEF.CBEAN = {};
      DEF.CBEAN.HTML_ELEMENT = "span";
      DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = "htmlElement_";
      DEF.CBEAN.TYPE_NAME = "bean";
      function CBeanFrame(beanId, left, top, width, height, zindex, w_border_width, appearance) {
        var me = this;
        me.movable = true;
        me.id = beanId;
        me.property = {};
        me.extra = {};
        me.parentCanvas = null;
        me.htmlElement = null;
        me.pullUpDisabled = false;
        if (appearance) {
          me.pullUpDisabled = appearance.pullUpDisabled;
        }
        me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
        me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
        me.htmlElement.style.position = "absolute";
        me.htmlElement.style.left = parseInt(left, 10) + "px";
        me.htmlElement.style.top = parseInt(top, 10) + "px";
        me.htmlElement.style.width = parseInt(width, 10) + "px";
        me.htmlElement.style.height = parseInt(height, 10) + "px";
        if (zindex !== null) {
          me.htmlElement.style.zIndex = zindex;
        }
        me.htmlElement.style.borderColor = "#000000";
        me.htmlElement.style.fontSize = "1px";
        me.htmlElement.parent = me;
        if (MOUSE_ENABLED) {
          me.htmlElement.onmousedown = me.onmouseDown;
        }
        if (TOUCH_ENABLED) {
          if ("ontouchstart" in window) {
            var funcOnTouchStart = function(evt) {
              me.onmouseDown.bind(this)(evt);
            };
            me.htmlElement.ontouchstart = funcOnTouchStart;
          }
        }
        me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;
        me.htmlElement.usage = "nothing";
        me.htmlElement.isRangeLimited = false;
        me.htmlElement.argX = 1;
        me.htmlElement.argY = 1;
        me.externalAreaClickedListener = null;
        me.onMoveListener = null;
      }
      CBeanFrame.prototype.getWindowType = function() {
        return "CBeanFrame";
      };
      CBeanFrame.prototype.setOnMoveListener = function(listener) {
        var me = this;
        me.onMoveListener = listener;
      };
      CBeanFrame.prototype._onMove = function(e) {
        var me = this;
        if (me.onMoveListener) {
          me.onMoveListener(e);
        }
      };
      CBeanFrame.prototype.setMovable = function(enabled) {
        var me = this;
        if (enabled) {
          me.htmlElement.argX = 1;
          me.htmlElement.argY = 1;
        } else {
          me.htmlElement.argX = 0;
          me.htmlElement.argY = 0;
        }
        me.movable = enabled;
        return me;
      };
      CBeanFrame.prototype.setParentCanvas = function(parentCanvas) {
        var me = this;
        me.parentCanvas = parentCanvas;
        me.htmlElement.parentCanvas = me.parentCanvas;
        return me;
      };
      CBeanFrame.prototype.setOnExternalAreaClickedListener = function(listener) {
        var me = this;
        me.externalAreaClickedListener = listener;
        return me;
      };
      CBeanFrame.prototype.onBodyClicked = function(e) {
        var me = this;
        var clickX = e.pageX;
        var clickY = e.pageY;
        var left = parseInt(me.htmlElement.style.left);
        var top = parseInt(me.htmlElement.style.top);
        var width = parseInt(me.htmlElement.style.width);
        var height = parseInt(me.htmlElement.style.height);
        if (left < clickX && clickX < left + width && top < clickY && clickY < top + height) {
        } else {
          if (me.externalAreaClickedListener) {
            me.externalAreaClickedListener();
          }
        }
      };
      CBeanFrame.prototype.onmouseDown = function(evt) {
        var refHtmlElement = this;
        var e = evt;
        if (TOUCH_ENABLED) {
          if (evt.type === "touchstart") {
            var changedTouches = evt.changedTouches;
            if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
              var touches = evt.touches;
              if (touches.length === 1) {
                e = changedTouches[0];
              } else {
                return true;
              }
            } else {
              e = changedTouches[0];
            }
          }
        }
        var refCBeanFrame = refHtmlElement.parent;
        if (e.button == 0 || evt.type === "touchstart") {
          if (refCBeanFrame.pullUpDisabled) {
            return false;
          } else {
            refHtmlElement.parentCanvas.currentObject = refHtmlElement;
            refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);
          }
        } else if (e.button == 2) {
          return false;
        }
        if (refHtmlElement.parentCanvas.currentObject) {
          refHtmlElement.parentCanvas.offsetX = e.pageX - parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
          refHtmlElement.parentCanvas.offsetY = e.pageY - parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);
        }
        return false;
      };
      DEF.CANVAS = {};
      DEF.CANVAS.HTML_ELEMENT = "div";
      DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
      DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;
      function CCanvas(parentElement, canvasId, left, top, width, height) {
        function EventData() {
          this.x = 0;
          this.y = 0;
          this.screenX = 0;
          this.screenY = 0;
          this.deltaX = 0;
          this.deltaY = 0;
          this.isMoved = false;
          this.targetTypeName = null;
          this.targetUsage = null;
          this.targetObject = null;
        }
        var me = this;
        me.enablePullUp = true;
        me.currentObject = null;
        me.onTopObject = null;
        me.offsetX = 0;
        me.offsetY = 0;
        me.mouseDownSource = null;
        me.id = canvasId;
        me.canvasElement = null;
        me.parentElement = parentElement;
        me.beanList = new Array();
        me.beanIdName = {};
        me.beanNameId = {};
        me.eventData = new EventData();
        me.baseZIndex = 0;
        me.setBaseZIndex = function(baseZIndex) {
          me.baseZIndex = baseZIndex;
        };
        me.getBaseZIndex = function() {
          return me.baseZIndex;
        };
        me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);
        me.canvasElement.style.zIndex = 2e3;
        me.canvasElement.id = me.id;
        me.canvasElement.style.boxSizing = "border-box";
        me.canvasElement.style.position = "absolute";
        me.canvasElement.style.left = parseInt(left) + "px";
        me.canvasElement.style.top = parseInt(top) + "px";
        me.canvasElement.style.width = parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722 + "px";
        me.canvasElement.style.height = parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722 + "px";
        me.canvasElement.style.backgroundColor = "transparent";
        me.canvasElement.style.borderStyle = "none";
        me.canvasElement.style.margin = "0px";
        me.canvasElement.style.borderWidth = "0px";
        me.canvasElement.style.borderColor = "transparent";
        me.parentElement.appendChild(me.canvasElement);
      }
      CCanvas.prototype.mouseMove = function(evt) {
        var me = this;
        var e = evt;
        if (TOUCH_ENABLED) {
          if (evt.type === "touchmove") {
            var changedTouches = evt.changedTouches;
            if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
              var touches = evt.touches;
              if (touches.length === 1) {
                e = changedTouches[0];
              } else {
                return true;
              }
            } else {
              e = changedTouches[0];
            }
          }
        }
        if (me.currentObject) {
          me.eventData.targetTypeName = me.currentObject.typeName;
          me.eventData.targetUsage = me.currentObject.usage;
          me.eventData.targetObject = me.currentObject;
          var newObjLeftPx = e.pageX - me.offsetX;
          var newObjTopPx = e.pageY - me.offsetY;
          var absoluteMouseX = e.pageX;
          var absoluteMouseY = e.pageY;
          var oldObjLeftPx = me.currentObject.style.left;
          var oldObjTopPx = me.currentObject.style.top;
          var tmpLeft = parseInt(newObjLeftPx, 10);
          var tmpTop = parseInt(newObjTopPx, 10);
          var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
          var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);
          var styleWidth = parseInt(me.canvasElement.style.width, 10);
          var styleHeight = parseInt(me.canvasElement.style.height, 10);
          var deltaX = 0;
          var deltaY = 0;
          if (me.currentObject.isRangeLimited == true && (tmpLeft <= 0 || tmpRight > styleWidth || tmpTop <= 0 || tmpBottom > styleHeight)) {
            deltaX = 0;
            deltaY = 0;
          } else {
            deltaX = parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10);
            deltaY = parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10);
            me.currentObject.style.left = parseInt(me.currentObject.style.left) + deltaX * me.currentObject.argX + "px";
            me.currentObject.style.top = parseInt(me.currentObject.style.top) + deltaY * me.currentObject.argY + "px";
            var parentObject = me.currentObject.parent;
            if (parentObject && parentObject._onMove) {
              parentObject._onMove();
            }
          }
          me.eventData.deltaX = deltaX;
          me.eventData.deltaY = deltaY;
          return me.eventData;
        }
        return null;
      };
      CCanvas.prototype.mouseUp = function(e) {
        var me = this;
        me.currentObject = null;
        me.mouseDownSource = null;
      };
      CCanvas.prototype.pullUp = function(targetBeanId) {
        var me = this;
        var tmpBeanArray = [];
        var beanList = me.beanList;
        for (var i2 in beanList) {
          tmpBeanArray.push(beanList[i2]);
        }
        var targetBean = beanList[targetBeanId];
        if (me.enablePullUp) {
          me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);
        }
        me.onTopObject = targetBean;
      };
      CCanvas.prototype.pullUpSort = function(pullupObject, objectArray, baseIndex) {
        var me = this;
        pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;
        objectArray.sort(function(b, a) {
          return -parseInt(b.htmlElement.style.zIndex, 10) + parseInt(a.htmlElement.style.zIndex, 10);
        });
        for (var i2 in objectArray) {
          objectArray[i2].htmlElement.style.zIndex = objectArray.length - 1 - i2 + baseIndex;
        }
      };
      CCanvas.prototype.removeBean = function(beanId) {
        var me = this;
        var beanList = me.beanList;
        var targetBean = beanList[beanId];
        me.canvasElement.removeChild(targetBean.htmlElement);
        delete beanList[beanId];
      };
      CCanvas.prototype.addBean = function(bean) {
        var me = this;
        var beanList = me.beanList;
        var beanIdName = me.beanIdName;
        var beanNameId = me.beanNameId;
        beanList[bean.id] = bean;
        if (bean.property.name) {
          beanNameId[bean.property.name] = bean.id;
          beanIdName[bean.id] = bean.property.name;
        }
        var num = 0;
        for (var j in beanList) {
          num++;
        }
        bean.htmlElement.style.zIndex = num + me.baseZIndex;
        bean.setParentCanvas(me);
        this.canvasElement.appendChild(bean.htmlElement);
      };
      CCanvas.prototype.getParentElement = function() {
        var me = this;
        return me.parentElement;
      };
      DEF.CFRAME = {};
      DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = "transparent";
      DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX = "window__modal_window_background_";
      inherit(CFrame, CBeanFrame);
      function CFrame(windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance) {
        var me = this;
        CFrame.superConstructor.call(this, windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance);
        me.anchor = CALIGN2.LEFT_TOP;
        me.showTitleBar = appearance.showTitleBar;
        me.canvasNetHeight = null;
        me.canvasNetWidth = null;
        me.frameHeightAdjust = appearance.frameHeightAdjust;
        me.frameComponentMap = {};
        me.canvas = null;
        me.myCanvasId = null;
        me.floatingButton = null;
        me.titleBarClassNameDefault = "jsframe-titlebar-default";
        me.titleBarClassNameFocused = "jsframe-titlebar-focused";
        me.titleBarHeight = appearance.titleBarHeight;
        me.titleBarCaption = appearance.titleBarCaption;
        me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
        me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
        me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
        me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
        me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
        me.titleBarCaptionTextShadow = appearance.titleBarCaptionTextShadow;
        me.titleBarCaptionTextAlign = appearance.titleBarCaptionTextAlign;
        me.titleAdjustWidth = 2;
        me.windowId = windowId;
        me.exBorderWidth = 0;
        me.myCanvasId = windowId + "_canvas";
        var appIcon = document.createElement("img");
        appIcon.src = "";
        appIcon.style.position = "absolute";
        appIcon.style.left = "2px";
        appIcon.style.top = "2px";
        appIcon.style.width = "16px";
        appIcon.style.height = "16px";
        appIcon.style.visibility = "hidden";
        me.titleBar = document.createElement("div");
        me.titleBar.className = "jsframetitlebar";
        if (me.showTitleBar) {
          me.titleBar.id = windowId + "_title";
          me.titleBar.style.position = "absolute";
          me.titleBar.style.boxSizing = "border-box";
          me.titleBar.style.top = "0px";
          me.titleBar.style.left = "0px";
          me.titleBar.style.width = w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722 + "px";
          me.titleBar.style.userSelect = "none";
          if (me.titleBarHeight) {
            var titleBarAdjust = 0;
            if (me.titleBarBorderBottomDefault) {
              titleBarAdjust = 0;
            }
            me.titleBar.style.height = parseInt(me.titleBarHeight, 10) + 0 + "px";
          }
          if (me.titleBarColorDefault) {
            me.titleBar.style.background = me.titleBarColorDefault;
          }
          me.titleBar.style.zIndex = 0;
          me.titleBar.style.color = me.titleBarCaptionColorDefault;
          me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
          me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
          me.titleBar.style.textShadow = me.titleBarCaptionTextShadow;
          me.titleBar.style.textAlign = me.titleBarCaptionTextAlign;
          me.titleBar.style.lineHeight = me.titleBar.style.height;
          me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
          me.titleBar.style.overflow = "hidden";
          var titleBarText = document.createTextNode("");
          var titleBarTextSpan = document.createElement("span");
          titleBarTextSpan.id = me.id + "_titleBarText";
          if (me.titleBarCaptionLeftMargin != null) {
            titleBarTextSpan.style.position = "absolute";
            titleBarTextSpan.style.left = parseInt(me.titleBarCaptionLeftMargin, 10) + "px";
          } else {
            titleBarTextSpan.style.position = "absolute";
            titleBarTextSpan.style.left = "0px";
            titleBarTextSpan.style.right = "0px";
          }
          titleBarTextSpan.style.top = "0px";
          titleBarTextSpan.appendChild(titleBarText);
          me.titleBar.appendChild(titleBarTextSpan);
        }
        me.htmlElement.appendChild(me.titleBar);
        var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
        var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);
        if (me.showTitleBar) {
        } else {
          canvasMoreHeight = 0;
          canvasMoreSpacing = 0;
          titleBarAdjust = 0;
        }
        me.canvasNetWidth = w_width - canvasMoreSpacing;
        me.canvasNetHeight = w_height - canvasMoreHeight - canvasMoreSpacing - 1 - titleBarAdjust + me.frameHeightAdjust;
        me.htmlElement.style.cursor = "move";
        me.canvas = new CCanvas(me.htmlElement, me.myCanvasId, 0, canvasMoreHeight, w_width - canvasMoreSpacing, w_height - canvasMoreHeight - canvasMoreSpacing);
        me.canvas.enablePullUp = false;
        me.canvas.canvasElement.style.backgroundColor = DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
        me.canvas.canvasElement.style.cursor = "default";
        if (MOUSE_ENABLED) {
          me.canvas.canvasElement.onmousedown = me.canvasMouseDown;
        }
        if (TOUCH_ENABLED) {
          if ("ontouchstart" in window) {
            var funcOnTouchStart = function(evt) {
              var touchStartEvent = evt.changedTouches[0];
              me.canvasMouseDown.bind(this)(touchStartEvent);
            };
            me.canvas.canvasElement.ontouchstart = funcOnTouchStart;
          }
        }
        me.canvas.canvasElement.parentCFrame = me;
        var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
        var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);
        var markerWidth = appearance.resizeAreaWidth;
        var markerHeight = appearance.resizeAreaHeight;
        var edgeMargin = appearance.resizeAreaOffset;
        var markerZIndex = 0;
        var colorRD, colorDD, colorRR;
        if (appearance.resizeAreaVisible) {
          colorRD = "rgba(255, 0, 0, 0.5)";
          colorDD = "rgba(0, 0, 255, 0.5)";
          colorRR = "rgba(0, 255, 0, 0.5)";
        }
        var markerRD = new CMarkerWindow(me.myCanvasId + "_RD", tmpCanvasWidth + edgeMargin, tmpCanvasHeight + edgeMargin, markerWidth, markerHeight, markerZIndex, "RD", colorRD);
        markerRD.htmlElement.style.cursor = "se-resize";
        markerRD.htmlElement.argX = 0;
        markerRD.htmlElement.argY = 0;
        var markerDD = new CMarkerWindow(me.myCanvasId + "_DD", 0, tmpCanvasHeight + edgeMargin, tmpCanvasWidth + edgeMargin, markerHeight, markerZIndex, "DD", colorDD);
        markerDD.htmlElement.style.cursor = "n-resize";
        markerDD.htmlElement.argX = 0;
        markerDD.htmlElement.argY = 0;
        var markerRR = new CMarkerWindow(me.myCanvasId + "_RR", tmpCanvasWidth + edgeMargin, 0, markerWidth, tmpCanvasHeight + edgeMargin, markerZIndex, "RR", colorRR);
        markerRR.htmlElement.style.cursor = "w-resize";
        markerRR.htmlElement.argY = 0;
        markerRR.htmlElement.argX = 0;
        me.canvas.addBean(markerRD);
        me.canvas.addBean(markerDD);
        me.canvas.addBean(markerRR);
        me.removeMarkers = function() {
          me.canvas.removeBean(markerRD.id);
          me.canvas.removeBean(markerDD.id);
          me.canvas.removeBean(markerRR.id);
          me.htmlElement.style.cursor = "default";
        };
        me.removeMarkers2 = function() {
          me.canvas.removeBean(markerRD.id);
          me.canvas.removeBean(markerDD.id);
          me.canvas.removeBean(markerRR.id);
        };
        me.enableMarkers = function(enabled) {
          if (enabled) {
            markerRD.htmlElement.style.display = "flex";
            markerDD.htmlElement.style.display = "flex";
            markerRR.htmlElement.style.display = "flex";
            markerRD.htmlElement.style.cursor = "se-resize";
            markerDD.htmlElement.style.cursor = "n-resize";
            markerRR.htmlElement.style.cursor = "w-resize";
          } else {
            markerRD.htmlElement.style.display = "none";
            markerDD.htmlElement.style.display = "none";
            markerRR.htmlElement.style.display = "none";
          }
        };
        for (var idx in appearance.frameComponents) {
          var frameComponent = appearance.frameComponents[idx];
          frameComponent.setFrame(me);
          if (frameComponent.id == "closeButton") {
            frameComponent.htmlElement.onclick = me.close;
          }
          var frameComponentHasChildMenu = frameComponent.htmlElement.querySelector(".jsframe-child-menu");
          if (frameComponentHasChildMenu) {
            me.eventListenerHelper.addEventListener(frameComponent.htmlElement, "click", function(e) {
              var frameComponentId = e.target.getAttribute("component-id");
              me.hideFrameComponentChildMenus({ exceptFrameComponentId: frameComponentId });
              if (frameComponentId) {
                var frameComponentHtmlElement = me.getFrameComponentElement(frameComponentId);
                var frameComponentChildMenu = frameComponentHtmlElement.querySelector(".jsframe-child-menu");
                if (frameComponentChildMenu) {
                  if (frameComponentChildMenu.style.display == "table") {
                    frameComponentChildMenu.style.display = "none";
                  } else {
                    frameComponentChildMenu.style.display = "table";
                  }
                } else {
                  console.error("frameComponent child menu isnt found. frameComponentId=" + frameComponentId);
                }
              }
            }, { listenerName: "frame-component_child-menu-listener" });
          }
          me.addFrameComponent(frameComponent);
        }
        me.htmlElement.style.backgroundColor = "transparent";
        me.htmlElement.oncontextmenu = this.contextMenu;
        var caribVal = 0;
        me.caribValue = caribVal;
        if (me.exBorderWidth) {
          me.htmlElement.style.borderWidth = me.exBorderWidth + "px";
        }
        me.htmlElement.style.width = parseInt(me.htmlElement.style.width, 10) - caribVal + "px";
        me.htmlElement.style.height = parseInt(me.htmlElement.style.height, 10) - caribVal + 1 + "px";
        me.htmlElement.typeName = "cwindow";
        me.htmlElement.overflow = "auto";
        me.htmlElement.style.boxSizing = "content-box";
        if (appearance.frameBorderStyle) {
          me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
        }
        if (appearance.frameBoxShadow) {
          me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
        }
        if (parseInt(appearance.frameBorderWidthDefault, 10) >= 0) {
          me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
          me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;
        }
        if (parseInt(appearance.frameBorderRadius, 10) >= 0) {
          me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
        }
        me.onCloseFrameListener = null;
      }
      CFrame.prototype.setTitleBarClassName = function(classNameForDefault, classNameForFocused) {
        var me = this;
        if (classNameForDefault) {
          me.titleBarClassNameDefault = classNameForDefault;
          me.titleBarClassNameFocused = classNameForDefault;
        }
        if (classNameForFocused) {
          me.titleBarClassNameFocused = classNameForFocused;
        }
        return me;
      };
      CFrame.prototype.addFrameComponent = function(frameComponent) {
        var me = this;
        me.frameComponentMap[frameComponent.id] = frameComponent;
        me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
        return me;
      };
      CFrame.prototype.getFrameComponentElement = function(id) {
        var me = this;
        if (me.frameComponentMap[id]) {
          return me.frameComponentMap[id].htmlElement;
        } else {
          return null;
        }
      };
      CFrame.prototype.removeFrameComponentById = function(frameComponentId) {
        var me = this;
        var frameComponent = me.frameComponentMap[frameComponentId];
        me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
        delete me.frameComponentMap[frameComponentId];
      };
      CFrame.prototype.showFrameComponent = function(frameComponentId, display) {
        var me = this;
        var comp = me.getFrameComponentElement(frameComponentId);
        if (comp) {
          if (display) {
            comp.style.display = display;
          } else {
            comp.style.display = "flex";
          }
        }
        return me;
      };
      CFrame.prototype.hideFrameComponent = function(frameComponentId) {
        var me = this;
        var comp = me.getFrameComponentElement(frameComponentId);
        if (comp) {
          comp.style.display = "none";
        }
        return me;
      };
      CFrame.prototype.hideAllVisibleFrameComponents = function() {
        var me = this;
        var compMap = me.frameComponentMap;
        for (var key in compMap) {
          if (compMap.hasOwnProperty(key)) {
            var comp = compMap[key].htmlElement;
            if (comp.style.display === "none") {
              comp._alreadyNone = true;
            }
            comp.style.display = "none";
          }
        }
      };
      CFrame.prototype.showAllVisibleFrameComponents = function() {
        var me = this;
        var compMap = me.frameComponentMap;
        for (var key in compMap) {
          if (compMap.hasOwnProperty(key)) {
            var comp = compMap[key].htmlElement;
            if (comp._alreadyNone) {
              comp._alreadyNone = null;
            } else {
              comp.style.display = "flex";
            }
          }
        }
      };
      CFrame.prototype.hideFrameComponentChildMenus = function(opt) {
        var me = this;
        var compMap = me.frameComponentMap;
        for (var frameComponentId in compMap) {
          if (compMap.hasOwnProperty(frameComponentId)) {
            if (opt && opt.exceptFrameComponentId) {
              if (frameComponentId === opt.exceptFrameComponentId) {
                continue;
              }
            }
            var comp = compMap[frameComponentId];
            if (comp.childMenu) {
              comp.childMenu.style.display = "none";
            }
          }
        }
      };
      CFrame.prototype.setTitle = function(str) {
        var me = this;
        me.title = str;
        if (me.showTitleBar) {
          var textNode = document.createTextNode(str);
          me.titleBar.firstChild.replaceChild(textNode, me.titleBar.firstChild.firstChild);
        }
        return me;
      };
      CFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight) {
        var me = this;
        var tmpLeft = parseInt(me.htmlElement.style.left, 10);
        var tmpTop = parseInt(me.htmlElement.style.top, 10);
        var tmpWidth = parseInt(me.htmlElement.style.width, 10);
        var tmpHeight = parseInt(me.htmlElement.style.height, 10);
        me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + "px";
        me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + "px";
        me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + "px";
        me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + "px";
        var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
        var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);
        me.canvas.canvasElement.style.width = tmpCanvasWidth + deltaWidth + "px";
        me.canvas.canvasElement.style.height = tmpCanvasHeight + deltaHeight + "px";
        if (me.showTitleBar) {
          me.titleBar.style.width = tmpCanvasWidth + deltaWidth + "px";
        } else {
        }
        for (var beanName in me.canvas.beanList) {
          var tmpBean = me.canvas.beanList[beanName];
          if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
            if (tmpBean.htmlElement.usage == "RD") {
              tmpBean.htmlElement.style.left = parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth + "px";
              tmpBean.htmlElement.style.top = parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight + "px";
            } else if (tmpBean.htmlElement.usage == "DD") {
              tmpBean.htmlElement.style.width = parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth + "px";
              tmpBean.htmlElement.style.top = parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight + "px";
            } else if (tmpBean.htmlElement.usage == "RR") {
              tmpBean.htmlElement.style.left = parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth + "px";
              tmpBean.htmlElement.style.height = parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight + "px";
            }
          }
        }
      };
      CFrame.prototype.canvasMouseDown = function(e) {
        var me = this;
        if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
          this.parentCFrame.parentCanvas.mouseDownSource = "childcanvas";
        }
      };
      CFrame.prototype.mouseUp = function(e) {
        this.canvas.mouseUp(e);
      };
      CFrame.prototype.close = function(e) {
        var me = this;
        var parentCanvas = this.parentObject.parentCanvas;
        var cframeObj = this.parentObject;
        console.log('CFrame#close "' + cframeObj.title + "(@" + cframeObj.getName() + ')" @' + cframeObj.windowId);
        var windowId = cframeObj.id;
        cframeObj.closeInternally(e, parentCanvas, windowId);
      };
      CFrame.prototype.closeFrame = function(e) {
        var me = this;
        console.log('CFrame#closeFrame "' + me.title + "(" + me.getName() + ')" @' + me.windowId);
        var parentCanvas = this.parentCanvas;
        me.closeInternally(e, parentCanvas, me.windowId);
      };
      CFrame.prototype.closeInternally = function(e, parentCanvas, windowId) {
        var me = this;
        if (!parentCanvas) {
          console.error("Window(" + windowId + ") may have been closed");
          return;
        }
        parentCanvas.removeBean(windowId);
        if (me.modalBackgroundWindowId) {
          parentCanvas.removeBean(me.modalBackgroundWindowId);
          me.modalBackgroundWindowId = null;
        }
        if (me.onCloseFrameListener) {
          me.onCloseFrameListener(me);
        }
      };
      CFrame.prototype.setOnCloseFrameListener = function(listener) {
        var me = this;
        me.onCloseFrameListener = listener;
      };
      CFrame.prototype.contextMenu = function() {
        var contextMenuSource = "CFrame";
        return false;
      };
      CFrame.prototype.setTitleBarTextColor = function(str) {
        var me = this;
        me.titleBar.style.color = str;
      };
      CFrame.prototype.setPosition = function(x, y, anchor) {
        var me = this;
        var frameWidth = me.getWidth();
        var frameHeight = me.getHeight();
        me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);
        return me;
      };
      CFrame.prototype._setPositionInternally = function(x, y, anchor, frameWidth, frameHeight) {
        var me = this;
        if (anchor) {
          me.anchor = anchor;
        }
        if (!anchor || CALIGN2.LEFT_TOP == anchor) {
          me.htmlElement.style.left = x + "px";
          me.htmlElement.style.top = y + "px";
        } else if (CALIGN2.HCENTER_TOP == anchor) {
          me.htmlElement.style.left = -frameWidth / 2 + x + "px";
          me.htmlElement.style.top = y + "px";
        } else if (CALIGN2.RIGHT_TOP == anchor) {
          me.htmlElement.style.left = -frameWidth + x + "px";
          me.htmlElement.style.top = y + "px";
        } else if (CALIGN2.LEFT_VCENTER == anchor) {
          me.htmlElement.style.left = x + "px";
          me.htmlElement.style.top = -frameHeight / 2 + y + "px";
        } else if (CALIGN2.HCENTER_VCENTER == anchor) {
          me.htmlElement.style.left = -frameWidth / 2 + x + "px";
          me.htmlElement.style.top = -frameHeight / 2 + y + "px";
        } else if (CALIGN2.RIGHT_VCENTER == anchor) {
          me.htmlElement.style.left = -frameWidth + x + "px";
          me.htmlElement.style.top = -frameHeight / 2 + y + "px";
        } else if (CALIGN2.LEFT_BOTTOM == anchor) {
          me.htmlElement.style.left = x + "px";
          me.htmlElement.style.top = -frameHeight + y + "px";
        } else if (CALIGN2.HCENTER_BOTTOM == anchor) {
          me.htmlElement.style.left = -frameWidth / 2 + x + "px";
          me.htmlElement.style.top = -frameHeight + y + "px";
        } else if (CALIGN2.RIGHT_BOTTOM == anchor) {
          me.htmlElement.style.left = -frameWidth + x + "px";
          me.htmlElement.style.top = -frameHeight + y + "px";
        }
      };
      CFrame.prototype.getPosition = function() {
        var me = this;
        var frameWidth = me.getWidth();
        var frameHeight = me.getHeight();
        var x;
        var y;
        var anchor = me.anchor;
        if (!anchor || CALIGN2.LEFT_TOP == anchor) {
          x = parseInt(me.htmlElement.style.left, 10);
          y = parseInt(me.htmlElement.style.top, 10);
        } else if (CALIGN2.HCENTER_TOP == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
          y = parseInt(me.htmlElement.style.top, 10);
        } else if (CALIGN2.RIGHT_TOP == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
          y = parseInt(me.htmlElement.style.top, 10);
        } else if (CALIGN2.LEFT_VCENTER == anchor) {
          x = parseInt(me.htmlElement.style.left, 10);
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
        } else if (CALIGN2.HCENTER_VCENTER == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
        } else if (CALIGN2.RIGHT_VCENTER == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
        } else if (CALIGN2.LEFT_BOTTOM == anchor) {
          x = parseInt(me.htmlElement.style.left, 10);
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
        } else if (CALIGN2.HCENTER_BOTTOM == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
        } else if (CALIGN2.RIGHT_BOTTOM == anchor) {
          x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
          y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
        }
        return { x, y, anchor };
      };
      CFrame.prototype.getLeft = function() {
        var me = this;
        return parseInt(me.htmlElement.style.left, 10);
      };
      CFrame.prototype.getTop = function() {
        var me = this;
        return parseInt(me.htmlElement.style.top, 10);
      };
      CFrame.prototype.getWidth = function() {
        var me = this;
        return parseInt(me.htmlElement.style.width, 10);
      };
      CFrame.prototype.getHeight = function() {
        var me = this;
        return parseInt(me.htmlElement.style.height, 10);
      };
      CFrame.prototype.getSize = function() {
        var me = this;
        return { width: me.getWidth(), height: me.getHeight() };
      };
      CFrame.prototype.setSize = function(width, height, force) {
        var me = this;
        var byUser = true;
        if (force) {
          byUser = false;
        }
        me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), byUser);
        return me;
      };
      CFrame.prototype.getWindowId = function() {
        var me = this;
        return me.windowId;
      };
      CFrame.prototype.getName = function() {
        var me = this;
        return me.property.name;
      };
      CFrame.prototype.setName = function(name) {
        var me = this;
        me.property.name = name;
      };
      inherit(CIfFrame, CFrame);
      function CIfFrame(windowId, left, top, width, height, appearance) {
        var wleft = left;
        var wtop = top;
        var wwidth = width;
        var wheight = height;
        var zindex = appearance.zindex;
        var wborderwidth = null;
        var me = this;
        this.jsFrame = null;
        this.control = null;
        this.minFrameWidth = 128;
        this.minWindowHeight = 32;
        this.eventListenerHelper = new EventListenerHelper();
        this.overrayTransparentScreenEnabled = false;
        this.overrayTransparentScreenOnResize = true;
        this.titleBarColorFocused = appearance.titleBarColorFocused;
        this.titleBarColorDefault = appearance.titleBarColorDefault;
        this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
        this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;
        CIfFrame.superConstructor.call(me, windowId, wleft, wtop, wwidth, wheight, zindex, wborderwidth, appearance);
        me.frameBorderColorDefault = appearance.frameBorderColorDefault;
        me.frameBorderColorFocused = appearance.frameBorderColorFocused;
        me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
        me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;
        me.iframe = null;
        me.ifDelta = 0;
        me.resizable = true;
        me.onMouseMoveOnIframe = null;
        me.onMouseUpOnIframe = null;
        me._hasFocus = false;
        me._hasFocusTime = 0;
        me.htmlElement.typeName = "cifwindow";
        var exIframeName = "riversun_" + windowId;
        me.dframe = document.createElement("div");
        me.iframe = document.createElement("iframe");
        me.iframe.name = exIframeName;
        me.iframe.id = exIframeName;
        me.iframe.frameBorder = "0";
        me.iframe.zIndex = -1;
        me.iframe.allowTransparency = "true";
        me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
        me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;
        me.showTitleBar = appearance.showTitleBar;
        me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;
        me.frameBorderRadius = appearance.frameBorderRadius;
        me.adjustFrameBorderRadius();
        me.useIframe = false;
        me.canvas.canvasElement.appendChild(me.iframe);
        me.canvas.canvasElement.appendChild(me.dframe);
        this.setUseIframe = function(useIframe) {
          me.useIframe = useIframe;
          me.iframe.style.visibility = "hidden";
          me.iframe.style.position = "absolute";
          me.iframe.style.left = "0px";
          me.iframe.style.top = "0px";
          me.iframe.style.width = "100%";
          me.iframe.style.height = "100%";
          me.dframe.style.visibility = "hidden";
          me.dframe.style.position = "absolute";
          me.dframe.style.left = "0px";
          me.dframe.style.boxSizing = "content-box";
          me.dframe.style.top = "0px";
          me.dframe.style.width = "100%";
          me.dframe.style.height = "100%";
          me.dframe.style.backgroundColor = "white";
          if (useIframe) {
            me.iframe.style.visibility = "visible";
            me.dframe.style.visibility = "hidden";
          } else {
            me.iframe.style.visibility = "hidden";
            me.dframe.style.visibility = "visible";
          }
        };
        me.setUseIframe(appearance.useIframe);
        if (me.overrayTransparentScreenEnabled || me.overrayTransparentScreenOnResize) {
          me.transparence = document.createElement("span");
          me.transparence.style.position = "absolute";
          me.transparence.style.left = "0px";
          me.transparence.style.top = "0px";
          me.transparence.style.width = "0px";
          me.transparence.style.height = "0px";
          me.transparence.style.zIndex = 4;
          me.transparence.style.borderWidth = "0px";
          me.transparence.style.borderColor = "#ff00ee";
          me.transparence.style.borderStyle = "none";
          me.transparence.style.cursor = "default";
          me.transparence.style.pointerEvents = "none";
          me.canvas.canvasElement.style.backgroundColor = appearance.frameBackgroundColor;
          me.canvas.canvasElement.appendChild(me.transparence);
        }
        me.eventEmitter = new EventEmitter();
        me.appearance = appearance;
      }
      CIfFrame.prototype.getFrameView = function() {
        var me = this;
        return me.dframe;
      };
      CIfFrame.prototype.getFrameAppearance = function() {
        var me = this;
        return me.appearance;
      };
      CIfFrame.prototype.setHTML = function(html) {
        var me = this;
        me.dframe.innerHTML = html;
      };
      CIfFrame.prototype.setFrameInFrame = function(enabled) {
        var me = this;
        var contentsEle = me.dframe ? me.dframe.firstChild : null;
        if (contentsEle) {
          if (!Date.now) {
            Date.now = function now() {
              return new Date().getTime();
            };
          }
          if (enabled) {
            me.eventEmitter.only("resize", "fif-listener", function() {
              contentsEle.setAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR, Date.now());
            });
          } else {
            contentsEle.removeAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR);
            me.eventEmitter.only("resize", "fif-listener", function() {
            });
          }
        }
      };
      CIfFrame.prototype.$ = function(q) {
        var me = this;
        if (me.useIframe) {
          var docInIframe = me.iframe.contentWindow.document;
          return docInIframe.querySelector(q);
        } else {
          return me.dframe.querySelector(q);
        }
      };
      CIfFrame.prototype.on = function(id, eventType, callbackFunc) {
        var me = this;
        var component = me.getFrameComponentElement(id);
        if (component) {
          me.eventListenerHelper.addEventListener(component, eventType, function(e) {
            callbackFunc(me, e, {
              type: "frameComponent",
              id,
              eventType
            });
          }, { listenerName: "frame-component-listener" });
        }
        if (id === "frame" || id === "window") {
          if (eventType === "move" && !me.eventEmitter.hasListenerFuncs("move")) {
            me.setOnMoveListener(function(e) {
              me.eventEmitter.emit("move", me._getCurrentSizePos());
            });
          }
          me.eventEmitter.on(eventType, callbackFunc);
        }
        var domElement = me.$(id);
        if (domElement) {
          if (me.eventListenerHelper.hasEventListener(domElement, eventType, "frame-dom-listener")) {
            me.eventListenerHelper.removeEventListener(domElement, eventType, null, { listenerName: "frame-dom-listener" });
          }
          me.eventListenerHelper.addEventListener(domElement, eventType, function(e) {
            callbackFunc(me, e, {
              type: "dom",
              id,
              eventType
            });
          }, { listenerName: "frame-dom-listener" });
        }
        if (!domElement) {
          var domElementOnCanvasElement = me.canvas.canvasElement.querySelector(id);
          if (domElementOnCanvasElement) {
            domElementOnCanvasElement.addEventListener(eventType, function(e) {
              callbackFunc(me, e, {
                type: "dom",
                id,
                eventType
              });
            });
          }
        }
      };
      CIfFrame.prototype.adjustFrameBorderRadius = function() {
        var me = this;
        if (parseInt(me.frameBorderRadius, 10) > 0) {
          var borderData = me.getFrameInnerBorderRadius(me, me._hasFocus);
          var frameAppearance = borderData.frameAppearance;
          var innerBorderRadius = borderData.innerBorderRadius;
          var titleBarHeight = parseInt(frameAppearance.titleBarHeight, 10);
          if (me.showTitleBar) {
            me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
            me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
            me.iframe.style.borderBottomRightRadius = innerBorderRadius;
            me.iframe.style.borderBottomLeftRadius = innerBorderRadius;
            me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
            me.titleBar.style.borderTopRightRadius = innerBorderRadius;
          } else {
            me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
            me.iframe.style.borderRadius = innerBorderRadius;
          }
          if (me.dframe) {
            if (titleBarHeight === 0) {
              if (!me.dframe.style.borderTopRightRadius) {
                me.dframe.style.borderTopRightRadius = innerBorderRadius;
              }
              if (!me.dframe.style.borderTopLeftRadius) {
                me.dframe.style.borderTopLeftRadius = innerBorderRadius;
              }
            }
            me.dframe.style.borderBottomRightRadius = innerBorderRadius;
            me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
          }
        }
      };
      CIfFrame.prototype.handleReleasingFocus = function(e) {
        var me = this;
        var focused = me._hasFocus;
        me._hasFocus = false;
        me.titleBar.className = me.titleBarClassNameDefault;
        if (me.titleBarColorDefault) {
          me.titleBar.style.background = me.titleBarColorDefault;
        }
        me.titleBar.style.color = me.titleBarCaptionColorDefault;
        if (me.frameBorderColorDefault) {
          me.htmlElement.style.borderColor = me.frameBorderColorDefault;
        }
        if (me.frameBorderWidthDefault) {
          me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
          me.adjustFrameBorderRadius();
        }
        if (me.htmlElement.typeName == "cifwindow") {
          if (me.overrayTransparentScreenEnabled) {
            me.transparence.style.width = parseInt(me.iframe.width, 10) + "px";
            me.transparence.style.height = parseInt(me.iframe.height, 10) + "px";
          }
        }
        for (var frameComponentId in me.frameComponentMap) {
          var frameComponent = me.frameComponentMap[frameComponentId];
          frameComponent.handleReleasingFocus();
        }
        if (me.titleBarBorderBottomDefault) {
          me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
        }
        if (focused) {
          me.eventEmitter.emit("blur", { target: me });
        }
        return me;
      };
      CIfFrame.prototype.handleTakingFocus = function(e) {
        var me = this;
        var focused = me._hasFocus;
        me._hasFocus = true;
        me._hasFocus = Date.now();
        if (me.overrayTransparentScreenEnabled) {
          me.transparence.style.width = "0px";
          me.transparence.style.height = "0px";
        }
        me.titleBar.className = me.titleBarClassNameFocused;
        if (me.titleBarColorFocused) {
          me.titleBar.style.background = me.titleBarColorFocused;
        }
        me.titleBar.style.color = me.titleBarCaptionColorFocused;
        if (me.frameBorderColorFocused) {
          me.htmlElement.style.borderColor = me.frameBorderColorFocused;
        }
        if (me.frameBorderWidthFocused) {
          me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
          me.adjustFrameBorderRadius();
        }
        if (me.titleBarBorderBottomFocused) {
          me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
        }
        for (var frameComponentId in me.frameComponentMap) {
          var frameComponent = me.frameComponentMap[frameComponentId];
          frameComponent.handleTakingFocus();
        }
        if (!focused) {
          me.eventEmitter.emit("focus", { target: me });
        }
        return me;
      };
      CFrame.prototype.show = function(model) {
        var me = this;
        me.htmlElement.style.display = "flex";
        if (model && model.requestFocus == false) {
        } else {
          me.requestFocus();
        }
        return me;
      };
      CFrame.prototype.showModal = function(onCloseListener) {
        var me = this;
        var appearance = new CFrameAppearance();
        appearance.showTitleBar = true;
        appearance.showCloseButton = false;
        appearance.frameBorderRadius = "0px";
        appearance.frameBorderStyle = "none";
        appearance.frameBorderWidthDefault = "0px";
        appearance.frameBorderWidthFocused = "0px";
        appearance.frameBoxShadow = null;
        appearance.frameBackgroundColor = "transparent";
        appearance.frameComponents = [];
        appearance.frameHeightAdjust = 0;
        appearance.titleBarHeight = "0px";
        appearance.titleBarBorderBottomFocused = null;
        appearance.titleBarCaptionLeftMargin = "0px";
        appearance.onInitialize = function() {
        };
        appearance.pullUpDisabled = true;
        var windowManager = me.parentCanvas;
        var modalBackgroundWindowId = DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX + me.id;
        var modalBackgroundFrame = new CIfFrame(modalBackgroundWindowId, 0, 0, 1, 1, appearance);
        modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
        modalBackgroundFrame.setResizable(false);
        window.addEventListener("resize", function() {
          modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
        });
        me.modalBackgroundWindowId = modalBackgroundWindowId;
        modalBackgroundFrame.hide();
        windowManager.addWindow(modalBackgroundFrame);
        modalBackgroundFrame.setTitle("").getFrameView().innerHTML = '<div class="jsframe-modal-window-background"></div>';
        modalBackgroundFrame.getFrameView().style.backgroundColor = "rgba(0,0,0,0.0)";
        modalBackgroundFrame.show();
        me.show();
        if (onCloseListener) {
          me.setOnCloseFrameListener(onCloseListener);
        }
      };
      CFrame.prototype.getWindowManager = function() {
        var me = this;
        return me.parentCanvas;
      };
      CIfFrame.prototype.hide = function() {
        var me = this;
        me.htmlElement.style.display = "none";
        return me;
      };
      CIfFrame.prototype.onmouseDown = function(e) {
        var refHtmlElement = this;
        document.body.ondrag = function() {
          return false;
        };
        refHtmlElement.decorator = CFrame.prototype.onmouseDown;
        refHtmlElement.decorator(e);
        var refCIfFrame = refHtmlElement.parent;
        var refCWindowManager = refHtmlElement.parentCanvas;
        for (var windowId in refCWindowManager.beanList) {
          var objCIfFrame = refCWindowManager.beanList[windowId];
          if (windowId == refCIfFrame.getWindowId()) {
          } else {
            objCIfFrame.handleReleasingFocus();
          }
        }
        refCIfFrame.handleTakingFocus();
      };
      CIfFrame.prototype.mouseUp = function(e) {
        var refCIfFrame = this;
        if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
          if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
            refCIfFrame.transparence.style.width = "0px";
            refCIfFrame.transparence.style.height = "0px";
          } else {
            if (refCIfFrame.overrayTransparentScreenEnabled) {
              refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + "px";
              refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + "px";
            }
          }
        }
        refCIfFrame.decorator = CFrame.prototype.mouseUp;
        refCIfFrame.decorator(e);
        document.body.ondrag = null;
        document.body.onselectstart = null;
        refCIfFrame.transparence.style.pointerEvents = "none";
      };
      CIfFrame.prototype.setMinFrameSize = function(width, height) {
        var me = this;
        me.minFrameWidth = width;
        me.minWindowHeight = height;
      };
      CIfFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight, byUser) {
        var refCIfFrame = this;
        if (!refCIfFrame.resizable && byUser) {
          return null;
        }
        var prevSize = refCIfFrame.getSize();
        var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
        var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
        var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
        var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);
        if (byUser && tmpWidth + deltaWidth < refCIfFrame.minFrameWidth & deltaWidth < 0) {
          refCIfFrame.htmlElement.style.width = tmpWidth + "px";
          deltaWidth = 0;
        }
        if (byUser && tmpHeight + deltaHeight < refCIfFrame.minWindowHeight & deltaHeight < 0) {
          refCIfFrame.htmlElement.style.height = tmpHeight + "px";
          deltaHeight = 0;
        }
        refCIfFrame.htmlElement.style.left = tmpLeft + deltaLeft + "px";
        refCIfFrame.htmlElement.style.top = tmpTop + deltaTop + "px";
        refCIfFrame.htmlElement.style.width = tmpWidth + deltaWidth + "px";
        refCIfFrame.htmlElement.style.height = tmpHeight + deltaHeight + "px";
        var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width, 10);
        var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height, 10);
        refCIfFrame.canvas.canvasElement.style.width = tmpCanvasWidth + deltaWidth + "px";
        refCIfFrame.canvas.canvasElement.style.height = tmpCanvasHeight + deltaHeight + "px";
        refCIfFrame.titleBar.style.width = tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0 + "px";
        refCIfFrame.iframe.width = tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0 + "px";
        refCIfFrame.iframe.height = tmpCanvasHeight - refCIfFrame.ifDelta + deltaHeight + refCIfFrame.frameHeightAdjust + "px";
        if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
          refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + "px";
          refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + "px";
        }
        for (var frameComponentId in refCIfFrame.frameComponentMap) {
          var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
          frameComponent.updateAlign();
        }
        for (var beanName in refCIfFrame.canvas.beanList) {
          var tmpBean = refCIfFrame.canvas.beanList[beanName];
          if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
            if (tmpBean.htmlElement.usage == "RD") {
              tmpBean.htmlElement.style.left = parseInt(tmpBean.htmlElement.style.left) + deltaWidth + "px";
              tmpBean.htmlElement.style.top = parseInt(tmpBean.htmlElement.style.top) + deltaHeight + "px";
            } else if (tmpBean.htmlElement.usage == "DD") {
              tmpBean.htmlElement.style.width = parseInt(tmpBean.htmlElement.style.width) + deltaWidth + "px";
              tmpBean.htmlElement.style.top = parseInt(tmpBean.htmlElement.style.top) + deltaHeight + "px";
            } else if (tmpBean.htmlElement.usage == "RR") {
              tmpBean.htmlElement.style.left = parseInt(tmpBean.htmlElement.style.left) + deltaWidth + "px";
              tmpBean.htmlElement.style.height = parseInt(tmpBean.htmlElement.style.height) + deltaHeight + "px";
            }
          }
        }
        var crrSize = refCIfFrame.getSize();
        if (prevSize.width !== crrSize.width || prevSize.height !== crrSize.height) {
          refCIfFrame.eventEmitter.emit("resize", refCIfFrame._getCurrentSizePos());
        }
      };
      CIfFrame.prototype._getCurrentSizePos = function() {
        var me = this;
        var crrSize = me.getSize();
        var crrPos = me.getPosition();
        return { target: me, pos: crrPos, size: crrSize };
      };
      CIfFrame.prototype.resizeDirect = function(width, height, byUser) {
        var refCIfFrame = this;
        if (!refCIfFrame.resizable && byUser) {
          return null;
        }
        refCIfFrame.htmlElement.style.width = width + "px";
        refCIfFrame.htmlElement.style.height = height + "px";
        var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
        var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);
        refCIfFrame.canvas.canvasElement.style.width = width + "px";
        refCIfFrame.canvas.canvasElement.style.height = height - refCIfFrame.titleBar.style.height + "px";
        refCIfFrame.titleBar.style.width = width - refCIfFrame.ifDelta + "px";
        refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + "px";
        refCIfFrame.iframe.height = height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + "px";
        if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
          refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + "px";
          refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + "px";
        }
        for (var frameComponentId in refCIfFrame.frameComponentMap) {
          var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
          frameComponent.updateAlign();
        }
        for (var beanName in refCIfFrame.canvas.beanList) {
          var tmpBean = refCIfFrame.canvas.beanList[beanName];
          if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
            if (tmpBean.htmlElement.usage == "RD") {
              tmpBean.htmlElement.style.left = width + "px";
              tmpBean.htmlElement.style.top = height + "px";
            } else if (tmpBean.htmlElement.usage == "DD") {
              tmpBean.htmlElement.style.width = width + "px";
              tmpBean.htmlElement.style.top = height + "px";
            } else if (tmpBean.htmlElement.usage == "RR") {
              tmpBean.htmlElement.style.left = width + "px";
              tmpBean.htmlElement.style.height = height + "px";
            }
          }
        }
      };
      CIfFrame.prototype.requestFocus = function() {
        var me = this;
        var beanList = me.parentCanvas.beanList;
        for (var windowId in beanList) {
          var tmpIfWindow = beanList[windowId];
          if (windowId == me.getWindowId()) {
            tmpIfWindow.handleTakingFocus();
          } else {
            tmpIfWindow.handleReleasingFocus();
          }
        }
        me.parentCanvas.pullUp(me.id);
      };
      CIfFrame.prototype.setUrl = function(url) {
        var me = this;
        return new Promise(function(resolve, reject) {
          if (url) {
            me.setUseIframe(true);
          } else {
            me.setUseIframe(false);
            resolve();
          }
          me.iframe.src = url;
          me.iframe.onload = function() {
            var funcOnMouseMove = function(e) {
              var clientX = e.pageX;
              var clientY = e.pageY;
              if (TOUCH_ENABLED) {
                if (e.type === "touchmove") {
                  var changedTouches = e.changedTouches;
                  if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
                    var touches = e.touches;
                    if (touches.length === 1) {
                      clientX = changedTouches[0].pageX;
                      clientY = changedTouches[0].pageY;
                    } else {
                      return true;
                    }
                  } else {
                    clientX = changedTouches[0].pageX;
                    clientY = changedTouches[0].pageY;
                  }
                }
              }
              var frameLeft = me.getLeft();
              var frameTop = me.getTop();
              var eventFromIframe = document.createEvent("MouseEvents");
              eventFromIframe.initMouseEvent("mousemove", true, false, window, e.detail, e.screenX, e.screenY, clientX + frameLeft, clientY + frameTop, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);
              me.parentCanvas.windowMouseMove(eventFromIframe);
              if (me.onMouseMoveOnIframe) {
                me.onMouseMoveOnIframe(eventFromIframe);
              }
            };
            me.iframe.contentWindow.document.onmousemove = funcOnMouseMove;
            me.iframe.contentWindow.document.ontouchmove = funcOnMouseMove;
            var funcOnMouseUp = function(e) {
              var clientX = e.pageX;
              var clientY = e.pageY;
              if (TOUCH_ENABLED) {
                if (e.type === "touchend") {
                  var changedTouches = e.changedTouches;
                  clientX = changedTouches[0].pageX;
                  clientY = changedTouches[0].pageY;
                }
              }
              var frameLeft = me.getLeft();
              var frameTop = me.getTop();
              var eventFromIframe = document.createEvent("MouseEvents");
              eventFromIframe.initMouseEvent("mouseup", true, false, window, e.detail, e.screenX, e.screenY, clientX + frameLeft, clientY + frameTop, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);
              me.parentCanvas.windowMouseUp(eventFromIframe);
              if (me.onMouseUpOnIframe) {
                me.onMouseUpOnIframe(eventFromIframe);
              }
            };
            me.iframe.contentWindow.document.onmouseup = funcOnMouseUp;
            me.iframe.contentWindow.document.ontouchend = funcOnMouseUp;
            resolve(me, me.iframe.contentWindow.document);
          };
        });
      };
      CIfFrame.prototype.getIfDocument = function() {
        var me = this;
        return me.iframe.contentWindow.document;
      };
      CIfFrame.prototype.setScrolling = function(str) {
        var me = this;
        me.iframe.scrolling = str;
      };
      CIfFrame.prototype.getScrolling = function(str) {
        var me = this;
        return me.iframe.scrolling;
      };
      CIfFrame.prototype.setResizable = function(enabled) {
        var me = this;
        me.resizable = enabled;
        me.enableMarkers(enabled);
        return me;
      };
      CIfFrame.prototype.setControl = function(model) {
        var me = this;
        if (model) {
          model.frame = me;
          me.control = me.jsFrame.createWindowEventHelper(model);
          me.control.setupDefaultEvents();
        }
      };
      inherit(CWindowManager, CCanvas);
      function CWindowManager(parentElement, canvasId, left, top, width, height) {
        CWindowManager.superConstructor.call(this, parentElement, canvasId, left, top, width, height);
        var me = this;
        document.addEventListener("click", function(evt) {
          for (var windowId in me.beanList) {
            var beanFrame = me.beanList[windowId];
            beanFrame.onBodyClicked(evt);
          }
        });
      }
      CWindowManager.prototype.getWindow = function(windowId) {
        var me = this;
        return me.beanList[windowId];
      };
      CWindowManager.prototype.addWindow = function(window2) {
        var me = this;
        var windowId = window2.getWindowId();
        var name = window2.getName();
        me.beanIdName[windowId] = name;
        me.beanNameId[name] = windowId;
        me.addBean(window2);
      };
      CWindowManager.prototype.containsWindowName = function(name) {
        var me = this;
        var windowId = me.beanNameId[name];
        if (windowId) {
          return true;
        }
        return false;
      };
      CWindowManager.prototype.getWindowByName = function(name) {
        var me = this;
        var windowId = me.beanNameId[name];
        if (windowId) {
          return me.getWindow(windowId);
        } else {
          return null;
        }
      };
      CWindowManager.prototype.windowMouseMove = function(e) {
        var me = this;
        if (me.currentObject == null) {
          return null;
        }
        var childWindowMoved = false;
        var beanList = me.beanList;
        for (var windowId in beanList) {
          var targetWindow = beanList[windowId];
          var eventData = targetWindow.canvas.mouseMove(e);
          childWindowMoved = childWindowMoved | eventData != null;
          if (eventData != null) {
            if (eventData.targetTypeName == "cmarkerwindow") {
              var targetObject = eventData.targetObject;
              targetWindow.transparence.style.pointerEvents = "auto";
              if (targetObject.usage == "RD") {
                targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
              } else if (targetObject.usage == "DD") {
                targetWindow.resize(0, 0, 0, eventData.deltaY, true);
              } else if (targetObject.usage == "RR") {
                targetWindow.resize(0, 0, eventData.deltaX, 0, true);
              }
            }
          }
        }
        if (!childWindowMoved && this.mouseDownSource != "childcanvas") {
          me.mouseMove(e);
        }
      };
      CWindowManager.prototype.windowMouseUp = function(e) {
        var me = this;
        me.mouseUp(e);
        var beanList = me.beanList;
        for (var windowId in beanList) {
          var objWindow = beanList[windowId];
          objWindow.mouseUp(e);
        }
      };
      CWindowManager.prototype.removeBean = function(windowId) {
        var me = this;
        var beanList = me.beanList;
        var targetBean = beanList[windowId];
        if (targetBean == null) {
          return;
        }
        var removeTargetBeanHasFocus = targetBean._hasFocus;
        me.canvasElement.removeChild(targetBean.htmlElement);
        delete beanList[windowId];
        var beanName = me.beanIdName[windowId];
        if (beanName) {
          delete me.beanIdName[windowId];
          delete me.beanNameId[beanName];
        }
        var maxFocusTime = 0;
        var lastFocusedFrame = null;
        if (removeTargetBeanHasFocus) {
          for (var windowId in beanList) {
            var frame = beanList[windowId];
            if (maxFocusTime <= frame._hasFocusTime && !frame.pullUpDisabled) {
              maxFocusTime = frame._hasFocusTime;
              lastFocusedFrame = frame;
            }
          }
          if (lastFocusedFrame) {
            lastFocusedFrame.requestFocus();
          }
        }
        targetBean.parentCanvas = null;
      };
      inherit(CMarkerWindow, CBeanFrame);
      function CMarkerWindow(windowId, left, top, width, height, zindex, usage, color) {
        var me = this;
        CMarkerWindow.superConstructor.call(this, windowId, left, top, width, height, zindex, usage);
        me.htmlElement.typeName = "cmarkerwindow";
        me.htmlElement.usage = usage;
        me.htmlElement.isRangeLimited = false;
        me.htmlElement.style.borderStyle = "none";
        me.htmlElement.style.zIndex = 1;
        if (color) {
          me.htmlElement.style.background = color;
        }
        me.getWindowType = function() {
          return "CMarkerWindow";
        };
      }
      function JSFrame(model) {
        var me = this;
        var parentElement = null;
        me.isWindowManagerFixed = true;
        if (model && model.fixed == false) {
          me.isWindowManagerFixed = false;
        }
        if (model && model.parentElement) {
          parentElement = model.parentElement;
        }
        me.hAlign = "left";
        me.vAlign = "top";
        if (model && model.horizontalAlign) {
          me.hAlign = model.horizontalAlign;
        }
        if (model && model.verticalAlign) {
          me.vAlign = model.verticalAlign;
        }
        me.pullToRefresh = false;
        if (model && typeof model.pullToRefresh === "boolean") {
          me.pullToRefresh = model.pullToRefresh;
        }
        me.touchActionManipulation = true;
        if (model && typeof model.touchActionManipulation === "boolean") {
          me.touchActionManipulation = model.touchActionManipulation;
        }
        if (!parentElement) {
          if (me.isWindowManagerFixed) {
            var topParentDiv = document.createElement("div");
            topParentDiv.id = "jsFrame_fixed_" + me.generateUUID();
            topParentDiv.setAttribute("style", "position:fixed;" + me.hAlign + ":0px;" + me.vAlign + ":0px;margin:0px;padding:0px;");
            document.body.appendChild(topParentDiv);
            parentElement = topParentDiv;
          } else {
            var topParentDiv = document.createElement("div");
            topParentDiv.id = "jsFrame_absolute_" + me.generateUUID();
            topParentDiv.setAttribute("style", "position:absolute;" + me.hAlign + ":0px;" + me.vAlign + ":0px;margin:0px;padding:0px;");
            document.body.appendChild(topParentDiv);
            parentElement = topParentDiv;
          }
        } else {
          if (me.isWindowManagerFixed) {
            var topParentDiv = document.createElement("div");
            topParentDiv.id = "jsFrame_fixed_" + me.generateUUID();
            topParentDiv.setAttribute("style", "position:fixed;" + me.hAlign + ":0px;" + me.vAlign + ":0px;margin:0px;padding:0px;");
            parentElement.appendChild(topParentDiv);
          } else {
            var topParentDiv = document.createElement("div");
            topParentDiv.id = "jsFrame_absolute_" + me.generateUUID();
            topParentDiv.setAttribute("style", "position:absolute;" + me.hAlign + ":0px;" + me.vAlign + ":0px;margin:0px;padding:0px;");
            parentElement.appendChild(topParentDiv);
          }
        }
        if (MOUSE_ENABLED) {
          document.addEventListener("mouseup", mouseUp);
          document.addEventListener("mousemove", mouseMove);
        }
        if (TOUCH_ENABLED) {
          if ("ontouchend" in window) {
            var funcOnTouchEnd = function(evt) {
              mouseUp.bind(this)(evt);
            };
            document.addEventListener("touchend", funcOnTouchEnd);
          }
          if ("ontouchmove" in window) {
            if (me.touchActionManipulation) {
              me.doEnableTouchActionManipulation();
            }
            if (!me.pullToRefresh) {
              me.doDisablePullToRefresh();
            }
            var funcOnTouchMove = function(evt) {
              evt.preventDefault();
              mouseMove.bind(this)(evt);
            };
            document.addEventListener("touchmove", funcOnTouchMove);
          }
        }
        me.windowManager = new CWindowManager(parentElement, "windowManager_" + me.generateUUID(), 0, 0, 0, 0);
        me.domPartsBuilder = null;
        function mouseUp(e) {
          me.windowManager.windowMouseUp(e);
        }
        function mouseMove(e) {
          me.windowManager.windowMouseMove(e);
        }
      }
      JSFrame.prototype.doEnableTouchActionManipulation = function() {
        var bodyStyle = document.documentElement.getAttribute("style");
        if (!bodyStyle) {
          bodyStyle = "";
        } else {
          if (!bodyStyle.endsWith(";")) {
            bodyStyle += ";";
          }
        }
        if (bodyStyle.indexOf("touch-action") === -1) {
          bodyStyle += "-ms-touch-action: manipulation;touch-action: manipulation;";
          document.documentElement.setAttribute("style", bodyStyle);
        }
      };
      JSFrame.prototype.doDisablePullToRefresh = function() {
        var bodyStyle = document.body.getAttribute("style");
        if (!bodyStyle) {
          bodyStyle = "";
        } else {
          if (!bodyStyle.endsWith(";")) {
            bodyStyle += ";";
          }
        }
        if (bodyStyle.indexOf("overscroll-behavior-y") === -1) {
          bodyStyle += "overscroll-behavior-y: contain;";
          document.body.setAttribute("style", bodyStyle);
        }
      };
      JSFrame.prototype.getDomPartsBuilder = function() {
        var me = this;
        if (!me.domPartsBuilder) {
          me.domPartsBuilder = new CDomPartsBuilder();
        }
        return me.domPartsBuilder;
      };
      JSFrame.prototype.create = function(model) {
        var me = this;
        var properties = {};
        properties.name = model.name;
        var title = model.title;
        var left = model.left;
        var top = model.top;
        var width = model.width;
        var height = model.height;
        var appearance = model.appearance;
        var presetWindowName = model.preset;
        var presetWindowParam = model.presetParam;
        var appearanceName = model.appearanceName;
        var appearanceParam = model.appearanceParam;
        var style = model.style;
        var minWidth = model.minWidth;
        var minHeight = model.minHeight;
        var html = model.html;
        var resizable = model.resizable;
        var movable = model.movable;
        var url = model.url;
        var urlLoaded = model.urlLoaded;
        var presetParam = model.presetParam;
        var presetWindow;
        if (presetWindowName) {
          var presetWindowObj = this.getPresetWindow(presetWindowName);
          presetWindow = presetWindowObj.getPresetWindow(presetParam);
          appearance = this.createPresetStyle(presetWindow.appearanceName, { appearanceParam: presetWindow.appearanceParam });
        } else if (appearanceName) {
          appearance = this.createPresetStyle(appearanceName, { appearanceParam });
        }
        if (model.clientHeight) {
          var windowTitleBarHeight = parseInt(appearance.titleBarHeight || 0) - appearance.frameHeightAdjust;
          height = model.clientHeight + windowTitleBarHeight;
        }
        var frame = this.createFrame(left, top, width, height, appearance, properties);
        if (title) {
          frame.setTitle(title);
        }
        if (html) {
          frame.setHTML(html);
        }
        if (url) {
          var urlPromise = frame.setUrl(url);
          if (urlLoaded) {
            urlPromise.then(urlLoaded);
          }
        }
        if (resizable == false) {
          frame.setResizable(false);
        }
        if (movable == false) {
          frame.setMovable(false);
        }
        if (minWidth && minHeight) {
          frame.minFrameWidth = minWidth;
        }
        if (minHeight) {
          frame.minWindowHeight = minHeight;
          if (model.clientHeight) {
            frame.minWindowHeight = minHeight + windowTitleBarHeight;
          }
        }
        if (style) {
          var frameView = frame.getFrameView();
          for (var name in style) {
            if (style.hasOwnProperty(name)) {
              frameView.style[name] = style[name];
            }
          }
        }
        if (presetWindow) {
          presetWindow.setupPresetWindow(frame);
        }
        return frame;
      };
      JSFrame.prototype.createFrame = function(left, top, width, height, appearance, properties) {
        var me = this;
        if (!appearance) {
          appearance = me.createFrameAppearance();
        }
        appearance.initialize();
        var windowId = "window_" + me.generateUUID();
        if (!left) {
          left = 0;
        }
        if (!top) {
          top = 0;
        }
        if (!width) {
          width = 128;
        }
        if (!height) {
          height = 128;
        }
        var frame = new CIfFrame(windowId, left, top, width, height, appearance);
        frame.jsFrame = me;
        if (properties && properties.name) {
          frame.setName(properties.name);
        }
        frame.hide();
        me.windowManager.addWindow(frame);
        if (appearance.getTitleBarStyle) {
          var titleBarStyle = appearance.getTitleBarStyle();
          if (titleBarStyle) {
            frame.setTitleBarClassName(titleBarStyle.titleBarClassNameDefault, titleBarStyle.titleBarClassNameFocused);
          }
        } else if (appearance.titleBarClassNameDefault && appearance.titleBarClassNameFocused) {
          frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameFocused);
        } else if (appearance.titleBarClassNameDefault) {
          frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameDefault);
        }
        return frame;
      };
      JSFrame.prototype.containsWindowName = function(windowName) {
        var me = this;
        return me.windowManager.containsWindowName(windowName);
      };
      JSFrame.prototype.getWindowByName = function(windowName) {
        var me = this;
        return me.windowManager.getWindowByName(windowName);
      };
      JSFrame.prototype.generateUUID = function() {
        var unixTime = Date.now();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          var r = (unixTime + Math.random() * 16) % 16 | 0;
          unixTime = Math.floor(unixTime / 16);
          return (c == "x" ? r : r & 3 | 8).toString(16);
        });
        return uuid;
      };
      JSFrame.prototype.createFrameAppearance = function() {
        return new CFrameAppearance();
      };
      JSFrame.prototype.createAnimator = function() {
        return new CSimpleLayoutAnimator();
      };
      JSFrame.prototype.createWindowEventHelper = function(model) {
        var me = this;
        if (!model) {
          model = {};
        }
        model.verticalAlign = me.vAlign;
        model.horizontalAlign = me.hAlign;
        var wndEventHelper = new WindowEventHelper(model);
        return wndEventHelper;
      };
      JSFrame.prototype.getPresetWindow = function(presetName, param) {
        if (presetWindows[presetName]) {
          var presetObj = presetWindows[presetName];
          return presetObj;
        } else {
          return null;
        }
      };
      JSFrame.prototype.createPresetStyle = function(presetName, param) {
        var me = this;
        var apr = me.createFrameAppearance();
        if (param && param.focusedFrameOnly) {
          apr.focusedFrameOnly = param.focusedFrameOnly;
        }
        if (presetStyles[presetName]) {
          var styleObj = presetStyles[presetName];
          var appearanceParam = null;
          if (param && param.appearanceParam) {
            appearanceParam = param.appearanceParam;
          }
          return styleObj.getStyle(apr, appearanceParam);
        }
        console.error('[JSFrame] Preset appearance "' + presetName + '" not found.');
        return apr;
      };
      JSFrame.prototype.showToast = function(model) {
        if (!model) {
          return;
        }
        var me = this;
        var toastHeight = 60;
        var toastWidth = 260;
        var openCloseDurationMs = 300;
        var stayDurationMs = 1e3;
        var startY = window.innerHeight - 10 - toastHeight / 2;
        var endY = window.innerHeight - 20 - toastHeight / 2;
        var myHtml = "";
        var showButton = false;
        var style = {
          borderRadius: "10px",
          background: "rgba(0,0,0,0.8)"
        };
        if (model.style) {
          style = model.style;
        }
        if (model.height) {
          toastHeight = model.height;
        }
        if (model.width) {
          toastWidth = model.width;
        }
        if (model.duration) {
          stayDurationMs = model.duration;
        }
        if (model.align) {
          if (model.align == "top") {
            startY = 10 + toastHeight / 2;
            endY = 20 + toastHeight / 2;
          } else if (model.align == "center") {
            startY = window.innerHeight / 2;
            endY = window.innerHeight / 2;
          } else {
          }
        }
        if (model.html) {
          myHtml = model.html;
        }
        if (model.text) {
          myHtml = model.text;
        }
        if (model.closeButton == true) {
          showButton = true;
        } else {
          showButton = false;
        }
        var apr = me.createPresetStyle("toast");
        if (style.borderRadius) {
          apr.frameBorderRadius = style.borderRadius;
        }
        if (model.closeButtonColor) {
          apr.captionClor = model.closeButtonColor;
        }
        var frame = me.create({
          name: "toast_" + me.generateUUID(),
          width: toastWidth,
          height: toastHeight,
          movable: false,
          resizable: false,
          appearance: apr,
          style,
          html: '<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:' + toastHeight + 'px">' + myHtml + "</div>"
        });
        if (showButton) {
        } else {
          frame.hideFrameComponent("closeButton");
        }
        var requestFocusAfterAnimation = false;
        var startX = window.innerWidth / 2;
        if (me.hAlign == "right") {
          startX = -startX;
        }
        if (me.vAlign == "bottom") {
          startY = startY - window.innerHeight;
          endY = endY - window.innerHeight;
        }
        var animator = me.createAnimator();
        animator.set(frame).setDuration(openCloseDurationMs).fromPosition(startX, startY, "CENTER_CENTER").toPosition(startX, endY, "CENTER_CENTER").toAlpha(1).fromAlpha(0).start(0, requestFocusAfterAnimation).then(function(animatorObj) {
          return animatorObj.setDuration(openCloseDurationMs).fromPosition(startX, endY, "CENTER_CENTER").toPosition(startX, startY, "CENTER_CENTER").fromAlpha(1).toAlpha(0.5).start(stayDurationMs, requestFocusAfterAnimation);
        }).then(function(animatorObj) {
          var _frame = animatorObj.get();
          _frame.closeFrame();
        });
      };
      Object.freeze(DEF);
      module.exports = JSFrame;
    }
  });
  var JSFrame_neutral_default = require_JSFrame();

  // src/vendor/stoxy/core/stoxy-events.js
  var INIT_SUCCESS = "stoxy-init-success";
  var PUT_SUCCESS = "stoxy-put-success";
  var READ_SUCCESS = "stoxy-read-success";

  // src/vendor/stoxy/core/stoxy-storage.js
  var STOXY_VERSION_NUMBER = 1;
  var STOXY_DATA_STORAGE = "StoxyStorage";
  var STOXY_CACHE_SIZE = 5;
  if (window && !window._STOXY_STATE_CACHE) {
    window._STOXY_STATE_CACHE = {};
    window._STOXY_STATE_CACHE_KEYS = [];
    window._STOXY_LOCKS = {};
  }
  var persistKeys = [];
  var cacheKeys = window._STOXY_STATE_CACHE_KEYS;
  var cache = window._STOXY_STATE_CACHE;
  var locks = window._STOXY_LOCKS;
  var hasIDBAccess = true;
  function canUseIDB() {
    return Boolean(window.indexedDB);
  }
  function lock(key, promise) {
    const topLevelKey = getTopLevelKey(key);
    if (!locks[topLevelKey])
      locks[topLevelKey] = [];
    locks[topLevelKey].push(promise);
  }
  async function getLock(key, operation) {
    await new Promise((resolve) => window.requestAnimationFrame(resolve));
    const topLevelKey = getTopLevelKey(key);
    const waitPromise = new Promise(async (resolve) => {
      const otherLocks = locks[topLevelKey] || [];
      await Promise.all(otherLocks);
      const result = await operation();
      resolve(result);
      locks[topLevelKey] = [];
    });
    lock(key, waitPromise);
    return waitPromise;
  }
  function persistKey(...keyOrKeys) {
    persistKeys = [...persistKeys, ...keyOrKeys];
  }
  function shouldPersist(key) {
    return persistKeys.includes(key);
  }
  function getTopLevelKey(key) {
    return key.indexOf(".") === -1 ? key : key.split(".")[0];
  }
  function doEvent(name, data) {
    if (!data) {
      window.dispatchEvent(new Event(name));
      return;
    }
    window.dispatchEvent(new CustomEvent(name, { detail: data }));
  }
  function getPropertyAtKey(data, key) {
    if (key.indexOf(".") === -1)
      return data;
    const keyParts = key.split(".");
    let currentKey = keyParts.shift();
    let property = data;
    while (keyParts.length > 0) {
      currentKey = keyParts.shift();
      if (typeof property === "undefined")
        break;
      property = property[currentKey];
    }
    return property != null ? property : null;
  }
  function fetchFromCache(key) {
    const topLevelKey = key.split(".")[0];
    return getPropertyAtKey(cache[topLevelKey], key);
  }
  function openStorage() {
    if (!canUseIDB())
      return new Promise((resolve) => resolve());
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(STOXY_DATA_STORAGE, STOXY_VERSION_NUMBER);
      request.onsuccess = (event) => {
        doEvent(INIT_SUCCESS);
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event);
      };
      request.onupgradeneeded = upgrade;
    });
  }
  function upgrade(event) {
    const db = event.target.result;
    db.createObjectStore(STOXY_DATA_STORAGE);
  }
  function updateCache(key, data) {
    if (!cacheKeys.includes(key)) {
      cacheKeys.push(key);
    }
    cache[key] = data;
    if (canUseIDB() && cacheKeys.length > STOXY_CACHE_SIZE) {
      for (let i2 = cacheKeys.length; i2 >= 0; i2--) {
        const cacheKey = cacheKeys[i2];
        if (persistKeys.includes(cacheKey)) {
          persistKeys.splice(i2, 1);
          delete cache[cacheKey];
          break;
        }
      }
    }
  }
  function invalidateCache(key) {
    if (!key) {
      Object.keys(cache).forEach((key2) => delete cache[key2]);
      cacheKeys.length = 0;
      ;
      return;
    }
    cacheKeys.splice(cacheKeys.indexOf(key), 1);
    delete cache[key];
  }
  async function read(key) {
    return await getLock(key, async () => readTransaction(key));
  }
  function readTransaction(key) {
    return new Promise((resolve, reject) => {
      const cachedObject = fetchFromCache(key);
      if (cachedObject != null && typeof cachedObject !== "undefined" || !canUseIDB() || !hasIDBAccess) {
        if (Array.isArray(cachedObject)) {
          return resolve([...cachedObject]);
        }
        return resolve(cachedObject);
      }
      openStorage().then((db) => {
        readFromStore(key, db, resolve, reject);
      }).catch(() => {
        if (hasIDBAccess) {
          hasIDBAccess = false;
          console.warn("Stoxy can't access IndexedDB. Using in-memory storage");
        }
        resolve(read(key));
      });
    });
  }
  function readFromStore(key, db, resolve, reject) {
    const transaction = db.transaction([STOXY_DATA_STORAGE], "readwrite");
    transaction.onerror = (event) => {
      reject(event);
    };
    const objectStore = transaction.objectStore(STOXY_DATA_STORAGE);
    if (!key.includes(".")) {
      const readRequest = objectStore.get(key);
      readRequest.onsuccess = (event) => {
        const resultData = event.target.result;
        if (resultData) {
          updateCache(key, resultData);
        }
        doEvent(READ_SUCCESS, { key, data: resultData });
        resolve(resultData);
      };
    } else {
      const keyParts = key.split(".");
      const topLevelKey = keyParts.shift();
      const readRequest = objectStore.get(topLevelKey);
      readRequest.onsuccess = (event) => {
        const resultData = event.target.result;
        let keyData = resultData;
        while (keyParts.length > 0) {
          const currentKey = keyParts.shift();
          if (typeof keyData === "undefined")
            break;
          keyData = keyData[currentKey];
        }
        if (keyData) {
          updateCache(key, keyData);
        }
        doEvent(READ_SUCCESS, { key, data: keyData });
        resolve(keyData);
      };
    }
  }
  async function write(key, data) {
    const dataCopy = copyObject(data);
    return await getLock(key, async () => writeTransaction(key, dataCopy));
  }
  function writeTransaction(key, data) {
    return new Promise((resolve, reject) => {
      openStorage().then((db) => {
        if (!key.includes(".")) {
          writeToStore(key, data, db, resolve, reject);
        } else {
          writeToKeyInStore(key, data, db, resolve, reject);
        }
      }).catch(() => {
        if (hasIDBAccess) {
          hasIDBAccess = false;
          console.warn("Stoxy can't access IndexedDB. Using in-memory storage");
        }
        if (!key.includes(".")) {
          writeToStore(key, data, null, resolve, reject);
        } else {
          writeToKeyInStore(key, data, null, resolve, reject);
        }
      });
    });
  }
  function writeToKeyInStore(key, data, db, resolve, reject) {
    const keyParts = key.split(".");
    const topLevelKey = keyParts.shift();
    readTransaction(topLevelKey).then((keyData) => {
      const dataToWrite = keyData ? copyObject(keyData) : {};
      let elementReference = dataToWrite;
      while (keyParts.length > 1) {
        const currentKey = keyParts.shift();
        if (typeof elementReference[currentKey] === "undefined") {
          elementReference[currentKey] = {};
        }
        elementReference = elementReference[currentKey];
      }
      const finalKey = keyParts.shift();
      elementReference[finalKey] = data;
      writeToStore(topLevelKey, dataToWrite, db, resolve, reject, key);
    });
  }
  function writeToStore(key, data, db, resolve, reject, originalKey) {
    if (originalKey === void 0)
      originalKey = key;
    if (!canUseIDB() || !hasIDBAccess || !shouldPersist(key)) {
      updateCache(key, data);
      doEvent(PUT_SUCCESS, { key: originalKey, data });
      return resolve({ key, data });
    }
    const transaction = createWriteTransaction(key, data, db, resolve, reject, originalKey);
    const objectStore = transaction.objectStore(STOXY_DATA_STORAGE);
    objectStore.put(data, key);
  }
  function createWriteTransaction(key, data, db, resolve, reject, originalKey) {
    const transaction = db.transaction([STOXY_DATA_STORAGE], "readwrite");
    transaction.oncomplete = (event) => {
      invalidateCache(key);
      doEvent(PUT_SUCCESS, { key: originalKey, data });
      resolve({ key, data });
    };
    transaction.onerror = (event) => {
      reject(event);
    };
    return transaction;
  }
  async function update(key, predicate) {
    return await getLock(key, async () => updateTransaction(key, predicate));
  }
  function updateTransaction(key, predicate) {
    return new Promise(async (resolve) => {
      const keyParts = key.split(".");
      const topLevelKey = keyParts.shift();
      let keyData = await readTransaction(topLevelKey);
      while (keyParts.length > 0) {
        const currentKey = keyParts.shift();
        if (typeof keyData === "undefined")
          break;
        keyData = keyData[currentKey];
      }
      const result = await writeTransaction(key, predicate(keyData));
      resolve(result);
    });
  }
  function copyObject(obj) {
    const type = typeof obj;
    if (!obj || type !== "object") {
      return obj;
    }
    const isArray = Array.isArray(obj);
    let newObj;
    if (isArray) {
      newObj = obj.map((entry) => copyObject(entry));
    } else {
      newObj = {};
      for (const [key, val] of Object.entries(obj)) {
        newObj[key] = copyObject(val);
      }
    }
    return newObj;
  }

  // src/vendor/deePool/deePool.js
  var EMPTY_SLOT = Object.freeze(Object.create(null));

  // src/core.js
  var Core = function(o = {}) {
    const LOG_CORE = "CORE";
    const LISTENER_PREFIX = "OCRESA";
    let Api;
    let Student;
    const _emitter = new mitt();
    let userData = {};
    const _createData = function() {
      const mData = {
        version: 20220505,
        g_sheet_location: "google"
      };
      write("userData", mData);
      log_default.inf(LOG_CORE, "%cDefault data created", APP_INFO_STYLE);
    };
    const _bootstrap = function() {
      Api = unsafeWindow.Facturier.klass.find((o2) => o2.id == "Api").ptr;
      Student = unsafeWindow.Facturier.klass.find((o2) => o2.id == "Student").ptr;
      if (typeof Api === "undefined") {
        throw new Error("Irrecoverable Error: Impossible to get Api module from context");
      }
      ;
      if (typeof Student === "undefined") {
        throw new Error("Irrecoverable Error: Impossible to get Student module from context");
      }
      ;
      src_default.extend(import_localeData3.default);
      src_default.extend(import_customParseFormat2.default);
      src_default.locale("fr");
      _emitter.on("clickMenu:bookSession", (type, ...args) => {
        log_default.inf(LOG_CORE, "%cclickMenu:bookSession listener of _emitter:", APP_INFO_STYLE, `event(${type}): `, ...args);
        ui_default.windowInit();
        read("userData").then((_data) => {
          document.querySelector("#g_sheet_location").value = _data.g_sheet_location;
        });
        document.querySelector("#g_sheet_location").addEventListener("change", (e) => {
          console.log("#g_sheet_location change %o", e);
          update("userData.g_sheet_location", () => e.target.value);
        });
        document.querySelector("#sample-date").addEventListener("submit", (e) => {
          e.preventDefault();
          return false;
        });
      });
      _emitter.on("clickBtn:bookSession", (type, ...args) => {
        log_default.inf(LOG_CORE, "%cclickBtn:bookSession listener of _emitter:", APP_INFO_STYLE, `event(${type}): `, ...args);
        /* @__PURE__ */ assert(typeof type.data.date.value === "string", "selected date must be a string.", TypeError);
        /* @__PURE__ */ ui_default.displayErrors();
        checkRequirements({ date: type.data.date.value });
        actionBook(type.data.date.value);
      });
      _emitter.on("error:bookSession", (args) => {
        log_default.inf(LOG_CORE, "%cerror:bookSession: %o", APP_INFO_STYLE, args);
        ui_default.displayErrors({ error: args.data.error.value });
      });
      _emitter.on("error:noDataSrc", (args) => {
        log_default.inf(LOG_CORE, "%cerror:noDataSrc: %o", APP_INFO_STYLE, args);
        ui_default.displayErrors({ error: args.data.error.value });
      });
      _emitter.on("changeValue:date", (args) => {
        log_default.inf(LOG_CORE, "%cchangeValue:date: %o", APP_INFO_STYLE, args);
      });
      _emitter.on("changeValue:dataURL", (args) => {
        log_default.inf(LOG_CORE, "%cchangeValue::dataURL: %o", APP_INFO_STYLE, args);
        update("userData.g_sheet_location", args.data.url.value);
      });
      persistKey("userData");
      read("userData").then((_data) => {
        if (typeof _data === "undefined") {
          _createData();
        }
      });
      return;
      _emitter.on("*", (type, ...args) => {
        log_default.inf(LOG_CORE, "%ccatchAll listener of _emitter:", APP_INFO_STYLE, `event(${type}): `, ...args);
      });
    };
    const checkRequirements = function(args) {
      let { date } = Object.assign({
        date: src_default()
      }, args);
      if (date.length === 0) {
        _emitter.emit("error:bookSession", { data: { error: { format: "text", value: "Erreur majeure, pas de date d\xE9finie" } } });
        throw new Error("No date selected");
      }
      read("userData.g_sheet_location").then((_data) => {
        if (_data.length === 0) {
          log_default.err(LOG_CORE, "%cThere is no google sheet defined", APP_ERROR_STYLE);
          _emitter.emit("error:noDataSrc", { data: { error: { format: "text", value: "Erreur majeure, pas de feuille google definie" } } });
          throw new Error("No google sheet set");
        }
      });
    };
    const actionBook = async function(sDate) {
      log_default.dbg(LOG_CORE, "%cWanna book sessions since %s", APP_DEBUG_STYLE, sDate);
      const sAnchor = document.getElementById("sttPlaceHolder");
      var myCallback = async function(error, options, response) {
        src_default.extend(import_localeData3.default);
        src_default.extend(import_customParseFormat2.default);
        src_default.extend(import_utc2.default);
        src_default.locale("fr");
        if (error) {
          log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] error is: %o", APP_ERROR_STYLE, error);
        }
        if (!error) {
          log_default.dbg(LOG_CORE, "%c[sheetrock.myCallback()] response is: %o", APP_DEBUG_STYLE, response);
          const sJson = await Api.getUserStudents();
          if (typeof sJson !== "string") {
            throw new Error("PB returning students list from myCallback");
          }
          var aStudents = JSON.parse(sJson);
          log_default.dbg(LOG_CORE, "%c[sheetrock.myCallback()] students list is: %o", APP_DEBUG_STYLE, aStudents);
          const iColFN = response.attributes.labels.findIndex((e) => e.toUpperCase() === "FULLNAME");
          if (iColFN == -1) {
            throw new Error('Irrecoverable Error: no column "FULLNAME" found on linked google calc content');
          }
          const iColD = response.attributes.labels.findIndex((e) => e.toUpperCase() === "DAY");
          if (iColD == -1) {
            throw new Error('Irrecoverable Error: no column "DAY" found on linked google calc content');
          }
          const iColT = response.attributes.labels.findIndex((e) => e.toUpperCase() === "TIME");
          if (iColT == -1) {
            throw new Error('Irrecoverable Error: no column "TIME" found on linked google calc content');
          }
          let aErrors = [];
          let aData = [];
          for (i = 0; i < response.raw.table.rows.length; i++) {
            insert = "insert into data (`Team`,`Pos`,`First`,`Last`,`Bats`,`AB`,`R`,`H`,`HR`,`RBI`,`SB`,`BA`) values (";
            const sNeedle = response.raw.table.rows[i].c[iColFN] == null ? "" : response.raw.table.rows[i].c[iColFN].v;
            const oStudent = aStudents.find((o2) => o2.displayName === sNeedle);
            const sLigneToText = `Google Sheet (Ligne ${i + 1})`;
            if (typeof oStudent === "undefined") {
              log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] Error student %s not found", APP_ERROR_STYLE, sNeedle);
              aErrors.push({
                code: "STUDENT_NOT_FOUND",
                description: `${sLigneToText}:Etudiant ${sNeedle} non trouv\xE9 parmi vos \xE9tudiants`,
                value: sNeedle
              });
              continue;
            }
            log_default.dbg(LOG_CORE, "%c[sheetrock.myCallback()] working on student with FULLNAME:%s which is %o", APP_DEBUG_STYLE, sNeedle, oStudent);
            const aWeek = src_default.weekdays();
            const sDay = response.raw.table.rows[i].c[iColD] == null ? "" : response.raw.table.rows[i].c[iColD].v;
            const iDay = aWeek.findIndex((e) => e.toLowerCase() === sDay.toLowerCase()) - 1;
            const sTime = response.raw.table.rows[i].c[iColT] == null ? "" : response.raw.table.rows[i].c[iColT].v;
            let _aTime, iH, iM;
            if (sTime.match(/^Date\(/) !== null) {
              _aTime = sTime.split(",");
              _aTime[0].replace("Date(", "");
              _aTime[_aTime.length - 1].replace(")", "");
              if (_aTime.length != 6) {
                log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", APP_ERROR_STYLE, sTime);
                aErrors.push({
                  code: "FORMAT_ERROR",
                  description: `${sLigneToText}:Le format de l'heure HH:MM n'est pas respect\xE9 (mode objet).`,
                  value: sTime
                });
                continue;
              }
              iH = _aTime[3] * 1;
              iM = _aTime[4] * 1;
            } else {
              _aTime = sTime.split(":");
              if (_aTime.length != 2) {
                log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", APP_ERROR_STYLE, sTime);
                aErrors.push({
                  code: "FORMAT_ERROR",
                  description: `${sLigneToText}:Le format de l'heure HH:MM n'est pas respect\xE9.`,
                  value: sTime
                });
                continue;
              }
              iH = _aTime[0] * 1;
              iM = _aTime[1] * 1;
            }
            if (iH < 0 || iH > 23) {
              log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field HH", APP_ERROR_STYLE);
              aErrors.push({
                code: "FORMAT_ERROR",
                description: `${sLigneToText}: l'heure doit \xEAtre entre [0 et 23].`,
                value: iH
              });
              continue;
            }
            if (iM < 0 || iM > 59) {
              log_default.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", APP_ERROR_STYLE, sTime);
              aErrors.push({
                code: "FORMAT_ERROR",
                description: `${sLigneToText}: les minutes doivent \xEAtre entre [0 et 59].`,
                value: iM
              });
              continue;
            }
            aData.push({
              id: oStudent.id,
              pid: oStudent.followedProject.projectId,
              fullname: oStudent.displayName,
              date: iDay,
              time: { h: iH, m: iM }
            });
          }
          await _bookList(sDate, aData, aErrors);
        }
      };
      const sGoogleSheetURL = document.querySelector("#g_sheet_location").value;
      /* @__PURE__ */ src_default2({
        url: sGoogleSheetURL,
        query: "select A,B,C,D,E",
        callback: myCallback,
        reset: true
      }, null);
      return;
    };
    const _bookList = async function(sDate, aStudents, aErrors) {
      let _r = src_default(sDate, "DD-MM-YYYY");
      if (_r.format("d") !== "1") {
        log_default.err(LOG_CORE, "%c[_bookList] the selected date don't start on monday but on %s", APP_ERROR_STYLE, _r.format("dddd, DD-MM-YYYY"));
        const sError = `IRRECOVERABLE ERROR: you select ${_r.format("dddd, DD-MM-YYYY")} as the date but selected  day of date have to be a monday`;
        _emitter.emit("error:bookSession", { data: { error: { format: "text", value: sError } } });
        throw new Error(sError);
        return;
      }
      log_default.dbg(LOG_CORE, "%c[_bookList] selected date is  %s", APP_DEBUG_STYLE, _r.format("dddd, DD-MM-YYYY"));
      let _r2;
      let _i = 0, _j = aStudents.length;
      for (var student of aStudents) {
        log_default.dbg(LOG_CORE, "%c[_bookList] wanna process student: %o", APP_DEBUG_STYLE, student);
        _r2 = _r.add(student.date, "day").add(student.time.h, "hour").add(student.time.m, "minute");
        /* @__PURE__ */ log_default.dbg(LOG_CORE, "%c[_bookList] wanna book a session for student: %s at date %s", APP_DEBUG_STYLE, student.fullname, _r2.format("DD-MM-YYYYTHH:mm:ssZ[Z]"));
        _i++;
        log_default.dbg(LOG_CORE, "%c[_bookList] treat student %i on %i students = (%i)%", APP_DEBUG_STYLE, _i, _j, _i / _j * 100);
        ui_default.progressSet(_i / _j * 100);
        ui_default.displayMessages({ type: "html", value: `<span>Traite l'\xE9tudiant: ${student.fullname}</span>` });
        let _res = await _bookStudent(student.pid, student.id, _r2);
        if (typeof _res === "object" && "errors" in _res) {
          if (_res.errors.length == 1 && _res.errors[0].code === "SESSION_ALREADY_EXISTS") {
            const e2 = _res.errors[0];
            log_default.err(LOG_CORE, "%c[_bookList] call Api.bookStudent error[%s] :%s ", APP_ERROR_STYLE, e2.code, e2.message);
            aErrors.push({
              code: "API_BOOK_ERROR",
              description: `Une session existe d\xE9j\xE0 pour ${student.fullname} le ${_r2.format("DD/MM/YYYY \xE0 HH:mm")}`,
              value: ""
            });
            continue;
          }
          if (_res.errors.length == 1 && _res.errors[0].code === "TOO_LOW_ERROR" && _res.errors[0].field === "sessionDate") {
            const e2 = _res.errors[0];
            log_default.err(LOG_CORE, "%c[_bookList] call Api.bookStudent error[%s] :%s ", APP_ERROR_STYLE, e2.code, e2.message);
            aErrors.push({
              code: "API_BOOK_ERROR",
              description: `La date de session doit \xEAtre post\xE9rieure au ${_r2.format("DD/MM/YYYY \xE0 HH:mm")} pour ${student.fullname}`,
              value: ""
            });
            continue;
          }
          const e = _t.errors.reduce((acc, v) => `${acc}{v.message}`);
          log_default.err(LOG_CORE, "%c[_bookList] call Api.bookStudent UNKNOWN error[%s] :%s ", APP_ERROR_STYLE, e.code, e.message);
          aErrors.push({
            code: "API_BOOK_ERROR",
            description: `Impossible de r\xE9server une session pour ${student.fullname} \xE0 ${_r2.format("DD/MM/YYYY \xE0 HH:mm")}`,
            value: e.message
          });
          continue;
        }
        try {
          log_default.dbg(LOG_CORE, "%c[_bookList] we have successful created a session for %s at date %s (UTC), session id is %i", APP_DEBUG_STYLE, _res.recipient.displayableName, _res.sessionDate, _res.id);
        } catch (e) {
          log_default.err(LOG_CORE, "%c[_bookList] IRRECOVERABLE ERROR:%o in _booklist for student:%s", APP_ERROR_STYLE, e, student.fullname);
          aErrors.push({
            code: "API_BOOK_ERROR",
            description: `Impossible de r\xE9server une session pour ${student.fullname} \xE0 ${_r2.format("DD-MM-YYYYTHH:mm:ssZ[Z]")} `,
            value: e
          });
        }
      }
      ui_default.displayErrors(aErrors);
      return;
    };
    const _bookStudent = async function(pid, id, dtDate) {
      assert(dtDate instanceof src_default, "dtDate must be a dayjs instance.", TypeError);
      let _r;
      try {
        _r = await Api.bookStudent(null, pid, id, dtDate.utc().format());
      } catch (e) {
        /* @__PURE__ */ console.error("IRRECOVERABLE ERROR : %O student in _bookStudent", e);
      } finally {
        return _r;
      }
    };
    const getEventBroker = () => _emitter;
    const start = function() {
      const TRY_TIMEOUT = 500;
      const ensureVarIsSet = function(mVar, ctx = window) {
        return new Promise((ok, fail) => {
          setTimeout(() => {
            ctx.hasOwnProperty(mVar) ? ok("OK!") : fail("Error");
          }, TRY_TIMEOUT);
        });
      };
      tryNTimes(ensureVarIsSet.bind(null, "Facturier", unsafeWindow), 50).then((e) => {
        if (e !== "OK!") {
          log_default.dbg(LOG_CORE, "%cReturn value is %o", APP_DEBUG_STYLE, e);
          throw new Error(e);
        }
        log_default.dbg(LOG_CORE, "%cContext is able to manage app, we could start", APP_DEBUG_STYLE);
        _bootstrap();
        test();
        ui_default.start();
      }).catch((e) => log_default.err(LOG_CORE, "%cIrrecoverable error, waiting Facturier but it was'nt usable:%o", APP_ERROR_STYLE, e));
    };
    var supports = function() {
      if (!feature.async) {
        throw new Error("async isn\u2019t supported");
        return false;
      }
      return true;
    };
    var test = async function() {
      console.log("%cModule de test charg\xE9...................", "background-color:green;color:white");
      console.log("%cTest getMe()", "color:green");
      console.dir(await Api.getMe());
      console.log("%cModule de test termin\xE9...................", "background-color:green;color:white");
    };
    const warmup = function() {
    };
    return Object.assign({}, o, {
      actionBook,
      getEventBroker,
      start,
      supports,
      warmup
    });
  };
  var core_default = Core;

  // src/index.js
  var import_hooks = __toModule(require_hooks());
  log_default.setFilterLevel(log_default.LEVEL_VRB);
  var MyApp = Object.assign(Object.create(app_default), {}, core_default());
  function implement_core(oApplication) {
    const LOG_ENTRYPOINT = "ENTRYPOINT";
    oApplication.start = (0, import_hooks.withHookBefore)(oApplication.start, () => {
      log_default.dbg(LOG_ENTRYPOINT, "%cDecorated application...start()", APP_DEBUG_STYLE);
    });
  }
  implement_core(MyApp);
  var _APPREF = "OcBook";
  window[_APPREF] = MyApp;
  if (typeof unsafeWindow !== "undefined") {
    unsafeWindow[_APPREF] = MyApp;
  }
  if (MyApp.supports() == true) {
    log_default.dbg("ENTRYPOINT", `%cApplication ${_APPREF} start()`, APP_DEBUG_STYLE);
    MyApp.start();
  } else {
    console.error("browser/environment too old for this application");
  }
})();
/*!
 * Sheetrock
 * Quickly connect to, query, and lazy-load data from Google Sheets.
 * https://chriszarate.github.io/sheetrock/
 * License: MIT
 */
/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.13.0
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @github https://github.com/Flyer53/jsPanel4.git
 */
//# sourceMappingURL=app.js.map
