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
    const queue = [root]

    while (queue.length) {
        const curQueueLen = queue.length

        for (let i = 0; i < curQueueLen; i++) {
            const curNode = queue.shift()

            if (i === curQueueLen - 1) {
                res.push(curNode.val)
            }

            if (curNode.left) {
                queue.push(curNode.left)
            }
            if (curNode.right) {
                queue.push(curNode.right)
            }
        }
    }

    return res
};