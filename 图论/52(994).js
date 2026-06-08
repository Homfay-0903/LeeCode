/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let time = 0
    let fresh = 0

    const rowLen = grid.length
    const colLen = grid[0].length
    const rottenQueue = []
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === 1) {
                fresh++
            } else if (grid[i][j] === 2) {
                rottenQueue.push([i, j])
            }
        }
    }


    while (fresh && rottenQueue.length) {
        const curRottenSize = rottenQueue.length

        for (let i = 0; i < curRottenSize; i++) {
            const [curRottenFruitX, curRottenFruitY] = rottenQueue.shift()

            for (const [dx, dy] of dirs) {
                const newX = dx + curRottenFruitX
                const newY = dy + curRottenFruitY

                if (newX < 0 || newX >= rowLen || newY < 0 || newY >= colLen || grid[newX][newY] !== 1) {
                    continue
                }

                fresh--
                grid[newX][newY] = 2
                rottenQueue.push([newX, newY])
            }
        }

        time++
    }

    return fresh === 0 ? time : -1
};