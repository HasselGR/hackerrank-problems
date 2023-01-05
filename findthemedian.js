let arrTest = [5,4,3,2,1];

function findMedian(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[Math.floor((arr.length/2))];
}

findMedian(arrTest)