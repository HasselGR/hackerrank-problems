const scores = [12, 24, 10, 24]


function breakingRecords(scores) {
    let minimum = 0;
    let maximum = 0;
    let brokenMax = 0;
    let brokenMin = 0;
    scores.forEach((element, index) => {
        if (index == 0){
            minimum = element;
            maximum = element;
        }
        if (element > maximum){
            maximum = element;
            brokenMax += 1;
        }
        if (element < minimum){
            minimum =  element;
            brokenMin += 1;
        }
    });
    return [brokenMax, brokenMin];
}


breakingRecords(scores);