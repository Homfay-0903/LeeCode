/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (!s) {
        return []
    }

    const results = []

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

    const backTrack = (start, path) => {
        if (start === s.length) {
            results.push([...path])
            return
        }

        for (let i = start; i < s.length; i++) {
            if (isPalindrome(start, i)) {
                path.push(s.slice(start, i + 1))
                backTrack(i + 1, path)
                path.pop()
            }
        }
    }

    backTrack(0, [])

    return results
};