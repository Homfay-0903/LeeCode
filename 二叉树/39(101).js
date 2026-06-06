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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return root === null ? true : check(root.left, root.right)
};

var check = function (leftNode, rightNode) {
    if (!leftNode && !rightNode) {
        return true
    }

    if (!leftNode || !rightNode) {
        return false
    }

    if (leftNode.val !== rightNode.val) {
        return false
    }

    return check(leftNode.left, rightNode.right) && check(leftNode.right, rightNode.left)
}