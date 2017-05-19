// $(function(){
// 	alert(1);

// })
function $(select,obj=document){
	if(typeof select=="function"){
		// window.onload=function(){
		// 	select();
		// }
		window.addEventListener("load",select,false);
	}
	else if(typeof select=="string"){
		//^< 开头是小于号 \w+ 字母、数字或下划线 >$结尾是大于号
		if(/^<\w+>$/.test(select)){
			return document.createElement(select.slice(1,-1));
		}else{
			return obj.querySelectorAll(select);

		}	
	}
}


/*选项卡的功能xuanxiang(btn,con)
		btn是选项卡按钮，con选项卡内容

	*/
	function xuanxiang(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				
				// for(let j=0;j<con.length;j++){

				// 	con[j].style.display="none";
				// }

				con[i].style.display="block";
			}

			btn[i].onmouseout=function(){
				con[i].style.display="none";	
			}
		}
	}

	


	/*遮罩*/

	function zhezhao(obj,zhezhao){
		obj.onmouseover=function(){
			zhezhao.style.display="block";	
		}
		obj.onmouseout=function(){
			zhezhao.style.display="none";	
		}
	}

// pic （轮播图）字符串的选择器，
	// bigbannerBox(通屏的banner盒子)
	// lis  （轮播点 ） 字符串的选择器
	// colorArr（ 通屏的banner盒子的所有颜色）是个数组 例如["red","blue","black"]
	// tuActiveBigZ  （图轮播时的层级）
	// liactiveBgColor （轮播获得焦点的颜色）
	// lunboTime （轮播时间）  填的是数字
	// tuChushiZ  （图的初始层级）
	// liscolor （轮播的颜色）
function Zlunbo(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor){
	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	tu[0].style.zIndex=tuActiveBigZ;
	li[0].style.background=liactiveBgColor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,lunboTime);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,lunboTime);

	}

	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuChushiZ;
				li[i].style.background=liscolor;
			
			}
			tu[j].style.zIndex=tuActiveBigZ;
			li[j].style.background=liactiveBgColor;
			banner.style.background=color[j];
			num=j;
		}
	}

	function move(){
		num++;
		if(num>2){
			num=0;
		}
		console.log(num)
		for(let i=0;i<tu.length;i++){
			tu[i].style.zIndex=tuChushiZ;
			li[i].style.background=liscolor;
		
		}
		tu[num].style.zIndex=tuActiveBigZ;
		li[num].style.background=liactiveBgColor;
		banner.style.background=color[num];

	}
}


//左右轮播
//pic  轮播的图片  字符串的选择器
// tpHezi  放图片的盒子  字符串的选择器
// leftbtn  banner图上左边按钮  字符串的选择器
// rightbtn  banner图上右边按钮  字符串的选择器
// li  （轮播点 ） 字符串的选择器
// liactiveBgColor （轮播获得焦点的颜色）
// lunboTime （轮播时间）  填的是数字
// liscolor （轮播的颜色）
function zylunbo(pic,tpHezi,leftbtn,rightbtn,li,liactiveBgColor,lunboTime,liscolor){
	//获取轮播图
	const tu=$(pic);
	// 获取放轮播图的盒子
	const img=$(tpHezi)[0];
	// 获取轮播图盒子的宽度转为整型
	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// banner图上左边按钮
	const leftbtn=$(leftbtn)[0];
	// banner图上右边按钮
	const rightbtn=$(rightbtn)[0];
	// 获取轮播点
	const lis=$(li);

	// 初始化
	for(let i=0;i<tu.length;i++){
		tu[i].style.left=imgW+"px";
	}
	
	tu[0].style.left=0;
	lis[0].style.background=liactiveBgColor;
	var t=setInterval(move,lunboTime);
	var num=0;
	var next=0;
	var flag=true;

	// 鼠标移进轮播点时发生的
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			if(flag){
				for(let j=0;j<lis.length;j++){
					lis[j].style.background=liscolor;
					tu[j].style.left=imgW+"px";
				}
				tu[i].style.left=0;
				lis[i].style.background=liactiveBgColor;
				clearInterval(t);
				num=i;
				next=i;
			}
			
		}
	}

	function move(type="l"){
		flag=false;
		// 左轮播
		if(type=="l"){
			next++;
			if(next>tu.length-1){
				next=0;
			}
			tu[next].style.left=imgW+"px";
			// lis[next].style.background="#fff";
			animate(tu[num],{left:-imgW},500);
		}
		// 右轮播
		else if(type=="r"){
			next--;
			if(next<0){
				next=tu.length-1;
			}
			tu[next].style.left=-imgW+"px";
			// lis[next].style.background="#fff";
			animate(tu[num],{left:imgW},500);
		}
		
		animate(tu[next],{left:0},500,function(){
			//轮播结束
			flag=true;
			lis[next].style.background=liactiveBgColor;
			lis[num].style.background=liscolor;
			// console.log(num+"--"+next);
			num=next;
		});		
	}	
	img.onmouseover=function(){
		clearInterval(t);
	}
	img.onmouseout=function(){
		t=setInterval(move,lunboTime);
	}
	leftbtn.onmouseover=function(){
		clearInterval(t);
	}
	leftbtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onclick=function(){
		if(flag){
			move("r");
		}		
	}			
}

// 获取scrollTop
function scrollobj(){
	let body=document.body;
	body.scrollTop=100;
	let html=document.documentElement;
	html.scrollTop=100;
	let obj;
	if(body.scrollTop==0){
		obj=html;
	}else{
		obj=body;
	}
	body.scrollTop=0;
	html.scrollTop=0;
	return obj;
}


// 事件
// yuan 是指事件源（某对象） 例如box
// shijian  事件（发生的事）  例如“click”
// chengxu  事件处理程序（去做什么）  例如function(){alert(1)};
// 第一次点击box，弹出23，再一次点击时不会弹出23
function one(yuan,shijian,chengxu){	
	// 添加yuan事件  执行传进来的程序
	yuan.addEventListener(shijian,chengxu,false);
	//再一次添加yuan事件   执行clear函数 （绑定的 事件处理程序 是清除事件的程序）
	yuan.addEventListener(shijian,clear,false);

	//清除事件
	function clear(){
		// alert(14);
		// 清除第一个绑定事件（执行传进来的程序）
		yuan.removeEventListener(shijian,chengxu,false);
		// 清除 第二次绑定事件（执行清除事件的事件）
		yuan.removeEventListener(shijian,clear,false);
	}
}

// 拖拽
// avtiveHezi  要移动的块
// 拖拽的对象需要绝对定位
// const box1=$(".box1")[0];
// const box2=$(".box2")[0];
// tuozhuai(box1);
// tuozhuai(box1);
function tuozhuai(avtiveHezi){
	const box=$(avtiveHezi)[0];
	// box.style.position="absolute";
	box.addEventListener("mousedown",down,false);
	// const boxW=parseInt(window.getComputedStyle(box,null).width);
	
	// const boxH=parseInt(window.getComputedStyle(box,null).height);
	// console.log(boxH)

	// let winW=document.documentElement.clientWidth;
	// // console.log(winW);
	// let winH=document.documentElement.clientHeight;
	// console.log(winH);
	let x;
	let y;
	let boxx;
	let boxy;
	let lefts;
	let tops;

	// let ydx=0;//相对于自己
	// let ydy=0;
	function down(e){
		//获取鼠标当前的位置（鼠标按下）
		x=e.clientX;
		y=e.clientY;

		// 获得box离屏幕的距离
		boxx=box.offsetLeft;
		boxy=box.offsetTop;
		// 添加移动事件 
		window.addEventListener("mousemove",move,false);
		// 添加鼠标抬起来的事件
		window.addEventListener("mouseup",up,false);
	}
	function move(e){
		// 鼠标移动到拎一个地方的位置
		let movex=e.clientX;
		let movey=e.clientY;
		// 移动之前和移动之后的差值
		let chax=movex-x;
		let chay=movey-y;

		lefts=boxx+chax;
		tops=boxy+chay;
		// lefts=boxx+ydx;
		// tops=boxy+ydy;
		
		if(lefts<=0){
			lefts=0;
		}
		if(tops<=0){
			tops=0;
		}
		// if(lefts>=winW){
		// 	lefts=winW-boxW;
		// 	console.log(lefts);
		// }
		// if(tops>=winH){
		// 	tops=winH-boxH;
		// 	console.log(tops);
		// }
		// 移动
		box.style.left=lefts+"px";
		box.style.top=tops+"px";
	}
	function up(){
		// ydx=lefts;
		 // ydy=tops;
		// 鼠标抬起来 清除move事件 使得box不随鼠标再动
		window.removeEventListener("mousemove",move,false);
		window.removeEventListener("mouseup",up,false);
	}
}



// 鼠标滚轮事件
// 
// obj 鼠标滚动事件源
// shang 鼠标滚轮往上
// xia 鼠标滚轮往下
function mousewheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		e.preventDefault();
		if(e.scrollDelta){
			// 谷歌
			if(e.scrollDelta>0){
				// 往上滚
				// alert(1);
				shang();
			}else{
				// 往下滚
				xia();
			}
		}else{
			// 火狐
			if(e.detail>0){
				// 下
				xia();
			}else{
				// 上
				shang();
			}
		}
	}
}


// 获取属性  例如高度
// 获取obj元素的style（weight，height）样式值
// style  填写的是字符串
// attr(obj,style);
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
}



// 下拉导航
// navBtn 导航标题按钮
// navLis  选项卡
function xialadh(navBtn,navLis){
	const lis=$(navBtn);
	const ul=$(navLis);

	// 遍历ul 
	for(let i=0;i<ul.length;i++){
		// 获取高度
		// attr(ul[i],"height") 一个封装好的函数
		let heig=parseInt(attr(ul[i],"height"));
		// 给ul添加一个属性节点（样式）属性名是h，属性值是heig
		ul[i].setAttribute("h",heig);
		// 初始化 让ul的高度为0
		ul[i].style.height=0;
	}

	// 遍历lis 实现lis上鼠标的移入 移出
	for(let i=0;i<lis.length;i++){
		// 鼠标移入
		// lis[i].onmouseover=function(){
		// 	// 判断lis 是否有子元素ul ul是lis的第二个子元素
		// 	if(lis[i].children[1]){
		// 		// 将lis的子元素赋给list list相当于ul
		// 		let list=lis[i].children[1];
		// 		// list 动  高度变为list的高度  
		// 		// list.getAttribute("h")获取高度  
		// 		// 相当于ul.getAttribute("h")获取属性h的属性值
		// 		animate(list,{height:list.getAttribute("h")},500)
		// 	}
		// }
		// // 鼠标移出
		// lis[i].onmouseout=function(){
		// 	// 判断lis 是否有子元素ul ul是lis的第二个子元素
		// 	if(lis[i].children[1]){
		// 		let list=lis[i].children[1];
		// 		// list的高度再次为0
		// 		animate(list,{height:0},500)
		// 	}
		// }


		// 调用hover.js  hover (obj,overfun,outfun)
		hover(lis[i],function(){
			if(lis[i].children[1]){
				let list=lis[i].children[1];
				animate(list,{height:list.getAttribute("h")},500)
			}
		},function(){
			if(lis[i].children[1]){
				let list=lis[i].children[1];
				animate(list,{height:0},500)
			}
		})
	}
}





















//鼠标移入移出事件 hover
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }

    //判断某个元素是否包含有另外一个元素
   function contains (parent,child) {
    if(parent.contains){
       return parent.contains(child) && parent!=child;
    }else{
      return (parent.compareDocumentPosition(child)===20);
    }
   }

  function getEvent (e) {
      return e||window.event;
  }