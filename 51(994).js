/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    if (!grid.length) {
        return -1
    }

    const rowLength = grid.length
    const colLength = grid[0].length
    let fresh = 0
    let time = 0
    const queue = []
    const direction = [[0, -1], [0, 1], [-1, 0], [1, 0]]

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === 1) {
                fresh++
            } else if (grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }

    while (fresh && queue.length) {
        const curSize = queue.length

        for (let i = 0; i < curSize; i++) {
            const [x, y] = queue.shift()

            for (const [dx, dy] of direction) {
                const nx = x + dx
                const ny = y + dy

                if (nx >= 0 && nx < rowLength && ny >= 0 && ny < colLength && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2
                    queue.push([nx, ny])
                    fresh--
                }
            }
        }
        time++
    }

    return fresh === 0 ? time : -1
};