
var RandomizedSet = function () {
    this.nums = []
    this.numsMap = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.numsMap.has(val)) {
        this.numsMap.set(val, this.nums.length)
        this.nums.push(val)
        return true
    } else {
        return false
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.numsMap.has(val)) {
        const removeIndex = this.numsMap.get(val)
        const lastVal = this.nums[this.nums.length - 1]

        this.nums[removeIndex] = lastVal
        this.numsMap.set(lastVal, removeIndex)

        this.nums.pop()
        this.numsMap.delete(val)

        return true
    } else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.nums[Math.floor(Math.random() * this.nums.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */