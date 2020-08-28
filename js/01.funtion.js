
$('#bt1').click(function(){
	$('#img1').stop().fadeOut(500);
});

$('#bt2').click(function(){
	$('#img1').stop().fadeIn(500);
});

$('#bt3').click(function(){
	$('#img1').stop().toggle();
});

$('#bt4').click(function(){
	$('#img1').stop().fadeToggle(1000);
});

$('#bt5').click(function(){
	$('#img1').stop().slideUp(500);
});

$('#bt6').click(function(){
	$('#img1').stop().slideDown(500);
});

$('#bt7').click(function(){
	$('#img1').stop().slideToggle(500);
});

/************** Vanila Script / ES5 *************/ 

document.getElementById('bt8');
document.querySelector('#img2');

console.log($("#bt8")[0]);
console.log($(document.getElementById('bt8')));

document.querySelector('#bt8').addEventListener("click", function(){
document.querySelector('#img2').style.display="none";
});


document.querySelector('#bt9').addEventListener("click", function(){
	document.querySelector('#img2').style.display="inline-block";
	});


	/*  변수, 함수, 배열, 객체 */
	//  변수 (variable)
	// var a = '?';
// primitive type  숫자 (Number) , 문자(String), 불린(Boolean), null, undefined
// reference type  배열(Array) , 객체(Object) 

var a;
console.log(a);

var a = 1;
console.log(a);
var a = '1';
console.log(a);
var a = true;
console.log(a);
var a = null;
console.log(a);

//false == 0 , "" , null, undefined

// 함수 (function)
console.clear();

// 함수 선언문 - Hoisting 
function b() {
console.log("B")
}
b();

// 함수 표현식
var c = function(){
	console.log("C")
	
}
c(); 

//  함수의 인자(Arguments)
































