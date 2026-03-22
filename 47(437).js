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

    let prefixSum = new Map()
    prefixSum.set(0, 1)

    const dfs = (node, curSum) => {
        if (!node) {
            return 0
        }

        curSum += node.val

        let count = prefixSum.get(curSum - targetSum) || 0
        prefixSum.set(curSum, (prefixSum.get(curSum) || 0) + 1)

        count += dfs(node.left, curSum)
        count += dfs(node.right, curSum)

        prefixSum.set(curSum, prefixSum.get(curSum) - 1)

        return count
    }

    return dfs(root, 0)
};