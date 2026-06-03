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
var sortList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    const leftList = head
    const rightList = slow.next
    slow.next = null

    const leftSort = sortList(leftList)
    const rightSort = sortList(rightList)

    return mergeTwoList(leftSort, rightSort)
};

var mergeTwoList = function (l1, l2) {
    const virtualNode = new ListNode(null)
    let curNode = virtualNode

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curNode.next = l1
            l1 = l1.next
        } else {
            curNode.next = l2
            l2 = l2.next
        }

        curNode = curNode.next
    }

    curNode.next = l1 ? l1 : l2

    return virtualNode.next
}