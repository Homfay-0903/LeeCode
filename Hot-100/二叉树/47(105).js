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
    if (preorder.length === 0) {
        return null
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }

    const rootVal = preorder[0]
    const rootIdx = inorder.indexOf(rootVal)
    const root = new TreeNode(rootVal)

    const leftPreorder = preorder.slice(1, 1 + rootIdx)
    const leftInorder = inorder.slice(0, rootIdx)

    const rightPreorder = preorder.slice(rootIdx + 1)
    const rightInorder = inorder.slice(rootIdx + 1)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
};