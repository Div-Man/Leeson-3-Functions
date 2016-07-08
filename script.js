/function sum(source){
	var result = 0;

	for (let i = 0; i < source.length; i++){
		result = result + source[i]
	}

	return result;
}

var array = [1,2,3];

sum(array)






///////////////////////////////////////////////////////////////




function sum(){
	var result = 0;

	for (let i = 0; i < arguments.length; i++){
		result = result + arguments[i]
	}

	return result;
}

var res = sum(1,3,4)

console.log(res)




/////////////////////////////////////////////////////////



function sum(){
	var result = 0;

	for (let i = 0; i < arguments.length; i++){
		result = result + arguments[i]
	}

	return result;
}

var sum2 = sum;
var res = sum2(1,3,4);

console.log(res)



//////////////////////////////////////////////////////////


// function expression

function filter(source){
	var result = [];

	for(var i = 0; i < source.length; i++){
		if(source[i] > 4){
			result.push(source[i])
		}
	}

	return result
}

var array = [1,2,3,4,5,6,7,8,9];
var res = filter(array);

console.log(res);




////////////////////////////////////////////////////////





//код функции, должен быть универсальным

function filter(source, greaterThan){
	var result = [];

	for(var i = 0; i < source.length; i++){
		if(source[i] > greaterThan){
			result.push(source[i])
		}
	}

	return result
}

var array = [1,2,3,4,5,6,7,8,9];

//теперь что бы каждый раз не лезть в код функции
//просто добавим параметр
var res = filter(array, 5);

console.log(res);






/////////////////////////////////////////////////////////////






function greaterThan4(value){
	return value > 4
}


var res = greaterThan4(10)

console.log(res)



////////////////////////////////////////////////////////////////




function filter(source, fn){ // функция фильтрации

	// в source передаётся массив
	// а в fn придёт функция, которую мы передали

	var result = [];

	for(var i = 0; i < source.length; i++){

		//вызываем функцию и передаём 
		//в качестве аргумента текущее число
		//если число будет true, то оно добавится в массив
		if(fn(source[i])){
			result.push(source[i])
		}
	}

	return result
}


function greaterThan4(value){
	return value > 4
}

var array = [1,100,2,3,4,5,6,7,8,9];
var res = filter(array, greaterThan4);

console.log(res);




