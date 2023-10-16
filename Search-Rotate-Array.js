function Search_Rotate_Array(data){
 let word = 1;
 for(let i=0; i<n; i++){
  if(data[i]==word){
   return true;
  }
 }
 return false;
}
let data = [2,5,6,0,0,1,2];
let n = data.length;
console.log(Search_Rotate_Array(data))