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
var maxPathSum = function (root) {
    let maxSum = -Infinity

    function dfs(node) {
        if (!node) {
            return 0
        }

        const leftPathSum = Math.max(dfs(node.left), 0)
        const rightPathSum = Math.max(dfs(node.right), 0)

        maxSum = Math.max(maxSum, leftPathSum + node.val + rightPathSum)

        return node.val + Math.max(leftPathSum, rightPathSum)
    }

    dfs(root)

    return maxSum
};