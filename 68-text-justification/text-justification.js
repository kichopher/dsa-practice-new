/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    /**Step 1: Create lines (additional spaces will be added in the next step) */
    const lines = [];
    let lineIndex = 0;
    let wordIndex = 0;
    while (wordIndex < words.length) {
        if (!lines[lineIndex]) lines[lineIndex] = "";
        const lineLengthAfterAddingNewWord = lines[lineIndex].length + words[wordIndex].length + (lines[lineIndex].length === 0 ? 0 : 1);
        if (lineLengthAfterAddingNewWord > maxWidth) {
            lineIndex++; continue;
        } else {
            lines[lineIndex] += (lines[lineIndex].length === 0 ? "" : " ") + words[wordIndex];
            wordIndex++;
        }
    }
    /**Step 2: Add required spaces to lines */
    const getSpaceStringGivenCount = (spaceCount = 0) => (new Array(spaceCount).fill(" ").join(""))
    const fullJustifiedLines = lines.map((line, index) => {
        const lineWords = line.split(" ");
        const gaps = lineWords.length - 1;
        if (index === lines.length - 1 || gaps === 0) {
            return (line + getSpaceStringGivenCount(maxWidth - line.length))
        }
        /** distribute spaces in gaps evenly */
        let spacesToInsert = maxWidth - (line.length - gaps);
        let unevenSpacesToInsert = spacesToInsert % gaps;
        const evenSpaceLength = Math.trunc(spacesToInsert / gaps);
        let newLine = "";
        lineWords.forEach((word, index) => {
            const unevenSpaceCountToUse = unevenSpacesToInsert > 0 ? 1 : 0;
            unevenSpacesToInsert -= unevenSpaceCountToUse;
            const spacesToSuffix = spacesToInsert ? evenSpaceLength + unevenSpaceCountToUse : 0;
            spacesToInsert -= spacesToSuffix;
            newLine += word + getSpaceStringGivenCount(spacesToSuffix);
        })
        return newLine;
    })
    return fullJustifiedLines
};