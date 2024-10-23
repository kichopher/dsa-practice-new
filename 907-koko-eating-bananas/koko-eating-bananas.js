/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // result could be anywhere between 1 and the max of piles
    let [l, r] = [1, Math.max(...piles)]
    let result = r; // result is r in the worst case

    const isValidK = (k) => {
        // k is valid every pile can be finished with speed k in h hours
        let hoursTaken = 0;
        piles.forEach(pile => {
            hoursTaken += Math.ceil(pile / k)
        })
        return hoursTaken <= h;
    }
    while (l <= r) {
        const k = Math.floor((l + r) / 2);
        if (isValidK(k)) {
            result = Math.min(result, k);
            r = k - 1;
        } else {
            l = k + 1;
        }
    }
    return result;
};