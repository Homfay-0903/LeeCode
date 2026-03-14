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

    let rightHead = slow.next
    slow.next = null
    let leftHead = head

    let leftList = sortList(leftHead)
    let rightList = sortList(rightHead)

    return mergeTwoLists(leftList, rightList)
};

const mergeTwoLists = (l1, l2) => {
    const virtualNode = new ListNode(0)
    let cur = virtualNode

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    cur.next = l1 ? l1 : l2

    return virtualNode.next
}