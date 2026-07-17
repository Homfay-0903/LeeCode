/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) {
        return null
    }

    if (lists.length === 1) {
        return lists[0]
    }

    return divide(0, lists.length - 1, lists)
};

var divide = function (left, right, lists) {
    if (left === right) {
        return lists[left]
    }

    const mid = Math.floor((left + right) / 2)
    const leftList = divide(left, mid, lists)
    const rightList = divide(mid + 1, right, lists)

    return mergeTwoLists(leftList, rightList)
}

var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode(0)
    let curNode = dummy

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

    return dummy.next
}