//Переменная содержит в себе строку. Вывести строку в обратном порядке.
var str = "hello, darkness, my old friend"; 
for (let i=str.length - 1; i >= 0; i--) {
	console.log(str[i]);
}

//Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

var k = 6;
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
var n = 5;
var multipliers = [];

for (let i = 1; i <= value; i++){
	if (value%i==0 && multipliers.length<n){
		multipliers.push(i);
		console.log(i);
		}
	
}

/* v2
n = (n < multipliers.length) ? n : multipliers.length; 
console.log (n);
for (let i=0; i< n; i++) {
		console.log(multipliers[i])
	}

*/

/* v1
if (n < multipliers.length) {
	for (let i=0; i< n; i++) {
		console.log(multipliers[i])
	}
} else {                                             //учитываем случай, в котором число N делителей задано больше, чем их имеет заданное число
	for (let i=0; i< multipliers.length; i++) {
		console.log(multipliers[i])
	}
}*/

//Найти сумму цифр числа которые кратны двум
var m = 815276;
var sum = 0;
console.log(m); 

while (m/10 > 0)  {
	let mod = m%10;
	m = (m-mod)/10;
	if (mod%2==0){
	  sum += mod;	
	}
	
}
console.log("сумма четных цифр равна "+sum); 


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


