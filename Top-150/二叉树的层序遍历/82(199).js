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
    const res = []

    if (!root) {
        return res
    }

    const nodeQueue = [root]

    while (nodeQueue.length) {
        const curNodeLength = nodeQueue.length

        for (let i = 0; i < curNodeLength; i++) {
            const curNode = nodeQueue.shift()

            if (i === curNodeLength - 1) {
                res.push(curNode)
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