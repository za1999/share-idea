$(function(){
	//小火箭的点击与啥啥啥
	$(".top").click(function(){
	$('body,html').animate({scrollTop:0},500); 
});


	//热门文章的点击
	$(".remen").click(function(e){
				e.preventDefault();
		$(".aside-pop a,.tech dd").removeClass("achoice")
		$(this).addClass("achoice")
		$("article section").remove();
		url = "http://127.0.0.1:8020/李忠义的代码合集/shareId-Html/json/最热文章.json";
		page(url);
		
	})
	
	
	//最新文章的点击
	$(".newcontent").click(function(e){
				e.preventDefault();
		$(".aside-pop a,.tech dd").removeClass("achoice")
		$(this).addClass("achoice")
		$("article section").remove();
		url = "http://127.0.0.1:8020/李忠义的代码合集/shareId-Html/json/最新文章.json";
		page(url);
	})
	
	$(".tech dd").click(function(e){
		e.preventDefault();
		$(".aside-pop a,.tech dd").removeClass("achoice")
		$(this).addClass("achoice")
	})
	
	
	
	//直接开始交互！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	//第一步热门文章！！！！！！！！！
       page(url)
        
        
        
        //第二步，下拉再请求
        window.onscroll = function(){
         					if($(window).scrollTop() + $(window).height() >= $(document).height()){
                            page("http://127.0.0.1:8020/李忠义的代码合集/shareId-Html/json/最新文章.json")
				}
         }
        
})



//这就是这个页面所有文章的链接
var url="http://127.0.0.1:8020/李忠义的代码合集/shareId-Html/json/最热文章.json";
//这个是页数
var num;




//添加文章的方法
function page(url,unm){
		$.ajax({
					type: 'get',
					url:url ,
					dataType: "json",
					success: function(data) {
						if(data.code == 200) {
	                 console.log(data.data)
	                 $(data.data).each(function(index,item){
	                 	let page = `            <section>
                <header>${item.title}</header>
                <p>
                  ${item.body}
                </p>
                <footer>
                    <div class="dianzan">${item.like}</div>
                    <div>何定军</div>
                    <div>${item.created_at}</div>
                    <div class="guankan">${item.hot}</div>
                </footer>
            </section>`
	                 	$("article").append(page)
	                 	
	                 })

						} else {
							alert('输入内容错误！');
						}
					}
				});
}
