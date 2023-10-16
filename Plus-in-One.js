function PlusOne(data,n){
 let data2 = [];
 for(let i=0; i<n; i++){
  data2.push(data[i])
 }
 for(let i=0; i<data.length; i++){
  for(let j=0; j<data.length; j++){
   if(data[j]>data[j+1]){
    let temp = data[j];
    data[i]=data[j+1];
    data[j+1]=temp;
   }
  }
 }
 return data2+4
}
let data = [1,2,3];
let n = data.length;
console.log(PlusOne(data,n))