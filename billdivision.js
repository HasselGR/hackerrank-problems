const bill = [3, 10, 2, 9]
const k = 1 // the index of the item anna did not take
const b = 12 //money anna contributed to the bill


function bonAppetit(bill, k, b) {
    let total = bill.reduce (( accumulator, currentValue) => accumulator + currentValue, 0) - bill[k]
    if ((total / 2) == b){
        console.log('Bon Appetit')
    }else{
        console.log(b - (total/2))
    }
}


bonAppetit(bill, k, b)