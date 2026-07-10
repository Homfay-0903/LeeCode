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
var isValidBST = function (root) {
    const dfs = (lower, node, upper) => {
        if (!node) {
            return true
        }

        if (node.val <= lower || node.val >= upper) {
            return false
        }

        if (!dfs(lower, node.left, node.val)) {
            return false
        }

        if (!dfs(node.val, node.right, upper)) {
            return false
        }

        return true
    }

    return dfs(-Infinity, root, Infinity)
};