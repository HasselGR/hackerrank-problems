var items = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];


function diagonalDifference(arr) {
    let diagonalOne = 0;
    let diagonalTwo = 0;
    let inverseX = 0;
    let inverseY = arr.length - 1;
    for (let index = 0; index < arr.length; index++) {
        diagonalOne = diagonalOne + arr[index][index];
        diagonalTwo = diagonalTwo + arr[inverseX][inverseY]
        inverseY--;
        inverseX++;
    }
    return Math.abs(diagonalOne - diagonalTwo);
}

diagonalDifference(items);