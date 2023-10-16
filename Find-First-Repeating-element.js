// javascript algorithms 
function Repeating(data){
 let find = 5;
 let arr = [];
 for(let i=0; i<data.length; i++){
  if(data[i]==find){
   arr.push(data[i])
  }
 }
 return arr;
}
let data = [10,5,3,4,5,77,10,6];
let result = Repeating(data);
console.log(result)
