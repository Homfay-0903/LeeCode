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

    function caculateMeter(node) {
        if (!node) {
            return 0
        }

        const leftMeter = caculateMeter(node.left)
        const rightMeter = caculateMeter(node.right)

        maxMeter = Math.max(maxMeter, leftMeter + rightMeter)

        return 1 + Math.max(leftMeter, rightMeter)
    }

    caculateMeter(root)

    return maxMeter
};