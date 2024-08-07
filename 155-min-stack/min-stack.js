
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    const minStackLen = this.minStack.length
    if (minStackLen === 0) {
        this.minStack.push(val);
    }
    else {
        this.minStack.push(Math.min(this.minStack[minStackLen - 1], val))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length === 0) return null;
    // else
    this.minStack.pop();
    const top = this.stack.pop();
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length === 0) return null;
    // else
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.stack.length === 0) return null;
    // else
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */