const slice = [2, 2, 1, 3, 2];
const day = 4;
const month = 2;

//Lily decides to share a contiguous segment of the bar selected such that:

//The length of the segment matches Ron's birth month, and,
//The sum of the integers on the squares is equal to his birth day.

function birthday(s, d, m) {
    let counter = 0;
    let dayCount = 0;
    for (let indexSlice = 0; indexSlice < s.length; indexSlice++) {
        const arraySlice = s.slice(indexSlice, indexSlice+m);
        dayCount= arraySlice.reduce((previousValue, currentValue) => previousValue+currentValue, dayCount)
        if (dayCount === d){
            counter++;
        }
        dayCount = 0;
        
    }
    return counter;

}

birthday(slice, day, month);