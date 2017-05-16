$(function(){
	const navBox_yysc= $(".xuxiang");
	const navBox_yyscLis=$(".navBox_yyscLis");
	xuanxiang(navBox_yysc,navBox_yyscLis);

	const navBox_cp= $(".navBox_cp");
	const navBox_cpLis=$(".navBox_cpLis");
	xuanxiang(navBox_cp,navBox_cpLis);

	const navBox_zs= $(".navBox_zs");
	const navBox_zsLis=$(".navBox_zsLis");
	xuanxiang(navBox_zs,navBox_zsLis);

	const jingxuan_nr_yk_k= $(".jingxuan_nr_yk_k");
	const jingxuan_nr_yk_kLis=$(".jingxuan_nr_yk_kLis");
	xuanxiang(jingxuan_nr_yk_k,jingxuan_nr_yk_kLis);

	const box=$(".bannerBox_right_1_a")[0];
	const pic=$(".bannerBox_right_tu");
	pic[0].style.opacity=1;
	var t=setInterval(move,1000);
	var num=0;
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
	}
	function move(){
		num++;
		if(num>1){
			num=0;
		}
		for(let i=0;i<pic.length;i++){
			pic[i].style.opacity=0;
		}
		pic[num].style.opacity=1;
	}


	const bt=$(".box_right_nr_xq_1");
	const list=$(".box_right_nr_xq_1Lis");
	// console.log(list);
	
	for(let i=0;i<bt.length;i++){
		list[0].style.display="block";
		bt[i].onmouseover=function(){
			for(let j=0;j<list.length;j++){
				list[j].style.display="none";
			}
			list[i].style.display="block";
		}
		
	}


	// //沙发管家安装教程1的点击事件
	// 	function shafaanzhuangyi(){
	// 		const aa=$(".bannerzliuinputyi")[0];
	// 		const bb=$(".bannerzliuinputyidw")[0];
	// 		const close=$(".bzliuipyidwsx")[0];
	// 		const con=$(".bzliuipyidwssyi");
	// 		const btn=$(".bzliuipyidwx");
	// 		aa.onclick=function(){
	// 			bb.style.display="block";
	// 		}
	// 		close.onclick=function(){
	// 			bb.style.display="none";
	// 		}
	// 		for(let i=0;i<con.length;i++){
	// 		    con[i].onclick=function(){
	// 			    for(let j=0;j<btn.length;j++){
	// 				    btn[j].style.display="none";
	// 				    con[j].style.background="#f0fafc";
	// 				    con[j].style.borderBottom="1px solid #dddddd";
	// 				    con[j].style.color="#999999";
	// 			    }
	// 			    btn[i].style.display="block";
	// 			    con[i].style.background="#fff";
	// 			    con[i].style.borderBottom="0";
	// 				con[i].style.color="#0084bb";
	// 		    }
	// 	    }
	// 	}
	// 	shafaanzhuangyi();

	// 	//沙发管家安装教程1的点击事件
	// 	function shafaanzhuanger(){
	// 		const aa=$(".bannerzliuinputer")[0];
	// 		const bb=$(".bannerzliuerdw")[0];
	// 		const close=$(".bannerzliuerdwclose")[0];
	// 		aa.onclick=function(){
	// 			bb.style.display="block";
	// 		}
	// 		close.onclick=function(){
	// 			bb.style.display="none";
	// 		}
	// 	}
	// 	shafaanzhuanger();



});