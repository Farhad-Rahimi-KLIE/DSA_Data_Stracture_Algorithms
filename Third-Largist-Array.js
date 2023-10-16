function thirdArray(data){
 let Tmax = data[0];
 for(let i=0; i<data.length; i++){
  if(data[i+4]>Tmax){
   Tmax = data[i]
  }
 }
 return Tmax;
}
let data = [1,14,2,16,10,20];
console.log(thirdArray(data))