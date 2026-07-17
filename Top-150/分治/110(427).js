/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
    const n = grid.length

    const isUniform = (rowStart, colStart, side) => {
        const blockVal = grid[rowStart][colStart]

        for (let i = rowStart; i < rowStart + side; i++) {
            for (let j = colStart; j < colStart + side; j++) {
                if (grid[i][j] !== blockVal) {
                    return false
                }
            }
        }

        return true
    }

    const bulidTree = (rowStart, colStart, side) => {
        if (isUniform(rowStart, colStart, side)) {
            return new _Node(grid[rowStart][colStart] === 1, true)
        }

        const half = side / 2
        const topLeft = bulidTree(rowStart, colStart, half)
        const topRight = bulidTree(rowStart, colStart + half, half)
        const bottomLeft = bulidTree(rowStart + half, colStart, half)
        const bottomRight = bulidTree(rowStart + half, colStart + half, half)

        const val = topLeft.val || topRight.val || bottomLeft.val || bottomRight.val
        const isLeaf = topLeft.isLeaf && topRight.isLeaf &&
            bottomLeft.isLeaf && bottomRight.isLeaf &&
            topLeft.val === topRight.val &&
            topLeft.val === bottomLeft.val &&
            topLeft.val === bottomRight.val

        if (isLeaf) {
            return new _Node(val, true)
        } else {
            return new _Node(val, false, topLeft, topRight, bottomLeft, bottomRight)
        }
    }

    return bulidTree(0, 0, n)
};