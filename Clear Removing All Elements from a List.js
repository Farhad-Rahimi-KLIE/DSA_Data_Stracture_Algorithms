function clear() {
 delete this.dataStore;
 this.dataStore = [];
 this.listSize = this.pos = 0;
}