// javascript algorithms 
function Remove(data){
 let best = 3;
 for(let i=0; i<n; i++){
  if(data[i]==best){
   data[i]=data[i+1];
  }
 }
 data.length = data.length-2;
 return data;
}
let data = [3,2,2,3];
let n = data.length;
console.log(Remove(data))
