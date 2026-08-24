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

    let slow = head, fast = head
    let hasCycle = false

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            hasCycle = true
            break
        }
    }

    if (hasCycle) {
        let pointer = head

        while (pointer !== slow) {
            pointer = pointer.next
            slow = slow.next
        }

        return pointer
    } else {
        return null
    }
};