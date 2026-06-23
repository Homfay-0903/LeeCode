/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const flag = strs[0]

    for (let i = 0; i < flag.length; i++) {
        const curChar = flag[i]

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== curChar) {
                return flag.substring(0, i)
            }
        }
    }

    return flag
};