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
var rightSideView = function (root) {
    if (!root) {
        return []
    }

    const res = []
    const nodeQueue = []

    nodeQueue.push(root)

    while (nodeQueue.length) {
        const curNodeQueueLength = nodeQueue.length

        for (let i = 0; i < curNodeQueueLength; i++) {
            const node = nodeQueue.shift()

            if (i === curNodeQueueLength - 1) {
                res.push(node.val)
            }

            if (node.left) {
                nodeQueue.push(node.left)
            }
            if (node.right) {
                nodeQueue.push(node.right)
            }
        }
    }

    return res
};