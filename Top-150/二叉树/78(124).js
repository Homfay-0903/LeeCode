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
    let res = -Infinity

    const maxSum = (node) => {
        if (!node) {
            return 0
        }

        const maxSumofLeft = Math.max(maxSum(node.left), 0)
        const maxSumofRight = Math.max(maxSum(node.right), 0)

        res = Math.max(res, node.val + maxSumofLeft + maxSumofRight)

        return node.val + Math.max(maxSumofLeft, maxSumofRight)
    }

    maxSum(root)

    return res
};