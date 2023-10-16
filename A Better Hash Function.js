// javascript Algorithms 
function HashTable() {
 this.table = new Array(137);
 this.simpleHash = simpleHash;
 this.betterHash = betterHash;
 this.showDistro = showDistro;
 this.put = put;
 //this.get = get;
}
function put(data) {
 var pos = this.betterHash(data);
 this.table[pos] = data;
}
function simpleHash(data) {
 var total = 0;
 for (var i = 0; i < data.length; ++i) {
 total += data.charCodeAt(i);
 }
 print("Hash value: " + data + " -> " + total);
 return total % this.table.length;
}
function showDistro() {
 var n = 0;
 for (var i = 0; i < this.table.length; ++i) {
 if (this.table[i] != undefined) {
 print(i + ": " + this.table[i]);
 }
 }
}
