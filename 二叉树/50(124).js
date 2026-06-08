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

    const maxNum = (node) => {
        if (!node) {
            return 0
        }

        const maxNumOfLeft = Math.max(maxNum(node.left), 0)
        const maxNumOfRight = Math.max(maxNum(node.right), 0)

        res = Math.max(node.val + maxNumOfLeft + maxNumOfRight, res)

        return node.val + Math.max(maxNumOfLeft, maxNumOfRight)
    }

    maxNum(root)

    return res
};