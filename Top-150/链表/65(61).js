/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) {
        return head
    }

    let len = 1
    let oldTail = head

    while (oldTail.next) {
        len++
        oldTail = oldTail.next
    }

    k = k % len
    if (!k) {
        return head
    }

    let newTail = head
    for (let i = 0; i < len - k - 1; i++) {
        newTail = newTail.next
    }

    const newHead = newTail.next
    newTail.next = null
    oldTail.next = head

    return newHead
};