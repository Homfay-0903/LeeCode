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
        return head
    }

    const nodeMap = new Map()
    let cur = head

    while (cur) {
        nodeMap.set(cur, new _Node(cur.val))
        cur = cur.next
    }

    cur = head

    while (cur) {
        const newNode = nodeMap.get(cur)
        newNode.next = cur.next ? nodeMap.get(cur.next) : null
        newNode.random = cur.random ? nodeMap.get(cur.random) : null
        cur = cur.next
    }

    return nodeMap.get(head)
};