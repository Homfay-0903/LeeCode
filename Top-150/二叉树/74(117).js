/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) {
        return root
    }

    const nodeQueue = [root]

    while (nodeQueue.length) {
        let curLength = nodeQueue.length
        let preNode = null

        for (let i = 0; i < curLength; i++) {
            const curNode = nodeQueue.shift()

            if (preNode) {
                preNode.next = curNode
            }

            preNode = curNode

            if (curNode.left) {
                nodeQueue.push(curNode.left)
            }
            if (curNode.right) {
                nodeQueue.push(curNode.right)
            }
        }
    }

    return root
};