$(function() {
	//登录的点击
	var state = 1;
	$("#user").click(function() {
		if(state == 1) {
			state = 0;
		} else {
			state = 1;
		}
	})
	$(".login-btn").click(function() {
		let username = $(".account").val();
		let password = $(".password").val();
//				console.log(username,password,state);
//		$.ajax({
//			type: 'POST',
//			url: "https://demo.12zw.club/user/login",
//			dataType: "json",
//			data:{
//				account: username,
//				password: password,
//				status: state
//			},
//			success: function(data) {
//				console.log(data);
//				if(data.code == 200) {
//					alert("成功")
//				} else {
//					alert('账号密码错误！');
//				}
//			}
//		});
                  window.open("index.html","_self")
	})
})