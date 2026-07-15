/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const root = {
        children: {},
        isEnd: false,
        word: ''
    }

    for (const word of words) {
        let curNode = root

        for (const char of word) {
            if (!curNode.children[char]) {
                curNode.children[char] = {
                    children: {},
                    isEnd: false
                }
            }

            curNode = curNode.children[char]
        }

        curNode.isEnd = true
        curNode.word = word
    }

    const res = []
    const m = board.length
    const n = board[0].length
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const dfs = (node, row, col) => {
        const char = board[row][col]
        const nextNode = node.children[char]

        if (!nextNode) {
            return
        }

        if (nextNode.isEnd) {
            res.push(nextNode.word)
            nextNode.isEnd = false
        }

        board[row][col] = '*'

        for (const [dx, dy] of dirs) {
            const newRow = row + dx
            const newCol = col + dy

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] !== '*') {
                dfs(nextNode, newRow, newCol)
            }
        }

        board[row][col] = char
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(root, i, j)
        }
    }

    return res
};