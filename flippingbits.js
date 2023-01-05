const testNumber = 9;

function flippingBits(n) {
    const binaryNumber = n.toString(2).padStart(32, "0");
    let outputNumber = [...binaryNumber];
    for (let index = 0; index < 32; index++) {
        {outputNumber[index] === '1'? outputNumber[index] = '0': outputNumber[index] = '1'}
    }
    outputNumber = outputNumber.join("");
    outputNumber = parseInt(outputNumber, 2)
    return outputNumber;
}


flippingBits(testNumber);