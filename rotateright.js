let arr = [1,2,3];
rotateLeft(arr);
console.log(arr);

function rotateLeft(arr){
 let first = arr.pop()
 arr.unshift(first)
}