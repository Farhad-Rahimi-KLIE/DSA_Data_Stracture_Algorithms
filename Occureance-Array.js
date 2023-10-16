function Occur(data,n,x){
 let res = 0;
 for(let i=0; i<n; i++){
  if(x==data[i]){
   res++;
  }
 return res
}
let data = [1,2,2,2,2,3,4,5,6,6,6,7,8];
let n = data.length;
let x = 6;
console.log(Occur(data,n,x))