this.marked = [];
for (var i = 0; i < this.vertices; ++i) {
 this.marked[i] = false;
}
Now we can write the depth-first search function:
function dfs(v) {
 this.marked[v] = true;
 // if statement for print is not required
 if (this.adj[v] != undefined)
 print("Visited vertex: " + v);
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {
 this.dfs(w);
 }
 }
}