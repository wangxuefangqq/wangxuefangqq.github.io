$(function(){
	
	toumingdu(".banner_tu_1_tu",".banner_tu",".lunbo_1",[],1,"#db192a",3000,0,"#fff",".banner_zuo",".banner_you");


	tiaozhuan("section",".loucengtz ul li",".loucengtz",".yincangdh",50,"",["#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c"])

	const louc_back=$(".louc_back")[0];
	let sobj=scrollobj();
	louc_back.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

	zyjiedian(".miaosha_xinxi_left ul",".miaosha_xinxi_left ul li",".miaosha_xinxi_leftbtn",".miaosha_xinxi_rightbtn",5,5000)

	Zlunbo(".xpz_nr_right_s_a_1",".xpz_neirong_right_s_a",".xpz_neirong_right_lunbo_1",2,"#fd3131",1000,1,"#fff",".xpz_neirong_right_s_left",".xpz_neirong_right_s_right");



	youlandj(".celan_huiyuan",".celan_huiyuan2",60);
	youlandj(".celan_fankui",".celan_fankui2",50);	
	function youlandj(youlan,youlanLis,num){
		const celan_huiyuan=$(youlan);
		const celan_huiyuan2=$(youlanLis);
		for(let i=0;i<celan_huiyuan.length;i++){
			let t;
			celan_huiyuan[i].onmouseover=function(){
				t=setTimeout(function(){
					celan_huiyuan[i].style.background="#b61d1d";
					celan_huiyuan2[i].style.display="block";
					animate(celan_huiyuan2[i],{left:-num},500);
				},300)
				
			}
			celan_huiyuan[i].onmouseout=function(){
				clearTimeout(t);
				celan_huiyuan[i].style.background="#7a6e6e";
				celan_huiyuan2[i].style.display="none";
				animate(celan_huiyuan2[i],{left:0},500);
			}
		}
	}

	const celan_dingbu=$(".celan_dingbu")[0];
	celan_dingbu.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}


	const djsh=$(".miaoshashi")[0];
	const djsm=$(".miaoshafen")[0];
	const djss=$(".miaoshamiao")[0];

	let wuyi=new Date(2017,4,1,0,0,0);
	let wydjs=new daojishi(djsh,djsm,djss,wuyi);
	wydjs.play();
	

	xuanxk1(".paihangbang_neirong_nav_k1",".phb_nr_xq",".paihangbang_neirong_nav_x");
	xuanxk1(".banner_gonggao_1",".banner_xinxi ul",".banner_gonggao_x");
	function xuanxk1(nav2,navlis2,nav2x){
		const nav1=$(nav2);
		const navlis1=$(navlis2);
		const nav1x=$(nav2x);
		navlis1[0].style.display="block";
		nav1x[0].style.display="block";
		for(let i=0;i<nav1.length;i++){
			nav1[i].onmouseover=function(){
				for(let j=0;j<navlis1.length;j++){
					nav1x[j].style.display="none";
					navlis1[j].style.display="none";
				}
				nav1x[i].style.display="block";
				navlis1[i].style.display="block";
			}
		}
	}
	


	zyjiedian(".aishBox_xia_xia ul",".aishBox_xia_xia ul li",".aishBox_xia_leftbtn",".aishBox_xia_rightbtn",6,5000);

	zyjiedian(".aimeiliBox ul",".aimeiliBox ul li",".aimeiliBox_leftbtn",".aimeiliBox_rightbtn",6,5000);

	zyjiedian(".jiadgBox ul",".jiadgBox ul li",".jiadgBox_leftbtn",".jiadgBox_rightbtn",6,5000);

	zyjiedian(".gaojpBox ul",".gaojpBox ul li",".gaojpBox_leftbtn",".gaojpBox_rightbtn",6,5000);

	zyjiedian(".wan3cBox ul",".wan3cBox ul li",".wan3cBox_leftbtn",".wan3cBox_rightbtn",6,5000);

	zyjiedian(".aiydBox ul",".aiydBox ul li",".aiydBox_leftbtn",".aiydBox_rightbtn",6,5000);

	zyjiedian(".aibbBox ul",".aibbBox ul li",".aibbBox_leftbtn",".aibbBox_rightbtn",6,5000);

	zyjiedian(".aijiaBox ul",".aijiaBox ul li",".aijiaBox_leftbtn",".aijiaBox_rightbtn",6,5000);

	zyjiedian(".aiyuedBox ul",".aiyuedBox ul li",".aiyuedBox_leftbtn",".aiyuedBox_rightbtn",6,5000);

	zyjiedian(".aicheBox ul",".aicheBox ul li",".aicheBox_leftbtn",".aicheBox_rightbtn",6,5000);

	zyjiedian(".aiyouxiBox_xia_xia ul",".aiyouxiBox_xia_xia ul li",".aiyouxiBox_xia_leftbtn",".aiyouxiBox_xia_rightbtn",4,5000);

	zyjiedian(".shenghuolxBox ul",".shenghuolxBox ul li",".shenghuolxBox_leftbtn",".shenghuolxBox_rightbtn",4,5000);

	zyjiedian(".jingdjrBox ul",".jingdjrBox ul li",".jingdjrBox_leftbtn",".jingdjrBox_rightbtn",4,5000);

	zyjiedian(".diannao_xia ul",".diannao_xia ul li",".diannaoBox_leftbtn",".diannaoBox_rightbtn",12,5000);

	zyjiedian(".aichiBox_xia ul",".aichiBox_xia ul li",".aichiBox_leftbtn",".aichiBox_rightbtn",12,5000);



	const  ss=$(".banner_tubiao1 ul")[0];
	const  lis9=$(".banner_huaf")[0];
	const  con9=$(".banner_tb_yi");
	const  tubiao=$(".banner_tubiao1")[0];
	var t;
	for(let i=0;i<con9.length;i++){
		con9[i].onmouseover=function(){
			t = setTimeout(function(){
				animate(ss,{height:0},200);
				lis9.style.display="block";
				hfanniuzi[i].style.color="#e01222";
				hfanniu[i].style.borderTopColor="#e01222";
				hfLis[i].style.display="block";
				tubiao.style.display="none";
			},1000)
			
		}
		con9[i].onmouseout=function(){
			clearTimeout(t);
		}
	}


	const hfanniu=$(".huaf_nav1");
	const hfanniuzi=$(".huaf_nav1_bt");
	const hfLis=$(".banneryoulis");
	// hfanniuzi[0].style.color="#e01222";
	// hfanniu[0].style.borderTopColor="#e01222";
	// hfLis[0].style.display="block";
	for(let i=0;i<hfanniu.length;i++){
		hfanniu[i].onmouseover=function(){
			for(let j=0;j<hfanniuzi.length;j++){
				hfanniuzi[j].style.color="#666";
				hfanniu[j].style.borderTopColor="#ccc"
				hfLis[j].style.display="none";
			}
			hfanniuzi[i].style.color="#e01222";
			hfanniu[i].style.borderTopColor="#e01222";
			hfLis[i].style.display="block";
		}
	}
	
	const con11=$(".huaf_nav1_Lis ul li");
	const lis11=$(".huaf_nav1_Lis_xq");
	const xfk=$(".huafeicz_bejk");
	lis11[0].style.display="block";
	con11[0].style.background="#e01222"
	xfk[0].style.display="block";
	for(let i=0;i<con11.length;i++){
		con11[i].onmouseover=function(){
			for(let j=0;j<lis11.length;j++){
				lis11[j].style.display="none";
				xfk[j].style.display="none";
				con11[j].style.background="#fff";
			}
			lis11[i].style.display="block";
			xfk[i].style.display="block";
			con11[i].style.background="#e01222";
		}
	}

	const con12=$(".jipiao_navLis_zi");
	const lis12=$(".jipiao_navLis_xia_kk ul li");
	const xfk2=$(".jipiao_navLis_zi .huafeicz_bejk");
	lis12[0].style.display="block";
	con12[0].style.background="#e01222";
	xfk2[0].style.display="block";
	for(let i=0;i<con12.length;i++){
		con12[i].onmouseover=function(){
			for(let j=0;j<lis12.length;j++){
				lis12[j].style.display="none";
				xfk2[j].style.display="none";
				con12[j].style.background="#fff"
			}
			lis12[i].style.display="block";
			xfk2[i].style.display="block";
			con12[i].style.background="#e01222"
		}
	}

	const guanbi_xx=$(".guanbi_xx");
	for(let i=0;i<guanbi_xx.length;i++){
		guanbi_xx[i].onclick=function(){
				animate(ss,{height:69},200);
				lis9.style.display="none";
				tubiao.style.display="block";
		}

	}
	
})
