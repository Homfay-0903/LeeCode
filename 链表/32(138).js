/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return null
    }

    const nodeMap = new Map()
    let curNode = head

    while (curNode) {
        nodeMap.set(curNode, new _Node(curNode.val))
        curNode = curNode.next
    }

    curNode = head

    while (curNode) {
        const newNodeList = nodeMap.get(curNode)
        newNodeList.next = curNode.next ? nodeMap.get(curNode.next) : null
        newNodeList.random = curNode.random ? nodeMap.get(curNode.random) : null

        curNode = curNode.next
    }

    return nodeMap.get(head)
};