/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // binary search over m rows to find the row to search in
    // binary search in the n length row to find the target
    // => O(logM + logN) = O(log(m*n))
    const [m, n] = [matrix.length, matrix[0].length]
    let [top, bottom] = [0, m - 1];
    let row = null;
    while (top <= bottom) {
        const curr = Math.floor((top + bottom) / 2)
        if (target < matrix[curr][0]) {
            bottom = curr - 1;
        } else if (target > matrix[curr][n - 1]) {
            top = curr + 1;
        } else {
            // curr is the row where target could be present
            row = matrix[curr];
            break;
        }
    }

    if (row === null) return false;
    let [l, r] = [0, n - 1]
    while (l <= r) {
        const curr = Math.floor((l + r) / 2)
        if (target < row[curr]) {
            r = curr - 1;
        } else if (target > row[curr]) {
            l = curr + 1;
        } else {
            return true;
        }
    }
    // if control reaches here, target not present
    return false
};