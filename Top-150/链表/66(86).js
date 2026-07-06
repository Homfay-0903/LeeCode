/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const lessDummy = new ListNode(0)
    const greaterDummy = new ListNode(0)

    let lessTail = lessDummy
    let greaterTail = greaterDummy
    let curNode = head

    while (curNode) {
        if (curNode.val < x) {
            lessTail.next = curNode
            lessTail = lessTail.next
        } else {
            greaterTail.next = curNode
            greaterTail = greaterTail.next
        }

        curNode = curNode.next
    }

    lessTail.next = greaterDummy.next
    greaterTail.next = null

    return lessDummy.next
};