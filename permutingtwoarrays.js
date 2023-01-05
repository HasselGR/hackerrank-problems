let A = [2, 1, 3];
let B = [7, 8, 9];
const k = 10;

function twoArrays(k, arrA, arrB) {
    arrA.sort(function (a, b) {
        return a - b;
    });
    arrB.sort(function (a, b) {
        return b - a;
      });

    for (let indexA = 0; indexA < arrA.length; indexA++) {
        if(arrA[indexA] +arrB[indexA] < k){
            return 'NO'
        }
    }
    return 'YES'
}

twoArrays(k, A, B);