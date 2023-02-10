const steps = 8;
const path = 'UDDDUDUU'


function countingValleys(steps, path) {
    let upward = 0;
    let valleys = 0;
    let direction = [];
    const pathArray = path.split('')
    for (let index = 0; index < steps; index++) {
        if (upward === 0){
            if (pathArray[index] === 'U'){
                upward = 1;
                
            }else{
                upward = -1;
            }
            direction.push(pathArray[index])
        }else{
            if(direction[direction.length-1] != pathArray[index]){
                direction.pop()
                
                if (upward == -1 && direction.length == 0){
                    valleys = valleys + 1;
                    upward = 0;
                } else if (upward == 1 && direction.length == 0){
                    upward = 0;
                }
            } else{
                direction.push(pathArray[index])
            }
        }
    }
    console.log(valleys)

}


countingValleys(steps, path);