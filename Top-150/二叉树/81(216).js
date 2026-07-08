/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) {
        return root
    }

    const leftAncestor = lowestCommonAncestor(root.left, p, q)
    const rightAncestor = lowestCommonAncestor(root.right, p, q)

    if (!leftAncestor || !rightAncestor) {
        return leftAncestor ? leftAncestor : rightAncestor
    }

    return root
};