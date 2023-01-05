const arr = [1,1,3,2,1]


function countingSort(arr) {
    let coincidences = 0;
    let coincidencesArray = [];
    for (let index = 0; index < 100; index++) {
        arr.forEach(element => {
            if (index === element){
                coincidences++;
            }
        });
        coincidencesArray.push(coincidences);
        coincidences = 0;
    }
    console.log(coincidencesArray);
    return coincidencesArray;
}

countingSort(arr);