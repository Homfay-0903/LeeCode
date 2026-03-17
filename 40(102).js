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
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        const curNode = []
        const cureQueueLength = queue.length

        for (let i = 0; i < cureQueueLength; i++) {
            const node = queue.shift()
            curNode.push(node.val)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        res.push(curNode)
    }

    return res
};