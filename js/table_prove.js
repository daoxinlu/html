var prove={};
prove.id= function(id){
	return document.getElementById(id);
};
var fault_times = 0;
prove.idcheck = function(){
	var fid = prove.id("fruitname");
	var uid = prove.id("username");
	if(fid.value == ''||uid.value==""){
		if(fid.value==""){
		fruit_prove.innerHTML = "真没有喜欢的水果吗？";
		}
		if(uid.value == ''){
		name_prove.innerHTML = "请输入你的名字";
		fault_times += 1;
		}
		return false;
	}
	return true;
};
prove.idonfocus = function(){
	fruit_prove.innerHTML = "";
	name_prove.innerHTML = "";
	return false;
}
if(fault_times>2){
	button.button1.disabled = true;
}
prove.unlock=function(){
	if(prove.id("button1").disabled = true){
		prove.id("button1").disabled = false;
	}
	vaule = 0;
	return false;
}

