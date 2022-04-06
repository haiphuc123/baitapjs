var arrayX = [5,9,8];
var arrayY = [2,6,4];
var arrayZ = [];

arrayX.pop();
arrayX.shift();

arrayY.pop(); 
arrayY.shift();

arrayZ.push(arrayX[0], arrayY[0]); 

console.log(arrayZ)