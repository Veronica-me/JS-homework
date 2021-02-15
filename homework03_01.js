//Все скрипты которые писали в рамках первого и второго задания - оформить в виде функций
//задание 1

function typeNumberName (a) {
	let numberName = {
	0: "ноль",
	1: "один",
	2: "два",
	3: "три",
	4: "четыре",
	5: "пять",
	6: "шесть",
	7: "семь",
	8: "восемь",
	9: "девять"
	
};
	return numberName[a];
}

function typeNumberNameV2 (a) {
    let arrayOfNumberNames = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];	
	return arrayOfNumberNames[a];
}

//Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.

function showTypeOfNumber(k){
	  let str;
      if (k > 0) {
	    str = "число является положительным";
        }
      else if (k < 0) {
	    str = "число является отрицательным";
        }
      else if (k == 0) {
	    str = "число является нулевым";
        }
      else {
	    str = "k не является числом";
        }
	return str;
}
console.log(showTypeOfNumber(8));
//задание 3 (Byte, KB, MB, GB)

var coeff;
function unitToBytes (quantity, unit) { 
	switch (unit) {
	    case "Byte":
           coeff = 1;
		   break;
	    case "KB":
       		coeff = 1024; 
			break;
		case "MB":
       coeff = 1024*1024; 
			break;
		case "GB":
       coeff = 1024*1024*1024;
			break;	
	
		default:
    		console.log("некорректные данные")
     }
	 
//	 console.log(quantity+unit+" равно "+quantity*coeff+" байт");
	 return(quantity*coeff);
}

console.log("значение в байтах  "+unitToBytes(1, "MB"));
/*Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года
допускаем:
-что проценты пересчитываются раз в год на остаток по телу кредита;
-что тело кредита каждый год уменьшается на одинаковую часть
*/

function creditCalculator (crBody, percent, crLenght) {
	percentFeeTotal = 0;
	feeTotal = crBody;
	let crBodyInYear = crBody/crLenght;
	for (let i = 0; i < crLenght; i++){ 
		let percentFee = crBody*percent/100;
		let j = i + 1;
		console.log(percentFee+" USD процентов за "+j+"й год");
		crBody -= crBodyInYear;
		percentFeeTotal += percentFee;
	}

	feeTotal += percentFeeTotal;
//	console.log(percentFeeTotal+" USD процентов за "+crLenght+" лет");
//	console.log(feeTotal+" USD оплатит клиент за все время кредита");
	return feeTotal;
}


//v2 рекурсия+
function creditCalculatorV2 (crBody, percent, crLenght){
	let percentFeeTotal = 0;
	let feeTotal = crBody;
	let crBodyInYear = crBody/crLenght;
	calculatePercents(crBody);
	feeTotal += percentFeeTotal;
	console.log(feeTotal+" USD оплатит клиент за все время кредита");
	return feeTotal;
function calculatePercents(crBody){
	let percentFee = crBody*percent/100;
    crBody -= crBodyInYear;
	percentFeeTotal += percentFee;
	console.log(percentFee+" USD процентов за год");
	if (crBody > 0){
		calculatePercents(crBody);
	}
}
}




//Переменная содержит в себе строку. Вывести строку в обратном порядке.
function reversePlayback(str){
	let strRevers = "";
	for (let i=str.length - 1; i >= 0; i--) {
	    strRevers += str[i]
		//	console.log(str[i]);
	}
	return (strRevers);
}
console.log(reversePlayback("hello darkness, my old friends"));
//Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

function getFactorial (z) {   
	let factorial  = 1;
	if (z > 0){
	   for (let i = 1; i <= z; i++){
		   factorial  = factorial * i;
	    }
    } else if (z == 0){
		factorial = 1;
	} else {
		factorial = "факториал отрицательного числа не определен";
	}
	return(factorial);
}

//v2 рекурсия+

function getFactorialV2 (z) {   
	if (z > 0){
	  return z * getFactorialV2 (z-1)
	    
    } else if (z == 0){
		return 1;
	} else {
		return "факториал отрицательного числа не определен";
	}
	
}


//Дано число - вывести первые N делителей этого числа нацело.

function showNMultipliers (value, n) {
	let multipliers = [];
	for (let i = 1; i <= value; i++){
		if (value%i==0 && multipliers.length<n){
			multipliers.push(i);
		//	console.log(i);
			}
	}
	return multipliers;
}
console.log(showNMultipliers (100, 5));
//v2 рекурсия+
var b = 1, x=0, mult = [];
function showNMultipliersV2 (value, n) {
	if (value%b==0){
		mult.push(b);
		x++;
		}
		b++;	
		if ((x < n) && (value/b >= 1)){
			showNMultipliersV2 (value, n)
		}	
	return(mult)
}

console.log(showNMultipliersV2 (100, 5));

//Найти сумму цифр числа которые кратны двум

function calcSumOfNumbers (m){
	let sum = 0;
	while (m/10 > 0)  {
		let mod = m%10;
		m = (m-mod)/10;
		if (mod%2==0){
	  	sum += mod;	
		}
	}
	return sum; 
}

console.log("сумма четных цифр 65144859 равна "+calcSumOfNumbers (65144859));

//v2 рекурсия+
var sum = 0;
function calcSumOfNumbersV2 (m){
	let mod = m%10;
	m = (m-mod)/10;
	if (mod%2==0){
	sum += mod;	
	}
	if (m/10 > 0){
		calcSumOfNumbersV2 (m)
	}
	return sum;
}


//Найти минимальное число которое больше 300 и нацело делиться на 17
//изначально написано рекурсией+
function findMinValue (val,del) {
	if (val%del){
		val++;
		return findMinValue (val,del);
	} else {
		return val;
	}
	
}

console.log ("минимальное число  "+findMinValue (300, 17));

//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.

function maxCommonFactor (val1, val2) {
	let mVal = (val1<val2) ? val1 : val2;
		for (let i = mVal; i>0; i--){
		    if ((val2%i) || (val1%i)) {
			}else {
				console.log(i+" это наибольший общий делитель");
				return i;
				
			}	
	}
}
console.log( maxCommonFactor (120, 50));

//v2 рекурсия+
function maxCommonFactorV2 (val1, val2) {
	let i = (val1<val2) ? val1 : val2;
	return doMath (val1, val2, i);
	
}

function doMath (val1, val2, i){
	if ((val2%i) || (val1%i)) {
		i--;
		return doMath(val1, val2, i)
	}else {
		console.log(i+" это наибольший общий делитель");
		return i;
	}	
	
}

console.log (maxCommonFactorV2  (120, 50));