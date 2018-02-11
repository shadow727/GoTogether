(function($, doc){
	doc.getElementById('selgender').addEventListener('tap', function () {
				if ($.os.plus) {
					var a = [{
						title: "Male"
					}, {
						title: "Female"
					},{
						title: "Other"
					}];
					
					plus.nativeUI.actionSheet({
						title: "Set gender",
						cancel: "Cancel",
						buttons: a
					}, function(b) { /*actionSheet 按钮点击事件*/
						switch (b.index) {
							case 0:
								break;
							case 1:
								doc.getElementById("gen").value = "Male";
								break;
							case 2:
								doc.getElementById("gen").value = "Female";
								break;
							case 3:
								doc.getElementById("gen").value = "Other";
								break;
							default:
								break;
						}
					})
				}
			}, false);
	
	//选择日期
	doc.getElementById("selbirth").addEventListener('tap', function() {
					var dDate = new Date();
					var minDate = new Date();
					minDate.setFullYear(1900, 0, 1);
					var maxDate = new Date();
					maxDate.setFullYear(2100, 11, 31);
					var bir = doc.getElementById("birth");
					plus.nativeUI.pickDate(function(e) {
						var d = e.date;
						sessionStorage.setItem("birthday", d);
						bir.value = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
					}, function(e) {
						info.innerText = "please select your birthday";
					}, {
						title: "Select birthday",
						date: dDate,
						minDate: minDate,
						maxDate: maxDate
					});
				})
	
	
	
	doc.getElementById("next").addEventListener("tap", function(){
		var na = doc.getElementById("name").value;
		var gen = doc.getElementById("gen").value;
		var addr = doc.getElementById("addr").value;
		var ph = doc.getElementById("phone").value;
		var ema = doc.getElementById("email").value;
		if(na == null || gen == null || addr == null || ph == null || ema == null)
			plus.nativeUI.toast("Finish all information, please!");
		if(sessionStorage.getItem("birthday") == null || sessionStorage.getItem("language") == null)
			plus.nativeUI.toast("Finish all information, please!");
		var acc = {
			name: na,
			gender: gen,
			birthday: sessionStorage.getItem("birthday"),
			address: addr,
			phone: ph,
			email: ema,
			language: JSON.parse(sessionStorage.getItem("language"))
		};
		
		sessionStorage.setItem("account", JSON.stringify(acc));
		sessionStorage.removeItem("birthday");
		sessionStorage.removeItem("language");
		$.openWindow("set-password.html");
	});
}(mui, document));
