function insert(element, after) {
 var insertPos = this.find(after);
 if (insertPos > -1) {
 this.dataStore.splice(insertPos+1, 0, element);
 ++this.listSize;
 return true;
 }
 return false;
}