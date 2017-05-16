$(function(){
    toumingdu(".bannerBox",".bannerBig",".banner_lunbo1",[],1,"#e5004f",2000,0,"#211616",".banner_leftbtn",".banner_rightbtn");

    xuanxiang(".daoh_left_lis ul li",".leftLis")

    xuxiangka2(".temaiBox_left_nav1",".temaiBox_left_nav1 i",".temaiBox_left_nr ul")
    function xuxiangka2(anniu,lis,xxlis){
        const btn1=$(anniu);
        const con1=$(lis);
        const xuxkk=$(xxlis);
        btn1[0].style.width=304+"px";
        btn1[0].style.borderColor="#e5004f";
        con1[0].style.display="block";
        btn1[0].style.fontWeight=700;
        xuxkk[0].style.display="block";
        btn1[0].style.fontSize=18+"px";
        for(let i=0;i<btn1.length;i++){
            btn1[i].onmouseover=function () {
                for(let j=0;j<con1.length;j++){
                    btn1[j].style.width=303+"px";
                    btn1[j].style.borderColor="#333";
                    con1[j].style.display="none";
                    btn1[j].style.fontWeight=400;
                    btn1[j].style.fontSize=14+"px";
                    xuxkk[j].style.display="none";
                }
                btn1[i].style.width=304+"px";
                btn1[i].style.borderColor="#e5004f";
                con1[i].style.display="block";
                btn1[i].style.fontWeight=700;
                btn1[i].style.fontSize=18+"px";
                xuxkk[i].style.display="block";
            }
        }
    }
    xuxiangka3(".sctkBox_xia_right_nav li",".rmpp_xiaokuai",".sctkBox_xia_right_nr");

    function xuxiangka3(anniu3,lis3,xuanxlis3){
        const btn1=$(anniu3);
        const con1=$(lis3);
        const xuanxk=$(xuanxlis3);
        btn1[0].style.borderColor="#e5004f";
        con1[0].style.display="block";
        xuanxk[0].style.display="block";
        for(let i=0;i<btn1.length;i++){
            btn1[i].onmouseover=function () {
                for(let j=0;j<con1.length;j++){
                    btn1[j].style.borderColor="#333";
                    con1[j].style.display="none";
                    xuanxk[j].style.display="none";
                }
                btn1[i].style.borderColor="#e5004f";
                con1[i].style.display="block";
                xuanxk[i].style.display="block";
            }
        }
    }


    zylb1(".ssmpBox_left_xq_nrlis",".ssmpBox_left_xq_nr",".ssmpBox_left_leftbtn",".ssmpBox_left_rightbtn",1000);
    zylb1(".nzBox_left_xq_nrlis",".nzBox_left_xq_nr",".nzBox_left_leftbtn",".nzBox_left_rightbtn",1000);
    zylb1(".jpBox_left_xq_nrlis",".jpBox_left_xq_nr",".jpBox_left_leftbtn",".jpBox_left_rightbtn",1000);

 zylb1(".ssxxBox_left_xq_nrlis",".ssxxBox_left_xq_nr",".ssxxBox_left_leftbtn",".ssxxBox_left_rightbtn",1000);

 zylb1(".xbBox_left_xq_nrlis",".xbBox_left_xq_nr",".xbBox_left_leftbtn",".xbBox_left_rightbtn",1000);

 zylb1(".mrhfBox_left_xq_nrlis",".mrhfBox_left_xq_nr",".mrhfBox_left_leftbtn",".mrhfBox_left_rightbtn",1000);


 zylb1(".hwydBox_left_xq_nrlis",".hwydBox_left_xq_nr",".hwydBox_left_leftbtn",".hwydBox_left_rightbtn",1000);

 zylb1(".nypsBox_left_xq_nrlis",".nypsBox_left_xq_nr",".nypsBox_left_leftbtn",".nypsBox_left_rightbtn",1000);

zylb1(".kaytBox_left_xq_nrlis",".kaytBox_left_xq_nr",".kaytBox_left_leftbtn",".kaytBox_left_rightbtn",1000);




    zylunbo(".ssmpzhingjiantu ul li",".ssmpzhingjiantu ul",".ssmpBox_center_leftbtn",".ssmpBox_center_rightbtn",".ssmpzhongjianlb","#e5004f",2000,"#515151");
    zylunbo(".chaoliuzhongjiantu ul li",".chaoliuzhongjiantu ul",".clnzBox_center_leftbtn",".clnzBox_center_rightbtn",".clnzzhongjianlb","#e5004f",2000,"#515151");

    tiaozhuan(".ssmpArea",".louctz1",".loucArea",".louctz1_zi");


    const back=$(".louctz2")[0];
    let sobj=scrollobj();
    back.onclick=function(){
        animate(sobj,{scrollTop:0},500);
    }


   






    function xianxianjs(xx1,xx2,xx3,xx4,xxfu,imgw,imgh){
        const lis1=$(xx1);
        const lis2=$(xx2);
        const lis3=$(xx3);
        const lis4=$(xx4);
        const lislll=$(xxfu);
        for(let i=0;i<lislll.length;i++){
            lislll[i].onmouseover=function(){
                animate(lis1[i],{width:imgw},400);
                animate(lis2[i],{height:imgh},400);
                animate(lis3[i],{height:imgh},400);
                animate(lis4[i],{width:imgw},400);
            }
            lislll[i].onmouseout=function(){
                animate(lis1[i],{width:0},400);
                animate(lis2[i],{height:0},400);
                animate(lis3[i],{height:0},400);
                animate(lis4[i],{width:0},400);
            }
        }
        
    }
    



})