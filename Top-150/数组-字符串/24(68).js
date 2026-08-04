/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const res = []
    const n = words.length

    let i = 0

    while (i < n) {
        const lineWords = []

        // pre line
        let lineCharsCount = 0

        while (i < n && lineCharsCount + words[i].length + lineWords.length <= maxWidth) {
            lineWords.push(words[i])
            lineCharsCount += words[i].length
            i++
        }

        let lineRes = ''
        let isEndLine = (i === n) ? true : false

        const lineWordsCount = lineWords.length

        if (isEndLine || lineWordsCount === 1) {
            lineRes = lineWords.join(' ')
            lineRes += ' '.repeat(maxWidth - lineRes.length)
        } else {
            const totalSpaces = maxWidth - lineCharsCount
            const basicSpaces = lineWordsCount - 1
            const originSpaces = Math.floor(totalSpaces / basicSpaces)
            const extraSpaces = totalSpaces % basicSpaces

            for (let j = 0; j < lineWordsCount - 1; j++) {
                lineRes += lineWords[j]
                lineRes += ' '.repeat(originSpaces + (j < extraSpaces ? 1 : 0))
            }

            lineRes += lineWords[lineWordsCount - 1]
        }

        res.push(lineRes)
    }

    return res
};