// javascript algorithms 
function BalancedBST(data,n){
 let data2 = [];
 for(let i=0; i<n; i++){
 data2.push(data[i])
 }
 for(let i=0; i<n; i++){
 if(data[i]<3){
  data2[i]=data[i]
 }
 if(data[i]>3){
  data2[i]=data[i]
 }
 }
 return data2;
 }
 let data = [1,2,3,4];
 let n = data.length;
 console.log(BalancedBST(data,n))
