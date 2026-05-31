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
    if (!head.next) {
        return true
    }

    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    const reversedHalfList = reverse(slow.next)

    let p1 = head
    let p2 = reversedHalfList

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
    if (!head || !head.next) {
        return head
    }

    let preNode = null
    let curNode = head

    while (curNode) {
        const nextNode = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = nextNode
    }

    return preNode
}