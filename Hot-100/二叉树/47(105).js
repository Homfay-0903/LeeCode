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

    const root = new TreeNode(preorder[0])
    const rootIndexOfInorder = inorder.indexOf(root.val)

    const preorderOfLeft = preorder.slice(1, 1 + rootIndexOfInorder)
    const inorderOfLeft = inorder.slice(0, rootIndexOfInorder)

    const preorderOfRight = preorder.slice(rootIndexOfInorder + 1)
    const inorderOfRight = preorder.slice(rootIndexOfInorder + 1)

    root.left = buildTree(preorderOfLeft, inorderOfLeft)
    root.right = buildTree(preorderOfRight, inorderOfRight)

    return root
};