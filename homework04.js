//Написать функцию которая генерирует массив случайных значений, таким образом что все элементы результирующего массива являются уникальными. 
//Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и отрицательными, и еще одним параметром количество значений которые нужно сгенерировать. 
//Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.

function getRandomArray (firstNumber, secondNumber, quantity){
  let randomArr = [];
  let maxValue = (firstNumber > secondNumber) ? firstNumber : secondNumber;
  let minValue = (firstNumber < secondNumber) ? firstNumber : secondNumber;
  if (maxValue - minValue + 1 >= quantity ){
    for (let i = 0; i< quantity; i++){
      let randomItem = getRandomInt(minValue, maxValue);
  //    console.log("цикл "+i+" число  "+randomItem);   
    
        if (i == 0){
        randomArr.push(randomItem);
        } else {
              
              let count = 0; 
              for (let j = 0; j < i; j++) {
                  
                  if (randomItem !== randomArr[j]){
                  count++;
                  }
                }
              if (count == i){
                 randomArr.push(randomItem);
              } else {
                quantity++;
              }
         }
     }
  } 
  return randomArr;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

let myRandmArray = getRandomArray (-10, 30, 10);
console.log(myRandmArray);
//Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений. 
//Найти процентное соотношение отрицательных, положительных и нулевых элементов массива.
function calcPercentsValues (arrElements){
  let objValues = {
                   positivValues: [],
                   negativValues: [],
                   nullValue: [], 
                   }
  for (let value of arrElements){
    if (value < 0 ){
      objValues.negativValues.push(value);
    }else if (value > 0){
      objValues.positivValues.push(value);
    }else if (value == 0) {
      objValues.nullValue.push(value)
    }
  
  }

  let objPercentage = {
  positivePercent : Math.round(objValues.positivValues.length / arrElements.length * 100) ,
  negativPercent : Math.round(objValues.negativValues.length / arrElements.length * 100),
  nullPercent : Math.round(objValues.nullValue.length / arrElements.length * 100),

  }

  return objPercentage;

}
calcPercentsValues(myRandmArray);
console.log (calcPercentsValues(myRandmArray));




//Задано предложение - подсчитать количество вхождений каждого слова в предложении. 

let textOfSong = "Come as you are as you were As I want you to be As a friend as a friend As an old enemy";
/*Come as you are, as you were
As I want you to be
As a friend, as a friend
As an old enemy */



let targetWord = "a"

function wordObject (world, entry) {
    this.world = world;
    this.entry = entry;
  }


function findEntry (targetWord, textOfSong){
  let targetHolder = targetWord;
  if (targetWord.length < 3){
      targetWord = targetWord + " ";
    
  }
  let position = 0;
  let entry = 0;
  while (true) {
    let positionOnString = textOfSong.indexOf(targetWord, position);
    
    if (positionOnString == -1) break;
        position = positionOnString + 1; // продолжаем со следующей позиции
        entry++;
  }

  let k = new wordObject(targetHolder, entry); 
  //console.log(k)
  return k;
}


console.log(findEntry(targetWord, textOfSong));

//Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось
let arrayOfEntry = [];
let splitedString = textOfSong.split(" ");

splitedString.forEach((item, index) => {
     for (i = index+1; i < splitedString.length; i++){
       if (splitedString[i] == item){
        splitedString.splice(i, 1)
       }
     } 

  })

  splitedString.forEach((item) => {
  //      console.log (item, index);
        arrayOfEntry.push(findEntry(item, textOfSong));
        return arrayOfEntry;
  })

console.log(arrayOfEntry);


//Написать рекурсивную функцию которая выводит абсолютно все элементы ассоциативного массива (объекта) - любого уровня вложенности

let dishesComp = 
  {
      id: 1,
    	title: "борщ",
    	gram: 350,
	    ingredients: 
		   {
			    potato: 20,
			    carrot: 10,         
			    peper: 2,
		    	sause:             
            {
              oil: 1,
              tomato: 15,
              }, 
        },
      "part of day": "morning",  
  }

function getAllElements(obj){
  for (let prop in obj) {
    if (typeof obj[prop] === 'object'){
      console.log("элементы объекта  "+ prop);
      getAllElements(obj[prop]);
    } else if (typeof obj[prop] !== 'object') {
    console.log("свойство " + prop + " = " + obj[prop]);
    }
    }
  
}

getAllElements(dishesComp);



