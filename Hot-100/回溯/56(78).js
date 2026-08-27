/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    for (const num of nums) {
        const curResLen = res.length

        for (let i = 0; i < curResLen; i++) {
            const curRes = [...res[i]]
            curRes.push(num)
            res.push(curRes)
        }
    }

    return res
};