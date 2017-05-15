$(function(){
	const lis=$(".bannerNav ul li");
	const bannerNavLis=$(".bannerNavLis");
	xuanxiang(lis,bannerNavLis);

	const nav_box_1=$(".nav_box_1");
	const navLis=$(".navLis");
	xuanxiang(nav_box_1,navLis);

	// const daohang_1_z = document.querySelectorAll(".daohang_1_z");
	const gouwu=$(".gouwu");
	const gouwuLis=$(".gouwuLis");
	xuanxiang(gouwu,gouwuLis);

	
	function zhez(dapeibtn,dapeicon){
		const btn=$(dapeibtn);
		const con=$(dapeicon);
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
				animate(con[i],{bottom:0},100);
			}
			btn[i].onmouseout=function(){
				
				animate(con[i],{bottom:-80},100);
			}
		}
	}
	zhez(".dapeiBox2_2_tu1",".dapeiBox2_2_tu1Lis");
	zhez(".dapeiBox2_2_tu2",".dapeiBox2_2_tu2Lis");
	zhez(".dapeiBox2_2_tu3",".dapeiBox2_2_tu3Lis");


	toumingdu(".banner_tu",".banner",".banner_lunbo1",[],1,"#fff",2000,0,"#999",".zuo",".you");

	
	// const neirong_xq=$(".neirong_xq");
	// const neirongBox2_1_jiantouleft=$(".neirongBox2_1_jiantouleft");
	// zhezhao(neirong_xq,neirongBox2_1_jiantouleft);

	const neirong_xq=$(".neirong_xq");
	const neirongBox2_1_jiantou=$(".neirongBox2_1_jiantou");
	zhezhao(neirong_xq,neirongBox2_1_jiantou);

	
	
	// zylunbo(".danpin",".danpin_fu",".danpin_jiantou_zuo",".danpin_jiantou_you","","",2000,"");
	zyjiedian(".danpin",".danpin li",".danpin_jiantou_zuo",".danpin_jiantou_you",5,8000)

	zy(".neirongBox2_1",".neirong_xq1",".neirongBox2_1_jiantouleft",".neirongBox2_1_jiantouright",".neirongBox2_1_lunbo1","#ff6700",5000,"#fff");
	zy(".neirongBox2_2",".neirong_xq2",".neirongBox2_2_jiantouleft",".neirongBox2_2_jiantouright",".neirongBox2_2_lunbo1","#ff6700",5000,"#fff");
	zy(".neirongBox2_3",".neirong_xq3",".neirongBox2_3_jiantouleft",".neirongBox2_3_jiantouright",".neirongBox2_3_lunbo1","#ff6700",5000,"#fff");
	zy(".neirongBox2_4",".neirong_xq4",".neirongBox2_4_jiantouleft",".neirongBox2_4_jiantouright",".neirongBox2_4_lunbo1","#ff6700",5000,"#fff");
	
	const dapeiBox1_2_a1=$(".dapeiBox1_2_a1");
	const dapeiBox2_2_xz1=$(".dapeiBox2_2_xz1");
	xuanxiang1(dapeiBox1_2_a1,dapeiBox2_2_xz1);

	const dapeiBox1_2_a2=$(".dapeiBox1_2_a2");
	const dapeiBox2_2_xz2=$(".dapeiBox2_2_xz2");
	xuanxiang1(dapeiBox1_2_a2,dapeiBox2_2_xz2);

	const dapeiBox1_2_a3=$(".dapeiBox1_2_a3");
	const dapeiBox2_2_xz3=$(".dapeiBox2_2_xz3");
	xuanxiang1(dapeiBox1_2_a3,dapeiBox2_2_xz3);

	function xuanxiang1(btn,con){
		
		for(let i=0;i<btn.length;i++){
			con[btn.length-1].style.display="block";
			btn[btn.length-1].style.color="#ff6700";
			btn[btn.length-1].style.textDdecoration="underline";
			btn[i].onmouseover=function(){
				for(let j=0;j<con.length;j++){
					con[j].style.display="none";
					btn[j].style.color="#424242";
					btn[j].style.textDdecoration="none";
				}
				btn[i].style.color="#ff6700";
				btn[i].style.textDdecoration="underline";
				con[i].style.display="block";
			}
			// btn[i].onmouseout=function(){

			// 	con[i].style.display="none";
			// 	con[btn.length-1].style.display="block";	
			// }
		}
	}

	// const znzia=$(".zhinengBox1_gd_a")[0];
	// // const znzi=$(".zhinengBox1_gd_a span")[0];
	// const zncon=$(".znIcon")[0];
	// znzia.onmouseover=function(){
	// 	animate(znzia,{color:"#ff6700",},500,function(){
	// 		// animate(zncon,{background:"#ff6700"},1000);
	// 	});
	// }
	// znzia.onmouseout=function(){
	// 	animate(znzia,{color:"#424242"},500);
	// }
	// zncon.onmouseout=function(){
	// 	animate(zncon,{background:"#b0b0b0"},500);
	// }

})