/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) {
        return null
    }

    let slow = head.next
    let fast = head.next.next
    let hasCycle = false

    while (fast && fast.next) {
        if (slow === fast) {
            hasCycle = true
            break
        }

        slow = slow.next
        fast = fast.next.next
    }

    if (!hasCycle) {
        return null
    }

    let flag = head

    while (flag !== slow) {
        flag = flag.next
        slow = slow.next
    }

    return flag
};