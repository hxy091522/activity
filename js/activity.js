//推荐活动
$("#recommend").click(function(){
	$(".layer").addClass("open");
	$(".bg").addClass("blur");
});

$("#recommendCode").click(function(){
	$(".layer-code").addClass("open");
	$(".bg").addClass("blur");
});

$(".layer").click(function(e){
	$(".layer").removeClass("open");
	$(".bg").removeClass("blur");
});

$(".layer-code").click(function(e){
	$(".layer-code").removeClass("open");
	$(".bg").removeClass("blur");
});

$("#activate").click(function(){
	var phoneNum=$("#phoneNum").val();
	var codeMsg=$("#codeMsg").val();
	var mobileMvalidate = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/;
	var smsCodevalidate = /^\d{6}$/;
	if(phoneNum==""||phoneNum==null){
		alert("请输入手机号码");
		$("#phoneNum").focus();
		return false;
	}else if(phoneNum.match(mobileMvalidate) == null){
		alert("手机格式不正确");
		$("#phoneNum").focus();
		return false;
	}else if(codeMsg==""||codeMsg==null){
		alert("短信验证码");
		$("#codeMsg").focus();
		return false;
	}else if(codeMsg.match(smsCodevalidate) == null){
		alert("短信验证码格式不正确");
		$("#codeMsg").focus();
		return false;
	}else{
		$(".phone-form").fadeOut();
		$("#shareBox").fadeIn();
		
	}
	
});


$("#sendMsg").click(function(){
	var phoneNum=$("#phoneNum").val();
	if(phoneNum==""||phoneNum==null){
		alert("请输入手机号码");
		$("#phoneNum").focus();
		return false;
	}else{
		settime(this);
	}
})

//发送短信倒计时
var countdown=60; 
function settime(val) { 
	if (countdown == 0) { 
		val.removeAttribute("disabled");    
		val.value="获取"; 
		countdown = 60;
		return false;
	} else { 
		val.setAttribute("disabled", true); 
		val.value="(" + countdown + ")"; 
		countdown--; 
	} 
	setTimeout(function() { 
		settime(val) 
	},1000) 
}