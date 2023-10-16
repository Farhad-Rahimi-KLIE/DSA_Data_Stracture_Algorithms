// javascript algorithms 
function FindMinimum(data,n){
 let min = data[0];
 for(let i=0; i<n; i++){
  if(data[i]>min){
   min = data[i];
  }
 }
 return min
}
let data = [5,6,1,2,3,4];
let n = data.length;
console.log(FindMinimum(data,n))
