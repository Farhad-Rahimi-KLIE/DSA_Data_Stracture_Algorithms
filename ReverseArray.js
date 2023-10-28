let arr = [1,2,3];
let arr2 = reverseArray(arr);
console.log(arr2);
function reverseArray(arr){
 let arr2 = [];
 for(let i=arr.length-1; i>=0; i--){
  arr2.push(arr[i])
 }
 return arr2
}