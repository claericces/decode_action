//Thu Oct 31 2024 07:07:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "仑传";
VALY = ["lcck"];
LOGS = 0;
CK = "";
var userList = [];
channel = ["5cdcc989b198504a785efad1", "5cde70181b011b32d34f3f69", "62ce6c40373c557efc463687", "62e22699fe3fc1556e6a8819", "5cdcc9a61b011b32d34f3e5a", "6046d97aad61a43e70547c1a", "5cdcccf5b198504a785efad7"];
class Bar {
  constructor(_0x4a58ed) {
    this.phone = _0x4a58ed.split("#")[0];
    this.password = _0x4a58ed.split("#")[1];
    this.ts = times(13);
    this.rsakey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB";
    this.logs = true;
    this.channelid = randomArr(channel);
  }
  async login() {
    let _0x33ff00 = RSA(this.password, this.rsakey);
    let _0x459452 = _0x33ff00.replace(/\+/g, "%2B").replace(/\//g, "%2F").replace(/==/g, "%3D%3D");
    let _0x11ed76 = "client_id=17&password=" + _0x459452 + "&phone_number=" + this.phone;
    let _0x511c67 = await task("post", "https://passport.tmuyun.com/web/oauth/credential_auth", {}, _0x11ed76);
    _0x511c67.code == 0 ? (this.code = _0x511c67.data.authorization_code.code, console.log("【" + this.phone + "】登录成功"), this.logs = true, await this.gettoken()) : this.logs = false;
  }
  async gettoken() {
    let _0x3fc9ae = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x384802 = SHA256("/api/zbtxz/login&&63e66232a95d5a7663ae8a2e&&" + _0x3fc9ae + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x1ba6ff = {
      "X-SESSION-ID": "63e66232a95d5a7663ae8a2e",
      "X-REQUEST-ID": _0x3fc9ae,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x384802,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x3fc9ae + ";iPhone13,2;ios;11;Release"
    };
    let _0x4fce52 = "code=" + this.code + "&token=&type=-1&union_id=";
    let _0x3f7d3b = await task("post", "https://vapp.tmuyun.com/api/zbtxz/login", _0x1ba6ff, _0x4fce52);
    this.sessionid = _0x3f7d3b.data.session.id;
    this.name = _0x3f7d3b.data.account.nick_name;
  }
  async tasklist() {
    let _0x25de86 = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x3654a0 = SHA256("/api/user_mumber/numberCenter&&" + this.sessionid + "&&" + _0x25de86 + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x49340e = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x25de86,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x3654a0,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x25de86 + ";iPhone13,2;ios;11;Release"
    };
    let _0x81caba = await task("get", "https://vapp.tmuyun.com/api/user_mumber/numberCenter?is_new=1", _0x49340e);
    if (_0x81caba.code == 0) {
      console.log("【" + this.name + "】==>现有积分" + _0x81caba.data.rst.total_integral);
      for (let _0xf2445e of _0x81caba.data.rst.user_task_list) {
        if (_0xf2445e.name == "分享资讯给好友" && _0xf2445e.completed == 0) {
          for (let _0x3238f7 = _0xf2445e.finish_times; _0x3238f7 < _0xf2445e.frequency; _0x3238f7++) {
            await this.share();
          }
        }
        if (_0xf2445e.name == "新闻资讯评论" && _0xf2445e.completed == 0) {
          for (let _0x408f1c = _0xf2445e.finish_times; _0x408f1c < _0xf2445e.frequency; _0x408f1c++) {
            await this.dailyoneword();
            await this.comment();
          }
        }
        if (_0xf2445e.name == "新闻资讯点赞" && _0xf2445e.completed == 0) {
          for (let _0xc42b3b = _0xf2445e.finish_times; _0xc42b3b < _0xf2445e.frequency; _0xc42b3b++) {
            await this.like();
          }
        }
      }
      for (let _0x8af186 of _0x81caba.data.daily_sign_info.daily_sign_list) {
        _0x8af186.current == "今天" && _0x8af186.signed == false && (await this.signin());
      }
    } else {
      console.log("【" + this.name + "】获取任务列表失败，请稍后再试");
    }
  }
  async share() {
    let _0x53c0b3 = this.ii[RT(0, 29)].id;
    let _0x4308f4 = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x5cf3b6 = SHA256("/api/user_mumber/doTask&&" + this.sessionid + "&&" + _0x4308f4 + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x10c3cf = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x4308f4,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x5cf3b6,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x4308f4 + ";iPhone13,2;ios;11;Release"
    };
    let _0x28679b = "memberType=3&member_type=3&target_id=" + _0x53c0b3;
    let _0xfbf09f = await task("post", "https://vapp.tmuyun.com/api/user_mumber/doTask", _0x10c3cf, _0x28679b);
    _0xfbf09f.code == 0 ? (console.log("【" + this.name + "】 分享资讯成功"), await wait(10000, 18000)) : console.log("【" + this.name + "】 分享资讯失败");
  }
  async list() {
    let _0x19e1f1 = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x54099b = SHA256("/api/article/channel_list&&" + this.sessionid + "&&" + _0x19e1f1 + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x527f70 = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x19e1f1,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x54099b,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x19e1f1 + ";iPhone13,2;ios;11;Release"
    };
    let _0x3132c5 = await task("get", "https://vapp.tmuyun.com/api/article/channel_list?channel_id=" + this.channelid + "&isDiFangHao=false&is_new=true&list_count=0&size=30", _0x527f70);
    this.ii = _0x3132c5.data.article_list;
  }
  async dailyoneword() {
    let _0xa203a0 = await task("get", "https://v1.jinrishici.com/all.json", {});
    this.word = _0xa203a0.content;
  }
  async comment() {
    let _0x1fbb80 = this.ii[RT(0, 29)].id;
    let _0x2c123d = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x391f1e = SHA256("/api/comment/create&&" + this.sessionid + "&&" + _0x2c123d + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x581ed3 = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x2c123d,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x391f1e,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x2c123d + ";iPhone13,2;ios;11;Release"
    };
    let _0x2f7f75 = "channel_article_id=" + _0x1fbb80 + "&content=" + encodeURIComponent(this.word);
    let _0x3a5be1 = await task("post", "https://vapp.tmuyun.com/api/comment/create", _0x581ed3, _0x2f7f75);
    _0x3a5be1.code == 0 ? (console.log("【" + this.name + "】 评论资讯成功"), await wait(10000, 18000)) : console.log("【" + this.name + "】 评论资讯失败");
  }
  async like() {
    let _0x2146e8 = this.ii[RT(0, 29)].id;
    let _0x51ce31 = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x24728d = SHA256("/api/favorite/like&&" + this.sessionid + "&&" + _0x51ce31 + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x180593 = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x51ce31,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x24728d,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x51ce31 + ";iPhone13,2;ios;11;Release"
    };
    let _0x37d962 = "action=true&id=" + _0x2146e8;
    let _0x12ec57 = await task("post", "https://vapp.tmuyun.com/api/favorite/like", _0x180593, _0x37d962);
    _0x12ec57.code == 0 ? (console.log("【" + this.name + "】 资讯点赞成功"), await wait(10000, 18000)) : console.log("【" + this.name + "】 资讯点赞失败");
  }
  async signin() {
    let _0x15c2b2 = SJSxx(8) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(4) + "-" + SJSxx(12);
    let _0x41161f = SHA256("/api/user_mumber/sign&&" + this.sessionid + "&&" + _0x15c2b2 + "&&" + this.ts + "&&FR*r!isE5W&&18");
    let _0x46119b = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x15c2b2,
      "X-TIMESTAMP": this.ts,
      "X-SIGNATURE": _0x41161f,
      "X-TENANT-ID": 18,
      "User-Agent": "1.3.3;" + _0x15c2b2 + ";iPhone13,2;ios;11;Release"
    };
    let _0x2b40b4 = await task("get", "https://vapp.tmuyun.com/api/user_mumber/sign", _0x46119b);
    _0x2b40b4.code == 0 ? console.log("【" + this.name + "】 签到成功") : console.log("【" + this.name + "】 签到失败");
  }
}
!(async () => {
  console.log("蛋炒饭美食交流频道：https://t.me/+xjTie4yvzm83OTI9");
  console.log(NAME);
  checkEnv();
  for (let _0x3d925a of userList) {
    await _0x3d925a.login();
  }
  let _0x4b6ed2 = userList.filter(_0x12e2a4 => _0x12e2a4.logs == true);
  if (_0x4b6ed2.length == 0) {
    console.log("呆子，检查一下你的CK是否正确");
    return;
  }
  for (let _0x551f84 of _0x4b6ed2) {
    await _0x551f84.list();
    await _0x551f84.tasklist();
  }
})().catch(_0x19332e => {
  console.log(_0x19332e);
}).finally(() => {});
function randomArr(_0x285236) {
  return _0x285236[parseInt(Math.random() * _0x285236.length, 10)];
}
function RT(_0x227980, _0x357a2d) {
  return Math.round(Math.random() * (_0x357a2d - _0x227980) + _0x227980);
}
function times(_0x581994) {
  if (_0x581994 == 10) {
    let _0x31cc8c = Math.round(new Date().getTime() / 1000).toString();
    return _0x31cc8c;
  } else {
    let _0x17a58c = new Date().getTime();
    return _0x17a58c;
  }
}
async function task(_0x1b4978, _0x2de3af, _0x1f2290, _0xb6e387) {
  _0x1b4978 == "delete" ? _0x1b4978 = _0x1b4978.toUpperCase() : _0x1b4978 = _0x1b4978;
  const _0x3cb94a = require("request");
  _0x1b4978 == "post" && (delete _0x1f2290["content-type"], delete _0x1f2290["Content-type"], delete _0x1f2290["content-Type"], safeGet(_0xb6e387) ? _0x1f2290["Content-Type"] = "application/json;charset=UTF-8" : _0x1f2290["Content-Type"] = "application/x-www-form-urlencoded", _0xb6e387 && (_0x1f2290["Content-Length"] = lengthInUtf8Bytes(_0xb6e387)));
  _0x1f2290.Host = _0x2de3af.replace("//", "/").split("/")[1];
  if (_0x1b4978.indexOf("T") < 0) {
    var _0x554d77 = {
      url: _0x2de3af,
      headers: _0x1f2290,
      body: _0xb6e387
    };
  } else {
    var _0x554d77 = {
      url: _0x2de3af,
      headers: _0x1f2290,
      form: JSON.parse(_0xb6e387)
    };
  }
  return new Promise(async _0x2a3291 => {
    _0x3cb94a[_0x1b4978.toLowerCase()](_0x554d77, (_0x41cdb0, _0x1433eb, _0x40d06b) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(_0x554d77), console.log("==================返回=================="), console.log(JSON.parse(_0x40d06b)));
      } catch (_0x130276) {} finally {
        !_0x41cdb0 ? safeGet(_0x40d06b) ? _0x40d06b = JSON.parse(_0x40d06b) : _0x40d06b = _0x40d06b : _0x40d06b = _0x2de3af + "   API请求失败，请检查网络重试\n" + _0x41cdb0;
        return _0x2a3291(_0x40d06b);
      }
    });
  });
}
function SJS(_0x54b700) {
  _0x54b700 = _0x54b700 || 32;
  var _0x86d60f = "1234567890";
  var _0x2dbcda = _0x86d60f.length;
  var _0x241eeb = "";
  for (i = 0; i < _0x54b700; i++) {
    _0x241eeb += _0x86d60f.charAt(Math.floor(Math.random() * _0x2dbcda));
  }
  return _0x241eeb;
}
function SJSxx(_0x26a12f) {
  _0x26a12f = _0x26a12f || 32;
  var _0x254348 = "abcdefghijklmnopqrstuvwxyz1234567890";
  var _0x2e86bb = _0x254348.length;
  var _0x20682e = "";
  for (i = 0; i < _0x26a12f; i++) {
    _0x20682e += _0x254348.charAt(Math.floor(Math.random() * _0x2e86bb));
  }
  return _0x20682e;
}
function safeGet(_0x3929fc) {
  try {
    if (typeof JSON.parse(_0x3929fc) == "object") {
      return true;
    }
  } catch (_0x7b9b2c) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x4cb0af) {
  let _0x1da2ac = encodeURIComponent(_0x4cb0af).match(/%[89ABab]/g);
  return _0x4cb0af.length + (_0x1da2ac ? _0x1da2ac.length : 0);
}
async function checkEnv() {
  let _0x15fb12 = process.env[VALY] || CK;
  let _0x180e82 = 0;
  if (_0x15fb12) {
    for (let _0x197e46 of _0x15fb12.split("@").filter(_0x5a10e1 => !!_0x5a10e1)) {
      userList.push(new Bar(_0x197e46));
    }
    _0x180e82 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0x180e82 + "个账号");
  return userList;
}
function wait(_0x29659b) {
  return new Promise(_0x51c29c => setTimeout(_0x51c29c, _0x29659b));
}
function stringToBase64(_0x2e1329) {
  var _0x140860 = Buffer.from(_0x2e1329).toString("base64");
  return _0x140860;
}
function EncryptCrypto(_0x33fd7f, _0x4c4709, _0x593521, _0x1e9da5, _0x4c45ba, _0x4b8e4e) {
  const _0x541c0f = require("crypto-js");
  const _0x4e7b46 = _0x541c0f.enc.Utf8.parse(_0x1e9da5);
  const _0x5d01a0 = _0x541c0f.enc.Utf8.parse(_0x4b8e4e);
  const _0x4b15f6 = _0x541c0f.enc.Utf8.parse(_0x4c45ba);
  const _0x2ee94e = _0x541c0f[_0x33fd7f].encrypt(_0x4e7b46, _0x4b15f6, {
    iv: _0x5d01a0,
    mode: _0x541c0f.mode[_0x4c4709],
    padding: _0x541c0f.pad[_0x593521]
  });
  return _0x2ee94e.toString();
}
function DecryptCrypto(_0x203aac, _0x233aad, _0x93b402, _0x605509, _0x111b36, _0x55bb0e) {
  const _0x5567bd = require("crypto-js");
  const _0x1f89eb = _0x5567bd.enc.Utf8.parse(_0x55bb0e);
  const _0x333d8e = _0x5567bd.enc.Utf8.parse(_0x111b36);
  const _0x398161 = _0x5567bd[_0x203aac].decrypt(_0x605509, _0x333d8e, {
    iv: _0x1f89eb,
    mode: _0x5567bd.mode[_0x233aad],
    padding: _0x5567bd.pad[_0x93b402]
  });
  return _0x398161.toString(_0x5567bd.enc.Utf8);
}
function RSA(_0x3a1047, _0x5085cf) {
  const _0x5213d7 = require("node-rsa");
  let _0x4974b2 = new _0x5213d7("-----BEGIN PUBLIC KEY-----\n" + _0x5085cf + "\n-----END PUBLIC KEY-----");
  _0x4974b2.setOptions({
    encryptionScheme: "pkcs1"
  });
  return _0x4974b2.encrypt(_0x3a1047, "base64", "utf8");
}
function SHA1_Encrypt(_0xf58074) {
  return CryptoJS.SHA1(_0xf58074).toString();
}
function SHA256(_0x305846) {
  const _0x5121c9 = 8;
  const _0x31e4f1 = 0;
  function _0x23dc58(_0x37d453, _0x20a576) {
    const _0x2bdd63 = (65535 & _0x37d453) + (65535 & _0x20a576);
    return (_0x37d453 >> 16) + (_0x20a576 >> 16) + (_0x2bdd63 >> 16) << 16 | 65535 & _0x2bdd63;
  }
  function _0x2596f1(_0x32ec2f, _0x2fdb2c) {
    return _0x32ec2f >>> _0x2fdb2c | _0x32ec2f << 32 - _0x2fdb2c;
  }
  function _0x200ed6(_0xc54643, _0x1b0f83) {
    return _0xc54643 >>> _0x1b0f83;
  }
  function _0x44410d(_0x738551, _0x423930, _0x5b7791) {
    return _0x738551 & _0x423930 ^ ~_0x738551 & _0x5b7791;
  }
  function _0x3aed2f(_0xc0ea6a, _0x39aaa0, _0x47eb81) {
    return _0xc0ea6a & _0x39aaa0 ^ _0xc0ea6a & _0x47eb81 ^ _0x39aaa0 & _0x47eb81;
  }
  function _0x169fde(_0xfe33b3) {
    return _0x2596f1(_0xfe33b3, 2) ^ _0x2596f1(_0xfe33b3, 13) ^ _0x2596f1(_0xfe33b3, 22);
  }
  function _0x4c57f8(_0x5555f7) {
    return _0x2596f1(_0x5555f7, 6) ^ _0x2596f1(_0x5555f7, 11) ^ _0x2596f1(_0x5555f7, 25);
  }
  function _0x45ca34(_0x46f636) {
    return _0x2596f1(_0x46f636, 7) ^ _0x2596f1(_0x46f636, 18) ^ _0x200ed6(_0x46f636, 3);
  }
  return function (_0x4bc2e8) {
    const _0x5b60c1 = _0x31e4f1 ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x4875cd = "";
    for (let _0x98572e = 0; _0x98572e < 4 * _0x4bc2e8.length; _0x98572e++) {
      _0x4875cd += _0x5b60c1.charAt(_0x4bc2e8[_0x98572e >> 2] >> 8 * (3 - _0x98572e % 4) + 4 & 15) + _0x5b60c1.charAt(_0x4bc2e8[_0x98572e >> 2] >> 8 * (3 - _0x98572e % 4) & 15);
    }
    return _0x4875cd;
  }(function (_0x910536, _0x55c545) {
    const _0x3777fd = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    const _0x12c7a5 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    const _0x5c8ce6 = new Array(64);
    let _0x282cf6;
    let _0x50f2c5;
    let _0x50cb97;
    let _0xb576fb;
    let _0x5a4de2;
    let _0x24a6ab;
    let _0xacaed7;
    let _0x554f11;
    let _0x27de19;
    let _0x5899cd;
    let _0x256d1c;
    let _0x28fa54;
    for (_0x910536[_0x55c545 >> 5] |= 128 << 24 - _0x55c545 % 32, _0x910536[15 + (_0x55c545 + 64 >> 9 << 4)] = _0x55c545, _0x27de19 = 0; _0x27de19 < _0x910536.length; _0x27de19 += 16) {
      for (_0x282cf6 = _0x12c7a5[0], _0x50f2c5 = _0x12c7a5[1], _0x50cb97 = _0x12c7a5[2], _0xb576fb = _0x12c7a5[3], _0x5a4de2 = _0x12c7a5[4], _0x24a6ab = _0x12c7a5[5], _0xacaed7 = _0x12c7a5[6], _0x554f11 = _0x12c7a5[7], _0x5899cd = 0; _0x5899cd < 64; _0x5899cd++) {
        _0x5c8ce6[_0x5899cd] = _0x5899cd < 16 ? _0x910536[_0x5899cd + _0x27de19] : _0x23dc58(_0x23dc58(_0x23dc58(_0x2596f1(_0x50100b = _0x5c8ce6[_0x5899cd - 2], 17) ^ _0x2596f1(_0x50100b, 19) ^ _0x200ed6(_0x50100b, 10), _0x5c8ce6[_0x5899cd - 7]), _0x45ca34(_0x5c8ce6[_0x5899cd - 15])), _0x5c8ce6[_0x5899cd - 16]);
        _0x256d1c = _0x23dc58(_0x23dc58(_0x23dc58(_0x23dc58(_0x554f11, _0x4c57f8(_0x5a4de2)), _0x44410d(_0x5a4de2, _0x24a6ab, _0xacaed7)), _0x3777fd[_0x5899cd]), _0x5c8ce6[_0x5899cd]);
        _0x28fa54 = _0x23dc58(_0x169fde(_0x282cf6), _0x3aed2f(_0x282cf6, _0x50f2c5, _0x50cb97));
        _0x554f11 = _0xacaed7;
        _0xacaed7 = _0x24a6ab;
        _0x24a6ab = _0x5a4de2;
        _0x5a4de2 = _0x23dc58(_0xb576fb, _0x256d1c);
        _0xb576fb = _0x50cb97;
        _0x50cb97 = _0x50f2c5;
        _0x50f2c5 = _0x282cf6;
        _0x282cf6 = _0x23dc58(_0x256d1c, _0x28fa54);
      }
      _0x12c7a5[0] = _0x23dc58(_0x282cf6, _0x12c7a5[0]);
      _0x12c7a5[1] = _0x23dc58(_0x50f2c5, _0x12c7a5[1]);
      _0x12c7a5[2] = _0x23dc58(_0x50cb97, _0x12c7a5[2]);
      _0x12c7a5[3] = _0x23dc58(_0xb576fb, _0x12c7a5[3]);
      _0x12c7a5[4] = _0x23dc58(_0x5a4de2, _0x12c7a5[4]);
      _0x12c7a5[5] = _0x23dc58(_0x24a6ab, _0x12c7a5[5]);
      _0x12c7a5[6] = _0x23dc58(_0xacaed7, _0x12c7a5[6]);
      _0x12c7a5[7] = _0x23dc58(_0x554f11, _0x12c7a5[7]);
    }
    var _0x50100b;
    return _0x12c7a5;
  }(function (_0x53dc3a) {
    const _0x302c25 = [];
    const _0x428cff = (1 << _0x5121c9) - 1;
    for (let _0x48e837 = 0; _0x48e837 < _0x53dc3a.length * _0x5121c9; _0x48e837 += _0x5121c9) {
      _0x302c25[_0x48e837 >> 5] |= (_0x53dc3a.charCodeAt(_0x48e837 / _0x5121c9) & _0x428cff) << 24 - _0x48e837 % 32;
    }
    return _0x302c25;
  }(_0x305846 = function (_0x2e5a44) {
    _0x2e5a44 = _0x2e5a44.replace(/\r\n/g, "\n");
    let _0xf0a1c3 = "";
    for (let _0xb2c716 = 0; _0xb2c716 < _0x2e5a44.length; _0xb2c716++) {
      const _0xfcfd25 = _0x2e5a44.charCodeAt(_0xb2c716);
      _0xfcfd25 < 128 ? _0xf0a1c3 += String.fromCharCode(_0xfcfd25) : _0xfcfd25 > 127 && _0xfcfd25 < 2048 ? (_0xf0a1c3 += String.fromCharCode(_0xfcfd25 >> 6 | 192), _0xf0a1c3 += String.fromCharCode(63 & _0xfcfd25 | 128)) : (_0xf0a1c3 += String.fromCharCode(_0xfcfd25 >> 12 | 224), _0xf0a1c3 += String.fromCharCode(_0xfcfd25 >> 6 & 63 | 128), _0xf0a1c3 += String.fromCharCode(63 & _0xfcfd25 | 128));
    }
    return _0xf0a1c3;
  }(_0x305846)), _0x305846.length * _0x5121c9));
}
function MD5Encrypt(_0x7defc8) {
  function _0x1a18b1(_0x2fa69f, _0x244ec3) {
    return _0x2fa69f << _0x244ec3 | _0x2fa69f >>> 32 - _0x244ec3;
  }
  function _0x34fdd3(_0x9b916d, _0xb52cd7) {
    var _0x1883cf;
    var _0x310e2f;
    var _0x2da0c8;
    var _0x272e91;
    var _0x582acd;
    _0x2da0c8 = 2147483648 & _0x9b916d;
    _0x272e91 = 2147483648 & _0xb52cd7;
    _0x1883cf = 1073741824 & _0x9b916d;
    _0x310e2f = 1073741824 & _0xb52cd7;
    _0x582acd = (1073741823 & _0x9b916d) + (1073741823 & _0xb52cd7);
    return _0x1883cf & _0x310e2f ? 2147483648 ^ _0x582acd ^ _0x2da0c8 ^ _0x272e91 : _0x1883cf | _0x310e2f ? 1073741824 & _0x582acd ? 3221225472 ^ _0x582acd ^ _0x2da0c8 ^ _0x272e91 : 1073741824 ^ _0x582acd ^ _0x2da0c8 ^ _0x272e91 : _0x582acd ^ _0x2da0c8 ^ _0x272e91;
  }
  function _0x44e3f4(_0x32e932, _0x19ef3e, _0x59e678, _0x3d1dd8, _0x372b82, _0x488aaf, _0x115453) {
    var _0x47117e;
    var _0x2ae214;
    _0x32e932 = _0x34fdd3(_0x32e932, _0x34fdd3(_0x34fdd3((_0x47117e = _0x19ef3e) & (_0x2ae214 = _0x59e678) | ~_0x47117e & _0x3d1dd8, _0x372b82), _0x115453));
    return _0x34fdd3(_0x1a18b1(_0x32e932, _0x488aaf), _0x19ef3e);
  }
  function _0x10381e(_0x604e0a, _0x158b43, _0x1fa98c, _0x22ee6a, _0x5d535f, _0x2af55d, _0x2b3b03) {
    var _0x1511bb;
    var _0x1ad5d3;
    var _0xec9f79;
    _0x604e0a = _0x34fdd3(_0x604e0a, _0x34fdd3(_0x34fdd3((_0x1511bb = _0x158b43, _0x1ad5d3 = _0x1fa98c, _0x1511bb & (_0xec9f79 = _0x22ee6a) | _0x1ad5d3 & ~_0xec9f79), _0x5d535f), _0x2b3b03));
    return _0x34fdd3(_0x1a18b1(_0x604e0a, _0x2af55d), _0x158b43);
  }
  function _0x19f7d3(_0x3e8c94, _0x2e8e3a, _0x4a3b01, _0x282ada, _0x4c8f7f, _0x297166, _0x4f8ecb) {
    var _0x3f0535;
    var _0x4f0869;
    _0x3e8c94 = _0x34fdd3(_0x3e8c94, _0x34fdd3(_0x34fdd3((_0x3f0535 = _0x2e8e3a) ^ (_0x4f0869 = _0x4a3b01) ^ _0x282ada, _0x4c8f7f), _0x4f8ecb));
    return _0x34fdd3(_0x1a18b1(_0x3e8c94, _0x297166), _0x2e8e3a);
  }
  function _0xc8b12b(_0x532c4b, _0x5cbf51, _0x1952a6, _0x5bc403, _0x4c5f83, _0x5dddfa, _0x371bb6) {
    var _0x1f8dda;
    var _0x22e6e3;
    _0x532c4b = _0x34fdd3(_0x532c4b, _0x34fdd3(_0x34fdd3((_0x1f8dda = _0x5cbf51, (_0x22e6e3 = _0x1952a6) ^ (_0x1f8dda | ~_0x5bc403)), _0x4c5f83), _0x371bb6));
    return _0x34fdd3(_0x1a18b1(_0x532c4b, _0x5dddfa), _0x5cbf51);
  }
  function _0x53bf37(_0x137840) {
    var _0x5c1261;
    var _0x5d5c63 = "";
    var _0x2f0e19 = "";
    for (_0x5c1261 = 0; 3 >= _0x5c1261; _0x5c1261++) {
      _0x5d5c63 += (_0x2f0e19 = "0" + (_0x137840 >>> 8 * _0x5c1261 & 255).toString(16)).substr(_0x2f0e19.length - 2, 2);
    }
    return _0x5d5c63;
  }
  var _0x30d7ca;
  var _0x9bc83f;
  var _0x9a5860;
  var _0x5355f8;
  var _0x4afd91;
  var _0x4cdc47;
  var _0x578272;
  var _0xe8db18;
  var _0x474928;
  var _0x19fe47 = [];
  for (_0x19fe47 = function (_0x1e0786) {
    for (var _0x2a2118, _0x53ed4d = _0x1e0786.length, _0x49e3bd = _0x53ed4d + 8, _0x4376e8 = 16 * ((_0x49e3bd - _0x49e3bd % 64) / 64 + 1), _0x1f1a33 = Array(_0x4376e8 - 1), _0xceb33d = 0, _0x49bdfc = 0; _0x53ed4d > _0x49bdfc;) {
      _0x2a2118 = (_0x49bdfc - _0x49bdfc % 4) / 4;
      _0xceb33d = _0x49bdfc % 4 * 8;
      _0x1f1a33[_0x2a2118] = _0x1f1a33[_0x2a2118] | _0x1e0786.charCodeAt(_0x49bdfc) << _0xceb33d;
      _0x49bdfc++;
    }
    _0x2a2118 = (_0x49bdfc - _0x49bdfc % 4) / 4;
    _0xceb33d = _0x49bdfc % 4 * 8;
    _0x1f1a33[_0x2a2118] = _0x1f1a33[_0x2a2118] | 128 << _0xceb33d;
    _0x1f1a33[_0x4376e8 - 2] = _0x53ed4d << 3;
    _0x1f1a33[_0x4376e8 - 1] = _0x53ed4d >>> 29;
    return _0x1f1a33;
  }(_0x7defc8 = function (_0x15a7af) {
    _0x15a7af = _0x15a7af.replace(/\r\n/g, "\n");
    for (var _0x394694 = "", _0x5790b0 = 0; _0x5790b0 < _0x15a7af.length; _0x5790b0++) {
      var _0x5b06a7 = _0x15a7af.charCodeAt(_0x5790b0);
      128 > _0x5b06a7 ? _0x394694 += String.fromCharCode(_0x5b06a7) : _0x5b06a7 > 127 && 2048 > _0x5b06a7 ? (_0x394694 += String.fromCharCode(_0x5b06a7 >> 6 | 192), _0x394694 += String.fromCharCode(63 & _0x5b06a7 | 128)) : (_0x394694 += String.fromCharCode(_0x5b06a7 >> 12 | 224), _0x394694 += String.fromCharCode(_0x5b06a7 >> 6 & 63 | 128), _0x394694 += String.fromCharCode(63 & _0x5b06a7 | 128));
    }
    return _0x394694;
  }(_0x7defc8)), _0x4cdc47 = 1732584193, _0x578272 = 4023233417, _0xe8db18 = 2562383102, _0x474928 = 271733878, _0x30d7ca = 0; _0x30d7ca < _0x19fe47.length; _0x30d7ca += 16) {
    _0x9bc83f = _0x4cdc47;
    _0x9a5860 = _0x578272;
    _0x5355f8 = _0xe8db18;
    _0x4afd91 = _0x474928;
    _0x4cdc47 = _0x44e3f4(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 0], 7, 3614090360);
    _0x474928 = _0x44e3f4(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 1], 12, 3905402710);
    _0xe8db18 = _0x44e3f4(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 2], 17, 606105819);
    _0x578272 = _0x44e3f4(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 3], 22, 3250441966);
    _0x4cdc47 = _0x44e3f4(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 4], 7, 4118548399);
    _0x474928 = _0x44e3f4(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 5], 12, 1200080426);
    _0xe8db18 = _0x44e3f4(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 6], 17, 2821735955);
    _0x578272 = _0x44e3f4(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 7], 22, 4249261313);
    _0x4cdc47 = _0x44e3f4(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 8], 7, 1770035416);
    _0x474928 = _0x44e3f4(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 9], 12, 2336552879);
    _0xe8db18 = _0x44e3f4(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 10], 17, 4294925233);
    _0x578272 = _0x44e3f4(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 11], 22, 2304563134);
    _0x4cdc47 = _0x44e3f4(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 12], 7, 1804603682);
    _0x474928 = _0x44e3f4(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 13], 12, 4254626195);
    _0xe8db18 = _0x44e3f4(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 14], 17, 2792965006);
    _0x578272 = _0x44e3f4(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 15], 22, 1236535329);
    _0x4cdc47 = _0x10381e(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 1], 5, 4129170786);
    _0x474928 = _0x10381e(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 6], 9, 3225465664);
    _0xe8db18 = _0x10381e(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 11], 14, 643717713);
    _0x578272 = _0x10381e(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 0], 20, 3921069994);
    _0x4cdc47 = _0x10381e(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 5], 5, 3593408605);
    _0x474928 = _0x10381e(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 10], 9, 38016083);
    _0xe8db18 = _0x10381e(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 15], 14, 3634488961);
    _0x578272 = _0x10381e(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 4], 20, 3889429448);
    _0x4cdc47 = _0x10381e(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 9], 5, 568446438);
    _0x474928 = _0x10381e(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 14], 9, 3275163606);
    _0xe8db18 = _0x10381e(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 3], 14, 4107603335);
    _0x578272 = _0x10381e(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 8], 20, 1163531501);
    _0x4cdc47 = _0x10381e(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 13], 5, 2850285829);
    _0x474928 = _0x10381e(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 2], 9, 4243563512);
    _0xe8db18 = _0x10381e(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 7], 14, 1735328473);
    _0x578272 = _0x10381e(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 12], 20, 2368359562);
    _0x4cdc47 = _0x19f7d3(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 5], 4, 4294588738);
    _0x474928 = _0x19f7d3(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 8], 11, 2272392833);
    _0xe8db18 = _0x19f7d3(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 11], 16, 1839030562);
    _0x578272 = _0x19f7d3(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 14], 23, 4259657740);
    _0x4cdc47 = _0x19f7d3(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 1], 4, 2763975236);
    _0x474928 = _0x19f7d3(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 4], 11, 1272893353);
    _0xe8db18 = _0x19f7d3(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 7], 16, 4139469664);
    _0x578272 = _0x19f7d3(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 10], 23, 3200236656);
    _0x4cdc47 = _0x19f7d3(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 13], 4, 681279174);
    _0x474928 = _0x19f7d3(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 0], 11, 3936430074);
    _0xe8db18 = _0x19f7d3(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 3], 16, 3572445317);
    _0x578272 = _0x19f7d3(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 6], 23, 76029189);
    _0x4cdc47 = _0x19f7d3(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 9], 4, 3654602809);
    _0x474928 = _0x19f7d3(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 12], 11, 3873151461);
    _0xe8db18 = _0x19f7d3(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 15], 16, 530742520);
    _0x578272 = _0x19f7d3(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 2], 23, 3299628645);
    _0x4cdc47 = _0xc8b12b(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 0], 6, 4096336452);
    _0x474928 = _0xc8b12b(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 7], 10, 1126891415);
    _0xe8db18 = _0xc8b12b(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 14], 15, 2878612391);
    _0x578272 = _0xc8b12b(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 5], 21, 4237533241);
    _0x4cdc47 = _0xc8b12b(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 12], 6, 1700485571);
    _0x474928 = _0xc8b12b(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 3], 10, 2399980690);
    _0xe8db18 = _0xc8b12b(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 10], 15, 4293915773);
    _0x578272 = _0xc8b12b(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 1], 21, 2240044497);
    _0x4cdc47 = _0xc8b12b(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 8], 6, 1873313359);
    _0x474928 = _0xc8b12b(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 15], 10, 4264355552);
    _0xe8db18 = _0xc8b12b(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 6], 15, 2734768916);
    _0x578272 = _0xc8b12b(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 13], 21, 1309151649);
    _0x4cdc47 = _0xc8b12b(_0x4cdc47, _0x578272, _0xe8db18, _0x474928, _0x19fe47[_0x30d7ca + 4], 6, 4149444226);
    _0x474928 = _0xc8b12b(_0x474928, _0x4cdc47, _0x578272, _0xe8db18, _0x19fe47[_0x30d7ca + 11], 10, 3174756917);
    _0xe8db18 = _0xc8b12b(_0xe8db18, _0x474928, _0x4cdc47, _0x578272, _0x19fe47[_0x30d7ca + 2], 15, 718787259);
    _0x578272 = _0xc8b12b(_0x578272, _0xe8db18, _0x474928, _0x4cdc47, _0x19fe47[_0x30d7ca + 9], 21, 3951481745);
    _0x4cdc47 = _0x34fdd3(_0x4cdc47, _0x9bc83f);
    _0x578272 = _0x34fdd3(_0x578272, _0x9a5860);
    _0xe8db18 = _0x34fdd3(_0xe8db18, _0x5355f8);
    _0x474928 = _0x34fdd3(_0x474928, _0x4afd91);
  }
  return (_0x53bf37(_0x4cdc47) + _0x53bf37(_0x578272) + _0x53bf37(_0xe8db18) + _0x53bf37(_0x474928)).toLowerCase();
}