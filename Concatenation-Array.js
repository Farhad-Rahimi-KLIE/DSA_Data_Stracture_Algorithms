// javascript algorithms 
function Concatenation(data){
 let data2 = [];
 for(let i=0; i<data.length; i++){
  data2.push(data[i]);
 }
 return data2.concat(1,2,1)
}
let data = [1,2,1];
console.log(Concatenation(data))
