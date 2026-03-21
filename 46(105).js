/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || preorder.length === 0) {
        return null
    }

    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)
    const rootIndexInInorder = inorder.indexOf(rootVal)

    const leftInorder = inorder.slice(0, rootIndexInInorder)
    const leftPreoder = preorder.slice(1, 1 + leftInorder.length)

    const rightInorder = inorder.slice(1 + rootIndexInInorder)
    const rightPreoder = preorder.slice(1 + leftInorder.length)

    root.left = buildTree(leftPreoder, leftInorder)
    root.right = buildTree(rightPreoder, rightInorder)

    return root
};