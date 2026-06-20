/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b)
    const len = citations.length

    for (let i = 0; i < len; i++) {
        const curPaperCount = len - i
        const curCitation = citations[i]

        if (curCitation >= curPaperCount) {
            return curPaperCount
        }
    }

    return 0
};