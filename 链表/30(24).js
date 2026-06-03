/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const virtualNode = new ListNode(null)
    let preNode = virtualNode
    virtualNode.next = head

    while (preNode.next && preNode.next.next) {
        const node1 = preNode.next
        const node2 = preNode.next.next

        preNode.next = node2
        node1.next = node2.next
        node2.next = node1
        preNode = node1
    }

    return virtualNode.next
};