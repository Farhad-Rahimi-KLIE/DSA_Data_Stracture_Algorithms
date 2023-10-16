// javascript algorithms 
let data = [1,20,30,0,8,7,59,65,0,88];
for(let i=0; i<data.length; i++){
 for(let j=0; j<data.length; j++){
  if(data[j]>data[j+1]){
   let temp = data[j];
   data[j]=data[j+1];
   data[j+1]=temp;
  }
 }
}
console.log(data)
