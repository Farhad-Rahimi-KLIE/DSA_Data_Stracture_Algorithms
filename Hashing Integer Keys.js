// javascript algorithms 
function getRandomInt (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genStuData(arr) {
 for (var i = 0; i < arr.length; ++i) {
 var num = "";
 for (var j = 1; j <= 9; ++j) {
 num += Math.floor(Math.random() * 10);
 }
 num += getRandomInt(50, 100);
 arr[i] = num;
 }
}
