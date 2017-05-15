// 页面加载时执行这个代码
window.onload=function () {
	
	// aplet(1);
	// 常量(没有单位)
	const designWidh=750;
	const fontSize=100;
	// document.querySelector("html").style.fontSize=fontSize+"px";(改变了html的字体)


	// 改变字体功能
	function resizeFont(){
		// (定义变量为文档的大小) 
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio = CW/designWidh;
		var newFontSize= fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";
	}
	// (调用)
	resizeFont();

	
	window.onresize= resizeFont;
}










