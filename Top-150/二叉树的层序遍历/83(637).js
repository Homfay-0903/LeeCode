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
var averageOfLevels = function (root) {
    const res = []
    const nodeQueue = [root]

    while (nodeQueue.length) {
        const curRes = []
        const curNodeLength = nodeQueue.length

        let curNodeSum = 0
        let curNodeCount = 0

        for (let i = 0; i < curNodeLength; i++) {
            const curNode = nodeQueue.shift()

            curNodeSum += curNode.val
            curNodeCount++

            if (i === curNodeLength - 1) {
                res.push(curNodeSum / curNodeCount)
            }

            if (curNode.left) {
                nodeQueue.push(curNode.left)
            }
            if (curNode.right) {
                nodeQueue.push(curNode.right)
            }
        }
    }

    return res
};