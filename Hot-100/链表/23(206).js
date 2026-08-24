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
var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let preNode = null, curNode = head

    while (curNode) {
        const next = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = next
    }

    return preNode
};