function remove(data) {
 root = removeNode(this.root, data);
}
function removeNode(node, data) {
 if (node == null) {
 return null;
 }
 if (data == node.data) {
 // node has no children
 if (node.left == null && node.right == null) {

return null;
 }
 // node has no left child
 if (node.left == null) {
 return node.right;
 }
 // node has no right child
 if (node.right == null) {
 return node.left;
 }
 // node has two children
 var tempNode = getSmallest(node.right);
 node.data = tempNode.data;
 node.right = removeNode(node.right, tempNode.data);
 return node;
 }
 else if (data < node.data) {
 node.left = removeNode(node.left, data);
 return node;
 }
 else {
 node.right = removeNode(node.right, data);
 return node;
 }
}