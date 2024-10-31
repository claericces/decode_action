//Thu Oct 31 2024 07:50:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(L) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (O) {
      return typeof O;
    } : function (O) {
      {
        return O && "function" == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
      }
    };
    return b(L);
  }
  function c() {
    "use strict";

    var L = {
      oWRVT: "wRtLn",
      hXuUc: function (an, ao) {
        return an instanceof ao;
      },
      gHanE: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      KfKwh: "_invoke",
      lGPaB: " API请求失败，请检查网路重试",
      QVpNs: function (an, ao) {
        return an(ao);
      },
      Bzyvi: "zeHfQ",
      dJzkY: function (an, ao) {
        return an === ao;
      },
      rPQVY: "throw",
      Racsv: function (an, ao) {
        return an | ao;
      },
      vPSBL: function (an, ao) {
        return an * ao;
      },
      BAbbZ: function (an, ao) {
        return an & ao;
      },
      ZeycS: function (an) {
        return an();
      },
      trwCx: "end",
      xMTRU: function (an, ao) {
        return an === ao;
      },
      qnYmD: function (an, ao) {
        return an !== ao;
      },
      YIxLF: "usZai",
      ppMVN: "qznfm",
      yFDVg: "rdcuS",
      Unnpp: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      UjQjf: function (an, ao) {
        return an === ao;
      },
      JfKTj: "glNDb",
      BpYvm: "AlKaZ",
      jRTWw: function (an) {
        return an();
      },
      EmnLX: "GeneratorFunction",
      ibTpQ: "qETTn",
      cRfDx: function (an, ao) {
        return an(ao);
      },
      mqKeD: function (an, ao) {
        return an === ao;
      },
      pVHEg: "WvzGw",
      PvkXD: "jcEzs",
      VXbPM: function (an, ao) {
        return an === ao;
      },
      ZlUrv: "qIWUB",
      XBsbl: "next",
      RGNhS: function (an, ao) {
        return an === ao;
      },
      MvVFS: function (an, ao) {
        return an === ao;
      },
      dvGtT: "xDfYq",
      Vjret: function (an, ao) {
        return an === ao;
      },
      hqyEw: "return",
      leHGh: function (an, ao) {
        return an !== ao;
      },
      utikT: "ohlSC",
      uHqtr: function (an, ao) {
        return an === ao;
      },
      YdKFr: function (an, ao) {
        return an === ao;
      },
      sQmot: "MvGcb",
      MqEPg: function (an, ao) {
        return an in ao;
      },
      qtRuv: "avBCF",
      nOpix: "normal",
      mtQpT: "symbol",
      TamCp: "ADEPk",
      vDXTI: function (an, ao) {
        return an == ao;
      },
      xFiyG: "function",
      tOivD: function (an, ao) {
        return an === ao;
      },
      kOuWU: "IDvID",
      rqaDk: "rMrVE",
      bRzXz: function (an, ao) {
        return an === ao;
      },
      nMebE: function (an, ao) {
        return an == ao;
      },
      kntIk: function (an, ao) {
        return an + ao;
      },
      nItVU: function (an, ao) {
        return an(ao);
      },
      FrYTL: " is not iterable",
      kyiyq: function (an, ao) {
        return an < ao;
      },
      TAWsa: "set-cookie",
      RETRN: "Set-Cookie",
      qIvbE: "LqpgY",
      cliWs: "PtVKc",
      sQVku: "sMQqw",
      ledxT: "[object Generator]",
      bRZvQ: function (an, ao) {
        return an !== ao;
      },
      xvQET: "SBjHD",
      qgxRO: "JRPBp",
      pjHCk: "rbDtT",
      QStOw: function (an, ao) {
        return an === ao;
      },
      bZIAr: "fcqgN",
      YfJgo: function (an, ao) {
        return an == ao;
      },
      Lremo: "Pqums",
      GQnOU: "dttdA",
      FOoJt: function (an, ao) {
        return an >= ao;
      },
      IPKOB: "illegal catch attempt",
      inOFT: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      lGQLR: "TmXEH",
      nygJy: "lDthG",
      lZfdC: function (an, ao) {
        return an - ao;
      },
      pPhJR: function (an, ao) {
        return an >= ao;
      },
      gNEfh: function (an, ao) {
        return an(ao);
      },
      GXBFA: "GxetL",
      UkjWe: "KOAIE",
      xrYiY: "XoFCd",
      lSXuy: "HcENB",
      GceaF: function (an, ao) {
        return an !== ao;
      },
      RXUpb: "SvELc",
      cdUHw: "ZGaCT",
      zYefv: function (an, ao) {
        return an(ao);
      },
      ianEj: "3|0|2|5|4|1",
      jtbCo: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      Tqble: "&new_password=",
      YXjtW: function (an, ao) {
        return an(ao);
      },
      DaJYH: "&phone_number=",
      BnKYH: "&security_code=",
      NEcfX: "TnHDN"
    };
    c = function () {
      return N;
    };
    var M;
    var N = {};
    var O = Object.prototype;
    var Q = O.hasOwnProperty;
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
      a0 = function (aq, ar, as) {
        {
          return aq[ar] = as;
        }
      };
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
          {
            return {
              type: "normal",
              arg: aq.call(ar, as)
            };
          }
        } catch (av) {
          {
            var at = {
              type: "throw",
              arg: av
            };
            return at;
          }
        }
      }
    }
    N.wrap = a1;
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
    ad && ad !== O && Q.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      {
        ["next", "throw", "return"].forEach(function (as) {
          a0(aq, as, function (at) {
            return this._invoke(as, at);
          });
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
                return aD && "object" == b(aD) && Q.call(aD, "__await") ? ar.resolve(aD.__await).then(function (aE) {
                  {
                    av("next", aE, ay, az);
                  }
                }, function (aE) {
                  {
                    av("throw", aE, ay, az);
                  }
                }) : ar.resolve(aD).then(function (aE) {
                  {
                    aC.value = aE;
                    ay(aC);
                  }
                }, function (aE) {
                  return av("throw", aE, ay, az);
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
                  av(aw, ax, aC, aD);
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
                var aA = {
                  value: M,
                  done: true
                };
                return aA;
              }
            }
            for (as.method = aw, as.arg = ax;;) {
              var aB = as.delegate;
              if (aB) {
                {
                  var aC = ai(aB, as);
                  if (aC) {
                    {
                      if (aC === a7) {
                        continue;
                      }
                      return aC;
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
              var aD = a2(aq, ar, as);
              if ("normal" === aD.type) {
                {
                  if (au = as.done ? a6 : a4, aD.arg === a7) {
                    continue;
                  }
                  var aE = {
                    value: aD.arg,
                    done: as.done
                  };
                  return aE;
                }
              }
              "throw" === aD.type && (au = a6, as.method = "throw", as.arg = aD.arg);
            }
          }
        };
      }
    }
    function ai(aq, ar) {
      {
        var at = ar.method;
        var au = aq.iterator[at];
        if (au === M) {
          ar.delegate = null;
          "throw" === at && aq.iterator.return && (ar.method = "return", ar.arg = M, ai(aq, ar), "throw" === ar.method) || "return" !== at && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + at + "' method"));
          return a7;
        }
        var av = a2(au, aq.iterator, ar.arg);
        if ("throw" === av.type) {
          ar.method = "throw";
          ar.arg = av.arg;
          ar.delegate = null;
          return a7;
        }
        var aw = av.arg;
        return aw ? aw.done ? (ar[aq.resultName] = aw.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = M), ar.delegate = null, a7) : aw : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
      }
    }
    function aj(aq) {
      {
        var as = {
          tryLoc: aq[0]
        };
        1 in aq && (as.catchLoc = aq[1]);
        2 in aq && (as.finallyLoc = aq[2], as.afterLoc = aq[3]);
        this.tryEntries.push(as);
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
                var au = function aw() {
                  {
                    for (; ++at < aq.length;) {
                      if (Q.call(aq, at)) {
                        aw.value = aq[at];
                        aw.done = false;
                        return aw;
                      }
                    }
                    aw.value = M;
                    aw.done = true;
                    return aw;
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
    N.isGeneratorFunction = function (aq) {
      {
        var ar = "function" == typeof aq && aq.constructor;
        return !!ar && (ar === a9 || "GeneratorFunction" === (ar.displayName || ar.name));
      }
    };
    N.mark = function (aq) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
        aq.prototype = Object.create(ae);
        return aq;
      }
    };
    N.awrap = function (aq) {
      {
        var ar = {
          __await: aq
        };
        return ar;
      }
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    N.AsyncIterator = ag;
    N.async = function (aq, ar, as, at, au) {
      {
        undefined === au && (au = Promise);
        var aw = new ag(a1(aq, ar, as, at), au);
        return N.isGeneratorFunction(ar) ? aw : aw.next().then(function (ay) {
          {
            return ay.done ? ay.value : aw.next();
          }
        });
      }
    };
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      {
        return this;
      }
    });
    a0(ae, "toString", function () {
      return "[object Generator]";
    });
    N.keys = function (aq) {
      {
        var as = Object(aq);
        var at = [];
        for (var au in as) at.push(au);
        at.reverse();
        return function av() {
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
        };
      }
    };
    N.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = M, this.done = false, this.delegate = null, this.method = "next", this.arg = M, this.tryEntries.forEach(ak), !aq) {
            for (var ar in this) "t" === ar.charAt(0) && Q.call(this, ar) && !isNaN(+ar.slice(1)) && (this[ar] = M);
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
          function az(aA, aB) {
            {
              av.type = "throw";
              av.arg = aq;
              as.next = aA;
              aB && (as.method = "next", as.arg = M);
              return !!aB;
            }
          }
          for (var at = this.tryEntries.length - 1; at >= 0; --at) {
            {
              var au = this.tryEntries[at];
              var av = au.completion;
              if ("root" === au.tryLoc) {
                return az("end");
              }
              if (au.tryLoc <= this.prev) {
                {
                  var aw = Q.call(au, "catchLoc");
                  var ax = Q.call(au, "finallyLoc");
                  if (aw && ax) {
                    {
                      if (this.prev < au.catchLoc) {
                        return az(au.catchLoc, true);
                      }
                      if (this.prev < au.finallyLoc) {
                        return az(au.finallyLoc);
                      }
                    }
                  } else {
                    if (aw) {
                      {
                        if (this.prev < au.catchLoc) {
                          return az(au.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!ax) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < au.finallyLoc) {
                          return az(au.finallyLoc);
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
        {
          for (var as = this.tryEntries.length - 1; as >= 0; --as) {
            {
              var at = this.tryEntries[as];
              if (at.tryLoc <= this.prev && Q.call(at, "finallyLoc") && this.prev < at.finallyLoc) {
                {
                  var au = at;
                  break;
                }
              }
            }
          }
          au && ("break" === aq || "continue" === aq) && au.tryLoc <= ar && ar <= au.finallyLoc && (au = null);
          var av = au ? au.completion : {};
          av.type = aq;
          av.arg = ar;
          return au ? (this.method = "next", this.next = au.finallyLoc, a7) : this.complete(av);
        }
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
          for (var as = this.tryEntries.length - 1; as >= 0; --as) {
            {
              var at = this.tryEntries[as];
              if (at.finallyLoc === aq) {
                this.complete(at.completion, at.afterLoc);
                ak(at);
                return a7;
              }
            }
          }
        }
      },
      catch: function (aq) {
        {
          for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
            {
              var as = this.tryEntries[ar];
              if (as.tryLoc === aq) {
                {
                  var at = as.completion;
                  if ("throw" === at.type) {
                    {
                      var au = at.arg;
                      ak(as);
                    }
                  }
                  return au;
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
          "next" === this.method && (this.arg = M);
          return a7;
        }
      }
    };
    return N;
  }
  function d(L, M, N, O, P, Q, R) {
    {
      try {
        {
          var U = L[Q](R);
          var V = U.value;
        }
      } catch (X) {
        {
          return void N(X);
        }
      }
      U.done ? M(V) : Promise.resolve(V).then(O, P);
    }
  }
  function e(L) {
    return function () {
      var O = this;
      var P = arguments;
      return new Promise(function (Q, R) {
        var T = L.apply(O, P);
        function U(W) {
          d(T, Q, R, U, V, "next", W);
        }
        function V(W) {
          {
            d(T, Q, R, U, V, "throw", W);
          }
        }
        U(undefined);
      });
    };
  }
  var f = ($.isNode() ? process.env.Common_Phone : $.getdata("Common_Phone")) || "";
  var g = ($.isNode() ? process.env.Common_Type : $.getdata("Common_Type")) || "";
  var h = ($.isNode() ? process.env.Common_smsCode : $.getdata("Common_smsCode")) || "";
  var i = ($.isNode() ? process.env.Common_Password : $.getdata("Common_Password")) || "";
  var j = undefined;
  var k = "";
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  function u() {
    return v.apply(this, arguments);
  }
  function v() {
    var L = {
      zdaxb: function (M, N) {
        return M === N;
      },
      ZIDCc: function (M, N) {
        return M(N);
      },
      nejIp: "PXSVB",
      bMMln: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
      JwFww: function (M, N) {
        return M == N;
      },
      vYUgL: "XiShiYan",
      xscCi: function (M, N) {
        return M == N;
      },
      Yqfwa: "10019",
      iSIet: "XinJiangBei",
      TkzJe: "102",
      bsRdv: "10017",
      zghWJ: "ZSWY",
      fqweh: "10024",
      cTgzo: "YueCheng",
      avSCp: "DaChao",
      toSxo: "10048",
      AJZQh: "RongPanAn",
      WCvGk: function (M, N) {
        return M == N;
      },
      MWWWb: "LanJingLing",
      xjyKM: "10026",
      hGlDB: function (M) {
        return M();
      },
      iZRpD: "随机生成UA",
      YaGjc: "用户：",
      aowjr: "开始任务",
      rIxwH: "获取signature_key",
      KpwZO: function (M, N) {
        return M(N);
      },
      iKSoX: "/web/init?client_id=",
      YpuUe: "验证验证码",
      qTqAp: "/web/security/check_security_code?client_id=",
      iJwqP: "&phone_number=",
      FBWQG: function (M, N) {
        return M != N;
      },
      VdbMu: function (M, N) {
        return M !== N;
      },
      XudfG: "uowOj",
      BFXsT: "drvvt",
      tNzyY: "重置密码",
      RLsvj: "client_id=",
      auFYE: "&new_password=",
      aLtlq: "PtwmC",
      oSvEx: "重置密码成功",
      masdv: function (M, N) {
        return M === N;
      },
      VWjAo: "yYGFC",
      HbyRl: "开始注册",
      wTDuM: "获取code",
      kVlUY: function (M, N, O) {
        return M(N, O);
      },
      LTScF: "/api/zbtxz/login",
      PwtaB: "check_token=&code=",
      zxQhD: "注册结果：",
      GtpSq: "end",
      oqzda: function (M, N) {
        return M(N);
      }
    };
    {
      v = e(c().mark(function N() {
        {
          var P;
          var Q;
          var R;
          var S;
          var T;
          var U;
          var V;
          var W;
          return c().wrap(function (X) {
            var Y = {
              lvcGx: function (Z, a0) {
                return Z === a0;
              },
              EAtri: function (Z, a0) {
                return Z(a0);
              }
            };
            {
              for (;;) {
                switch (X.prev = X.next) {
                  case 0:
                    console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n");
                    "XiShiYan" == g ? (l = "34", q = "50") : "WangChao" == g ? (l = "64", q = "10019") : "XinJiangBei" == g ? (l = "102", q = "10050") : "TongLu" == g ? (l = "59", q = "10017") : "ZSWY" == g ? (l = "73", q = "10024") : "SHPJ" == g ? (l = "14", q = "12") : "YueCheng" == g ? (l = "31", q = "48") : "DaChao" == g ? (l = "94", q = "10048") : "RongPanAn" == g ? (l = "30", q = "45") : "LanJingLing" == g && (l = "72", q = "10026");
                    X.next = 4;
                    return J();
                  case 4:
                    j = X.sent;
                    console.log("随机生成UA");
                    P = H();
                    m = P.ua;
                    n = P.commonUa;
                    console.log(m);
                    console.log(n);
                    console.log("用户：".concat(f, "开始任务"));
                    console.log("获取sessionId");
                    X.next = 15;
                    return w("/api/account/init");
                  case 15:
                    Q = X.sent;
                    r = Q.data.session.id;
                    console.log(r);
                    console.log("获取signature_key");
                    X.next = 21;
                    return y("/web/init?client_id=".concat(q));
                  case 21:
                    R = X.sent;
                    k = R.data.client.signature_key;
                    console.log(k);
                    console.log("验证验证码");
                    X.next = 27;
                    return C("/web/security/check_security_code?client_id=".concat(q, "&phone_number=").concat(f, "&security_code=").concat(h));
                  case 27:
                    if (S = X.sent, 0 != S.code) {
                      {
                        X.next = 57;
                        break;
                      }
                    }
                    console.log("验证码验证成功");
                    console.log("重置密码");
                    X.next = 33;
                    return A("/web/oauth/reset_password", "client_id=".concat(q, "&new_password=").concat(i, "&phone_number=").concat(f, "&security_code=").concat(h));
                  case 33:
                    if (T = X.sent, 0 != T.code) {
                      {
                        X.next = 38;
                        break;
                      }
                    }
                    console.log("重置密码成功");
                    X.next = 55;
                    break;
                  case 38:
                    if (100001 != T.code) {
                      {
                        X.next = 54;
                        break;
                      }
                    }
                    console.log(T.message);
                    console.log("开始注册");
                    console.log("获取code");
                    X.next = 44;
                    return A("/web/oauth/security_code_auth", "client_id=".concat(q, "&phone_number=").concat(f, "&security_code=").concat(h));
                  case 44:
                    U = X.sent;
                    V = U.data.authorization_code.code;
                    console.log(V);
                    console.log("登录");
                    X.next = 50;
                    return w("/api/zbtxz/login", "check_token=&code=".concat(V, "&token=&type=-1&union_id="));
                  case 50:
                    W = X.sent;
                    console.log("注册结果：".concat(W.message));
                    X.next = 55;
                    break;
                  case 54:
                    console.log(T.message);
                  case 55:
                    X.next = 58;
                    break;
                  case 57:
                    console.log(S.message);
                  case 58:
                  case "end":
                    return X.stop();
                }
              }
            }
          }, N);
        }
      }));
      return v.apply(this, arguments);
    }
  }
  function w(L, M) {
    {
      return x.apply(this, arguments);
    }
  }
  function x() {
    x = e(c().mark(function N(O, P) {
      {
        var R;
        return c().wrap(function (T) {
          {
            for (;;) {
              switch (T.prev = T.next) {
                case 0:
                  R = F(O);
                  return T.abrupt("return", new Promise(function (U) {
                    {
                      var W = {
                        url: "https://vapp.tmuyun.com".concat(O),
                        headers: {
                          Connection: "Keep-Alive",
                          "X-TIMESTAMP": R.time,
                          "X-SESSION-ID": r,
                          "X-REQUEST-ID": R.uuid,
                          "X-SIGNATURE": R.signature,
                          "X-TENANT-ID": l,
                          "X-ACCOUNT-ID": o,
                          "Cache-Control": "no-cache",
                          "Accept-Encoding": "gzip",
                          "user-agent": n
                        },
                        body: P
                      };
                      $.post(W, function () {
                        {
                          var Y = e(c().mark(function Z(a0, a1, a2) {
                            {
                              return c().wrap(function (a5) {
                                {
                                  for (;;) {
                                    switch (a5.prev = a5.next) {
                                      case 0:
                                        if (a5.prev = 0, !a0) {
                                          {
                                            a5.next = 6;
                                            break;
                                          }
                                        }
                                        console.log("".concat(JSON.stringify(a0)));
                                        console.log("".concat($.name, " API请求失败，请检查网路重试"));
                                        a5.next = 9;
                                        break;
                                      case 6:
                                        a5.next = 8;
                                        return $.wait(2000);
                                      case 8:
                                        U(JSON.parse(a2));
                                      case 9:
                                        a5.next = 14;
                                        break;
                                      case 11:
                                        a5.prev = 11;
                                        a5.t0 = a5.catch(0);
                                        $.logErr(a5.t0, a1);
                                      case 14:
                                        a5.prev = 14;
                                        U();
                                        return a5.finish(14);
                                      case 17:
                                      case "end":
                                        return a5.stop();
                                    }
                                  }
                                }
                              }, Z, null, [[0, 11, 14, 17]]);
                            }
                          }));
                          return function (a0, a1, a2) {
                            {
                              return Y.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 2:
                case "end":
                  return T.stop();
              }
            }
          }
        }, N);
      }
    }));
    return x.apply(this, arguments);
  }
  function y(L) {
    {
      return z.apply(this, arguments);
    }
  }
  function z() {
    z = e(c().mark(function M(N) {
      return c().wrap(function (P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              return P.abrupt("return", new Promise(function (R) {
                var S = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": G(),
                    "Accept-Encoding": "gzip",
                    "user-agent": m
                  }
                };
                $.get(S, function () {
                  var U = e(c().mark(function V(W, X, Y) {
                    var a0;
                    var a1;
                    return c().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            try {
                              {
                                if (W) {
                                  console.log("".concat(JSON.stringify(W)));
                                  console.log("".concat($.name, " API请求失败，请检查网路重试"));
                                } else {
                                  {
                                    if ($.isNode()) {
                                      for (a0 = X.headers["set-cookie"] || X.headers["Set-Cookie"], a1 = 0; a1 < a0.length; a1++) {
                                        p += a0[a1].split(";")[0] + ";";
                                      }
                                    } else {
                                      p = X.headers["set-cookie"] || X.headers["Set-Cookie"];
                                    }
                                    R(JSON.parse(Y));
                                  }
                                }
                              }
                            } catch (a6) {
                              $.logErr(a6, X);
                            } finally {
                              R();
                            }
                          case 1:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, V);
                  }));
                  return function (W, X, Y) {
                    return U.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return P.stop();
          }
        }
      }, M);
    }));
    return z.apply(this, arguments);
  }
  function A(L, M) {
    return B.apply(this, arguments);
  }
  function B() {
    B = e(c().mark(function M(N, O) {
      var R;
      return c().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              R = E(N, O);
              return S.abrupt("return", new Promise(function (U) {
                var V = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": R.uuid,
                    "X-SIGNATURE": R.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": m,
                    Cookie: p
                  },
                  body: R.body
                };
                $.post(V, function () {
                  var X = e(c().mark(function Y(Z, a0, a1) {
                    return c().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            try {
                              Z ? (console.log("".concat(JSON.stringify(Z))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : U(JSON.parse(a1));
                            } catch (a3) {
                              $.logErr(a3, a0);
                            } finally {
                              U();
                            }
                          case 1:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, Y);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return S.stop();
          }
        }
      }, M);
    }));
    return B.apply(this, arguments);
  }
  function C(L) {
    return D.apply(this, arguments);
  }
  function D() {
    D = e(c().mark(function M(N) {
      var P;
      return c().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              P = E(N);
              return Q.abrupt("return", new Promise(function (S) {
                var U = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": P.uuid,
                  "X-SIGNATURE": P.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": m,
                  Cookie: p
                };
                var V = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: U
                };
                $.get(V, function () {
                  var W = e(c().mark(function X(Y, Z, a0) {
                    return c().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : S(JSON.parse(a0));
                            } catch (a3) {
                              $.logErr(a3, Z);
                            } finally {
                              S();
                            }
                          case 1:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return Q.stop();
          }
        }
      }, M);
    }));
    return D.apply(this, arguments);
  }
  function E(L, M) {
    var T = G();
    if (M) {
      var Y = new (j.loadJSEncrypt())();
      Y.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
      i = Y.encrypt(i);
      var Z = "post%%".concat(L, "?").concat(M, "%%").concat(T, "%%");
      M = "client_id=".concat(q, "&new_password=").concat(encodeURIComponent(i), "&phone_number=").concat(f, "&security_code=").concat(h);
      CryptoJS = j.createCryptoJS();
      var W = CryptoJS.HmacSHA256(Z, k);
      var X = CryptoJS.enc.Hex.stringify(W);
      var a0 = {
        uuid: T,
        signature: X,
        body: M
      };
      return a0;
    }
    M = L.split("?")[1];
    L = L.split("?")[0];
    var S = "get%%".concat(L, "?").concat(M, "%%").concat(T, "%%");
    CryptoJS = j.createCryptoJS();
    var Q = CryptoJS.HmacSHA256(S, k);
    var R = CryptoJS.enc.Hex.stringify(Q);
    var P = {
      uuid: T,
      signature: R
    };
    return P;
  }
  function F(L) {
    var M = G();
    var N = Date.now();
    L.indexOf("?") > 0 && (L = L.substring(0, L.indexOf("?")));
    CryptoJS = j.createCryptoJS();
    var O = CryptoJS.SHA256("".concat(L, "&&").concat(r, "&&").concat(M, "&&").concat(N, "&&FR*r!isE5W&&").concat(l)).toString();
    var P = {
      uuid: M,
      time: N,
      signature: O
    };
    return P;
  }
  function G() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (M) {
      var N = 16 * Math.random() | 0;
      var O = "x" === M ? N : 3 & N | 8;
      return O.toString(16);
    });
  }
  function H() {
    var L = "6.0.2";
    var M = G();
    var N = I(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var O = "Xiaomi " + N;
    var P = "Android";
    var Q = "".concat(P.toUpperCase(), ";").concat("11", ";").concat(q, ";").concat(L, ";1.0;null;").concat(N);
    var R = "".concat(L, ";").concat(M, ";").concat(O, ";").concat(P, ";").concat("11", ";").concat("Release", ";").concat("6.10.0");
    var S = {
      ua: Q,
      commonUa: R,
      uuid: M
    };
    return S;
  }
  function I(L) {
    return L[Math.floor(Math.random() * L.length)];
  }
  function J() {
    return K.apply(this, arguments);
  }
  function K() {
    K = e(c().mark(function L() {
      var N;
      return c().wrap(function O(P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              if (N = $.getdata("Utils_Code") || "", !N || !Object.keys(N).length) {
                P.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(N);
              return P.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return P.abrupt("return", new Promise(function () {
                var R = e(c().mark(function S(T) {
                  return c().wrap(function V(W) {
                    for (;;) {
                      switch (W.prev = W.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (X) {
                            $.setdata(X, "Utils_Code");
                            eval(X);
                            console.log("✅ Utils加载成功, 请继续");
                            T(creatUtils());
                          });
                        case 1:
                        case "end":
                          return W.stop();
                      }
                    }
                  }, S);
                }));
                return function (T) {
                  return R.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return P.stop();
          }
        }
      }, L);
    }));
    return K.apply(this, arguments);
  }
  e(c().mark(function L() {
    return c().wrap(function (M) {
      for (;;) {
        switch (M.prev = M.next) {
          case 0:
            if ("" != f && "" != g && "" != h && "" != i) {
              M.next = 4;
              break;
            }
            console.log("请输入手机号,验证码,密码和选择app");
            M.next = 6;
            break;
          case 4:
            M.next = 6;
            return u();
          case 6:
          case "end":
            return M.stop();
        }
      }
    }, L);
  }))().catch(function (M) {
    $.log(M);
  }).finally(function () {
    $.done({});
  });
})();