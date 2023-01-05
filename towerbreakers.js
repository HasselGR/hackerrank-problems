const numberTowers = 2;
const heightTowers = 6;


const arraytest = [1, 5, 7, 9];


function towerBreakers(n, m) {
    if (n == 1){
        return 1;
    }
    if (m == 1){
        return 2;
    }
    
    return (n % 2 == 0 ) ? 2 : 1;
}


