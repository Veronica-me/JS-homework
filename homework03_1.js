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
	console.log (numberName[a]+ " - это способ решения задачи через объект")
}

function typeNumberNameV2 (a) {
    let arrayOfNumberNames = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];	
	console.log (arrayOfNumberNames[a]+ " - это способ решения задачи через массив")
}

//Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.

function showTypeOfNumber(k){
      if (k > 0) {
	    console.log("число является положительным")
        }
      else if (k < 0) {
	     console.log("число является отрицательным")
        }
      else if (k == 0) {
	     console.log("число является нулевым")
        }
      else {
	     console.log("k не является числом")
        }
}
showTypeOfNumber(-2);
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
	 
	 console.log(quantity+unit+" равно "+quantity*coeff+" байт");
}
unitToBytes(1, "MB")

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
	console.log(percentFeeTotal+" USD процентов за "+crLenght+" лет");
	console.log(feeTotal+" USD оплатит клиент за все время кредита");
}
creditCalculator(87000, 12, 4);

//v2 рекурсия
function creditCalculatorV2 (crBody, percent, crLenght) {
	
}




//Переменная содержит в себе строку. Вывести строку в обратном порядке.
function reversePlayback(str){
	for (let i=str.length - 1; i >= 0; i--) {
		console.log(str[i]);
	}
}
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
			console.log(i);
			}
	}
}

//v2 рекурсия+
var b = 1, x=0;
function showNMultipliersV2 (value, n) {
	if (value%b==0){
		console.log(b);
		x++;
		}
		b++;	
		if ((x < n) && (value/b >= 1)){
			showNMultipliersV2 (value, n)
		}	
}

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
	console.log("сумма четных цифр равна "+sum); 
}

//v2 рекурсия

function calcSumOfNumbersV2 (m){
	
}
function splitNumber(){}

//Найти минимальное число которое больше 300 и нацело делиться на 17
//изначально написано рекурсией+
function findMinValue (val,del) {
	if (val%del){
		val++;
		findMinValue (val,del);
	} else {
		console.log(val)
	}
}

//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.

function maxCommonFactor (val1, val2) {
	let mVal = (val1<val2) ? val1 : val2;
		for (let i = mVal; i>0; i--){
		    if ((val2%i) || (val1%i)) {
			}else {
				console.log(i+" это наибольший общий делитель");
				break;
			}	
	}
}

//v2 рекурсия+
function maxCommonFactorV2 (val1, val2) {
	let i = (val1<val2) ? val1 : val2;
	doMath (val1, val2, i);
	
}

function doMath (val1, val2, i){
	if ((val2%i) || (val1%i)) {
		i--;
		doMath(val1, val2, i)
	}else {
		console.log(i+" это наибольший общий делитель");
		
	}	
}