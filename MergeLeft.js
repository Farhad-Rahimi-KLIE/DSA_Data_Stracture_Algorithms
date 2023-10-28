let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr = MergeLeft(arr1,arr2);
console.log(arr);

function MergeLeft(arr1,arr2){
 let ar = [];
 for(let el of arr1){
  if(!arr2.includes(el)){
   ar.push(el);
  }
 }
 return ar;
}