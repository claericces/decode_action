//Thu Oct 03 2024 06:31:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5b2319 = new _0x3abc47("悦临平");
_0x44edcc();
const _0x5271c5 = "ylp",
  _0x42a1a9 = require("request"),
  _0x54e01b = require("fs"),
  _0x3442a7 = require("form-data"),
  _0x123f96 = require("./utils");
let _0x305116 = "",
  _0x2a379d = "https://news.hi-lp.cn/webChannels/invite?inviteCode=WET28W&tenantId=45&accountId=64afaabb5057614090ef46bb",
  _0x2a3a9b = "幻生提示：有错请在仓库建立issue，说明运行环境：青龙版本、机器是 本地机器、服务器 还是 手机面具模块；附上运行截图，谢谢",
  _0x268a24 = "请在 配置文件 里添加 " + _0x5271c5 + " 变量，具体配置请看脚本最上方说明\n注册地址：" + _0x2a379d + "\n投稿？请建Issue 或者 +Q：3385445213";
const _0x40812f = Number.isInteger(_0x5b2319.isNode() ? process.env[_0x5271c5 + "enabledNotify"] : _0x5b2319.getdata(_0x5271c5 + "EnabledNotify")) || Number.isInteger(_0x5b2319.isNode() ? process.env.enabledNotify : _0x5b2319.getdata("enabledNotify")) || 1;
let _0x2517fd = 0,
  _0x11038e = ["@", "\n"],
  _0x53db1e = (_0x5b2319.isNode() ? process.env[_0x5271c5] : _0x5b2319.getdata(_0x5271c5)) || "",
  _0x4d0816 = ["1", 1, "true"]?.["includes"](_0x5b2319.isNode() ? process.env[_0x5271c5 + "EnabledPostComment"] : _0x5b2319.getdata(_0x5271c5 + "EnabledPostComment")) || false,
  _0x14d5cf = ["1", 1, "true"]?.["includes"](_0x5b2319.isNode() ? process.env[_0x5271c5 + "EnabledForumPost"] : _0x5b2319.getdata(_0x5271c5 + "EnabledForumPost")) || false,
  _0x4eaca8 = ["1", 1, "true"]?.["includes"](_0x5b2319.isNode() ? process.env[_0x5271c5 + "EnabledPostCommentBy1Y"] : _0x5b2319.getdata(_0x5271c5 + "EnabledPostCommentBy1Y")) || false,
  _0x2467e9 = ["1", 1, "true"]?.["includes"](_0x5b2319.isNode() ? process.env[_0x5271c5 + "ForceLikeAndShare"] : _0x5b2319.getdata(_0x5271c5 + "ForceLikeAndShare")) || false,
  _0x15f309 = [],
  _0x6327a7 = 0,
  _0x3f3b9b = 0,
  _0x20a930 = "WET28W",
  _0x169c04 = "10001",
  _0x33f0fb = 45,
  _0xa1d612 = "vapp.tmuyun.com",
  _0x4f5589 = "请注意：已" + (_0x4d0816 ? "开启" : "关闭") + " 对文章的评论功能； 已" + (_0x14d5cf ? "开启" : "关闭") + " 论坛发帖功能； 已" + (_0x4eaca8 ? "开启" : "关闭") + " 一言随机评论功能； 已" + (_0x4eaca8 ? "开启" : "关闭") + " 强制点赞/分享功能（强行点不一定能加分）",
  _0x154f8e = "63777162fe3fc118b09fab89",
  _0x4817af = ["赞", "👍", "😄", "111", "支持", "点赞"],
  _0x20abf8 = "1.0.8;00000000-62d6-e9e6-0000-0000777fa720;Xiaomi Mi 10;Android;13;xiaomi",
  _0x2eaeb8 = ["60e6995eb40eef0e286ad1eb", "60e6992db40eef0e286ad1e9", "61dd3507ad61a40aa2b43d12", "60e272dab40eef1d9d6fe31b", "649ceabde305b412ee03cc5a"],
  _0x4b4896 = ["1", 1, "true"]?.["includes"](_0x5b2319.isNode() ? process.env[_0x5271c5 + "OldConfigTranform"] : _0x5b2319.getdata(_0x5271c5 + "OldConfigTranform")) || false,
  _0x2eb464 = "",
  _0x4ea39e = "";
async function _0x15a646() {
  console.log("\n================== 用户登录 帐号数：[" + _0x15f309?.["length"] + "]==================\n");
  let _0x501428 = [];
  for (let _0x90b1d6 of _0x15f309) {
    !_0x90b1d6.sessionId ? (_0x90b1d6.loadCache(), !_0x90b1d6.valid ? _0x501428.push(await _0x90b1d6.login()) : await _0x5b2319.wait(200)) : (_0x501428.push(await _0x90b1d6.user_info()), await _0x5b2319.wait(200));
  }
  await Promise.all(_0x501428);
  _0x15f309 = _0x15f309?.["filter"](_0x3639f8 => _0x3639f8?.["valid"]);
  if (!_0x15f309?.["length"]) {
    console.log("\n无可用账号，停止运行\n");
    return;
  }
  console.log("\n================== 用户信息 帐号数：[" + _0x15f309?.["length"] + "]==================\n");
  _0x501428 = [];
  for (let _0x48bb80 of _0x15f309) {
    _0x501428.push(await _0x48bb80.task_tasklist("用户信息"));
    await _0x2e5248(0.2 + Math.random() * 1);
    _0x501428.push(await _0x48bb80.get_unread_msg());
  }
  await Promise.all(_0x501428);
  const _0x3d6fe2 = _0x15f309?.["filter"](_0x576be1 => _0x576be1?.["jobList"]?.["find"](_0x1c67eb => _0x1c67eb?.["name"]?.["includes"]("签到") && _0x1c67eb?.["frequency"] && _0x1c67eb?.["frequency"] > _0x1c67eb?.["finish_times"]));
  if (_0x3d6fe2?.["length"]) {
    console.log("\n================== 每日签到任务开始执行 待执行帐号数：[" + _0x3d6fe2?.["length"] + "]==================\n");
    _0x501428 = [];
    for (let _0x2b97d5 of _0x3d6fe2) {
      _0x501428.push(await _0x2b97d5.task_sign("每日签到"));
      await _0x2e5248(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x501428);
  } else {
    console.log("\n无签到任务 或 当前帐号都已签到过了，无需执行签到任务\n");
  }
  const _0x293aa0 = _0x15f309?.["filter"](_0x38b1da => _0x38b1da?.["jobList"]?.["find"](_0x599af3 => {
    return _0x599af3?.["name"]?.["includes"]("帖子发布") && _0x599af3?.["frequency"] && _0x599af3?.["frequency"] > _0x599af3?.["finish_times"] && _0x14d5cf || _0x599af3?.["name"]?.["includes"]("帖子点赞") && _0x599af3?.["frequency"] && _0x599af3?.["frequency"] > _0x599af3?.["finish_times"];
  }));
  if (_0x293aa0?.["length"]) {
    console.log("\n================== 社区帖子相关任务开始执行 待执行帐号数：[" + _0x293aa0?.["length"] + "]==================\n");
    _0x501428 = [];
    for (let _0xd1f57d of _0x293aa0) {
      _0x501428.push(await _0xd1f57d.task_forum_info("社区帖子列表"));
      await _0x2e5248(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x501428);
  } else console.log("\n无社区帖子相关任务 或 当前帐号都已做完了社区帖子任务，无需执行\n");
  await _0x2e5248(0.2 + Math.random() * 1);
  const _0x5e9f58 = _0x15f309?.["filter"](_0x3837ef => _0x3837ef?.["jobList"]?.["find"](_0x4a208d => {
    return _0x4a208d?.["name"]?.["includes"]("资讯评论") && _0x4a208d?.["frequency"] > _0x4a208d?.["finish_times"] && _0x4d0816 || _0x4a208d?.["name"]?.["includes"]("分享资讯") && _0x4a208d?.["frequency"] && _0x4a208d?.["frequency"] > _0x4a208d?.["finish_times"] || _0x4a208d?.["name"]?.["includes"]("资讯点赞") && _0x4a208d?.["frequency"] && _0x4a208d?.["frequency"] > _0x4a208d?.["finish_times"] || _0x4a208d?.["name"]?.["includes"]("资讯阅读") && _0x4a208d?.["frequency"] && _0x4a208d?.["frequency"] > _0x4a208d?.["finish_times"];
  }));
  if (_0x5e9f58?.["length"]) {
    console.log("\n================== 文章列表相关任务开始执行 待执行帐号数：[" + _0x5e9f58?.["length"] + "]==================\n");
    _0x501428 = [];
    for (let _0xf0085 of _0x5e9f58) {
      console.log("\n开始执行帐号[" + _0xf0085.index + "] 文章任务😄\n");
      _0x501428.push(await _0xf0085.task_articlelist("文章列表"));
      await _0x2e5248(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x501428);
  } else {
    console.log("\n无文章资讯任务 或 当前帐号都已做完了资讯任务，无需执行相关任务\n");
  }
  await _0x2e5248(0.2 + Math.random() * 1);
  const _0x4a4462 = _0x15f309?.["filter"](_0x4bcbb0 => _0x4bcbb0?.["jobList"]?.["find"](_0x1f0315 => {
    return _0x1f0315?.["name"]?.["includes"]("本地服务") && _0x1f0315?.["frequency"] && _0x1f0315?.["frequency"] > _0x1f0315?.["finish_times"];
  }));
  if (_0x4a4462?.["length"]) {
    console.log("\n================== 本地服务任务开始执行 待执行帐号数：[" + _0x4a4462?.["length"] + "]==================\n");
    _0x501428 = [];
    for (let _0x15e551 of _0x4a4462) {
      {
        const _0x58c8af = _0x15e551?.["jobList"]?.["find"](_0x46f810 => {
          return _0x46f810?.["name"]?.["includes"]("本地服务") && _0x46f810?.["frequency"] && _0x46f810?.["frequency"] > _0x46f810?.["finish_times"];
        });
        for (let _0x40e256 = 0; _0x40e256 < _0x58c8af?.["frequency"] - _0x58c8af?.["finish_times"]; _0x40e256++) {
          _0x501428.push(await _0x15e551.task_share("6", undefined, "本地服务"));
          await _0x2e5248(1 + Math.random() * 1);
        }
      }
    }
    await Promise.all(_0x501428);
  } else console.log("\n无本地服务任务 或 当前帐号都已做完了本地服务任务，无需执行相关任务\n");
  console.log("\n================== 删除历史评论任务开始执行 待执行帐号数：[" + _0x15f309?.["length"] + "]==================\n");
  for (let _0x1fad3e of _0x15f309) {
    await _0x1fad3e.get_comment_history();
    await _0x2e5248(1 + Math.random() * 1);
  }
}
class _0x3508ad {
  ["valid"] = false;
  constructor(_0x1d9785) {
    this.index = ++_0x6327a7;
    this.accountId = "";
    this.host = _0xa1d612;
    this.hostname = "https://" + this.host;
    this.key = "FR*r!isE5W";
    const _0x242886 = _0x2eaeb8,
      _0x3c7da3 = Math.floor(Math.random() * _0x242886.length);
    this.artlistdata = _0x242886[_0x3c7da3];
    if (_0x1d9785?.["length"] === 1) {
      if (_0x1d9785[0]?.["includes"]("#")) _0x1d9785 = _0x1d9785[0]?.["split"]("#");else {
        if (_0x1d9785[0]?.["includes"]("&")) {
          _0x1d9785 = _0x1d9785[0]?.["split"]("&");
        }
      }
    }
    if (_0x1d9785[0]?.["length"] === 11) {
      this.account = _0x1d9785[0];
      this.password = _0x1d9785[1];
    } else {
      {
        if (_0x4b4896) this.sessionId = _0x1d9785[1], this.accountId = _0x1d9785[0];else {
          this.sessionId = _0x1d9785[0];
          this.accountId = _0x1d9785[1];
        }
      }
    }
  }
  ["loadCache"]() {
    let _0x114b40 = _0x5315fc(_0x5271c5 + "_config", this.account);
    if (_0x114b40) {
      {
        _0x114b40 = JSON.parse(_0x114b40);
        console.log("账号[" + this.index + "]从缓存读取成功 😄 ，其ID为： " + _0x114b40?.["id"] + "，手机号为：" + this.account);
        this.accountId = _0x114b40?.["id"];
        this.sessionId = _0x114b40?.["sessionId"];
        this.valid = true;
        return;
      }
    }
  }
  async ["txt_api"]() {
    try {
      let _0x2f1bc1 = {
          "method": "GET",
          "url": "https://v1.hitokoto.cn/",
          "qs": {
            "c": "d"
          },
          "headers": {
            "content-type": "multipart/form-data; boundary=---011000010111000001101001"
          },
          "formData": {}
        },
        _0x4f380b = await _0x586c97(_0x2f1bc1, "");
      if (_0x4f380b.id) return _0x4f380b.hitokoto;else {}
    } catch (_0x49b722) {
      console.log(_0x49b722);
    }
  }
  async ["task_tasklist"](_0x135722) {
    let _0x7616b4 = "/api/user_mumber/numberCenter",
      _0x3c322e = _0x123f96.guid(),
      _0x3cb2c1 = _0x123f96.ts13(),
      _0x42f6d7 = _0x7616b4 + "&&" + this.sessionId + "&&" + _0x3c322e + "&&" + _0x3cb2c1 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x403224 = _0x123f96.SHA256_Encrypt(_0x42f6d7);
    try {
      {
        let _0x4ef790 = {
            "method": "GET",
            "url": "" + this.hostname + _0x7616b4 + "?is_new=1",
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x3c322e,
              "X-TIMESTAMP": _0x3cb2c1,
              "X-SIGNATURE": _0x403224,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x22199d = await _0x586c97(_0x4ef790, _0x135722);
        if (_0x22199d.code == 0) {
          if (!this.requestedUserInfo) {
            await this.user_info();
            await _0x2e5248(0.3);
          }
          _0x13d6fa("账号[" + this.index + "],欢迎用户:[" + _0x22199d.data.rst.nick_name + "],当前积分为[" + _0x22199d.data.rst.total_integral + "]");
          _0x2eb464 += "账号[" + this.index + "],欢迎用户:[" + _0x22199d.data.rst.nick_name + "],当前积分为[" + _0x22199d.data.rst.total_integral + "]\n";
          await _0x2e5248(0.3);
          this.jobList = _0x22199d.data.rst.user_task_list?.["map"](_0x3f8284 => {
            return {
              "name": _0x3f8284?.["name"],
              "finish_times": Number(_0x3f8284?.["finish_times"]),
              "frequency": Number(_0x3f8284?.["frequency"]),
              "integral": _0x3f8284?.["integral"],
              "member_task_type": _0x3f8284?.["member_task_type"]
            };
          });
          if (_0x22199d?.["data"]?.["daily_sign_info"]?.["name"]?.["includes"]("签到")) {
            {
              let _0xfb12e9 = _0x22199d?.["data"]?.["daily_sign_info"]?.["daily_sign_list"]?.["find"](_0x3a2e3f => _0x3a2e3f?.["current"])?.["signed"];
              this.jobList.push({
                "name": "每日签到",
                "finish_times": _0xfb12e9 ? 1 : 0,
                "frequency": 1
              });
            }
          }
          _0x13d6fa("账号[" + this.index + "],获取任务列表成功 😄 :");
          await _0x2e5248(0.3);
          let _0x52a6d6 = "";
          await _0x2e5248(0.2 + Math.random() * 1);
          for (let _0x46484a = 0; _0x46484a < this.jobList.length; _0x46484a++) {
            _0x52a6d6 += this.jobList[_0x46484a].name + "[" + this.jobList[_0x46484a].finish_times + "/" + this.jobList[_0x46484a].frequency + "]\n";
          }
          await _0x2e5248(0.3);
          _0x13d6fa(_0x52a6d6);
        } else _0x13d6fa("账号[" + this.index + "],获取任务列表:失败 🙁 了呢,原因：" + _0x22199d?.["message"]), console.log(_0x22199d);
      }
    } catch (_0x5332ad) {
      console.log(_0x5332ad);
    }
  }
  async ["activity_login"](_0x30dc2c) {
    try {
      {
        let _0x1d10e4 = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Public/setAppLogin",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8"
            },
            "body": "uuid=tzmxc&cookie=0&accountId=" + this.accountId + "&sessionId=" + this.sessionId
          },
          _0x58e48a = await _0x586c97(_0x1d10e4, _0x30dc2c, true),
          _0x676746 = _0x58e48a?.["body"];
        _0x676746.status == 1 ? (this.authCookie = _0x58e48a?.["rawHeaders"]?.["filter"](_0x7aa06f => _0x7aa06f?.["includes"]("path=/"))?.["join"](";"), _0x13d6fa("账号[" + this.index + "],授权活动成功 😄"), await this.activity_vote("投票")) : _0x13d6fa("账号[" + this.index + "],授权活动:失败 🙁 了呢,原因：" + JSON.stringify(_0x676746));
      }
    } catch (_0x5e2292) {
      console.log(_0x5e2292);
    }
  }
  async ["activity_vote"](_0x4ceb31) {
    try {
      {
        let _0x1b2149 = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Vote/postVote",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
              "Cookie": this.authCookie
            },
            "body": "uuid=tzmxc&voteids=10461%2C10455%2C10476%2C10448%2C10456"
          },
          _0x3683bf = await _0x586c97(_0x1b2149, _0x4ceb31);
        _0x3683bf.status == 1 ? (_0x13d6fa("账号[" + this.index + "],投票成功 😄"), await this.activity_draw("抽奖")) : (_0x13d6fa("账号[" + this.index + "],投票:失败 🙁 了呢,原因：" + _0x3683bf?.["info"]), await this.activity_get_prize("读取奖品"));
      }
    } catch (_0x3fad1c) {
      console.log(_0x3fad1c);
    }
  }
  async ["activity_draw"](_0x2a1735) {
    try {
      {
        let _0x5ae4bb = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Prize/start",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
              "Cookie": this.authCookie
            },
            "body": "uuid=tzmxc"
          },
          _0x140066 = await _0x586c97(_0x5ae4bb, _0x2a1735);
        if (_0x140066.status == 1) {
          _0x13d6fa("账号[" + this.index + "],抽奖成功 😄：" + JSON.stringify(_0x140066));
        } else _0x13d6fa("账号[" + this.index + "],抽奖失败 🙁 了呢,原因：" + _0x140066?.["info"]);
        await this.activity_get_prize("读取奖品");
      }
    } catch (_0x15259d) {
      console.log(_0x15259d);
    }
  }
  async ["activity_get_prize"](_0x38fb28) {
    try {
      {
        let _0x5d6cff = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Prize/getPrize",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
              "Cookie": this.authCookie
            },
            "body": "uuid=tzmxc"
          },
          _0x5b7cf7 = await _0x586c97(_0x5d6cff, _0x38fb28);
        if (_0x5b7cf7.status == 1) {
          let _0x29ade5 = "";
          for (let _0x207e00 = 0; _0x207e00 < _0x5b7cf7?.["data"]?.["length"]; _0x207e00++) {
            const _0x34070e = _0x5b7cf7?.["data"][_0x207e00];
            _0x29ade5 += "\n奖品名称：" + _0x34070e?.["title"] + "----" + (_0x34070e?.["url"] || _0x34070e?.["time"]) + "----" + (_0x34070e?.["valid"] === "1" ? "未领取" : "已领取") + "----全部信息：" + JSON.stringify(_0x34070e);
          }
          _0x13d6fa("账号[" + this.index + "],读取奖品成功 😄：" + (_0x29ade5 || JSON.stringify(_0x5b7cf7?.["data"])));
        } else _0x13d6fa("账号[" + this.index + "],读取中奖记录失败 🙁 了呢,原因：" + _0x5b7cf7?.["info"]);
      }
    } catch (_0x1fe909) {
      console.log(_0x1fe909);
    }
  }
  async ["task_sign"](_0x41eef9) {
    let _0x59bc63 = "/api/user_mumber/sign",
      _0x2008e0 = _0x123f96.guid(),
      _0x19ee7c = _0x123f96.ts13(),
      _0x399729 = _0x59bc63 + "&&" + this.sessionId + "&&" + _0x2008e0 + "&&" + _0x19ee7c + "&&" + this.key + "&&" + _0x33f0fb,
      _0x26d262 = _0x123f96.SHA256_Encrypt(_0x399729);
    try {
      {
        let _0x293956 = {
            "method": "GET",
            "url": "" + this.hostname + _0x59bc63,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x2008e0,
              "X-TIMESTAMP": _0x19ee7c,
              "X-SIGNATURE": _0x26d262,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x4ac870 = await _0x586c97(_0x293956, _0x41eef9);
        if (_0x4ac870.code == 0) _0x13d6fa("账号[" + this.index + "],签到成功 😄 [" + _0x4ac870.data.signCommonInfo.date + "],获得积分:[" + _0x4ac870.data.signExperience + "]");else {
          _0x13d6fa("账号[" + this.index + "],签到:失败 🙁 了呢,原因：" + _0x4ac870?.["message"]);
          console.log(_0x4ac870);
        }
      }
    } catch (_0x54d7d0) {
      console.log(_0x54d7d0);
    }
  }
  async ["task_forum_info"](_0xbaa955) {
    let _0x113a21 = "/api/forum/forum_list",
      _0x140051 = _0x123f96.guid(),
      _0x5ac7db = _0x123f96.ts13(),
      _0x4d7d1f = _0x113a21 + "&&" + this.sessionId + "&&" + _0x140051 + "&&" + _0x5ac7db + "&&" + this.key + "&&" + _0x33f0fb,
      _0x51c7be = _0x123f96.SHA256_Encrypt(_0x4d7d1f);
    try {
      let _0x3a31ae = {
          "method": "GET",
          "url": "" + this.hostname + _0x113a21 + ("?tenantId=" + _0x33f0fb),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x140051,
            "X-TIMESTAMP": _0x5ac7db,
            "X-SIGNATURE": _0x51c7be,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x12c33e = await _0x586c97(_0x3a31ae, _0xbaa955);
      if (_0x12c33e.code == 0) {
        {
          const _0x1d9e16 = _0x12c33e?.["data"]?.["forum_list"]?.["length"] ? _0x12c33e?.["data"]?.["forum_list"][0]?.["id"] : undefined;
          if (_0x1d9e16) _0x13d6fa("账号[" + this.index + "],获取社区信息成功 😄 ，准备开始获取相关列表"), await this.task_forum_list(_0x1d9e16);else {
            _0x13d6fa("账号[" + this.index + "],获取社区为空 🙁 ，跳过社区任务");
          }
        }
      } else _0x13d6fa("账号[" + this.index + "],获取社区信息:失败 🙁 了呢,原因：" + _0x12c33e?.["message"]), console.log(_0x12c33e);
    } catch (_0x1f999c) {
      console.log(_0x1f999c);
    }
  }
  async ["task_forum_list"](_0x1c7306) {
    let _0xb90d3c = "/api/forum/thread_list",
      _0x5b08cf = _0x123f96.guid(),
      _0xe6710f = _0x123f96.ts13(),
      _0x4bfae2 = _0xb90d3c + "&&" + this.sessionId + "&&" + _0x5b08cf + "&&" + _0xe6710f + "&&" + this.key + "&&" + _0x33f0fb,
      _0x4b4dc7 = _0x123f96.SHA256_Encrypt(_0x4bfae2);
    try {
      let _0x28a38c = {
          "method": "GET",
          "url": "" + this.hostname + _0xb90d3c + ("?forum_id=" + _0x1c7306),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x5b08cf,
            "X-TIMESTAMP": _0xe6710f,
            "X-SIGNATURE": _0x4b4dc7,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x3a10b0 = await _0x586c97(_0x28a38c, "获取帖子");
      if (_0x3a10b0.code == 0) for (let _0x2f820c = 0; _0x2f820c < _0x3a10b0.data.thread_list?.["length"]; _0x2f820c++) {
        {
          if (!this?.["jobList"]?.["find"](_0x4b1872 => {
            return _0x4b1872?.["name"]?.["includes"]("帖子发布") && _0x4b1872?.["frequency"] > _0x4b1872?.["finish_times"] && _0x14d5cf || _0x4b1872?.["name"]?.["includes"]("帖子点赞") && _0x4b1872?.["frequency"] > _0x4b1872?.["finish_times"];
          })) {
            _0x13d6fa("账号[" + this.index + "],社区任务已完成，跳过-----");
            break;
          }
          _0x13d6fa("账号[" + this.index + "],对帖子[" + _0x3a10b0.data.thread_list[_0x2f820c].id + "]操作-----");
          await _0x2e5248(0.3 + Math.random() * 1);
          this?.["jobList"]?.["find"](_0x52b04a => {
            return _0x52b04a?.["name"]?.["includes"]("帖子点赞") && _0x52b04a?.["frequency"] > _0x52b04a?.["finish_times"];
          }) ? (_0x3a10b0.data.thread_list[_0x2f820c].already_liked ? _0x13d6fa("账号[" + this.index + "],之前已经对帖子[" + _0x3a10b0.data.thread_list[_0x2f820c].id + "]点赞过，不能再次点赞") : await this.task_forum_like(_0x3a10b0.data.thread_list[_0x2f820c].id), await _0x2e5248(1 + Math.random() * 1)) : _0x13d6fa("账号[" + this.index + "],无需对帖子点赞");
          this?.["jobList"]?.["find"](_0x255fb1 => {
            return _0x255fb1?.["name"]?.["includes"]("帖子发布") && _0x255fb1?.["frequency"] > _0x255fb1?.["finish_times"] && _0x14d5cf;
          }) ? (await this.task_forum_post(_0x1c7306), await _0x2e5248(1 + Math.random() * 1)) : _0x13d6fa("账号[" + this.index + "],无需发布帖子，可能是 已执行完毕该任务，或者 未开启该任务");
        }
      } else {
        _0x13d6fa("账号[" + this.index + "],获取社区帖子:失败 🙁 了呢,原因：" + _0x3a10b0?.["message"]);
        console.log(_0x3a10b0);
      }
    } catch (_0x47eebf) {
      console.log(_0x47eebf);
    }
  }
  async ["task_forum_like"](_0x4eda1b) {
    let _0x1c456b = "/api/forum/like",
      _0x35a725 = _0x123f96.guid(),
      _0x4cf452 = _0x123f96.ts13(),
      _0x1a55d0 = _0x1c456b + "&&" + this.sessionId + "&&" + _0x35a725 + "&&" + _0x4cf452 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x1ae596 = _0x123f96.SHA256_Encrypt(_0x1a55d0);
    try {
      {
        let _0x14cede = _0x3442a7();
        _0x14cede.append("target_type", "1");
        _0x14cede.append("target_id", _0x4eda1b);
        let _0x4df6e9 = {
          "method": "POST",
          "url": "" + this.hostname + _0x1c456b,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x35a725,
            "X-TIMESTAMP": _0x4cf452,
            "X-SIGNATURE": _0x1ae596,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0x14cede
        };
        _0x4df6e9.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x14cede.getBoundary();
        let _0x326198 = await _0x586c97(_0x4df6e9, "点赞帖子");
        if (_0x326198.code == 0) {
          {
            const _0x275971 = this?.["jobList"]?.["find"](_0x3df6ae => {
              return _0x3df6ae?.["name"]?.["includes"]("帖子点赞") && _0x3df6ae?.["frequency"] > _0x3df6ae?.["finish_times"];
            });
            _0x275971.finish_times++;
            _0x13d6fa("账号[" + this.index + "],点赞帖子成功 😄 :[" + _0x4eda1b + "]");
          }
        } else _0x13d6fa("账号[" + this.index + "],点赞帖子:失败 🙁 了呢,原因：" + _0x326198?.["message"]), console.log(_0x326198);
      }
    } catch (_0x435789) {
      console.log(_0x435789);
    }
  }
  async ["task_forum_post"](_0xca9f66) {
    let _0x1537cc = "/api/forum/post_thread",
      _0x3bcea6 = _0x123f96.guid(),
      _0x38fcc9 = _0x123f96.ts13(),
      _0x2f1fee = _0x1537cc + "&&" + this.sessionId + "&&" + _0x3bcea6 + "&&" + _0x38fcc9 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x307ae2 = _0x123f96.SHA256_Encrypt(_0x2f1fee);
    try {
      {
        let _0xeba88c = _0x3442a7();
        _0xeba88c.append("forum_id", _0xca9f66);
        _0xeba88c.append("title", "签到");
        _0xeba88c.append("content", "今日打卡");
        _0xeba88c.append("attachments", "");
        _0xeba88c.append("location_name", "{}");
        let _0x552465 = {
          "method": "POST",
          "url": "" + this.hostname + _0x1537cc,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3bcea6,
            "X-TIMESTAMP": _0x38fcc9,
            "X-SIGNATURE": _0x307ae2,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryMdIuuLGEa01BfEzM",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0xeba88c
        };
        _0x552465.headers["Content-Type"] = "multipart/form-data; boundary=" + _0xeba88c.getBoundary();
        let _0x3e0854 = await _0x586c97(_0x552465, "发布帖子");
        if (_0x3e0854.code == 0) {
          {
            const _0x3ea7e7 = this?.["jobList"]?.["find"](_0x238caa => {
              return _0x238caa?.["name"]?.["includes"]("帖子发布") && _0x238caa?.["frequency"] > _0x238caa?.["finish_times"];
            });
            _0x3ea7e7.finish_times++;
            _0x13d6fa("账号[" + this.index + "],发布帖子成功 😄 :[" + _0xca9f66 + "]");
            await this.deleteForumPost(_0x3e0854?.["data"]?.["thread_id"]);
          }
        } else _0x13d6fa("账号[" + this.index + "],发布帖子:失败 🙁 了呢,原因：" + _0x3e0854?.["message"]), console.log(_0x3e0854);
      }
    } catch (_0x3d8639) {
      console.log(_0x3d8639);
    }
  }
  async ["deleteForumPost"](_0xc0fbbc) {
    let _0x42835b = "/api/forum/delete_thread",
      _0x17ee29 = _0x123f96.guid(),
      _0x5e3002 = _0x123f96.ts13(),
      _0xcb16d9 = _0x42835b + "&&" + this.sessionId + "&&" + _0x17ee29 + "&&" + _0x5e3002 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x2350b1 = _0x123f96.SHA256_Encrypt(_0xcb16d9);
    try {
      let _0x23485c = _0x3442a7();
      _0x23485c.append("thread_id", _0xc0fbbc);
      let _0x3fbcdd = {
        "method": "POST",
        "url": "" + this.hostname + _0x42835b,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x17ee29,
          "X-TIMESTAMP": _0x5e3002,
          "X-SIGNATURE": _0x2350b1,
          "X-TENANT-ID": _0x33f0fb,
          "User-Agent": _0x20abf8,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryi1cQvxsAzoTagcpx",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x23485c
      };
      _0x3fbcdd.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x23485c.getBoundary();
      let _0x5a9247 = await _0x586c97(_0x3fbcdd, "删除帖子");
      if (_0x5a9247.code == 0) {
        _0x13d6fa("账号[" + this.index + "],删除帖子成功 😄 :[" + _0xc0fbbc + "]");
      } else _0x13d6fa("账号[" + this.index + "],删除帖子:失败 🙁 了呢,原因：" + _0x5a9247?.["message"]), console.log(_0x5a9247);
    } catch (_0x10dbf3) {
      console.log(_0x10dbf3);
    }
  }
  async ["task_articlelist"](_0x1f1fce) {
    let _0x314ac3 = "/api/article/channel_list",
      _0x1016e7 = _0x123f96.guid(),
      _0x334fdf = _0x123f96.ts13(),
      _0x48d462 = _0x314ac3 + "&&" + this.sessionId + "&&" + _0x1016e7 + "&&" + _0x334fdf + "&&" + this.key + "&&" + _0x33f0fb,
      _0x1668f4 = _0x123f96.SHA256_Encrypt(_0x48d462);
    try {
      let _0x28bae2 = {
          "method": "GET",
          "url": "" + this.hostname + _0x314ac3 + ("?channel_id=" + this.artlistdata + "&isDiangHao=false&is_new=" + (Math.random() >= 0.5) + "&list_count=" + Math.floor(Math.random() * 10) + "&size=10"),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1016e7,
            "X-TIMESTAMP": _0x334fdf,
            "X-SIGNATURE": _0x1668f4,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x39e1e9 = await _0x586c97(_0x28bae2, _0x1f1fce);
      if (_0x39e1e9.code == 0) {
        {
          let _0x3d0fac = false;
          for (let _0x2cbeb4 = 0; _0x2cbeb4 < _0x39e1e9.data.article_list?.["length"]; _0x2cbeb4++) {
            {
              if (!this?.["jobList"]?.["find"](_0x4b1a67 => {
                return _0x4b1a67?.["name"]?.["includes"]("资讯评论") && _0x4b1a67?.["frequency"] > _0x4b1a67?.["finish_times"] && _0x4d0816 || _0x4b1a67?.["name"]?.["includes"]("分享资讯") && _0x4b1a67?.["frequency"] > _0x4b1a67?.["finish_times"] || _0x4b1a67?.["name"]?.["includes"]("资讯点赞") && _0x4b1a67?.["frequency"] > _0x4b1a67?.["finish_times"] || _0x4b1a67?.["name"]?.["includes"]("资讯阅读") && _0x4b1a67?.["frequency"] > _0x4b1a67?.["finish_times"];
              })) {
                _0x13d6fa("账号[" + this.index + "],文章任务已完成，跳过后续文章-----");
                break;
              }
              await this.task_comment_pre();
              await _0x2e5248(1 + Math.random() * 1);
              _0x13d6fa("账号[" + this.index + "],对 第" + (_0x2cbeb4 + 1) + "篇 文章[" + _0x39e1e9.data.article_list[_0x2cbeb4].id + "]操作-----");
              let _0x5488d8 = _0x39e1e9.data.article_list[_0x2cbeb4].id;
              await this.task_read(_0x5488d8);
              await _0x2e5248(1 + Math.random() * 1);
              if (this?.["jobList"]?.["find"](_0x25c327 => {
                return _0x25c327?.["name"]?.["includes"]("资讯点赞") && _0x25c327?.["frequency"] > _0x25c327?.["finish_times"];
              })) {
                if (_0x39e1e9.data.article_list[_0x2cbeb4].liked) _0x13d6fa("账号[" + this.index + "],之前已经对资讯[" + _0x5488d8 + "]点赞过，不能再次点赞");else !_0x39e1e9.data.article_list[_0x2cbeb4].like_enabled && !_0x2467e9 ? _0x13d6fa("账号[" + this.index + "],资讯[" + _0x5488d8 + "]未开启点赞功能，无法进行点赞") : await this.task_like(_0x5488d8);
                await _0x2e5248(1 + Math.random() * 1);
              }
              if (!_0x3d0fac) {
                {
                  if (_0x4d0816 && !this.commentError && this?.["jobList"]?.["find"](_0x198933 => {
                    return _0x198933?.["name"]?.["includes"]("资讯评论") && _0x198933?.["frequency"] > _0x198933?.["finish_times"];
                  })) await this.task_comment(_0x5488d8), await _0x2e5248(2 + Math.random() * 1);else {
                    {
                      if (this.commentError) {
                        _0x13d6fa("账号[" + this.index + "],评论文章遇见了一些问题 🙁 ，暂无解决方法，即将跳过后续评论，如果您有解决方法，欢迎提供，错误信息：该篇新闻不支持评论【评论失败，请重新进入当前页面！】");
                        _0x3d0fac = true;
                      }
                    }
                  }
                }
              } else {
                {
                  if (!this?.["jobList"]?.["find"](_0x3332b1 => {
                    return _0x3332b1?.["name"]?.["includes"]("分享资讯") && _0x3332b1?.["frequency"] > _0x3332b1?.["finish_times"] || _0x3332b1?.["name"]?.["includes"]("资讯点赞") && _0x3332b1?.["frequency"] > _0x3332b1?.["finish_times"] || _0x3332b1?.["name"]?.["includes"]("资讯阅读") && _0x3332b1?.["frequency"] > _0x3332b1?.["finish_times"];
                  })) break;
                }
              }
              if (this?.["jobList"]?.["find"](_0x1f2fe1 => {
                return _0x1f2fe1?.["name"]?.["includes"]("分享资讯") && _0x1f2fe1?.["frequency"] > _0x1f2fe1?.["finish_times"];
              })) {
                {
                  if (!_0x39e1e9.data.article_list[_0x2cbeb4].share_enabled && !_0x2467e9) {
                    _0x13d6fa("账号[" + this.index + "],文章[" + _0x5488d8 + "]未开启分享功能，无法进行分享");
                  } else await this.task_share("3", _0x5488d8, "分享");
                }
              }
            }
          }
        }
      } else _0x13d6fa("账号[" + this.index + "],获取文章:失败 🙁 了呢,原因：" + _0x39e1e9?.["message"]), console.log(_0x39e1e9);
    } catch (_0x50746e) {
      console.log(_0x50746e);
    }
  }
  async ["get_comment_history"](_0x384c50) {
    let _0x47b700 = "/api/account_comment/comment_list",
      _0x1a7094 = _0x123f96.guid(),
      _0x1357c4 = _0x123f96.ts13(),
      _0x545f9f = _0x47b700 + "&&" + this.sessionId + "&&" + _0x1a7094 + "&&" + _0x1357c4 + "&&" + this.key + "&&" + _0x33f0fb,
      _0xd2fa9c = _0x123f96.SHA256_Encrypt(_0x545f9f);
    try {
      let _0x5d3fee = {
          "method": "GET",
          "url": "" + this.hostname + _0x47b700 + "?size=999",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1a7094,
            "X-TIMESTAMP": _0x1357c4,
            "X-SIGNATURE": _0xd2fa9c,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x384933 = await _0x586c97(_0x5d3fee, _0x384c50);
      if (_0x384933.code == 0) {
        let _0x747213 = _0x384933.data.comment_list?.["length"];
        for (let _0x4efb1c = 0; _0x4efb1c < _0x384933.data.comment_list?.["length"]; _0x4efb1c++) {
          {
            _0x13d6fa("账号[" + this.index + "],对 第" + (_0x4efb1c + 1) + "个 评论[" + _0x384933.data.comment_list[_0x4efb1c].id + "]删除，删除总数量：" + _0x384933.data.comment_list?.["length"] + "，待删除：" + _0x747213 + " 条-----");
            let _0xb7d14f = _0x384933.data.comment_list[_0x4efb1c].id;
            await this.deleteComment(_0xb7d14f);
            _0x747213--;
            await _0x2e5248(1 + Math.random() * 1);
          }
        }
      } else {
        _0x13d6fa("账号[" + this.index + "],删除评论:失败 🙁 了呢,原因：" + _0x384933?.["message"]);
        console.log(_0x384933);
      }
    } catch (_0x14bfb2) {
      console.log(_0x14bfb2);
    }
  }
  async ["task_read"](_0x1ccb66) {
    let _0x4c726c = "/api/article/detail",
      _0x23e69f = _0x123f96.guid(),
      _0x6daaef = _0x123f96.ts13(),
      _0x1cf91d = _0x4c726c + "&&" + this.sessionId + "&&" + _0x23e69f + "&&" + _0x6daaef + "&&" + this.key + "&&" + _0x33f0fb,
      _0x4af95 = _0x123f96.SHA256_Encrypt(_0x1cf91d);
    try {
      {
        let _0x15a73e = {
            "method": "GET",
            "url": "" + this.hostname + _0x4c726c + "?id=" + _0x1ccb66,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x23e69f,
              "X-TIMESTAMP": _0x6daaef,
              "X-SIGNATURE": _0x4af95,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x1a1836 = await _0x586c97(_0x15a73e, "阅读文章");
        if (_0x1a1836.code == 0) {
          {
            const _0x55f3aa = this?.["jobList"]?.["find"](_0x4cec70 => {
              return _0x4cec70?.["name"]?.["includes"]("资讯阅读") && _0x4cec70?.["frequency"] > _0x4cec70?.["finish_times"];
            });
            _0x55f3aa && _0x55f3aa.finish_times++;
            _0x13d6fa("账号[" + this.index + "],阅读文章成功 😄 :[" + _0x1a1836.data.article.id + "]");
          }
        } else _0x13d6fa("账号[" + this.index + "],阅读文章:失败 🙁 了呢,原因：" + _0x1a1836?.["message"]);
      }
    } catch (_0x541872) {
      console.log(_0x541872);
    }
  }
  async ["task_like"](_0x157206) {
    let _0x55061b = "/api/favorite/like",
      _0x13fa48 = _0x123f96.guid(),
      _0x328744 = _0x123f96.ts13(),
      _0xa5bbd8 = _0x55061b + "&&" + this.sessionId + "&&" + _0x13fa48 + "&&" + _0x328744 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x346a4f = _0x123f96.SHA256_Encrypt(_0xa5bbd8);
    try {
      let _0x2d367e = {
          "method": "POST",
          "url": "" + this.hostname + _0x55061b,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x13fa48,
            "X-TIMESTAMP": _0x328744,
            "X-SIGNATURE": _0x346a4f,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "action": "true",
            "id": _0x157206
          }
        },
        _0x529653 = await _0x586c97(_0x2d367e, "点赞文章");
      if (_0x529653.code == 0) {
        const _0x130849 = this?.["jobList"]?.["find"](_0x10e613 => {
          return _0x10e613?.["name"]?.["includes"]("资讯点赞") && _0x10e613?.["frequency"] > _0x10e613?.["finish_times"];
        });
        _0x130849.finish_times++;
        _0x13d6fa("账号[" + this.index + "],点赞文章成功 😄 :[" + _0x157206 + "]");
      } else _0x13d6fa("账号[" + this.index + "],用户查询:失败 🙁 了呢,原因：" + _0x529653?.["message"]), console.log(_0x529653);
    } catch (_0x2efb78) {
      console.log(_0x2efb78);
    }
  }
  async ["RSA_Encrypt"](_0x5121bd) {
    const _0x4ab272 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0x2d0421 = _0x123f96.RSA_Encrypt(_0x5121bd, _0x4ab272);
    return _0x2d0421;
  }
  async ["loginByCode"](_0x117bac, _0x246b21) {
    try {
      let _0x4ec973 = "/api/zbtxz/login",
        _0x38a2a7 = _0x123f96.guid(),
        _0xbf16a = _0x123f96.ts13(),
        _0x59fc75 = _0x4ec973 + "&&" + (this.sessionId || _0x117bac) + "&&" + _0x38a2a7 + "&&" + _0xbf16a + "&&" + this.key + "&&" + _0x33f0fb,
        _0x58b8d0 = _0x123f96.SHA256_Encrypt(_0x59fc75),
        _0x933a41 = {
          "method": "POST",
          "url": "" + this.hostname + _0x4ec973,
          "headers": {
            "X-SESSION-ID": "" + (this.sessionId || _0x117bac),
            "X-REQUEST-ID": _0x38a2a7,
            "X-TIMESTAMP": _0xbf16a,
            "X-SIGNATURE": _0x58b8d0,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive"
          },
          "form": "code=" + _0x246b21
        },
        _0x2ac8f1 = await _0x586c97(_0x933a41, "取Token");
      if (_0x2ac8f1.code == 0) {
        {
          this.valid = true;
          this.sessionId = _0x2ac8f1.data.session.id;
          this.accountId = _0x2ac8f1.data.session.account || _0x2ac8f1.data.session.account_id;
          _0x2289ba(_0x5271c5 + "_config", this.account, JSON.stringify({
            "id": this.accountId,
            "sessionId": this.sessionId
          }));
          _0x13d6fa("账号[" + this.index + "],取Token成功 😄 ");
        }
      } else this.valid = false, _0x13d6fa("账号[" + this.index + "],取Token:失败 🙁 了呢,原因：" + _0x2ac8f1?.["message"]), console.log(_0x2ac8f1);
    } catch (_0x25fc6a) {
      console.log(_0x25fc6a);
    }
  }
  async ["loginInit"](_0x1c4d59) {
    try {
      {
        const _0x20d50e = "";
        let _0x1c678d = "/api/account/init",
          _0x3c69b3 = _0x123f96.guid(),
          _0x388d9e = _0x123f96.ts13(),
          _0x3761ff = _0x1c678d + "&&" + _0x3c69b3 + "&&" + _0x388d9e + "&&" + this.key + "&&" + _0x33f0fb,
          _0x4be2c3 = _0x123f96.SHA256_Encrypt(_0x3761ff),
          _0x5e76a6 = {
            "method": "POST",
            "url": "" + this.hostname + _0x1c678d,
            "headers": {
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-SIGNATURE": _0x4be2c3,
              "X-REQUEST-ID": _0x3c69b3,
              "Content-Length": _0x20d50e?.["length"],
              "X-SESSION-ID": "",
              "X-TENANT-ID": _0x33f0fb,
              "X-TIMESTAMP": _0x388d9e
            },
            "form": _0x20d50e
          };
        this.authCookie && (_0x5e76a6.headers.Cookie = this.authCookie);
        let _0x4c7e46 = await _0x586c97(_0x5e76a6, "登录初始化");
        _0x4c7e46.code == 0 ? (_0x13d6fa("账号[" + this.index + "],登录初始化成功 😄 "), _0x4ea39e = _0x4c7e46.data.session.id, await this.loginByCode(_0x4c7e46.data.session.id, _0x1c4d59)) : (this.valid = false, _0x13d6fa("账号[" + this.index + "],登录初始化:失败 🙁 了呢,原因：" + _0x4c7e46?.["message"]));
      }
    } catch (_0x10b15b) {
      console.log(_0x10b15b);
    }
  }
  async ["login"]() {
    let _0x773f4d = "/web/oauth/credential_auth",
      _0x2c11ce = _0x123f96.guid(),
      _0x10434f = _0x123f96.ts13(),
      _0x419d43 = _0x773f4d + "&&" + _0x2c11ce + "&&" + _0x10434f + "&&" + this.key + "&&" + _0x33f0fb,
      _0x9aea5f = _0x123f96.SHA256_Encrypt(_0x419d43);
    try {
      {
        let _0x4fb96e = {
          "method": "POST",
          "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
          "headers": {
            "X-TIMESTAMP": _0x10434f,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x9aea5f,
            "X-REQUEST-ID": _0x2c11ce
          },
          "form": "client_id=" + (_0x169c04 || "10001") + "&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account
        };
        this.authCookie && (_0x4fb96e.headers.Cookie = this.authCookie);
        let _0x7b7253 = await _0x586c97(_0x4fb96e, "登录");
        _0x7b7253.code == 0 ? (_0x13d6fa("账号[" + this.index + "],登录成功 😄 "), !_0x4ea39e ? await this.loginInit(_0x7b7253.data.authorization_code.code) : await this.loginByCode(_0x4ea39e, _0x7b7253.data.authorization_code.code)) : (this.valid = false, _0x13d6fa("账号[" + this.index + "],登录:失败 🙁 了呢,原因：" + _0x7b7253?.["message"]), console.log(_0x7b7253));
      }
    } catch (_0x115b58) {
      console.log(_0x115b58);
    }
  }
  async ["app_start"]() {
    let _0x164c5c = "/api/app_start_page/list/new",
      _0x1c10d3 = _0x123f96.guid(),
      _0x20dd30 = _0x123f96.ts13(),
      _0x3f3792 = _0x164c5c + "&&" + _0x154f8e + "&&" + _0x1c10d3 + "&&" + _0x20dd30 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x12f742 = _0x123f96.SHA256_Encrypt(_0x3f3792);
    try {
      let _0x14f813 = {
          "method": "GET",
          "url": "" + this.hostname + _0x164c5c + "?height=2206&width=1080",
          "headers": {
            "X-SESSION-ID": "" + _0x154f8e,
            "X-REQUEST-ID": _0x1c10d3,
            "X-TIMESTAMP": _0x20dd30,
            "X-SIGNATURE": _0x12f742,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x1ac042 = await _0x586c97(_0x14f813, "App启动中");
      if (_0x1ac042.code == 0) {
        _0x13d6fa("账号[" + this.index + "],App启动成功 😄 ");
      } else _0x13d6fa("账号[" + this.index + "],App启动:失败 🙁 了呢,原因：" + _0x1ac042?.["message"]);
    } catch (_0x37cbae) {
      console.log(_0x37cbae);
    }
  }
  async ["web_start"]() {
    let _0x442fc1 = "/web/init",
      _0x4ad3e6 = _0x123f96.guid(),
      _0x3edbbe = _0x123f96.ts13(),
      _0x37adaa = _0x442fc1 + "&&" + _0x154f8e + "&&" + _0x4ad3e6 + "&&" + _0x3edbbe + "&&" + this.key + "&&" + _0x33f0fb,
      _0x4dfa69 = _0x123f96.SHA256_Encrypt(_0x37adaa);
    try {
      {
        let _0x2d6ef2 = {
            "method": "GET",
            "url": "https://passport.tmuyun.com/web/init?client_id=" + _0x169c04,
            "headers": {
              "X-SESSION-ID": "" + _0x154f8e,
              "X-REQUEST-ID": _0x4ad3e6,
              "X-TIMESTAMP": _0x3edbbe,
              "X-SIGNATURE": _0x4dfa69,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": "passport.tmuyun.com",
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x12a664 = await _0x586c97(_0x2d6ef2, "Web初始化中", true),
          _0x33f436 = _0x12a664?.["body"];
        if (_0x33f436.code == 0) {
          {
            let _0x143090 = _0x12a664?.["rawHeaders"]?.["find"](_0x11911f => _0x11911f?.["includes"]("SESSION"));
            _0x143090 && (this.authCookie = _0x143090);
            _0x13d6fa("账号[" + this.index + "],Web初始化成功 😄 ");
          }
        } else _0x13d6fa("账号[" + this.index + "],Web初始化:失败 🙁 了呢,原因：" + _0x33f436?.["message"]);
      }
    } catch (_0x3d2798) {
      console.log(_0x3d2798);
    }
  }
  async ["iframe_start"]() {
    let _0x2b0de0 = "/api/bullet_frame/detail",
      _0xf944db = _0x123f96.guid(),
      _0x314dd9 = _0x123f96.ts13(),
      _0x5dd681 = _0x2b0de0 + "&&" + _0x154f8e + "&&" + _0xf944db + "&&" + _0x314dd9 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x4027aa = _0x123f96.SHA256_Encrypt(_0x5dd681);
    try {
      {
        let _0xedc81a = {
            "method": "GET",
            "url": "" + this.hostname + _0x2b0de0,
            "headers": {
              "X-SESSION-ID": "" + _0x154f8e,
              "X-REQUEST-ID": _0xf944db,
              "X-TIMESTAMP": _0x314dd9,
              "X-SIGNATURE": _0x4027aa,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x234992 = await _0x586c97(_0xedc81a, "启动WebView中");
        _0x234992.code == 0 ? _0x13d6fa("账号[" + this.index + "],启动WebView成功 😄 ") : _0x13d6fa("账号[" + this.index + "],启动WebView:失败 🙁 了呢,原因：" + _0x234992?.["message"]);
      }
    } catch (_0x18b1e9) {
      console.log(_0x18b1e9);
    }
  }
  async ["get_app_version"]() {
    let _0x1ab59a = "/api/app_version/detail",
      _0x55f355 = _0x123f96.guid(),
      _0x39c163 = _0x123f96.ts13(),
      _0x1deeae = _0x1ab59a + "&&" + _0x154f8e + "&&" + _0x55f355 + "&&" + _0x39c163 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x7abc82 = _0x123f96.SHA256_Encrypt(_0x1deeae);
    try {
      let _0x23a26b = {
          "method": "GET",
          "url": "" + this.hostname + _0x1ab59a,
          "headers": {
            "X-SESSION-ID": "" + _0x154f8e,
            "X-REQUEST-ID": _0x55f355,
            "X-TIMESTAMP": _0x39c163,
            "X-SIGNATURE": _0x7abc82,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x1fa289 = await _0x586c97(_0x23a26b, "获取版本信息中");
      _0x1fa289.code == 0 ? _0x13d6fa("账号[" + this.index + "],获取版本信息成功 😄 ") : _0x13d6fa("账号[" + this.index + "],获取版本信息:失败 🙁 了呢,原因：" + _0x1fa289?.["message"]);
    } catch (_0x5be35c) {
      console.log(_0x5be35c);
    }
  }
  async ["config_get"]() {
    let _0x306314 = "/api/app_version_customize_config/mine",
      _0x5aaa12 = _0x123f96.guid(),
      _0x48af50 = _0x123f96.ts13(),
      _0x2e8519 = _0x306314 + "&&" + _0x154f8e + "&&" + _0x5aaa12 + "&&" + _0x48af50 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x261687 = _0x123f96.SHA256_Encrypt(_0x2e8519);
    try {
      let _0x15f5cc = {
          "method": "GET",
          "url": "" + this.hostname + _0x306314,
          "headers": {
            "X-SESSION-ID": "" + _0x154f8e,
            "X-REQUEST-ID": _0x5aaa12,
            "X-TIMESTAMP": _0x48af50,
            "X-SIGNATURE": _0x261687,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x52d6ee = await _0x586c97(_0x15f5cc, "获取App配置中");
      _0x52d6ee.code == 0 ? _0x13d6fa("账号[" + this.index + "],获取App配置成功 😄 ") : _0x13d6fa("账号[" + this.index + "],获取App配置:失败 🙁 了呢, 原因：" + _0x52d6ee?.["message"]);
    } catch (_0x5f509d) {
      console.log(_0x5f509d);
    }
  }
  async ["get_unread_msg"]() {
    let _0x5a2dee = "/api/chuanbo/unread",
      _0x1213de = _0x123f96.guid(),
      _0x280995 = _0x123f96.ts13(),
      _0x549458 = _0x5a2dee + "&&" + this.sessionId + "&&" + _0x1213de + "&&" + _0x280995 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x1b4b38 = _0x123f96.SHA256_Encrypt(_0x549458);
    try {
      let _0x2ee9bd = {
          "method": "GET",
          "url": "" + this.hostname + _0x5a2dee,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1213de,
            "X-TIMESTAMP": _0x280995,
            "X-SIGNATURE": _0x1b4b38,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x5d050e = await _0x586c97(_0x2ee9bd, "获取未读信息");
      _0x5d050e.code == 0 ? _0x13d6fa("账号[" + this.index + "],获取未读信息成功 😄 ") : _0x13d6fa("账号[" + this.index + "],获取未读信息:失败 🙁 了呢,原因：" + _0x5d050e?.["message"]);
    } catch (_0x2550e5) {
      console.log(_0x2550e5);
    }
  }
  async ["task_comment_pre"]() {
    let _0x522362 = "/api/app_feature_switch/list",
      _0xd055e = _0x123f96.guid(),
      _0x57332f = _0x123f96.ts13(),
      _0x44f369 = _0x522362 + "&&" + this.sessionId + "&&" + _0xd055e + "&&" + _0x57332f + "&&" + this.key + "&&" + _0x33f0fb,
      _0x27cce5 = _0x123f96.SHA256_Encrypt(_0x44f369);
    try {
      let _0x2cd09f = {
          "method": "GET",
          "url": "" + this.hostname + _0x522362,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xd055e,
            "X-TIMESTAMP": _0x57332f,
            "X-SIGNATURE": _0x27cce5,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x1e59e3 = await _0x586c97(_0x2cd09f, "文章准备工作");
      _0x1e59e3.code == 0 ? _0x13d6fa("账号[" + this.index + "],文章准备工作成功 😄 ") : _0x13d6fa("账号[" + this.index + "],文章准备工作:失败 🙁 了呢,原因：" + _0x1e59e3?.["message"]);
    } catch (_0x3eb2d1) {
      console.log(_0x3eb2d1);
    }
  }
  async ["task_comment"](_0x559ee8) {
    let _0x2daeb8 = _0x4eaca8 ? await this.txt_api() : _0x4817af[Math.floor(Math.random() * _0x4817af?.["length"])],
      _0x1a9c27 = "/api/comment/create",
      _0x3db88a = _0x123f96.guid(),
      _0x47b75a = _0x123f96.ts13(),
      _0x52f2cb = _0x1a9c27 + "&&" + this.sessionId + "&&" + _0x3db88a + "&&" + _0x47b75a + "&&" + this.key + "&&" + _0x33f0fb,
      _0x2ac162 = _0x123f96.SHA256_Encrypt(_0x52f2cb);
    try {
      {
        let _0x154406 = {
            "method": "POST",
            "url": "" + this.hostname + _0x1a9c27,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x3db88a,
              "X-TIMESTAMP": _0x47b75a,
              "X-SIGNATURE": _0x2ac162,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            },
            "form": {
              "channel_article_id": _0x559ee8,
              "content": _0x2daeb8
            }
          },
          _0x2b3818 = await _0x586c97(_0x154406, "评论");
        if (_0x2b3818.code == 0) {
          const _0x40b576 = this?.["jobList"]?.["find"](_0x22c751 => {
            return _0x22c751?.["name"]?.["includes"]("资讯评论") && _0x22c751?.["frequency"] > _0x22c751?.["finish_times"];
          });
          _0x40b576.finish_times++;
          _0x13d6fa("账号[" + this.index + "],评论成功 😄 [" + _0x2daeb8 + "]");
          const _0x1d4575 = _0x2b3818?.["data"]?.["comment"]?.["id"];
          await _0x2e5248(1 + Math.random() * 1);
          await this.deleteComment(_0x1d4575);
        } else _0x13d6fa("账号[" + this.index + "],评论:失败 🙁 了呢,原因：" + _0x2b3818?.["message"]), this.commentError = _0x2b3818?.["message"]?.["includes"]("请重新进入当前页面");
      }
    } catch (_0x43d416) {
      console.log(_0x43d416);
    }
  }
  async ["deleteComment"](_0x485e4d) {
    let _0x530c34 = "/api/comment/delete",
      _0x340953 = _0x123f96.guid(),
      _0x4a8fad = _0x123f96.ts13(),
      _0x1e4707 = _0x530c34 + "&&" + this.sessionId + "&&" + _0x340953 + "&&" + _0x4a8fad + "&&" + this.key + "&&" + _0x33f0fb,
      _0x1d8d35 = _0x123f96.SHA256_Encrypt(_0x1e4707);
    try {
      let _0x5e50a1 = {
          "method": "POST",
          "url": "" + this.hostname + _0x530c34,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x340953,
            "X-TIMESTAMP": _0x4a8fad,
            "X-SIGNATURE": _0x1d8d35,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "comment_id": _0x485e4d
          }
        },
        _0x1b0a20 = await _0x586c97(_0x5e50a1, "删除评论");
      _0x1b0a20.code == 0 ? _0x13d6fa("账号[" + this.index + "], 删除评论成功 😄 ") : _0x13d6fa("账号[" + this.index + "],删除评论失败 🙁 了呢,原因：" + _0x1b0a20?.["message"]);
    } catch (_0x14754d) {
      console.log(_0x14754d);
    }
  }
  async ["task_share"](_0x4eefd6, _0x1761a3, _0x5ad624) {
    let _0x1d8028 = "/api/user_mumber/doTask",
      _0x78dbd0 = _0x123f96.guid(),
      _0x4639d9 = _0x123f96.ts13(),
      _0xfb10c5 = _0x1d8028 + "&&" + this.sessionId + "&&" + _0x78dbd0 + "&&" + _0x4639d9 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x5e6a2d = _0x123f96.SHA256_Encrypt(_0xfb10c5);
    try {
      let _0x57c3b9 = {
          "method": "POST",
          "url": "" + this.hostname + _0x1d8028,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x78dbd0,
            "X-TIMESTAMP": _0x4639d9,
            "X-SIGNATURE": _0x5e6a2d,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "memberType": _0x4eefd6,
            "member_type": _0x4eefd6,
            "target_id": _0x1761a3
          }
        },
        _0x16d357 = await _0x586c97(_0x57c3b9, _0x5ad624);
      if (_0x16d357.code == 0) {
        const _0x45362e = this?.["jobList"]?.["find"](_0x53b595 => {
          return _0x53b595?.["name"]?.["includes"](_0x4eefd6 === "3" ? "分享资讯" : "使用本地服务") && _0x53b595?.["frequency"] > _0x53b595?.["finish_times"];
        });
        _0x45362e && _0x45362e.finish_times++;
        _0x13d6fa("账号[" + this.index + "]," + _0x5ad624 + "成功 😄 ");
        _0x16d357.data && "账号[" + this.index + "]," + _0x5ad624 + ("执行完毕共获得:[" + _0x16d357.data.score_notify.integral + "]");
      } else _0x13d6fa("账号[" + this.index + "], " + _0x5ad624 + " :失败 🙁 了呢,原因：" + _0x16d357?.["message"]), console.log(_0x16d357);
    } catch (_0x1c37df) {
      console.log(_0x1c37df);
    }
  }
  async ["user_info"]() {
    let _0x710026 = "/api/user_mumber/account_detail",
      _0x5ac777 = _0x123f96.guid(),
      _0x3bc8e7 = _0x123f96.ts13(),
      _0x4bc869 = _0x710026 + "&&" + this.sessionId + "&&" + _0x5ac777 + "&&" + _0x3bc8e7 + "&&" + this.key + "&&" + _0x33f0fb,
      _0xa3a706 = _0x123f96.SHA256_Encrypt(_0x4bc869);
    try {
      {
        let _0x28739f = {
            "method": "GET",
            "url": "" + this.hostname + _0x710026,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x5ac777,
              "X-TIMESTAMP": _0x3bc8e7,
              "X-SIGNATURE": _0xa3a706,
              "X-TENANT-ID": _0x33f0fb,
              "User-Agent": _0x20abf8,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x1af5ac = await _0x586c97(_0x28739f, "用户信息");
        if (_0x1af5ac.code == 0) this.valid = true, this.requestedUserInfo = true, _0x13d6fa("账号[" + this.index + "],验证成功 😄 ，账号可正常使用，[" + _0x1af5ac.data.rst.nick_name + "]"), _0x1af5ac.data.rst.ref_user_uid == "" && (await this.share_code("推荐"));else {
          this.valid = false;
          if (_0x1af5ac?.["message"]?.["includes"]("Session无效或者过期")) _0x13d6fa("账号[" + this.index + "],验证失败 🙁 了呢,请检查配置是否正确 或者 账户凭证是否过期；请看脚本头部说明，如果是老脚本配置，需在配置文件配置：export ylpOldConfigTranform='true'");else {
            _0x13d6fa("账号[" + this.index + "],验证失败 🙁 了呢,原因：" + _0x1af5ac?.["message"]);
          }
        }
      }
    } catch (_0x16e972) {
      console.log(_0x16e972);
    }
  }
  async ["share_code"](_0x216b36) {
    let _0x1c63fc = "/api/account/update_ref_code",
      _0x287d07 = _0x123f96.guid(),
      _0x3eaa32 = _0x123f96.ts13(),
      _0x4984c4 = _0x1c63fc + "&&" + this.sessionId + "&&" + _0x287d07 + "&&" + _0x3eaa32 + "&&" + this.key + "&&" + _0x33f0fb,
      _0x4f004a = _0x123f96.SHA256_Encrypt(_0x4984c4);
    try {
      let _0x1edfe8 = {
          "method": "POST",
          "url": "" + this.hostname + _0x1c63fc,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x287d07,
            "X-TIMESTAMP": _0x3eaa32,
            "X-SIGNATURE": _0x4f004a,
            "X-TENANT-ID": _0x33f0fb,
            "User-Agent": _0x20abf8,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "ref_code": _0x20a930 || "WET28W"
          }
        },
        _0x584a03 = await _0x586c97(_0x1edfe8, _0x216b36);
      if (_0x584a03.code == 0) {} else {}
    } catch (_0x19ae97) {
      console.log(_0x19ae97);
    }
  }
}
!(async () => {
  _0x13d6fa("开始读取配置的数据……");
  if (!(await _0x22681c())) return;
  if (_0x15f309.length > 0) {
    _0x13d6fa(_0x4f5589);
    await _0x2e5248(0.1);
    await _0x15a646();
  } else console.log("无可用账号，停止执行\n" + _0x268a24), exit();
  await _0x589c3f(_0x5b2319?.["name"] + "：" + _0x2a3a9b + "\n" + _0x2eb464);
})().catch(_0x324efc => console.log(_0x324efc)).finally(() => _0x5b2319.done());
function _0x2289ba(_0x2804a3, _0x23701b, _0x6a833d) {
  let _0x11c643 = {},
    _0x10aa2b = {};
  try {
    _0x11c643 = _0x54e01b.readFileSync(_0x2804a3 + ".json", "utf8");
    _0x10aa2b = JSON.parse(_0x11c643);
  } catch (_0x5ee50a) {}
  _0x10aa2b[_0x23701b] = _0x6a833d;
  const _0x20b72e = JSON.stringify(_0x10aa2b);
  try {
    _0x54e01b.writeFileSync(_0x2804a3 + ".json", _0x20b72e);
  } catch (_0x249e4f) {
    _0x249e4f.code === "ENOENT" ? _0x54e01b.writeFileSync(_0x2804a3 + ".json", _0x20b72e) : console.error("保存文件时发生错误：", _0x249e4f);
  }
}
function _0x5315fc(_0x4b25b6, _0x202d44) {
  try {
    const _0x23e9c0 = _0x54e01b.readFileSync(_0x4b25b6 + ".json", "utf8"),
      _0x49deab = JSON.parse(_0x23e9c0);
    return _0x49deab[_0x202d44];
  } catch (_0x1311dd) {
    if (_0x1311dd.code === "ENOENT") return undefined;else {
      console.error("读取文件时发生错误：", _0x1311dd);
    }
  }
}
async function _0x22681c() {
  if (_0x53db1e) {
    let _0x59147d = _0x11038e[0];
    for (let _0x121d18 of _0x11038e) if (_0x53db1e.indexOf(_0x121d18) > -1) {
      {
        _0x59147d = _0x121d18;
        break;
      }
    }
    for (let _0x4690ad of _0x53db1e.split(_0x59147d)) _0x4690ad && _0x15f309.push(new _0x3508ad(_0x4b4896 && _0x4690ad?.["includes"]("&") ? _0x4690ad?.["split"]("&") : _0x4690ad?.["split"]("#")));
    _0x3f3b9b = _0x15f309.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x3f3b9b + "个账号");
  return true;
}
async function _0x586c97(_0x116a94, _0x8024ba, _0x1b5b03) {
  return new Promise(_0x4d6cc0 => {
    if (!_0x8024ba) {
      {
        let _0x2569af = arguments.callee.toString(),
          _0x433868 = /function\s*(\w*)/i,
          _0x119a0b = _0x433868.exec(_0x2569af);
        _0x8024ba = _0x119a0b[1];
      }
    }
    _0x2517fd && (console.log("\n【debug】===============这是" + _0x8024ba + "请求信息==============="), console.log(_0x116a94));
    if (_0x2517fd) {
      _0x116a94.rejectUnauthorized = false;
    }
    _0x42a1a9(_0x116a94, function (_0x45a91f, _0x594620) {
      if (_0x45a91f) throw new Error(_0x45a91f);
      let _0x3fcdc1 = _0x594620.body;
      try {
        _0x2517fd && (console.log("\n\n【debug】===============这是" + _0x8024ba + "返回数据=============="), console.log(_0x3fcdc1));
        if (typeof _0x3fcdc1 == "string") {
          if (_0x21dcf9(_0x3fcdc1)) {
            let _0x33ae1c = JSON.parse(_0x3fcdc1);
            if (_0x2517fd) {
              console.log("\n【debug】=============这是" + _0x8024ba + "json解析后数据============");
              console.log(_0x33ae1c);
            }
            !_0x1b5b03 ? _0x4d6cc0(_0x33ae1c) : _0x4d6cc0({
              ..._0x594620,
              "body": _0x33ae1c
            });
          } else {
            let _0x46e5a4 = _0x3fcdc1;
            !_0x1b5b03 ? _0x4d6cc0(_0x46e5a4) : _0x4d6cc0({
              ..._0x594620,
              "body": _0x46e5a4
            });
          }
          function _0x21dcf9(_0x54d638) {
            if (typeof _0x54d638 == "string") {
              try {
                {
                  if (typeof JSON.parse(_0x54d638) == "object") return true;
                }
              } catch (_0x4e0ed3) {
                return false;
              }
            }
            return false;
          }
        } else {
          let _0x1f090d = _0x3fcdc1;
          if (!_0x1b5b03) _0x4d6cc0(_0x1f090d);else {
            _0x4d6cc0({
              ..._0x594620,
              "body": _0x1f090d
            });
          }
        }
      } catch (_0x29cd2a) {
        console.log(_0x45a91f, _0x594620);
        console.log("\n " + _0x8024ba + "失败了!请稍后尝试!!");
      } finally {
        _0x4d6cc0();
      }
    });
  });
}
function _0x2e5248(_0x5c2034) {
  return new Promise(function (_0x3bd5f3) {
    setTimeout(_0x3bd5f3, _0x5c2034 * 1000);
  });
}
function _0x13d6fa(_0x27bfa3) {
  _0x5b2319.isNode() ? _0x27bfa3 && (console.log("" + _0x27bfa3), _0x305116 += "" + _0x27bfa3) : (console.log("" + _0x27bfa3), msg += "" + _0x27bfa3);
}
async function _0x589c3f(_0x48fc8a) {
  if (!_0x48fc8a) return;
  if (_0x40812f > 0) {
    {
      if (_0x5b2319.isNode()) {
        var _0x496179 = require("./sendNotify");
        await _0x496179.sendNotify(_0x5b2319.name, _0x48fc8a);
      } else _0x5b2319.msg(_0x5b2319.name, "", _0x48fc8a);
    }
  } else {
    console.log("通知服务未开启，不予推送：", _0x48fc8a);
  }
}
function _0x44edcc() {
  _0x5b2319.isNode() && (process.on("uncaughtException", function (_0x42faef) {
    if (_0x42faef.code === "MODULE_NOT_FOUND") {
      const _0x3ca74b = _0x42faef.message.split("'")[1];
      _0x3ca74b.startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 " + _0x3ca74b?.["replace"]("./", "")?.["replace"]("../", "") + " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！") : console.log("缺少依赖，请安装 " + _0x3ca74b + " 库： " + _0x3ca74b + " \n 什么？不会？v我50我教你！");
    } else console.log("发生错误：" + _0x42faef.message);
  }), process.on("unhandledRejection", function (_0x52e0ad) {
    const _0x36fa9a = _0x52e0ad.stack.split("\n");
    if (_0x36fa9a.length > 1) {
      const _0x3017f6 = _0x36fa9a[1],
        _0x4c948b = _0x3017f6.match(/\((.*):(\d+):(\d+)\)/);
      if (_0x4c948b) {
        const _0x2742fd = _0x4c948b[1],
          _0x4cef02 = _0x4c948b[2];
        console.log("程序执行出现异常，错误信息：" + _0x52e0ad.message + ("，错误发生在 " + _0x2742fd + " 的第 " + _0x4cef02 + " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"));
      }
    } else console.log("发生错误：" + _0x52e0ad.message);
  }));
}
function _0x3abc47(_0x1434b5, _0x4fbc74) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x50f3fc {
    constructor(_0x411f70) {
      this.env = _0x411f70;
    }
    ["send"](_0x1bf8f8, _0xd38395 = "GET") {
      {
        _0x1bf8f8 = "string" == typeof _0x1bf8f8 ? {
          "url": _0x1bf8f8
        } : _0x1bf8f8;
        let _0x592a32 = this.get;
        "POST" === _0xd38395 && (_0x592a32 = this.post);
        return new Promise((_0x393af7, _0x498f37) => {
          _0x592a32.call(this, _0x1bf8f8, (_0x36b113, _0x459a3b, _0x2fd05c) => {
            _0x36b113 ? _0x498f37(_0x36b113) : _0x393af7(_0x459a3b);
          });
        });
      }
    }
    ["get"](_0x1b7b48) {
      return this.send.call(this.env, _0x1b7b48);
    }
    ["post"](_0x50bd16) {
      return this.send.call(this.env, _0x50bd16, "POST");
    }
  }
  return new class {
    constructor(_0x1493b6, _0x2ca8eb) {
      this.name = _0x1493b6;
      this.http = new _0x50f3fc(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2ca8eb);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x562d8e, _0x2d8b43 = null) {
      try {
        return JSON.parse(_0x562d8e);
      } catch {
        return _0x2d8b43;
      }
    }
    ["toStr"](_0x2b79b9, _0x1d1bd1 = null) {
      try {
        return JSON.stringify(_0x2b79b9);
      } catch {
        return _0x1d1bd1;
      }
    }
    ["getjson"](_0x5aa408, _0x59e263) {
      let _0x18bcc6 = _0x59e263;
      const _0xf57b93 = this.getdata(_0x5aa408);
      if (_0xf57b93) try {
        _0x18bcc6 = JSON.parse(this.getdata(_0x5aa408));
      } catch {}
      return _0x18bcc6;
    }
    ["setjson"](_0x2c6167, _0x5cc372) {
      try {
        return this.setdata(JSON.stringify(_0x2c6167), _0x5cc372);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x31be8d) {
      return new Promise(_0x3770be => {
        this.get({
          "url": _0x31be8d
        }, (_0x3dc133, _0x344bff, _0x560217) => _0x3770be(_0x560217));
      });
    }
    ["runScript"](_0x19c6e0, _0x3b7823) {
      return new Promise(_0x343d1d => {
        {
          let _0x22bad8 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x22bad8 = _0x22bad8 ? _0x22bad8.replace(/\n/g, "").trim() : _0x22bad8;
          let _0x16805c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x16805c = _0x16805c ? 1 * _0x16805c : 20;
          _0x16805c = _0x3b7823 && _0x3b7823.timeout ? _0x3b7823.timeout : _0x16805c;
          const [_0x3e0feb, _0x47675a] = _0x22bad8.split("@"),
            _0x10a8c6 = {
              "url": "http://" + _0x47675a + "/v1/scripting/evaluate",
              "body": {
                "script_text": _0x19c6e0,
                "mock_type": "cron",
                "timeout": _0x16805c
              },
              "headers": {
                "X-Key": _0x3e0feb,
                "Accept": "*/*"
              }
            };
          this.post(_0x10a8c6, (_0x10640d, _0x462932, _0x331c7e) => _0x343d1d(_0x331c7e));
        }
      }).catch(_0x489705 => this.logErr(_0x489705));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x321b9f = this.path.resolve(this.dataFile),
            _0x1c1c08 = this.path.resolve(process.cwd(), this.dataFile),
            _0x5b7900 = this.fs.existsSync(_0x321b9f),
            _0x1fc2cb = !_0x5b7900 && this.fs.existsSync(_0x1c1c08);
          if (!_0x5b7900 && !_0x1fc2cb) return {};
          {
            const _0xbda049 = _0x5b7900 ? _0x321b9f : _0x1c1c08;
            try {
              return JSON.parse(this.fs.readFileSync(_0xbda049));
            } catch (_0x4567c8) {
              return {};
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x55fcf2 = this.path.resolve(this.dataFile),
            _0x3a24a0 = this.path.resolve(process.cwd(), this.dataFile),
            _0x26a265 = this.fs.existsSync(_0x55fcf2),
            _0x23fc2d = !_0x26a265 && this.fs.existsSync(_0x3a24a0),
            _0x26a0b8 = JSON.stringify(this.data);
          _0x26a265 ? this.fs.writeFileSync(_0x55fcf2, _0x26a0b8) : _0x23fc2d ? this.fs.writeFileSync(_0x3a24a0, _0x26a0b8) : this.fs.writeFileSync(_0x55fcf2, _0x26a0b8);
        }
      }
    }
    ["lodash_get"](_0x59c3bd, _0x346320, _0xdea3b2) {
      {
        const _0x3aeca3 = _0x346320.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x117c4c = _0x59c3bd;
        for (const _0x9ecc99 of _0x3aeca3) if (_0x117c4c = Object(_0x117c4c)[_0x9ecc99], undefined === _0x117c4c) return _0xdea3b2;
        return _0x117c4c;
      }
    }
    ["lodash_set"](_0xca3406, _0x306677, _0x4b7040) {
      return Object(_0xca3406) !== _0xca3406 ? _0xca3406 : (Array.isArray(_0x306677) || (_0x306677 = _0x306677.toString().match(/[^.[\]]+/g) || []), _0x306677.slice(0, -1).reduce((_0x3bc058, _0x2a72a9, _0x1a8092) => Object(_0x3bc058[_0x2a72a9]) === _0x3bc058[_0x2a72a9] ? _0x3bc058[_0x2a72a9] : _0x3bc058[_0x2a72a9] = Math.abs(_0x306677[_0x1a8092 + 1]) >> 0 == +_0x306677[_0x1a8092 + 1] ? [] : {}, _0xca3406)[_0x306677[_0x306677.length - 1]] = _0x4b7040, _0xca3406);
    }
    ["getdata"](_0x524e9d) {
      {
        let _0x154f90 = this.getval(_0x524e9d);
        if (/^@/.test(_0x524e9d)) {
          const [, _0x2ce8d8, _0x26f945] = /^@(.*?)\.(.*?)$/.exec(_0x524e9d),
            _0x277a2e = _0x2ce8d8 ? this.getval(_0x2ce8d8) : "";
          if (_0x277a2e) try {
            const _0x217fc8 = JSON.parse(_0x277a2e);
            _0x154f90 = _0x217fc8 ? this.lodash_get(_0x217fc8, _0x26f945, "") : _0x154f90;
          } catch (_0x5b9c4e) {
            _0x154f90 = "";
          }
        }
        return _0x154f90;
      }
    }
    ["setdata"](_0x581376, _0x16e572) {
      let _0x474261 = false;
      if (/^@/.test(_0x16e572)) {
        {
          const [, _0x31e069, _0x16b83b] = /^@(.*?)\.(.*?)$/.exec(_0x16e572),
            _0x291275 = this.getval(_0x31e069),
            _0x4360be = _0x31e069 ? "null" === _0x291275 ? null : _0x291275 || "{}" : "{}";
          try {
            const _0x87eb67 = JSON.parse(_0x4360be);
            this.lodash_set(_0x87eb67, _0x16b83b, _0x581376);
            _0x474261 = this.setval(JSON.stringify(_0x87eb67), _0x31e069);
          } catch (_0x3d0360) {
            {
              const _0x8a108d = {};
              this.lodash_set(_0x8a108d, _0x16b83b, _0x581376);
              _0x474261 = this.setval(JSON.stringify(_0x8a108d), _0x31e069);
            }
          }
        }
      } else _0x474261 = this.setval(_0x581376, _0x16e572);
      return _0x474261;
    }
    ["getval"](_0x1df97c) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1df97c) : this.isQuanX() ? $prefs.valueForKey(_0x1df97c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1df97c]) : this.data && this.data[_0x1df97c] || null;
    }
    ["setval"](_0x361a76, _0x3840c7) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x361a76, _0x3840c7) : this.isQuanX() ? $prefs.setValueForKey(_0x361a76, _0x3840c7) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3840c7] = _0x361a76, this.writedata(), true) : this.data && this.data[_0x3840c7] || null;
    }
    ["initGotEnv"](_0x54ed94) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x54ed94 && (_0x54ed94.headers = _0x54ed94.headers ? _0x54ed94.headers : {}, undefined === _0x54ed94.headers.Cookie && undefined === _0x54ed94.cookieJar && (_0x54ed94.cookieJar = this.ckjar));
    }
    ["get"](_0x1737cc, _0x192f0e = () => {}) {
      _0x1737cc.headers && (delete _0x1737cc.headers["Content-Type"], delete _0x1737cc.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1737cc.headers = _0x1737cc.headers || {}, Object.assign(_0x1737cc.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x1737cc, (_0x3e96ce, _0x1e29e3, _0x127e88) => {
        !_0x3e96ce && _0x1e29e3 && (_0x1e29e3.body = _0x127e88, _0x1e29e3.statusCode = _0x1e29e3.status);
        _0x192f0e(_0x3e96ce, _0x1e29e3, _0x127e88);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1737cc.opts = _0x1737cc.opts || {}, Object.assign(_0x1737cc.opts, {
        "hints": false
      })), $task.fetch(_0x1737cc).then(_0xb7678c => {
        const {
          statusCode: _0xd63fac,
          statusCode: _0x410ad2,
          headers: _0x4e5c45,
          body: _0x5c1532
        } = _0xb7678c;
        _0x192f0e(null, {
          "status": _0xd63fac,
          "statusCode": _0x410ad2,
          "headers": _0x4e5c45,
          "body": _0x5c1532
        }, _0x5c1532);
      }, _0x16ee17 => _0x192f0e(_0x16ee17))) : this.isNode() && (this.initGotEnv(_0x1737cc), this.got(_0x1737cc).on("redirect", (_0x2db95b, _0x9fd347) => {
        try {
          {
            if (_0x2db95b.headers["set-cookie"]) {
              const _0xd9617c = _0x2db95b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              _0xd9617c && this.ckjar.setCookieSync(_0xd9617c, null);
              _0x9fd347.cookieJar = this.ckjar;
            }
          }
        } catch (_0x457194) {
          this.logErr(_0x457194);
        }
      }).then(_0x1062d0 => {
        {
          const {
            statusCode: _0x57a8e8,
            statusCode: _0x5ac4e8,
            headers: _0x311e8b,
            body: _0x443888
          } = _0x1062d0;
          _0x192f0e(null, {
            "status": _0x57a8e8,
            "statusCode": _0x5ac4e8,
            "headers": _0x311e8b,
            "body": _0x443888
          }, _0x443888);
        }
      }, _0x47a326 => {
        const {
          message: _0x39313d,
          response: _0x597307
        } = _0x47a326;
        _0x192f0e(_0x39313d, _0x597307, _0x597307 && _0x597307.body);
      }));
    }
    ["post"](_0x3c57a1, _0x1cc8ed = () => {}) {
      if (_0x3c57a1.body && _0x3c57a1.headers && !_0x3c57a1.headers["Content-Type"] && (_0x3c57a1.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3c57a1.headers && delete _0x3c57a1.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x3c57a1.headers = _0x3c57a1.headers || {}, Object.assign(_0x3c57a1.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(_0x3c57a1, (_0x989103, _0x481dab, _0x388e59) => {
        !_0x989103 && _0x481dab && (_0x481dab.body = _0x388e59, _0x481dab.statusCode = _0x481dab.status);
        _0x1cc8ed(_0x989103, _0x481dab, _0x388e59);
      });else {
        if (this.isQuanX()) _0x3c57a1.method = "POST", this.isNeedRewrite && (_0x3c57a1.opts = _0x3c57a1.opts || {}, Object.assign(_0x3c57a1.opts, {
          "hints": false
        })), $task.fetch(_0x3c57a1).then(_0x1ff874 => {
          const {
            statusCode: _0x44f1a4,
            statusCode: _0x262d38,
            headers: _0x3528c6,
            body: _0x446ca2
          } = _0x1ff874;
          _0x1cc8ed(null, {
            "status": _0x44f1a4,
            "statusCode": _0x262d38,
            "headers": _0x3528c6,
            "body": _0x446ca2
          }, _0x446ca2);
        }, _0x2850ef => _0x1cc8ed(_0x2850ef));else {
          if (this.isNode()) {
            this.initGotEnv(_0x3c57a1);
            const {
              url: _0x353068,
              ..._0x3a5e28
            } = _0x3c57a1;
            this.got.post(_0x353068, _0x3a5e28).then(_0x362101 => {
              const {
                statusCode: _0x3442a3,
                statusCode: _0x482e0f,
                headers: _0x507be2,
                body: _0x227347
              } = _0x362101;
              _0x1cc8ed(null, {
                "status": _0x3442a3,
                "statusCode": _0x482e0f,
                "headers": _0x507be2,
                "body": _0x227347
              }, _0x227347);
            }, _0x1e8614 => {
              {
                const {
                  message: _0x23d73e,
                  response: _0x3faa24
                } = _0x1e8614;
                _0x1cc8ed(_0x23d73e, _0x3faa24, _0x3faa24 && _0x3faa24.body);
              }
            });
          }
        }
      }
    }
    ["time"](_0x2feb36, _0x3704af = null) {
      const _0x115dd6 = _0x3704af ? new Date(_0x3704af) : new Date();
      let _0x3fb799 = {
        "M+": _0x115dd6.getMonth() + 1,
        "d+": _0x115dd6.getDate(),
        "H+": _0x115dd6.getHours(),
        "m+": _0x115dd6.getMinutes(),
        "s+": _0x115dd6.getSeconds(),
        "q+": Math.floor((_0x115dd6.getMonth() + 3) / 3),
        "S": _0x115dd6.getMilliseconds()
      };
      /(y+)/.test(_0x2feb36) && (_0x2feb36 = _0x2feb36.replace(RegExp.$1, (_0x115dd6.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x130731 in _0x3fb799) new RegExp("(" + _0x130731 + ")").test(_0x2feb36) && (_0x2feb36 = _0x2feb36.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3fb799[_0x130731] : ("00" + _0x3fb799[_0x130731]).substr(("" + _0x3fb799[_0x130731]).length)));
      return _0x2feb36;
    }
    ["msg"](_0x46d545 = _0x1434b5, _0x2d866d = "", _0xd55664 = "", _0x2b5d93) {
      {
        const _0x1c53e3 = _0x24e63f => {
          {
            if (!_0x24e63f) return _0x24e63f;
            if ("string" == typeof _0x24e63f) return this.isLoon() ? _0x24e63f : this.isQuanX() ? {
              "open-url": _0x24e63f
            } : this.isSurge() ? {
              "url": _0x24e63f
            } : undefined;
            if ("object" == typeof _0x24e63f) {
              {
                if (this.isLoon()) {
                  {
                    let _0x25e863 = _0x24e63f.openUrl || _0x24e63f.url || _0x24e63f["open-url"],
                      _0x108e16 = _0x24e63f.mediaUrl || _0x24e63f["media-url"];
                    return {
                      "openUrl": _0x25e863,
                      "mediaUrl": _0x108e16
                    };
                  }
                }
                if (this.isQuanX()) {
                  let _0x252625 = _0x24e63f["open-url"] || _0x24e63f.url || _0x24e63f.openUrl,
                    _0x4a363c = _0x24e63f["media-url"] || _0x24e63f.mediaUrl;
                  return {
                    "open-url": _0x252625,
                    "media-url": _0x4a363c
                  };
                }
                if (this.isSurge()) {
                  {
                    let _0x2acaae = _0x24e63f.url || _0x24e63f.openUrl || _0x24e63f["open-url"];
                    return {
                      "url": _0x2acaae
                    };
                  }
                }
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x46d545, _0x2d866d, _0xd55664, _0x1c53e3(_0x2b5d93)) : this.isQuanX() && $notify(_0x46d545, _0x2d866d, _0xd55664, _0x1c53e3(_0x2b5d93))), !this.isMuteLog) {
          let _0x3e4418 = ["", "==============📣系统通知📣=============="];
          _0x3e4418.push(_0x46d545);
          _0x2d866d && _0x3e4418.push(_0x2d866d);
          _0xd55664 && _0x3e4418.push(_0xd55664);
          console.log(_0x3e4418.join("\n"));
          this.logs = this.logs.concat(_0x3e4418);
        }
      }
    }
    ["log"](..._0x3f8535) {
      _0x3f8535.length > 0 && (this.logs = [...this.logs, ..._0x3f8535]);
      console.log(_0x3f8535.join(this.logSeparator));
    }
    ["logErr"](_0x312c43, _0x430291) {
      {
        const _0x10fae4 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x10fae4 ? this.log("", "❗️" + this.name + ", 错误!", _0x312c43.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x312c43);
      }
    }
    ["wait"](_0x401d4b) {
      return new Promise(_0x508c20 => setTimeout(_0x508c20, _0x401d4b));
    }
    ["done"](_0x1e89d9 = {}) {
      const _0x4cbe9d = new Date().getTime(),
        _0x8a128c = (_0x4cbe9d - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x8a128c + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1e89d9);
    }
  }(_0x1434b5, _0x4fbc74);
}