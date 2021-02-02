// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i];
            if (i % 2 === 0) {
                let sortArr = arr.sort((a, b) => a - b);
                result.push(...sortArr);
            } else {
                let sortArr = arr.sort((a, b) => b - a);
                result.push(...sortArr);
            }
        }
    }

    return result;
};
