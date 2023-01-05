const entry =  [1, 1, 0, -1,-1, 1, 5, 6];

function plusMinus (arr) {
    
    const ratioCollection = {
        positive: 0,
        negative:0,
        zero:0,
    }
    arr.forEach(element => {
        if (element > 0){
            ratioCollection.positive += 1;
        }
        if (element < 0){
            ratioCollection.negative += 1;
        }
        if (element === 0){
            ratioCollection.zero +=1;
        }
    })
    
    console.log((ratioCollection.positive / arr.length).toFixed(6));
    console.log((ratioCollection.negative / arr.length).toFixed(6));
    console.log((ratioCollection.zero / arr.length).toFixed(6));
}



plusMinus(entry);