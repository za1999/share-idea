$(function(){
	//左部四个点击
	$(".infor-left ul li").click(function(){
		$(".infor-left ul li").removeClass("li-focus");
		$(this).addClass("li-focus")
	})
	
	
	//已读未读点击
	$(".bottom-top span").click(function(){
		$(".bottom-top span").removeClass("read-change")
		$(this).addClass("read-change")
	})
})