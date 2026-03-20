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
    const queue = []

    if (!root) {
        return res
    }

    queue.push(root)

    while (queue.length > 0) {
        const nodeSizeAtNow = queue.length

        for (let i = 0; i < nodeSizeAtNow; i++) {
            const node = queue.shift()

            if (i === nodeSizeAtNow - 1) {
                res.push(node.val)
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return res
};