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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const res = []

    if (!root) {
        return res
    }

    const LDR = (node) => {
        if (node.left) {
            LDR(node.left)
        }

        res.push(node)

        if (node.right) {
            LDR(node.right)
        }
    }

    LDR(root)

    return res
};