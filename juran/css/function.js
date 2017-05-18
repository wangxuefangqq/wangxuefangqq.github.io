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
function toumingdu(pic,bigbannerBox,tuActiveBigZ,lunboTime,tuChushiZ,zuo,you){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	// const li = $(lis);
	// const color = colorArr;
	const leftbtn=$(zuo)[0];
	const rightbtn=$(you)[0];
	// const leftbtn = document.querySelectorAll(zuo);
	var flag=true;

	tu[0].style.opacity=tuActiveBigZ;
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
	// for(let j=0;j<li.length;j++){
	// 	li[j].onmouseover=function(){
	// 			for(let i=0;i<tu.length;i++){
	// 				animate(tu[i],{opacity:0},500);
	// 				// li[i].style.background=liscolor;
	// 			}
	// 			animate(tu[j],{opacity:1},500);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
	// 			// li[j].style.background=liactiveBgColor;
	// 			// banner.style.background=color[j];
	// 			num=j;
	// 	}
	// }
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
			animate(tu[i],{opacity:0},500);
			// li[i].style.background=liscolor;
		
		}
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		// li[num].style.background=liactiveBgColor;
		// banner.style.background=color[num];
	}

}



//  pic （轮播图）字符串的选择器，
	// bigbannerBox(通屏的banner盒子)
	// lis  （轮播点 ） 字符串的选择器
	// colorArr（ 通屏的banner盒子的所有颜色）是个数组 例如["red","blue","black"]
	// tuActiveBigZ  （图轮播时的层级）
	// liactiveBgColor （轮播获得焦点的颜色）
	// lunboTime （轮播时间）  填的是数字
	// tuChushiZ  （图的初始层级）
	// liscolor （轮播的颜色）
function Zlunbo(pic,bigbannerBox,lis,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,leftz,righty){
	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	// const color = colorArr;
	// banner图上左边按钮
	const left=$(leftz)[0];

	// banner图上右边按钮
	const right=$(righty)[0];

	tu[0].style.zIndex=tuActiveBigZ;
	li[0].style.background=liactiveBgColor;
	// banner.style.background=color[0];
	var num=0;
	let flag=true;
	var t=setInterval(move,lunboTime);
	
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuChushiZ;
				li[i].style.background=liscolor;
			}
			tu[j].style.zIndex=tuActiveBigZ;
			li[j].style.background=liactiveBgColor;
			// banner.style.background=color[j];
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
			console.log(1);
			num--;
			if(num<0){
				num=tu.length-1;
			}	
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.zIndex=tuChushiZ;
			li[i].style.background=liscolor;
		}
		tu[num].style.zIndex=tuActiveBigZ;
		li[num].style.background=liactiveBgColor;
		// animate(tu[num],{zIndex:tuActiveBigZ},500,function(){
			flag=true;
		// })
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,lunboTime);
	}
	left.onmouseover=function(){
		clearInterval(t);
	}
	left.onmouseout=function(){
		t=setInterval(move,lunboTime);
	}
	left.onclick=function(){
		if(flag){
			move("r");
		}
	}
	right.onmouseover=function(){
		clearInterval(t);
	}
	right.onmouseout=function(){
		t=setInterval(move,lunboTime);
	}
	right.onclick=function(){
		if(flag){
			move("l");
		}
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
function zylunbo(pic,tpHezi,li,liactiveBgColor,lunboTime,liscolor){
	//获取轮播图
	const tu=$(pic);
	// 获取放轮播图的盒子
	const img=$(tpHezi)[0];
	const hffirstkk=$(".huafeicz_bejk");
	// 获取轮播图盒子的宽度转为整型
	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// banner图上左边按钮
	// const leftbtn=$(leftbtn)[0];
	// banner图上右边按钮
	// const rightbtn=$(rightbtn)[0];
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
					hffirstkk[j].style.display="none";
					lis[j].style.background=liscolor;
					tu[j].style.left=imgW+"px";
				}
				hffirstkk[i].style.display="block";
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
			animate(tu[num],{left:-imgW},500);
		}
		// 右轮播
		else if(type=="r"){
			next--;
			if(next<0){
				next=tu.length-1;
			}
			tu[next].style.left=-imgW+"px";
			animate(tu[num],{left:imgW},500);
		}
		
		lis[next].style.background=liactiveBgColor;
			lis[num].style.background=liscolor;
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
}















// 导航栏
//sec是指每个楼层的 
// bt 是指左边要跳转时的按钮
// btnBox 是指装有所有按钮的大盒子
// Dh 是指导航栏
// num 是指距离多大时 要使得导航栏出现
//navH 导航栏的高度
// btnColor  按钮原来的颜色
// btnavtiveColor 按钮变化的颜色
function tiaozhuan(sec,bt,btnBox,Dh,navH,btnColor,colorArr){
	const section=$(sec);
	const btn=$(bt);
	const box=$(btnBox)[0];
	const nav=$(Dh)[0];
	const color=colorArr;
	const Ch=document.documentElement.clientHeight;
	let sobj=scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:section[i].offsetTop-45},500);
		}
	}

	let flagx=true;
	let flags=false;
	window.onscroll=function(){
		// 若滚动条的高度大于800，要让导航栏显示 
		if(sobj.scrollTop>=1790){
			box.style.display="block";
		}else{
			box.style.display="none";
		}
		// 这时接受的消息要往下走 
		if(sobj.scrollTop>=800){
			if(flagx){
				flagx=false;//关闭开关，继续往下走
				flags=true;//打开往上走的开关，可以接受到要往上走的消息
				animate(nav,{top:0},function(){
					flagx=true;
				})
			}
		}
		// 若滚动条的高度小于800，要让导航栏隐藏 
		else{
			if(flags){
				flags=false;
				flagx=true;//打开往下走的开关，可以接受到要往下走的消息
				animate(nav,{top:-navH},function(){
					flags=true;
				})
			}
		}
		for(let i=0;i<section.length;i++){
			if(sobj.scrollTop+0.5*Ch>=section[i].offsetTop){
				for(let j=0;j<section.length;j++){
					btn[j].style.background=btnColor;
				}
				btn[i].style.background=color[i];
			}
			if(sobj.scrollTop+Ch>=section[i].offsetTop){
				let img=$("img",section[i]);
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute("imgUrl");
				}
			}
		}
	}
	// 时间间隔函数 等待一秒 nav往上移
	setTimeout(function(){
		animate(nav,{top:-navH},function(){
			flags=true;
		});
	},1000)
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
			});
		}	
	}
	box.ommouseover=function(){
		clearInterval(t);
	}
	box.ommouseover=function(){
		t=setInterval(move,lunbotime);
	}
	left.onmouseover=function(){
		clearInterval(t);
	}
	right.onmouseover=function(){
		clearInterval(t);
	}
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


	class time{
			// 构造函数
			constructor(h,m,s){
				// 初始化
				this.h=h;
				this.m=m;
				this.s=s;
				this.play();
			}
			play(){
				// this.getTimes() 是map
				this.writes(this.getTimes());
				this.update();
				// console.log(this.getTimes());
			}
			// 获取本地时间（日期）
			getTimes(){
				// 创建日期
				let now=new Date();
				// 定义h为本地时间的小时
				// now.getHours() 获取本地时间的小时
				let h=now.getHours();
				// m为本地时间的分钟
				let m=now.getMinutes();
				// s为本地时间的秒
				let s=now.getSeconds();
				// 创建一个map对象
				let map=new Map();
				// 给map添加属性
				map.set("h",h);
				map.set("m",m);
				map.set("s",s);
				// 返回map
				return map;
			}
			// 将本地时间显示在网页中
			// 传参（将获取的本地时间的map传进来）
			writes(map){
				// time的属性h 在网页中显示 map属性h的值
				this.h.innerHTML=map.get("h");
				this.m.innerHTML=map.get("m");
				this.s.innerHTML=map.get("s");
			}

			// 更新时间 每隔一秒执行一次this.writes(this.getTimes())  在使用setInterval时需要注意this
			update(){
				let that=this;
				// setInterval 是属于window的 
				// 如果要用this.writes 就会出错，因为this代表的不是time，是window
				// 所以需要先将上面的this 保存给that
				setInterval(function(){
					// console.log(this);
					that.writes(that.getTimes());
				},1000);
			}
		}
		// 倒计时 继承time的h,m,s
		class daojishi{
			// 构造函数
			constructor(h,m,s,date){
				this.h=h;
				this.m=m;
				this.s=s;
				this.date=date;
			}
			play(){
				// 将本地时间显示在网页中
				this.writes(this.getChaTime());
				// 更新时间
				this.update();
			}
			// 计算当前时间与五一时间的差值
			getChaTime(){
				// 创建日期
				let now=new Date();
				// 时间差值等于五一的时间减去当前的时间
				// this.date是指传进来的五一时间
				// 时间差值是毫秒
				let chatime=this.date.getTime()-now.getTime();
				// 换算为秒
				chatime/=1000;
				// 换算为 天 时 分 秒
				let h=parseInt(chatime/60/60%24);
				let m=parseInt(chatime/60%60);
				let s=parseInt(chatime%60);
				// 实例化一个map对象
				let map=new Map();
				//map添加属性
				if(h<10){
					map.set("h","0"+h);
				}else{
					map.set("h",h);
				}
				if(m<10){
					map.set("m","0"+m);
				}else{
					map.set("m",m);
				}
				if(s<10){
					map.set("s","0"+s);
				}else{
					map.set("s",s);
				}
				return map;
			}
			// 将本地时间显示在网页中
			writes(map){
				this.h.innerHTML=map.get("h");
				this.m.innerHTML=map.get("m");
				this.s.innerHTML=map.get("s");
			}
			// 更新时间
			update(){
				let that=this;
				setInterval(function(){
					// that.fwrites;
					// 这里不能有super super是个类
					// 每隔一秒 执行一次writes函数
					that.writes(that.getChaTime());
				},1000)
			}
			
		}