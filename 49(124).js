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
    if (!root) {
        return 0
    }

    let res = [-Infinity]

    const maxSum = (node) => {
        if (!node) {
            return 0
        }

        const leftMax = Math.max(maxSum(node.left), 0)
        const rightMax = Math.max(maxSum(node.right), 0)

        res[0] = Math.max(node.val + leftMax + rightMax, res[0])

        return node.val + Math.max(leftMax, rightMax)
    }

    maxSum(root)

    return res[0]
};