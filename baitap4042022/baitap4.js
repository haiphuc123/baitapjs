var x = 50
var y = 40

var sum = x + y


function checkNumber(sum){
    if(sum > 50 && sum < 80) {
        return 65;
    }
    else{
        return 80;
    }
}


console.log("ket qua :" +checkNumber(sum));