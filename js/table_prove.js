var prove={};
prove.id= function(id){
	return document.getElementById(id);
};
var fault_times = 0;		//脚本因为只载入一次，所以只初始化一次
prove.idcheck = function(){
	var fid = prove.id("fruitname");
	var uid = prove.id("username");
	if(fid.value == ''||uid.value==""){
		fault_times += 1;
		
		if(fid.value==""){
		fruit_prove.innerHTML = "真没有喜欢的水果吗？";
		}
		if(uid.value == ''){
		name_prove.innerHTML = "请输入你的名字";
		}
		
		console.log(fault_times);
		prove.id("fruitname").focus();
		if(fault_times>=2){
			button1.disabled = true;
			return false;
		}
		
		return false;
	}else{return true;}
};
prove.idonfocus = function(){
	fruit_prove.innerHTML = "";
	name_prove.innerHTML = "";
	return false;
}

prove.unlock=function(){
	if(prove.id("button1").disabled = true){
		prove.id("button1").disabled = false;
	}
	fault_times = 0;
	prove.id("fruitname").focus();
	return false;
}
prove.bancopy=function(){
	alert('对不起，禁止复制！');
	return false;
}


