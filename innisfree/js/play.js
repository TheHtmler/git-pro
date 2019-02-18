//----------页面初始化------------
var audio = document.getElementById('audio');

if(sessionStorage.bgmusic=='pause'){
    playBgMusic(false);
}else{
    playBgMusic(true);
     //----------处理自动播放------------
    //--创建页面监听，等待微信端页面加载完毕 触发音频播放
    document.addEventListener('DOMContentLoaded', function () {
        function audioAutoPlay() {
            playBgMusic(true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                playBgMusic(true);
            }, false);
        }
        audioAutoPlay();
    });
    //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
    function audioAutoPlay() {
        playBgMusic(true);
        document.removeEventListener('touchstart',audioAutoPlay);
    }
    document.addEventListener('touchstart', audioAutoPlay);
}
//----------处理页面激活------------
var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {
        if(!sessionStorage.bgmusic||sessionStorage.bgmusic=='play'){
            audio.play();
        }
    }else{
        audio.pause();
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
//---------背景音乐开关----------
function triggerBgMusic(){
    if(!sessionStorage.bgmusic||sessionStorage.bgmusic=='play'){
        playBgMusic(false);
        document.querySelector('#status img').src = './imgs/stop.png'
      }else{
        document.querySelector('#status img').src = './imgs/play.png';
        playBgMusic(true);
    }
}
//---------音乐播放和暂停----------
function playBgMusic(val){
    if(val){
        audio.play();
        sessionStorage.bgmusic='play';
        document.querySelector('#status img').src = './imgs/play.png'
      }else{
        document.querySelector('#status img').src = './imgs/stop.png'
        audio.pause();
        sessionStorage.bgmusic='pause';
    }
}