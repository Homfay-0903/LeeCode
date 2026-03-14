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
    if (!lists) {
        //return lists
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }

    return divide(lists, 0, lists.length - 1)
};

const divide = (list, left, right) => {
    if (left === right) {
        return list[left]
    }

    if (left > right) {
        return null
    }

    const mid = Math.floor((left + right) / 2)

    return mergeTwoLists(divide(list, left, mid), divide(list, mid + 1, right))
}

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