// var api = require("../config/api.js");

import api from "../api";

new Date(cxx)
const formatTime = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}
//   return [year, month, day].map(formatNumber).join('.') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

//错误提示框
function showOkToast(msg) {
  return new Promise(function(resolve, reject) {
    wx.showToast({
      title: msg,
      icon: 'success',
      mask: true,
      success: function(res) {
        resolve(res)
      }
    })
  })
}
//成功提示框
function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    image: '/pages/image/icon_error.png',
    mask: true
  })
}

//小程序请求request
function request(url, data = {}, method = "GET") {
  let lock = true
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Appid': '1009',
        'Appkey': 'EFEF83AA312D41A5C39A31221EC0B848',
        'Zwm-Token': wx.getStorageSync('token')
      },
      success: function(res) {
        console.log("success");
        if (res.statusCode == 200) {
          if (res.data.code == 10000 || res.data.code == 10004 || res.data.code == 10027) {

            //需要登录后才可以操作
            let code = null;
            return login().then((res) => {
              code = res.code;
              return getUserInfo();
            }).then((userInfo) => {

              //小程序登录接口
              request(api.XcxLoginApi, {
                code: code,
                encryptedData: userInfo.encryptedData,
                iv: userInfo.iv
              }).then(res => {
                if (res.data.code == 0) {

                  //存储令牌
                  wx.setStorageSync('token', res.data.jsonResult.token)
                  wx.setStorageSync('openid', res.data.jsonResult.wechatId)
                  wx.setStorageSync('coins', res.data.jsonResult.coins)
                  wx.setStorageSync('isBindCard', res.data.jsonResult.isBindCard)
                  wx.setStorageSync('userInfoData', res.data.jsonResult)

                  if (lock) {
                    data.username = res.data.jsonResult.wechatId
                    //递归再次调用
                    wx.request({
                      url: url,
                      data: data,
                      method: method,
                      header: {
                        'Appid': '1009',
                        'Appkey': 'EFEF83AA312D41A5C39A31221EC0B848',
                        'Zwm-Token': res.data.jsonResult.token
                      },
                      success: function(res) {
                        lock = false
                        resolve(res);
                      }
                    })
                  }
                  lock = false
                } else {
                  reject(res);
                }
              }).catch((err) => {
                reject(err);
              });
            }).catch((err) => {
              reject(err);
            })
          } else {
            resolve(res);
          }
        } else {
          reject(res)
        }
      },
      fail: function(err) {
        reject(err)
        console.log("failed")
      }
    })
  });
}
/**
 * 调用微信登录
 */
function login() {
  return new Promise(function(resolve, reject) {
    wx.login({
      success: function(res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}
//获取用户信息
function getUserInfo() {
  return new Promise(function(resolve, reject) {
    wx.getUserInfo({
      withCredentials: true,
      success: function(res) {
        resolve(res);
      },
      fail: function(err) {
        reject(err);
      }
    })
  });
  /**
   * 检查微信会话是否过期
   */
  function checkSession() {
    return new Promise(function(resolve, reject) {
      wx.checkSession({
        success: function() {
          resolve(true);
        },
        fail: function() {
          reject(false);
        }
      })
    });
  }


}
export default {
  formatTime,
  showErrorToast,
  json2Form,
  request,
  login,
  getUserInfo,
  showOkToast,
  formatNumber
}