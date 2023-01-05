let numberPages = 14;
let pageGoal = 10;


function pageCount(n, p) {
    let book = [];
    let totalturns = Infinity;
    let numberTurns = 0;
    for (let index = 1; index <= n;) {
        let pages =[];
        if (index === 1 || index === n){
            pages.push(index)
            index++;
        }else{
            pages.push(index, index+1);
            index = index+2
        }
        book.push(pages)
    }
    let counter = 0;
    let found = false;
    console.log(book);
    while(!found){
        if(book[counter].includes(p)){
            console.log('found going forward', book[counter])
            console.log(numberTurns);
            found = true;
        }else{
            counter++;
            numberTurns++;
        }
    }
    if(numberTurns < totalturns){
        totalturns = numberTurns;
    }
    numberTurns = 0;
    counter = book.length-1;
    found = !found ;
    while(!found){
        if(book[counter].includes(p)){
            console.log('found going back', book[counter])
            console.log(numberTurns);
            found = true;
        }else{
            counter--;
            numberTurns++;
        }
    }
    if(numberTurns < totalturns){
        totalturns = numberTurns;
    }
    console.log(totalturns);
    return totalturns;
}

pageCount(numberPages, pageGoal);