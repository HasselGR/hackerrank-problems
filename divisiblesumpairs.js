const array = [1, 2, 3, 4, 5, 6] //arr
const length = 6; //n
const number = 5; //k

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for (let index = 0; index < n; index++) {
        for (let jindex = index + 1; jindex < n; jindex++) {
            if ((ar[index] + ar[jindex]) % k == 0){
                pairs += 1
            }
        }
    }

     console.log(pairs);
}

divisibleSumPairs(length, number, array);