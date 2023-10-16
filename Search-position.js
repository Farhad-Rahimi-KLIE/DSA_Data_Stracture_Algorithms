function Search_Insert_Position(data){
 let position = 6;
 let index = undefined;
 for(let i=0; i<n; i++){
  if(data[i]==position){
   index = i;
  }
 }
 return index
}
let data = [1,3,5,6];
let n = data.length;
console.log(Search_Insert_Position(data))