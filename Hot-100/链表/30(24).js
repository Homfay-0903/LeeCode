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
    const dummy = new ListNode(0)
    let preNode = dummy
    dummy.next = head

    while (preNode.next && preNode.next.next) {
        const node1 = preNode.next
        const node2 = preNode.next.next

        node1.next = node2.next
        node2.next = node1
        preNode.next = node2
        preNode = node1
    }

    return dummy.next
};