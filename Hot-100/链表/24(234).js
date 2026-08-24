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
    function reverse(node) {
        if (!node || !node.next) {
            return node
        }

        let preNode = null, curNode = node

        while (curNode) {
            const next = curNode.next
            curNode.next = preNode
            preNode = curNode
            curNode = next
        }

        return preNode
    }

    if (!head.next) {
        return true
    }

    let slow = head, fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let list1 = head, list2 = slow.next
    slow.next = null
    list2 = reverse(list2)

    while (list1 && list2) {
        if (list1.val !== list2.val) {
            return false
        }

        list1 = list1.next, list2 = list2.next
    }

    return true
};