// javascript algorithms 
function inOrder(node) {
 if (!(node == null)) {
 inOrder(node.left);
 putstr(node.show() + " ");
 inOrder(node.right);
 }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
inOrder(nums.root);
