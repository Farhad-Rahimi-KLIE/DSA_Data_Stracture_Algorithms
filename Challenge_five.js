function sumArray(arr){
 let sum = 0;
 for(let i=0; i<arr.length; i++){
  sum+=arr[i]
 } 
 return sum
} 
let arr = [2,7,5,4,3,3,5,7];
let sum = sumArray(arr)
console.log(sum)