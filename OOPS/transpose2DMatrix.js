function transposeMatrix(matrix) {
    const row = matrix.length;
    const cols = matrix[0].length;

    const res= [];

    for(let i=0;i<cols;i++) {
        res[i] = []
        for(let j=0;j<row;j++) {
            res[i][j] = matrix[j][i]
        }
    }

    return res
    
}

console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

//[1,4,7]
//[2,5,8]
//[3,6,9]