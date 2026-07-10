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
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }

    let flag = 0

    const res = []
    const nodeList = [root]

    while (nodeList.length) {
        const curNodeList = []
        const curNodeListLen = nodeList.length

        for (let i = 0; i < curNodeListLen; i++) {
            const curNode = nodeList.shift()
            curNodeList.push(curNode.val)

            if (i === curNodeListLen - 1) {
                if (flag === 0) {
                    res.push(curNodeList)
                    flag = 1
                } else {
                    res.push(curNodeList.reverse())
                    flag = 0
                }
            }

            if (curNode.left) {
                nodeList.push(curNode.left)
            }
            if (curNode.right) {
                nodeList.push(curNode.right)
            }
        }
    }

    return res
};