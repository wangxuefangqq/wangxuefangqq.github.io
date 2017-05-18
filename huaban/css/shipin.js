var container= document.querySelector(".container");//获取视频
var video= document.querySelector("video");//获取视频
var startbtn= document.querySelector(".start");//获取开始播放按钮
var reloadtn= document.querySelector(".reload");//获取重新加载按钮
var progress= document.querySelector(".progress");//获取进度条  总长
var inner= document.querySelector(".inner");//获取随着视频播放显示进度的进度条
var nowtime= document.querySelector("#now");//获取当前播放时间
var alltime= document.querySelector("#all");//获取总共的时长
var volume= document.querySelector(".volume");//获取音量按钮
var mask= document.querySelector(".mask");//获取放音量进度条的盒子
var zhezhao= document.querySelector(".zhezhao");//获取音量进度条上的遮罩
var vol= document.querySelector(".vol");//音量进度条
var volinner= document.querySelector(".volinner");//调整音量的块
var volicon= document.querySelector(".volume span");//音量的字体图标
var fullscreen= document.querySelector(".fullscreen");//音量的字体图标
var start_flag=true;//开始播放按钮的开关
var pW=progress.offsetWidth;//获取进度条的长度
//   点击开始播放按钮
startbtn.onclick=function(){
//       如果开关开着 就进行播放
    if(start_flag){
//           视频调用 play()方法   开始播放
        video.play();
        startbtn.innerHTML=" &#xe715;"
    }else{
//           否则 就暂停播放
//           视频调用pause()方法
        video.pause();
        startbtn.innerHTML=" &#xe601;";
    }
    start_flag=!start_flag;
}
//   点击重新加载按钮
reloadtn.onclick=function () {
//       视频调用load方法
    video.load();
    startbtn.innerHTML=" &#xe601;";
    start_flag=true;
}
//   用来保存 视频时长
var duration=0;
//   用来保存当前播放时间
var now=0;
//   canplay事件   当浏览器可以播放音频/视频时
video.oncanplay=function () {
//       duration 是video的属相
    duration=video.duration;
    alltime.innerHTML=time(duration);
}
//  timeupdate时间  当目前的播放位置已更改时
video.ontimeupdate=function () {
// 属性currentTime	设置或返回音频/视频中的当前播放位置（以秒计）
    now=video.currentTime;
    nowtime.innerHTML=time(now);
//       当前播放时间与总时长的比例
    var width=now/duration;
//       播放进度条的宽度
    inner.style.width=width*100+"%";
}
progress.onmousedown=function (e) {
    var ox=e.offsetX;
//       点击的位置占总进度条的比例
    var bili=ox/pW;
//       鼠标按下时的播放时间=时长乘以比例
    var pos=duration*bili;
//       将此时的时间赋值给currentTime
// 属性currentTime	设置或返回音频/视频中的当前播放位置（以秒计）
    video.currentTime=pos;
    document.onmousemove=function (e) {
        var ox=e.clientX-progress.offsetLeft;
        var bili=ox/pW;
        var pos=duration*bili;
        video.currentTime=pos;
    }
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmouseup=null;
    }

}
//   鼠标事件 当鼠标移进volume时 mask显示
hover (volume,function () {
    mask.style.display="block";
},function () {
    mask.style.display="none";
    zhezhao.onmousemove=null;
    zhezhao.onmouseup=null;
});
//   给音量进度条上的遮罩加事件 （
// 给mask加事件，点击调整音量块时，获取的高度就是鼠标位置距离调整音量块上边的距离，发生一些bug）
zhezhao.onmousedown=function (e) {
    yinliang(e);
    zhezhao.onmousemove=function (e) {
        yinliang(e);
    }
    zhezhao.onmouseup=function () {
        zhezhao.onmousemove=null;
        zhezhao.onmouseup=null;
    }
}
var volflag=true;
volicon.onclick=function () {
    if(volflag){
        volicon.innerHTML="&#xe615;";
        video.muted=true;
    }else{
        volicon.innerHTML="&#xe625;";
        video.muted=false;
    }
    volflag=!volflag;
}
var fullflag=true;
fullscreen.onclick=full;
video.ondblclick=full;
document.onkeydown=function (e) {
    if(e.keyCode==27){
        fullflag=false;
        full();
    }
}
function full() {
    if(fullflag){
        fullscreen.innerHTML="&#xe8fa;";
        container.style.width="100%";
        container.style.height="100%";
    }else{
        fullscreen.innerHTML="&#xe7b5;";
        container.style.width="600px";
        container.style.height="400px";
    }
    fullflag=!fullflag;
    pW=progress.offsetWidth;
}
function time(t) {
    var M=Math.floor(t/60);
    var S=Math.floor(t%60);
    return M+":"+(S<10?"0"+S:S);
}

function yinliang(e) {
//       获取鼠标点击位置的y
    var oy=e.offsetY;
//       判断top值 top最大为100
    oy=oy>100?100:oy;
//       v表示音量的大小 音量的范围是0-1
    var v=1-oy/100;
//       设置音量
    video.volume=v;
//       判断音量是否0   为0 就变为静音图标
    if(v==0){
        volicon.innerHTML="&#xe615;";
    }else{
        volicon.innerHTML="&#xe625;";
    }
//       调整音量的块的marginTop值
    volinner.style.marginTop=oy+"px";
}