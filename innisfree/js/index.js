$(function(){
  $('.logo1').fadeIn(1000);
  setTimeout(function(){
      $('.zzy1').fadeIn(500);
  },1000)
  setTimeout(function(){
      $('.index-text').fadeIn(500);
  },2500)
  $('.main3 .btns div').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    swiper.unlockSwipeToNext();
    swiper.slideNext(function(){}, 800);
  })
})

// -------------分享-------------
getShare()

function getShare(){
   $.ajax({
     url: 'http://mm.diandianboke.com:8000/wechat/share/signature',
     data: {
       "app_id": "wxba7f7c2f25ed9cc8",
      //  "url": "mm.diandianboke.com"
      "url": encodeURIComponent(window.location.href.split('#')[0])
     },
     type: 'POST',
     dataType: 'json',
     success: function(resp){
       console.log(resp)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: resp.appId, // 必填，公众号的唯一标识
          timestamp: resp.timestamp, // 必填，生成签名的时间戳
          nonceStr: resp.nonceStr, // 必填，生成签名的随机串
          signature: resp.signature,// 必填，签名
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
        }); 

        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({ 
              title: 'innisfree悦诗风吟发光肌密所', // 分享标题
              desc: '肌肤白到自发光的秘密，悦诗风吟#发光肌密所#', // 分享描述
              //link: 'http://mm.diandianboke.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              link: window.location.href,
              imgUrl: 'http://mm.diandianboke.com:8000/logo.jpg', // 分享图标
              success: function () {
                // 设置成功
                console.log("分享成功");
              },
              error: function(err) {
                console.log(err)
              }
          })
          wx.updateTimelineShareData({
            title: 'innisfree悦诗风吟发光肌密所', // 分享标题
              desc: '肌肤白到自发光的秘密，悦诗风吟#发光肌密所#', // 分享描述
              //link: 'http://mm.diandianboke.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              link: window.location.href,
              imgUrl: 'http://mm.diandianboke.com:8000/logo.jpg', // 分享图标
              success: function () {
                // 设置成功
                console.log("分享成功");
              },
              error: function(err) {
                console.log(err)
              }
          })
        });
     }
   })
}

