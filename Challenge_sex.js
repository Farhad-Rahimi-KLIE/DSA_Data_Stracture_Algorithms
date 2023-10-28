function averageArray(arr){
 let n = arr.length;
 let sum = 0;
 for(let i=0; i<n; i++){
  sum +=arr[i] 
 }
 return sum/n;
}
let arr = [1,3,9,12,7,6];
let avg = averageArray(arr);
console.log(arr)