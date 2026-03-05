/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true
    }

    let slow = head
    let fast = head

    while (fast.next && fast.next.next) { //*** */
        slow = slow.next
        fast = fast.next.next
    }

    const reverseSecondHalf = reverse(slow.next)

    let p1 = head
    let p2 = reverseSecondHalf
    while (p1 && p2) {
        if (p1.val !== p2.val) {
            return false
        }

        p1 = p1.next
        p2 = p2.next
    }

    return true
};

const reverse = (head) => {
    let pre = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
}