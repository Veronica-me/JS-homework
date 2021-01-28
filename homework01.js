//задание 1
var numberName = {
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

var arrayOfNumberNames = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];


function typeNumberName (a) {
	console.log (numberName[a]+ " - это способ решения задачи через объект")
}

function typeNumberNameV2 (a) {
	
	console.log (arrayOfNumberNames[a]+ " - это способ решения задачи через массив")
}

var n = 3;
typeNumberName(n);

typeNumberNameV2(n);

//задание 2

var k = "-5";

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

//задание 3 (Byte, KB, MB, GB)

var unit = "MB";
var quantity = 59;
var coeff;

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

//задание 4
/*
Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года

допускаем:
-что проценты пересчитываются раз в год на остаток по телу кредита;
-что тело кредита каждый год уменьшается на одинаковую часть
*/
var percent = 12;
var crBody = 87000;
var crLenght = 4;
var percentFee;
var percentFeeTotal = 0;
var feeTotal = crBody;
var crBodyInYear = crBody/crLenght;


for (let i = 0; i < crLenght; i++){ 
    percentFee = crBody*percent/100;
	let j = i + 1;
	console.log(percentFee+" USD процентов за "+j+"й год");
    console.log(crBody+" USD тело кредита в "+j+"й год");
	crBody -= crBodyInYear;
	percentFeeTotal += percentFee;
}
feeTotal += percentFeeTotal;
console.log(percentFeeTotal+" USD процентов за "+crLenght+" лет");
console.log(feeTotal+" USD оплатит клиент за все время кредита");
