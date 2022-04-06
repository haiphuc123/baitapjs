
const array = [10, 200, 30, 40, 90, 20, 50]
const number = 100
const closestNumber = array.reduce((previousValue, currentValue) => {
    if (Math.abs(currentValue - number) < Math.abs(previousValue - number)) {
        return currentValue;
    }
    else {
        return previousValue;
    }
});

console.log(closestNumber);