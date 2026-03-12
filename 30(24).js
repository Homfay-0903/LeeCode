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
var swapPairs = function (head) {
    const virtualNode = new ListNode(0)
    virtualNode.next = head
    let pre = virtualNode

    while (pre.next && pre.next.next) {
        const node1 = pre.next
        const node2 = pre.next.next

        pre.next = node2
        node1.next = node2.next
        node2.next = node1
        pre = node1
    }

    return virtualNode.next
};