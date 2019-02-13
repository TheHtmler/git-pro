$(function(){
  $('.logo-wra').fadeIn(1000);
  setTimeout(function(){
    $('.letter').fadeIn(500);
  },1000)
  $('.main3 .btns div').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
})

// -------------分享-------------

wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
  wx.updateAppMessageShareData({ 
      title: 'innisfree悦诗风吟发光肌密所', // 分享标题
      desc: '', // 分享描述
      link: 'http://mm.diandianboke.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://mm.diandianboke.com:8000/logo.jpg', // 分享图标
      success: function () {
        // 设置成功
        console.log("分享成功");
      }
  })
  wx.updateTimelineShareData({
    title: 'innisfree悦诗风吟发光肌密所', // 分享标题
      desc: '', // 分享描述
      link: 'http://mm.diandianboke.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://mm.diandianboke.com:8000/logo.jpg', // 分享图标
      success: function () {
        // 设置成功
        console.log("分享成功");
      }
  })
});

function getShare(){
   $.ajax({
     url: 'http://mm.diandianboke.com:8000/wechat/share/signature',
     data: {
       "app_id": 'wxba7f7c2f25ed9cc8',
       "url": "mm.diandianboke.com"
     },
     type: 'POST',
     dataType: 'json',
     success: function(resp){
      //  console.log(resp)

        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: resp.appId, // 必填，公众号的唯一标识
          timestamp: resp.timestamp, // 必填，生成签名的时间戳
          nonceStr: resp.nonceStr, // 必填，生成签名的随机串
          signature: resp.signature,// 必填，签名
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
        }); 
     }
   })
}
getShare()



// -------------swiper动画-------------
var timeTypeText1,timeTypeText2;
  var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onSlideChangeStart: function(mySwiper) {
          var liIndex = mySwiper.activeIndex
          if(liIndex == 0){
            $('.logo-wra, .letter').hide(0);
          }
          if(liIndex == 1) {
            $('.main2 .envolop').removeClass('rotated').addClass('rotate')
            $('.text-wrapper').hide(0)
            $(".main2 .text-top, .main2 .text-bottom").hide(0)
            clearTimeout(timeTypeText1)
            clearTimeout(timeTypeText2)
          }
          if(liIndex == 2) {
            $('.main-content1 img, .main-content1 .btns').hide(0)
          }
          if(liIndex == 3) {
            $('.main-content2 img, .main-content2 .btns').hide(0)
          }
          if(liIndex == 4) {
            $('.main-content3 img, .main-content3 .btns').hide(0)
          }
          if(liIndex == 5){
            $('.bg3, .logo3, .text1, .text3, .line, .address, .time, .password ').hide(0);
          }
        },
        onSlideChangeEnd: function(mySwiper){
          var liIndex = mySwiper.activeIndex;
          if(liIndex == 0){
            $('.logo-wra').fadeIn(500);
            setTimeout(function(){
                $('.letter').fadeIn(500);
            },1500)
          }
          if(liIndex == 1) {
              $('.main2 .envolop').removeClass('rotate').addClass('rotated');
              setTimeout(function(){
                $('.text-wrapper').fadeIn(500);
              },100)
              timeTypeText1 = setTimeout(function(){
                $(".main2 .text-top").html(
                  `亲爱的<br/>`+
                  `收到这封信是不是有一点小惊讶?`
                ).show().typewriter(150);
              },1500)
              timeTypeText2 = setTimeout(function(){
                $(".main2 .text-bottom").html(
                  `其实，<br/>`+
                  `我们已经观察你很久了，<br/>`+
                  `发现你身边有一些危害在悄悄潜伏着<br/>`+
                  `... ... `
                ).show().typewriter(150);
              },5000)
          }
          if(liIndex == 2){
            $('.main-content1 img').fadeIn(500);
            setTimeout(function(){
              $('.main-content1 .btns').fadeIn(500);
            },500)
          }
          if(liIndex == 3){
            $('.main-content2 img').fadeIn(500);
            setTimeout(function(){
              $('.main-content2 .btns').fadeIn(500);
            },500)
          }
          if(liIndex == 4){
            $('.main-content3 img').fadeIn(500);
            setTimeout(function(){
              $('.main-content3 .btns').fadeIn(500);
            },500)
          }
          if(liIndex == 5){
            $('.bg3').fadeIn(2000);
            setTimeout(function(){
                $('.logo3').fadeIn(500);
            },1000)
            setTimeout(function(){
                $('.text1').fadeIn(500);
            },2000)
            setTimeout(function(){
                $('.text3').fadeIn(500);
            },3500)
            setTimeout(function(){
                $('.line').fadeIn(500);
            },3500)
            setTimeout(function(){
                $('.time').fadeIn(500);
            },5500)
            setTimeout(function(){
                $('.address').fadeIn(500);
            },6500)
            setTimeout(function(){
                $('.password').fadeIn(500);
            },7500)
          }
        }
      });

