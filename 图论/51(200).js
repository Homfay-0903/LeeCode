/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0

    const rowLen = grid.length
    const colLen = grid[0].length

    const dfs = (x, y) => {
        if (x < 0 || x >= rowLen || y < 0 || y >= colLen || grid[x][y] === '0') {
            return
        }

        grid[x][y] = '0'

        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    }

    return res
};