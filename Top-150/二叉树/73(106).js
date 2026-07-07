/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!postorder.length) {
        return null
    }
    if (postorder.length === 1) {
        return new TreeNode(postorder[0])
    }

    const root = new TreeNode(postorder[postorder.length - 1])
    const rootIndex = inorder.indexOf(postorder[postorder.length - 1])

    const leftInorder = inorder.slice(0, rootIndex)
    const leftPostOrder = postorder.slice(0, leftInorder.length)

    const rightInorder = inorder.slice(rootIndex + 1)
    const rightPostOrder = postorder.slice(leftInorder.length, postorder.length - 1)

    root.left = buildTree(leftInorder, leftPostOrder)
    root.right = buildTree(rightInorder, rightPostOrder)

    return root
};