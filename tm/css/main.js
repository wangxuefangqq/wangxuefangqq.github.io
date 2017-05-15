$(function(){
	const header_wzdh= $(".header_wzdh");
	const header_wzdh_Lis=$(".header_wzdh_Lis");
	xuanxiang(header_wzdh,header_wzdh_Lis);

	const header_sjzc= $(".header_sjzc");
	const header_sjzc_Lis=$(".header_sjzc_Lis");
	xuanxiang(header_sjzc,header_sjzc_Lis);

	const header_sjb= $(".header_sjb");
	const header_sjb_Lis=$(".header_sjb_Lis");
	xuanxiang(header_sjb,header_sjb_Lis);

	const header_scj= $(".header_scj");
	const header_scj_Lis=$(".header_scj_Lis");
	xuanxiang(header_scj,header_scj_Lis);


	const header_tb= $(".header_tb");
	const header_tb_Lis=$(".header_tb_Lis");
	xuanxiang(header_tb,header_tb_Lis);

	const bannerBox1_1= $(".bannerBox1_1");
	const bannerBoxLis=$(".bannerBoxLis");
	xuanxiang(bannerBox1_1,bannerBoxLis);

	const firstBox2_1= $(".firstBox2_1");
	const firstBox2_1_lis=$(".firstBox2_1_lis");
	xuanxiang(firstBox2_1,firstBox2_1_lis);

	const firstBox2_2= $(".firstBox2_2");
	const firstBox2_2_lis=$(".firstBox2_2_lis");
	xuanxiang(firstBox2_2,firstBox2_2_lis);

	const firstBox2_3= $(".firstBox2_3");
	const firstBox2_3_lis=$(".firstBox2_3_lis");
	xuanxiang(firstBox2_3,firstBox2_3_lis);

	const firstBox2_4= $(".firstBox2_4")[0];
	const jiazai=$(".jiazai")[0];

	firstBox2_4.onmouseover=function(){
		firstBox2_4.style.background="#dd2727";
		firstBox2_4.style.color="#fff";
		jiazai.classList.add("active");
		// animate(jiazai,{transformRotate:360},1000)
	}
	firstBox2_4.onmouseout=function(){
		firstBox2_4.style.background="#fff";
		firstBox2_4.style.color="#999";
		jiazai.classList.remove("active");
	}

	const firstobj=$(".firstBox2 li");
	xuanzhuan(firstobj);
	let firstflag=true;
	function xuanzhuan(obj){
		firstBox2_4.onclick=function(){
			if(firstflag){
				firstflag=false;
				for(let i=0;i<obj.length;i++){
					obj[i].style.transform="rotateY(360deg)";
				}
			}
			else{
				firstflag=true;
				for(let i=0;i<obj.length;i++){
					obj[i].style.transform="rotateY(0deg)";
				}
			}
		}
	}



	toumingdu(".bannerTu1",".bannerArea",".bannerBox3_1",["#e8e8e8","#f4d9c4","#e8e8e8","#173c80","#0876f3","#000"],1,"#ccc",2000,0,"#333");


	tiaozhuan("section",".louctz_btn",".louctz",".Dhlan",50,"#666",["#ea5f8d","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#dd2727"]);



	const meiliBox2_1= $(".meiliBox2_1")[0];
	const meiliBox2_1lis=$(".meiliBox2_1lis")[0];
	for(let i=0;i<meiliBox2_1.length;i++){
		meiliBox2_1[i].onmouseover=function(){
			for(let j=0;j<meiliBox2_1lis.length;j++){
				meiliBox2_1lis[j].style.display="none";
				meiliBox2_1lis[j].style.opacity=0;
			}
			meiliBox2_1lis[i].style.display="block";
			animate(meiliBox2_1lis[i],{opacity:1},300)
		}
	}



	const louctz_dingbu=$(".louctz_dingbu")[0];
	let sobj=scrollobj();
	louctz_dingbu.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

	const louctz=$(".louctz")[0];
	const btn=$(".louctz_btn");
	const color=["#ea5f8d","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"];
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			btn[i].style.background=color[i];
		}
		btn[i].onmouseout=function(){
			btn[i].style.background="#666";
		}
	}

	const daohangBox2_1_tu=$(".daohangBox2_1_tu");
	const daohangBox2_1=$(".daohangBox2_1");
	// xuanxiang(daohangBox2_1,daohangBox2_1_tu);
	for(let i=0;i<daohangBox2_1.length;i++){
		daohangBox2_1[i].onmouseover=function(){
			daohangBox2_1_tu[i].style.opacity=1;
			animate(daohangBox2_1_tu[i],{top:-13},200);
		}
		daohangBox2_1[i].onmouseout=function(){
			animate(daohangBox2_1_tu[i],{top:-3},200,function(){
				daohangBox2_1_tu[i].style.opacity=0;
			});
		}
	}
	
	const daohangBox2_1_2_tu=$(".daohangBox2_1_2_tu");
	const daohangBox2_1_2=$(".daohangBox2_1_2");
	// xuanxiang(daohangBox2_1_2,daohangBox2_1_2_tu);
	for(let i=0;i<daohangBox2_1_2.length;i++){
		daohangBox2_1_2[i].onmouseover=function(){
			daohangBox2_1_2_tu[i].style.opacity=1;
			animate(daohangBox2_1_2_tu[i],{top:-13},200);
		}
		daohangBox2_1_2[i].onmouseout=function(){
			animate(daohangBox2_1_2_tu[i],{top:-3},200,function(){
				daohangBox2_1_2_tu[i].style.opacity=0;
			});
		}
	}
	

	const img1=$(".secondBox1_2tu1");
	for(let i=0;i<img1.length;i++){
		img1[i].onmouseover=function(){
			animate(img1[i],{width:150,height:150},500);
		}
		img1[i].onmouseout=function(){
			animate(img1[i],{width:130,height:130},500);
		}
	}

	// const img2=$("");
	imgdt(".meiliBox2_3_1tu");
	imgdt(".meiliBox2_3_4tu");
	imgdt(".meiliBox2_4_1tu");
	imgdt(".meiliBox2_4_2tu");
	imgdt(".chaodianBox2_2_1tu");
	imgdt(".chaodianBox2_2_2tu");
	imgdt(".dazaoBox2_4_1tu");
	function imgdt(img){
		const img2=$(img);
		for(let i=0;i<img2.length;i++){
			img2[i].onmouseover=function(){
				animate(img2[i],{right:10},500);
			}
			img2[i].onmouseout=function(){
				animate(img2[i],{right:0},500);
			}
		}
	}
	

	cldt(".right_cl_mao",".right_cl_maoLis");
	cldt(".celan_zichan",".celan_zichanLis");
	cldt(".celan_guanzhu",".celan_guanzhuLis");
	cldt(".celan_cz",".celan_czLis");
	cldt(".celan_yhfk",".celan_yhfkLis");
	cldt(".celan_top",".celan_topLis");
	function cldt(kuang,lie){
		const img=$(kuang);
		const Lis=$(lie);
		let t;
		for(let i=0;i<img.length;i++){
		
			img[i].onmouseover=function(){
				t=setTimeout(function(){
					Lis[i].style.display="block";
					animate(Lis[i],{opacity:1,left:-90},500);
				},1000)
			}
			img[i].onmouseout=function(){
				if(t){
					clearTimeout(t);
				}	
				animate(Lis[i],{opacity:0,left:-140},500,function(){
					Lis[i].style.display="none";
				});
			}
		}
		
	}


	const celan_ewm= $(".celan_ewm");
	const celan_ewmLis=$(".celan_ewmLis");
	xuanxiang(celan_ewm,celan_ewmLis);


	const firstBox1_2tu1= $(".firstBox1_2tu1");
	const firstBox1_tu1=$(".firstBox1_tu1");
	const img3=$(".firstBox1_2tu1_dj");

	for(let i=0;i<firstBox1_2tu1.length;i++){
		firstBox1_2tu1[i].onmouseover=function(){
			img3[i].style.display="block";
			firstBox1_tu1[i].style.zIndex=2;
		}
		firstBox1_2tu1[i].onmouseout=function(){
			img3[i].style.display="none";	
			firstBox1_tu1[i].style.zIndex=1;
		}
	}


	zyjiedian(".firstBox1_2",".firstBox1_2tu1",".firstBox1_2_zuo",".firstBox1_2_you",3,10000)
	

	
	const img4=$(".firstBox1_2tu1_dj img");
	for(let i=0;i<img4.length;i++){
		img4[i].onmouseover=function(){
			animate(img4[i],{width:46,height:40},500);
		}
		img4[i].onmouseout=function(){
			animate(img4[i],{width:36,height:30},500);
		}
	}

	const img2=$(".firstBox1_tu_dj img");
	
	for(let i=0;i<img2.length;i++){
		img2[i].onmouseover=function(){
			animate(img2[i],{width:80,height:67},500);
		}
		img2[i].onmouseout=function(){
			animate(img2[i],{width:70,height:57},500);
		}
	}

	
	const celan_top=$(".celan_top")[0];
	celan_top.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

	sxjiedian(".meiliBox2_1_zi1",".meiliBox2_1_zi1_zi",30);
	sxjiedian(".chaodianBox2_1_zi1",".chaodianBox2_1_zi1_zi",30);
	sxjiedian(".jujiaBox2_1_zi1",".jujiaBox2_1_zi1_zi",30);
	sxjiedian(".dazaoBox2_1_zi1",".dazaoBox2_1_zi1_zi",30);
	sxjiedian(".huwaiBox2_1_zi1",".huwaiBox2_1_zi1_zi",30);
	sxjiedian(".qinziBox2_1_zi1",".qinziBox2_1_zi1_zi",30);
	sxjiedian(".firstBox1_2zi2Box",".firstBox1_2zi2",40);
})