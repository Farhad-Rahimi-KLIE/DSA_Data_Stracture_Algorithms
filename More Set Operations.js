function contains(data) {
 if (this.dataStore.indexOf(data) > -1) {
 return true;
 }
 else {
 return false;
 }
}
Now we can define the union() function:
function union(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
 tempSet.add(this.dataStore[i]);
 }
 for (var i = 0; i < set.dataStore.length; ++i) {
 if (!tempSet.contains(set.dataStore[i])) {
 tempSet.dataStore.push(set.dataStore[i]);