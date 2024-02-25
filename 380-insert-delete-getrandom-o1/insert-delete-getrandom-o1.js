
var RandomizedSet = function () {
    this.valueIndexMap = new Map();
    this.values = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.valueIndexMap.has(val)) {
        // insert at the end
        const newLength = this.values.push(val);
        const lastIndex = newLength - 1;
        this.valueIndexMap.set(val, lastIndex);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.valueIndexMap.has(val)) {
        const indexOfValueToRemove = this.valueIndexMap.get(val);
        // remove from the end
        const lastIndex = this.values.length - 1;
        const lastValue = this.values[lastIndex];
        this.values[indexOfValueToRemove] = lastValue;
        this.valueIndexMap.set(lastValue, indexOfValueToRemove);
        this.values.pop();
        this.valueIndexMap.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */