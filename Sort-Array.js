let data = [9,7,6,6555,55,9,7665,213];
for(let i=0; i<data.length; i++){
 for(let j=0; j<data.length; j++){
  if(data[j]>data[j+1]){
   let temp = data[j];
   data[j]=data[j+1];
   data[j+1]=temp
  } 
 }
}
console.log(data)