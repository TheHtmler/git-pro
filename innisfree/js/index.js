$(function(){
  $('.logo1').fadeIn(1000);
  setTimeout(function(){
    $('.letter').fadeIn(500);
  },1000)
  $('.main3 .btns div').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
})