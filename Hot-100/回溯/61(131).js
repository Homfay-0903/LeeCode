/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = []

    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }

            left++, right--
        }
        return true
    }

    function backTrack(pos, path) {
        if (pos === s.length) {
            res.push([...path])
            return
        }

        for (let i = pos; i < s.length; i++) {
            if (isPalindrome(pos, i)) {
                path.push(s.substring(pos, i + 1))
                backTrack(i + 1, path)
                path.pop()
            }
        }
    }

    backTrack(0, [])

    return res
};