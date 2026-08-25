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
    const queue = [root]

    while (queue.length) {
        const curQueueLen = queue.length
        const curRes = []

        for (let i = 0; i < curQueueLen; i++) {
            const curNode = queue.shift()
            curRes.push(curNode.val)

            if (curNode.left) {
                queue.push(curNode.left)
            }
            if (curNode.right) {
                queue.push(curNode.right)
            }
        }

        res.push(curRes)
    }

    return res
};