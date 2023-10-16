// javascript algorithms 
function find(data) {
 var current = this.root;
 while (current.data != data) {
 if (data < current.data) {
 current = current.left;
 }
 else {
 current = current.right;
 }
 if (current == null) {
 return null;
 }
 }
 return current;
}
