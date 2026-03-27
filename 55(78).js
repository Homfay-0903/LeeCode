/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    for (const num of nums) {
        const curSize = res.length

        for (let i = 0; i < curSize; i++) {
            const newArray = [...res[i]]
            newArray.push(num)
            res.push(newArray)
        }
    }

    return res
};