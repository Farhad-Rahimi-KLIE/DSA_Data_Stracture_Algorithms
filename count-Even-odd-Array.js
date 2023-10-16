function Even_Odd(data){
 let fast = "";
 for(let i=0; i<data.length; i++){
  if(i%2!=0){
   fast = i;
  }
 }
 return fast;
}
let data = [2,3,4,5,6];
console.log(Even_Odd(data))