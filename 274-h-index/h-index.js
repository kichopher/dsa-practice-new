/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    /** Approach 2: citations-Count-Map | O(n) time and O(n) space
     1) Create an array papers of size n + 1 to count the number of papers with citation i.
     2) If a paper has more than n citations, we count it as n.
     3) Iterate from n to 0 and keep a running sum total. The first i where total >= i is the h-index.
    */
    const n = citations.length;
    const citationsCountMapArray = new Array(n + 1).fill(0);

    for (const current of citations) {
        const effectiveCitationCount = current > n ? n : current;
        citationsCountMapArray[effectiveCitationCount] += 1;
    }

    let h = n; // max possible h
    let papersWithAtleastHCitations = citationsCountMapArray[h];
    while (h > papersWithAtleastHCitations) {
        h--;
        papersWithAtleastHCitations += citationsCountMapArray[h];
    }
    return h;
};
// var hIndex = function (citations) {
//     /** Approach 1: Sorting | O(NlogN) time and constant space
//     1) Sort array in descending order
//     2) Iterate over the sorted array. As long as the current citation is greater than or equal to the current index (1-indexed), continue the loop. The h-index is the last index that satisfied the condition.
//      */
//     let hIndex = 0;
//     citations.sort((a, b) => b - a);
//     for (let i = 0; i < citations.length; i++) {
//         if (citations[i] >= i + 1) {
//             hIndex = i + 1;
//         } else break;
//     }
//     return hIndex;
// };