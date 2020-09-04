function onHover(){
	$(this).css('opacity',0);
}

function onAdd(){
	for(var i=0; i < 1000; i++){
		$(".wrapper").append('<div class="box"></div>');
	}
	$(".box").mouseover(onHover);
}

function onDel(){
	$(".wrapper").empty();
}


$("#btnAdd").click(onAdd);
$("#btnDel").click(onDel);



