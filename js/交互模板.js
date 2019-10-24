						$.ajax({
					type: 'post',
					url: "demo.12zw.club/user/login",
					dataType: "json",
					success: function(data) {
						if(data.code == 200) {
	

						} else {
							alert('输入内容错误！');
						}
					}
				});