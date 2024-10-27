
var TimeMap = function () {

};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    const values = this[key]
    if (values) {
        values.push([value, timestamp])
    } else {
        this[key] = [[value, timestamp]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    // return a value such that timestamp_prev <= timestamp; if multiple values, qualify, return the value associated with largest timestamp
    const values = this[key];
    if (!values?.length) return "";
    // perform binary search to find the index of greatest timestamp_prev that is less than or equal to timestamp.
    let res = -1;
    let [l, r] = [0, values.length - 1];
    while (l <= r) {
        const i = Math.floor((l + r) / 2)
        const ithTimestamp = values[i][1]
        if (ithTimestamp > timestamp) {
            r = i - 1; // search left
        } else {
            res = Math.max(res, i);
            l = i + 1; // search right
        }
    }
    return res === -1 ? "" : values[res][0]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */