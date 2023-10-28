let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = MergeArray(arr1,arr2);
console.log(arr);

function MergeArray(arr1,arr2){
 let ar = [];
 for(let el of arr1){
  ar.push(el);
 }
 for(let el of arr2){
  arr.push(el)
 }
 return ar;
}