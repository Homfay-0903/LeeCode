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
    if (!preorder.length) {
        return null
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }

    const root = new TreeNode(preorder[0])
    const rootIndex = inorder.indexOf(preorder[0])

    const leftPreorder = preorder.slice(1, 1 + rootIndex)
    const leftInorder = inorder.slice(0, rootIndex)

    const rightPreoder = preorder.slice(rootIndex + 1)
    const rightInorder = inorder.slice(rootIndex + 1)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreoder, rightInorder)

    return root
};