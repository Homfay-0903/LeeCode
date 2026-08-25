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

    const map = new Map()
    let curNode = head

    while (curNode) {
        map.set(curNode, new _Node(curNode.val))
        curNode = curNode.next
    }

    curNode = head

    while (curNode) {
        const newList = map.get(curNode)
        newList.next = curNode.next ? map.get(curNode.next) : null
        newList.random = curNode.random ? map.get(curNode.random) : null
        curNode = curNode.next
    }

    return map.get(head)
};