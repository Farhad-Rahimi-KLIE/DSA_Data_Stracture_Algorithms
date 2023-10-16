var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
 movieList.append(movies[i]);
}
function displayList(list) {
 for (list.front(); list.currPos() < list.length(); list.next()) {
 print(list.getElement());
 }