/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    for (const num of nums) {
        const curResLen = res.length

        for (let i = 0; i < curResLen; i++) {
            const newRes = [...res[i]]

            newRes.push(num)
            res.push(newRes)
        }
    }

    return res
};