//рекурсия
//это когда функция вызывает саму себя


/*

//так делать нельзя
function rec(){
	rec();
}

rec()

*/



/*

//Функция выводит все числа от какого то числа до нуля

function rec(number){
	console.log(number);
	number = number - 1;
	rec(number)

}

rec(10)




function rec(10){
	console.log(10);
	number = number - 1;
	function rec(9){
		console.log(9);
		number = number - 1;
		function rec(8){
			console.log(8);
			number = number - 1;
			rec(7)

			// и так далее
		}
	}
}

rec(10)



///////////////////////////////////////////////////




function rec(number){
	console.log(number);
	number = number - 1;


	//условие выхода

	if (number > 0){
		rec(number) // теперь функция вызывает сама себя
					// только при условии
	}
}

rec(10)



//////////////////////////////////////////////////////


// короткая запись


function rec(number){
	console.log(number--);
	
	if (number){  // все числа кроме 0 true
		rec(number) 
	}
}

rec(10)


*/





// тоже самое, только циклом

for (var i = 10; i > 0; i--){
	console.log(i)
}









