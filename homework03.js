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

