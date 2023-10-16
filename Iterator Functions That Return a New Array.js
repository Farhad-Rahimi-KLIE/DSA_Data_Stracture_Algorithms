// javascript algorithms 
function curve(grade) {
 return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades); // 82, 70, 86, 97, 88
