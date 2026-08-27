/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let lands = 0
    const m = grid.length, n = grid[0].length

    function dfs(x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') {
            return
        }

        grid[x][y] = '0'
        dfs(x + 1, y), dfs(x - 1, y)
        dfs(x, y + 1), dfs(x, y - 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                lands++
                dfs(i, j)
            }
        }
    }

    return lands
};