function positive(data,n){
 let min = data[0];
 for(let i=0; i<n-2; i++){
  if(data[i]<min){
   min = data[i]
  }
 }
 return min
}
let data = [2,3,7,6,8,-1,15];
let n = data.length;
console.log(positive(data,n))