/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const sLen = s.length
    const wordLen = words[0].length
    const wordCount = words.length
    const totalLen = wordLen * wordCount
    const res = []

    if (sLen < totalLen) {
        return res
    }

    const needObj = new Map()

    for (let i = 0; i < wordCount; i++) {
        const curWord = words[i]
        needObj.set(curWord, (needObj.get(curWord) || 0) + 1)
    }

    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset
        let right = offset
        let matched = 0

        const window = new Map()

        while (right + wordLen <= sLen) {
            const curWord = s.substring(right, right + wordLen)
            right += wordLen

            if (!needObj.has(curWord)) {
                window.clear()
                matched = 0
                left = right
                continue
            }

            window.set(curWord, (window.get(curWord) || 0) + 1)

            if (window.get(curWord) <= needObj.get(curWord)) {
                matched++
            }

            while (window.get(curWord) > needObj.get(curWord)) {
                const leftWord = s.substring(left, left + wordLen)
                window.set(leftWord, window.get(leftWord) - 1)

                if (window.get(leftWord) < needObj.get(leftWord)) {
                    matched--
                }

                left += wordLen
            }

            if (matched === wordCount) {
                res.push(left)

                const leftWord = s.substring(left, left + wordLen)
                window.set(leftWord, window.get(leftWord) - 1)

                if (window.get(leftWord) < needObj.get(leftWord)) {
                    matched--
                }

                left += wordLen
            }
        }
    }

    return res
};