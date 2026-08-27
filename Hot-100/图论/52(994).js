/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let time = 0
    let fresh = 0
    const m = grid.length, n = grid[0].length
    const rotten = []
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++
            } else if (grid[i][j] === 2) {
                rotten.push([i, j])
            }
        }
    }

    while (fresh > 0 && rotten.length > 0) {
        const curRottenCount = rotten.length

        for (let i = 0; i < curRottenCount; i++) {
            const [x, y] = rotten.shift()

            for (const [dx, dy] of dirs) {
                const newX = x + dx, newY = y + dy

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
                    fresh--
                    grid[newX][newY] = 2
                    rotten.push([newX, newY])
                } else {
                    continue
                }
            }
        }

        time++
    }

    return fresh === 0 ? time : -1
};