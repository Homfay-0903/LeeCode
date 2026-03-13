/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || !head.next || k === 1) {
        return head
    }

    const virtualNode = new ListNode(0)
    virtualNode.next = head
    let pre1 = virtualNode

    while (true) {
        let tail = pre1

        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return virtualNode.next
            }
        }

        let nextGroup = tail.next
        let startNode = pre1.next
        let curNode = startNode
        let pre2 = nextGroup
        /*
        let pre2 = tail.next
        let startNode = pre1.next
        let curNode = startNode 
        */

        for (let i = 0; i < k; i++) {
            const next = curNode.next
            curNode.next = pre2
            pre2 = curNode
            curNode = next
        }

        pre1.next = pre2
        pre1 = startNode
    }
};