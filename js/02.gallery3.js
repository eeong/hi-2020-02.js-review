//전역변수 선언
var lists = [
	{src: "../img/cherries.jpg", title:"체리"},
	{src: "../img/croissant.jpg", title:"크로와상"},
	{src: "../img/wine.jpg", title:"와인"},
	{src: "../img/steak.jpg", title:"스테이크"},
	{src: "../img/sandwich.jpg", title:"샌드위치"},
	{src: "../img/salmon.jpg", title:"연어"},
	{src: "../img/popsicle.jpg", title:"팝시클"}

];

var html = "";

//초기 설정
//for( var i=0; i<lists.length(); i++){

for( var i in lists){
	html = "<li class='list m-2'>";
	html += "<img src='"+lists[i].src+"' class='w-100'>";
	html += "</li>";
	//$(".lists").append(html);
	$(html).appendTo(".lists").click(onListClick);
}
$(".list").eq(0).trigger("click");

//사용자 함수


//이벤트 콜백
function onListClick(){
	var i = $(this).index();
	$(".title").text(lists[i].title);
	$(".img-big").stop().animate({"opacity" : 0}, 200, function(){$(this).attr("src", lists[i].src).css("opacity",1);});
}

//이벤트 선언


