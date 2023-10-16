// javascript algorithms 
function put(key, data) {
 var pos = this.betterHash(key);
 if (this.table[pos] == undefined) {
 this.table[pos] = key;
 this.values[pos] = data;
 }
 else {
 while (this.table[pos] != undefined) {
 pos++;
 }
 this.table[pos] = key;
 this.values[pos] = data;
 }
}
