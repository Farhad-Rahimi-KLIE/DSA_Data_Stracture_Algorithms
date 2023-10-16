// javascript algorithms 
// add this to Graph class
this.edgeTo = [];
// bfs function
function bfs(s) {
 var queue = [];
 this.marked[s] = true;
 queue.push(s); // add to back of queue
 while (queue.length > 0) {
 var v = queue.shift(); // remove from front of queue
 if (v == undefined) {
 print("Visited vertex: " + v);
 }
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {
 this.edgeTo[w] = v;
 this.marked[w] = true;
 queue.push(w);
 }
 }
 }
}
