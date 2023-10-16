function Smallest(data){
 let small = data[0];
 for(let i=0; i<data.length; i++){
  if(data[i]>small){
   small = data[i];
  }
 }
 return small
}
let data = [5,7,8,9,9,76,4,4,3,25];
let result =Smallest(data);
console.log(result)