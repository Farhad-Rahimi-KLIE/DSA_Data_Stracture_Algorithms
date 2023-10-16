function find(item) {
 var currNode = this.head;
 while (currNode.element != item) {
 currNode = currNode.next;
 }
 return currNode;
}