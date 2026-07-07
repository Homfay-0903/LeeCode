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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false
    }

    const dfs = (curNode, preSum) => {
        if (!curNode.left && !curNode.right) {
            return curNode.val + preSum === targetSum
        }

        if (curNode.left && dfs(curNode.left, curNode.val + preSum)) {
            return true
        }
        if (curNode.right && dfs(curNode.right, curNode.val + preSum)) {
            return true
        }

        return false
    }

    return dfs(root, 0)
};