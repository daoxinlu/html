//事件监听的兼容问题
var eg = {};
eg.$ = function(id){
	return document.getElementById(id);
}

//在这里定义
eg.addListener = function(target,type,handler){
	if(target.addEventListener){
		target.addEventListener(type,handler,false);
	}else if(target.attachEvent){
		target.attachEvent("on"+type,handler);
	}else{
		target["on"+type]=handler;
	}
};