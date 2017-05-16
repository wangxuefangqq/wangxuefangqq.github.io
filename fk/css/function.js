// $(function(){
// 	alert(1);

// })
function $(select,obj=document){
	if(typeof select=="function"){
		window.onload=function(){
			select();
		}
	}
	else if(typeof select=="string"){
		return obj.querySelectorAll(select);

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
function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,zuo,you){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftbtn=$(zuo)[0];
	const rightbtn=$(you)[0];
	// const leftbtn = document.querySelectorAll(zuo);
	let flag=true;

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
			animate(tu[j],{opacity:1},500);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
			li[j].style.background=liactiveBgColor;
			banner.style.background=color[j];
			num=j;
			
				
		}
	}

	function move(type="l"){
		flag=false;
		if(type=="l"){
			num++;
			if(num>tu.length-1){
				num=0;
			}
		}
		else if(type=="r"){
			num--;
			if(num<0){
				num=tu.length-1;
			}	
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=tuChushiZ;
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


// 滚动条 
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
	for(let i=0;i<ul.length;i++){
		// 获取高度
		// attr(ul[i],"height") 一个封装好的函数
		// let heig=(ul[i].children.length)*30;
		// let heig=parseInt(window.getComputedStyle(ul[i],null).height)
		let heig=parseInt(attr(ul[i],"height"));
		// console.log(ul[i]);
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




















