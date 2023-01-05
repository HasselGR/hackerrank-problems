const n = 20;
let arr = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]


function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort(function (a, b) {
        return a - b;
    });
    console.log(ar);
    for (let index = 0; index < n;) {
        
        if(ar[index] === ar[index+1]){
            pairs = pairs + 1;
            index= index+2;
        }else{
            index= index+1;
        }
        
    }
    console.log(pairs);
    return pairs; 
}

sockMerchant(n, arr);