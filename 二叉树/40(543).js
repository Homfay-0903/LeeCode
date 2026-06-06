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
var diameterOfBinaryTree = function (root) {
    let maxMeter = 0

    const caculateMeter = (node) => {
        if (!node) {
            return 0
        }

        const leftDepth = caculateMeter(node.left)
        const rightDepth = caculateMeter(node.right)

        maxMeter = Math.max(maxMeter, leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }

    caculateMeter(root)

    return maxMeter
};