const start = 7; //Beginning of the house
const end = 10; //End of the House
const appleTree = 4; //Location of the apple tree
const orangeTree = 12; //Location of the orange tree
const apples = [2, 3, -4];
const oranges = [3, -2, -4];



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesPosition = apples.map(element => element + a);
    const orangesPosition = oranges.map(element => element + b);
    let  applesInTree =  0;
    applesPosition.forEach(element => {
        if (element >= s && element <= t){
            applesInTree +=1
        }
    })
    let orangesInTree = 0;
    orangesPosition.forEach(element => {
        if (element >= s && element <= t){
            orangesInTree +=1
        }
    })
    console.log(applesInTree);
    console.log(orangesInTree);
}

countApplesAndOranges(start, end, appleTree, orangeTree, apples, oranges)