// javascript algorithms 
let data = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<data.length; i++){
 for(let j=0; j<data.length; j++){
  if(data[j]<data[j+1]){
   let temp = data[j];
   data[j]=data[j+1];
   data[j+1]=temp
  }
 }
}
console.log(data)
