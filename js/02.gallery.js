/* // 3번째 리스트 선태자
$(".list").eq(2);
$(".wrapper > .list:nth-child(3)");
$(".wrapper").children(".list:eq(2)");
$(".container").find(".list").eq(2);
$(".list", ".container").eq(2);

$(".list").click(function(){
	var a = $(this). index();
	console.log( a ); 
});

// length  = 배열 Array

console.log( $(".list").length());

$(".list").each(function(i){
	console.log(i);
}); */

/* 
함수 
function aa() {

} 

매서드
var Human = {
	sleep : function(){

	}
} */

// 메서드는 객체가 가지고 있는 함수, jqeury가 가지고 있는 모든 함수는 메서드
var titles = [ 
	'체리',
	'클와상',
	'와인',
	'스테이크',
	'연어구이',
	'샌드위치',
	'팝시클'
]; 

$(".list").find("img").click(function(){
	var src = $(this).attr("src"); // Getter 속성 값 가져옴
	var idx = $(this).parent().index();
	// $(".img-big").attr("src", src);  Setter  속성 값 넣어줌
	$(".img-big").stop().animate({"opacity":0},300,function(){
		$(this).attr("src",src).stop().animate({"opacity": 1}, 300)
	});
	$(".title").text(titles[idx]);
});
$(".list").eq(0).find("img").trigger("click");







