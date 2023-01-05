const n = 15;

function fizzBuzz(n) {
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 && index % 5 === 0){
            console.log('FizzBuzz')
        }
        else if(index % 3 === 0){
            console.log('Fizz')
        }
        else if(index % 5 === 0){
            console.log('Buzz')
        }
        else{
            console.log(index)
        }
        
        
    }

}


fizzBuzz(n)