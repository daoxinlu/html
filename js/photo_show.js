var eg = {};
eg.data = [['Christmas Icon Set Flat Color-02.png','Christmas Icon Set Flat Color-03.png'],
		['Christmas Icon Set Flat Color-04.png','Christmas Icon Set Flat Color-05.png'],
		['Christmas Icon Set Flat Color-06.png','Christmas Icon Set Flat Color-07.png'],
		['Christmas Icon Set Flat Color-08.png','Christmas Icon Set Flat Color-09.png']];
eg.showNumber = 0;
eg.groupNumber =1;
eg.groupSize = 4;
eg.show_bigphoto = function(group){
	var ul = document.getElementById("small_photo_list");
	ul.innerHTML = '';
	var start = (group-1)*eg.groupSize;
	var end = group*eg.groupSize;
	for(var i=start;(i<end&&i<eg.data.length);i++){
		
		var li = document.createElement("li");		//<img src="../img/eg.data[i][1]"id=thumbi"width=80 hegith="40"/>
		li.innerHTML = '<img src="./img/'+eg.data[i][1]+'" id='+i+' width="200" height="100" />';
		
		//下面编写鼠标监听事件,使用闭包
		if(eg.$("big_photo"+i)!=null){(function(i){
			eg.addListener(li,"click",function(){
				eg.showNumber = i;
				eg.showBig();
			});
		})(i);}			//这里传值i？
		ul.appendChild(li);
		console.log(li.id);
	}
};
eg.get_id = function(){
	eg.addListener(eg.$("big_photo_show"),"click",function(){
		var id = document.getElementsByTagName("img");
		return id;
	});
	return false;	
}
eg.$ = function(id){
	return document.getElementById(id);
}
eg.init = function(){
	eg.show_bigphoto(1);
};
eg.showBig = function(){
	eg.$("big_photo_show").innerHTML = '<img src="./img/'+eg.data[i][0]+'" id="big_photo'+i+'" width="400" height="200" />';
}
eg.init();
console.log(eg.get_id()[1].id);

//这里有几个问题，首先要把脚本放在body下边，不然会找不到变量，其次要先定义一个命名空间eg={};appendChild可以添加标签，引入脚本跟引入图片不一样，引入脚本不需要./，而引入图片需要，不知道谁设计的这么蛋疼，卡了好久，link标签后面要有/，meta不需要