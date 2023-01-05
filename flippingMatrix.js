let matrix =[
[112, 42,83,119]
,[56,125,56,49]
,[15,78,101,43],
[62,98,114,108]];


function flippingMatrix(matrix) {
    // Write your code here
    console.log('matrix length', matrix.length);
    let lengthM = matrix.length -1;
    let halfM = matrix.length/2;
    let finalArr = []
    for(var i = 0 ; i<halfM; i++ ){
        for (var j =0; j< halfM; j ++){
            let a1 = matrix[i][j];
            console.log('a1 ', a1)
            let a2 = matrix[i][lengthM-j]
            console.log('a2 ', a2)
            let a3 = matrix[lengthM-i][j]
            console.log('a3 ', a3)
            let a4 = matrix[lengthM-i][lengthM-j]
            console.log('a4 ', a4)
            finalArr.push([a1,a2,a3,a4])
        }
    }
    let sum = 0;
    let result = finalArr.map((e)=>{
        console.log(e)
        let a = Math.max(...e)
        sum += a
    })
    console.log('sum', sum);
    return sum
}



flippingMatrix(matrix);