function FindArrayIndex(data){
 let target = 3;
 let index = undefined;
 for(let i=0; i<data.length; i++){
  if(data[i]==target){
   index = i;
  }else{
   return-1;
  }
 }
 return index
}
let data = [-1,0,3,5,9,12];
console.log(FindArrayIndex(data))