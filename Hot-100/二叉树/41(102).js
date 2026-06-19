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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }

    const res = []
    const nodeQueue = []

    nodeQueue.push(root)

    while (nodeQueue.length) {
        const curNodeList = []
        const curNodeQueueLength = nodeQueue.length

        for (let i = 0; i < curNodeQueueLength; i++) {
            const curNode = nodeQueue.shift()
            curNodeList.push(curNode.val)

            if (curNode.left) {
                nodeQueue.push(curNode.left)
            }
            if (curNode.right) {
                nodeQueue.push(curNode.right)
            }
        }

        res.push(curNodeList)
    }

    return res
};