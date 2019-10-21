//发现不足然后静下心来搞定它
//内联事件处理程序
var style_change = function(){
	document.getElementById("apple").style.backgroundColor="green";
	document.getElementById("apple").style.color="yellow";
	return false;
}
var style_primary = function(){
	document.getElementById("apple").style.backgroundColor="white";
	document.getElementById("apple").style.color="black";
	return false;
}