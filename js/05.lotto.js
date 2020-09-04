
/* while문 사용
function onExtract() {
	while(numbers.length < 6) { 
		var numbers=[];
		number = Math.ceil(Math.random()*45);
		if (numbers.indexOf(number) == -1 )
		numbers.push(number); 
	}
	console.log(numbers);
}
 */

function onExtract(){
	$(".lotto-wrap").empty();
	var numbers= [];
	var selectedNumbers=[];
	var html = "", colorName;
	for (var i = 1; i <= 45; i++) numbers.push(i);
	numbers = _.shuffle(numbers);
	for(var i = 0; i<6; i++) selectedNumbers.push(numbers.pop());
	selectedNumbers = selectedNumbers.sort(function(a,b){
		return a-b;
	});
	for(var i in selectedNumbers) {
		if(selectedNumbers[i]<11){
			colorName = "yellow"
		} else if (selectedNumbers[i]<21){
			colorName = "cyan"
		} else if (selectedNumbers[i]<31){
			colorName = "red"
		} else if (selectedNumbers[i]<41){
			colorName = "grey"
		} else {
			colorName = "green"
		}
		html += '<div class="lotto '+colorName+' ">'+selectedNumbers[i]+'</div>';
	}
	$(".lotto-wrap").append(html);
	html = '<div> '+html+' </div>'
	$(".lotto-wrap2").append(html);
	
}


$("#btnExtract").click(onExtract);
