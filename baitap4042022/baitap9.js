var arrayX = [10,20,56,17,90];

if(arrayX.length<1){
    console.log("Mang khong co phan tu");
} 
else{
    var arrayY = [];

    arrayY.push(arrayX[0],arrayX[arrayX.length - 1]);

    console.log(arrayY);
}