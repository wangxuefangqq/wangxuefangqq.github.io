$(function(){

	const nav_dingweei=$(".nav_dingweei")[0];
	const lis3=$(".nav_dingwei_lis")[0];
	const nav_dingwei_lis2=$(".nav_dingwei_lis2")[0];
	const lis1=$(".nav_dingwei_lis2_zi1 div")[0];
	const body=$("body")[0];

	nav_dingweei.onclick=function(e){
		e.stopPropagation();
		nav_dingwei_lis2.style.display="block";
		lis3.style.display="none";
	}
	lis1.onclick=function(e){
		e.stopPropagation();
		lis3.style.display="block";
		nav_dingwei_lis2.style.display="none";
	}
	body.onclick=function(){
		lis3.style.display="none";
		nav_dingwei_lis2.style.display="none";
	}


	zylunbo(".bB_center ul li",".bB_center ul",".bleftbtn",".brightbtn",".bB_center_lunbo1","#e40077",1000,"#ccc")

	const backBox1=$(".backBox1");
	for(let i=0;i<backBox1.length;i++){
		backBox1[i].onmouseover=function(){
			backBox1[i].style.transform="translateX(-64px)";
		}
		backBox1[i].onmouseout=function(){
			backBox1[i].style.transform="translateX(-0px)";
		}
	}


zyjiedian(".cuxiaoBox_nr ul",".cuxiaoBox_nr ul li",".cuxiaoleft",".cuxiaoright",1000)

	const con1=$(".gonggao_center")[0];
	const lis13=$(".gonggao_center1");
	var t=setInterval(move,1000);
	const gonggaoleftbtn=$(".ggleftbtn")[0];
	const gonggaorightbtn=$(".ggrightbtn")[0];
	var flag=true;
	function move(type="l"){
        flag=false;
		if(type=="l"){
            let lis3=con1.firstElementChild;
            lis3.style.width=0;
            con1.appendChild(lis3);
            lis3.style.width="50%";
            flag=true;
		}
		if(type=="r"){
            let lis3=con1.firstElementChild;
			let lis4=con1.lastElementChild;
            lis4.style.width=0;
			con1.insertBefore(lis4,lis3);
            lis4.style.width="50%";
            flag=true;
		}
	}
	for(let i=0;i<lis13.length;i++){
		lis13[i].onmouseover=function(){
	        clearInterval(t);
	    }
	    lis13[i].onmouseout=function(){
	        t=setInterval(move,1000);
	    }
	}
	gonggaoleftbtn.onmouseover=function(){
        clearInterval(t);
	}
    gonggaorightbtn.onmouseover=function(){
        clearInterval(t);
    }
    gonggaoleftbtn.onmouseout=function(){
       t=setInterval(move,1000);
	}
    gonggaorightbtn.onmouseout=function(){
        t=setInterval(move,1000);
    }
    gonggaoleftbtn.onclick=function(){
		if(flag){
			move("r");
        }
	}
    gonggaorightbtn.onclick=function(){
        if(flag){
            move("l");
        }
    }



    




























})