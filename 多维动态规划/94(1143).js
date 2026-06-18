/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const text1Len = text1.length
    const text2Len = text2.length
    const dp = new Array(text1Len + 1).fill(null).map(() => new Array(text2Len + 1).fill(0))


    for (let i = 1; i <= text1Len; i++) {
        for (let j = 1; j <= text2Len; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[text1Len][text2Len]
};