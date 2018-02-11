function selGender()
{
	var gen = document.getElementById("sel");
			document.getElementById('sel').addEventListener('tap', function() {
			if (mui.os.plus) {
				var a = [{
					title: "Male"
				}, {
					title: "Female"
				},{
					title: "Other"
				}];
				
				var gen;
				plus.nativeUI.actionSheet({
					title: "Set gender",
					cancel: "Cancel",
					buttons: a
				}, function(b) { /*actionSheet 按钮点击事件*/
					switch (b.index) {
						case 0:
							break;
						case 1:
							gen = "Male"
							break;
						case 2:
							gen = "Female"
							break;
						case 3:
							gen = "Other"
							break;
						default:
							break;
					}
				})
			}
		}, false);
		
		document.getElementById("sel") = gen;
}
