/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // On first pass check if all rows are valid
    // On second pass check if all columns are valid
    // On third pass check if all 9 sub-squares are valid
    let isValid = true;
    function checkValidity(seenNums, value) {
        const num = Number(value); // could be NaN if "."
        if (num >= 0 || num <= 9) {
            if (seenNums.has(num)) {
                isValid = false;
            } else {
                seenNums.add(num)
            }
        }
    }

    // rows and cols check
    for (let i = 0; i < board.length; i++) {
        const rowNums = new Set();
        const colNums = new Set();
        for (let j = 0; j < board.length; j++) {
            checkValidity(rowNums, board[i][j]);
            checkValidity(colNums, board[j][i]);
        }
    }
    // subSquare check
    function checkSubSquare(rowLimits, colLimits) {
        const [rStart, rEnd] = rowLimits;
        const [cStart, cEnd] = colLimits;
        const squareNums = new Set();
        for (let i = rStart; i <= rEnd; i++) {
            for (let j = cStart; j <= cEnd; j++) {
                checkValidity(squareNums, board[i][j])
            }
        }
    }

    for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
            checkSubSquare([k * 3, (k * 3) + 2], [l * 3, (l * 3) + 2])
        }
    }

    return isValid;
};