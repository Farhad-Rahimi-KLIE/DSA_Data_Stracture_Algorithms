// javascript algorithms 
function Sort_Colors(data){
 for(let i=0; i<n; i++){ 
  for(let j=0; j<n; j++){
   if(data[j]>data[j+1]){
    let temp = data[j];
    data[j] = data[j+1];
    data[j+1]=temp;
   }
  }
 }
 return data;
}
let data = [2,0,2,1,1,0];
let n = data.length;
console.log(Sort_Colors(data))
