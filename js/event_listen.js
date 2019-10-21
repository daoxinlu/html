var freeword = new Array('苹果','西瓜','葡萄','香蕉','哈密瓜','榴莲','猕猴桃','水蜜桃','李子','梨','甘蔗','西红柿')
var item=0;
function test(e){
	
	var oEvent=e||event;
	var x = oEvent.screenX;
	var y = oEvent.screenY;
	console.log(x+','+y); 
	var span1 = document.getElementById("span001");
	span1.innerHTML = freeword[item]
	span1.style.color= "red";
	span1.style.left = x+"px";
	span1.style.top = y+"px";
	span1.style.cssText='width:20px;height:20px;border:solid 1px red;';
	span1.style.cssText='position:absolute;left:30%;top:25%;text-align:center';
	/*setTimeout(span001.innerHTML ="freeword[item]",3000);
	setTimeout(span001.innerHTML = "",100);*/
	item+=1;
	if(item===12)item=0;
	return false;
}