/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    const num = []

    const dfs = (node) => {
        if (!node) {
            return
        }

        dfs(node.left)
        num.push(node.val)
        dfs(node.right)
    }

    dfs(root)

    let minDiff = Infinity

    for (let i = 1; i < num.length; i++) {
        const curMinDiff = num[i] - num[i - 1]
        minDiff = Math.min(minDiff, curMinDiff)
    }

    return minDiff
};