function remove(element) {
 var foundAt = this.find(element);
 if (foundAt > -1) {
 this.dataStore.splice(foundAt,1);
 --this.listSize;
 return true;
 }
 return false;
}