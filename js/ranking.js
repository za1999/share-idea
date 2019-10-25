$(function(){
				$.ajax({
					type: 'get',
					url: "https://demo.12zw.club/ranginglist/getProjectMessage",
					dataType: "json",
					success: function(data){
						if(data.code == 200) {
							console.log(data)

						} else {
							alert('输入内容错误！');
						}
					}
				});
})