
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arrayWithOutMatrix = [];
    for (let i in matrix) {
        i % 2 !== 1
            ? arrayWithOutMatrix.push(...matrix[i])
            :arrayWithOutMatrix.push(...matrix[i].reverse());
    }
    return arrayWithOutMatrix;
}

