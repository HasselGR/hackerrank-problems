function birthdayCakeCandles(candles) {
    const maxnumber = Math.max(...candles);
    let count = 0;
    candles.forEach((element) =>{
        if (element == maxnumber){
            count +=1
        }
    })
    return count
}