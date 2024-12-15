//Sun Dec 15 2024 07:56:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(O) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Q) {
        {
          return typeof Q;
        }
      } : function (Q) {
        {
          return Q && "function" == typeof Symbol && Q.constructor === Symbol && Q !== Symbol.prototype ? "symbol" : typeof Q;
        }
      };
      return b(O);
    }
  }
  function c(O, P) {
    var Q = {
      BQSRC: function (X, Y, Z, a0, a1) {
        return X(Y, Z, a0, a1);
      },
      minCN: function (X, Y) {
        return X === Y;
      },
      GbEPj: "hCoqb",
      gHqdY: function (X, Y) {
        return X == Y;
      },
      HQNBK: function (X, Y, Z) {
        return X(Y, Z);
      },
      gXDXh: function (X, Y) {
        return X === Y;
      },
      vlzwO: "Object",
      LJrlL: "Map",
      KLPsu: "Arguments",
      peHbO: "1|2|5|4|0|3",
      xunPx: function (X, Y) {
        return X === Y;
      },
      qHhrv: function (X, Y) {
        return X === Y;
      },
      UESLw: "return",
      rOBYG: function (X, Y, Z) {
        return X(Y, Z);
      },
      jbpsB: "throw",
      glnNy: function (X, Y) {
        return X !== Y;
      },
      SCEjp: function (X, Y) {
        return X + Y;
      },
      cKgJi: "The iterator does not provide a '",
      XtUBO: "' method",
      gfivP: "iterator result is not an object",
      tsOxo: function (X, Y) {
        return X !== Y;
      },
      YfoaW: "UFQzR",
      asphz: "eztwc",
      iRHml: function (X, Y) {
        return X < Y;
      },
      YXJNm: function (X, Y) {
        return X == Y;
      },
      MQjvJ: function (X, Y) {
        return X === Y;
      },
      gxAvw: "bSETf",
      REkKY: "ysSdM",
      gpvgf: "HYkUg",
      UyNri: function (X, Y) {
        return X !== Y;
      },
      TDApg: "ZFDPk",
      iAzPi: "ALzcA",
      ezupQ: "✅ Utils加载成功, 请继续",
      gcqRG: function (X, Y) {
        return X(Y);
      },
      Laxau: function (X) {
        return X();
      }
    };
    {
      var R = "undefined" != typeof Symbol && O[Symbol.iterator] || O["@@iterator"];
      if (!R) {
        {
          if (Array.isArray(O) || (R = d(O)) || P && O && "number" == typeof O.length) {
            {
              R && (O = R);
              var S = 0;
              var T = function () {};
              return {
                s: T,
                n: function () {
                  {
                    var Y = {
                      done: true
                    };
                    return S >= O.length ? Y : {
                      done: false,
                      value: O[S++]
                    };
                  }
                },
                e: function (Y) {
                  {
                    throw Y;
                  }
                },
                f: T
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var U;
      var V = true;
      var W = false;
      return {
        s: function () {
          {
            R = R.call(O);
          }
        },
        n: function () {
          {
            var Z = R.next();
            V = Z.done;
            return Z;
          }
        },
        e: function (Z) {
          {
            W = true;
            U = Z;
          }
        },
        f: function () {
          {
            try {
              {
                V || null == R.return || R.return();
              }
            } finally {
              {
                if (W) {
                  throw U;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(O, P) {
    {
      if (O) {
        {
          if ("string" == typeof O) {
            return f(O, P);
          }
          var Q = {}.toString.call(O).slice(8, -1);
          "Object" === Q && O.constructor && (Q = O.constructor.name);
          return "Map" === Q || "Set" === Q ? Array.from(O) : "Arguments" === Q || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q) ? f(O, P) : undefined;
        }
      }
    }
  }
  function f(O, P) {
    {
      (null == P || P > O.length) && (P = O.length);
      for (var R = 0, S = Array(P); R < P; R++) {
        S[R] = O[R];
      }
      return S;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return Q;
      }
    };
    var P;
    var Q = {
      wrap: a1,
      isGeneratorFunction: function (aq) {
        {
          var as = "function" == typeof aq && aq.constructor;
          return !!as && (as === a9 || "GeneratorFunction" === (as.displayName || as.name));
        }
      },
      mark: function (aq) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
          aq.prototype = Object.create(ae);
          return aq;
        }
      },
      awrap: function (aq) {
        {
          var ar = {
            __await: aq
          };
          return ar;
        }
      },
      AsyncIterator: ag,
      async: function (aq, ar, as, at, au) {
        {
          undefined === au && (au = Promise);
          var aw = new ag(a1(aq, ar, as, at), au);
          return Q.isGeneratorFunction(ar) ? aw : aw.next().then(function (ax) {
            {
              return ax.done ? ax.value : aw.next();
            }
          });
        }
      }
    };
    var R = Object.prototype;
    var U = R.hasOwnProperty;
    var V = Object.defineProperty || function (an, ao, ap) {
      {
        an[ao] = ap.value;
      }
    };
    var W = "function" == typeof Symbol ? Symbol : {};
    var X = W.iterator || "@@iterator";
    var Y = W.asyncIterator || "@@asyncIterator";
    var Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      {
        var aq = {
          value: ap,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(an, ao, aq);
        return an[ao];
      }
    }
    try {
      {
        a0({}, "");
      }
    } catch (ao) {
      {
        a0 = function (ap, aq, ar) {
          return ap[aq] = ar;
        };
      }
    }
    function a1(aq, ar, as, at) {
      {
        var au = ar && ar.prototype instanceof a8 ? ar : a8;
        var av = Object.create(au.prototype);
        var aw = new al(at || []);
        V(av, "_invoke", {
          value: ah(aq, as, aw)
        });
        return av;
      }
    }
    function a2(aq, ar, as) {
      {
        try {
          return {
            type: "normal",
            arg: aq.call(ar, as)
          };
        } catch (ax) {
          {
            var au = {
              type: "throw",
              arg: ax
            };
            return au;
          }
        }
      }
    }
    var a3 = "suspendedStart";
    var a4 = "suspendedYield";
    var a5 = "executing";
    var a6 = "completed";
    var a7 = {};
    function a8() {}
    function a9() {}
    function aa() {}
    var ab = {};
    a0(ab, X, function () {
      {
        return this;
      }
    });
    var ac = Object.getPrototypeOf;
    var ad = ac && ac(ac(am([])));
    ad && ad !== R && U.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      {
        ["next", "throw", "return"].forEach(function (as) {
          {
            a0(aq, as, function (au) {
              {
                return this._invoke(as, au);
              }
            });
          }
        });
      }
    }
    function ag(aq, ar) {
      {
        function av(aw, ax, ay, az) {
          {
            var aB = a2(aq[aw], aq, ax);
            if ("throw" !== aB.type) {
              {
                var aC = aB.arg;
                var aD = aC.value;
                return aD && "object" == b(aD) && U.call(aD, "__await") ? ar.resolve(aD.__await).then(function (aG) {
                  {
                    av("next", aG, ay, az);
                  }
                }, function (aG) {
                  {
                    av("throw", aG, ay, az);
                  }
                }) : ar.resolve(aD).then(function (aG) {
                  {
                    aC.value = aG;
                    ay(aC);
                  }
                }, function (aG) {
                  {
                    return av("throw", aG, ay, az);
                  }
                });
              }
            }
            az(aB.arg);
          }
        }
        var at;
        V(this, "_invoke", {
          value: function (aw, ax) {
            {
              function az() {
                return new ar(function (aC, aD) {
                  {
                    av(aw, ax, aC, aD);
                  }
                });
              }
              return at = at ? at.then(az, az) : az();
            }
          }
        });
      }
    }
    function ah(aq, ar, as) {
      {
        var au = a3;
        return function (aw, ax) {
          {
            if (au === a5) {
              throw Error("Generator is already running");
            }
            if (au === a6) {
              {
                if ("throw" === aw) {
                  throw ax;
                }
                var az = {
                  value: P,
                  done: true
                };
                return az;
              }
            }
            for (as.method = aw, as.arg = ax;;) {
              {
                var aA = as.delegate;
                if (aA) {
                  {
                    var aB = ai(aA, as);
                    if (aB) {
                      {
                        if (aB === a7) {
                          continue;
                        }
                        return aB;
                      }
                    }
                  }
                }
                if ("next" === as.method) {
                  as.sent = as._sent = as.arg;
                } else {
                  if ("throw" === as.method) {
                    {
                      if (au === a3) {
                        throw au = a6, as.arg;
                      }
                      as.dispatchException(as.arg);
                    }
                  } else {
                    "return" === as.method && as.abrupt("return", as.arg);
                  }
                }
                au = a5;
                var aC = a2(aq, ar, as);
                if ("normal" === aC.type) {
                  {
                    if (au = as.done ? a6 : a4, aC.arg === a7) {
                      continue;
                    }
                    var aD = {
                      value: aC.arg,
                      done: as.done
                    };
                    return aD;
                  }
                }
                "throw" === aC.type && (au = a6, as.method = "throw", as.arg = aC.arg);
              }
            }
          }
        };
      }
    }
    function ai(aq, ar) {
      {
        var ax = ar.method;
        var ay = aq.iterator[ax];
        if (ay === P) {
          ar.delegate = null;
          "throw" === ax && aq.iterator.return && (ar.method = "return", ar.arg = P, ai(aq, ar), "throw" === ar.method) || "return" !== ax && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + ax + "' method"));
          return a7;
        }
        var av = a2(ay, aq.iterator, ar.arg);
        if ("throw" === av.type) {
          ar.method = "throw";
          ar.arg = av.arg;
          ar.delegate = null;
          return a7;
        }
        var aw = av.arg;
        return aw ? aw.done ? (ar[aq.resultName] = aw.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = P), ar.delegate = null, a7) : aw : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
      }
    }
    function aj(aq) {
      {
        var at = {
          tryLoc: aq[0]
        };
        1 in aq && (at.catchLoc = aq[1]);
        2 in aq && (at.finallyLoc = aq[2], at.afterLoc = aq[3]);
        this.tryEntries.push(at);
      }
    }
    function ak(aq) {
      {
        var ar = aq.completion || {};
        ar.type = "normal";
        delete ar.arg;
        aq.completion = ar;
      }
    }
    function al(aq) {
      {
        var as = {
          tryLoc: "root"
        };
        this.tryEntries = [as];
        aq.forEach(aj, this);
        this.reset(true);
      }
    }
    function am(aq) {
      {
        if (aq || "" === aq) {
          {
            var as = aq[X];
            if (as) {
              return as.call(aq);
            }
            if ("function" == typeof aq.next) {
              return aq;
            }
            if (!isNaN(aq.length)) {
              {
                var at = -1;
                var au = function ax() {
                  {
                    for (; ++at < aq.length;) {
                      if (U.call(aq, at)) {
                        ax.value = aq[at];
                        ax.done = false;
                        return ax;
                      }
                    }
                    ax.value = P;
                    ax.done = true;
                    return ax;
                  }
                };
                return au.next = au;
              }
            }
          }
        }
        throw new TypeError(b(aq) + " is not iterable");
      }
    }
    a9.prototype = aa;
    V(ae, "constructor", {
      value: aa,
      configurable: true
    });
    V(aa, "constructor", {
      value: a9,
      configurable: true
    });
    a9.displayName = a0(aa, Z, "GeneratorFunction");
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      {
        return this;
      }
    });
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      return this;
    });
    a0(ae, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    Q.keys = function (aq) {
      {
        var as = Object(aq);
        var at = [];
        for (var au in as) at.push(au);
        at.reverse();
        return function av() {
          {
            for (; at.length;) {
              {
                var aw = at.pop();
                if (aw in as) {
                  av.value = aw;
                  av.done = false;
                  return av;
                }
              }
            }
            av.done = true;
            return av;
          }
        };
      }
    };
    Q.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = P, this.done = false, this.delegate = null, this.method = "next", this.arg = P, this.tryEntries.forEach(ak), !aq) {
            for (var ar in this) "t" === ar.charAt(0) && U.call(this, ar) && !isNaN(+ar.slice(1)) && (this[ar] = P);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aq = this.tryEntries[0].completion;
          if ("throw" === aq.type) {
            throw aq.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aq) {
        {
          if (this.done) {
            throw aq;
          }
          var as = this;
          function ay(az, aA) {
            {
              av.type = "throw";
              av.arg = aq;
              as.next = az;
              aA && (as.method = "next", as.arg = P);
              return !!aA;
            }
          }
          for (var at = this.tryEntries.length - 1; at >= 0; --at) {
            {
              var au = this.tryEntries[at];
              var av = au.completion;
              if ("root" === au.tryLoc) {
                return ay("end");
              }
              if (au.tryLoc <= this.prev) {
                {
                  var aw = U.call(au, "catchLoc");
                  var ax = U.call(au, "finallyLoc");
                  if (aw && ax) {
                    {
                      if (this.prev < au.catchLoc) {
                        return ay(au.catchLoc, true);
                      }
                      if (this.prev < au.finallyLoc) {
                        return ay(au.finallyLoc);
                      }
                    }
                  } else {
                    if (aw) {
                      {
                        if (this.prev < au.catchLoc) {
                          return ay(au.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!ax) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < au.finallyLoc) {
                          return ay(au.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aq, ar) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          {
            var au = this.tryEntries[at];
            if (au.tryLoc <= this.prev && U.call(au, "finallyLoc") && this.prev < au.finallyLoc) {
              {
                var av = au;
                break;
              }
            }
          }
        }
        av && ("break" === aq || "continue" === aq) && av.tryLoc <= ar && ar <= av.finallyLoc && (av = null);
        var aw = av ? av.completion : {};
        aw.type = aq;
        aw.arg = ar;
        return av ? (this.method = "next", this.next = av.finallyLoc, a7) : this.complete(aw);
      },
      complete: function (aq, ar) {
        {
          if ("throw" === aq.type) {
            throw aq.arg;
          }
          "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
          return a7;
        }
      },
      finish: function (aq) {
        {
          for (var at = this.tryEntries.length - 1; at >= 0; --at) {
            {
              var au = this.tryEntries[at];
              if (au.finallyLoc === aq) {
                this.complete(au.completion, au.afterLoc);
                ak(au);
                return a7;
              }
            }
          }
        }
      },
      catch: function (aq) {
        {
          for (var as = this.tryEntries.length - 1; as >= 0; --as) {
            {
              var at = this.tryEntries[as];
              if (at.tryLoc === aq) {
                {
                  var au = at.completion;
                  if ("throw" === au.type) {
                    {
                      var av = au.arg;
                      ak(at);
                    }
                  }
                  return av;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aq, ar, as) {
        {
          this.delegate = {
            iterator: am(aq),
            resultName: ar,
            nextLoc: as
          };
          "next" === this.method && (this.arg = P);
          return a7;
        }
      }
    };
    return Q;
  }
  function h(O, P, Q, R, S, T, U) {
    {
      try {
        {
          var W = O[T](U);
          var X = W.value;
        }
      } catch (a0) {
        return void Q(a0);
      }
      W.done ? P(X) : Promise.resolve(X).then(R, S);
    }
  }
  function i(O) {
    return function () {
      var R = this;
      var S = arguments;
      return new Promise(function (T, U) {
        var V = O.apply(R, S);
        function W(Y) {
          {
            h(V, T, U, W, X, "next", Y);
          }
        }
        function X(Y) {
          {
            h(V, T, U, W, X, "throw", Y);
          }
        }
        W(undefined);
      });
    };
  }
  var j = ($.isNode() ? JSON.parse(process.env.YiLi) : $.getjson("YiLi")) || [];
  var k = "true" === ($.isNode() ? process.env.YiLi_Open : $.getdata("YiLi_Open")) || false;
  var l = undefined;
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "2";
  var u = "2";
  var v = "";
  var w = [];
  var x = "";
  function y() {
    {
      return z.apply(this, arguments);
    }
  }
  function z() {
    z = i(g().mark(function O() {
      var P = {
        CMyhu: "normal",
        yMFgg: "catchLoc",
        dnfFn: "finallyLoc",
        rwvQU: function (ae, af) {
          return ae && af;
        },
        mIyNf: function (ae, af, ag) {
          return ae(af, ag);
        },
        AWxVU: function (ae, af) {
          return ae(af);
        },
        HgyNq: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
        pYoea: function (ae, af) {
          return ae !== af;
        },
        DzFcQ: "OzKwB",
        vxYsM: "ZYRzh",
        qrHpf: "用户：",
        rchEi: function (ae, af, ag) {
          return ae(af, ag);
        },
        YuiCL: function (ae, af) {
          return ae + af;
        },
        laAQx: "ui@op9889;as98gh12c3b1&!jiasdasdjlkyf98r4y3ujfnakhjrf098",
        iKsYg: function (ae, af) {
          return ae === af;
        },
        MSEHK: "iQhDW",
        DXGBg: function (ae, af) {
          return ae(af);
        },
        GxLWp: "\nyiliToken已过期，请重新获取",
        fdWIZ: "continue",
        MzAdh: "/fragmentActivity/fragment?activityId=1&openId=",
        UpzQJ: function (ae, af) {
          return ae(af);
        },
        HnGmW: function (ae, af) {
          return ae > af;
        },
        wwvxG: "祝福语：",
        PjIjL: function (ae, af) {
          return ae(af);
        },
        bIffI: "break",
        IDKCw: function (ae, af) {
          return ae < af;
        },
        rnhGg: function (ae, af) {
          return ae >= af;
        },
        gzXoa: function (ae, af) {
          return ae + af;
        },
        SriWS: "/send/receive/card?linkCode=",
        TZnKf: "领取卡片：",
        NeZgN: function (ae, af) {
          return ae(af);
        },
        ZOsJM: "/fragment/ticket/ticket-info?openId=",
        odviF: function (ae, af) {
          return ae(af);
        },
        tqerZ: "/fragment/ticket/sign?openId=",
        NyPZA: "签到：",
        zkBwK: function (ae, af) {
          return ae(af);
        },
        gVvGQ: "浏览：",
        HaPng: function (ae, af) {
          return ae(af);
        },
        ssUnG: "/fragment/ticket/get?openId=",
        UPJYq: "拥有抽卡次数：",
        Msisb: function (ae, af) {
          return ae < af;
        },
        KzhLe: function (ae, af) {
          return ae(af);
        },
        TCzBw: "/fragmentActivity/lottery?activityId=1&openId=",
        prtIh: "抽卡获得：",
        dtJXy: "卡片：",
        qUfkF: " 数量：",
        IAfJr: function (ae, af) {
          return ae > af;
        },
        ZXsio: function (ae, af) {
          return ae(af);
        },
        OIgMH: "/fragmentActivity/open-prize?fragmentId=",
        HTgse: "&activityId=1&openId=",
        QyKzo: "翻卡获得：",
        UMCrl: function (ae, af) {
          return ae(af);
        },
        zZCml: "end"
      };
      var Q;
      var R;
      var S;
      var T;
      var U;
      var V;
      var W;
      var X;
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
      var a7;
      var a8;
      var a9;
      var aa;
      var ab;
      var ac;
      var ad;
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n");
              ae.next = 3;
              return K();
            case 3:
              l = ae.sent;
              Q = c(j);
              ae.prev = 5;
              Q.s();
            case 7:
              if ((R = Q.n()).done) {
                {
                  ae.next = 61;
                  break;
                }
              }
              S = R.value;
              m = S.mobile;
              s = S.unionId;
              p = S.nickName;
              o = S.avatarUrl;
              r = S.openId;
              q = S.yiliToken;
              console.log("用户：".concat(m, "开始任务"));
              ae.next = 18;
              return E("/v2/wechat/applet/set-user-info", {
                headImg: o,
                phoneNum: m,
                nickName: p,
                openId: r,
                unionId: s,
                ciphertext: l.md5(s + "ui@op9889;as98gh12c3b1&!jiasdasdjlkyf98r4y3ujfnakhjrf098")
              });
            case 18:
              if (T = ae.sent, 200 == T.code) {
                {
                  ae.next = 24;
                  break;
                }
              }
              console.log(T.message);
              ae.next = 23;
              return M("用户：".concat(m, "\nyiliToken已过期，请重新获取"));
            case 23:
              return ae.abrupt("continue", 59);
            case 24:
              console.log("登录成功");
              n = T.data.token;
              t = T.data.num1;
              u = T.data.num2;
              v = "";
              ae.next = 31;
              return G("/fragmentActivity/fragment?activityId=1&openId=".concat(r));
            case 31:
              U = ae.sent;
              V = c(U.data);
              ae.prev = 33;
              V.s();
            case 35:
              if ((W = V.n()).done) {
                ae.next = 50;
                break;
              }
              if (X = W.value, !(X.num > 0)) {
                ae.next = 48;
                break;
              }
              ae.next = 40;
              return G("/send/blessing?openId=".concat(r));
            case 40:
              Y = ae.sent;
              console.log("祝福语：".concat(Y.data.statement));
              ae.next = 44;
              return G("/send/card/code?fragmentId=5&blessingId=".concat(Y.data.id, "&openId=").concat(r));
            case 44:
              Z = ae.sent;
              console.log("赠送卡片：".concat(X.fragmentName, " 口令：").concat(Z.data));
              v = Z.data;
              return ae.abrupt("break", 50);
            case 48:
              ae.next = 35;
              break;
            case 50:
              ae.next = 55;
              break;
            case 52:
              ae.prev = 52;
              ae.t0 = ae.catch(33);
              V.e(ae.t0);
            case 55:
              ae.prev = 55;
              V.f();
              return ae.finish(55);
            case 58:
              var ag = {
                mobile: m,
                token: n,
                type: t,
                type1: u,
                openId: r,
                cardCode: v
              };
              w.push(ag);
            case 59:
              ae.next = 7;
              break;
            case 61:
              ae.next = 66;
              break;
            case 63:
              ae.prev = 63;
              ae.t1 = ae.catch(5);
              Q.e(ae.t1);
            case 66:
              ae.prev = 66;
              Q.f();
              return ae.finish(66);
            case 69:
              a0 = 0;
            case 70:
              if (!(a0 < w.length)) {
                ae.next = 142;
                break;
              }
              if (m = w[a0].mobile, n = w[a0].token, t = w[a0].type, u = w[a0].type1, r = w[a0].openId, console.log("用户：".concat(m, "开始任务")), v = a0 + 1 >= w.length ? w[0].cardCode : w[a0 + 1].cardCode, !v) {
                ae.next = 83;
                break;
              }
              ae.next = 81;
              return G("/send/receive/card?linkCode=".concat(v, "&openId=").concat(r));
            case 81:
              a1 = ae.sent;
              console.log("领取卡片：".concat(a1.message));
            case 83:
              ae.next = 85;
              return G("/fragment/ticket/ticket-info?openId=".concat(r));
            case 85:
              if (a2 = ae.sent, a2.data.sign) {
                ae.next = 91;
                break;
              }
              ae.next = 89;
              return G("/fragment/ticket/sign?openId=".concat(r));
            case 89:
              a3 = ae.sent;
              console.log("签到：".concat(a3.message));
            case 91:
              if (a2.data.seePage) {
                ae.next = 96;
                break;
              }
              ae.next = 94;
              return G("/fragment/ticket/see-page?openId=".concat(r));
            case 94:
              a4 = ae.sent;
              console.log("浏览：".concat(a4.message));
            case 96:
              ae.next = 98;
              return G("/fragment/ticket/get?openId=".concat(r));
            case 98:
              a5 = ae.sent;
              console.log("拥有抽卡次数：".concat(a5.data, "次"));
              a6 = 0;
            case 101:
              if (!(a6 < a5.data)) {
                ae.next = 109;
                break;
              }
              ae.next = 104;
              return G("/fragmentActivity/lottery?activityId=1&openId=".concat(r));
            case 104:
              a7 = ae.sent;
              console.log("抽卡获得：".concat(a7.data.fragmentName));
            case 106:
              a6++;
              ae.next = 101;
              break;
            case 109:
              ae.next = 111;
              return G("/fragmentActivity/fragment?activityId=1&openId=".concat(r));
            case 111:
              a8 = ae.sent;
              a9 = c(a8.data);
              ae.prev = 113;
              a9.s();
            case 115:
              if ((aa = a9.n()).done) {
                ae.next = 131;
                break;
              }
              if (ab = aa.value, console.log("卡片：".concat(ab.fragmentName, " 数量：").concat(ab.num)), !(ab.num > 1 && k)) {
                ae.next = 129;
                break;
              }
              ac = 1;
            case 120:
              if (!(ac < ab.num)) {
                ae.next = 129;
                break;
              }
              ae.next = 123;
              return G("/fragmentActivity/open-prize?fragmentId=".concat(ab.fragmentId, "&activityId=1&openId=").concat(r));
            case 123:
              ad = ae.sent;
              console.log("翻卡获得：".concat(ad.data.prizeName));
              x += "用户".concat(m, " 翻卡获得：").concat(ad.data.prizeName, "\n");
            case 126:
              ac++;
              ae.next = 120;
              break;
            case 129:
              ae.next = 115;
              break;
            case 131:
              ae.next = 136;
              break;
            case 133:
              ae.prev = 133;
              ae.t2 = ae.catch(113);
              a9.e(ae.t2);
            case 136:
              ae.prev = 136;
              a9.f();
              return ae.finish(136);
            case 139:
              a0++;
              ae.next = 70;
              break;
            case 142:
              if (!x) {
                ae.next = 145;
                break;
              }
              ae.next = 145;
              return M(x);
            case 145:
            case "end":
              return ae.stop();
          }
        }
      }, O, null, [[5, 63, 66, 69], [33, 52, 55, 58], [113, 133, 136, 139]]);
    }));
    return z.apply(this, arguments);
  }
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function P() {
      var R;
      var S;
      var T;
      var U;
      return g().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              if (R = $request.headers["access-token"], R) {
                V.next = 3;
                break;
              }
              return V.abrupt("return");
            case 3:
              if (S = $.toObj($response.body), S && S.data) {
                V.next = 6;
                break;
              }
              return V.abrupt("return");
            case 6:
              var X = {
                mobile: S.data.mobile,
                openId: S.data.openId,
                unionId: S.data.unionId,
                nickName: S.data.nickName,
                avatarUrl: S.data.avatarUrl,
                yiliToken: R
              };
              if (T = X, U = j.findIndex(function (Y) {
                return Y.mobile == T.mobile;
              }), -1 === U) {
                V.next = 18;
                break;
              }
              if (j[U].yiliToken != T.yiliToken) {
                V.next = 13;
                break;
              }
              return V.abrupt("return");
            case 13:
              j[U] = T;
              console.log(T.yiliToken);
              $.msg($.name, "🎉用户".concat(T.mobile, "更新yiliToken成功!"), "");
            case 16:
              V.next = 21;
              break;
            case 18:
              j.push(T);
              console.log(T.yiliToken);
              $.msg($.name, "🎉新增用户".concat(T.mobile, "成功!"), "");
            case 21:
              $.setjson(j, "YiLi");
            case 22:
            case "end":
              return V.stop();
          }
        }
      }, P);
    }));
    return B.apply(this, arguments);
  }
  function C(O) {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function P(Q) {
      return g().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              return S.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "https://msmarket.msx.digitalyili.com".concat(Q),
                  headers: {
                    "register-source": "",
                    "forward-appid": "wx06af0ef532292cd3",
                    "source-type": "",
                    "content-type": "application/json",
                    "atv-page": "",
                    scene: "1089",
                    xweb_xhr: "1",
                    "access-token": q,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "tenant-id": "1559474730809618433",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }
                };
                $.get(V, function () {
                  var X = i(g().mark(function Y(Z, a0, a1) {
                    return g().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            if (a3.prev = 0, !Z) {
                              a3.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Z)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a3.next = 9;
                            break;
                          case 6:
                            a3.next = 8;
                            return $.wait(2000);
                          case 8:
                            T(JSON.parse(a1));
                          case 9:
                            a3.next = 14;
                            break;
                          case 11:
                            a3.prev = 11;
                            a3.t0 = a3.catch(0);
                            $.logErr(a3.t0, a0);
                          case 14:
                            a3.prev = 14;
                            T();
                            return a3.finish(14);
                          case 17:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, Y, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return S.stop();
          }
        }
      }, P);
    }));
    return D.apply(this, arguments);
  }
  function E(O, P) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function O(P, Q) {
      var S;
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              S = I();
              return T.abrupt("return", new Promise(function (V) {
                var X = {
                  url: "https://wx-camp-180-cny-api.mscampapi.digitalyili.com".concat(P),
                  headers: {
                    "content-type": "application/json",
                    xweb_xhr: "1",
                    timestamp: S.timestamp,
                    signature: S.signature,
                    uniquecode: S.uniquecode,
                    access_token: n,
                    token: n,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "app-version": "1.1.1",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  },
                  body: JSON.stringify(Q)
                };
                $.post(X, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a4) {
                      for (;;) {
                        switch (a4.prev = a4.next) {
                          case 0:
                            if (a4.prev = 0, !a0) {
                              a4.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a4.next = 9;
                            break;
                          case 6:
                            a4.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a2));
                          case 9:
                            a4.next = 14;
                            break;
                          case 11:
                            a4.prev = 11;
                            a4.t0 = a4.catch(0);
                            $.logErr(a4.t0, a1);
                          case 14:
                            a4.prev = 14;
                            V();
                            return a4.finish(14);
                          case 17:
                          case "end":
                            return a4.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return T.stop();
          }
        }
      }, O);
    }));
    return F.apply(this, arguments);
  }
  function G(O) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function P(Q) {
      var S;
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              S = I();
              return T.abrupt("return", new Promise(function (V) {
                var W = {
                  url: "https://wx-camp-180-cny-api.mscampapi.digitalyili.com".concat(Q),
                  headers: {
                    "content-type": "application/json",
                    xweb_xhr: "1",
                    timestamp: S.timestamp,
                    signature: S.signature,
                    uniquecode: S.uniquecode,
                    access_token: n,
                    token: n,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "app-version": "1.1.1",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }
                };
                $.get(W, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a4) {
                      for (;;) {
                        switch (a4.prev = a4.next) {
                          case 0:
                            if (a4.prev = 0, !a0) {
                              a4.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a4.next = 9;
                            break;
                          case 6:
                            a4.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a2));
                          case 9:
                            a4.next = 14;
                            break;
                          case 11:
                            a4.prev = 11;
                            a4.t0 = a4.catch(0);
                            $.logErr(a4.t0, a1);
                          case 14:
                            a4.prev = 14;
                            V();
                            return a4.finish(14);
                          case 17:
                          case "end":
                            return a4.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return T.stop();
          }
        }
      }, P);
    }));
    return H.apply(this, arguments);
  }
  function I() {
    var O = Date.now();
    var P = O + "&" + String(Math.floor(100000 + 900000 * Math.random()));
    var Q = "timeStamp:" + O + "&uniqueCode:" + P + {
      1: "963QQ45465465xcvdasfasdfzxEcadfafzafoi897as8dfw8g4za78qqfd878000df8/er78a",
      2: "363QQ45465465xcvdas89!safzafwa36paweoi897as8dfw8g4za78qqfd878000df8/er89b",
      3: "763Qi45895465xcv89as89!sa2616wa36paweoi897as8dfw8g4za78qqfd878000df8/eqr23b",
      4: "7531Qi45891546115xcv89as819!sa26161wa36pa81g4z1a78qqfd87810001df18/eqr213b",
      5: "3f53f1Qia4f5f91546fa115axcvfff89asf819!saff26161fwa36fpa81g4z1fa7/eqr21f3b",
      6: "egf513gf1Qifag4f5f9f154g6fa115afxgcvffgf89gasgf8g19!saffg2g6161gfg6fpa@g1g",
      7: "2e@gf513g2f1Qif@ag4!f5f92f215!4g6fa115afxgcvffgf89gasgf82g19!2gfwa3g62fpa2",
      8: "6e@!gf514g2fb1Qif@!bag41f89gasbgf8b2g19!2gfwa3gb62fbpa@g1g32b9999!",
      9: "6a@!gf514g2fb1Qif@!bag41f89gasbgf8b2g19!2gfwa3gb62fbpa@g1g32b9869!++3",
      10: "2e@gf513g2f1Qif@ag4!sdfzxEcadfafzafoi897as8dfw8g4za78qqfd8780df8==/er78a"
    }[u];
    var R = l.md5(Q).toUpperCase();
    var S = 1 == t ? J(R) : 2 == t ? l.md5(R).toUpperCase() : 3 == t ? l.md5(J(Q)).toUpperCase() : 4 == t ? J(J(Q)) : R;
    var T = {
      timestamp: O,
      uniquecode: P,
      signature: S
    };
    return T;
  }
  function J(O) {
    var P = l.createCryptoJS();
    var Q = P.enc.Utf8.parse("asdvbnqwer!=564av8952116lkouytb+");
    var R = P.enc.Utf8.parse("Y9uR16ByteIvH8q9");
    var S = P.enc.Utf8.parse(O);
    var T = P.AES.encrypt(S, Q, {
      iv: R,
      mode: P.mode.CBC,
      padding: P.pad.Pkcs7
    });
    return P.enc.Base64.stringify(T.ciphertext);
  }
  function K() {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function P() {
      var Q;
      return g().wrap(function R(S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              if (Q = $.getdata("Utils_Code") || "", !Q || !Object.keys(Q).length) {
                S.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(Q);
              return S.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return S.abrupt("return", new Promise(function () {
                var W = i(g().mark(function X(Y) {
                  return g().wrap(function a0(a1) {
                    for (;;) {
                      switch (a1.prev = a1.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a2) {
                            $.setdata(a2, "Utils_Code");
                            eval(a2);
                            console.log("✅ Utils加载成功, 请继续");
                            Y(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a1.stop();
                      }
                    }
                  }, X);
                }));
                return function (Y) {
                  return W.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return S.stop();
          }
        }
      }, P);
    }));
    return L.apply(this, arguments);
  }
  function M(O) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function P(Q) {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              if (!$.isNode()) {
                R.next = 5;
                break;
              }
              R.next = 3;
              return notify.sendNotify($.name, Q);
            case 3:
              R.next = 6;
              break;
            case 5:
              $.msg($.name, "", Q);
            case 6:
            case "end":
              return R.stop();
          }
        }
      }, P);
    }));
    return N.apply(this, arguments);
  }
  i(g().mark(function O() {
    return g().wrap(function (Q) {
      for (;;) {
        switch (Q.prev = Q.next) {
          case 0:
            if ("undefined" == typeof $request) {
              Q.next = 5;
              break;
            }
            Q.next = 3;
            return A();
          case 3:
            Q.next = 7;
            break;
          case 5:
            Q.next = 7;
            return y();
          case 7:
          case "end":
            return Q.stop();
        }
      }
    }, O);
  }))().catch(function (P) {
    $.log(P);
  }).finally(function () {
    $.done({});
  });
})();