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

    return divide(lists, 0, lists.length - 1)
};

var divide = function (listArray, left, right) {
    if (left === right) {
        return listArray[left]
    } else {
        const mid = Math.floor((left + right) / 2)

        return mergeTwoLists(divide(listArray, left, mid), divide(listArray, mid + 1, right))
    }
}

var mergeTwoLists = function (l1, l2) {
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