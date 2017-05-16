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
		// return obj.querySelectorAll(select);
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
// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor){
// 	const tu=$(pic);
// 	const banner=$(bigbannerBox)[0];
// 	const li = $(lis);
// 	const color = colorArr;
// 	tu[0].style.zIndex=tuActiveBigZ;
// 	li[0].style.background=liactiveBgColor;
// 	banner.style.background=color[0];
// 	var num=0;
// 	var t=setInterval(move,lunboTime);
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	banner.onmouseout=function(){
// 		t=setInterval(move,lunboTime);

// 	}

// 	for(let j=0;j<li.length;j++){
// 		li[j].onmouseover=function(){
// 			for(let i=0;i<tu.length;i++){
// 				tu[i].style.zIndex=tuChushiZ;
// 				li[i].style.background=liscolor;
			
// 			}
// 			tu[j].style.zIndex=tuActiveBigZ;
// 			li[j].style.background=liactiveBgColor;
// 			banner.style.background=color[j];
// 			num=j;
// 		}
// 	}

// 	function move(){
// 		num++;
// 		if(num>=tu.length){
// 			num=0;
// 		}
// 		console.log(num)
// 		for(let i=0;i<tu.length;i++){
// 			tu[i].style.zIndex=tuChushiZ;
// 			li[i].style.background=liscolor;
		
// 		}
// 		tu[num].style.zIndex=tuActiveBigZ;
// 		li[num].style.background=liactiveBgColor;
// 		banner.style.background=color[num];

// 	}
// }


function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
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


// function zylunbo(pic,tpHezi,zuo,you,lix,liactiveBgColor,lunboTime,liscolor){
// 	//获取轮播图
// 	const tu=$(pic);
// 	// 获取放轮播图的盒子
// 	const img=$(tpHezi)[0];
// 	// 获取轮播图盒子的宽度转为整型
// 	const imgW=parseInt(window.getComputedStyle(img,null).width);
// 	// banner图上左边按钮
// 	const leftbtn=$(zuo)[0];
// 	// banner图上右边按钮
// 	const rightbtn=$(you)[0];
// 	// 获取轮播点
// 	// const lis=$(lix);
	

// 	// 初始化
// 	for(let i=0;i<tu.length;i++){
// 		tu[i].style.left=imgW+"px";
// 	}
	
// 	tu[0].style.left=0;
// 	lis[0].style.background=liactiveBgColor;
// 	var t=setInterval(move,lunboTime);
// 	var num=0;
// 	var next=0;
// 	var flag=true;

// 	// 鼠标移进轮播点时发生的
// 	// for(let i=0;i<lis.length;i++){
// 	// 	lis[i].onmouseover=function(){
// 	// 		if(flag){
// 	// 			for(let j=0;j<lis.length;j++){
// 	// 				lis[j].style.background=liscolor;
// 	// 				tu[j].style.left=imgW+"px";
// 	// 			}
// 	// 			tu[i].style.left=0;
// 	// 			lis[i].style.background=liactiveBgColor;
// 	// 			clearInterval(t);
// 	// 			num=i;
// 	// 			next=i;
// 	// 		}
			
// 	// 	}
// 	// }

// 	function move(type="l"){
// 		flag=false;
// 		// 左轮播
// 		if(type=="l"){
// 			next++;
// 			if(next>tu.length-1){
// 				next=0;
// 			}
// 			tu[next].style.left=imgW+"px";
// 			// lis[next].style.background="#fff";
// 			animate(tu[num],{left:-imgW},500);
// 		}
// 		// 右轮播
// 		else if(type=="r"){
// 			next--;
// 			if(next<0){
// 				next=tu.length-1;
// 			}
// 			tu[next].style.left=-imgW+"px";
// 			// lis[next].style.background="#fff";
// 			animate(tu[num],{left:imgW},500);
// 		}
		
// 		animate(tu[next],{left:0},500,function(){
// 			//轮播结束
// 			flag=true;
// 			lis[next].style.background=liactiveBgColor;
// 			lis[num].style.background=liscolor;
// 			// console.log(num+"--"+next);
// 			num=next;
// 		});		
// 	}	
// 	img.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	img.onmouseout=function(){
// 		t=setInterval(move,lunboTime);
// 	}
// 	leftbtn.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	leftbtn.onclick=function(){
// 		if(flag){
// 			move("l");
// 		}
// 	}
// 	rightbtn.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	rightbtn.onclick=function(){
// 		if(flag){
// 			move("r");
// 		}		
// 	}			
// }

