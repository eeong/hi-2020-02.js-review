
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
