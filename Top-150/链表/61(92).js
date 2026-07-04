/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(0)
    dummy.next = head

    let preNode = dummy

    for (let i = 0; i < left - 1; i++) {
        preNode = preNode.next
    }

    let curNode = preNode.next

    for (let i = 0; i < right - left; i++) {
        const next = curNode.next
        curNode.next = next.next
        next.next = preNode.next
        preNode.next = next
    }

    return dummy.next
};