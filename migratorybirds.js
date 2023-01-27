/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const birds = [1, 1, 2, 2, 3]
function migratoryBirds(arr) {
    let birdsSorted =  arr.sort((a, b) => a - b);
    let count = 1
    let mostbirds = count;
    let frequentBird = 0;

    for (let index = 0; index < birdsSorted.length; index++) {
       if(birdsSorted[index] == birdsSorted[index+1]){
        count += 1;
       } else{
        if (count > mostbirds){
            console.log('changing birds')
            frequentBird = birdsSorted[index]
            mostbirds = count;
            count = 1
        }
       }
    }
    console.log(frequentBird)
    return frequentBird;
}


migratoryBirds(birds);