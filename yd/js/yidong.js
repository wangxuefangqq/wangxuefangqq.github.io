$(function () {


    // 选项卡
    const nav = $(".mainnav>li");
    nav.forEach(function (key, val) {
        const con = $(".xiaonav", key)[0];
        if (con) {
            key.onmouseover = function () {
                con.style.display = "block";
                key.classList.add("active");
            }
            key.onmouseout = function () {
                con.style.display = "none";
                key.classList.remove("active");
            }
        }
    })
    // 轮播
    zylunbo(".img a", ".bannerN", ".img", [], ".lunbodian", ".zuo", ".you", 1500, "active1");


    // banner下轮播
    const dabox = $(".bannerxia .neikuan")[0];
    const lcbx = $(".lcbx")[0];
    const lcbxtu = $(".lcbx ul")[0];
    var tl = setInterval(you, 1000);

    function you() {
        animate(lcbxtu, {left: -295}, 500, function () {
            let first = lcbxtu.firstElementChild;
            lcbxtu.appendChild(first);
            lcbxtu.style.left = 0;
        })
    }

    function zuo() {
        lcbxtu.style.left = -295 + "px";
        let first = lcbxtu.firstElementChild;
        let last = lcbxtu.lastElementChild;
        lcbxtu.insertBefore(last, first);
        animate(lcbxtu, {left: 0}, 500);
    }

    dabox.onmouseover = function () {
        clearInterval(tl);
    }
    dabox.onmouseout = function () {
        tl = setInterval(you, 1000);
    }
    const zuob = $(".zuobtn")[0];
    const youb = $(".youbtn")[0];
    zuob.onclick = function () {
        zuo();
    }
    youb.onclick = function () {
        you();
    }

    // 三条
    const zxzc = $(".zxzc")[0];
    const cjwt = $(".cjwt")[0];
    const tsjy = $(".tsjy")[0];
    zxzc.onmouseover = function () {
        animate(zxzc, {left: -84}, 200);
    }
    cjwt.onmouseover = function () {
        animate(cjwt, {left: -84}, 200);
    }
    tsjy.onmouseover = function () {
        animate(tsjy, {left: -84}, 200);
    }
    zxzc.onmouseout = function () {
        animate(zxzc, {left: -20}, 200);
    }
    cjwt.onmouseout = function () {
        animate(cjwt, {left: -20}, 200);
    }
    tsjy.onmouseout = function () {
        animate(tsjy, {left: -20}, 200);
    }


    //公告滚动
    const uls = $(".gonggao ul")[0];
    const lis = $(".gonggao ul li");
    const qhbtn = $(".qhbtn")[0];
    const zuo1 = $(".zuo1")[0];
    const you1 = $(".you1")[0];
    var t;
    var timeOut = null;
    var moveRight = function () {
        let first = uls.firstElementChild;
        uls.appendChild(first);
    }
    var moveLeft = function () {
        let first = uls.firstElementChild;
        let last = uls.lastElementChild;
        uls.insertBefore(last, first);
    }

    function dong() {
        if (t) {
            clearInterval(t);
        }
        t = setInterval(moveRight, 2000);
    }

    function ting() {
        clearInterval(t);
        t = null;
    }

    dong();
    qhbtn.onmouseover = function () {
        ting();
    }
    qhbtn.onmouseout = function () {
        dong();
    }
    uls.onmouseover = function () {
        clearInterval(t);
    }
    uls.onmouseout = function () {
        t = setInterval(moveRight, 2000);
    }
    zuo1.onclick = function () {
        if (t) {
            clearInterval(t);
        }
        moveLeft();
    }

    you1.onclick = function () {
        if (t) {
            clearInterval(t);
        }
        moveRight();
    }

//    太原点击
    const sfx = $(".sfx")[0];
    const ct = $(".ct")[0];
    const city = $(".city")[0];
    const qb = $(".qb")[0];
    const container = $(".container")[0];
    sfx.onclick = function (e) {
        e.stopPropagation();
        ct.style.display = "block";
    }
    qb.onclick = function (e) {
        e.stopPropagation();
        city.style.display = "block";
    }
    ct.onclick = function (e) {
        e.stopPropagation();
        ct.style.display = "none";
    }
    city.onclick = function (e) {
        // e.stopPropagation();
        city.style.display = "none";
    }
    container.onclick = function () {
        ct.style.display = "none";
        city.style.display = "none";
    }


    //转的图
    const ye = document.querySelector(".ye");
    const hf = document.querySelector(".hf");
    let first = hf.firstElementChild;
    let fh = ye.lastElementChild;
    first.onclick = function () {
        ye.style.zIndex = 2;
        hf.style.zIndex = 1;
        let ch = ye.children;
        let lh = hf.children;
        Array.from(ch).forEach(function (val, index) {
            val.style.transform = "rotateY(0deg)";
            lh[index].style.transform = "rotateY(-180deg)";
        })
    }
    fh.onclick = function () {
        hf.style.zIndex = 2;
        ye.style.zIndex = 1;
        let ch = ye.children;
        let lh = hf.children;
        Array.from(lh).forEach(function (val, index) {
            val.style.transform = "rotateY(0deg)";
            ch[index].style.transform = "rotateY(-180deg)";
        })
    }


//    title

    // var imgst=document.images;
    // var x=10,y=20;
    // Array.from(imgst).forEach(function(img,index){
    //     if(img.title){
    //         var titled;
    //         img.onmouseover=function(e){
    //             titled=img.title;
    //             img.title="";
    //             var Div=document.createElement("div");
    //             Div.classList.add("Div");
    //             document.body.appendChild(Div);
    //             Div.innerHTML=titled;
    //             Div.style.left=(e.pageX+x)+"px";
    //             Div.style.top=(e.pageY+y)+"px";
    //             Div.show="fast";
    //         }
    //         img.onmousemove=function(e){
    //             const Divc=document.querySelector(".Div");
    //             Divc.style.left=(e.pageX+x)+"px";
    //             Divc.style.top=(e.pageY+y)+"px";
    //         }
    //         img.onmouseout=function(e){
    //             const Divc=document.querySelector(".Div");
    //             img.title=titled;
    //             Divc.remove();
    //         }
    //     }
    // })




})