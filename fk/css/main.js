$(function(){
	const weixin1=$(".fenxiang_a")[0];
	const weixinLis=$(".weixinLis")[0];
	zhezhao(weixin1,weixinLis);


	xialadh(".daohang_1_z",".shouye_nav");


	const gouwu = document.querySelectorAll(".gouwu");
	const gouwuLis = document.querySelectorAll(".gouwuLis");
	
	xuanxiang(gouwu,gouwuLis);

	toumingdu(".banner_tu_img",".banner",".lunbo",[],1,"#a10000",3000,0,"#ddd",".zuo",".you");


	const backTop=$(".backTop_3")[0];
	let sobj=scrollobj();
	backTop.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

})