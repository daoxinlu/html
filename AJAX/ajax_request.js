eg.ajax = function(config,callback){
	var xmlhttp;
	if(window.XMLHttpRequest){
		
		xmlhttp = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try{//尝试建立一个兼容对象
			xmlhttp = new ActiveXObject("Mircrosoft.XMLHTTP");
		}catch(e){
			try{//尝试建立一个高版本对象
				xmlhttp = new ActiveXObject("msxm12.XMLHTTP");
			}catch(x){
			}
		}
	}
	if(xmlhttp){//表示创建成功的话
		console.log("xmlhttp创建成功");
		if(config.ISASYN{
			xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState ==4&&xmlhttp.status==200){
					callback(xmlhttp.responseText,xmlhttp.responseXML);
					//把服务器响应的数据传递给回调函数callback
				}
			};
			
			xmlhttp.open(config.TYPE,config.URL,true);
			xmlhttp.send(config.DATA);	//发送异步ajax请求
		}else{
			xmlhttp.open(config.TYPE,,config.URL,false);
			xmlhttp.send(config.DATA);	//发送同步ajax请求
			callback(xmlhttp.responseText,xmlhttp.responseXML);
		}
	}
};
(function(){
	var ajaxBtn = eg.$("ajaxbtn");
	eg.addListener(ajaxBtn,"click",function(){
		eg.AJAX({TYPE:"GET",
			URL:"4-4.txt",
			ISASYN:true
		},function(data){
			eg.$("myajax").innerHTML = data;
		});
	});
})();

