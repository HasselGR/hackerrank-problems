const budget = 60;
const keyboards = [40, 50, 60];
const drives =[5, 8, 12];


function getMoneySpent(keyboards, drives, b) {
    const maxkey = Math.max(keyboards)
    const maxdrive = Math.max(drives)

    if (maxkey + maxdrive <= b){
        return keyboards + drives;
    } else {
        return -1
    }

}
