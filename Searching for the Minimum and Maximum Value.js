// javascript algorithms 
function getMin() {
 var current = this.root;
 while (!(current.left == null)) {
 current = current.left;
 }
 return current.data;
}
