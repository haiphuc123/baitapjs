var a = 10;

var b = 20;

var c = 30;

function check(char){
   switch(char){
        case '+':
            return (a+b===c)
        case '-':
            return (a-b===c)
        case '*':
            return (a*b===c)
        case '/':
            return (a/b===c)
   }
}

console.log("a+b=c => "+check('+'))
console.log("a-b=c => "+check('-'))
console.log("a*b=c => "+check('*'))
console.log("a/b=c => "+check('/'))