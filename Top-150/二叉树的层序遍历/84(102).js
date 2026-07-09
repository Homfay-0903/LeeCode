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
    const nodeQueue = [root]

    while (nodeQueue.length) {
        const curRes = []
        const curNodeLength = nodeQueue.length

        for (let i = 0; i < curNodeLength; i++) {
            const curNode = nodeQueue.shift()
            curRes.push(curNode.val)

            if (i === curNodeLength - 1) {
                res.push(curRes)
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