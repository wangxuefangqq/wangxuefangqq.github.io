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
				for(let j=0;j<con.length;j++){
					con[j].style.display="none";
				}
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
	// li[0].style.background=liactiveBgColor;
	// banner.style.background=color[0];
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
				// li[i].style.background=liscolor;
			
			}
			tu[j].style.zIndex=tuActiveBigZ;
			// li[j].style.background=liactiveBgColor;
			// banner.style.background=color[j];
			num=j;
		}
	}

	function move(){
		num++;
		if(num>=tu.length){
			num=0;
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.zIndex=tuChushiZ;
			// li[i].style.background=liscolor;
		}
		tu[num].style.zIndex=tuActiveBigZ;
		// li[num].style.background=liactiveBgColor;
		// banner.style.background=color[num];

	}
}



// 透明度轮播
function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,zuo,you){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftbtn=$(zuo)[0];
	const rightbtn=$(you)[0];
	// const leftbtn = document.querySelectorAll(zuo);
	var flag=true;

	tu[0].style.opacity=tuActiveBigZ;
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
	leftbtn.onmouseover=function(){
		clearInterval(t);
	}
	leftbtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onclick=function(){
		if(flag){
			move("l");
		}	

	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuChushiZ;
					li[i].style.background=liscolor;
				}
				// tu[j].style.opacity=tuActiveBigZ;
				animate(tu[j],{opacity:1},200);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
				li[j].style.background=liactiveBgColor;
				banner.style.background=color[j];
				num=j;
		}
	}

	function move(type="l"){
		flag=false;
		if(type=="r"){
			num++;
			if(num>tu.length-1){
				num=0;
			}
		}
		else if(type=="l"){
			num--;
			if(num<0){
				num=tu.length-1;
			}	
		}
		for(let i=0;i<tu.length;i++){
			// tu[i].style.opacity=tuChushiZ;
			animate(tu[i],{opacity:0},200)
			li[i].style.background=liscolor;
		
		}
		// tu[num].style.opacity=tuActiveBigZ;

		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.background=liactiveBgColor;
		banner.style.background=color[num];

	}

}



//左右轮播
function zylunbo(pic,tpHezi,zuo,you,lix,liactiveBgColor,lunboTime,liscolor){
	//获取轮播图
	const tu=$(pic);
	// 获取放轮播图的盒子
	const img=$(tpHezi)[0];
	// 获取轮播图盒子的宽度转为整型
	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// banner图上左边按钮
	const leftbtn=$(zuo)[0];
	// banner图上右边按钮
	const rightbtn=$(you)[0];
	// 获取轮播点
	// const lis=$(lix);
	

	// 初始化
	for(let i=0;i<2;i++){
		tu[i].style.left=imgW+"px";
	}
	
	tu[0].style.left=0;
	// lis[0].style.background=liactiveBgColor;
	var t=setInterval(move,lunboTime);
	var num=0;
	var next=0;
	var flag=true;

	// 鼠标移进轮播点时发生的
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onmouseover=function(){
	// 		if(flag){
	// 			for(let j=0;j<lis.length;j++){
	// 				lis[j].style.background=liscolor;
	// 				tu[j].style.left=imgW+"px";
	// 			}
	// 			tu[i].style.left=0;
	// 			lis[i].style.background=liactiveBgColor;
	// 			clearInterval(t);
	// 			num=i;
	// 			next=i;
	// 		}
			
	// 	}
	// }

	function move(type="l"){
		flag=false;
		// 左轮播
		if(type=="l"){
			next++;
			if(next>2){
				next=0;
			}
			tu[next].style.left=imgW+"px";
			// tu[next].style.left=imgW+"px";
			// lis[next].style.background="#fff";
			animate(tu[num],{left:-imgW},500);
		}
		// 右轮播
		else if(type=="r"){
			next--;
			if(next<0){
				next=1;
			}
			tu[next].style.left=-imgW+"px";
			// lis[next].style.background="#fff";
			animate(tu[num],{left:imgW},500);
		}
		
		animate(tu[next],{left:0},500,function(){
			//轮播结束
			flag=true;
			// lis[next].style.background=liactiveBgColor;
			// lis[num].style.background=liscolor;
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



function zy(pic,tpHezi,zuo,you,lix,liactiveBgColor,lunboTime,liscolor){
	const tu=$(pic);
	// 获取放轮播图的盒子
	const img=$(tpHezi)[0];
	// 获取轮播图盒子的宽度转为整型
	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// banner图上左边按钮
	const leftbtn=$(zuo)[0];
	// banner图上右边按钮
	const rightbtn=$(you)[0];
	// 获取轮播点
	const lis=$(lix);
	

	// 初始化
	for(let i=0;i<3;i++){
		tu[i].style.left=imgW+"px";
	}
	
	tu[0].style.left=0;
	lis[0].style.background="#fff";
	lis[0].style.borderColor=liactiveBgColor;
	var t=setInterval(move,lunboTime);
	var num=0;
	var next=0;
	var flag=true;

	// 鼠标移进轮播点时发生的
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			if(flag){
				for(let j=0;j<lis.length;j++){
					lis[j].style.background="#ccc";
					lis[j].style.borderColor=liscolor;
					tu[j].style.left=imgW+"px";
				}
				tu[i].style.left=0;
				lis[i].style.borderColor="#fff";
				lis[i].style.background=liactiveBgColor;
				clearInterval(t);
				num=i;
				next=i;
			}
		}
		lis[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				tu[j].style.left=imgW+"px";
				lis[j].style.background="#ccc";
				lis[j].style.borderColor=liscolor;
			}
			tu[i].style.left=0;
			lis[i].style.borderColor=liactiveBgColor;
			lis[i].style.background="#fff";
		}
	}

	function move(type){
		flag=false;
		// 左轮播
		if(type=="l"){
			next++;
			if(next>2){
				next=0;
			}
			tu[next].style.left=imgW+"px";
			tu[num].style.left=0;
			// tu[next].style.left=imgW+"px";
			lis[next].style.background="#fff";
			lis[next].style.borderColor=liactiveBgColor;
			animate(tu[num],{left:-imgW},500);
		}
		// 右轮播
		else if(type=="r"){
			next--;
			if(next<0){
				next=2;
			}
			tu[num].style.left=0;
			tu[next].style.left=-imgW+"px";
			lis[next].style.background="#fff";
			lis[next].style.borderColor=liactiveBgColor;
			animate(tu[num],{left:imgW},500);
		}
		lis[next].style.background="#fff";
		lis[num].style.background="#ccc";
		lis[num].style.borderColor=liscolor;
		lis[next].style.borderColor=liactiveBgColor;
		animate(tu[next],{left:0},500,function(){
			//轮播结束
			flag=true;
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
			move("r");
		}
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onclick=function(){
		if(flag){
			move("l");
		}		
	}

}

// 左右节点轮播
// hezi  放图片的盒子
// tupian 图片  填类名选择器
// zuobtn 左按钮
// youbtn 右按钮
// n 移动图片的个数
// lunbotime 轮播时间
function zyjiedian(hezi,tupian,zuobtn,youbtn,num,lunbotime){
	const box=$(hezi)[0];//获取盒子
	const imgW=parseInt(window.getComputedStyle((document.querySelector(tupian)),null).width);//获取每个图的宽度
	const left=$(zuobtn)[0];//获取左按钮
	const right=$(youbtn)[0];//获取右按钮
	let n=num;//定义移动图片的个数
	var flag=true;

	var t=setInterval(move,lunbotime);

	function move(type="l"){
		flag=false;
			if(type=="l"){
				//移动box盒子，左移 移动距离是图的宽度乘以n  当移动完之后，需将第一张图追加到后面，再使box回到原来的位置
			
			animate(box,{left:-imgW*n},500,function(){
				for(let i=0;i<n;i++){
					let first=box.firstElementChild;
					box.appendChild(first);
				}	
				box.style.left=0;

				flag=true;
				left.style.pointerEvents="none";
				left.style.color="#ccc";
				right.style.pointerEvents="auto";
				right.style.color="#999";
			})	
		}
		else if(type=="r"){
			//右移  先将最后一张图放到第一张前面，这是box盒子距离左边的距离是图的宽度-imgW+"px"，再使box回到原来的位置
			for(let i=0;i<n;i++){
				let last=box.lastElementChild;
				let first=box.firstElementChild;
				box.insertBefore(last,first);
				box.style.left=-imgW*n+"px";
			}

			animate(box,{left:0},500,function(){
				flag=true;
				right.style.pointerEvents="none";
				right.style.color="#ccc";
				left.style.pointerEvents="auto";
				left.style.color="#999";
			});
		}	
	}
	// box.ommouseover=function(){
	// 	clearInterval(t);
	// }
	// box.ommouseover=function(){
	// 	t=setInterval(move,lunbotime);
	// }
	// left.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// right.onmouseover=function(){
	// 	clearInterval(t);
	// }
	left.onclick=function(){
		if(flag){
			move("l")
		}
	}
	right.onclick=function(){
		if(flag){
			move("r")
		}
	}
	window.onfocus=function(){
		t=setInterval(move,lunbotime);
	}
	window.onblur=function(){
		clearInterval(t);
	}
}




function scrollobj(){
	let body=document.body;
	body.scrollTop=1;
	let html=document.documentElement;
	html.scrollTop=1;
	let obj;
	if(body.scrollTop==0){
		obj=html;
	}else{
		obj=body;
	}
	return obj;
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
	// for(let i=0;i<ul.length;i++){
	// 	// 获取高度
	// 	// attr(ul[i],"height") 一个封装好的函数
	// 	// let heig=(ul[i].children.length)*30;
	// 	// let heig=parseInt(window.getComputedStyle(ul[i],null).height)
	// 	let heig=parseInt(attr(ul[i],"height"));
	// 	// console.log(ul[i]);
	// 	// 给ul添加一个属性节点（样式）属性名是h，属性值是heig
	// 	ul[i].setAttribute("h",heig);
	// 	// 初始化 让ul的高度为0
	// 	ul[i].style.height=0;
	// }
	ul.style.height=0;
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
		// 	// 鼠标移出
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
				animate(list,{bottom:80},500)
			}
		},function(){
			if(lis[i].children[1]){
				let list=lis[i].children[1];
				animate(list,{height:0},500)
			}
		})
		
	}
}