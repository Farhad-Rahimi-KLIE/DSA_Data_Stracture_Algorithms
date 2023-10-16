function Set() {
 this.dataStore = [];
 this.add = add;
 this.remove = remove;
 this.size = size;
 this.union = union;
 this.intersect = intersect;
 this.subset = subset;
 this.difference = difference;
 this.show = show;
}
Let’s look at the add() function first:
function add(data) {
 if (this.dataStore.indexOf(data) < 0) {
 this.dataStore.push(data);
 return true;
 }
 else {
 return false;
 }
}