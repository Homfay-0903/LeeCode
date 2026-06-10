/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = []

    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }

            left++
            right--
        }

        return true
    }

    const backTrack = (startIdx, path) => {
        if (startIdx === s.length) {
            res.push([...path])
            return
        }

        for (let i = startIdx; i < s.length; i++) {
            if (isPalindrome(startIdx, i)) {
                path.push(s.substring(startIdx, i + 1))
                backTrack(i + 1, path)
                path.pop()
            }
        }
    }

    backTrack(0, [])

    return res
};