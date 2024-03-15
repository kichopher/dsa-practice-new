/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s; // edge case

    const rows = new Array(numRows).fill("");
    let i = 0;
    let isZig = true; // when isZig is true traverse South. when isZig is false, traverse North-West
    for (const char of s) {
        rows[i] += char;
        // rows[i][j] = char;

        // determine next position based on zig/zag
        if (i === 0) { isZig = true }
        else if (i === numRows - 1) { isZig = false }

        if (isZig) {
            i++;
        } else {
            i--;
            // j++;
        }
    }
    /** Now combine */
    console.log(rows)
    return rows.filter(Boolean).join("");
}
