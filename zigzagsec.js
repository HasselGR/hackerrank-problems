let arrzigzag = "[1,2,3,4,5,6,7]"


const findZigZagSequence = (arr) =>{
    const arrlength = arr.length
    let newArr = arr.sort(function (a, b) {
        return a - b;
    });
    const half = newArr.pop()
    let crescentArray = newArr.slice(0, arrlength/2)
    let decreArray = newArr.slice(arrlength/2, arrlength).sort(function (a, b) {
        return b - a;
    });
    let finalArray = [crescentArray, half, decreArray].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
    console.log(finalArray)
}

function processData(input) {
    let text = input.substring(input.lastIndexOf("\n")+1, input.length)
    let textArray = text.split(" ")
    let newArr = textArray.sort(function (a, b) {
        return a - b;
    });
    const half = newArr.pop() // 7
    let crescentArray = newArr.slice(0, (newArr.length/2))
    let decreArray = newArr.slice(newArr.length/2, newArr.length).sort(function (a, b) {
        return b - a;
    });
    
    let finalArray = [...crescentArray, half, ...decreArray];
    let final = finalArray.join(' ');
    console.log(final);
} 

function processData(input) {
    const [t, n, arr] = input.split('\n')
    const splittedArr =  arr.split(' ');
    console.log({t, n, arr, splittedArr})
} 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
findZigZagSequence(arrzigzag);