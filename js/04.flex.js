$(".food-wrap").find(".food").click(onFoodClick);
function onFoodClick(){
	$(".food-wrap").find(".food").css("order",2);
	$(this).css("order",1);
}

$("#reset").click(onResetClick);
function onResetClick(){
$(".food").each(function(i){
	var order = Math.ceil(Math.random()*8)-1;
	$(this).css("order", order);
});
}