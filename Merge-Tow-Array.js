function Merge(data1,data2,n){
 let data3 = [];
 for(let i=0; i<data1.length; i++){
  data3[i]=data1[i]
 }
 for(let i=0; i<data2.length; i++){
 data3[data1.length+i]=data2[i]
 }
 return data3;
}
let data1 = [1,2,3,4];
let data2 = [5,6,7,8,9];
console.log(Merge(data1,data2))