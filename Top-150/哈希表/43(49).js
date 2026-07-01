/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const strMap = new Map()

    for (const str of strs) {
        const key = str.split('').sort().join('')

        if (strMap.has(key)) {
            strMap.get(key).push(str)
        } else {
            strMap.set(key, [str])
        }
    }

    return Array.from(strMap.values())
};