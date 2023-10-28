function getPositive(arr){
 let arr2 = [];
 for(let i=0; i<arr.length; i++){
  let el = arr[i];
  if(el>=i){
   arr2.push(el);
  } 
 }
 return arr2
}
let arr = [-5,5,4,4,-7,-3,6,7];
let ar = getPositive(arr);
console.log(ar)