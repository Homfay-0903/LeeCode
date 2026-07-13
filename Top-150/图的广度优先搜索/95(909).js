/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const n = board.length

    const getIndexInBoard = (square) => {
        const rowFromBottom = Math.floor((square - 1) / n)
        const row = n - 1 - rowFromBottom
        const colInRow = (square - 1) % n
        const col = rowFromBottom % 2 === 0 ? colInRow : n - 1 - colInRow

        return [row, col]
    }

    const queue = [[1, 0]]
    const target = n * n
    const visited = new Array(target + 1).fill(false)
    visited[1] = true

    while (queue.length) {
        const [curNum, moves] = queue.shift()

        for (let i = 1; i <= 6; i++) {
            let next = curNum + i

            if (next > target) {
                continue
            }

            const [r, c] = getIndexInBoard(next)
            if (board[r][c] !== -1) {
                next = board[r][c]
            }

            if (next === target) {
                return moves + 1
            }

            if (!visited[next]) {
                visited[next] = true
                queue.push([next, moves + 1])
            }
        }
    }

    return -1
};