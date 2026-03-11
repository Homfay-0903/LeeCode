/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const virtualNode = new ListNode(0)
    virtualNode.next = head
    let fast = virtualNode
    let slow = virtualNode

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return virtualNode.next
};