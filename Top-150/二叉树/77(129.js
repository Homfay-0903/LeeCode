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
var sumNumbers = function (root) {
    if (!root) {
        return 0
    }

    let total = 0

    const dfs = (node, curSum) => {
        curSum = curSum * 10 + node.val

        if (!node.left && !node.right) {
            total += curSum
            return
        }

        if (node.left) {
            dfs(node.left, curSum)
        }
        if (node.right) {
            dfs(node.right, curSum)
        }
    }

    dfs(root, 0)

    return total
};