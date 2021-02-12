//Написать функцию, которая транспонирует матрицу
var matrixA = [[27, 33, 14],
               [28, 92, 44],
			   [17, 35, 62],
			   [66, 77, 88],
			   [43, 16, 57],
			];
var matrixT = [];

for (let i= 0; i < matrixA.length; i++){
  console.log(matrixA[i]);
}
console.log("*********");

function transpMatrix (matrix){
	let rowVal = matrix.length;
	let colVal = matrix[0].length
  
	for (let i= 0; i < colVal; i++){
		matrixT[i] = [];
		for (let j= 0; j < rowVal; j++){
					
			matrixT[i][j] = matrix[j][i];
					
			}
	  }   

   return matrixT;
}
matrixT = transpMatrix (matrixA);

for (let i= 0; i < matrixT.length; i++){
  console.log(matrixT[i]);
}


//Написать функцию, которая умножает две матрицы

var matrix1 = [[27, 33, 14],
               [28, 92, 44],
			   [17, 35, 62],
			]

var    matrix2 = [
	        [12, 14],
		    [22, 56],
			[71, 32],
		 ]
var	resMatrix = [];

function matrixMultiply (m1, m2){
	let row1 = m1.length;
	let col1 = m1[0].length;
	let row2 = m2.length;
	let col2 = m2[0].length;
	//проверка на возможность умножения матриц
	for (let i=0; i< row1; i++) {
		
		resMatrix[i] = [];
	}
    if (col1 = row2 ) {
		console.log("УМНОЖЕНИЕ в цикл попали");
     
		for (let j = 0; j< col2; j++){
		
			for (let l = 0; l< row1; l++){
				var cellResultMatrix = 0;
		
				for (let k = 0; k < row2; k++){
					cellResultMatrix += m1[l][k]*m2[k][j];
					resMatrix[l][j] = cellResultMatrix;
				}
			}
		}	
		return resMatrix;  
	}     
	else return false;
          
    
}

resMatrix = matrixMultiply(matrix1, matrix2);
console.log(resMatrix);

//Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)

function findANumber(values) {
	let maxValue = values[0];
	let index = 0;
	for (let i = 1; i < values.length; i++){
		if (values[i]>maxValue) {
           maxValue = values[i];
		   index = i;
		}
	}
	return index;
}

function findSumRow (mas) {
	let sumsRow = [];
	for (let i = 0; i< mas.length; i++){
		var sumElements = 0;
        for (let j = 0; j < mas[i].length; j++){
			sumElements += mas[i][j];
		}
		sumsRow[i] = sumElements;   
	}
    return sumsRow;
}

function findSumCol (mas) {
	let sumsCol = [];
	for (let i = 0; i< mas[i].length; i++){
		var sumElements = 0;
        
		for (let j = 0; j < mas.length; j++){
			sumElements += mas[j][i];
		}
		sumsCol[i] = sumElements;   
	}
    return sumsCol;
}

 let m = findSumRow(matrixA);     //сумма элементов каждой строки
 let mm = findSumCol(matrixA);    //сумма элементов каждого столбца
  let z = findANumber(mm);         //находит индекс самого большего значения
 
 //Удалить из массива все столбцы которые не имеют ни одного нулевого элемента и сумма которых положительна 
 //- оформить в виде функции
let array = [ 
	        [-7, 3, 8, 0, 7],
            [-2, 6, 11, 3, 2],
			[-5, 7, 3, 2, 9],
			[4, 0, 3, 9, 1],
			[1, 1, 1, 1, 1],
           ];

function cutSelectedColum(arr) {
	for ( let j = 0; j < arr[0].length; j++) {
	    let count = 0;
		for (let i = 0; i< arr.length; i++){
			if (arr[i][j] !== 0){
				count++;
			}
		}

		if (count == arr.length) {
			
			let sumElements = 0;
			for (k = 0; k < arr.length; k++) {
				sumElements += arr[k][j];
			}
			
			if (sumElements>0) {
				for (h=0;  h< arr.length; h++){
				arr[h].splice(j,1);}
			}
		}
		
	}
   return arr;
}

console.log("*****");
for (let i= 0; i < array.length; i++){
	console.log(array[i]);
  }

let resArr = cutSelectedColum(array);

for (let i= 0; i < resArr.length; i++){
	console.log(resArr[i]);
  }
