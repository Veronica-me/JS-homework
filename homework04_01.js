//Все предыдущий задания на циклы - написать с помощью циклов for in и/или for of

//Написать функцию, которая транспонирует матрицу
var matrixA = [[27, 33, 14],
               [28, 92, 44],
               [17, 35, 62],
               [66, 77, 88],
               [43, 16, 57],
            ];

for (value of matrixA) {
    console.log(value);
}

function transpMatrixV2 (matrix){
	let matrixT = [];
    let i=0; 
	
	for (let k = 0; k < matrix[0].length; k++) {
			matrixT[k] = [];	
			}
	
	for (row of matrix){     
    
        let j=0;
		for (elementOfRow of row){	   
			       		
			matrixT[j][i] = elementOfRow;
			j++;	
			}
        i++;    
	  }   

   return matrixT;
}

let matrixT2 = transpMatrixV2(matrixA);
for (value of matrixT2) {
    console.log(value);
}


//Написать функцию, которая умножает две матрицы

var matrix1 =  [ [27, 33, 14],
                 [28, 92, 44],
                 [17, 35, 62],
			    ]

var    matrix2 = [
                 [12, 14],
                 [22, 56],
                 [71, 32],
                ]
var	resMatrix = [];

function matrixMultiplyV2 (matrix1, matrix2){
    if (matrix1[0].length == matrix2.length){
		let i=0;
		for (row of matrix1) {
			resMatrix[i] = [];
			i++;
		}

		if (matrix1[0].length == matrix2.length){

			let j =0;
			for (rowM1 of matrix1){
				let cellResultMatrix = 0;
                                let k = 0;
				for (rowM2 of matrix2[j]){
					
					cellResultMatrix += rowM1[k]*rowM2;
					resMatrix[j][k] = cellResultMatrix;
					k++;
				    
				}

				
				j++	
			}
			
		}
        
		return resMatrix;
	} else return false;
  
}

console.log(matrixMultiplyV2 (matrix1, matrix2));


//Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)

  function findSumColums (array) {
	let sumsColumns = [];
    let i =0 ;
	for (value of  array[i]){
		    let sumElements = 0;
 		    for (elementOfColumn of array){
			  sumElements += elementOfColumn[i];
		    }
		sumsColumns[i] = sumElements;   
        i++;
	}
    return sumsColumns;
}

function findSumRows (array) {
	let sumsRow = [];
	let i = 0;
	for (value of  array){
		var sumElements = 0;
        for (elementOfRow of value){
			sumElements += elementOfRow;
		}
		sumsRow[i] = sumElements;   
		i++;
	}
    return sumsRow;
}

function findANumber(arrayOfSums) {
	let maxValue = arrayOfSums[0];
	let index = 0;
	let i = 0;
    
    for (value of arrayOfSums){
        if ( value > maxValue) {
			maxValue = value;
			index = i;
		}
		i++;
	}

	return index;
}


let summOfRows = findSumRows(matrixA); 
let indexRow =  findANumber(summOfRows);

let sumOfColumns = findSumColums(matrixA);
let indexColums =  findANumber(sumOfColumns);
  
 //Удалить из массива все столбцы которые не имеют ни одного нулевого элемента и сумма которых положительна 
 //- оформить в виде функции

let array = [ 
		[-7, 3, 8, 0, 7],
		[-2, 6, 11, 3, 2],
		[-5, 7, 3, 2, 9],
		[4, 0, 3, 9, 1],
		[1, 1, 1, 1, 1],
	   ];

function cutSelectedColumV2(array) {
	let i = 0;
	for (value of  array[i]){
		let count = 0;
		 for (rowElement of array){
			if (rowElement[i] !== 0){
				count++;
			}
		}
		if (count == array.length) {

            let sumElements = 0;
			for (rowElement of array){
				sumElements += rowElement[i];
			}
	            
     		if (sumElements>0) {
	    		for (rowElement of array){
		    		rowElement.splice(i, 1);
			    }
		    }   



		}
	
	     i++;
	}
	return array;
}

cutSelectedColumV2(array);
