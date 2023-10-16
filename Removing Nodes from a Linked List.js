function findPrevious(item) {
 var currNode = this.head;
 while (!(currNode.next == null) &&
 (currNode.next.element != item)) {
 currNode = currNode.next;
 }
 return currNode;
}
function remove(item) {
 var prevNode = this.findPrevious(item);
 if (!(prevNode.next == null)) {
 prevNode.next = prevNode.next.next;
 }
}