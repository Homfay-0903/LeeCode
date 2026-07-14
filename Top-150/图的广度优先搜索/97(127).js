/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)

    if (!wordSet.has(endWord)) {
        return 0
    }

    const queue = [[beginWord, 1]]
    const visited = new Set([beginWord])

    while (queue.length) {
        const [curWord, steps] = queue.shift()

        if (curWord === endWord) {
            return steps
        }

        for (let i = 0; i < curWord.length; i++) {
            for (let j = 97; j <= 122; j++) {
                const newChar = String.fromCharCode(j)

                if (newChar === curWord[i]) {
                    continue
                }

                const nextWord = curWord.slice(0, i) + newChar + curWord.slice(i + 1)

                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord)
                    queue.push([nextWord, steps + 1])
                }
            }
        }
    }

    return 0
};