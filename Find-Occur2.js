// javascript algorithms 
function Occur(data,n,x){
 let res = 0;
 let data1 = [];
 for(let i=0; i<n; i++){
  if(x==data[i]){
   data1.push(res++)
  }
 return data1
}
let data = [1,2,2,2,2,3,4,5,6,6,6,7,8];
let n = data.length;
let x = 6;
console.log(Occur(data,n,x))
