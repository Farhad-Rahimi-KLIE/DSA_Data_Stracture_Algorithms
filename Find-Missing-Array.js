// javascript algorithms 
let data = [1,2,3,4,5,67,8];
let position = 4;
let missing = 5;
for(let i=data.length-1; i>0; i--){
 if(i>=position){
  data[i+1]=data[i]
  if(data[i]==position){
   data[i]=missing;
   data.length = data.length-1;
  }
 }
}
console.log(data)
