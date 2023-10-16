// javascript algorithms 
function Positive(data,n){
 let min = data[0];
 for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
   if(data[j]<data[j+1]){
    let temp = data[j];
    data[j]=data[j+1];
    data[j+1]=temp;
    if(data[j]<min){
     min = data[i]
    }
   }
  } 
 }
 return min
}
let data = [2,3,6,8,7,-1,-10,15];
let n = data.length;
console.log(Positive(data,n))
