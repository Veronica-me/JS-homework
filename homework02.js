//Переменная содержит в себе строку. Вывести строку в обратном порядке.
var str = "hello, darkness, my old friend"; 
for (let i=str.length - 1; i >= 0; i--) {
	console.log(str[i]);
}

//Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

var k = 5;
var fctrl = 1;

function getFactorial (z) {   
	if (z > 0){
	   for (let i = 1; i <= z; i++){
		   fctrl = fctrl * i;
	    }
    } else if (z = 0){
		fctrl = 1;
	} else {
		fctrl = "факториал отрицательного числа не определен";
	}
	return(fctrl);
	
	}

console.log (getFactorial(k));

//Дано число - вывести первые N делителей этого числа нацело.

var value = 100;
var n = 6;
var multipliers = [];

for (let i = 1; i <= value; i++){
	if (value%i) {
		continue
	}else {
		multipliers.push(i);
	}
	
}

if (n < multipliers.length) {
	for (let i=0; i< n; i++) {
		console.log(multipliers[i])
	}
} else {                                             //учитываем случай, в котором число N делителей задано больше, чем их имеет заданное число
	for (let i=0; i< multipliers.length; i++) {
		console.log(multipliers[i])
	}
}

//Найти сумму цифр числа которые кратны двум


//Найти минимальное число которое больше 300 и нацело делиться на 17

function findMinValue (val,del) {
	if (val%del){
		val++;
		findMinValue (val,del);
	} else {
		console.log(val)
	}
}
findMinValue(300,17);  

//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.
let val1 = 20;
let val2 = 12;
let mVal = (val1<val2) ? val1 : val2;

for (let i = mVal; i>0; i--){
    if ((val2%i) || (val1%i)) {
	}else {
		console.log(i+" это наибольший общий делитель");
		break;
	}	
	
}


