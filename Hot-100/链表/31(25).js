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
    const dummy = new ListNode(0)
    let preNode = dummy
    dummy.next = head

    while (true) {
        let tail = preNode

        for (let i = 0; i < k; i++) {
            tail = tail.next

            if (!tail) {
                return dummy.next
            }
        }

        let afterNode = tail.next
        let nextDummy = preNode.next
        let curNode = preNode.next

        for (let i = 0; i < k; i++) {
            const next = curNode.next
            curNode.next = afterNode
            afterNode = curNode
            curNode = next
        }

        preNode.next = afterNode
        preNode = nextDummy
    }
};