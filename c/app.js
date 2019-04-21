//app.js
App({
  onLaunch: function () {
    var goods = wx.getStorageSync('goods');
    if (!goods) {
      goods = this.loadGoods();
    }
    wx.setStorageSync('goods', goods);
  },
  loadGoods: function () {

    var goods = new Array();
    var good = new Object();
    good.id = "0"
    good.pic = '/images/order/1.jpg';
    good.name = '【京东超市】伊利中老年奶粉听装900g(新老包装)';
    good.price = '86.00';
    good.weight = '1.200kg';
    good.spec = '';
    good.count = 1;
    goods[0] = good;

    var good1 = new Object();
    good1.id = "1"
    good1.pic = '/images/order/2.jpg';
    good1.name = 'TP-Link TP-WN726N免驱版 外置天线USB无线网卡';
    good1.price = '49.00';
    good1.weight = '0.100kg';
    good1.spec = '外置天线';
    good1.count = 1;
    goods[1] = good1;

    var good2 = new Object();
    good2.id = "2";
    good2.pic = '/images/order/3.jpg';
    good2.name = 'Apple iPhone7（A1660）128GB金色移动联通电信4G手机';
    good2.price = '5499.00';
    good2.weight = '0.390kg/件';
    good2.spec = '金色,128GB';
    good2.count = 1;
    goods[2] = good2;
    return goods;

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})