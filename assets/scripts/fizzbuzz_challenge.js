var countto = parseInt(prompt("What number shall we count to?"))

var fizzarray = function(number){
	array =  []
	for(var i = 1; i <= number; i++){
		array.push(i);
	}
	return array
}


var fizzbuzz = function(array){
	for (var i in array){
		if(i % 3 === 0 && i % 5 ===0){
			print("Fizzbuzz");
		}
		else if(i % 3 === 0){
			print("Fizz");
		}
		else if(i % 5 === 0){
			print("Buzz")
		}
		else{
			print(i);
		}
	}
}


var r = document.getElementById('result');

function print(s){
	r.innerHTML += s + '<br>';
}


fizzbuzz(fizzarray(countto))