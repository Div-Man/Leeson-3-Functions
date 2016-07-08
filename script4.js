
//стрелочные функции, всегда анонимные

var sum = (source) => {  // если у функции 1 параметр,
						// то скобки можно вообще не писать
	var result = 0;

	for(var i = 0; i < source.length; i++){
		result = result + source[i];
	}

	return result;
}

var array = [1,2,3];
console.log(sum(array))



///////////////////////////////////////////////////////


var array = [2,3,4];

var array2 = array.map(function(number){
	return number * number;
})

console.log(array);
console.log(array2);


///////////////////////////////////////////////////


//то же самое, только с использованием стрелочных функций

var array = [2,3,4];

var array2 = array.map(number=>{
	return number * number;
})

console.log(array);
console.log(array2);






//можно даже не использовать return


var array = [2,3,4];

var array2 = array.map(number=>number * number)

console.log(array);
console.log(array2);

