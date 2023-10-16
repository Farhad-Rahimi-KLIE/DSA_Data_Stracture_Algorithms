function findArray(data){
 let target = 7;
 let start = data[0];
 let data2 = [];
 let end = data.length-1;
 for(let i=0: i<n; i++){
  if(data[i]===target){
   data2.push(i)
  }
 }
 return data2
}
let data = [5,7,7,8,8,10];
let n = data.length;
console.log(fimdArray(data))