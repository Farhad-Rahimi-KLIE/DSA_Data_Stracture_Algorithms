function findMax(arr){
 let max = arr[0];
 for(let i=0; i<arr.length; i++){
  if(arr[i]>max){
   max = arr[i]
  }
 }
 return max;
}
let arr = [-5,5,4,4,-7,-3,6,7];
let max = findMax(arr);
console.log(max)