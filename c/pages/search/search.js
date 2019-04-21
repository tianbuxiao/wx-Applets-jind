Page({
  data:{
    result: [],
    name: ''
  },
  loadGoods:function(){
    var goods = ['奶粉成人', '奶粉3段', '奶粉1段', '奶粉2段', '奶粉京东自营', '奶粉4段', '奶粉盒', '咖啡机', '咖啡杯', '咖啡豆', '咖啡伴侣', '咖啡机家用'];
    return goods;
  },
  searchGoods:function(e){
    var name = e.detail.value;
    var goods = this.loadGoods();
    var result = new Array();
    if(name != ''){
      for(var i=0;i<goods.length;i++){
        var good = goods[i];
        if(good.indexOf(name) > -1){
          result.push(good);
        }
      }
    }
    this.setData({result:result});
  },
  resetSearch:function(){
    var result = new Array();
    this.setData({result:result,name:''});
  }
})