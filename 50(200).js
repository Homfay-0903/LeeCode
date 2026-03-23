/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) {
        return 0
    }

    let isLandNum = 0
    const rowLength = grid.length
    const colLength = grid[0].length

    const dfs = (x, y) => {
        if (x < 0 || x >= rowLength || y < 0 || y >= colLength || grid[x][y] !== '1') {
            return
        }

        grid[x][y] = '0'

        dfs(x, y - 1)
        dfs(x, y + 1)
        dfs(x - 1, y)
        dfs(x + 1, y)
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === '1') {
                isLandNum++
                dfs(i, j)
            }
        }
    }

    return isLandNum
};