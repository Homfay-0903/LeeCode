/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const virtualNode = new ListNode(null)
    let curNode = virtualNode
    let carry = 0

    while (l1 || l2 || carry) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        const curSum = x + y + carry

        const digInt = curSum % 10
        carry = Math.floor(curSum / 10)

        curNode.next = new ListNode(digInt)
        curNode = curNode.next

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    return virtualNode.next
};