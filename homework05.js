//Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям. 
//Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,6,7,21]

let arrayOfArrays =  [1,2,4, [8,4,12], [13,29,11],[0,5,3,11],5,6,7,[3,8,21],3];

function mergearrayOfArrays (arrayOfArrays){
    let i = 0;
    let mixedArray = [];
    
    for (value of arrayOfArrays) {
        
         if (typeof value == 'object') {
         
             value.forEach((item) => {                 
                    mixedArray.push(item);                  
                })
            } else 
            mixedArray.push(value);
         i++;  

    }
        for (let j = 1; j < mixedArray.length; j++) {
            for (let k = j+1; k < mixedArray.length;){
                if (mixedArray[j] == mixedArray[k]) {
                    mixedArray.splice(k, 1);
                } else {
                    k++;
                }
            }  
        }
  
    return mixedArray;
}

let mergArr =  mergearrayOfArrays (arrayOfArrays);
console.log(mergArr);

//Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные

function inspectUniqueValuesArray (array){

    for (let i = 1; i < array.length; i++) {
        for (var j = i+1; j < array.length;){
            if (array[i] == array[j]) {
                return false
            } else {
                j++;
            }
        }  
    }
    return true;

}

//Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1, active: true},{name: “Ivan”, estimate: 3, course: 1, active: true},{name: “Ivan”, estimate: 2, course: 4, active: false},{name: “Ivan”, estimate: 5, course: 2, active: true}] - 
//заполнить его более большим количеством студентов. 
//Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые активны. 
//Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.

let students = [
    {name: "Ivan", estimate: 4, course: 1, active: true},
    {name: "Vasyl", estimate: 3, course: 1, active: true},
    {name: "Volodykyr", estimate: 2, course: 4, active: false},
    {name: "Petro", estimate: 5, course: 2, active: true},] ;


function Student (name, estimate, course, active) {
    this.name = name;
    this.estimate = estimate;
    this.course = course;
    this. active = active;
}

students.push(new Student("Alibaba", 2, 3, true));
students.push(new Student("Elvis", 3, 4, true));
students.push(new Student("Dmytro", 4, 3, false));
students.push(new Student("Alex", 4, 3, false));
students.push(new Student("Vasilisa", 5, 6, true));

function getCourseEstimate(arraySrudents){
    let objOfEstimates = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}    
    let quantityArr = [0, 0, 0, 0, 0];
    let sumArr = [0, 0, 0, 0, 0];

    arraySrudents.forEach((item) => {
        
        if (item.active){
            
            quantityArr[item.course - 1]++;
            sumArr[item.course - 1] += (item.estimate);

            objOfEstimates[item.course] = sumArr[item.course - 1] / quantityArr[item.course - 1]
              
         }
    })
    return objOfEstimates;
}

function studentsActivity (arrayStudents) {
    let objOfActivity = {}
    arrayStudents.forEach((item) => {
        objOfActivity[item.course] = {active:0, notActive: 0};
    })

    arrayStudents.forEach((item) => {
        
        if (item.active){
            objOfActivity[item.course].active++;           
         } else {
            objOfActivity[item.course].notActive++;
         }
    })

    return objOfActivity;
}

console.log(studentsActivity(students))