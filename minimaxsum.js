const collection = [1, 3, 5, 7 ,9];


function miniMaxSum(arr){
    let maxNum = 0;
    let minNum = 0;
    let sum = 0;


    for (let count = 0; count < 5; count++) {
        arr.forEach((element, index) => {
            if(index !== count){
                sum = sum + element;
            }
        })
        if (count === 0){
            maxNum = sum;
            minNum = sum;
        }
        else{
            if (maxNum < sum){
                maxNum = sum;
            }
            if (minNum > sum){
                minNum = sum;
            }
        }
        sum = 0;    
    }

    console.log(minNum, maxNum);
}


miniMaxSum(collection);