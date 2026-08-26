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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) {
        return 0
    }

    const prefixMap = new Map()
    prefixMap.set(0, 1)

    function dfs(node, curSum) {
        if (!node) {
            return 0
        }

        curSum += node.val

        let count = prefixMap.get(curSum - targetSum) || 0
        prefixMap.set(curSum, (prefixMap.get(curSum) || 0) + 1)
        count += dfs(node.left, curSum), count += dfs(node.right, curSum)
        prefixMap.set(curSum, prefixMap.get(curSum) - 1)

        return count
    }

    return dfs(root, 0)
};