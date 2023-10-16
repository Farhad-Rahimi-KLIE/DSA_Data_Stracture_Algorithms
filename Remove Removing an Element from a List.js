function find(element) {
 for (var i = 0; i < this.dataStore.length; ++i) {
 if (this.dataStore[i] == element) {
 return i;
 }
 }
 return -1;
}